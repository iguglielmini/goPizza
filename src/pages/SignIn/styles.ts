import styled, { css } from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

export const ImageIntro = styled.Image`
  width: 260px;
  height: 360px;
  resize: stretch;
`;

export const Form = styled.View`
  width: 100%;
  padding-left: 32px;
  padding-right: 32px;
  justify-content: flex-start;
`;

export const Title = styled.Text`
  font-size: 32px;
  font-weight: 400;
  text-align: left;
  margin-bottom: 16px;

  ${({ theme }) => css`
    color: ${theme.COLORS.TITLE};
    font-family: ${theme.FONTS.TITLE};
  `}
`;

export const Container = styled(LinearGradient).attrs(({ theme }) => ({
  colors: theme.COLORS.GRADIENT,
  start: { x: 0, y: 1 },
  end: { x: 0.5, y: 0.5 },
}))`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
