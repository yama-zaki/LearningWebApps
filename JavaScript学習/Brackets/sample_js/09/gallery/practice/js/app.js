// アルバムデータの作成
var album = [
  {src: 'img/1.jpg', msg: '山道の緑が気持ちいい'},
  {src: 'img/2.jpg', msg: '階段きつかった'},
  {src: 'img/3.jpg', msg: '高尾山薬王院！'},
  {src: 'img/4.jpg', msg: '帰りはロープウェイでスイスイ'},
  {src: 'img/5.jpg', msg: '〆のお蕎麦です'}
];

// 最初のデータを表示しておく
var mainImage = document.createElement('img');
mainImage.setAttribute('src', album[0].src);
mainImage.setAttribute('alt', album[0].msg);

var mainMsg = document.createElement('p');
mainMsg.innerText = mainImage.alt;

var mainFlame = document.querySelector('#gallery .main');
mainFlame.insertBefore(mainImage, null);
mainFlame.insertBefore(mainMsg, null);

// サムネイル写真画像の表示
var thumbFlame = document.querySelector('#gallery .thumb');
for (var i = 0; i < album.length; i++) {
  var thumbImage = document.createElement('img');
  thumbImage.setAttribute('src', album[i].src);
  thumbImage.setAttribute('alt', album[i].msg);
  thumbFlame.insertBefore(thumbImage, null);
}