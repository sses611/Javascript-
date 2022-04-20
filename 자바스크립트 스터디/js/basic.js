function call(){
  let StartDay = document.getElementById("startDay").value;
  let EndDay = document.getElementById("endDay").value;

  let strArr = StartDay.split('-');
  let endArr = EndDay.split('-');
  let day = new Date(strArr[0], strArr[1], strArr[2]);  
  let day2 = new Date(endArr[0], endArr[1], endArr[2]);

  let differ = day2 - day;

  let calYear = calMonth*12;
  let calMonth = calDay * 30;
  let calDay = 24*60*60*1000;

  alert(differ);
  
  if(strArr && endArr){
    document.getElementById('years').value = parseInt(differ/calYear);
    document.getElementById('months').value = parseInt(differ/calMonth);
    document.getElementById('days').value = parseInt(differ/calDay);
  }
}