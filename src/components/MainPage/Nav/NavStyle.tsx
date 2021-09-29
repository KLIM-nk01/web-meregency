import styled from 'styled-components';
import { flex } from '@styleMixin/flex';
import { STYLE_CONSTANTS } from '@constants/styleConstants';

export const NavWrapper = styled.div`
  display: flex;

  a {
    text-decoration: none;
    color: ${STYLE_CONSTANTS.COLORS.white};
  }
`;

export const NavItem = styled.div`
  width: 220px;
  height: 390px;
  padding-bottom: 5px;
  transition: 0.5s;
  background: ${STYLE_CONSTANTS.COLORS.lavender};
  ${flex};
  flex-direction: column;
  justify-content: space-around;
  margin: 0 20px;
  box-shadow: 0px 0px 15px 1px ${STYLE_CONSTANTS.COLORS.darkGrey};
  border-radius: 5px;

  img {
    width: 130px;
  }

  span {
    font-size: 20px;
    color: ${STYLE_CONSTANTS.COLORS.blue};
    text-align: center;
    font-weight: 600;
  }
  p {
    font-size: ${STYLE_CONSTANTS.FONT_SIZE.little};
    color: ${STYLE_CONSTANTS.COLORS.darkGrey};
    text-align: center;
  }

  :hover {
    box-shadow: 0px 0px 15px 1px ${STYLE_CONSTANTS.COLORS.darkGrey};
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }
`;
