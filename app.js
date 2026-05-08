const categories = [
  { id: "all", label: "Все темы" },
  { id: "pedestrian", label: "Пешеход" },
  { id: "lights", label: "Светофор" },
  { id: "bike", label: "Велосипед и СИМ" },
  { id: "passenger", label: "Пассажир" },
  { id: "signs", label: "Знаки" },
  { id: "situations", label: "Ситуации" }
];

const questions = [
  {
    id: "crosswalk-safe",
    level: ["junior", "middle", "senior"],
    category: "pedestrian",
    visual: "crosswalk-green",
    scenario: "Ты стоишь у перехода. Загорелся зеленый сигнал для пешеходов.",
    prompt: "Что сделать перед первым шагом на дорогу?",
    options: [
      "Сразу побежать, пока зеленый не погас",
      "Посмотреть по сторонам и убедиться, что машины остановились",
      "Идти только если рядом идет взрослый"
    ],
    answer: 1,
    hint: "Разрешающий сигнал не отменяет проверку обстановки.",
    explanation: "Даже на переходе нужно оценить расстояние до машин, их скорость и убедиться, что переход безопасен.",
    source: "ПДД 4.5"
  },
  {
    id: "red-light",
    level: ["junior", "middle", "senior"],
    category: "lights",
    visual: "traffic-red",
    scenario: "У пешеходного перехода горит красный человечек.",
    prompt: "Как поступить?",
    options: [
      "Остановиться и ждать разрешающего сигнала",
      "Перейти, если дорога кажется пустой",
      "Перейти бегом по кратчайшему пути"
    ],
    answer: 0,
    hint: "Красный сигнал запрещает движение.",
    explanation: "Красный сигнал светофора запрещает движение. Для пешехода действует сигнал с силуэтом пешехода.",
    source: "ПДД 6.2, 6.5"
  },
  {
    id: "yellow-light",
    level: ["middle", "senior"],
    category: "lights",
    visual: "traffic-yellow",
    scenario: "На светофоре включился обычный желтый сигнал.",
    prompt: "Что он означает?",
    options: [
      "Можно начинать движение",
      "Движение запрещено, сигнал предупреждает о смене",
      "Можно переходить только школьникам"
    ],
    answer: 1,
    hint: "Обычный желтый и мигающий желтый означают разное.",
    explanation: "Желтый сигнал запрещает движение и предупреждает о смене сигналов. Мигающий желтый сообщает об опасности или нерегулируемом переходе.",
    source: "ПДД 6.2"
  },
  {
    id: "no-crosswalk",
    level: ["middle", "senior"],
    category: "pedestrian",
    visual: "warning-sign",
    scenario: "Перехода и перекрестка поблизости не видно. Дорога хорошо просматривается, разделительной полосы и ограждений нет.",
    prompt: "Как можно перейти дорогу?",
    options: [
      "Наискосок, чтобы быстрее",
      "Под прямым углом к краю проезжей части",
      "Только вместе с группой людей"
    ],
    answer: 1,
    hint: "Главное: обзор, отсутствие ограждений и прямой путь.",
    explanation: "Если перехода или перекрестка нет в зоне видимости, ПДД разрешают переходить под прямым углом там, где дорога хорошо видна в обе стороны.",
    source: "ПДД 4.3"
  },
  {
    id: "bus-around",
    level: ["junior", "middle", "senior"],
    category: "situations",
    visual: "bus",
    scenario: "Автобус остановился на остановке, а тебе нужно перейти на другую сторону.",
    prompt: "Что безопаснее?",
    options: [
      "Обойти автобус спереди",
      "Обойти автобус сзади",
      "Дождаться, когда автобус уедет, и перейти по переходу"
    ],
    answer: 2,
    hint: "Стоящий транспорт закрывает обзор тебе и водителям.",
    explanation: "Стоящий автобус нельзя использовать как укрытие для перехода: из-за него плохо видно дорогу. Безопаснее дождаться отъезда и идти по переходу.",
    source: "Госавтоинспекция: детская безопасность"
  },
  {
    id: "sidewalk",
    level: ["junior", "middle", "senior"],
    category: "pedestrian",
    visual: "crosswalk-blue",
    scenario: "Ты идешь в школу пешком по улице с тротуаром.",
    prompt: "Где должен идти пешеход?",
    options: [
      "По тротуару",
      "По краю проезжей части рядом с машинами",
      "По велосипедной полосе"
    ],
    answer: 0,
    hint: "Тротуар создан именно для пешеходов.",
    explanation: "Пешеходы должны двигаться по тротуарам, пешеходным дорожкам, велопешеходным дорожкам, а при их отсутствии по обочинам.",
    source: "ПДД 4.1"
  },
  {
    id: "dark-reflectors",
    level: ["junior", "middle", "senior"],
    category: "situations",
    visual: "reflector",
    scenario: "Вечером ты идешь вдоль дороги за городом.",
    prompt: "Что обязательно поможет водителям заметить тебя?",
    options: [
      "Темная одежда без деталей",
      "Световозвращающие элементы на одежде или рюкзаке",
      "Телефон в кармане"
    ],
    answer: 1,
    hint: "В темноте водитель видит отраженный свет фар.",
    explanation: "В темное время суток вне населенных пунктов пешеходы обязаны иметь световозвращающие предметы и обеспечивать их видимость водителям.",
    source: "ПДД 4.1"
  },
  {
    id: "group-children",
    level: ["middle", "senior"],
    category: "situations",
    visual: "crosswalk-blue",
    scenario: "Класс идет группой на экскурсию.",
    prompt: "Где можно вести группу детей?",
    options: [
      "По тротуарам и пешеходным дорожкам, а без них по обочинам днем и со взрослыми",
      "По любой свободной полосе дороги",
      "По дороге ночью, если есть фонарики"
    ],
    answer: 0,
    hint: "Для группы детей правила строже, чем для одного пешехода.",
    explanation: "Группы детей разрешается водить по тротуарам и пешеходным дорожкам, при их отсутствии по обочинам, только в светлое время и в сопровождении взрослых.",
    source: "ПДД 4.2"
  },
  {
    id: "finish-crossing",
    level: ["middle", "senior"],
    category: "situations",
    visual: "traffic-red",
    scenario: "Ты начал переходить дорогу на зеленый, но сигнал сменился, а ты еще не дошел.",
    prompt: "Что нужно сделать?",
    options: [
      "Побежать назад",
      "Остановиться на островке безопасности или линии, разделяющей потоки, если дальше идти нельзя безопасно",
      "Сесть на бордюр и ждать"
    ],
    answer: 1,
    hint: "Не метайся: выбери безопасное место ожидания.",
    explanation: "Пешеходы, не успевшие закончить переход, должны остановиться на островке безопасности или линии, разделяющей транспортные потоки, и продолжить, убедившись в безопасности.",
    source: "ПДД 4.6"
  },
  {
    id: "wait-bus",
    level: ["junior", "middle", "senior"],
    category: "passenger",
    visual: "bus",
    scenario: "Ты ждешь автобус на остановке без посадочной площадки.",
    prompt: "Где ждать транспорт?",
    options: [
      "На тротуаре или обочине",
      "На проезжей части рядом с автобусной полосой",
      "В любом месте, где виден автобус"
    ],
    answer: 0,
    hint: "На дорогу выходят только после полной остановки транспорта.",
    explanation: "Ожидать маршрутный транспорт и такси можно на посадочных площадках, а при их отсутствии на тротуаре или обочине.",
    source: "ПДД 4.8"
  },
  {
    id: "seat-belt",
    level: ["junior", "middle", "senior"],
    category: "passenger",
    visual: "belt",
    scenario: "Ты сел в автомобиль на заднее сиденье, ремень безопасности есть.",
    prompt: "Что нужно сделать?",
    options: [
      "Пристегнуться",
      "Пристегиваться только на переднем сиденье",
      "Держаться рукой за сиденье впереди"
    ],
    answer: 0,
    hint: "Если ремень есть, им нужно пользоваться.",
    explanation: "Пассажиры в транспортном средстве, оборудованном ремнями безопасности, обязаны быть пристегнутыми.",
    source: "ПДД 5.1"
  },
  {
    id: "car-door",
    level: ["junior", "middle", "senior"],
    category: "passenger",
    visual: "belt",
    scenario: "Машина еще медленно катится к месту остановки.",
    prompt: "Когда можно выходить?",
    options: [
      "Пока машина почти остановилась",
      "Только после полной остановки",
      "Когда водитель повернул голову"
    ],
    answer: 1,
    hint: "Слово из правил: полная остановка.",
    explanation: "Посадку и высадку нужно производить со стороны тротуара или обочины и только после полной остановки транспортного средства.",
    source: "ПДД 5.1"
  },
  {
    id: "distract-driver",
    level: ["junior", "middle", "senior"],
    category: "passenger",
    visual: "belt",
    scenario: "Друг в машине громко показывает видео водителю.",
    prompt: "Почему так делать нельзя?",
    options: [
      "Пассажирам запрещено отвлекать водителя во время движения",
      "Видео можно показывать только днем",
      "Водителя можно отвлекать, если дорога пустая"
    ],
    answer: 0,
    hint: "Водитель должен следить за дорогой.",
    explanation: "Пассажирам запрещается отвлекать водителя от управления транспортным средством во время движения.",
    source: "ПДД 5.2"
  },
  {
    id: "bike-12-road",
    level: ["junior", "middle", "senior"],
    category: "bike",
    visual: "bike",
    scenario: "Школьнику 12 лет. Он хочет ехать на велосипеде по проезжей части рядом с машинами.",
    prompt: "Можно ли так делать?",
    options: [
      "Да, если он умеет быстро ехать",
      "Нет, до 14 лет по проезжей части ездить нельзя",
      "Можно только после уроков"
    ],
    answer: 1,
    hint: "Возрастная граница для велосипедиста на дороге: 14 лет.",
    explanation: "Велосипедисты 7-14 лет должны двигаться по тротуарам, пешеходным, велосипедным и велопешеходным дорожкам, а также в пешеходных зонах.",
    source: "ПДД 24.3"
  },
  {
    id: "bike-sidewalk-danger",
    level: ["middle", "senior"],
    category: "bike",
    visual: "bike",
    scenario: "Велосипедист едет по тротуару, но впереди много пешеходов.",
    prompt: "Как поступить, если можно создать помехи или опасность?",
    options: [
      "Позвонить в звонок и ехать быстрее",
      "Спешиться и идти как пешеход",
      "Ехать между людьми змейкой"
    ],
    answer: 1,
    hint: "Когда мешаешь пешеходам, велосипед лучше вести рядом.",
    explanation: "Если движение велосипедиста по тротуару или пешеходной дорожке создает опасность или помехи пешеходам, велосипедист должен спешиться.",
    source: "ПДД 24.6"
  },
  {
    id: "scooter-signal",
    level: ["middle", "senior"],
    category: "bike",
    visual: "scooter",
    scenario: "Ты едешь на СИМ по тротуару и подъезжаешь к переходу со светофором для пешеходов.",
    prompt: "На какой сигнал ориентироваться?",
    options: [
      "На сигнал пешеходного светофора",
      "На сигнал для автомобилей",
      "На любой ближайший зеленый сигнал"
    ],
    answer: 0,
    hint: "Для СИМ важна зона движения: тротуар, велодорожка или дорога.",
    explanation: "Лица на СИМ должны руководствоваться сигналами пешехода или велосипеда в зависимости от того, где они движутся.",
    source: "ПДД 6.5"
  },
  {
    id: "scooter-speed",
    level: ["senior"],
    category: "bike",
    visual: "scooter",
    scenario: "Подросток едет на электросамокате в разрешенном месте.",
    prompt: "Какая максимальная скорость движения СИМ указана в ПДД?",
    options: [
      "15 км/ч",
      "25 км/ч",
      "40 км/ч"
    ],
    answer: 1,
    hint: "Это больше, чем бег, но меньше скорости мопеда.",
    explanation: "Движение на средстве индивидуальной мобильности разрешается со скоростью не более 25 км/ч.",
    source: "ПДД 24.6"
  },
  {
    id: "bike-sign",
    level: ["junior", "middle", "senior"],
    category: "signs",
    visual: "bike-sign",
    scenario: "Ты видишь круглый синий знак с изображением велосипеда.",
    prompt: "Что он обозначает?",
    options: [
      "Велосипедная дорожка",
      "Парковка только для велосипедов",
      "Движение на велосипедах запрещено"
    ],
    answer: 0,
    hint: "Синий круглый знак обычно предписывает движение.",
    explanation: "Знак с велосипедом на синем круге обозначает велосипедную дорожку. Пешеходам важно не занимать ее без необходимости.",
    source: "Приложение 1 к ПДД"
  },
  {
    id: "pedestrian-crossing-sign",
    level: ["junior", "middle", "senior"],
    category: "signs",
    visual: "crosswalk-blue",
    scenario: "У дороги стоит синий квадратный знак с человеком на переходе.",
    prompt: "Что показывает этот знак?",
    options: [
      "Место пешеходного перехода",
      "Место для игры",
      "Остановка автобуса"
    ],
    answer: 0,
    hint: "На знаке изображен переход через дорогу.",
    explanation: "Знак «Пешеходный переход» помогает найти место, где можно переходить дорогу по правилам.",
    source: "Приложение 1 к ПДД"
  },
  {
    id: "diagonal-crossing",
    level: ["senior"],
    category: "pedestrian",
    visual: "crosswalk-blue",
    scenario: "На регулируемом перекрестке хочется перейти по диагонали.",
    prompt: "Когда это разрешено?",
    options: [
      "Всегда, если горит зеленый",
      "Только если есть специальная диагональная разметка перехода",
      "Никогда"
    ],
    answer: 1,
    hint: "Для диагонального перехода нужна отдельная разметка.",
    explanation: "На регулируемом перекрестке переходить по диагонали можно только при наличии разметки, обозначающей такой пешеходный переход.",
    source: "ПДД 4.3"
  },
  {
    id: "emergency-vehicle",
    level: ["middle", "senior"],
    category: "situations",
    visual: "warning-sign",
    scenario: "Ты переходишь дорогу и слышишь сирену, видишь машину с синим маячком.",
    prompt: "Что нужно сделать?",
    options: [
      "Продолжать идти как обычно",
      "Не выходить на дорогу, а если уже на ней, освободить проезжую часть",
      "Помахать водителю рукой"
    ],
    answer: 1,
    hint: "Спецтранспорту нужно дать проехать.",
    explanation: "При приближении транспорта с синим маячком и специальным звуковым сигналом пешеходы должны воздержаться от перехода, а находящиеся на проезжей части должны освободить ее.",
    source: "ПДД 4.7"
  },
  {
    id: "pedestrian-traffic-light",
    level: ["junior", "middle", "senior"],
    category: "lights",
    visual: "traffic-green",
    scenario: "Рядом есть обычный транспортный светофор и отдельный светофор с человечком.",
    prompt: "Какой сигнал важен для пешехода?",
    options: [
      "Сигнал пешеходного светофора",
      "Сигнал для машин, потому что он крупнее",
      "Любой зеленый сигнал"
    ],
    answer: 0,
    hint: "Силуэт пешехода действует именно на пешеходов.",
    explanation: "Если сигнал светофора выполнен в виде силуэта пешехода, его действие распространяется только на пешеходов.",
    source: "ПДД 6.5"
  },
  {
    id: "underground-crossing",
    level: ["junior", "middle", "senior"],
    category: "pedestrian",
    visual: "crosswalk-blue",
    scenario: "Рядом есть подземный переход, а дорогу хочется перейти сверху.",
    prompt: "Как правильно?",
    options: [
      "Использовать подземный переход",
      "Перебежать дорогу над переходом",
      "Перейти сверху, если машин мало"
    ],
    answer: 0,
    hint: "Переходы бывают наземные, подземные и надземные.",
    explanation: "Пешеходы должны переходить дорогу по пешеходным переходам, включая подземные и надземные.",
    source: "ПДД 4.3"
  },
  {
    id: "bike-leading",
    level: ["senior"],
    category: "bike",
    visual: "bike",
    scenario: "Ты ведешь велосипед рядом с собой по краю дороги там, где нет тротуара.",
    prompt: "К кому ты приравниваешься?",
    options: [
      "К водителю автомобиля",
      "К пешеходу",
      "К пассажиру"
    ],
    answer: 1,
    hint: "Если велосипед не едет, а его ведут, правила меняются.",
    explanation: "К пешеходам приравниваются лица, ведущие велосипед, СИМ, мопед или мотоцикл.",
    source: "ПДД 1.2"
  }
];

