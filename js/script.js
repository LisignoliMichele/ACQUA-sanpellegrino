var app = new Vue(
   {
      el: "#app",

      data:{
         menushow: '',
         articles: [
               {
                  tag: "Azienda",
                  title: "Lorem ipsum dolor sit amet, condeetur adipisci elit", 
                  poster: "2",
                  lyric: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam enim ad, corporis expedita pariatur eligendi aliquam deserunt culpa laborum a, rem consequatur eos porro, qui est adipisci necessitatibus optio. Debitis.",
               },
               {
                  tag: "Identità",
                  title: "Lorem ipsum dolor sit amet, condeetur adipisci elit", 
                  poster: "3",
                  lyric: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam enim ad, corporis expedita pariatur eligendi aliquam deserunt culpa laborum a, rem consequatur eos porro, qui est adipisci necessitatibus optio. Debitis.",
               },
               {
                  tag: "Valori",
                  title: "Lorem ipsum dolor sit amet, condeetur adipisci elit", 
                  poster: "4",
                  lyric: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam enim ad, corporis expedita pariatur eligendi aliquam deserunt culpa laborum a, rem consequatur eos porro, qui est adipisci necessitatibus optio. Debitis.",
               },
               {
                  tag: "Performance",
                  title: "Lorem ipsum dolor sit amet, condeetur adipisci elit", 
                  poster: "5",
                  lyric: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam enim ad, corporis expedita pariatur eligendi aliquam deserunt culpa laborum a, rem consequatur eos porro, qui est adipisci necessitatibus optio. Debitis.",
               },
               {
                  tag: "Stabilimenti",
                  title: "Lorem ipsum dolor sit amet, condeetur adipisci elit", 
                  poster: "6",
                  lyric: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam enim ad, corporis expedita pariatur eligendi aliquam deserunt culpa laborum a, rem consequatur eos porro, qui est adipisci necessitatibus optio. Debitis.",
               },
               {
                  tag: "Storia",
                  title: "Lorem ipsum dolor sit amet, condeetur adipisci elit", 
                  poster: "7",
                  lyric: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam enim ad, corporis expedita pariatur eligendi aliquam deserunt culpa laborum a, rem consequatur eos porro, qui est adipisci necessitatibus optio. Debitis.",
               },
         ],
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