import React from "react";

import { FormGenerator } from "../FormGenerator/FormGenerator";
import config from "./config.json";

export const ExampleForm = () => (
  <div className="container">
    <h2>Форма подачи заявки</h2>
    <FormGenerator config={config} />
  </div>
);
