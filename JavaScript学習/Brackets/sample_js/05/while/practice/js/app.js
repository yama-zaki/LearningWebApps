var year = 2000;
while (year <= 2100) {
  if (year % 4) {
    console.log(year + ':冬季オリンピック');
  } else {
    console.log(year + ':夏季オリンピック');
  }
  year = year + 2;
} 