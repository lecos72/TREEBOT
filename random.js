function getItem() {

    var msg;
    var rand = Math.floor(Math.random() * 100000);
    if (rand >= 81000 && rand <= 81004) msg = "***뽑기 결과 확인***\n[에픽] 축하드립니다!!! \n운을 여기다 버리셨습니다.\n\n\
⊂_ヽ\n\
　 ＼＼ Λ＿Λ \n\
　　 ＼( ‘ㅅ' ) 두둠칫\n\
　　　 >　⌒ヽ\n\
　　　/ 　 へ＼\n\
　　 /　　/　＼＼ \n\
　　 ﾚ　ノ　　 ヽ_つ\n\
　　/　/두둠칫\n\
　 /　/|\n\
　(　(ヽ\n\
　|　|、＼\n\
　| 丿 ＼ ⌒)\n\
　| |　　) /\n\
`ノ )　　Lﾉ\n\
";
    else if (rand >= 80000 && rand <= 80049) msg = "***뽑기 결과 확인***\n[레전더리] 축하드립니다!\n운이 엄청 좋으시네요.\n\n\
     +_ \n\
 +／+|　 \n\
  +|　|.　 \n\
+　|　|.    ∧＿∧ \n\
,─　　＼(๑¯ิ∀¯ิ๑) \n\
|＿＿)　+|　　ノ \n\
|＿＿)　+|+)＿) \n\
|＿＿)　+| \n\
+ヽ＿)_／\n";
    else if (rand >= 82000 && rand <= 82499) msg = "***뽑기 결과 확인***\n[유니크] 와우! 대박이네요.\n\n\
      ∧,_,∧\n\
　　(`･ω･´)　 ｎ__\n\
　η ＞　 ⌒＼/ ､_∃\n\
(∃)/ ∧　　＼_/\n\
＼_/　＼　　丶 씰룩씰룩\n\
　　　 ／ 　 ﾉ\n\
　　　／ ／　／\n\
　　 (　(　〈\n\
　　　＼ ＼　＼\n\
　　 　(＿(＿＿) \n";
    else if (rand >= 333 && rand <= 3332) msg = "[레어] 운이 꽤 좋으시네요.\n\n\
 ∧,_,∧\n\
（｡･ω･｡)つ━☆・*。\n\
⊂　　  ノ 　　・゜+.\n\
 しーＪ               °。+ *´¨"
    else if (rand >= 3333 && rand <= 13332) msg = "[매직] 운이 좋으시네요.";
    else if (rand >= 13333 && rand <= 63332) msg = "[노말] 평범합니다.";
    else msg = "[꽝] 다시 시도해보세요. ㅠㅠ";

    return msg;
}
function test() {
    var msg = "***뽑기 결과 확인***\n[레전더리] 축하드립니다!\n운이 엄청 좋으시네요.\n\n\
     +_ \n\
 +／+|　 \n\
  +|　|.　 \n\
+　|　|.    ∧＿∧ \n\
,─　　＼(๑¯ิ∀¯ิ๑) \n\
|＿＿)　+|　　ノ \n\
|＿＿)　+|+)＿) \n\
|＿＿)　+| \n\
+ヽ＿)_／\n";
    return msg;
}
function test2() {
    var msg = "***뽑기 결과 확인***\n[에픽] 축하드립니다!!! \n운을 여기다 버리셨습니다.\n\n\
⊂_ヽ\n\
　 ＼＼ Λ＿Λ \n\
　　 ＼( ‘ㅅ' ) 두둠칫\n\
　　　 >　⌒ヽ\n\
　　　/ 　 へ＼\n\
　　 /　　/　＼＼ \n\
　　 ﾚ　ノ　　 ヽ_つ\n\
　　/　/두둠칫\n\
　 /　/|\n\
　(　(ヽ\n\
　|　|、＼\n\
　| 丿 ＼ ⌒)\n\
　| |　　) /\n\
`ノ )　　Lﾉ\n\
";
    return msg;
}