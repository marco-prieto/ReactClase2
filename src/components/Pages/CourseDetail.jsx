import React,{useState,useEffect} from "react"
import axios from 'axios'
import useCourse from "../CustomHooks/useCourse"


/* const courses = [
  {
      "id": 1,
    "title": "React desde cero",
    "imagen": "https://images.pexels.com/photos/276514/pexels-photo-276514.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    "price": 30,
    "profesor": "Beto el coqueto"
  },
  {
    "id": 2,
    "title": "Go desde cero",
    "imagen": "https://images.pexels.com/photos/2252557/pexels-photo-2252557.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "price": 20,
    "profesor": "Richard Textex"
  },
  {
    "id": 3,
    "title": "Javascript desde cero",
    "imagen": "https://images.pexels.com/photos/2740954/pexels-photo-2740954.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    "price": 40,
    "profesor": "Juanfra Bot"
  },
  {
    "id": 4,
    "title": "Python desde cero",
    "imagen": "https://images.pexels.com/photos/1342609/pexels-photo-1342609.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "price": 44,
    "profesor": "Alfred Goy"
  }  
] */

//ese match creo q sirve pa agarrar el id q mandamos x otro lado puede ser cualquier cosa luego de los :id :aea :etc xD
const CourseDetail = ({match}) => {
    //asumo q filter crea otro arreglo pero al final sera solo de 1 asi q [0] agarraria el primero y unico asumiento q es una lista con un objeto .. solo asumo pero seguro q esxD
    
    //sin api haciendo filter
    /* const CursoActual = courses.filter(c => c.id === parseInt(match.params.id))[0] */

    //mi forma esta correcto
    /* return (
        CursoActual ? (
            <div className="ed-grid m-grid-3">
                <h1 className="m-cols-3">{CursoActual.title}</h1>
                <img className="m-cols-1" src={CursoActual.imagen}/>
                <p className="m-cols-2">{CursoActual.price}</p>
            </div>
        )
        : (
            <div className="ed-grid">
                <h1>El curso no existe</h1>
            </div>
        )        
    ) */
    //forma del profe como pa ver variantes  y entender un poco mas la sintaxis

    //el 2do estado y el 2do es un colback (los nombres con fines didacticos puedo darle cualquier nombre a la variable)


    /* const [course, setCourse] = useState({}) */
    const [comment,setComment] = useState("Sin comentarios")
    const [course,setCourse] = useCourse(match.params.id)

    //cada vez q el componente se renderize useEffect funca

    /* useEffect(() => {        
        axios.get(`http://my-json-server.typicode.com/marco-prieto/json-db/cursos/${match.params.id}`).then(resp => setCourse(resp.data))
    },[]) */


    //ese 2do parametro es para q no  c produzca infinitamente el useEffect

    const changeTitle = (text) => {
        setCourse(
            {
                ...course,
                title : text
            }
        )
    }
    
    const myComment = e => {
        setComment(e.target.value)
    }
    return(
        <div className="ed-grid m-grid-3">
            {
                course ? (
                    <div className="ed-grid">  
                        <div className="l-block">
                            <h1 className="m-cols-3">{course.title}</h1>
                            <img className="m-cols-1" src={course.imagen}/>
                            <p className="m-cols-2">Profesor: {course.profesor}</p>
                            <button className="button" onClick={changeTitle.bind(this,"Titulo Nuevo")}>Cambiar titulo</button>
                        </div>
                        <div className="ed-grid">
                            <h2>Escribe tu comentario</h2>
                            <input type="text" placeholder="Escribe..." onChange={myComment.bind(this)}/>
                            <p>{comment}</p>
                        </div>
                    </div>
                ) :
                <h1>El curso no existe</h1>
            }
        </div>
    )
}
export default CourseDetail