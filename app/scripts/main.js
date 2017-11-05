console.log('\'Allo \'Allo!');
$(document).ready(function(){
    console.log('test');
  
    var hello = [
  {text:'BONJOUR', language:'French'},
  {text:'HOLA', language:'Spanish'},
  {text:'GUTEN TAG', language:'German'},
  {text:'HELLO', language:'English'},
  {text:'OLÀ', language:'Portuguese'},
  {text:'NAMASTE', language:'Hindi'},
  {text:'SALAAM', language:'Persian'},    
  {text:'ZDRAS-TVUY-TE', language:'Russian'},
  {text:'KONNICHIWA', language:'Japanese'},
  {text:'AHN-YOUNG-HA-SE-YO', language: 'Korean'} ,
  {text:'MERHABA', language:'Turkish'},
  {text:'SAIN BAINUU', language:'Mongolian'},
  {text:'CIAO', language:'Italian'},
  {text:'SALEMETSIZ BE?', language:'Kazakh'},
  {text:'SZIA', language:'Hungarian'},
  {text:'MARHABA', language:'Arabic'},
  {text:'SANNU / SALAMA ALEIKUM', language:'Hausa'},
  {text:'JAMBO / HABARI', language:'Swahili'},
  {text:'NI HAU', language:'Mandarin'},
  {text:'NAY HOH', language:'Cantonese'},
  {text:'HALO', language:'Bahasa Indonesia'}
    ];
  
    console.log(hello.length);
  
    var greeting = $('#greeting');
  
    // console.log(greeting);
  
    var language = $('#language');
  
    // console.log(language);
  
    var randomNumber = Math.round(Math.random()*(hello.length-1));
  
    // console.log(Math.round(randomNumber));
  
    // console.log(hello[randomNumber]);
    
    var randomObject = hello[randomNumber];
    console.log(randomObject);
  
    greeting.html(randomObject.text);
  
    language.html(randomObject.language);
  
  
  
  });