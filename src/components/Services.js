import * as React from "react";
import ServiceCard from "./ServiceCard";
import serv1 from "../images/serv-s1.png";
import serv2 from "../images/serv-s2.png";
import serv3 from "../images/serv-s3.png";
import plane from "../images/plane-lg.png";
import bus from "../images/bus.png"
import busGear from "../images/bus-gear.png"
import modal from "../images/modal.svg"
export default function Services() {
  return (
    <>
      <div className="py-8 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8  motion-opacity-in-0 motion-translate-y-in-100 motion-blur-in-md">
          <div
            id="multi-slide"
            data-carousel='{ "loadingClasses": "opacity-0", "slidesQty": { "xs": 1, "md": 2,"lg":3 } }'
            className="relative flex w-full gap-12 flex-col md:gap-16 lg:items-center"
          >
            <div>
              <div className="space-y-4">
                <p className="text-primary text-sm font-medium uppercase">
                  Servislerimiz
                </p>
                <h2 className="text-base-content text-2xl font-semibold md:text-3xl lg:text-4xl">
                Her Ölçekteki Şirket İçin Güvenilir İthalat Hizmetleri
                </h2>
              </div>
              <div className="mt-10 flex justify-end gap-4">
                <button
                  className="btn btn-square btn-sm carousel-prev btn-primary carousel-disabled:opacity-100 carousel-disabled:btn-outline relative hover:text-white"
                  disabled
                >
                  <span className="icon-[tabler--arrow-left] size-5"></span>
                </button>
                <button className="btn btn-square btn-sm carousel-next btn-primary carousel-disabled:opacity-100 carousel-disabled:btn-outline relative hover:text-white">
                  <span className="icon-[tabler--arrow-right] size-5"></span>
                </button>
              </div>
            </div>
            <div className="carousel">
              <div className="carousel-body">
                <div className="carousel-slide">
                  <ServiceCard 
                  icon={bus} 
                  image={serv1} 
                  text={"Sabırlar Lojistik’te, hassasiyet, verimlilik ve dünya çapında bağlantıyı önceliklendiren yenilikçi kargo hizmetleriyle lojistik anlayışını dönüştürüyoruz."} 
                  title={"Uluslararası Taşımacılık"} />
                </div>

                <div className="carousel-slide">
                <ServiceCard 
                  icon={plane} 
                  image={serv2} 
                  text={"Sabırlar Lojistik’te, hassasiyet, verimlilik ve dünya çapında bağlantıyı önceliklendiren yenilikçi kargo hizmetleriyle lojistik anlayışını dönüştürüyoruz."} 
                  title={"Yerel Kamyon Taşımacılığı"} />
                </div>

                <div className="carousel-slide">
                <ServiceCard 
                  icon={busGear} 
                  image={serv3} 
                  text={"Sabırlar Lojistik’te, hassasiyet, verimlilik ve dünya çapında bağlantıyı önceliklendiren yenilikçi kargo hizmetleriyle lojistik anlayışını dönüştürüyoruz."} 
                  title={"Skyline Express"} />
                </div>

                <div className="carousel-slide">
                <ServiceCard 
                  icon={modal} 
                  image={serv3} 
                  text={"Sabırlar Lojistik’te, hassasiyet, verimlilik ve dünya çapında bağlantıyı önceliklendiren yenilikçi kargo hizmetleriyle lojistik anlayışını dönüştürüyoruz."} 
                  title={"Çok Modlu Taşımacılık"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
