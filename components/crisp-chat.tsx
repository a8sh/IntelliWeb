"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () =>{
    useEffect(()=>{
        Crisp.configure("32e2de75-761d-49fb-9221-9157706c46eb");
    },[])
    return null
}