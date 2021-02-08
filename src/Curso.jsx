import React from 'react'

const Curso = () => (
    <article className="s-shadow-bottom">
      
          <div className="s-ratio-16-9 img-container s-radius-tl s-radius-tr">
              <img src="https://images.pexels.com/photos/2252557/pexels-photo-2252557.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="PosterCurso"/>
          </div>
          
          <div className="s-bg-white s-pxy-2">
              <h3>Curso Bases de Datos Desde Cero</h3>
              <p className="s-mb-0">Diseña, estructura y administra bases de datos SQL y crea un sistema de facturación</p>
          </div>
          <footer className="s-cross-center s-bg-grey s-pxy-2 s-radius-br s-radius-bl">
              
              <div className="s-10 s-mr-1">
              
              <div className="circle ">
                  <img  src="https://images.pexels.com/photos/2252557/pexels-photo-2252557.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="FotoProfe"/>
              </div>
              
              </div>
              <p className="s-mb-0">Prof. Alexys Lozada</p>
              
              <div className="button s-to-right">$40USD</div>
          </footer>
      </article>
)

export default Curso