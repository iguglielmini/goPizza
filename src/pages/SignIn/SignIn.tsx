import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import Input from '../../components/Input';
import Button from '../../components/Button';
import IntroImg from '../../assets/brand.png';

import * as S from './styles';

function SignIn(){
  return (
    <S.Container>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <S.Content>
        <S.Brand source={IntroImg} />
        <S.Title>Login</S.Title>
          <Input 
            type='secondary'
            autoCorrect={false}
            autoCapitalize="none"
            placeholder='E-mail'
          />
          <Input 
            type='secondary'
            autoCorrect={false}
            autoCapitalize="none"
            placeholder='Senha'
            secureTextEntry
          />
          <S.ForgotPasswordButton onPress={() => {}}>
            <S.ForgotPasswordLabel>
              Esqueceu a senha?
            </S.ForgotPasswordLabel>
          </S.ForgotPasswordButton>
          <Button title='Entrar' type='secondary' />
        </S.Content>
        </KeyboardAvoidingView>
    </S.Container>
  );
}

export default SignIn;