import { defineStore } from 'pinia';

export const useDashboardPageStore = defineStore('dashboardPage', {
  state() {
    return {page: 1};
  },
  actions: {
    set(newPage) {
      this.page = newPage;
    }
  }
});