from fastapi import FastAPI, File, UploadFile
from fastapi.responses import JSONResponse, FileResponse
from ultralytics import YOLO
from PIL import Image, ImageDraw
from io import BytesIO
import base64
import os
from fastapi.middleware.cors import CORSMiddleware

# Initialize the FastAPI app
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load YOLOv8 model
model_path = r"C:\Swinburne University\Year 2 Sem 2\Software Development\semenggoh-website\backend\best.pt"
model = YOLO(model_path)  # Load YOLOv8 model

# Define directories for saving images and results
UPLOAD_DIR = "uploads"
ANNOTATED_DIR = "annotated"
RESULTS_DIR = "results"

# Create directories if they don't exist
os.makedirs(UPLOAD_DIR, exist_ok=True)
os.makedirs(ANNOTATED_DIR, exist_ok=True)
os.makedirs(RESULTS_DIR, exist_ok=True)

@app.get("/")
async def root():
    return {"message": "YOLOv8 FastAPI is running!"}

@app.post("/predict/")
async def predict(file: UploadFile = File(...)):
    try:
        # Read uploaded image
        image_data = await file.read()
        image = Image.open(BytesIO(image_data)).convert("RGB")

        # Save the uploaded image
        image_filename = os.path.join(UPLOAD_DIR, file.filename)
        image.save(image_filename)

        # Run YOLOv8 prediction
        results = model.predict(source=image, save=False, imgsz=640)

        # Ensure results[0] is accessed since results is a list
        detections = []
        for box in results[0].boxes:
            xyxy = box.xyxy.tolist()[0]  # Bounding box coordinates
            conf = float(box.conf.tolist()[0])  # Confidence score
            cls = int(box.cls.tolist()[0])  # Class ID
            class_name = model.names[cls]  # Class name (from the model)

            detections.append({
                "box": xyxy,
                "score": conf,
                "class_id": cls,
                "class_name": class_name,
            })

        # Annotate the image (draw only bounding boxes)
        draw = ImageDraw.Draw(image)
        for detection in detections:
            box = detection["box"]
            draw.rectangle(box, outline="red", width=10)

        # Save the annotated image
        annotated_image_filename = os.path.join(ANNOTATED_DIR, f"annotated_{file.filename}")
        image.save(annotated_image_filename)

        # Save the detection results as a text file
        results_filename = os.path.join(RESULTS_DIR, f"results_{file.filename}.txt")
        with open(results_filename, "w") as f:
            for detection in detections:
                f.write(f"{detection}\n")

        return JSONResponse(content={
            "annotated_image_path": annotated_image_filename,  # Path to the annotated image
            "results_file_path": results_filename  # Path to the results file
        })

    except Exception as e:
        return JSONResponse(content={"error": str(e)}, status_code=500)

@app.get("/files/{file_path:path}")
async def get_file(file_path: str):
    return FileResponse(file_path)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)