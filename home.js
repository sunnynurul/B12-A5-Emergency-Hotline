 
 
 // heart count 
 
document.getElementById("heart-1").addEventListener("click",function(e)     
{
  e.preventDefault()
  let count=0;
  count++;
  const heartNumCount=parseInt(document.getElementById("heart-num-count").innerText)
  const heartNumCountTotal=count+heartNumCount;
  document.getElementById("heart-num-count").innerText=heartNumCountTotal
})

document.getElementById("heart-2").addEventListener("click",function(e)     
{
  e.preventDefault()
  let count=0;
  count++;
  const heartNumCount=parseInt(document.getElementById("heart-num-count").innerText)
  const heartNumCountTotal=count+heartNumCount;
  document.getElementById("heart-num-count").innerText=heartNumCountTotal
})

document.getElementById("heart-3").addEventListener("click",function(e)     
{
  e.preventDefault()
  let count=0;
  count++;
  const heartNumCount=parseInt(document.getElementById("heart-num-count").innerText)
  const heartNumCountTotal=count+heartNumCount;
  document.getElementById("heart-num-count").innerText=heartNumCountTotal
})

document.getElementById("heart-4").addEventListener("click",function(e)     
{
  e.preventDefault()
  let count=0;
  count++;
  const heartNumCount=parseInt(document.getElementById("heart-num-count").innerText)
  const heartNumCountTotal=count+heartNumCount;
  document.getElementById("heart-num-count").innerText=heartNumCountTotal
})

document.getElementById("heart-5").addEventListener("click",function(e)     
{
  e.preventDefault()
  let count=0;
  count++;
  const heartNumCount=parseInt(document.getElementById("heart-num-count").innerText)
  const heartNumCountTotal=count+heartNumCount;
  document.getElementById("heart-num-count").innerText=heartNumCountTotal
})

document.getElementById("heart-6").addEventListener("click",function(e)     
{
  e.preventDefault()
  let count=0;
  count++;
  const heartNumCount=parseInt(document.getElementById("heart-num-count").innerText)
  const heartNumCountTotal=count+heartNumCount;
  document.getElementById("heart-num-count").innerText=heartNumCountTotal
})

document.getElementById("heart-7").addEventListener("click",function(e)     
{
  e.preventDefault()
  let count=0;
  count++;
  const heartNumCount=parseInt(document.getElementById("heart-num-count").innerText)
  const heartNumCountTotal=count+heartNumCount;
  document.getElementById("heart-num-count").innerText=heartNumCountTotal
})

document.getElementById("heart-8").addEventListener("click",function(e)     
{
  e.preventDefault()
  let count=0;
  count++;
  const heartNumCount=parseInt(document.getElementById("heart-num-count").innerText)
  const heartNumCountTotal=count+heartNumCount;
  document.getElementById("heart-num-count").innerText=heartNumCountTotal
})

document.getElementById("heart-9").addEventListener("click",function(e)     
{
  e.preventDefault()
  let count=0;
  count++;
  const heartNumCount=parseInt(document.getElementById("heart-num-count").innerText)
  const heartNumCountTotal=count+heartNumCount;
  document.getElementById("heart-num-count").innerText=heartNumCountTotal
})

//copy count 
 
document.getElementById("copy-1").addEventListener("click",function(e)     
{
  e.preventDefault()
  let count=0;
  count++;
  const copyCount=parseInt(document.getElementById("copy-count").innerText)
  const copyNumCountTotal=count+copyCount;
  document.getElementById("copy-count").innerText=copyNumCountTotal
})

document.getElementById("copy-2").addEventListener("click",function(e)     
{
  e.preventDefault()
  let count=0;
  count++;
  const copyCount=parseInt(document.getElementById("copy-count").innerText)
  const copyNumCountTotal=count+copyCount;
  document.getElementById("copy-count").innerText=copyNumCountTotal
})

