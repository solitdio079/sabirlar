import * as React from "react";
import dock from "../images/about-d.jpg";
import { Link } from "gatsby";
import modal from "../images/modal.svg";
import water from "../images/water.svg"
import air from "../images/ac-cond.svg"
import cond from "../images/air-heat.svg"
export default function AboutCard() {
  return (
    <div className="my-12 p-10">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex flex-col gap-6">
          <img
            src={dock}
            className="rounded-3xl w-full relative before:content-['']
            before:absolute
            before:top-0
            before:right-0
            before:w-0
            before:h-0
            before:z-1
            before:border-l-[100px]
            before:translate-x-1
            before:rounded-none
            before:border-l-transparent
            before:border-b-[100px]
            before:border-b-white   "
          />

          <h1 className="text-3xl lg:text-6xl text-black">
            Digital & Trusted Transport Logistic Company
          </h1>

          <Link className="btn btn-primary max-w-60" to="#">
            Request Quote{" "}
            <span className="icon-[tabler--arrow-up-right]"></span>{" "}
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
            <Card title={"Years Of Experience"} icon={modal} numb={25} />
            <Card title={"Global Locations"} icon={water} bgColor="bg-primary/50" textColor={"text-white"} numb={88} />
            <Card title={"Total Employee"} icon={air} bgColor="bg-gray-900" textColor={"text-white"} numb={15} />
            <Card title={"Annual Revenue"} icon={cond} numb={"7.5 K"} />
          
        </div>
      </div>
    </div>
  );

}
function Card({numb, title,icon, bgColor="bg-gray-400/50", textColor}){
    return(<>
    <div
            className= {`${bgColor + " " + textColor} flex flex-col gap-6  max-h-90 rounded-3xl p-10 justify-between  relative before:content-['']
            before:absolute
            before:top-0
            before:right-0
            before:w-0
            before:h-0
            before:z-1
            before:border-l-[50px]
            before:translate-x-1
            before:rounded-none
            before:border-l-transparent
            before:border-t-[50px]
            before:border-t-white `}
          >
            <h6 className="text-lg font-semibold"> {title} </h6>
            <div className="flex justify-between items-center">
              <img src={icon} className="h-10" />
              <h1 className="text-6xl"> {numb} </h1>
            </div>
            <hr className="bg-gray-200" />
            <p>With over four decades of experience providing</p>
          </div>
    </>)
}
