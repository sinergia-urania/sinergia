import React from "react";

export function Input({ className = "", ...props }) {
  return (
    <input
      className={`px-3 py-2 rounded border border-zinc-600 bg-zinc-800 text-white ${className}`}
      {...props}
    />
  );
}
