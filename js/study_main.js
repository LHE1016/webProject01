// 주메뉴
const gnbMenu = document.querySelectorAll(".gnb>ul>li");
const headerWrap = document.querySelector(".header_wrap");

for(let i=0; i<gnbMenu.length; i++){
    gnbMenu[i].addEventListener("mouseover", e=>{
    e.preventDefault();
    e.currentTarget.classList.add("on");
    var ht = e.currentTarget.children[1].offsetHeight; // li > div
    headerWrap.style.height = 70 + ht + "px";
    });

    gnbMenu[i].addEventListener("mouseout", e=>{
    e.preventDefault();
    e.currentTarget.classList.remove("on");
    headerWrap.style.height = "70px";
    });

    gnbMenu[i].children[0].addEventListener("focus",e=>{ // li a
    e.preventDefault();
    e.currentTarget.parentElement.classList.add("on");
    var ht = e.currentTarget.nextElementSibling.offsetHeight;
    headerWrap.style.height = 70 + ht + "px";
    })

    gnbMenu[i].children[0].addEventListener("blur",e=>{ // li a
    e.preventDefault();
    e.currentTarget.parentElement.classList.remove("on");
    headerWrap.style.height = "70px";
    })
} // for



// top버튼
// 윈도우에서 스크롤했을 때 범위에 따라 탑버튼에 클래스 on, ab
// btn top을 누르면 스크롤이 0으로 부드럽게 올라감
const btnTop = document.querySelector("a.btn_top");

window.addEventListener("scroll", e=>{
    let scroll = document.querySelector("html").scrollTop;

    if(scroll <= 0){
        btnTop.classList.remove("on","ab");
    }else if(scroll < 2300){
        btnTop.classList.add("on");
        btnTop.classList.remove("ab");
    }else{
        btnTop.classList.add("on");
        btnTop.classList.add("ab");
    }
});

btnTop.addEventListener("click", e=>{
    e.preventDefault();
    scroll({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
})



// 검색박스
// 돋보기 버튼 누르면 검색박스 켜지고
//close 버튼을 누르면 검색 박스 꺼짐



// 배너
// btnNext 누르면 slide가 .active  되고 slide roll에 .on됨




// 오토배너

// 배너 재생 멈춤 버튼
// 롤링버튼 클릭하면 해당 배너로 이동
// top버튼
