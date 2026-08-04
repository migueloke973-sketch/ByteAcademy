const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15
});

document.querySelectorAll("section").forEach(section => {
    section.classList.add("hidden");
    observer.observe(section);
});
/* ===== Compteurs animés ===== */

const counters = document.querySelectorAll(".stat h2");

const runCounter = (counter) => {

    const target = parseInt(counter.innerText);

    let value = 0;

    const speed = target / 80;

    const update = () => {

        if(value < target){

            value += speed;

            counter.innerText = Math.ceil(value) + "+";

            requestAnimationFrame(update);

        }else{

            counter.innerText = target + "+";

        }

    }

    update();

};

const statObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            runCounter(entry.target);

            statObserver.unobserve(entry.target);

        }

    });

});

counters.forEach(counter=>statObserver.observe(counter));