const categoryList = document.querySelector("#categoryList");
const levelButtons = document.querySelectorAll("[data-level]");
const bestScore = document.querySelector("#bestScore");
const scoreValue = document.querySelector("#scoreValue");
const streakValue = document.querySelector("#streakValue");
const questionCounter = document.querySelector("#questionCounter");
const progressFill = document.querySelector("#progressFill");
const scene = document.querySelector("#scene");
const categoryBadge = document.querySelector("#categoryBadge");
const sourceText = document.querySelector("#sourceText");
const scenarioText = document.querySelector("#scenarioText");
const questionText = document.querySelector("#questionText");
const answerList = document.querySelector("#answerList");
const feedback = document.querySelector("#feedback");
const nextButton = document.querySelector("#nextButton");
const explainButton = document.querySelector("#explainButton");
const restartButton = document.querySelector("#restartButton");
const resultScreen = document.querySelector("#resultScreen");
const resultTitle = document.querySelector("#resultTitle");
const resultSummary = document.querySelector("#resultSummary");
const resultCorrect = document.querySelector("#resultCorrect");
const resultPercent = document.querySelector("#resultPercent");
const resultStreak = document.querySelector("#resultStreak");
const reviewList = document.querySelector("#reviewList");
const againButton = document.querySelector("#againButton");

