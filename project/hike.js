// let imgarray=["./minchikalbetta.jpeg","./chanarayana durga.avif","./skandagiri","./kodaikanal.jpeg","./brahmavalley.jpeg","./valley of flowers.jpeg","./KEDARTAL TREK.jpeg"];
// let imageelem=document.getElementById('imageelem');
// let count=0;
// const nxtimg=()=>{
//     count++;
//     if(count==7){
//     count=0;
//     }
//     console.log(imgarray[count]);
//     imageelem.src=imgarray[count];

// }
// const backimg=()=>{
//     count--;
//     if(count==-1){
//     count=6;
//     }
//     console.log(imgarray[count]);
//     imageelem.src=imgarray[count];
// }

let content = [
    {
        imgSrc : "./minchikalbetta.jpeg",
        days : '2Days',
        level : "Easy To Moderate",
        place : "Minchukallu betta",
        desc : "A Weeknd Trek Near Tumkur",
        view:"./minchukallbetta.html"
    
    },
    {
        imgSrc : "./chanarayana durga.avif",
        days : '2Days',
        level :"Easy To Moderate",
        place : "channarayana durga",
        desc : "A Weeknd Trek Near Bengaluru",
        view:'./chanarayanadurga.html' 
    },
    { imgSrc :"./skandagiri.jpg",
    days : '1Day',
    level :"Easy To Moderate",
    place : "Skandagiri",
    desc : "A Weeknd Trek Near Bengaluru",
    view:'./skandagiri.html'
   },
   { imgSrc :"./kodaikanal.jpeg",
   days : '2Days',
   level :"Easy To Moderate",
   place : "kodaikanal",
   desc : "A Weekend camping experience from the spice valley of kodaikanal",
   view:'./kodaikanal.html'

   },
   {imgSrc :"./brahmavalley.jpeg",
   days : '7Days',
   level :"Easy To Moderate",
   place : "Brammah Valley Trek",
   desc : "Jammu and kashmir's new trek discovery",
   view:"./brammahvalley.html"
   },
   {imgSrc :"./valley of flowers.jpeg",
   days : '6Days',
   level :"Easy To Moderate",
   place : "VALLEY OF FLOWERS",
   desc : "A Legendary Trail the World Wants to Trek in",
   view:"./valley.html"
   },
   {imgSrc :"./KEDARTAL TREK.jpeg",
   days : '6Days',
   level :"Difficult",
   place : "KEDARTAL TREK",
   desc : "A Rare Adventure Among Big Mountain"


   }
]
let hrefcont = ['./minchukallbetta.html','./chanarayanadurga.html' , './skandagiri.html' , './kodaikanal.html',"./brammahvalley.html","./valley.html","./kedartal.html"]
let imgSrc = document.getElementById('imgSrc');
let days = document.getElementById('days');
let level = document.getElementById('level');
let place = document.getElementById('place');
let desc = document.getElementById('desc');
// let view = document.getElementById('view');
let linkImg = document.getElementById('linkImg')

let count=0;
const nxtimg=()=>{
    count++;
    if(count==7){
        count=0;
    }
    
    imgSrc.src = content[count].imgSrc;
    days.innerHTML = content[count].days;
    level.innerHTML = content[count].level;
    place.innerHTML = content[count].place;
    desc.innerHTML = content[count].desc;
    linkImg.href = hrefcont[count];
    console.log(content[count]);
}
 const backimg=()=>{
    count--;
    if(count==-1){
        count=6;
    } 
    imgSrc.src = content[count].imgSrc;
    days.innerHTML = content[count].days;
    level.innerHTML = content[count].level;
    place.innerHTML = content[count].place;
    desc.innerHTML = content[count].desc;
    console.log(content[count]);
 }