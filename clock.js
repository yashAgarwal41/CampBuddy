
let jumbClass=document.getElementsByClassName('jumbotron');
aqua.addEventListener('click', function(){
    jumbClass[0].setAttribute("style", "background: aquamarine !important");
}) 
simple.addEventListener('click', function(){
    jumbClass[0].setAttribute("style", "background: white !important");
})
pink.addEventListener('click', function(){
    jumbClass[0].setAttribute("style", "background: pink !important");
})
gold.addEventListener('click', function(){
    jumbClass[0].setAttribute("style", "background:  #C69743  !important");
    // time.setAttribute("style", "color:purple");
})

format.addEventListener('click', function(){
    setInterval(frmt1, 1000);
    clearInterval(clr);
    function frmt1(){ 
    const dt=new Date();
    let hour=dt.getHours();
    let min=dt.getMinutes();
    let sec=dt.getSeconds();
    if((hour/10)<1)  hour='0'+hour;
    if((min/10)<1)  min='0'+min;
    if((sec/10)<1)  sec='0'+sec;
    tm =  hour+ ':' + min + ':' + sec ;
    let timeId=document.getElementById('time');
    timeId.innerHTML=tm+" on "+date;
    document.getElementById('day').innerHTML=day+'-'+month;
    console.log(tm);
}
})


clr=setInterval(setInt, 1000);
function setInt(){ 
    dt=new Date();

    let sec=dt.getSeconds();
    let min=dt.getMinutes();
    let hour=dt.getHours();
    let am=1;
    if((sec/10)<1)  sec='0'+sec;
    if(hour==12)  am=0;  
    else if(hour>12)  
    {
        hour=hour-12;
        am=0;
    }
    if((min/10)<1)  min='0'+min;
    if((hour/10)<1)  hour='0'+hour;
    // tm = dt.getHours() + ':' + dt.getMinutes() + ':' + dt.getSeconds() ;
    tm =  hour+ ':' + min + ':' + sec ;
    if(am==1)   tm=tm+" a.m.";
    else tm=tm+" p.m.";

    // let date=dt.toLocaleDateString();   
    var dd = String(dt.getDate()).padStart(2, '0');
    var mm = String(dt.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = dt.getFullYear();
    date=dd+'/'+ mm + '/' + yyyy;
    // console.log(dd);
    // console.log(date.substring(0,2));  

    let timeId=document.getElementById('time');
    timeId.innerHTML=tm+" on "+date;     
    // timeId.style.fontWeight='bold';   
    
    let day=dt.getDay();
    let month=dt.getMonth();

    if(day==0)  day='Sunday';
    else if(day==1) day='Monday';
    else if(day==2) day='Tuesday';
    else if(day==3) day='Wednesday';
    else if(day==4) day='Thursday';
    else if(day==5) day='Friday';
    else if(day==6) day='Saturday';

    // console.log(month);
    if(month==0) month="January";
    else if(month==1) month="February";
    else if(month==2) month="March";
    else if(month==3) month="April";
    else if(month==4) month="May";
    else if(month==5) month="June";
    else if(month==6) month="July";
    else if(month==7) month="August";
    else if(month==8) month="September";
    else if(month==9) month="October";
    else if(month==10) month="November";
    else if(month==11) month="December";

    document.getElementById('day').innerHTML=day+'-'+month;
    // console.log(day);   

    // format.addEventListener('click', function(){
    //     clearInterval(setInt);
    //     const dt=new Date();
    //     let hour=dt.getHours();
    //     let min=dt.getMinutes();
    //     let sec=dt.getSeconds();
    //     if((hour/10)<1)  hour='0'+hour;
    //     if((min/10)<1)  min='0'+min;
    //     if((sec/10)<1)  sec='0'+sec;
    //     tm =  hour+ ':' + min + ':' + sec ;
    //     timeId.innerHTML=tm+" on "+date;
    //     // console.log(tm);
    // })

}