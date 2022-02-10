import React, { Component } from 'react';

//* this.(algo) hace referencia a la instancia de la clase
class ErrorBoundary extends Component {
    
    constructor(props){ 
        super(props)

        this.state = {
            hasError: false
        }
    } 

    static getDerivedStateFromError(error) {
        return { hasError: true }
    }

    componentDidCatch(error, errorInfo) {
        console.log("ErrorInfo", errorInfo)
    }

    render() {
        return (
            this.state.hasError ? 
            (<h1>And error has ocurred</h1>) 
            :
            (this.props.children)
        )
    }
} 


export default ErrorBoundary