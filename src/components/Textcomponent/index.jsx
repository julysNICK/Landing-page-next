import P from 'prop-types';
import * as Styled from './styles';

export const Textcomponent = ({ children }) => {
  return <Styled.Container dangerouslySetInnerHTML={{ __html: children }} />;
};

Textcomponent.propTypes = {
  children: P.node.isRequired,
};
