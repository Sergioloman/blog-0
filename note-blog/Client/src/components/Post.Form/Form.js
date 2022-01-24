import React from "react";
import {Form, Button } from 'react-bootstrap'
//import { useState } from 'react';

///import {addPost} from Methods/somwehere//

function PostForm({ addPost }) {
    const [value, setValue] = React.useState("");
  
    const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      addPost(value);
      setValue("");
    };
  
    return (
      <Form onSubmit={handleSubmit}> 
      <Form.Group className="mb-1">
        <Form.Label><b>This could be something</b></Form.Label>
        <Form.Control type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder=".........." />
      </Form.Group>
      <Button variant="danger mb-1" type="submit">
        Done
      </Button>
    </Form>
    );
  }


export default PostForm