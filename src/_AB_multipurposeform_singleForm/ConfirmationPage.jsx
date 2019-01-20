import React from 'react'
import { reduxForm } from 'redux-form'
import validate from './validate'
import { Container, Grid, Divider, Header, Message } from "semantic-ui-react";

const ConfirmationPage = props => {
  const { handleSubmit, pristine, previousPage, submitting } = props
	console.log("​confirmation props.form.wizard", props.form.wizard)

  return (
    <Container>
      <Grid columns={3} >
      <Grid.Row>
        <Grid.Column>

        </Grid.Column>
        <Grid.Column>


        </Grid.Column>
        <Grid.Column>


        </Grid.Column>
      </Grid.Row>

      </Grid>
    </Container>
  )
}
export default reduxForm({
  form: 'wizard', //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(ConfirmationPage)