import React from 'react';

import Input from '../../components/Input';
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
        </S.Form>
    </S.Container>
  );
}

export default SignIn;