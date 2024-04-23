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

interface TypeLogin {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup.string().email('Email inválido').required('Email é obrigatório'),
  password: yup.string().required('Senha é obrigatória')
});

export function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (formData: TypeLogin) => {
    try {
      const registerResponse = await api.post('/users/login', formData);

      if (registerResponse) {
        navigate('/home');
      }
    } catch (error: any) {
      alert(`Email ou senha incorreta`);
    }
  };

  function handleSignUp() {
    navigate('/signUp');
  }
  return (
    <>
      <S.ContainerLogin>
        <AccessTitle title="Bem vindo!" />

        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <S.ContainerInput>
            <div>
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
            </div>

            <div>
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
            </div>
          </S.ContainerInput>

          <S.ForgotPasswor>Esqueceu sua senha?</S.ForgotPasswor>
          <CustomButton text="Login" type="submit" />
        </S.Form>

        <S.Register>
          <S.TextRegister>Não tem uma conta?</S.TextRegister>
          <S.NewRegister onClick={handleSignUp}>Cadastre-se</S.NewRegister>
        </S.Register>
      </S.ContainerLogin>
    </>
  );
}
