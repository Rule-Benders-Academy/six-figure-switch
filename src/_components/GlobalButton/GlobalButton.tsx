import { ReactNode } from "react";

interface GlobalButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

const GlobalButton = ({ children, onClick, className = "" }: GlobalButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`bg-[#0000FF] text-white px-6 py-2 rounded-full text-lg transition duration-300 ${className}`}
    >
      {children}
    </button>
  );
};

export default GlobalButton;
