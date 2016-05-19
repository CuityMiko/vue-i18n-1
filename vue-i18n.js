(function() {
	var VueI18n = {
		install: function(Vue,options) {
			Vue.prototype.$language=window.localStorage.language||options.default
			Vue.directive('i18n',function (args) {
				if(args.value!=undefined&&options.data[args.language]!=undefined){
					if(args.language==undefined){
						args.language=options.default
					}
					window.localStorage.language=args.language
					var val=eval('options.data.'+args.language+'.'+args.value)
					// console.log(val)
					if(val!=undefined){
						if(this.modifiers.placeholder){
							this.el.setAttribute('placeholder',val)
						}else{
							this.el.innerHTML=val	
						}
					}else{
						this.el.innerHTML=""
					}

				}else{
					this.el.innerHTML=""
				}
			})
		}
	}
	if (typeof exports == "object") {
		module.exports = VueI18n
	} else if (typeof define == "function" && define.amd) {
		define([], function() {
			return VueI18n
		});
	} else if (window.Vue) {
		window.VueI18n = VueI18n
		Vue.use(VueI18n)
	};
})();