import React from 'react';


class CounterClass extends React.Component{

    constructor(){
        super()
        this.state={
           name:"hari",
           id:101
        }
    }
    render(){
        return<div>
           <h1>Hello this is class componet</h1>
           <h2>my name is {this.state.name} and my id is {this.state.id}</h2>
        </div>
    }
}
export default CounterClass
