import React, { useState } from "react";

const FieldGenerator = ({ onGenerate }) => {
  const [numFields, setNumFields] = useState("");
  const [fieldType, setFieldType] = useState("text");

  const handleGenerate = () => {
    onGenerate(numFields, fieldType);
    setNumFields("");
  };

  return (
    <div className="space-x-4 mb-6">
      <input
        type="number"
        placeholder="Number of fields"
        value={numFields}
        onChange={(e) => setNumFields(e.target.value)}
        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <select
        value={fieldType}
        onChange={(e) => setFieldType(e.target.value)}
        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="text">Text</option>
        <option value="checkbox">Checkbox</option>
        <option value="radio">Radio</option>
        <option value="textarea">Textarea</option>
      </select>
      <button
        onClick={handleGenerate}
        className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
      >
        Generate Fields
      </button>
    </div>
  );
};

export default FieldGenerator;
