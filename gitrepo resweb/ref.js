function changeContent(buttonName) {
    const xHttp = new XMLHttpRequest();
    xHttp.onload=function(){
        document.getElementById(buttonName).innerHTML =
        this.responseText;
    }
    if (buttonName = "resume") {
        xHttp.open("GET", "resume.html")
        xHttp.send();
    }
    if (buttonName = "cv") {
        xHttp.open("GET", "cv.html")
        xHttp.send();
    }
}