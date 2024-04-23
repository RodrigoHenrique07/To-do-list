import { InputHTMLAttributes, useState } from 'react';
import { EyeSlash, Eye } from '@phosphor-icons/react';
import * as S from './styled';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function CustomInputPassword({ label, ...props }: InputProps) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };

  return (
    <>
      <S.Wrapper>
        <S.Label>{label}</S.Label>
        <S.Container>
          <S.ContainerInputPassword
            type={showPassword ? 'text' : 'password'}
            {...props}
          />
          <S.Icon onClick={togglePasswordVisibility}>
            {showPassword ? <EyeSlash size={24} /> : <Eye size={24} />}
          </S.Icon>
        </S.Container>
      </S.Wrapper>
    </>
  );
}
