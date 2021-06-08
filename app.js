const parent = document.getElementById("project");
parent.addEventListener("mouseover", e => {
     if (e.target.className === "card") {
          const cardBody = e.target.firstElementChild;
          const parent = e.target;
          parent.style.transition = "all 0.4s ease-in-out ";
          parent.style.transform = "scale(1.05)";
          cardBody.style.display = "flex";
     }
});
parent.addEventListener("mouseout", e => {
     if (e.target.className === "card-body") {
          const child = e.target;
          const parent = e.target.parentElement;
          child.style.display = "none";
          parent.style.transition = "all 0.4s ease-in-out ";
          parent.style.transform = "scale(1)";
     }
});

const sections = document.querySelectorAll("section");
const navList = document.querySelectorAll("header ul li a");

window.addEventListener("scroll", () => {
     let current = "";
     sections.forEach(section => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          if (pageYOffset >= sectionTop - sectionHeight / 3) {
               current = section.getAttribute("id");
          }
     });
     navList.forEach(li => {
          // console.log(li.classList);
          li.classList.remove("current");
          if (li.classList.contains(current)) {
               li.classList.add("current");
          }
     });
});

// const educationUI = document.querySelector("#education .container-fluid .row");
// educationUI.addEventListener('mouse', e => {
//      console.log(e.target);
// });
