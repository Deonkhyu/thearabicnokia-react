"use client";
import React, { useState, useEffect } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import Header from "../components/header";
import Footer from "../components/footer";
import { Poppins } from "next/font/google";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ['400', '700'],
});

const DonationPage = () => {
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [donorName, setDonorName] = useState<string | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    "/Gallery Image 7.jpg",
    "/Gallery Image 6.jpg",
    "/Gallery Image 5.jpg",
    "/Gallery Image 4.jpg",
    "/Gallery Image 8.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handlePaymentSuccess = (details: any) => {
    setPaymentSuccess(true);
    setDonorName(details.payer.name.given_name);
  };

  return (
    <PayPalScriptProvider
      options={{
        clientId:
          "AY6WjiUAuH7t5w6eVXPy24z4obtxWwn_BzNngwKfOApaQ7s3jhEQp7TwO9wj9kSgaotWXxtArgU4fhA9",
      }}
    >
      <div className="flex flex-col min-h-screen">
        <Header />
      
      <div className={poppins.className}>
        {paymentSuccess ? (
          <div className="flex flex-col justify-center items-center text-white bg-gray-700 min-h-screen text-2xl font-bold text-center shadow-lg px-10 py-16">
            <h2>Thank You, {donorName}!</h2>
            <p>Your generous donation has been received successfully. We truly appreciate your support!</p>
          </div>
        ) : (
          <>
            <div className="flex flex-wrap lg:flex-nowrap justify-between p-5 bg-slate-100 border border-gray-300 shadow-md grow">
              <div className="flex-1 mr-2 text-center md:flex flex-col justify-center hidden">
                <div
                  className="relative overflow-hidden rounded-lg bg-cover bg-center flex-1"
                  style={{ backgroundImage: `url(${images[currentSlide]})` }}
                >
                  <img
                    src={images[currentSlide]}
                    alt="Donation Cause"
                    className="w-full h-full rounded-lg opacity-85 transition-opacity duration-1000"
                  />
                </div>
              </div>

              <div className="flex-1 p-5 flex flex-col items-center justify-center bg-white rounded-lg border border-gray-300 shadow-md">
			  	      <div className="mb-16 text-center text-lg text-green-700 leading-relaxed px-4">
                  <h2 className="text-xl font-bold text-green-700 mb-2">
                    Help Save Wildlife
                  </h2>
                  <p>Your donation helps protect endangered species and their habitats.</p>
                </div>

                <h3 className="text-2xl font-bold text-green-700 mb-5 text-center">
                  Support Our Cause
                </h3>

                <PayPalButtons
                  style={{ layout: "vertical", color: "gold", shape: "pill" }}
                  createOrder={(data, actions) => {
                    return actions.order.create({
                      intent: "CAPTURE",
                      purchase_units: [
                        {
                          amount: {
                            currency_code: "USD",
                            value: "0.05",
                          },
                        },
                      ],
                    });
                  }}
                  onApprove={(data, actions) => {
                    if (actions.order) {
                      return actions.order
                        .capture()
                        .then((details) => handlePaymentSuccess(details));
                    } else {
                      console.error("Order is undefined");
                      alert("Payment could not be processed. Please try again.");
                      return Promise.reject("Order is undefined");
                    }
                  }}
                  onError={(error) => {
                    console.error("Payment Error:", error);
                    alert(
                      "An error occurred during payment processing. Please try again."
                    );
                  }}
                />
              </div>
            </div>

            <div className="flex justify-center p-5 bg-slate-200 text-center text-lg text-green-700 shadow-md">
              <div className="flex flex-wrap justify-center items-center w-[700px]">
                <h3 className="text-xl font-bold mb-3">Why Your Donation Matters</h3>
                <p>
                  Donations go directly towards conservation efforts, helping fund
                  essential research, habitat restoration, and wildlife rescue
                  programs. With your support, we can create a sustainable future
                  for these incredible creatures.
                </p>
              </div>
            </div>
          </>
        )}

        </div>
        <Footer />
      </div>
    </PayPalScriptProvider>
  );
};

export default DonationPage;