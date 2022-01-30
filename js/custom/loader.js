$ = (a) => document.querySelector(a);

let urls = [
    'libs/three',
    'custom/data/list',
    'custom/data/footer',
    'custom/fun',
    'custom/call'
]
async function delay(milisec) {
    return new Promise(resolve => {
        setTimeout(() => { resolve('') }, milisec);
    })
}

async function load(){
    for(i=0;i<urls.length;i++){
        create(urls[i])
    }
    await delay(150)
    create('custom/background-3d')
}


function create(url){
    s=document.createElement('script');
    s.src='js/'+url+'.js'
    document.body.appendChild(s)
    console.log(s)
    console.log(url,' loaded')
}