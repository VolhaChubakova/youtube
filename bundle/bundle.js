/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ItemsProperties = function () {
  function ItemsProperties(itemWidth, margins) {
    _classCallCheck(this, ItemsProperties);

    this.itemWidth = itemWidth;
    this.margins = margins;
  }

  _createClass(ItemsProperties, [{
    key: "amountOfColumns",
    value: function amountOfColumns() {
      var numbColumns = Math.round(document.documentElement.clientWidth / (this.itemWidth + this.margins * 2));
      return numbColumns;
    }
  }, {
    key: "sideMargins",
    value: function sideMargins() {
      var numbColumns = this.amountOfColumns();
      var sideMargins = (document.documentElement.clientWidth - 30 - numbColumns * this.itemWidth) / (numbColumns * 2) / 6;
      return sideMargins;
    }
  }, {
    key: "setMargins",
    value: function setMargins() {
      var installMargins = document.getElementsByClassName('itemProperties');
      if (this.clientWidth <= 400) {
        for (var i = 0; i < installMargins.length; i++) {
          installMargins[i].style.margin = "10px " + "10px";
        }
      }
      for (var _i = 0; _i < installMargins.length; _i++) {
        installMargins[_i].style.margin = "10px " + this.sideMargins() + "px";
      }
    }
  }]);

  return ItemsProperties;
}();

exports.ItemsProperties = ItemsProperties;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RenderStructure = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _loader = __webpack_require__(2);

var _itemsProperties = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RenderStructure = function () {
  function RenderStructure(header, input, section, footer, table, tbody, tr, td) {
    _classCallCheck(this, RenderStructure);

    this.header = header;
    this.input = input;
    this.section = section;
    this.footer = footer;
    this.table = table;
    this.tbody = tbody;
    this.tr = tr;
    this.td = td;
  }

  _createClass(RenderStructure, [{
    key: 'renderElems',
    value: function renderElems() {
      document.body.appendChild(this.header);
      this.input.placeholder = "Search on youtube";
      this.input.type = "search";
      this.input.id = "search";
      this.header.appendChild(this.input);
      document.body.appendChild(this.section);
      document.body.appendChild(this.footer);
    }
  }, {
    key: 'renderPageIcons',
    value: function renderPageIcons() {
      this.footer.appendChild(this.table);
      this.table.appendChild(this.tbody);
      this.tbody.appendChild(this.tr);
    }
  }, {
    key: 'onClick',
    value: function onClick(hello) {
      this.td.onclick = function () {
        alert("sdfdsf");
      };
    }
  }, {
    key: 'clearIcons',
    value: function clearIcons() {
      this.tr.innerHTML = '';
    }
  }, {
    key: 'renderOneIcon',
    value: function renderOneIcon(value) {
      this.tr.appendChild(document.createElement("td")).innerHTML = value;
    }
  }, {
    key: 'renderVideoItems',
    value: function renderVideoItems(loader, itemsProperties) {
      this.section.innerHTML = "";
      for (var i = 0; i < loader.currentItems.length; i++) {
        var videoItem = loader.currentItems[i];
        this.section.innerHTML += videoItem.render();
      }
      itemsProperties.setMargins();
      this.renderPageIcons();
    }
  }, {
    key: 'renderAddIcons',
    value: function renderAddIcons() {
      var cells = document.getElementsByTagName("td");
      this.renderOneIcon(cells.length + 1);
      this.renderOneIcon(cells.length + 1);
      this.renderOneIcon(cells.length + 1);
    }
  }]);

  return RenderStructure;
}();

exports.RenderStructure = RenderStructure;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Loader = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _videoItem = __webpack_require__(3);

