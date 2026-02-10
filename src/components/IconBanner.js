import * as React from "react"
import br1 from "../images/br1.png"
import br2 from "../images/br2.png"
import br3 from "../images/br3.png"
import br4 from "../images/br4.png"
import br5 from "../images/br5.png"
import br6 from "../images/br6.png"
export default function IconBanner(){
    const images = [br1,br2,br3,br4,br5,br6]
    return(<>
    <div className="bg-gray-900 text-white max-w-screen my-12 p-10 flex flex-col gap-6">
        <h3 className="text-xl lg:text-3xl">More Than <span className="text-info">52.0 K</span> Brand with Work Here.</h3>
        <hr className="bg-gray-200"/>
        <div className="flex gap-6 justify-between animate-scroll">
            {images.map(item => <img src={item} key={item} className="w-20" />)}
        </div>
    </div>
    </>)
}