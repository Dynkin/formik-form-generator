import React from "react";
import { FormGroup, Input, Button, Label } from "reactstrap";

import { Group } from "./Group";

export const renderForm = (config, props) => {
  const { submit, data } = config;

  if (!data) {
    throw new Error("Wrong config");
  }

  if (!Array.isArray(data)) {
    throw new Error("Config doesn't have array of fields");
  }

  if (!Array.isArray(data) && !data.length) {
    throw new Error("Array of fields is empty");
  }

  return (
    <form onSubmit={props.handleSubmit}>
      {data.map(renderFormElement(props))}
      <Button color="primary" type="submit" id={submit.id}>
        {submit.label}
      </Button>
    </form>
  );
};

export const renderFormElement = props => {
  return element => {
    switch (element.dataType) {
      case "field":
      default:
        return renderSpecificComponent(element, props);
      case "group":
        return renderFormGroup(element, props);
    }
  };
};

export const renderFormGroup = (group, props) => {
  return <Group key={group.id} group={group} formProps={props} />;
};

export const renderSpecificComponent = (field, props) => {
  const renderComponent = () => {
    switch (field.fieldType) {
      case "input-text":
      default:
        return (
          <Input
            type="text"
            onChange={props.handleChange}
            value={props.values.name}
            name={field.name}
            placeholder={field.placeholder}
            id={field.id}
          />
        );
      case "input-email":
        return (
          <Input
            type="email"
            onChange={props.handleChange}
            value={props.values.name}
            name={field.name}
            placeholder={field.placeholder}
            id={field.id}
          />
        );
      case "select":
        if (
          !field.options ||
          !Array.isArray(field.options) ||
          !field.options.length
        ) {
          throw new Error(
            `For select named ${field.label} no valid options are provided`
          );
        }
        return (
          <Input
            type="select"
            onChange={props.handleChange}
            value={props.values.name}
            name={field.name}
            placeholder={field.placeholder}
            id={field.id}
          >
            {field.options.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Input>
        );
      case "textarea":
        return (
          <Input
            type="textarea"
            onChange={props.handleChange}
            value={props.values.name}
            name={field.name}
            placeholder={field.placeholder}
            id={field.id}
          />
        );
    }
  };

  return (
    <FormGroup key={field.id}>
      <Label for={field.id}>{field.label}</Label>
      {renderComponent()}
    </FormGroup>
  );
};
