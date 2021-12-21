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

window.addEventListener("mousemove",function(e){

    let posX = e.pageX;
    let posY = e.pageY;

    mouseCursor.style.left = posX+"px";
    mouseCursor.style.top = posY+"px";
});

let innerText = document.querySelector(".mousecursor .pointc");
let imgswiper = document.querySelectorAll(".swiper-slide a");

for(let i=0; i<gnb.length; i++)
{
    gnb[i].addEventListener("mouseenter",function(){

        innerText.innerHTML = "click!";
        innerText.style.fontSize = "28px";
        mouseCursor.classList.add("on");
    });

    gnb[i].addEventListener("mouseleave",function(){

        innerText.innerHTML = "+";
        innerText.style.fontSize = "50px";
        mouseCursor.classList.remove("on");
    });
}

for(let i=0; i<imgswiper.length; i++)
{
    imgswiper[i].addEventListener("mouseenter",function(){

        innerText.innerHTML = "click!";
        innerText.style.fontSize = "28px";
        mouseCursor.classList.add("on");
    });

    imgswiper[i].addEventListener("mouseleave",function(){

        innerText.innerHTML = "+";
        innerText.style.fontSize = "50px";
        mouseCursor.classList.remove("on");
    });
}
