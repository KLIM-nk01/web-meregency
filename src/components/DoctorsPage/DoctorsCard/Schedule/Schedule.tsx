import React, { useReducer, useState } from 'react';
import Button from '@components/common/Button/Button';
import ScheduleItem from './ScheduleItem/ScheduleItem';
import { ScheduleWrapper, WrapperHeader, ItemWrapper, SuccessMessage } from './ScheduleStyle';
import { ActionType, IScheduleInitialState, ScheduleActionTypes } from './types';
import { useTypesSelector } from '@hooks/UseTypedSelector';

export interface IScheduleProps {
  workTimeData: { date: string; time: string; _id: string }[];
}

const initialState = {
  choiceWorkTime: {
    date: '',
    time: '',
    _id: '',
  },
  disabledItem: null,
  zeroing: false,
  viewSuccessMessage: false,
};

const reducer = (state: IScheduleInitialState, action: ActionType): IScheduleInitialState => {
  switch (action.type) {
    case ScheduleActionTypes.SET_CHOICE_WORK_TIME:
      return {
        ...state,
        viewSuccessMessage: false,
        choiceWorkTime: {
          date: action.payload.date,
          time: action.payload.time,
          _id: action.payload._id,
        },
      };
    case ScheduleActionTypes.SET_DISABLED_ITEM:
      return { ...state, viewSuccessMessage: false, disabledItem: action.payload.disabledItem };
    case ScheduleActionTypes.SUCCESS_MESSAGE:
      return { ...state, viewSuccessMessage: true };
    default:
      return state;
  }
};

const Schedule: React.FC<IScheduleProps> = ({ workTimeData }) => {
  const [stateSchedule, dispatch] = useReducer(reducer, initialState);
  const [disabledButton, setDisabledButton] = useState<boolean>(false);
  const sendWorkTime = () => {
    dispatch({ type: ScheduleActionTypes.SUCCESS_MESSAGE });
  };

  const viewDate = (idDateTime?: string) => {
    console.log(stateSchedule.choiceWorkTime);
    sendWorkTime();
  };

  const renderItem = () =>
    workTimeData.map((workTimeItem, index) => {
      if (stateSchedule.disabledItem === null || index === stateSchedule.disabledItem) {
        return (
          <ScheduleItem
            disabledButton={disabledButton}
            setDisabledButton={setDisabledButton}
            key={workTimeItem._id}
            stateSchedule={stateSchedule}
            workTimeItem={workTimeItem}
            index={index}
            dispatch={dispatch}
          />
        );
      } else {
        return (
          <ScheduleItem
            disabledButton={disabledButton}
            setDisabledButton={setDisabledButton}
            key={workTimeItem._id}
            disabled
            stateSchedule={stateSchedule}
            workTimeItem={workTimeItem}
            index={index}
            dispatch={dispatch}
          />
        );
      }
    });

  return (
    <ScheduleWrapper>
      <WrapperHeader>
        <span>Doctors schedule</span>
      </WrapperHeader>
      {workTimeData.length == 0 && <span>The doctor hasn't added a schedule yet.</span>}
      <ItemWrapper>{renderItem()}</ItemWrapper>
      {stateSchedule.viewSuccessMessage && (
        <SuccessMessage>
          You have booked a ticket for {stateSchedule.choiceWorkTime.time} on{' '}
          {stateSchedule.choiceWorkTime.date}. Be healthy!
        </SuccessMessage>
      )}
      {disabledButton ? (
        <Button onClick={() => viewDate()} round variant="contained">
          Sign Up
        </Button>
      ) : (
        <Button disabled onClick={() => viewDate()} round variant="contained">
          Sign Up
        </Button>
      )}
    </ScheduleWrapper>
  );
};

export default Schedule;