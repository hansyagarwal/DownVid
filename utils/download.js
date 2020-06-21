const ytdl = require('ytdl-core')
const fs = require('fs')

const down = (url)=>{
    ytdl(url).pipe(fs.createWriteStream('Downloads/video.flv'))
}

module.exports = down