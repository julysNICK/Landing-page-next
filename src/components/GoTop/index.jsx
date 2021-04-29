import P from 'prop-types';
import * as Styled from './styles';
import { UpArrow } from '@styled-icons/boxicons-regular/UpArrow';
export const GoTop = () => {
  return (
    <Styled.Container href="#" arial-label="Go to top" title="Go to top">
      <UpArrow />
    </Styled.Container>
  );
};
