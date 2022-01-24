import React from "react";
import { Form, Button, InputGroup } from 'react-bootstrap'
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
      <Form.Group className="mb-1 p-5 bg-dark" >
        <Form.Label className="text-light "><b>This could be something</b></Form.Label>
        <InputGroup className="mt-1">
          <Form.Control as="textarea" rows={3} value={value} onChange={e => setValue(e.target.value)} placeholder="A tought, or nothing at all ..." />
        </InputGroup>
        <InputGroup className="mt-1">
          <Form.Control type="username" value={value} onChange={e => setValue(e.target.value)} placeholder="left here by ..." />
          <Button variant="danger" type="submit">Done</Button>
        </InputGroup>
      </Form.Group>
    </Form>
  );
}


export default PostForm