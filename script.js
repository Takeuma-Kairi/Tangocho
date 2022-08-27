//単語の配列 [英単語, 前置詞／接続詞, 意味]
var tangocho = [
["during" ,"(前) " ," ～の間"],
["while" ,"(接) " ," ～の間"],
["because of" ,"(前) " ," ～なので"],
["owing to" ,"(前) " ," ～が理由で"],
["because" ,"(接) " ," ～なので"],
["due to" ,"(前) " ," ～なので"],
["since" ,"(接) " ," ～なので"],
["thanks to" ,"(前) " ," ～のおかげで"],
["on account of" ,"(前) " ," ～なので"],
["despite" ,"(前) " ," ～にもかかわらず"],
["although" ,"(接) " ," ～にもかかわらず"],
["notwithstanding" ,"(前) " ," ～にもかかわらず"],
["in spite of" ,"(前) " ," ～にもかかわらず"],
["for all" ,"(前) " ," ～にもかかわらず"],
["with all" ,"(前) " ," ～にもかかわらず"],
["though" ,"(接) " ," ～にもかかわらず"],
["even though" ,"(接) " ," ～にもかかわらず"],
["when" ,"(接) " ," ～するとき"],
["while" ,"(接) " ," ～する間、～する一方で"],
["as soon as" ,"(接) " ," ～するとすぐに"],
["once" ,"(接) " ," いったん～したら"],
["if" ,"(接) " ," もし～するなら"],
["unless" ,"(接) " ," ～しない限り"],
["now that" ,"(接) " ," 今はもう～なので"],
["so that" ,"(接) " ," ～するように"],
["in order that" ,"(接) " ," ～するように"],
["whenever" ,"(接) " ," ～するときはいつでも"],
["even if" ,"(接) " ," たとえ～しても"],
["provided that" ,"(接) " ," ～という条件で"],
["before(前)" ,"(前) " ," ～の前に"],
["before(接)" ,"(接) " ," ～SがVする前に"],
["after(前)" ,"(前) " ," ～の後に"],
["after(接)" ,"(接) " ," SがVした後に"],
["until(前)" ,"(前) " ," ～まで"],
["until(接)" ,"(接) " ," SがVするまで"],
["since(前)" ,"(前) " ," ～以来"],
["since(接)" ,"(接) " ," SがVするので、SがVして以来"],
["as well as" ,"(前) " ," ～だけでなく"],
["besides" ,"(前) " ," ～だけでなく"],
["apart from" ,"(前) " ," ～だけでなく"],
["aside from" ,"(前) " ," ～だけでなく"],
["in addition to" ,"(前) " ," ～だけでなく"],
["regarding" ,"(前) " ," ～に関して"],
["concerning" ,"(前) " ," ～に関して"],
["about" ,"(前) " ," ～に関して"],
["with regard to" ,"(前) " ," ～に関して"],
["in regard to" ,"(前) " ," ～に関して"],
["with respect to" ,"(前) " ," ～に関して"],
["with reference to" ,"(前) " ," ～に関して"],
["relating to" ,"(前) " ," ～に関して"],
["as far" ,"(前) " ," ～に関して"],
["as to" ,"(前) " ," ～に関して"],
["on behalf of" ,"(前) " ," ～の代わりに"],
["prior to" ,"(前) " ," ～の前に"],
["in advance of" ,"(前) " ," ～の前に"],
["following" ,"(前) " ," ～の後に"],
["by" ,"(前) " ," ～の隣に、近くに"],
["beside" ,"(前) " ," ～の隣に、近くに"],
["next to" ,"(前) " ," ～の隣に、近くに"],
["near" ,"(前) " ," ～の隣に、近くに"],
["according to" ,"(前) " ," ～によると"],
["baring" ,"(前) " ," ～がなければ"],
["underneath" ,"(前) " ," ～の真下に"],
["amid" ,"(前) " ," ～の中に、最中に"],
["amongst" ,"(前) " ," ～中に、最中に"],
["among" ,"(前) " ," ～中に、最中に"],
["given" ,"(前) " ," ～を考慮に入れると"],
["in light of" ,"(前) " ," ～を考慮に入れると"],
["in the event of" ,"(前) " ," ～の場合"],
["in addition to" ,"(前) " ," ～に加えて"],
["except for" ,"(前) " ," ～を除いて"],
["regardless of" ,"(前) " ," ～とは無関係に"],
["instead of" ,"(前) " ," ～の代わりに"],
["whereas" ,"(接) " ," ～一方で"],
["whether" ,"(接) " ," ～であろうと、～かどうか"],
["as soon as" ,"(接) " ," ～するとすぐに"],
["now that" ,"(接) " ," 今はもう～なので"],
["rather than" ,"(前) " ," ～ではなく"],
["in lieu of" ,"(前) " ," ～ではなく"],
["in place of" ,"-" ,"なく、～の代わりに"],
["as long as" ,"(接) " ," ～する限り"],
["in case" ,"(接) " ," ～するといけないので"],
["given that" ,"(接) " ," ～を考慮に入れると"],
["in the event that" ,"(接) " ," ～した場合"],
["insofar as" ,"(接) " ," ～する限りにおいて"],
["inasmuch as" ,"(接) " ," ～する限りにおいて、～するので"],
["therefore" ,"(接副)" ," したがって"],
["however" ,"(接副)" ," しかしながら"],
["nevertheless" ,"(接副)" ," それにもかかわらず"],
["moreover" ,"(接副)" ," そのうえ"],
["furthermore" ,"(接副)" ," さらに"],
["consequently" ,"(接副)" ," 結果として"],
["thereby" ,"(接副)" ," そうすることで"],
["thus" ,"(接副)" ," このようにして"],
["meanwhile" ,"(接副)" ," その間"],

];

