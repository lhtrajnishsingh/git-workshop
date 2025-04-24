import React from "react";
import styled from "styled-components";

interface ButtonProps {
  variant?: "primary" | "secondary" | "outline" | "text";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
}

const StyledButton = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  transition: all 0.2s ease-in-out;
  
  /* Size styles */
  padding: ${({ size, theme }) => 
    size === "sm" 
      ? `${theme.spacing.xs} ${theme.spacing.md}` 
      : size === "lg" 
        ? `${theme.spacing.md} ${theme.spacing.xl}` 
        : `${theme.spacing.sm} ${theme.spacing.lg}`};
  
  font-size: ${({ size, theme }) => 
    size === "sm" 
      ? theme.fontSizes.sm 
      : size === "lg" 
        ? theme.fontSizes.lg 
        : theme.fontSizes.md};
  
  /* Width styles */
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
  
  /* Variant styles */
  background-color: ${({ variant, theme }) => 
    variant === "primary" 
      ? theme.colors.primary 
      : variant === "secondary" 
        ? theme.colors.secondary 
        : "transparent"};
  
  color: ${({ variant, theme }) => 
    variant === "primary" || variant === "secondary" 
      ? theme.colors.light 
      : variant === "outline" 
        ? theme.colors.primary 
        : theme.colors.primary};
  
  border: ${({ variant, theme }) => 
    variant === "outline" 
      ? `1px solid ${theme.colors.primary}` 
      : "none"};
  
  /* Disabled styles */
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  
  &:hover {
    background-color: ${({ variant, theme }) => 
      variant === "primary" 
        ? "#004494" 
        : variant === "secondary" 
          ? "#5a6268" 
          : variant === "outline" 
            ? "rgba(0, 86, 179, 0.1)" 
            : "rgba(0, 86, 179, 0.05)"};
  }
  
  &:active {
    transform: translateY(1px);
  }
`;

const Button: React.FC<ButtonProps> = ({ 
  variant = "primary", 
  size = "md", 
  fullWidth = false, 
  onClick, 
  disabled = false, 
  children 
}) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
