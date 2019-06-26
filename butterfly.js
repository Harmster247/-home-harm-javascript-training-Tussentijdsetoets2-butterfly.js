"use strict"
class Butterfly {
  constructor(id, name, weight) {
    this.id = id;
    this.name = name;
    this.weight = weight;

  }
}

let butterfly = new Butterfly(1, "Citroenvlinder", 85)
let butterflyCollection = [];
butterflyCollection.push(butterfly);
butterflyCollection.push(new Butterfly(2, "Koevinkje", 36 ));
butterflyCollection.push(new Butterfly(3, "Dagpauwoog", 55 ));

console.log(butterflyCollection);
// print the weights
  for (var i = 0; i < butterflyCollection.length; i++) {
   // butterflyCollection[2];
  // let result = arr.reduce((sum, [2]) => sum + [2]);

console.log(butterflyCollection[i].weight);

  }

  // sum the weights
  console.log(butterflyCollection[0].weight +butterflyCollection[1].weight +butterflyCollection[2].weight);

let total = 0;
