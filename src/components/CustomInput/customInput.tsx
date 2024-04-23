import { InputHTMLAttributes } from 'react';
import * as S from './styled';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function CustomInput({ label, ...props }: InputProps) {
  return (
    <>
      <S.Wrapper>
        <S.Label>{label}</S.Label>
        <S.Container>
          <S.ContainerInput {...props} />
        </S.Container>
      </S.Wrapper>
    </>
  );
}
