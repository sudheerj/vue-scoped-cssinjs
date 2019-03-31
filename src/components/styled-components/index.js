import Vue from 'vue';
import ChildComponentStyled from './ChildComponentStyled';
import ParentComponentStyled from './ParentComponentStyled';

export const childComponentStyled = Vue.component('child-component-styled', {
  components: { ChildComponentStyled },
  template: `<ChildComponentStyled><slot></slot></ChildComponentStyled>`,
});

export const parentComponentStyled = Vue.component('parent-component-styled', {
  components: { ParentComponentStyled },
  template: `<ParentComponentStyled><slot></slot></ParentComponentStyled>`,
});
