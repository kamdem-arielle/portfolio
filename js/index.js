import LocomotiveScroll from 'locomotive-scroll';
import ScrollReveal from 'scrollreveal';


// const scroll = new LocomotiveScroll({
//     el: document.querySelector('[data-scroll-container]'),
//     smooth: true,
//     smoothMobile: false,
// });

const forms = document.forms
console.log(forms)
if(forms.length){
for (const form of forms) {
    form.addEventListener("submit",formSubmitAction)
}
}

async function formSubmitAction(e){
    console.log(e)
    e.preventDefault();
    const form = e.target;
    const formAction = form.getAttribute("action")?form.getAttribute("action").trim() : "#" ;
    const formMethod = form.getAttribute("method")?form.getAttribute("method").trim() : "get"
    const formData = new FormData(form)

    form.classList.add("form-sending")

    const response = await fetch(formAction,{
        method : formMethod,
        body : formData
    })
    console.log(response)
    if(response.ok) {
        alert('Form Sent!')
        form.classList.remove("form-sending")
        form.reset()
    }else{
        alert('Form Error!')
        form.classList.remove("form-sending")
    }
}

ScrollReveal({
    reset:false,
    distance:'100px',
    duration:2000,
    delay:300,
    interval:200
});
ScrollReveal().reveal('.about-me-head', { delay:200,origin:'left',opacity:0 });
ScrollReveal().reveal('.about-me-text', { delay:400,origin:'left',opacity:0 });
ScrollReveal().reveal('.about-me-image', { delay:400,origin:'right',opacity:0 });
ScrollReveal().reveal('.landing-hii', { delay:100,origin:'left',opacity:0 });
ScrollReveal().reveal('.main-lan-heading', { delay:200,origin:'left',opacity:0 });
ScrollReveal().reveal('.sub-lan-heading', { delay:300,origin:'left',opacity:0 });
ScrollReveal().reveal('.landing-text', { delay:400,origin:'left',opacity:0 });
ScrollReveal().reveal('.final-land-text', { delay:2000,origin:'bottom',opacity:0});
ScrollReveal().reveal('.skills-heading', { delay:200,opacity:0,origin:"left" });
ScrollReveal().reveal('.skills-intro ', { delay:200,opacity:0 });
ScrollReveal().reveal('.skills-cont', { delay:700,origin:'bottom',opacity:0 });
ScrollReveal().reveal('.project-cont-img-cont', { delay:200,origin:'left',opacity:0 });
ScrollReveal().reveal('.project-cont-desc-cont', { delay:400,origin:'right',opacity:0 });
ScrollReveal().reveal('.project-cont-img-cont2', { delay:200,origin:'right',opacity:0 });
ScrollReveal().reveal('.project-cont-desc-cont2', { delay:400,origin:'left',opacity:0 });
ScrollReveal().reveal('.footer-cont', { delay:500,origin:'bottom',opacity:0 });
ScrollReveal().reveal('.say-hello', { delay:500,origin:'bottom',opacity:0 });
ScrollReveal().reveal('.contact-me', { delay:500,origin:'bottom',opacity:0 });
// ScrollReveal().reveal('.about-me-image', { delay:400,origin:'right',opacity:0 });

// console.log("ya")
// new ResizeObserver(() => scroll.update()).observe(
//     document.querySelector("[data-scroll-container]")
// );


