import styled from 'styled-components';
import { STYLE_CONSTANTS } from '@constants/styleConstants';

export const MedCenterItem = styled.div`
  width: 90%;
  height: fit-content;

  margin: 20px auto;
  background-color: ${STYLE_CONSTANTS.COLORS.white};
  border-radius: 15px;

  padding: 15px;
  box-shadow: 0px 0px 5px 1px ${STYLE_CONSTANTS.COLORS.darkGrey};

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

export const Title = styled.span`
  font-size: ${STYLE_CONSTANTS.FONT_SIZE.large};
  color: ${STYLE_CONSTANTS.COLORS.black};
  font-weight: 600;
`;

export const SubTitle = styled.span`
  font-size: ${STYLE_CONSTANTS.FONT_SIZE.little};
  color: ${STYLE_CONSTANTS.COLORS.darkGrey};
  font-weight: 500;
`;

export const ItemHeader = styled.div`
  width: 100%;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
`;

export const ItemPhoto = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid ${STYLE_CONSTANTS.COLORS.darkGrey};
  img {
    width: 100%;
  }
  overflow: hidden;
  margin-bottom: 5px;
`;

export const ItemDescription = styled.div`
  width: 100%;
  p {
    color: ${STYLE_CONSTANTS.COLORS.darkGrey};
  }
  span {
    display: block;
    color: ${STYLE_CONSTANTS.COLORS.darkGrey};
    margin: 10px 0;
    cursor: pointer;
    :hover {
      color: ${STYLE_CONSTANTS.COLORS.blue};
    }
  }
`;

export const ItemButtons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ItemMore = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;


export const CenterSraff = styled.div`
  position: relative;
  width: 90%;
  height: 200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  padding: 30px 10px;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 0;
  }
  background: ${STYLE_CONSTANTS.COLORS.white};

  box-shadow: 0px 0px 5px 1px ${STYLE_CONSTANTS.COLORS.darkGrey};
  span {
    position: absolute;
    top: 0;
    left: 0;
    margin-left: 10px;
    color: ${STYLE_CONSTANTS.COLORS.blue};
    font-size: ${STYLE_CONSTANTS.FONT_SIZE.large};
  }
  div {
    margin: 10px 0;
  }
`;
