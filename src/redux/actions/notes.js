import axios from 'axios'
// import console  require('console');

// export function fetchNotes(){
//     return {
//         type: 'FECTH_NOTE',
//         payload: axios.get('http://192.168.6.120:3001/notes').then((res)=>res.data.note)
//     }
// }

export const fetchNotes = (search, sort, category, limit) =>{
    let link = `http://192.168.6.119:3001/notes?join=category+id_category+no&page=1`
    if(search !== null && category !== 0){
        link = link+`&search=title+`+search+`+id_category+`+category
    }else if(search === null && category !== 0){
        link = link+`&search=id_category+`+category
    }else if(search !== null && category === 0){
        link = link+`&search=title+`+search
    }
    // if(search !== null ){
    //     link = link+`&search=title+`+search
    // }
    if(sort !== null){
        link = link+`&sorting=time+`+sort
    }
    // if(category !== null){
    //     link = link+`&search=id_category+`+category
    // }
    if(limit !==null ){
        link = link+`&limit=`+limit
    }
    console.log(link)
    console.log(search)
    console.log(sort)
    return {
        type: 'FETCH_NOTE',
        payload: axios.get(link)
    }
}

export const getSearch = (search, sort, category, limit) =>{
    let link = `http://192.168.6.119:3001/notes?join=category+id_category+no&page=1`
    if(search !== null && category !== 0){
        link = link+`&search=title+`+search+`+id_category+`+category
    }else if(search === null && category !== 0){
        link = link+`&search=id_category+`+category
    }else if(search !== null && category === 0){
        link = link+`&search=title+`+search
    }
    // if(search !== null){
    //     link = link+`&search=title+`+search
    // }
    if(sort !== null){
        link = link+`&sorting=time+`+sort
    }else{
        link = link+`&sorting=time+DESC`
    }
    // if(category !== null){
    //     link = link+`&search=id_category+`+category
    // }
    if(limit !==null ){
        link = link+`&limit=`+limit
    }
    console.log(link)
    console.log(search)
    console.log(sort)
    return {
        type: 'GET_SEARCH',
        payload: axios.get(link)
    }
}

export const addNotes = (title, note, id_Category) =>{
    let link = `http://192.168.6.119:3001/notes`

    console.log(link)
    console.log(title)
    console.log(note)
    console.log(id_Category)
    return {
        type: 'ADD_NOTE',
        payload: axios({
            method: 'post',
            url: link,
            data: {
                title: title,
                note: note,
                time: 'now()',
                id_category: id_Category,
            }           
          })
    } 
}

export const editNotes = (id, title, note, id_Category) =>{
    let link = `http://192.168.6.119:3001/notes?where=id+`+id

    console.log(link)
    console.log(title)
    console.log(note)
    console.log(id_Category)
    return {
        type: 'EDIT_NOTE',
        payload: axios({
            method: 'patch',
            url: link,
            data: {
                title: title,
                note: note,
                time: 'now()',
                id_category: id_Category,
            }           
          })
    } 
}

export const deleteNotes = (id, index) =>{
    let link = `http://192.168.6.119:3001/notes?where=id+`+id

    console.log("index"+index)

    return {
        type: 'DELETE_NOTE',
        payload: axios.delete(link)
        // index: index
    } 
}


