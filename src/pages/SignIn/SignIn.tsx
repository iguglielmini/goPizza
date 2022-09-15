import React from 'react';
import IntroImg from '../../assets/intro-img.png';

import * as S from './styles';

function SignIn(){
  return (
    <S.Container>
        <S.ImageIntro source={IntroImg} />
        <S.Form>
        <S.Title>Login</S.Title>

        </S.Form>
    </S.Container>
  );
}

export default SignIn;