import * as Styled from './styles';

export type TextcomponentProps = {
  children: string;
};
export const Textcomponent = ({ children }: TextcomponentProps) => {
  return <Styled.Container dangerouslySetInnerHTML={{ __html: children }} />;
};
