import React,{useState,useEffect} from 'react'
import axios from 'axios'

const useCourse = id => {

    const [course, setCourse] = useState({})

    useEffect(() => {        
        axios.get(`http://my-json-server.typicode.com/marco-prieto/json-db/cursos/${id}`).then(resp => setCourse(resp.data))
    },[])

    return [course,setCourse]
}
export default useCourse