const state = {
  level: "junior",
  category: "all",
  round: [],
  index: 0,
  score: 0,
  streak: 0,
  bestStreak: 0,
  answered: false,
  mistakes: []
};

function init() {
  renderCategories();
  bindEvents();
  updateBestScore();
  startRound();
}

function renderCategories() {
  categoryList.innerHTML = categories
    .map((category) => `
      <button class="category-button ${category.id === state.category ? "is-active" : ""}" type="button" data-category="${category.id}">
        <span>${category.label}</span>
        <span class="category-dot" aria-hidden="true"></span>
      </button>
    `)
    .join("");
}

function bindEvents() {
  levelButtons.forEach((button) => {
    button.addEventListener("click", () => {
      state.level = button.dataset.level;
      levelButtons.forEach((item) => {
        const isActive = item === button;
        item.classList.toggle("is-active", isActive);
        item.setAttribute("aria-pressed", String(isActive));
      });
      startRound();
    });
  });

  categoryList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-category]");
    if (!button) return;
    state.category = button.dataset.category;
    renderCategories();
    startRound();
  });

  answerList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-answer]");
    if (!button || state.answered) return;
    selectAnswer(Number(button.dataset.answer));
  });

  nextButton.addEventListener("click", nextQuestion);
  explainButton.addEventListener("click", showHint);
  restartButton.addEventListener("click", startRound);
  againButton.addEventListener("click", startRound);
}

