/**
 * Open Movie Database API
 * http://www.omdbapi.com/
 */
const API_URL = 'http://www.omdbapi.com/?t=titanic&y=&plot=short&r=json';

export default function getTitanicInfo() {
  return fetch(API_URL).then(resp => {
    if (resp.status !== 200) {
      throw new Error(resp.statusText);
    }
    return resp.json();
  });
}
