import {
  Loader
} from './loader.js';
import {
  ItemsProperties
} from './itemsProperties.js';

class RenderStructure {
  constructor(header, input, section, footer, table, tbody, tr, td) {
    this.header = header;
    this.input = input;
    this.section = section;
    this.footer = footer;
    this.table = table;
    this.tbody = tbody;
    this.tr = tr;
    this.td = td;
  }

  renderElems() {
    document.body.appendChild(this.header);
    this.input.placeholder = "Search on youtube";
    this.input.type = "search";
    this.input.id = "search";
    this.header.appendChild(this.input);
    document.body.appendChild(this.section);
    document.body.appendChild(this.footer);
  }

  renderPageIcons() {
    this.footer.appendChild(this.table);
    this.table.appendChild(this.tbody);
    this.tbody.appendChild(this.tr);
  }

  onClick(hello) {
    this.td.onclick = function() {
      alert("sdfdsf");
    }

  }
  clearIcons() {
    this.tr.innerHTML = '';
  }

  renderOneIcon(value) {
    this.tr.appendChild(document.createElement("td")).innerHTML = value;
  }

  renderVideoItems(loader, itemsProperties){
    this.section.innerHTML = "";
    for (let i = 0; i < loader.currentItems.length; i++) {
      let videoItem = loader.currentItems[i];
      this.section.innerHTML += videoItem.render();
    }
      itemsProperties.setMargins();
      this.renderPageIcons();
  }
renderAddIcons(){
  let cells = document.getElementsByTagName("td");
  this.renderOneIcon(cells.length + 1);
  this.renderOneIcon(cells.length + 1);
  this.renderOneIcon(cells.length + 1);
}

}
export {
  RenderStructure
};
