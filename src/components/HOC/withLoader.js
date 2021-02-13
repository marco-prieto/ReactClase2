import React, { Component } from 'react'

const withLoader = (WrappedComponent) => {
    return class WithLoader extends Component {
        constructor(props) {
            super(props)
        }

        render(){
            return <WrappedComponent {...this.props}/>
        }
    }
}
export default withLoader