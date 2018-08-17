// 体重の数値を得る
var weight;
weight = prompt('BMIを測定します。まずはあなたの体重（kg）を入力して下さい');
// 身長の数値を得る
var height;
height = prompt('BMIを測定します。次にあなたの身長（ｍ）を入力して下さい');
// 体重と身長からBMIを計算して、警告ダイアログに表示する
var bmi = weight / (height * height);
var message = 'あなたのBMIは「' + bmi + '」です。';
alert(message);