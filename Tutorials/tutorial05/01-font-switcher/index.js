const makeBigger = () => {
   console.log('make bigger!');
   document.querySelector("p").style.fontSize = "25px";
};

const makeSmaller = () => {
   console.log('make smaller!');
   document.querySelector("p").style.fontSize = "20px";
};


document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);

