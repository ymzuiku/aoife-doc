export const actions = {
  changeMobileMenuShow: (state: any, isShow: boolean) => {
    state.showMobileMenu = isShow;
    aoife.next(".aoife-markdown-page .mobile-menu");
  },
};
