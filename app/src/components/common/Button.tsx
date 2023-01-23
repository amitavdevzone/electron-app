import React from 'react';

interface Props {
  text: string;
}

export const Button: React.FC<Props> = ({ text }) => {
  return (
    <button
      type="submit"
      className="rounded shadow bg-green-700 text-white py-2 px-4"
    >
      {text}
    </button>
  );
};
