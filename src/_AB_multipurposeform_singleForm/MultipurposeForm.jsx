import React, { Component } from 'react'
import { Container, Divider, Header } from "semantic-ui-react";
import WizardForm from './WizardForm'
import FullForm2 from './FullForm2'
import { isFulfilled } from 'q';

class MultipurposeForm extends Component {

  render() {

    return (
      <Container>
        <Divider hidden />
        <Header as='h1' dividing >
        Multipurpose Form
        </Header>
        <Divider hidden />

        <FullForm2 onSubmit={() => console.log("MultipurposeForm was submitted")} />

          </Container>
    )
  }
}


export default MultipurposeForm