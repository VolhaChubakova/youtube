import {
  VideoItem
} from './videoItem.js';
import {
  RenderStructure
} from './renderStructure.js';

class Loader {
  constructor() {
    this.numberItemsToLoad = 15;
  }

  initialize(pageSize, query) {
    this.currentPageIndex = -1;
    this.currentItemsPosition = -1;
    this.nextPageToken = null;
    this.loadedItems = [];
    this.currentItems = [];
    this.query = query;
    this.pageSize = pageSize;
    return new Promise((resolve, reject) => {
      this.loadNextItems().then(items => {
        this.currentItems = this.loadedItems.slice(0, this.pageSize);
        this.currentPageIndex = 0;
        this.currentItemsPosition = 0;
        resolve();
      }).catch(status => {
        reject();
      });
    });
  }

  navigate(newPageIndex) {
    if (newPageIndex < 0){
      return;
    }
    let pageDiff = newPageIndex - this.currentPageIndex;
    let itemsDiff = pageDiff * this.pageSize;
    let newCurrentItemsPosition = this.currentItemsPosition + itemsDiff;
    if (this.loadedItems.length >= newCurrentItemsPosition + this.pageSize) {
      this.currentItemsPosition = newCurrentItemsPosition;
      this.currentPageIndex = newPageIndex;
      this.currentItems = this.loadedItems.slice(this.currentItemsPosition, this.currentItemsPosition + this.pageSize);
      return new Promise((resolve, reject) => {
        resolve();

      });
    }
    return new Promise((resolve, reject) => {
      this.loadNextItems().then(() => {
        this.navigate(newPageIndex).then(() => {
          resolve();
        });
      }).catch(() => {
        reject();
      });
    });
  }

  setPageSize(newPageSize) {
    if (newPageSize == this.pageSize) {
      return new Promise((resolve, reject) => {  });
    }
    if (newPageSize == 0) {
      newPageSize = 1;
    }
    this.pageSize = newPageSize;
    this.currentPageIndex = Math.floor(this.currentItemsPosition / this.pageSize);
    this.currentItemsPosition = this.currentPageIndex * this.pageSize;
    return this.navigate(this.currentPageIndex);
  }

  loadNextItems() {
    let listUrl = '';
    if (this.nextPageToken) {
      listUrl = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyCKpZogA9Cd-koNK15h3A5bshbZh6Cuv1Y&type=video&part=snippet&maxResults=' + this.numberItemsToLoad + '&pageToken=' + this.nextPageToken + '&q=' + this.query;
    } else {
      listUrl = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyCKpZogA9Cd-koNK15h3A5bshbZh6Cuv1Y&type=video&part=snippet&maxResults=' + this.numberItemsToLoad + '&q=' + this.query;
    }
    return new Promise((resolve, reject) => {
      this.executeRequest(listUrl).then(listResult => {
        let idsArr = listResult.items.map(function(x) {
          return x.id.videoId;
        });
        let ids = idsArr.join(',');
        let statUrl = 'https://www.googleapis.com/youtube/v3/videos?&key=AIzaSyCKpZogA9Cd-koNK15h3A5bshbZh6Cuv1Y&part=statistics&id=' + ids;
        this.executeRequest(statUrl).then(statResult => {
          let videoItems = [];
          for (let i = 0; i < statResult.items.length; i++) {
            let statItem = statResult.items[i];
            let listItem = listResult.items[i];
            let videoItem = new VideoItem(listItem, statItem);
            videoItems.push(videoItem);
          }
          this.loadedItems = this.loadedItems.concat(videoItems);
          this.nextPageToken = listResult.nextPageToken;
          resolve();
        }).catch(statusText => {
          reject(statusText);
        });
      }).catch(statusText => {
        reject(statusText);
      });
    })

    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();

      xhr.open("GET", url);
      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          let result = JSON.parse(xhr.response);
          this.loadedItems = this.loadedItems.concat(result.items);
          this.nextPageToken = result.nextPageToken;
          resolve();
        } else {
          reject(xhr.statusText);
        }
      };
      xhr.onerror = () => reject(xhr.statusText);
      xhr.send("");
    });
  }

  executeRequest(url) {
    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();
      xhr.open("GET", url);
      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          let result = JSON.parse(xhr.response);
          resolve(result);
        } else {
          reject(xhr.statusText);
        }
      };
      xhr.onerror = () => reject(xhr.statusText);
      xhr.send("");
    });
  }
}
export {
  Loader
};
