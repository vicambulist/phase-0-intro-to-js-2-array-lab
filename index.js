// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
cats.push(name);}

destructivelyAppendCat(Ralph);

beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

function destructivelyPrependCat(name){
    cats.unshift(name);}

destructivelyPrependCat(Ralph);


beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });


  function destructivelyRemoveLastCat() {;
  cats.pop();
}
destructivelyRemoveLastCat();




beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });


  function destructivelyRemoveFirstCat() {
  cats.shift();
}
destructivelyRemoveFirstCat();




beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });


  function appendCat(name) {
    const catsnew = [...cats, name];
    return catsnew;}

  appendCat(Broom);


  beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

  function prependCat(name) {
    const catsprepend =[name, ...cats];
    return catsprepend;}

    prependCat(Tabitha);


    
  beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });



function removeLastCat() {
const catremovelast = cats.slice(0, -1);
return catremovelast;
}

removeLastCat();





  beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });


  function removeFirstCat() {
    const catremovefirst = cats.slice(1);
    return catremovefirst;
    }
    
    removeFirstCat();
    