import React from "react";
import { Field, FieldArray, reduxForm } from "redux-form";
import {
  Grid,
  Form,
  TextArea,
  Label,
  Input,
  Button,
  Dropdown,
  Segment
} from "semantic-ui-react";
import MyTextArea from "./myFormInputs/MyTextArea";

const renderDrop = ({ input, label, options }) => (
  <Dropdown
    selection
    {...input}
    value={input.value}
    placeholder={label}
    options={options}
  />
);
const bcbas = [
  { key: "davis_thea", text: "Thea Davis #1073430", value: "1073430" },
  { key: "booth_cathy", text: "Cathy Booth #1073292", value: "1073292" },
  { key: "wolf_samantha", text: "Samantha Wolf #11520613", value: "11520613" }
];

const renderInputField = ({
  input,
  label,
  placeholder,
  rows,
  meta: { touched, error }
}) => (
  <Input
    {...input}
    placeholder={placeholder}
    rows={rows}
    error={touched && !!error}
  />
);

const renderTextArea = ({
  input,
  label,
  placeholder,
  rows,
  meta: { touched, error }
}) => (
  <TextArea
    style={{ minHeight: 100 }}
    autoHeight
    {...input}
    placeholder={placeholder}
    error={touched && !!error}
  />
);

const renderMembers = ({ fields, meta: { error, submitFailed } }) => (
  <div>
    {fields.map((member, index) => (
      <div>
        <Segment padded key={index}>
          <Label attached="top left">Goal #{index + 1}</Label>

          <Grid stackable>
            <Grid.Column width={7}>
              <Field
                name={`${member}.firstName`}
                type="text"
                component={renderTextArea}
                label="Goal"
                placeholder="Enter the patient goal"
              />
            </Grid.Column>
            <Grid.Column width={7}>
              <Field
                name={`${member}.lastName`}
                type="text"
                component={renderTextArea}
                label="Notes"
                placeholder="Additional Notes"
              />
            </Grid.Column>
            <Grid.Column width={1}>
              <Button
                icon="trash alternate"
                floated="right"
                size="tiny"
                color="red"
                type="button"
                title="Delete"
                onClick={() => fields.remove(index)}
              />
            </Grid.Column>
          </Grid>
        </Segment>
      </div>
    ))}
    <br />
    <Button primary type="button" onClick={() => fields.push({})}>
      New Goal
    </Button>
    {submitFailed && error && <span>{error}</span>}
  </div>
);

const FieldArraysForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <Form onSubmit={handleSubmit}>
      <FieldArray name="members" component={renderMembers} />
      <br />

      <Field name="myInputField" component={renderInputField} />
      <br />
      <Field name="myTextArea" rows={6} component={renderTextArea} />
      <br />
      <Field
        name="myTextAreaImport"
        placeholder="this came from MyTextArea.jsx"
        component={MyTextArea}
      />
      <br />
      <Field
        name="rawTextArea"
        placeholder="<TextArea />"
        component={TextArea}
      />
      <br />

      <Field
        name="dropdownName"
        component={renderDrop}
        label="Dropdown Test"
        options={bcbas}
      />

      <div>
        <Button type="submit" disabled={submitting}>
          Submit
        </Button>
        <Button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </Button>
      </div>
    </Form>
  );
};

export default reduxForm({
  form: "fieldArrays" // a unique identifier for this form
})(FieldArraysForm);
