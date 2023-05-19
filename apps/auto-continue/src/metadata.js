const start = '// ==UserScript==';
const end = '// ==/UserScript==';

const base = `
// @name         ChatGPT Auto-Continue 🔄
// @description  ⚡ Automatically click the 'Continue Generating' button in ChatGPT!
// @author       mefengl
// @version      ${process.env.npm_package_version}
// @namespace    https://github.com/mefengl
// @icon         https://www.google.com/s2/favicons?sz=64&domain=openai.com
// @license      MIT
// @match        https://chat.openai.com/*
// @grant        none
`;

const i18n = `
// @name:en      ChatGPT Auto-Continue 🔄
// @description:en ⚡ Automatically click the 'Continue Generating' button in ChatGPT!
// @name:zh-CN   ChatGPT 自动继续 🔄
// @description:zh-CN ⚡ 自动点击ChatGPT中的“继续生成”按钮！
// @name:es      ChatGPT Auto-Continuar 🔄
// @description:es ⚡ ¡Haz clic automáticamente en el botón 'Continuar generando' en ChatGPT!
// @name:hi      ChatGPT स्वचालित जारी रखें 🔄
// @description:hi ⚡ ChatGPT में 'जारी रखने' बटन पर स्वचालित रूप से क्लिक करें!
// @name:ar      ChatGPT التكميل الآلي 🔄
// @description:ar ⚡ انقر تلقائيًا على زر 'متابعة التوليد' في ChatGPT!
// @name:pt      ChatGPT Auto-Continuar 🔄
// @description:pt ⚡ Clique automaticamente no botão 'Continuar Gerando' no ChatGPT!
// @name:ru      ChatGPT Авто-Продолжение 🔄
// @description:ru ⚡ Автоматически нажимайте на кнопку "Продолжить генерацию" в ChatGPT!
// @name:ja      ChatGPT 自動続行 🔄
// @description:ja ⚡ ChatGPTの「続けて生成」ボタンを自動的にクリックします！
// @name:de      ChatGPT Auto-Fortsetzen 🔄
// @description:de ⚡ Klicken Sie automatisch auf die Schaltfläche "Generierung fortsetzen" in ChatGPT!
// @name:fr      ChatGPT Auto-Continuer 🔄
// @description:fr ⚡ Cliquez automatiquement sur le bouton 'Continuer à générer' dans ChatGPT!
`;

const metadata = `${start}${base}${i18n}${end}`;

export default metadata;
