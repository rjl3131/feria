

/* This is a comment */

/* function IMC_calculator(){
    const btn = document.getElementById('IMC_btn')
    const randomColor = Math.floor(Math.random()*16777215).toString(16); 
    btn.style.backgroundColor = "#" + randomColor;
    btn.style.color = 'white';
}
*/

function BMI_calculator(){
    document.getElementById('output_container').innerHTML='';     // This clears the container 'output_container' every time you click butto
    var weight = document.getElementById('weight').value;         // Takes the value of weight inserted in the input field 'weight'
    var height = document.getElementById('height').value;         // Takes the value of height inserted in the input field 'height'
    var BMI = weight/height**2;    
    const strBMI = String(BMI.toFixed(2));    

    if (BMI<=18.5) {                                    // Need to handle multiple cases
        var status = "underweight";
    } else if (BMI>18.5 && BMI<=24.9){
        var status = "normal";
    } else if (BMI>24.9 && BMI<=29.9){
        var status = "overweight";

    } else if (BMI>29.9 && BMI<=34.9){
        var status = "obese";   
    }
    else {
        var status = "extremely obese"
    } 
                 // Calculates the IMC using height and weight
    
    const node = document.createTextNode("Your BMI equals "+ strBMI +", which says that you are " + status); // Create a child node where text will be stored 
    const para = document.createElement("p");                     // Creates a <p> element for later use
    para.appendChild(node);                                       // Insert child node into parent node, that is, <p>
    const output = document.getElementById("output_container");   // Access the empty container <div> where <p> will be included 
    output.appendChild(para);                                // Transform variable 'Imc' from float to string. 
                                       // Insert <p> into <div>

    
}



