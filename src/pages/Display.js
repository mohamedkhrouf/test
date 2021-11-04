import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router';
import styled, {css} from 'styled-components'
function Display(props) {
    
     const { state } = useLocation();
  console.log(state);
const history = useNavigate();
    const clear=()=>{
history("/");
    }
    return (
        <div>
            <Cont>
            <Container>
            <Label>NOM:</Label>
            <Value>{state.nom}</Value>
            </Container>
            <Container>

            <Label>PRENOM:</Label>
            <Value>{state.prenom}</Value>
            </Container>
            </Cont>
           
            <Container>
               
            <Label>EMAIL:</Label>

             <Value>{state.email}</Value>
             </Container>
             {state.telephone==""||
               <Container>
             <Label>TELEPHONE:</Label>
              <Value>{state.telephone}</Value>
             </Container>
          
              }
              
              <Button onClick={()=>{clear()}} >clear</Button>
        </div>
    )
}
const Cont = styled.div`
display:flex;
justify-content: space-around;

`
const Container = styled.div`
display:flex;
margin-bottom: 20px;
margin-left:10px;
margin-right:10px;

`
const Label = styled.div`
font-size: 20px;
font-weight: bold;
`
const Value = styled.div`
font-size: 20px;
`
const Button = styled.button`
   width: 120px;
    padding: 7px;
    border: none;
    border-radius: 10px;
    color: white;
    background: #06414e;
    transition: all 0.3s ease;
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
`
export default Display

