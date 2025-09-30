"use client";
import axios from "axios";

import type React from "react";
import { useState } from "react";
import ErrorModal from "../../ErrorModal";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [error, setError] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { firstName, lastName, email, subject, message } = formData;
    if (!firstName || !lastName || !email || !subject || !message) {
      return;
    }
    try {
      await axios.post(
        "https://tirupati-balaji-construction-site-zkn6.onrender.com/send-form",
        {
          firstName: firstName,
          lastName: lastName,
          email: email,
          subject: subject,
          message: message,
        }
      );
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className="space-y-6" id="contact">
      <ErrorModal isOpen={error} onClose={() => setError(false)} />
      <h1 className="text-2xl font-bold text-foreground">Contact Us</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="firstName"
            className="block text-sm text-foreground mb-1"
          >
            First Name *
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="w-full h-9 px-2 border border-gray-400 bg-gray-50 focus:outline-none focus:border-gray-600 transition-colors text-sm"
          />
        </div>

        <div>
          <label
            htmlFor="lastName"
            className="block text-sm text-foreground mb-1"
          >
            Last Name *
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="w-full h-9 px-2 border border-gray-400 bg-gray-50 focus:outline-none focus:border-gray-600 transition-colors text-sm"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm text-foreground mb-1">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full h-9 px-2 border border-gray-400 bg-gray-50 focus:outline-none focus:border-gray-600 transition-colors text-sm"
          />
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block text-sm text-foreground mb-1"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full h-9 px-2 border border-gray-400 bg-gray-50 focus:outline-none focus:border-gray-600 transition-colors text-sm"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm text-foreground mb-1"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-2 py-2 border border-gray-400 bg-gray-50 focus:outline-none focus:border-gray-600 transition-colors resize-vertical text-sm"
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="px-5 py-2 bg-gray-700 hover:bg-gray-800 text-yellow-400 font-medium text-sm transition-colors"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
