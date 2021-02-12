import React from 'react'
/* import PropTypes from 'prop-types' */

const Banner = () => (
    <section className="main-banner img-container l-section s-py-4">  
        <div className="ed-grid lg-grid-2 row-gap s-gap-2 m-gap-4">
          
          <div className="s-column s-main-center lg-main-start lg-cross-start s-center lg-left">
            <h1>Cursos Online</h1>
            <p>Empieza a estudiar ya mismo!</p>
            
            <div className="s-main-center">
              <a className="button s-mr-2 s-mb-2 m-mb-0" href="https://www.facebook.com/ztknatsu/" target="_blank">Facebook</a>
              <a className="button s-mb-2 m-mb-0" href="https://www.instagram.com/prieto_marco/" target="_blank">Instagram</a>
            </div>
          </div>
          
          <div>
            <div className="img-container s-ratio-16-9">
              <img className="s-radius-1" src="https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"/>
            </div>
          </div>
        </div>
    </section>    
)

export default Banner