import getTitanicInfo from './getTitanicInfo';

export const type = {
  LOADING: 'LOADING',
  LOADED: 'LOADED',
  ERROR: 'ERROR',
};

/**
 * loadData
 *
 * - APIからデータを取得するAction Creator
 */
export function loadData() {
  /**
   * 通常はココでActionを返すが、
   * 関数を返すとredux-thunkが処理してくれる
   */
  return (dispatch/*, getState */) => {
    dispatch({ type: type.LOADING });

    getTitanicInfo((err, data) => {
      if (err) {
        dispatch({ type: type.ERROR, error: err });
      } else {
        dispatch({ type: type.LOADED, data: data });
      }
    });
  };
}
