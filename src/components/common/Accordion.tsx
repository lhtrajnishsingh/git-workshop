import React, { useState } from "react";
import styled from "styled-components";

interface AccordionProps {
  title: React.ReactNode;
  children: React.ReactNode;
  isOpen?: boolean;
  onToggle?: () => void;
}

const AccordionContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  overflow: hidden;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const AccordionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.accordionBg};
  cursor: pointer;
  font-weight: 500;
`;

const AccordionIcon = styled.span<{ isOpen: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  font-size: ${({ theme }) => theme.fontSizes.md};
  transform: ${({ isOpen }) => (isOpen ? "rotate(45deg)" : "rotate(0)")};
  transition: transform 0.2s ease-in-out;
  
  &::before {
    content: "+";
  }
`;

const AccordionContent = styled.div<{ isOpen: boolean }>`
  padding: ${({ isOpen, theme }) => (isOpen ? theme.spacing.md : "0")};
  max-height: ${({ isOpen }) => (isOpen ? "1000px" : "0")};
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  background-color: ${({ theme }) => theme.colors.cardBg};
`;

const Accordion: React.FC<AccordionProps> = ({
  title,
  children,
  isOpen: propIsOpen,
  onToggle,
}) => {
  const [isOpenState, setIsOpenState] = useState(false);
  
  // Use either the controlled or uncontrolled state
  const isOpen = propIsOpen !== undefined ? propIsOpen : isOpenState;
  
  const handleToggle = () => {
    if (onToggle) {
      onToggle();
    } else {
      setIsOpenState(!isOpenState);
    }
  };

  return (
    <AccordionContainer>
      <AccordionHeader onClick={handleToggle}>
        {title}
        <AccordionIcon isOpen={isOpen} />
      </AccordionHeader>
      <AccordionContent isOpen={isOpen}>{children}</AccordionContent>
    </AccordionContainer>
  );
};

export default Accordion;
