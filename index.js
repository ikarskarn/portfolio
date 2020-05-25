//add switch mode
//add cursor
//quiz app code: https://github.com/ikarskarn/quizApp
//quiz app: https://ikarskarn.github.io/quizApp/
'use strict'

//control question data (intentionally global)
const STORE = [
    {state: "casual", primaryFont: "", secondaryFont: "", dark: "", light: "", shade: "", bio: "", app: "", pic: ""},
    {state: "professional", primaryFont: "", secondaryFont: "", dark: "", light: "", shade: "", bio: "", app: "", pic: ""},
];
let state = 'professional';

function handleState() {
    console.log('handle state ran');
    handleClick();
    console.log('handlestate: ' + state);
    updatePage();
    handleButton();
}

function handleClick() {
    $('.switch-mode-button').on('click', event => {
        console.log('handleClicks: switch mode');
        state = (state === 'casual') ? 'professional' : 'casual';
        updatePage();
    });
}

function handleButton() {
    $('#js-portfolio-button').on('click', event => {
        event.preventDefault();
        $('html,body').animate({scrollTop: $('#portfolio-anchor').offset().top}, 'slow');
    });

    $('#js-aboutMe-button').on('click', event => {
        event.preventDefault();
        $('html,body').animate({scrollTop: $('#aboutMe-anchor').offset().top}, 'slow');
    });
    
    $('.port-app-3d #js-try-button').on('click', event => {
        event.preventDefault();
        window.open("https://ikarskarn.github.io/quizApp/", "_blank");
        console.log('try it button clicked');
    });
    $('.port-app-3d #js-check-button').on('click', event => {
        event.preventDefault();
        window.open("https://github.com/ikarskarn/quizApp", "_blank");
        console.log('check it out button clicked');
    });

    $('.port-app-covid #js-try-button').on('click', event => {
        event.preventDefault();
        window.open("https://ikarskarn.github.io/covid19_app/", "_blank");
        console.log('try it button clicked');
    });
    $('.port-app-covid #js-check-button').on('click', event => {
        event.preventDefault();
        window.open("https://github.com/ikarskarn/covid19_app.git", "_blank");
        console.log('check it out button clicked');
    });
}

function updatePage() {
    setText();
    setPicture();
    setColor();
    setFont();
}

function setFont() {
    if(state === 'professional') {
        $("h1, h2, h3").css({"font-family":"'Open Sans', sans-serif"});
        $("p, ul, .page-links, .port-buttons").css({"font-family":"'Roboto', sans-serif"});
        $(".bio-overview, .port-overview").css({"font-size":"18px","line-height":"28px"})
    } else {
        $("h1, h2, h3").css({"font-family":"'Permanent Marker', cursive"});
        $("p, ul, .page-links, .port-buttons").css({"font-family":"'Patrick Hand', cursive"});
        $(".bio-overview, .port-overview").css({"font-size":"22px","line-height":"30px"})
    }
}

