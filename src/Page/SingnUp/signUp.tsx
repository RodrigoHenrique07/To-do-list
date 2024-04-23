import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { AccessTitle } from '@/components/AccessTitle/Accesstitle';
import { CustomButton } from '@/components/CustomButton/customButton';
import { CustomInput } from '@/components/CustomInput/customInput';
import { CustomInputPassword } from '@/components/CustomInput/customInputPassword';
import * as S from './styled';
import { useNavigate } from 'react-router-dom';
import { api } from '@/server/api';

const schema = yup.object().shape({
  username: yup.string().required('Nome obrigatório'),
  email: yup.string().email('Email inválido').required('Email é obrigatório'),
  password: yup.string().required('Senha é obrigatória')
});

interface TypeRegister {
  email: string;
  password: string;
  username: string;
}

export function SignUp() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setValue
  } = useForm<TypeRegister>({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (formData: TypeRegister) => {
    try {
      const registerResponse = await api.post('/users', formData);

      if (registerResponse) {
        alert('Usuário criado com sucesso!');
      }

      navigate('/');
    } catch (error: any) {
      alert(error.message);
    }
  };

  function handleHome() {
    navigate('/');
  }

  return (
    <>
      <S.ContainerSignUp>
        <AccessTitle title="Cadastre sua conta." />

        <S.FormSignUp onSubmit={handleSubmit(onSubmit)}>
          <S.ContainerInputSignUp>
            <S.WrapperInput>
              <CustomInput
                {...register('username', {
                  onChange: event =>
                    setValue('username', event.target.value, {
                      shouldValidate: true
                    })
                })}
                placeholder="Nome de usuário"
                label="Nome"
              />
              {errors.username && (
                <S.MenssageError>{errors.username.message}</S.MenssageError>
              )}
            </S.WrapperInput>

            <S.WrapperInput>
              <CustomInput
                {...register('email', {
                  onChange: event =>
                    setValue('email', event.target.value, {
                      shouldValidate: true
                    })
                })}
                placeholder="Digite seu email de acesso"
                label="Email"
              />
              {errors.email && (
                <S.MenssageError>{errors.email.message}</S.MenssageError>
              )}
            </S.WrapperInput>

            <S.WrapperInput>
              <CustomInputPassword
                {...register('password', {
                  onChange: event =>
                    setValue('password', event.target.value, {
                      shouldValidate: true
                    })
                })}
                placeholder="Digite sua senha"
                label="Senha"
              />
              {errors.password && (
                <S.MenssageError>{errors.password.message}</S.MenssageError>
              )}
            </S.WrapperInput>
          </S.ContainerInputSignUp>
          <CustomButton type="submit" disabled={!isValid} text="SignUp" />
        </S.FormSignUp>

        <S.BackHome onClick={handleHome}>Voltar para login</S.BackHome>
      </S.ContainerSignUp>
    </>
  );
}
