function Twitter(){
  let url=`'https://twitter.com/intent/tweet?text=${quote.innerText}-${author.innerText}`;
  window.open(url,"_blank")
}
