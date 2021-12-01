//Color randomizers

const randomColor = ()=>{
    let color = Math.floor(Math.random()*16777215).toString(16);
    return `#${color}`;
}




//Trying HTML Dom events

function changeBox1() {
    document.getElementById("box1").style.backgroundColor = randomColor();
}

function changeBox2() {
    document.getElementById("box2").style.backgroundColor = randomColor();
}

function changeBox3() {
    document.getElementById("box3").style.backgroundColor = randomColor(); 
}

function changeAll() {
    document.getElementById("box1").style.backgroundColor = randomColor();
    document.getElementById("box2").style.backgroundColor = randomColor();
    document.getElementById("box3").style.backgroundColor = randomColor(); 
}

function resetcolor(){
    document.getElementById("box1").style.backgroundColor = "red";
    document.getElementById("box2").style.backgroundColor = "blue";
    document.getElementById("box3").style.backgroundColor = "green";
}


//Trying to Hide

function hide1(){
    document.getElementById("box1").style.visibility = "hidden";
}


function hide2(){
    document.getElementById("box2").style.visibility = "hidden";
}


function hide3(){
    document.getElementById("box3").style.visibility = "hidden";
}


function hideA(){
    document.getElementById("box1").style.visibility = "hidden";
    document.getElementById("box2").style.visibility = "hidden";
    document.getElementById("box3").style.visibility = "hidden";
}

function showA(){
    document.getElementById("box1").style.visibility="visible";
    document.getElementById("box2").style.visibility="visible";
    document.getElementById("box3").style.visibility="visible";
}