function janken () {
  /* 変数定義 ************************/
  // ジャンケンの手の番号を設定
  var GU    = 1;
  var CHOKI = 2;
  var PA    = 3;
  
  /* 関数定義 ************************/
  // 人間に手を入力してもらう機能
  function getHumHand() {
    var hum = prompt('半角数字で1~3の数字を入力してください。\n\n' + GU + ':グー\n' + CHOKI + ':チョキ\n' + PA + ':パー');
    hum = parseInt(hum, 10);
    if (hum !== GU && hum !== CHOKI && hum !== PA) {
      return undefined;
    } else {
      return hum;
    }
  }
  
  // コンピュータの手を決める
  function getComHand() {
    return Math.floor(Math.random() * 3) + 1;
  }
  
  // コンピュータの手の名前を取得
  function getHandName(num) {
    switch (num) {
      case GU:
      return 'グー';
      case CHOKI:
      return 'チョキ';
      case PA:
      return 'パー';
    }
  }
  
  // 結果の判定
  function getResult(com, hum) {
    if (hum === com) {
      return '結果はあいこでした。';
    } else if ((com === GU && hum === PA) || (com === CHOKI && hum === GU) || (com === PA && hum === CHOKI)) {
      return '勝ちました。';
    } else {
      return '負けました。';
    }
  }
  
  // 最終的な結果のメッセージ
  function getResultMsg(com, hum) {
    return getResult(com, hum) + 'コンピュータの出した手は「' + getHandName(com) + '」でした';
  }
  
  /* 実行する処理 ************************/
  var hum = getHumHand();
  if (!hum) {
    alert('入力値をうまく認識できませんでした。ブラウザを再読込すると、もう一度挑戦できます。');
  } else {
    var com = getComHand();
    alert(getResultMsg(com, hum));
    return getResult(com, hum);
  }
}

var win = 0;
var isLose = false;
while (!isLose) {
  var result = janken();
  if (result === '結果はあいこでした。') {
    continue;
  }
  if (result === '勝ちました。') {
    win++;
    alert('ただいま「' + win + '」勝です。');
    continue;
  }
  alert('連勝はストップです。記録は「' + win + '」勝でした。');
  isLose = true;
}
