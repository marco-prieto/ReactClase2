import React from "react"
import CourseCard from '../Molecules/CourseCard'
import CourseGrid from '../Organisms/CourseGrid'
import axios from 'axios'

/* const courses = [
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
] */
class Courses extends React.Component {
  
  constructor(props){
    super(props)

    this.state = {
      courses: []
    }
  }
  componentDidMount(){
    axios.get('http://my-json-server.typicode.com/marco-prieto/json-db/cursos').then(response => this.setState({
      courses: response.data
    }))
  }
  render(){

    const {courses} = this.state
    return <CourseGrid courses={courses}/>
  }
}
export default Courses