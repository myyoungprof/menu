let menuData = [

    { 
     id: 1,
     title: "Sharwama",
     category: "shake",
     price: "$17.4",
     Image: "mean1.png",
     desc: "Pancake  shwarma is a food that is love by many nigerians because of it taste and its mostly been eaten at night by that does not mean someone cannot eat at other times of the day",

    },

    {
        id: 2,
        title: "Japan cake",
        category: "lunch",
        price: "£23.4",
        Image: "./menu2.png",
        desc: "Cake is a flour confection made from flour, sugar, and other ingredients, and is usually baked. In their oldest forms, cakes were modifications of bread, but cakes now cover a wide range of preparations ",
   
       },

       {
        id: 3,
        title: "Bacon Cake",
        category: "breakfast",
        price: "$34.3",
        Image: "./menu 3.png",
        desc: "A pancake is a flat cake, often thin and round, prepared from a starch-based batter that may contain eggs, milk and butter and cooked on a hot surface such as a griddle or frying pan, often frying with oil or butter.",
   
       },

       {
        id: 4,
        title: "Corn Fruit",
        category: "shake",
        price: "$31.4",
        Image: "./menu 4.jpg",
        desc: "Maize, also known as corn, is a cereal grain first domesticated by indigenous peoples in southern Mexico about 10,000 years ago.",
   
       },

       {
        id: 5,
        title: "Bread Fruit",
        category: "shake",
        price: "$24.5",
        Image: "./menu 5.jpg",
        desc: "Bread is a staple food prepared from a dough of flour and water, usually by baking. Throughout recorded history and around the world.",
   
       },

       {
        id: 6,
        title: "Country Delight",
        category: "breakfast",
        price: "$23.4",
        Image: "./menu 6.jpg",
        desc: "Shawarma is a popular Levantine dish consisting of meat cut into thin slices, stacked in a cone-like shape, and roasted on a slowly-turning vertical rotisserie or spit.",
   
       },

       {
        id: 7,
        title: "Egg Attack",
        category: "breakfast",
        price: "$11.4",
        Image: "./menu 7.jpg",
        desc: "Eggs are laid by female animals of many different species, including birds, reptiles, amphibians, a few mammals, and fish, and many of these have been eaten by humans for thousands of years.",
   
       },

       {
        id: 8,
        title: "Butterfly Pancake",
        category: "lunch",
        price: "£16.5",
        Image: "./menu 8.jpg",
        desc: "Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients.",
   
       },

       {
        id: 9,
        title: "Pure Heaven",
        category: "lunch",
        price: "$13.2",
        Image: "./menu 9.jpg",
        desc: "Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients.",
   
       },

       {
        id: 10,
        title: "Fish Roll",
        category: "breakfast",
        price: "$19.5",
        Image: "./menu 10.jpg",
        desc: "A meat pie is a pie with a filling of meat and often other savory ingredients. They are found in cuisines worldwide. Meat  through the Maillard reaction. Many varieties have a flaky crust.",
   
       },

       {
        id: 11,
        title: "Fruite Drink",
        category: "lunch",
        price: "$13.5",
        Image: "./menu 11.jpg",
        desc: "In botany, a fruit is the seed-bearing structure in flowering plants that is formed from the ovary after flowering. Fruits are the means by which flowering plants disseminate their seeds.",
   
       }

];
 
// let shake = menu.map( (item) => {
//            if(item.category === 'shake') {
//               // console.log(item.category)
//               return item.category;
//            }
//         })
// console.log(shake)


let menu = menuData
const main = document.querySelector(".main");

const btn = document.querySelectorAll(".btn")

window.addEventListener("DOMContentLoaded", greatman);


function greatman(para){
  let showMan = menu.map(function (item){
//do something with para
    // console.log("item")
            return `<div class="second">
            <div class="png">
              <img src="${item.Image}" class="jpn">
            </div>
            
            <div class="sub">
              <h4 class="name">${item.title}<span class="price">$${item.price}</span></h4>
              <hr id="bee">
            <p class="info">${item.desc}</p>
            </div>
          </div>`;
        })
        
    showMan = showMan.join("");
    main.innerHTML = showMan;
    // console.log(showMan)
    // console.log(main)
}


btn.forEach(function(btns){
  btns.addEventListener("click", function(e){
  menu = menuData
  let newMenu = []
    const cate = e.currentTarget.dataset.cat;
    console.log(cate)
    let i = 0
    const meanCategory = menu.forEach(function(item){
      // console.log(tim.category)
      if(cate==="all"){
        newMenu = menuData
        return 
      }
      
      if(item.category === cate){
          newMenu[i]= item
      i++
        }
    })
    console.log("newMenu", newMenu)
    // console.log(menu)
    menu = newMenu
    console.log(menu)
    
    // console.log(meanCategory)
    greatman()
  })

});



