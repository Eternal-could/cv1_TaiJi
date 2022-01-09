// 获取元素
let htmlDiv = document.querySelector('#htmlDiv');
let style = document.querySelector('#style');
//页面上，展示在左侧的文字及样式
let string1 = `/*你好，这里是小雷的太极简历
  *接下来，我演示一下这个简历的流程
  *首先我需要一个div
  **/
  #div1 {
    border: 1px solid red;
    width: 200px;
    height: 200px;
  }
 /*接下来，我把它变成一个太极图
  *看好了
  *我先将它变成一个圆
  **/
  #div1 {
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border: none;
  }
/* 太极是阴阳形成的
 * 一黑一白
 **/
 #div1{
   background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
 }
 /*加入太阴，太阳*/
 #div1::before{
    width: 100px;
    height: 100px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #000;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width: 100px;
    height: 100px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);
}
`

// 寻找一个变量，来存储string1的值
let string2 = '';
// 定义一个初始值
let n = 0;
let step = () => {
    setTimeout(() => {
        // 其中，当文本存在于回车，空格等情况，如果存在空格就加上空格，如果存在回车那就加上 <br>
        if (string1[n] === '\n') {
            string2 += '<br>';
        } else if (string1[n] === ' ') {
            string2 += '&nbsp;';
        } else {
            string2 += string1[n];
        }

        htmlDiv.innerHTML = string2;
        // 把string1的内容添加至style内，出现css样式效果
        style.innerHTML = string1.substring(0,n);

        // 页面滚动条
        window.scrollTo(0, 99999);
        htmlDiv.scrollTo(0, 99999);
        // 没到最后，就继续执行
        if (n < string1.length - 1) {
            n += 1;
            step();
        }
    },50)
}
step()