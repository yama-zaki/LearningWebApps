// 要素オブジェクトの取得
var getResult = document.getElementById('getResult');
var result = document.getElementById('result');

// イベントの登録
getResult.addEventListener('click', function(){
  result.innerHTML = '結果は「' + omikuji.getResult() + '」でした。';
});

// おみくじオブジェクトの定義
var omikuji = {
  results: ["大吉","吉","中吉","小吉","凶"],
  getResult: function() {
    var results = this.results;
    return results[Math.floor(Math.random() * results.length)];
  }
}

console.log(omikuji.getResult())