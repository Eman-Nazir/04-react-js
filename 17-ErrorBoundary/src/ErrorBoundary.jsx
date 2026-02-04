import {Component } from "react"
class ErrorBoundary extends Component{
    //  we use conctructor in class
    // variable intialize in class we use constructor 
    constructor(props){
      super(props)
      this.state =    {
        hasError:false,
        error:null,
        errorInfo:null
      }    
    }
    // getDerivedStateFromError this function run by defaulr  when an error occur 
    static getDerivedStateFromError(error){
        return{
          hasError:true,
         error:error
        }}
  componentDidCatch(error,errorInfo){
    console.log("Error Boundary caught an error:",error,errorInfo);
  }
// render return jsx 
   render(){
    if(this.state.hasError){
        // return <h2>Something went Wrong </h2>
        return (
            <div className='border-red-600 border-2 p-4 m-2 bg-red-300'> 
                <h2>Oops something went wrong...</h2>
                <div>{this.props.fallback} </div>
                <div>{this.state.error.message}</div>
            </div>
        )}
   return this.props.children

   }}
export default ErrorBoundary