import React from "react";

import Button from "../Utils/Button";
import { FaDownload } from "react-icons/fa";
import styled from "styled-components";

const BtnGrp = ({ onEditPrev, onDownload, editState }) => {
  return (
    <BtnGrpWrapper>
      <Button
        text="EditPrev"
        onClick={() => {
          onEditPrev(true);
        }}
      >
        Edit
      </Button>
      {editState && (
        <Button
          text="EditPrev"
          onClick={() => {
            onEditPrev(false);
          }}
        >
          Preview
        </Button>
      )}

      {!editState && (
        <Button text="Download" onClick>
          PDF <Download/>
        </Button>
      )}
    </BtnGrpWrapper>
  );
};

const BtnGrpWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20rem;
`;

const Download = styled(FaDownload)`
color: inherit;
background-color:inherit;
`

export default BtnGrp;
