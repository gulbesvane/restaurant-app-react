import React from 'react'; 
import {useState} from 'react'; 

function Form() {
  //variables for name input
  const [nameInput, setNameInput] = useState(""); 
  const [nameInputTouched, setNameInputTouched] = useState(false); 
  const nameInputValid = nameInput.trim() !==""; 
  const nameInputInvalid = !nameInputValid && nameInputTouched; 

  //variables for email input
  const [emailInput, setEmailInput] = useState(""); 
  const [emailInputTouched, setEmailInputTouched] = useState(false); 
  const emailInputValid = emailInput.includes("@"); 
  const emailInputInvalid = !emailInputValid && emailInputTouched; 

  //variables for message input
  const [messageInput, setMessageInput] = useState(""); 
  const [messageInputTouched, setMessageInputTouched] = useState(false); 
  const messageInputValid = messageInput; 
  const messageInputInvalid = !messageInputValid && messageInputTouched; 

  //overall form validation

  let formIsValid = false; 

  if (nameInputValid){
    formIsValid = true; 
  }

  //function for name input validation
  function handleNameInput(e){
    e.preventDefault()
    setNameInput(e.target.value)
  }

  function handleNameInputBlur(e){
    e.preventDefault()
    setNameInputTouched(true); 
  }

   //function for email input validation
   function handleEmailInput(e){
    e.preventDefault()
    setEmailInput(e.target.value)
  }

  function handleEmailInputBlur(e){
    e.preventDefault()
    setEmailInputTouched(true); 
  }

   //function for message input validation
   function handleMessageInput(e){
    e.preventDefault()
    setMessageInput(e.target.value)
  }

  function handleMessageInputBlur(e){
    e.preventDefault()
    setMessageInputTouched(true); 
  }

  //change of state after sending the email
  function sendMessage(e){
      e.preventDefault()
      
      setNameInputTouched(true); 
      setEmailInputTouched(true); 
      setMessageInputTouched(true); 

      if (!nameInputValid && !emailInputValid && !messageInputValid) {
        return; 
      }

      console.log(nameInput); 
      console.log(emailInput);
      console.log(messageInput);

      //resetting form fields to blanks and ready for another submission
      setNameInput('');
      setNameInputTouched(false);  

      setEmailInput('');
      setEmailInputTouched(false); 

      setMessageInput('');
      setMessageInputTouched(false); 
  }; 

  //css classes to visualise error
  const inputClasses = nameInputInvalid
    ? 'form-input invalid'
    : 'form-input'; 

  //form
  return (
    <div>
      <h4>We want to hear from you:</h4>
      <br/>
      <form onSubmit={sendMessage}>
        <div className={inputClasses}>

          <div className='form-group'>
            <label htmlFor='fname'>Name* </label><br/>
            <input 
              className='form-input-field'
              type='text' 
              id='fname'
              name='fname'
              onChange={handleNameInput} 
              onBlur={handleNameInputBlur}
              value={nameInput}
              placeholder="Name"
            />
            {nameInputInvalid && (
              <p className='form-input-error'>This field is required. Don't be shy and share your name!</p>
            )}
          </div>
          
          <div className='form-group'>
              <label htmlFor='email'>Email* </label><br/>
              <input 
              className='form-input-field'
              type='email' 
              id='email'
              name='email'
              onChange={handleEmailInput} 
              onBlur={handleEmailInputBlur} 
              value={emailInput}
              placeholder="Email address"/>
              {emailInputInvalid && (
                <p className='form-input-error'>Oops! It's not a valid email! Remember about @</p>
              )}
          </div>

          <div className='form-group'>
              <label>Message* </label><br/>
              <textarea  
                className='form-input-field'
                type='text' 
                id='text'
                name='text'
                onChange={handleMessageInput} 
                onBlur={handleMessageInputBlur} 
                value={messageInput}
                placeholder="Message"/>
              {messageInputInvalid && (
                <p className='form-input-error'>This field is required so, tell us something!</p>
              )}
          </div>
          
        </div>
        <button type='submit' className="btn-sml">Send!</button>
      </form>
    </div>
  )
}

export default Form; 