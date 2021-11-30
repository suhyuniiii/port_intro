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

        let visualOffsettop = visuals[i].offsetTop;
        console.log(visualOffsettop);
        window.scrollTo
        ({
            top:visualOffsettop,
            left:0,
            behavior:"smooth"
        });
    });
}





