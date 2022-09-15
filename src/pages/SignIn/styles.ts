import styled from "styled-components/native";
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
    color: white;
    font-size: 32px;
    font-weight: 400;
    text-align: left;
`;
export const Label = styled.Text`
    color: white;
    font-size: 14px;
    font-weight: 400;
    text-align: right;
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

