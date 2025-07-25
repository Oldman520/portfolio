import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'


   const app= createApp({
        data(){
            return{
                bigImages:true,
                // 定義導覽列項目的陣列，每個項目含有id text link
                menuItems:[
                    {
                        text:'關於Oldman',
                        link:'#Abouts'
                    },
                    {
                        text:'相關技能',
                        link:'#Skills'
                    },
                    {
                    
                        text:'作品集',
                        link:'#Workss'
                    },
                    {
                        text:'聯絡表單',
                        link:'#Contacts'
                    }
                ],
                // 輪播圖 id class Text
                Carousel:[
                   { 
                    id:'One',
                    class:'CarouselImg',
                    text:'廣告文字1',
                    image:'/images/banner/001.jpg'
                   },
                   { 
                    id:'Two',
                    class:'CarouselImg',
                    text:'廣告文字2',
                    image:'/images/banner/002.jpg'
                   },
                   { 
                    id:'Three',
                    class:'CarouselImg',
                    text:'廣告文字3',
                    image:'/images/banner/003.jpg'
                   }
                ],
                //當前顯示圖片的索引
                currentIndex:0,
                timer:null
                
            }
        },
        computed:{
            //動態生成綁訂在 style 屬性上的物件
            carouselStyle(){
                return this.Carousel[this.currentIndex]
                    
            
        }},
        methods:{
            // 顯示圖片區塊
            showImages(){
                this.bigImages=!this.bigImages;
            },

            nextSlide(){
                this.currentIndex = (this.currentIndex +1 )%this.Carousel.length;
            },
            prevSlide(){
                this.currentIndex = (this.currentIndex -1 +this.Carousel.length)% this.Carousel.length;
            },
            // 自動輪播
            startCarousel(){
                this.timer  = setInterval(this.nextSlide,4000)
            },
            stopCarousel(){
                clearInterval(this.timer);
                this.timer = null;
            }
            
        },
        mounted(){
            // this.startCarousel();
            // this.stopCarousel();
        }

    })
    app.mount("#article")

    const app2=createApp({
        data(){
            return{
                ifText:true
            }
        },//自訂函數
        methods:{
            toggleText(){
                this.ifText=!this.ifText;
            },
            Text(){

            }
        }

    })
    app2.mount("#app")

    
