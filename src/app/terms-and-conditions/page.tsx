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
          Last Updated: 03.12.2025
          <br />
          <br />
          Welcome to https://hotzgroup.com, subject to these terms, conditions
          and restrictions, of Hotz Industries Limited and its affiliates, joint
          ventures, subsidiaries and business partners. By accessing or using
          our Site, you agree to be bound by these Terms. If you do not agree,
          please discontinue use of the Site.
        </p>

        <h2 className="text-lg lg:text-xl font-semibold mt-8">
          1. Acceptance of Terms
        </h2>
        <p className="mt-2 text-sm lg:text-base">
          By accessing, browsing, or using this Site, you confirm that you are
          at least 18 years old and have the legal capacity to enter into these
          Terms.
        </p>

        <h2 className="text-lg lg:text-xl font-semibold mt-8">
          2. Changes to Terms
        </h2>
        <p className="mt-2 text-sm lg:text-base">
          We may update these Terms at any time. Updated Terms will be posted on
          this page with a revised “Last Updated” date. Continued use of the
          Site constitutes acceptance of the updated Terms.
        </p>

        <h2 className="text-lg lg:text-xl font-semibold mt-8">
          3. Use of the Website
        </h2>
        <p className="mt-2 text-sm lg:text-base">
          You agree not to:
          <br />• Use the Site for unlawful, fraudulent, or harmful activities.
          <br />• Interfere with the security, functionality, or accessibility
          of the Site.
          <br />• Upload or transmit viruses, malware, or harmful code.
          <br />• Attempt to gain unauthorized access to any portion of the
          Site.
          <br />
          We reserve the right to restrict or terminate access for violations.
        </p>

        <h2 className="text-lg lg:text-xl font-semibold mt-8">
          4. Intellectual Property
        </h2>
        <p className="mt-2 text-sm lg:text-base">
          All content on the Site—including text, graphics, logos, images,
          videos, software, and design—is the property of Hotz Industries
          Limited or its licensors and is protected by copyright, trademark, and
          other intellectual property laws. You may not copy, reproduce, modify,
          distribute, or create derivative works without prior written consent.
        </p>

        <h2 className="text-lg lg:text-xl font-semibold mt-8">
          5. Third-Party Links
        </h2>
        <p className="mt-2 text-sm lg:text-base">
          The Site may contain links to third-party websites. We are not
          responsible for the content, policies, or practices of these external
          sites. Accessing them is at your own risk.
        </p>

        <h2 className="text-lg lg:text-xl font-semibold mt-8">6. Privacy</h2>
        <p className="mt-2 text-sm lg:text-base">
          Your use of the Site is also governed by our Privacy Policy, available
          at the Privacy Policy page.
        </p>

        <h2 className="text-lg lg:text-xl font-semibold mt-8">
          7. Limitation of Liability
        </h2>
        <p className="mt-2 text-sm lg:text-base">
          To the fullest extent permitted by law:
          <br />• We are not liable for indirect, incidental, consequential, or
          punitive damages.
          <br />• We do not guarantee uninterrupted, secure, or error-free
          operation of the Site.
          <br />• We are not responsible for loss of data, business
          interruption, or damages arising from your use of the Site.
          <br />
          Your use of the Site is at your sole risk.
        </p>

        <h2 className="text-lg lg:text-xl font-semibold mt-8">8. Disclaimer</h2>
        <p className="mt-2 text-sm lg:text-base">
          The Site is provided on an “as-is” and “as-available” basis. We
          disclaim all warranties, express or implied, including
          merchantability, fitness for a particular purpose, and
          non-infringement.
        </p>

        <h2 className="text-lg lg:text-xl font-semibold mt-8">
          9. Indemnification
        </h2>
        <p className="mt-2 text-sm lg:text-base">
          You agree to defend, indemnify, and hold harmless Hotz Industries
          Limited, its affiliates, employees, and partners from any claims,
          losses, liabilities, damages, costs, and expenses arising out of your
          use of the Site or violation of these Terms.
        </p>

        <h2 className="text-lg lg:text-xl font-semibold mt-8">
          10. Termination
        </h2>
        <p className="mt-2 text-sm lg:text-base">
          We may suspend or terminate access to all or any part of the Site at
          any time without notice for violations of these Terms or other
          reasons.
        </p>

        <h2 className="text-lg lg:text-xl font-semibold mt-8">
          11. Governing Law
        </h2>
        <p className="mt-2 text-sm lg:text-base">
          These Terms are governed by the laws of New Delhi, India, without
          regard to conflict of law principles. Any disputes shall be resolved
          in the courts of New Delhi, India.
        </p>

        <h2 className="text-lg lg:text-xl font-semibold mt-8">
          12. Contact Information
        </h2>
        <p className="mt-2 text-sm lg:text-base">
          Hotz Industries Limited
          <br />
          703 Chiranjiv Tower,
          <br />
          43 Nehru Place,
          <br />
          New Delhi - 110 019, India
          <br />
          Telephone: +91 11 4315 1943
          <br />
          Email: info@hotz.in
        </p>
      </div>
      <Footer />
    </>
  );
};

export default page;
