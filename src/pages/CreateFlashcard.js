import React from "react";
import CreateGroup from "../components/CreateGroup";
import CreateTerm from "../components/CreateTerm";
import { Formik, Form } from "formik";
import * as Yup from "yup";
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

  const selector = useSelector((state) => state.actionReducer);
  console.log("selector", selector);

  return (
    <Formik
      initialValues={{
        id: "",
        groups: {
          group: "",
          profile: null,
          groupdesc: "",
        },
        terms: [
          {
            term: "",
            defination: "",
            image: null,
          },
        ],
      }}
      validationSchema={validationSchema}
      onSubmit={(values, action) => {
        dispatch(createFlashCard(values));
        action.resetForm();
      }}
    >
      {({ values, setFieldValue, isSubmitting }) => (
        <Form>
          <section className="space-y-10">
            <CreateGroup values={values} setFieldValue={setFieldValue} />
            <CreateTerm values={values} setFieldValue={setFieldValue} />

            <div className="text-center ">
              <button
                type="submit"
                disabled={isSubmitting}
                className=" bg-red-500 hover:bg-red-600 transition-all text-white px-12 py-3 font-semibold rounded-md"
              >
                Create Flashcard
              </button>
            </div>
          </section>
        </Form>
      )}
    </Formik>
  );
};
export default CreateFlashcard;
