import "./App.css";
import React, { Component } from "react";
import LabelledInput from "./components/LabelledInput/LabelledInput";
import SubmitInput from "./components/SubmitInput/SubmitInput";


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isSubmitted : false,
      mail : null,
    };
  }

  onSubmit(e) {
    const form = new FormData(e.target);
    const mail = form.get("mail");
    e.preventDefault();
    this.setState({isSubmitted : true, mail : mail})    
  }

  render() {

    return (
      <div id="wrapper">
        <img
          src="https://syndic-en-un-clic.fr/static/syndic-en-un-clic-logo_white-007b901bf15d8b38c3e0f27d8921de31.svg"
          alt="syndic en un clic"
        />
          {this.state.isSubmitted
                ? <p>Bienvenue : {this.state.mail} </p>
                : <div id="formWrapper">

                <form id="form" onSubmit={(e) =>  this.onSubmit(e)  }>
                      
                  <LabelledInput type="email" placeholder="votre@mail.fr" id="mail" name="mail"/>
      
                  <LabelledInput type="password" placeholder="*********" id="pwd" name="pwd"/>
      
                  <SubmitInput type="submit" value="SE CONNECTER" id="submit"/>
      
                </form>
              </div>
          }

      </div>
    );
  }



}

export default App;
