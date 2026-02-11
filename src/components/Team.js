import * as React from "react";
import tm1 from "../images/tm1.jpg"
import tm2 from "../images/tm2.jpg"
import tm3 from "../images/tm3.jpg"
import tm4 from "../images/tm4.jpg"
import TeamCard from "./TeamCard";

export default function Team() {
  return (
    <div className="my-12 flex flex-col gap-6 p-10">
      <div className="flex flex-col items-center justify-center space-y-4">
        <p className="text-primary text-sm font-medium uppercase">
        Uzman Ekip Üyelerimiz
        </p>
        <h2 className="text-base-content text-2xl font-semibold md:text-4xl lg:text-6xl">
        Özel Destek Ekibimizle Tanışın
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 p-10">
        <TeamCard image={tm1} name="Jenny Noah" job={"Operasyon Müdürü"} />
        <TeamCard image={tm2} name="Jenny Mache" job={"Operasyon Müdürü"} />
        <TeamCard image={tm3} name="Sofia Melisa" job={"Proje Yöneticisi"} />
        <TeamCard image={tm4} name="Shane Darren" job={"Operasyon Müdürü"} />
      </div>
    </div>
  );
}
