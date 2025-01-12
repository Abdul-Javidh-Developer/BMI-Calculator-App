function calculateBMI() {
    const weight = parseFloat(document.getElementById("box1").value); 
    const height = parseFloat(document.getElementById("box2").value);
    const result = document.getElementById("result");

    
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert("Please enter Value for weight and height.");
        return;
    }

        
    const heightInMeters = height / 100;

    
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

    
    result.textContent = `Your BMI is ${bmi}`;



    if(weight > 650 || height > 300 ){
        result.textContent = "Invalid Weight and Height"
    }else if (bmi < 18.5)
        {
            alert("You are underweight.");
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            alert("Your weight is normal.");
        } else if (bmi >= 25 && bmi <= 29.9) {
            alert("You are overweight.");
        } else {
            alert("You are obese.");
        }


   


    

 

   
  
}

