(function() {

  const myPresentation = [
    {
      title: "Planning",
      text: "The fine art of expectation setting - In its simplest form,\n agile planning is nothing more than measuring the speed a team\n can turn user stories into working, production-ready software and then using that to \n figure out when they’ll be done."
    },
    {
      title: "The Daily Meeting",
      text: "Is focussed, short, and daily. The Project Manager facilitates the meeting. The idea is to check the team’s progress towards the Timebox goal and highlight any impediments. The meeting is held daily, at a regular timeslot, and lasts at most 15 minutes; the meeting is a key part of the Agile Lifecycle / Agile Heartbeat. I’m quite keen on the XP style “stand-up” meeting in front of the board with the Timebox Plan; standing up helps to keep the meeting short and the board acts a \n memory aide and highlights what the team needs to get done. The format of the meeting is predictable, with each team member answering three questions:\n What have you achieved since the last Daily Team Meeting?\n What will you achieve between now and the next Daily Team Meeting?\b What is getting in your way?"
    },
    {
      title: "Sprint",
      text: "In product development, a sprint is a set period of time during which specific work has to be completed and made ready for review. Each sprint begins with a planning meeting. During the meeting, the product owner (the person requesting the work) and the development team agree upon exactly what work will be accomplished during the sprint. The development team has the final say when it comes to determining how much work can realistically be accomplished during the sprint, and the product owner has the final say on what criteria need to be met for the work to be approved and accepted."
    }
  ];

  const myQuestions = [
    {
      question: "Who is the strongest?",
      answers: {
        a: "Superman",
        b: "The Terminator",
        c: "Waluigi, obviously"
      },
      correctAnswer: "c"
    },
    {
      question: "What is the best site ever created?",
      answers: {
        a: "SitePoint",
        b: "Simple Steps Code",
        c: "Trick question; they're both the best"
      },
      correctAnswer: "c"
    },
    {
      question: "Where is Waldo really?",
      answers: {
        a: "Antarctica",
        b: "Exploring the Pacific Ocean",
        c: "Sitting in a tree",
        d: "Minding his own business, so stop asking"
      },
      correctAnswer: "d"
    }
  ];

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
  const presentationContainer = document.getElementById("ok");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");

  // display quiz right away
  buildPresentation();
  buildQuiz();

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
