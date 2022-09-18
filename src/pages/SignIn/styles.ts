import styled, { css } from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { getBottomSpace } from "react-native-iphone-x-helper";

export const ImageIntro = styled.Image`
  width: 260px;
  height: 360px;
  resize: stretch;
  margin: auto;
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
  justify-content: center;
`;

export const Content = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: getBottomSpace() + 48
  }
})`
  width: 100%;
  padding: 0 32px;
`;