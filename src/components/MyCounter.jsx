import { Component } from "react";

export default class Content extends Component {
    constructor(){
        super();
    }
    state = ({
        title : "Hello content component",
        count: 0 
    })

    cilckHandler = () =>{
        this.setState({
            title : "Title changed" 
        })
    }
    increase = ()=>{
        this.setState({
            count : this.state.count + 1
        })
    }

    decrease = ()=>{
        if(this.state.count > 0){
            this.setState({
                count : this.state.count - 1
            })
        }
        
    }

    render(){
        return(
            <section className="alert alert-info text-center py-3">
                <h2>{this.state.title}</h2>
                <button className="btn btn-warning" onClick={this.cilckHandler}>Click Here</button>
               
                <p className="mt-4 fs-3">
                    count is : <strong className="text-danger fs-4">{this.state.count}</strong>
                </p>
                <button className="btn btn-success mx-3" onClick={this.increase}>+</button>  
                <button className="btn btn-danger mx-3" onClick={this.decrease}>-</button>
                {(this.state.count == 0) && <p className="text-danger">Can't decrease counter less than 0</p>}  
                  
            </section>
        )
    }
}