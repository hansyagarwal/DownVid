const ytdl = require('ytdl-core')
const fs = require('fs')

const down = (url)=>{
    ytdl(url).pipe(fs.createWriteStream('video.flv'))
}

module.exports = down