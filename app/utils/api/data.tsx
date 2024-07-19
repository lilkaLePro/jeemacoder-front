export const getHackathons = async () => {
    const getData = async () => {
            const options = {
                method : "GET" , 
                headers : {
                    "accept" : "application/json",
                    "Authorization" : "Bearer 3|NCZ8DLZSdihIzuOOkuFY7ytvRGIhvKLc9jAOUhuddf829940"
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

