"use strict";
//PC限定で一番最後に実行
if(!navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)){
    document.addEventListener("DOMContentLoaded", function() {
    //準備
    let cursorR = 4;  //カーソルの半径
    const cursor = document.getElementById('cursor');  //カーソル用のdivを取得

    //上記のdivタグをマウスに追従させる処理
    document.addEventListener('mousemove', function (e) {
        cursor.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
    });

    //aタグとbuttonタグにclass付与
    const linkElem = document.querySelectorAll('a,button,label,.acc-btn');
    for (let i = 0; i < linkElem.length; i++) {
        linkElem[i].addEventListener('mouseover', function (e) {
            cursor.classList.add('hover');
        });
        linkElem[i].addEventListener('mouseout', function (e) {
            cursor.classList.remove('hover');      
        });
    }
    });
}


const character = [
"パワー",
"マキマ ",
"早川アキ",
"レゼ",
"チェーンソーマン",
"天使の悪魔",
"コベニの愛車",
"東山コベニ",
"ポチタ",
"吉田ヒロフミ",
"デンジ",
"ホゲタ"
];

const btn = document.getElementById("gacha-button");
const disp = document.getElementById("image");
const ans= document.getElementById("anser");

btn.addEventListener("click", function() {
const num = Math.floor(Math.random() * character.length );
disp.innerHTML = character[num];

// ガチャ結果に応じたimg
switch (character[num]) {

    case character[0]:
    ans.src='images/pawa-.jpg'
    break;
    
    case character[1]:
    ans.src='images/makima.jpg'
    break;
    case character[2]:
    ans.src='images/hayakawa.jpg'
    break;
    case character[3]:
    ans.src='images/reze.png'
    break;
    case character[4]:
    ans.src='images/chain saw.jpg'
    break;
    case character[5]:
    ans.src='images/tenshi.png'
    break;
    case character[6]:
    ans.src='images/car.png'
    break;
    case character[7]:
    ans.src='images/kobeni.png'
    break;
    case character[8]:
    ans.src='images/potita.jpg'
    break;
    case character[9]:
    ans.src='images/yoshida.png'
    break;
    case character[10]:
    ans.src='images/denji.png'
    break;
    case character[11]:
    ans.src='images/hogeta.jpg'
    break;

}

});
