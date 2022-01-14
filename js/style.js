AOS.init(); //aos 시작구문

const header = document.querySelector("#header");
const section2 = document.querySelector("#about");


window.addEventListener("scroll",()=>{

    let scTop = window.scrollY;

    if(scTop >= about.offsetTop)
    {
        header.classList.add("on");
    }
    else
    {
        header.classList.remove("on");
    }

});

//gnb li 누르면 해당 컨테이너로 이동
const gnb = document.querySelectorAll(".gnb > li");
const visuals = document.querySelectorAll("#container > div");

for(let i=0; i<gnb.length; i++)
{
    gnb[i].addEventListener("click",(e)=>{

        e.preventDefault();
        for(let i=0; i<gnb.length; i++)
        {
            gnb[i].classList.remove("on");
        }
        e.currentTarget.classList.add("on");

        let visualOffsettop = visuals[i].offsetTop;
        window.scrollTo
        ({
            top:visualOffsettop,
            left:0,
            behavior:"smooth"
        });
    });
}

//typing
const typingtag = document.querySelector("#main .typing");
let text = "SUHYUN'S\nPORTFOLIO";
let viewText = "";
let i=0;

let autoTyping = setInterval(typing,300);

function typing(){

    viewText = text[i++];

    if(viewText === "\n")
    {
        typingtag.innerHTML += "<br/>";
    }
    else
    {
        typingtag.innerHTML += viewText;
    }

    if(i > text.length-1)
    {
        clearInterval(autoTyping);

        setTimeout(function(){

            typingtag.innerHTML = "";
            i=0;
            autoTyping = setInterval(typing,300);
        },2000);
    }

};

//마우스커서
let mouseCursor = document.querySelector(".mousecursor");

//마우스 위치값 함수
function mousedown(e) {

    let posX = e.pageX;
    let posY = e.pageY - scrollY;

    mouseCursor.style.left = posX+"px";
    mouseCursor.style.top = posY+"px";
    
}

for(let i=0; i<gnb.length; i++)
{
    gnb[i].addEventListener("mouseenter",function(){

        window.addEventListener("mousemove",mousedown);

        mouseCursor.classList.add("change");
        
    });

    gnb[i].addEventListener("mouseleave",function(){

        window.removeEventListener("mouseleave",mousedown);

        mouseCursor.classList.remove("change");
        
    });
}

