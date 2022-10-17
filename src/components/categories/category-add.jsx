import { Formik, Form, Field } from 'formik';
import React from 'react';

const CategoryAdd = () => {

    const validateCategoryName = (value) => {
        let error;
        if (value.length < 3) {
            error = 'Name is too short!';
        }
        return error;
    }


    return (
        <div className='container'>
            <h2>Adding Category</h2>
            <Formik
                initialValues={{ name: '', }}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                {({ errors, touched, isValidating }) => (
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

//((touched.name && errors.name) ? 'is-invalid' : 'is-valid')
export default CategoryAdd;
