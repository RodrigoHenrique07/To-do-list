import { ContainerButton } from './styled';

interface PropsButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export function CustomButton({ text, ...rest }: PropsButton) {
  return (
    <>
      <ContainerButton {...rest}>{text}</ContainerButton>
    </>
  );
}
