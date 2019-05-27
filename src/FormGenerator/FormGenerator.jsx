import React from "react";
import { Formik } from "formik";

import { renderForm } from "./helpers";

const handleSubmit = (values, actions) => {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);
  }, 1000);
};

export const FormGenerator = ({ config }) => {
  return (
    <Formik
      onSubmit={handleSubmit}
      render={props => renderForm(config, props)}
    />
  );
};
