import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

function NavForm(props) {
  return (
    <div className=" d-lg-flex d-none">
      <div className="form-group position-relative d-flex align-items-center mb-0 ">
        <span className="position-absolute search-icon">
          <label htmlFor="exampleInputEmail1" className="mb-0">
            <i className="fa fa-search"></i>
          </label>
        </span>
        <Input
          type="email"
          className="form-control lll"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="ابحث"
          disabled
        />
      </div>
    </div>
  );
}

export default NavForm;
const Input = styled.input`
  min-width: 230px;
  border-radius: 15px;
  border: 1px solid rgba(0, 0, 0, 0.2);

  &:active,
  &:focus {
    box-shadow: none;
    border-color: #ff699d;
  }
  &::placeholder {
    color: rgba(0, 0, 0, 0.4);
  }
`;
