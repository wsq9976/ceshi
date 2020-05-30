const express = require('express');

const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/songs', (request,response) => {

    const songsData = require('./songs.json');

    let tableStr = '<table border="1"><tr><td>歌曲名</td><td>歌手</td></tr>'

    for(let i = 0;i<songsData.songlist.length;i++){
       tableStr += `<tr><td>${songsData.songlist[i].data.albumname}</td><td>${songsData.songlist[i].data.singer[0].name}</td></tr>`
    }
    tableStr += '</table>'
    // console.log(songData);
    console.log(tableStr);
    response.send(tableStr)
})

app.listen(8000,() => {
    console.log('running......');
})