function formatWords(words){
  if (!words) return ''; //return blank if no length or null
  //filter the words to remove blank strings and replace the last comma with " and" + matched content
  return  words.filter(function(n){ return n != ''}).join(', ').replace(/,([^,]+)$/gi, ' and$1');
}