function setText() {
    if(state === 'casual') {
        $(".js-current-mode").text("current: casual");
        
        $(".skill-list").html("<ul><li>Full Stack Engineer</li><li>Game Developer (and player)</li><li>Mobile Developer (and talker)</li><li>Coffee Enthusiast Theatre Nerd</li></ul>");
        
        $(".bio-overview").html("<p>I’ve always loved to bring joy to others through Theatre and Music. Working with others to put something exciting and entertaining out there for people to enjoy is a wonderful thing. I’m also a pretty logical person and really enjoy solving puzzles in creative, outside-the-box, ways. For over ten years now I have worked in the Game Development field as a C# Engineer, Designer, 3D Modeler, 3D Rigging Engineer, Mobile Programmer, Rendering Specialist, and Educator on some of the best teams you could ask for. In the past couple of years, I have found that my previous experiences have led me to pursue a career in Web Development. It really feels like a good fit. I am excited to meet new people and be a part of a new group of developers in the Web Development Industry. </p><p> I am stoked about this new chapter in my life.  I am a soon-to-be Graduate of the Engineering Flex Full Stack Bootcamp at Thinkful and have gained additional expertise in the valuable skills and tools to hit the ground running.  My time in the Game Design and Development industry gives me a leg up in incorporating Interactivity and Design principles that make people want to come back and visit the site again. Working with other developers in the game industry has been a great experience that has helped to shape me into a very collaborative and team oriented kind of person that can wear multiple hats on a small team or focus on a specific part of the process on a larger one. My background as an Educator in such a fast-paced technical field makes me a master problem solver and collaborator.  I’ve taught a lot of subjects from 3D Modeling and Animation to Mobile Programming and AI Concepts.  Understanding all the pieces of the puzzle gives me the foresight to expect the unexpected because I can see beyond the borders of my own work.</p><p>Simply put, I think this field is fun and innovative, and I want to live my life doing what I love while having fun doing it.  </p>");

        $(".port-app-3d .port-overview").html("<h3>3D Components Quiz App</h3><p>Like 3D modeling? The 3D Components Quiz App is an example of a minimalistic interactive quiz app built from the ground up.  Understanding the fundamental components of a 3D primitive is super important to becoming an efficient modeler.  This quiz will help you measure your knowledge of the components of 3D primitives before moving on to more advanced topics.  I’m a teacher, so I chose to develop this quiz app to give my students a more interactive way to learn key skills.  The app was built with semantic HTML and it’s totally accessible. I styled it with CSS, threw in a little interactivity with JavaScript and jQuery Libraries.<h3>Project Tech</h3><ul><li>HTML, CSS</li><li>JavaScript, jQuery</li><li>Photoshop</li><li>VS Code</li><li>GitHub</li><li>Muh Brain</li></ul>");

        $(".port-app-covid .port-overview").html("<h3>Covid-19 Data: Estimate the Risk API App</h3><p>This App shows off my skills with connecting to an external API to present external data in a useful way. I built the app from scratch. In a lot of states, people and companies alike are trying to get back to normal because some of the restrictions have begun to be lifted.  But there are a lot of people still worried about getting out there. This app is intended to estimate how many new cases to expect in the coming weeks for a user's state. As a board member of a local Community Theatre, a community college instructor, and as a father, I wanted to build this app to help people out and give them some peace of mind. I pulled statistical data from the COVID-19 Tracking Project API and tried to provide as much info as possible to encourage people to make smart choices in the coming weeks. I built it with semantic and a11y accessible HTML, styled it with CSS, and all the interaction is coded in JavaScript and jQuery Libraries.  The API data was pulled from the COVID-19 Tracking Project.</p><h3>Project Tech</h3><ul><li>HTML</li><li>CSS</li><li>JavaScript</li><li>jQuery</li><li>JSON</li><li>VS Code</li><li>GitHub</li><li>D3 Graphs</li></ul>");
    } else {
        $(".js-current-mode").text("current: professional");
        
        $(".skill-list").html("<ul><li>Full Stack</li><li>Game Development</li><li>Mobile Development</li><li>Game Design Instruction</li></ul>");
        
        $(".bio-overview").html("<p>For more than twenty years, I have been very passionate about getting involved in creative endeavors, such as Theatre and Music, that bring joy to others.  Collaborating with others to create something exciting and entertaining is extremely satisfying. Over the course of my entire life, I have enjoyed finding creative and logical solutions to problems.  For the past ten years I have worked in the creative field of Game Development as a C# Engineer, Designer, 3D Modeler, 3D Rigging Engineer, Mobile Programmer, Rendering Specialist, and Educator with some of the best developers and educators around.  And finally, In the past couple of years, I have found that my passion for bringing joy to others, my creativity, and problem-solving skills fit well into the Web Development Industry. I look forward to meeting new people and being a part of a new group of developers in the Web Development Industry.</p><p>I am a soon-to-be Graduate of the Engineering Flex Full Stack Bootcamp at Thinkful and have learned valuable tools and resources to help me make the transition to Web Development.  My experience in Game Design and Development provides me with a unique perspective on Interactivity and Design principles that encourage engagement and increase interest while maintaining an elegant functionality and responsiveness of content. Collaborating with other developers in the game industry has been a significant influence on my career that has helped to shape me into a very collaborative and team-oriented individual that can perform multiple roles in a small group or specialize in a specific area on a larger team. My background as an Educator makes me a master problem solver and collaborator on fast paced, highly technical projects.  My knowledge in a wide range of subjects provides me with insight into other pieces of the puzzle, which allows me the opportunity to anticipate future issues and considerations for the design and/or functionality of a project. </p>");
        
        $(".port-app-3d .port-overview").html("<h3>3D Components Quiz Application</h3><p>The 3D Components Quiz Application is an example of a minimalistic interactive quiz application built from the ground up. Understanding the fundamental components of a 3D primitive is absolutely imperative to becoming an efficient modeler.  The 3D Components Quiz will help you measure your knowledge of the components of 3D primitives to ensure you are ready to move on to more advanced topics. As an Educator, I chose to develop this quiz app to improve the experience for my own students. It is built with semantic and a11y accessible HTML, styled with CSS, and interaction is coded in JavaScript and jQuery Libraries.</p><h3>Project Tech</h3><ul><li>HTML</li><li>CSS</li><li>JavaScript</li><li>jQuery</li><li>Photoshop</li><li>VS Code</li><li>GitHub</li></ul>");

        $(".port-app-covid .port-overview").html("<h3>Covid-19 Data: Estimate the Risk API Application</h3><p>The Covid-19 API App is an example of connecting to an external API to gather data and present in a practical and interesting way. This app was built entirely from the ground up.  In many states, restrictions on businesses and individuals due to the Covid-19 pandemic have begun to be lifted.  However, many individuals are still concerned about their return to normal behavior. The purpose of this application is provide an estimate of what to expect in the coming weeks regarding new cases in the user's states.  As a board member of a local Community Theatre, a community college instructor, and as a father, I chose to develop this app to help others in this trying time. With the help of statistical data from the COVID-19 Tracking Project, I have tried to provide as much information as possible to encourage people to make educated decisions moving forward. It is built with semantic and a11y accessible HTML, styled with CSS, and interaction is coded in JavaScript and jQuery Libraries.  The API data was pulled from the COVID-19 Tracking Project.</p><h3>Project Tech</h3><ul><li>HTML</li><li>CSS</li><li>JavaScript</li><li>jQuery</li><li>JSON</li><li>VS Code</li><li>GitHub</li><li>D3 Graphs</li></ul>");

    }
}

