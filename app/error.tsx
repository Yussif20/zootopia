"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-orange-100 text-orange-800 px-4">
      <h2 className="text-3xl font-bold mb-4">Oops! Something went wrong 🐾</h2>
      <p className="mb-6 text-center max-w-md">
        An unexpected error occurred in Zootopia. Please try again or return to
        the homepage.
      </p>
      <button
        onClick={() => reset()}
        className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition"
      >
        Try Again
      </button>
    </div>
  );
}
