"use client";

import React, { useEffect } from "react";
import ApplicationForm from "./ApplicationForm";

type ApplicationModalProps = {
  isOpen: boolean;
  onClose: () => void;
  positionTitle: string;
};

export default function ApplicationModal({
  isOpen,
  onClose,
  positionTitle,
}: ApplicationModalProps) {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-sm lg:w-2xl w-full h-[80vh] lg:h-[90vh] overflow-y-auto relative shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-2xl font-semibold hover:text-red-600"
        >
          &times;
        </button>

        <ApplicationForm onClose={onClose} positionTitle={positionTitle} />
      </div>
    </div>
  );
}
