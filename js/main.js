function triggerPops() {
    let desc = document.getElementById('title-desc');
    desc.style.visibility = "visible";
    desc.classList.add("animate__bounceInUp");
}

(function(){ 

    document.onreadystatechange = () => {

      if (document.readyState === 'complete') {
                
        let el = document.querySelector('#Rohan_Name');
        let animation = new LazyLinePainter(el, {"ease":"easeOutSine","strokeWidth":2.5,"strokeOpacity":1,"strokeCap":"round"}); 
        animation.paint(); 
        animation.on('complete', () => {
            let paths = document.getElementsByClassName('cls-1');
            let arr = Array.from(paths);
            var i = 0;
            (function loopIt(i) {
                setTimeout(function(){
                    arr[i].style.fillOpacity = 1;
                    if(i < arr.length - 1) {
                        loopIt(i+1)
                    } else {
                        triggerPops();
                    } 
                }, 100);
            })(i)
        });
      }
    }

  })();

  AOS.init();

  AOS.init({
    disable: 'phone',
    startEvent: 'DOMContentLoaded',
    initClassName: 'aos-init',
    animatedClassName: 'aos-animate',
    useClassNames: false,
    disableMutationObserver: false, 
    debounceDelay: 50,
    throttleDelay: 99, 
    
  
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });