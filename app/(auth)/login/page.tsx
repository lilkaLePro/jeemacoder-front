"use client";
import { Button } from "@/components/form/button";
import FormInput from "@/components/form/input";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { ChangeEvent, useState } from "react";

type Value = {
  email : string,
  password : string,
  remember : boolean
}

export default function Page() {
  const [value , setValue ] = useState<Value>({
    email : '',
    password : '',
    remember : false
  })
  const handleChange = (e : ChangeEvent<HTMLInputElement>) => {
    const input = e.currentTarget;
    setValue({...value , [input.id] : input.value})
  }
  const handleSubmit = (e : ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    const input = e.currentTarget;
    setValue({...value , [input.id] : input.value})

    const formData = new FormData();
    formData.append('email' , value.email)
    formData.append('password' , value.password)
    
    // for(let [key , value] of formData.entries()) {
    // console.log(`${key} : ${value}`);}

    axios.post('http://localhost:8000/api/login' , formData , 
      {
        headers : {
          "Content-Type" : "application/json" ,
          }
      }
    ).then(res => console.log("success ! you are connected" , res)
    ).catch(res => console.log('echec ! connexion echoué'))
  }


  return (
    <div className="h-screen flex justify-center items-center max-w-4xl m-auto">
        <div className=" m-auto flex flex-col gap-20 justify-center items-center py-10 px-20 rounded-md">
          <form className="w-[420px]" onSubmit={handleSubmit}>
          <h1 className="my-5 text-lg"> Connectez-vous </h1>
            <div className="flex flex-col gap-7">
             <div className="flex flex-col gap-5">
              <FormInput
                id="email"
                type="email"
                placeholder="example@gmail.com"
                value={value.email}
                onChange={handleChange}
                className=""
                label="Email"
              />
                  <FormInput
                    id="password"
                    type="password"
                    placeholder="********"
                    value={value.password}
                    onChange={handleChange}
                    className=""
                    label="Password"
                  />
                  
    </div>
    <Button > s&apos;inscrire</Button>
     <div className="flex flex-col">
          <div>
          vous avez déjà un compte ?
          <Link className="text-red-500" href="/register">
              <span className="font-semibold underline">S&apos;inscrire</span>
          </Link>
        </div>
        <Link className="text-red-500" href="/fgpwd">
            <span className="font-semibold underline">Mot de pass oublié</span>
        </Link>
      </div>
    </div>

  </form>
  </div>
  <div className="w-full md:w-1/2 mt-4 md:mt-0">
          <Image src="/illustration-login.jpg" alt="" className="w-full" width={200} height={200}/>
        </div>
  </div>
  );
}
