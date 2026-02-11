import * as React from "react";
import st1 from "../images/st1.png";
import st2 from "../images/st2.png";
import st3 from "../images/st3.png";
export default function AboutAvatars() {
  return (
    <div className="my-12 p-10 bg-gray-200">
      <div className="flex my-12 p-10 flex-col gap-6 w-full justify-center text-center">
        <h5 className="uppercase text-sm text-primary">Sürekli İşleyen Süreç</h5>
        <h2 className="text-2xl lg:text-6xl font-bold">
        İşletmelere Yardımcı Lojistik Çözümler
        </h2>
      </div>

      <div className="flex flex-col gap-6 md:flex-row md:justify-between">
       <Avatar title={"Hizmetleri Seçin"} icon={st1} rank={"01"} />
       <Avatar title={"Gönderi Bilgisi"} icon={st2} rank={"02"} />
       <Avatar title={"Taşımacılık"} icon={st3} rank={"03"} />
      </div>
    </div>
  );
}

function Avatar({rank,icon, title}){
    return(<>
     <div className="flex flex-col gap-6 items-center">
          <button className="btn btn-circle btn-primary mb-6 btn-lg"> {rank} </button>

          <div class="avatar">
            <div class="size-40 rounded-full">
              <img
                src={icon}
                alt="avatar"
              />
            </div>
          </div>
          <h2 className="text-2xl text-black"> {title} </h2>
          <p>Sabırlar Lojistik, Bilgi ve Fırsat Sunar</p>
        </div>
    </>)
}
