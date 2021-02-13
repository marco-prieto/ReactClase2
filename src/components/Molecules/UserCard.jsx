import React from 'react'

const UserCard = ({name,username,email})  =>(

    <article className="s-shadow-bottom" id="title">    
        <div className="s-bg-white s-pxy-2">
            
            <h3 className="center">{name}</h3>        
            <br></br>            
            <div>
            <h3>{username}</h3>
            </div>
        </div>
        <footer className="s-cross-center s-bg-grey s-pxy-2 s-radius-br s-radius-bl">                    
            <div className="button s-to-right">{email}</div>
        </footer> 
    </article>
)

export default UserCard