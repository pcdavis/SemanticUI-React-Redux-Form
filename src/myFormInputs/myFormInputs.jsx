/*-----------Important Notes--------------
 You don't need any special mappings for <Form.Input> because it gets passed events from native inputs. The situation with other components is more complicated, because the redux <Field> relies on the native events. However, it can be filxed easily by using a stateless function - like the exports below. We recomend to wrap them with generic components to reduce forms complexivity.

 ALSO - IMPORTANT!! -- To get React-Semantic-UI functionality to work with redux adn redux-form, YOU MUST use the React-Semantic-UI <Form> to wrap the redux-form <Field> elements. Don't use the redux-form <Form> element.

 */

import React from "react";
import { Field } from "redux-form";
import { Form, Message, Label } from "semantic-ui-react";



export const Checkbox = field => (
  <Form.Checkbox
    checked={!!field.input.value}
    name={field.input.name}
    label={field.label}
    onChange={(e, { checked }) => field.input.onChange(checked)}
  />
);

export const Radio = field => (
  <Form.Radio
    checked={field.input.value === field.radioValue}
    label={field.label}
    name={field.input.name}
    onChange={(e, { checked }) => field.input.onChange(field.radioValue)}
  />
);

export const Select = field => {
    console.log('%c SELECT field argument: ','color: green', field )
    return (
  <Form.Select
    label={field.label}
    name={field.input.name}
    onChange={(e, { value }) => field.input.onChange(value)}
    options={field.options}
    placeholder={field.placeholder}
    value={field.input.value}
  />
)};

export const TextArea = field => {
    console.log('%c TEXTAREA field argument: ','color: blue', field )
    return (
  <Form.TextArea
    {...field.input}
    rows={field.rows}
    autoHeight={field.autoHeight}
    label={field.label}
    placeholder={field.placeholder}
  />
)};

export const MyTextArea = ({input, rows, width, label, placeholder, meta: {touched, error}}) => {

    return (
      <Form.Field error={touched && !!error} width={width}>

        <textarea {...input} label={label} placeholder={placeholder} rows={rows}></textarea>
        {touched && error && <Label basic color='red'>{error}</Label>}
      </Form.Field>
    )
  }


/* ------------ Example Uses ------------------------

      <Form onSubmit={handleSubmit}>
        <Form.Group widths="equal">
          <Field
            component={Form.Input}
            label="First name"
            name="firstName"
            placeholder="First name"
          />
          <Field
            component={Form.Input}
            label="Last name"
            name="lastName"
            placeholder="Last name"
          />
          <Field
            component={Select}
            label="Gender"
            name="gender"
            options={[
              { key: "m", text: "Male", value: "male" },
              { key: "f", text: "Female", value: "female" }
            ]}
            placeholder="Gender"
          />
        </Form.Group>

        <Form.Group inline>
          <label>Quantity</label>

          <Field
            component={Radio}
            label="One"
            name="quantity"
            radioValue={1}
          />
          <Field
            component={Radio}
            label="Two"
            name="quantity"
            radioValue={2}
          />
          <Field
            component={Radio}
            label="Three"
            name="quantity"
            radioValue={3}
          />
        </Form.Group>

        <Field
          component={TextArea}
          label="About"
          name="about"
          placeholder="Tell us more about you..."
        />

        <Field
          component={Checkbox}
          label="I agree to the Terms and Conditions"
          name="isAgreed"
        />

        <Form.Group inline>
          <Form.Button primary>Submit</Form.Button>
          <Form.Button onClick={reset}>Reset</Form.Button>
        </Form.Group>
      </Form>

*/