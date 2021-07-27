var app = new Vue(
   {
      el: "#app",

      data:{
         menushow: '',
      },
      methods:{
         menutoggleshow: function(){
            if(this.menushow == ""){
               this.menushow = "display";
            }else{
            this.menushow = "";
            }
         },
      }
   })