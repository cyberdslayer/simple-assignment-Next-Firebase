'use client'

import Image from 'next/image';
import COVER_IMAGE from '/public/cover-image.jpg';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { GoogleAuthProvider, createUserWithEmailAndPassword } from 'firebase/auth';
import { getAuth, signInWithPopup } from 'firebase/auth';
import app from '@/config';
import swal from 'sweetalert';
import { useState } from 'react';
import AuthWithEmail from '../components/authWithmail';

export default function Signup() {
    const router = useRouter();
    const [isEmailMethod, setIsEmailMethod] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const auth = getAuth(app);
    const signupWithEmail = async ()=>{
        console.log(email, password);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {

            console.log(userCredential)
            // Signed up 
            const user = userCredential.user;
            if(user) {
                router.replace("/home");
            }
        })
        .catch((error) => {
            swal({
                title: "error",
                text: error.message,
                icon: "error",
                timer: 50000
            }).then(()=>{
                setEmail(""),
                setPassword("")
            });
        })
        .finally(()=>{
            setIsEmailMethod(false);
        })
    }

    const signInWithGoogle = async ()=>{
        try{
            const provider = new GoogleAuthProvider();
            const auth = getAuth(app);
            const response= await signInWithPopup(auth, provider);
            if(response){
                router.push("/home");
            }
            
        }catch(error :any){
            console.error("Error signing in with Google", error.message);
            swal({
                title: "error",
                text: error.message,
                icon: "error",
                timer: 5000
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
                    <div className="text-white text-3xl font-bold mb-2 ">Sign up</div>
                    <div className='text-sm '> Choose a sign up method</div>
                    {
                        (isEmailMethod)? (
                            <AuthWithEmail email={email} password = {password} setPassword = {setPassword} setEmail = {setEmail} workingfunction = {signupWithEmail}/>
                        ): <div className=' flex flex-col items-center my-16'>

                            <button className=' border rounded-lg py-2 mb-6 w-2/3 flex items-center justify-center' onClick={signInWithGoogle}> 
                            Continue with Google
                            </button>
                            <button className=' border rounded-lg py-2  w-2/3 flex items-center justify-center' onClick={()=>{setIsEmailMethod(true)}}> 
                                Sign up with Email
                            </button>
                        </div>
                        }
                    <div className="text-gray-400 " >
                        Already a user?
                        <Link className="text-blue-600 mx-2" href="/signin" >
                        Log in
                        </Link>
                    </div>
                </div>   
            </div>
         </div>
    )
}

