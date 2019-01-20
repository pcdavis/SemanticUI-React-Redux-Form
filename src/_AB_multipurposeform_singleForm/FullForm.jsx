import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Form, Container, Header, Icon, Radio, TextArea, FieldArray } from "semantic-ui-react";
import validate from './validate'
import { Select } from '../myFormInputs/myFormInputs'


const FullForm = props => {
  const { handleSubmit, previousPage } = props
  console.log("%c ​fullform props",'color: blue', props)

  return (
    <Container>
       <Header as='h1'>
    <Icon name='unhide' />
    <Header.Content>
      Confirmation Page
      <Header.Subheader>Review your entries one last time before submitting</Header.Subheader>
    </Header.Content>
    <hr/>
  </Header>


    <Form onSubmit={handleSubmit}>

{/* --Service Details----------------------------------- */}
    <Header as='h3' dividing >
            Session Details
        </Header>

        <Form.Group widths="equal">
          <Field
            component={Form.Input}
            label="First name"
            name="firstName"
            placeholder="Patient's first name"
          />
          <Field
            component={Form.Input}
            label="Last name"
            name="lastName"
            placeholder="Patient's last name"
          />
          <Field
            component={Form.Input}
            label="D.O.B."
            name="dob"
            placeholder="Patient's date of birth"
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Field
            component={Select}
            label="Supervising BCBA"
            name="bcba"
            options={[
              { key: "11729072", value: "Allison Laurendeau #11729072", text: "Allison Laurendeau" },
              { key: "11833949", value: "Amber Bouvier #11833949", text: "Amber Bouvier" },
              { key: "1073292", value: "Cathy Booth #1073292", text: "Cathy Booth" },
              { key: "11521156", value: "Courtney Jameson #11521156", text: "Courtney Jameson" },
              { key: "11834061", value: "Heather Parilla #11834061", text: "Heather Parilla" },
              { key: "11210221", value: "Jennifer Post #11210221", text: "Jennifer Post" },
              { key: "11313300", value: "Kerri McGilvreay #11313300", text: "Kerri McGilvreay" },
              { key: "11829542", value: "Mary Frugard #11829542", text: "Mary Frugard" },
              { key: "11832185", value: "Melanie DeFlumeri #11832185", text: "Melanie DeFlumeri" },
              { key: "1073290", value: "Nicole Curran #1073290", text: "Nicole Curran" },
              { key: "11520613", value: "Samantha Wolf #11520613", text: "Samantha Wolf" },
              { key: "1073430", value: "Thea Davis  #1073430", text: "Thea Davis" }
            ]}
            placeholder="Select..."
          />
          <Field
            component={Form.Input}
            label="Date of Service"
            name="serviceDate"
            placeholder="Date of service"
          />
          <Field
            component={Form.Input}
            label="Start Time"
            name="startTime"
            placeholder="Start Time"
          />
          <Field
            component={Form.Input}
            label="End Time"
            name="endTime"
            placeholder="End Time"
          />
          <Field
            component={Select}
            label="CPT Code"
            name="cpt"
            options={[
              { key: "97155-1", text: "97155: Protocol Modification", value: "97155" },
              { key: "97155-2", text: "97155: Direction of BT", value: "97155" },
              { key: "97156", text: "97156: Family / Caregiver Training", value: "97156" },
              { key: "97157", text: "97157: Multiple Family / Caregivers Training", value: "97157" },
              { key: "97158", text: "97158: Group Protocol Modification", value: "97158" }
            ]}
            placeholder="Select..."
          />
        </Form.Group>
{/* ----Service Context----------------------------------- */}
        <Header as='h3' dividing >
            Service Context
        </Header>
        <Form.Group widths="equal">

          <Field
            component={Form.Input}
            label="Others Present"
            name="othersPresent"
            placeholder="List other people present at time of service"
          />

          <Field
            component={Select}
            label="Location"
            name="locationOfServices"
            options={[
              { key: "home", text: "Home", value: "home" },
              { key: "office", text: "Office", value: "office" },
              { key: "community", text: "Community", value: "community" }
            ]}
            placeholder="Select..."
          />
          </Form.Group>

          <Form.Group inline>
          <label>Caregivers present?</label>
          <Field
            component={Radio}
            label="Yes"
            name="caregiversPresent"
            radioValue={true}
          />
          <Field
            component={Radio}
            label="No"
            name="caregiversPresent"
            radioValue={false}
          />
          </Form.Group>

          <Form.Group inline>
          <label>Patient present?</label>
          <Field
            component={Radio}
            label="Yes"
            name="patientPresent"
            radioValue={true}
          />
          <Field
            component={Radio}
            label="No"
            name="patientPresent"
            radioValue={false}
          />
          </Form.Group>

          <Form.Group inline>
          <label>Was service provided face-to-face?</label>
          <Field
            component={Radio}
            label="Yes"
            name="faceToFace"
            radioValue={true}
          />
          <Field
            component={Radio}
            label="No"
            name="faceToFace"
            radioValue={false}
          />
          </Form.Group>
{/* ----Follow Up----------------------------------- */}
          <Header as='h3' dividing >
            Follow Up Items
        </Header>
        <Form.Group inline>
          <Field
            component={Select}
            label="Follow up actions"
            name="followUpActions"
            options={[
              { key: "followUp_1", text: "Make stimuli", value: "Make stimuli" },
              { key: "followUp_2", text: "Design protocols", value: "Design protocols" },
              { key: "followUp_3", text: "Design programs", value: "Design programs" },
              { key: "followUp_4", text: "Adjust prompt levels", value: "Adjust prompt levels" },
              { key: "followUp_5", text: "Add new targets", value: "Add new targets" },
              { key: "followUp_6", text: "Adjust PBSP", value: "Adjust PBSP" }
            ]}
            placeholder="Select..."
          />
          </Form.Group>

          <Form.Group widths="equal" >

          <Field
          component={TextArea}
          autoHeight={true}
          label="Scheduling"
          name="scheduling"
          placeholder="Provide details about any upcoming scheduling issues"
        />
          <Field
          component={TextArea}
          autoHeight={true}
          label="Coordination of care"
          name="careCoordination"
          placeholder="Are there any coordination of care issues?"
        />
                  </Form.Group>

<Form.Group widths="equal" >
          <Field
          component={TextArea}
          autoHeight={true}
          label="Caregivers and RBT concerns regarding barriers and safety"
          name="safetyConcerns"
          placeholder="Detail any concerns"
        />
          <Field
          component={TextArea}
          autoHeight={true}
          label="Peer socialization"
          name="peerSocialization"
          placeholder="Describe any peer socialization opportunities"
        />
          </Form.Group>

<Form.Group widths="equal" >
          <Field
          component={TextArea}
          autoHeight={true}
          label="General Notes"
          name="generalNotes"
          placeholder="Provide any additional noteworthy items"
        />
          </Form.Group>
{/* --Treatment Goals----------------------------------- */}
          <Header as='h3' dividing >
            Treatment Goals
        </Header>


        {/* <FieldArray name="goals" component={renderGoals} /> */}


<Form.Group inline>
<Form.Button basic onClick={previousPage} content='Previous' icon='left arrow' labelPosition='left'  />
<Form.Button primary content='Next' icon='right arrow' labelPosition='right'  />
</Form.Group>


{/* ------------------End of Form inputs----------- */}

        <Form.Group inline>
          <Form.Button basic onClick={previousPage} content='Previous' icon='left arrow' labelPosition='left'  />
          <Form.Button primary content='Next' icon='right arrow' labelPosition='right'  />
        </Form.Group>

        <Form.Group inline>
          <Form.Button content='Next' icon='right arrow' labelPosition='right' primary />
        </Form.Group>
    </Form>
    </Container>
  )
}

export default reduxForm({
  form: 'wizard', // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(FullForm)