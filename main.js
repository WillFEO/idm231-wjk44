let currentAudio = null;
const maxValues = {
  inversions: 10,
  speed: 150,
  height: 500,
};
const signs = [
  {
    id: "aries",
    coasterName: "Kingda Ka",
    description:
      "Bold, fearless, and always reaching new heights! You're the tallest and fastest coaster in the park, launching riders 456 feet into the sky at 128 mph. Like an Aries, you charge forward with unstoppable energy.",
    dateRange: "Aries, March 21 to April 19",
    image: "kingda.webp",
    sound: "kingda.mp3",
    stats: {
      inversions: 0,
      speed: 128,
      height: 456,
    },
  },

  {
    id: "taurus",
    coasterName: "El Toro",
    description:
      "Strong, reliable, and a classic favorite. You're a wooden coaster with an unmatched reputation for delivering thrills. Like a Taurus, you're grounded yet surprisingly powerful and unforgettable.",
    dateRange: "Taurus, April 20 to May 20",
    image: "toro.webp",
    sound: "toro.mp3",
    stats: {
      inversions: 0,
      speed: 70,
      height: 181,
    },
  },

  {
    id: "gemini",
    coasterName: "Nitro",
    description:
      "Smooth, versatile, and full of variety! You glide through turns and drops with effortless grace. Like a Gemini, you adapt to every curve and keep riders guessing what comes next.",
    dateRange: "Gemini, May 21 to June 20",
    image: "nitro.webp",
    sound: "nitro.mp3",
    stats: {
      inversions: 0,
      speed: 80,
      height: 230,
    },
  },

  {
    id: "cancer",
    coasterName: "Jersey Devil",
    description:
      "Mysterious, intense, and emotionally gripping! As the world's tallest single-rail coaster, you dive and twist through the park. Like a Cancer, you create deep connections with every rider.",
    dateRange: "Cancer, June 21 to July 22",
    image: "devil.webp",
    sound: "devil.mp3",
    stats: {
      inversions: 3,
      speed: 58,
      height: 130,
    },
  },

  {
    id: "leo",
    coasterName: "Joker",
    description:
      "Dramatic, unpredictable, and the center of attention! You flip riders head over heels with bold confidence. Like a Leo, you demand the spotlight and deliver an unforgettable performance.",
    dateRange: "Leo, July 23 to August 22",
    image: "joker.webp",
    sound: "joker.mp3",
    stats: {
      inversions: 8,
      speed: 38,
      height: 120,
    },
  },

  {
    id: "virgo",
    coasterName: "Batman: The Ride",
    description:
      "Precise, efficient, and perfectly executed. Your inversions are calculated and smooth, never wasting a moment. Like a Virgo, you're detail-oriented and deliver exactly what's promised.",
    dateRange: "Virgo, August 23 to September 22",
    image: "batman.webp",
    sound: "batman.mp3",
    stats: {
      inversions: 5,
      speed: 50,
      height: 100,
    },
  },

  {
    id: "libra",
    coasterName: "Superman: Ultimate Flight",
    description:
      "Balanced, soaring, and graceful! You fly through the air with elegance and poise. Like a Libra, you find perfect harmony between speed and smoothness, thrills and comfort.",
    dateRange: "Libra, September 23 to October 22",
    image: "superman.webp",
    sound: "superman.mp3",
    stats: {
      inversions: 2,
      speed: 51,
      height: 106,
    },
  },

  {
    id: "scorpio",
    coasterName: "Green Lantern",
    description:
      "Intense, transformative, and not for the faint of heart. You stand riders upright as you loop and twist. Like a Scorpio, you push boundaries and create powerful experiences.",
    dateRange: "Scorpio, October 23 to November 21",
    image: "lantern.webp",
    sound: "lantern.mp3",
    stats: {
      inversions: 4,
      speed: 64,
      height: 154,
    },
  },

  {
    id: "sagittarius",
    coasterName: "Bizzaro",
    description:
      "Adventurous, wild, and always exploring! You twist through unexpected turns with boundless energy. Like a Sagittarius, you embrace the journey and keep things exciting.",
    dateRange: "Sagittarius, November 22 to December 21",
    image: "bizzaro.webp",
    sound: "bizzaro.mp3",
    stats: {
      inversions: 7,
      speed: 77,
      height: 142,
    },
  },

  {
    id: "capricorn",
    coasterName: "Wonder Woman: Lasso of Truth",
    description:
      "Ambitious, determined, and always climbing higher! You swing back and forth with unwavering persistence, building momentum until you reach your ultimate goal at the very top. Like a Capricorn, you're patient, disciplined, and never stop until you've conquered the summit.",
    dateRange: "Capricorn, December 22 to January 19",
    image: "lasso.webp",
    sound: "lasso.mp3",
    stats: {
      inversions: 6,
      speed: 75,
      height: 172,
    },
  },

  {
    id: "aquarius",
    coasterName: "The Flash: Vertical Velocity",
    description:
      "Unique, innovative, and ahead of your time! You're a cutting-edge super loop coaster that defies convention with lightning-fast launches and a massive vertical loop. Like an Aquarius, you're forward-thinking, electrifying, and always pushing the boundaries of what's possible.",
    dateRange: "Aquarius, January 20 to February 18",
    image: "flash.webp",
    sound: "flash.mp3",
    stats: {
      inversions: 4,
      speed: 59,
      height: 172,
    },
  },

  {
    id: "pisces",
    coasterName: "Runaway Minetrain",
    description:
      "Nostalgic, whimsical, and full of heart. You take riders on a scenic journey through mines and tunnels. Like a Pisces, you blend imagination with gentle thrills.",
    dateRange: "Pisces, February 19 to March 20",
    image: "minetrain.webp",
    sound: "minetrain.mp3",
    stats: {
      inversions: 0,
      speed: 42,
      height: 60,
    },
  },
];
const DOM = {
  body: document.body,
  signButtons: document.querySelectorAll(".sign"),
  birthdayForm: document.querySelector(".intro__form"),

  title: document.querySelector(".coaster__title"),
  description: document.querySelector(".coaster__description"),
  dates: document.querySelector(".coaster__dates"),

  image: document.querySelector(".coaster__image"),

  inversionsBar: document.querySelector(".meter__bar--inversions"),
  speedBar: document.querySelector(".meter__bar--speed"),
  heightBar: document.querySelector(".meter__bar--height"),

  inversionsValue: document.querySelector(".meter__value--inversions"),
  speedValue: document.querySelector(".meter__value--speed"),
  heightValue: document.querySelector(".meter__value--height"),

  helpButton: document.querySelector(".intro__help-button"),
  helpOverlay: document.querySelector(".help-overlay"),
  helpClose: document.querySelector(".help-modal__close"),
};

