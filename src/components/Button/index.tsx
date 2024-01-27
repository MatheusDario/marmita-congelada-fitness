import * as Styled from './styled';

export type ButtonProps = {
  buttonText: string;
};

export const Button = ({ buttonText }: ButtonProps) => {
  return <Styled.Container>{buttonText}</Styled.Container>;
};
