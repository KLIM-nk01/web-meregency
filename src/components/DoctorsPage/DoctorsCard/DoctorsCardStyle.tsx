import styled from 'styled-components';
import { STYLE_CONSTANTS } from '@constants/styleConstants';

export const Card = styled.div`
  width: 45%;
  height: 400px;
  margin: 10px;

  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  background: ${STYLE_CONSTANTS.COLORS.smokyWhite};
  color: ${STYLE_CONSTANTS.COLORS.black};
  padding: 15px;
  box-shadow: 5px 5px 10px ${STYLE_CONSTANTS.COLORS.darkGrey};
`;

export const ContainerOne = styled.div`
  width: 150px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  img {
    width: 150px;
    border: 1px solid ${STYLE_CONSTANTS.COLORS.darkGrey};
  }
`;

export const ContainerTwo = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  font-size: ${STYLE_CONSTANTS.FONT_SIZE.large};
  font-weight: 700;
`;
const Subtitle = styled.span`
  color: ${STYLE_CONSTANTS.COLORS.pearl};
  font-size: ${STYLE_CONSTANTS.FONT_SIZE.little};
`;

export const NameSurname = styled(Title)``;
export const DoctorsDirection = styled(Title)``;

export const Expiriens = styled(Subtitle)`
  margin-bottom: 10px;
`;
export const Reviews = styled(Subtitle)``;
export const DegreeScience = styled(Subtitle)``;
export const Description = styled(Subtitle)``;