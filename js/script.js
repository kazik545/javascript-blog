const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles',
  optLinksTitles = '.titles a',
  optArticleTagsSelector = '.post-tags .list',
  optArticleAuthorSelector = '.post .post-author';

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

function generateTitleLinks(customSelector = ''){
  const titleList = document.querySelector(optTitleListSelector);

  /* [DONE] remove contents of titleList */
  
  clearMessages();
    
  const articles = document.querySelectorAll(optArticleSelector + customSelector);
  
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
  
  /* [DONE] find all articles */
  
  const articles = document.querySelectorAll(optArticleSelector);
  
  /* [DONE] START LOOP: for every article: */
  
  for(let article of articles){
    
    /* [DONE] find tags wrapper */
    
    const tagsWrapper = article.querySelector(optArticleTagsSelector);
    
    /* [DONE] make html variable with empty string */
    
    let html = '';
    
    /* [DONE] get tags from data-tags attribute */
    
    const articleTags = article.getAttribute('data-tags');
    
    /* [DONE] split tags into array */
    
    const articleTagsArrey = articleTags.split(' ');

    /* [DONE] START LOOP: for each tag */
    
    for(let tag of articleTagsArrey){
      
      /* [DONE] generate HTML of the link */
      
      let link = '<li><a href="#tag-' + tag + '">' + tag +'</a></li> ';
      /* [DONE] add generated code to html variable */
      
      html += link;
    
    /* [DONE] END LOOP: for each tag */
    }
    /* [DONE] insert HTML of all the links into the tags wrapper */
  
    tagsWrapper.innerHTML = tagsWrapper.innerHTML + html;

  
  /* [DONE] END LOOP: for every article: */
  }
}

generateTags();

function tagClickHandler(event){
  
  /* [DONE] prevent default action for this event */
    
  event.preventDefault();
  
  /* [DONE] make new constant named "clickedElement" and give it the value of "this" */
    
  const clickedElement = this;
  
  /* [DONE] make a new constant "href" and read the attribute "href" of the clicked element */

  const href = clickedElement.getAttribute('href');

  /* [DONE] make a new constant "tag" and extract tag from the "href" constant */

  const tag = href.replace('#tag-', '');

  /* [DONE] find all tag links with class active */

  const activeTagLinks = document.querySelectorAll('a.active[href^="tag-"]');

  /* [DONE] START LOOP: for each active tag link */
    
  for(let activeTagLink of activeTagLinks){
    
    /* [DONE] remove class active */
      
    activeTagLink.classList.remove('active');
  
  /* [DONE] END LOOP: for each active tag link */
  }
  /* [DONE] find all tag links with "href" attribute equal to the "href" constant */
    
  const tagLinksHref = document.querySelectorAll('a[href="' + href + '"]');
  
  /* [DONE] START LOOP: for each found tag link */
    
  for(let tagLinkHref of tagLinksHref){
    
    /* [DONE] add class active */
      
    tagLinkHref.classList.add('active');
  
  /* [DONE] END LOOP: for each found tag link */
  }
  /* [DONE] execute function "generateTitleLinks" with article selector as argument */
    
  generateTitleLinks('[data-tags~="' + tag + '"]');
}
function addClickListenersToTags(){
  /* [DONE] find all links to tags */
    
  const tagLinks = document.querySelectorAll('a[href^="#tag-"]');
  /* [DONE] START LOOP: for each link */
    
  for(let tagLink of tagLinks){
    
    /* [DONE] add tagClickHandler as event listener for that link */
      
    tagLink.addEventListener('click', tagClickHandler);
  
    /* [DONE] END LOOP: for each link */
  }
}

addClickListenersToTags();

function generateAuthor(){
  
  /* [DONE] find all articles */
  
  const articles = document.querySelectorAll(optArticleSelector);
  
  /* [DONE] START LOOP: for every article: */
  
  for(let article of articles){
    /* [DONE] find author wrapper */
    
    const authorWrapper = article.querySelector(optArticleAuthorSelector);
    
    /* [DONE] get author from data-author attribute */
    
    const author = article.getAttribute('data-author');
    
    console.log(author);

    /* [DONE] generate HTML of the link */

    const link = '<a href="#author-' + author + '">' + author +'</a>';

    console.log(link);

    /* [DONE] insert HTML of link into the author wrapper */
    
    authorWrapper.innerHTML += link;

  /* [DONE] END LOOP: for every article: */
  }
}

generateAuthor();

function authorClickHandler(event){
  
  /* [DONE] prevent default action for this event */
    
  event.preventDefault();
  
  /* [DONE] make new constant named "clickedElement" and give it the value of "this" */
    
  const clickedElement = this;
  
  /* [DONE] make a new constant "href" and read the attribute "href" of the clicked element */

  const href = clickedElement.getAttribute('href');


  /* [DONE] make a new constant "author" and extract author from the "href" constant */

  const author = href.replace('#author-', '');

  /* [DONE] find author link with class active */

  const activeAuthorLinks = document.querySelectorAll('a.active[href^="author-"]');

  /* [DONE] START LOOP: for each active author link */
    
  for(let activeAuthorLink of activeAuthorLinks){
    
    /* [DONE] remove class active */
      
    activeAuthorLink.classList.remove('active');
  
  /* [DONE] END LOOP: for each active author link */
  }
  /* [DONE] find all author links with "href" attribute equal to the "href" constant */
    
  const authorLinksHref = document.querySelectorAll('a[href="' + href + '"]');
  
  /* [DONE] START LOOP: for each found author link */
    
  for(let authorLinkHref of authorLinksHref){
    
    /* [DONE] add class active */
      
    authorLinkHref.classList.add('active');
  
  /* [DONE] END LOOP: for each found author link */
  }
  /* [DONE] execute function "generateTitleLinks" with article selector as argument */
  generateTitleLinks('[data-author="' + author + '"]');
}
function addClickListenersToAuthor(){
  /* [DONE] find all links to author */
    
  const authorLinks = document.querySelectorAll('a[href^="#author-"]');
  /* [DONE] START LOOP: for each link */
    
  for(let authorLink of authorLinks){
    
    /* [DONE] add tagClickHandler as event listener for that link */
      
    authorLink.addEventListener('click', authorClickHandler);
  
    /* [DONE] END LOOP: for each link */
  }
}

addClickListenersToAuthor();
