import React from "react";

import styled from "styled-components";
import image from "../../assets/sample-photo.png";

const UploadFile = ({ onChange }) => {
  return (
    <Label>
      <Placeholder>Upload<br></br>Photo</Placeholder>
      <InputWrapper
        type="file"
        name="my-photo"
        onChange={onChange}
      ></InputWrapper>
    </Label>
  );
};

const Label = styled.label`
  display: inline-block;
  width: 51mm;
  height: 49mm;
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: 50%;
  background-image: url(${image});
  background-repeat: no-repeat;
`;

const InputWrapper = styled.input`
  display: none;
`;

const Placeholder = styled.p`
  position: absolute;
  z-index: 30;
  margin-top: 70rem;
  margin-left: 76rem;
  font-size: 12rem;
  color: white;
  text-align: center;
`;

export default UploadFile;