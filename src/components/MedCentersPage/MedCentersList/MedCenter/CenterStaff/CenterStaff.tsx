import React from 'react';

import { CenterStaff, StaffItem, StaffWrapper } from './CenterStaffStyle';
import NoAva from '@assets/NoAvatar.png';
import uniqid from 'uniqid';

interface IStaf {
  services?: string[];
}

const Staff: React.FC<IStaf> = ({ services }) => {
  return (
    <CenterStaff>
      <span>Our staff: </span>
      <StaffWrapper>
        <StaffItem key={uniqid()}>
          <img src={NoAva} alt="doctors avatar" />
          <span>Doctors Name</span>
          <span>Doctors Direction</span>
        </StaffItem>

        <StaffItem key={uniqid()}>
          <img src={NoAva} alt="doctors avatar" />
          <span>Doctors Name</span>
          <span>Doctors Direction</span>
        </StaffItem>
      </StaffWrapper>
    </CenterStaff>
  );
};

export default Staff;
