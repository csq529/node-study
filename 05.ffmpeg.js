const {execSync} = require('child_process')

// 把mp4转成gif
// execSync(`ffmpeg -i tutu.mp4 tutu.gif`,{stdio:'inherit'})

// 添加水印
// execSync('ffmpeg -i tutu.mp4 -vf drawtext=text="涂涂的美好时光":fontsize=50:fontcolor=blue:x=50:y=50 tutu01.mp4',{stdio:'inherit'})

// 截取视频 -ss 起始时间 -to 结束时间
// execSync('ffmpeg -i tutu.mp4 -ss 00:00:05 -to 00:00:08 tutu02.mp4',{stdio:'inherit'})

// 提取视频的音频
// execSync('ffmpeg -i tutu.mp4 tutu.mp3',{stdio:'inherit'})

// 去掉水印
// execSync('ffmpeg -i tutu03.mp4 -vf delogo=w=220:h=30:x=50:y=50 tutu05.mp4',{stdio:'inherit'})