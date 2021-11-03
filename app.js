attachCarduriPagina(window.innerWidth,1,animale);
generareButoaneWidth(window.innerWidth,animale);
let butoane=document.querySelector('.butoane');
let fullCard=document.querySelector('.fullCard');
let gridAnimale=document.querySelector('.animaleGrid');
let initAnimale=gridAnimale.innerHTML;
let sel=document.querySelector('select');

sel.addEventListener('change',()=>{
    window.addEventListener('resize',()=>{
        if(sel.value==="nume"){
    attatchCardsButton(window.innerWidth,1,bubbleSortNume(animale));
    generareButoaneWidth(window.innerWidth,bubbleSortNume(animale));
        }
        else if(sel.value==="data"){
            attatchCardsButton(window.innerWidth,1,bubbleSortData(animale));
            generareButoaneWidth(window.innerWidth,bubbleSortData(animale));
        }
        else if(sel.value==="id"){
            attatchCardsButton(window.innerWidth,1,bubbleSortId(animale));
            generareButoaneWidth(window.innerWidth,bubbleSortId(animale));
        }
    });
});

// window.addEventListener('resize',()=>{
//     attachCarduriPagina(window.innerWidth,1,animale);
//     generareButoaneWidth(window.innerWidth,animale);
//     });


butoane.addEventListener('click',(e)=>{
    let buton=e.target;
    if(buton.tagName=='BUTTON'){
        let nrBut=buton.innerText;
        nrBut=+nrBut;
        attachCarduriPagina(window.innerWidth,nrBut,animale);
    }

});

document.querySelector('.animaleGrid').addEventListener('click',(e)=>{
    let overlay=document.querySelector('.overlay');
   let card=e.target;
    if(card.tagName==="SECTION"){
       fullCard.innerHTML=createFullCard(animale[findDataIndexById(card)]).innerHTML;
    }
    overlay.style.display="inherit";
    fullCard.style.display="block";
   fullCard.style.marginTop="100px";

});

fullCard.addEventListener('click',(e)=>{

   let buton=e.target;
   let i=findDataIndexById(fullCard.children[3]);
   
   if(buton.tagName==='I'){
       if(buton.classList.contains('exit')){
           fullCard.style.display="none";
           let overlay=document.querySelector('.overlay');
           overlay.style.display="none";
       }
       else{
           if(i<=animale.length-1 && i>=0){
       if(buton.classList.contains('right')){
           fullCard.innerHTML=createFullCard(animale[i+1]).innerHTML;
       }
       else if(buton.classList.contains('left')){
           fullCard.innerHTML=createFullCard(animale[i-1]).innerHTML;
       }
   }
      
   }
   }
});


document.querySelector('.search button').addEventListener('click',()=>{
    let input=document.querySelector('.search input');
        if(input.value===""){
            gridAnimale.innerHTML=initAnimale;
        }
        else{
            // let v=getCardsByName(input.value);
            // main.innerHTML="";
            // for(let i=0;i<v.length;i++)
            //     main.appendChild(v[i]);
            for(let i=0;i<gridAnimale.children.length;i++)
                gridAnimale.children[i].style.display="none";
             for(let i=0;i<getCardsByName(input.value).length;i++)
                gridAnimale.appendChild(getCardsByName(input.value)[i]);
        }
    
});