let navbar = document.querySelector(".container");
let navbar2 = document.querySelector(".nav2");
let menuIcon = "";

document.body.onload=()=>{
    navbar2.style.width="0vw";
}
const putNav1 = async () => {
    let URL = 'navbar.html';
    let response = await fetch(URL);
    let data = await response.text();
    navbar.innerHTML = data;
    // Log navbar options after inserting
    const navbarOptions = document.querySelectorAll('.options .option');

    menuIcon = document.querySelector('#menu');
    clicker();
};

const putNav2 = async () => {
    let URL = 'navbar2.html';
    let response = await fetch(URL);
    let data = await response.text();
    navbar2.innerHTML = data;
};

putNav1();
putNav2();

function clicker() {
    menuIcon.onclick = () => {
            if (navbar2.classList.contains("hide")) {
                navbar2.classList.remove("hide");
                navbar2.classList.add("show");
                navbar2.style.width = "30vw";
            } else {
                navbar2.classList.add("hide");
                navbar2.classList.remove("show");
                navbar2.style.width = "0vw";
            }
            }
          
        }