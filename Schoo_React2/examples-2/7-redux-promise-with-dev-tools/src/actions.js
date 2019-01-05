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
  return getTitanicInfo()
    .then(data => ({ type: type.LOADED, data: data }))
    .catch(err => ({ type: type.ERROR, error: err }));
}
