# Simona's personal website'

A personal website for Simona Cholakova

## Prerequisites

You should have node and npm installed in your machine. I assume you can run the application somehow (Chrome, Firefox, etc.).

## Preparations

### Installing required tools

npm install -g bower yo gulp generator-mobileangularui
sudo npm install -g phonegap

### Scaffold the project

phonegap create SimonsPW
cd SimonsPW
yo mobileangularui

### The project structure

src
├── html
│   └── index.html
├── images
├── js
│   ├── app.js
│   ├── controllers
│   │   └── main_controller.js
│   ├── directives
│   └── services
├── less
│   ├── app.less
│   ├── mixins.less
│   ├── responsive.less
│   └── variables.less
└── templates
    ├── home.html
    └── sidebar.html

### Gulpfile and build process
Before to start hacking the scaffolded sources you may wish to know what happens when you run: gulp build. Well this is an explanation of what it does:

1. Clean www folder for *.html, fonts, js, css, images (that's why you should not code there). config.xml from Cordova is preserved.
2. Copy html files from src/html folder to www root
3. Copy vendor fonts to www/fonts
4. Minify and copy images from src/images to www/images
5. Compile and minify app.less and responsive.less. For app.less it also strips any responsive media query that wont match a screen of 0px and strip the :hover selectors (saved in a separate file), this will let you code for mobile only in app.less and support responsiveness elsewhere. This also allow to mobilize 3rd party stylesheets that are designed to be responsive and target non-touch devices too.
6. Concat vendor js (including angular and default deps), src/js/**/*.js (automatically sorted according to angular dependency) and minify to www/js/app.min.js using a source map to help debugging.
