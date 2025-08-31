import { useState } from "react";
import TextInputs from "./inputs/TextInputs";
import SelectInputs from "./inputs/SelectInputs";
import TextAreaInput from "./inputs/TextAreaInput";

const NoteForm = ({ notes, setNotes }) => {
  const [formData, setFormData] = useState({
    title: "",
    priority: "Medium",
    category: "Personal",
    description: "",
  });

  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //Validation
    if (!formData.title || !formData.description) {
      alert("Please fill in all fields");
      return;
    }

    // Create a new note object
    const newNote = {
      id: Date.now(),
      ...formData,
    };

    //Add the new note to the notes array
    setNotes([newNote, ...notes]);
    setFormData({
      title: "",
      priority: "Medium",
      category: "Work",
      description: "",
    });
  };

  return (
    <>
      <button
        onClick={() => setIsFormVisible(!isFormVisible)}
        classname="w-full bg-gray-100 border border-gray-300 text-purple-800 py-2 rounded-lg cursor-pointer hover:bg-purple-200 hover: border-purple-300 transition mb-4"
      >
        {isFormVisible ? "Hide Form" : "Add New Note"}
      </button>
      {isFormVisible && (
      <form onSubmit={handleSubmit}>
       <TextInputs
          label="Title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <SelectInputs
          label="Priority"
          name="priority"
          value={formData.priority}
          onChange={handleChange}
          options={[
            { value: "High", label: "High" },
            { value: "Medium", label: "Medium" },
            { value: "Low", label: "Low" },
          ]}
        />
        <SelectInputs
          label="Category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          options={[
            { value: "Work", label: "Work" },
            { value: "Personal", label: "Personal" },
            { value: "Others", label: "Others" },
          ]}
        />
       <TextAreaInput
          label="Description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          className="w-full bg-purple-500 text-white py-2 rounded-lg cursor-pointer hover:bg-purple-600"
        >
          Add Note
        </button>
      </form>
      )}
    </>
  );
};

export default NoteForm;
