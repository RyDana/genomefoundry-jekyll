window.addEventListener('load', (event) => {
    console.log("Page loaded.");

    const nav = document.querySelector("#navbar");
    const navLogoDark = nav.querySelector('#navLogoDark');
    const navLogoLight = nav.querySelector('#navLogoLight');
    console.log(nav);

    window.onscroll = (event) => {
        if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
            nav.classList.add('bg-light');
            nav.classList.remove('navbar-dark');
            navLogoDark.style.opacity = 1;
            navLogoLight.style.opacity = 0;
        } else {
            nav.classList.add('navbar-dark');
            nav.classList.remove('bg-light');
            nav.style.background = "none";
            navLogoDark.style.opacity = 0;
            navLogoLight.style.opacity = 1;
        }
    };

});