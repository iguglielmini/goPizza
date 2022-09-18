import React from 'react';

import Input from '../../components/Input';
import Button from '../../components/Button';
import IntroImg from '../../assets/intro-img.png';

import * as S from './styles';

function SignIn(){
  return (
    <S.Container>
        <S.ImageIntro source={IntroImg} />
        <S.Form>
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
        </S.Form>
    </S.Container>
  );
}

export default SignIn;