var _renderStructure = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Loader = function () {
  function Loader() {
    _classCallCheck(this, Loader);

    this.numberItemsToLoad = 15;
  }

  _createClass(Loader, [{
    key: 'initialize',
    value: function initialize(pageSize, query) {
      var _this = this;

      this.currentPageIndex = -1;
      this.currentItemsPosition = -1;
      this.nextPageToken = null;
      this.loadedItems = [];
      this.currentItems = [];
      this.query = query;
      this.pageSize = pageSize;
      return new Promise(function (resolve, reject) {
        _this.loadNextItems().then(function (items) {
          _this.currentItems = _this.loadedItems.slice(0, _this.pageSize);
          _this.currentPageIndex = 0;
          _this.currentItemsPosition = 0;
          resolve();
        }).catch(function (status) {
          reject();
        });
      });
    }
  }, {
    key: 'navigate',
    value: function navigate(newPageIndex) {
      var _this2 = this;

      if (newPageIndex < 0) {
        return;
      }
      var pageDiff = newPageIndex - this.currentPageIndex;
      var itemsDiff = pageDiff * this.pageSize;
      var newCurrentItemsPosition = this.currentItemsPosition + itemsDiff;
      if (this.loadedItems.length >= newCurrentItemsPosition + this.pageSize) {
        this.currentItemsPosition = newCurrentItemsPosition;
        this.currentPageIndex = newPageIndex;
        this.currentItems = this.loadedItems.slice(this.currentItemsPosition, this.currentItemsPosition + this.pageSize);
        return new Promise(function (resolve, reject) {
          resolve();
        });
      }
      return new Promise(function (resolve, reject) {
        _this2.loadNextItems().then(function () {
          _this2.navigate(newPageIndex).then(function () {
            resolve();
          });
        }).catch(function () {
          reject();
        });
      });
    }
  }, {
    key: 'setPageSize',
    value: function setPageSize(newPageSize) {
      if (newPageSize == this.pageSize) {
        return new Promise(function (resolve, reject) {});
      }
      if (newPageSize == 0) {
        newPageSize = 1;
      }
      this.pageSize = newPageSize;
      this.currentPageIndex = Math.floor(this.currentItemsPosition / this.pageSize);
      this.currentItemsPosition = this.currentPageIndex * this.pageSize;
      return this.navigate(this.currentPageIndex);
    }
  }, {
    key: 'loadNextItems',
    value: function loadNextItems() {
      var _this3 = this;

      var listUrl = '';
      if (this.nextPageToken) {
        listUrl = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyCKpZogA9Cd-koNK15h3A5bshbZh6Cuv1Y&type=video&part=snippet&maxResults=' + this.numberItemsToLoad + '&pageToken=' + this.nextPageToken + '&q=' + this.query;
      } else {
        listUrl = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyCKpZogA9Cd-koNK15h3A5bshbZh6Cuv1Y&type=video&part=snippet&maxResults=' + this.numberItemsToLoad + '&q=' + this.query;
      }
      return new Promise(function (resolve, reject) {
        _this3.executeRequest(listUrl).then(function (listResult) {
          var idsArr = listResult.items.map(function (x) {
            return x.id.videoId;
          });
          var ids = idsArr.join(',');
          var statUrl = 'https://www.googleapis.com/youtube/v3/videos?&key=AIzaSyCKpZogA9Cd-koNK15h3A5bshbZh6Cuv1Y&part=statistics&id=' + ids;
          _this3.executeRequest(statUrl).then(function (statResult) {
            var videoItems = [];
            for (var i = 0; i < statResult.items.length; i++) {
              var statItem = statResult.items[i];
              var listItem = listResult.items[i];
              var videoItem = new _videoItem.VideoItem(listItem, statItem);
              videoItems.push(videoItem);
            }
            _this3.loadedItems = _this3.loadedItems.concat(videoItems);
            _this3.nextPageToken = listResult.nextPageToken;
            resolve();
          }).catch(function (statusText) {
            reject(statusText);
          });
        }).catch(function (statusText) {
          reject(statusText);
        });
      });

      return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();

        xhr.open("GET", url);
        xhr.onload = function () {
          if (xhr.status >= 200 && xhr.status < 300) {
            var result = JSON.parse(xhr.response);
            _this3.loadedItems = _this3.loadedItems.concat(result.items);
            _this3.nextPageToken = result.nextPageToken;
            resolve();
          } else {
            reject(xhr.statusText);
          }
        };
        xhr.onerror = function () {
          return reject(xhr.statusText);
        };
        xhr.send("");
      });
    }
  }, {
    key: 'executeRequest',
    value: function executeRequest(url) {
      return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.onload = function () {
          if (xhr.status >= 200 && xhr.status < 300) {
            var result = JSON.parse(xhr.response);
            resolve(result);
          } else {
            reject(xhr.statusText);
          }
        };
        xhr.onerror = function () {
          return reject(xhr.statusText);
        };
        xhr.send("");
      });
    }
  }]);

  return Loader;
}();

