import React from "react";
import CreateGroup from "../components/CreateGroup";
import CreateTerm from "../components/CreateTerm";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { store } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { createFlashCard } from "../redux/action/action";

const CreateFlashcard = () => {
  const validationSchema = Yup.object().shape({
    group: Yup.string().required("Please enter somthing"),
    terms: Yup.array(
      Yup.object().shape({
        term: Yup.string().required("Please enter somthing"),
        defination: Yup.string().required("Please enter somthing"),

      })
    ),
  });

  const dispatch = useDispatch();

  const selector = useSelector(state => state.actionReducer)
  console.log('selector', selector)

  return (
    <Formik
      initialValues={{profile:null,
        terms: [{}],
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        dispatch(createFlashCard(values));
        console.log("values", values);
      }}
    >
      {({ values ,setFieldValue }) => (
        <Form>
          <section>
            <CreateGroup setFieldValue={setFieldValue} />
            <CreateTerm values={values} />

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
      )}
    </Formik>
  );
};
export default CreateFlashcard;
