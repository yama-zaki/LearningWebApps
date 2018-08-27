var name = prompt('名前を入力してください');

greet(name);

function greet(name) {
   var message = 'こんにちは';
   alert(message + name);
   return;
}