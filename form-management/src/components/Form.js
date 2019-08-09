import React, { useState, useEffect } from 'react';
import { Form, Field, withFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';

const FormComponent = (props) => {
    // console.log(props);
    const [users, setUsers] = useState([])
    useEffect(() => {
        if (props.status) {
            setUsers([...users, props.status]);
        }
    }, [props.status])
    return (
        <Form>
            {props.touched.username && props.errors.username && <p className="error">{props.errors.username}</p>}
            <Field type="text" name="username" placeholder="name" />
            {props.touched.password && props.errors.password && <p className="error">{props.errors.password}</p>}
            <Field type="password" name="password" placeholder="password" />
            <button type="submit">Submit</button>
        </Form>
    )
}

const FormikForm = withFormik({
    mapPropsToValues: ({ username, password }) => {
        return {
            username: username || "",
            password: password || "",
        }
    },

    handleSubmit: (values, { resetForm, setStatus }) => {
        console.log("Request");
        axios.post('http://localhost:5000/api/register', values)
            .then(res => {
                console.log(res);
                setStatus(res);
                resetForm();
            })
            .catch(err => {
                console.log(err);
            })
    },

    validationSchema: yup.object().shape({
        username: yup.string()
            .required("Username required"),
        password: yup.string()
            .min(4, "Password must be at least 4 characters long")
            .required("Password required")
    })
})(FormComponent)

export default FormikForm;