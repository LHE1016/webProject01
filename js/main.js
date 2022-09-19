window.addEventListener("load", ()=>{
    // 주메뉴
    const gnbMenu = document.querySelectorAll(".gnb>ul>li");
    console.log(gnbMenu);
    const headerWrap = document.querySelector(".header_wrap");

    for(let i=0; i<gnbMenu.length; i++){
        gnbMenu[i].addEventListener("mouseover", e=>{
            e.currentTarget.classList.add("on");
            var ht = e.currentTarget.children[1].offsetHeight; //ul
            headerWrap.style.height = 70 + ht + "px";
        });
        gnbMenu[i].children[0].addEventListener("focus", e=>{ // focus, blur는 a에 해야 함
            e.currentTarget.parentElement.classList.add("on");
            var ht = e.currentTarget.nextElementSibling.offsetHeight; // li > div
            headerWrap.style.height = 70 + ht + "px";
        });

        gnbMenu[i].addEventListener("mouseout", e=>{
            e.currentTarget.classList.remove("on");
            headerWrap.style.height = "70px";
        });
        gnbMenu[i].children[0].addEventListener("blur", e=>{
            e.currentTarget.parentElement.classList.remove("on");
            headerWrap.style.height = "70px";
        });

    }

    // top버튼
    const btnTop = document.querySelector("a.btn_top");

    window.addEventListener("scroll", e=>{
        let scroll = document.querySelector("html").scrollTop;
        console.log(scroll);

        if(scroll <= 0){
            btnTop.classList.remove("on","ab");
        }else if(scroll < 2300){
            btnTop.classList.add("ab");
            btnTop.classList.add("on");
        }else{
            btnTop.classList.remove("ab");
            btnTop.classList.add("on")
        }

    });

    btnTop.addEventListener("click", e=>{
        e.preventDefault();
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    });



    // 검색박스
    const srchWrap = document.querySelector(".srch_wrap");
    const btnSrch = document.querySelector(".btn_srch");
    const btnSrchClose = document.querySelector(".btn_srch_close");

    btnSrch.addEventListener("click", e=>{
        e.preventDefault();
        srchWrap.classList.add("on");
    });

    btnSrchClose.addEventListener("click", e=>{
        e.preventDefault();
        srchWrap.classList.remove("on");
    });


    // 배너
    const btnNext = document.querySelector("a.btn_next");
    console.log(btnNext);
    const btnPrev = document.querySelector("a.btn_prev");
    const slide = document.querySelectorAll("li.slide"); // 0,1,2
    const slideRoll = document.querySelectorAll(".slide_roll li"); // 0,1,2

    let bnnIdx = 0;
    let lastIdx = document.querySelectorAll(".slide_wrap > li").length -1;

    btnNext.addEventListener("click", e=>{
        bnnIdx++;
        if(bnnIdx > lastIdx) bnnIdx = 0;
        activation(bnnIdx,slide);
        activation(bnnIdx,slideRoll);
    });

    btnPrev.addEventListener("click", e=>{
        bnnIdx--;
        if(bnnIdx < 0) bnnIdx = lastIdx;
        activation(bnnIdx,slide);
        activation(bnnIdx,slideRoll);
    });



    // 오토배너
    function autoBanner(){
        bnnIdx++;
        if(bnnIdx > lastIdx) bnnIdx = 0;

        activation(bnnIdx,slide);
        activation(bnnIdx,slideRoll);
        autoBnn = setTimeout(autoBanner,5000); //재귀함수

        // slide.forEach(item =>{ // activation 대신
        //     item.classList.remove("active");
        // });
        // slide[bnnIdx].classList.add("active");

        // slideRoll.forEach(idx=>{
        //     idx.classList.remove("on")
        // })
        // slideRoll[bnnIdx].classList.add("on");

    }
    let autoBnn = setTimeout(autoBanner,5000);



    // 배너 재생 멈춤 버튼
    const btnPlay = document.querySelector("a.btn_play");
    let flag = true;

    btnPlay.addEventListener('click', () => {
        if(flag){
            btnPlay.classList.add('on');
            clearTimeout(autoBnn);
            flag = false;
        }else{
            btnPlay.classList.remove('on');
            setTimeout(autoBanner,5000);
            flag = true;
        }
    })



    // 롤링버튼 클릭하면 해당 배너로 이동
    for(let i=0; i<slideRoll.length; i++){
        slideRoll[i].addEventListener("click", e=>{
            e.preventDefault();
            activation(i,slide);
            activation(i,slideRoll);
        });
    }

    function activation(index,list){
        for(let el of list){
            el.classList.remove("on" , "active");
        }
        list[index].classList.add("on" , "active");
    }
});




