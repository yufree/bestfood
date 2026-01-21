const { formatDate, filterAndScoreItems, getComingSoonItems } = require('../../utils/data.js');

Page({
  data: {
    loading: true,
    selectedDate: '',
    selectedDateFormatted: '',
    selectedCategory: 'all',
    selectedOrigin: 'all',
    highlightItems: [],
    allItems: [],
    comingSoonItems: [],
    summaryText: '',
  },

  onLoad() {
    this.initData();
  },

  initData() {
    const today = new Date();
    const dateStr = formatDate(today);

    this.setData({
      selectedDate: dateStr,
      selectedDateFormatted: this.formatDateDisplay(dateStr),
    });

    this.refreshData();
  },

  formatDateDisplay(dateStr) {
    const date = new Date(dateStr);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${month}月${day}日`;
  },

  refreshData() {
    const state = {
      date: new Date(this.data.selectedDate),
      category: this.data.selectedCategory,
      origin: this.data.selectedOrigin,
      keyword: ''
    };

    const allItems = filterAndScoreItems(state);
    const highlightItems = allItems.filter(item => item._score >= 4.5).slice(0, 6);
    const comingSoonItems = getComingSoonItems(state);

    const month = String(state.date.getMonth() + 1).padStart(2, '0');
    const summaryText = `全国通用 · ${month} 月应季果蔬（示例数据，仅供参考）`;

    this.setData({
      allItems,
      highlightItems,
      comingSoonItems,
      summaryText,
      loading: false,
    });
  },

  onCategoryChange(e) {
    const value = e.currentTarget.dataset.value;
    this.setData({
      selectedCategory: value
    });
    this.refreshData();
  },

  onOriginChange(e) {
    const value = e.currentTarget.dataset.value;
    this.setData({
      selectedOrigin: value
    });
    this.refreshData();
  },

  onDateChange(e) {
    const dateStr = e.detail.value;
    this.setData({
      selectedDate: dateStr,
      selectedDateFormatted: this.formatDateDisplay(dateStr),
    });
    this.refreshData();
  },

  onItemTap(e) {
    const item = e.currentTarget.dataset.item;

    wx.showActionSheet({
      itemList: ['收藏', '分享'],
      success: (res) => {
        if (res.tapIndex === 0) {
          this.addToFavorites(item);
        } else if (res.tapIndex === 1) {
          this.shareItem(item);
        }
      }
    });
  },

  addToFavorites(item) {
    const favorites = wx.getStorageSync('favorites') || [];

    const exists = favorites.find(fav => fav.id === item.id);
    if (exists) {
      wx.showToast({
        title: '已收藏',
        icon: 'success'
      });
      return;
    }

    favorites.push({
      id: item.id,
      name: item.name,
      addTime: new Date().toISOString()
    });

    wx.setStorageSync('favorites', favorites);

    wx.showToast({
      title: '收藏成功',
      icon: 'success'
    });
  },

  shareItem(item) {
    wx.showShareMenu({
      withShareTicket: true,
      menus: ['shareAppMessage', 'shareTimeline']
    });
  },

  onShareAppMessage() {
    return {
      title: '时令果蔬助手 - 查询当季最佳果蔬',
      path: '/pages/index/index',
      imageUrl: '/assets/images/share-cover.png'
    };
  },

  onShareTimeline() {
    return {
      title: '时令果蔬助手 - 查询当季最佳果蔬'
    };
  }
});