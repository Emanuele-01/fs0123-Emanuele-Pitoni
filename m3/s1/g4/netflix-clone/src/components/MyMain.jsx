import { Component } from "react";
import MyCarosel from "./MyCarosel";
// import MyCaroselSecond from "./MyCaroselSecond";
// import MyCaroselThird from "./MyCaroselThird";


class MyMain extends Component{

    state = {
        Lungometraggio: [],
        Lungometraggio1: [],
        Lungometraggio2:[],
        Lungometraggio3: [],
        Lungometraggio4: [],
        Lungometraggio5: [],
        Lungometraggio6: []
    };
    
    async componentDidMount() {
        try {
            const response = await fetch("http://www.omdbapi.com/?apikey=76941a40&s=harry%20potter%22")
    
            if (response.ok) {
                const data = await response.json();
                this.setState({ Lungometraggio: data.Search });
            } else {
                console.log("error");
            }
        } catch (error) {
            alert(error);
        }
        try {
            const response = await fetch("http://www.omdbapi.com/?apikey=76941a40&s=avengers")
    
            if (response.ok) {
                const data = await response.json();
                this.setState({ Lungometraggio1: data.Search });
            } else {
                console.log("error");
            }
        } catch (error) {
            alert(error);
        }
        try {
            const response = await fetch("http://www.omdbapi.com/?apikey=76941a40&s=grey's+anatomy")
    
            if (response.ok) {
                const data = await response.json();
                this.setState({ Lungometraggio2: data.Search });
            } else {
                console.log("error");
            }
        } catch (error) {
            alert(error);
        }
    }
    render(){
        return(
            <>
                <MyCarosel key={this.state.Lungometraggio.map((e)=> (e.imdbID))} src={this.state.Lungometraggio.map((e)=> (e.Poster))} alt= {this.state.Lungometraggio.map((e)=> (e.Title))} key2={this.state.Lungometraggio1.map((e)=> (e.imdbID))} src2={this.state.Lungometraggio1.map((e)=> (e.Poster))} alt2= {this.state.Lungometraggio1.map((e)=> (e.Title))} key3={this.state.Lungometraggio2.map((e)=> (e.imdbID))} src3={this.state.Lungometraggio2.map((e)=> (e.Poster))} alt3= {this.state.Lungometraggio2.map((e)=> (e.Title))}/>
            </>
        )
    }
}

export default MyMain;