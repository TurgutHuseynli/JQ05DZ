// 1)
// Создайте эффект слайдера используя slideDown для тега div при нажатии на тег button
// <div class="slide"></div>
// <button class="btn"></button>
$('button').click(() => {
    $('.slide').slideDown()
})

// 2)
// Создайте эффект слайдера используя slideUp для тега div при нажатии на тег button
// <div class="slide"></div>
// <button class="btn"></button>
$('button').click(() => {
    $('.slide').slideUp()
})

// 3)
// Создайте эффект слайдера используя slideToggle для тега div при нажатии на тег button
// <div class="slide"></div>
// <button class="btn"></button>
$('button').click(() => {
    $('.slide').slideToggle()
})

// 4)
// Создайте эффект слайдера используя slideDown для тега div при нажатии на тег button и установите время анимации на 4s
// <div class="slide"></div>
// <button class="btn"></button>
$('button').click(() => {
    $('.slide').slideDown(4000)
})

// 5)
// Создайте эффект слайдера используя slideUp для тега div при нажатии на тег button и установите время анимации на 5s
// <div class="slide"></div>
// <button class="btn"></button>
$('button').click(() => {
    $('.slide').slideUp(5000)
})

// 6)
// Создайте эффект слайдера используя slideToggle для тега div при нажатии на тег button и установите время анимации на 6s
// <div class="slide"></div>
// <button class="btn"></button>
$('button').click(() => {
    $('.slide').slideToggle(6000)
})

// 7)
// Создайте эффект слайдера используя slideUp для тега div при нажатии на тег button, установите время анимации на 5s и в конце анимации выведите в alert сообщение "Вверх"
// <div class="slide"></div>
// <button class="btn"></button>
$('button').click(() => {
    $('.slide').slideUp(5000, function(){
        alert('Up')
    })
})

// 8)
// Создайте эффект слайдера используя slideDown для тега div при нажатии на тег button, установите время анимации на 5s и в конце анимации выведите в alert сообщение "Вниз"
// <div class="slide"></div>
// <button class="btn"></button>
$('button').click(() => {
    $('.slide').slideDown(5000, function(){
        alert('Down')
    })
})

// 9)
// Создайте эффект слайдера используя slideToggle для тега div при нажатии на тег button, установите время анимации на 5s и в конце анимации выведите в alert сообщение "Движение"
// <div class="slide"></div>
// <button class="btn"></button>
$('button').click(() => {
    $('.slide').slideToggle(5000, function(){
        alert('Move')
    })
})

// 10)
// Создайте эффект движения в лево для тега div, при нажатии на button с помощью метода animate
// <div class="slide"></div>
// <button class="btn"></button>
{/* <style>
    .slide{
        position: fixed;
        left: 200px;
    }
</style> */}
$('button').click(() => {
    $('.slide').animate(2000, {
        left: 0
    })
})

// 11)
// Создайте эффект увеличения высоты и ширины для тега div, при нажатии на button с помощью метода animate
// <div class="slide"></div>
// <button class="btn"></button>
$('button').click(() => {
    $('.slide').animate(2000, {
        width: '+=100px',
        height: '+=100px'
    })
})

// 12)
// Для чего используется метод .stop()?
//Чтобы остановить анимацию(-и).

// 13)
// Какие 2 параметра принимает в себя .stop() метод?
//boolean, boolean

// 14)
// Для чего мы используем метод .css({})?
//Для того чтобы задавать стили элементам.

// 15)
// Является ли скрипт ниже ошибочным?
$("#p1").css("color", "red").slideUp(2000).slideDown(2000)
//Нет.