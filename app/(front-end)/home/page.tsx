'use client'

import { useEffect } from "react";
import Navbar from "../components/Navbar";
import { getAuth} from "firebase/auth";
import app from "@/config";
import { useRouter } from "next/navigation";  
import Slider from "../components/slider";



export default function Signin() {
    const auth = getAuth(app);
    const currentUser = auth.currentUser;
    const router = useRouter();
    useEffect(()=>{
        if(!currentUser){
            router.push("/signin")
        }
    }, []) 


    return ( 
       
        <div>
            <Navbar/>
            <div>
                <Slider/>
            </div>
            
        </div>

    )
}

