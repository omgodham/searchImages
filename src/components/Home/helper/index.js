import axios from "axios";

export const getData = async ({page,type,query,filter}) => {
   console.log(query);
   return await axios.get(`https://pixabay.com/api/${type == 'videos' ? "videos" : ""}?key=${process.env.REACT_APP_API_KEY}&page=${page}${query ? `&q=${query}` : ''}${filter ? `&category=${filter}` : ''}`)
            .then(response => response.data) 
            .catch(err => console.log(err))
}