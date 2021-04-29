import P from 'prop-types';
import * as Styled from './styles';
import { Textcomponent } from '../Textcomponent';
import { SectionContainer } from '../SectionContainer';

export const Footer = ({ footerHtml }) => {
  return (
    <Styled.Container>
      <SectionContainer>
        <Textcomponent>{footerHtml}</Textcomponent>
      </SectionContainer>
    </Styled.Container>
  );
};
Footer.propTypes = {
  footerHtml: P.string.isRequired,
};
