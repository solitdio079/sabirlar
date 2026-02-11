import * as React from "react";
import Layout from "../components/Layout";
import ServiceCard from "../components/ServiceCard";
import serv1 from "../images/serv-s1.png";
import serv2 from "../images/serv-s2.png";
import serv3 from "../images/serv-s3.png";
import plane from "../images/plane-lg.png";
import bus from "../images/bus.png";
import busGear from "../images/bus-gear.png";
import modal from "../images/modal.svg";
import FAQ from "../components/FAQ"
import Breadcrumb from "../components/Breadcrumb";
import Seo from "../components/Seo";
export default function Service() {
  return (
    <Layout>
          <Breadcrumb title={"Servislerimiz"} />
      <div className="grid gap-6 p-10  md:grid-cols-2 lg:grid-cols-3">
        <ServiceCard 
                          icon={bus} 
                          image={serv1} 
                          text={"Sabırlar Lojistik’te, hassasiyet, verimlilik ve dünya çapında bağlantıyı önceliklendiren yenilikçi kargo hizmetleriyle lojistik anlayışını dönüştürüyoruz."} 
                          title={"Uluslararası Taşımacılık"} />
        <ServiceCard 
                         icon={plane} 
                         image={serv2} 
                         text={"Sabırlar Lojistik’te, hassasiyet, verimlilik ve dünya çapında bağlantıyı önceliklendiren yenilikçi kargo hizmetleriyle lojistik anlayışını dönüştürüyoruz."} 
                         title={"Yerel Kamyon Taşımacılığı"} />

        <ServiceCard 
                         icon={busGear} 
                         image={serv3} 
                         text={"Sabırlar Lojistik’te, hassasiyet, verimlilik ve dünya çapında bağlantıyı önceliklendiren yenilikçi kargo hizmetleriyle lojistik anlayışını dönüştürüyoruz."} 
                         title={"Skyline Express"} />

        <ServiceCard 
                         icon={modal} 
                         image={serv3} 
                         text={"Sabırlar Lojistik’te, hassasiyet, verimlilik ve dünya çapında bağlantıyı önceliklendiren yenilikçi kargo hizmetleriyle lojistik anlayışını dönüştürüyoruz."} 
                         title={"Çok Modlu Taşımacılık"} />
          <ServiceCard 
                         icon={busGear} 
                         image={serv3} 
                         text={"Sabırlar Lojistik’te, hassasiyet, verimlilik ve dünya çapında bağlantıyı önceliklendiren yenilikçi kargo hizmetleriyle lojistik anlayışını dönüştürüyoruz."} 
                         title={"Skyline Express"} />

        <ServiceCard 
                          icon={bus} 
                          image={serv1} 
                          text={"Sabırlar Lojistik’te, hassasiyet, verimlilik ve dünya çapında bağlantıyı önceliklendiren yenilikçi kargo hizmetleriyle lojistik anlayışını dönüştürüyoruz."} 
                          title={"Uluslararası Taşımacılık"} />
      </div>

      <FAQ/>
    </Layout>
  );
}

export const Head = () => <Seo title={"Servislerimiz"} />;