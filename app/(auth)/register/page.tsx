 "use client";
import { useUserRole } from "@/app/utils/useUserRole";
import { Button } from "@/components/form/button";
import FormInput from "@/components/form/input";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { ChangeEvent, Suspense, useEffect, useState } from "react";


type Value = {
  firstname : string , 
  lastname : string,
  email : string,
  password : string,
  metier : string ,
  pays : string ,
  ville : string
}

export default function Page() {
  return (
    <Suspense>
        <Form />
    </Suspense>
  )
}

const Form = () => {
  
  const [value , setValue ] = useState<Value>({
    firstname : '',
    lastname : '',
    email : '',
    password : '',
    metier : '',
    pays : '',
    ville : ''
  })
  const [pays , setPays ] = useState('')

  const handleChange = (e : ChangeEvent<HTMLInputElement>) => {
  const input = e.currentTarget;
  setValue({...value , [input.id] : input.value})
}
// la donc il faut que je créé un custum hook qui return le role

const role = useUserRole()?.toString()

const handleSubmit = (e : ChangeEvent<HTMLFormElement> ) => {
  e.preventDefault()
  // const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content')
  const formData = new FormData()
  formData.append('firstname' , value.firstname)
  formData.append('lastname' , value.lastname)
  formData.append('pays' , value.pays)
  formData.append('ville' , value.ville)
  formData.append('email' , value.email)
  formData.append('password' , value.password)
  formData.append('metier' , value.metier)
  formData.append('role' , role)

    // for(let [key , value] of formData.entries()) {
    // console.log(`${key} : ${value}`);}
    
  axios.post('http://localhost:8000/api/register' , formData , {
    headers : {
      "Content-Type" : "application/json" ,
    }
  }).then(res => console.log( "success !! , you'r subscribed" , res))
    .catch(res => console.log(res))
    
}
  return (
    <div className="h-screen flex justify-center items-center max-w-4xl m-auto">
        <div className="max-w-3xl m-auto flex flex-col gap-20 justify-center items-center py-10 px-20 rounded-md">
          <form className="" onSubmit={handleSubmit}>
          <span className="">Inscrivez vous et participez à des hackathons </span>
            <div className="flex flex-col gap-7 py-10">
             <div className="flex flex-col gap-2">
              <div className="flex gap-3 ">
              <FormInput
                    type="name"
                    placeholder="Entrez votre prenom"
                    value={value.firstname}
                    className="w-44"
                    label="Prenom"
                    id="firstname"
                    onChange={handleChange}
                  />
                  <FormInput
                    type="name"
                    placeholder="Entrez votre nom"
                    value={value.lastname}
                    onChange={handleChange}
                    className="w-44"
                    id="lastname"
                    label="Nom"
                  />
              </div>
              <FormInput
                id="email"
                type="email"
                placeholder="Email"
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
                  <FormInput
                  id='profession'
                    type="name"
                    placeholder="Enter your proffession"
                    value={value.metier}
                    onChange={handleChange}
                    className=""
                    label="Profession "
                  />
                  <div className="flex gap-3 ">
                  <FormInput
                    type="text"
                    placeholder="Entrez votre pays"
                    value={value.pays}
                    className="w-44"
                    label="Pays"
                    id="pays"
                    onChange={handleChange}
                  />
                  <FormInput
                    type="text"
                    placeholder="Entrez votre ville"
                    value={value.ville}
                    onChange={handleChange}
                    className="w-44"
                    id="ville"
                    label="Ville"
                  />
              </div>
        </div>
    <Button > s&apos;inscrire</Button>
     <div>
        vous avez déjà un compte ?
        <Link className="text-red-500" href="/login">
            <span className="font-semibold underline">se connecter</span>
        </Link>
      </div>
    </div>

  </form>
  </div>
  <div className="w-full md:w-1/2 mt-4 md:mt-0">
    {
      
    }
  </div>
  </div>
  );
}
