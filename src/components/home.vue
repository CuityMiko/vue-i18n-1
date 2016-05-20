<style>
.logo{
    padding-top: 50px;
    text-align:center;
}
.logo img{
    width:160px;
}
.logo h1 {
    font-family: 'Dosis', 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;
    font-weight: 300;
    font-size: 3em;
    color:#000;
}
.logo p {
    color:#999;
}
.content{
    margin:auto;
    width:600px;
}
.content h3{
    font-size: 1rem;
    font-weight:300;
    color:#666;
}
.content input{
    display: block;
    padding:10px;
    width:100%;
    outline: 0
}
.button{
    display:block;
    margin:20px auto;
    outline: 0;
    width:60px;
    height:60px;
    font-size: 1.2rem;
    background-color:#2F9E75;
    color:#fff;
    border-radius: 50%;
    border:none;
    cursor: pointer;
}
pre{
    font-size: 12px;
    color:#41B883
}
.demo{
    padding:10px;
}
</style>

<template>
<div>
    <div class="logo">
        <img src="../logo.png">
        <h1>vue-i18n</h1>
        <p v-i18n="{value:'intro',language:language}"></p>
        <iframe src="//ghbtns.com/github-btn.html?user=jinzhe&amp;repo=vue-i18n&amp;type=watch&amp;count=true" allowtransparency="true" frameborder="0" scrolling="0" width="80" height="20"></iframe>
    </div>
    
    <div class="content">
        <button class="button" @click="changeLanguage()" v-i18n="{value:'button',language:language}"></button>
        <h3 v-i18n="{value:'t1',language:language}"></h3>
        <div class="demo">
            <input type="text" v-i18n.placeholder="{value:'placeholder',language:language}">
             <pre>{{code1}}</pre>
        </div>
       
        <br>
        <h3 v-i18n="{value:'t2',language:language}"></h3>
        <div class="demo">
            <div v-i18n="{value:'replace',replace:[9,'admin'],language:language}"></div>
            <pre>{{code2}}</pre>
        </div>

        <h3 v-i18n="{value:'t3',language:language}"></h3>
        <div class="demo">
            <pre>{{code3}}</pre>
        </div>
 
        <h3 v-i18n="{value:'t4',language:language}"></h3>
         <br><br>
    </div>
    
</div>
</template>

<script>
export default {
    data() {
        return {
            language:this.$language,
            code1:"v-i18n.placeholder=\"{value:'placeholder',language:language}\"",
            code2:"v-i18n=\"{value:'replace',replace:[0,1,2],language:language}\"",
            code3:"v-i18n=\"{value:'menu.a.b',language:language}\""
        }
    },
    created(){
        this.$on('language',type=>{
            this.language=type
        })
    },
    methods:{
       changeLanguage(){
            if(this.$language=='cn'){
                this.$language='en'
            }else{
                this.$language='cn'
            }
            this.$root.$broadcast('language',this.$language)
            this.$root.$dispatch('language',this.$language)
        },
    }

}
</script>