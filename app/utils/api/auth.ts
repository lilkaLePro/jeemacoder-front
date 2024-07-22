export const getUser = async () => {
    const getData = async () => {
            const options = {
                method : "GET" , 
                headers : {
                    "accept" : "application/json",
                    "Authorization" : "Bearer 10|Wrb98ax7fDNTbAErH6AaZZutOdZaUu6W46UsUJNxf30deaaf"
                }
            }
        const response = fetch('http://localhost:8000/api/user' , options)
            .then(response => response.json())
            .catch(err => console.log("failed fecthing user",err))
        
            return response
        }

        const data = await getData()
        
        return data
}