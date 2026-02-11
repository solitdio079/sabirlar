import * as React from "react";
import ProcessCard from "./ProcessCard";
import tabMain from "../images/tab-main2.jpg"
export default function Process() {
    const [isActive, setIsActive] = React.useState(0)
    const handleActive = (key) => {
        setIsActive(key)
    }
  return (
    <div className="my-12 p-10 bg-gray-900 text-white flex gap-6 flex-col items-center justify-center md:flex-row">
      <div className="flex flex-col gap-6">
        <div className="flex my-12  flex-col gap-6 w-full">
          <h5 className="uppercase text-sm text-primary">Kanıtlanmış Başarı</h5>
          <h2 className="text-2xl lg:text-5xl font-bold">
          Müşterilerimizin tüm lojistik operasyonlarını optimize etmelerine yardımcı olduk.
          </h2>
        </div>

        

        <div className="flex flex-col  gap-6">
            <ProcessCard title={"Hava Kargo Çözümleri"} keyIndex={0} handleActive={handleActive} isActive={isActive} />
            <ProcessCard title={"Depo Envanteri"} keyIndex={1} handleActive={handleActive} isActive={isActive} />
            <ProcessCard title={"Karayolu Hızlı Çözümler"} keyIndex={2} handleActive={handleActive} isActive={isActive} />
        </div>
      </div>
      <div className="w-full flex items-end relative after:content-['']
                after:absolute
                after:top-0
                after:-left-5
                after:w-0
                after:h-0
                after:z-1
                after:border-r-[90px]
                after:translate-x-1
                after:rounded-none
                after:border-r-transparent
                after:border-t-[90px]
                after:border-t-gray-900 md:-mr-10">
        <img src={tabMain} className="rounded-3xl w-full"/>
      </div>
    </div>
  );
}
