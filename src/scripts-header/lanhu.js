// vue prod版本疑似TransitionGroup动画失效 先关闭
module.exports = isProd =>
`// ==UserScript==
// @name         蓝湖 lanhu
// @version      1.8.0
// @description  自动填充填写过的产品密码(不是蓝湖账户)；查看打开过的项目；查看产品页面窗口改变后帮助侧边栏更新高度
// @author       sakura-flutter
// @namespace    https://github.com/sakura-flutter/tampermonkey-scripts/commits/master/src/scripts/lanhu
// @license      GPL-3.0
// @compatible   chrome >= Latest
// @compatible   firefox >= Latest
// @noframes
// @match        https://lanhuapp.com/web/
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_addValueChangeListener
// @grant        GM_addStyle
// @grant        GM_setClipboard
// @require      https://cdn.jsdelivr.net/npm/vue@3.0.2/dist/vue.runtime.global${isProd ? '' : ''}.js
// @require      https://greasyfork.org/scripts/411093-toast/code/Toast.js?version=862073
// ==/UserScript==
`