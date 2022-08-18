import React, {Component} from "react"

class CountApp extends React.Component{
    constructor(){
        super();
        this.state ={
            count:0,
        }
    }
    handleAdd(){
        this.setState((prevState)=>{
                return{
                    count:prevState.count+1
                }
            }
        )
    }
    handleMinus(){
        this.setState((prevState)=>{
                return{
                    count:prevState.count-1
                }
            }
        )

    }
    render(){
        return(
            <div>
            <h1>Results</h1>
            <p>Count:{this.state.count}</p>
            <button onClick ={()=>this.handleAdd()}>Add one</button>
            <button onClick = {()=> this.handleMinus()}>Minus one</button>
        
            </div>
        )
    }
}
export default CountApp;