function startRound() {
  const pool = questions.filter((question) => {
    const levelMatches = question.level.includes(state.level);
    const categoryMatches = state.category === "all" || question.category === state.category;
    return levelMatches && categoryMatches;
  });

  state.round = shuffle(pool).slice(0, Math.min(10, pool.length));
  state.index = 0;
  state.score = 0;
  state.streak = 0;
  state.bestStreak = 0;
  state.answered = false;
  state.mistakes = [];
  resultScreen.hidden = true;
  renderQuestion();
}

function renderQuestion() {
  if (!state.round.length) {
    showEmptyState();
    return;
  }

  const question = state.round[state.index];
  state.answered = false;
  feedback.hidden = true;
  feedback.className = "feedback";
  nextButton.disabled = true;
  explainButton.disabled = false;

  scene.innerHTML = renderScene(question.visual);
  categoryBadge.textContent = getCategoryLabel(question.category);
  sourceText.textContent = question.source;
  scenarioText.textContent = question.scenario;
  questionText.textContent = question.prompt;
  answerList.innerHTML = question.options
    .map((option, index) => `
      <button class="answer-button" type="button" data-answer="${index}">
        <span class="answer-index">${index + 1}</span>
        <span>${option}</span>
      </button>
    `)
    .join("");

  updateStats();
}