function setPicture() {
    if(state === 'professional') {
        $(".profile-photo").attr("src","images/profProfilePic.png");
    } else {
        $(".profile-photo").attr("src","images/creativePic_Temp.png");
    }
}

function setColor() {
    if(state === 'casual') {
        $(".top-header").css({"background-color":"#29ABE2","border-top":"2px solid #062C44","border-bottom":"2px solid #062C44"});
        $(".header-center").css({"color":"#062C44"});
        $(".js-current-mode").css({"color":"black"});
        $(".switch-mode-button").css({"background-color":"#062C44","color":"white"});
        $(".hero").css({"background-color":"white"});
        $(".profile-photo").css({"border":"5px solid #062C44"});
        $(".page-links").css({"background-color":"#27AEE6","border-top":"2px solid #062C44","border-bottom":"2px solid #062C44"});
        $(".portfolio-link").css({"background-color":"#062C44","color":"white"});
        $(".aboutMe-link").css({"background-color":"white"});
        $("#about-me-header").css({"border-bottom":"2px solid #062C44","border-top":"2px solid #062C44","background-color":"white"});
        $(".bio-overview").css({"border-bottom":"2px solid #062C44"});
        $(".port-overview").css({"border-bottom":"2px solid #062C44"});
        $(".port-app-3d").css({"background-color":"#062C44","color":"lightgrey","border-top":"#27AEE6 solid 2px","border-bottom":"white solid 2px"});
        $(".port-app-covid").css({"background-color":"lightgrey","color":"#062C44","border-top":"#062C44 solid 2px","border-bottom":"black solid 2px"});
        $("#applications-header-3d").css({"border-bottom":"2px solid #27AEE6","border-top":"2px solid #27AEE6","background-color":"#062C44"});
        $("#applications-header-covid").css({"border-bottom":"2px solid #062C44","border-top":"2px solid #062C44", "background-color":"white"});
        $(".port-images img").css({"box-shadow":"2px 2px #27AEE6"});
        $(".port-buttons button").css({"color":"#062C44"});
        $(".try-it-3d").css({"background-color":"#27AEE6"});
        $(".check-it-out-3d").css({"background-color":"white"});
        $(".try-it-covid").css({"background-color":"#062C44", "color":"white"});
        $(".check-it-out-covid").css({"background-color":"white", "color":"#062C44"});
        $("footer").css({"background-color":"#27AEE6","border-bottom":"2px solid #062C44"});
        $("footer a:link").css({"color":"darkblue"});
    } else {
        $(".top-header").css({"background-color":"#062C44","border-top":"2px solid #29ABE2","border-bottom":"2px solid #29ABE2"});
        $(".header-center").css({"color":"white"});
        $(".js-current-mode").css({"color":"white"});
        $(".switch-mode-button").css({"background-color":"#29ABE2","color":"black"});
        $(".hero").css({"background-color":"lightGrey"});
        $(".profile-photo").css({"border":"5px solid #29ABE2"});
        $(".page-links").css({"background-color":"#062C44","border-top":"2px solid #29ABE2","border-bottom":"2px solid #29ABE2"});
        $(".portfolio-link").css({"background-color":"#29ABE2","color":"black"});
        $(".aboutMe-link").css({"background-color":"white"});
        $("#about-me-header").css({"border-bottom":"2px solid #062C44","border-top":"2px solid #062C44", "background-color":"lightgrey"});
        $(".bio-overview").css({"border-bottom":"2px solid #062C44"});
        $(".port-overview").css({"border-bottom":"2px solid #062C44"});
        $(".port-app-3d").css({"background-color":"lightgrey","color":"#062C44","border-top":"#062C44 solid 2px","border-bottom":"black solid 2px"});
        $(".port-app-covid").css({"background-color":"#062C44","color":"lightgrey","border-top":"#27AEE6 solid 2px","border-bottom":"white solid 2px"});
        $("#applications-header-3d").css({"border-bottom":"2px solid #062C44","border-top":"2px solid #062C44", "background-color":"white"});
        $("#applications-header-covid").css({"border-bottom":"2px solid #27AEE6","border-top":"2px solid #27AEE6","background-color":"#062C44"});
        $(".port-images img").css({"box-shadow":"2px 2px #062C44"});
        $(".port-buttons button").css({"color":"#29ABE2"});
        $(".try-it-3d").css({"background-color":"#062C44", "color":"white"});
        $(".check-it-out-3d").css({"background-color":"white", "color":"#062C44"});
        $(".try-it-covid").css({"background-color":"#27AEE6", "color":"#062C44"});
        $(".check-it-out-covid").css({"background-color":"white", "color":"#062C44"});
        $("footer").css({"background-color":"#062C44", "color":"white"});
        $("footer a:link").css({"color":"lightblue"});
        $("footer a:visited").css({"color":"lightcoral"});
    }
}

$(handleState);