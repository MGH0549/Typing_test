let nav = document.querySelector('nav');
let close = document.querySelector('.close');
let toogle = document.querySelector('.toogles');


toogle.onclick = function () { 
    nav.classList.add("open");
}

close.onclick = function () {
    nav.classList.remove("open");
}

document.onkeyup = function (e) {
    if (e.key === "Escape") {
    nav.classList.remove("open");
        
    }
}




let up = document.querySelector(".up");
let tabs = document.querySelectorAll(".tabs li");
let tabsArray = Array.from(tabs);
let divs = document.querySelectorAll(".content > div");
let divsArray = Array.from(divs);







tabsArray.forEach((ele) => { 
    ele.addEventListener("click", function (e) { 
        tabsArray.forEach((ele) => {
            ele.classList.remove("active");
        })
        ele.classList.add("active");
        divsArray.forEach((div) => {
            div.style.display="none";
        })
        document.querySelector(e.currentTarget.dataset.con).style.display="block";
    })
})




let ser = document.querySelector(".serial");
let gen=document.querySelector(".gen");
let char=["q","s","t","0","e","f","1","a","2","l","3","w","4","r","5","y","6","u","7","i","o","8","p","d","g","9","h","j","k","l","z","c","v","b","n","m"]


gen.onclick = function () {
let serial = "";
ser.append(serial);

// console.log(Math.floor(Math.random() * char.length));
for (let i = 0; i < 14; i++){
    let random = Math.floor(Math.random() * char.length);
    serial+=char[random];
}
ser.innerHTML = serial;;
}




// let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// let color = "#";
// for (let i = 0; i < 6; i++){
//     let random = Math.floor(Math.random() * hex.length);
//     color += hex[random];
// }
// document.querySelector("body").style.backgroundColor = color;












window.onscroll = function () {
    if (this.scrollY >= 1000) {
        up.classList.add("show");
    }
    else {
        up.classList.remove("show");
        
    }
}
up.addEventListener("click", function (e) { 
    window.scrollTo({
        top: 0,
        behavior:"smooth"
    })
})





// let wordsArray = [
//     , , , , , , , , , ,
//     , , , , , ,, , ,
//     , , , , , , , ,
//     , ,, , , , , ,
//     , , , , , , , , ,
//     , , 
// ];
let wordsArrayE = ["apple",
    "banana",
    "cherry",
    "date",
    "fig",
    "kiwi",
    "mango",
    "ugli",
    "lime",
    "olive",
    "peach",
    "plum",
    "pear"
];
let wordsArrayN = ["grape",
    "lemon",
    "orange",
    "papaya",
    "quince",
    "vanilla",
    "xigua",
    "avocado",
    "tomato",
    "persimmon",
    "lychee",
    "coconut",
    "guava"];
let wordsArrayH=["elderberry",
"honeydew",
"nectarine",
"raspberry",
"strawberry",
"tangerine",
"watermelon",
"yellowfruit",
"zucchini",
"blackberry",
"blueberry",
"pomegranate",
"starfruit",
"pineapple",
"rambutan",
"cantaloupe",
"dragonfruit",
"grapefruit",
"huckleberry",
"jackfruit",
"kumquat",
"mulberry",
"gooseberry",
"passionfruit"]

const lev={
    "Easy": 4,
    "Normal": 6,
    "Hard": 10
    
};
let levels = document.querySelectorAll('input[name="level"]');
let chooselevel = document.querySelector(".chlev");



let startbutton = document.querySelector(".start");
let spanlevelname = document.querySelector(".lev");
let spansecondname = document.querySelector(".second");
let theword = document.querySelector(".the_word");
let input = document.querySelector(".input");
let upcoming_word = document.querySelector(".upcoming_word");
let time = document.querySelector(".time span");
let scoreGot = document.querySelector(".score .got");
let scoreTotal = document.querySelector(".score .total");
let finsh = document.querySelector(".finsh");
let try_again = document.querySelector(".try_again");

try_again.onclick = function () {
    
    location.reload();
    try_again.style.display = "none";
}


    spanlevelname.innerHTML=levels[0].value
            spansecondname.innerHTML = lev[levels[0].value];
            time.innerHTML =lev[levels[0].value];  
chooselevel.onclick = function () {
    for (let i = 0; i < levels.length; i++) {
        if (levels[i].checked) {
            spanlevelname.innerHTML=levels[i].value
            spansecondname.innerHTML = lev[levels[i].value];
            time.innerHTML =lev[levels[i].value];   

        }
    }
}
let defualtLevelName = spanlevelname.innerHTML;
let defualtSecond = spansecondname.innerHTML;
time.innerHTML= spansecondname.innerHTML;
// spanlevelname.innerHTML = defualtLevelName;
// spansecondname.innerHTML = defualtSecond;
// time.innerHTML = defualtSecond;

input.onpaste = function (){
    return false;
}


startbutton.onclick = function () {
    startbutton.remove();
    input.focus();

    if (spanlevelname.innerHTML === "Easy") {
scoreTotal.innerHTML = wordsArrayE.length;

    generatewords(wordsArrayE);
        
    }
    else if (spanlevelname.innerHTML === "Normal") {
scoreTotal.innerHTML = wordsArrayN.length;
        
    generatewords(wordsArrayN);
        
    }
    else {
scoreTotal.innerHTML = wordsArrayH.length;

    generatewords(wordsArrayH);
        
    }
}


function generatewords(wordsArray) {

    let ranword = wordsArray[Math.floor(Math.random() * wordsArray.length)];
    let indexword = wordsArray.indexOf(ranword);
    wordsArray.splice(indexword, 1);
    theword.innerHTML = ranword;
    upcoming_word.innerHTML = '';
    for (let i = 0; i < wordsArray.length; i++) {
        let div = document.createElement('div');
        let text = document.createTextNode(wordsArray[i]);
        div.appendChild(text);
        upcoming_word.appendChild(div);
            
            
    }
    
    startplay(wordsArray);
}


function startplay(wordsArray) {
    if (scoreGot.innerHTML === "0") {
    time.innerHTML = +spansecondname.innerHTML+3;
        
    }
    else {
    time.innerHTML = spansecondname.innerHTML;
        
    }
    let start = setInterval(() => {
        time.innerHTML--;
        if (time.innerHTML === "0") {
            clearInterval(start);
            if (theword.innerHTML.toLocaleLowerCase() === input.value.toLocaleLowerCase()) {
                input.value = '';
                scoreGot.innerHTML++;
                if (wordsArray.length > 0) {
                    generatewords(wordsArray);
                }
                else {
                    let span = document.createElement("span");
                    span.className = "good";
                    let text = document.createTextNode("Good");
                    span.appendChild(text);
                    finsh.appendChild(span);
                    upcoming_word.remove();
                }
            }
            else {
                let span = document.createElement("span");
                span.className="bad";
                let textbad = document.createTextNode("Game Over");
                span.appendChild(textbad);
                finsh.appendChild(span);
                try_again.style.display = "inline";
            }
        }

},1000)

}