function renderScene(visual) {
  const base = '<div class="scene-skyline"></div>';
  const scenes = {
    "traffic-red": `${base}<div class="scene-object traffic-light" data-active="red"><div class="lamp red"></div><div class="lamp yellow"></div><div class="lamp green"></div></div><div class="scene-object crosswalk-person"></div>`,
    "traffic-yellow": `${base}<div class="scene-object traffic-light" data-active="yellow"><div class="lamp red"></div><div class="lamp yellow"></div><div class="lamp green"></div></div><div class="scene-object crosswalk-person"></div>`,
    "traffic-green": `${base}<div class="scene-object traffic-light" data-active="green"><div class="lamp red"></div><div class="lamp yellow"></div><div class="lamp green"></div></div><div class="scene-object crosswalk-person"></div>`,
    "crosswalk-green": `${base}<div class="scene-object traffic-light" data-active="green"><div class="lamp red"></div><div class="lamp yellow"></div><div class="lamp green"></div></div><div class="scene-object crosswalk-person"></div>`,
    "crosswalk-blue": `${base}<div class="scene-object road-sign"><span>П</span></div><div class="scene-object crosswalk-person"></div>`,
    "bike-sign": `${base}<div class="scene-object road-sign"><span>В</span></div><div class="scene-object bike-shape"><span class="wheel"></span><span class="wheel"></span></div>`,
    "warning-sign": `${base}<div class="scene-object road-sign warning"><span>!</span></div><div class="scene-object crosswalk-person"></div>`,
    "bike": `${base}<div class="scene-object bike-shape"><span class="wheel"></span><span class="wheel"></span></div><div class="scene-object road-sign"><span>В</span></div>`,
    "bus": `${base}<div class="scene-object bus-shape"></div><div class="scene-object crosswalk-person"></div>`,
    "belt": `${base}<div class="scene-object belt-shape"></div>`,
    "reflector": `${base}<div class="scene-object reflector-shape"></div><div class="scene-object crosswalk-person"></div>`,
    "scooter": `${base}<div class="scene-object scooter-shape"></div><div class="scene-object traffic-light" data-active="green"><div class="lamp red"></div><div class="lamp yellow"></div><div class="lamp green"></div></div>`
  };

  return scenes[visual] || scenes["crosswalk-blue"];
}

