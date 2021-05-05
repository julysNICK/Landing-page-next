import * as Styled from './styles';
import { Textcomponent } from '../Textcomponent';
import { SectionContainer } from '../SectionContainer';

export type FooterProps = {
  footerHtml: string;
};

export const Footer = ({ footerHtml }: FooterProps) => {
  return (
    <Styled.Container>
      <SectionContainer>
        <Textcomponent>{footerHtml}</Textcomponent>
      </SectionContainer>
    </Styled.Container>
  );
};
