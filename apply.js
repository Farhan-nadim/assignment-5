const searchBtn=document.getElementById("serachBtn");
searchBtn.addEventListener("click",function(){
         const input=document.getElementById("input");
         let inputValue=input.value;
         getFoodInfo(inputValue);
         
})



function getFoodInfo(mealname){
  
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealname}`)
    .then(res=>res.json())
     .then(data=>{
         const meal=  data.meals;
         if(meal){
            for (let i = 0; i < meal.length; i++) {
           
                const element = meal[i];
                const mealName=element.strMeal;
                const mealImg=element.strMealThumb
               
                const foodDiv=document.createElement("div");
                foodDiv.className="foodContainer"
               foodDiv.innerHTML=`
                <img src="${mealImg}">
                <h5><b>${mealName} </b></h5>
                `
               const aboutMeal=document.getElementById("aboutMeal");
                aboutMeal.appendChild(foodDiv);
               
                foodDiv.addEventListener("click",function(){
                   
                   const mealArea=element.strArea;
                   
                    const mealIngredeant1=element.strIngredient1 +"  " +" " +element.strMeasure1;
                    const mealIngredeant2=element.strIngredient2 +"  " +" " +element.strMeasure2;
                    const mealIngredeant3=element.strIngredient3 +"  " +" " +element.strMeasure3;
                    const mealIngredeant4=element.strIngredient4 +"  " +" " +element.strMeasure4;
                    const mealIngredeant5=element.strIngredient5 +"  " +" " +element.strMeasure5;
                    const mealIngredeant6=element.strIngredient6 +"  " +" " +element.strMeasure6;
                    const mealIngredeant7=element.strIngredient7 +"  " +" " +element.strMeasure7;
                    const mealIngredeant8=element.strIngredient8 +"  " +" " +element.strMeasure8;
                    const mealIngredeant9=element.strIngredient9 +"  " +" " +element.strMeasure9;
                    const mealIngredeant10=element.strIngredient10 +"  " +" " +element.strMeasure10;
                    const mealIngredeant11=element.strIngredient11 +"  " +" " +element.strMeasure11;
                    const mealIngredeant12=element.strIngredient12 +"  " +" " +element.strMeasure12;
                    const mealIngredeant13=element.strIngredient13 +"  " +" " +element.strMeasure13;
                    const mealIngredeant14=element.strIngredient14 +"  " +" " +element.strMeasure14;
                    const mealIngredeant15=element.strIngredient15 +"  " +" " +element.strMeasure15;
                    const mealIngredeant16=element.strIngredient16 +"  " +" " +element.strMeasure16;
                    const mealIngredeant17=element.strIngredient17 +"  " +" " +element.strMeasure17;
                    const mealIngredeant18=element.strIngredient18 +"  " +" " +element.strMeasure18;
                    const mealIngredeant19=element.strIngredient19 +"  " +" " +element.strMeasure19;
                    const mealIngredeant20=element.strIngredient20 +"  " +" " +element.strMeasure20;
                  
                    const mealDetails=document.createElement("div");
                    mealDetails.id="meal"
                    mealDetails.innerHTML=`
                    <img src="${mealImg}">
                    <h1>${mealName} </h1>
                    <h3> ${mealArea} Food</h3>
                    
                    <h4>Ingredients :</h4>
                    <span>${mealIngredeant1}</span><br>
                    <span>${mealIngredeant2}</span><br>
                    <span>${mealIngredeant3}</span><br>
                    <span>${mealIngredeant4}</span><br>
                    <span>${mealIngredeant5}</span><br>
                    <span>${mealIngredeant6}</span><br>
                    <span>${mealIngredeant7}</span><br>
                    <span>${mealIngredeant8}</span><br>
                    <span>${mealIngredeant9}</span><br>
                    <span>${mealIngredeant10}</span><br>
                    <span>${mealIngredeant11}</span><br>
                    <span>${mealIngredeant12}</span><br>
                    <span>${mealIngredeant13}</span><br>
                    <span>${mealIngredeant14}</span><br>
                    <span>${mealIngredeant15}</span><br>
                    <span>${ mealIngredeant16}</span><br>
                    <span>${ mealIngredeant17}</span><br>
                    <span>${ mealIngredeant18}</span><br>
                    <span>${ mealIngredeant19}</span><br>
                    <span>${ mealIngredeant20}</span><br>
                   `
                  const mealInfo=document.getElementById("mealInfo");
                  mealInfo.appendChild(mealDetails)
                  
   
                })
                
                
            }
         }else{
           

            alert("Sorry! Here is no food related to that. Please try another");
         }
    
     });
}

























