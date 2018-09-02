/* プログラムで使用する変数の設定 **********/
// フォームの要素を取得
var button = document.getElementById('button');
var form = document.getElementById('form');
var textarea = document.getElementById('textarea');

// 文字数制限
var maxTextNum = textarea.getAttribute('maxlength');

// 残り時間
var reminingTimeNum = 30;


// 要素の追加 **********/
// 残りの文字数を表示する要素の追加
var textMessage = document.createElement('div');
var parent = textarea.parentElement;
parent.insertBefore(textMessage, textarea);

// 残時間を表示する要素の追加
var timeMasseage = document.createElement('div');
parent.insertBefore(timeMasseage, null);

/* イベント処理 *********/
// お問い合わせボタンを押した時
document.addEventListener('click', function() {
  // フォームを表示
  form.style.display = 'block';

  // タイマー処理で残り時間を表示
  var timerID = setInterval(function(){
    timeMasseage.innerHTML = '<p>制限時間：' +  reminingTimeNum + '秒</p>';
    if (reminingTimeNum <= 0) {
      alert('制限時間終了');
      clearInterval(timerID);
    }
    reminingTimeNum--;
  },1000);
});   
    
// テキストエリアでキーをタイプしたとき
textarea.addEventListener('keyup', function() {
  var currentTextNum = textarea.value.length;
  textMessage.innerHTML = '<p>あと「' + (maxTextNum - currentTextNum) + '」文字入力できます。</P>';
});
