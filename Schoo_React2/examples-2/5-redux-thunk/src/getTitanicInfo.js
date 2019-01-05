/**
 * Open Movie Database API
 * http://www.omdbapi.com/
 */
const API_URL = 'http://www.omdbapi.com/?t=titanic&y=&plot=short&r=json';

export default function getTitanicInfo(callback) {
  const req = new XMLHttpRequest();
  req.open('GET', API_URL, true);
  req.onload = event => {
    if (req.readyState === 4) {
      if (req.status === 200) {
        callback(null, JSON.parse(req.responseText));
      } else {
        callback(new Error(req.statusText));
      }
    }
  };
  req.onerror = err => callback(err);
  req.send(null);
}