exports.Loader = Loader;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VideoItem = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _renderStructure = __webpack_require__(1);

var _itemsProperties = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VideoItem = function () {
  function VideoItem(listItem, statItem) {
    _classCallCheck(this, VideoItem);

    this.listItem = listItem;
    this.statItem = statItem;
  }

  _createClass(VideoItem, [{
    key: 'id',
    value: function id() {
      return this.listItem.id.videoId;
    }
  }, {
    key: 'render',
    value: function render(stat) {
      var append = '';
      var itemTitle = this.listItem.snippet.title;
      var itemImg = this.listItem.snippet.thumbnails.medium.url;
      var itemChannel = this.listItem.snippet.channelTitle;
      var itemDescript = this.listItem.snippet.description;
      var itemDate = this.listItem.snippet.publishedAt;
      var linkToYoutubeVideo = 'http://www.youtube.com/watch?v=' + this.id();
      var itemStat = this.statItem.statistics.viewCount;
      var shortDate = new Date(itemDate);
      var linkToDiffPage = '';
      var year = shortDate.getFullYear();
      var month = shortDate.getMonth() + 1;
      var day = shortDate.getDate();

      var stringdate = year + "-" + month + "-" + day;
      append += '<div class="videoitem"><div id="' + this.listItem.id + '" class="itemProperties"><a href="http://www.youtube.com/watch?v=' + this.listItem.id.videoId + '"><h1>' + itemTitle + '</h1></a><img src="' + itemImg + '"/><p class="channel"><i class="fa fa-television" aria-hidden="true"></i>' + " " + itemChannel + ' </p><p class="views"><i class="fa fa-eye " aria-hidden="true"></i>' + " " + itemStat + '</p><p class="descript">' + itemDescript + '</p><p class="published"><i class="fa fa-calendar " aria-hidden="true"></i>' + " " + stringdate + '</p></div></div>';
      return append;
    }
  }]);

  return VideoItem;
}();

exports.VideoItem = VideoItem;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _loader = __webpack_require__(2);

var _renderStructure = __webpack_require__(1);

var _itemsProperties = __webpack_require__(0);

var _videoItem = __webpack_require__(3);

