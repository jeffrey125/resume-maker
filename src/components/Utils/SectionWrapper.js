import React from "react";

import styled from "styled-components";

const SectionWrapper = ({ children }) => {
  return <SectWrapper>{children}</SectWrapper>;
};

const SectWrapper = styled.div`
  display: grid;
  padding: 5rem 20rem 
`;

export default SectionWrapper;