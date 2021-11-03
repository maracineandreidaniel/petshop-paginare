let createCard=(obj)=>{
    let sect=document.createElement('section');
    sect.className="animal";
    let img=document.createElement('img');
    img.src=obj.imagine;
    let nume=document.createElement('h2');
    nume.innerText=obj.name;
    let specie=document.createElement('p');
    specie.innerText=obj.specie;
    let id=document.createElement('p');
    id.innerText=obj.id;
    let data=document.createElement('p');
    data.innerText=obj.dataAdaugare;
    sect.appendChild(img);
    sect.appendChild(nume);
    sect.appendChild(specie);
    sect.appendChild(id);
    sect.appendChild(data);
    return sect;
};


let attachCards=(arr)=>{
    let animals=document.querySelector('.animaleGrid');
    animals.innerHTML="";
    for(let i=0;i<arr.length;i++)
        animals.appendChild(createCard(arr[i]));
};

let carduriPerPagina=(nrCarduri, carduri,nrPagina)=>{
    let v=[];
    for(let i=(nrPagina-1)*nrCarduri;i<=(nrPagina*nrCarduri)-1;i++)
        v.push(carduri[i]);
    return v;
};

let attachCarduriPagina=(width,numberButton,arr)=>{
    if(width<720){
        attachCards(carduriPerPagina(3,arr,numberButton));
    }
    else if(width<900){
        attachCards(carduriPerPagina(9,arr,numberButton));
    }
    else{
        attachCards(carduriPerPagina(12,arr,numberButton));
    }
};

let genereazaButoane=(nrButoane)=>{

    let butoane=document.querySelector('.butoane');
    for(let i=1;i<=nrButoane;i++){
        let buton=document.createElement('button');
        buton.innerText=i;
        butoane.appendChild(buton);
    }
};

let generareButoaneWidth=(width,arr)=>{
    let buts=document.querySelector('.butoane');
    buts.innerHTML="";
    if(width<720){
        if(arr.length%3===0){
            genereazaButoane(arr.length/3);}
        else{
            genereazaButoane(arr.length/3+1);}
    }
    else if(width<900){
        if(arr.length%9===0){
            genereazaButoane(arr.length/9);}
        else{
            genereazaButoane(arr.length/9+1);}
    }
    else{
        if(arr.length%12===0){
            genereazaButoane(arr.length/12);}
        else{
            genereazaButoane(arr.length/12+1);}
    }
};

let createFullCard=(obj)=>{
    let fullcard=document.createElement('section');
    fullcard.className="fullCard";
    fullcard.innerHTML= `<i class="fas fa-arrow-right right"></i>
    <i class="fas fa-arrow-left left"></i>
    <i class="fas fa-times exit"></i>
    <section class="simpleCard">
        <img src="${obj.imagine}" alt="">
        <h1>${obj.name}</h1>
        <p>${obj.specie}</p>
        <p>${obj.id}</p>
        <p>${obj.dataAdaugare}</p>
    </section>`;
    return fullcard;
};

let findDataIndexById=(card)=>{
    let txt="";
    for(let i=0;i<animale.length;i++)
        if(`<p>${animale[i].id}</p>`===`<p>${card.children[3].innerText}</p>`){
            return i;
        }

};

let getCardsByName=(n)=>{
    let v=[];
    let txt="";
    for(let i=0;i<animale.length;i++){
        txt=""+animale[i].name;
         if(txt.toLocaleLowerCase().includes(n.toLocaleLowerCase()))
             v.push(createCard(animale[i]));
    }
     return v;
};

let compare2Dates=(data1,data2)=>{
    let d1=data1.split("-");
    let d2=data2.split("-");
    if(parseInt(d1[2])>parseInt(d2[2])){
        return true;
    }
    else if(parseInt(d1[2])<parseInt(d2[2])){
        return false;
    }
    else if(parseInt(d1[0])>parseInt(d2[0])){
        return true;
    }
    else if(parseInt(d1[0])<parseInt(d2[0])){
        return false;
    }
    else if(parseInt(d1[1])>parseInt(d2[1])){
        return true;
    }
    else{
        return false;
    }
};

let bubbleSortNume=(arr)=>{
    let flag=false;
    while(flag==false){
         flag=true;
        for(let j=0;j<arr.length-1;j++){
            if((arr[j].name)>(arr[j+1].name)){
                let aux=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=aux;
                flag=false;
         }
        }
    }   
    return arr;
}



let bubbleSortData=(arr)=>{
    let flag=false;
    while(flag==false){
        flag=true;
    for(let j=0;j<arr.length-1;j++){
        if(compare2Dates(arr[j].dataAdaugare,arr[j+1].dataAdaugare)===true){
            let aux=arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=aux;
            flag=false;
        }
    }
    }
    return arr;
};

let bubbleSortId=(arr)=>{
    let flag=false;
    while(flag==false){
        flag=true;
    for(let j=0;j<arr.length-1;j++){
        if(arr[j].id>arr[j+1].id){
            let aux=arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=aux;
            flag=false;
        }
    }
    }
    return arr;
};
