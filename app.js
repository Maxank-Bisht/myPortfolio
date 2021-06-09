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
     let entireH = 0;
     sections.forEach(section => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          entireH += sectionHeight;
          if (pageYOffset >= sectionTop - sectionHeight / 2) {
               current = section.getAttribute("id");
          }
          // console.log(`${section.id}:${sectionTop - sectionHeight / 2}`);
     });
     navList.forEach(li => {
          li.classList.remove("current");
          if (li.classList.contains(current)) {
               li.classList.add("current");
          }
     });
     // console.log(`${pageYOffset}`);
     const bodyH = document.body.clientHeight;
     // console.log(`${entireH - bodyH}`);
     if (pageYOffset >= entireH - bodyH) {
          navList.forEach(li => {
               li.classList.remove("current");
          });
          navList[navList.length - 1].classList.add("current");
     }
});

// const educationUI = document.querySelector("#education .container-fluid .row");
// educationUI.addEventListener('mouse', e => {
//      console.log(e.target);
// });
