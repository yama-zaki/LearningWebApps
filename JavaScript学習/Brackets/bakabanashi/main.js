var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

function randomValueFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

var storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';

var insertX = [
  'Willy the Goblin', 
  'Big Daddy', 
  'Father Christmas'
];
var insertY = [
  'the soup kitchen', 
  'Disneyland', 
  'the White House'
];
var insertZ = [
  'spontaneously combusted', 
  'melted into a puddle on the sidewalk', 
  'turned into a slug and crawled away'
];

randomize.addEventListener('click', result);
  
function result() {
  var newStory = storyText;
  var Items = {
    xItem: '',
    yItem: randomValueFromArray(insertY),
    zItem: randomValueFromArray(insertZ),
    name: customName.value
  }
  
  function replaceItem(s) {
    switch (s) {
      case ':insertx:': {
        if(Items.xItem === '') {
          Items.xItem = randomValueFromArray(insertX);    
        } 
        return Items.xItem; 
      }
      case ':inserty:': {
        return Items.yItem;
      }
      case ':insertz:': {
        return Items.zItem;
      }
      case 'Bob': {
         if(Items.name === '') {
           Items.name = s;
         }
        return Items.name; 
      }
      case'300 pounds': {
        if(document.getElementById("uk").checked) {
          return Math.round(300 * 0.071429) + ' stone';
        } else {
          return s;
        }
      }
      case '94 fahrenheit': {
        if(document.getElementById("uk").checked) {
          return Math.round(94 * 1.8000 + 32.00) + ' centigrade';
        } else {
          return s;             
        }
      }
      default: {
        return s;     
      } 
    }
  }

  newStory = newStory.replace(/(:insertx:|:inserty:|:insertz:|Bob|300 pounds|94 fahrenheit)/g, replaceItem);
  
  story.textContent = newStory;
  story.style.visibility = 'visible';
  Items.xItem = '';
}