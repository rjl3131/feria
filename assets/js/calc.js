
function GETD_calculator(){
    document.getElementById('output_container1').innerHTML='';
    const gender = document.querySelector('[name="gender"]:checked').value;
    const age = document.getElementById('age').value;
    const weight = document.getElementById('weight1').value; 
    const height = document.getElementById('height1').value;
    const PAd = document.querySelector('[name="PAd"]:checked').value;
    const PAnd = document.querySelector('[name="PAnd"]:checked').value;
    var bmr      // initialize variable
    if (gender == 'male') {
       var  bmr = 10*weight +6.25*height -5*age + 5 
    } else if (gender == 'female'){
     var  bmr = 10*weight +6.25*height - 5*age - 161
    } 
    var PAdValue  // initialize variable
    if (PAd == 'sedentary'){
       var PAdValue = 275
       }
    else if (PAd == 'moderate'){   
       var PAdValue = 325
    }
    else if (PAd == 'active'){   
       var PAdValue =385
       }
    else if (PAd == 'very active'){   
        var PAdValue = 460
    }
    var PAndValue  // initialize variable
    if (PAnd == 'sedentary'){
        var PAndValue = 275
        }
     else if (PAnd == 'moderate'){   
        var PAndValue = 325
     }
     else if (PAnd == 'active'){   
        var PAndValue =385
        }
     else if (PAnd == 'very active'){   
         var PAndValue = 460
     }
      
    // Adapt same code for PAnd (no deportivo)
        
    var tbm = 0.1*bmr
    let GETD= bmr  + tbm + PAdValue + PAndValue  
    GETD = GETD.toFixed(2);
    const node = document.createTextNode("Debes consumir "+String(GETD)); // Create a child node where text will be stored 
    const para = document.createElement("p");                     // Creates a <p> element for later use
    para.appendChild(node);                                       // Insert child node into parent node, that is, <p>
    const output = document.getElementById("output_container1");   // Access the empty container <div> where <p> will be included 
    output.appendChild(para);                                // Transform 
}



function Clean(){
   document.getElementById('output_container1').innerHTML='';
   document.getElementById('height1').value = '';
   document.getElementById('weight1').value = '';
   document.getElementById('age').value = '';
   
   const genders = document.getElementsByName("gender");
   for(var i=0;i<genders.length; i++){
     genders[i].checked = false;
   }
   const PAds = document.getElementsByName("PAd");
   for(var i=0;i<PAds.length; i++){
     PAds[i].checked = false;
   }
   const PAnds = document.getElementsByName("PAnd");
   for(var i=0;i<PAnds.length; i++){
     PAnds[i].checked = false;
   }
 }
 