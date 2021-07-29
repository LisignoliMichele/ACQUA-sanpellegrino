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
         brands: [
            {
               name: "Acqua_Panna",
               bottle: "panna_bt",
               title: "Acqua Panna",
               lyric: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
            },
            {
               name: "Bibite_s.Pellegrino",
               bottle: "aranciata",
               title: "Bibite S.Pellegrino",
               lyric: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
            },
            {
               name: "levissima_poster",
               bottle: "levissima",
               title: "Levissima",
               lyric: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
            },
            {
               name: "Pago",
               bottle: "Pago_bt",
               title: "Pago",
               lyric: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
            },
            {
               name: "perrier",
               bottle: "perrier_bt",
               title: "Perrier",
               lyric: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
            },
            {
               name: "recoaro",
               bottle: "brilla_bt",
               title: "Recoaro",
               lyric: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
            },
            {
               name: "S.Pellegrino",
               bottle: "s.pellegrino_bt",
               title: "S.Pellegrino",
               lyric: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
            },
            {
               name: "Sanbitter",
               bottle: "sbitter",
               title: "Sanbitter",
               lyric: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
            },
         ]
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