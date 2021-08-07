let QUIZDATA = [
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
    question: "유효한 자바스크립트의 자료형(Type)이 아닌 것은 무엇입니까?",
    choices: ["number", "string", "function", "boolean"],
    code: null,
    correctAnswer: 2,
  },
  {
    question: "예제 코드의 결과값은 무엇입니까?",
    choices: ["'number'", "NaN", "'object'", "'string'"],
    code: "typeof NaN",
    correctAnswer: 0,
  },
  {
    question: "예제 코드의 결과값은 무엇입니까?",
    choices: ["'number'", "NaN", "'object'", "'string'"],
    code: "typeof null",
    correctAnswer: 2,
  },
  {
    question: "예제 코드의 결과값은 무엇입니까?",
    choices: ["true", "false"],
    code: "null === null",
    correctAnswer: 0,
  },
  {
    question: "예제 코드의 결과값은 무엇입니까?",
    choices: ["'102'", "102", "'732'", "12"],
    code: "7 + 3 + '2'",
    correctAnswer: 0,
  },
  {
    question: "예제 코드의 결과값은 무엇입니까?",
    choices: ["'2-10'", "2", "NaN", "-2"],
    code: "'2' - 7 + 3",
    correctAnswer: 3,
  },
  {
    question: "예제 코드의 결과값은 무엇입니까?",
    choices: ["true", "false"],
    code: "[] === []",
    correctAnswer: 1,
  },
  {
    question: "예제 코드의 결과값은 무엇입니까?",
    choices: ["true", "false"],
    code: "typeof([]) === typeof([])",
    correctAnswer: 0,
  },
  {
    question: "예제 코드의 결과값은 무엇입니까?",
    choices: ["'hello'", "'bye'"],
    code: "true ? 'hello' : 'bye'",
    correctAnswer: 0,
  },
  {
    question: "예제 코드의 결과값은 무엇입니까?",
    choices: ["'hello'", "'bye'"],
    code: "'' ? 'hello' : 'bye'",
    correctAnswer: 1,
  },
  {
    question: "예제 코드의 결과값은 무엇입니까?",
    choices: ["'hello'", "'bye'"],
    code: "[] ? 'hello' : 'bye'",
    correctAnswer: 0,
  },
  {
    question: "예제 코드의 결과값은 무엇입니까?",
    choices: ["'hello'", "'bye'"],
    code: "-0 ? 'hello' : 'bye'",
    correctAnswer: 1,
  },
  {
    question: "예제 코드를 실행했을때 콘솔에 출력되는 값은 무엇입니까?",
    choices: ["1", "2", "undefined", "ReferenceError"],
    code: "var a = 1;\n\nfunction foo() {\n  console.log(a);\n  var a = 2;\n}\n\nfoo();",
    correctAnswer: 2,
  },
  {
    question: "예제 코드를 실행했을때 콘솔에 출력되는 d의 값은 무엇입니까?",
    choices: ["3", "'3'", "undefined", "'undefined'"],
    code: "function foo(a, b) {\n  var c = a + b;\n  console.log(c);\n}\n\nvar d = typeof foo(1, 2);\nconsole.log(d);",
    correctAnswer: 3,
  },
  {
    question: "예제 코드를 실행했을때 콘솔에 출력되는 값은 무엇입니까?",
    choices: ["[1, 2]", "[1, 2, undefined]", "ReferenceError", "'object'"],
    code: "function foo(a, b, c) {\n  return [a, b, c];\n}\n\nvar result = foo(1, 2);\nconsole.log(result);",
    correctAnswer: 1,
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
  {
    question:
      "나는 지금까지 모든 문제의 정답을 이해했고 앞으로도 평생 틀리지 않을 자신이 있다.",
    choices: ["true", "false"],
    code: null,
    correctAnswer: 0,
  },
];
