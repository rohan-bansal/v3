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