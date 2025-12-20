"use client";

import ToasterComponent from "@/components/reusable/ToasterComponent";
import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";

export default function InquiryFeedbackForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    inquiryType: "",
    subject: "",
    message: "",
    email: "",
    phone: "",
    address: "",
  });

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.inquiryType ||
      !formData.subject ||
      !formData.message ||
      !formData.email
    ) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch(
        process.env.NEXT_PUBLIC_GSHEET_API_URL as string,
        {
          method: "POST",

          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();

      if (data.success) {
        toast.success("Form submitted successfully!");

        setFormData({
          inquiryType: "",
          subject: "",
          message: "",
          email: "",
          phone: "",
          address: "",
        });

        setTimeout(() => setIsOpen(false), 500);
      } else {
        throw new Error("Submission failed");
      }
    } catch (err) {
      toast.error("Error submitting form");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div
        className="bg-white flex justify-center rounded-2xl p-5  w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Form */}
        <div className="flex flex-col gap-5 lg:max-w-2xl w-full">
          <h2 className="text-2xl font-medium text-gray-700 mb-2">
            Inquiry / Feedback Form
          </h2>

          <label className="flex flex-col text-gray-700 text-sm">
            <h1 className="mb-2">
              Inquiry Type <span className="text-red-600">*</span>
            </h1>
            <select
              name="inquiryType"
              value={formData.inquiryType}
              onChange={handleChange}
              className="border p-3 rounded-sm"
              required
            >
              <option value="">Select Type</option>
              <option value="Inquire">Inquire / I have a question</option>
              <option value="Feedback">Feedback / Suggestions</option>
            </select>
          </label>

          <label className="flex flex-col text-gray-700 text-sm">
            <h1 className="mb-2">
              Subject Line <span className="text-red-600">*</span>
            </h1>
            <input
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="border p-3 rounded-sm"
              required
            />
          </label>

          <label className="flex flex-col text-gray-700 text-sm">
            <h1 className="mb-2">
              Message / Description <span className="text-red-600">*</span>
            </h1>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message"
              className="border p-3 rounded-sm"
              rows={5}
              required
            />
          </label>

          <h3 className="text-md font-medium text-gray-700 mt-2">
            Contact Details
          </h3>

          <label className="flex flex-col text-gray-700 text-sm">
            <h1 className="mb-2">
              Email <span className="text-red-600">*</span>
            </h1>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="border p-3 rounded-sm"
              required
            />
          </label>

          <label className="flex flex-col text-gray-700 text-sm">
            <h1 className="mb-2">Telephone Number</h1>
            <input
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Telephone Number"
              className="border p-3 rounded-sm"
              required
            />
          </label>

          <label className="flex flex-col text-gray-700 text-sm">
            <h1 className="mb-2">Address</h1>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Your address"
              className="border p-3 rounded-sm"
              rows={3}
              required
            />
          </label>

          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="bg-[#B9041A] text-white py-3 rounded-full mt-2 hover:bg-[#a10417] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </div>

      <ToasterComponent />
    </>
  );
}
