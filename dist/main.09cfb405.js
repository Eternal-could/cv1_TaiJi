// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"epB2":[function(require,module,exports) {
// 获取元素
var htmlDiv = document.querySelector('#htmlDiv');
var style = document.querySelector('#style');
//页面上，展示在左侧的文字及样式
var string1 = '/*\u4F60\u597D\uFF0C\u8FD9\u91CC\u662F\u5C0F\u96F7\u7684\u592A\u6781\u7B80\u5386\n  *\u63A5\u4E0B\u6765\uFF0C\u6211\u6F14\u793A\u4E00\u4E0B\u8FD9\u4E2A\u7B80\u5386\u7684\u6D41\u7A0B\n  *\u9996\u5148\u6211\u9700\u8981\u4E00\u4E2Adiv\n  **/\n  #div1 {\n    border: 1px solid red;\n    width: 200px;\n    height: 200px;\n  }\n /*\u63A5\u4E0B\u6765\uFF0C\u6211\u628A\u5B83\u53D8\u6210\u4E00\u4E2A\u592A\u6781\u56FE\n  *\u770B\u597D\u4E86\n  *\u6211\u5148\u5C06\u5B83\u53D8\u6210\u4E00\u4E2A\u5706\n  **/\n  #div1 {\n    border-radius: 50%;\n    box-shadow: 0 0 3px rgba(0,0,0,0.5);\n    border: none;\n  }\n/* \u592A\u6781\u662F\u9634\u9633\u5F62\u6210\u7684\n * \u4E00\u9ED1\u4E00\u767D\n **/\n #div1{\n   background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);\n }\n /*\u52A0\u5165\u592A\u9634\uFF0C\u592A\u9633*/\n #div1::before{\n    width: 100px;\n    height: 100px;\n    top: 0;\n    left: 50%;\n    transform: translateX(-50%);\n    background: #000;\n    border-radius: 50%;\n    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);\n}\n#div1::after{\n    width: 100px;\n    height: 100px;\n    bottom: 0;\n    left: 50%;\n    transform: translateX(-50%);\n    background: #fff;\n    border-radius: 50%;\n    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);\n}\n';

// 寻找一个变量，来存储string1的值
var string2 = '';
// 定义一个初始值
var n = 0;
var step = function step() {
    setTimeout(function () {
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
        style.innerHTML = string1.substring(0, n);

        // 页面滚动条
        window.scrollTo(0, 99999);
        htmlDiv.scrollTo(0, 99999);
        // 没到最后，就继续执行
        if (n < string1.length - 1) {
            n += 1;
            step();
        }
    }, 50);
};
step();
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.09cfb405.map