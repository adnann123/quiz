const search_topic = () =>{
    const searchbox=document.getElementById('search').value.toUpperCase().trim()
    const topics=document.getElementById('topic-list')
    const topic=document.querySelectorAll(".topic")
    const tname=topics.getElementsByTagName('h2')


    if (searchbox===''){
        for (var i=0; i<tname.length;i++){
            topic[i].style.display='none'
        }
    }else{
        for (var i=0; i<tname.length; i++){
            let match=topic[i].getElementsByTagName('h2')[0];
            
            if (match){
                let textvalue=match.textContent || match.innerHTML
                if (textvalue.toUpperCase().indexOf(searchbox)>-1){
                    topic[i].style.display='flex';
                }else{
                    topic[i].style.display="none";
                }
            }
        }
}   }


function showAns(btn){
    var anss=btn.parentElement;
    var ans=anss.querySelector('.ans')
    var ansDisp=window.getComputedStyle(ans).getPropertyValue('display')
    if (ansDisp==='none'){
        ans.style.display='block'
    }else{
        ans.style.display='none'
    }
}



function search_q() {
    var input = document.getElementById('search-q').value.toLowerCase().trim();
    var divs = document.getElementsByClassName('question-div');
    var autocompleteList = document.getElementById('searched-questions');


    autocompleteList.innerHTML = '';
    if (input!==''){
      
    
      for (var i = 0; i < divs.length; i++) {
          var paragraph = divs[i].querySelector('p').textContent.toLowerCase();
          
          if (paragraph.includes(input)) {
          var linkdiv = document.createElement('div');
          linkdiv.classList.add('qlink-div')
          var link = document.createElement('a');
          link.classList.add('qlink')
          link.href = 'javascript:void(0);';
          linkdiv.textContent = paragraph;
          linkdiv.onclick = (function(index) {
              return function(event) {
              event.preventDefault();  
              scrollToParagraph(index);
              };
          })(i);
          link.appendChild(linkdiv);
          autocompleteList.appendChild(link);
          }
      }
  }else{
          autocompleteList.innerHTML=''
      }
  }

  function scrollToParagraph(index) {
    var divs = document.getElementsByClassName('question-div');
    
    if (index >= 0 && index < divs.length) {
      divs[index].scrollIntoView({ behavior: 'smooth' });
      function blink(){
      divs[index].classList.add('blink')
      setTimeout(function(){
        divs[index].classList.remove('blink');
      },300)}
      setTimeout(blink,0);
      setTimeout(blink,600);
      setTimeout(blink,1200);
      setTimeout(blink,1800)
    }
  }