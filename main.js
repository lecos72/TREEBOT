const scriptName = "test.js";
const randomM = Bridge.getScopeOf("random.js");
const foodM = Bridge.getScopeOf("food.js");
const weatherM = Bridge.getScopeOf("weather.js");
const informationM = Bridge.getScopeOf("information.js");
const coronaM = Bridge.getScopeOf("corona.js");

var emo = ['(하트뿅)', '(하하)', '(우와)', '(심각)', '(힘듦)', '(흑흑)', '(아잉)', '(찡긋)', '(뿌듯)', '(깜짝)', '(빠직)', '(짜증)', '(제발)', '(씨익)', '(신나)', '(헉)', '(열받아)', '(흥)', '(감동)', '(뽀뽀)', '(멘붕)', '(정색)', '(쑥스)', '(꺄아)', '(좋아)', '(굿)', '(훌쩍)', '(허걱)', '(부르르)', '(최고)', '(브이)', '(오케이)', '(최악)'];
var cmds = [];
var msgs = [];
var allWord = "";
var reNamu = /^\.나무 [\w\W]+/i
var rePapago = /^(\.한영|\.영한|\.한일)\s+[\w\W\s]+/i
var reMise = /(\.미세\s)[ㄱ-힣]+/
var reTest = /^(\.테스트\s)[ㄱ-힣]{2,10}/
var isSim = 0;
var limit = 91;
//함수//

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function AddCMD(request, response) {
    cmds.push({ req: request, res: response })
}
function AddMSG(request, response) {
    msgs.push({ req: request, res: response })
}

//나무위키 검색함수
function namu(str) {
    var url = 'https://namu.wiki/w/' + encodeURI(str);
    var result;
    try {
        var html = Utils.getWebText(url);
        contents = html.split('div class="wiki-heading-content">')[1].split('<h2 class="wiki-heading"')[0].replace(/(<([^>]+)>)/g, "").replace(/\s{2,}/g, "").replace(/\n/g, "").trim().substring(0, 300) + "...";
        result = str + "에 대한 결과입니다.\n" + contents + "\n\n자세한내용은 " + "https://namu.wiki/w/" + encodeURI(str) + " 을 참고해주세요";
        return result;

    } catch (e) {
        result = "나무위키에서 " + str + "을(를) 찾을 수 없거나 오류가 있습니다.";
        return result;
    }
}

//msg 추가
AddMSG("안녕", "안녕?");
AddMSG("잘가", "응 잘가");
AddMSG("ㅋㅋ", "ㅋㅋㅋㅋㅋ");

//모든메세지
for (var i in msgs) {
    allWord += (msgs[i].req + ", ");
}
allWord = allWord.slice(0, -2);


//cmd 추가
AddCMD(".명령어", "***트리봇***\n.명령어 => 명령어리스트\n.단어 => 반응하는말\n.나무위키 => 나무위키 검색\n.번역 => 파파고 번역기\n.미세먼지 => 미세먼지 정보\n.뭐먹 => 메뉴추천\n.뽑기 => 운 테스트\n.정보 => 유용한정보\n.직구 => 직구핫딜\n.자스 => 자바스크립트 실행\nVer. 20190808 / NS");
AddCMD(".단어", "***반응하는 단어***\n" + allWord);//2
AddCMD(".번역", ".한영 [검색어]\n.영한 [검색어]\n.한일 [검색어]");//3
AddCMD(".네이버검색", ".네이버 [검색어]");//4
AddCMD(".나무위키", ".나무 [검색어]");//5
//AddCMD(".날씨",".날씨 [지역]");//6
AddCMD(".단어추가", ".말 [입력] [출력]")//7
AddCMD(".미세먼지", ".미세 [검색어]\n\nex) .미세 수영구");
AddCMD(".뽑기", "명령어 => .ㅂ\n***확률***\n꽝(36%)\n노말(50%)\n매직(10%)\n레어(3%)\n유니크(0.3%)\n레전더리(0.03%)\n에픽(0.003%)");




