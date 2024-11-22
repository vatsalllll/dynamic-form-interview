import React from "react";

const FormField = ({ field, onRemove, onChange }) => {
  return (
    <div className="space-y-2">
      {field.type === "text" && (
        <input
          type="text"
          placeholder="Enter text"
          value={field.value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      )}

      {field.type === "checkbox" && (
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={field.value === "true"}
            onChange={(e) => onChange(e.target.checked ? "true" : "")}
            className="mr-2"
          />
          <label>Checkbox</label>
        </div>
      )}

      {field.type === "radio" && (
        <div className="flex items-center">
          <input
            type="radio"
            name="radio-group"
            checked={field.value === "true"}
            onChange={(e) => onChange(e.target.checked ? "true" : "")}
            className="mr-2"
          />
          <label>Radio</label>
        </div>
      )}

      {field.type === "textarea" && (
        <textarea
          placeholder="Enter text"
          value={field.value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
      )}

      <button
        type="button"
        onClick={onRemove}
        className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
      >
        Remove
      </button>
    </div>
  );
};

export default FormField;
