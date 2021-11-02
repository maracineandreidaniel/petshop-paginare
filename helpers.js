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