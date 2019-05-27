import React from "react";

import { renderFormElement } from "./helpers";

export const Group = ({ group, formProps }) => {
  if (!group.fields || !Array.isArray(group.fields) || !group.fields.length) {
    throw new Error(`Group named ${group.name} has no fields!`);
  }
  return (
    <div className="group">
      <h3>{group.name}</h3>
      {group.fields.map(renderFormElement(formProps))}
    </div>
  );
};
