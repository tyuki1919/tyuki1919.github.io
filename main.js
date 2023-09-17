'use strict';

const btn=document.getElementById('btn');
const result=document.getElementById('result');
const photo=document.getElementById('gazou');

btn.addEventListener('click',()=>{
    const num=Math.random();

    if(num<0.2){
        result.textContent='ラッキー';
        photo.src='images/kuniogood.png';
    }else if(num<0.5){
        result.textContent='まあまあ'
        photo.src='images/kuniook.png';
    }else if(num<0.8){
        result.textContent='ダメダメ'
        photo.src='images/kuniokomari.png';
    }else{
        result.textContent='サイテー'
        photo.src='images/kunioikari.png';
    }
});
