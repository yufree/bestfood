App({
  globalData: {
    selectedDate: new Date(),
    selectedCategory: 'all',
    selectedOrigin: 'all',
    searchKeyword: ''
  },

  onLaunch() {
    // 初始化当前日期
    this.initCurrentDate();
  },

  initCurrentDate() {
    this.globalData.selectedDate = new Date();
  }
})