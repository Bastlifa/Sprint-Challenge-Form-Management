import React, { useEffect } from 'react'
import axios from "axios"
import { withFormik} from "formik";
import { StyledForm, StyledField, ErrorP } from '../StyledComps'
import * as Yup from "yup";

// function RegistrationForm({values, errors, touched, status, setUsers})
// {
//     useEffect(_ =>
//     {
//         console.log("inf loop?")
//         if(status)
//         {
//             console.log("inf loop 2?")
//             axios.get("http://localhost:5000/api/restricted/data")
//             .then(response =>
//                 {
//                     console.log("response", response)
//                     setUsers(users => [...users, response.data])
//                 })
//         }
//     }, [status, setUsers])

//     return (
//         <StyledForm>
//             <div>
//                 <StyledField type="text" name="username" placeholder="Username" data-testid="usernameInput"/>
//                 {touched.username && errors.username && <ErrorP>{errors.username}</ErrorP>}
//             </div>
//             <div>
//                 <StyledField type="password" name="password" placeholder="Password" />
//                 {touched.password && errors.password && <ErrorP>{errors.password}</ErrorP>}
//             </div>
//             <button type="submit" data-testid="submitBtn">Submit!</button>
//         </StyledForm>
//     )
// }

class RegistrationForm extends React.Component
{
    
    constructor(props)
    {
        super(props)
        // this.state = 
        // {
        //     values: props.values,
        //     touched: props.touched,
        //     errors: props.errors,
        //     status: props.status,
        //     setUsers: props.setUsers
        // }
    }
    render()
    {
        return (
            <StyledForm>
                <div>
                    <StyledField type="text" name="username" placeholder="Username" data-testid="usernameInput"/>
                    {this.props.touched.username && this.props.errors.username && <ErrorP>{this.props.errors.username}</ErrorP>}
                </div>
                <div>
                    <StyledField type="password" name="password" placeholder="Password" />
                    {this.props.touched.password && this.props.errors.password && <ErrorP>{this.props.errors.password}</ErrorP>}
                </div>
                <button type="submit" data-testid="submitBtn">Submit!</button>
            </StyledForm>
        )
    }
}

const FormikRegistrationForm = withFormik({
    mapPropsToValues({username, password})
    {
        return {
            username: username || "",
            password: password || "",
        }
    },

    validationSchema: Yup.object().shape({
        username: Yup.string()
            .min(1,"Userame not supplied")
            .required("Username is required"),
        password: Yup.string()
            .min(6,"Password must be longer than 6 characters")
            .required("Password is required"),
    }),

    handleSubmit(values, { resetForm, setErrors, setSubmitting, setStatus}) {
        axios
        .post("http://localhost:5000/api/register", values)
        .then(res => {
            console.log("post response: ",res); 
            setStatus(res.data)
            resetForm();
            setSubmitting(false);
        })
        .catch(err => {
            console.log(err); 
            setSubmitting(false);
        });
    }
})(RegistrationForm)

export default FormikRegistrationForm