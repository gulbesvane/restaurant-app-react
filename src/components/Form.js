import React from 'react'; 
import {useState} from 'react'; 

function Form() {
  const [text, setText]=useState("")

  function sendMessage(e){
      e.preventDefault()

  }
  return (
    <div>
      <h4>We want to hear from you:</h4>
      <br/>
      <form>
        <div>
            <label>Name: </label>
            <input value={text} placeholder="Name"/>
        </div>
        <br/>
        <div>
            <label>Email: </label>
            <input value={text} placeholder="Email address"/>
        </div>
        <br/>
        <div>
            <label>Message: </label>
            <input value={text} placeholder="Message"/>
        </div>
      </form>
      <br/>
      <button className="btn-sml" onClick={sendMessage}>Send!</button>
    </div>
  )
}

export default Form; 