# Chat-Octopus

[![AI Friendly](https://img.shields.io/badge/AI-Friendly-pink?style=for-the-badge)](https://github.com/mefengl/made-by-ai)
[![AI Assisted Maybe](https://img.shields.io/badge/AI%20Assisted-Maybe-yellow?style=for-the-badge)](https://github.com/mefengl/made-by-ai)
[![Commit Messages by AI](https://img.shields.io/badge/Commit%20Messages%20by-AI-green?style=for-the-badge)](https://github.com/mefengl/made-by-ai)

Chat-Octopus is a userscript that enables you to automatically send messages between multiple AI language models, such as OpenAI's ChatGPT, Google's Bard, Microsoft Bing, and even more.

## Features

- Automatically send messages between multiple AI language models (e.g., ChatGPT, Bard, Bing, etc.)
- Customizable script settings through the userscript manager's menu
- Synchronized message sending and receiving

## Installation

1. Install a userscript manager for your browser, such as [Tampermonkey](https://www.tampermonkey.net/) or [Greasemonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/).
2. Visit the [Chat-Octopus script page](https://greasyfork.org/scripts/462713-chat-octopus) on Greasy Fork.
3. Click the "Install this script" button.
4. Your userscript manager should recognize the script and prompt you to install it. Click "Install" to add the script to your userscript manager.

## Usage

After installing the script, visit the websites of the AI language models you'd like to connect (e.g., [ChatGPT](https://chat.openai.com/), [Bard](https://bard.google.com/), Bing, etc.). You can then type a prompt into one of the AI's input fields and send the message. The script will automatically relay the message to the other AI(s), allowing you to observe how the different language models interact with each other.

You can customize the script's settings through the userscript manager's menu by enabling or disabling specific features for each AI.

<!--
<iframe src="//player.bilibili.com/player.html?aid=484231810&bvid=BV18T411q7aU&cid=1073431117&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe<iframe src="//player.bilibili.com/player.html?aid=484231810&bvid=BV18T411q7aU&cid=1073431117&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="800" height="450"> </iframe>
-->
Video Demo: https://www.bilibili.com/video/BV18T411q7aU

## Adding Support for More AI Models

To add support for other AI models, you will need to modify the script and add the necessary configurations, such as URL patterns and DOM selectors, for each new AI model. The script is designed to be extensible, so you can easily add support for additional AI models.

## License

This project is licensed under the MIT License.

Respository link: [chat-playground/apps/octopus](https://github.com/mefengl/chat-playground)

Build code repository link: https://github.com/mefengl/chat-octopus (this repo only contains the built code for greasyfork to automatically update the script)