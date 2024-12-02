import MonoRail from '@parameter1/base-cms-marko-web-theme-monorail/browser';

const InquiryForm = () => import(/* webpackChunkName: "global-inquiry-form" */ './inquiry-form.vue');
const ImageSlider = () => import(/* webpackChunkName: "global-image-slider" */ './image-slider.vue');

export default (Browser) => {
  MonoRail(Browser, {
    enableOmedaIdentityX: false,
    inquiryArgs: { component: InquiryForm },
  });

  Browser.register('GlobalImageSlider', ImageSlider);
};
