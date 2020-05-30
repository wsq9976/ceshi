const ejs = require('ejs');

let res =  ejs.render(`<h1><%=title%></h1><h2><%=title2%></h2>`,{title:'歌曲列表',title2: '热门榜单'});

console.log(res);