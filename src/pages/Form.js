import { ErrorMessage, Formik, replace, useFormik } from 'formik'
import React from 'react'
import styled, {css} from 'styled-components'
import { Navigate} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { Validation } from './validation';
function Form() {

 const history = useNavigate();
  const formik = useFormik({
    initialValues: {
      nom: "",
      prenom:"",
      email:"",
      telephone:""
    },
       validationSchema: Validation,
    onSubmit: async values => {
    console.log(values)
history("/display",{state: values});
    }
  });
    return (
        <Cont>
         <Frm onSubmit={formik.handleSubmit}>
        <Input    name="nom"
                  type="text"
                  placeholder="Nom"
                  value={formik.values.nom}
                  onChange={formik.handleChange
                  }
                />
                {formik.errors.nom && formik.touched.nom? (
             <div>{formik.errors.nom}</div>
           ) : null }

        <Input    name="prenom"
                  type="text"
                  placeholder="Prenom"
                  value={formik.values.prenom}
                  onChange={formik.handleChange}
                />
                {formik.errors.prenom && formik.touched.prenom ? (
             <div>{formik.errors.prenom}</div>
           ) : null}
        <Input
        name="email"
                  type="text"
                  placeholder="Email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
                {formik.errors.email && formik.touched.email? (
             <div>{formik.errors.email}</div>
           ) : null }       
        <Input
        name="telephone"
                  type="text"
                  placeholder="Telephone"
                  value={formik.values.telephone}
                  onChange={formik.handleChange}
                />
                {formik.errors.telephone && formik.touched.telephone? (
             <div>{formik.errors.telephone}</div>
           ) : null }   
                <Button type="submit">submit</Button> 
                </Frm>
        </Cont>
    )
}
const Cont=styled.div`

    height: 400px;
    display: flex;
      padding: 30px 0;
   
    flex-direction: column;
    align-items: center;
    width: 100%;
    
`
const Frm = styled.form`
    display: flex;
    flex-direction: column;
    
    align-items: center;
    justify-content: space-between;
     position: absolute;
    margin-right: 15px;
    color: gray;
    padding: 5px;
    cursor: pointer;

`
const Input=styled.input`
 font-size: 15px;
 width:100%;
    border-radius: 20px;
    padding: 12px;
    border: none;
    margin-bottom:10px;
    outline: none;
    transition: all 0.2s ease;
    font-family: 'Poppins', sans-serif;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
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
export default Form
