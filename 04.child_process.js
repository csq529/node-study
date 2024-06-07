// child_process 创建子进程

// Nodejs创建子进程共有7个API Sync同步API 不加是异步API
// spawn  执行命令
// exec   执行命令
// execFile   执行可执行文件
// fork   创建node子进程
// execSync 执行命令 同步执行
// execFileSync 执行可执行文件 同步执行
// spawnSync 执行命令 同步执行

const { exec, execSync, execFile, spawn, fork } = require('child_process');
// const path = require('node:path')

// exec 异步方法 回调函数 返回buffer 可以执行shell命令或者跟软件交互
// execSync 同步方法
// 获取node 版本号
// exec('node -v', (err, stdout, stderr) => {
//     if (err) {
//         return err
//     }
//     console.log(stdout.toString())
// })

// const nodeVersion = execSync('node -v') // buffer
// console.log(nodeVersion.toString())

// 打开谷歌浏览器 打开百度的无痕模式
// execSync("start chrome http://www.baidu.com --incognito")

// execFile 适合执行可执行文件，例如执行一个node脚本，或者shell文件，windows可以编写cmd脚本，posix，可以编写sh脚本
// execFile(path.resolve(process.cwd(), './bat.cmd'), null, (err, stdout) => {
//     console.log(stdout.toString())
// })

// spawn 用于执行一些实时获取的信息因为spawn返回的是流边执行边返回，exec是返回一个完整的buffer，buffer的大小是200k，如果超出会报错，而spawn是无上限的。
// const {stdout} = spawn('netstat',['-an'],{})

// //返回的数据用data事件接受
// stdout.on('data',(steram)=>{
//     console.log(steram.toString())
// })

// exec -> execFile -> spawn
// exec是底层通过execFile实现 execFile底层通过spawn实现

// fork 场景适合大量的计算，或者容易阻塞主进程操作的一些代码，就适合开发fork
const testProcess = fork('./test.js')
// testProcess.send('我是主进程')
testProcess.on('message',(msg)=>{
    console.log('接受子进程的参数', msg)
})
