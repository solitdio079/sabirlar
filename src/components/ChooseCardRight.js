import * as React from "react";

export default function ChooseCardRight({ icon, text1, text2 }) {
  return (
    <>
      <div className="bg-gray-200 relative before:content-['']
            before:absolute
            before:top-0
            before:left-0
            before:w-0
            before:h-0
            before:z-1
            before:border-r-[100px]
            before:translate-x-1
            before:rounded-none
            before:border-r-transparent
            before:border-t-[100px]
            before:border-t-white  min-w-80 items-center rounded-xl p-3 w-full flex justify-end gap-6 text-right">
        <div className="flex flex-col">
          <h4 className="font-bold"> {text1} </h4>
          <h4 className="font-bold"> {text2} </h4>
        </div>
        <div className="bg-orange-500 flex p-3 relative rounded-xl justify-center">
          <div className="absolute w-1/2 top-0 bg-white h-1 left-1/2 rounded-xl -translate-x-1/2 "></div>
          <img src={icon} className="h-12" />
        </div>
      </div>
    </>
  );
}
