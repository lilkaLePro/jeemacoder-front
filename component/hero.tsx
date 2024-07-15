import React from 'react'
import { Button } from './button'

function Hero() {
  return (<div>
    
  <div className="max-w-4xl m-auto text-white ">
    {/* page aceuil */}
    <h1 className="text-center text-8xl font-extrabold p-10 max-sm:text-4xl">
      Vos hackatons <br /> en <span className="text-dark-blue ">mieux</span>
    </h1>
    <p className="max-w-2xl text-center p-5 text-md m-auto max-sm:text-xl">
      la meilleur plateforme d&apos;organisation et de gestion d&apos;hackaton dans le monde de demain.
    </p>
  </div>

  <div className="flex justify-center items-center gap-3 p-5">
    
    <Button href="/connexion" className="bg-dark-blue  text-white text-lg border-2 border-dark-blue  hover:bg-transparent hover:text-dark-blue">
      Se connecter
    </Button>
    <Button href="/inscription" className="bg-none border-2 border-dark-blue text-white text-lg hover:bg-dark-blue transition-all">
      S'inscrire
    </Button>
  </div>
  </div>)
}

export default Hero