document.getElementById("copy-3").addEventListener("click",function(e)     
{
  e.preventDefault()
  let count=0;
  count++;
  const copyCount=parseInt(document.getElementById("copy-count").innerText)
  const copyNumCountTotal=count+copyCount;
  document.getElementById("copy-count").innerText=copyNumCountTotal
})

document.getElementById("copy-4").addEventListener("click",function(e)     
{
  e.preventDefault()
  let count=0;
  count++;
  const copyCount=parseInt(document.getElementById("copy-count").innerText)
  const copyNumCountTotal=count+copyCount;
  document.getElementById("copy-count").innerText=copyNumCountTotal
})

document.getElementById("copy-5").addEventListener("click",function(e)     
{
  e.preventDefault()
  let count=0;
  count++;
  const copyCount=parseInt(document.getElementById("copy-count").innerText)
  const copyNumCountTotal=count+copyCount;
  document.getElementById("copy-count").innerText=copyNumCountTotal
})

document.getElementById("copy-6").addEventListener("click",function(e)     
{
  e.preventDefault()
  let count=0;
  count++;
  const copyCount=parseInt(document.getElementById("copy-count").innerText)
  const copyNumCountTotal=count+copyCount;
  document.getElementById("copy-count").innerText=copyNumCountTotal
})

document.getElementById("copy-7").addEventListener("click",function(e)     
{
  e.preventDefault()
  let count=0;
  count++;
  const copyCount=parseInt(document.getElementById("copy-count").innerText)
  const copyNumCountTotal=count+copyCount;
  document.getElementById("copy-count").innerText=copyNumCountTotal
})

document.getElementById("copy-8").addEventListener("click",function(e)     
{
  e.preventDefault()
  let count=0;
  count++;
  const copyCount=parseInt(document.getElementById("copy-count").innerText)
  const copyNumCountTotal=count+copyCount;
  document.getElementById("copy-count").innerText=copyNumCountTotal
})

document.getElementById("copy-9").addEventListener("click",function(e)     
{
  e.preventDefault()
  let count=0;
  count++;
  const copyCount=parseInt(document.getElementById("copy-count").innerText)
  const copyNumCountTotal=count+copyCount;
  document.getElementById("copy-count").innerText=copyNumCountTotal
})


// alert functionality
document.getElementById("alert-1").addEventListener("click",function(e)
{
    
  const titleAndNumber="📞 Calling N 9...";
  const title1="Calling N";
  const number1=9;
  alert(titleAndNumber);
  document.getElementById("title1").innerText=title1;
  document.getElementById("number1").innerText=number1;

    let now = new Date();
    let hours1 = now.getHours();
    let minutes1 = now.getMinutes();
    let seconds1 = now.getSeconds();
    document.getElementById("current-time-hours1").innerText=hours1+":";
    document.getElementById("current-time-minutes1").innerText=minutes1+":";
    document.getElementById("current-time-seconds1").innerText=seconds1;
    
    let count=0;
    count=count+20;
    const starCount=parseInt(document.getElementById("star-count").innerText)
    const starCountTotal=starCount-count;
    document.getElementById("star-count").innerText=starCountTotal

    if((document.getElementById("star-count").innerText=starCountTotal) < 0)
    {
        alert("You don't have enough balance. At least 20 credits required to make a call.")
    }   
})

document.getElementById("alert-2").addEventListener("click",function(e)
{
  e.preventDefault();
  const titleAndNumber="📞 Calling P 9...";
  const title2="Calling P";
  const number2=9;
  alert(titleAndNumber);
  document.getElementById("title2").innerText=title2;
  document.getElementById("number2").innerText=number2;

    let now = new Date();
    let hours2 = now.getHours();
    let minutes2 = now.getMinutes();
    let seconds2 = now.getSeconds();
    document.getElementById("current-time-hours2").innerText=hours2+":";
    document.getElementById("current-time-minutes2").innerText=minutes2+":";
    document.getElementById("current-time-seconds2").innerText=seconds2;

    let count=0;
    count=count+20;
    const starCount=parseInt(document.getElementById("star-count").innerText)
    const starCountTotal=starCount-count;
    document.getElementById("star-count").innerText=starCountTotal

    if((document.getElementById("star-count").innerText=starCountTotal) < 0)
    {
        alert("You don't have enough balance. At least 20 credits required to make a call.")
    }
})

