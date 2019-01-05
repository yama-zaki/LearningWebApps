/**
 * 記事詳細
 */
function getItem(id) {
  return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
    .then(resp => resp.json());
}

/**
 * Hacker Newsの新着記事一覧取得
 */
export default function getNewStories() {
  return fetch('https://hacker-news.firebaseio.com/v0/newstories.json')
    .then(resp => resp.json())
    // 500件も返ってくるので、20件に絞る
    .then(stories => stories.slice(0, 20))
    // 1件ずつ詳細情報を取得する
    .then(stories => Promise.all(stories.map(getItem)));
}
