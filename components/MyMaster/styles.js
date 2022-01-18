import styled from 'styled-components/native';

export const MyMasterView = styled.View`
    flex: 10;
    background-color: #F9F9FF;
`;

export const Masters = styled.View`
    padding: 0 20px;
`;

export const Master = styled.TouchableOpacity`
    border-radius: 10px;
    background-color: #fff;
    padding: 15px;
    flex-direction: row;
    justify-content: flex-start;
    margin-bottom: 15px;
`;

export const MasterImage = styled.Image`
    width: 72px;
    height: 72px;
    border-radius: 36px;
`;

export const MasterInformation = styled.View`
    flex: 1;
    justify-content: space-between;
    flex-direction: row;
`;

export const MasterText = styled.View`
    justify-content: space-between;
    flex-direction: column;
    padding-top: 5px;
    padding-left: 15px;
`;

export const MasterPrice = styled.View`
    justify-content: space-between;
    flex-direction: column;
    padding-top: 5px;
    padding-left: 15px;
    align-items: flex-end;
`;

export const MasterName = styled.Text`
    color: #333333;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
`;

export const MasterProfession = styled.Text`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    color: #1CAE81;
`;

export const MasterStars = styled.View`
    flex-direction: row;
`;

export const MasterStarImage = styled.Image`
    margin-right: 5px;
`;

export const MasterLike = styled.TouchableOpacity`
    width: 27px;
    height: 27px;
    border-radius: 20px;
    background-color: rgba(239,48,36,0.1);
`;

export const MasterLikeImage = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;



