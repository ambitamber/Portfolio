
// Get the button that opens the modal
var boxes = document.getElementsByClassName("eachbox"),
    modal = document.getElementById("myModal"),
    closeModal = document.getElementsByClassName("close")[0];

Projects = [
    {
        title: "Newz Android App",
        imageURL: "/content/app_logo.png",
        descList: [
            "Used AndroidX",
            "Android Studio",
            "<a href='https://github.com/ambitamber/Newz' target='_blank'>Link to project</a>"
        ]
    },
    {
        title: "Build Rest API in .NET",
        imageURL: "/content/restapi.jpg",
        descList: [
            "Used .Net 5 and open API",
            "Used EF Core 5",
            "Created Data Layer Access",
            "Created in MVC Restful API",
            "<a href='https://github.com/ambitamber/TamberLabServices' target='_blank'>Link to project</a>"
        ]
    },
    {
        title: "Major Cities Python",
        imageURL: "/content/pythonproject.jpg",
        descList: [
            "Used Flask to create API",
            "Implemented Google API for images",
            "Web scraped using BeautifulSoup",
            "<a href='https://github.com/ambitamber/Major-Cites' target='_blank'>Link to project</a>"
        ]
    },
    {
        title: "eCommerce Websites",
        imageURL: "/content/wordpress.jpg",
        descList: [
            "Used Wix to desgin sites",
            "Used API to view on sites",
            "Created in WordPress",
            "Created sites for Restaurants"
        ]
    }
]

for (let i = 0; i < Projects.length; i++) {
    let div = document.createElement('div');
    div.classList.add('eachbox');
    var para = document.createElement("p");
    para.innerHTML = Projects[i].title;

    var imgCon = document.createElement("img");
    imgCon.src = Projects[i].imageURL;
    div.appendChild(imgCon);
    div.appendChild(para);
    $('.boxes').appendChild(div);
}

for (var i = 0; i < boxes.length; i++) {
    (function (index) {
        boxes[i].onclick = function () {
            // When the user clicks on the button, open the modal
            modal.style.display = "block";
            document.getElementById('projects_title').innerHTML = Projects[index].title;

            let projects_items = document.getElementById('projects_items');
            let create_desc = document.createElement('ui');
            create_desc.setAttribute('id', 'project_desc');


            for (let j = 0; j < Projects[index].descList.length; j++) {
                let li = document.createElement('li');
                li.innerHTML = Projects[index].descList[j];
                create_desc.appendChild(li);
            }
            projects_items.appendChild(create_desc);
        }
    })(i);
}

closeModal.onclick = function () {
    modal.style.display = "none";
    document.getElementById('project_desc').remove();
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.getElementById('project_desc').remove();
    }
}