/*****************************************
 * APP DATA (questions, images, explications)
 *****************************************/
const appData = {
  activities: {
    culture: {
      title: "GÉOGRAPHIE LOCALE",
      questions: [
        {
          id: 1,
          image: "poste.jpeg",
          text: "Ce bâtiment historique est situé au 'Kilomètre Zéro' de la ville. C'est :",
          choices: ["L'Hôtel de Ville", "La Grande Poste", "Le Palais de Justice", "La Banque Centrale"],
          correct: 2,
          explanation: "La grande poste est située près du centre-ville et servait de point de référence au 'Kilomètre Zéro'."
        },
        {
          id: 2,
          image: "usine.jpeg",
          text: "Cette grande tour est le symbole de Lubumbashi. À quoi servait-elle ?",
          choices: ["À fondre le cuivre", "Antenne radio", "Cheminée d'usine", "Observatoire"],
          correct: 3,
          explanation: "C'est la cheminée de la Gécamines. Elle servait à évacuer les fumées de l'usine qui transformait le minerai de cuivre."
        },
        {
          id: 3,
          image: "zebre.jpeg",
          text: "Quel animal est présent au zoo municipal de Lubumbashi ?",
          choices: ["Gorille", "Zèbre", "Kangourou", "Panda"],
          correct: 2,
          explanation: "Le zoo de la région a des spécimens locaux et africains, comme le zèbre."
        },
        {
          id: 4,
          image: "malachite.jpeg",
          text: "Quelle est la couleur du minerai malachite ?",
          choices: ["Bleu", "Vert", "Rouge", "Gris"],
          correct: 2,
          explanation: "La malachite est connue pour sa couleur verte intense."
        },
        {
          id: 5,
          image: "elisabethville.jpeg",
          text: "Avant 1966, Lubumbashi s'appelait :",
          choices: ["Élisabethville", "Stanleyville", "Leopoldville", "Bukavu"],
          correct: 1,
          explanation: "La ville s'appelait Élisabethville avant 1966."
        }
      ]
    },

    marche: {
      title: "CALCUL AU MARCHÉ",
      questions: [
        {
          id: 1,
          image: "https://media.istockphoto.com/id/154959880/fr/photo/trois-mangos.webp?a=1&b=1&s=612x612&w=0&k=20&c=u_SvupGAbCgLRk-cIJXarLqqW7hZKAsfyzLv6owdiDk=",
          text: "Maman achète 3 mangues à 200 FC chacune. Combien dépense-t-elle ?",
          choices: ["400 FC", "600 FC", "800 FC", "1000 FC"],
          correct: 2,
          explanation: "3 × 200 = 600 FC."
        },
        {
          id: 2,
          image: "https://th.bing.com/th/id/OIP.XaeDAgVkuA-luCWhQk7dHwHaDy?w=287&h=178&c=7&r=0&o=7&pid=1.7&rm=3",
          text: "Tu as 1000 FC. Tu achètes un pain à 350 FC. Il te reste :",
          choices: ["650 FC", "750 FC", "600 FC", "550 FC"],
          correct: 1,
          explanation: "1000 − 350 = 650 FC."
        }
        ,
        {
          id: 3,
          image: "https://media.istockphoto.com/id/153687315/fr/photo/tas-de-bananes-fra%C3%AEches.webp?a=1&b=1&s=612x612&w=0&k=20&c=G5NBvvufp3jJiJa4mCVH_EAye59PV1Cu5u_G4Z8dKcQ=",
          text: "5 bananes à 100 FC chacune coûtent :",
          choices: ["400 FC", "500 FC", "600 FC", "450 FC"],
          correct: 2,
          explanation: "5 × 100 = 500 FC."
        },
        {
          id: 4,
          image: "https://images.unsplash.com/photo-1705147289789-6df2593f1b1e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8MiUyMGtnJTIwZGUlMjByaXp8ZW58MHx8MHx8fDA%3D",
          text: "2 kg de riz à 900 FC le kg :",
          choices: ["900 FC", "1600 FC", "1800 FC", "2000 FC"],
          correct: 3,
          explanation: "2 × 900 = 1800 FC."
        },
        {
          id: 5,
          image: "https://plus.unsplash.com/premium_photo-1726812054316-10bc1d562596?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG91bGV0JTIwZXQlMjB0b21hdGVzfGVufDB8fDB8fHww",
          text: "Poulet 1500 FC + tomates 600 FC = ?",
          choices: ["2000 FC", "2100 FC", "1900 FC", "2500 FC"],
          correct: 2,
          explanation: "1500 + 600 = 2100 FC."
        }
      ]
    },

    swahili: {
      title: "DICO-SWAHILI",
      questions: [
        {
          id: 1,
          text: "Comment dit-on 'bonjour' en swahili ?",
          choices: ["Asante", "Habari", "Karibu", "Pole"],
          correct: 2,
          explanation: "'Habari' veut dire 'bonjour' ou 'ça va'."
        },
        {
          id: 2,
          text: "Quel est le mot swahili pour 'lait' ?",
          choices: ["Maziwa", "Maji", "Mbwa", "Shule"],
          correct: 1,
          explanation: "'Maziwa' signifie 'lait'."
        },
        {
          id: 3,
          text: "Comment dit-on 'école' en swahili ?",
          choices: ["Soma", "Shule", "Chakula", "Haraka"],
          correct: 2,
          explanation: "'Shule' veut dire 'école'."
        },
        {
          id: 4,
          text: "Quel mot swahili signifie 'ami' ?",
          choices: ["Rafiki", "Paka", "Ndizi", "Samahani"],
          correct: 1,
          explanation: "'Rafiki' veut dire 'ami'."
        },
        {
          id: 5,
          text: "Comment dit-on 'eau' en swahili ?",
          choices: ["Maji", "Mbwa", "Lala", "Karibu"],
          correct: 1,
          explanation: "'Maji' signifie 'eau'."
        }
      ]
    },

    logique: {
      title: "LOGIQUE",
      questions: [
        {
          id: 1,
          text: "Si 2 pierres valent 4 malachites, combien valent 5 pierres ?",
          choices: ["8", "10", "12", "9"],
          correct: 2,
          explanation: "Si 1 pierre vaut 2 malachites → 5 = 10."
        },
        {
          id: 2,
          text: "Dans une suite : 2, 4, 8, 16, le nombre suivant est :",
          choices: ["24", "32", "30", "20"],
          correct: 2,
          explanation: "On multiplie toujours par 2."
        },
        {
          id: 3,
          text: "Quel objet ne correspond pas au groupe : Poisson, Baleine, Girafe, Dauphin ?",
          choices: ["Poisson", "Dauphin", "Baleine", "Girafe"],
          correct: 4,
          explanation: "La girafe : seul animal terrestre."
        },
        {
          id: 4,
          text: "Si un enfant a 12 billes et en donne 5, combien lui en reste-t-il ?",
          choices: ["5", "6", "7", "8"],
          correct: 3,
          explanation: "12 − 5 = 7."
        },
        {
          id: 5,
          text: "Quel nombre complète la suite : 5, 10, 15, 20, ... ?",
          choices: ["22", "25", "30", "27"],
          correct: 2,
          explanation: "On ajoute +5 à chaque étape."
        }
      ]
    }
  }
};

