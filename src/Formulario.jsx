import React,{Component} from 'react'

//aca el render es el gozu
//render pa retornar
//state el estado para trabajar dinamicamente
class Formulario extends Component {

    constructor(props) {
        super(props)
        //this.setState({})
        this.state = {
            nombre: "",
            correo: "",
            fecha: new Date()
        }
        //se tiene q hacer un bind es propio de js no de react
        this.cambiarNombre = this.cambiarNombre.bind(this)
        this.cambiarCorreo = this.cambiarCorreo.bind(this)
        this.cambiarFecha = this.cambiarFecha.bind(this)
    }
    

    cambiarNombre(e) {
        this.setState({
            nombre: e.target.value
        })
    }
    cambiarCorreo(e) {
        this.setState({
            nombre: e.target.value
        })
    }
    cambiarFecha(){
        this.setState({
            fecha: new Date()
        })
    }

    render() {
        

        return (
            <div className="ed-grid">
                <h1>Formulario {this.props.name}</h1>
                {/* <h4>Fecha actual: {Math.ceil(this.state.fecha/1000)}</h4> */}
                <h4>Fecha actual: {`${this.state.fecha.getDay()}/${this.state.fecha.getMonth()}/${this.state.fecha.getFullYear()}`}</h4>
                <h4>{`Hora: ${this.state.fecha.getHours()}:${this.state.fecha.getMinutes()}:${this.state.fecha.getSeconds()}`}</h4>
                {/* aca para probar el ejemplo de mount (id elemento) */}
                <form id="elemento">
                    <div className="ed-grid m-grid-2" >
                        <div className="form__item">
                            <label>Nombre Completo</label>
                            <input 
                            type="text"
                            onChange={this.cambiarNombre}/>
                        </div>
                        {/* aca dejo y no uso el cambiarCorreo pa q se vea como es d otra simple forma pero mejor es con el metodo cambiar correo */}
                        <div className="form__item">
                            <label>Correo Electronico</label>
                            <input 
                            type="text" 
                            onChange={e => this.setState({
                                correo: e.target.value
                            })}/>
                        </div>
                    </div>
                    <div className="form__item">
                        <input className="button full" type="submit" value="Enviar"/>
                    </div>
                </form>
                <div>
                    <h2>{`Hola ${this.state.nombre}`}</h2>
                    <p>{`Tu correo es: ${this.state.correo}`}</p>
                </div>
            </div>
        )
    }
    //Este viene luego del render
    componentDidMount() {
        let elemento = document.getElementById("elemento")
        console.log(elemento)
        this.intervaloFecha = setInterval(() => {
            this.cambiarFecha()
            console.log(new Date())
        },1000)
    }

    componentDidUpdate(prevProps,prevState) {
        /* console.log(prevProps)
        console.log(prevState)
        console.log('-------------') */
    }
    //buena practica pa limpiar las ejecuciones asincronas q se vayan haciendo
    //util pa navegacion en pantalla... limpiar intervalos , verificaciones periodicas etc
    componentWillUnmount(){
        clearInterval(this.intervaloFecha)
    }

}

export default Formulario