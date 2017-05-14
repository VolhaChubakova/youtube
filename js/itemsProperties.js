class ItemsProperties {
  constructor(itemWidth, margins) {
    this.itemWidth = itemWidth;
    this.margins = margins;
  }

  amountOfColumns() {
    let numbColumns = Math.round(document.documentElement.clientWidth / (this.itemWidth + this.margins * 2));
    return numbColumns;
  }
  sideMargins() {
    let numbColumns = this.amountOfColumns();
    let sideMargins = (document.documentElement.clientWidth - 30 - numbColumns * this.itemWidth) / (numbColumns * 2)/6;
    return sideMargins;
  }

  setMargins() {
    let installMargins = document.getElementsByClassName('itemProperties');
    if (this.clientWidth <=400){
      for (let i = 0; i < installMargins.length; i++) {
        installMargins[i].style.margin = "10px " + "10px";
      }
    }
    for (let i = 0; i < installMargins.length; i++) {
      installMargins[i].style.margin = "10px " + this.sideMargins() + "px";
    }
  }
}

export {
  ItemsProperties
};
