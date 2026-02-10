import * as React from "react"
import promo from "../images/promo.jpg"

export default function Breadcrumb({title}){
    return(<>
    <div className="flex min-h-70 lg:min-h-90  items-end text-white  relative p-10 lg:px-20">
        <img src={promo} className="absolute top-0 left-0 h-full w-full z-0" />
        <div className="flex flex-col border-l-4 p-5 border-primary gap-3 z-1">
            <h2 className="text-2xl lg:text-4xl"> {title} </h2>

            <p className="flex items-center gap-6"> <span className="text-primary">Ana Sayfa</span>  <span className="icon-[tabler--arrow-right]"></span> {title} </p>
        </div>

    </div>
    </>)
}