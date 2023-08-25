import { useState } from 'react';
import { ChevronDown, ChevronUp } from '@atoms/icons';
import {
  StyledAccordionItem,
  StyledAccordionText,
  StyledAccordionContent,
} from './styles';

type Props = {
  title: string;
  content: string;
};

const Accordion = ({ title, content }: Props) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <StyledAccordionItem>
      <StyledAccordionText onClick={() => setIsActive(!isActive)}>
        {title}
        <span>{isActive ? <ChevronUp /> : <ChevronDown />}</span>
      </StyledAccordionText>
      {isActive && <StyledAccordionContent>{content}</StyledAccordionContent>}
    </StyledAccordionItem>
  );
};

export default Accordion;
