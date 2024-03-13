var mergeAlternately = function(word1, word2) {
  let merged_string = '';
  let min_length = Math.min(word1.length, word2.length);

  for(let i=0; i<2*min_length; i++){
    if(i%2==0 && word1.length>0){
      merged_string+=word1[0];
      word1 = word1.slice(1);
    }

    if(i%2!=0 && word2.length>0){
      merged_string+=word2[0];
      word2 = word2.slice(1);
    }
    
    if(word1.length==0 || word2.length==0){
      return merged_string+word1+word2
    }
  }
};

word1='abc';
word2='pqr';
console.log(mergeAlternately(word1, word2));