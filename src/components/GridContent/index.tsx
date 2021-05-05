import { Heading } from '../Heading';
import { SectionBackground } from '../SectionBackground';
import { Textcomponent } from '../Textcomponent';
import * as Styled from './styles';

export type GridContentProps = {
  title: string;
  html: string;
  background?: boolean;
  sectionId?: string;
  component?: string;
};

export const GridContent = ({
  title,
  html,
  background = false,
  sectionId = '',
}: GridContentProps) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Styled.Container>
        <Heading uppercase colorDark={!background} as="h2">
          {title}
        </Heading>
        <Styled.Html>
          <Textcomponent>{html}</Textcomponent>
        </Styled.Html>
      </Styled.Container>
    </SectionBackground>
  );
};
