import styled from 'styled-components/native';

export const FooterView = styled.View`
    background-color: #fff;
    height: 83px;
    position: relative;
    justify-content: center;
    align-items: center;
`;

export const FooterCreater = styled.View`
    position: absolute;
    width: 90px;
    height: 90px;
    left: 50%;
    top: -20px;
    background-color: #fff;
    border-radius: 45px;
    transform: translateX(-45px);
    flex: 1;
    justify-content: center;
    align-items: center;
    z-index: 10
`;

export const FooterAdd = styled.TouchableOpacity`
    width: 56px;
    height: 56px;
    background-color: #1CAE81;
    border-radius: 28px;
    justify-content: center;
    align-items: center;
`;

export const FooterRouter = styled.View`
    padding: 0 10px;
    height: 57px;
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;

export const FooterCenter = styled.View`
    background-color: #fff;
`;