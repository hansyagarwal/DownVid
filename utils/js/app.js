console.log("app.js is working!")

const down = document.querySelector('form')
const search = document.querySelector('input')
const img = document.querySelector('img')

down.addEventListener('submit',(e)=>{
    e.preventDefault()
    const url = search.value;
    const vidId = url.match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/).pop()
    img.src = "//img.youtube.com/vi/"+vidId+"/0.jpg"

    console.log(vidId)
})