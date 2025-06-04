import React from "react";

export function Button({ children, onClick, className = "", ...props }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded bg-yellow-600 text-black hover:bg-yellow-500 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