document.getElementById("alert-3").addEventListener("click",function(e)
{
  e.preventDefault();
  const titleAndNumber="📞 Calling Fire Service 999...";
  const title3="Calling Fire Service";
  const number3=999;
  alert(titleAndNumber);
  document.getElementById("title3").innerText=title3;
  document.getElementById("number3").innerText=number3;

    let now = new Date();
    let hours3 = now.getHours();
    let minutes3 = now.getMinutes();
    let seconds3= now.getSeconds();
    document.getElementById("current-time-hours3").innerText=hours3+":";
    document.getElementById("current-time-minutes3").innerText=minutes3+":";
    document.getElementById("current-time-seconds3").innerText=seconds3;

    let count=0;
    count=count+20;
    const starCount=parseInt(document.getElementById("star-count").innerText)
    const starCountTotal=starCount-count;
    document.getElementById("star-count").innerText=starCountTotal

    if((document.getElementById("star-count").innerText=starCountTotal) < 0)
    {
        alert("You don't have enough balance. At least 20 credits required to make a call.")
    }
})

document.getElementById("alert-4").addEventListener("click",function(e)
{
  e.preventDefault();
  const titleAndNumber="📞 Calling W 1...";
  const title4="Calling W";
  const number4=1;
  alert(titleAndNumber);
  document.getElementById("title4").innerText=title4;
  document.getElementById("number4").innerText=number4;

    let now = new Date();
    let hours4 = now.getHours();
    let minutes4 = now.getMinutes();
    let seconds4 = now.getSeconds();
    document.getElementById("current-time-hours4").innerText=hours4+":";
    document.getElementById("current-time-minutes4").innerText=minutes4+":";
    document.getElementById("current-time-seconds4").innerText=seconds4;

    let count=0;
    count=count+20;
    const starCount=parseInt(document.getElementById("star-count").innerText)
    const starCountTotal=starCount-count;
    document.getElementById("star-count").innerText=starCountTotal

    if((document.getElementById("star-count").innerText=starCountTotal) < 0)
    {
        alert("You don't have enough balance. At least 20 credits required to make a call.")
    }
})

document.getElementById("alert-5").addEventListener("click",function(e)
{
  e.preventDefault();
  const titleAndNumber="📞 Calling A 1...";
  const title5="Calling A";
  const number5=1;
  alert(titleAndNumber);
  document.getElementById("title5").innerText=title5;
  document.getElementById("number5").innerText=number5;

    let now = new Date();
    let hours5 = now.getHours();
    let minutes5 = now.getMinutes();
    let seconds5 = now.getSeconds();
    document.getElementById("current-time-hours5").innerText=hours5+":";
    document.getElementById("current-time-minutes5").innerText=minutes5+":";
    document.getElementById("current-time-seconds5").innerText=seconds5;

    let count=0;
    count=count+20;
    const starCount=parseInt(document.getElementById("star-count").innerText)
    const starCountTotal=starCount-count;
    document.getElementById("star-count").innerText=starCountTotal

    if((document.getElementById("star-count").innerText=starCountTotal) < 0)
    {
        alert("You don't have enough balance. At least 20 credits required to make a call.")
    }
})

