const $startBtn = document.getElementById("startBtn");
const $inforContainer = document.getElementById("inforContainer");
const $startPageBtn = document.getElementById("startPageBtn");
const $qustionPageBtn = document.getElementById("qustionPageBtn");
const $mainContainer= document.getElementById("mainContainer");
const $codeQuestionContainer= document.getElementById("codeQuestionContainer");
const $questionContainer= document.getElementById("questionContainer");
const $codeContainer= document.getElementById("codeContainer");
const $answerContainer= document.getElementById("answerContainer");
const $answers = document.querySelectorAll(".answers")
const $firstAnswer= document.getElementById("firstAnswer");
const $secondAnswer= document.getElementById("secondAnswer");
const $thirdAnswer= document.getElementById("thirdAnswer");
const $fourthAnswer= document.getElementById("fourthAnswer");
const $nextPageBtn = document.getElementById("nextPageBtn");
const QUIZDATA = [
  {
    question: "자바스크립트를 만든 사람은 Brendan Eich이다.",
    choices: ["true", "false"],
    code: null,
    correctAnswer: 0,
  },
  {
    question:
      "자바스크립트 프로그래밍 언어는 Mozilla가 독자적으로 관리하고 있다.",
    choices: ["true", "false"],
    code: null,
    correctAnswer: 1,
  },
  {
    question:
      "자바스크립트 프로그래밍 언어는 ECMAScript 기준에 맞게 사용되어야 한다.",
    choices: ["true", "false"],
    code: null,
    correctAnswer: 0,
  },
  {
    question: "예제 코드를 실행했을때 콘솔에 출력되는 값은 무엇입니까?",
    choices: ["'number'", "'object'", "undefined", "'undefined'"],
    code: "function foo(number) {\n  return\n  {\n    age: number\n  };\n}\n\nvar result = foo(21);\nconsole.log(typeof result);",
    correctAnswer: 3,
  },
  {
    question: "예제 코드를 실행했을때 콘솔에 출력되는 값은 무엇입니까?",
    choices: ["null", "undefined", "ReferenceError", "None of the above"],
    code: "var report = {\n  date: new Date(),\n  content: 'secret report'\n};\n\nfunction shred(doc) {\n  doc = null;\n}\n\nshred(report);\nconsole.log(report);",
    correctAnswer: 3,
  },
];

let index = 0;

//  start section 

$startBtn.addEventListener('click', startGame);

function startGame() {
  $startBtn.classList.add("hide");
  $inforContainer.classList.remove("hide");
}

// information section

$startPageBtn.addEventListener('click', goingStartPage);

function goingStartPage() { 
  $inforContainer.classList.add("hide");
  $startBtn.classList.remove("hide"); //이런 식으로 하는게 함수선언문. 자연스레 함수가 위로 호이스팅되어 addEventListener에 실행
}

$qustionPageBtn.addEventListener('click',goingQuestionPage);

function goingQuestionPage() { 
  $inforContainer.classList.add("hide");
  $mainContainer.classList.remove("hide");
}
  


$nextPageBtn.addEventListener('click',goingNextPage);

function goingNextPage() {
  
}



