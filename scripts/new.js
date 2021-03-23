var spawn = require('child_process').exec

hexo.on('new', function(data){
  spawn('start  "D:\Markdown编辑器\Typora\Typora.exe" ' + data.path)
})