'use client'

import { useEffect } from "react";
import Navbar from "../components/Navbar";
import { getAuth} from "firebase/auth";
import app from "@/config";
import { useRouter } from "next/navigation";  
import Slider from "../components/slider";



export default function Signin() {
    const auth = getAuth(app);
    const currentuser = auth.currentUser;
    const router = useRouter();
    useEffect(()=>{
        if(!currentuser){
            router.push("/signin")
        }
    }, [currentuser]) 


    return ( 
       
        <div>
            <Navbar/>
            <div>
                <Slider/>
            </div>
            
        </div>

    )
}

