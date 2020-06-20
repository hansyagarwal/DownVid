console.log("app.js is working!")

const down = document.querySelector('form')
const search = document.querySelector('input')

down.addEventListener('submit',(e)=>{
    e.preventDefault()
    const url = search.value;

    console.log(url)
})