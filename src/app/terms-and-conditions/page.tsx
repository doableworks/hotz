import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <div className="px-5 py-10 max-w-5xl mx-auto mt-12">
        <h1 className="text-2xl lg:text-3xl font-semibold mb-6">
          Terms & Conditions
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
          By accessing or using this website, you agree to abide by these Terms
          & Conditions. If you do not agree, please discontinue using the
          website.
        </p>

        <h2 className="text-lg lg:text-xl font-semibold mt-8">
          2. Use of the Website
        </h2>
        <p className="mt-2 text-sm lg:text-base">
          You agree not to misuse the website, interfere with its functioning,
          attempt unauthorized access, or use it for unlawful purposes.
        </p>

        <h2 className="text-lg lg:text-xl font-semibold mt-8">
          3. Intellectual Property
        </h2>
        <p className="mt-2 text-sm lg:text-base">
          All content on this website belongs to Hotz Group and may not be
          copied, reproduced, or distributed without permission.
        </p>

        <h2 className="text-lg lg:text-xl font-semibold mt-8">
          4. Career Applications
        </h2>
        <p className="mt-2 text-sm lg:text-base">
          When applying for a position, users may submit their details and
          resume. This information is used solely for recruitment evaluation.
        </p>

        <h2 className="text-lg lg:text-xl font-semibold mt-8">
          5. Limitation of Liability
        </h2>
        <p className="mt-2 text-sm lg:text-base">
          We do not guarantee uninterrupted service or complete accuracy of
          content. Hotz Group is not liable for damages arising from website
          use.
        </p>

        <h2 className="text-lg lg:text-xl font-semibold mt-8">
          6. Changes to Terms
        </h2>
        <p className="mt-2 text-sm lg:text-base">
          These Terms may be updated periodically. Continued use of the website
          indicates acceptance of updated Terms.
        </p>

        <h2 className="text-lg lg:text-xl font-semibold mt-8">7. Contact</h2>
        <p className="mt-2 text-sm lg:text-base">Email: deepshikha@hotz.in</p>
      </div>
      <Footer />
    </>
  );
};

export default page;
