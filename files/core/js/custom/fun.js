
function events(obj,Class){
    return `
            <div class='${Class}'>
                <h4 class='event_title'>${obj.text}</h4>
                <hr>
                <a class='button' href="${obj.link}">${obj.button_name}</a>
            </div>
           `
}

function len(obj){
    return Object.keys(obj).length
}

function genEvents(){
    let sessions = '',workshops=''
    sessions+='<h2 class="head1">Sessions</h2>'
    sessions+='<div class="box1">'
    let lists=['c1','c2','c3']
    a=0;
    for(i=0;i<len(sessions_list);i++){
        sessions+=events(sessions_list[i],lists[a])
        a++
    }

    sessions+='</div>'
    $('.sessions').innerHTML = sessions

    workshops+='<h2 class="head1">Workshops</h2>'
    workshops+='<div class="box1">'
    
    for(i=0;i<len(workshop_list);i++)
        workshops+=events(workshop_list[i])

    workshops+='</div>'   
    $('.workshops').innerHTML = workshops
}

function footers(a){
    return `
            <a href="${a.url}">
                <img class='social' src="files/extras/imgs/social/${a.img}" alt="${a.alt}">  
            </a>
          `
}
function genFooter(){
    for(i=0;i<len(footer);i++)
        $('footer').innerHTML+=footers(footer[i])
    $('footer').innerHTML+='<p class="copyright">Made with &#10084 <br> IEEE SB CEK © 2022</p>'
}
