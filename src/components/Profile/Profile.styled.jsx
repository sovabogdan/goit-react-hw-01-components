import styled from "@emotion/styled";

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 300px;
margin:auto;
margin-top: 100px;
background-color: aliceblue;
border-radius: 10px;
`;


export const Description = styled.div`
display: flex;
flex-direction:column;
align-items: center;
margin: 40px;
`;


export const Avatar = styled.img`
width:200px;
height:200px;`;


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
width: 100%;
background-color:lightblue;`;


export const StatsEl = styled.li`
display: flex;
flex-direction:column;
align-items:center;
width: 100px;
padding:15px;
border:1px solid #87CEEB;`;


export const Label = styled.span`
color:grey;
margin-bottom:10px`;


export const Quantity = styled.span`
font-weight:bold;`;