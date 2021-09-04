const dateOfBirth=document.querySelector("#date-of-birth");
const luckyNumber=document.querySelector("#lucky-number");
const checkButton=document.querySelector("#check-button");
const output=document.querySelector("#output");


function checkDOBLucky(){
    const DOB=dateOfBirth.value;
    console.log(DOB);
    const sum=calculateSum(DOB);
   
    if(sum&&luckyNumber.value){
    compareValues(sum,luckyNumber.value);
    }else{
        output.innerText="Please enter input";
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
    if(sum%luckyNumber===0){
        output.innerText="Hurray! Your birthday is Lucky🥳"
    }else{
        output.innerText="Oops! Your birthday is not Lucky🤨"
    }
}

checkButton.addEventListener("click",checkDOBLucky);
