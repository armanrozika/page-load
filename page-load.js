
    var perfData = window.performance.timing; 
    var pageLoadTime = -(perfData.loadEventEnd - perfData.navigationStart);

    //change time value to seconds
    var time = parseInt((pageLoadTime/1000)%60)*100;


    var initPercent = 0;
    var initTime = 0;

    //console log if you want to se load time estimation
    console.log(time);


    //customize the animation here, don't forget to customize your html and css file too!
    var greyBlock = document.querySelector('.block-this'),
        loadPercentage = document.querySelector('#load-percentage'),
        purple = document.querySelector('.percentage');

  
    var setMe = setInterval(function(){
            initPercent++;
            purple.style.width = `${initPercent}%`;
              if(initPercent>=100){
                clearInterval(setMe);
              }
        }, time/80);

  
    var timeInt = setInterval(function(){
        initTime++;
        loadPercentage.innerHTML = initTime + '%';
        if(initTime>=100){
            clearInterval(timeInt);
            greyBlock.style.display = 'none';
        }
    }, time/80);

   


