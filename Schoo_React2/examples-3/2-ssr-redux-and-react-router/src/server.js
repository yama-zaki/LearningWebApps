/**
 * サーバサイド（Node.js）で動くコード
 */
import path from 'path';
import express from 'express';
import expstate from 'express-state';
import React from 'react';
import { renderToString } from 'react-dom/server';

import { createMemoryHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import App from './App';
import configureStore from './configureStore';

const app = express();
// express-stateをexpressに適応
// expose関数が利用可能になる（後述）
expstate.extend(app);

// ../staticにあるファイルは静的ファイル
app.use(express.static(path.resolve(__dirname, '../static')));

/**
 * 全てのパスを受けるルート
 */
app.use((req, res) => {
  const store = configureStore();
  // サーバサイドではcreateMemoryHistoryを使う
  // 引数にURLを渡すことで、そのURLでstateを初期化出来る
  const history = syncHistoryWithStore(createMemoryHistory(req.url), store);

  /**
   * express-stateのexpose関数
   * 第1引数をserializeしてwindow.__INITIAL_STATE__書き出すJSを生成
   * JSはres.locals.state.toString()で取得できるので、
   * それをHTMLに埋め込む
   */
  res.expose(store.getState(), '__INITIAL_STATE__');

  // サーバサイドレンダリング
  const html = renderToString(
    <App store={store} history={history} />
  );

  res.type('html');
  res.send(`
<!doctype html>
<html>
  <head>
    <title>Hello, Server Side Rendering</title>
  </head>
  <body>
    <div id="root">${html}</div>
    <script>${res.locals.state.toString()}</script>
    <script src="client.bundle.js"></script>
  </body>
</html>`);
});

// localhost:3000で起動
app.listen(3000);
