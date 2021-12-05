import React from 'react';
import './Dialogs.css';
import { Field, reduxForm } from "redux-form";
import {maxLengthCreator, requiredField} from "./../Validators/validators"
import { Textarea } from '../common/FormsControls/FormsControls';



const MaxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {

  return <form onSubmit ={props.handleSubmit}>
    <div className='sendMessage'>
    <Field placeholder="Enter your message..."
           name={"newMessageText"} 
           component={Textarea} 
           validate = {[requiredField,MaxLength50]}
           />
      <button type="submit">Send</button>
    </div>
  </form>
}

export default reduxForm({
  form: 'dialogAddMessageForm'
})(AddMessageForm);