document.addEventListener('DOMContentLoaded', () => {
  const toggleSwitch = document.getElementById('toggle-switch');
  const body = document.body;

  // Check and apply the user's dark mode preference
  if (localStorage.getItem('dark-mode') === 'enabled') {
    body.classList.add('dark');
  }

  // Toggle dark mode on click
  toggleSwitch.addEventListener('click', () => {
    body.classList.toggle('dark');
    // Save the user's preference in localStorage
    if (body.classList.contains('dark')) {
      localStorage.setItem('dark-mode', 'enabled');
    } else {
      localStorage.setItem('dark-mode', 'disabled');
    }
  });
});
/**---------typing effect------------- */

var typingEffect = new Typed(".typedText",{
  strings: ["Developer", "Coder"],

  loop: true,
  typeSpeed: 100,
  backSpeed:80,
  backDelay:2000,
})

/*-----------scroll animation---------------*/
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,


});

sr.reveal(".featured-name",{delay:100});
sr.reveal(".text=info",{delay:200 });
sr.reveal(".text=btn",{delay:200 });
sr.reveal(".socical_icons",{delay:200 });
sr.reveal(".featured-image",{delay:320 });

sr.reveal (".project-box", { interval: 200 });

sr.reveal(".top-header",{});

const srleft = ScrollReveal({
  origin:"left",
  distance:"80px",
  duration:2000,
  reset:true,
})

srleft.reveal(".about-info",{ delay:100 });
srleft.reveal(".contact-info",{ delay:100 });

const srRight = ScrollReveal({
  origin:"left",
  distance:"80px",
  duration:2000,
  reset:true,
})

srRight.reveal(".skill",{delay:100});
srRight.reveal(".skill-box",{delay:100});

/*-------------active link-------------*/

const sections = document.querySelectorAll(".section[id]");

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach((current) => {

    const sectionHeight = current.offsetHeight,
    
    sectionTop = current.offseTop - 50,
    sectionId = current.getAttribute("id");
   if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      document
      .querySelector(".nav-menu a[href*= " + sectionId + "]")
      .classList.add("activelink");
    }
    else {
      document
      .querySelector(".nav-menu a[href*= " + sectionId + "]")
      .classList.remove("active-link");
    }

  });

}

window.addEventListener( "scroll", scrollActive);
