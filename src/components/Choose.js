import * as React from "react"
import main from "../images/choose-main.png"
import water from "../images/water.svg"
import airHeat from "../images/air-heat.svg"
import floorHeat from "../images/floor-heat.svg"
import fan from "../images/fan.svg"
import cond from "../images/ac-cond.svg"
import ChooseCardRight from "./ChooseCardRight"
import ChooseCardLeft from "./ChooseCardLeft"
export default function Choose(){
    return(<div>
        <div className="flex my-12 p-10 flex-col gap-6 w-full justify-center text-center">
            <h5 className="uppercase text-sm text-primary">Why choose us</h5>
            <h2 className="text-2xl lg:text-6xl font-bold">Transportation Services We Are Often Considered</h2>
        </div>

        <div className="flex flex-col md:flex-row gap-6 w-full">
            <div className="flex flex-col gap-6 items-center justify-between"> 
                <ChooseCardRight icon={water} text1={"Water"} text2={"Installation"} />
                <ChooseCardRight icon={airHeat} text1={"Ait Heating"} text2={"Installation"} />
                <ChooseCardRight icon={fan} text1={"Radiator"} text2={"Heating"} />
            </div>
            <img src={main} />
            <div className="flex flex-col gap-6 items-center justify-between"> 
                <ChooseCardLeft icon={water} text1={"Ceiling"} text2={"Installation"} />
                <ChooseCardLeft icon={cond} text1={"AC"} text2={"Conditioning"} />
                <ChooseCardLeft icon={floorHeat} text1={"Floor"} text2={"Heating"} />
            </div>
        </div>
    </div>)
}