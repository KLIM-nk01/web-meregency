import { ERROR_MESSAGE } from '@constants/errorMessage';
import { Dispatch } from 'redux';
import { IMedcenterData, MedCenterAction, MedCenterActionTypes } from '@store/types/medCentersType';
import axios from 'axios';
import { API_URL } from '@constants/apiUrl';

export const fetchMedCenters = () => {
  return  (dispatch: Dispatch<MedCenterAction>) => {
    dispatch({ type: MedCenterActionTypes.FETCH_MEDCENTERS });

     axios
      .get(API_URL.MEDCENTERS)
      .then((response) => {
        dispatch({ type: MedCenterActionTypes.FETCH_MEDCENTERS_SUCCESS, payload: response.data });
      })
      .catch((error) => {
        if (error.response) {
          dispatch({
            type: MedCenterActionTypes.FETCH_MEDCENTERS_ERROR,
            errorMessage: ERROR_MESSAGE.FAILED_DATA_LOAD,
          });
        } else if (error.request) {
          dispatch({
            type: MedCenterActionTypes.FETCH_MEDCENTERS_ERROR,
            errorMessage: ERROR_MESSAGE.SERVER_ERROR,
          });
        } 
      });
  };
};
