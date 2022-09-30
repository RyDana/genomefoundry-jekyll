window.addEventListener('load', (event) => {
    console.log("Page loaded.");

    const nav = document.querySelector("#navbar");
    const navLogoDark = nav.querySelector('#navLogoDark');
    const navLogoLight = nav.querySelector('#navLogoLight');
    const hamburger = nav.querySelector('.navbar-toggler')
    console.log(nav);

    window.onscroll = (event) => {
        if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
            nav.classList.add('bg-light');
            nav.classList.remove('navbar-dark');
            navLogoDark.width = 230;
            navLogoLight.width = 230;
            navLogoDark.style.opacity = 1;
            navLogoLight.style.opacity = 0;
        } else {
            nav.classList.add('navbar-dark');
            nav.classList.remove('bg-light');
            nav.style.background = "none";
            navLogoDark.width = 280;
            navLogoLight.width = 280;
            navLogoDark.style.opacity = 0;
            navLogoLight.style.opacity = 1;
            if(!hamburger.classList.contains("collapsed") && window.getComputedStyle(hamburger).display !== "none"){
                nav.classList.add('bg-light');
                nav.classList.remove('navbar-dark');
                navLogoDark.style.opacity = 1;
                navLogoLight.style.opacity = 0;
            }
        }
    };

    hamburger.onclick = (event) => {
            if(hamburger.classList.contains("collapsed") && (document.body.scrollTop < 80 || document.documentElement.scrollTop < 80)){
                nav.classList.add('navbar-dark');
                nav.classList.remove('bg-light');
                nav.style.background = "none";
                navLogoDark.style.opacity = 0;
                navLogoLight.style.opacity = 1;
            } else if (!hamburger.classList.contains("collapsed") && (document.body.scrollTop < 80 || document.documentElement.scrollTop < 80)) {
                nav.classList.add('bg-light');
                nav.classList.remove('navbar-dark');
                navLogoDark.style.opacity = 1;
                navLogoLight.style.opacity = 0;
            }
    };

});