var from_scratch = true;  //単語帳シャッフルを行う？
var page_shuffled = []; //シャッフルしたページ番号の配列
var page_num = -1;  //ページ番号。開始時にインクリメントするので、最初は0から1引いて-1

//======================================
//ページ番号をシャッフルしてpage_shuffled配列にいれる
function shuffle_tangocho(){
  for(var i=0; i<tangocho.length; i++){
    page_shuffled[i] = i;//まずはpage_shuffled配列に順番に番号をいれる
  }
  
  //page_shuffled配列の要素をシャッフル
  for(var j=0; j<page_shuffled.length; j++){
    var random_page = Math.floor(Math.random() * page_shuffled.length);
    var temp = page_shuffled[j];
    page_shuffled[j] = page_shuffled[random_page];
    page_shuffled[random_page] = temp;
  }
  
  page_num = -1;//page_numをリセット
  from_scratch = false;
}

//======================================
//メイン
function new_tango_set(){
  var tango= document.getElementById("tango");
  var mean_mae= document.getElementById("mean_mae");
  var mean= document.getElementById("mean");
  
  
  if(from_scratch){ //最初からやるなら単語をシャッフルする
    shuffle_tangocho()
  }
  
  if(mean.innerHTML != ""){ //次の単語へ移る
    page_num++;
    if(page_num == tangocho.length){
      shuffle_tangocho();
      page_num = 0;
    }
    
    //次の単語が表示され、 「前置詞／接続詞」、「意味」は空白に
    tango.innerHTML = tangocho[page_shuffled[page_num]][0];
    mean_mae.innerHTML = "";
    mean.innerHTML = "";
    
    // 前置詞／接続詞まで入っているなら、次の「意味」を表示
  }else if(mean_mae.innerHTML != ""){
    mean.innerHTML = tangocho[page_shuffled[page_num]][2];
    
    // 単語まで入っているなら、次の「前置詞／接続詞」を表示
  }else if(tango.innerHTML != ""){
    mean_mae.innerHTML = tangocho[page_shuffled[page_num]][1];
  }
}