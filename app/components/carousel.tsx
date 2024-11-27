import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

interface CarouselProps {
  activeItemIndex: number;
  setActiveItemIndex: React.Dispatch<React.SetStateAction<number>>;
  carouselData: { color: string; title: string; content: string }[];
}

const Carousel: React.FC<CarouselProps> = ({ activeItemIndex, setActiveItemIndex, carouselData }) => {
  return (
	<div className="flex items-center justify-center gap-2">
	  <button
		onClick={() => {
		  activeItemIndex !== 0 &&
			setActiveItemIndex((prevIndex) => prevIndex - 1);
		}}
		className="lg:w-[30px] lg:h-[30px] md:w-[24px] md:h-[24px] w-[18px] h-[18px] rounded-full grid place-items-center text-white bg-black bg-opacity-20 hover:bg-opacity-60 duration-200"
	  >
		<ArrowLeftIcon className="lg:w-[24px] lg:h-[24px] md:w-[18px] md:h-[18px] w-[12px] h-[12px]"/>
	  </button>
	  <div
		style={{ backgroundColor: carouselData[activeItemIndex].color }}
		className="lg:min-w-[600px] md:min-w-[400px] min-w-[300px] grid place-items-center rounded-lg h-72 duration-500 shadow-lg"
	  >
		<div className="lg:w-[400px] md:w-[300px] w-[250px]">
			<p className="font-bold text-xl lg:text-2xl drop-shadow-lg">{carouselData[activeItemIndex].title}</p>
			<p className="text-m lg:text-l drop-shadow-lg">{carouselData[activeItemIndex].content}</p>
		</div>
	  </div>
	  <button
		onClick={() => {
		  activeItemIndex !== carouselData.length - 1 &&
			setActiveItemIndex((prevIndex) => prevIndex + 1);
		}}
		className="lg:w-[30px] lg:h-[30px] md:w-[24px] md:h-[24px] w-[18px] h-[18px] rounded-full grid place-items-center text-white bg-black bg-opacity-20 hover:bg-opacity-60 duration-200"
	  >
		<ArrowRightIcon className="lg:w-[24px] lg:h-[24px] md:w-[18px] md:h-[18px] w-[12px] h-[12px]"/>
	  </button>
	</div>
  );
};

export default Carousel;