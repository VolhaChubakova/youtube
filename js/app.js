import {
  Loader
} from './loader.js';
import {
  RenderStructure
} from './renderStructure.js';
import {
  ItemsProperties
} from './itemsProperties.js';
import {
  VideoItem
} from './videoItem.js';

window.onload = function() {
  let renderStructure = new RenderStructure(
    document.createElement("header"),
    document.createElement("input"),
    document.createElement("section"),
    document.createElement("footer"),
    document.createElement("table"),
    document.createElement("tbody"),
    document.createElement("tr"),
    document.createElement("td"));
  renderStructure.renderElems();

  let itemsProperties = new ItemsProperties(324, 80);
  let loader = new Loader();

  renderStructure.input.onkeypress = function(e) {
    if (e.keyCode == 13) {
      renderStructure.clearIcons();
      loader.initialize(itemsProperties.amountOfColumns(), renderStructure.input.value).then(() => {
        renderStructure.renderVideoItems(loader, itemsProperties);
        renderStructure.renderOneIcon(1);
        renderStructure.renderOneIcon(2);
        renderStructure.renderOneIcon(3);
        function updateCells() {
          let cells = document.getElementsByTagName("td");
          for (let i = 0; i < cells.length; i++) {
            let page = i;
            cells[i].innerHTML = i + 1;
            cells[i].onclick = function() {
              loader.navigate(page).then(() => {                
               let selected = document.getElementsByClassName("active");
               for (let j=0; j<selected.length;j++){
                 selected[j].classList.remove("active");
               }
              cells[page].className += " active";
                renderStructure.renderVideoItems(loader,itemsProperties);
              });
              if (page === cells.length - 1) {
                renderStructure.renderOneIcon(cells.length + 1);
                renderStructure.renderOneIcon(cells.length + 1);
                renderStructure.renderOneIcon(cells.length + 1);
                updateCells();
              }
            }
          }
          cells[loader.currentPageIndex].className += " active";
        }
        updateCells();

        window.onresize = function() {
          loader.setPageSize(itemsProperties.amountOfColumns()).then(() => {
            renderStructure.renderVideoItems(loader, itemsProperties);
            renderStructure.clearIcons();
            for (let i = 0; i <= loader.currentPageIndex; i++) {
              renderStructure.renderOneIcon(i + 1);
            }
            renderStructure.renderAddIcons();
            updateCells();
          });
        };

        if (/Android|webOS|iPhone|iPad|iPod|Opera Mini/i.test(navigator.userAgent)) {
          let xDirection = "";
          let oldX = 0;
          let moveDiff = 0;
          document.body.addEventListener("touchstart", function(e) {
            let pageX = e.changedTouches[0].pageX;
            xDirection = "";
            oldX = pageX;
            moveDiff = 0;
          }, false);
          document.body.addEventListener("touchmove", function(e) {
            let pageX = e.changedTouches[0].pageX;
            let diff = pageX - oldX;
            moveDiff += diff;
            oldX = pageX;
            if (Math.abs(moveDiff) < 200) {
              return;
            }
            if (moveDiff > 0) {
              xDirection = "right";
            } else {
              xDirection = "left";
            }
            let pageIndex = 0;
            if (xDirection == "left") {
              pageIndex = loader.currentPageIndex + 1;
            } else if (xDirection == "right") {
              pageIndex = loader.currentPageIndex - 1;
            }
            moveDiff = 0;
            loader.navigate(pageIndex).then(() => {
              renderStructure.renderVideoItems(loader, itemsProperties);
              renderStructure.clearIcons();
              for (let i = 0; i <= loader.currentPageIndex; i++) {
                renderStructure.renderOneIcon(i + 1);
              }
              renderStructure.renderAddIcons();
              updateCells();
            });
          }, false);
        }
        let xDirection = "";
        let oldX = 0;
        let moveDiff = 0;
        document.body.addEventListener("mousedown", function functionName(e) {
          xDirection = "";
          oldX = e.pageX;
          moveDiff = 0;
        });

        document.body.addEventListener("mousemove", function functionName(e) {
          if (e.which != 1) {
            return;
          }
          let diff = e.pageX - oldX;
          moveDiff += diff;
          oldX = e.pageX;
          if (Math.abs(moveDiff) < 120) {
            return;
          }
          if (moveDiff > 0) {
            xDirection = "right";
          } else {
            xDirection = "left";
          }
          let pageIndex = 0;
          if (xDirection == "left") {
            pageIndex = loader.currentPageIndex + 1;
          } else if (xDirection == "right") {
            pageIndex = loader.currentPageIndex - 1;
          }
          moveDiff = 0;
          loader.navigate(pageIndex).then(() => {
            renderStructure.renderVideoItems(loader, itemsProperties);
            renderStructure.clearIcons();
            for (let i = 0; i <= loader.currentPageIndex; i++) {
              renderStructure.renderOneIcon(i + 1);
            }
           renderStructure.renderAddIcons();
            updateCells();
          });

        });
      }).catch(error => {
        console.log(error);
      });
    }
  }
}
