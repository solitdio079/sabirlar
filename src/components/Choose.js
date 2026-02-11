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
        <div className="flex my-12 p-10 flex-col gap-6 w-full max-w-screen justify-center text-center">
            <h5 className="uppercase text-sm text-primary">Neden Bizi Seçmelisiniz</h5>
            <h2 className="text-2xl lg:text-6xl font-bold">Sıkça Tercih Edilen Taşımacılık Hizmetlerimiz</h2>
        </div>

        <div className="flex flex-col md:flex-row gap-6 w-full">
            <div className="flex flex-col gap-6 items-center justify-between"> 
                <ChooseCardRight icon={water} text1={"Deniz"} text2={"Deniz Taşımacılığı"} />
                <ChooseCardRight icon={airHeat} text1={"Hava "} text2={"Taşımacılığı"} />
                <ChooseCardRight icon={fan} text1={"Radyatörlü"} text2={"Isıtma Sistemleri"} />
            </div>
            <img src={main} />
            <div className="flex flex-col gap-6 items-center justify-between"> 
                <ChooseCardLeft icon={water} text1={"Tavan"} text2={"Montajı"} />
                <ChooseCardLeft icon={cond} text1={"Klima"} text2={"Sistemleri"} />
                <ChooseCardLeft icon={floorHeat} text1={"Yerinden Isıtma"} text2={"Sistemleri"} />
            </div>
        </div>
    </div>)
}