function selectAnswer(selectedIndex) {
  const question = state.round[state.index];
  const buttons = answerList.querySelectorAll(".answer-button");
  const isCorrect = selectedIndex === question.answer;
  state.answered = true;

  buttons.forEach((button, index) => {
    button.disabled = true;
    if (index === question.answer) {
      button.classList.add("is-correct");
    }
    if (index === selectedIndex && !isCorrect) {
      button.classList.add("is-wrong");
    }
  });

  if (isCorrect) {
    state.score += 1;
    state.streak += 1;
    state.bestStreak = Math.max(state.bestStreak, state.streak);
  } else {
    state.mistakes.push({
      prompt: question.prompt,
      selected: question.options[selectedIndex],
      correct: question.options[question.answer],
      explanation: question.explanation
    });
    state.streak = 0;
  }

  showFeedback(isCorrect, question.explanation);
  nextButton.disabled = false;
  explainButton.disabled = true;
  updateStats();
}

function showFeedback(isCorrect, text) {
  feedback.hidden = false;
  feedback.className = `feedback ${isCorrect ? "is-correct" : "is-wrong"}`;
  feedback.textContent = `${isCorrect ? "Верно." : "Почти."} ${text}`;
}

function showHint() {
  const question = state.round[state.index];
  feedback.hidden = false;
  feedback.className = "feedback";
  feedback.textContent = question.hint;
}

