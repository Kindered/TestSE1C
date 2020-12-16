import "./App.css";
import React, { Component } from "react";
import LabelledInput from "./components/LabelledInput/LabelledInput";
import SubmitInput from "./components/SubmitInput/SubmitInput";


class App extends Component {
  render() {
    return (
      <div id="wrapper">
        <img
          src="https://syndic-en-un-clic.fr/static/syndic-en-un-clic-logo_white-007b901bf15d8b38c3e0f27d8921de31.svg"
          alt="syndic en un clic"
        />

        <div id="formWrapper">
          <form id="form">
            <LabelledInput
              type="email"
              placeholder="votre@mail.fr"
              id="mail"
              name="mail"
            />

            <LabelledInput
              type="password"
              placeholder="*********"
              id="pwd"
              name="pwd"
            />

            <SubmitInput
            type="submit" 
            value="SE CONNECTER" 
            id="submit"
            />

          </form>
        </div>
      </div>
    );
  }
}

export default App;
