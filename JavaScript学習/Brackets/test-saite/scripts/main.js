var myImage = document.querySelector('img');

myImage.onclick = function(){
  var mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/Firefox.jpg'){
    myImage.setAttribute('src','images/Nanachi.jpg');
  } else{
    myImage.setAttribute('src','images/Firefox.jpg')
  }
   
 
}