import React from "react"
import Curso from './Curso'

const cursos = [
    {
        "id" : 1,
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
        "id" : 3,
      "title": "Javascript desde cero",
      "imagen": "https://images.pexels.com/photos/2740954/pexels-photo-2740954.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      "price": 40,
      "profesor": "Juanfra Bot"
    },
    {
        "id":4,
      "title": "Python desde cero",
      "imagen": "https://images.pexels.com/photos/1342609/pexels-photo-1342609.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "price": 44,
      "profesor": "Alfred Goy"
    }  
  ]
const CourseGrid = () => (
    <div className="ed-grid m-grid-4">
        {
            cursos.map(c => 
            <Curso 
            key={c.id} 
            id={c.id}
            title={c.title}
            imagen={c.imagen}
            price={c.price}
            profesor={c.profesor}
            />)
        }
    </div>
)
export default CourseGrid