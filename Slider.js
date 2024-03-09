//Testimonial Data
const testimonials = [
  {
    name: "Eva Sawyer",
    job: "CEO, Fashworks",
    image: "",
    testimonial:
      "Neque volutpat ac tincidunt vitae semper quis lectus nulla at volutpat diam ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci porta non pulvinar neque laoreet suspendisse interdum consectetur",
  },
  {
    name: "Katey Topaz",
    job: "Developer, TechCrew",
    image: "profile-image-2.png",
    testimonial:
      "Elementum tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet nulla",
  },
  {
    name: "Jae Robin",
    job: "UI Designer, Affinity Agency",
    image: "profile-image-3.png",
    testimonial:
      "Orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis",
  },
  {
    name: "Nicola Blakely",
    job: "CEO,Zeal Wheels",
    image: "profile-image-4.png",
    testimonial:
      "Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit",
  },
];

//Current Slide
let i = 0;
//Total Slides
let j = testimonials.length;

let testimonialContainer = document.getElementById("testimonial-container");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");

nextBtn.addEventListener("click", () => {
  i = (j + i + 1) % j;
  displayTestimonial();
});
prevBtn.addEventListener("click", () => {
  i = (j + i - 1) % j;
  displayTestimonial();
});

let displayTestimonial = () => {
  testimonialContainer.innerHTML = `
    <p>${testimonials[i].testimonial}</p>
    <img src=${testimonials[i].image}>
    <h3>${testimonials[i].name}</h3>
    <h6>${testimonials[i].job}</h6>
  `;
};
window.onload = displayTestimonial;





const texts = [
  "a Web developer",
  "a Problem Solver",
];

let currentTextIndex = 0;
let currentCharIndex = 0;
const changingText = document.getElementById('changing-text');

function typeAndErase() {
  const currentText = texts[currentTextIndex];
  const displayedText = currentText.substring(0, currentCharIndex + 1);
  changingText.textContent = displayedText;

  if (currentCharIndex < currentText.length) {
    currentCharIndex++;
    setTimeout(typeAndErase, 70); // Adjust the typing speed
  } else {
    setTimeout(() => {
      eraseText();
    }, 3000); // Adjust the delay before erasing (1000 = 1 second)
  }
}

function eraseText() {
  const currentText = texts[currentTextIndex];
  const displayedText = currentText.substring(0, currentCharIndex + 1);
  changingText.textContent = displayedText;

  if (currentCharIndex > 0) {
    currentCharIndex--;
    setTimeout(eraseText, 10); // Adjust the erasing speed
  } else {
    setTimeout(() => {
      currentTextIndex = (currentTextIndex + 1) % texts.length;
      typeAndErase(); // Start typing the next message
    }, 100); // Adjust the delay before typing the next message (1000 = 1 second)
  }
}

typeAndErase(); // Start the initial typing and erasing






window.addEventListener("scroll", function(){
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});




// Specify the IDs you want to enable smooth scrolling for
const targetIds = ['#Services', '#Portfolio', '#Benefits', '#Clients', '#Home'];

// Add smooth scrolling behavior to navigation links for each specified ID
targetIds.forEach(targetId => {
    document.querySelectorAll(`a[href="${targetId}"]`).forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth',
                block: 'center' // Adjust the alignment
            });
        });
    });
});




document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider");
  let counter = 0;

  function slide() {
      counter++;
      slider.style.transition = "transform 0.5s ease-in-out";
      slider.style.transform = `translateX(${-counter * 100}%)`;
  }

  function resetSlide() {
      if (counter >= slider.children.length) {
          counter = 0;
          slider.style.transition = "none";
          slider.style.transform = `translateX(${-counter * 100}%)`;
      }
  }

  setInterval(slide, 3000);

  slider.addEventListener("transitionend", resetSlide);
});