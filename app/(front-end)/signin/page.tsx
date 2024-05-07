




'use client'

import Image from 'next/image';
import COVER_IMAGE from '/public/cover-image.jpg';
import Link from 'next/link'
import {useState, useEffect} from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, AuthError } from "firebase/auth";
import app from '../../../config';
import { useRouter } from 'next/navigation';
import swal from 'sweetalert';
import AuthWithEmail from '../components/authWithmail';



const auth = getAuth(app);
export default function Signin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();
    

    

    const signInWithEmail = async ()=>{
        try{
          const response=  await signInWithEmailAndPassword(auth, email, password);
          if(response.user){
            router.push("/home")
          }
        }
        catch(error: any){
            swal({
                title: "error",
                text: error.message,
                icon: "error",
                timer: 50000
            })
        }
    } 

    return ( 
        <div className="flex h-screen bg-[#071829]">
            <div className=' relative w-1/2 h-full flex flex-col'>
                <Image src={COVER_IMAGE}  className='w-full h-full'  alt = "img"/>
            </div>

            <div className="w-1/2 flex flex-col justify-center items-center ">
                <div className="text-5xl  text-white  pb-2">
                    <i className='mr-2'>Lo</i>
                    <span className="bg-[#00B2FF] font-bold text-white px-2 py-1">GO</span>

                    <p className='text-sm mb-2 py-4' > Journey to a trillion miles starts from here!!</p>
                </div>

                <div className='w-3/5 h-1/2 border shadow-2xl rounded-2xl  bg-[#192734] bg-opacity-80 bg-blur text-center my-20 py-4 '>
                    <div className="text-white text-3xl font-bold mb-2 ">Sign In</div>
                    <div className='text-sm '> Choose a sign up method</div>
                    <AuthWithEmail email={email} password = {password} setPassword = {setPassword} setEmail = {setEmail} workingfunction = {signInWithEmail}/>
                    {/* <div className=' flex flex-col items-center my-16' >
                        <LabelledInput label='Email' placeholder='Enter a valid email' type='email' value = {email} setValue = {setEmail}/>
                        <LabelledInput label='Password' placeholder='Create Password' type='password'value = {password} setValue = {setPassword}/>
                        <button className=' border rounded-lg py-2  my-5 flex items-center justify-center' onClick={signupWithEmail} > Submit </button>
                    </div> */}

                    <div className="text-gray-400 " >
                        Already a user?
                        <Link className="text-blue-600 mx-2" href="#">
                        Log in
                        </Link>
                    </div>
                </div>   
            </div>
         </div>
    )
}
function LabelledInput({ label, placeholder, type, value, setValue }: any) {
    return <div>
        <label className="block mb-2 text-sm font-semibold pt-4">{label}</label>
        <input  value = {value} onChange={(event)=> setValue(event.target.value)} type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
    </div>
}

export {LabelledInput};