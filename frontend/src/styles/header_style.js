import styled from "styled-components";

export const BigTitle = styled.h1`
font-size: 5vw;
font-weight: bold;
margin-top: -15px;
margin-bottom: -10px;
text-align: center;
text-shadow: -1px 1px  8px black;

background: ${({ theme }) => theme.body};
color: ${({ theme }) => theme.text};
transition: all 0.50s linear;
`;
