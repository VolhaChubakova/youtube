import {
  RenderStructure
} from './renderStructure.js';
import {
  ItemsProperties
} from './itemsProperties.js';

class VideoItem {
  constructor(listItem, statItem) {
    this.listItem = listItem;
    this.statItem = statItem;
  }

  id() {
    return this.listItem.id.videoId;
  }

  render(stat) {
    let append = '';
    let itemTitle = this.listItem.snippet.title;
    let itemImg = this.listItem.snippet.thumbnails.medium.url;
    let itemChannel = this.listItem.snippet.channelTitle;
    let itemDescript = this.listItem.snippet.description;
    let itemDate = this.listItem.snippet.publishedAt;
    let linkToYoutubeVideo = 'http://www.youtube.com/watch?v=' + this.id();
    let itemStat = this.statItem.statistics.viewCount;
    let shortDate = new Date(itemDate);
    let linkToDiffPage = '';
    let year = shortDate.getFullYear();
    let month = shortDate.getMonth() + 1;
    let day = shortDate.getDate();

    let stringdate = year + "-" + month + "-" + day;
    append += '<div class="videoitem"><div id="' + this.listItem.id + '" class="itemProperties"><a href="http://www.youtube.com/watch?v=' + this.listItem.id.videoId + '"><h1>' + itemTitle + '</h1></a><img src="' + itemImg + '"/><p class="channel"><i class="fa fa-television" aria-hidden="true"></i>' + " " + itemChannel + ' </p><p class="views"><i class="fa fa-eye " aria-hidden="true"></i>' + " " + itemStat + '</p><p class="descript">' + itemDescript + '</p><p class="published"><i class="fa fa-calendar " aria-hidden="true"></i>' + " " + stringdate + '</p></div></div>';
    return append;
  }
}
export {
  VideoItem
};
