# TaiwanEX (臺灣制縣)

This repository is motivated by a public game "[Japanex](https://zhung.com.tw/japanex/)" and implement a version with Taiwan's map.

---
## Description

This repository, "TaiwanEX (臺灣制縣)", is going to implement a Taiwan's version of the classic game "[Japanex](https://zhung.com.tw/japanex/)". with React. To visualize the map, I use the TopoJSON (`.json`) with D3.js to render the Taiwan's map.

---
## Execution

> **NOTICE:** Make sure you have already installed *Node.js* on your machine!

1. Clone this repository and change your directory to this repository
    ```bash
    $ git clone https://github.com/yungshenglu/TaiwanEX && cd TaiwanEX
    ```
2. Run on your local machine
    1. Install all necessary packages from NPM
        ```bash
        # Make sure your current directory is "./TaiwanEX/"
        $ npm install
        ```
    2. Build with Webpack
        ```bash
        $ npm run build
        ```
    3. Run
        ```bash
        $ npm run start
        ```
3. Deploy on your GitHub pages
    ```bash
    $ npm run predeploy
    $ npm run deploy
    ```

---
## DEMO

Please visited our demo [here](https://yungshenglu.github.io/TaiwanEX/#/).

---
## Contributor

> **NOTICE:** You can follow the contributing process [CONTRIBUTING.md](CONTRIBUTING.md) to join with me. I am very welcome any issue!

* [David Lu](https://github.com/yungshenglu)

---
## License

[GNU GENERAL PUBLIC LICENSE Version 3](LICENSE)