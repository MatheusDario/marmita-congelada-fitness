import * as Styled from './styled';

export type GridVideoProps = {
  children: string;
};

export const GridVideo = ({ children }: GridVideoProps) => {
  return (
    <Styled.Container>
      <h1>{children}</h1>
    </Styled.Container>
  );
};
