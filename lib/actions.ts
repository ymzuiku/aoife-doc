import Route from "aoife-route";

export const actions = {
  changeMobileMenuShow: (state: any, isShow: boolean) => {
    state.showMobileMenu = isShow;
    aoife.next(".aoife-markdown-page .mobile-menu");
  },
  changeUrl: (url: string, state: any, num: number) => {
    state.num = num;
    aoife.next("*");
    Route.push(url);
  },
};