function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName, threadId) {

    //코드실행 
    if (/^(\.자스 )/.exec(msg)) {
        replier.reply(runScript(msg.split(".자스")[1]));
    }

    //정보
    if (/^(\.정보)/.exec(msg)) {
        replier.reply("잠시만 기다려주세요...");
        replier.reply(informationM.getInfo() + '\n' + informationM.getInfo2());
        return;
    }
    //직구
    if (/^(\.직구)/.exec(msg)) {
        replier.reply("잠시만 기다려주세요...");
        replier.reply(informationM.getInfo3());
        return;
    }
                      
    //나무위키
    if (reNamu.exec(msg)) {
        str = reNamu.exec(msg)[0].split('.나무 ')[1];
        replier.reply(namu(str));
        return;
    }
    if (/.+?노$/.exec(msg)) replier.reply("노랑색");
    if (/.*?\?$/.exec(msg) || /.*?요$/.exec(msg)) {
        var message = ['어케했노', '어카지', '고민..', 'ㅗㅜㅑ..', '세상좋네', '좋네', '이야', '랜덤같지?', '상관있을듯', '상관없을듯', '나도모름', '생각안남', '나도 모르겠는걸?', '뭐?', '생각해봄', '납득', '가능?', '그러게', '않임', '외 않된데?', '흠터레스팅', '그럴수 있지', '동감', '오 그래요?', '그럴수도있음', '오??', '과연?', '다시한번생각해봐 ', 'ㅇㅇ맞음', '그런것같아요', '저도 궁금해요.', 'ㅇㅇ 그런것같네요', '아마도?', '흠..', '올ㅋ', '아?', '궁금해', '그런거야?', '그럴지도', 'ㅇㅇ', '그렇습니다(최고)', '슬프네요', '즐거우신가요', '뭔데', '아 그렇나', '몰랐네', '나도 그렇게생각해', '동감입니다', '뭐에요?', 'ㅇㅅㅇ', '신기하네', '저도 가르쳐 주세요', '그럴까'];
        var random = Math.floor(Math.random() * message.length);
        var random2 = Math.floor(Math.random() * 5);
        var random3 = Math.floor(Math.random() * emo.length);
        if (random2 == 1) replier.reply(message[random]);
    }
    if (/트리봇/.exec(msg)) {
        var message = ['힝', '힘들다', '후..', '(긴장)', '뭐요 휴먼', '...', '?..', 'ㅋ', '네^^', '1절만하자', '관심꺼줄래?', '그만불러', '그러면안댕', '응아니야', '아닙니다', '과연그럴까?', '다시한번 생각해봐요', '왜그렇게 생각하십니까', '왜요', '뭐가요', '네 부르셨나요', '저 욕하신거죠', '너무하네', '살려줘', '쫌 죄송하네', '왜 부름', '당당', '죄송해요 ㅠㅠ', '뭐', '아니야', '그만해', '그만해줘', '공격을멈춰주세요', '갈굼을 멈추어주세요', '?', '무요', '정말?', '고마워', 'Thank you', '그만', '넹', '아니야', '응 아니야'];
        var random = Math.floor(Math.random() * message.length);
        var random2 = Math.floor(Math.random() * emo.length);
        var random3 = Math.floor(Math.random() * 3);
        if (random3 == 1) replier.reply(message[random]);
    }

    //미세먼지
    if (reMise.exec(msg)) {

        var query = msg.split('.미세')[1];
        replier.reply(weatherM.getWeather(query));
        return;
    }

    //음식
    if (msg == ".뭐먹") {
        replier.reply(foodM.getRandomMsg());
        return;
    }

    //뽑기
    if (msg == ".ㅂ") {
        replier.reply(randomM.getItem());
        return;
    }
    //테스트
    if (msg == ".테") {
        var url = "https://search.naver.com/search.naver?sm=top_hty&fbm=1&ie=utf8&query=%EC%83%81%ED%98%84%EB%8F%99+%EB%82%A0%EC%94%A8";
        replier.reply(Utils.getWebText(url));
        return;
    }
    if (msg == ".테2") {
        replier.reply(randomM.test2());
        return;
    }
    //네이버 파파고
    if (rePapago.exec(msg)) {
        lang = rePapago.exec(msg)[0].split(' ')[0];
        if (lang == ".한영") {
            str = rePapago.exec(msg)[0].split('.한영 ')[1];
            replier.reply("***번역결과***")
            replier.reply(Api.papagoTranslate("ko", "en", str));
            return;
        } else if (lang == ".영한") {
            str = rePapago.exec(msg)[0].split('.영한 ')[1];
            replier.reply("***번역결과***")
            replier.reply(Api.papagoTranslate("en", "ko", str));
            return;
        } else if (lang == ".한일") {
            str = rePapago.exec(msg)[0].split('.한일 ')[1];
            replier.reply("***번역결과***")
            replier.reply(Api.papagoTranslate("ko", "ja", str));
            return;
        } else {
            replier.reply("검색 오류입니다. \n다시한번 확인해 주세요.");
            return;
        }
    }

    for (var i in cmds) {
        if (msg == cmds[i].req) replier.reply(cmds[i].res);
    }

    for (var i in msgs) {
        if (msg == msgs[i].req) replier.reply(msgs[i].res);
    }


}
function runScript(str) {
    try {
        var result;
        result = eval(String(str));

        //result =  result + "\n" + str;
        return result;
    } catch (e) {
        return e;
    }

}

