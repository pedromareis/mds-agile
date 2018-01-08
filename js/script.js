// first function of to check if there is a username and to change to template
function checkUser() {
  var username = document.getElementById('inputUsername').value;
  // check if username is not empty
  if (!username) {
    alert("Por favor intruduza um nome de utilizador.");
  }
  else {
    //Set up a localStorage to pass the username to the next page
    localStorage.setItem("username", username);
    //change to template
    window.location='template.html';
  }
};

(function() {

  const myPresentation = [
    presentation1,
    presentation2,
    presentation3,
    presentation4,
    presentation5,
    presentation6,
    presentation7,
    presentation8,
    presentation9,
    presentation10,
    presentation11,
    presentation12,
    presentation13,
    presentation14,
    presentation15,
    presentation16,
    presentation17,
    presentation18,
    presentation19,
    presentation20
  ];

  const myQuestions = [
    {
      content:"Content 1",
      question: "",
      answers: {
        a: "",
        b: "",
        c: ""
      },
      correctAnswer: "a"
    },
    {
      content:"Content 2",
      question: "",
      answers: {
        a: "",
        b: "",
        c: "",
        d: ""
      },
      correctAnswer: "a"
    },
    {
      content:"Content 3",
      question: "",
      answers: {
        a: "",
        b: "",
        c: ""
      },
      correctAnswer: "c"
    },
    {
      content:"Content 4",
      question: "",
      answers: {
        a: "",
        b: "",
        c: ""
      },
      correctAnswer: "c"
    },
    {
      content:"Content 5",
      question: "",
      answers: {
        a: "",
        b: "",
        c: ""
      },
      correctAnswer: "c"
    },
    {
      content:"Content 6",
      question: "Para o planeamento do trabalho a realizar são usadas User Stories, qual é a afirnação correta?",
      answers: {
        a: "O Product Owner é o responsável por escrever as User Stories.",
        b: "As User Stories devem ser escritas na perspetiva de quem vai usar a funcionalidade descrita",
        c: "Os developers, que sabem mais do desenvolvimento, é quem deve escrever as User Stories.",
        d: "Todos escrevem User Stories e no fim eliminam-se as repetidas."
      },
      correctAnswer: "b"
    },
    {
      content:"Content 7",
      question: "No contexto de um projeto baseado numa metodologia Scrum, o mais importante é ter um plano?",
      answers: {
        a: "Sim, absolutamente.",
        b: "Não, o planeamento não tem interesse.",
        c: "O planeamento não é importante, o importante é que cada elemento da equipa possa fazer o que mais gosta.",
        d: "O planeamento é importante, mas não deve limitar a capacidade de poder responder às mudanças."
      },
      correctAnswer: "d"
    },
    {
      content:"Content 8",
      question: "",
      answers: {
        a: "",
        b: "",
        c: ""
      },
      correctAnswer: "c"
    },
    {
      content:"Content 9",
      question: "",
      answers: {
        a: "",
        b: "",
        c: ""
      },
      correctAnswer: "c"
    },
    {
      content:"Content 10",
      question: "",
      answers: {
        a: "",
        b: "",
        c: ""
      },
      correctAnswer: "c"
    },
    {
      content:"Content 1",
      question: "",
      answers: {
        a: "",
        b: "",
        c: ""
      },
      correctAnswer: "a"
    },
    {
      content:"Content 12",
      question: "",
      answers: {
        a: "",
        b: "",
        c: "",
        d: ""
      },
      correctAnswer: "a"
    },
    {
      content:"Content 13",
      question: "",
      answers: {
        a: "",
        b: "",
        c: ""
      },
      correctAnswer: "c"
    },
    {
      content:"Content 14",
      question: "",
      answers: {
        a: "",
        b: "",
        c: ""
      },
      correctAnswer: "c"
    },
    {
      content:"Content 15",
      question: "",
      answers: {
        a: "",
        b: "",
        c: ""
      },
      correctAnswer: "c"
    },
    {
      content:"Content 16",
      question: "No contexto do conteudo apresentado porque é que o Scrum se chama Scrum?",
      answers: {
        a: "Porque desenvolver em scrum é como um jogo de Rugby e devemos placar os nossos colegas com o objetivo de melhorar as nossas capacidades",
        b: "Porque no desenovlvimentode software scrum é única maneira de jogar em equipa.",
        c: "Porque no scrum é quando o trabalho em equipa é extremamente essencial e todos os jogadores devem estar focados no mesmo objetivo",
        d: "Todas as anteriores"
      },
      correctAnswer: "c"
    },
    {
      content:"Content 17",
      question: "Qual das seguintes não é uma regra válida do Scrum?",
      answers: {
        a: "Se a equipa sentir que não capaz de completar todas as User Stories que estão no Backlog do Sprint, pode consultar o Prodcut Owner para saber quais pode remover.",
        b: "A equipa pode procurar conselhos, ajuda e informações externas ao projeto para ajudar no Sprint.",
        c: "Ninguem pode dar à equipa conselhos, instruções, comentários e obrigar a seguir certas direções, a equipa deve ser auto gerida.",
        d: "Se a Equipa verificar que consegue fazer mais do que o que foi planeado na Sprint Meeting pode selecionar e adicionar novos items do Product Backlog."
      },
      correctAnswer: "d"
    },
    {
      content:"Content 18",
      question: "",
      answers: {
        a: "",
        b: "",
        c: ""
      },
      correctAnswer: "c"
    },
    {
      content:"Content 19",
      question: "",
      answers: {
        a: "",
        b: "",
        c: ""
      },
      correctAnswer: "c"
    },
    {
      content:"Content 20",
      question: "",
      answers: {
        a: "",
        b: "",
        c: ""
      },
      correctAnswer: "c"
    }
  ];

  function showUserName() {
    // get the username by the localStorage
    document.getElementById('username').innerHTML = localStorage.getItem("username");
  }

  function buildPresentation() {
    const output = [];

    myPresentation.forEach((currentPresentation) => {
      output.push(
        `<div class="presentation">
           <div class="title"> ${currentPresentation.title} </div>
           <div class="text"> ${currentPresentation.text} </div>
         </div>`
      );
    });

    presentationContainer.innerHTML = output.join("");
  }

  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
             <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
           </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="slide">
           <div class="question"> ${currentQuestion.question} </div>
           <div class="answers"> ${answers.join("")} </div>
         </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  function showSlide(n) {
    presentations[currentPresentation].classList.remove("active-presentation")
    slides[currentSlide].classList.remove("active-slide");
    presentations[n].classList.add("active-presentation");
    slides[n].classList.add("active-slide");
    currentSlide = n;
    currentPresentation = n;

    if (currentSlide === 0) {
      previousButton.style.display = "none";
    } else {
      previousButton.style.display = "inline-block";
    }

    if (currentSlide === slides.length - 1) {
      nextButton.style.display = "none";
      submitButton.style.display = "inline-block";
    } else {
      nextButton.style.display = "inline-block";
      submitButton.style.display = "none";
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  const quizContainer = document.getElementById("quiz");
  const presentationContainer = document.getElementById("contents");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");

  // display quiz, presentation and username
  buildPresentation();
  buildQuiz();
  showUserName();

  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  const presentations = document.querySelectorAll(".presentation")
  let currentSlide = 0;
  let currentPresentation = 0;

  showSlide(0);

  // on submit, show results
  submitButton.addEventListener("click", showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();
