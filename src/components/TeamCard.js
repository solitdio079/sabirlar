import * as React from "react"

export default function TeamCard({image,name,job}){
    return(<>
    <div className="flex relative flex-col gap-6 rounded-3xl justify-center items-center">
                <div className="rounded-3xl relative after:content-['']
                after:absolute
                after:top-0
                after:right-0
                after:w-0
                after:h-0
                after:z-1
                after:border-l-[80px]
                after:translate-x-1
                after:rounded-none
                after:border-l-transparent
                after:border-t-[80px]
                after:border-t-white "> 
                    <img src={image} className="w-full rounded-3xl" />
                    <button className="btn btn-circle bg-primary text-white absolute bottom-5 right-5"><span className="icon-[tabler--link]"></span></button>
                </div>
                <h3 className="font-bold text-lg text-center">{name} <br/><p className="font-light"> {job} </p></h3>
               
            </div>
    </>)
}