window.onload = function () {
  var renderStructure = new _renderStructure.RenderStructure(document.createElement("header"), document.createElement("input"), document.createElement("section"), document.createElement("footer"), document.createElement("table"), document.createElement("tbody"), document.createElement("tr"), document.createElement("td"));
  renderStructure.renderElems();

  var itemsProperties = new _itemsProperties.ItemsProperties(324, 80);
  var loader = new _loader.Loader();

  renderStructure.input.onkeypress = function (e) {
    if (e.keyCode == 13) {
      renderStructure.clearIcons();
      loader.initialize(itemsProperties.amountOfColumns(), renderStructure.input.value).then(function () {
        renderStructure.renderVideoItems(loader, itemsProperties);
        renderStructure.renderOneIcon(1);
        renderStructure.renderOneIcon(2);
        renderStructure.renderOneIcon(3);
        function updateCells() {
          var cells = document.getElementsByTagName("td");

          var _loop = function _loop(i) {
            var page = i;
            cells[i].innerHTML = i + 1;
            cells[i].onclick = function () {
              loader.navigate(page).then(function () {
                var selected = document.getElementsByClassName("active");
                for (var j = 0; j < selected.length; j++) {
                  selected[j].classList.remove("active");
                }
                cells[page].className += " active";
                renderStructure.renderVideoItems(loader, itemsProperties);
              });
              if (page === cells.length - 1) {
                renderStructure.renderOneIcon(cells.length + 1);
                renderStructure.renderOneIcon(cells.length + 1);
                renderStructure.renderOneIcon(cells.length + 1);
                updateCells();
              }
            };
          };

          for (var i = 0; i < cells.length; i++) {
            _loop(i);
          }
          cells[loader.currentPageIndex].className += " active";
        }
        updateCells();

        window.onresize = function () {
          loader.setPageSize(itemsProperties.amountOfColumns()).then(function () {
            renderStructure.renderVideoItems(loader, itemsProperties);
            renderStructure.clearIcons();
            for (var i = 0; i <= loader.currentPageIndex; i++) {
              renderStructure.renderOneIcon(i + 1);
            }
            renderStructure.renderAddIcons();
            updateCells();
          });
        };

        if (/Android|webOS|iPhone|iPad|iPod|Opera Mini/i.test(navigator.userAgent)) {
          var _xDirection = "";
          var _oldX = 0;
          var _moveDiff = 0;
          document.body.addEventListener("touchstart", function (e) {
            var pageX = e.changedTouches[0].pageX;
            _xDirection = "";
            _oldX = pageX;
            _moveDiff = 0;
          }, false);
          document.body.addEventListener("touchmove", function (e) {
            var pageX = e.changedTouches[0].pageX;
            var diff = pageX - _oldX;
            _moveDiff += diff;
            _oldX = pageX;
            if (Math.abs(_moveDiff) < 200) {
              return;
            }
            if (_moveDiff > 0) {
              _xDirection = "right";
            } else {
              _xDirection = "left";
            }
            var pageIndex = 0;
            if (_xDirection == "left") {
              pageIndex = loader.currentPageIndex + 1;
            } else if (_xDirection == "right") {
              pageIndex = loader.currentPageIndex - 1;
            }
            _moveDiff = 0;
            loader.navigate(pageIndex).then(function () {
              renderStructure.renderVideoItems(loader, itemsProperties);
              renderStructure.clearIcons();
              for (var i = 0; i <= loader.currentPageIndex; i++) {
                renderStructure.renderOneIcon(i + 1);
              }
              renderStructure.renderAddIcons();
              updateCells();
            });
          }, false);
        }
        var xDirection = "";
        var oldX = 0;
        var moveDiff = 0;
        document.body.addEventListener("mousedown", function functionName(e) {
          xDirection = "";
          oldX = e.pageX;
          moveDiff = 0;
        });

        document.body.addEventListener("mousemove", function functionName(e) {
          if (e.which != 1) {
            return;
          }
          var diff = e.pageX - oldX;
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
          var pageIndex = 0;
          if (xDirection == "left") {
            pageIndex = loader.currentPageIndex + 1;
          } else if (xDirection == "right") {
            pageIndex = loader.currentPageIndex - 1;
          }
          moveDiff = 0;
          loader.navigate(pageIndex).then(function () {
            renderStructure.renderVideoItems(loader, itemsProperties);
            renderStructure.clearIcons();
            for (var i = 0; i <= loader.currentPageIndex; i++) {
              renderStructure.renderOneIcon(i + 1);
            }
            renderStructure.renderAddIcons();
            updateCells();
          });
        });
      }).catch(function (error) {
        console.log(error);
      });
    }
  };
};

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map