/**
 * サーバサイド（Node.js）で動くコード
 */
import path from 'path';
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import MyComponent from './MyComponent';

const app = express();

// ../staticにあるファイルは静的ファイル
app.use(express.static(path.resolve(__dirname, '../static')));

// インデックスページ
app.get('/', (req, res) => {
  res.type('html');
  res.send(`
<!doctype html>
<html>
  <head>
    <meta charset="UTF-8" />
  </head>
  <body>
    <ul>
      <li><a href="no-ssr">SSR無し</a></li>
      <li><a href="good">SSR有り</a></li>
      <li><a href="bad">SSR有りだが悪い例</a></li>
    </ul>
  </body>
</html>
`);
});

/**
 * サーバサイドレンダリング無し
 */
app.get('/no-ssr', (req, res) => {
  res.type('html');
  res.send(`
<!doctype html>
<html>
  <head>
    <title>Hello, Server Side Rendering</title>
  </head>
  <body>
    <div id="root" />
    <script src="client.bundle.js"></script>
  </body>
</html>`);
});

/**
 * シンプルなサーバサイドレンダリング
 */
app.get('/good', (req, res) => {
  // 2. renderToStringでHTML文字列を出力
  const html = renderToString(<MyComponent />);
  // 3. 2のHTMLを描画先要素(id=root)に埋め込んだHTMLを生成し、
  //    ブラウザに送信(res.send())
  res.type('html');
  res.send(`
<!doctype html>
<html>
  <head>
    <title>Hello, Server Side Rendering</title>
  </head>
  <body>
    <div id="root">${html}</div>
    <script src="client.bundle.js"></script>
  </body>
</html>`);
});

/**
 * サーバ・ブラウザ間でDOM構造がズレている例
 */
app.get('/bad', (req, res) => {
  // クライアントとnameが違う
  const html = renderToString(<MyComponent name="pirosikick"/>);
  // サーバサイドレンダリング
  res.type('html');
  res.send(`
<!doctype html>
<html>
  <head>
    <title>Hello, Server Side Rendering</title>
  </head>
  <body>
    <div id="root">${html}</div>
    <script src="client.bundle.js"></script>
  </body>
</html>`);
});
// localhost:3000で起動
app.listen(3000);
