import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
// import { Banner } from './module/carousel.js'

   const app= createApp({
        data(){
            return{
                bigImages:false,
                //定義導覽列項目的陣列，每個項目含有id text link
                menuItems:[
                    {
                        id:'navAbout',
                        text:'關於Oldman',
                        // link:'#Abouts',
                        scroll:'about'
                    },
                    {
                        id:'navAbout',
                        text:'相關技能',
                        // link:'#Skills',
                        scroll:'skill'
                    },
                    {
                        id:'navAbout',
                        text:'作品集',
                        // link:'#Workss',
                        scroll:'work'
                    },
                    {
                        id:'navAbout',
                        text:'聯絡表單',
                        // link:'#Contacts',
                        scroll:'contact'
                    }
                ],
                //輪播圖 id class Text
                Carousel:[
                   { 
                    id:'One',
                    class:'CarouselImg',
                    text:'歡迎來到Oldman Portofolio!!(歐德曼的作品集)',
                    image:'./images/banner/pic03.jpg'
                   },
                   { 
                    id:'Two',
                    class:'CarouselImg',
                    text:'前端技能的基礎培養及作品',
                    image:'./images/banner/pic01.jpg'
                   },
                   { 
                    id:'Three',
                    class:'CarouselImg',
                    text:'UI設計作品',
                    image:'./images/banner/pic02.jpg'
                   }
                ],
                //當前顯示圖片的索引
                currentIndex:0,
                autoPlayTimer:null,
                isChanging:false,
                isFading:false,
                timer:null,
                // Skills data
                floatImage:false,
                showControl:[false,false,false],
                showIndex:0,
                articleMoving:[0,0,0],
                offset:[0,-167,-334],
                skillDescript:[
                    {
                        cat:"UI設計",
                        content:"我具備使用figma能力，目前已完成三分作品。這三件作品為表單連結、手搖飲的一頁式網站還有日記撰寫App的mockup",
                        img:'./images/Skills/pic02.jpg'
                    },
                    {
                        cat:"前端三本柱",
                        content:"HTML、CSS、JS(javscript)是前端必備的三大技能而我也同時具備" ,
                        img:'./images/Skills/pic01.jpg'
                    },
                    {
                        cat:"Vue.Js",
                        content:"Vue 是現代主流的js框架上手時有點難度，我也是花了很長一段時間鑽研，目前努力的學 習中。上手時有點難度，我也是花了很長一段時間鑽研，目前努力的學習中。",
                        img:'./images/Skills/pic03.jpg'
                    }
                ],
                //works 變數
                works:[
                    {
                        workTitle:'網站-心肺復甦',
                        link:'http://www.alpha101.com.tw/Group4/index.html',
                        image:'./images/b/work3.jpg',
                        thumbnail:'./images/work3.jpg'                        
                    },
                    {
                        workTitle:'心理測驗',
                        link:'http://www.alpha101.com.tw/Group4/mental_test.html',
                        image:'./images/b/work4.jpg',
                        thumbnail:'./images/work4.jpg'                        
                    },
                    {
                        workTitle:'UI設計-熊愛喝飲料',
                        link:'https://www.figma.com/proto/FLlMX09H6noj47MTRFPYsK/one-page-webside-mock-up-?page-id=0%3A1&node-id=5-21&viewport=2815%2C-3098%2C0.27&t=4TCnXiZiP304Fjvb-8&scaling=scale-down-width&content-scaling=fixed&hide-ui=1 ',
                        image:'./images/bear.jpg',
                        thumbnail:'./images/bear.jpg'                        
                    },
                    {
                        workTitle:'UI設計-日記撰寫APP',
                        link:'https://www.figma.com/proto/Fnk7odEyot2zhZT2CQwGe5/mobile-App-Spotlife-mockup?page-id=0%3A1&node-id=41-2606&viewport=247%2C348%2C0.07&t=Ef7uK3ydXcwKA6cq-8&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A8&hide-ui=1 ',
                        image:'./images/spotlight.jpg',
                        thumbnail:'./images/spotlight.jpg'                        
                    },
                    {
                        workTitle:'代辦清單APP',
                        link:'http://www.alpha101.com.tw/Group4/todoList/todoList.html',
                        image:'./images/todolist.png',
                        thumbnail:'./images/todolist.jpg'                        
                    },
                    {
                        workTitle:'未知的檔案',
                        link:'',
                        image:'',
                        thumbnail:''                        
                    },
                    {
                        workTitle:'未知的檔案',
                        link:'',
                        image:'',
                        thumbnail:''                        
                    },
                    {
                        workTitle:'未知的檔案',
                        link:'',
                        image:'',
                        thumbnail:''                        
                    },
                    {
                        workTitle:'未知的檔案',
                        link:'',
                        image:'',
                        thumbnail:''                        
                    }
                ],
                workIndex:0,
                // Contact 變數
                submitData:[
                    {
                        id:'name',
                        input:null
                    },
                    {   
                        id:'phone',
                        input:null
                    },
                    {
                        id:'email',
                        input:null
                    },
                    {
                        id:'option',
                        input:null
                    },
                    {
                        id:'content',
                        input:null
                    }

                ],
                validation:[],
                ok:false
            }
        },
        created(){
            //頁面載入之後立即啟動自動播放
            this.startAutoPlay();
        },
        beforeUnmount(){
            //元件卸載時清除計時器避免內存
            clearInterval(this.timer);
        },
        
        computed:{
            //動態生成綁訂在 style 屬性上的物件
            carouselStyle(){
                return this.Carousel[this.currentIndex]
                    
            
        },
        hideArticleA(){   
            return {hideArticle:this.showControl[0]===false && this.showControl.findIndex(x=>x===true)!=-1};
        },
        hideArticleB(){
        return {hideArticle:this.showControl[1]===false && this.showControl.findIndex(x=>x===true)!=-1};
       },
        hideArticleC(){
        return {hideArticle:this.showControl[2]===false && this.showControl.findIndex(x=>x===true)!=-1};
       },

        showDescript(){
            return {showDes:this.showControl[this.showIndex]===true}
       },
       imagePop(){
        return {imagePop:this.bigImages===true}
       },
       warning(){
        const value=this.validation
        return (index)=>{
           const value=this.validation[index]
           if(value===undefined){
            return{invalid:false}
           }else{
            return{invalid:value.status===false}
           }
        }
        },
        warningText(){
        return index=>{
            const value=this.validation[index]
            if(value===undefined ||value===true){
                return false
            }else if(value.status===false){
                return true
            }
            }
        },
        notANumber(){
            if(this.validation[1]===undefined){
                return false
            }else{
                return this.validation[1].status==='not a number'
            }
        }

        
    },
    
  
    
        
        methods:{
            // 顯示圖片區塊
            showImages(workIndex){
                this.bigImages=!this.bigImages;
                this.workIndex=workIndex;
                if(this.bigImages===false){
                    this.workIndex=0;
                }
            },
            //切換圖片 淡入、淡出(方向 1 =下一張，-1=上一張)
            changeSlide(direction){
                if(this.isChanging)return;

                this.isChanging=true;
            },

            nextSlide(){
                //暫停自動播放
                this.clearAutoPlay();
                //3秒後重新啟動自動播放
                this.restartAutoPlay();
                this.currentIndex = (this.currentIndex +1 )%this.Carousel.length;
            },
            //切換至上一張圖片
            prevSlide(){
                //暫停自動播放
                this.clearAutoPlay();
                //3秒後重新啟動自動播放
                this.restartAutoPlay();
                //圖片切換
                this.currentIndex = (this.currentIndex -1 +this.Carousel.length)% this.Carousel.length;
            },
            //切換至下一張圖片
            
            //自動輪播
            startAutoPlay(){
                //清除先前的計時器
                this.clearAutoPlay();
                //幾秒後換圖片
                // this.autoPlayTimer=setInterval(()=>{this.nextSlide();},4500)
                this.timer  = setInterval(this.nextSlide,4000)
            },
            clearAutoPlay(){
                if(this.timer){
                    clearInterval(this.timer);
                    this.timer=null;
                }
            },
            restartAutoPlay(){
                this.clearAutoPlay();
                setTimeout(() => {
                    this.startAutoPlay();
                }, 3000);
            },
            articleDisplay(num){
                if(window.innerWidth>996){
                    const that=this
                this.showControl.forEach(function(item,index){
                        that.showControl[index]=false;
                        that.showControl[num]=true;
                    })
                    this.showIndex=num;
                    this.articleMoving[num]=this.offset[num]
                    
                }else{
                    this.floatImage=!this.floatImage;
                    this.showIndex=num;
                }
            },
            closeDsecript(){
                this.showControl=[false,false,false];
                this.showIndex=0;
                this.articleMoving=[0,0,0];
            },
            closeFloat(){
                this.showIndex=0;
                this.floatImage=!this.floatImage
            },
            labelSelect(num){
                //暫停自動播放
                this.clearAutoPlay();
                //3秒後重新啟動自動播放
                this.restartAutoPlay();
                this.currentIndex=num;
            },
            scrollPage(scrollWhere){
                const scrollPlace=this.$refs[scrollWhere];
                scrollPlace.scrollIntoView({behavior:'smooth'});
                console.log(scrollPlace)
                if(scrollWhere==='top'){
                    const offset=scrollPlace.offsetTop-70;
                    window.scrollTo({ top: offset, behavior: 'smooth' });
                }
            },
            phoneScroll(scrollWhere){
                const scrollPlace=this.$refs[scrollWhere];
                const offset=scrollPlace.offsetTop-70
                window.scrollTo({
                    top:offset,
                    behavior:'smooth'
                })
            },
            workBackground(work){
            if(work.image===''){
                return{backgroundImage:'url("./images/questionmark.jpg")'};
            }else{
                return{backgroundImage:`url(${work.thumbnail})`}
            }
            },
            submitCheck(){
                this.validation=[];
                for(let data of this.submitData){
                    let checkObject={};
                    checkObject.id=data.id;
                    const value=data.input
                    if(value===''||value===null){
                    checkObject.status=false;
                    }else if(isNaN(value)===true&& data.id==='phone'){
                        checkObject.status='not a number'
                    }
                    else{
                    checkObject.status=true;
                    }
                    this.validation.push(checkObject);
                    } 
                    const passHowMuch=this.validation.filter(item=>item.status===true)
                    if(passHowMuch.length===5){
                        this.ok=true;
                    }
                    for( let data of this.submitData){
                        data.input=null;
                    }
                   
                },
                messageClose(){
                    this.ok=false;
                }
                }
                
            
        
        }
        

    )
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

    // Banner();
