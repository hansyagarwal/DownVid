const ytdl = require('ytdl-core')
const fs = require('fs')

const viddir = require('os').homedir();;
console.log(viddir)

const down = (url)=>{
    ytdl(url).pipe(fs.createWriteStream(viddir+/Downloads/+'vid.flv'))
    //youtubedl(url).pipe(fs.createWriteStream('myvid.mp4'))
}

module.exports = down