/*****************************************
 * STATE
 *****************************************/
let state = {
  currentActivity: null,
  qIndex: 0,
  score: 0,
  perQuestionPoints: 4
};

/*****************************************
 * DOM REFS
 *****************************************/
const homeView = document.getElementById('homeView');
const activityView = document.getElementById('activityView');
const activityTitle = document.getElementById('activityTitle');
const qNumber = document.getElementById('qNumber');
const qTotal = document.getElementById('qTotal');
const progressFill = document.getElementById('progressFill');
const qImage = document.getElementById('qImage');
const qText = document.getElementById('qText');
const choicesWrap = document.getElementById('choicesWrap');
const explanationBox = document.getElementById('explanationBox');
const explanationText = document.getElementById('explanationText');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const scoreDisplay = document.getElementById('scoreDisplay');

/*****************************************
 * HOME BUTTONS
 *
 * Attach listeners after DOMContentLoaded to avoid cases
 * where the script loads before the DOM or inline scripts
 * changed the DOM structure. This fixes a non-responsive
 * "Calcul au Marché" button when the element wasn't
 * ready at the time listeners were attached.
 *****************************************/
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.open-activity').forEach(btn => {
    btn.addEventListener('click', () => {
      startActivity(btn.getAttribute('data-mode'));
    });
  });

  const homeBtnEl = document.getElementById('homeBtn');
  if (homeBtnEl) homeBtnEl.addEventListener('click', goHome);
});

/*****************************************
 * START ACTIVITY
 *****************************************/
function startActivity(mode) {
  const activity = appData.activities[mode];
  if (!activity) return alert("Activité introuvable.");

  state.currentActivity = mode;
  state.qIndex = 0;
  state.score = 0; // Réinitialise le score à chaque démarrage

  homeView.classList.add('hidden');
  activityView.classList.remove('hidden');

  activityTitle.textContent = activity.title;
  qTotal.textContent = activity.questions.length;
  qNumber.textContent = state.qIndex + 1;

  explanationBox.classList.add('hidden');

  isAnswerValidated = false;
  renderQuestion();
  updateScoreDisplay();
}

function goHome() {
  activityView.classList.add('hidden');
  homeView.classList.remove('hidden');
}

/*****************************************
 * RENDER QUESTION
 *****************************************/

