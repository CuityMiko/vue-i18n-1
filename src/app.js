import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueI18n from './plugins/vue-i18n.js'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(VueI18n,{
    default: 'en',
    data: {
        cn: {
        	button:"中",
            name:"金哲",
            menu:{
            	home:"首页",
            	subpage:"子页",
            },
            replace:"您有{0}条消息!",
            placeholder:"请输入手机号",
            intro:"基于VueJS的国际化多语言切换组件",
            t1:"1.支持表单元素属性 <placeholder>",
            t2:"2.支持模板参数替换",
            t3:"3.支持多级对象",
            t4:"4.支持刷新后保存语言状态",
        },
        en: {
        	button:"EN",
            name:"ZEE.KIM!",
            menu:{
            	home:"HOME",
            	subpage:"SUBPAGE",
            },
            replace:"You have {0} message!",
            placeholder:"Please enter mobile phone number!",
            intro:"Internationalization plugin of VueJS",
            t1:"1.Support Form element properties <placeholder>",
            t2:"2.Support Template parameter substitution",
            t3:"3.Support multi-level objects",
            t4:"4.Support save the language status",
        },
    }
})

Vue.config.debug = true
Vue.http.options.headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=utf-8'
Vue.http.options.emulateJSON = true
 

const router = new VueRouter({
	// saveScrollPosition: true,
	// transitionOnLoad:true,
	// history: true
})
const loadComponent = path => {
	return {
		// component:require('./components/'+path+'.vue')
		component(resolve) {
			require(['./components/' + path + '.vue'], resolve)
		}
	}
}
router.map({
	'/': loadComponent('home'),
})

router.redirect({
	'*': '/'
})
router.start(require('./app.vue'), '#app')