document.getElementById("alert-6").addEventListener("click",function(e)
{
  e.preventDefault();
  const titleAndNumber="📞 Calling E 1...";
  const title6="Calling E";
  const number6=1;
  alert(titleAndNumber);
  document.getElementById("title6").innerText=title6;
  document.getElementById("number6").innerText=number6;

    let now = new Date();
    let hours6 = now.getHours();
    let minutes6 = now.getMinutes();
    let seconds6 = now.getSeconds();
    document.getElementById("current-time-hours6").innerText=hours6+":";
    document.getElementById("current-time-minutes6").innerText=minutes6+":";
    document.getElementById("current-time-seconds6").innerText=seconds6;

    let count=0;
    count=count+20;
    const starCount=parseInt(document.getElementById("star-count").innerText)
    const starCountTotal=starCount-count;
    document.getElementById("star-count").innerText=starCountTotal

    if((document.getElementById("star-count").innerText=starCountTotal) < 0)
    {
        alert("You don't have enough balance. At least 20 credits required to make a call.")
    }
})

document.getElementById("alert-7").addEventListener("click",function(e)
{
  e.preventDefault();
  const titleAndNumber="📞 Calling B 1...";
  const title7="Calling B";
  const number7=1;
  alert(titleAndNumber);
  document.getElementById("title7").innerText=title7;
  document.getElementById("number7").innerText=number7;

    let now = new Date();
    let hours7 = now.getHours();
    let minutes7 = now.getMinutes();
    let seconds7 = now.getSeconds();
    document.getElementById("current-time-hours7").innerText=hours7+":";
    document.getElementById("current-time-minutes7").innerText=minutes7+":";
    document.getElementById("current-time-seconds7").innerText=seconds7;

    let count=0;
    count=count+20;
    const starCount=parseInt(document.getElementById("star-count").innerText)
    const starCountTotal=starCount-count;
    document.getElementById("star-count").innerText=starCountTotal

    if((document.getElementById("star-count").innerText=starCountTotal) < 0)
    {
        alert("You don't have enough balance. At least 20 credits required to make a call.")
    }
})

document.getElementById("alert-8").addEventListener("click",function(e)
{
  e.preventDefault();
  const titleAndNumber="📞 Calling B 1...";
  const title8="Calling B";
  const number8=1;
  alert(titleAndNumber);
  document.getElementById("title8").innerText=title8;
  document.getElementById("number8").innerText=number8;

    let now = new Date();
    let hours8 = now.getHours();
    let minutes8 = now.getMinutes();
    let seconds8 = now.getSeconds();
    document.getElementById("current-time-hours8").innerText=hours8+":";
    document.getElementById("current-time-minutes8").innerText=minutes8+":";
    document.getElementById("current-time-seconds8").innerText=seconds8;

    let count=0;
    count=count+20;
    const starCount=parseInt(document.getElementById("star-count").innerText)
    const starCountTotal=starCount-count;
    document.getElementById("star-count").innerText=starCountTotal

    if((document.getElementById("star-count").innerText=starCountTotal) < 0)
    {
        alert("You don't have enough balance. At least 20 credits required to make a call.")
    }
})

document.getElementById("alert-9").addEventListener("click",function(e)
{
  e.preventDefault();
  const titleAndNumber="📞 Calling N 9...";
  const title9="Calling N";
  const number9=9;
  alert(titleAndNumber);
  document.getElementById("title9").innerText=title9;
  document.getElementById("number9").innerText=number9;

    let now = new Date();
    let hours9 = now.getHours();
    let minutes9 = now.getMinutes();
    let seconds9 = now.getSeconds();
    document.getElementById("current-time-hours9").innerText=hours9+":";
    document.getElementById("current-time-minutes9").innerText=minutes9+":";
    document.getElementById("current-time-seconds9").innerText=seconds9;

    let count=0;
    count=count+20;
    const starCount=parseInt(document.getElementById("star-count").innerText)
    const starCountTotal=starCount-count;
    document.getElementById("star-count").innerText=starCountTotal

    if((document.getElementById("star-count").innerText=starCountTotal) < 0)
    {
        alert("You don't have enough balance. At least 20 credits required to make a call.")
    }
})

// clear button removes items
function removeAll()
{
    document.getElementById("remove").remove();
}

 
 



