import React from "react";
import "../App.css";

// Props: rating (number), onChange (optional), readOnly (bool), size
export default function StarRating({ rating = 0, onChange, readOnly = false, size = 20 }) {
  const stars = [1,2,3,4,5];

  const handleClick = (value) => {
    if (readOnly) return;
    if (onChange) onChange(value);
  };

  return (
    <div style={{ display: 'inline-flex', gap: 6 }}>
      {stars.map(s => (
        <svg
          key={s}
          onClick={() => handleClick(s)}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill={s <= rating ? "#FFD700" : "none"}
          stroke="#FFD700"
          strokeWidth="1"
          style={{ cursor: readOnly ? 'default' : 'pointer' }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.402 8.168L12 18.896l-7.336 3.869 1.402-8.168L.132 9.21l8.2-1.192z" />
        </svg>
      ))}
    </div>
  );
}
