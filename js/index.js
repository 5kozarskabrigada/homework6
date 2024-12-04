
// Задание 1
// Создать html - страницу для ввода имени пользователя.
// Необходимо проверять каждый символ, который вводит пользователь.Если он ввел цифру, то не отображать ее в input.

const input1 = document.querySelector(".input");

input1.addEventListener("input", (event) => {
    const value = event.target.value;

    let finalRes = "";
    for(let char of value)
    {
        if(isNaN(char) || char == " ")
        {
            finalRes += char;
        }
    }
    event.target.value = finalRes;

})


// Задание 2
// Создать html - страницу с кнопкой Открыть и модальным
// окном.На модальном окне должен быть текст и кнопка Закрыть.
// Изначально модальное окно не отображается.При клике на
// кнопку Открыть появляется модальное окно, на кнопку Закрыть –
// исчезает. 

const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
const modal = document.querySelector(".modal-container");

openBtn.addEventListener("click", () => 
{
    modal.style.display = "flex"; 

});


closeBtn.addEventListener("click", () => 
{
    modal.style.display = "none"; 

});


// Задание 3
// Создать html - страницу с футбольным полем, которое занимает всю ширину и высоту экрана, и мячом размером 100 на 100
// пикселей.
// Сделать так, чтобы при клике мышкой по полю, мяч плавно
// перемещался на место клика.Учтите: необходимо, чтобы центр
// мяча останавливался именно там, где был совершен клик мышкой.
// Также предусмотрите, чтобы мяч не выходил за границы поля.





const field = document.querySelector('.field');
const ball = document.querySelector('.ball');


const ballRadius = 50;

field.addEventListener('click', (event) => {
    
    const clickX = event.clientX;
    const clickY = event.clientY;

    const maxX = field.clientWidth - ballRadius;
    const maxY = field.clientHeight - ballRadius;


    let ballX = clickX - ballRadius;
    let ballY = clickY - ballRadius;

    if (clickX < ballRadius) 
    {
        ballX = 0;
    }

    if (clickY < ballRadius) 
    {
        ballY = 0;

    }

    if (clickX > maxX) 
    {
        ballX = maxX - ballRadius;
    }

    if (clickY > maxY) 
    {
        ballY = maxY - ballRadius;

    }

    ball.style.transform = `translate(${ballX}px, ${ballY}px)`;
});



const nextButton = document.querySelector(".next-btn");
const lights = document.querySelectorAll(".light")
let currentIndex = 0;

nextButton.addEventListener("click", () =>
{
    lights.forEach(element => 
    {
        element.style.backgroundColor = "gray"
    });


    if (lights[currentIndex].classList.contains('greenLight')) {
        lights[currentIndex].style.backgroundColor = 'green';
    } 

    if (lights[currentIndex].classList.contains('yellowLight')) {
        lights[currentIndex].style.backgroundColor = 'yellow';
    } 

    if (lights[currentIndex].classList.contains('redLight')){
        lights[currentIndex].style.backgroundColor = 'red';
    }

    currentIndex = (currentIndex + 1) % lights.length;

})