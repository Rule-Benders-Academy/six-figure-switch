import React from 'react';

interface GradientButtonProps {
  children: React.ReactNode;
  className?: string;
}

const GradientButton: React.FC<GradientButtonProps> = ({ children, className }) => {

  const handleClick = () => {
    window.location.href = "/checkout";
  };

  return (
    <button
      onClick={handleClick}
      className={`px-3 md:px-8 lg:px-11 lg:py-2 md:py-4 py-2 text-white font-semibold shadow-md uppercase transition hover:brightness-110 text-base md:text-2xl lg:text-[24px] rounded-[98.89px] md:rounded-[274.35px] border-[1px] border-white mt-6 md:mt-10 lg:mt-16 ${className}`}
      style={{
        background:
          "linear-gradient(90deg, #FFBE48 0%, #FFA500 50%, #E99803 100%)",
      }}
    >
      {children}
    </button>
  );
};

export default GradientButton;
