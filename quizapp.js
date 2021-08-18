const $startButton = document.querySelector(".start-button button");
const $informationBox = document.querySelector(".information-box");
const $exitButton = document.querySelector(".quit");
const $continueButton = document.querySelector(".restart");
const $quizBox = document.querySelector(".quiz-box");
const $timeCount = document.querySelector(".timer-sec");
const $timeLine = document.querySelector(".timer_line");
const $resultBox = document.querySelector('.result-box');

let index = 0;
let startingCountingNumer = 1;
let counter;
let counterLine;
let startTime = 15;
let widthValue = 0;
let userScore = 0;

$startButton.addEventListener("click", ()=> {
  $informationBox.classList.add("activeInformation");
})


$exitButton.addEventListener("click", ()=> {
  $informationBox.classList.remove("activeInformation");
})


$continueButton.addEventListener("click", ()=> {
  $informationBox.classList.remove("activeInformation");
  $quizBox.classList.add("activeQuiz");
  showingQuestion();
  countingQuestion();
  startTimer(startTime);
  startTimerLine(0);
})

const $nextButton = document.querySelector('.next-button');
$nextButton.addEventListener('click', ()=>{
  if ( index < questions.length - 1) {
  index++;
  startingCountingNumer++;
  showingQuestion();
  countingQuestion();
  clearInterval(counter);
  startTimer(startTime);
  clearInterval(counterLine);
  startTimerLine(widthValue);
  } else {
    console.log("게임 끝"); 
    showingResultBox();
  }
})

const $resultQuit = document.querySelector('.result-quit');
$resultQuit.addEventListener('click' , () => {
  window.location.reload();
})


const showingQuestion = () => {
  const $questionText = document.querySelector(".question-text");
  $questionText.textContent = `${questions[index].numb}. ${questions[index].question}`;

  const $optionList = document.querySelector(".option_list");
  const $fragment = document.createDocumentFragment();
  questions[index].options.forEach((option, index) => {
    const $quizList = document.createElement("li");
    $quizList.className = "option";
    $quizList.textContent = option;
    $fragment.appendChild($quizList);
    $optionList.appendChild($fragment);

    const $quizListDelete = document.getElementsByTagName("li");
    if ($quizListDelete.length > 4) {
      $quizListDelete[0].remove();
    }
    })

    const $chosenOption = document.querySelectorAll(".option");
    $chosenOption.forEach(chosenOption => {
      chosenOption.addEventListener('click', clickedOption)

      function clickedOption() {
        clearInterval(counter);
        clearInterval(counterLine);
        const playerAnswer = chosenOption.textContent;
        const gameAnswer = questions[index].answer;
        const allOptions = $optionList.children.length;
        const tick = '<div class="icon tick"><i class="fas fa-check"></i></div>';
        const tock = '<div class="icon cross"><i class="fas fa-times"></i></div>';
        
        if (playerAnswer === gameAnswer) {
          chosenOption.classList.add("correct");
          chosenOption.insertAdjacentHTML('beforeend', tick);
          userScore += 1;
          console.log("userScore");
        } else {
          chosenOption.classList.add("wrong");
          chosenOption.insertAdjacentHTML('beforeend', tock);

          for (let i = 0; i < allOptions; i++) {
            if ($optionList.children[i].textContent === gameAnswer) {
              $optionList.children[i].setAttribute("class", "option correct");
              $optionList.children[i].insertAdjacentHTML('beforeend', tick);
            }
          }
        }
        for (let i = 0; i < allOptions; i++) {
          $optionList.children[i].classList.add("disabled");
        }
      }

    })
  }

const countingQuestion = () => {
  $bottomCountingQuestion = document.querySelector(".total-question");
  $bottomCountingQuestion.textContent = `${startingCountingNumer} of ${questions.length}`;
}

function startTimer(time) {
  counter = setInterval(timer, 1000);

  function timer() {
    $timeCount.textContent = time;
    time--;
    if(time < 9) {
      let zerocode =  $timeCount.textContent;
      $timeCount.textContent = `0${zerocode}`;
    }
    if (time < 0) {
      clearInterval(counter);
      $timeCount.textContent = "00";
      alert("game over")
    }
  }
}

function startTimerLine(time) {
  counterLine = setInterval(timer, 29);
  function timer() {
    time += 1;
    $timeLine.style.width = time + "px";
    if (time > 549) {
      clearInterval(counterLine);
    }
  }
}

function showingResultBox() {
  $informationBox.classList.remove("activeInformation");
  $quizBox.classList.remove("activeQuiz");
  $resultBox.classList.add("activeResult");

  const scoreText = $resultBox.querySelector(".score-text");
  let scoreTag =  '<span> You got <p>'+userScore+ '</p> out of <p>' + questions.length +'</p></span>';
  scoreText.innerHTML = scoreTag;
}
