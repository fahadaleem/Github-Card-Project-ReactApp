import React from "react"


const Form = (props)=>{
  return(
    <div >
      <input type="text" id="username-input" placeholder="Type Username and hit Enter" onKeyPress={props.handleInputUserName}/>
      </div>
  )
}


export default Form