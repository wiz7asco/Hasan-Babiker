
// Header Start
var navbar = document.getElementById('navbar')
var menuBtn = document.getElementById('menu-btn')
var menu = document.getElementById('menu')

function navMenu(){
   if(window.innerWidth < 775){
      navbar.style.display = 'none'
      menuBtn.style.display = 'block'
      menu.classList.add('done')
   }else{
      navbar.style.display = 'block'
      menuBtn.style.display = 'none'
      menu.style.display = 'none'
   }
  }

menuBtn.addEventListener('click',function(){
   menu.classList.toggle('done')
   menu.classList.toggle('menu')
   this.classList.toggle('menu-btn')
})



window.onload = navMenu()
// Header End

// Qoutes Start

// Function to display quotes
function displayQuotes(quotes) {
    
   const quoteElement = document.getElementById("quote");
   const authorElement = document.getElementById("author");
   let index = 0;

   setInterval(() => {
     quoteElement.textContent = quotes[index].quote;
     authorElement.textContent = `By - "${quotes[index].author}"`;
     index = (index + 1) % quotes.length; // Loop back to the first quote
   }, 10000); 
 }


 const quotes = [
{ quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
{ quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
{ quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
{ quote: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
{ quote: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
{ quote: "I have not failed. I've just found 10,000 ways that won't work.", author: "Thomas Edison" },
{ quote: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
{ quote: "The best way to predict your future is to create it.", author: "Abraham Lincoln" },
{ quote: "Do something today that your future self will thank you for.", author: "Unknown" },
{ quote: "Keep your eyes on the stars, and your feet on the ground.", author: "Theodore Roosevelt" },
{ quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
{ quote: "You don't have to be great to start, but you have to start to be great.", author: "Zig Ziglar" },
{ quote: "Do not let what you cannot do interfere with what you can do.", author: "John Wooden" },
{ quote: "The best revenge is massive success.", author: "Frank Sinatra" },
{ quote: "You can't start the next chapter of your life if you keep re-reading the last one.", author: "Unknown" },
{ quote: "I am not a product of my circumstances. I am a product of my decisions.", author: "Stephen Covey" },
{ quote: "Do not let yesterday take up too much of today.", author: "Will Rogers" },
{ quote: "The best way to find yourself is to lose yourself in the service of others.", author: "Mahatma Gandhi" },
{ quote: "If you want to lift yourself up, lift up someone else.", author: "Booker T. Washington" },
{ quote: "Life is 10% what happens to you and 90% how you react to it.", author: "Charles R. Swindoll" },

{ quote: "The biggest adventure you can take is to live the life of your dreams.", author: "Oprah Winfrey" },
{ quote: "Do not go where the path may lead; go instead where there is no path and leave a trail.", author: "Ralph Waldo Emerson" },
{ quote: "You are the average of the five people you spend the most time with.", author: "Jim Rohn" },
{ quote: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt" },
{ quote: "You can't go back and change the past, but you can learn from it.", author: "Unknown" },
{ quote: "The best is yet to come.", author: "Robert Browning" },
{ quote: "Don't be afraid to give up the good to go for the great.", author: "John D. Rockefeller" },
{ quote: "You are stronger than you seem, braver than you believe, and smarter than you think.", author: "A.A. Milne" },
{ quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
{ quote: "You don't have to see the whole staircase, just take the first step.", author: "Martin Luther King Jr." },
];
 for (let i = 0; i <= quotes.length; i++) {
   if(i > quotes.length){
       quotes.push({ quote: `Quote ${i + 1}`, author: `Author ${i + 1}` });
   }
 }
 displayQuotes(quotes);


// Qoutes End

// Skills Script Start

const selectTyped = document.querySelector('.typed');
let typed_strings = selectTyped.getAttribute('data-typed-items');
typed_strings = typed_strings.split(',');

const texts = typed_strings
const typingElement = document.getElementById("typing");
let textIndex = 0;
let charIndex = 0;
let isTyping = true;

function typeText() {

    if (isTyping) {
        if (charIndex < texts[textIndex].length) {
            typingElement.textContent += texts[textIndex][charIndex];
            charIndex++;
    
            setTimeout(typeText, 100);

        } else {
            isTyping = false;
            setTimeout(typeText, 1000);
        }
    } else {
        if (charIndex > 0) {
            typingElement.textContent = texts[textIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(typeText, 50);
        } else {
            textIndex = (textIndex + 1) % texts.length;
            charIndex = 0;
            isTyping = true;

            setTimeout(typeText, 500);
        }
    }
}

typeText()
// Skills Script End

// What I Can Do Script Start

function displaySkill(skills) {
    
   const skillElement = document.getElementById("skill");
   let index = 0;

   setInterval(() => {
     skillElement.textContent = skills[index];
     index = (index + 1) % skills.length; // Loop back to the first quote
    }, 10000); 
  }
  
  const skills = ["Design and implement user interface", "Develop responsive web applications", "Design and implement server-side logic"];
  for (let i = 0; i <= skills.length; i++) {
   if(i > skills.length){
       skills.push(i + 1);
   }
 }
 displaySkill(skills);
 
 // What I Can Do Script End


// Why Me String Script Start


const whymeString = ["I have a unique combination of skills And Experience in both full-stack development and cyber security which make me an valuable asset to teams and projects that require a strong understanding of both areas."]
const whymeTitle = document.getElementById("whymeTitle");
let whymeText = 0;
let whymeChar = 0;

function typeWhyme() {
    if (whymeChar < whymeString[whymeText].length) {
    whymeTitle.textContent += whymeString[whymeText][whymeChar];
    whymeChar++;
    setTimeout(typeWhyme, 100);
  }else{
    setTimeout(deleteWhyme, 20000)

  }
}

function deleteWhyme() {
    if (whymeChar > 0) {
      whymeTitle.textContent = whymeString[whymeText].substring(0, whymeChar - 1);
      whymeChar--;
      
    } else {
    whymeText = (whymeText + 1) % whymeString.length;
    setTimeout(typeWhyme, 700);    
}}

  typeWhyme()
  
  
// Why Me String Script End

// About String Script Start
const aboutString = ["Hi, I'm Hasan Babiker, a web designer and full-stack developer with a strong background in cybersecurity."]
const aboutTitle = document.getElementById("aboutTitle");
let textTitle = 0;
let charTitle = 0;

function typeTitle() {
    if (charTitle < aboutString[textTitle].length) {
    aboutTitle.textContent += aboutString[textTitle][charTitle];
    charTitle++;
    setTimeout(typeTitle, 100);
  }
}

// About String Script End


// Porject Section


// Silder script
let slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function showNextSlide() {
      slides[currentSlide].classList.remove('slider-active');
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add('slider-active');
    }

    setInterval(showNextSlide, 10000); // move to next slide every 10 seconds
    
    document.getElementById('next-btn').addEventListener('click', () => {
      showNextSlide();
    });
    
    document.getElementById('prev-btn').addEventListener('click', () => {
      slides[currentSlide].classList.remove('slider-active');
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      slides[currentSlide].classList.add('slider-active');
    });




// Go Top Button Start
window.addEventListener('scroll', function(){
     const num = Math.round(window.scrollY)
   const top = document.getElementById('top')

   window.addEventListener('scroll', function(){
     if(num > 400){
        typeTitle();
        top.classList.remove('show')
      }else{
         top.classList.add('show')
      }
    })
})

function goTop(){
  window.scrollTo({top: 0, behavior: 'smooth'})
  
}
// Go Top Button End
