var practice = document.getElementById('practice');
practice.innerHTML = '<h1>れんしゅう</h1>';
practice.style.backgroundColor = '#999999';
practice.style.fontSize = '30px';
practice.style.color = '#FFFFFF';

//要素を追加します
var first = document.createElement('div');
first.setAttribute('id', 'first');
first.innerHTML = '<P>要素を追加</p>';
practice.insertBefore(first, null);

//さらに要素を追加します
var second = document.createElement('div');
second.setAttribute('id', 'second');
second.innerHTML = '<p>さらに要素を追加</p>'
practice.insertBefore(second, first);