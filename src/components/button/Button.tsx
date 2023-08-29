'use client';

import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  label: string;
  link: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
const Button: React.FC<ButtonProps> = ({ label, onClick, link }) => {
  if (link) {
    return (
      <Link
        href={link}
        className="border-2 text-black px-6 py-2 bg-dull-lavender-200 rounded-xl border-dull-lavender-400"
      >
        {label}
      </Link>
    );
  }
  return <button onClick={onClick}>{label}</button>;
};

export default Button;
