import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <div className="px-5 py-10 max-w-5xl mx-auto mt-12">
        <h1 className="text-2xl lg:text-3xl font-semibold mb-6">
          Privacy Policy
        </h1>

        <p className="mb-4 text-sm lg:text-base">
          Last Updated: November 2025
          <br />
          Website: https://hotz.vercel.app/
          <br />
          Owned by: Hotz Group, Delhi
        </p>

        <h2 className="text-lg lg:text-xl font-semibold mt-8">
          1. Introduction
        </h2>
        <p className="mt-2 text-sm lg:text-base">
          This Privacy Policy explains how Hotz Group collects, uses, and
          protects information when you use our website.
        </p>

        <h2 className="text-lg lg:text-xl font-semibold mt-8">
          2. Information We Collect
        </h2>
        <p className="mt-2 text-sm lg:text-base">
          We do not collect personal information unless voluntarily provided
          through the Careers section, including:
          <br /> Name <br /> Email <br /> Phone Number <br /> Gender <br />{" "}
          Resume
        </p>

        <h2 className="text-lg lg:text-xl font-semibold mt-8">
          3. How We Use Your Information
        </h2>
        <p className="mt-2 text-sm lg:text-base">
          Information is used only for evaluating job applications or responding
          to inquiries. We do not sell or share data with advertisers.
        </p>

        <h2 className="text-lg lg:text-xl font-semibold mt-8">
          4. Resume & Application Data
        </h2>
        <p className="mt-2 text-sm lg:text-base">
          Your data is used only by the HR team and stored securely. You may
          request deletion anytime.
        </p>

        <h2 className="text-lg lg:text-xl font-semibold mt-8">
          5. Cookies & Tracking
        </h2>
        <p className="mt-2 text-sm lg:text-base">
          This website does not use cookies or analytics tools.
        </p>

        <h2 className="text-lg lg:text-xl font-semibold mt-8">
          6. Data Security
        </h2>
        <p className="mt-2 text-sm lg:text-base">
          We use reasonable security measures, though no system is completely
          secure.
        </p>

        <h2 className="text-lg lg:text-xl font-semibold mt-8">
          7. Third-Party Services
        </h2>
        <p className="mt-2 text-sm lg:text-base">
          The site is hosted on Vercel, which may process minimal technical
          logs.
        </p>

        <h2 className="text-lg lg:text-xl font-semibold mt-8">
          8. Your Rights
        </h2>
        <p className="mt-2 text-sm lg:text-base">
          You may request access, correction, or deletion of your submitted
          data.
          <br />
          Email: deepshikha@hotz.in
        </p>
      </div>
      <Footer />
    </>
  );
};

export default page;
