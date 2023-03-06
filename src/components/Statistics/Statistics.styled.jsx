import styled from "@emotion/styled";

export const Container = styled.section`
width: 400px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin:auto;
margin-bottom:40px;
border-radius:10px;
box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
background-color: aliceblue;`;


export const Title = styled.h2`
font-size: 24px;
font-weight:bold;`;


export const StatList = styled.ul`
display: flex;
justify-content: space-between;
align-content: stretch;
width: 350px;

margin-bottom:40px;
background-color:lightblue;
border-radius: 10px;`;


export const StatItem = styled.li`
display: flex;
flex-direction:column;
align-items:center;
width: 100%;
padding:15px;
:not(:last-child) {
    border-right: 1px solid aliceblue;
      :hover,
  :focus {
    background-color: #1E90FF;
  }`;


export const Label = styled.span`

`;


export const Percentage = styled.span``;