import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="w-full">
      <h1 className="text-center text-3xl font-medium mb-8">Contact Me</h1>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 space-y-6">
        <div className="flex flex-col">
          <label
            htmlFor="name"
            className="dark:text-gray-700 text-gray-300 mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="p-3 border dark::border-gray-300 dark:bg-gray-500 bg-gray-800 bg-border-600 text-white rounded-md"
            required
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="email"
            className="dark:text-gray-700 text-gray-300 mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="p-3 border dark::border-gray-300 dark:bg-gray-500 bg-gray-800 bg-border-600 text-white rounded-md"
            required
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="message"
            className="dark:text-gray-700 text-gray-300 mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="p-3 border dark::border-gray-300 dark:bg-gray-500 bg-gray-800 bg-border-600 text-white rounded-md"
            rows="6"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full p-3 bg-yellow-400 text-gray-900 rounded-md font-semibold mt-4 hover:bg-yellow-500"
        >
          Send Message
        </button>
      </form>

      {isSubmitted && (
        <p className="text-center text-green-400 mt-6">
          Thank you for reaching out! I'll get back to you soon.
        </p>
      )}
    </div>
  );
};

export default Contact;
