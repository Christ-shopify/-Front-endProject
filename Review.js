const review = [
  {
    id: 1,
    name: " Ebony Sarah",
    job: " Developper",
    img: "https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg",
    text: "lorem good at my job",
  },

  {
    id: 2,
    name: " Roxane Youzan ",
    job: " Ux designer ",
    img: "https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg",
    text: "Good a elegant at my job",
  },

  {
    id: 3,
    name: "Christ Youzan",
    job: " Engineer",
    img: "https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg",
    text: "Qa TESTER",
  },

  {
    id: 4,
    name: "Philomene Sadia ",
    job: "Childminder",
    img: "https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg",
    text: "Lorem Good at my Job Marn",
  },
];

// getting items from the html code
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

// getting ther btn
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const rand = document.querySelector(".random-btn");

// set starting items
let currentItem = 0;

// load initial items

window.addEventListener("DOMContentLoaded", function () {
  console.log("we learning Javascript");
  showPerson(currentItem);
});

//function that calls every items in the array review
function showPerson() {
  const item = review[currentItem];
  // getting each data individually from the array
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

// next-btn
nextBtn.addEventListener("click", function () {
  currentItem++;
  //checking that error are nbo triggered past point 3 in the array
  if (currentItem > review.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

// prev btn

prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = review.length - 1;
  }
  showPerson(currentItem);
  console.log("hello");
});

// random  btn

rand.addEventListener("click", function () {
  currentItem = Math.floor(Math.random() * review.length);
  showPerson(currentItem);
});
