(function(){"use strict";var t={3487:function(t,e,a){var o=a(9242),r=a(3396);function n(t,e,a,o,n,i){const s=(0,r.up)("BasicHeader"),l=(0,r.up)("el-header"),u=(0,r.up)("BasicAside"),d=(0,r.up)("el-aside"),c=(0,r.up)("router-view"),p=(0,r.up)("el-main"),m=(0,r.up)("el-container");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(m,null,{default:(0,r.w5)((()=>[(0,r.Wm)(l,null,{default:(0,r.w5)((()=>[(0,r.Wm)(s)])),_:1}),(0,r.Wm)(m,null,{default:(0,r.w5)((()=>[(0,r.Wm)(d,null,{default:(0,r.w5)((()=>[(0,r.Wm)(u)])),_:1}),(0,r.Wm)(m,{class:"main-container"},{default:(0,r.w5)((()=>[(0,r.Wm)(p,null,{default:(0,r.w5)((()=>[(0,r.Wm)(c)])),_:1})])),_:1})])),_:1})])),_:1})])}const i=t=>((0,r.dD)("data-v-01ffb614"),t=t(),(0,r.Cn)(),t),s=i((()=>(0,r._)("h1",null,"w-life daily",-1)));function l(t,e,a,o,n,i){const l=(0,r.up)("router-link"),u=(0,r.up)("el-button");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(l,{to:"/home",class:"custom-router-link"},{default:(0,r.w5)((()=>[s])),_:1}),(0,r._)("div",null,[i.isLoggedIn?(0,r.kq)("",!0):((0,r.wg)(),(0,r.j4)(l,{key:0,to:"/login"},{default:(0,r.w5)((()=>[(0,r.Wm)(u,{type:"Login",round:""},{default:(0,r.w5)((()=>[(0,r.Uk)("Login")])),_:1})])),_:1})),i.isLoggedIn?(0,r.kq)("",!0):((0,r.wg)(),(0,r.j4)(l,{key:1,to:"/register"},{default:(0,r.w5)((()=>[(0,r.Wm)(u,{type:"Register",round:""},{default:(0,r.w5)((()=>[(0,r.Uk)("Register")])),_:1})])),_:1})),i.isLoggedIn?((0,r.wg)(),(0,r.j4)(l,{key:2,to:"/logout"},{default:(0,r.w5)((()=>[(0,r.Wm)(u,{type:"Logout",onClick:i.logout,round:""},{default:(0,r.w5)((()=>[(0,r.Uk)("Logout")])),_:1},8,["onClick"])])),_:1})):(0,r.kq)("",!0),i.isLoggedIn?((0,r.wg)(),(0,r.j4)(l,{key:3,to:"/account"},{default:(0,r.w5)((()=>[(0,r.Wm)(u,{type:"Account",round:""},{default:(0,r.w5)((()=>[(0,r.Uk)("Account")])),_:1})])),_:1})):(0,r.kq)("",!0)])],64)}a(560);var u=a(1076),d={name:"BasicHeader",computed:{isLoggedIn(){return this.$store.state.isLoggedIn}},created(){this.checkLoginStatus()},methods:{async checkLoginStatus(){try{await u.Z.get("https://www.w-life.store/api/user/check",{withCredentials:!0}),this.$store.dispatch("login")}catch(t){console.error("Error checking login status",t)}},async logout(){try{await u.Z.post("https://www.w-life.store/api/user/logout",{},{withCredentials:!0}),alert("로그아웃 성공!"),this.$store.dispatch("logout"),this.$router.push("/login")}catch(t){console.error("Error during logout",t),alert("로그아웃 실패")}}}},c=a(89);const p=(0,c.Z)(d,[["render",l],["__scopeId","data-v-01ffb614"]]);var m=p,g=a(7139);function h(t,e,a,o,n,i){const s=(0,r.up)("HomeFilled"),l=(0,r.up)("el-icon"),u=(0,r.up)("router-link"),d=(0,r.up)("el-menu-item"),c=(0,r.up)("Collection"),p=(0,r.up)("el-menu-item-group"),m=(0,r.up)("el-sub-menu"),h=(0,r.up)("Avatar"),w=(0,r.up)("el-menu"),f=(0,r.up)("el-scrollbar"),y=(0,r.up)("el-aside");return(0,r.wg)(),(0,r.j4)(y,null,{default:(0,r.w5)((()=>[(0,r.Wm)(f,null,{default:(0,r.w5)((()=>[(0,r.Wm)(w,{"default-openeds":[]},{default:(0,r.w5)((()=>[(0,r.Wm)(d,{index:"home"},{title:(0,r.w5)((()=>[(0,r.Wm)(l,null,{default:(0,r.w5)((()=>[(0,r.Wm)(s)])),_:1}),(0,r.Wm)(u,{to:"/home",class:"custom-router-link"},{default:(0,r.w5)((()=>[(0,r.Uk)("Home")])),_:1})])),_:1}),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(n.categories,(t=>((0,r.wg)(),(0,r.j4)(m,{key:t.id,index:t.id.toString()},{title:(0,r.w5)((()=>[(0,r.Wm)(l,null,{default:(0,r.w5)((()=>[(0,r.Wm)(c)])),_:1}),(0,r.Uk)((0,g.zw)(t.name),1)])),default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(n.subCategories[t.id],(t=>((0,r.wg)(),(0,r.j4)(p,{key:t.id},{default:(0,r.w5)((()=>[(0,r.Wm)(d,{index:t.id.toString(),onClick:e=>i.goToSubCategoryBoard(t.id)},{default:(0,r.w5)((()=>[(0,r.Uk)((0,g.zw)(t.name),1)])),_:2},1032,["index","onClick"])])),_:2},1024)))),128))])),_:2},1032,["index"])))),128)),(0,r.Wm)(d,{index:"visitor"},{title:(0,r.w5)((()=>[(0,r.Wm)(u,{to:"/visitor",class:"custom-router-link"},{default:(0,r.w5)((()=>[(0,r.Wm)(l,null,{default:(0,r.w5)((()=>[(0,r.Wm)(h)])),_:1}),(0,r.Uk)("Visitor ")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})}var w={name:"BasicAside",data(){return{categories:[],subCategories:{}}},created(){this.fetchCategories()},methods:{async fetchCategories(){try{const t=await u.Z.get("https://www.w-life.store/api/category");this.categories=t.data.sort(((t,e)=>t.position-e.position)),await this.fetchSubCategories()}catch(t){console.error("Error fetching categories",t)}},async fetchSubCategories(){try{for(let t of this.categories){const e=await u.Z.get(`https://www.w-life.store/api/subCategory/${t.id}`);this.subCategories[t.id]=e.data.sort(((t,e)=>t.position-e.position))}}catch(t){console.error("Error fetching subcategories",t)}},goToSubCategoryBoard(t){this.$router.push(`/subCategory/${t}`)}}};const f=(0,c.Z)(w,[["render",h],["__scopeId","data-v-43721189"]]);var y=f,b={name:"App",components:{BasicHeader:m,BasicAside:y}};const v=(0,c.Z)(b,[["render",n]]);var _=v,C=a(2483);const P=(0,r._)("br",null,null,-1),k=(0,r._)("br",null,null,-1);function W(t,e,a,o,n,i){return(0,r.wg)(),(0,r.iD)("h2",null,[(0,r.Uk)(" 제 블로그에 오신 것을 환영합니다. "),P,(0,r.Uk)(" 본 블로그는 2023년부터 개인적인 공간으로 사용되어 왔습니다. "),k,(0,r.Uk)("개인적인 관심 분야에 대한 지식을 나누고, 소소하게 살아가는 이야기를 담고 있습니다. ")])}var I={name:"PageHome"};const V=(0,c.Z)(I,[["render",W]]);var $=V;const U=t=>((0,r.dD)("data-v-7dc04696"),t=t(),(0,r.Cn)(),t),x=U((()=>(0,r._)("h1",null,"Login",-1))),D=U((()=>(0,r._)("button",{type:"submit",class:"submit-button"},"Login",-1)));function S(t,e,a,n,i,s){return(0,r.wg)(),(0,r.iD)("form",{onSubmit:e[2]||(e[2]=(0,o.iM)(((...t)=>s.login&&s.login(...t)),["prevent"])),class:"login-form"},[x,(0,r.wy)((0,r._)("input",{type:"email","onUpdate:modelValue":e[0]||(e[0]=t=>i.loginInfo.email=t),placeholder:"Email",required:"",class:"input-field"},null,512),[[o.nr,i.loginInfo.email]]),(0,r.wy)((0,r._)("input",{type:"password","onUpdate:modelValue":e[1]||(e[1]=t=>i.loginInfo.password=t),placeholder:"Password",required:"",class:"input-field"},null,512),[[o.nr,i.loginInfo.password]]),D],32)}var Z={name:"PageLogin",data(){return{loginInfo:{email:"",password:""}}},methods:{async login(){try{const t=await u.Z.post("https://www.w-life.store/api/user/login",this.loginInfo,{withCredentials:!0});200===t.status?(alert("로그인에 성공했습니다."),this.$store.dispatch("login"),this.$router.push("/home")):alert(t.data.errorMessage||"로그인에 실패했습니다.")}catch(t){alert("로그인이 실패했습니다."),console.error(t,"알 수 없는 에러 발생")}}}};const A=(0,c.Z)(Z,[["render",S],["__scopeId","data-v-7dc04696"]]);var z=A;const L=t=>((0,r.dD)("data-v-04616f48"),t=t(),(0,r.Cn)(),t),B=L((()=>(0,r._)("h1",null,"Register",-1))),q=L((()=>(0,r._)("button",{type:"submit",class:"submit-button"},"회원가입",-1)));function M(t,e,a,n,i,s){return(0,r.wg)(),(0,r.iD)("form",{onSubmit:e[4]||(e[4]=(0,o.iM)(((...t)=>s.register&&s.register(...t)),["prevent"]))},[B,(0,r.wy)((0,r._)("input",{type:"email","onUpdate:modelValue":e[0]||(e[0]=t=>i.registerInfo.email=t),placeholder:"Email",required:"",class:"input-field"},null,512),[[o.nr,i.registerInfo.email]]),(0,r.wy)((0,r._)("input",{type:"name","onUpdate:modelValue":e[1]||(e[1]=t=>i.registerInfo.name=t),placeholder:"name",required:"",class:"input-field"},null,512),[[o.nr,i.registerInfo.name]]),(0,r.wy)((0,r._)("input",{type:"password","onUpdate:modelValue":e[2]||(e[2]=t=>i.registerInfo.password=t),placeholder:"Password",required:"",class:"input-field"},null,512),[[o.nr,i.registerInfo.password]]),(0,r.wy)((0,r._)("input",{type:"password",id:"confirmPassword","onUpdate:modelValue":e[3]||(e[3]=t=>i.registerInfo.confirmPassword=t),placeholder:"Confirm Password",required:"",class:"input-field"},null,512),[[o.nr,i.registerInfo.confirmPassword]]),q],32)}var j={name:"PageRegister",data(){return{registerInfo:{email:"",password:"",confirmPassword:"",name:""}}},methods:{async register(){try{const t=await u.Z.post("https://www.w-life.store/api/user/register",this.registerInfo,{withCredentials:!0});201===t.status?(alert("회원가입에 성공했습니다."),this.$router.push("/login")):alert(t.data.errorMessage||"회원가입에 실패했습니다.")}catch(t){alert("회원가입이 실패했습니다."),console.error(t,"알 수 없는 에러 발생")}}}};const T=(0,c.Z)(j,[["render",M],["__scopeId","data-v-04616f48"]]);var H=T;const F=t=>((0,r.dD)("data-v-c147d124"),t=t(),(0,r.Cn)(),t),E={class:"visitorTitle"},O=F((()=>(0,r._)("h2",null,"방명록",-1))),R={key:0};function N(t,e,a,o,n,i){const s=(0,r.up)("el-button"),l=(0,r.up)("el-table-column"),u=(0,r.up)("router-link"),d=(0,r.up)("el-table"),c=(0,r.up)("Pagination");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",E,[O,(0,r.Wm)(s,{type:"primary",onClick:i.goToWritePage},{default:(0,r.w5)((()=>[(0,r.Uk)("글쓰기")])),_:1},8,["onClick"])]),(0,r.Wm)(d,{data:n.visitors,class:"table-responsive",style:{width:"100%"}},{default:(0,r.w5)((()=>[(0,r.Wm)(l,{prop:"index",label:"번호",width:"80"},{default:(0,r.w5)((({$index:t})=>[(0,r.Uk)((0,g.zw)(i.calculateIndex(t)),1)])),_:1}),(0,r.Wm)(l,{label:"제목"},{default:(0,r.w5)((({row:t})=>[t.isPrivate?((0,r.wg)(),(0,r.iD)("span",R,"🔒")):(0,r.kq)("",!0),(0,r.Wm)(u,{to:`/visitor/${t.id}`},{default:(0,r.w5)((()=>[(0,r.Uk)((0,g.zw)(t.title),1)])),_:2},1032,["to"])])),_:1}),(0,r.Wm)(l,{prop:"user.name",label:"작성자",width:"100"}),(0,r.Wm)(l,{prop:"createdAt",label:"작성일",width:"150",formatter:i.formatDate},null,8,["formatter"]),(0,r.Wm)(l,{prop:"views",label:"조회수",width:"80"})])),_:1},8,["data"]),(0,r.Wm)(c,{"total-pages":n.meta.totalPages,"current-page":t.currentPage,onPageChanged:i.changePage},null,8,["total-pages","current-page","onPageChanged"])],64)}const Y={class:"pagination"},K=["disabled"],G=["onClick"],J=["disabled"];function Q(t,e,a,o,n,i){return(0,r.wg)(),(0,r.iD)("div",Y,[(0,r._)("button",{onClick:e[0]||(e[0]=(...t)=>i.prevPageRange&&i.prevPageRange(...t)),disabled:1===n.startPage},"Prev",8,K),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.paginationButtons,(t=>((0,r.wg)(),(0,r.iD)("button",{key:t,onClick:e=>i.changePage(t),class:(0,g.C_)({active:a.currentPage===t})},(0,g.zw)(t),11,G)))),128)),(0,r._)("button",{onClick:e[1]||(e[1]=(...t)=>i.nextPageRange&&i.nextPageRange(...t)),disabled:n.startPage+a.pageSize>a.totalPages}," Next ",8,J)])}var X={name:"PaginationButton",props:{totalPages:Number,currentPage:Number,pageSize:{type:Number,default:5}},data(){return{startPage:1}},computed:{paginationButtons(){const t=Math.min(this.startPage+this.pageSize-1,this.totalPages);return Array.from({length:t-this.startPage+1},((t,e)=>e+this.startPage))}},methods:{changePage(t){this.$emit("page-changed",t)},setStartPage(t){this.startPage=t},prevPageRange(){const t=Math.max(this.startPage-this.pageSize,1);t!==this.startPage&&(this.setStartPage(t),this.changePage(t))},nextPageRange(){const t=Math.min(this.startPage+this.pageSize,this.totalPages);t!==this.startPage&&(this.setStartPage(t),this.changePage(t))}}};const tt=(0,c.Z)(X,[["render",Q],["__scopeId","data-v-4bea6718"]]);var et=tt,at={name:"PageVisitor",components:{Pagination:et},data(){return{visitors:[],meta:{totalPages:0,currentPage:1,totalCount:0}}},methods:{formatDate(t,e){const a=new Date(t[e.property]);return a.toLocaleDateString()},goToWritePage(){this.$router.push("/visitor/write")},async fetchVisitors(t){try{const e=await u.Z.get(`https://www.w-life.store/api/visitor?page=${t}`);this.visitors=e.data.visitors,this.meta=e.data.meta,this.totalCount=e.data.meta.totalCount}catch(e){console.error("Error fetching visitors",e)}},changePage(t){this.currentPage=t,this.fetchVisitors(t),this.$router.push({path:this.$route.path,query:{page:t.toString()}})},calculateIndex(t){return this.totalCount-15*(this.currentPage-1)-t}},watch:{"$route.query.page":function(t){this.currentPage=Number(t)||1,this.fetchVisitors(this.currentPage)}},created(){const t=this.$route.query.page||1;this.currentPage=Number(t),this.fetchVisitors(this.currentPage)}};const ot=(0,c.Z)(at,[["render",N],["__scopeId","data-v-c147d124"]]);var rt=ot;const nt={class:"visitor-title"},it={class:"flex items-center"},st={class:"flex items-center"},lt={key:0,class:"visitor-content"},ut={key:1};function dt(t,e,a,o,n,i){const s=(0,r.up)("el-tag"),l=(0,r.up)("el-button"),u=(0,r.up)("el-input"),d=(0,r.up)("el-page-header");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("span",nt,(0,g.zw)(n.title),1),(0,r.Wm)(d,{onBack:i.goBack,icon:t.ArrowLeft},{content:(0,r.w5)((()=>[(0,r._)("div",it,[(0,r.Wm)(s,null,{default:(0,r.w5)((()=>[(0,r.Uk)("작성자")])),_:1}),(0,r._)("span",null,(0,g.zw)(n.author)+" | "+(0,g.zw)(n.createdAt),1)])])),extra:(0,r.w5)((()=>[(0,r._)("div",st,[(0,r.Wm)(l,{type:"primary",class:"ml-2",onClick:i.editContent},{default:(0,r.w5)((()=>[(0,r.Uk)("Edit")])),_:1},8,["onClick"]),(0,r.Wm)(l,{type:"danger",class:"ml-2",onClick:i.deleteVisitor},{default:(0,r.w5)((()=>[(0,r.Uk)("delete")])),_:1},8,["onClick"])])])),default:(0,r.w5)((()=>[n.editing?((0,r.wg)(),(0,r.iD)("div",ut,[(0,r.Wm)(u,{type:"textarea",modelValue:n.editableContent,"onUpdate:modelValue":e[0]||(e[0]=t=>n.editableContent=t),rows:"4",placeholder:"Please input your content"},null,8,["modelValue"]),(0,r.Wm)(l,{type:"success",class:"edit-button",onClick:i.patchVisitor},{default:(0,r.w5)((()=>[(0,r.Uk)("Save")])),_:1},8,["onClick"])])):((0,r.wg)(),(0,r.iD)("div",lt,(0,g.zw)(n.content),1))])),_:1},8,["onBack","icon"])],64)}var ct={name:"PageVisitorDeatil",data(){return{title:"",content:"",author:"",createdAt:"",editing:!1,editableContent:""}},methods:{goBack(){this.$router.go(-1)},editContent(){this.editableContent=this.content,this.editing=!0},async patchVisitor(){try{const t=this.$route.params.visitorId;await u.Z.patch(`https://www.w-life.store/api/visitor/${t}`,{content:this.editableContent},{withCredentials:!0}),this.content=this.editableContent,this.editing=!1,alert("방명록 수정 완료.")}catch(t){console.error("방명록 수정 서버에러",t),alert("방명록 수정 권한이 없습니다.")}this.content=this.editableContent,this.editing=!1},async deleteVisitor(){if(confirm("정말로 삭제하시겠습니까?"))try{const t=this.$route.params.visitorId;await u.Z.delete(`https://www.w-life.store/api/visitor/${t}`,{withCredentials:!0}),alert("방명록이 삭제되었습니다."),this.$router.go(-1)}catch(t){console.error("방명록 삭제 서버에러",t),alert("방명록 삭제에 실패했습니다.")}}},async created(){try{const t=this.$route.params.visitorId,e=await u.Z.get(`https://www.w-life.store/api/visitor/${t}`);this.title=e.data.title,this.content=e.data.content,this.author=e.data.user.name;const a=new Date(e.data.createdAt);this.createdAt=a.toLocaleDateString()}catch(t){console.error("Error fetching visitor detail",t)}}};const pt=(0,c.Z)(ct,[["render",dt],["__scopeId","data-v-c4bd96f4"]]);var mt=pt;const gt=t=>((0,r.dD)("data-v-ae0337f4"),t=t(),(0,r.Cn)(),t),ht=gt((()=>(0,r._)("h2",null,"글쓰기",-1))),wt=gt((()=>(0,r._)("label",{for:""},"제목",-1))),ft=gt((()=>(0,r._)("label",{for:""},"방명록",-1))),yt=gt((()=>(0,r._)("label",{for:"text"},"비밀번호",-1))),bt=gt((()=>(0,r._)("button",{type:"submit",class:"submit-button"},"작성",-1)));function vt(t,e,a,n,i,s){const l=(0,r.up)("el-input"),u=(0,r.up)("el-checkbox");return(0,r.wg)(),(0,r.iD)(r.HY,null,[ht,(0,r._)("form",{onSubmit:e[4]||(e[4]=(0,o.iM)(((...t)=>s.writeVisitor&&s.writeVisitor(...t)),["prevent"]))},[wt,(0,r.Wm)(l,{modelValue:i.visitors.title,"onUpdate:modelValue":e[0]||(e[0]=t=>i.visitors.title=t),maxlength:"20",placeholder:"제목을 입력해주세요","show-word-limit":"",type:"text"},null,8,["modelValue"]),ft,(0,r.Wm)(l,{modelValue:i.visitors.content,"onUpdate:modelValue":e[1]||(e[1]=t=>i.visitors.content=t),maxlength:"1000",placeholder:"방명록을 입력해주세요","show-word-limit":"",type:"textarea",rows:10,autosize:{minRows:20,maxRows:200}},null,8,["modelValue"]),yt,(0,r.Wm)(l,{modelValue:i.visitors.password,"onUpdate:modelValue":e[2]||(e[2]=t=>i.visitors.password=t),type:"text",placeholder:"비밀번호를 입력해주세요"},null,8,["modelValue"]),(0,r._)("div",null,[(0,r.Wm)(u,{modelValue:i.visitors.isPrivate,"onUpdate:modelValue":e[3]||(e[3]=t=>i.visitors.isPrivate=t)},{default:(0,r.w5)((()=>[(0,r.Uk)("비밀글")])),_:1},8,["modelValue"])]),bt],32)],64)}var _t={name:"PageVisitorWrite",data(){return{visitors:{title:"",content:"",password:"",isPrivate:!1}}},methods:{async writeVisitor(){try{const t=await u.Z.post("https://www.w-life.store/api/visitor",this.visitors,{withCredentials:!0});201===t.status&&(alert("방명록 작성에 성공했습니다."),this.$router.push("/visitor"))}catch(t){let e="방명록 작성에 실패했습니다.";t.response&&t.response.data&&(e=Array.isArray(t.response.data.errorMessage)?t.response.data.errorMessage.join("\n"):t.response.data.errorMessage||e),alert(e),console.error(t,"알 수 없는 에러 발생")}}}};const Ct=(0,c.Z)(_t,[["render",vt],["__scopeId","data-v-ae0337f4"]]);var Pt=Ct;const kt=t=>((0,r.dD)("data-v-4fda1070"),t=t(),(0,r.Cn)(),t),Wt={class:"account-box"},It=kt((()=>(0,r._)("h2",null,"유저 정보",-1)));function Vt(t,e,a,o,n,i){const s=(0,r.up)("el-tag"),l=(0,r.up)("el-button");return(0,r.wg)(),(0,r.iD)("div",Wt,[It,(0,r._)("span",null,[(0,r.Uk)("name: "+(0,g.zw)(n.name),1),(0,r.Wm)(s,{class:"ml-4",type:"warning"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,g.zw)(n.status),1)])),_:1})]),(0,r._)("span",null,"email: "+(0,g.zw)(n.email),1),"admin"===n.status?((0,r.wg)(),(0,r.j4)(l,{key:0,type:"primary",onClick:i.goToAdminPage},{default:(0,r.w5)((()=>[(0,r.Uk)("관리자 페이지")])),_:1},8,["onClick"])):(0,r.kq)("",!0)])}var $t={name:"PageAccount",data(){return{name:"",email:"",status:""}},methods:{goToAdminPage(){this.$router.push("/admin")}},async created(){try{const t=await u.Z.get("https://www.w-life.store/api/user/userInfo",{withCredentials:!0});this.name=t.data.name,this.email=t.data.email,this.status=t.data.status}catch(t){console.error("Error fetching visitor detail",t)}}};const Ut=(0,c.Z)($t,[["render",Vt],["__scopeId","data-v-4fda1070"]]);var xt=Ut;const Dt=t=>((0,r.dD)("data-v-a619455e"),t=t(),(0,r.Cn)(),t),St={class:"admin-box"},Zt={class:"adminTitle"},At=Dt((()=>(0,r._)("div",{class:"adminTitle"},[(0,r._)("h3",null,"카테고리 생성")],-1))),zt=Dt((()=>(0,r._)("br",null,null,-1))),Lt=Dt((()=>(0,r._)("div",{class:"adminTitle"},[(0,r._)("h3",null,"서브 카테고리 생성")],-1)));function Bt(t,e,a,n,i,s){const l=(0,r.up)("el-tag"),u=(0,r.up)("el-input"),d=(0,r.up)("el-form-item"),c=(0,r.up)("el-input-number"),p=(0,r.up)("el-button"),m=(0,r.up)("el-form");return(0,r.wg)(),(0,r.iD)("div",St,[(0,r._)("div",Zt,[(0,r._)("h2",null,[(0,r.Uk)("관리자 페이지 "),(0,r.Wm)(l,{type:"warning"},{default:(0,r.w5)((()=>[(0,r.Uk)("admin")])),_:1})])]),At,(0,r.Wm)(m,{onSubmit:(0,o.iM)(s.createCategory,["prevent"])},{default:(0,r.w5)((()=>[(0,r.Wm)(d,{label:"카테고리 이름"},{default:(0,r.w5)((()=>[(0,r.Wm)(u,{modelValue:i.categoryForm.name,"onUpdate:modelValue":e[0]||(e[0]=t=>i.categoryForm.name=t),placeholder:"카테고리 이름"},null,8,["modelValue"])])),_:1}),(0,r.Wm)(d,{label:"카테고리 위치"},{default:(0,r.w5)((()=>[(0,r.Wm)(c,{modelValue:i.categoryForm.position,"onUpdate:modelValue":e[1]||(e[1]=t=>i.categoryForm.position=t),min:1,placeholder:"위치"},null,8,["modelValue"])])),_:1}),(0,r.Wm)(d,{class:"admin-form-button"},{default:(0,r.w5)((()=>[(0,r.Wm)(p,{type:"primary","native-type":"submit"},{default:(0,r.w5)((()=>[(0,r.Uk)("카테고리 생성")])),_:1})])),_:1})])),_:1},8,["onSubmit"]),zt,Lt,(0,r.Wm)(m,{onSubmit:(0,o.iM)(s.createSubCategory,["prevent"])},{default:(0,r.w5)((()=>[(0,r.Wm)(d,{label:"카테고리 이름"},{default:(0,r.w5)((()=>[(0,r.Wm)(u,{modelValue:i.subCategoryForm.categoryName,"onUpdate:modelValue":e[2]||(e[2]=t=>i.subCategoryForm.categoryName=t),placeholder:"카테고리 이름"},null,8,["modelValue"])])),_:1}),(0,r.Wm)(d,{label:"서브카테고리 이름"},{default:(0,r.w5)((()=>[(0,r.Wm)(u,{modelValue:i.subCategoryForm.name,"onUpdate:modelValue":e[3]||(e[3]=t=>i.subCategoryForm.name=t),placeholder:"서브카테고리 이름"},null,8,["modelValue"])])),_:1}),(0,r.Wm)(d,{label:"서브카테고리 위치"},{default:(0,r.w5)((()=>[(0,r.Wm)(c,{modelValue:i.subCategoryForm.position,"onUpdate:modelValue":e[4]||(e[4]=t=>i.subCategoryForm.position=t),min:1,placeholder:"위치"},null,8,["modelValue"])])),_:1}),(0,r.Wm)(d,null,{default:(0,r.w5)((()=>[(0,r.Wm)(p,{type:"primary","native-type":"submit"},{default:(0,r.w5)((()=>[(0,r.Uk)("서브카테고리 생성")])),_:1})])),_:1})])),_:1},8,["onSubmit"])])}var qt={name:"PageAdmin",data(){return{categoryForm:{name:"",position:1},subCategoryForm:{categoryName:"",name:"",position:1}}},methods:{async createCategory(){try{await u.Z.post("https://www.w-life.store/api/category",this.categoryForm,{withCredentials:!0}),alert("카테고리가 생성되었습니다.")}catch(t){alert("카테고리 생성 실패"),console.error("카테고리 생성 실패",t)}},async createSubCategory(){try{await u.Z.post("https://www.w-life.store/api/subCategory",this.subCategoryForm,{withCredentials:!0}),alert("서브카테고리가 생성되었습니다.")}catch(t){alert("서브카테고리 생성 실패"),console.error("서브카테고리 생성 실패",t)}}}};const Mt=(0,c.Z)(qt,[["render",Bt],["__scopeId","data-v-a619455e"]]);var jt=Mt;const Tt={class:"boardTitle"};function Ht(t,e,a,o,n,i){const s=(0,r.up)("el-button"),l=(0,r.up)("el-table-column"),u=(0,r.up)("router-link"),d=(0,r.up)("el-table"),c=(0,r.up)("Pagination");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",Tt,[(0,r._)("h2",null,(0,g.zw)(n.subCategoryName),1),(0,r.Wm)(s,{type:"primary",onClick:i.goToWritePage},{default:(0,r.w5)((()=>[(0,r.Uk)("글쓰기")])),_:1},8,["onClick"])]),(0,r.Wm)(d,{data:n.posts,class:"table-responsive",style:{width:"100%"}},{default:(0,r.w5)((()=>[(0,r.Wm)(l,{prop:"index",label:"번호",width:"80"},{default:(0,r.w5)((({$index:t})=>[(0,r.Uk)((0,g.zw)(i.calculateIndex(t)),1)])),_:1}),(0,r.Wm)(l,{label:"제목"},{default:(0,r.w5)((({row:t})=>[(0,r.Wm)(u,{to:`/post/${t.id}`},{default:(0,r.w5)((()=>[(0,r.Uk)((0,g.zw)(t.title),1)])),_:2},1032,["to"])])),_:1}),(0,r.Wm)(l,{prop:"user.name",label:"작성자",width:"100"}),(0,r.Wm)(l,{prop:"createdAt",label:"작성일",width:"150",formatter:i.formatDate},null,8,["formatter"]),(0,r.Wm)(l,{prop:"views",label:"조회수",width:"80"})])),_:1},8,["data"]),(0,r.Wm)(c,{"total-pages":n.meta.totalPages,"current-page":t.currentPage,onPageChanged:i.changePage},null,8,["total-pages","current-page","onPageChanged"])],64)}var Ft={name:"pageBoard",components:{Pagination:et},data(){return{posts:[],meta:{totalPages:0,currentPage:1,totalCount:0,pageSize:15},subCategoryName:""}},created(){const t=this.$route.query.page||1;this.currentPage=Number(t),this.fetchPosts(this.$route.params.subCategoryId)},watch:{"$route.params.subCategoryId":{immediate:!0,handler(t){this.fetchPosts(t)}},"$route.query.page":function(t){this.currentPage=Number(t)||1,this.fetchPosts(this.$route.params.subCategoryId)}},methods:{async fetchPosts(t){try{const e=this.$route.query.page||1,a=await u.Z.get(`https://www.w-life.store/api/post?page=${e}&subCategoryId=${t}`);this.subCategoryName=a.data.subCategory.name,this.posts=a.data.posts,this.meta=a.data.meta,this.totalCount=a.data.meta.totalCount}catch(e){console.error("Error fetching posts",e)}},formatDate(t,e){const a=new Date(t[e.property]);return a.toLocaleDateString()},goToWritePage(){const t=this.$route.params.subCategoryId;this.$router.push({path:"/board/write",query:{subCategoryId:t}})},changePage(t){this.currentPage=t,this.fetchPosts(this.$route.params.subCategoryId),this.$router.push({path:this.$route.path,query:{page:t.toString()}})},calculateIndex(t){return this.totalCount-15*(this.currentPage-1)-t}}};const Et=(0,c.Z)(Ft,[["render",Ht],["__scopeId","data-v-cc7c78b0"]]);var Ot=Et;const Rt={class:"board-title"},Nt={class:"flex items-center"},Yt={class:"flex items-center"},Kt={key:0,class:"board-content"},Gt={key:1};function Jt(t,e,a,o,n,i){const s=(0,r.up)("el-tag"),l=(0,r.up)("el-button"),u=(0,r.up)("el-input"),d=(0,r.up)("el-page-header");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("span",Rt,(0,g.zw)(n.title),1),(0,r.Wm)(d,{onBack:i.goBack,icon:t.ArrowLeft},{content:(0,r.w5)((()=>[(0,r._)("div",Nt,[(0,r.Wm)(s,null,{default:(0,r.w5)((()=>[(0,r.Uk)("작성자")])),_:1}),(0,r._)("span",null,(0,g.zw)(n.author)+" | "+(0,g.zw)(n.createdAt),1)])])),extra:(0,r.w5)((()=>[(0,r._)("div",Yt,[(0,r.Wm)(l,{type:"primary",class:"ml-2",onClick:i.editContent},{default:(0,r.w5)((()=>[(0,r.Uk)("Edit")])),_:1},8,["onClick"]),(0,r.Wm)(l,{type:"danger",class:"ml-2",onClick:i.deletePost},{default:(0,r.w5)((()=>[(0,r.Uk)("delete")])),_:1},8,["onClick"])])])),default:(0,r.w5)((()=>[n.editing?((0,r.wg)(),(0,r.iD)("div",Gt,[(0,r.Wm)(u,{type:"textarea",modelValue:n.editableContent,"onUpdate:modelValue":e[0]||(e[0]=t=>n.editableContent=t),rows:"4",placeholder:"Please input your content"},null,8,["modelValue"]),(0,r.Wm)(l,{type:"success",onClick:i.patchPost,class:"edit-button-board"},{default:(0,r.w5)((()=>[(0,r.Uk)("Save")])),_:1},8,["onClick"])])):((0,r.wg)(),(0,r.iD)("div",Kt,(0,g.zw)(n.content),1))])),_:1},8,["onBack","icon"])],64)}var Qt={name:"PageVisitorDeatil",data(){return{title:"",content:"",author:"",createdAt:"",editing:!1,editableContent:""}},methods:{goBack(){this.$router.go(-1)},editContent(){this.editableContent=this.content,this.editing=!0},async patchPost(){try{const t=this.$route.params.postId;await u.Z.patch(`https://www.w-life.store/api/post/${t}`,{content:this.editableContent},{withCredentials:!0}),this.content=this.editableContent,this.editing=!1,alert("게시글 수정 완료.")}catch(t){console.error("게시글 수정 서버에러",t),alert("게시글 수정 권한이 없습니다.")}this.content=this.editableContent,this.editing=!1},async deletePost(){if(confirm("정말로 삭제하시겠습니까?"))try{const t=this.$route.params.postId;await u.Z.delete(`https://www.w-life.store/api/post/${t}`,{withCredentials:!0}),alert("게시글이 삭제되었습니다."),this.$router.go(-1)}catch(t){console.error("Error deleting visitor",t),alert("게시글 삭제에 실패했습니다.")}}},async created(){try{const t=this.$route.params.postId,e=await u.Z.get(`https://www.w-life.store/api/post/${t}`);this.title=e.data.title,this.content=e.data.content;const a=new Date(e.data.createdAt);this.createdAt=a.toLocaleDateString(),this.author=e.data.user.name}catch(t){console.error("Error fetching visitor detail",t)}}};const Xt=(0,c.Z)(Qt,[["render",Jt],["__scopeId","data-v-5a9ea6e0"]]);var te=Xt;const ee=t=>((0,r.dD)("data-v-9bd58e56"),t=t(),(0,r.Cn)(),t),ae=ee((()=>(0,r._)("h2",null,"글쓰기",-1))),oe=ee((()=>(0,r._)("label",{for:""},"제목",-1))),re=ee((()=>(0,r._)("label",{for:""},"내용",-1))),ne=ee((()=>(0,r._)("button",{type:"submit",class:"submit-button"},"작성",-1)));function ie(t,e,a,n,i,s){const l=(0,r.up)("el-input");return(0,r.wg)(),(0,r.iD)(r.HY,null,[ae,(0,r._)("form",{onSubmit:e[2]||(e[2]=(0,o.iM)(((...t)=>s.writeBoard&&s.writeBoard(...t)),["prevent"]))},[oe,(0,r.Wm)(l,{modelValue:i.boards.title,"onUpdate:modelValue":e[0]||(e[0]=t=>i.boards.title=t),maxlength:"20",placeholder:"제목을 입력해주세요","show-word-limit":"",type:"text"},null,8,["modelValue"]),re,(0,r.Wm)(l,{modelValue:i.boards.content,"onUpdate:modelValue":e[1]||(e[1]=t=>i.boards.content=t),maxlength:"1000",placeholder:"내용을 입력해주세요","show-word-limit":"",type:"textarea",rows:10,autosize:{minRows:20,maxRows:200}},null,8,["modelValue"]),ne],32)],64)}var se={name:"PageVisitorWrite",data(){return{boards:{title:"",content:"",subCategoryId:""}}},created(){this.boards.subCategoryId=this.$route.query.subCategoryId},methods:{async writeBoard(){try{const t=await u.Z.post("https://www.w-life.store/api/post",this.boards,{withCredentials:!0});201===t.status&&(alert("게시글 작성에 성공했습니다."),this.$router.go(-1))}catch(t){let e="게시글 작성에 실패했습니다.";t.response&&t.response.data&&(e=Array.isArray(t.response.data.errorMessage)?t.response.data.errorMessage.join("\n"):t.response.data.errorMessage||e),alert(e),console.error(t,"알 수 없는 에러 발생")}}}};const le=(0,c.Z)(se,[["render",ie],["__scopeId","data-v-9bd58e56"]]);var ue=le;const de=[{path:"/home",name:"Home",component:$},{path:"/login",name:"Login",component:z},{path:"/register",name:"Register",component:H},{path:"/visitor",name:"visitor",component:rt},{path:"/visitor/:visitorId",name:"PageVisitorDeatil",component:mt},{path:"/visitor/write",name:"PageVisitorWrite",component:Pt},{path:"/account",name:"PageAccount",component:xt},{path:"/admin",name:"PageAdmin",component:jt},{path:"/subCategory/:subCategoryId",name:"PageBoard",component:Ot},{path:"/post/:postId",name:"PageBoardDetail",component:te},{path:"/board/write",name:"PageBoardWrite",component:ue}],ce=(0,C.p7)({history:(0,C.PO)(),routes:de});var pe=ce,me=a(3056),ge=(a(4415),a(65)),he=(0,ge.MT)({state(){return{isLoggedIn:!1}},mutations:{setLoggedIn(t,e){t.isLoggedIn=e}},actions:{login({commit:t}){t("setLoggedIn",!0)},logout({commit:t}){t("setLoggedIn",!1)}}}),we=a(2748);const fe=(0,o.ri)(_);fe.use(me.Z),fe.use(pe),fe.use(he);for(const[ye,be]of Object.entries(we))fe.component(ye,be);fe.mount("#app")}},e={};function a(o){var r=e[o];if(void 0!==r)return r.exports;var n=e[o]={exports:{}};return t[o].call(n.exports,n,n.exports,a),n.exports}a.m=t,function(){var t=[];a.O=function(e,o,r,n){if(!o){var i=1/0;for(d=0;d<t.length;d++){o=t[d][0],r=t[d][1],n=t[d][2];for(var s=!0,l=0;l<o.length;l++)(!1&n||i>=n)&&Object.keys(a.O).every((function(t){return a.O[t](o[l])}))?o.splice(l--,1):(s=!1,n<i&&(i=n));if(s){t.splice(d--,1);var u=r();void 0!==u&&(e=u)}}return e}n=n||0;for(var d=t.length;d>0&&t[d-1][2]>n;d--)t[d]=t[d-1];t[d]=[o,r,n]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var o in e)a.o(e,o)&&!a.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,o){var r,n,i=o[0],s=o[1],l=o[2],u=0;if(i.some((function(e){return 0!==t[e]}))){for(r in s)a.o(s,r)&&(a.m[r]=s[r]);if(l)var d=l(a)}for(e&&e(o);u<i.length;u++)n=i[u],a.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return a.O(d)},o=self["webpackChunkmyblog_frontend"]=self["webpackChunkmyblog_frontend"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=a.O(void 0,[998],(function(){return a(3487)}));o=a.O(o)})();
//# sourceMappingURL=app.7b1c223b.js.map