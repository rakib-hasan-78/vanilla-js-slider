# Project: Slider 
 
This project is a simple slider implemented using `HTML`, `CSS`, and `JavaScript`. It allows users to navigate through different slides containing images and text.   
## Table of Contents :   
1. **[Key Features](##Key-Features)**
1. **[Project Overview](##Project-Overview)**
1. **[Technologies Used](##Technologies-Used)**
1. **[Project Structure](##Project-Structure)**  
1. **[Installation](##Installation)**  
1. **[Usage](##Usage)**  
1. **[Contributing](##Contributing)**  
1. **[License](##License)**  
 ## Project Overview :   

The Slider project consists of HTML files defining the structure of the slider, CSS files for styling, and JavaScript files for slider functionality. It utilizes Font Awesome for icons and Google Fonts for typography.   

--- 
## Key Features :  

- **Sliders' Status:** Slides containing images and text. 
- **Navigation Button:** Navigation buttons to move to the next or previous slide.
- **Auto Slider:** Automatic slide transition after a certain interval.
- **Font Awesome :** using this API to get icons.      



## Technologies Used :  
---   
- HTML5: `<html>` HTML (Hypertext Markup Language) forms the structure of the web pages, defining the layout and content elements.
- CSS3 : `<css>` CSS (Cascading Style Sheets) is employed for styling, enhancing the visual presentation and aesthetics of the application.
- JavaScript (ES6) : `<javascript>` JavaScript for dynamic functionality, enabling features such as sliders, animations, and interactive elements. JavaScript enhances user interaction, providing a seamless and responsive browsing experience.

- Font Awesome : `<Font Awesome>` Font Awesome for icons.
- Google Fonts : `<Google Fonts>` Google Fonts for typography, to enrich the visual design and user interface of the application.

## Project Structure :  
---   
The project follows a structured organization to maintain clarity and ease of navigation. The main files and directories include:  
- **index.html :** This file serves as the entry point of the web application and defines the overall structure of the user interface. It includes sections for sliders, content display, and navigation elements.  
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Meta tags and title -->
</head>
<body>
    <!-- Content sections and JavaScript inclusion -->
</body>
</html>

```   
- **style.css :**  The main JavaScript file that handles DOM manipulation, event handling, and imports other modules.   
```css
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');

*{
  
}
html{
    height: 100vh;
}
img{

}
body{

}
.slider-section {

}
.container {

}
.container .sliders {

}
.container .sliders.active{

}
.container .sliders::before{

}
main {

}
.slide-contents {

}
.contents {

}
.contents button {

}
.contents button:hover{

}

.single-content h2 {

}
.single-content p {

}

.image-content {

}
.single-image {

.single-image img {

}

.handlers {

}   
.handlers .next{

}


@keyframes wave {
    0% {

    }
    50% {

    }
    100% {

    }
}
@keyframes fadeToSolid {
    0% {

    }
    100% {

    }
}
@keyframes slideContent {
    0% {

    }
}
@keyframes slideImage {
    0% {

    }
}

@keyframes slideBtn {
    0% {

}
}

```
- **slider.js :** This JavaScript file handles the dynamic behavior of the sliders on the web page. It includes functions to control the transition between slider images and implement automatic sliding functionality.   
```js
let sliders = document.querySelectorAll(`.sliders`);
let index = 0;
let next = document.getElementById(`next`);
let previous = document.getElementById(`previous`);

next.addEventListener('click', ()=>{

});

previous.addEventListener('click', ()=>{

});

setInterval(()=>{

},5000);

```
- **Assets Directory:** This directory stores additional resources used in the project, such as images, fonts, and icons. It helps organize and manage multimedia content effectively.
```assets directory 
 /assets
    /images
    /fonts
    /icons

```
---   
## Installation:     
To run the Slider project locally, follow these steps:
 1. Clone the repository to your local machine:   
```git 
git clone https://github.com/your-username/slider-project.git

```
2. Navigate to the project directory:   
```git
cd slider-project

```
3. Open the `<index.html>` file in your web browser.   
---      
## Usage:   
Once the project is set up, you can use the slider as follows:   
1. Click the "Next" button (`>` icon) to move to the next slide.
1. Click the "Previous" button (`<` icon) to move to the previous slide.   
1. The slides will also transition automatically after a certain interval.   

## Contributing :   
Contributions are welcome! Feel free to submit bug reports, feature requests, or pull requests to help improve the functionality and usability of the application. Although it is a ***Mini-Project*** ! Please read the issue list before posting a PR.    

1. Fork the repository.
1. Create a new branch `git checkout -b feature-new-feature`.
1. Make your changes.
1. Commit your changes `git commit -am 'Add new feature'`.
1. Push to the branch `git push origin feature-new-feature`.
1. Create a new Pull Request.

## License
This project is licensed under the `Mozilla Public License Version 2.0 (MPL-2.0)`. The MPL-2.0 is a permissive open-source license that allows you to use, modify, and distribute the code as long as any changes made to the original codebase are clearly documented and distributed under the same license terms. It provides a balance between ensuring software freedom and allowing for commercial use and proprietary modifications. For detailed information about the MPL-2.0 license terms and conditions, please refer to the [LICENSE](LICENSE)   file included in the project repository.  

