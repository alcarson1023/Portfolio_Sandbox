import styled from "styled-components";

export const FixedContent = styled.div`
position: fixed;
top: 0;
width: 80vw;
z-index: 2;
// box-shadow: 10px 10px 20px black;
margin-left: 10vw;
width: 80vw;
`;

export const PageContainer = styled.div`
margin-top: 103px;
margin-left: 10vw;
width: 74vw;
height: 100%;
background-color: none;
position: relative;
z-index: 1;
padding: 3vw;
`;

export const ShadowBox = styled.div`
margin-left: 10vw;
width: 80vw;
height: 100vh;
background-color: gray;
box-shadow: -10px -10px 40px black;
position: fixed;
z-index: 0;
`;


// Put another fixed box behind the page content, and give that one a shadow.


// Set two sibling divs, the background below the text.
// Set the text box to scroll, but cutoff overflow at a point.
// Set the background to keep scrolling.
// Probably need different positions and overflow policies.