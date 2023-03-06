import styled from "@emotion/styled";

export const FriendContainer = styled.div`
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

export const FriendsList = styled.ul`
display: flex;
flex-direction: column;
justify-content: space-between;
align-content: stretch;
width: 350px;
padding: 15px;
`;

export const Friend = styled.li`
display: flex;
align-items:center;

padding:15px;
background-color:lightblue;
border-radius: 10px;
:not(:last-child) {
    border-bottom: 1px solid aliceblue;}
     :hover,
  :focus {
    background-color: #1E90FF;
  }`;

export const Status = styled.span`
display: inline-block;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-right: 10px;`;

export const Avatar = styled.img`
margin-right:10px;`;

export const Name = styled.p`
font-size:20px;`;

