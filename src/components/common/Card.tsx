import React from "react";
import styled from "styled-components";

interface CardProps {
  children: React.ReactNode;
  padding?: string;
  margin?: string;
  elevation?: "low" | "medium" | "high";
}

const StyledCard = styled.div<CardProps>`
  background-color: ${({ theme }) => theme.colors.cardBg};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ padding, theme }) => padding || theme.spacing.lg};
  margin: ${({ margin }) => margin || "0"};
  box-shadow: ${({ elevation, theme }) =>
    elevation === "high"
      ? theme.shadows.lg
      : elevation === "medium"
      ? theme.shadows.md
      : theme.shadows.sm};
`;

const Card: React.FC<CardProps> = ({
  children,
  padding,
  margin,
  elevation = "low",
}) => {
  return (
    <StyledCard padding={padding} margin={margin} elevation={elevation}>
      {children}
    </StyledCard>
  );
};

export default Card;