function nextQuestion() {
  if (state.index < state.round.length - 1) {
    state.index += 1;
    renderQuestion();
    return;
  }

  showResult();
}

function showResult() {
  const total = state.round.length;
  const percent = Math.round((state.score / total) * 100);
  const previousBest = Number(localStorage.getItem("pddQuizBest") || 0);
  const nextBest = Math.max(previousBest, percent);
  localStorage.setItem("pddQuizBest", String(nextBest));
  updateBestScore();

  resultTitle.textContent = getResultTitle(percent);
  resultSummary.textContent = `Ты ответил верно на ${state.score} из ${total} вопросов. ${getResultMessage(percent)}`;
  resultCorrect.textContent = `${state.score}/${total}`;
  resultPercent.textContent = `${percent}%`;
  resultStreak.textContent = state.bestStreak;
  reviewList.innerHTML = renderReview();
  resultScreen.hidden = false;
}

function renderReview() {
  if (!state.mistakes.length) {
    return '<div class="review-item"><strong>Ошибок нет</strong><p>Можно усложнить раунд: выбрать старший класс или отдельную тему.</p></div>';
  }

  return state.mistakes
    .map((mistake) => `
      <div class="review-item">
        <strong>${mistake.prompt}</strong>
        <p>Правильный ответ: ${mistake.correct}</p>
        <p>${mistake.explanation}</p>
      </div>
    `)
    .join("");
}

function updateStats() {
  const total = state.round.length || 1;
  scoreValue.textContent = state.score;
  streakValue.textContent = state.streak;
  questionCounter.textContent = `${Math.min(state.index + 1, total)}/${total}`;
  progressFill.style.width = `${((state.index + Number(state.answered)) / total) * 100}%`;
}

function updateBestScore() {
  bestScore.textContent = `${Number(localStorage.getItem("pddQuizBest") || 0)}%`;
}

function showEmptyState() {
  scene.innerHTML = renderScene("warning-sign");
  categoryBadge.textContent = "Нет вопросов";
  sourceText.textContent = "Выбери другую тему";
  scenarioText.textContent = "Для этой пары класса и темы пока нет вопросов.";
  questionText.textContent = "Попробуй выбрать «Все темы».";
  answerList.innerHTML = "";
  feedback.hidden = true;
  nextButton.disabled = true;
  explainButton.disabled = true;
  updateStats();
}

function getCategoryLabel(categoryId) {
  return categories.find((category) => category.id === categoryId)?.label || "ПДД";
}

function getResultTitle(percent) {
  if (percent === 100) return "Без ошибок";
  if (percent >= 80) return "Уверенный маршрут";
  if (percent >= 60) return "Хороший старт";
  return "Есть что повторить";
}

function getResultMessage(percent) {
  if (percent === 100) return "Ты отлично ориентируешься в дорожных ситуациях.";
  if (percent >= 80) return "Осталось закрепить несколько деталей.";
  if (percent >= 60) return "База уже есть, разбор ошибок поможет поднять результат.";
  return "Лучше пройти еще один раунд и внимательно читать объяснения.";
}

function shuffle(items) {
  return [...items]
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
}

init();
