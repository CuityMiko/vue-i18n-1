# vue-i18n

Internationalization plugin of VueJS 1.x

# How to use?

1.Import plugin in your entry app.js.
```
import VueI18n from './vue-i18n.js'
import VueI18nData from './i18n.js'
Vue.use(VueI18n, VueI18nData)
```
2.Configure language packs
```
export default {
	default: 'cn',
	data: {
		cn: {
			name:"金哲",
			menu:{
			    goods:"商品管理",
			    order:"订单管理",
			}
		},
		en: {
			name:"ZEE.KIM",
			menu:{
			    goods:"GOODS",
			    order:"ORDER",
			}
		},
	}
}
```
3.Write some code to init in app.vue.
```
<template>
	<div>
		 <span v-i18n="{value:'name',language:language}"></span>
		 <span v-i18n="{value:'menu.goods',language:language}"></span>
		 <span v-i18n="{value:'menu.order',language:language}"></span>
	</div>
</template>
<script>
export default {
	data() {
		return {
			language: this.$language,
		}
	},
	created() {
		// Acceptance speech signal change
		this.$on('language', type => {
			this.language = type
		})
	},
	methods:{
		// Change language when you click button
        changeLanguage(type){
            this.$root.$broadcast('language',type)
            this.$dispatch('language',type)
        },
	}
}
</script>
```
# Conatct

- Tencent QQ Group: 240319632
- E-mail: 129@jinzhe.net