import * as React from "react";

export default function ProcessCard({title,keyIndex,isActive, handleActive}) {
  return (
    <>
      <div
        className={
          isActive === keyIndex
            ? "flex border-primary border-l-4 items-center transition-all duration-250 rounded-3xl p-10 gap-6 justify-between bg-white/15"
            : "flex gap-6 transition-all py-5 duration-250 justify-between border-t-1 rounded-md items-center border-gray-400"
        }
       
        onClick={() => handleActive(keyIndex)}
        onMouseEnter={() => handleActive(keyIndex)}
      >
        <div className="flex flex-col gap-3">
          <h3 className="text-2xl lg:text-4xl"> {title} </h3>
          <p>
            Our cargo service ensures reduced costs through efficient logistics
            and streamlined operations.
          </p>
        </div>
        <button className= {isActive ===keyIndex ? "btn btn-circle bg-primary text-3xl text-white btn-3xl":"btn btn-circle bg-white/15 text-3xl text-white btn-3xl"}>
          {" "}
          <span className="icon-[tabler--arrow-up-right]"></span>{" "}
        </button>
      </div>
    </>
  );
}
