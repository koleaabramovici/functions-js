
function kelvinToFahrenheit(kelvin){
  const celsius = kelvin - 273;
  let fahrenheit = Math.floor(celsius *(9/5) + 32);
  return fahrenheit;
}
kelvinToFahrenheit(294);


function humanAgeInDogYears(myAge){
let earlyYears = 2 * 10.5;
let laterYears = myAge - 2;
laterYears *= 4;
const myAgeInDogYears = earlyYears + laterYears;
const myName = 'Nicolae'.toLocaleLowerCase();
return myAgeInDogYears;
}
humanAgeInDogYears(23);


function answerMyQuestion(userName, userQuestion){
  
  
let randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';

switch(randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidely so';
    break;
  case 2:
      eightBall = 'Reply hazy try again' ;
      break;
  case 3:
      eightBall = 'Cannot predict now';
      break;
  case 4:
      eightBall = 'Do not count on it';
        break;
  case 5:
      eightBall = 'My sources say no' ;
        break;
  case 6:
      eightBall = 'Outlook not so good' ;  
          break;
  case 7:
      eightBall = 'Signs point to yes';
        break; 
 }
 return (`Hello ${userName}, Your question was ${userQuestion} and the answer is ${eightBall}`);

}
answerMyQuestion('Nicu','Does it worth to study web development?');



function raceTime(userAge, registeredEarly){
let raceNumber = Math.floor(Math.random() * 1000);

if(userAge > 18 && registeredEarly){
  raceNumber += 1000;
  } 

if(userAge >= 18 && registeredEarly){
  console.log(`${raceNumber} : Your race starts at 9:30 am.`);
  }  else if(userAge>18 && !registeredEarly){
  console.log(`${raceNumber} : Your race starts at 11:00 am.`);
  }  else if(userAge<18){
    console.log(`${raceNumber} : Your race starts at 12:30 pm.`);
  }  
}
raceTime(15 , true);

















