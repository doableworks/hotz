"use client";

import { useState } from "react";
import ApplicationModal from "./ApplicationModal";

export default function ApplyButton({
  positionTitle,
}: {
  positionTitle: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex justify-center px-7 py-4 rounded-full bg-[#B9041A] text-white text-sm hover:bg-opacity-90 transition"
      >
        APPLY NOW
      </button>

      <ApplicationModal
        positionTitle={positionTitle}
        isOpen={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}
