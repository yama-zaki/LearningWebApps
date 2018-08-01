/* プログラムで使用する変数の設定 **********/
// フォームの要素を取得
var button = document.getElementById('button');
var form = document.getElementById('form');
var textarea = document.getElementById('textarea');

// 文字数制限
var maxTextNum = textarea.getAttribute('maxlength');

// 要素の追加 **********/
// 残りの文字数を表示する要素の追加
var textMessage = document.createElement('div');
var parent = textarea.parentElement;
parent.insertBefore(textMessage, textarea);

/* イベント処理 *********/
// お問い合わせボタンを押した時
document.addEventListener('click', function() {
  // フォームを表示
  form.style.display = 'block';
});

// テキストエリアでキーをタイプしたとき
textarea.addEventListener('keyup', function() {
  var currentTextNum = textarea.value.length;
  textMessage.innerHTML = '<p>あと「' + (maxTextNum - currentTextNum) + '」文字入力できます。</P>';
});
