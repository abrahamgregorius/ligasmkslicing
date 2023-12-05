const navToggle = document.getElementById('nav-toggle')
const navRight = document.getElementById('nav-right')
const lessonItem1 = document.getElementById('lesson-head-1')
const lessonItem2 = document.getElementById('lesson-head-2')
const lessonItem3 = document.getElementById('lesson-head-3')
const lessonItem4 = document.getElementById('lesson-head-4')
const lessonItem5 = document.getElementById('lesson-head-5')

const lessonHead1 = document.getElementById('label-1')
const lessonHead2 = document.getElementById('label-2')
const lessonHead3 = document.getElementById('label-3')
const lessonHead4 = document.getElementById('label-4')
const lessonHead5 = document.getElementById('label-5')


navToggle.addEventListener('click', () => {
    navRight.classList.toggle('show')
})

lessonHead1.addEventListener('click', () => {
    console.log('hello world')
    lessonItem1.classList.toggle('active')
})
lessonHead2.addEventListener('click', () => {
    lessonItem2.classList.toggle('active')
})
lessonHead3.addEventListener('click', () => {
    lessonItem3.classList.toggle('active')
})
lessonHead4.addEventListener('click', () => {
    lessonItem4.classList.toggle('active')
})
lessonHead5.addEventListener('click', () => {
    lessonItem5.classList.toggle('active')
})