import React, { useState } from "react";
import FieldGenerator from "./components/FieldGenerator";
import FieldList from "./components/FieldList";

const App = () => {
  const [fields, setFields] = useState([]);

  const handleGenerateFields = (numFields, fieldType) => {
    if (!numFields || numFields < 1) {
      alert("Please enter a valid number of fields.");
      return;
    }

    const newFields = [];
    for (let i = 0; i < parseInt(numFields); i++) {
      newFields.push({
        id: `field-${Date.now()}-${i}`,
        type: fieldType,
        value: "",
      });
    }

    setFields([...fields, ...newFields]);
  };

  const handleRemoveField = (id) => {
    setFields(fields.filter((field) => field.id !== id));
  };

  const handleFieldChange = (id, value) => {
    setFields(
      fields.map((field) => (field.id === id ? { ...field, value: value } : field))
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (fields.some((field) => !field.value)) {
      alert("All fields must be filled.");
      return;
    }

    alert("Form submitted successfully!");
  };

  const selectedCount = fields.filter(
    (field) => (field.type === "checkbox" || field.type === "radio") && field.value === "true"
  ).length;

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4">Dynamic Form Builder</h1>
      <FieldGenerator onGenerate={handleGenerateFields} />
      <form onSubmit={handleSubmit} className="space-y-4">
        <FieldList
          fields={fields}
          onRemoveField={handleRemoveField}
          onFieldChange={handleFieldChange}
        />
        <div>
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Submit
          </button>
        </div>
      </form>
      <div className="mt-4">
        <strong>Selected Count (Checkboxes/Radios): {selectedCount}</strong>
      </div>
    </div>
  );
};

export default App;
