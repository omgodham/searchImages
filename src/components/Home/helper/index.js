import axios from "axios"


export const getData = async (page,type) => {
   return await axios.get(`https://pixabay.com/api/${type == 'videos' ? "videos" : ""}?key=${process.env.REACT_APP_API_KEY}&page=${page}`)
            .then(response => response.data) 
            .catch(err => console.log(err))
}