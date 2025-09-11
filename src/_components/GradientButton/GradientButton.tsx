import React from "react";

interface GradientButtonProps {
  children: React.ReactNode;
  className?: string;
}

const GradientButton: React.FC<GradientButtonProps> = ({
  children,
  className,
}) => {
  const handleClick = () => {
    // Get the current URL parameters
    const params = new URLSearchParams(window.location.search);

    // Get the current path
    const currentPath = window.location.pathname;

    // Define the base redirect URL
    let redirectUrl = currentPath.endsWith("/masterclass-video")
      ? "/checkout?mc-redirect=true"
      : "/checkout";

    // Append the existing URL parameters to the redirect URL
    if (params.toString()) {
      redirectUrl += `?&${params.toString()}`;
    }

    // Redirect to the updated URL with parameters
    window.location.href = redirectUrl;
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