function updateClass(signObject) {
  DOM.body.className = `theme--${signObject.id}`;
}

function updateTextContent(signObject) {
  DOM.title.textContent = signObject.coasterName;
  DOM.description.textContent = signObject.description;
  DOM.dates.textContent = signObject.dateRange;

  DOM.inversionsValue.textContent = signObject.stats.inversions;
  DOM.speedValue.textContent = `${signObject.stats.speed} mph`;
  DOM.heightValue.textContent = `${signObject.stats.height} ft`;
}

function updateImage(signObject) {
  DOM.image.src = `images/${signObject.image}`;
  DOM.image.alt = signObject.coasterName;
}

function updateStatsBars(signObject) {
  const inversionsPercentage =
    (signObject.stats.inversions / maxValues.inversions) * 100;
  const speedPercentage = (signObject.stats.speed / maxValues.speed) * 100;
  const heightPercentage = (signObject.stats.height / maxValues.height) * 100;

  DOM.inversionsBar.style.height = `${inversionsPercentage}%`;
  DOM.speedBar.style.height = `${speedPercentage}%`;
  DOM.heightBar.style.height = `${heightPercentage}%`;
}

function playSound(signObject) {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }

  currentAudio = new Audio(`sounds/${signObject.sound}`);
  currentAudio.volume = 0.25;
  currentAudio.play();
}

function updateUI(signObject) {
  updateClass(signObject);
  updateTextContent(signObject);
  updateImage(signObject);
  updateStatsBars(signObject);
  playSound(signObject);
}

function getSignObject(event) {
  const clickedButton = event.currentTarget;
  const fullClass = clickedButton.classList[1];
  const signName = fullClass.replace("sign--", "");
  const signObject = signs.find((item) => item.id === signName);
  return signObject;
}

function handleSignClick(event) {
  const signObject = getSignObject(event);
  updateUI(signObject);
}

function getZodiac(month, day) {
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
    return "capricorn";
  } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
    return "sagittarius";
  } else if ((month === 10 && day >= 24) || (month === 11 && day <= 21)) {
    return "scorpio";
  } else if ((month === 9 && day >= 23) || (month === 10 && day <= 23)) {
    return "libra";
  } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
    return "virgo";
  } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
    return "leo";
  } else if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) {
    return "cancer";
  } else if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) {
    return "gemini";
  } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
    return "taurus";
  } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
    return "aries";
  } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
    return "pisces";
  } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
    return "aquarius";
  } else return null;
}

function getBirthdaySign(birthday) {
  const date = {
    year: birthday[0],
    month: birthday[1],
    day: birthday[2],
  };
  const month = Number(date.month);
  const day = Number(date.day);
  return getZodiac(month, day);
}

function handleForm(event) {
  event.preventDefault();

  const birthdaySign = getBirthdaySign(
    birthdayForm.elements.birthday.value.split("-"),
  );

  const signObject = signs.find((item) => item.id === birthdaySign);

  updateUI(signObject);
}

function addEventListeners() {
  DOM.signButtons.forEach((button) => {
    button.addEventListener("click", handleSignClick);
  });
  if (DOM.birthdayForm) {
    DOM.birthdayForm.addEventListener("submit", handleForm);
  }

  DOM.helpButton.addEventListener("click", () => {
    DOM.helpOverlay.classList.add("help-overlay--active");
  });

  DOM.helpClose.addEventListener("click", () => {
    DOM.helpOverlay.classList.remove("help-overlay--active");
  });
}

function initialize() {
  addEventListeners();
}

document.addEventListener("DOMContentLoaded", initialize);
