class Bakery {
  constructor(name) {
    this.name = name;
    this.inventory = [];
    this.profit = 0;
  }

  addItem(batch) {
    this.inventory.push(batch);
  }

  sellItem(item, qty) {
    item.quantity -= qty;
    this.profit += Number((item.pricePer * qty).toFixed(2));
  }

  (qty) {
    
  }
}

class BakedGoods {
  static bakedInStore(item,qty,store,expense){
    let price = (expense +(expense * 0.2)) * qty;
    const newItem = new BakedGoods(item,qty,store.name,price.toFixed(2));
    store.addItem(newItem);
    return newItem;
  }

  constructor(item,qty,store,price){
    this.store = store,
    this.item = item,
    this.quantity = qty;
    this.pricePer = price;
  }
}

const proofInTheDough = new Bakery('Proof In The Dough');
const chocChipCookies = BakedGoods.bakedInStore('chocolate chip cookies', 12, proofInTheDough, 0.10);
const cupCakes = BakedGoods.bakedInStore('cup cakes', 6, proofInTheDough, 0.25)

proofInTheDough.sellItem(chocChipCookies,4);
console.log(chocChipCookies);
console.log(proofInTheDough);

