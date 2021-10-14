import styled from 'styled-components';

const StyledOverall = styled.div`
  border: 1px dashed green;
  display: flex;
  justify-content: center;
  h2 {
    color: blue;
    margin: 0;
  }
  button{
    margin: 2%;
  }
`


const StyledContainer = styled.div`
  border: 1px solid black;
  display: flex;
  justify-content: center;
  width: 90%;
  padding: 2%;
  box-shadow: 5px 10px;
  h5 {
    color: blue;
    margin: 2%;
  }
  .login{
    flex-flow: row nowrap;
    align-items: center;
  }
`


export {StyledContainer, StyledOverall}