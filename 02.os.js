const os = require('node:os');
const {  exec } = require('node:child_process');

// 获取CPU的线程以及详细信息
// console.log(os.cpus())

// os.type() 在 Linux 上返回 'Linux'，在 macOS 上返回 'Darwin'，在 Windows 上返回 'Windows_NT'
// console.log(os.type())

// os.platform() 返回标识为其编译 Node.js 二进制文件的操作系统平台的字符串。 该值在编译时设置。 可能的值为 'aix'、'darwin'、'freebsd'、'linux'、'openbsd'、'sunos'、以及 'win32'
// console.log(os.platform())

// 返回操作系统的版本例如10.xxxx win10
// console.log(os.release())

// os.homedir() 返回用户目录
// console.log(os.homedir())

// os.arch()返回cpu的架构 可能的值为 'arm'、'arm64'、'ia32'、'mips'、'mipsel'、'ppc'、'ppc64'、's390'、's390x'、以及 'x64'
// console.log(os.arch())


// 获取网络信息
// console.log(os.networkInterfaces())

// 案例 实现open: true

function openBrowser(url) {
    if (os.platform() === 'darwin') {  // macOS
      exec(`open ${url}`); //执行shell脚本
    } else if (os.platform() === 'win32') {  // Windows
      exec(`start ${url}`); //执行shell脚本
    } else {  // Linux, Unix-like
      exec(`xdg-open ${url}`); //执行shell脚本
    }
  }
  
  // Example usage
  openBrowser('https://www.juejin.cn');