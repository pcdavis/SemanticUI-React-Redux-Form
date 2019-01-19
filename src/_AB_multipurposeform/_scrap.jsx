<div>
<Button primary type="submit" className="next">
  Next
</Button >
</div>

<Field
name="firstName"
type="text"
component={renderField}
label="First Name"
/>
<Field
name="lastName"
type="text"
component={renderField}
label="Last Name"
/>
<Field
  component={Checkbox}
  label="I agree to the Terms and Conditions"
  name="isAgreed"
/>

//Radio button group

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

//Another radio
<Form.Field>
          Selected value: <b>{this.state.value}</b>
        </Form.Field>
        <Form.Field>
          <Radio
            label='Choose this'
            name='radioGroup'
            value='this'
            checked={this.state.value === 'this'}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='Or that'
            name='radioGroup'
            value='that'
            checked={this.state.value === 'that'}
            onChange={this.handleChange}
          />
        </Form.Field>

//TextArea with Checkbox
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

//email
<Field name="email" type="email" component={renderField} label="Email" />

<button type="button" className="previous" onClick={previousPage}>
Previous
</button>
<button type="submit" className="next">
Next
</button>