import React from 'react'
import CreateGroup from '../components/CreateGroup'
import CreateTerm from '../components/CreateTerm'
import { Formik, useFormik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { store } from '../store';
import { useDispatch } from 'react-redux';
import { createFlashCard } from '../redux/action/action'

const CreateFlashcard = () => {
  const defaultValue = {
    group: "",
    groupdesc: "",
    term: '',
    defination: ''
  };

  const validationSchema = Yup.object().shape({
    group: Yup.string().min(2).max(25).required("Please enter somthing"),
    term: Yup.string().min(2).max(1000).required("Please enter somthing"),
    defination: Yup.string().required("Please enter somthing"),
  });
  const dispatch = useDispatch()
  const handleSubmit = (values) => {
    console.log("Create flash card:", values);
    dispatch(createFlashCard(values))

  };

  return (
    <Formik
      initialValues={defaultValue}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <section>
          <CreateGroup />
          <CreateTerm />

          <div className="mt-10 text-center ">
            <button
              type="submit"
              className=" bg-red-500 text-white px-12 py-2 rounded-md"
            >
              Create
            </button>
          </div>
        </section>
      </Form>
    </Formik>
  );
}
export default CreateFlashcard
