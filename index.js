
function myArray() {
    Object.defineProperty(this, "length", {
    value: 0,
    writable: true,
    enumerable: false,
  });

  this.length = arguments.length;

  for (let i = 0; i < arguments.length; i++) {
    this[i] = arguments[i];
  }
}

function myArray() {
  this.length = arguments.length;

  for (let i = 0; i < arguments.length; i++) {
    this[i] = arguments[i];
  }
}

let arr3 = new myArray(1, 2, 3, 4, 5);

 //console.log(Object.values(arr3));
    
arr = [1,2,3,4];
length = 4;

myArray.prototype.पुश = function (value) {
  this[this.length] = value;
  this.length++;
};

myArray.prototype.हटाओ = function () {
  delete this[this.length - 1];
  this.length--;
};

myArray.prototype.छापो = function () {
  console.log(Object.values(this));
};

myArray.prototype.शिखर=function(){
    console.log(arr3[arr3.length-1])
}

myArray.prototype.माप=function(){
    console.log(arr3.length)
}

myArray.prototype.उल्टाछापो=function(){
    let bag=""
    for(let i=arr3.length-1; i>=0; i--){
        bag=bag+(arr3[i])+" "
    }
    console.log(bag)
}

 arr3.हटाओ();
 arr3.पुश(7);
 arr3.पुश(8);
 arr3.छापो();
 arr3.शिखर()
 arr3.माप()
 arr3.उल्टाछापो()