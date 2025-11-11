"use client";

import React, { useState } from "react";

export default function ApplicationForm({
  positionTitle,
  onClose,
}: {
  positionTitle: string;
  onClose: () => void;
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const form = e.target as HTMLFormElement;
      const formData = new FormData(form);

      // Convert file to base64
      const fileInput = form.querySelector(
        'input[name="resume"]'
      ) as HTMLInputElement;
      const file = fileInput.files?.[0];

      let fileData = "";
      if (file) {
        fileData = await new Promise<string>((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result as string);
          reader.readAsDataURL(file);
        });
      }

      // Create URL-encoded form data
      const data = new URLSearchParams();
      data.append("firstName", formData.get("firstName") as string);
      data.append("lastName", formData.get("lastName") as string);
      data.append("email", formData.get("email") as string);
      data.append("phone", formData.get("phone") as string);
      data.append("gender", formData.get("gender") as string);
      data.append("why", formData.get("why") as string);
      data.append("position", positionTitle);
      data.append("resume", fileData);
      data.append("fileName", file?.name || "");

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxRsf_c2InM3onwXbkIqfuw1bkNZbchtnf2Zh_Q_nTjNQX-Phfz6JtDcYxXqABVmyf9ow/exec",
        {
          method: "POST",
          body: data,
        }
      );

      const result = await response.json();

      if (result.success) {
        alert("Form submitted successfully!");
        form.reset();
        onClose();
      } else {
        alert("Error: " + (result.error || "Unknown error"));
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("Failed to submit form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 mt-6 bg-white rounded-2xl w-full"
    >
      <h2 className="text-lg font-medium text-gray-700 mb-2">
        Application for: {positionTitle}
      </h2>

      <div className="lg:flex block gap-4 w-full">
        <label className="flex flex-col w-full text-gray-700 text-sm">
          <h1 className="mb-2">First Name</h1>
          <input
            name="firstName"
            type="text"
            placeholder="First Name"
            className="border p-3 rounded-sm"
            required
          />
        </label>

        <label className="lg:mt-0 mt-5 flex flex-col w-full text-gray-700 text-sm">
          <h1 className="mb-2">Last Name</h1>
          <input
            name="lastName"
            type="text"
            placeholder="Last Name"
            className="border p-3 rounded-sm"
            required
          />
        </label>
      </div>

      <label className="flex flex-col text-gray-700 text-sm">
        <h1 className="mb-2">Email</h1>
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="border p-3 rounded-sm"
          required
        />
      </label>

      <label className="flex flex-col text-gray-700 text-sm">
        <h1 className="mb-2">Phone Number</h1>
        <input
          name="phone"
          type="tel"
          placeholder="Phone Number"
          className="border p-3 rounded-sm"
          required
        />
      </label>

      <label className="flex flex-col text-gray-700 text-sm">
        <h1 className="mb-2">Gender</h1>
        <select name="gender" className="border p-3 rounded-sm" required>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </label>

      <label className="flex flex-col text-gray-700 text-sm">
        <h1 className="mb-2">Why would you like to work with us?</h1>
        <textarea
          name="why"
          placeholder="Your answer"
          className="border p-3 rounded-sm"
          rows={4}
          required
        />
      </label>

      <label className="flex flex-col gap-2 text-gray-700 text-sm">
        <h1 className="mb-2">Upload your Resume</h1>
        <input
          name="resume"
          type="file"
          accept=".pdf,.doc,.docx"
          className="border p-3 rounded-sm bg-gray-50 cursor-pointer"
          required
        />
      </label>

      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-[#B9041A] text-white py-3 rounded-full mt-2 hover:bg-[#a10417] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Submitting..." : "Submit Application"}
      </button>
    </form>
  );
}
