import React from "react"

const courses = [
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
]
//ese match creo q sirve pa agarrar el id q mandamos x otro lado puede ser cualquier cosa luego de los :id :aea :etc xD
const CourseDetail = ({match}) => {
    //asumo q filter crea otro arreglo pero al final sera solo de 1 asi q [0] agarraria el primero y unico asumiento q es una lista con un objeto .. solo asumo pero seguro q esxD
    const CursoActual = courses.filter(c => c.id === parseInt(match.params.id))[0]

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

    return(
        <div className="ed-grid m-grid-3">
            {
                CursoActual ? (
                    <>  
                        <h1 className="m-cols-3">{CursoActual.title}</h1>
                        <img className="m-cols-1" src={CursoActual.imagen}/>
                        <p className="m-cols-2">Profesor: {CursoActual.profesor}</p>
                    </>
                ) :
                <h1>El curso no existe</h1>
            }
        </div>
    )
}
export default CourseDetail