/*! Built with http://stenciljs.com */
const{h:t,Context:e}=window.App;import{createThemedClasses as s,getElementClassMap as i}from"./chunk1.js";class l{constructor(){this.itemStyles={},this.disabled=!1,this.tappable=!1}itemStyle(t){t.stopPropagation();let e=!1;const s=t.target.tagName,i=t.detail;for(const t in i)"item-"+t!==t&&(Object.defineProperty(i,"item-"+t,Object.getOwnPropertyDescriptor(i,t)),delete i[t],e=!0);this.itemStyles[s]=i,e&&(this.hasStyleChange=!0)}componentDidLoad(){const t=this.el.querySelectorAll("ion-button");for(let e=0;e<t.length;e++)t[e].size||(t[e].size="small")}render(){let e={};for(const t in this.itemStyles)e=Object.assign(e,this.itemStyles[t]);const l=Object.assign({},e,s(this.mode,this.color,"item"),i(this.el.classList),{"item-block":!0,"item-disabled":this.disabled});this.hasStyleChange=!1;const o=this.href||this.onclick||this.tappable;let a="div";o&&(a=this.href?"a":"button");const n="button"===a?{type:"button"}:{};return t(a,Object.assign({class:l},n),t("slot",{name:"start"}),t("div",{class:"item-inner"},t("div",{class:"input-wrapper"},t("slot",null)),t("slot",{name:"end"})),o&&"md"===this.mode&&t("ion-ripple-effect",null))}static get is(){return"ion-item"}static get properties(){return{color:{type:String,attr:"color"},disabled:{type:Boolean,attr:"disabled"},el:{elementRef:!0},hasStyleChange:{state:!0},href:{type:String,attr:"href"},mode:{type:"Any",attr:"mode"},onclick:{type:"Any",attr:"onclick"},tappable:{type:Boolean,attr:"tappable"}}}static get style(){return"ion-item{display:block;contain:content}.item-block{margin:0;padding:0;text-align:initial;display:flex;overflow:hidden;align-items:center;justify-content:space-between;width:100%;min-height:44px;border:0;font-weight:400;line-height:normal;text-decoration:none;color:inherit}.item-inner{margin:0;padding:0;display:flex;overflow:hidden;flex:1;flex-direction:inherit;align-items:inherit;align-self:stretch;min-height:inherit;border:0}.input-wrapper{display:flex;overflow:hidden;flex:1;flex-direction:inherit;align-items:inherit;align-self:stretch;text-overflow:ellipsis}.item.item[no-lines] .item-inner,.item[no-lines]{border:0}ion-item-group{display:block}[vertical-align-top],ion-input.item{align-items:flex-start}.item-cover{left:0;top:0;position:absolute;width:100%;height:100%;background:0 0;cursor:pointer}.item-inner>ion-icon,.item>ion-icon{font-size:1.6em}.item .button{margin:0}.item-disabled{cursor:default;opacity:.4;pointer-events:none}.item-ios{padding-left:16px;padding-left:calc(constant(safe-area-inset-left) + 16px);padding-left:calc(env(safe-area-inset-left) + 16px);border-radius:0;position:relative;font-family:-apple-system,BlinkMacSystemFont,\"Helvetica Neue\",Roboto,sans-serif;font-size:17px;color:var(--ion-item-ios-text-color,var(--ion-item-text-color,var(--ion-text-color,#000)));background-color:var(--ion-item-ios-background-color,var(--ion-background-ios-color,var(--ion-background-color,#fff)));transition:background-color .2s linear}.item-ios.activated{background-color:var(--ion-item-ios-background-color-active,var(--ion-item-background-color-active,#d9d9d9));transition-duration:0s}.item-ios h1{margin:0 0 2px;font-size:24px;font-weight:400}.item-ios h2{margin:0 0 2px;font-size:17px;font-weight:400}.item-ios h3,.item-ios h4,.item-ios h5,.item-ios h6{margin:0 0 3px;font-size:14px;font-weight:400;line-height:normal}.item-ios p{margin:0 0 2px;overflow:inherit;font-size:14px;line-height:normal;text-overflow:inherit;color:var(--ion-text-ios-color-step-600,var(--ion-text-color-step-600,#999))}.item-ios h2:last-child,.item-ios h3:last-child,.item-ios h4:last-child,.item-ios h5:last-child,.item-ios h6:last-child,.item-ios p:last-child{margin-bottom:0}.item-ios.item-block .item-inner{padding-right:8px;border-bottom:.55px solid var(--ion-item-ios-border-color,var(--ion-item-border-color,#c8c7cc))}\@media screen and (orientation:landscape){.item-ios.item-block .item-inner{padding-right:calc(constant(safe-area-inset-right) + 8px);padding-right:calc(env(safe-area-inset-right) + 8px)}}.item-ios [slot=start]{margin:8px 16px 8px 0}.item-ios [slot=end]{margin:8px}.item-ios>ion-icon[slot=end],.item-ios>ion-icon[slot=start]{margin-left:0;margin-top:9px;margin-bottom:8px}.item-ios.item-label-floating [slot=end],.item-ios.item-label-stacked [slot=end]{margin-top:6px;margin-bottom:6px}.item-ios .button-small-ios{padding:0 .5em;height:24px;font-size:13px}.item-ios .button-small-ios ion-icon[slot=icon-only]{padding:0 1px}.item-ios ion-avatar{width:36px;height:36px}.item-ios ion-thumbnail{width:56px;height:56px}.item-ios[detail-push] .item-inner,a.item-ios:not([detail-none]) .item-inner,button.item-ios:not([detail-none]) .item-inner{background-image:url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2012%2020'><path%20d='M2,20l-2-2l8-8L0,2l2-2l10,10L2,20z'%20fill='var(--ion-item-ios-border-color,%20var(--ion-item-border-color,%20%23c8c7cc))'/></svg>\");padding-right:32px;background-position:right 14px center;background-position:right calc(14px + constant(safe-area-inset-right)) center;background-position:right calc(14px + env(safe-area-inset-right)) center;background-repeat:no-repeat;background-size:14px 14px}.item-ios .text-ios-primary{color:var(--ion-color-ios-primary,var(--ion-color-primary,#488aff))}.item-divider-ios-primary,.item-ios-primary{color:var(--ion-color-ios-primary-contrast,var(--ion-color-primary-contrast,#fff));background-color:var(--ion-color-ios-primary,var(--ion-color-primary,#488aff))}.item-divider-ios-primary p,.item-ios-primary p{color:var(--ion-color-ios-primary-contrast,var(--ion-color-primary-contrast,#fff))}.item-divider-ios-primary.activated,.item-ios-primary.activated{background-color:var(--ion-color-ios-primary-tint,var(--ion-color-primary-tint,#5a96ff))}.item-ios .text-ios-secondary{color:var(--ion-color-ios-secondary,var(--ion-color-secondary,#32db64))}.item-divider-ios-secondary,.item-ios-secondary{color:var(--ion-color-ios-secondary-contrast,var(--ion-color-secondary-contrast,#fff));background-color:var(--ion-color-ios-secondary,var(--ion-color-secondary,#32db64))}.item-divider-ios-secondary p,.item-ios-secondary p{color:var(--ion-color-ios-secondary-contrast,var(--ion-color-secondary-contrast,#fff))}.item-divider-ios-secondary.activated,.item-ios-secondary.activated{background-color:var(--ion-color-ios-secondary-tint,var(--ion-color-secondary-tint,#47df74))}.item-ios .text-ios-tertiary{color:var(--ion-color-ios-tertiary,var(--ion-color-tertiary,#f4a942))}.item-divider-ios-tertiary,.item-ios-tertiary{color:var(--ion-color-ios-tertiary-contrast,var(--ion-color-tertiary-contrast,#fff));background-color:var(--ion-color-ios-tertiary,var(--ion-color-tertiary,#f4a942))}.item-divider-ios-tertiary p,.item-ios-tertiary p{color:var(--ion-color-ios-tertiary-contrast,var(--ion-color-tertiary-contrast,#fff))}.item-divider-ios-tertiary.activated,.item-ios-tertiary.activated{background-color:var(--ion-color-ios-tertiary-tint,var(--ion-color-tertiary-tint,#f5b255))}.item-ios .text-ios-success{color:var(--ion-color-ios-success,var(--ion-color-success,#10dc60))}.item-divider-ios-success,.item-ios-success{color:var(--ion-color-ios-success-contrast,var(--ion-color-success-contrast,#fff));background-color:var(--ion-color-ios-success,var(--ion-color-success,#10dc60))}.item-divider-ios-success p,.item-ios-success p{color:var(--ion-color-ios-success-contrast,var(--ion-color-success-contrast,#fff))}.item-divider-ios-success.activated,.item-ios-success.activated{background-color:var(--ion-color-ios-success-tint,var(--ion-color-success-tint,#28e070))}.item-ios .text-ios-warning{color:var(--ion-color-ios-warning,var(--ion-color-warning,#ffce00))}.item-divider-ios-warning,.item-ios-warning{color:var(--ion-color-ios-warning-contrast,var(--ion-color-warning-contrast,#000));background-color:var(--ion-color-ios-warning,var(--ion-color-warning,#ffce00))}.item-divider-ios-warning p,.item-ios-warning p{color:var(--ion-color-ios-warning-contrast,var(--ion-color-warning-contrast,#000))}.item-divider-ios-warning.activated,.item-ios-warning.activated{background-color:var(--ion-color-ios-warning-tint,var(--ion-color-warning-tint,#ffd31a))}.item-ios .text-ios-danger{color:var(--ion-color-ios-danger,var(--ion-color-danger,#f53d3d))}.item-divider-ios-danger,.item-ios-danger{color:var(--ion-color-ios-danger-contrast,var(--ion-color-danger-contrast,#fff));background-color:var(--ion-color-ios-danger,var(--ion-color-danger,#f53d3d))}.item-divider-ios-danger p,.item-ios-danger p{color:var(--ion-color-ios-danger-contrast,var(--ion-color-danger-contrast,#fff))}.item-divider-ios-danger.activated,.item-ios-danger.activated{background-color:var(--ion-color-ios-danger-tint,var(--ion-color-danger-tint,#f65050))}.item-ios .text-ios-light{color:var(--ion-color-ios-light,var(--ion-color-light,#f4f4f4))}.item-divider-ios-light,.item-ios-light{color:var(--ion-color-ios-light-contrast,var(--ion-color-light-contrast,#000));background-color:var(--ion-color-ios-light,var(--ion-color-light,#f4f4f4))}.item-divider-ios-light p,.item-ios-light p{color:var(--ion-color-ios-light-contrast,var(--ion-color-light-contrast,#000))}.item-divider-ios-light.activated,.item-ios-light.activated{background-color:var(--ion-color-ios-light-tint,var(--ion-color-light-tint,#f5f5f5))}.item-ios .text-ios-medium{color:var(--ion-color-ios-medium,var(--ion-color-medium,#989aa2))}.item-divider-ios-medium,.item-ios-medium{color:var(--ion-color-ios-medium-contrast,var(--ion-color-medium-contrast,#000));background-color:var(--ion-color-ios-medium,var(--ion-color-medium,#989aa2))}.item-divider-ios-medium p,.item-ios-medium p{color:var(--ion-color-ios-medium-contrast,var(--ion-color-medium-contrast,#000))}.item-divider-ios-medium.activated,.item-ios-medium.activated{background-color:var(--ion-color-ios-medium-tint,var(--ion-color-medium-tint,#a2a4ab))}.item-ios .text-ios-dark{color:var(--ion-color-ios-dark,var(--ion-color-dark,#222))}.item-divider-ios-dark,.item-ios-dark{color:var(--ion-color-ios-dark-contrast,var(--ion-color-dark-contrast,#fff));background-color:var(--ion-color-ios-dark,var(--ion-color-dark,#222))}.item-divider-ios-dark p,.item-ios-dark p{color:var(--ion-color-ios-dark-contrast,var(--ion-color-dark-contrast,#fff))}.item-divider-ios-dark.activated,.item-ios-dark.activated{background-color:var(--ion-color-ios-dark-tint,var(--ion-color-dark-tint,#383838))}"}static get styleMode(){return"ios"}}class o{constructor(){this.fixed=!1,this.floating=!1,this.stacked=!1}getText(){return this.el.textContent||""}componentDidLoad(){this.emitStyle()}emitStyle(){clearTimeout(this.styleTmr);const t={"label-fixed":this.fixed,"label-floating":this.floating,"label-stacked":this.stacked};this.styleTmr=setTimeout(()=>{this.ionStyle.emit(t)})}render(){return t("slot",null)}static get is(){return"ion-label"}static get host(){return{theme:"label"}}static get properties(){return{color:{type:String,attr:"color"},el:{elementRef:!0},fixed:{type:Boolean,attr:"fixed"},floating:{type:Boolean,attr:"floating"},getText:{method:!0},mode:{type:"Any",attr:"mode"},stacked:{type:Boolean,attr:"stacked"}}}static get events(){return[{name:"ionStyle",method:"ionStyle",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return"ion-label{margin:0;display:block;overflow:hidden;flex:1;font-size:inherit;text-overflow:ellipsis;white-space:nowrap}.item-input ion-label{flex:initial;max-width:200px;pointer-events:none}[text-wrap] ion-label{white-space:normal}ion-label[fixed]{flex:0 0 100px;width:100px;min-width:100px;max-width:200px}.item-label-floating ion-label,.item-label-stacked ion-label{align-self:stretch;width:auto;max-width:100%}ion-label[floating],ion-label[stacked]{margin-bottom:0}.item-label-floating .input-wrapper,.item-label-stacked .input-wrapper{flex:1;flex-direction:column}.item-label-floating ion-select,.item-label-stacked ion-select{align-self:stretch;max-width:100%}.label-ios{margin:11px 8px 11px 0;font-family:-apple-system,BlinkMacSystemFont,\"Helvetica Neue\",Roboto,sans-serif}.label-ios[stacked]{margin-bottom:4px;font-size:12px}.label-ios[floating]{margin-bottom:0;transform:translate3d(0,27px,0);transform-origin:left top;transition:transform 150ms ease-in-out}.item-input-has-focus .label-ios[floating],.item-input-has-value .label-ios[floating]{transform:translate3d(0,0,0) scale(.8)}.item-datetime .label-ios-primary,.item-input .label-ios-primary,.item-select .label-ios-primary,.label-ios-primary{color:var(--ion-color-ios-primary,var(--ion-color-primary,#488aff))}.item-datetime .label-ios-secondary,.item-input .label-ios-secondary,.item-select .label-ios-secondary,.label-ios-secondary{color:var(--ion-color-ios-secondary,var(--ion-color-secondary,#32db64))}.item-datetime .label-ios-tertiary,.item-input .label-ios-tertiary,.item-select .label-ios-tertiary,.label-ios-tertiary{color:var(--ion-color-ios-tertiary,var(--ion-color-tertiary,#f4a942))}.item-datetime .label-ios-success,.item-input .label-ios-success,.item-select .label-ios-success,.label-ios-success{color:var(--ion-color-ios-success,var(--ion-color-success,#10dc60))}.item-datetime .label-ios-warning,.item-input .label-ios-warning,.item-select .label-ios-warning,.label-ios-warning{color:var(--ion-color-ios-warning,var(--ion-color-warning,#ffce00))}.item-datetime .label-ios-danger,.item-input .label-ios-danger,.item-select .label-ios-danger,.label-ios-danger{color:var(--ion-color-ios-danger,var(--ion-color-danger,#f53d3d))}.item-datetime .label-ios-light,.item-input .label-ios-light,.item-select .label-ios-light,.label-ios-light{color:var(--ion-color-ios-light,var(--ion-color-light,#f4f4f4))}.item-datetime .label-ios-medium,.item-input .label-ios-medium,.item-select .label-ios-medium,.label-ios-medium{color:var(--ion-color-ios-medium,var(--ion-color-medium,#989aa2))}.item-datetime .label-ios-dark,.item-input .label-ios-dark,.item-select .label-ios-dark,.label-ios-dark{color:var(--ion-color-ios-dark,var(--ion-color-dark,#222))}"}static get styleMode(){return"ios"}}export{l as IonItem,o as IonLabel};