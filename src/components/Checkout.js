import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { RiCloseFill } from 'react-icons/ri'

const Checkout = (props) => {
    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        date: '',
        gender: '',
        address: '',
        zip: '',
        agree: false
    }

    const onSubmit = (values, { setSubmitting, resetForm }) => {props.toggle(); props.toggleconfirm(); resetForm()}
    
    const validate = values => {
        let errors = {}

        if(!values.firstName){
            errors.firstName = 'Required'
        }

        if(!values.lastName){
            errors.lastName = 'Required'
        }

        if(!values.email){
            errors.email = 'Required'
        }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
            errors.email = 'Inavlid email format'
        }

        if(!values.date){
            errors.date = 'Required'
        }

        if(!values.gender){
            errors.gender = 'Required'
        }

        if(!values.address){
            errors.address = 'Required'
        }

        if(!values.zip){
            errors.zip = 'Required'
        }

        if(!values.agree){
            errors.agree = 'Required'
        }

        return errors
    }

    return (
        
        <div className={'checkout ' + props.visibility}>
            <h1 className="checkout__title">Chekout</h1>
            <span className="checkout-close" onClick={() => props.toggle()}><RiCloseFill /></span>
            <p className="checkout__text">Enim quae itaque, accusamus deleniti voluptatum facere laboriosam saepe doloremque blanditiis dignissimos asperiores quidem est quos necessitatibus a iste iure aut suscipit.</p>
        <Formik 
            initialValues={initialValues}
            onSubmit={onSubmit}
            validate={validate}
            validateOnMount
        >  
        {
            formik => {
                
                return(

            <Form className="checkout__form">
                <label htmlFor="firstName">First Name</label>
                <Field 
                    type="text" 
                    id="firstName" 
                    name="firstName" 
                    placeholder="Type your first name here"
                />
                <ErrorMessage name='firstName'>{msg => <div className="checkout__form__error">{msg}</div>}</ErrorMessage>

                <label htmlFor="lastName">Last Name</label>
                <Field 
                    type="text" 
                    id="lastName" 
                    name="lastName" 
                    placeholder="Type your first last name here"
                />
                <ErrorMessage name='lastName'>{msg => <div className="checkout__form__error">{msg}</div>}</ErrorMessage>

                <label htmlFor="email">E-mail Address</label>
                <Field 
                    type="text" 
                    id="email" 
                    name="email" 
                    placeholder="Enter your email"
                />
                <ErrorMessage name='email'>{msg => <div className="checkout__form__error">{msg}</div>}</ErrorMessage>
                <div className="chekcout_1-2">
                    <div>
                    <label htmlFor="date">Date of Birth</label>
                    <Field 
                        type="date" 
                        id="date" 
                        name="date" 
                    />
                    <ErrorMessage name='date'>{msg => <div className="checkout__form__error">{msg}</div>}</ErrorMessage>
                    </div>
                    <div>
                    <label htmlFor="gender">Gender</label>
                    <Field 
                        as='select'
                        id="gender" 
                        name="gender"
                    >
                        <option value=''>-- select --</option> 
                        <option value='female'>female</option> 
                        <option value='male'>male</option> 
                    </Field>
                    <ErrorMessage name='gender'>{msg => <div className="checkout__form__error">{msg}</div>}</ErrorMessage>
                    </div>
                </div>
                <label htmlFor="address">Address</label>
                <Field 
                    type="text" 
                    id="address" 
                    name="address" 
                    placeholder="Type your address here"
                />
                <ErrorMessage name='address'>{msg => <div className="checkout__form__error">{msg}</div>}</ErrorMessage>

                <label htmlFor="zip">Zip Code</label>
                <Field 
                    type="text" 
                    id="zip" 
                    name="zip" 
                    placeholder="eg. 21310"
                />
                <ErrorMessage name='zip'>{msg => <div className="checkout__form__error">{msg}</div>}</ErrorMessage>

                <label htmlFor="agree"><span>Agree</span>
                <Field 
                    name="agree" 
                    id="agree" 
                    type="checkbox" 
                />
                </label>
                <ErrorMessage name='agree'>{msg => <div className="checkout__form__error">{msg}</div>}</ErrorMessage>

                <button type="submit" disabled={!formik.isValid}>Checkout</button>
            </Form>
                )
            }
        }  
        
        </Formik>
        </div>
    )
    
}
 
export default Checkout