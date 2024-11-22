import React from "react";
import FormField from "./FormField";

const FieldList = ({ fields, onRemoveField, onFieldChange }) => {
  return (
    <div className="space-y-4">
      {fields.map((field) => (
        <FormField
          key={field.id}
          field={field}
          onRemove={() => onRemoveField(field.id)}
          onChange={(value) => onFieldChange(field.id, value)}
        />
      ))}
    </div>
  );
};

export default FieldList;
