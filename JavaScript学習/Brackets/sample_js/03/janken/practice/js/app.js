//　ジャンケンの手の番号を設定
var GU    = 1;
var CHOKI = 2;
var PA    = 3;

// ジャンケンの入力ダイアログボックスを表示
var hum = prompt('半角数字で1～3の数字を入力してください。\n\n' + GU + '：グー\n' + CHOKI + '：チョキ\n' + PA + '：パー');
hum = parseInt(hum, 10);

// 入力値のチェック
if (hum !== GU && hum !==CHOKI && hum !== PA){
  // 入力値が不適切な場合
  alert('入力値をうまく認識できませんでした。ブラウザを再読み込みすると、もう一度挑戦できます。');    
} else {
    
  // コンピュータの手を決める
  var com = Math.floor(Math.random() * 3) + 1;
  
  // コンピュータの手の名前
  var comHandName = '';
  switch (com) {
    case GU:
      comHandName = 'グー';
      break;
    case CHOKI:
      comHandName = 'チョキ';
      break;
    case PA:
      comHandName = 'パー';
      break;
  }
 
  // 結果の判定
  var msgResult = '';
  if (hum === com) {
    msgResult = '結果はあいこでした。';
  }  else if ((com === GU && hum === PA) || (com === CHOKI && hum === GU) || (com === PA && hum === CHOKI)) {
    msgResult = '勝ちました。';
  } else {msgResult = '負けました。';
  }    
  // 最終的な結果の表示
  msgResult = msgResult + 'コンピュータの出した手は「' + comHandName + '」でした';
  alert(msgResult);
}