import React from "react";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import validate from "./validate";
import { Container, Icon, Grid, Button, Divider, Header, Segment, Label } from "semantic-ui-react";

const ConfirmationPage2 = props => {
  //   const { handleSubmit, pristine, previousPage, submitting } = props
  console.log("​confirmation2 props", props);
  const { firstName, lastName } = props.values;

  return (
    <Container>
          <Header as='h2'>
    <Icon name='search' />
    <Header.Content>
      Confirmation Page
      <Header.Subheader>Please review the form content one last time before submitting</Header.Subheader>
    </Header.Content>
    <hr/>
  </Header>
      <Header as="h4" attached="top" block>
        Session Details
      </Header>
      <Segment attached>
        <Grid columns="equal">
          <Grid.Row>
            <Grid.Column>
              <div>{`Patient Name: ${firstName} ${lastName}`}</div>
            </Grid.Column>
            <Grid.Column>
              <p>{firstName}</p>
            </Grid.Column>
            <Grid.Column>
              <p>{firstName}</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Button basic onClick={console.log('replace this with {previousPage}')} content='Previous' icon='left arrow' labelPosition='left' />
    </Container>
  );
};

const mapState = state => {
  console.log("​mapState -> state", state);
  return {
    values: state.form.wizard.values
  };
};
export default connect(mapState)(ConfirmationPage2);

//------Attempt to export with connect------NOT Working--------
// export default connect(mapState)(
//  reduxForm({
//         form: 'wizard', //Form name is same
//         destroyOnUnmount: false,
//         forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
//         validate
//       })(ConfirmationPage2)
//       )

