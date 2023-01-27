import { Field, Form, Formik, FormikHelpers } from 'formik';
import React, { useEffect } from 'react';
import * as Yup from 'yup';

import { Button } from '../common/Button';
import { TextField } from '../common/TextField';

interface IValues {
  description: string;
}

const validationSchema = Yup.object().shape({
  description: Yup.string().required('The description is required'),
});

export const TodoForm: React.FC = () => {
  const ipcRenderer = (window as any).ipcRenderer;
  const initialValues: IValues = { description: '' };
  const handleSubmit = (
    values: IValues,
    formikHelpers: FormikHelpers<IValues>
  ) => {
    ipcRenderer.send('submit:todoForm', values);
    formikHelpers.resetForm();
  };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className="shadow border rounded-xl p-4 my-4">
          <div className="my-4">
            <label htmlFor="description" className="font-bold">
              Task description
            </label>
            <Field
              name="description"
              id="description"
              component={TextField}
              placeholder="Enter the description"
              autoFocus={true}
            />
          </div>
          <Button text="Add" />
        </Form>
      </Formik>
    </div>
  );
};
