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
margin-top: 53px;
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
margin-top: 50px;
width: 80vw;
height: 100vh;
background-color: gray;
box-shadow: -10px -10px 40px black;
position: fixed;
z-index: 0;
`;

export const CodeBlock = styled.div`
display: flex;
flex-wrap: wrap;
font-family: monospace;
width: 100%;
`;

export const BothPanels = styled.div`
display: flex;
flex-wrap: wrap;
`;
  
export const LeftPanel = styled.div`
width: 50%;
flex: 1;
box-sizing: border-box;
padding: 10px;
`;

export const RightPanel = styled.div`
width: 50%;
flex: 1;
background-color: lightslategray;
box-sizing: border-box;
padding: 10px;
`;

export const Header = styled.div`
text-align: center;
width: 100%;
flex: 1;
`;

export const PanelButton = styled.div`
width: 100%;
flex: 1;
color: orange;
`;

// Put another fixed box behind the page content, and give that one a shadow.


// Set two sibling divs, the background below the text.
// Set the text box to scroll, but cutoff overflow at a point.
// Set the background to keep scrolling.
// Probably need different positions and overflow policies.