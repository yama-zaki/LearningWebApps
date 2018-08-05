// おみくじオブジェクトの定義
var omikuji = {
  results: ["大吉","吉","中吉","小吉","凶"],
  getResult: function() {
    var results = this.results;
    return results[Math.floor(Math.random() * results.length)];
  }
}

console.log(omikuji.getResult())