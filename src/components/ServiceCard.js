import * as React from "react";
import serv1 from "../images/serv-s1.png";
import plane from "../images/plane-lg.png";
import { Link } from "gatsby";

export default function ServiceCard({icon,image,text,title}) {
  return (
    <div className="bg-white min-w-fit shadow-md rounded-2xl flex flex-col gap-6 p-10">
      <div
        className="flex relative after:content-['']
            after:absolute
            after:bottom-0
            after:right-0
            after:w-0
            after:h-0
            after:z-1
            after:border-l-[50px]
            after:translate-x-1
            after:rounded-none
            after:border-l-transparent
            after:border-b-[50px]
            after:border-b-white items-center overflow-x-hidden justify-between gap-0 bg-primary rounded-3xl"
      >
        <img src={icon} className="h-16 w-16 p-2" />
        <img src={image} className="h-25 z-0" />
      </div>

      <h3 className="text-xl font-bold lg:text-2xl mt-8"> {title} </h3>
      <p>
       {text}
      </p>
      <hr />
      <div className="flex gap-6 items-center">
        <Link className="btn btn-primary" to="/service">
          {" "}
          <span className="icon-[tabler--arrow-right]"></span>{" "}
        </Link>
        <p className="font-bold">Detayları Görüntüle</p>
      </div>
    </div>
  );
}
