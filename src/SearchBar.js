import React from "react";
import { MDBCol, MDBIcon } from "mdbreact";
import { useState } from "react";
import { Route } from "react-router";
import  Dropdown  from "react-bootstrap/Dropdown";

const SearchBar = () => {

  const[input, setInput] = useState("");
  const handleChange=(event)=>{
    setInput(event.target.value);
  }

  const submit=(event)=>{
    if(input!==""){
      if(event.keyCode==13){
        event.preventDefault();
        window.location.href = input;
      }
    }
  }

  return (
    <MDBCol md="6">
      <form className="form-inline mt-4 mb-4" >
      <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Dropdown Button
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
        <MDBIcon icon="search" />
        <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search" onChange={handleChange} onKeyDown={submit} />
      </form>
    </MDBCol>
  );
}

export default SearchBar;