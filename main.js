function setBg () {
    randomColor = Math.floor(Math.random() * 16777215).toString(16);
    randomColorr = Math.floor(Math.random() * 16777215).toString(16);
document.body.style.background ="linear-gradient(to right, " + "#" + randomColor + "," + "#" + randomColorr + ")" ;
//document.getElementById('color').innerHTML = "#" + randomColor;//
}

var getBg = document.getElementById('getbg');
getBg.addEventListener('click', setBg);
setBg();
