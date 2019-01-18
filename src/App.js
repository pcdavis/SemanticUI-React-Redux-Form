import React, { Component } from "react";
import FieldArraysForm from "./FieldArraysForm";
import GoalsArray from "./GoalsArray";
import ConnectedGoalsArray from "./ConnectedGoalsArray";
import RSRF_Login from "./RSRF_Login";
import RSRF_FieldArray from "./RSRF_FieldArray";
import "./App.css";
import { Container, Segment } from "semantic-ui-react";
import MediumTut from "./mediumTut_react_wizard/MediumTut"; //React and Semantic but not Redux or Redux Form
import SemanticReduxForm from "./SemanticUI_ReduxForm/SemanticReduxForm";

class App extends Component {
  render() {
    return (
      <Container>
        <SemanticReduxForm />
      </Container>
    );
  }
}

export default App;
