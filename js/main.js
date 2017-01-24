console.info('Welcome to the dessert maker v1.0.');

var currentFruit = null;
var currentDessert = null;

var images = {
  fruits: {
    apple: 'img/Apple.jpg',
    orange: 'img/Orange.jpg',
    banana: 'img/Banana.jpg'
  },
  desserts: {
    icecream: 'img/IceCream.jpg',
    cake: 'img/Cake.jpg',
    pie: 'img/Pie.jpg'
  },
  mixes: {
    apple: {
      icecream: 'img/AppleIceCream.jpg',
      cake: 'img/AppleCake.jpg',
      pie: 'img/ApplePie.jpg'
    },
    orange: {
      icecream: 'img/OrangeIceCream.jpg',
      cake: 'img/OrangeCake.jpg',
      pie: 'img/OrangePie.jpg'
    },
    banana: {
      icecream: 'img/BananaIceCream.jpg',
      cake: 'img/BananaCake.jpg',
      pie: 'img/BananaPie.jpg'
    }
  }
};

var apple = document.querySelector('.Fruit--apple');
var banana = document.querySelector('.Fruit--banana');
var orange = document.querySelector('.Fruit--orange');
var icecream = document.querySelector('.Dessert--icecream');
var cake = document.querySelector('.Dessert--cake');
var pie = document.querySelector('.Dessert--pie');
var reset = document.querySelector('.Reset');

var fruit = document.querySelector('.Holder--fruit');
var dessert = document.querySelector('.Holder--dessert');
var result = document.querySelector('.Holder--result');
var fruitimg = document.createElement('img');
var dessertimg = document.createElement('img');
var resultimg = document.createElement('img');

apple.addEventListener('click', function() {
  fruitimg.src = 'img/Apple.jpg';
  fruit.appendChild(fruitimg);
  currentFruit = "apple";
  makeResult();
});

banana.addEventListener('click', function() {
  fruitimg.src = 'img/Banana.jpg';
  fruit.appendChild(fruitimg);
  currentFruit = "banana";
  makeResult();
});

orange.addEventListener('click', function() {
  fruitimg.src = 'img/Orange.jpg';
  fruit.appendChild(fruitimg);
  currentFruit = "orange";
  makeResult();
});

icecream.addEventListener('click', function() {
  dessertimg.src = 'img/IceCream.jpg';
  dessert.appendChild(dessertimg);
  currentDessert = "icecream";
  makeResult();
});

cake.addEventListener('click', function() {
  dessertimg.src = 'img/Cake.jpg';
  dessert.appendChild(dessertimg);
  currentDessert = "cake";
  makeResult();
});

pie.addEventListener('click', function() {
  dessertimg.src = 'img/Pie.jpg';
  dessert.appendChild(dessertimg);
  currentDessert = "pie";
  makeResult();
});

reset.addEventListener('click', function(){

  while(fruit.firstChild){
    fruit.removeChild(fruit.firstChild);
  }
  while(dessert.firstChild){
    dessert.removeChild(dessert.firstChild);
  }
  while(result.firstChild){
    result.removeChild(result.firstChild);
  }

  currentFruit = null;
  currentDessert = null;
});

function makeResult(){
  if(currentFruit != null && currentDessert != null){
    if(currentFruit == "apple"){
      if(currentDessert == "icecream"){
        resultimg.src = 'img/AppleIceCream.jpg';
        result.appendChild(resultimg);
      }
      else if(currentDessert == "cake"){
        resultimg.src = 'img/AppleCake.jpg';
        result.appendChild(resultimg);
      }
      else if(currentDessert == "pie"){
        resultimg.src = 'img/ApplePie.jpg';
        result.appendChild(resultimg);
      }
    }
    else if(currentFruit == "banana"){
      if(currentDessert == "icecream"){
        resultimg.src = 'img/BananaIceCream.jpeg';
        result.appendChild(resultimg);
      }
      else if(currentDessert == "cake"){
        resultimg.src = 'img/BananaCake.jpg';
        result.appendChild(resultimg);
      }
      else if(currentDessert == "pie"){
        resultimg.src = 'img/BananaPie.jpg';
        result.appendChild(resultimg);
      }
    }
    else if(currentFruit == "orange"){
      if(currentDessert == "icecream"){
        resultimg.src = 'img/OrangeIceCream.jpg';
        result.appendChild(resultimg);
      }
      else if(currentDessert == "cake"){
        resultimg.src = 'img/OrangeCake.jpg';
        result.appendChild(resultimg);
      }
      else if(currentDessert == "pie"){
        resultimg.src = 'img/OrangePie.jpg';
        result.appendChild(resultimg);
      }
    }
  }
}
