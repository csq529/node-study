// process 是Nodejs操作当前进程和控制当前进程的API，并且是挂载到globalThis下面的全局API

// 返回当前的工作目录
// console.log(process.cwd())

// 返回操作系统 CPU 架构 作用和 os.arch 一样
// console.log(process.arch)

//  process.argv 获取执行进程后面的参数 返回是一个数组
// console.log( process.argv)

// console.log(process.memoryUsage)

// process.exit() 将强制进程尽快退出，即使仍有未完全完成的异步操作挂起
// setTimeout(() => {
//     console.log(1)
// }, 5000)
// setTimeout(() => {
//     process.exit()
// }, 2000)

// process.on('exit', () => {
//     console.log('进程退出了')
// })

// process.kill 与exit类似，kill用来杀死一个进程，接受一个参数进程id可以通过process.pid 获取
// setTimeout(() => {
//     console.log(1)
// }, 5000)
// setTimeout(() => {
//     process.kill(process.pid)
// }, 2000)

// process.env 用于读取操作系统所有的环境变量，也可以修改和查询环境变量。 修改 注意修改并不会真正影响操作系统的变量，而是只在当前线程生效，线程结束便释放。
console.log(process.env)
