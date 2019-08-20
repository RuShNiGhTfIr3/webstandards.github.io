/*
 * Use AJAX to load the JSON and manipulate the HTML
 * https://joshbloom.github.io/dws1/data/rockband.json
*/
//let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
let xhr = new XMLHttpRequest();
xhr.open('GET','https://joshbloom.github.io/dws1/data/rockband.json',true)
xhr.send(null)
xhr.onload=function(){
let data = JSON.parse(xhr.responseText)
//news 
//console.log(window)
let newsArticles = document.querySelectorAll('#news article')
if(newsArticles){
    for(let x=0;x<newsArticles.length;x++){
      newsArticles[x].querySelector('img').src =data.news[x].imageURL;
      newsArticles[x].querySelector('img').alt=data.news[x].title;
      newsArticles[x].querySelector('h3').innerHTML=data.news[x].title;
      newsArticles[x].querySelector('time').innerHTML=data.news[x].postDate;
      newsArticles[x].querySelector('time').datetime=data.news[x].postDate;
    }
}

//events
let eventsSection = document.querySelector('#events h4');
	if(eventsSection){
		
        let events = '';
        let months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
		for(x= 0; x < data.events.length; x++){
			events += '<article>';
            events += '<p><time datetime="' + data.events[x].date + '">' + new Date(data.events[x].date).getDate() +" "+ months[new Date(data.events[x].date).getMonth()] + '</time></p>';
            events += '<p>'+data.events[x].venue+'</p>';
            events += '<h3>' + data.events[x].city + ', ' + data.events[x].state + '</h3>';
			events += '</article>';
		}
        eventsSection.insertAdjacentHTML('afterend',events);
    }
//about 
let aboutSection = document.querySelector("#about h3")
if(aboutSection){
    let about=''
        about+='<p>'+data.about.copy+'</p>';
        about+='<blockquote>'+data.about.quote+'</blockquote>';
        aboutSection.insertAdjacentHTML('afterend',about);
}
//members
let memberSection=document.querySelector("#members h1")
if(memberSection){
let members='';

        for(let x=0;x<data.members.length;x++){
            
            members+='<img src="'+data.members[x].imageURL+'" alt ="'+data.members[x].firstname+' '+data.members[x].lastname+'">'
            //members+='<h4>'+data.members[x].firstname+" "+data.members[x].lastname+'</h4>';
            
        }
        memberSection.insertAdjacentHTML('afterend',members);
        // memberSection.insertAdjacentHTML('afterend',members);
}

}