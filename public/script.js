//sliding
const slider = document.querySelector(".slides-container")
const navButtons = document.querySelectorAll(".slides-button");
let isDown =false;
let startX;
let scrollLeft

slider.scrollLeft = window.innerWidth;

slider.addEventListener("mousedown", (e) => {
    isDown = true;
    slider.classList.add("active");
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
    autoScroll.stop();
})
slider.addEventListener("mouseleave", () => {
    isDown = false;
    slider.classList.remove("active");
    autoScroll.reset(7000);
})
slider.addEventListener("mouseup", () => {
    isDown = false;
    slider.classList.remove("active");
    autoScroll.reset(7000);
})
slider.addEventListener("mousemove", (e) => {
    if(!isDown)
    {
        slider.style.scrollBehavior="smooth";
        return;
    }
    e.preventDefault();
    slider.style.scrollBehavior="auto";
    const x = e.pageX - slider.offsetLeft;
    const walk = (x- startX) *1.5;
    slider.scrollLeft = scrollLeft - walk;
})

//infinte
function Timer(fn, t) {
    var timerObj = setInterval(fn, t);

    this.stop = function() {
        if (timerObj) {
            clearInterval(timerObj);
            timerObj = null;
        }
        return this;
    }

    this.start = function() {
        if (!timerObj) {
            this.stop();
            timerObj = setInterval(fn, t);
        }
        return this;
    }

    this.reset = function(newT = t) {
        t = newT;
        return this.stop().start();
    }
}

var autoScroll = new Timer(() => {
    if(isDown) return;
    slider.scrollLeft += window.innerWidth;
},7000)


//loop
var loop = setInterval(() => {
    let childOneTpBoundingRect = slider.children.item(0).getBoundingClientRect().left;
    let childFiveTpBoundingRect = slider.children.item(5).getBoundingClientRect().right;
    if(childFiveTpBoundingRect == 0)
    {
        slider.style.scrollBehavior="auto";
        slider.scrollLeft=window.innerWidth;
        slider.style.scrollBehavior="smooth";
    }
    else if(childOneTpBoundingRect ==0)
    {
        slider.style.scrollBehavior="auto";
        slider.scrollLeft=window.innerWidth*5;
        slider.style.scrollBehavior="smooth";
    }   
},100)

//slide nav
navButtons.forEach((button) => {
    button.addEventListener("click", ()=>{
        slider.scrollLeft = innerWidth * button.id;
        autoScroll.reset(7000);
    })
});

slider.addEventListener('scroll', () => {
    navButtons.forEach(button => {
        button.style.backgroundColor = "white"
        if(window.innerWidth * button.id >= slider.scrollLeft -100 && window.innerWidth * button.id <= slider.scrollLeft +100)
        {
            button.style.backgroundColor = "rgba(204,0,0,255)";
        }
    });
})
