// Inspired by: https://dribbble.com/shots/3545421-017-Email-receipt

function $(e) { return document.querySelector(e); }

var next = $('.next');
var prev = $('.prev');
var index = 0;

var randomText = [
  {
    title: "Microsoft Stack (.Net, C#, Azure, PowerShell)",
    desc: "I have over one and half of experience in .Net Core(including .Net 3 & .Net 5). I have created microservices using Azure Function. Build script to create automation task using PowerShell.",
    listitems: [
      "Worked in the backend to create and maintain process. Created ETL process by using Azure Data Factory and Azure Logic Apps.",
      "Worked as Full Stack Development. Developed web apps using .Net 5, Entity Framework, App Service, and bootstrap."
    ],
    textcolor: "#ff885d"
  },
  {
    title: "Java & Android Development",
    desc: "Developed API using Spring Boot framework and Java in intelliJ. Developed android application using Java which includes Rest APIs, Androidx Jetpack using Android Studio.",
    listitems: [
      "Used Paging 3.1 in AndroidX",
      "Integrated Twilio for Messaging in Android Application",
      "Created Rest API in java by using Spring Boot framework."
    ],
    textcolor: "#acd8aa"
  },
  {
    title: "Python, SQL, NoSQL, JSON and Data Science",
    desc: "I have managed SQL and development models and schema objects using relational databases and non relational databases. I used python scripts to run automation test using Selenium.",
    listitems: [
      "Designed ETL to develop jobs for extracting, cleaning, transforming and loading data",
      "Using Pandas and Numpy to analyst dataset with DataFrames.",
      "Created complex SQL querys and stored procedures",
      "Created scripts to test various kinds of applications."
    ],
    textcolor: "#94b9af"
  },
  {
    title: "HTML, CSS, JavaScript, Wordpress, Bootstrap",
    desc: "Worked on the frontend to design UI using HTML and CSS. Used angular to design forms and web pages in .Net 5. Used CSS framework like bootstrap, Matrial-UI for frontend designs.",
    listitems: [
      "Designed web apps using Bootstrap framework on the frontend using .Net.",
      "Created mobile apps using JavaScript."
    ],
    textcolor: "#06d6a0"
  }
];

$('.content__title').innerHTML = randomText[0].title;
$('.content__desc').innerHTML = randomText[0].desc;
$(".content__title").style.color = randomText[0].textcolor;
$(".header_title").style.color = randomText[0].textcolor;
$(".divider").style.backgroundColor = randomText[0].textcolor;
$(".divider1").style.backgroundColor = randomText[0].textcolor;
let tiles = document.getElementsByClassName("tile");
for (let g = 0; g < tiles.length; g++) {
  tiles[g].style.backgroundColor = randomText[0].textcolor;
}
const ullist = $('#itemslist');
let str = '<ul>';
for (let i = 0; i < randomText[0].listitems.length; i++) {
  str += "<li>" + randomText[0].listitems[i] + "</li>";
}
ullist.innerHTML = str + "</ul>";

next.addEventListener('click', function () {
  if (index >= 0 && index <= 2) {
    toggleView();
    setTimeout(function () {
      SetContentInfo(index);
    }, 500)
    $('main').classList.remove('view' + index + '--active');
    $('main').classList.add('view' + (index + 1) + '--active');
    index++;
  }
}, false);

prev.addEventListener('click', function () {
  if (index > 0 && index <= 3) {
    toggleView();
    setTimeout(function () {
      SetContentInfo(index);
    }, 500)
    $('main').classList.remove('view' + (index) + '--active');
    $('main').classList.add('view' + (index - 1) + '--active');
    index--;
  }
}, false)

function toggleView() {
  $('main').classList.add('fade-out');
  setTimeout(function () {
    $('main').classList.remove('fade-out');
  }, 500)
}

function SetContentInfo(index) {
  let randomTextitem = randomText[index];
  $('.content__title').innerHTML = randomTextitem.title;
  $('.content__desc').innerHTML = randomTextitem.desc;
  $(".content__title").style.color = randomTextitem.textcolor;
  $(".header_title").style.color = randomTextitem.textcolor;
  $(".divider").style.backgroundColor = randomTextitem.textcolor;
  $(".divider1").style.backgroundColor = randomTextitem.textcolor;
  const ullist = $('#itemslist');
  let str = '<ul>';
  for (let i = 0; i < randomTextitem.listitems.length; i++) {
    str += "<li>" + randomTextitem.listitems[i] + "</li>";
  }
  ullist.innerHTML = str + "</ul>";
  let tiles = document.getElementsByClassName("tile");
  for (let g = 0; g < tiles.length; g++) {
    tiles[g].style.backgroundColor = randomText[index].textcolor;
  }
}

