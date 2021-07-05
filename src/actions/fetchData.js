import axios from "axios"
//https://pixabay.com/api/videos/?key=9646366-0a5eaee912903b23f7a88c12d
import {addData} from './addData';

export const fetchData = ({page,type,query,category}) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`https://pixabay.com/api/${type == 'videos' ? "videos" : ""}?key=${process.env.REACT_APP_API_KEY}${page ? `&page=${page}` : ''}${query ? `&q=${query}` : ''}${category ? `&category=${category}` : ''}`);
            dispatch(addData(response.data))
        } catch (error) {
            console.log(error);
        }
        // await axios.get(`https://pixabay.com/api/${type == 'videos' ? "videos" : ""}?key=${process.env.REACT_APP_API_KEY}&page=${page}`)
        // .then(response => dispatch(addData(response.data))) 
        // .catch(err => console.log(err))
    }
    
}