function renderQuestion() {
  const activity = appData.activities[state.currentActivity];
  const q = activity.questions[state.qIndex];

  // reset validation state
  isAnswerValidated = false;

  qNumber.textContent = state.qIndex + 1;
  qImage.src = q.image;
  qText.textContent = q.text;

  progressFill.style.width = `${state.qIndex / activity.questions.length * 100}%`;

  choicesWrap.innerHTML = "";
  explanationBox.classList.add('hidden');

  q.choices.forEach((c, i) => {
    const idx = i + 1;
    const choiceEl = document.createElement('button');
    choiceEl.className = "w-full text-left p-4 rounded-lg border bg-white hover:shadow transition";
    choiceEl.dataset.choice = idx;
    choiceEl.innerHTML = `<span class="font-semibold">${c}</span>`;
    choiceEl.addEventListener('click', () => {
      q._selected = idx;
      choicesWrap.querySelectorAll('button').forEach(b => b.classList.remove('border-2', 'border-sky-600'));
      choiceEl.classList.add('border-2', 'border-sky-600');
    });
    choicesWrap.appendChild(choiceEl);
  });

  nextBtn.textContent = "Valider";
  prevBtn.classList.toggle('hidden', state.qIndex === 0);
}

/*****************************************
 * VALIDATE & NEXT
 *****************************************/

let isAnswerValidated = false;

nextBtn.addEventListener('click', handleNextClick);

function handleNextClick() {
  const activity = appData.activities[state.currentActivity];
  const q = activity.questions[state.qIndex];

  if (!isAnswerValidated) {
    if (!q._selected) {
      choicesWrap.classList.add('animate-[shake_0.3s]');
      setTimeout(() => choicesWrap.classList.remove('animate-[shake_0.3s]'), 350);
      return;
    }
    validateAnswer(q);
    return;
  }

  goToNextQuestion(activity);
}

function validateAnswer(q) {
  const isCorrect = Number(q._selected) === Number(q.correct);

  // lock buttons
  choicesWrap.querySelectorAll('button').forEach(b => {
    const ch = Number(b.dataset.choice);
    b.disabled = true;

    if (ch === q.correct) b.classList.add('bg-green-50', 'border-green-300');
    if (ch === q._selected && ch !== q.correct) b.classList.add('bg-red-50', 'border-red-200');
  });

  if (isCorrect) {
    state.score += state.perQuestionPoints;
    launchConfetti();
  }

  updateScoreDisplay();

  explanationText.textContent = q.explanation;
  explanationBox.classList.remove('hidden');

  nextBtn.textContent = "Suivant →";
  isAnswerValidated = true;
}

function goToNextQuestion(activity) {
  if (state.qIndex < activity.questions.length - 1) {
    state.qIndex++;
    renderQuestion();
  } else {
    showResults(activity);
  }
}

/*****************************************
 * PREVIOUS BUTTON
 *****************************************/
prevBtn.addEventListener('click', () => {
  if (state.qIndex > 0) {
    state.qIndex--;
    renderQuestion();
  }
});

/*****************************************
 * SHOW RESULTS
 *****************************************/
function showResults(activity) {
  const totalQ = activity.questions.length;
  const maxPoints = totalQ * state.perQuestionPoints;
  alert(`Tu as obtenu ${state.score}/${maxPoints}. Bravo !`);
  goHome();
}

/*****************************************
 * SCORE DISPLAY
 *****************************************/
function updateScoreDisplay() {
  // Affiche le score max dynamique selon l'activité en cours
  let maxScore = 20;
  if (state.currentActivity) {
    const activity = appData.activities[state.currentActivity];
    if (activity) maxScore = activity.questions.length * state.perQuestionPoints;
  }
  scoreDisplay.textContent = `${state.score} / ${maxScore}`;
}

/*****************************************
 * CONFETTI
 *****************************************/
const confettiCanvas = document.getElementById('confetti-canvas');
const ctx = confettiCanvas.getContext('2d');
let confettiPieces = [];
let confettiRunning = false;

function resizeCanvas() {
  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

function launchConfetti() {
  for (let i = 0; i < 30; i++) {
    confettiPieces.push({
      x: Math.random() * confettiCanvas.width,
      y: -10 - Math.random() * 200,
      vx: (Math.random() - 0.5) * 3,
      vy: 2 + Math.random() * 4,
      size: 6 + Math.random() * 8,
      color: ['#f97316', '#f59e0b', '#fb7185', '#34d399', '#60a5fa'][Math.floor(Math.random() * 5)],
      rot: Math.random() * 360,
      vr: (Math.random() - 0.5) * 6
    });
  }
  if (!confettiRunning) {
    confettiRunning = true;
    requestAnimationFrame(confettiLoop);
  }
}

function confettiLoop() {
  ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
  for (let i = confettiPieces.length - 1; i >= 0; i--) {
    const p = confettiPieces[i];
    p.x += p.vx;
    p.y += p.vy;
    p.vy += 0.02;
    p.rot += p.vr;

    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(p.rot * Math.PI / 180);
    ctx.fillStyle = p.color;
    ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
    ctx.restore();

    if (p.y > confettiCanvas.height + 50) confettiPieces.splice(i, 1);
  }
  if (confettiPieces.length > 0) {
    requestAnimationFrame(confettiLoop);
  } else {
    confettiRunning = false;
  }
}

/*****************************************
 * SHORTCUT
 *****************************************/
window.addEventListener('keydown', e => {
  if (e.key.toLowerCase() === 'h') goHome();
});
