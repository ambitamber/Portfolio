var info = document.getElementById('info');

let iam = 'I am a',
    p1 = 'Software Engineer',
    p2 = 'Programmer',
    p3 = 'Full Stack Developer',
    p4 = 'Website Designer';

let delaySeconds = 1000;
setTimeout(function () {
    var infoWriter = new Typewriter(info, {
        loop: true,
        delay: 75
    });

    infoWriter.typeString(iam + " " + p1).pauseFor(2500).deleteChars(p1.length).pauseFor(500)
        .typeString(p2).pauseFor(2500).deleteChars(p2.length).pauseFor(500)
        .typeString(p3).pauseFor(2500).deleteChars(p3.length).pauseFor(500)
        .typeString(p4).pauseFor(2500)
        .start();
}, delaySeconds);

let sendBtn = document.getElementById('send-btn');
let confirm = document.getElementById('confirm');
sendBtn.onclick = function () {
    confirm.style.display = "block"
}

function PostInfo() {
    var messageinfo = {
        Name: $("#NameFormControlInput").val(),
        Email: $("#FormControlInput").val(),
        Message: $("#FormControlTextarea").val()
    };
    $.ajax({
        type: "POST",
        url: "Home/Index",
        contentType: "application/json",
        dataType: 'json',
        data: messageinfo
    });
    
}