import React, { Component } from 'react'
import { Container, Divider, Header } from "semantic-ui-react";
import WizardForm from './WizardForm'

class MultipurposeForm extends Component {

  render() {

    return (
      <Container>
        <Divider hidden />
        <Header as='h1' dividing >
        Multipurpose Form
        </Header>

        <WizardForm onSubmit={() => console.log("MultipurposeForm was submitted")} />

          </Container>
    )
  }
}


export default MultipurposeForm