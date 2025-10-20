import React from "react";

export function Button({
  onClick,
  className = "",
  variant = "default",
  children,
}) {
  let baseStyle =
    "px-4 py-2 rounded-lg font-semibold text-white transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed";

  let variantStyle = "";
  switch (variant) {
    case "increment":
      variantStyle = "bg-green-400 hover:bg-green-700";
      break;

    case "decrement":
      variantStyle = "bg-red-400 hover:bg-red-700";
      break;

    case "reset":
      variantStyle = "bg-blue-400 hover:bg-blue-700";
      break;

    default:
      variantStyle = "bg-gray-600 hover:bg-gray-700";
  }
  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${variantStyle} ${className}`}
    >
      {children}
    </button>
  );
}
