import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import Input from '../../components/Input';
import Button from '../../components/Button';
import IntroImg from '../../assets/intro-img.png';

import * as S from './styles';

function SignIn(){
  return (
    <S.Container>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <S.Content>
        <S.ImageIntro source={IntroImg} />
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
          <Button title='Entrar' type='secondary' />
        </S.Content>
        </KeyboardAvoidingView>
    </S.Container>
  );
}

export default SignIn;