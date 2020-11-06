const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles',
  optLinksTitles = '.titles a',
  optArticleTagsSelector = '.post-tags .list';

const titleClickHandler = function(event){
  event.preventDefault();
  const clickedElement = this;
    
  /* [DONE] remove class 'active' from all article links  */
    
  const activeLinks = document.querySelectorAll('.titles a.active');

  for(let activeLink of activeLinks){
    activeLink.classList.remove('active');
  }
    
  /* [DONE] add class 'active' to the clicked link */
    
  clickedElement.classList.add('active');

  /* [DONE] remove class 'active' from all articles */
    
  const activeArticles = document.querySelectorAll('.posts article.active');

  for(let activeArticle of activeArticles){
    activeArticle.classList.remove('active');
  }
    
  /* [DONE] get 'href' attribute from the clicked link */
    
  const articleSelector = clickedElement.getAttribute('href');
 
  /* [DONE] find the correct article using the selector (value of 'href' attribute) */
    
  const targetArticle = document.querySelector(articleSelector);
    
  /* [DONE] add class 'active' to the correct article */
    
  targetArticle.classList.add('active');
};

const links = document.querySelectorAll('.titles a');
  
for(let link of links){
  link.addEventListener('click', titleClickHandler);
}

function clearMessages(){
  document.querySelector(optTitleListSelector).innerHTML = '';
}

function generateTitleLinks(){
  const titleList = document.querySelector(optTitleListSelector);

  /* [DONE] remove contents of titleList */
  
  clearMessages();
    
  const articles = document.querySelectorAll(optArticleSelector);
  
  /* [DONE] for each article */

  for(let article of articles){

    /* [DONE] get the article id */
    
    let articleId = article.getAttribute('id');
    
    /* [DONE] find the title element */
    
    const articleTitle = article.querySelector(optTitleSelector).innerHTML;
    
    /* [DONE] create HTML of the link */
    
    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    
    /* [DONE] insert link into titleList */
    
    titleList.innerHTML = titleList.innerHTML + linkHTML;
  }
  
  const links = document.querySelectorAll(optLinksTitles);

  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }  
}

generateTitleLinks();

function generateTags(){
  /* find all articles */
  
  const articles = document.querySelectorAll(optArticleSelector)
  
  /* START LOOP: for every article: */
  
  for(let article of articles){
    
    /* find tags wrapper */
    const tagsList = article.querySelector(optArticleTagsSelector);
    console.log(tagsList);
    
    /* make html variable with empty string */
    let html = ''
    
    /* get tags from data-tags attribute */
    const articleTags = article.getAttribute('data-tags');
    console.log(articleTags);
    
    /* split tags into array */
    
    const articleTagsArrey = articleTags.split(' ');
    console.log(articleTagsArrey);

    /* START LOOP: for each tag */
    for(let tag of articleTagsArrey){
      /* generate HTML of the link */
      let link = '<li><a href="#tag-' + tag + '">' + tag +'</a></li>';
      console.log(link);
      /* add generated code to html variable */
      let html = + link;
    /* END LOOP: for each tag */
  }
    /* insert HTML of all the links into the tags wrapper */
  article.innerHTML = article.innerHTML + html 

  console.log(html);
  /* END LOOP: for every article: */
  }
}

generateTags();