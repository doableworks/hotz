import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <div className="px-5 py-10 max-w-5xl mx-auto mt-12">
        <h1 className="text-2xl lg:text-3xl font-semibold mb-6">
          Website Privacy Policy
        </h1>

        <p className="mb-4 text-sm lg:text-base">
          Hotz Industries Limited respects your rights and interests regarding
          data privacy and your personal information. This Privacy Policy
          describes Hotz&apos;s policies and practices regarding the collection
          and uses of personal information and sets forth your privacy rights.
          We recognize that information privacy is an ongoing responsibility,
          and so we will from time to time update this Privacy Policy.
          <br></br>
          <br></br>
          Please read this Privacy Policy carefully. If you do not agree with
          the terms of this Privacy Policy, please do not access the site.
        </p>

        <h2 className="text-lg lg:text-xl font-semibold mt-8">
          1. Introduction
        </h2>
        <p className="mt-2 text-sm lg:text-base">
          We may collect information in the following ways:
        </p>

        <h2 className="text-base lg:text-lg font-medium mt-8">
          1.1 Personal Data
        </h2>
        <p className="mt-2 text-sm lg:text-base">
          Information you voluntarily provide to us, such as your name, email
          address, or other contact details when you fill out forms, subscribe
          to newsletters, or communicate with us.
        </p>

        <h2 className="text-base lg:text-lg font-medium mt-8">
          1.2 Usage Data
        </h2>
        <p className="mt-2 text-sm lg:text-base">
          Information automatically collected when you visit the website,
          including IP address, browser type, operating system, pages viewed,
          and the dates/times of your visits.
        </p>

        <h2 className="text-base lg:text-lg font-medium mt-8">
          1.3 Cookies and Tracking Technologies:
        </h2>
        <p className="mt-2 text-sm lg:text-base">
          We may use cookies, web beacons, and similar technologies to improve
          your browsing experience and analyse website performance. You can
          manage cookie preferences through your browser settings.
        </p>

        <h2 className="text-lg lg:text-xl font-semibold mt-8">
          2. How We Use Your Information
        </h2>
        <p className="mt-2 text-sm lg:text-base">
          We may use collected information to:
          <br></br>• Improve user experience
          <br></br>• Send administrative or marketing communications (if you
          have opted in)
          <br></br>• Analyse website usage
          <br></br>• Detect and prevent fraud or security issues
        </p>

        <h2 className="text-lg lg:text-xl font-semibold mt-8">
          3. Sharing your information
        </h2>
        <p className="mt-2 text-sm lg:text-base">
          We do not sell your personal information. We may share information
          with:
          <br></br>• Service providers who help operate our website
          <br></br>• Legal authorities if required by law
          <br></br>• Third parties with your consent
        </p>

        <h2 className="text-lg lg:text-xl font-semibold mt-8">
          4. Data Retention
        </h2>
        <p className="mt-2 text-sm lg:text-base">
          We retain your information only as long as necessary to fulfil the
          purposes described in this Privacy Policy or as required by law.
        </p>

        <h2 className="text-lg lg:text-xl font-semibold mt-8">
          5. Data Security
        </h2>
        <p className="mt-2 text-sm lg:text-base">
          We implement reasonable administrative, technical, and physical
          safeguards to protect your information. However, no method of online
          transmission is 100% secure.
        </p>

        <h2 className="text-lg lg:text-xl font-semibold mt-8">
          6. Your Rights
        </h2>
        <p className="mt-2 text-sm lg:text-base">
          Depending on your jurisdiction, you may have rights regarding your
          personal data, such as:
          <br></br>• Accessing the information, we hold about you
          <br></br>• Requesting updates or corrections
          <br></br>• Requesting deletion of your information
          <br></br>• Opting out of marketing communications.
          <br></br> To exercise these rights, contact us at{" "}
          <span className="underline">info@hotz.in</span>.
        </p>

        <h2 className="text-lg lg:text-xl font-semibold mt-8">
          7. Third-Party Links
        </h2>
        <p className="mt-2 text-sm lg:text-base">
          Our website may contain links to third-party websites. We are not
          responsible for the privacy practices of these external sites.
        </p>

        <h2 className="text-lg lg:text-xl font-semibold mt-8">
          8. Children&apos;s Privacy
        </h2>
        <p className="mt-2 text-sm lg:text-base">
          We do not knowingly collect personal information from children under
          the age of 13 (or the applicable minimum age in your jurisdiction).
        </p>

        <h2 className="text-lg lg:text-xl font-semibold mt-8">
          9. Changes to this Privacy Policy
        </h2>
        <p className="mt-2 text-sm lg:text-base">
          We may update this Privacy Policy from time to time. Changes will be
          posted on this page with an updated “03.12.2025” date.
        </p>

        <h2 className="text-lg lg:text-xl font-semibold mt-8">
          10. Contact Us:
        </h2>
        <p className="mt-2 text-sm lg:text-base">
          If you have questions about this Privacy Policy, please contact us at:
        </p>

        <p className="mt-2 text-sm lg:text-base">
          Hotz Industries Limited
          <br />
          https://hotzgroup.com/
          <br />
          703 Chiranjiv Tower
          <br />
          43 Nehru Place,
          <br />
          New Delhi - 110 019, India
        </p>
      </div>
      <Footer />
    </>
  );
};

export default page;
