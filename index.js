window.addEventListener('scroll',reveal);

let pos = 0;
let pos2 = 0;
var greet = "Hi!! I am Ruthvik";
var greet2 = "A person can't learn anything, if the curiosity doesn't sparkle in the their heart!";
let counter = 0;

let title = ["Personal Portfolio","Predict the Numeral","Simple Calculator","NARAG"];
let links = ["https://ruthvikruth.github.io/RuthvikPortfolio.github.io/","https://ruthvikruth.github.io/PredictTheNumeral.github.io/","https://ruthvikruth.github.io/Simple-Calculator/","Yet to Upload"];
let description = ["This is my personal portfolio site. It is a simple website that showcases information about me like my education, skill-sets, social media links, work experience and contact information.",'A number guessing game that involves the computer randomly generating a number within a certain range and the player will try to guess the number through the question and hints.','A basic software that performs simple arithmetic calculations such as addition, subtraction, multiplication, and division. Can be used for quick calculations and can be in everyday life.',"NARAG - Number Analysis, Report and Audit Generator. A java project that provides an analysis of a number. It also keeps track of the analysis of a number and stores it in a file."];

function image_next()
{
    if(counter < 3)
        counter++;
    changer();
}

function image_prev()
{
    if(counter > 0)
        counter--;
    changer();
}

function changer()
{
    let x = document.getElementById("project-title");
    let y = document.getElementById("project-desc");
    let z = document.getElementById("project-URL");
    let a = document.getElementById("link-copy");

    if(counter == 0)
        document.getElementById("leftbutton").style.visibility = 'hidden';
    else if(counter == 3)
        document.getElementById("rightbutton").style.visibility = 'hidden';
    else
    {
        document.getElementById("rightbutton").style.visibility = 'visible';
        document.getElementById("leftbutton").style.visibility = 'visible';
    }

    a.innerHTML = "";
    x.innerHTML = title[counter];
    y.innerHTML = description[counter];
    z.href = links[counter];
}

function PortfolioLink()
{
    navigator.clipboard.writeText(links[counter]);
    let x = document.getElementById("link-copy");
    x.innerHTML = "&ensp;&#10003; Link Copied";
}

let counter_school = 0, counter_college = 0;

function education_dropdown(main_id)
{
    let id = document.getElementById(main_id);
    if(main_id == "schooling-edu")
    {
        let x = document.getElementById("dropdown1");
        if(counter_school == 1)
        {
            counter_school --;
            x.classList.add("rotate");
            id.classList.add("hidedescription");
        }
        else
        {
            x.classList.remove("rotate");
            id.classList.remove("hidedescription");
            counter_school ++;
        }
    }
    else
    {
        let x = document.getElementById("dropdown2");
        if(counter_college == 1)
        {
            counter_college --;
            x.classList.add("rotate");
            id.classList.add("hidedescription");
        }
        else
        {
            x.classList.remove("rotate");
            id.classList.remove("hidedescription");
            counter_college ++;
        }
    }
}

function toggle(id)
{
    if(id === "softSkills")
    {
        let y = document.getElementById("soft-underscore");
        let z = document.getElementById("tech-underscore");

        y.style.width = "140px";
        z.style.width = 0;
    }
    else
    {
        let z = document.getElementById("soft-underscore");
        let y = document.getElementById("tech-underscore");

        y.style.width = "135px";
        z.style.width = 0;
    }
    let x = document.getElementById(id);
    let classes = document.getElementsByClassName("skills-display");
    for(let i = 0 ; i < classes.length ; i++)
    {
        classes[i].classList.add("inactive-skills");
        classes[i].classList.remove("active-skills");
    }
    x.classList.remove("inactive-skills");
    x.classList.add("active");
}

function reveal()
{
    var reveals = document.querySelectorAll('.non-active');

    for(let i = 0 ; i < reveals.length ; i++)
    {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint)
        {
            reveals[i].classList.add("active");
        }
        else
        {
            reveals[i].classList.remove("active");
        }
    }
}