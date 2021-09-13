const dateOfBirth=document.querySelector("#date-of-birth");
const luckyNumber=document.querySelector("#lucky-number");
const checkButton=document.querySelector("#check-button");
const output=document.querySelector("#output");


function checkDOBLucky(){
    const DOB=dateOfBirth.value;

    const sum=calculateSum(DOB);
   
    if(sum && luckyNumber.value){
    compareValues(sum,luckyNumber.value);
    }else{
        output.innerText="Please enter both input";
    }
    
}

function calculateSum(DOB){
    DOB=DOB.replaceAll("-","")
    let sum=0;
    for(let i=0;i<DOB.length;i++)
    {
        sum = sum + Number(DOB.charAt(i));
    } 
    return sum;
}
function compareValues(sum,luckyNumber){
    if (Number(!luckyNumber)) {
        return output.innerText = "Please enter your lucky number too"
    } else if (Number(luckyNumber < 0)) {
        return output.innerText = "Please enter positive number"
    }

    if(sum%luckyNumber===0){
        output.innerText="Hurray! Your birthday is Lucky🥳"
    }else{
        output.innerText="Oops! Your birthday is not Lucky🤨"
    }
}

checkButton.addEventListener("click",checkDOBLucky);
