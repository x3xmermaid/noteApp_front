import axios from 'axios'

// export function fetchNotes(){
//     return {
//         type: 'FECTH_NOTE',
//         payload: axios.get('http://192.168.6.120:3001/notes').then((res)=>res.data.note)
//     }
// }

export const fetchNotes = () =>{
    return {
        type: 'FETCH_NOTE',
        payload: axios.get('http://192.168.6.119:3001/notes').then((res)=>res.data.data)
    }
}

