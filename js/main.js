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
var img = document.createElement('img');

apple.addEventListener('click', function() {
  img.src = 'img/Apple.jpg';
  fruit.appendChild(img);
});

banana.addEventListener('click', function() {
  img.src = 'img/Banana.jpg';
  fruit.appendChild(img);
});

orange.addEventListener('click', function() {
  img.src = 'img/Orange.jpg';
  fruit.appendChild(img);
});

icecream.addEventListener('click', function() {
  img.src = 'img/IceCream.jpg';
  dessert.appendChild(img);
});

cake.addEventListener('click', function() {
  img.src = 'img/Cake.jpg';
  dessert.appendChild(img);
});

pie.addEventListener('click', function() {
  img.src = 'img/Pie.jpg';
  dessert.appendChild(img);
});
