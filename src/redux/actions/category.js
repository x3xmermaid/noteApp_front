import axios from 'axios'

export const fetchCategory = () =>{
    let link = `http://192.168.6.119:3001/category?page=1&limit=50`
    return {
        type: 'FETCH_CATEGORY',
        payload: axios.get(link).then((res)=>res.data.data)
    }
}

export const addCategory = (category, image, color) =>{
    let link = `http://192.168.6.119:3001/category`
    return {
        type: 'ADD_CATEGORY',
        payload: axios({
            method: 'post',
            url: link,
            data: {
                category: category,
                image: image,
                color: color,
            }           
            })
    } 
}

export const deleteCategory = (id) =>{
    let link = `http://192.168.6.119:3001/category?where=no+`+id
    return {
        type: 'DELETE_CATEGORY',
        payload: axios.delete(link)
    } 
}

