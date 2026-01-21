const { formatDate, filterAndScoreItems } = require('../../utils/data.js');

Page({
  data: {
    searchKeyword: '',
    selectedCategory: 'all',
    selectedOrigin: 'all',
    searchResults: [],
    loading: false,
    hasSearched: false,
    hotKeywords: ['草莓', '橙子', '西瓜', '西红柿', '菠菜', '荔枝', '葡萄', '苹果'],
  },

  onLoad() {
    // 初始化
  },

  onSearchInput(e) {
    this.setData({
      searchKeyword: e.detail.value
    });
  },

  onSearchConfirm() {
    this.performSearch();
  },

  onClearSearch() {
    this.setData({
      searchKeyword: '',
      searchResults: [],
      hasSearched: false
    });
  },

  onCategoryChange(e) {
    const value = e.currentTarget.dataset.value;
    this.setData({
      selectedCategory: value
    });
    if (this.data.searchKeyword) {
      this.performSearch();
    }
  },

  onOriginChange(e) {
    const value = e.currentTarget.dataset.value;
    this.setData({
      selectedOrigin: value
    });
    if (this.data.searchKeyword) {
      this.performSearch();
    }
  },

  onHotKeywordTap(e) {
    const keyword = e.currentTarget.dataset.keyword;
    this.setData({
      searchKeyword: keyword
    });
    this.performSearch();
  },

  performSearch() {
    const keyword = this.data.searchKeyword.trim();

    if (!keyword) {
      wx.showToast({
        title: '请输入搜索关键词',
        icon: 'none'
      });
      return;
    }

    this.setData({
      loading: true,
      hasSearched: true
    });

    const state = {
      date: new Date(),
      category: this.data.selectedCategory,
      origin: this.data.selectedOrigin,
      keyword: keyword
    };

    const results = filterAndScoreItems(state);

    this.setData({
      searchResults: results,
      loading: false
    });

    if (results.length === 0) {
      wx.showToast({
        title: '未找到相关果蔬',
        icon: 'none'
      });
    }
  },

  onItemTap(e) {
    const item = e.currentTarget.dataset.item;

    wx.showActionSheet({
      itemList: ['收藏', '查看详情'],
      success: (res) => {
        if (res.tapIndex === 0) {
          this.addToFavorites(item);
        } else if (res.tapIndex === 1) {
          this.showItemDetail(item);
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

  showItemDetail(item) {
    const seasonMonths = item._matchedSeason ? item._matchedSeason.peak.join('、') : '暂无';
    const nutritionText = item.nutritionTags.join('、');

    wx.showModal({
      title: item.name,
      content: `品类：${item.category === 'fruit' ? '水果' : '蔬菜'}\n高峰月份：${seasonMonths}月\n营养标签：${nutritionText}\n推荐分数：${item._score}/5`,
      showCancel: false,
      confirmText: '知道了',
      confirmColor: '#3b82f6'
    });
  }
});