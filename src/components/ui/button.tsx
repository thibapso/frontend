import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset"; // Adicionando a propriedade type
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  onClick,
  type = "button",
}) => {
  return (
    <button className={`btn ${className}`} onClick={onClick} type={type}>
      {children}
    </button>
  );
};
