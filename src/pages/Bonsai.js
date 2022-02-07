import React, {useState, useEffect, Fragment} from "react";
import axios from 'axios';

class Bonsai extends React.Component {

    constructor(props) {
        super(props)
    
        this.state = {
            products: []
        }
    }

    componentDidMount(){

        axios.get(`//flowers.home-trees.ru/db.php`)
        .then(res => {
          const people = JSON.parse(res.data)
          //this.setState = people

          console.log(people)
        })
    }

    render(){
        return (

            <div>{this.state.products.map((index, item) => <div>{item}</div>)}</div>
        )
    }
}



export default Bonsai




/*
class Bonsai extends React.Component {

    constructor(props) {

        super(props)
        this.test = 'test'
    }

    render() {
        return (
            <>{this.test}</>
        )
    }
}*/