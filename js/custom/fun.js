
function events(obj){
    return `
            <div>
                <h4>${obj.text}</h4>
                <a href="${obj.link}">${obj.button_name}</a>
            </div>
           `
}

function len(obj){
    return Object.keys(obj).length
}

function genEvents(){
 
    for(i=0;i<len(sessions_list);i++)
        $('.sessions').innerHTML+=events(sessions_list[i])

    for(i=0;i<len(workshop_list);i++)
        $('.workshops').innerHTML+=events(workshop_list[i])
}

function footers(a){
    return `
            <a href="${a.url}">
                <img class='social' src="${a.img}" alt="${a.alt}">  
            </a>
          `
}
function genFooter(){
    for(i=0;i<len(footer);i++)
        $('footer').innerHTML+=footers(footer[i])
    $('footer').innerHTML+='<p class="copyright">Made with &#10084 <br> IEEE SB CEK © 2022</p>'
}
