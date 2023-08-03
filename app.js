function billCalculator() {
document.getElementById('submit').addEventListener('submit', (event) => {
    event.preventDefault();
    const  Amount = parseFloat(document.getElementById('orderAmount').value);
    const Percentage = parseFloat(document.getElementById('percentage').value);
    
    if (Amount){
        const alorithm =  Percentage / 100;
        const result = alorithm * Amount;
        const final = Amount - result;
        document.getElementById('answer');
        answer.innerHTML = "Amout in return is " + final 
        
    }
    else{
     answer.innerHTML = "Please input digits"
    }
   })
}

billCalculator();