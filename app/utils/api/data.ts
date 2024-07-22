import { useMutation } from "@tanstack/react-query"
import { ChangeEvent } from "react"

export const getHackathons = async () => {
    const getData = async () => {
            const options = {
                method : "GET" , 
                headers : {
                    "accept" : "application/json",
                    "Authorization" : "Bearer 10|Wrb98ax7fDNTbAErH6AaZZutOdZaUu6W46UsUJNxf30deaaf"
                }
            }
        const response = fetch('http://localhost:8000/api/hackathons' , options)
            .then(response => response.json())
            .catch(err => console.log(err))
        
            return response
        }

        const data = await getData()
        
        return data
}

