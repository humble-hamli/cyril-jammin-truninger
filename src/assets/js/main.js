import Masonry from 'masonry-layout';
import ScrollReveal from "scrollreveal";


window.onload = () => {
    const masonry = new Masonry(".grid", {
      itemSelector: ".card",
      gutter: 50,
    });

    console.log(masonry)
};

ScrollReveal().reveal(".card", {delay: 0});
ScrollReveal().reveal(".nav", { delay: 200 });