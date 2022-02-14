import React, {useState, useEffect, Fragment} from "react";
import axios from 'axios';

import products from '../products'

class Bonsai extends React.Component {

    constructor(props) {
        super(props)
    
        this.state = {
            products: []
        }
    }

    componentDidMount(){

        console.log(products)
/*
        axios.get("/imogene-willy/db.php", {
            headers: {
              'Access-Control-Allow-Origin': '*'
            }
          })
        .then(res => {
          const people = JSON.parse(res.data)
          //this.setState = people

          console.log(people)
        })*/
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