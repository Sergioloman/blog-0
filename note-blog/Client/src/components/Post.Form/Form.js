import React, { useState } from "react";
import { Form, Button, InputGroup } from 'react-bootstrap'
///import {addPost} from Methods/somwehere//

const PostForm = () => {
  const [ input, setInput] = useState({
    username:'',
    postText:''
  })

  const handleChange = async event => {
    const  {name, value} = event.target;

    setInput(prevInput =>{
      return {
        ...prevInput,
        [name]:value
      }
    })
  }

  const handleSubmit = async event => {
    event.preventDefault()
    console.log(input)
    
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-1 p-5 bg-dark" >
        <Form.Label className="text-light "><b>This could be something</b></Form.Label>
        <InputGroup className="mt-1">
          <Form.Control 
          onChange={handleChange}
          name="postText" 
          value={input.postText} 
          as="textarea" 
          rows={3} 
          placeholder="A tought, or nothing at all ..." />
        </InputGroup>
        <InputGroup className="mt-1">
          <Form.Control 
          onChange={handleChange} 
          name="username"
          value={input.username} 
          type="username" 
          placeholder="left here by ..." />
          <Button variant="danger" type="submit">Done</Button>
        </InputGroup>
      </Form.Group>
    </Form>
  );
}


export default PostForm