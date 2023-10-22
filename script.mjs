function doSum(event)
   {event.preventDefault(); 

    console.log("function is running");

    let FirstNumber=document.querySelector("#FirstNumber").value;
    console.log(FirstNumber);

    let SecondNumber=document.querySelector("#SecondNumber").value;
    console.log(SecondNumber);

    let result=Number(FirstNumber) + Number(SecondNumber);
    console.log(result);

    let resultMessage= `The Sum of ${FirstNumber} and ${SecondNumber} = ${result}`;
    document.querySelector("#resultWindow").innerHTML=resultMessage





   }