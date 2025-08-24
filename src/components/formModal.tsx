"use client"
import Image from "next/image";
import { useState } from "react";
const FormModal = ({
    table,
    type,
    data,
    id

}: {
    table: "teacher"
    | "student"
    | "parent"
    | "class"
    | "lesson"
    | "exam"
    | "assignement"
    | "result"
    | "attendance"
    | "event"
    | "announcement"
    type: "create" | "update" | "delete";
    data?: any;
    id?: number

}) => {
    const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
    const bgcolor = type === "create" ? "bg-green-500" : type === "update" ? "bg-yellow-500" : "bg-red-500";
    const [open,setopen]=useState(false);
    
    const Form=()=>{
        return type==="delete" && id && (
            <form action="" className="flex flex-col  p-4 bg-white rounded-lg shadow-lg">
                <span className="text-center font-medium">
                    Are you sure you want to delete this {table}?
                </span>
                <button className="bg-red-700 text-white py-2 px-4 rounded-md w-max border-none self-center">Delete</button>
            </form>
        )
    }

    return (
        <>
            <button onClick={()=>console.log()} className={`${size}   `} >
                <Image src={`/${type}.png`} alt="" width={16} height={16} />
            </button>
            {open &&(
                <div className="w-screen h-screen absolute top-0 left-0 bg-black opacity-60 z-50 items-center justify-center">
                    <div className="bg-white p-4 rounded-md relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]">
                        <Form/>
                        <div className="absolute top-4 right-4 cursor-pointer"
                            onClick={(()=>{console.log("close");setopen(false)})}>
                               <Image src="/close.png" alt="" width={14} height={14} />
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
export default FormModal;