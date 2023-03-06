import styled from "@emotion/styled";

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 400px;
margin:auto;
margin-top: 100px;
margin-bottom:50px;
background-color: aliceblue;
border-radius: 10px;
box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
`;


export const Description = styled.div`
display: flex;
flex-direction:column;
align-items: center;
margin: 40px;
`;


export const Avatar = styled.img`
width:200px;
height:200px;
border-radius:50%;`;


export const Name = styled.p`
font-size: 24px;
font-weight:bold;`;


export const Tag = styled.p`
color:grey;
margin-top: 0;
margin-bottom: 10px;`;


export const Location = styled.p`
margin: 0;
color:grey;`;


export const Stats = styled.ul`
display: flex;
justify-content: space-between;
align-content: stretch;
width: 350px;

margin-bottom:40px;
background-color:lightblue;
border-radius: 10px;
`;


export const StatsEl = styled.li`
display: flex;
flex-direction:column;
align-items:center;
width: 100%;
padding:15px;
:not(:last-child) {
    border-right: 1px solid aliceblue;}
      :hover,
  :focus {
    background-color: #1E90FF;
  }
`;


export const Label = styled.span`
color:grey;
margin-bottom:10px`;


export const Quantity = styled.span`
font-weight:bold;`;