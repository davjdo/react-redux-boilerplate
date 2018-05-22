import * as actionTypes from './actionTypes';

export const saveResult = res =>
  // const updatedResult = res * 2;
  ({
    type: actionTypes.STORE_RESULT,
    result: res
  });

export const storeResult = res => (dispatch, getState) => {
  setTimeout(() => {
    // const oldCounter = getState().ctr.counter;
    // console.log(oldCounter);
    dispatch(saveResult(res));
  }, 2000);
};

export const deleteResult = resElId => ({
  type: actionTypes.DELETE_RESULT,
  resultElId: resElId
});
