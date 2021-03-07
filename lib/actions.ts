import { getNum } from "./utils";

export const actions = {
  changeMobileMenuShow: (state: any, isShow: boolean) => {
    state.showMobileMenu = isShow;
    aoife.next(".aoife-markdown-page .mobile-menu");
  },
  changeUrl: (url: string, state: any, num: number) => {
    actions.changeMobileMenuShow(state, false);
    document.documentElement.scrollTo({ top: 0 });
    state.num = num;
    aoife.next("*");
    window.history.replaceState(null, "", url);
  },
};
