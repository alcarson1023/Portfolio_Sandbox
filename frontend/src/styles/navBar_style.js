import PropTypes from "prop-types";
import styled, { css } from "styled-components";

export const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #bf4f74;
  color: "#BF4F74";
  margin: 0 1em;
  padding: 0.25em 1em;

  ${(props) =>
    props.$primary &&
    css`
      background: "#BF4F74";
      color: white;
    `};
`;

Button.propTypes = {
  $primary: PropTypes.bool,
};

export const Container = styled.div`
  text-align: right;
  background-color: lightslategray;
  padding: 5px;
  padding-right: 50px;
`;

export const Title = styled.h1`
  /* Heading styles */
`;
