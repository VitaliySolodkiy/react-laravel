import { Formik, Form, Field } from 'formik';
import React from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const CategoryAdd = () => {

    const validateCategoryName = (value) => {
        let error;
        if (value.length < 3) {
            error = 'Name is too short!';
        }
        return error;
    }

    const navigate = useNavigate();


    return (
        <div className='container'>
            <h2>Adding Category</h2>
            <Formik
                initialValues={{ name: '', }}
                onSubmit={(values) => {
                    axios.post('http://laravelreact/api/categories', values);
                    navigate('/')
                }}
            >
                {({ errors, touched }) => (
                    <Form className='needs-validation'>
                        <label htmlFor="name" className="form-label">Category Name:</label>
                        <Field
                            id="name"
                            name="name"
                            placeholder="Enter category name"
                            validate={validateCategoryName}
                            className={"form-control " +
                                ((touched.name === true && errors.name) ? 'is-invalid' :
                                    (touched.name === true && !errors.name) ? 'is-valid' :
                                        '')
                            }
                        />

                        {
                            (touched.name === true && errors.name) ? <div className='invalid-feedback'>{errors.name}</div> :
                                (touched.name === true && !errors.name) ? <div className='valid-feedback'>Looks good</div> :
                                    <div className='hide'>.</div>
                        }
                        <button type="submit" className='btn btn-primary mt-2'>Submit</button>
                    </Form>

                )}

            </Formik>
        </div>
    );
}

export default CategoryAdd;
