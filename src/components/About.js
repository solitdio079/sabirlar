import * as React from "react";
import container from "../images/container.png";
import aboutImg from "../images/about-m.jpg";
import arrow from "../images/arrow-right.svg";
import af1 from "../images/af-1.png";
import af2 from "../images/af-2.png";
import { Link } from "gatsby";
export default function About() {
  return (
    <div className="relative">
      <div className="flex p-10 flex-col-reverse relative justify-center gap-6 lg:flex-row">
        <img src={aboutImg} className="max-w-full" />

        <div className="flex flex-col gap-6">
          <p className="uppercase text-sm text-primary">Hakkımızda</p>
          <h1 className="text-2xl lg:text-6xl">
          Kastamonu Nakliye, Hurda ve Vinç Hizmetleri
          </h1>
          <p>
            Dünya genelinde büyük ölçekli işletmelere çözümler sunma konusunda
            kırk yılı aşkın deneyimimizle, belirli pazarlara özel uçtan uca
            lojistik hizmetleri sunuyoruz.
          </p>
          <div className="flex gap-12 justify-between lg:justify-start">
            <ul>
              <li className="flex items-center gap-3">
                {" "}
                <img src={arrow} className="w-3" /> Hızlı ve Güvenilir Teslimat
              </li>
              <li className="flex items-center gap-3">
                {" "}
                <img src={arrow} className="w-3" />
                Akıllı Teknoloji
              </li>
            </ul>
            <ul>
              <li className="flex items-center gap-3">
                {" "}
                <img src={arrow} className="w-3" />
                Uçtan Uca Çözümler
              </li>
              <li className="flex items-center gap-3">
                {" "}
                <img src={arrow} className="w-3" />
                Rekabetçi Fiyatlandırma
              </li>
            </ul>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12 justify-between lg:justify-start">
            <Link className="btn btn-lg btn-primary max-w-fit">
              {" "}
              Daha Fazla <span className="icon-[tabler--arrow-right]"></span>{" "}
            </Link>
            <div className="flex gap-3 items-center">
              <p className="btn btn-lg btn-info btn-circle text-white p-2 text-2xl">
                {" "}
                <span className="icon-[tabler--phone]"></span>{" "}
              </p>
              <div className="flex flex-col gap-1">
                <p className="font-light">Bizi İstediğiniz Zaman Arayın:</p>
                <p className="font-bold text-primary">+90 544 760 18 49</p>
              </div>
            </div>
          </div>

          <div className="flex bg-gray-100 flex-col md:flex-row md:-ml-30 md:absolute md:bottom-10  justify-between gap-12 border-r-4 p-10 rounded-xl border-primary">
            <div className="flex gap-3">
              <img src={af1} className="w-12 h-12" />
              <div className="flex flex-col gap-1">
                <h2 className="text-lg font-bold">Küresel Lojistik</h2>
                <p>Müşterilerimiz tarafından güvenilen, köklü ve uzun yıllardır faaliyet gösteren bir şirketiz.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <img src={af2} className="w-12 h-12" />
              <div className="flex flex-col gap-1">
                <h2 className="text-lg font-bold">Çevrim İçi Takip</h2>
                <p>Müşterilerimiz tarafından güvenilen, köklü ve uzun yıllardır faaliyet gösteren bir şirketiz.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
