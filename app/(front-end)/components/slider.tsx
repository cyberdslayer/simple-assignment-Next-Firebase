import Image from "next/image";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import ROCKET from "../../../public/rocket.png";
import AI from "../../../public/artificial-intelligence-chip.png";
import TELE from "../../../public/tele.png";
import ATOM from "../../../public/atom.png";
// import '../../global.css'

export default function Slider() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12">
      <div className="flex items-center justify-between mb-6 md:mb-8">
        <h2 className="text-2xl md:text-3xl font-bold">Featured Products</h2>
        <div className="flex items-center space-x-2">
          <button className="p-2 rounded-md bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors">
            <ChevronLeftIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          </button>
          <button className="p-2 rounded-md bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors">
            <ChevronRightIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          </button>
        </div>
      </div>

      {/* carousel */}
      <div className="hidenScrollbar flex w-full overflow-x-scroll overflow-y-hidden gap-x-6">
        <div className=" border h-auto flex items-center flex-col w-full justify-between border-grey-500 bg-white rounded-lg  shadow-sm dark:bg-gray-950  min-w-96 ">
          <div className="flex flex-row justify-between item-center ">
            <Image alt="Product 1" className=" h-36 my-auto " src={ROCKET} />
            <div className="p-4">
              <h3 className="text-lg mb-1.5 font-semibold">Introduction to Rocket Science</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm w-full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                vehicula eu libero sed pulvinar. loreun feion drfeo dfsafdso de f dsf.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between w-full mt-2">
            <Button className="w-full border border-gray-400 rounded-md m-2 py-3">
              Add to Cart
            </Button>
          </div>
        </div>

        <div className=" border h-auto flex items-center flex-col w-full justify-between border-grey-500 bg-white rounded-lg  shadow-sm dark:bg-gray-950 min-w-96">
          <div className="flex flex-row justify-between item-center ">
              <Image alt="Product 1" className=" my-auto h-32  " src={AI} />
            <div className="p-4">
              <h3 className="text-lg mb-1.5 font-semibold">Artificial Intelligence</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm w-full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                vehicula eu libero sed pulvinar. loreun feion drfeo dfsafdso de f dsf.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between w-full mt-2">
            <Button className="w-full border border-gray-400 rounded-md m-2 py-3">
              Add to Cart
            </Button>
          </div>
        </div>

        <div className=" border h-auto flex items-center flex-col w-full justify-between border-grey-500 bg-white rounded-lg  shadow-sm dark:bg-gray-950 min-w-96">
          <div className="flex flex-row justify-between item-center ">
              <Image alt="Product 1" className=" my-auto h-32  " src={TELE} />
            <div className="p-4">
              <h3 className="text-lg mb-1.5 font-semibold">Astro Physics</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm w-full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                vehicula eu libero sed pulvinar. loreun feion drfeo dfsafdso de f dsf.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between w-full mt-2">
            <Button className="w-full border border-gray-400 rounded-md m-2 py-3">
              Add to Cart
            </Button>
          </div>
        </div>

        <div className=" border h-auto flex items-center flex-col w-full justify-between border-grey-500 bg-white rounded-lg  shadow-sm dark:bg-gray-950 min-w-96">
          <div className="flex flex-row justify-between pl-2.5 item-center ">
              <Image alt="Product 1" className="my-auto h-32" src={ATOM} />
            <div className="p-4">
              <h3 className="text-lg mb-1.5 font-semibold">Astro Physics</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm w-full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                vehicula eu libero sed pulvinar. loreun feion drfeo dfsafdso de f dsf.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between w-full mt-2">
            <Button className="w-full border border-gray-400 rounded-md m-2 py-3">
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ChevronLeftIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
