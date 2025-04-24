import React from "react";
import styled from "styled-components";

type BadgeVariant = "primary" | "success" | "warning" | "danger" | "info" | "secondary";

interface BadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
}

const getBackgroundColor = (variant: BadgeVariant, theme: any) => {
  switch (variant) {
    case "primary":
      return theme.colors.primary;
    case "success":
      return theme.colors.success;
    case "warning":
      return theme.colors.warning;
    case "danger":
      return theme.colors.danger;
    case "info":
      return theme.colors.info;
    case "secondary":
      return theme.colors.secondary;
    default:
      return theme.colors.primary;
  }
};

const getTextColor = (variant: BadgeVariant, theme: any) => {
  if (variant === "warning") {
    return theme.colors.dark;
  }
  return theme.colors.light;
};

const StyledBadge = styled.span<BadgeProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: 500;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: ${({ theme }) => theme.borderRadius.pill};
  background-color: ${({ variant = "primary", theme }) => getBackgroundColor(variant, theme)};
  color: ${({ variant = "primary", theme }) => getTextColor(variant, theme)};
`;

const Badge: React.FC<BadgeProps> = ({ variant = "primary", children }) => {
  return <StyledBadge variant={variant}>{children}</StyledBadge>;
};

export default Badge;
