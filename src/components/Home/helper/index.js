import axios from "axios"
//https://pixabay.com/api/videos/?key=9646366-0a5eaee912903b23f7a88c12d

export const getData = async (page,type) => {
   return await axios.get(`https://pixabay.com/api/${type == 'videos' ? "videos" : ""}?key=${process.env.REACT_APP_API_KEY}&page=${page}`)
            .then(response => response.data) 
            .catch(err => console.log(err))
}