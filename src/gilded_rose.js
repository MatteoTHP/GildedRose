class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }


  updateQuality() {
    this.items.forEach((item) =>{

      const checkName = (item) => {
        if(item.name.includes('Conjured')) {
          updateConjuredItem(item)
        } else {
          updateItem(item)
        }
      };

      const updateConjuredItem = (item) =>  {
        item.sellIn = item.sellIn - 1;
        qualityPlus(item, 2)
      };
    
      const updateItem = (item) => {
        switch (item.name) {
          case 'Aged Brie':
             if (item.sellIn <= 5) {
              qualityPlus(item, 3);
              item.sellIn = item.sellIn - 1;
            } else if (item.sellIn <= 10) {
              qualityPlus(item, 2);
              item.sellIn = item.sellIn - 1;
            } else {
              qualityPlus(item, 1);
              item.sellIn = item.sellIn - 1;
            };
            break;
          case 'Sulfuras, Hand of Ragnaros':
            break;
          case 'Backstage passes to a TAFKAL80ETC concert':
            if(item.sellIn <= 0) {
              item.quality = 0;
            } else if (item.sellIn <= 5) {
              qualityPlus(item, 3);
              item.sellIn = item.sellIn - 1;
            } else if (item.sellIn <= 10) {
              qualityPlus(item, 2);
              item.sellIn = item.sellIn - 1;
            } else {
              qualityPlus(item, 1);
              item.sellIn = item.sellIn - 1;
            };
            break;
          default:
            if(item.sellIn <= 0) {
              qualityMinus(item, 2);
              item.sellIn = item.sellIn - 1;
            } else {
              qualityMinus(item, 1);
              item.sellIn = item.sellIn - 1;
            };
        };
      };



      const qualityMinus = (item, minus) => {
        if(item.quality > 0) {
          item.quality = item.quality - minus;
        };
      };
    
      const qualityPlus = (item, plus) => {
        if(item.quality < 50) {
          item.quality = item.quality + plus;
        };
      }; 


      checkName(item);
    })

    
    return this.items;
  }

 
};

module.exports = {
  Item,
  Shop
}
