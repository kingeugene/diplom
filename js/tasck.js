document.addEventListener('DOMContentLoaded', function() { 
  let num1 = parseFloat(( document.getElementById('num1').textContent));
  let num2 =  parseFloat((document.getElementById('num2').textContent ));
  let btnSum = (document.getElementById('btnSum'));
  const numInput = (document.getElementById('sum'));
  console.log()
  let sumRight = num1 + num2;
  btnSum.onclick = function () {
  	if ( sumRight == numInput.value) {
      alert('Вірно');  
    }else if (sumRight != numInput.value){
    	alert('Неправильно, спробуй ще раз');
    }
  };

  let num1Two = parseFloat(( document.getElementById('num1Two').textContent));
  let num2Two =  parseFloat((document.getElementById('num2Two').textContent ));
  let btnSumTwo = (document.getElementById('btnSumTwo'));
  const numInputTwo = (document.getElementById('sumTwo'));
  let sumRightTwo = num1Two - num2Two;
  btnSumTwo.onclick = function () {
  	if ( sumRightTwo == numInputTwo.value) {
      alert('Вірно'); 
    }else if (sumRightTwo != numInputTwo.value){
    	alert('Неправильно, спробуй ще раз');
    }
  };

  let num1Two2 = parseFloat(( document.getElementById('num1Two2').textContent));
  let num2Two2 =  parseFloat((document.getElementById('num2Two2').textContent ));
  let btnSumTwo2 = (document.getElementById('btnSumTwo2'));
  const numInputTwo2 = (document.getElementById('sumTwo2'));
  let sumRightTwo2 = num1Two2 - num2Two2;
  btnSumTwo2.onclick = function () {
    if ( sumRightTwo2 == numInputTwo2.value) {
      alert('Вірно'); 
    }else if (sumRightTwo != numInputTwo.value){
      alert('Неправильно, спробуй ще раз');
    }
  };

  let taskFour = (document.getElementById('taskFour'));
  let btnSumFour = (document.getElementById('btnSumFour'));
  btnSumFour.onclick = function () {
    if (taskFour.value == 'о') {
      alert('Вірно');  
    }else {
      alert('Неправильно, спробуй ще раз');
    }
  };

  let taskFour2 = (document.getElementById('taskFour2'));
  let btnSumFour2 = (document.getElementById('btnSumFour2'));
  btnSumFour2.onclick = function () {
    if (taskFour2.value == 'а') {
      alert('Вірно');  
    }else {
      alert('Неправильно, спробуй ще раз');
    }
  };

  let taskFour3 = (document.getElementById('taskFour3'));
  let btnSumFour3 = (document.getElementById('btnSumFour3'));
  btnSumFour3.onclick = function () {
    if (taskFour3.value == 'ь') {
      alert('Вірно');  
    }else {
      alert('Неправильно, спробуй ще раз');
    }
  };

  document.getElementById('radio_btn1').onclick = function(){
    const radios = document.getElementsByName('radio1');
    let flag = false;
    radios.forEach(function(el){
      if(el.checked && el.value === 'Пити молоко'){
        flag = true;  
      }
    });
    if(flag){
      alert('Вірно');
    } else{
      alert('Неправильно, спробуй ще раз');
    }
  };
  document.getElementById('radio_btn2').onclick = function(){
    const radios = document.getElementsByName('radio2');
    let flag = false;
    radios.forEach(function(el){
      if(el.checked && el.value === 'Лук'){
        flag = true;  
      }
    });
    if(flag){
      alert('Вірно');
    } else{
      alert('Неправильно, спробуй ще раз');
    }
  };
  document.getElementById('radio_btn3').onclick = function(){
    const radios = document.getElementsByName('radio3');
    let flag = false;
    radios.forEach(function(el){
      if(el.checked && el.value === 'Хліб'){
        flag = true;  
      }
    });
    if(flag){
      alert('Вірно');
    } else{
      alert('Неправильно, спробуй ще раз');
    }
  };
});
