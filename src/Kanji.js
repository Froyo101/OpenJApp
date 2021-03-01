/*var JouyouKanji = [
    {
        character: '',
        keyWords: '',
        on: [''],
        kun: [''],
        level: ''
    },
];*/

var Kanji = [
    {
      "ID": 1,
      "character": "日",
      "keyWords": "SUN ・ DAY ・ JAPAN",
      "on": "ニチ ・ ジツ",
      "kun": "ひ ・ -び ・ -か"
    },
    {
      "ID": 2,
      "character": "一",
      "keyWords": "ONE",
      "on": "イチ ・ イツ",
      "kun": "ひと- ・ ひと.つ"
    },
    {
      "ID": 3,
      "character": "二",
      "keyWords": "TWO",
      "on": "ニ",
      "kun": "ふた ・ ふた.つ"
    },
    {
      "ID": 4,
      "character": "三",
      "keyWords": "THREE",
      "on": "サン",
      "kun": "み ・ み.つ ・ みっ.つ"
    },
    {
      "ID": 5,
      "character": "十",
      "keyWords": "TEN",
      "on": "ジュウ ・ ジッ-",
      "kun": "とお ・ と"
    },
    {
      "ID": 6,
      "character": "四",
      "keyWords": "FOUR",
      "on": "シ",
      "kun": "よ ・ よ.つ ・ よっ.つ ・ よん"
    },
    {
      "ID": 7,
      "character": "五",
      "keyWords": "FIVE",
      "on": "ゴ",
      "kun": "いつ ・ いつ.つ"
    },
    {
      "ID": 8,
      "character": "六",
      "keyWords": "SIX",
      "on": "ロク",
      "kun": "む ・ む.つ ・ むっ.つ ・ むい"
    },
    {
      "ID": 9,
      "character": "七",
      "keyWords": "SEVEN",
      "on": "シチ",
      "kun": "なな ・ なな.つ ・ なの"
    },
    {
      "ID": 10,
      "character": "八",
      "keyWords": "EIGHT",
      "on": "ハチ",
      "kun": "や ・ や.つ ・ やっ.つ ・ よう"
    },
    {
      "ID": 11,
      "character": "九",
      "keyWords": "NINE",
      "on": "キュウ ・ ク",
      "kun": "ここの ・ ここの.つ"
    },
    {
      "ID": 12,
      "character": "丸",
      "keyWords": "ROUND",
      "on": "ガン",
      "kun": "まる ・ まる.い ・ まる.める"
    },
    {
      "ID": 13,
      "character": "円",
      "keyWords": "CIRCLE ・ YEN",
      "on": "エン",
      "kun": "まる.い ・ まる"
    },
    {
      "ID": 14,
      "character": "○",
      "keyWords": "ZERO ・ CIRCLE MARK",
      "on": "レイ",
      "kun": "ぜろ ・ まる"
    },
    {
      "ID": 15,
      "character": "人",
      "keyWords": "HUMAN BEING",
      "on": "ジン ・ ニン",
      "kun": "ひと"
    },
    {
      "ID": 16,
      "character": "百",
      "keyWords": "HUNDRED",
      "on": "ヒャク",
      "kun": ""
    },
    {
      "ID": 17,
      "character": "千",
      "keyWords": "THOUSAND",
      "on": "セン",
      "kun": "ち"
    },
    {
      "ID": 18,
      "character": "万",
      "keyWords": "TEN THOUSAND",
      "on": "マン ・ バン",
      "kun": ""
    },
    {
      "ID": 19,
      "character": "口",
      "keyWords": "MOUTH",
      "on": "コウ ・ ク",
      "kun": "くち"
    },
    {
      "ID": 20,
      "character": "田",
      "keyWords": "RICE FIELD",
      "on": "デン",
      "kun": "た"
    },
    {
      "ID": 21,
      "character": "目",
      "keyWords": "EYE ・ ITEM",
      "on": "モク ・ ボク",
      "kun": "め ・ -め ・ ま-"
    },
    {
      "ID": 22,
      "character": "川",
      "keyWords": "RIVER",
      "on": "セン",
      "kun": "かわ"
    },
    {
      "ID": 23,
      "character": "月",
      "keyWords": "MOON ・ MONTH",
      "on": "ゲツ ・ ガツ",
      "kun": "つき"
    },
    {
      "ID": 24,
      "character": "明",
      "keyWords": "BRIGHT ・ CLEAR",
      "on": "メイ ・ ミョウ",
      "kun": "あ.かり ・ あか.るい ・ あか.るむ ・ あか.らむ ・ あき.らか ・ あ.ける ・ -あ.け ・ あ.く ・ あ.くる ・ あ.かす"
    },
    {
      "ID": 25,
      "character": "曜",
      "keyWords": "DAY OF THE WEEK",
      "on": "ヨウ",
      "kun": ""
    },
    {
      "ID": 26,
      "character": "火",
      "keyWords": "FIRE",
      "on": "カ",
      "kun": "ひ ・ -び ・ ほ-"
    },
    {
      "ID": 27,
      "character": "水",
      "keyWords": "WATER",
      "on": "スイ",
      "kun": "みず ・ みず-"
    },
    {
      "ID": 28,
      "character": "木",
      "keyWords": "TREE ・ WOOD",
      "on": "モク ・  ボク",
      "kun": "き ・ こ-"
    },
    {
      "ID": 29,
      "character": "金",
      "keyWords": "METAL ・ GOLD ・ MONEY",
      "on": "キン ・ コン",
      "kun": "かね ・ かな- ・ -がね"
    },
    {
      "ID": 30,
      "character": "土",
      "keyWords": "SOIL",
      "on": "ド ・ ト",
      "kun": "つち"
    },
    {
      "ID": 31,
      "character": "本",
      "keyWords": "BASIS ・ BOOK ・ THIS",
      "on": "ホン",
      "kun": "もと"
    },
    {
      "ID": 32,
      "character": "東",
      "keyWords": "EAST",
      "on": "トウ",
      "kun": "ひがし"
    },
    {
      "ID": 33,
      "character": "大",
      "keyWords": "BIG ・ UNIVERSITY",
      "on": "ダイ ・ タイ",
      "kun": "おお- ・ おお.きい ・ おお.いに"
    },
    {
      "ID": 34,
      "character": "小",
      "keyWords": "SMALL",
      "on": "ショウ",
      "kun": "ちい.さい ・ こ- ・ お-"
    },
    {
      "ID": 35,
      "character": "中",
      "keyWords": "MIDDLE ・ IN ・ CHINA",
      "on": "チュウ ・ ジュウ",
      "kun": "なか"
    },
    {
      "ID": 36,
      "character": "生",
      "keyWords": "LIFE ・ BE BORN ・ STUDENT",
      "on": "セイ ・ ショウ",
      "kun": "い.きる ・ い.かす ・ い.ける ・ う.まれる ・ う.まれ ・ うまれ ・ う.む ・ お.う ・ は.える ・ は.やす ・ き ・ なま ・ なま-"
    },
    {
      "ID": 37,
      "character": "山",
      "keyWords": "MOUNTAIN",
      "on": "サン",
      "kun": "やま"
    },
    {
      "ID": 38,
      "character": "出",
      "keyWords": "GO OUT ・ PUT OUT",
      "on": "シュツ ・ スイ",
      "kun": "で.る ・ -で ・ だ.す ・ -だ.す"
    },
    {
      "ID": 39,
      "character": "入",
      "keyWords": "ENTER ・ PUT IN",
      "on": "ニュウ",
      "kun": "い.る ・ -い.る ・ -い.り ・ い.れる ・ -い.れ ・ はい.る"
    },
    {
      "ID": 40,
      "character": "下",
      "keyWords": "DOWN",
      "on": "カ ・ ゲ",
      "kun": "した ・ しも ・ もと ・ さ.げる ・ さ.がる ・ くだ.る ・ くだ.り ・ くだ.す ・ -くだ.す ・ くだ.さる ・ お.ろす ・ お.りる"
    },
    {
      "ID": 41,
      "character": "上",
      "keyWords": "UP",
      "on": "ジョウ ・ ショウ",
      "kun": "うえ ・ -うえ ・ うわ- ・ かみ ・ あ.げる ・ -あ.げる ・ あ.がる ・ -あ.がる ・ あ.がり ・ -あ.がり ・ のぼ.る ・ のぼ.り ・ のぼ.せる ・ のぼ.す ・"
    },
    {
      "ID": 42,
      "character": "止",
      "keyWords": "STOP",
      "on": "シ",
      "kun": "と.まる ・ -ど.まり ・ と.める ・ -と.める ・ -ど.め ・ や.める* ・ や.む*"
    },
    {
      "ID": 43,
      "character": "正",
      "keyWords": "RIGHT",
      "on": "セイ ・ ショウ",
      "kun": "ただ.しい ・ ただ.す ・ まさ ・ まさ.に"
    },
    {
      "ID": 44,
      "character": "足",
      "keyWords": "FOOT ・ SUFFICE",
      "on": "ソク",
      "kun": "あし ・ た.りる ・ た.る ・ た.す"
    },
    {
      "ID": 45,
      "character": "定",
      "keyWords": "FIX",
      "on": "テイ ・ ジョウ",
      "kun": "さだ.める ・ さだ.まる ・ さだ.か"
    },
    {
      "ID": 46,
      "character": "手",
      "keyWords": "HAND ・ PERFORMER OF AN ACTION",
      "on": "シュ",
      "kun": "て ・ て- ・ -て ・ た-"
    },
    {
      "ID": 47,
      "character": "用",
      "keyWords": "EMPLOY ・ THINGS TO DO",
      "on": "ヨウ",
      "kun": "もち.いる"
    },
    {
      "ID": 48,
      "character": "無",
      "keyWords": "WITHOUT ・ NOTHING",
      "on": "ム ・ ブ",
      "kun": "な.い"
    },
    {
      "ID": 49,
      "character": "不",
      "keyWords": "NOT",
      "on": "フ ・ ブ",
      "kun": ""
    },
    {
      "ID": 50,
      "character": "回",
      "keyWords": "TURN ROUND ・ TIME",
      "on": "カイ ・ エ",
      "kun": "まわ.る ・ -まわ.る ・ -まわ.り ・ まわ.す ・ -まわ.す ・ まわ.し- ・ -まわ.し"
    },
    {
      "ID": 51,
      "character": "言",
      "keyWords": "SAY ・ SPEECH",
      "on": "ゲン ・ ゴン",
      "kun": "い.う ・ こと"
    },
    {
      "ID": 52,
      "character": "舌",
      "keyWords": "TONGUE",
      "on": "ゼツ",
      "kun": "した"
    },
    {
      "ID": 53,
      "character": "話",
      "keyWords": "SPEAK",
      "on": "ワ",
      "kun": "はな.す ・ はなし"
    },
    {
      "ID": 54,
      "character": "活",
      "keyWords": "ACTIVE ・ LIVE",
      "on": "カツ",
      "kun": ""
    },
    {
      "ID": 55,
      "character": "行",
      "keyWords": "GO ・ ACT ・ LINE",
      "on": "コウ ・ ギョウ ・ アン",
      "kun": "い.く ・ ゆ.く ・ -ゆ.き ・ -ゆき ・ -い.き ・ -いき ・ おこな.う"
    },
    {
      "ID": 56,
      "character": "心",
      "keyWords": "HEART",
      "on": "シン",
      "kun": "こころ ・ -ごころ"
    },
    {
      "ID": 57,
      "character": "耳",
      "keyWords": "EAR",
      "on": "ジ",
      "kun": "みみ"
    },
    {
      "ID": 58,
      "character": "又",
      "keyWords": "AGAIN ・ OR",
      "on": "",
      "kun": "また ・ また- ・ また.の-"
    },
    {
      "ID": 59,
      "character": "取",
      "keyWords": "TAKE",
      "on": "シュ",
      "kun": "と.る ・ と.り ・ と.り-とり- ・ -ど.り"
    },
    {
      "ID": 60,
      "character": "身",
      "keyWords": "BODY ・ ONE'S PERSON ・ SOCIAL POSITION",
      "on": "シン",
      "kun": "み"
    },
    {
      "ID": 61,
      "character": "休",
      "keyWords": "REST",
      "on": "キュウ",
      "kun": "やす.む ・ やす.まる ・ やす.める"
    },
    {
      "ID": 62,
      "character": "体",
      "keyWords": "BODY ・ FORM",
      "on": "タイ ・ テイ",
      "kun": "からだ"
    },
    {
      "ID": 63,
      "character": "信",
      "keyWords": "BELIEVE ・ MESSAGE",
      "on": "シン",
      "kun": ""
    },
    {
      "ID": 64,
      "character": "付",
      "keyWords": "ATTACH",
      "on": "フ",
      "kun": "つ.ける ・ -つ.ける ・ -ず.ける ・ つ.け ・ つ.け- ・ -つ.け ・ -ず.け ・ -ずけ ・ つ.く ・ -ず.く ・ つ.き ・ -つ.き ・ -つき ・ -ず.き ・ -ずき"
    },
    {
      "ID": 65,
      "character": "受",
      "keyWords": "RECEIVE",
      "on": "ジュ",
      "kun": "う.ける ・ -う.け ・ う.かる"
    },
    {
      "ID": 66,
      "character": "以",
      "keyWords": "TO THE...OF ・ BY MEANS OF",
      "on": "イ",
      "kun": "もっ.て*"
    },
    {
      "ID": 67,
      "character": "立",
      "keyWords": "STAND ・ ESTABLISH",
      "on": "リツ ・ リュウ",
      "kun": "た.つ ・ -た.つ ・ た.ち- ・ た.てる ・ -た.てる ・ た.て- ・ たて- ・ -た.て ・ -だ.て ・ -だ.てる"
    },
    {
      "ID": 68,
      "character": "部",
      "keyWords": "SECTION",
      "on": "ブ",
      "kun": ""
    },
    {
      "ID": 69,
      "character": "倍",
      "keyWords": "TIMES ・ DOUBLE",
      "on": "バイ",
      "kun": ""
    },
    {
      "ID": 70,
      "character": "成",
      "keyWords": "BECOME ・ ACHIEVE",
      "on": "セイ ・ ジョウ",
      "kun": "な.る ・ な.す ・ -な.す"
    },
    {
      "ID": 71,
      "character": "代",
      "keyWords": "REPLACE ・ GENERATION ・ CHARGE",
      "on": "ダイ ・ タイ",
      "kun": "か.わる ・ か.わり ・ -が.わり ・ か.える ・ よ ・ しろ"
    },
    {
      "ID": 72,
      "character": "王",
      "keyWords": "KING",
      "on": "オウ",
      "kun": ""
    },
    {
      "ID": 73,
      "character": "玉",
      "keyWords": "GEM",
      "on": "ギョク",
      "kun": "たま ・ たま- ・ -だま"
    },
    {
      "ID": 74,
      "character": "宝",
      "keyWords": "TREASURE",
      "on": "ホウ",
      "kun": "たから"
    },
    {
      "ID": 75,
      "character": "国",
      "keyWords": "COUNTRY",
      "on": "コク",
      "kun": "くに"
    },
    {
      "ID": 76,
      "character": "白",
      "keyWords": "WHITE",
      "on": "ハク ・ ビャク",
      "kun": "しろ ・ しら- ・ しろ.い"
    },
    {
      "ID": 77,
      "character": "皇",
      "keyWords": "EMPEROR",
      "on": "コウ ・ オウ",
      "kun": ""
    },
    {
      "ID": 78,
      "character": "全",
      "keyWords": "WHOLE",
      "on": "ゼン",
      "kun": "まった.く ・ すべ.て"
    },
    {
      "ID": 79,
      "character": "書",
      "keyWords": "WRITE ・ BOOK",
      "on": "ショ",
      "kun": "か.く ・ -が.き ・ -がき"
    },
    {
      "ID": 80,
      "character": "事",
      "keyWords": "AFFAIR ・ ABSTRACT THING",
      "on": "ジ ・ ズ",
      "kun": "こと"
    },
    {
      "ID": 81,
      "character": "自",
      "keyWords": "SELF",
      "on": "ジ ・ シ",
      "kun": "みずか.ら ・ おの.ずから*"
    },
    {
      "ID": 82,
      "character": "貝",
      "keyWords": "SHELLFISH",
      "on": "",
      "kun": "かい"
    },
    {
      "ID": 83,
      "character": "見",
      "keyWords": "SEE",
      "on": "ケン",
      "kun": "み.る ・ み.える ・ み.せる"
    },
    {
      "ID": 84,
      "character": "力",
      "keyWords": "POWER",
      "on": "リョク ・ リキ",
      "kun": "ちから"
    },
    {
      "ID": 85,
      "character": "刀",
      "keyWords": "SWORD",
      "on": "トウ",
      "kun": "かたな"
    },
    {
      "ID": 86,
      "character": "切",
      "keyWords": "CUT",
      "on": "セツ ・ サイ",
      "kun": "き.る ・ -き.る ・ き.り ・ -き.り ・ -ぎ.り ・ き.れる ・ -き.れる ・ き.れ ・ -き.れ ・ -ぎ.れ"
    },
    {
      "ID": 87,
      "character": "刃",
      "keyWords": "BLADE",
      "on": "ジン",
      "kun": "は"
    },
    {
      "ID": 88,
      "character": "分",
      "keyWords": "DIVIDE ・ PART ・ MINUTE",
      "on": "ブン ・ フン ・ ブ",
      "kun": "わ.ける ・ わ.け ・ わ.かれる ・ わ.かる ・ わ.かつ"
    },
    {
      "ID": 89,
      "character": "公",
      "keyWords": "PUBLIC",
      "on": "コウ",
      "kun": "おおやけ"
    },
    {
      "ID": 90,
      "character": "別",
      "keyWords": "SEPARATE ・ ANOTHER",
      "on": "ベツ",
      "kun": "わか.れる"
    },
    {
      "ID": 91,
      "character": "長",
      "keyWords": "LONG ・ CHIEF",
      "on": "チョウ",
      "kun": "なが.い"
    },
    {
      "ID": 92,
      "character": "男",
      "keyWords": "MAN",
      "on": "ダン ・ ナン",
      "kun": "おとこ"
    },
    {
      "ID": 93,
      "character": "女",
      "keyWords": "WOMAN",
      "on": "ジョ ・ ニョ ・ ニョウ",
      "kun": "おんな ・ め"
    },
    {
      "ID": 94,
      "character": "子",
      "keyWords": "CHILD ・ NOUN SUFFIX",
      "on": "シ ・ ス",
      "kun": "こ ・ -こ ・ -.っこ"
    },
    {
      "ID": 95,
      "character": "好",
      "keyWords": "LIKE ・ FAVORABLE",
      "on": "コウ",
      "kun": "この.む ・ す.く ・ よ.い* ・ い.い*"
    },
    {
      "ID": 96,
      "character": "安",
      "keyWords": "PEACEFUL ・ INEXPENSIVE",
      "on": "アン",
      "kun": "やす.い ・ やす.まる ・ やす ・ やす.らか"
    },
    {
      "ID": 97,
      "character": "案",
      "keyWords": "PROPOSAL",
      "on": "アン",
      "kun": ""
    },
    {
      "ID": 98,
      "character": "字",
      "keyWords": "CHARACTER",
      "on": "ジ",
      "kun": "あざ"
    },
    {
      "ID": 99,
      "character": "学",
      "keyWords": "STUDY ・ EDUCATIONAL INSTITUTION",
      "on": "ガク",
      "kun": "まな.ぶ"
    },
    {
      "ID": 100,
      "character": "父",
      "keyWords": "FATHER",
      "on": "フ",
      "kun": "ちち"
    },
    {
      "ID": 101,
      "character": "文",
      "keyWords": "WRITINGS ・ LETTER",
      "on": "ブン ・ モン",
      "kun": "ふみ"
    },
    {
      "ID": 102,
      "character": "交",
      "keyWords": "INTERCOURSE ・ CROSS",
      "on": "コウ",
      "kun": "まじ.わる ・ まじ.える ・ ま.じる ・ ま.ざる ・ ま.ぜる ・ -か.う ・ か.わす"
    },
    {
      "ID": 103,
      "character": "校",
      "keyWords": "SCHOOL ・ PROOFREAD",
      "on": "コウ",
      "kun": ""
    },
    {
      "ID": 104,
      "character": "母",
      "keyWords": "MOTHER",
      "on": "ボ",
      "kun": "はは"
    },
    {
      "ID": 105,
      "character": "毎",
      "keyWords": "EVERY",
      "on": "マイ",
      "kun": "-ごと.に*"
    },
    {
      "ID": 106,
      "character": "海",
      "keyWords": "SEA",
      "on": "カイ",
      "kun": "うみ"
    },
    {
      "ID": 107,
      "character": "者",
      "keyWords": "PERSON",
      "on": "シャ",
      "kun": "もの"
    },
    {
      "ID": 108,
      "character": "工",
      "keyWords": "MANUFACTURE ・ CONSTRUCTION",
      "on": "コウ ・ ク",
      "kun": ""
    },
    {
      "ID": 109,
      "character": "式",
      "keyWords": "FORM ・ CEREMONY ・ FORMULA",
      "on": "シキ",
      "kun": ""
    },
    {
      "ID": 110,
      "character": "弐",
      "keyWords": "TWO",
      "on": "ニ",
      "kun": ""
    },
    {
      "ID": 111,
      "character": "武",
      "keyWords": "MILITARY",
      "on": "ブ ・ ム",
      "kun": ""
    },
    {
      "ID": 112,
      "character": "糸",
      "keyWords": "THREAD",
      "on": "シ",
      "kun": "いと"
    },
    {
      "ID": 113,
      "character": "前",
      "keyWords": "BEFORE",
      "on": "ゼン",
      "kun": "まえ ・ -まえ"
    },
    {
      "ID": 114,
      "character": "後",
      "keyWords": "AFTER",
      "on": "ゴ ・ コウ",
      "kun": "のち ・ うし.ろ ・ うしろ ・ あと ・ おく.れる"
    },
    {
      "ID": 115,
      "character": "午",
      "keyWords": "NOON ・ THE HORSE",
      "on": "ゴ",
      "kun": ""
    },
    {
      "ID": 116,
      "character": "牛",
      "keyWords": "CATTLE",
      "on": "ギュウ",
      "kun": "うし"
    },
    {
      "ID": 117,
      "character": "年",
      "keyWords": "YEAR",
      "on": "ネン",
      "kun": "とし"
    },
    {
      "ID": 118,
      "character": "件",
      "keyWords": "MATTER",
      "on": "ケン",
      "kun": ""
    },
    {
      "ID": 119,
      "character": "条",
      "keyWords": "ARTICLE",
      "on": "ジョウ",
      "kun": ""
    },
    {
      "ID": 120,
      "character": "化",
      "keyWords": "CHANGE INTO",
      "on": "カ ・ ケ",
      "kun": "ば.ける ・ ば.かす"
    },
    {
      "ID": 121,
      "character": "花",
      "keyWords": "FLOWER",
      "on": "カ",
      "kun": "はな"
    },
    {
      "ID": 122,
      "character": "北",
      "keyWords": "NORTH",
      "on": "ホク",
      "kun": "きた"
    },
    {
      "ID": 123,
      "character": "比",
      "keyWords": "COMPARE ・ PHONETIC [HI]",
      "on": "ヒ",
      "kun": "くら.べる"
    },
    {
      "ID": 124,
      "character": "背",
      "keyWords": "BACK",
      "on": "ハイ",
      "kun": "せ ・ せい ・ そむ.く ・ そむ.ける"
    },
    {
      "ID": 125,
      "character": "車",
      "keyWords": "VEHICLE ・ WHEEL",
      "on": "シャ",
      "kun": "くるま"
    },
    {
      "ID": 126,
      "character": "気",
      "keyWords": "GAS ・ SPIRIT",
      "on": "キ ・ ケ",
      "kun": ""
    },
    {
      "ID": 127,
      "character": "汽",
      "keyWords": "STEAM",
      "on": "キ",
      "kun": ""
    },
    {
      "ID": 128,
      "character": "性",
      "keyWords": "NATURE ・ SEX ・ -ITY",
      "on": "セイ ・ ショウ",
      "kun": ""
    },
    {
      "ID": 129,
      "character": "畑",
      "keyWords": "FIELD",
      "on": "",
      "kun": "はた ・ はたけ ・ -ばたけ"
    },
    {
      "ID": 130,
      "character": "青",
      "keyWords": "BLUE",
      "on": "セイ ・ ショウ",
      "kun": "あお ・ あお- ・ あお.い"
    },
    {
      "ID": 131,
      "character": "麦",
      "keyWords": "WHEAT",
      "on": "バク",
      "kun": "むぎ"
    },
    {
      "ID": 132,
      "character": "素",
      "keyWords": "ELEMENT ・ PLAIN",
      "on": "ソ ・ ス",
      "kun": ""
    },
    {
      "ID": 133,
      "character": "毒",
      "keyWords": "POISON",
      "on": "ドク",
      "kun": ""
    },
    {
      "ID": 134,
      "character": "先",
      "keyWords": "AHEAD",
      "on": "セン",
      "kun": "さき ・ ま.ず*"
    },
    {
      "ID": 135,
      "character": "洗",
      "keyWords": "WASH",
      "on": "セン",
      "kun": "あら.う"
    },
    {
      "ID": 136,
      "character": "元",
      "keyWords": "ORIGIN",
      "on": "ゲン ・ ガン",
      "kun": "もと"
    },
    {
      "ID": 137,
      "character": "光",
      "keyWords": "LIGHT",
      "on": "コウ",
      "kun": "ひか.る ・ ひかり"
    },
    {
      "ID": 138,
      "character": "去",
      "keyWords": "GO AWAY",
      "on": "キョ ・ コ",
      "kun": "さ.る ・ -さ.る"
    },
    {
      "ID": 139,
      "character": "法",
      "keyWords": "LAW ・ METHOD",
      "on": "ホウ ・ ハッ- ・ ホッ-",
      "kun": ""
    },
    {
      "ID": 140,
      "character": "走",
      "keyWords": "RUN",
      "on": "ソウ",
      "kun": "はし.る"
    },
    {
      "ID": 141,
      "character": "当",
      "keyWords": "THE PRESENT ・ HIT",
      "on": "トウ",
      "kun": "あ.たる ・ あ.たり ・ あ.てる ・ あ.て"
    },
    {
      "ID": 142,
      "character": "思",
      "keyWords": "THINK",
      "on": "シ",
      "kun": "おも.う"
    },
    {
      "ID": 143,
      "character": "早",
      "keyWords": "EARLY ・ QUICK",
      "on": "ソウ ・ サッ-",
      "kun": "はや.い ・ はや ・ はや- ・ はや.まる ・ はや.める"
    },
    {
      "ID": 144,
      "character": "草",
      "keyWords": "GRASS",
      "on": "ソウ",
      "kun": "くさ ・ くさ- ・ -ぐさ"
    },
    {
      "ID": 145,
      "character": "朝",
      "keyWords": "MORNING ・ DYNASTY",
      "on": "チョウ",
      "kun": "あさ"
    },
    {
      "ID": 146,
      "character": "潮",
      "keyWords": "TIDE",
      "on": "チョウ",
      "kun": "しお"
    },
    {
      "ID": 147,
      "character": "形",
      "keyWords": "SHAPE",
      "on": "ケイ ・ ギョウ",
      "kun": "かた ・ -がた ・ かたち"
    },
    {
      "ID": 148,
      "character": "発",
      "keyWords": "OPEN UP ・ EMIT ・ START",
      "on": "ハツ ・ ホツ",
      "kun": "た.つ*"
    },
    {
      "ID": 149,
      "character": "廃",
      "keyWords": "ABANDON ・ WASTE",
      "on": "ハイ",
      "kun": "すた.れる"
    },
    {
      "ID": 150,
      "character": "音",
      "keyWords": "SOUND",
      "on": "オン ・ イン",
      "kun": "おと ・ ね"
    },
    {
      "ID": 151,
      "character": "意",
      "keyWords": "MIND ・ MEANING",
      "on": "イ",
      "kun": ""
    },
    {
      "ID": 152,
      "character": "作",
      "keyWords": "MAKE ・ WORK",
      "on": "サク ・ サ",
      "kun": "つく.る ・ つく.り ・ -ずく.り"
    },
    {
      "ID": 153,
      "character": "昨",
      "keyWords": "YESTERDAY ・ LAST",
      "on": "サク",
      "kun": ""
    },
    {
      "ID": 154,
      "character": "雨",
      "keyWords": "RAIN",
      "on": "ウ",
      "kun": "あめ ・ あま-"
    },
    {
      "ID": 155,
      "character": "電",
      "keyWords": "ELECTRICITY",
      "on": "デン",
      "kun": ""
    },
    {
      "ID": 156,
      "character": "頁",
      "keyWords": "PAGE",
      "on": "ケツ ページ",
      "kun": "ページ"
    },
    {
      "ID": 157,
      "character": "首",
      "keyWords": "HEAD ・ NECK ・ LEADER",
      "on": "シュ",
      "kun": "くび"
    },
    {
      "ID": 158,
      "character": "道",
      "keyWords": "WAY",
      "on": "ドウ ・ トウ",
      "kun": "みち"
    },
    {
      "ID": 159,
      "character": "通",
      "keyWords": "PASS ・ COMMUNICATE",
      "on": "ツウ ・ ツ",
      "kun": "とお.る ・ とお.り ・ -とお.り ・ -どお.り ・ とお.す ・ とお.し ・ -どお.し ・ かよ.う"
    },
    {
      "ID": 160,
      "character": "乳",
      "keyWords": "MILK",
      "on": "ニュウ",
      "kun": "ちち ・ ち"
    },
    {
      "ID": 161,
      "character": "豆",
      "keyWords": "BEAN",
      "on": "トウ ・ ズ",
      "kun": "まめ ・ まめ-"
    },
    {
      "ID": 162,
      "character": "頭",
      "keyWords": "HEAD",
      "on": "トウ ・ ズ",
      "kun": "あたま ・ かしら ・ -がしら"
    },
    {
      "ID": 163,
      "character": "予",
      "keyWords": "IN ADVANCE",
      "on": "ヨ",
      "kun": "あらかじ.め*"
    },
    {
      "ID": 164,
      "character": "矛",
      "keyWords": "HALBERD",
      "on": "ム",
      "kun": "ほこ"
    },
    {
      "ID": 165,
      "character": "預",
      "keyWords": "DEPOSIT",
      "on": "ヨ",
      "kun": ""
    },
    {
      "ID": 166,
      "character": "句",
      "keyWords": "PHRASE ・ HAIKU",
      "on": "ク",
      "kun": ""
    },
    {
      "ID": 167,
      "character": "旬",
      "keyWords": "TEN-DAY PERIOD",
      "on": "ジュン ・ シュン",
      "kun": ""
    },
    {
      "ID": 168,
      "character": "勺",
      "keyWords": "<SHAKU> (0.018L)",
      "on": "シャク",
      "kun": ""
    },
    {
      "ID": 169,
      "character": "的",
      "keyWords": "TARGET ・ ADJECTIVAL SUFFIX",
      "on": "テキ",
      "kun": "まと"
    },
    {
      "ID": 170,
      "character": "約",
      "keyWords": "PROMISE ・ SHORTEN ・ APPROXIMATELY",
      "on": "ヤク",
      "kun": ""
    },
    {
      "ID": 171,
      "character": "勿",
      "keyWords": "DO NOT",
      "on": "モチ ・ モッ-",
      "kun": "なか.れ"
    },
    {
      "ID": 172,
      "character": "物",
      "keyWords": "THING",
      "on": "ブツ ・ モツ",
      "kun": "もの ・ もの-"
    },
    {
      "ID": 173,
      "character": "方",
      "keyWords": "DIRECTION ・ WAY ・ SQUARE",
      "on": "ホウ",
      "kun": "かた ・ -かた ・ -がた"
    },
    {
      "ID": 174,
      "character": "防",
      "keyWords": "DEFEND AGAINST",
      "on": "ボウ",
      "kun": "ふせ.ぐ"
    },
    {
      "ID": 175,
      "character": "面",
      "keyWords": "FACE",
      "on": "メン",
      "kun": "おも ・ おもて ・ つら"
    },
    {
      "ID": 176,
      "character": "画",
      "keyWords": "PICTURE ・ DRAW UP A PLAN",
      "on": "ガ ・ カク",
      "kun": ""
    },
    {
      "ID": 177,
      "character": "両",
      "keyWords": "BOTH",
      "on": "リョウ",
      "kun": ""
    },
    {
      "ID": 178,
      "character": "岡",
      "keyWords": "HILL",
      "on": "",
      "kun": "おか"
    },
    {
      "ID": 179,
      "character": "満",
      "keyWords": "FULL",
      "on": "マン",
      "kun": "み.ちる ・ み.つ ・ み.たす"
    },
    {
      "ID": 180,
      "character": "顔",
      "keyWords": "FACE",
      "on": "ガン",
      "kun": "かお"
    },
    {
      "ID": 181,
      "character": "産",
      "keyWords": "GIVE BIRTH ・ PRODUCE",
      "on": "サン",
      "kun": "う.む ・ う.まれる ・ うぶ-"
    },
    {
      "ID": 182,
      "character": "同",
      "keyWords": "SAME",
      "on": "ドウ",
      "kun": "おな.じ"
    },
    {
      "ID": 183,
      "character": "向",
      "keyWords": "TURN TOWARD",
      "on": "コウ",
      "kun": "む.く ・ む.き ・ -む.き ・ む.ける ・ -む.け ・ む.かう ・ む.こう ・ む.こう-"
    },
    {
      "ID": 184,
      "character": "尚",
      "keyWords": "STILL (MORE) ・ VALUE HIGHLY",
      "on": "ショウ",
      "kun": "なお*"
    },
    {
      "ID": 185,
      "character": "高",
      "keyWords": "HIGH ・ AMOUNT",
      "on": "コウ",
      "kun": "たか.い ・ たか ・ -だか ・ たか.まる ・ たか.める"
    },
    {
      "ID": 186,
      "character": "圧",
      "keyWords": "PRESSURE",
      "on": "アツ",
      "kun": ""
    },
    {
      "ID": 187,
      "character": "地",
      "keyWords": "GROUND ・ PLACE",
      "on": "チ ・ ジ",
      "kun": ""
    },
    {
      "ID": 188,
      "character": "池",
      "keyWords": "POND",
      "on": "チ",
      "kun": "いけ"
    },
    {
      "ID": 189,
      "character": "他",
      "keyWords": "OTHER",
      "on": "タ",
      "kun": "ほか"
    },
    {
      "ID": 190,
      "character": "集",
      "keyWords": "GATHER",
      "on": "シュウ",
      "kun": "あつ.まる ・ あつ.める ・ つど.う"
    },
    {
      "ID": 191,
      "character": "進",
      "keyWords": "ADVANCE",
      "on": "シン",
      "kun": "すす.む ・ すす.める"
    },
    {
      "ID": 192,
      "character": "込",
      "keyWords": "MOVE INWARD ・ EMPHATIC VERBAL SUFFIX",
      "on": "",
      "kun": "-こ.む ・ こ.む ・ こ.み ・ -こ.み ・ こ.める"
    },
    {
      "ID": 193,
      "character": "斤",
      "keyWords": "<KIN> (600g)",
      "on": "キン",
      "kun": ""
    },
    {
      "ID": 194,
      "character": "近",
      "keyWords": "NEAR ・ RECENT",
      "on": "キン",
      "kun": "ちか.い"
    },
    {
      "ID": 195,
      "character": "辺",
      "keyWords": "VICINITY ・ BORDERLAND",
      "on": "ヘン",
      "kun": "あた.り ・ -べ"
    },
    {
      "ID": 196,
      "character": "最",
      "keyWords": "MOST",
      "on": "サイ",
      "kun": "もっと.も"
    },
    {
      "ID": 197,
      "character": "皿",
      "keyWords": "PLATE",
      "on": "",
      "kun": "さら"
    },
    {
      "ID": 198,
      "character": "血",
      "keyWords": "BLOOD",
      "on": "ケツ",
      "kun": "ち"
    },
    {
      "ID": 199,
      "character": "温",
      "keyWords": "WARM",
      "on": "オン",
      "kun": "あたた.か ・ あたた.かい ・ あたた.まる ・ あたた.める"
    },
    {
      "ID": 200,
      "character": "湿",
      "keyWords": "MOIST",
      "on": "シツ",
      "kun": "しめ.る ・ しめ.す"
    },
    {
      "ID": 201,
      "character": "爪",
      "keyWords": "CLAW",
      "on": "",
      "kun": "つめ ・ つま-"
    },
    {
      "ID": 202,
      "character": "瓜",
      "keyWords": "MELON",
      "on": "カ",
      "kun": "うり"
    },
    {
      "ID": 203,
      "character": "巾",
      "keyWords": "CLOTH",
      "on": "キン",
      "kun": ""
    },
    {
      "ID": 204,
      "character": "布",
      "keyWords": "CLOTH ・ SPREAD",
      "on": "フ",
      "kun": "ぬの"
    },
    {
      "ID": 205,
      "character": "市",
      "keyWords": "CITY ・ MARKET",
      "on": "シ",
      "kun": "いち"
    },
    {
      "ID": 206,
      "character": "吊",
      "keyWords": "HANG",
      "on": "チョウ",
      "kun": "つ.る ・ つ.り ・ つ.るす"
    },
    {
      "ID": 207,
      "character": "泉",
      "keyWords": "SPRING",
      "on": "セン",
      "kun": "いずみ"
    },
    {
      "ID": 208,
      "character": "原",
      "keyWords": "PLAIN ・ ORIGINAL",
      "on": "ゲン",
      "kun": "はら"
    },
    {
      "ID": 209,
      "character": "源",
      "keyWords": "SOURCE",
      "on": "ゲン",
      "kun": "みなもと"
    },
    {
      "ID": 210,
      "character": "線",
      "keyWords": "LINE",
      "on": "セン",
      "kun": ""
    },
    {
      "ID": 211,
      "character": "綿",
      "keyWords": "COTTON",
      "on": "メン",
      "kun": "わた"
    },
    {
      "ID": 212,
      "character": "絹",
      "keyWords": "SILK",
      "on": "ケン",
      "kun": "きぬ"
    },
    {
      "ID": 213,
      "character": "錦",
      "keyWords": "BROCADE",
      "on": "キン",
      "kun": "にしき"
    },
    {
      "ID": 214,
      "character": "願",
      "keyWords": "WISH ・ ASK A FAVOR",
      "on": "ガン",
      "kun": "ねが.う"
    },
    {
      "ID": 215,
      "character": "内",
      "keyWords": "INSIDE",
      "on": "ナイ ・ ダイ",
      "kun": "うち"
    },
    {
      "ID": 216,
      "character": "肉",
      "keyWords": "FLESH",
      "on": "ニク",
      "kun": ""
    },
    {
      "ID": 217,
      "character": "猪",
      "keyWords": "WILD BOAR",
      "on": "チョ",
      "kun": "いのしし ・ い"
    },
    {
      "ID": 218,
      "character": "豚",
      "keyWords": "PIG",
      "on": "トン",
      "kun": "ぶた"
    },
    {
      "ID": 219,
      "character": "家",
      "keyWords": "HOUSE ・ FAMILY",
      "on": "カ ・ ケ",
      "kun": "いえ ・ や ・ うち*"
    },
    {
      "ID": 220,
      "character": "吾",
      "keyWords": "EGO",
      "on": "ゴ",
      "kun": "われ ・ わが- ・ あ-"
    },
    {
      "ID": 221,
      "character": "我",
      "keyWords": "SELF",
      "on": "ガ",
      "kun": "われ ・ は ・ わ.が- ・ わが-"
    },
    {
      "ID": 222,
      "character": "語",
      "keyWords": "WORD ・ LANGUAGE ・ TELL",
      "on": "ゴ",
      "kun": "かた.る ・ かた.らう"
    },
    {
      "ID": 223,
      "character": "伝",
      "keyWords": "TRANSMIT",
      "on": "デン",
      "kun": "つた.わる ・ つた.える ・ つた.う ・ -ずた.い"
    },
    {
      "ID": 224,
      "character": "転",
      "keyWords": "TURN",
      "on": "テン",
      "kun": "ころ.がる ・ ころ.げる ・ ころ.がす ・ ころ.ぶ"
    },
    {
      "ID": 225,
      "character": "芸",
      "keyWords": "ART",
      "on": "ゲイ",
      "kun": ""
    },
    {
      "ID": 226,
      "character": "会",
      "keyWords": "MEET ・ SOCIETY",
      "on": "カイ ・ エ",
      "kun": "あ.う ・ あ.わせる"
    },
    {
      "ID": 227,
      "character": "合",
      "keyWords": "COMBINE ・ FIT",
      "on": "ゴウ ・ ガッ- ・ カッ-",
      "kun": "あ.う ・ -あ.う ・ あ.い ・ あい- ・ -あ.い ・ -あい ・ あ.わす ・ あ.わせる ・ -あ.わせる"
    },
    {
      "ID": 228,
      "character": "今",
      "keyWords": "PRESENT ・ THIS",
      "on": "コン ・ キン",
      "kun": "いま"
    },
    {
      "ID": 229,
      "character": "令",
      "keyWords": "COMMAND",
      "on": "レイ",
      "kun": ""
    },
    {
      "ID": 230,
      "character": "念",
      "keyWords": "THOUGHTS",
      "on": "ネン",
      "kun": ""
    },
    {
      "ID": 231,
      "character": "印",
      "keyWords": "SEAL",
      "on": "イン",
      "kun": "しるし ・ -じるし"
    },
    {
      "ID": 232,
      "character": "命",
      "keyWords": "ORDER ・ LIFE ・ FATE",
      "on": "メイ ・ ミョウ",
      "kun": "いのち"
    },
    {
      "ID": 233,
      "character": "亡",
      "keyWords": "DECEASED",
      "on": "ボウ ・ モウ",
      "kun": "な.い ・ な.き-"
    },
    {
      "ID": 234,
      "character": "米",
      "keyWords": "RICE ・ AMERICA",
      "on": "ベイ ・ マイ",
      "kun": "こめ"
    },
    {
      "ID": 235,
      "character": "粒",
      "keyWords": "GRAIN",
      "on": "リュウ",
      "kun": "つぶ"
    },
    {
      "ID": 236,
      "character": "和",
      "keyWords": "HARMONIOUS ・ PEACE ・ JAPAN",
      "on": "ワ ・ オ",
      "kun": "やわ.らぐ ・ やわ.らげる ・ なご.む ・ なご.やか"
    },
    {
      "ID": 237,
      "character": "私",
      "keyWords": "PRIVATE ・ I",
      "on": "シ",
      "kun": "わたくし ・ わたし"
    },
    {
      "ID": 238,
      "character": "広",
      "keyWords": "WIDE",
      "on": "コウ",
      "kun": "ひろ.い ・ ひろ.まる ・ ひろ.める ・ ひろ.がる ・ ひろ.げる"
    },
    {
      "ID": 239,
      "character": "細",
      "keyWords": "SLENDER ・ MINUTE",
      "on": "サイ",
      "kun": "ほそ.い ・ ほそ.る ・ こま.か ・ こまか.い"
    },
    {
      "ID": 240,
      "character": "林",
      "keyWords": "FOREST",
      "on": "リン",
      "kun": "はやし"
    },
    {
      "ID": 241,
      "character": "森",
      "keyWords": "THICK WOODS",
      "on": "シン",
      "kun": "もり"
    },
    {
      "ID": 242,
      "character": "松",
      "keyWords": "PINE",
      "on": "ショウ",
      "kun": "まつ"
    },
    {
      "ID": 243,
      "character": "竹",
      "keyWords": "BAMBOO",
      "on": "チク",
      "kun": "たけ"
    },
    {
      "ID": 244,
      "character": "都",
      "keyWords": "METROPOLIS ・ METROPOLIS OF TOKYO",
      "on": "ト ・ ツ",
      "kun": "みやこ"
    },
    {
      "ID": 245,
      "character": "京",
      "keyWords": "CAPITAL ・ TOKYO ・ KYOTO",
      "on": "キョウ ・ ケイ",
      "kun": ""
    },
    {
      "ID": 246,
      "character": "政",
      "keyWords": "POLITICAL ADMINISTRATION",
      "on": "セイ ・ ショウ",
      "kun": "まつりごと"
    },
    {
      "ID": 247,
      "character": "府",
      "keyWords": "URBAN PREFECTURE ・ GOVERNMENT OFFICE",
      "on": "フ",
      "kun": ""
    },
    {
      "ID": 248,
      "character": "戸",
      "keyWords": "DOOR ・ HOUSEHOLD",
      "on": "コ",
      "kun": "と"
    },
    {
      "ID": 249,
      "character": "所",
      "keyWords": "PLACE ・ PARTICLE OF NOMINALIZATION",
      "on": "ショ",
      "kun": "ところ ・ -ところ ・ どころ"
    },
    {
      "ID": 250,
      "character": "至",
      "keyWords": "COME TO",
      "on": "シ",
      "kun": "いた.る"
    },
    {
      "ID": 251,
      "character": "致",
      "keyWords": "BRING ABOUT ・ DO HUMBLY",
      "on": "チ",
      "kun": "いた.す"
    },
    {
      "ID": 252,
      "character": "屋",
      "keyWords": "HOUSE ・ SMALL SHOP",
      "on": "オク",
      "kun": "や"
    },
    {
      "ID": 253,
      "character": "室",
      "keyWords": "ROOM",
      "on": "シツ",
      "kun": "むろ"
    },
    {
      "ID": 254,
      "character": "古",
      "keyWords": "OLD",
      "on": "コ",
      "kun": "ふる.い ・ ふる- ・ -ふる.す"
    },
    {
      "ID": 255,
      "character": "居",
      "keyWords": "BE PRESENT ・ RESIDE",
      "on": "キョ",
      "kun": "い.る ・ -い ・ お.る*"
    },
    {
      "ID": 256,
      "character": "局",
      "keyWords": "BUREAU ・ LIMITED PART ・ SITUATION",
      "on": "キョク",
      "kun": ""
    },
    {
      "ID": 257,
      "character": "故",
      "keyWords": "OLD ・ INCIDENT ・ REASON",
      "on": "コ",
      "kun": "ゆえ"
    },
    {
      "ID": 258,
      "character": "胡",
      "keyWords": "NATIVES OF ANCIENT CHINA",
      "on": "コ ・ ゴ ・ ウ",
      "kun": ""
    },
    {
      "ID": 259,
      "character": "湖",
      "keyWords": "LAKE",
      "on": "コ",
      "kun": "みずうみ"
    },
    {
      "ID": 260,
      "character": "固",
      "keyWords": "SOLID ・ FIRM",
      "on": "コ",
      "kun": "かた.める ・ かた.まる ・ かた.まり ・ かた.い"
    },
    {
      "ID": 261,
      "character": "箇",
      "keyWords": "COUNTER FOR ITEMS",
      "on": "カ",
      "kun": ""
    },
    {
      "ID": 262,
      "character": "個",
      "keyWords": "INDIVIDUAL ・ GENERAL COUNTER",
      "on": "コ ・ カ*",
      "kun": ""
    },
    {
      "ID": 263,
      "character": "且",
      "keyWords": "AS WELL AS",
      "on": "",
      "kun": "か.つ"
    },
    {
      "ID": 264,
      "character": "組",
      "keyWords": "ORGANIZE ・ ASSEMBLE",
      "on": "ソ",
      "kun": "く.む ・ くみ ・ -ぐみ"
    },
    {
      "ID": 265,
      "character": "夕",
      "keyWords": "EVENING",
      "on": "セキ",
      "kun": "ゆう"
    },
    {
      "ID": 266,
      "character": "外",
      "keyWords": "OUTSIDE",
      "on": "ガイ ・ ゲ",
      "kun": "そと ・ ほか ・ はず.す ・ はず.れる"
    },
    {
      "ID": 267,
      "character": "多",
      "keyWords": "MANY",
      "on": "タ",
      "kun": "おおい"
    },
    {
      "ID": 268,
      "character": "汐",
      "keyWords": "(EVENING) TIDE",
      "on": "セキ",
      "kun": "しお"
    },
    {
      "ID": 269,
      "character": "名",
      "keyWords": "NAME",
      "on": "メイ ・ ミョウ",
      "kun": "な ・ -な"
    },
    {
      "ID": 270,
      "character": "天",
      "keyWords": "HEAVEN",
      "on": "テン",
      "kun": "あめ ・ あま-"
    },
    {
      "ID": 271,
      "character": "未",
      "keyWords": "NOT YET",
      "on": "ミ",
      "kun": "いま.だ* ・ ま.だ*"
    },
    {
      "ID": 272,
      "character": "末",
      "keyWords": "LAST PART",
      "on": "マツ ・ バツ",
      "kun": "すえ"
    },
    {
      "ID": 273,
      "character": "味",
      "keyWords": "TASTE",
      "on": "ミ",
      "kun": "あじ ・ あじ.わう"
    },
    {
      "ID": 274,
      "character": "来",
      "keyWords": "COME",
      "on": "ライ",
      "kun": "く.る ・ きた.る ・ きた.す"
    },
    {
      "ID": 275,
      "character": "新",
      "keyWords": "NEW",
      "on": "シン",
      "kun": "あたら.しい ・ あら.た ・ あら- ・ にい-"
    },
    {
      "ID": 276,
      "character": "親",
      "keyWords": "PARENT ・ RELATIVES ・ INTIMATE",
      "on": "シン",
      "kun": "おや ・ おや- ・ した.しい ・ した.しむ"
    },
    {
      "ID": 277,
      "character": "欠",
      "keyWords": "LACK",
      "on": "ケツ",
      "kun": "か.ける ・ か.く ・ か.かす"
    },
    {
      "ID": 278,
      "character": "次",
      "keyWords": "NEXT",
      "on": "ジ ・ シ",
      "kun": "つ.ぐ ・ つぎ"
    },
    {
      "ID": 279,
      "character": "席",
      "keyWords": "SEAT",
      "on": "セキ",
      "kun": ""
    },
    {
      "ID": 280,
      "character": "度",
      "keyWords": "DEGREE ・ TIME",
      "on": "ド ・ ト ・ タク",
      "kun": "たび"
    },
    {
      "ID": 281,
      "character": "渡",
      "keyWords": "CROSS",
      "on": "ト",
      "kun": "わた.る ・ -わた.る ・ わた.す"
    },
    {
      "ID": 282,
      "character": "限",
      "keyWords": "LIMIT",
      "on": "ゲン",
      "kun": "かぎ.る ・ かぎ.り ・ -かぎ.り"
    },
    {
      "ID": 283,
      "character": "銀",
      "keyWords": "SILVER",
      "on": "ギン",
      "kun": ""
    },
    {
      "ID": 284,
      "character": "根",
      "keyWords": "ROOT",
      "on": "コン",
      "kun": "ね ・ -ね"
    },
    {
      "ID": 285,
      "character": "良",
      "keyWords": "GOOD",
      "on": "リョウ",
      "kun": "よ.い ・ -よ.い ・ い.い*"
    },
    {
      "ID": 286,
      "character": "郎",
      "keyWords": "YOUNG MAN ・ MALE NAME SUFFIX",
      "on": "ロウ",
      "kun": ""
    },
    {
      "ID": 287,
      "character": "廊",
      "keyWords": "CORRIDOR",
      "on": "ロウ",
      "kun": ""
    },
    {
      "ID": 288,
      "character": "食",
      "keyWords": "EAT ・ FOOD",
      "on": "ショク ・ ジキ",
      "kun": "く.う ・ く.らう ・ た.べる"
    },
    {
      "ID": 289,
      "character": "飲",
      "keyWords": "DRINK",
      "on": "イン",
      "kun": "の.む"
    },
    {
      "ID": 290,
      "character": "官",
      "keyWords": "GOVERNMENT ・ GOVERNMENT OFFICIAL",
      "on": "カン",
      "kun": ""
    },
    {
      "ID": 291,
      "character": "館",
      "keyWords": "PUBLIC BUILDING",
      "on": "カン",
      "kun": "やかた"
    },
    {
      "ID": 292,
      "character": "宿",
      "keyWords": "LODGE",
      "on": "シュク",
      "kun": "やど ・ やど.る ・ やど.す"
    },
    {
      "ID": 293,
      "character": "犬",
      "keyWords": "DOG",
      "on": "ケン",
      "kun": "いぬ ・ いぬ-"
    },
    {
      "ID": 294,
      "character": "太",
      "keyWords": "GREAT ・ THICK",
      "on": "タイ ・ タ",
      "kun": "ふと.い ・ ふと.る"
    },
    {
      "ID": 295,
      "character": "器",
      "keyWords": "VESSEL ・ INSTRUMENT",
      "on": "キ",
      "kun": "うつわ"
    },
    {
      "ID": 296,
      "character": "凶",
      "keyWords": "MISFORTUNE ・ EVIL",
      "on": "キョウ",
      "kun": ""
    },
    {
      "ID": 297,
      "character": "区",
      "keyWords": "DIVIDE INTO SECTIONS ・ DISTRICT ・ WARD",
      "on": "ク",
      "kun": ""
    },
    {
      "ID": 298,
      "character": "図",
      "keyWords": "DRAWING",
      "on": "ズ ・ ト",
      "kun": "はか.る"
    },
    {
      "ID": 299,
      "character": "番",
      "keyWords": "NUMERICAL ORDER ・ WATCH",
      "on": "バン",
      "kun": ""
    },
    {
      "ID": 300,
      "character": "号",
      "keyWords": "NUMBER ・ DESIGNATION ・ SIGN",
      "on": "ゴウ",
      "kun": ""
    },
    {
      "ID": 301,
      "character": "品",
      "keyWords": "ARTICLE ・ GRADE OF EXCELLENCE ・ CLASSIFICATION",
      "on": "ヒン",
      "kun": "しな"
    },
    {
      "ID": 302,
      "character": "楽",
      "keyWords": "PLEASURE ・ COMFORTABLE ・ MUSIC",
      "on": "ガク ・ ラク",
      "kun": "たの.しい ・ たの.しむ"
    },
    {
      "ID": 303,
      "character": "薬",
      "keyWords": "DRUG",
      "on": "ヤク",
      "kun": "くすり"
    },
    {
      "ID": 304,
      "character": "周",
      "keyWords": "PERIPHERY",
      "on": "シュウ",
      "kun": "まわ.り"
    },
    {
      "ID": 305,
      "character": "週",
      "keyWords": "WEEK",
      "on": "シュウ",
      "kun": ""
    },
    {
      "ID": 306,
      "character": "調",
      "keyWords": "TONE ・ INVESTIGATE ・ PREPARE",
      "on": "チョウ",
      "kun": "しら.べる ・ しら.べ ・ ととの.う ・ ととの.える"
    },
    {
      "ID": 307,
      "character": "束",
      "keyWords": "TIE UP ・ BUNDLE",
      "on": "ソク",
      "kun": "たば ・ たば.ねる ・ つか*"
    },
    {
      "ID": 308,
      "character": "整",
      "keyWords": "PUT IN ORDER",
      "on": "セイ",
      "kun": "ととの.える ・ ととの.う"
    },
    {
      "ID": 309,
      "character": "数",
      "keyWords": "NUMBER",
      "on": "スウ ・ ス",
      "kun": "かず ・ かぞ.える"
    },
    {
      "ID": 310,
      "character": "類",
      "keyWords": "KIND",
      "on": "ルイ",
      "kun": "たぐい"
    },
    {
      "ID": 311,
      "character": "示",
      "keyWords": "SHOW",
      "on": "ジ ・ シ",
      "kun": "しめ.す"
    },
    {
      "ID": 312,
      "character": "禁",
      "keyWords": "PROHIBIT",
      "on": "キン",
      "kun": ""
    },
    {
      "ID": 313,
      "character": "礼",
      "keyWords": "ETIQUETTE ・ RITE",
      "on": "レイ ・ ライ",
      "kun": ""
    },
    {
      "ID": 314,
      "character": "社",
      "keyWords": "COMPANY ・ SOCIETY ・ SHINTO SHRINE",
      "on": "シャ",
      "kun": "やしろ"
    },
    {
      "ID": 315,
      "character": "申",
      "keyWords": "REPORT ・ SPEAK HUMBLY",
      "on": "シン",
      "kun": "もうす ・ もうし-"
    },
    {
      "ID": 316,
      "character": "神",
      "keyWords": "GOD",
      "on": "シン ・ ジン",
      "kun": "かみ ・ かん- ・ こう-"
    },
    {
      "ID": 317,
      "character": "員",
      "keyWords": "MEMBER",
      "on": "イン",
      "kun": ""
    },
    {
      "ID": 318,
      "character": "質",
      "keyWords": "QUALITY ・ MATTER ・ PAWN",
      "on": "シツ ・ シチ ・ チ",
      "kun": ""
    },
    {
      "ID": 319,
      "character": "党",
      "keyWords": "PARTY",
      "on": "トウ",
      "kun": ""
    },
    {
      "ID": 320,
      "character": "堂",
      "keyWords": "HALL",
      "on": "ドウ",
      "kun": ""
    },
    {
      "ID": 321,
      "character": "常",
      "keyWords": "NORMAL ・ REGULAR",
      "on": "ジョウ",
      "kun": "つね ・ とこ-"
    },
    {
      "ID": 322,
      "character": "賞",
      "keyWords": "PRIZE",
      "on": "ショウ",
      "kun": ""
    },
    {
      "ID": 323,
      "character": "償",
      "keyWords": "RECOMPENSE",
      "on": "ショウ",
      "kun": "つぐな.う"
    },
    {
      "ID": 324,
      "character": "掌",
      "keyWords": "PALM OF ONE'S HAND ・ TAKE CHARGE OF",
      "on": "ショウ",
      "kun": "てのひら*"
    },
    {
      "ID": 325,
      "character": "覚",
      "keyWords": "PERCEIVE ・ WAKE UP ・ COMMIT TO MEMORY",
      "on": "カク",
      "kun": "おぼ.える ・ さ.ます ・ さ.める ・ さと.る**"
    },
    {
      "ID": 326,
      "character": "悟",
      "keyWords": "AWAKE TO",
      "on": "ゴ",
      "kun": "さと.る"
    },
    {
      "ID": 327,
      "character": "感",
      "keyWords": "SENSE",
      "on": "カン",
      "kun": ""
    },
    {
      "ID": 328,
      "character": "央",
      "keyWords": "CENTER",
      "on": "オウ",
      "kun": ""
    },
    {
      "ID": 329,
      "character": "映",
      "keyWords": "REFLECT ・ PROJECT",
      "on": "エイ",
      "kun": "うつ.る ・ うつ.す ・ は.える ・ -ば.え"
    },
    {
      "ID": 330,
      "character": "決",
      "keyWords": "DECIDE",
      "on": "ケツ",
      "kun": "き.める ・ -ぎ.め ・ き.まる"
    },
    {
      "ID": 331,
      "character": "快",
      "keyWords": "PLEASANT",
      "on": "カイ",
      "kun": "こころよ.い"
    },
    {
      "ID": 332,
      "character": "英",
      "keyWords": "DISTINGUISHED ・ ENGLAND",
      "on": "エイ",
      "kun": ""
    },
    {
      "ID": 333,
      "character": "並",
      "keyWords": "LINE UP",
      "on": "ヘイ",
      "kun": "なみ ・ な.み ・ なら.べる ・ なら.ぶ ・ なら.びに"
    },
    {
      "ID": 334,
      "character": "平",
      "keyWords": "FLAT ・ CALM",
      "on": "ヘイ ・ ビョウ",
      "kun": "たい.ら ・ -だいら ・ ひら ・ ひら-"
    },
    {
      "ID": 335,
      "character": "半",
      "keyWords": "HALF",
      "on": "ハン",
      "kun": "なか.ば"
    },
    {
      "ID": 336,
      "character": "馬",
      "keyWords": "HORSE",
      "on": "バ",
      "kun": "うま ・ うま- ・ ま"
    },
    {
      "ID": 337,
      "character": "尺",
      "keyWords": "<SHAKU> (30.3cm)",
      "on": "シャク",
      "kun": ""
    },
    {
      "ID": 338,
      "character": "尽",
      "keyWords": "EXHAUST",
      "on": "ジン",
      "kun": "つ.くす ・ -つ.くす ・ -ず.くし ・ つ.きる ・ つ.かす"
    },
    {
      "ID": 339,
      "character": "駅",
      "keyWords": "STATION",
      "on": "エキ",
      "kun": ""
    },
    {
      "ID": 340,
      "character": "鳥",
      "keyWords": "BIRD",
      "on": "チョウ",
      "kun": "とり"
    },
    {
      "ID": 341,
      "character": "島",
      "keyWords": "ISLAND",
      "on": "トウ",
      "kun": "しま"
    },
    {
      "ID": 342,
      "character": "角",
      "keyWords": "ANGLE ・ HORN",
      "on": "カク",
      "kun": "かど ・ つの"
    },
    {
      "ID": 343,
      "character": "虫",
      "keyWords": "INSECT",
      "on": "チュウ",
      "kun": "むし"
    },
    {
      "ID": 344,
      "character": "触",
      "keyWords": "TOUCH",
      "on": "ショク",
      "kun": "ふ.れる ・ さわ.る"
    },
    {
      "ID": 345,
      "character": "解",
      "keyWords": "TAKE APART ・ DISSOLVE ・ CLARIFY",
      "on": "カイ ・ ゲ",
      "kun": "と.く ・ と.かす ・ と.ける"
    },
    {
      "ID": 346,
      "character": "独",
      "keyWords": "ALONE",
      "on": "ドク",
      "kun": "ひと.り"
    },
    {
      "ID": 347,
      "character": "店",
      "keyWords": "SHOP",
      "on": "テン",
      "kun": "みせ"
    },
    {
      "ID": 348,
      "character": "占",
      "keyWords": "OCCUPY ・ DIVINE",
      "on": "セン",
      "kun": "し.める ・ うらな.う"
    },
    {
      "ID": 349,
      "character": "点",
      "keyWords": "POINT",
      "on": "テン",
      "kun": ""
    },
    {
      "ID": 350,
      "character": "士",
      "keyWords": "MILITARY MAN ・ MAN OF LEARNING",
      "on": "シ",
      "kun": ""
    },
    {
      "ID": 351,
      "character": "商",
      "keyWords": "TRADE",
      "on": "ショウ",
      "kun": "あきな.う"
    },
    {
      "ID": 352,
      "character": "買",
      "keyWords": "BUY",
      "on": "バイ",
      "kun": "か.う"
    },
    {
      "ID": 353,
      "character": "売",
      "keyWords": "SELL",
      "on": "バイ",
      "kun": "う.る ・ う.れる"
    },
    {
      "ID": 354,
      "character": "続",
      "keyWords": "CONTINUE",
      "on": "ゾク",
      "kun": "つず.く ・ つず.ける"
    },
    {
      "ID": 355,
      "character": "読",
      "keyWords": "READ",
      "on": "ドク ・ トク ・ トウ",
      "kun": "よ.む ・ -よ.み"
    },
    {
      "ID": 356,
      "character": "共",
      "keyWords": "JOINT",
      "on": "キョウ",
      "kun": "とも ・ とも.に ・ -ども"
    },
    {
      "ID": 357,
      "character": "供",
      "keyWords": "OFFER",
      "on": "キョウ ・ ク",
      "kun": "そな.える ・ とも ・ -ども"
    },
    {
      "ID": 358,
      "character": "洪",
      "keyWords": "FLOOD",
      "on": "コウ",
      "kun": ""
    },
    {
      "ID": 359,
      "character": "昔",
      "keyWords": "FORMER TIMES",
      "on": "セキ ・ シャク",
      "kun": "むかし"
    },
    {
      "ID": 360,
      "character": "冬",
      "keyWords": "WINTER",
      "on": "トウ",
      "kun": "ふゆ"
    },
    {
      "ID": 361,
      "character": "寒",
      "keyWords": "COLD",
      "on": "カン",
      "kun": "さむ.い"
    },
    {
      "ID": 362,
      "character": "春",
      "keyWords": "SPRING",
      "on": "シュン",
      "kun": "はる"
    },
    {
      "ID": 363,
      "character": "夏",
      "keyWords": "SUMMER",
      "on": "カ ・ ゲ",
      "kun": "なつ"
    },
    {
      "ID": 364,
      "character": "秋",
      "keyWords": "AUTUMN",
      "on": "シュウ",
      "kun": "あき"
    },
    {
      "ID": 365,
      "character": "主",
      "keyWords": "MAIN ・ LORD",
      "on": "シュ ・ ス",
      "kun": "ぬし ・ おも ・ あるじ*"
    },
    {
      "ID": 366,
      "character": "住",
      "keyWords": "LIVE",
      "on": "ジュウ",
      "kun": "す.む ・ す.まう ・ -ず.まい"
    },
    {
      "ID": 367,
      "character": "駐",
      "keyWords": "STATIONED",
      "on": "チュウ",
      "kun": ""
    },
    {
      "ID": 368,
      "character": "注",
      "keyWords": "POUR ・ CONCENTRATE",
      "on": "チュウ",
      "kun": "そそ.ぐ"
    },
    {
      "ID": 369,
      "character": "志",
      "keyWords": "AMBITION",
      "on": "シ",
      "kun": "こころざ.す ・ こころざし"
    },
    {
      "ID": 370,
      "character": "誌",
      "keyWords": "MAGAZINE",
      "on": "シ",
      "kun": ""
    },
    {
      "ID": 371,
      "character": "仕",
      "keyWords": "SERVE ・ DO",
      "on": "シ ・ ジ",
      "kun": "つか.える"
    },
    {
      "ID": 372,
      "character": "任",
      "keyWords": "OFFICE ・ ENTRUST",
      "on": "ニン",
      "kun": "まか.せる ・ まか.す"
    },
    {
      "ID": 373,
      "character": "支",
      "keyWords": "BRANCH ・ SUPPORT ・ BE OBSTRUCTED",
      "on": "シ",
      "kun": "ささ.える ・ つか.える ・ か.う"
    },
    {
      "ID": 374,
      "character": "反",
      "keyWords": "COUNTER",
      "on": "ハン ・ ホン ・ タン",
      "kun": "そ.る ・ そ.らす"
    },
    {
      "ID": 375,
      "character": "坂",
      "keyWords": "SLOPE",
      "on": "ハン",
      "kun": "さか"
    },
    {
      "ID": 376,
      "character": "阪",
      "keyWords": "SLOPE",
      "on": "ハン",
      "kun": "さか"
    },
    {
      "ID": 377,
      "character": "飯",
      "keyWords": "COOKED RICE ・ MEAL",
      "on": "ハン",
      "kun": "めし"
    },
    {
      "ID": 378,
      "character": "返",
      "keyWords": "RETURN",
      "on": "ヘン",
      "kun": "かえ.す ・ -かえ.す ・ かえ.る ・ -かえ.る"
    },
    {
      "ID": 379,
      "character": "雑",
      "keyWords": "MISCELLANEOUS ・ MIXED",
      "on": "ザツ ・ ゾウ",
      "kun": ""
    },
    {
      "ID": 380,
      "character": "乱",
      "keyWords": "DISORDERED",
      "on": "ラン",
      "kun": "みだ.れる ・ みだ.る ・ みだ.す"
    },
    {
      "ID": 381,
      "character": "寸",
      "keyWords": "A BIT OF ・ <SUN> (3.03cm)",
      "on": "スン",
      "kun": ""
    },
    {
      "ID": 382,
      "character": "寺",
      "keyWords": "BUDDHIST TEMPLE",
      "on": "ジ",
      "kun": "てら"
    },
    {
      "ID": 383,
      "character": "時",
      "keyWords": "TIME",
      "on": "ジ",
      "kun": "とき ・ -どき"
    },
    {
      "ID": 384,
      "character": "持",
      "keyWords": "HOLD",
      "on": "ジ",
      "kun": "も.つ ・ -も.ち ・ も.てる"
    },
    {
      "ID": 385,
      "character": "特",
      "keyWords": "SPECIAL",
      "on": "トク",
      "kun": ""
    },
    {
      "ID": 386,
      "character": "待",
      "keyWords": "WAIT",
      "on": "タイ",
      "kun": "ま.つ ・ -ま.ち"
    },
    {
      "ID": 387,
      "character": "得",
      "keyWords": "ACQUIRE ・ GAIN",
      "on": "トク",
      "kun": "え.る ・ う.る"
    },
    {
      "ID": 388,
      "character": "侍",
      "keyWords": "ATTEND UPON ・ SAMURAI",
      "on": "ジ",
      "kun": "さむらい"
    },
    {
      "ID": 389,
      "character": "詩",
      "keyWords": "POETRY",
      "on": "シ",
      "kun": ""
    },
    {
      "ID": 390,
      "character": "即",
      "keyWords": "IMMEDIATE ・ NAMELY",
      "on": "ソク",
      "kun": "すなわ.ち*"
    },
    {
      "ID": 391,
      "character": "節",
      "keyWords": "JOINT ・ INTERVAL ・ SEASON OF THE YEAR",
      "on": "セツ ・ セチ",
      "kun": "ふし ・ -ぶし"
    },
    {
      "ID": 392,
      "character": "筋",
      "keyWords": "MUSCLE ・ THREADLIKE STRUCTURE",
      "on": "キン",
      "kun": "すじ"
    },
    {
      "ID": 393,
      "character": "等",
      "keyWords": "EQUAL ・ CLASS",
      "on": "トウ",
      "kun": "ひと.しい ・ -ら* ・ など*"
    },
    {
      "ID": 394,
      "character": "均",
      "keyWords": "EQUAL",
      "on": "キン",
      "kun": ""
    },
    {
      "ID": 395,
      "character": "季",
      "keyWords": "SEASON",
      "on": "キ",
      "kun": ""
    },
    {
      "ID": 396,
      "character": "委",
      "keyWords": "COMMIT",
      "on": "イ",
      "kun": "ゆだ.ねる"
    },
    {
      "ID": 397,
      "character": "穴",
      "keyWords": "HOLE",
      "on": "ケツ",
      "kun": "あな"
    },
    {
      "ID": 398,
      "character": "空",
      "keyWords": "SKY ・ AIR ・ EMPTY",
      "on": "クウ",
      "kun": "そら ・ あ.く ・ あ.き ・ あ.ける ・ から ・ むな.しい* ・ す.く*"
    },
    {
      "ID": 399,
      "character": "友",
      "keyWords": "FRIEND",
      "on": "ユウ",
      "kun": "とも"
    },
    {
      "ID": 400,
      "character": "有",
      "keyWords": "HAVE",
      "on": "ユウ ・ ウ",
      "kun": "あ.る"
    },
    {
      "ID": 401,
      "character": "左",
      "keyWords": "LEFT",
      "on": "サ",
      "kun": "ひだり"
    },
    {
      "ID": 402,
      "character": "右",
      "keyWords": "RIGHT",
      "on": "ウ ・ ユウ",
      "kun": "みぎ"
    },
    {
      "ID": 403,
      "character": "石",
      "keyWords": "STONE",
      "on": "セキ ・ シャク ・ コク",
      "kun": "いし"
    },
    {
      "ID": 404,
      "character": "若",
      "keyWords": "YOUNG",
      "on": "ジャク ・ ニャク",
      "kun": "わか.い ・ わか- ・ も.しくわ ・ も.し*"
    },
    {
      "ID": 405,
      "character": "苦",
      "keyWords": "SUFFERING ・ BITTER",
      "on": "ク",
      "kun": "くる.しい ・ -ぐる.しい ・ くる.しむ ・ くる.しめる ・ にが.い ・ にが.る"
    },
    {
      "ID": 406,
      "character": "在",
      "keyWords": "BE",
      "on": "ザイ",
      "kun": "あ.る"
    },
    {
      "ID": 407,
      "character": "存",
      "keyWords": "EXIST",
      "on": "ソン ・ ゾン",
      "kun": ""
    },
    {
      "ID": 408,
      "character": "干",
      "keyWords": "DRY",
      "on": "カン",
      "kun": "ほ.す ・ ほ.し- ・ -ぼ.し ・ ひ.る"
    },
    {
      "ID": 409,
      "character": "刊",
      "keyWords": "PUBLISH",
      "on": "カン",
      "kun": ""
    },
    {
      "ID": 410,
      "character": "汗",
      "keyWords": "SWEAT",
      "on": "カン",
      "kun": "あせ"
    },
    {
      "ID": 411,
      "character": "竿",
      "keyWords": "POLE",
      "on": "カン",
      "kun": "さお"
    },
    {
      "ID": 412,
      "character": "利",
      "keyWords": "ADVANTAGE ・ PROFIT",
      "on": "リ",
      "kun": "き.く"
    },
    {
      "ID": 413,
      "character": "害",
      "keyWords": "HARM",
      "on": "ガイ",
      "kun": ""
    },
    {
      "ID": 414,
      "character": "益",
      "keyWords": "BENEFIT",
      "on": "エキ ・ ヤク",
      "kun": "ま.す*"
    },
    {
      "ID": 415,
      "character": "溢",
      "keyWords": "SPILL OVER",
      "on": "イツ",
      "kun": "あふ.れる ・ こぼ.れる ・ こぼ.す"
    },
    {
      "ID": 416,
      "character": "割",
      "keyWords": "DIVIDE",
      "on": "カツ",
      "kun": "わ.る ・ わり ・ わ.り ・ わ.れる ・ さ.く"
    },
    {
      "ID": 417,
      "character": "憲",
      "keyWords": "CONSTITUTION",
      "on": "ケン",
      "kun": ""
    },
    {
      "ID": 418,
      "character": "羽",
      "keyWords": "FEATHER ・ WING",
      "on": "ウ",
      "kun": "は ・ は ・ はね"
    },
    {
      "ID": 419,
      "character": "翌",
      "keyWords": "THE FOLLOWING",
      "on": "ヨク",
      "kun": ""
    },
    {
      "ID": 420,
      "character": "習",
      "keyWords": "LEARN ・ CUSTOM",
      "on": "シュウ",
      "kun": "なら.う ・ なら.い"
    },
    {
      "ID": 421,
      "character": "弓",
      "keyWords": "BOW",
      "on": "キュウ",
      "kun": "ゆみ"
    },
    {
      "ID": 422,
      "character": "引",
      "keyWords": "DRAW ・ REDUCE",
      "on": "イン",
      "kun": "ひ.く ・ ひ.き ・ ひ.き- ・ -び.き ・ ひ.ける"
    },
    {
      "ID": 423,
      "character": "強",
      "keyWords": "STRONG",
      "on": "キョウ ・ ゴウ",
      "kun": "つよ.い ・ つよ.まる ・ つよ.める ・ し.いる"
    },
    {
      "ID": 424,
      "character": "弱",
      "keyWords": "WEAK",
      "on": "ジャク",
      "kun": "よわ.い ・ よわ.る ・ よわ.まる ・ よわ.める"
    },
    {
      "ID": 425,
      "character": "風",
      "keyWords": "WIND ・ MANNER",
      "on": "フウ ・ フ",
      "kun": "かぜ ・ かざ- ・ -かぜ"
    },
    {
      "ID": 426,
      "character": "己",
      "keyWords": "ONESELF",
      "on": "コ ・ キ",
      "kun": "おのれ"
    },
    {
      "ID": 427,
      "character": "記",
      "keyWords": "WRITE DOWN",
      "on": "キ",
      "kun": "しる.す"
    },
    {
      "ID": 428,
      "character": "紀",
      "keyWords": "ERA ・ DISCIPLINE",
      "on": "キ",
      "kun": ""
    },
    {
      "ID": 429,
      "character": "改",
      "keyWords": "REFORM",
      "on": "カイ",
      "kun": "あらた.める ・ あらた.まる"
    },
    {
      "ID": 430,
      "character": "起",
      "keyWords": "RISE",
      "on": "キ",
      "kun": "お.きる ・ お.こる ・ お.こす ・"
    },
    {
      "ID": 431,
      "character": "姓",
      "keyWords": "SURNAME",
      "on": "セイ ・ ショウ",
      "kun": ""
    },
    {
      "ID": 432,
      "character": "由",
      "keyWords": "REASON",
      "on": "ユ ・ ユウ ・ ユイ",
      "kun": "よし"
    },
    {
      "ID": 433,
      "character": "油",
      "keyWords": "OIL",
      "on": "ユ",
      "kun": "あぶら"
    },
    {
      "ID": 434,
      "character": "井",
      "keyWords": "WELL",
      "on": "セイ ・ ショウ",
      "kun": "い"
    },
    {
      "ID": 435,
      "character": "囲",
      "keyWords": "ENCLOSE",
      "on": "イ",
      "kun": "かこ.む ・ かこ.う ・ かこ.い"
    },
    {
      "ID": 436,
      "character": "丼",
      "keyWords": "BOWL",
      "on": "ドン",
      "kun": "どんぶり"
    },
    {
      "ID": 437,
      "character": "丁",
      "keyWords": "TOWN SUBSECTION ・ MISCELLANEOUS COUNTER",
      "on": "チョウ ・ テイ",
      "kun": ""
    },
    {
      "ID": 438,
      "character": "寧",
      "keyWords": "COURTEOUS",
      "on": "ネイ",
      "kun": ""
    },
    {
      "ID": 439,
      "character": "町",
      "keyWords": "TOWN",
      "on": "チョウ",
      "kun": "まち"
    },
    {
      "ID": 440,
      "character": "灯",
      "keyWords": "LAMP",
      "on": "トウ",
      "kun": "ひ"
    },
    {
      "ID": 441,
      "character": "庁",
      "keyWords": "GOVERNMENT AGENCY",
      "on": "チョウ",
      "kun": ""
    },
    {
      "ID": 442,
      "character": "貯",
      "keyWords": "STORE UP",
      "on": "チョ",
      "kun": ""
    },
    {
      "ID": 443,
      "character": "易",
      "keyWords": "EASY ・ EXCHANGE ・ FORTUNETELLING",
      "on": "エキ ・ イ",
      "kun": "やさ.しい ・ やす.い*"
    },
    {
      "ID": 444,
      "character": "賜",
      "keyWords": "DEIGN TO GIVE",
      "on": "シ",
      "kun": "たまわ.る"
    },
    {
      "ID": 445,
      "character": "場",
      "keyWords": "PLACE",
      "on": "ジョウ",
      "kun": "ば"
    },
    {
      "ID": 446,
      "character": "湯",
      "keyWords": "HOT WATER",
      "on": "トウ",
      "kun": "ゆ"
    },
    {
      "ID": 447,
      "character": "門",
      "keyWords": "GATE",
      "on": "モン",
      "kun": "かど"
    },
    {
      "ID": 448,
      "character": "間",
      "keyWords": "SPACE IN BETWEEN",
      "on": "カン ・ ケン",
      "kun": "あいだ ・ ま"
    },
    {
      "ID": 449,
      "character": "閉",
      "keyWords": "CLOSE",
      "on": "ヘイ",
      "kun": "と.じる ・ と.ざす ・ し.める ・ し.まる"
    },
    {
      "ID": 450,
      "character": "開",
      "keyWords": "OPEN",
      "on": "カイ",
      "kun": "ひら.く ・ ひら.き ・ -び.らき ・ ひら.ける ・ あ.く ・ あ.ける"
    },
    {
      "ID": 451,
      "character": "関",
      "keyWords": "CONNECT WITH ・ BARRIER",
      "on": "カン",
      "kun": "せき ・ -ぜき ・ かか.わる"
    },
    {
      "ID": 452,
      "character": "問",
      "keyWords": "QUESTION",
      "on": "モン",
      "kun": "と.う ・ と.い ・ とん"
    },
    {
      "ID": 453,
      "character": "聞",
      "keyWords": "HEAR",
      "on": "ブン ・ モン",
      "kun": "き.く ・ き.こえる"
    },
    {
      "ID": 454,
      "character": "訪",
      "keyWords": "VISIT",
      "on": "ホウ",
      "kun": "おとず.れる ・ たず.ねる"
    },
    {
      "ID": 455,
      "character": "送",
      "keyWords": "SEND",
      "on": "ソウ",
      "kun": "おく.る"
    },
    {
      "ID": 456,
      "character": "券",
      "keyWords": "TICKET ・ CERTIFICATE",
      "on": "ケン",
      "kun": ""
    },
    {
      "ID": 457,
      "character": "包",
      "keyWords": "WRAP ・ ENCOMPASS",
      "on": "ホウ",
      "kun": "つつ.む"
    },
    {
      "ID": 458,
      "character": "巻",
      "keyWords": "ROLL UP ・ VOLUME",
      "on": "カン",
      "kun": "ま.く ・ まき ・ ま.き"
    },
    {
      "ID": 459,
      "character": "圏",
      "keyWords": "SPHERE",
      "on": "ケン",
      "kun": ""
    },
    {
      "ID": 460,
      "character": "勝",
      "keyWords": "WIN ・ EXCEL",
      "on": "ショウ",
      "kun": "か.つ ・ -が.ち ・ まさ.る"
    },
    {
      "ID": 461,
      "character": "戦",
      "keyWords": "WAR",
      "on": "セン",
      "kun": "いくさ ・ たたか.う"
    },
    {
      "ID": 462,
      "character": "単",
      "keyWords": "SINGLE",
      "on": "タン",
      "kun": ""
    },
    {
      "ID": 463,
      "character": "簡",
      "keyWords": "SIMPLE",
      "on": "カン",
      "kun": ""
    },
    {
      "ID": 464,
      "character": "過",
      "keyWords": "PASS BY ・ EXCEED",
      "on": "カ",
      "kun": "す.ぎる ・ -す.ぎる ・ -す.ぎ ・ す.ごす ・ あやま.つ ・ あやま.ち"
    },
    {
      "ID": 465,
      "character": "骨",
      "keyWords": "BONE",
      "on": "コツ",
      "kun": "ほね"
    },
    {
      "ID": 466,
      "character": "昼",
      "keyWords": "DAYTIME",
      "on": "チュウ",
      "kun": "ひる"
    },
    {
      "ID": 467,
      "character": "夜",
      "keyWords": "NIGHT",
      "on": "ヤ",
      "kun": "よ ・ よる"
    },
    {
      "ID": 468,
      "character": "液",
      "keyWords": "LIQUID",
      "on": "エキ",
      "kun": ""
    },
    {
      "ID": 469,
      "character": "戒",
      "keyWords": "CAUTION",
      "on": "カイ",
      "kun": "いまし.める"
    },
    {
      "ID": 470,
      "character": "幾",
      "keyWords": "HOW MANY ・ SOME",
      "on": "キ",
      "kun": "いく- ・ いく.つ ・ いく.ら"
    },
    {
      "ID": 471,
      "character": "畿",
      "keyWords": "CAPITAL REGION",
      "on": "キ",
      "kun": ""
    },
    {
      "ID": 472,
      "character": "磯",
      "keyWords": "ROCKY BEACH",
      "on": "キ",
      "kun": "いそ"
    },
    {
      "ID": 473,
      "character": "機",
      "keyWords": "MACHINE ・ AIRCRAFT ・ OPPORTUNITY",
      "on": "キ",
      "kun": "はた"
    },
    {
      "ID": 474,
      "character": "械",
      "keyWords": "MECHANICAL CONTRIVANCE",
      "on": "カイ",
      "kun": ""
    },
    {
      "ID": 475,
      "character": "飛",
      "keyWords": "FLY",
      "on": "ヒ",
      "kun": "と.ぶ ・ と.ばす ・ -と.ばす"
    },
    {
      "ID": 476,
      "character": "氏",
      "keyWords": "FAMILY ・ COURTESY TITLE",
      "on": "シ",
      "kun": "うじ ・ -うじ"
    },
    {
      "ID": 477,
      "character": "民",
      "keyWords": "PEOPLE",
      "on": "ミン",
      "kun": "たみ"
    },
    {
      "ID": 478,
      "character": "紙",
      "keyWords": "PAPER",
      "on": "シ",
      "kun": "かみ"
    },
    {
      "ID": 479,
      "character": "低",
      "keyWords": "LOW",
      "on": "テイ",
      "kun": "ひく.い ・ ひく.める ・ ひく.まる"
    },
    {
      "ID": 480,
      "character": "抵",
      "keyWords": "RESIST",
      "on": "テイ",
      "kun": ""
    },
    {
      "ID": 481,
      "character": "邸",
      "keyWords": "STATELY RESIDENCE",
      "on": "テイ",
      "kun": ""
    },
    {
      "ID": 482,
      "character": "底",
      "keyWords": "BOTTOM",
      "on": "テイ",
      "kun": "そこ"
    },
    {
      "ID": 483,
      "character": "巨",
      "keyWords": "GIANT",
      "on": "キョ",
      "kun": ""
    },
    {
      "ID": 484,
      "character": "臣",
      "keyWords": "RETAINER",
      "on": "シン",
      "kun": ""
    },
    {
      "ID": 485,
      "character": "基",
      "keyWords": "BASE",
      "on": "キ",
      "kun": "もと ・ もとい"
    },
    {
      "ID": 486,
      "character": "期",
      "keyWords": "TERM ・ EXPECT",
      "on": "キ ・ ゴ",
      "kun": ""
    },
    {
      "ID": 487,
      "character": "毛",
      "keyWords": "HAIR",
      "on": "モウ",
      "kun": "け"
    },
    {
      "ID": 488,
      "character": "尾",
      "keyWords": "TAIL",
      "on": "ビ",
      "kun": "お"
    },
    {
      "ID": 489,
      "character": "育",
      "keyWords": "RAISE",
      "on": "イク",
      "kun": "そだ.つ ・ そだ.ち ・ そだ.てる ・ はぐく.む"
    },
    {
      "ID": 490,
      "character": "羊",
      "keyWords": "SHEEP",
      "on": "ヨウ",
      "kun": "ひつじ"
    },
    {
      "ID": 491,
      "character": "洋",
      "keyWords": "OCEAN ・ WESTERN",
      "on": "ヨウ",
      "kun": ""
    },
    {
      "ID": 492,
      "character": "魚",
      "keyWords": "FISH",
      "on": "ギョ",
      "kun": "うお ・ さかな ・ -ざかな"
    },
    {
      "ID": 493,
      "character": "鮮",
      "keyWords": "FRESH ・ VIVID",
      "on": "セン",
      "kun": "あざ.やか"
    },
    {
      "ID": 494,
      "character": "蘇",
      "keyWords": "REVIVE",
      "on": "ソ ・ ス",
      "kun": "よみがえ.る"
    },
    {
      "ID": 495,
      "character": "詳",
      "keyWords": "DETAILED",
      "on": "ショウ",
      "kun": "くわ.しい"
    },
    {
      "ID": 496,
      "character": "祥",
      "keyWords": "AUSPICIOUS",
      "on": "ショウ",
      "kun": ""
    },
    {
      "ID": 497,
      "character": "美",
      "keyWords": "BEAUTIFUL",
      "on": "ビ",
      "kun": "うつく.しい"
    },
    {
      "ID": 498,
      "character": "業",
      "keyWords": "WORK ・ BUSINESS ・ INDUSTRY",
      "on": "ギョウ ・ ゴウ",
      "kun": "わざ"
    },
    {
      "ID": 499,
      "character": "実",
      "keyWords": "REAL ・ FRUIT",
      "on": "ジツ",
      "kun": "み ・ みの.る"
    },
    {
      "ID": 500,
      "character": "養",
      "keyWords": "FOSTER",
      "on": "ヨウ",
      "kun": "やしな.う"
    },
    {
      "ID": 501,
      "character": "様",
      "keyWords": "MODE ・ FORMAL TITLE",
      "on": "ヨウ",
      "kun": "さま"
    },
    {
      "ID": 502,
      "character": "企",
      "keyWords": "SCHEME",
      "on": "キ",
      "kun": "くわだ.てる ・ たくら.み*"
    },
    {
      "ID": 503,
      "character": "曲",
      "keyWords": "MUSICAL COMPOSITION ・ CURVE",
      "on": "キョク",
      "kun": "ま.がる ・ ま.げる"
    },
    {
      "ID": 504,
      "character": "典",
      "keyWords": "STANDARD WORK ・ CANON",
      "on": "テン",
      "kun": ""
    },
    {
      "ID": 505,
      "character": "興",
      "keyWords": "RISE TO PROSPERITY ・ AMUSEMENT",
      "on": "コウ ・ キョウ",
      "kun": "おこ.る ・ おこ.す"
    },
    {
      "ID": 506,
      "character": "輿",
      "keyWords": "PALANQUIN",
      "on": "ヨ",
      "kun": "こし"
    },
    {
      "ID": 507,
      "character": "竜",
      "keyWords": "DRAGON",
      "on": "リュウ",
      "kun": "たつ"
    },
    {
      "ID": 508,
      "character": "滝",
      "keyWords": "WATERFALL",
      "on": "",
      "kun": "たき"
    },
    {
      "ID": 509,
      "character": "籠",
      "keyWords": "BASKET",
      "on": "ロウ",
      "kun": "かご ・ こ.める ・ こも.る"
    },
    {
      "ID": 510,
      "character": "辰",
      "keyWords": "THE DRAGON",
      "on": "シン",
      "kun": "たつ"
    },
    {
      "ID": 511,
      "character": "農",
      "keyWords": "FARMING",
      "on": "ノウ",
      "kun": ""
    },
    {
      "ID": 512,
      "character": "濃",
      "keyWords": "THICK",
      "on": "ノウ",
      "kun": "こ.い"
    },
    {
      "ID": 513,
      "character": "豊",
      "keyWords": "ABUNDANT",
      "on": "ホウ",
      "kun": "ゆたか"
    },
    {
      "ID": 514,
      "character": "吉",
      "keyWords": "LUCKY",
      "on": "キチ ・ キツ",
      "kun": ""
    },
    {
      "ID": 515,
      "character": "詰",
      "keyWords": "STUFF ・ REPRIMAND",
      "on": "キツ",
      "kun": "つ.める ・ つ.め ・ -ず.め ・ つ.まる ・ つ.む"
    },
    {
      "ID": 516,
      "character": "結",
      "keyWords": "TIE ・ CONCLUDE",
      "on": "ケツ",
      "kun": "むす.ぶ ・ ゆ.う ・ ゆ.わえる"
    },
    {
      "ID": 517,
      "character": "投",
      "keyWords": "THROW ・ SEND IN",
      "on": "トウ",
      "kun": "な.げる ・ -な.げ"
    },
    {
      "ID": 518,
      "character": "役",
      "keyWords": "SERVICE",
      "on": "ヤク ・ エキ",
      "kun": ""
    },
    {
      "ID": 519,
      "character": "没",
      "keyWords": "SINK",
      "on": "ボツ",
      "kun": ""
    },
    {
      "ID": 520,
      "character": "設",
      "keyWords": "SET UP",
      "on": "セツ",
      "kun": "もう.ける"
    },
    {
      "ID": 521,
      "character": "段",
      "keyWords": "STEP",
      "on": "ダン",
      "kun": ""
    },
    {
      "ID": 522,
      "character": "殺",
      "keyWords": "KILL",
      "on": "サツ ・ サイ ・ セツ",
      "kun": "ころ.す ・ -ごろ.し"
    },
    {
      "ID": 523,
      "character": "刹",
      "keyWords": "TEMPLE",
      "on": "サツ ・ セツ",
      "kun": ""
    },
    {
      "ID": 524,
      "character": "刈",
      "keyWords": "CLIP",
      "on": "",
      "kun": "か.る"
    },
    {
      "ID": 525,
      "character": "絵",
      "keyWords": "PICTURE",
      "on": "カイ ・ エ",
      "kun": ""
    },
    {
      "ID": 526,
      "character": "給",
      "keyWords": "SUPPLY ・ PAY",
      "on": "キュウ",
      "kun": ""
    },
    {
      "ID": 527,
      "character": "巴",
      "keyWords": "CIRCULAR COMMA PATTERN",
      "on": "ハ",
      "kun": "ともえ"
    },
    {
      "ID": 528,
      "character": "色",
      "keyWords": "COLOR ・ EROS",
      "on": "ショク ・ シキ",
      "kun": "いろ"
    },
    {
      "ID": 529,
      "character": "声",
      "keyWords": "VOICE",
      "on": "セイ ・ ショウ",
      "kun": "こえ ・ こわ-"
    },
    {
      "ID": 530,
      "character": "眉",
      "keyWords": "EYEBROW",
      "on": "ビ ・ ミ",
      "kun": "まゆ"
    },
    {
      "ID": 531,
      "character": "里",
      "keyWords": "VILLAGE ・ LEAGUE",
      "on": "リ",
      "kun": "さと"
    },
    {
      "ID": 532,
      "character": "理",
      "keyWords": "REASON ・ BASIC PRINCIPLE ・ MANAGE",
      "on": "リ",
      "kun": ""
    },
    {
      "ID": 533,
      "character": "埋",
      "keyWords": "BURY",
      "on": "マイ",
      "kun": "う.める ・ う.まる ・ う.もれる"
    },
    {
      "ID": 534,
      "character": "野",
      "keyWords": "FIELD ・ WILD",
      "on": "ヤ",
      "kun": "の ・ の-"
    },
    {
      "ID": 535,
      "character": "黒",
      "keyWords": "BLACK",
      "on": "コク",
      "kun": "くろ ・ くろ.い"
    },
    {
      "ID": 536,
      "character": "墨",
      "keyWords": "INDIA INK",
      "on": "ボク",
      "kun": "すみ"
    },
    {
      "ID": 537,
      "character": "童",
      "keyWords": "CHILD",
      "on": "ドウ",
      "kun": "わらべ"
    },
    {
      "ID": 538,
      "character": "量",
      "keyWords": "QUANTITY",
      "on": "リョウ",
      "kun": "はか.る"
    },
    {
      "ID": 539,
      "character": "重",
      "keyWords": "HEAVY ・ PILE ON TOP OF",
      "on": "ジュウ ・ チョウ",
      "kun": "え ・ おも.い ・ おも.り ・ かさ.ねる ・ かさ.なる"
    },
    {
      "ID": 540,
      "character": "動",
      "keyWords": "MOVE",
      "on": "ドウ",
      "kun": "うご.く ・ うご.かす"
    },
    {
      "ID": 541,
      "character": "働",
      "keyWords": "WORK",
      "on": "ドウ",
      "kun": "はたら.く"
    },
    {
      "ID": 542,
      "character": "労",
      "keyWords": "LABOR",
      "on": "ロウ",
      "kun": ""
    },
    {
      "ID": 543,
      "character": "協",
      "keyWords": "COOPERATE",
      "on": "キョウ",
      "kun": ""
    },
    {
      "ID": 544,
      "character": "種",
      "keyWords": "VARIETY ・ SEED",
      "on": "シュ",
      "kun": "たね"
    },
    {
      "ID": 545,
      "character": "亜",
      "keyWords": "SUB- ・ PHONETIC [A]",
      "on": "ア",
      "kun": ""
    },
    {
      "ID": 546,
      "character": "悪",
      "keyWords": "BAD",
      "on": "アク ・ オ",
      "kun": "わる.い ・ わる- ・ あ.し*"
    },
    {
      "ID": 547,
      "character": "要",
      "keyWords": "IMPORTANT ・ SUMMARIZE ・ REQUIRE",
      "on": "ヨウ",
      "kun": "い.る ・ かなめ"
    },
    {
      "ID": 548,
      "character": "価",
      "keyWords": "PRICE ・ VALUE",
      "on": "カ",
      "kun": "あたい"
    },
    {
      "ID": 549,
      "character": "必",
      "keyWords": "WITHOUT FAIL",
      "on": "ヒツ",
      "kun": "かなら.ず"
    },
    {
      "ID": 550,
      "character": "証",
      "keyWords": "PROVE ・ CERTIFICATE",
      "on": "ショウ",
      "kun": "あか.し*"
    },
    {
      "ID": 551,
      "character": "歪",
      "keyWords": "DISTORT",
      "on": "ワイ ・ エ",
      "kun": "ゆが.む ・ ゆが.み ・ ゆが.める ・ ひず.む ・ ひず.み ・ いびつ"
    },
    {
      "ID": 552,
      "character": "否",
      "keyWords": "SAY NO ・ OR NOT",
      "on": "ヒ",
      "kun": "いな"
    },
    {
      "ID": 553,
      "character": "処",
      "keyWords": "DEAL WITH",
      "on": "ショ",
      "kun": ""
    },
    {
      "ID": 554,
      "character": "拠",
      "keyWords": "GROUNDS",
      "on": "キョ ・ コ",
      "kun": ""
    },
    {
      "ID": 555,
      "character": "計",
      "keyWords": "PLAN ・ COMPUTE",
      "on": "ケイ",
      "kun": "はか.る ・ はか.らう"
    },
    {
      "ID": 556,
      "character": "針",
      "keyWords": "NEEDLE",
      "on": "シン",
      "kun": "はり"
    },
    {
      "ID": 557,
      "character": "総",
      "keyWords": "WHOLE ・ GENERAL",
      "on": "ソウ",
      "kun": ""
    },
    {
      "ID": 558,
      "character": "窓",
      "keyWords": "WINDOW",
      "on": "ソウ",
      "kun": "まど"
    },
    {
      "ID": 559,
      "character": "矢",
      "keyWords": "ARROW",
      "on": "シ",
      "kun": "や"
    },
    {
      "ID": 560,
      "character": "知",
      "keyWords": "KNOW",
      "on": "チ",
      "kun": "し.る ・ し.らせる ・ し.れる"
    },
    {
      "ID": 561,
      "character": "医",
      "keyWords": "MEDICINE ・ DOCTOR",
      "on": "イ",
      "kun": ""
    },
    {
      "ID": 562,
      "character": "短",
      "keyWords": "SHORT",
      "on": "タン",
      "kun": "みじか.い"
    },
    {
      "ID": 563,
      "character": "失",
      "keyWords": "LOSE ・ SLIP",
      "on": "シツ",
      "kun": "うしな.う"
    },
    {
      "ID": 564,
      "character": "鉄",
      "keyWords": "IRON",
      "on": "テツ",
      "kun": ""
    },
    {
      "ID": 565,
      "character": "夫",
      "keyWords": "HUSBAND ・ MAN LABORER",
      "on": "フ ・ フウ ・ ブ*",
      "kun": "おっと"
    },
    {
      "ID": 566,
      "character": "朱",
      "keyWords": "VERMILION",
      "on": "シュ",
      "kun": ""
    },
    {
      "ID": 567,
      "character": "株",
      "keyWords": "STOCK",
      "on": "",
      "kun": "かぶ"
    },
    {
      "ID": 568,
      "character": "族",
      "keyWords": "FAMILY",
      "on": "ゾク",
      "kun": ""
    },
    {
      "ID": 569,
      "character": "旅",
      "keyWords": "TRAVEL",
      "on": "リョ",
      "kun": "たび"
    },
    {
      "ID": 570,
      "character": "遊",
      "keyWords": "PLAY ・ TOUR",
      "on": "ユウ ・ ユ",
      "kun": "あそ.ぶ ・ あそ.ばす"
    },
    {
      "ID": 571,
      "character": "施",
      "keyWords": "EXECUTE ・ BESTOW",
      "on": "シ ・ セ",
      "kun": "ほどこ.す"
    },
    {
      "ID": 572,
      "character": "旋",
      "keyWords": "GYRATE",
      "on": "セン",
      "kun": ""
    },
    {
      "ID": 573,
      "character": "旗",
      "keyWords": "FLAG",
      "on": "キ",
      "kun": "はた"
    },
    {
      "ID": 574,
      "character": "放",
      "keyWords": "LET GO",
      "on": "ホウ",
      "kun": "はな.す ・ -.っぱな.し ・ はな.つ ・ はな.れる ・ ほう.る"
    },
    {
      "ID": 575,
      "character": "激",
      "keyWords": "VIOLENT ・ AROUSE",
      "on": "ゲキ",
      "kun": "はげ.しい"
    },
    {
      "ID": 576,
      "character": "牧",
      "keyWords": "PASTURE",
      "on": "ボク",
      "kun": "まき"
    },
    {
      "ID": 577,
      "character": "位",
      "keyWords": "RANK ・ POSITION",
      "on": "イ",
      "kun": "くらい ・ ぐらい"
    },
    {
      "ID": 578,
      "character": "泣",
      "keyWords": "CRY",
      "on": "キュウ",
      "kun": "な.く"
    },
    {
      "ID": 579,
      "character": "笑",
      "keyWords": "LAUGH",
      "on": "ショウ",
      "kun": "わら.う ・ え.む"
    },
    {
      "ID": 580,
      "character": "専",
      "keyWords": "EXCLUSIVELY",
      "on": "セン",
      "kun": "もっぱ.ら"
    },
    {
      "ID": 581,
      "character": "恵",
      "keyWords": "FAVOR",
      "on": "ケイ ・ エ",
      "kun": "めぐ.む"
    },
    {
      "ID": 582,
      "character": "連",
      "keyWords": "LINK ・ IN SUCCESSION",
      "on": "レン",
      "kun": "つら.なる ・ つら.ねる ・ つ.れる ・ -ず.れ"
    },
    {
      "ID": 583,
      "character": "軍",
      "keyWords": "ARMY",
      "on": "グン",
      "kun": ""
    },
    {
      "ID": 584,
      "character": "運",
      "keyWords": "CARRY ・ MOVE ・ FORTUNE",
      "on": "ウン",
      "kun": "はこ.ぶ"
    },
    {
      "ID": 585,
      "character": "蓮",
      "keyWords": "LOTUS",
      "on": "レン",
      "kun": "はす ・ はちす"
    },
    {
      "ID": 586,
      "character": "隊",
      "keyWords": "PARTY",
      "on": "タイ",
      "kun": ""
    },
    {
      "ID": 587,
      "character": "呈",
      "keyWords": "PRESENT",
      "on": "テイ",
      "kun": ""
    },
    {
      "ID": 588,
      "character": "程",
      "keyWords": "EXTENT ・ ESTABLISHED FORM",
      "on": "テイ",
      "kun": "ほど ・ -ほど"
    },
    {
      "ID": 589,
      "character": "聖",
      "keyWords": "HOLY ・ SAINT",
      "on": "セイ",
      "kun": ""
    },
    {
      "ID": 590,
      "character": "丑",
      "keyWords": "THE OX",
      "on": "チュウ",
      "kun": "うし"
    },
    {
      "ID": 591,
      "character": "紐",
      "keyWords": "STRING",
      "on": "チュウ ・ ジュウ",
      "kun": "ひも"
    },
    {
      "ID": 592,
      "character": "革",
      "keyWords": "LEATHER ・ REFORM",
      "on": "カク",
      "kun": "かわ"
    },
    {
      "ID": 593,
      "character": "靴",
      "keyWords": "SHOES",
      "on": "カ",
      "kun": "くつ"
    },
    {
      "ID": 594,
      "character": "鞄",
      "keyWords": "SUITCASE",
      "on": "ホウ",
      "kun": "かばん"
    },
    {
      "ID": 595,
      "character": "皮",
      "keyWords": "SKIN",
      "on": "ヒ",
      "kun": "かわ"
    },
    {
      "ID": 596,
      "character": "破",
      "keyWords": "BREAK",
      "on": "ハ",
      "kun": "やぶ.る ・ やぶ.れる"
    },
    {
      "ID": 597,
      "character": "彼",
      "keyWords": "THIRD PERSON PRONOUN",
      "on": "ヒ",
      "kun": "かれ ・ かの"
    },
    {
      "ID": 598,
      "character": "波",
      "keyWords": "WAVE",
      "on": "ハ",
      "kun": "なみ"
    },
    {
      "ID": 599,
      "character": "果",
      "keyWords": "FRUIT ・ ACCOMPLISH",
      "on": "カ",
      "kun": "はた.す ・ -はた.す ・ は.てる ・ -は.てる ・ は.て"
    },
    {
      "ID": 600,
      "character": "課",
      "keyWords": "ASSIGNMENT ・ ASSIGN",
      "on": "カ",
      "kun": ""
    },
    {
      "ID": 601,
      "character": "巣",
      "keyWords": "NEST",
      "on": "ソウ",
      "kun": "す"
    },
    {
      "ID": 602,
      "character": "菓",
      "keyWords": "CONFECTIONERY",
      "on": "カ",
      "kun": ""
    },
    {
      "ID": 603,
      "character": "茶",
      "keyWords": "TEA",
      "on": "チャ ・ サ",
      "kun": ""
    },
    {
      "ID": 604,
      "character": "世",
      "keyWords": "WORLD ・ AGE",
      "on": "セイ ・ セ",
      "kun": "よ"
    },
    {
      "ID": 605,
      "character": "葉",
      "keyWords": "LEAF",
      "on": "ヨウ",
      "kun": "は"
    },
    {
      "ID": 606,
      "character": "棄",
      "keyWords": "ABANDON",
      "on": "キ",
      "kun": "すて.る"
    },
    {
      "ID": 607,
      "character": "緑",
      "keyWords": "GREEN",
      "on": "リョク ・ ロク",
      "kun": "みどり"
    },
    {
      "ID": 608,
      "character": "録",
      "keyWords": "RECORD",
      "on": "ロク",
      "kun": ""
    },
    {
      "ID": 609,
      "character": "剝",
      "keyWords": "STRIP OFF",
      "on": "ハク",
      "kun": "は.げる ・ は.がれる ・ は.ぐ ・ は.がす ・ む.ける* ・ む.く*"
    },
    {
      "ID": 610,
      "character": "縁",
      "keyWords": "RELATION ・ EDGE",
      "on": "エン ・ -ネン",
      "kun": "ふち"
    },
    {
      "ID": 611,
      "character": "介",
      "keyWords": "MEDIATE",
      "on": "カイ",
      "kun": ""
    },
    {
      "ID": 612,
      "character": "界",
      "keyWords": "WORLD ・ BOUNDS",
      "on": "カイ",
      "kun": ""
    },
    {
      "ID": 613,
      "character": "浮",
      "keyWords": "FLOATING",
      "on": "フ",
      "kun": "う.く ・ う.かれる ・ う.かぶ ・ う.かべる"
    },
    {
      "ID": 614,
      "character": "将",
      "keyWords": "GENERAL OFFICER",
      "on": "ショウ",
      "kun": ""
    },
    {
      "ID": 615,
      "character": "奨",
      "keyWords": "ENCOURAGE",
      "on": "ショウ",
      "kun": ""
    },
    {
      "ID": 616,
      "character": "状",
      "keyWords": "FORM ・ CONDITION ・ LETTER",
      "on": "ジョウ",
      "kun": ""
    },
    {
      "ID": 617,
      "character": "病",
      "keyWords": "ILLNESS",
      "on": "ビョウ ・ ヘイ",
      "kun": "や.む ・ -や.み ・ やまい"
    },
    {
      "ID": 618,
      "character": "症",
      "keyWords": "PATHOLOGICAL CONDITION",
      "on": "ショウ",
      "kun": ""
    },
    {
      "ID": 619,
      "character": "痛",
      "keyWords": "PAIN ・ ACUTE",
      "on": "ツウ",
      "kun": "いた.い ・ いた.む ・ いた.ましい ・ いた.める"
    },
    {
      "ID": 620,
      "character": "憶",
      "keyWords": "REMEMBER",
      "on": "オク",
      "kun": ""
    },
    {
      "ID": 621,
      "character": "臆",
      "keyWords": "FEEL TIMID",
      "on": "オク",
      "kun": ""
    },
    {
      "ID": 622,
      "character": "億",
      "keyWords": "HUNDRED MILLION",
      "on": "オク",
      "kun": ""
    },
    {
      "ID": 623,
      "character": "視",
      "keyWords": "LOOK AT",
      "on": "シ",
      "kun": ""
    },
    {
      "ID": 624,
      "character": "規",
      "keyWords": "REGULATION",
      "on": "キ",
      "kun": ""
    },
    {
      "ID": 625,
      "character": "則",
      "keyWords": "RULE",
      "on": "ソク",
      "kun": ""
    },
    {
      "ID": 626,
      "character": "側",
      "keyWords": "SIDE",
      "on": "ソク",
      "kun": "がわ"
    },
    {
      "ID": 627,
      "character": "測",
      "keyWords": "MEASURE ・ CONJECTURE",
      "on": "ソク",
      "kun": "はか.る"
    },
    {
      "ID": 628,
      "character": "考",
      "keyWords": "THINK",
      "on": "コウ",
      "kun": "かんが.える ・ かんが.え"
    },
    {
      "ID": 629,
      "character": "老",
      "keyWords": "OLD",
      "on": "ロウ",
      "kun": "お.いる ・ ふ.ける"
    },
    {
      "ID": 630,
      "character": "孝",
      "keyWords": "FILIAL PIETY",
      "on": "コウ",
      "kun": ""
    },
    {
      "ID": 631,
      "character": "厚",
      "keyWords": "THICK ・ KIND",
      "on": "コウ",
      "kun": "あつ.い"
    },
    {
      "ID": 632,
      "character": "教",
      "keyWords": "TEACH ・ RELIGION",
      "on": "キョウ",
      "kun": "おし.える ・ おそ.わる"
    },
    {
      "ID": 633,
      "character": "完",
      "keyWords": "COMPLETE",
      "on": "カン",
      "kun": ""
    },
    {
      "ID": 634,
      "character": "院",
      "keyWords": "INSTITUTION",
      "on": "イン",
      "kun": ""
    },
    {
      "ID": 635,
      "character": "奈",
      "keyWords": "PHONETIC [NA]",
      "on": "ナ",
      "kun": ""
    },
    {
      "ID": 636,
      "character": "宗",
      "keyWords": "RELIGIOUS SECT",
      "on": "シュウ ・ ソウ",
      "kun": ""
    },
    {
      "ID": 637,
      "character": "祭",
      "keyWords": "FESTIVAL",
      "on": "サイ",
      "kun": "まつ.る ・ まつ.り ・ まつり"
    },
    {
      "ID": 638,
      "character": "際",
      "keyWords": "VERGE ・ OCCASION",
      "on": "サイ",
      "kun": "きわ ・ -ぎわ"
    },
    {
      "ID": 639,
      "character": "察",
      "keyWords": "INSPECT ・ GUESS",
      "on": "サツ",
      "kun": ""
    },
    {
      "ID": 640,
      "character": "祈",
      "keyWords": "PRAY",
      "on": "キ",
      "kun": "いの.る"
    },
    {
      "ID": 641,
      "character": "祖",
      "keyWords": "ANCESTOR",
      "on": "ソ",
      "kun": ""
    },
    {
      "ID": 642,
      "character": "助",
      "keyWords": "HELP",
      "on": "ジョ",
      "kun": "たす.ける ・ たす.かる ・ すけ"
    },
    {
      "ID": 643,
      "character": "仲",
      "keyWords": "INTERMEDIARY ・ PERSONAL RELATIONS",
      "on": "チュウ",
      "kun": "なか"
    },
    {
      "ID": 644,
      "character": "忠",
      "keyWords": "LOYALTY",
      "on": "チュウ",
      "kun": ""
    },
    {
      "ID": 645,
      "character": "沖",
      "keyWords": "OPEN SEA",
      "on": "チュウ",
      "kun": "おき"
    },
    {
      "ID": 646,
      "character": "保",
      "keyWords": "PRESERVE",
      "on": "ホ",
      "kun": "たも.つ"
    },
    {
      "ID": 647,
      "character": "呆",
      "keyWords": "DUMB",
      "on": "ホウ ・ ボウ",
      "kun": "あき.れる"
    },
    {
      "ID": 648,
      "character": "守",
      "keyWords": "PROTECT",
      "on": "シュ ・ ス",
      "kun": "まも.る ・ まも.り ・ もり ・ -もり"
    },
    {
      "ID": 649,
      "character": "団",
      "keyWords": "COLLECTIVE",
      "on": "ダン ・ トン",
      "kun": ""
    },
    {
      "ID": 650,
      "character": "対",
      "keyWords": "OPPOSITE ・ OPPOSE",
      "on": "タイ",
      "kun": "つい"
    },
    {
      "ID": 651,
      "character": "村",
      "keyWords": "VILLAGE",
      "on": "ソン",
      "kun": "むら"
    },
    {
      "ID": 652,
      "character": "才",
      "keyWords": "TALENT ・ -YEARS OLD",
      "on": "サイ",
      "kun": ""
    },
    {
      "ID": 653,
      "character": "財",
      "keyWords": "WEALTH",
      "on": "ザイ ・ サイ",
      "kun": ""
    },
    {
      "ID": 654,
      "character": "材",
      "keyWords": "TIMBER ・ MATERIAL",
      "on": "ザイ",
      "kun": ""
    },
    {
      "ID": 655,
      "character": "沈",
      "keyWords": "SINK",
      "on": "チン",
      "kun": "しず.む ・ しず.める"
    },
    {
      "ID": 656,
      "character": "枕",
      "keyWords": "PILLOW",
      "on": "",
      "kun": "まくら"
    },
    {
      "ID": 657,
      "character": "丈",
      "keyWords": "STATURE ・ STOUT",
      "on": "ジョウ",
      "kun": "たけ"
    },
    {
      "ID": 658,
      "character": "杖",
      "keyWords": "CANE",
      "on": "ジョウ",
      "kun": "つえ"
    },
    {
      "ID": 659,
      "character": "偉",
      "keyWords": "GREAT",
      "on": "イ",
      "kun": "えら.い"
    },
    {
      "ID": 660,
      "character": "緯",
      "keyWords": "LATITUDE",
      "on": "イ",
      "kun": ""
    },
    {
      "ID": 661,
      "character": "衛",
      "keyWords": "GUARD",
      "on": "エイ",
      "kun": ""
    },
    {
      "ID": 662,
      "character": "韓",
      "keyWords": "(SOUTH) KOREA",
      "on": "カン",
      "kun": ""
    },
    {
      "ID": 663,
      "character": "違",
      "keyWords": "DIFFER ・ VIOLATE",
      "on": "イ",
      "kun": "ちが.う ・ ちが.い ・ ちが.える ・ -ちが.える"
    },
    {
      "ID": 664,
      "character": "抱",
      "keyWords": "HOLD",
      "on": "ホウ",
      "kun": "だ.く ・ いだ.く ・ かか.える"
    },
    {
      "ID": 665,
      "character": "砲",
      "keyWords": "HEAVY GUN",
      "on": "ホウ",
      "kun": ""
    },
    {
      "ID": 666,
      "character": "泡",
      "keyWords": "BUBBLE",
      "on": "ホウ",
      "kun": "あわ"
    },
    {
      "ID": 667,
      "character": "丹",
      "keyWords": "CINNABAR RED",
      "on": "タン",
      "kun": ""
    },
    {
      "ID": 668,
      "character": "舟",
      "keyWords": "SMALL BOAT",
      "on": "シュウ",
      "kun": "ふね ・ ふな- ・ -ぶね"
    },
    {
      "ID": 669,
      "character": "船",
      "keyWords": "SHIP",
      "on": "セン",
      "kun": "ふね ・ ふな- ・ -ぶね"
    },
    {
      "ID": 670,
      "character": "舶",
      "keyWords": "OCEANGOING SHIP",
      "on": "ハク",
      "kun": ""
    },
    {
      "ID": 671,
      "character": "般",
      "keyWords": "SORT",
      "on": "ハン",
      "kun": ""
    },
    {
      "ID": 672,
      "character": "搬",
      "keyWords": "CARRY",
      "on": "ハン",
      "kun": ""
    },
    {
      "ID": 673,
      "character": "盤",
      "keyWords": "DISK ・ BOARD",
      "on": "バン",
      "kun": ""
    },
    {
      "ID": 674,
      "character": "歯",
      "keyWords": "TOOTH",
      "on": "シ",
      "kun": "は"
    },
    {
      "ID": 675,
      "character": "冷",
      "keyWords": "COLD",
      "on": "レイ",
      "kun": "つめ.たい ・ ひ.える ・ ひ.や ・ ひ.ややか ・ ひ.やす ・ ひ.やかす ・ さ.める ・ さ.ます"
    },
    {
      "ID": 676,
      "character": "齢",
      "keyWords": "AGE",
      "on": "レイ",
      "kun": ""
    },
    {
      "ID": 677,
      "character": "少",
      "keyWords": "LITTLE",
      "on": "ショウ",
      "kun": "すく.ない ・ すこ.し"
    },
    {
      "ID": 678,
      "character": "砂",
      "keyWords": "SAND",
      "on": "サ ・ シャ",
      "kun": "すな"
    },
    {
      "ID": 679,
      "character": "歩",
      "keyWords": "WALK",
      "on": "ホ ・ ブ ・ フ",
      "kun": "ある.く ・ あゆ.む"
    },
    {
      "ID": 680,
      "character": "渉",
      "keyWords": "HAVE RELATIONS WITH",
      "on": "ショウ",
      "kun": ""
    },
    {
      "ID": 681,
      "character": "省",
      "keyWords": "MINISTRY ・ SAVE ・ INTROSPECT",
      "on": "セイ ・ ショウ",
      "kun": "かえり.みる ・ はぶ.く"
    },
    {
      "ID": 682,
      "character": "相",
      "keyWords": "ASPECT ・ MUTUAL ・ MINISTER",
      "on": "ソウ ・ ショウ",
      "kun": "あい-"
    },
    {
      "ID": 683,
      "character": "想",
      "keyWords": "CONCEIVE",
      "on": "ソウ ・ ソ",
      "kun": ""
    },
    {
      "ID": 684,
      "character": "称",
      "keyWords": "APPELLATION",
      "on": "ショウ",
      "kun": ""
    },
    {
      "ID": 685,
      "character": "弥",
      "keyWords": "PHONETIC [MI] ・ PHONETIC [YA]",
      "on": "ミ",
      "kun": "いや* ・ や*"
    },
    {
      "ID": 686,
      "character": "互",
      "keyWords": "RECIPROCAL",
      "on": "ゴ",
      "kun": "たが.い"
    },
    {
      "ID": 687,
      "character": "務",
      "keyWords": "DUTY",
      "on": "ム",
      "kun": "つと.める ・ つと.まる"
    },
    {
      "ID": 688,
      "character": "柔",
      "keyWords": "SOFT",
      "on": "ジュウ ・ ニュウ",
      "kun": "やわ.らか ・ やわ.らかい"
    },
    {
      "ID": 689,
      "character": "軟",
      "keyWords": "SOFT",
      "on": "ナン",
      "kun": "やわ.らか ・ やわ.らかい"
    },
    {
      "ID": 690,
      "character": "軌",
      "keyWords": "TRACK",
      "on": "キ",
      "kun": ""
    },
    {
      "ID": 691,
      "character": "軒",
      "keyWords": "EAVES ・ COUNTER FOR HOUSES",
      "on": "ケン",
      "kun": "のき"
    },
    {
      "ID": 692,
      "character": "軸",
      "keyWords": "AXLE ・ AXIS",
      "on": "ジク",
      "kun": ""
    },
    {
      "ID": 693,
      "character": "較",
      "keyWords": "COMPARE",
      "on": "カク",
      "kun": ""
    },
    {
      "ID": 694,
      "character": "庫",
      "keyWords": "STORAGE CHAMBER",
      "on": "コ ・ ク",
      "kun": ""
    },
    {
      "ID": 695,
      "character": "蔵",
      "keyWords": "STORE",
      "on": "ゾウ",
      "kun": "くら"
    },
    {
      "ID": 696,
      "character": "倉",
      "keyWords": "STOREHOUSE",
      "on": "ソウ",
      "kun": "くら"
    },
    {
      "ID": 697,
      "character": "創",
      "keyWords": "CREATE",
      "on": "ソウ",
      "kun": "つく.る"
    },
    {
      "ID": 698,
      "character": "告",
      "keyWords": "NOTIFY ・ ACCUSE",
      "on": "コク",
      "kun": "つ.げる"
    },
    {
      "ID": 699,
      "character": "造",
      "keyWords": "MAKE",
      "on": "ゾウ",
      "kun": "つく.る ・ つく.り ・ -ずくり"
    },
    {
      "ID": 700,
      "character": "衣",
      "keyWords": "GARMENT",
      "on": "イ ・ エ*",
      "kun": "ころも"
    },
    {
      "ID": 701,
      "character": "依",
      "keyWords": "DEPEND ON",
      "on": "イ ・ エ",
      "kun": ""
    },
    {
      "ID": 702,
      "character": "袋",
      "keyWords": "BAG",
      "on": "タイ",
      "kun": "ふくろ"
    },
    {
      "ID": 703,
      "character": "褒",
      "keyWords": "COMMEND",
      "on": "ホウ",
      "kun": "ほ.める"
    },
    {
      "ID": 704,
      "character": "裏",
      "keyWords": "REAR",
      "on": "リ",
      "kun": "うら"
    },
    {
      "ID": 705,
      "character": "表",
      "keyWords": "EXPRESS ・ SURFACE ・ TABLE",
      "on": "ヒョウ",
      "kun": "おもて ・ -おもて ・ あらわ.す ・ あらわ.れる"
    },
    {
      "ID": 706,
      "character": "現",
      "keyWords": "ACTUAL ・ APPEAR",
      "on": "ゲン",
      "kun": "あらわ.れる ・ あらわ.す"
    },
    {
      "ID": 707,
      "character": "著",
      "keyWords": "AUTHOR ・ CONSPICUOUS",
      "on": "チョ",
      "kun": "あらわ.す ・ いちじる.しい"
    },
    {
      "ID": 708,
      "character": "制",
      "keyWords": "SYSTEM ・ CONTROL",
      "on": "セイ",
      "kun": ""
    },
    {
      "ID": 709,
      "character": "製",
      "keyWords": "MANUFACTURE",
      "on": "セイ",
      "kun": ""
    },
    {
      "ID": 710,
      "character": "初",
      "keyWords": "FIRST",
      "on": "ショ",
      "kun": "はじ.め ・ はじ.めて ・ はつ ・ はつ- ・ うい- ・ -そ.める ・ -ぞ.め"
    },
    {
      "ID": 711,
      "character": "裸",
      "keyWords": "NAKED",
      "on": "ラ",
      "kun": "はだか"
    },
    {
      "ID": 712,
      "character": "難",
      "keyWords": "DIFFICULT ・ DISASTER ・ FAULT",
      "on": "ナン",
      "kun": "かた.い ・ -がた.い ・ むずか.しい"
    },
    {
      "ID": 713,
      "character": "准",
      "keyWords": "JUNIOR",
      "on": "ジュン",
      "kun": ""
    },
    {
      "ID": 714,
      "character": "準",
      "keyWords": "STANDARD ・ QUASI-",
      "on": "ジュン",
      "kun": ""
    },
    {
      "ID": 715,
      "character": "備",
      "keyWords": "PROVIDE",
      "on": "ビ",
      "kun": "そな.える ・ そな.わる"
    },
    {
      "ID": 716,
      "character": "死",
      "keyWords": "DIE",
      "on": "シ",
      "kun": "し.ぬ ・ し.に-"
    },
    {
      "ID": 717,
      "character": "葬",
      "keyWords": "FUNERAL",
      "on": "ソウ",
      "kun": "ほうむ.る"
    },
    {
      "ID": 718,
      "character": "列",
      "keyWords": "COLUMN",
      "on": "レツ",
      "kun": ""
    },
    {
      "ID": 719,
      "character": "烈",
      "keyWords": "VEHEMENT",
      "on": "レツ",
      "kun": ""
    },
    {
      "ID": 720,
      "character": "裂",
      "keyWords": "SPLIT",
      "on": "レツ",
      "kun": "さ.く ・ さ.ける"
    },
    {
      "ID": 721,
      "character": "例",
      "keyWords": "EXAMPLE",
      "on": "レイ",
      "kun": "たと.える"
    },
    {
      "ID": 722,
      "character": "刑",
      "keyWords": "PENALTY",
      "on": "ケイ",
      "kun": ""
    },
    {
      "ID": 723,
      "character": "型",
      "keyWords": "TYPE",
      "on": "ケイ",
      "kun": "かた ・ -がた"
    },
    {
      "ID": 724,
      "character": "研",
      "keyWords": "GRIND ・ RESEARCH",
      "on": "ケン",
      "kun": "と.ぐ"
    },
    {
      "ID": 725,
      "character": "厄",
      "keyWords": "MISFORTUNE",
      "on": "ヤク",
      "kun": ""
    },
    {
      "ID": 726,
      "character": "危",
      "keyWords": "DANGEROUS",
      "on": "キ",
      "kun": "あぶ.ない ・ あや.うい ・ あや.ぶむ"
    },
    {
      "ID": 727,
      "character": "範",
      "keyWords": "MODEL",
      "on": "ハン",
      "kun": ""
    },
    {
      "ID": 728,
      "character": "怨",
      "keyWords": "HOLD A GRUDGE",
      "on": "エン ・ オン",
      "kun": "うら.む* ・ うら.み* ・ うら.めしい*"
    },
    {
      "ID": 729,
      "character": "苑",
      "keyWords": "IMPERIAL GARDEN",
      "on": "エン ・ オン",
      "kun": "その"
    },
    {
      "ID": 730,
      "character": "宛",
      "keyWords": "ADDRESS",
      "on": "",
      "kun": "あ.てる ・ -あ.て ・ -あて"
    },
    {
      "ID": 731,
      "character": "碗",
      "keyWords": "BOWL",
      "on": "ワン",
      "kun": ""
    },
    {
      "ID": 732,
      "character": "腕",
      "keyWords": "ARM ・ ABILITY",
      "on": "ワン",
      "kun": "うで"
    },
    {
      "ID": 733,
      "character": "却",
      "keyWords": "ELIMINATE",
      "on": "キャク",
      "kun": ""
    },
    {
      "ID": 734,
      "character": "脚",
      "keyWords": "LEG",
      "on": "キャク ・ キャ",
      "kun": "あし"
    },
    {
      "ID": 735,
      "character": "犯",
      "keyWords": "OFFENSE",
      "on": "ハン",
      "kun": "おか.す"
    },
    {
      "ID": 736,
      "character": "狂",
      "keyWords": "CRAZY",
      "on": "キョウ",
      "kun": "くる.う ・ くる.おしい ・ くる.わす ・ くる.わせる"
    },
    {
      "ID": 737,
      "character": "獄",
      "keyWords": "PRISON",
      "on": "ゴク",
      "kun": ""
    },
    {
      "ID": 738,
      "character": "非",
      "keyWords": "IS NOT",
      "on": "ヒ",
      "kun": ""
    },
    {
      "ID": 739,
      "character": "排",
      "keyWords": "EXCLUDE ・ DISCHARGE",
      "on": "ハイ",
      "kun": ""
    },
    {
      "ID": 740,
      "character": "俳",
      "keyWords": "HAIKU",
      "on": "ハイ",
      "kun": ""
    },
    {
      "ID": 741,
      "character": "罪",
      "keyWords": "CRIME",
      "on": "ザイ",
      "kun": "つみ"
    },
    {
      "ID": 742,
      "character": "罰",
      "keyWords": "PUNISHMENT",
      "on": "バツ ・ バチ",
      "kun": ""
    },
    {
      "ID": 743,
      "character": "伴",
      "keyWords": "ACCOMPANY",
      "on": "ハン ・ バン",
      "kun": "ともな.う"
    },
    {
      "ID": 744,
      "character": "判",
      "keyWords": "JUDGE ・ PERSONAL SEAL",
      "on": "ハン ・ バン",
      "kun": ""
    },
    {
      "ID": 745,
      "character": "評",
      "keyWords": "COMMENT",
      "on": "ヒョウ",
      "kun": ""
    },
    {
      "ID": 746,
      "character": "批",
      "keyWords": "CRITICIZE",
      "on": "ヒ",
      "kun": ""
    },
    {
      "ID": 747,
      "character": "帥",
      "keyWords": "COMMANDER IN CHIEF",
      "on": "スイ",
      "kun": ""
    },
    {
      "ID": 748,
      "character": "師",
      "keyWords": "MASTER",
      "on": "シ",
      "kun": ""
    },
    {
      "ID": 749,
      "character": "座",
      "keyWords": "SEAT ・ SIT",
      "on": "ザ",
      "kun": "すわ.る"
    },
    {
      "ID": 750,
      "character": "坐",
      "keyWords": "SIT",
      "on": "ザ",
      "kun": "すわ.る"
    },
    {
      "ID": 751,
      "character": "卒",
      "keyWords": "GRADUATE ・ PRIVATE",
      "on": "ソツ",
      "kun": ""
    },
    {
      "ID": 752,
      "character": "率",
      "keyWords": "RATE ・ LEAD",
      "on": "ソツ ・ リツ",
      "kun": "ひき.いる"
    },
    {
      "ID": 753,
      "character": "傘",
      "keyWords": "UMBRELLA",
      "on": "サン",
      "kun": "かさ"
    },
    {
      "ID": 754,
      "character": "笠",
      "keyWords": "BAMBOO HAT",
      "on": "リュウ",
      "kun": "かさ"
    },
    {
      "ID": 755,
      "character": "星",
      "keyWords": "STAR",
      "on": "セイ ・ ショウ",
      "kun": "ほし ・ -ぼし"
    },
    {
      "ID": 756,
      "character": "汁",
      "keyWords": "JUICE ・ SOUP",
      "on": "ジュウ",
      "kun": "しる ・ -しる"
    },
    {
      "ID": 757,
      "character": "斗",
      "keyWords": "DIPPER ・ <TO> (18L)",
      "on": "ト",
      "kun": ""
    },
    {
      "ID": 758,
      "character": "料",
      "keyWords": "FEE ・ MATERIALS",
      "on": "リョウ",
      "kun": ""
    },
    {
      "ID": 759,
      "character": "科",
      "keyWords": "SUBJECT OF STUDY",
      "on": "カ",
      "kun": ""
    },
    {
      "ID": 760,
      "character": "然",
      "keyWords": "-LIKE ・ SO",
      "on": "ゼン ・ ネン",
      "kun": ""
    },
    {
      "ID": 761,
      "character": "燃",
      "keyWords": "BURN",
      "on": "ネン",
      "kun": "も.える ・ も.やす ・ も.す"
    },
    {
      "ID": 762,
      "character": "黙",
      "keyWords": "SILENT",
      "on": "モク",
      "kun": "だま.る"
    },
    {
      "ID": 763,
      "character": "獣",
      "keyWords": "BEAST",
      "on": "ジュウ",
      "kun": "けもの"
    },
    {
      "ID": 764,
      "character": "猟",
      "keyWords": "HUNTING",
      "on": "リョウ",
      "kun": ""
    },
    {
      "ID": 765,
      "character": "漁",
      "keyWords": "FISHING",
      "on": "ギョ ・ リョウ",
      "kun": ""
    },
    {
      "ID": 766,
      "character": "狩",
      "keyWords": "HUNT",
      "on": "シュ",
      "kun": "か.る ・ か.り ・ -が.り"
    },
    {
      "ID": 767,
      "character": "猛",
      "keyWords": "FEROCIOUS",
      "on": "モウ",
      "kun": ""
    },
    {
      "ID": 768,
      "character": "煙",
      "keyWords": "SMOKE",
      "on": "エン",
      "kun": "けむ.る ・ けむり ・ けむ.い"
    },
    {
      "ID": 769,
      "character": "焼",
      "keyWords": "BURN",
      "on": "ショウ",
      "kun": "や.く ・ や.き ・ や.き- ・ -や.き ・ や.ける"
    },
    {
      "ID": 770,
      "character": "暁",
      "keyWords": "DAWN",
      "on": "ギョウ",
      "kun": "あかつき"
    },
    {
      "ID": 771,
      "character": "旧",
      "keyWords": "FORMER",
      "on": "キュウ",
      "kun": ""
    },
    {
      "ID": 772,
      "character": "児",
      "keyWords": "CHILD",
      "on": "ジ ・ ニ",
      "kun": ""
    },
    {
      "ID": 773,
      "character": "亦",
      "keyWords": "ALSO",
      "on": "エキ",
      "kun": "また"
    },
    {
      "ID": 774,
      "character": "赤",
      "keyWords": "RED",
      "on": "セキ ・ シャク",
      "kun": "あか ・ あか- ・ あか.い ・ あか.らむ ・ あか.らめる"
    },
    {
      "ID": 775,
      "character": "変",
      "keyWords": "CHANGE ・ ABNORMAL",
      "on": "ヘン",
      "kun": "か.わる ・ か.わり ・ か.える"
    },
    {
      "ID": 776,
      "character": "蛮",
      "keyWords": "BARBARIAN",
      "on": "バン",
      "kun": ""
    },
    {
      "ID": 777,
      "character": "恋",
      "keyWords": "LOVE",
      "on": "レン",
      "kun": "こ.う ・ こい ・ こい.しい"
    },
    {
      "ID": 778,
      "character": "愛",
      "keyWords": "LOVE",
      "on": "アイ",
      "kun": "いと.しい*"
    },
    {
      "ID": 779,
      "character": "憂",
      "keyWords": "BE ANXIOUS ・ GRIEF",
      "on": "ユウ",
      "kun": "うれ.える ・ うれ.い ・ う.い ・ う.き"
    },
    {
      "ID": 780,
      "character": "優",
      "keyWords": "SUPERIOR ・ ACTOR ・ KIND",
      "on": "ユウ",
      "kun": "やさ.しい ・ すぐ.れる"
    },
    {
      "ID": 781,
      "character": "栗",
      "keyWords": "CHESTNUT",
      "on": "リツ ・ リ",
      "kun": "くり"
    },
    {
      "ID": 782,
      "character": "票",
      "keyWords": "SLIP OF PAPER ・ BALLOT",
      "on": "ヒョウ",
      "kun": ""
    },
    {
      "ID": 783,
      "character": "標",
      "keyWords": "MARK",
      "on": "ヒョウ",
      "kun": ""
    },
    {
      "ID": 784,
      "character": "漂",
      "keyWords": "DRIFT",
      "on": "ヒョウ",
      "kun": "ただよ.う"
    },
    {
      "ID": 785,
      "character": "遷",
      "keyWords": "TRANSFER",
      "on": "セン",
      "kun": ""
    },
    {
      "ID": 786,
      "character": "各",
      "keyWords": "EACH",
      "on": "カク",
      "kun": "おのおの"
    },
    {
      "ID": 787,
      "character": "客",
      "keyWords": "VISITOR ・ CUSTOMER",
      "on": "キャク ・ カク",
      "kun": ""
    },
    {
      "ID": 788,
      "character": "路",
      "keyWords": "ROAD",
      "on": "ロ",
      "kun": "-じ"
    },
    {
      "ID": 789,
      "character": "格",
      "keyWords": "NORM ・ STATUS ・ CHARACTER",
      "on": "カク ・ コウ",
      "kun": ""
    },
    {
      "ID": 790,
      "character": "絡",
      "keyWords": "INTERLINK ・ ENTWINE",
      "on": "ラク",
      "kun": "から.む ・ から.める ・ から.まる"
    },
    {
      "ID": 791,
      "character": "略",
      "keyWords": "LEAVE OUT ・ STRATEGY",
      "on": "リャク",
      "kun": ""
    },
    {
      "ID": 792,
      "character": "閣",
      "keyWords": "GRAND BUILDING ・ CABINET",
      "on": "カク",
      "kun": ""
    },
    {
      "ID": 793,
      "character": "落",
      "keyWords": "FALL",
      "on": "ラク",
      "kun": "お.ちる ・ お.ち ・ お.とす"
    },
    {
      "ID": 794,
      "character": "南",
      "keyWords": "SOUTH",
      "on": "ナン ・ ナ",
      "kun": "みなみ"
    },
    {
      "ID": 795,
      "character": "西",
      "keyWords": "WEST",
      "on": "セイ ・ サイ",
      "kun": "にし"
    },
    {
      "ID": 796,
      "character": "酉",
      "keyWords": "THE BIRD",
      "on": "ユウ",
      "kun": "とり"
    },
    {
      "ID": 797,
      "character": "酒",
      "keyWords": "ALCOHOLIC DRINK",
      "on": "シュ",
      "kun": "さけ ・ さか-"
    },
    {
      "ID": 798,
      "character": "洒",
      "keyWords": "SPRINKLE",
      "on": "シャ ・ サイ",
      "kun": ""
    },
    {
      "ID": 799,
      "character": "配",
      "keyWords": "DISTRIBUTE ・ PUT IN ORDER",
      "on": "ハイ",
      "kun": "くば.る"
    },
    {
      "ID": 800,
      "character": "酸",
      "keyWords": "ACID ・ OXYGEN",
      "on": "サン",
      "kun": "す.い"
    },
    {
      "ID": 801,
      "character": "猶",
      "keyWords": "DELAY",
      "on": "ユウ",
      "kun": ""
    },
    {
      "ID": 802,
      "character": "尊",
      "keyWords": "HONOR",
      "on": "ソン",
      "kun": "たっと.い ・ とうと.い ・ たっと.ぶ ・ とうと.ぶ"
    },
    {
      "ID": 803,
      "character": "遵",
      "keyWords": "OBEY",
      "on": "ジュン",
      "kun": ""
    },
    {
      "ID": 804,
      "character": "導",
      "keyWords": "GUIDE",
      "on": "ドウ",
      "kun": "みちび.く"
    },
    {
      "ID": 805,
      "character": "敬",
      "keyWords": "RESPECT",
      "on": "ケイ",
      "kun": "うやま.う"
    },
    {
      "ID": 806,
      "character": "警",
      "keyWords": "GUARD AGAINST ・ WARN",
      "on": "ケイ",
      "kun": ""
    },
    {
      "ID": 807,
      "character": "驚",
      "keyWords": "SURPRISE",
      "on": "キョウ",
      "kun": "おどろ.く ・ おどろ.かす"
    },
    {
      "ID": 808,
      "character": "散",
      "keyWords": "SCATTER",
      "on": "サン",
      "kun": "ち.る ・ ち.らす ・ -ち.らす ・ ち.らかす ・ ち.らかる ・ ち.らばる"
    },
    {
      "ID": 809,
      "character": "敢",
      "keyWords": "BOLDLY",
      "on": "カン",
      "kun": "あ.えて* ・ あ.えず*"
    },
    {
      "ID": 810,
      "character": "厳",
      "keyWords": "SEVERE ・ SOLEMN",
      "on": "ゲン ・ ゴン",
      "kun": "おごそ.か ・ きび.しい"
    },
    {
      "ID": 811,
      "character": "仏",
      "keyWords": "BUDDHA",
      "on": "ブツ ・ フツ*",
      "kun": "ほとけ"
    },
    {
      "ID": 812,
      "character": "払",
      "keyWords": "CLEAR AWAY ・ PAY",
      "on": "フツ",
      "kun": "はら.う ・ -はら.い ・ -ばら.い"
    },
    {
      "ID": 813,
      "character": "拡",
      "keyWords": "ENLARGE",
      "on": "カク",
      "kun": ""
    },
    {
      "ID": 814,
      "character": "可",
      "keyWords": "POSSIBLE ・ APPROVE",
      "on": "カ",
      "kun": ""
    },
    {
      "ID": 815,
      "character": "何",
      "keyWords": "WHAT ・ HOW MANY",
      "on": "カ",
      "kun": "なに ・ なん ・ なに- ・ なん-"
    },
    {
      "ID": 816,
      "character": "苛",
      "keyWords": "TORMENT",
      "on": "カ",
      "kun": "いじ.め* ・ いじ.める* ・ いら* ・ さいな.む*"
    },
    {
      "ID": 817,
      "character": "荷",
      "keyWords": "LOAD",
      "on": "カ",
      "kun": "に"
    },
    {
      "ID": 818,
      "character": "河",
      "keyWords": "RIVER",
      "on": "カ",
      "kun": "かわ"
    },
    {
      "ID": 819,
      "character": "阿",
      "keyWords": "PHONETIC [A]",
      "on": "ア",
      "kun": ""
    },
    {
      "ID": 820,
      "character": "司",
      "keyWords": "ADMINISTER",
      "on": "シ",
      "kun": ""
    },
    {
      "ID": 821,
      "character": "伺",
      "keyWords": "INQUIRE",
      "on": "シ",
      "kun": "うかが.う"
    },
    {
      "ID": 822,
      "character": "詞",
      "keyWords": "WORDS",
      "on": "シ",
      "kun": ""
    },
    {
      "ID": 823,
      "character": "飼",
      "keyWords": "RAISE ANIMALS",
      "on": "シ",
      "kun": "か.う"
    },
    {
      "ID": 824,
      "character": "冊",
      "keyWords": "COUNTER FOR BOOKS",
      "on": "サツ ・ サク",
      "kun": ""
    },
    {
      "ID": 825,
      "character": "嗣",
      "keyWords": "HEIR",
      "on": "シ",
      "kun": ""
    },
    {
      "ID": 826,
      "character": "覗",
      "keyWords": "PEEK",
      "on": "シ",
      "kun": "のぞ.く"
    },
    {
      "ID": 827,
      "character": "歌",
      "keyWords": "SONG ・ JAPANESE POEM",
      "on": "カ",
      "kun": "うた ・ うた.う"
    },
    {
      "ID": 828,
      "character": "唄",
      "keyWords": "DITTY",
      "on": "",
      "kun": "うた ・ うた.う"
    },
    {
      "ID": 829,
      "character": "負",
      "keyWords": "BEAR ・ LOSE",
      "on": "フ",
      "kun": "ま.ける ・ ま.かす ・ お.う"
    },
    {
      "ID": 830,
      "character": "敗",
      "keyWords": "BE DEFEATED",
      "on": "ハイ",
      "kun": "やぶ.れる"
    },
    {
      "ID": 831,
      "character": "責",
      "keyWords": "RESPONSIBILITY ・ BLAME",
      "on": "セキ",
      "kun": "せ.める"
    },
    {
      "ID": 832,
      "character": "積",
      "keyWords": "ACCUMULATE",
      "on": "セキ",
      "kun": "つ.む ・ -ずみ ・ つ.もる ・ つ.もり"
    },
    {
      "ID": 833,
      "character": "債",
      "keyWords": "DEBT ・ BOND",
      "on": "サイ",
      "kun": ""
    },
    {
      "ID": 834,
      "character": "漬",
      "keyWords": "PICKLE",
      "on": "",
      "kun": "つ.ける ・ つ.かる ・ -ず.け ・ -ずけ"
    },
    {
      "ID": 835,
      "character": "紡",
      "keyWords": "SPIN",
      "on": "ボウ",
      "kun": "つむ.ぐ"
    },
    {
      "ID": 836,
      "character": "績",
      "keyWords": "ACHIEVEMENTS",
      "on": "セキ",
      "kun": ""
    },
    {
      "ID": 837,
      "character": "具",
      "keyWords": "IMPLEMENT",
      "on": "グ",
      "kun": ""
    },
    {
      "ID": 838,
      "character": "真",
      "keyWords": "TRUE",
      "on": "シン",
      "kun": "ま ・ ま-"
    },
    {
      "ID": 839,
      "character": "直",
      "keyWords": "STRAIGHT ・ PUT STRAIGHT",
      "on": "チョク ・ ジキ ・ ジカ*",
      "kun": "ただ.ちに ・ なお.す ・ -なお.す ・ なお.る ・ す.ぐ*"
    },
    {
      "ID": 840,
      "character": "植",
      "keyWords": "PLANT",
      "on": "ショク",
      "kun": "う.える ・ う.わる"
    },
    {
      "ID": 841,
      "character": "殖",
      "keyWords": "MULTIPLY",
      "on": "ショク",
      "kun": "ふ.える ・ ふ.やす"
    },
    {
      "ID": 842,
      "character": "値",
      "keyWords": "VALUE",
      "on": "チ",
      "kun": "ね ・ あたい"
    },
    {
      "ID": 843,
      "character": "置",
      "keyWords": "PLACE",
      "on": "チ",
      "kun": "お.く ・ -お.き"
    },
    {
      "ID": 844,
      "character": "県",
      "keyWords": "PREFECTURE",
      "on": "ケン",
      "kun": ""
    },
    {
      "ID": 845,
      "character": "州",
      "keyWords": "STATE ・ SANDBAR",
      "on": "シュウ",
      "kun": "す"
    },
    {
      "ID": 846,
      "character": "洲",
      "keyWords": "SANDBAR",
      "on": "シュウ",
      "kun": "す"
    },
    {
      "ID": 847,
      "character": "接",
      "keyWords": "CONTACT",
      "on": "セツ",
      "kun": "つ.ぐ"
    },
    {
      "ID": 848,
      "character": "継",
      "keyWords": "SUCCEED",
      "on": "ケイ",
      "kun": "つ.ぐ"
    },
    {
      "ID": 849,
      "character": "断",
      "keyWords": "CUT OFF ・ DECIDE",
      "on": "ダン",
      "kun": "た.つ ・ ことわ.る"
    },
    {
      "ID": 850,
      "character": "応",
      "keyWords": "RESPOND TO",
      "on": "オウ",
      "kun": "こた.える"
    },
    {
      "ID": 851,
      "character": "床",
      "keyWords": "BED ・ FLOOR",
      "on": "ショウ",
      "kun": "とこ ・ ゆか"
    },
    {
      "ID": 852,
      "character": "麻",
      "keyWords": "HEMP ・ BECOME NUMB",
      "on": "マ",
      "kun": "あさ"
    },
    {
      "ID": 853,
      "character": "歴",
      "keyWords": "PERSONAL HISTORY",
      "on": "レキ",
      "kun": ""
    },
    {
      "ID": 854,
      "character": "暦",
      "keyWords": "CALENDAR",
      "on": "レキ",
      "kun": "こよみ"
    },
    {
      "ID": 855,
      "character": "臨",
      "keyWords": "ATTEND ・ CONFRONT",
      "on": "リン",
      "kun": "のぞ.む"
    },
    {
      "ID": 856,
      "character": "園",
      "keyWords": "GARDEN",
      "on": "エン",
      "kun": "その"
    },
    {
      "ID": 857,
      "character": "遠",
      "keyWords": "DISTANT",
      "on": "エン ・ オン",
      "kun": "とお.い"
    },
    {
      "ID": 858,
      "character": "与",
      "keyWords": "GIVE ・ TAKE PART IN",
      "on": "ヨ",
      "kun": "あた.える"
    },
    {
      "ID": 859,
      "character": "写",
      "keyWords": "COPY",
      "on": "シャ",
      "kun": "うつ.す ・ うつ.る"
    },
    {
      "ID": 860,
      "character": "移",
      "keyWords": "MOVE",
      "on": "イ",
      "kun": "うつ.る ・ うつ.す"
    },
    {
      "ID": 861,
      "character": "卸",
      "keyWords": "WHOLESALE",
      "on": "",
      "kun": "おろ.す ・ おろし ・ おろ.し"
    },
    {
      "ID": 862,
      "character": "御",
      "keyWords": "GENERAL HONORIFIC TERM",
      "on": "ギョ ・ ゴ",
      "kun": "おん- ・ お-* ・ み-*"
    },
    {
      "ID": 863,
      "character": "複",
      "keyWords": "COMPOUND",
      "on": "フク",
      "kun": ""
    },
    {
      "ID": 864,
      "character": "腹",
      "keyWords": "BELLY",
      "on": "フク",
      "kun": "はら ・ なか*"
    },
    {
      "ID": 865,
      "character": "復",
      "keyWords": "RETURN TO",
      "on": "フク",
      "kun": ""
    },
    {
      "ID": 866,
      "character": "往",
      "keyWords": "GO ON",
      "on": "オウ",
      "kun": ""
    },
    {
      "ID": 867,
      "character": "柱",
      "keyWords": "PILLAR",
      "on": "チュウ",
      "kun": "はしら"
    },
    {
      "ID": 868,
      "character": "征",
      "keyWords": "CONQUER",
      "on": "セイ",
      "kun": ""
    },
    {
      "ID": 869,
      "character": "従",
      "keyWords": "FOLLOW",
      "on": "ジュウ ・ ショウ ・ ジュ",
      "kun": "したが.う ・ したが.える"
    },
    {
      "ID": 870,
      "character": "徒",
      "keyWords": "FOLLOWER ・ FELLOW(S) ・ GOING ON FOOT",
      "on": "ト",
      "kun": ""
    },
    {
      "ID": 871,
      "character": "縦",
      "keyWords": "VERTICAL",
      "on": "ジュウ",
      "kun": "たて"
    },
    {
      "ID": 872,
      "character": "延",
      "keyWords": "EXTEND ・ POSTPONE",
      "on": "エン",
      "kun": "の.びる ・ の.べる ・ の.べ ・ の.ばす"
    },
    {
      "ID": 873,
      "character": "伸",
      "keyWords": "STRETCH",
      "on": "シン",
      "kun": "の.びる ・ の.ばす ・ の.べる"
    },
    {
      "ID": 874,
      "character": "紳",
      "keyWords": "GENTLEMAN",
      "on": "シン",
      "kun": ""
    },
    {
      "ID": 875,
      "character": "縮",
      "keyWords": "SHRINK",
      "on": "シュク",
      "kun": "ちじ.む ・ ちじ.まる ・ ちじ.める ・ ちじ.れる ・ ちじ.らす"
    },
    {
      "ID": 876,
      "character": "誕",
      "keyWords": "BE BORN",
      "on": "タン",
      "kun": ""
    },
    {
      "ID": 877,
      "character": "廷",
      "keyWords": "COURT",
      "on": "テイ",
      "kun": ""
    },
    {
      "ID": 878,
      "character": "庭",
      "keyWords": "COURTYARD ・ GARDEN",
      "on": "テイ",
      "kun": "にわ"
    },
    {
      "ID": 879,
      "character": "艇",
      "keyWords": "BOAT",
      "on": "テイ",
      "kun": ""
    },
    {
      "ID": 880,
      "character": "展",
      "keyWords": "UNFOLD ・ DISPLAY",
      "on": "テン",
      "kun": ""
    },
    {
      "ID": 881,
      "character": "殿",
      "keyWords": "PALACE ・ FORMAL HONORIFIC TITLE",
      "on": "デン ・ テン",
      "kun": "との ・ -どの"
    },
    {
      "ID": 882,
      "character": "異",
      "keyWords": "DIFFERENT",
      "on": "イ",
      "kun": "こと ・ こと.なる"
    },
    {
      "ID": 883,
      "character": "翼",
      "keyWords": "WING",
      "on": "ヨク",
      "kun": "つばさ"
    },
    {
      "ID": 884,
      "character": "累",
      "keyWords": "CUMULATE ・ ENCUMBER",
      "on": "ルイ",
      "kun": ""
    },
    {
      "ID": 885,
      "character": "塁",
      "keyWords": "BASE ・ SMALL FORT",
      "on": "ルイ",
      "kun": ""
    },
    {
      "ID": 886,
      "character": "吏",
      "keyWords": "OFFICIAL",
      "on": "リ",
      "kun": ""
    },
    {
      "ID": 887,
      "character": "使",
      "keyWords": "USE ・ ENVOY",
      "on": "シ",
      "kun": "つか.う ・ つか.い ・ -つか.い ・ -ずか.い"
    },
    {
      "ID": 888,
      "character": "史",
      "keyWords": "HISTORY",
      "on": "シ",
      "kun": ""
    },
    {
      "ID": 889,
      "character": "更",
      "keyWords": "RENEW ・ FURTHERMORE ・ GROW LATE",
      "on": "コウ",
      "kun": "さら ・ さら.に ・ ふ.ける ・ ふ.かす"
    },
    {
      "ID": 890,
      "character": "便",
      "keyWords": "CONVENIENT ・ POSTAL DELIVERY ・ EXCRETA",
      "on": "ベン ・ ビン",
      "kun": "たよ.り"
    },
    {
      "ID": 891,
      "character": "硬",
      "keyWords": "HARD",
      "on": "コウ",
      "kun": "かた.い"
    },
    {
      "ID": 892,
      "character": "能",
      "keyWords": "ABILITY ・ NOH DRAMA",
      "on": "ノウ",
      "kun": ""
    },
    {
      "ID": 893,
      "character": "態",
      "keyWords": "STATE ・ POSTURE",
      "on": "タイ",
      "kun": ""
    },
    {
      "ID": 894,
      "character": "熊",
      "keyWords": "BEAR",
      "on": "",
      "kun": "くま"
    },
    {
      "ID": 895,
      "character": "罷",
      "keyWords": "DISCONTINUE",
      "on": "ヒ",
      "kun": "や.める*"
    },
    {
      "ID": 896,
      "character": "羅",
      "keyWords": "LINE UP ・ PHONETIC [RA]",
      "on": "ラ",
      "kun": ""
    },
    {
      "ID": 897,
      "character": "雲",
      "keyWords": "CLOUD",
      "on": "ウン",
      "kun": "くも ・ -ぐも"
    },
    {
      "ID": 898,
      "character": "曇",
      "keyWords": "CLOUDY",
      "on": "ドン",
      "kun": "くも.る"
    },
    {
      "ID": 899,
      "character": "雪",
      "keyWords": "SNOW",
      "on": "セツ",
      "kun": "ゆき"
    },
    {
      "ID": 900,
      "character": "雷",
      "keyWords": "THUNDER",
      "on": "ライ",
      "kun": "かみなり"
    },
    {
      "ID": 901,
      "character": "零",
      "keyWords": "ZERO",
      "on": "レイ",
      "kun": ""
    },
    {
      "ID": 902,
      "character": "震",
      "keyWords": "QUAKE",
      "on": "シン",
      "kun": "ふる.う ・ ふる.える"
    },
    {
      "ID": 903,
      "character": "振",
      "keyWords": "SWING",
      "on": "シン",
      "kun": "ふ.る ・ ぶ.る ・ ふ.り ・ -ぶ.り ・ ふ.るう ・ ふ.れる"
    },
    {
      "ID": 904,
      "character": "久",
      "keyWords": "OF LONG DURATION",
      "on": "キュウ ・ ク",
      "kun": "ひさ.しい"
    },
    {
      "ID": 905,
      "character": "賑",
      "keyWords": "FLOURISH",
      "on": "シン",
      "kun": "にぎ.わう ・ にぎ.やか"
    },
    {
      "ID": 906,
      "character": "丘",
      "keyWords": "HILL",
      "on": "キュウ",
      "kun": "おか"
    },
    {
      "ID": 907,
      "character": "兵",
      "keyWords": "SOLDIER",
      "on": "ヘイ ・ ヒョウ",
      "kun": ""
    },
    {
      "ID": 908,
      "character": "岳",
      "keyWords": "HIGH MOUNTAIN",
      "on": "ガク",
      "kun": "たけ"
    },
    {
      "ID": 909,
      "character": "浜",
      "keyWords": "BEACH",
      "on": "ヒン",
      "kun": "はま"
    },
    {
      "ID": 910,
      "character": "舎",
      "keyWords": "HUT",
      "on": "シャ",
      "kun": ""
    },
    {
      "ID": 911,
      "character": "再",
      "keyWords": "AGAIN",
      "on": "サイ ・ サ",
      "kun": "ふたた.び"
    },
    {
      "ID": 912,
      "character": "虎",
      "keyWords": "TIGER",
      "on": "コ",
      "kun": "とら"
    },
    {
      "ID": 913,
      "character": "寅",
      "keyWords": "THE TIGER",
      "on": "イン",
      "kun": "とら"
    },
    {
      "ID": 914,
      "character": "演",
      "keyWords": "PERFORM",
      "on": "エン",
      "kun": ""
    },
    {
      "ID": 915,
      "character": "黄",
      "keyWords": "YELLOW",
      "on": "コウ ・ オウ",
      "kun": "き ・ こ-"
    },
    {
      "ID": 916,
      "character": "横",
      "keyWords": "SIDEWAYS ・ ARBITRARY",
      "on": "オウ",
      "kun": "よこ"
    },
    {
      "ID": 917,
      "character": "構",
      "keyWords": "CONSTRUCT ・ MIND",
      "on": "コウ",
      "kun": "かま.える ・ かま.う"
    },
    {
      "ID": 918,
      "character": "講",
      "keyWords": "LECTURE",
      "on": "コウ",
      "kun": ""
    },
    {
      "ID": 919,
      "character": "購",
      "keyWords": "PURCHASE",
      "on": "コウ",
      "kun": ""
    },
    {
      "ID": 920,
      "character": "溝",
      "keyWords": "CHANNEL",
      "on": "コウ",
      "kun": "みぞ ・ どぶ*"
    },
    {
      "ID": 921,
      "character": "仮",
      "keyWords": "TEMPORARY ・ FAKE",
      "on": "カ ・ ケ",
      "kun": "かり ・ かり-"
    },
    {
      "ID": 922,
      "character": "片",
      "keyWords": "FRAGMENT ・ ONE OF TWO",
      "on": "ヘン",
      "kun": "かた- ・ かた"
    },
    {
      "ID": 923,
      "character": "版",
      "keyWords": "PRINTING PLATE ・ PUBLISHING",
      "on": "ハン",
      "kun": ""
    },
    {
      "ID": 924,
      "character": "板",
      "keyWords": "BOARD ・ PLATE",
      "on": "ハン ・ バン",
      "kun": "いた"
    },
    {
      "ID": 925,
      "character": "販",
      "keyWords": "ENGAGE IN SALES",
      "on": "ハン",
      "kun": ""
    },
    {
      "ID": 926,
      "character": "義",
      "keyWords": "RIGHTEOUSNESS ・ MEANING ・ SUBSTITUTE",
      "on": "ギ",
      "kun": ""
    },
    {
      "ID": 927,
      "character": "議",
      "keyWords": "DISCUSS ・ LEGISLATIVE BODY",
      "on": "ギ",
      "kun": ""
    },
    {
      "ID": 928,
      "character": "儀",
      "keyWords": "CEREMONY",
      "on": "ギ",
      "kun": ""
    },
    {
      "ID": 929,
      "character": "犠",
      "keyWords": "SACRIFICE",
      "on": "ギ",
      "kun": ""
    },
    {
      "ID": 930,
      "character": "牲",
      "keyWords": "SACRIFICE",
      "on": "セイ",
      "kun": ""
    },
    {
      "ID": 931,
      "character": "旨",
      "keyWords": "PURPORT",
      "on": "シ",
      "kun": "むね ・ うま.い*"
    },
    {
      "ID": 932,
      "character": "指",
      "keyWords": "FINGER ・ POINT",
      "on": "シ",
      "kun": "ゆび ・ さ.す ・ -さ.し"
    },
    {
      "ID": 933,
      "character": "揮",
      "keyWords": "BRANDISH",
      "on": "キ",
      "kun": ""
    },
    {
      "ID": 934,
      "character": "輝",
      "keyWords": "SHINE BRILLIANTLY",
      "on": "キ",
      "kun": "かがや.く"
    },
    {
      "ID": 935,
      "character": "刺",
      "keyWords": "PIERCE",
      "on": "シ",
      "kun": "さ.す ・ さ.さる ・ さ.し ・ さし"
    },
    {
      "ID": 936,
      "character": "策",
      "keyWords": "SCHEME ・ MEASURE",
      "on": "サク",
      "kun": ""
    },
    {
      "ID": 937,
      "character": "差",
      "keyWords": "DIVERGENCE",
      "on": "サ",
      "kun": "さ.す ・ さ.し"
    },
    {
      "ID": 938,
      "character": "着",
      "keyWords": "PUT ON ・ ARRIVE ・ STICK",
      "on": "チャク ・ ジャク",
      "kun": "き.る ・ -ぎ ・ き.せる ・ -きせ ・ つ.く ・ つ.ける"
    },
    {
      "ID": 939,
      "character": "看",
      "keyWords": "OBSERVE",
      "on": "カン",
      "kun": ""
    },
    {
      "ID": 940,
      "character": "到",
      "keyWords": "ARRIVE",
      "on": "トウ",
      "kun": ""
    },
    {
      "ID": 941,
      "character": "倒",
      "keyWords": "TOPPLE",
      "on": "トウ",
      "kun": "たお.れる ・ -だお.れ ・ たお.す"
    },
    {
      "ID": 942,
      "character": "論",
      "keyWords": "ARGUE ・ THEORY",
      "on": "ロン",
      "kun": ""
    },
    {
      "ID": 943,
      "character": "倫",
      "keyWords": "MORALS",
      "on": "リン",
      "kun": ""
    },
    {
      "ID": 944,
      "character": "輪",
      "keyWords": "WHEEL ・ RING",
      "on": "リン",
      "kun": "は"
    },
    {
      "ID": 945,
      "character": "輸",
      "keyWords": "TRANSPORT",
      "on": "ユ",
      "kun": ""
    },
    {
      "ID": 946,
      "character": "諭",
      "keyWords": "ADMONISH",
      "on": "ユ",
      "kun": "さと.す"
    },
    {
      "ID": 947,
      "character": "愉",
      "keyWords": "PLEASED",
      "on": "ユ",
      "kun": ""
    },
    {
      "ID": 948,
      "character": "癒",
      "keyWords": "HEAL",
      "on": "ユ",
      "kun": "い.やす ・ い.える"
    },
    {
      "ID": 949,
      "character": "台",
      "keyWords": "STAND ・ COUNTER FOR MACHINES AND VEHICLES ・ TAIWAN",
      "on": "ダイ ・ タイ",
      "kun": ""
    },
    {
      "ID": 950,
      "character": "治",
      "keyWords": "GOVERN ・ CURE",
      "on": "ジ ・ チ",
      "kun": "おさ.める ・ おさ.まる ・ なお.る ・ なお.す"
    },
    {
      "ID": 951,
      "character": "冶",
      "keyWords": "WORK METALS",
      "on": "ヤ",
      "kun": ""
    },
    {
      "ID": 952,
      "character": "療",
      "keyWords": "TREAT",
      "on": "リョウ",
      "kun": ""
    },
    {
      "ID": 953,
      "character": "僚",
      "keyWords": "COLLEAGUE",
      "on": "リョウ",
      "kun": ""
    },
    {
      "ID": 954,
      "character": "瞭",
      "keyWords": "CLEAR",
      "on": "リョウ",
      "kun": ""
    },
    {
      "ID": 955,
      "character": "寮",
      "keyWords": "DORMITORY",
      "on": "リョウ",
      "kun": ""
    },
    {
      "ID": 956,
      "character": "始",
      "keyWords": "BEGIN",
      "on": "シ",
      "kun": "はじ.める ・ -はじ.める ・ はじ.まる"
    },
    {
      "ID": 957,
      "character": "終",
      "keyWords": "END",
      "on": "シュウ",
      "kun": "お.わる ・ -お.わる ・ お.える"
    },
    {
      "ID": 958,
      "character": "了",
      "keyWords": "FINISH ・ COMPREHEND",
      "on": "リョウ",
      "kun": ""
    },
    {
      "ID": 959,
      "character": "承",
      "keyWords": "AGREE TO ・ RECEIVE",
      "on": "ショウ",
      "kun": "うけたまわ.る"
    },
    {
      "ID": 960,
      "character": "蒸",
      "keyWords": "STEAM",
      "on": "ジョウ",
      "kun": "む.す ・ む.れる ・ む.らす"
    },
    {
      "ID": 961,
      "character": "舞",
      "keyWords": "DANCE",
      "on": "ブ",
      "kun": "ま.う ・ -ま.う ・ まい"
    },
    {
      "ID": 962,
      "character": "隣",
      "keyWords": "NEIGHBOR",
      "on": "リン",
      "kun": "とな.る ・ となり"
    },
    {
      "ID": 963,
      "character": "瞬",
      "keyWords": "BLINK",
      "on": "シュン",
      "kun": "またた.く"
    },
    {
      "ID": 964,
      "character": "夢",
      "keyWords": "DREAM",
      "on": "ム",
      "kun": "ゆめ"
    },
    {
      "ID": 965,
      "character": "枝",
      "keyWords": "BRANCH",
      "on": "シ",
      "kun": "えだ"
    },
    {
      "ID": 966,
      "character": "技",
      "keyWords": "SKILL",
      "on": "ギ",
      "kun": "わざ ・"
    },
    {
      "ID": 967,
      "character": "伎",
      "keyWords": "PERFORMANCE",
      "on": "キ ・ ギ*",
      "kun": ""
    },
    {
      "ID": 968,
      "character": "岐",
      "keyWords": "DIVERGE",
      "on": "キ",
      "kun": ""
    },
    {
      "ID": 969,
      "character": "峠",
      "keyWords": "MOUNTAIN PASS",
      "on": "",
      "kun": "とうげ"
    },
    {
      "ID": 970,
      "character": "阜",
      "keyWords": "MOUND",
      "on": "フ",
      "kun": ""
    },
    {
      "ID": 971,
      "character": "急",
      "keyWords": "URGENT ・ HURRY ・ SUDDEN",
      "on": "キュウ",
      "kun": "いそ.ぐ ・ いそ.ぎ"
    },
    {
      "ID": 972,
      "character": "争",
      "keyWords": "CONTEND",
      "on": "ソウ",
      "kun": "あらそ.う"
    },
    {
      "ID": 973,
      "character": "情",
      "keyWords": "EMOTION ・ ACTUAL CONDITIONS",
      "on": "ジョウ ・ セイ",
      "kun": "なさ.け"
    },
    {
      "ID": 974,
      "character": "清",
      "keyWords": "CLEAR",
      "on": "セイ ・ ショウ",
      "kun": "きよ.い ・ きよ.まる ・ きよ.める"
    },
    {
      "ID": 975,
      "character": "晴",
      "keyWords": "CLEAR SKY",
      "on": "セイ",
      "kun": "は.れる ・ は.れ ・ は.れ- ・ -ば.れ ・ は.らす"
    },
    {
      "ID": 976,
      "character": "精",
      "keyWords": "REFINED ・ ESSENCE ・ SPIRIT",
      "on": "セイ ・ ショウ",
      "kun": ""
    },
    {
      "ID": 977,
      "character": "請",
      "keyWords": "REQUEST",
      "on": "セイ ・ シン",
      "kun": "こ.う ・ う.ける"
    },
    {
      "ID": 978,
      "character": "静",
      "keyWords": "QUIET",
      "on": "セイ ・ ジョウ",
      "kun": "しず- ・ しず.か ・ しず.まる ・ しず.める"
    },
    {
      "ID": 979,
      "character": "浄",
      "keyWords": "CLEAN",
      "on": "ジョウ",
      "kun": ""
    },
    {
      "ID": 980,
      "character": "算",
      "keyWords": "CALCULATE",
      "on": "サン",
      "kun": ""
    },
    {
      "ID": 981,
      "character": "答",
      "keyWords": "ANSWER",
      "on": "トウ",
      "kun": "こた.える ・ こた.え"
    },
    {
      "ID": 982,
      "character": "符",
      "keyWords": "SYMBOL",
      "on": "フ",
      "kun": ""
    },
    {
      "ID": 983,
      "character": "博",
      "keyWords": "EXTENSIVE ・ DOCTOR",
      "on": " Ph.D.",
      "kun": "ハク ・ バク"
    },
    {
      "ID": 984,
      "character": "縛",
      "keyWords": "BIND",
      "on": "バク",
      "kun": "しば.る"
    },
    {
      "ID": 985,
      "character": "簿",
      "keyWords": "RECORD BOOK",
      "on": "ボ",
      "kun": ""
    },
    {
      "ID": 986,
      "character": "薄",
      "keyWords": "THIN",
      "on": "ハク",
      "kun": "うす.い ・ うす- ・ -うす ・ うす.める ・ うす.まる ・ うす.らぐ ・ うす.ら- ・ うす.れる"
    },
    {
      "ID": 987,
      "character": "采",
      "keyWords": "GATHER",
      "on": "サイ",
      "kun": ""
    },
    {
      "ID": 988,
      "character": "菜",
      "keyWords": "VEGETABLE",
      "on": "サイ",
      "kun": "な"
    },
    {
      "ID": 989,
      "character": "採",
      "keyWords": "PICK ・ GATHER",
      "on": "サイ",
      "kun": "と.る"
    },
    {
      "ID": 990,
      "character": "彩",
      "keyWords": "BEAUTIFUL COLORING",
      "on": "サイ",
      "kun": "いろど.る"
    },
    {
      "ID": 991,
      "character": "杉",
      "keyWords": "CRYPTOMERIA",
      "on": "",
      "kun": "すぎ"
    },
    {
      "ID": 992,
      "character": "街",
      "keyWords": "CITY QUARTER",
      "on": "ガイ ・ カイ",
      "kun": "まち"
    },
    {
      "ID": 993,
      "character": "術",
      "keyWords": "PRACTICAL ART",
      "on": "ジュツ",
      "kun": ""
    },
    {
      "ID": 994,
      "character": "述",
      "keyWords": "STATE",
      "on": "ジュツ",
      "kun": ""
    },
    {
      "ID": 995,
      "character": "余",
      "keyWords": "REMAINING ・ EXCESS",
      "on": "ヨ",
      "kun": "あま.る ・ あま.り ・ あま.す"
    },
    {
      "ID": 996,
      "character": "除",
      "keyWords": "RID OF",
      "on": "ジョ ・ ジ",
      "kun": "のぞ.く"
    },
    {
      "ID": 997,
      "character": "徐",
      "keyWords": "SLOWLY",
      "on": "ジョ",
      "kun": ""
    },
    {
      "ID": 998,
      "character": "叙",
      "keyWords": "DESCRIBE",
      "on": "ジョ",
      "kun": ""
    },
    {
      "ID": 999,
      "character": "斜",
      "keyWords": "OBLIQUE",
      "on": "シャ",
      "kun": "なな.め"
    },
    {
      "ID": 1000,
      "character": "途",
      "keyWords": "WAY",
      "on": "ト",
      "kun": ""
    },
    {
      "ID": 1001,
      "character": "塗",
      "keyWords": "APPLY ON A SURFACE",
      "on": "ト",
      "kun": "ぬ.る ・ ぬ.り"
    },
    {
      "ID": 1002,
      "character": "漆",
      "keyWords": "LACQUER",
      "on": "シツ",
      "kun": "うるし"
    },
    {
      "ID": 1003,
      "character": "仙",
      "keyWords": "HERMIT",
      "on": "セン",
      "kun": ""
    },
    {
      "ID": 1004,
      "character": "垂",
      "keyWords": "HANG DOWN",
      "on": "スイ",
      "kun": "た.れる ・ た.らす ・ た.れ ・ -た.れ"
    },
    {
      "ID": 1005,
      "character": "乗",
      "keyWords": "RIDE",
      "on": "ジョウ",
      "kun": "の.る ・ -の.り ・ の.せる"
    },
    {
      "ID": 1006,
      "character": "兼",
      "keyWords": "COMBINE ・ CANNOT",
      "on": "ケン",
      "kun": "か.ねる ・ -か.ねる"
    },
    {
      "ID": 1007,
      "character": "剰",
      "keyWords": "SURPLUS",
      "on": "ジョウ",
      "kun": ""
    },
    {
      "ID": 1008,
      "character": "睡",
      "keyWords": "SLEEP",
      "on": "スイ",
      "kun": ""
    },
    {
      "ID": 1009,
      "character": "眠",
      "keyWords": "SLEEP",
      "on": "ミン",
      "kun": "ねむ.る ・ ねむ.い"
    },
    {
      "ID": 1010,
      "character": "郵",
      "keyWords": "MAIL",
      "on": "ユウ",
      "kun": ""
    },
    {
      "ID": 1011,
      "character": "錘",
      "keyWords": "SPINDLE",
      "on": "スイ",
      "kun": "つむ"
    },
    {
      "ID": 1012,
      "character": "華",
      "keyWords": "FLOWER ・ MAGNIFICENT ・ CHINA",
      "on": "カ ・ ケ",
      "kun": "はな"
    },
    {
      "ID": 1013,
      "character": "侵",
      "keyWords": "INVADE",
      "on": "シン",
      "kun": "おか.す"
    },
    {
      "ID": 1014,
      "character": "浸",
      "keyWords": "SOAK",
      "on": "シン",
      "kun": "ひた.す ・ ひた.る"
    },
    {
      "ID": 1015,
      "character": "寝",
      "keyWords": "GO TO SLEEP",
      "on": "シン",
      "kun": "ね.る ・ ね.かす ・ ね.かせる"
    },
    {
      "ID": 1016,
      "character": "掃",
      "keyWords": "SWEEP",
      "on": "ソウ",
      "kun": "は.く"
    },
    {
      "ID": 1017,
      "character": "婦",
      "keyWords": "ADULT WOMAN",
      "on": "フ",
      "kun": ""
    },
    {
      "ID": 1018,
      "character": "帰",
      "keyWords": "RETURN",
      "on": "キ",
      "kun": "かえ.る ・ かえ.す"
    },
    {
      "ID": 1019,
      "character": "戻",
      "keyWords": "RETURN",
      "on": "レイ",
      "kun": "もど.す ・ もど.る"
    },
    {
      "ID": 1020,
      "character": "涙",
      "keyWords": "TEAR",
      "on": "ルイ",
      "kun": "なみだ"
    },
    {
      "ID": 1021,
      "character": "射",
      "keyWords": "SHOOT",
      "on": "シャ",
      "kun": "い.る ・ さ.す*"
    },
    {
      "ID": 1022,
      "character": "謝",
      "keyWords": "THANK ・ APOLOGIZE",
      "on": "シャ",
      "kun": "あやま.る"
    },
    {
      "ID": 1023,
      "character": "討",
      "keyWords": "STUDY ・ SUPPRESS BY ARMED FORCE",
      "on": "トウ",
      "kun": "う.つ"
    },
    {
      "ID": 1024,
      "character": "訂",
      "keyWords": "REVISE",
      "on": "テイ",
      "kun": ""
    },
    {
      "ID": 1025,
      "character": "打",
      "keyWords": "STRIKE",
      "on": "ダ",
      "kun": "う.つ ・ う.ち-"
    },
    {
      "ID": 1026,
      "character": "撃",
      "keyWords": "STRIKE",
      "on": "ゲキ",
      "kun": "う.つ"
    },
    {
      "ID": 1027,
      "character": "拭",
      "keyWords": "WIPE",
      "on": "ショク",
      "kun": "ふ.く ・ ぬぐ.う"
    },
    {
      "ID": 1028,
      "character": "試",
      "keyWords": "TRY",
      "on": "シ",
      "kun": "こころ.みる ・ ため.す"
    },
    {
      "ID": 1029,
      "character": "検",
      "keyWords": "EXAMINE",
      "on": "ケン",
      "kun": ""
    },
    {
      "ID": 1030,
      "character": "験",
      "keyWords": "TEST",
      "on": "ケン ・ ゲン",
      "kun": ""
    },
    {
      "ID": 1031,
      "character": "険",
      "keyWords": "DANGEROUS ・ STEEP",
      "on": "ケン",
      "kun": "けわ.しい"
    },
    {
      "ID": 1032,
      "character": "倹",
      "keyWords": "FRUGAL",
      "on": "ケン",
      "kun": ""
    },
    {
      "ID": 1033,
      "character": "剣",
      "keyWords": "SWORD",
      "on": "ケン",
      "kun": "つるぎ"
    },
    {
      "ID": 1034,
      "character": "谷",
      "keyWords": "VALLEY",
      "on": "コク",
      "kun": "たに"
    },
    {
      "ID": 1035,
      "character": "欲",
      "keyWords": "DESIRE",
      "on": "ヨク",
      "kun": "ほっ.する ・ ほ.しい"
    },
    {
      "ID": 1036,
      "character": "浴",
      "keyWords": "BATHE",
      "on": "ヨク",
      "kun": "あ.びる ・ あ.びせる"
    },
    {
      "ID": 1037,
      "character": "容",
      "keyWords": "COUNTENANCE ・ CONTAIN",
      "on": "ヨウ",
      "kun": ""
    },
    {
      "ID": 1038,
      "character": "溶",
      "keyWords": "DISSOLVE ・ MELT",
      "on": "ヨウ",
      "kun": "と.ける ・ と.かす ・ と.く"
    },
    {
      "ID": 1039,
      "character": "俗",
      "keyWords": "POPULAR",
      "on": "ゾク",
      "kun": ""
    },
    {
      "ID": 1040,
      "character": "裕",
      "keyWords": "ABUNDANT",
      "on": "ユウ",
      "kun": ""
    },
    {
      "ID": 1041,
      "character": "寛",
      "keyWords": "LENIENT",
      "on": "カン",
      "kun": ""
    },
    {
      "ID": 1042,
      "character": "甘",
      "keyWords": "SWEET",
      "on": "カン",
      "kun": "あま.い ・ あま.える ・ あま.やかす"
    },
    {
      "ID": 1043,
      "character": "紺",
      "keyWords": "DARK BLUE",
      "on": "コン",
      "kun": ""
    },
    {
      "ID": 1044,
      "character": "紅",
      "keyWords": "CRIMSON",
      "on": "コウ ・ ク",
      "kun": "べに ・ くれない"
    },
    {
      "ID": 1045,
      "character": "攻",
      "keyWords": "ATTACK",
      "on": "コウ",
      "kun": "せ.める"
    },
    {
      "ID": 1046,
      "character": "功",
      "keyWords": "MERIT",
      "on": "コウ ・ ク",
      "kun": ""
    },
    {
      "ID": 1047,
      "character": "巧",
      "keyWords": "SKILLFUL",
      "on": "コウ",
      "kun": "たく.み"
    },
    {
      "ID": 1048,
      "character": "朽",
      "keyWords": "DECAY",
      "on": "キュウ",
      "kun": "くち.る"
    },
    {
      "ID": 1049,
      "character": "枯",
      "keyWords": "WITHER",
      "on": "コ",
      "kun": "か.れる ・ か.らす"
    },
    {
      "ID": 1050,
      "character": "汚",
      "keyWords": "DIRTY",
      "on": "オ",
      "kun": "けが.す ・ けが.れる ・ けが.らわしい ・ よご.す ・ よご.れる ・ きたな.い"
    },
    {
      "ID": 1051,
      "character": "升",
      "keyWords": "<SHO> (1.8L)",
      "on": "ショウ",
      "kun": "ます"
    },
    {
      "ID": 1052,
      "character": "弁",
      "keyWords": "SPEAK ・ MANAGE ・ VALVE",
      "on": "ベン",
      "kun": ""
    },
    {
      "ID": 1053,
      "character": "昇",
      "keyWords": "ASCEND",
      "on": "ショウ",
      "kun": "のぼ.る"
    },
    {
      "ID": 1054,
      "character": "登",
      "keyWords": "ASCEND ・ ATTEND ・ REGISTER",
      "on": "トウ ・ ト",
      "kun": "のぼ.る"
    },
    {
      "ID": 1055,
      "character": "澄",
      "keyWords": "LIMPID",
      "on": "チョウ",
      "kun": "す.む ・ す.ます ・ -す.ます"
    },
    {
      "ID": 1056,
      "character": "充",
      "keyWords": "FILL ・ ALLOT",
      "on": "ジュウ",
      "kun": "あ.てる"
    },
    {
      "ID": 1057,
      "character": "銃",
      "keyWords": "GUN",
      "on": "ジュウ",
      "kun": ""
    },
    {
      "ID": 1058,
      "character": "統",
      "keyWords": "UNITE ・ INTERCONNECTED SYSTEM",
      "on": "トウ",
      "kun": "す.べる"
    },
    {
      "ID": 1059,
      "character": "流",
      "keyWords": "FLOW ・ CURRENT ・ STYLE",
      "on": "リュウ ・ ル",
      "kun": "なが.れる ・ なが.れ ・ なが.す ・ -なが.す"
    },
    {
      "ID": 1060,
      "character": "硫",
      "keyWords": "SULFUR",
      "on": "リュウ",
      "kun": ""
    },
    {
      "ID": 1061,
      "character": "盲",
      "keyWords": "BLIND",
      "on": "モウ",
      "kun": ""
    },
    {
      "ID": 1062,
      "character": "忘",
      "keyWords": "FORGET",
      "on": "ボウ",
      "kun": "わす.れる"
    },
    {
      "ID": 1063,
      "character": "忙",
      "keyWords": "BUSY",
      "on": "ボウ",
      "kun": "いそが.しい"
    },
    {
      "ID": 1064,
      "character": "荒",
      "keyWords": "WILD",
      "on": "コウ",
      "kun": "あら.い ・ あら- ・ あ.れる ・ あ.らす ・ -あ.らし"
    },
    {
      "ID": 1065,
      "character": "慌",
      "keyWords": "FLURRIED",
      "on": "コウ",
      "kun": "あわ.てる ・ あわ.ただしい"
    },
    {
      "ID": 1066,
      "character": "望",
      "keyWords": "HOPE ・ LOOK AFAR",
      "on": "ボウ ・ モウ",
      "kun": "のぞ.む"
    },
    {
      "ID": 1067,
      "character": "希",
      "keyWords": "RARE ・ ASPIRE",
      "on": "キ",
      "kun": "まれ*"
    },
    {
      "ID": 1068,
      "character": "稀",
      "keyWords": "RARE",
      "on": "キ ・ ケ",
      "kun": "まれ"
    },
    {
      "ID": 1069,
      "character": "括",
      "keyWords": "LUMP TOGETHER",
      "on": "カツ",
      "kun": ""
    },
    {
      "ID": 1070,
      "character": "拘",
      "keyWords": "ARREST",
      "on": "コウ",
      "kun": "かか.わる*"
    },
    {
      "ID": 1071,
      "character": "拾",
      "keyWords": "PICK UP",
      "on": "シュウ ・ ジュウ",
      "kun": "ひろ.う"
    },
    {
      "ID": 1072,
      "character": "捨",
      "keyWords": "DISCARD",
      "on": "シャ",
      "kun": "す.てる"
    },
    {
      "ID": 1073,
      "character": "孤",
      "keyWords": "SOLITARY",
      "on": "コ",
      "kun": ""
    },
    {
      "ID": 1074,
      "character": "弧",
      "keyWords": "ARC",
      "on": "コ",
      "kun": ""
    },
    {
      "ID": 1075,
      "character": "弾",
      "keyWords": "PROJECTILE ・ SPRING BACK",
      "on": "ダン",
      "kun": "ひ.く ・ -ひ.き ・ はず.む ・ たま"
    },
    {
      "ID": 1076,
      "character": "禅",
      "keyWords": "ZEN",
      "on": "ゼン",
      "kun": ""
    },
    {
      "ID": 1077,
      "character": "系",
      "keyWords": "SYSTEM ・ LINEAGE",
      "on": "ケイ",
      "kun": ""
    },
    {
      "ID": 1078,
      "character": "係",
      "keyWords": "CONNECT ・ PERSON IN CHARGE",
      "on": "ケイ",
      "kun": "かか.る ・ かかり ・ -がかり ・ かか.わる*"
    },
    {
      "ID": 1079,
      "character": "孫",
      "keyWords": "GRANDCHILD",
      "on": "ソン",
      "kun": "まご"
    },
    {
      "ID": 1080,
      "character": "懸",
      "keyWords": "SUSPEND",
      "on": "ケン ・ ケ",
      "kun": "か.ける ・ か.かる"
    },
    {
      "ID": 1081,
      "character": "偏",
      "keyWords": "ONE-SIDED",
      "on": "ヘン",
      "kun": "かたよ.る"
    },
    {
      "ID": 1082,
      "character": "遍",
      "keyWords": "ALL OVER ・ COUNTER FOR TIMES",
      "on": "ヘン",
      "kun": ""
    },
    {
      "ID": 1083,
      "character": "編",
      "keyWords": "COMPILE ・ KNIT",
      "on": "ヘン",
      "kun": "あ.む ・ -あ.み"
    },
    {
      "ID": 1084,
      "character": "篇",
      "keyWords": "VOLUME",
      "on": "ヘン",
      "kun": ""
    },
    {
      "ID": 1085,
      "character": "普",
      "keyWords": "WIDESPREAD",
      "on": "フ",
      "kun": ""
    },
    {
      "ID": 1086,
      "character": "譜",
      "keyWords": "SYSTEMATIC RECORD",
      "on": "フ",
      "kun": ""
    },
    {
      "ID": 1087,
      "character": "職",
      "keyWords": "EMPLOYMENT",
      "on": "ショク",
      "kun": ""
    },
    {
      "ID": 1088,
      "character": "織",
      "keyWords": "WEAVE",
      "on": "ショク ・ シキ",
      "kun": "お.る ・ お.り ・ おり ・ -おり ・ -お.り"
    },
    {
      "ID": 1089,
      "character": "識",
      "keyWords": "DISCRIMINATE ・ KNOWLEDGE",
      "on": "シキ",
      "kun": ""
    },
    {
      "ID": 1090,
      "character": "殉",
      "keyWords": "DIE A MARTYR",
      "on": "ジュン",
      "kun": ""
    },
    {
      "ID": 1091,
      "character": "退",
      "keyWords": "RETREAT",
      "on": "タイ",
      "kun": "しりぞ.く ・ しりぞ.ける"
    },
    {
      "ID": 1092,
      "character": "眼",
      "keyWords": "EYE",
      "on": "ガン ・ ゲン",
      "kun": "まなこ ・ め*"
    },
    {
      "ID": 1093,
      "character": "智",
      "keyWords": "WISDOM",
      "on": "チ",
      "kun": ""
    },
    {
      "ID": 1094,
      "character": "仁",
      "keyWords": "HUMANENESS",
      "on": "ジン ・ ニ",
      "kun": ""
    },
    {
      "ID": 1095,
      "character": "忍",
      "keyWords": "BEAR",
      "on": "ニン",
      "kun": "しの.ぶ ・ しの.ばせる"
    },
    {
      "ID": 1096,
      "character": "認",
      "keyWords": "RECOGNIZE",
      "on": "ニン",
      "kun": "みと.める"
    },
    {
      "ID": 1097,
      "character": "求",
      "keyWords": "SEEK",
      "on": "キュウ",
      "kun": "もと.める"
    },
    {
      "ID": 1098,
      "character": "救",
      "keyWords": "SAVE",
      "on": "キュウ",
      "kun": "すく.う"
    },
    {
      "ID": 1099,
      "character": "球",
      "keyWords": "BALL",
      "on": "キュウ",
      "kun": "たま"
    },
    {
      "ID": 1100,
      "character": "屯",
      "keyWords": "STATION TROOPS",
      "on": "トン",
      "kun": ""
    },
    {
      "ID": 1101,
      "character": "純",
      "keyWords": "PURE",
      "on": "ジュン",
      "kun": ""
    },
    {
      "ID": 1102,
      "character": "鈍",
      "keyWords": "DULL",
      "on": "ドン",
      "kun": "にぶ.い ・ にぶ.る ・ にぶ-"
    },
    {
      "ID": 1103,
      "character": "召",
      "keyWords": "SUMMON",
      "on": "ショウ",
      "kun": "め.す"
    },
    {
      "ID": 1104,
      "character": "招",
      "keyWords": "INVITE",
      "on": "ショウ",
      "kun": "まね.く"
    },
    {
      "ID": 1105,
      "character": "沼",
      "keyWords": "MUDDY POND",
      "on": "ショウ",
      "kun": "ぬま"
    },
    {
      "ID": 1106,
      "character": "紹",
      "keyWords": "INTRODUCE",
      "on": "ショウ",
      "kun": ""
    },
    {
      "ID": 1107,
      "character": "詔",
      "keyWords": "IMPERIAL EDICT",
      "on": "ショウ",
      "kun": ""
    },
    {
      "ID": 1108,
      "character": "勅",
      "keyWords": "IMPERIAL DECREE",
      "on": "チョク",
      "kun": ""
    },
    {
      "ID": 1109,
      "character": "昭",
      "keyWords": "LUMINOUS",
      "on": "ショウ",
      "kun": ""
    },
    {
      "ID": 1110,
      "character": "照",
      "keyWords": "ILLUMINATE ・ EXAMINE BY COMPARISON",
      "on": "ショウ",
      "kun": "て.る ・ て.らす ・ て.れる"
    },
    {
      "ID": 1111,
      "character": "超",
      "keyWords": "SURPASS",
      "on": "チョウ",
      "kun": "こ.える ・ こ.す"
    },
    {
      "ID": 1112,
      "character": "越",
      "keyWords": "GO BEYOND",
      "on": "エツ",
      "kun": "こ.す ・ -こ.す ・ -ご.し ・ こ.える ・ -ご.え"
    },
    {
      "ID": 1113,
      "character": "趣",
      "keyWords": "PURPORT ・ FLAVOR",
      "on": "シュ",
      "kun": "おもむき"
    },
    {
      "ID": 1114,
      "character": "赴",
      "keyWords": "PROCEED TO",
      "on": "フ",
      "kun": "おもむ.く"
    },
    {
      "ID": 1115,
      "character": "訃",
      "keyWords": "DEATH REPORT",
      "on": "フ",
      "kun": ""
    },
    {
      "ID": 1116,
      "character": "朴",
      "keyWords": "SIMPLE",
      "on": "ボク",
      "kun": ""
    },
    {
      "ID": 1117,
      "character": "掛",
      "keyWords": "SET ・ HANG",
      "on": "",
      "kun": "か.ける ・ -か.ける ・ か.け ・ -か.け ・ -が.け ・ か.かる ・ -か.かる ・ -が.かる ・ か.かり ・ -が.かり ・ かかり ・ -がかり"
    },
    {
      "ID": 1118,
      "character": "摘",
      "keyWords": "PICK",
      "on": "テキ",
      "kun": "つ.む"
    },
    {
      "ID": 1119,
      "character": "滴",
      "keyWords": "DROP",
      "on": "テキ",
      "kun": "しずく ・ したた.る"
    },
    {
      "ID": 1120,
      "character": "嫡",
      "keyWords": "LEGITIMATE WIFE/CHILD",
      "on": "チャク",
      "kun": ""
    },
    {
      "ID": 1121,
      "character": "適",
      "keyWords": "FIT",
      "on": "テキ",
      "kun": ""
    },
    {
      "ID": 1122,
      "character": "敵",
      "keyWords": "ENEMY",
      "on": "テキ",
      "kun": "かたき"
    },
    {
      "ID": 1123,
      "character": "授",
      "keyWords": "CONFER ・ INSTRUCT",
      "on": "ジュ",
      "kun": "さず.ける ・ さず.かる"
    },
    {
      "ID": 1124,
      "character": "援",
      "keyWords": "AID",
      "on": "エン",
      "kun": ""
    },
    {
      "ID": 1125,
      "character": "媛",
      "keyWords": "DAMSEL",
      "on": "エン",
      "kun": "ひめ"
    },
    {
      "ID": 1126,
      "character": "緩",
      "keyWords": "SLACK",
      "on": "カン",
      "kun": "ゆる.い ・ ゆる.やか ・ ゆる.む ・ ゆる.める"
    },
    {
      "ID": 1127,
      "character": "暖",
      "keyWords": "WARM",
      "on": "ダン ・ ノン*",
      "kun": "あたた.か ・ あたた.かい ・ あたた.まる ・ あたた.める"
    },
    {
      "ID": 1128,
      "character": "観",
      "keyWords": "VIEW",
      "on": "カン",
      "kun": ""
    },
    {
      "ID": 1129,
      "character": "勧",
      "keyWords": "URGE",
      "on": "カン",
      "kun": "すす.める"
    },
    {
      "ID": 1130,
      "character": "権",
      "keyWords": "RIGHT ・ POWER",
      "on": "ケン ・ ゴン",
      "kun": ""
    },
    {
      "ID": 1131,
      "character": "歓",
      "keyWords": "JOYOUS",
      "on": "カン",
      "kun": ""
    },
    {
      "ID": 1132,
      "character": "鶴",
      "keyWords": "CRANE",
      "on": "カク*",
      "kun": "つる"
    },
    {
      "ID": 1133,
      "character": "確",
      "keyWords": "CERTAIN",
      "on": "カク",
      "kun": "たし.か ・ たし.かめる"
    },
    {
      "ID": 1134,
      "character": "慢",
      "keyWords": "ARROGANT ・ SLUGGISH",
      "on": "マン",
      "kun": ""
    },
    {
      "ID": 1135,
      "character": "漫",
      "keyWords": "RAMBLING ・ COMIC",
      "on": "マン",
      "kun": ""
    },
    {
      "ID": 1136,
      "character": "卯",
      "keyWords": "THE HARE",
      "on": "ボウ",
      "kun": "う"
    },
    {
      "ID": 1137,
      "character": "抑",
      "keyWords": "SUPPRESS",
      "on": "ヨク",
      "kun": "おさ.える"
    },
    {
      "ID": 1138,
      "character": "仰",
      "keyWords": "LOOK UP",
      "on": "ギョウ ・ コウ",
      "kun": "あお.ぐ ・ おお.せ"
    },
    {
      "ID": 1139,
      "character": "迎",
      "keyWords": "WELCOME",
      "on": "ゲイ",
      "kun": "むか.える"
    },
    {
      "ID": 1140,
      "character": "柳",
      "keyWords": "WILLOW",
      "on": "リュウ",
      "kun": "やなぎ"
    },
    {
      "ID": 1141,
      "character": "卵",
      "keyWords": "EGG",
      "on": "ラン",
      "kun": "たまご"
    },
    {
      "ID": 1142,
      "character": "疎",
      "keyWords": "SCATTERED ・ ESTRANGED",
      "on": "ソ",
      "kun": "うと.い ・ うと.む"
    },
    {
      "ID": 1143,
      "character": "速",
      "keyWords": "QUICK",
      "on": "ソク",
      "kun": "はや.い ・ はや- ・ はや.める ・ はや.まる ・ すみ.やか"
    },
    {
      "ID": 1144,
      "character": "遅",
      "keyWords": "SLOW ・ LATE",
      "on": "チ",
      "kun": "おく.れる ・ おく.らす ・ おそ.い"
    },
    {
      "ID": 1145,
      "character": "辻",
      "keyWords": "CROSSROAD",
      "on": "",
      "kun": "つじ"
    },
    {
      "ID": 1146,
      "character": "迅",
      "keyWords": "SWIFT",
      "on": "ジン",
      "kun": ""
    },
    {
      "ID": 1147,
      "character": "加",
      "keyWords": "ADD",
      "on": "カ",
      "kun": "くわ.える ・ くわ.わる"
    },
    {
      "ID": 1148,
      "character": "減",
      "keyWords": "DECREASE",
      "on": "ゲン",
      "kun": "へ.る ・ へ.らす"
    },
    {
      "ID": 1149,
      "character": "滅",
      "keyWords": "EXTINGUISH",
      "on": "メツ",
      "kun": "ほろ.びる ・ ほろ.ぶ ・ ほろ.ぼす"
    },
    {
      "ID": 1150,
      "character": "威",
      "keyWords": "MIGHT ・ THREATEN BY FORCE",
      "on": "イ",
      "kun": ""
    },
    {
      "ID": 1151,
      "character": "嚇",
      "keyWords": "INTIMIDATE",
      "on": "カク",
      "kun": ""
    },
    {
      "ID": 1152,
      "character": "或",
      "keyWords": "A CERTAIN",
      "on": "ワク",
      "kun": "あ.る ・ ある.いわ"
    },
    {
      "ID": 1153,
      "character": "惑",
      "keyWords": "BEWILDERED",
      "on": "ワク",
      "kun": "まど.う"
    },
    {
      "ID": 1154,
      "character": "域",
      "keyWords": "BOUNDED AREA",
      "on": "イキ",
      "kun": ""
    },
    {
      "ID": 1155,
      "character": "収",
      "keyWords": "TAKE IN",
      "on": "シュウ",
      "kun": "おさ.める ・ おさ.まる"
    },
    {
      "ID": 1156,
      "character": "納",
      "keyWords": "PAY ・ ACCEPT ・ PUT IN PLACE",
      "on": "ノウ ・ ナッ- ・ ナ ・ ナン ・ トウ",
      "kun": "おさ.める ・ -おさ.める ・ おさ.まる"
    },
    {
      "ID": 1157,
      "character": "献",
      "keyWords": "OFFER",
      "on": "ケン ・ コン",
      "kun": ""
    },
    {
      "ID": 1158,
      "character": "貢",
      "keyWords": "TRIBUTE",
      "on": "コウ ・ ク",
      "kun": "みつ.ぐ"
    },
    {
      "ID": 1159,
      "character": "貪",
      "keyWords": "COVET",
      "on": "ドン",
      "kun": "むさぼ.る"
    },
    {
      "ID": 1160,
      "character": "貰",
      "keyWords": "GET",
      "on": "セイ",
      "kun": "もら.う"
    },
    {
      "ID": 1161,
      "character": "貧",
      "keyWords": "POOR",
      "on": "ヒン ・ ビン",
      "kun": "まず.しい"
    },
    {
      "ID": 1162,
      "character": "賃",
      "keyWords": "WAGES ・ CHARGES",
      "on": "チン",
      "kun": ""
    },
    {
      "ID": 1163,
      "character": "貸",
      "keyWords": "LEND",
      "on": "タイ",
      "kun": "か.す ・ か.し- ・ かし-"
    },
    {
      "ID": 1164,
      "character": "貨",
      "keyWords": "MONEY ・ GOODS",
      "on": "カ",
      "kun": ""
    },
    {
      "ID": 1165,
      "character": "資",
      "keyWords": "RESOURCES",
      "on": "シ",
      "kun": ""
    },
    {
      "ID": 1166,
      "character": "賛",
      "keyWords": "APPROVE OF ・ PRAISE",
      "on": "サン",
      "kun": ""
    },
    {
      "ID": 1167,
      "character": "替",
      "keyWords": "REPLACE",
      "on": "タイ",
      "kun": "か.える ・ か.え- ・ か.わる"
    },
    {
      "ID": 1168,
      "character": "潜",
      "keyWords": "SUBMERGE ・ LURK",
      "on": "セン",
      "kun": "ひそ.む ・ もぐ.る"
    },
    {
      "ID": 1169,
      "character": "貿",
      "keyWords": "TRADE",
      "on": "ボウ",
      "kun": ""
    },
    {
      "ID": 1170,
      "character": "留",
      "keyWords": "KEEP IN PLACE ・ STAY",
      "on": "リュウ ・ ル",
      "kun": "と.める ・ -と.める ・ -ど.め ・ と.まる ・ とど.まる*"
    },
    {
      "ID": 1171,
      "character": "溜",
      "keyWords": "ACCUMULATE",
      "on": "リュウ",
      "kun": "た.まる ・ た.める"
    },
    {
      "ID": 1172,
      "character": "賀",
      "keyWords": "CONGRATULATE",
      "on": "ガ",
      "kun": ""
    },
    {
      "ID": 1173,
      "character": "架",
      "keyWords": "LAY ACROSS",
      "on": "カ",
      "kun": "か.ける ・ か.かる"
    },
    {
      "ID": 1174,
      "character": "染",
      "keyWords": "DYE",
      "on": "セン",
      "kun": "そ.める ・ -ぞ.め ・ -ぞめ ・ そ.まる ・ し.みる ・ -じ.みる ・ し.み"
    },
    {
      "ID": 1175,
      "character": "梨",
      "keyWords": "PEAR",
      "on": "リ*",
      "kun": "なし"
    },
    {
      "ID": 1176,
      "character": "傑",
      "keyWords": "PERSON OF EXCELLENCE",
      "on": "ケツ",
      "kun": ""
    },
    {
      "ID": 1177,
      "character": "貴",
      "keyWords": "NOBLE ・ YOUR HONORABLE",
      "on": "キ",
      "kun": "たっと.い ・ とうと.い ・ たっと.ぶ ・ とうと.ぶ"
    },
    {
      "ID": 1178,
      "character": "潰",
      "keyWords": "CRUSH",
      "on": "カイ",
      "kun": "つぶ.す ・ つぶ.れる"
    },
    {
      "ID": 1179,
      "character": "遺",
      "keyWords": "LEAVE BEHIND",
      "on": "イ ・ ユイ",
      "kun": ""
    },
    {
      "ID": 1180,
      "character": "遣",
      "keyWords": "DISPATCH ・ USE",
      "on": "ケン",
      "kun": "つか.う ・ -つか.い ・ -ず.かい ・ つか.わす"
    },
    {
      "ID": 1181,
      "character": "追",
      "keyWords": "CHASE",
      "on": "ツイ",
      "kun": "お.う"
    },
    {
      "ID": 1182,
      "character": "迫",
      "keyWords": "PRESS",
      "on": "ハク",
      "kun": "せま.る"
    },
    {
      "ID": 1183,
      "character": "泊",
      "keyWords": "STAY OVERNIGHT",
      "on": "ハク",
      "kun": "と.まる ・ と.める"
    },
    {
      "ID": 1184,
      "character": "伯",
      "keyWords": "OLDER SIBLING OF PARENT ・ COUNT",
      "on": "ハク",
      "kun": ""
    },
    {
      "ID": 1185,
      "character": "拍",
      "keyWords": "BEAT",
      "on": "ハク ・ ヒョウ",
      "kun": ""
    },
    {
      "ID": 1186,
      "character": "弔",
      "keyWords": "CONDOLE",
      "on": "チョウ",
      "kun": "とむら.う"
    },
    {
      "ID": 1187,
      "character": "沸",
      "keyWords": "BOIL",
      "on": "フツ",
      "kun": "わ.く ・ わ.かす"
    },
    {
      "ID": 1188,
      "character": "煮",
      "keyWords": "BOIL",
      "on": "シャ",
      "kun": "に.る ・ -に ・ に.える ・ に.やす"
    },
    {
      "ID": 1189,
      "character": "費",
      "keyWords": "SPEND",
      "on": "ヒ",
      "kun": "つい.やす ・ つい.える"
    },
    {
      "ID": 1190,
      "character": "弟",
      "keyWords": "YOUNGER BROTHER",
      "on": "テイ ・ ダイ ・ デ",
      "kun": "おとうと"
    },
    {
      "ID": 1191,
      "character": "第",
      "keyWords": "ORDINAL NUMBER PREFIX",
      "on": "ダイ",
      "kun": ""
    },
    {
      "ID": 1192,
      "character": "剃",
      "keyWords": "SHAVE",
      "on": "テイ",
      "kun": "そ.る ・ す.る"
    },
    {
      "ID": 1193,
      "character": "兄",
      "keyWords": "OLDER BROTHER",
      "on": "ケイ ・ キョウ",
      "kun": "あに"
    },
    {
      "ID": 1194,
      "character": "只",
      "keyWords": "FREE OF CHARGE ・ JUST",
      "on": "シ",
      "kun": "ただ ・ ただ-"
    },
    {
      "ID": 1195,
      "character": "税",
      "keyWords": "TAX",
      "on": "ゼイ",
      "kun": ""
    },
    {
      "ID": 1196,
      "character": "鋭",
      "keyWords": "SHARP",
      "on": "エイ",
      "kun": "するど.い"
    },
    {
      "ID": 1197,
      "character": "説",
      "keyWords": "EXPLAIN ・ THEORY",
      "on": "セツ ・ ゼイ",
      "kun": "と.く"
    },
    {
      "ID": 1198,
      "character": "脱",
      "keyWords": "REMOVE ・ ESCAPE FROM",
      "on": "ダツ",
      "kun": "ぬ.ぐ ・ ぬ.げる"
    },
    {
      "ID": 1199,
      "character": "閲",
      "keyWords": "REVIEW",
      "on": "エツ",
      "kun": ""
    },
    {
      "ID": 1200,
      "character": "祝",
      "keyWords": "CELEBRATE",
      "on": "シュク ・ シュウ",
      "kun": "いわ.う"
    },
    {
      "ID": 1201,
      "character": "況",
      "keyWords": "CONDITIONS",
      "on": "キョウ",
      "kun": ""
    },
    {
      "ID": 1202,
      "character": "悦",
      "keyWords": "DELIGHTED",
      "on": "エツ",
      "kun": ""
    },
    {
      "ID": 1203,
      "character": "克",
      "keyWords": "OVERCOME",
      "on": "コク",
      "kun": ""
    },
    {
      "ID": 1204,
      "character": "競",
      "keyWords": "COMPETE",
      "on": "キョウ ・ ケイ",
      "kun": "きそ.う ・ せ.る"
    },
    {
      "ID": 1205,
      "character": "姉",
      "keyWords": "OLDER SISTER",
      "on": "シ",
      "kun": "あね"
    },
    {
      "ID": 1206,
      "character": "妹",
      "keyWords": "YOUNGER SISTER",
      "on": "マイ",
      "kun": "いもうと"
    },
    {
      "ID": 1207,
      "character": "珠",
      "keyWords": "PEARL",
      "on": "シュ",
      "kun": ""
    },
    {
      "ID": 1208,
      "character": "殊",
      "keyWords": "SPECIAL",
      "on": "シュ",
      "kun": "こと"
    },
    {
      "ID": 1209,
      "character": "序",
      "keyWords": "INTRODUCTORY PART ・ ORDER",
      "on": "ジョ",
      "kun": ""
    },
    {
      "ID": 1210,
      "character": "秩",
      "keyWords": "ORDER",
      "on": "チツ",
      "kun": ""
    },
    {
      "ID": 1211,
      "character": "迭",
      "keyWords": "ALTERNATE",
      "on": "テツ",
      "kun": ""
    },
    {
      "ID": 1212,
      "character": "喜",
      "keyWords": "HAPPY",
      "on": "キ",
      "kun": "よろこ.ぶ ・ よろこ.ばす"
    },
    {
      "ID": 1213,
      "character": "善",
      "keyWords": "GOOD",
      "on": "ゼン",
      "kun": "よ.い"
    },
    {
      "ID": 1214,
      "character": "繕",
      "keyWords": "MEND",
      "on": "ゼン",
      "kun": "つくろ.う"
    },
    {
      "ID": 1215,
      "character": "膳",
      "keyWords": "SMALL FOOD TABLE",
      "on": "ゼン",
      "kun": ""
    },
    {
      "ID": 1216,
      "character": "憾",
      "keyWords": "STRONGLY REGRET",
      "on": "カン",
      "kun": ""
    },
    {
      "ID": 1217,
      "character": "恨",
      "keyWords": "HOLD A GRUDGE",
      "on": "コン",
      "kun": "うら.む ・ うら.めしい"
    },
    {
      "ID": 1218,
      "character": "惜",
      "keyWords": "REGRET",
      "on": "セキ",
      "kun": "お.しい ・ お.しむ"
    },
    {
      "ID": 1219,
      "character": "措",
      "keyWords": "DISPOSE",
      "on": "ソ",
      "kun": ""
    },
    {
      "ID": 1220,
      "character": "借",
      "keyWords": "BORROW",
      "on": "シャク",
      "kun": "か.りる"
    },
    {
      "ID": 1221,
      "character": "錯",
      "keyWords": "MIXED UP",
      "on": "サク",
      "kun": ""
    },
    {
      "ID": 1222,
      "character": "曽",
      "keyWords": "BEFORE",
      "on": "ソウ ・ ソ ・ ゾ",
      "kun": ""
    },
    {
      "ID": 1223,
      "character": "増",
      "keyWords": "INCREASE",
      "on": "ゾウ",
      "kun": "ま.す ・ ま.し ・ ふ.える ・ ふ.やす"
    },
    {
      "ID": 1224,
      "character": "層",
      "keyWords": "STRATUM",
      "on": "ソウ",
      "kun": ""
    },
    {
      "ID": 1225,
      "character": "憎",
      "keyWords": "HATE",
      "on": "ゾウ",
      "kun": "にく.む ・ にく.い ・ にく.らしい ・ にく.しみ"
    },
    {
      "ID": 1226,
      "character": "僧",
      "keyWords": "BONZE",
      "on": "ソウ",
      "kun": ""
    },
    {
      "ID": 1227,
      "character": "贈",
      "keyWords": "PRESENT A GIFT",
      "on": "ゾウ ・ ソウ",
      "kun": "おく.る"
    },
    {
      "ID": 1228,
      "character": "賄",
      "keyWords": "BRIBE",
      "on": "ワイ",
      "kun": "まかな.う"
    },
    {
      "ID": 1229,
      "character": "賂",
      "keyWords": "BRIBE",
      "on": "ロ",
      "kun": ""
    },
    {
      "ID": 1230,
      "character": "賦",
      "keyWords": "INSTALLMENT",
      "on": "フ",
      "kun": ""
    },
    {
      "ID": 1231,
      "character": "賊",
      "keyWords": "BANDIT",
      "on": "ゾク",
      "kun": ""
    },
    {
      "ID": 1232,
      "character": "帯",
      "keyWords": "BELT ・ WEAR",
      "on": "タイ",
      "kun": "お.びる ・ おび"
    },
    {
      "ID": 1233,
      "character": "滞",
      "keyWords": "STAGNATE ・ STAY",
      "on": "タイ",
      "kun": "とどこおる"
    },
    {
      "ID": 1234,
      "character": "渋",
      "keyWords": "NOT GO SMOOTHLY ・ ASTRINGENT",
      "on": "ジュウ",
      "kun": "しぶ ・ しぶ.い ・ しぶ.る"
    },
    {
      "ID": 1235,
      "character": "摂",
      "keyWords": "TAKE IN ・ ACT AS REGENT",
      "on": "セツ",
      "kun": "と.る*"
    },
    {
      "ID": 1236,
      "character": "為",
      "keyWords": "DO ・ SAKE",
      "on": "イ",
      "kun": "ため* ・ な.す*"
    },
    {
      "ID": 1237,
      "character": "偽",
      "keyWords": "FALSIFY",
      "on": "ギ",
      "kun": "いつわ.る ・ にせ"
    },
    {
      "ID": 1238,
      "character": "参",
      "keyWords": "PARTICIPATE ・ VISIT A HOLY PLACE",
      "on": "サン ・ シン*",
      "kun": "まい.る"
    },
    {
      "ID": 1239,
      "character": "惨",
      "keyWords": "MISERABLE ・ CRUEL",
      "on": "サン ・ ザン",
      "kun": "みじ.め"
    },
    {
      "ID": 1240,
      "character": "呂",
      "keyWords": "PHONETIC [RO]",
      "on": "ロ",
      "kun": ""
    },
    {
      "ID": 1241,
      "character": "侶",
      "keyWords": "COMPANION",
      "on": "リョ",
      "kun": ""
    },
    {
      "ID": 1242,
      "character": "宮",
      "keyWords": "ROYAL PALACE ・ SHINTO SHRINE",
      "on": "キュウ ・ グウ ・ ク",
      "kun": "みや"
    },
    {
      "ID": 1243,
      "character": "営",
      "keyWords": "OPERATE ・ BARRACKS",
      "on": "エイ",
      "kun": "いとな.む"
    },
    {
      "ID": 1244,
      "character": "蛍",
      "keyWords": "FIREFLY",
      "on": "ケイ",
      "kun": "ほたる"
    },
    {
      "ID": 1245,
      "character": "栄",
      "keyWords": "FLOURISH ・ GLORY",
      "on": "エイ",
      "kun": "さか.える ・ は.え ・ -ば.え ・ は.える"
    },
    {
      "ID": 1246,
      "character": "誉",
      "keyWords": "HONOR",
      "on": "ヨ",
      "kun": "ほま.れ"
    },
    {
      "ID": 1247,
      "character": "挙",
      "keyWords": "NOMINATE ・ NOTEWORTHY ACT ・ RAISE",
      "on": "キョ",
      "kun": "あ.げる ・ あ.がる"
    },
    {
      "ID": 1248,
      "character": "拳",
      "keyWords": "FIST",
      "on": "ケン ・ ゲン*",
      "kun": "こぶし"
    },
    {
      "ID": 1249,
      "character": "桜",
      "keyWords": "CHERRY",
      "on": "オウ",
      "kun": "さくら"
    },
    {
      "ID": 1250,
      "character": "妥",
      "keyWords": "COME TO TERMS",
      "on": "ダ",
      "kun": ""
    },
    {
      "ID": 1251,
      "character": "咲",
      "keyWords": "BLOOM",
      "on": "",
      "kun": "さ.く ・ -ざ.き"
    },
    {
      "ID": 1252,
      "character": "朕",
      "keyWords": "IMPERIAL WE",
      "on": "チン",
      "kun": ""
    },
    {
      "ID": 1253,
      "character": "茎",
      "keyWords": "STEM",
      "on": "ケイ",
      "kun": "くき"
    },
    {
      "ID": 1254,
      "character": "径",
      "keyWords": "PATH ・ DIAMETER",
      "on": "ケイ",
      "kun": ""
    },
    {
      "ID": 1255,
      "character": "怪",
      "keyWords": "MYSTERIOUS",
      "on": "カイ ・ ケ*",
      "kun": "あや.しい ・ あや.しむ"
    },
    {
      "ID": 1256,
      "character": "軽",
      "keyWords": "LIGHT",
      "on": "ケイ",
      "kun": "かる.い ・ かろ.やか"
    },
    {
      "ID": 1257,
      "character": "経",
      "keyWords": "PASS THROUGH ・ MANAGE ・ SUTRA",
      "on": "ケイ ・ キョウ",
      "kun": "へ.る ・ た.つ*"
    },
    {
      "ID": 1258,
      "character": "斉",
      "keyWords": "EQUAL",
      "on": "セイ",
      "kun": ""
    },
    {
      "ID": 1259,
      "character": "斎",
      "keyWords": "OBSERVE RELIGIOUS ABSTINENCE ・ STUDY",
      "on": "サイ",
      "kun": ""
    },
    {
      "ID": 1260,
      "character": "済",
      "keyWords": "SETTLE ・ RELIEVE",
      "on": "サイ",
      "kun": "す.む ・ -ず.み ・ -ずみ ・ す.まない ・ す.ます ・ -す.ます ・ す.ませる"
    },
    {
      "ID": 1261,
      "character": "剤",
      "keyWords": "PREPARATION",
      "on": "ザイ",
      "kun": ""
    },
    {
      "ID": 1262,
      "character": "剖",
      "keyWords": "DISSECT",
      "on": "ボウ",
      "kun": ""
    },
    {
      "ID": 1263,
      "character": "陪",
      "keyWords": "ATTEND UPON A SUPERIOR",
      "on": "バイ",
      "kun": ""
    },
    {
      "ID": 1264,
      "character": "培",
      "keyWords": "CULTIVATE",
      "on": "バイ",
      "kun": "つちか.う"
    },
    {
      "ID": 1265,
      "character": "賠",
      "keyWords": "COMPENSATE",
      "on": "バイ",
      "kun": ""
    },
    {
      "ID": 1266,
      "character": "貼",
      "keyWords": "STICK ON",
      "on": "チョウ ・ テン*",
      "kun": "は.る ・ -ば.り"
    },
    {
      "ID": 1267,
      "character": "粘",
      "keyWords": "STICKY",
      "on": "ネン",
      "kun": "ねば.る"
    },
    {
      "ID": 1268,
      "character": "衡",
      "keyWords": "BALANCE",
      "on": "コウ",
      "kun": ""
    },
    {
      "ID": 1269,
      "character": "換",
      "keyWords": "EXCHANGE",
      "on": "カン",
      "kun": "か.える ・ -か.える ・ か.わる"
    },
    {
      "ID": 1270,
      "character": "喚",
      "keyWords": "CALL",
      "on": "カン",
      "kun": ""
    },
    {
      "ID": 1271,
      "character": "絶",
      "keyWords": "BREAK OFF ・ COME TO AN END ・ WITHOUT MATCH",
      "on": "ゼツ",
      "kun": "た.える ・ た.やす ・ た.つ"
    },
    {
      "ID": 1272,
      "character": "免",
      "keyWords": "EXEMPTION",
      "on": "メン",
      "kun": "まぬか.れる ・ まぬが.れる"
    },
    {
      "ID": 1273,
      "character": "逸",
      "keyWords": "LET SLIP",
      "on": "イツ",
      "kun": ""
    },
    {
      "ID": 1274,
      "character": "勉",
      "keyWords": "ENDEAVOR",
      "on": "ベン",
      "kun": ""
    },
    {
      "ID": 1275,
      "character": "晩",
      "keyWords": "EVENING",
      "on": "バン",
      "kun": ""
    },
    {
      "ID": 1276,
      "character": "許",
      "keyWords": "PERMIT",
      "on": "キョ",
      "kun": "ゆる.す"
    },
    {
      "ID": 1277,
      "character": "象",
      "keyWords": "PHENOMENON ・ ELEPHANT",
      "on": "ショウ ・ ゾウ",
      "kun": ""
    },
    {
      "ID": 1278,
      "character": "像",
      "keyWords": "IMAGE",
      "on": "ゾウ",
      "kun": ""
    },
    {
      "ID": 1279,
      "character": "彫",
      "keyWords": "CARVE",
      "on": "チョウ",
      "kun": "ほ.る ・ -ぼ.り"
    },
    {
      "ID": 1280,
      "character": "景",
      "keyWords": "SCENE",
      "on": "ケイ",
      "kun": ""
    },
    {
      "ID": 1281,
      "character": "影",
      "keyWords": "SHADOW",
      "on": "エイ",
      "kun": "かげ"
    },
    {
      "ID": 1282,
      "character": "撮",
      "keyWords": "PHOTOGRAPH",
      "on": "サツ",
      "kun": "と.る ・ -ど.り"
    },
    {
      "ID": 1283,
      "character": "就",
      "keyWords": "SET ABOUT",
      "on": "シュウ ・ ジュ",
      "kun": "つ.く ・ つ.ける"
    },
    {
      "ID": 1284,
      "character": "涼",
      "keyWords": "COOL",
      "on": "リョウ",
      "kun": "すず.しい ・ すず.む"
    },
    {
      "ID": 1285,
      "character": "鯨",
      "keyWords": "WHALE",
      "on": "ゲイ",
      "kun": "くじら"
    },
    {
      "ID": 1286,
      "character": "隔",
      "keyWords": "SEPARATE",
      "on": "カク",
      "kun": "へだ.てる ・ へだ.たる"
    },
    {
      "ID": 1287,
      "character": "融",
      "keyWords": "FUSE ・ FINANCE",
      "on": "ユウ",
      "kun": ""
    },
    {
      "ID": 1288,
      "character": "肖",
      "keyWords": "LIKENESS",
      "on": "ショウ",
      "kun": ""
    },
    {
      "ID": 1289,
      "character": "消",
      "keyWords": "EXTINGUISH ・ SPEND",
      "on": "ショウ",
      "kun": "き.える ・ け.す"
    },
    {
      "ID": 1290,
      "character": "硝",
      "keyWords": "NITER",
      "on": "ショウ",
      "kun": ""
    },
    {
      "ID": 1291,
      "character": "梢",
      "keyWords": "TIP OF A TWIG",
      "on": "ショウ",
      "kun": "こずえ"
    },
    {
      "ID": 1292,
      "character": "削",
      "keyWords": "CUT BY CHIPPING",
      "on": "サク",
      "kun": "けず.る"
    },
    {
      "ID": 1293,
      "character": "宵",
      "keyWords": "EARLY EVENING",
      "on": "ショウ",
      "kun": "よい"
    },
    {
      "ID": 1294,
      "character": "宴",
      "keyWords": "BANQUET",
      "on": "エン",
      "kun": ""
    },
    {
      "ID": 1295,
      "character": "郷",
      "keyWords": "HOMETOWN",
      "on": "キョウ ・ ゴウ",
      "kun": "さと*"
    },
    {
      "ID": 1296,
      "character": "饗",
      "keyWords": "BANQUET",
      "on": "キョウ",
      "kun": ""
    },
    {
      "ID": 1297,
      "character": "響",
      "keyWords": "REVERBERATE",
      "on": "キョウ",
      "kun": "ひび.く"
    },
    {
      "ID": 1298,
      "character": "城",
      "keyWords": "CASTLE",
      "on": "ジョウ",
      "kun": "しろ"
    },
    {
      "ID": 1299,
      "character": "誠",
      "keyWords": "SINCERITY",
      "on": "セイ",
      "kun": "まこと"
    },
    {
      "ID": 1300,
      "character": "盛",
      "keyWords": "PROSPER",
      "on": "セイ ・ ジョウ",
      "kun": "も.る ・ さか.る ・ さか.ん"
    },
    {
      "ID": 1301,
      "character": "旺",
      "keyWords": "FLOURISHING",
      "on": "オウ",
      "kun": ""
    },
    {
      "ID": 1302,
      "character": "盆",
      "keyWords": "TRAY ・ BON FESTIVAL",
      "on": "ボン",
      "kun": ""
    },
    {
      "ID": 1303,
      "character": "蓋",
      "keyWords": "LID",
      "on": "ガイ",
      "kun": "ふた"
    },
    {
      "ID": 1304,
      "character": "盗",
      "keyWords": "STEAL",
      "on": "トウ",
      "kun": "ぬす.む"
    },
    {
      "ID": 1305,
      "character": "盟",
      "keyWords": "ALLIANCE",
      "on": "メイ",
      "kun": ""
    },
    {
      "ID": 1306,
      "character": "塩",
      "keyWords": "SALT",
      "on": "エン",
      "kun": "しお"
    },
    {
      "ID": 1307,
      "character": "傷",
      "keyWords": "WOUND",
      "on": "ショウ",
      "kun": "きず ・ いた.む ・ いた.める"
    },
    {
      "ID": 1308,
      "character": "揚",
      "keyWords": "RAISE HIGH ・ FRY",
      "on": "ヨウ",
      "kun": "あ.げる ・ -あ.げ ・ あ.がる"
    },
    {
      "ID": 1309,
      "character": "暢",
      "keyWords": "FLUENT",
      "on": "チョウ",
      "kun": ""
    },
    {
      "ID": 1310,
      "character": "陽",
      "keyWords": "SUN ・ POSITIVE",
      "on": "ヨウ",
      "kun": "ひ"
    },
    {
      "ID": 1311,
      "character": "陰",
      "keyWords": "SHADOW ・ NEGATIVE",
      "on": "イン",
      "kun": "かげ ・ かげ.る"
    },
    {
      "ID": 1312,
      "character": "隠",
      "keyWords": "HIDE",
      "on": "イン",
      "kun": "かく.す ・ かく.し- ・ かく.れる"
    },
    {
      "ID": 1313,
      "character": "穏",
      "keyWords": "CALM ・ MILD",
      "on": "オン",
      "kun": "おだ.やか"
    },
    {
      "ID": 1314,
      "character": "穂",
      "keyWords": "SPIKE",
      "on": "スイ",
      "kun": "ほ"
    },
    {
      "ID": 1315,
      "character": "稲",
      "keyWords": "RICE PLANT",
      "on": "トウ",
      "kun": "いね ・ いな-"
    },
    {
      "ID": 1316,
      "character": "愁",
      "keyWords": "MELANCHOLY",
      "on": "シュウ",
      "kun": "うれ.える ・ うれ.い"
    },
    {
      "ID": 1317,
      "character": "裁",
      "keyWords": "CUT OUT ・ JUDGE",
      "on": "サイ",
      "kun": "た.つ ・ さば.く"
    },
    {
      "ID": 1318,
      "character": "載",
      "keyWords": "LOAD ・ PUT IN PRINT",
      "on": "サイ",
      "kun": "の.せる ・ の.る"
    },
    {
      "ID": 1319,
      "character": "栽",
      "keyWords": "PLANTING",
      "on": "サイ",
      "kun": ""
    },
    {
      "ID": 1320,
      "character": "赦",
      "keyWords": "AMNESTY",
      "on": "シャ",
      "kun": ""
    },
    {
      "ID": 1321,
      "character": "跡",
      "keyWords": "TRACE",
      "on": "セキ",
      "kun": "あと"
    },
    {
      "ID": 1322,
      "character": "踪",
      "keyWords": "TRACE",
      "on": "ソウ",
      "kun": ""
    },
    {
      "ID": 1323,
      "character": "痕",
      "keyWords": "SCAR",
      "on": "コン",
      "kun": "あと"
    },
    {
      "ID": 1324,
      "character": "蹴",
      "keyWords": "KICK",
      "on": "シュウ",
      "kun": "け.る"
    },
    {
      "ID": 1325,
      "character": "踊",
      "keyWords": "DANCE",
      "on": "ヨウ",
      "kun": "おど.る ・ おど.り"
    },
    {
      "ID": 1326,
      "character": "踏",
      "keyWords": "TREAD",
      "on": "トウ",
      "kun": "ふ.む ・ ふ.まえる"
    },
    {
      "ID": 1327,
      "character": "躍",
      "keyWords": "LEAP",
      "on": "ヤク",
      "kun": "おど.る"
    },
    {
      "ID": 1328,
      "character": "濯",
      "keyWords": "RINSE",
      "on": "タク",
      "kun": ""
    },
    {
      "ID": 1329,
      "character": "奇",
      "keyWords": "UNUSUAL",
      "on": "キ",
      "kun": ""
    },
    {
      "ID": 1330,
      "character": "寄",
      "keyWords": "CONTRIBUTE ・ DRAW NEAR",
      "on": "キ",
      "kun": "よ.る ・ -よ.り ・ よ.せる"
    },
    {
      "ID": 1331,
      "character": "騎",
      "keyWords": "RIDE ON HORSEBACK",
      "on": "キ",
      "kun": ""
    },
    {
      "ID": 1332,
      "character": "椅",
      "keyWords": "CHAIR",
      "on": "イ",
      "kun": ""
    },
    {
      "ID": 1333,
      "character": "崎",
      "keyWords": "PROMONTORY",
      "on": "",
      "kun": "さき"
    },
    {
      "ID": 1334,
      "character": "埼",
      "keyWords": "PROMONTORY",
      "on": "キ*",
      "kun": "さい"
    },
    {
      "ID": 1335,
      "character": "岬",
      "keyWords": "CAPE",
      "on": "",
      "kun": "みさき"
    },
    {
      "ID": 1336,
      "character": "模",
      "keyWords": "PATTERN",
      "on": "モ ・ ボ",
      "kun": ""
    },
    {
      "ID": 1337,
      "character": "膜",
      "keyWords": "MEMBRANE",
      "on": "マク",
      "kun": ""
    },
    {
      "ID": 1338,
      "character": "漠",
      "keyWords": "DESERT ・ OBSCURE",
      "on": "バク",
      "kun": ""
    },
    {
      "ID": 1339,
      "character": "幕",
      "keyWords": "CURTAIN ・ SHOGUNATE",
      "on": "マク ・ バク",
      "kun": ""
    },
    {
      "ID": 1340,
      "character": "墓",
      "keyWords": "GRAVE",
      "on": "ボ",
      "kun": "はか"
    },
    {
      "ID": 1341,
      "character": "募",
      "keyWords": "RAISE",
      "on": "ボ",
      "kun": "つの.る"
    },
    {
      "ID": 1342,
      "character": "暮",
      "keyWords": "DUSK ・ LIVE",
      "on": "ボ",
      "kun": "く.れる ・ く.らす"
    },
    {
      "ID": 1343,
      "character": "慕",
      "keyWords": "ADORE",
      "on": "ボ",
      "kun": "した.う"
    },
    {
      "ID": 1344,
      "character": "添",
      "keyWords": "ADD TO",
      "on": "テン",
      "kun": "そ.える ・ そ.う"
    },
    {
      "ID": 1345,
      "character": "恭",
      "keyWords": "RESPECTFUL",
      "on": "キョウ",
      "kun": "うやうや.しい"
    },
    {
      "ID": 1346,
      "character": "暴",
      "keyWords": "VIOLENT ・ DISCLOSE",
      "on": "ボウ ・ バク",
      "kun": "あば.く ・ あば.れる"
    },
    {
      "ID": 1347,
      "character": "爆",
      "keyWords": "EXPLODE",
      "on": "バク",
      "kun": ""
    },
    {
      "ID": 1348,
      "character": "沿",
      "keyWords": "ALONG(SIDE)",
      "on": "エン",
      "kun": "そ.う ・ -ぞ.い"
    },
    {
      "ID": 1349,
      "character": "礎",
      "keyWords": "FOUNDATION STONE",
      "on": "ソ",
      "kun": "いしずえ"
    },
    {
      "ID": 1350,
      "character": "疑",
      "keyWords": "DOUBT",
      "on": "ギ",
      "kun": "うたが.う"
    },
    {
      "ID": 1351,
      "character": "凝",
      "keyWords": "CONGEAL",
      "on": "ギョウ",
      "kun": "こ.る ・ こ.らす"
    },
    {
      "ID": 1352,
      "character": "擬",
      "keyWords": "IMITATE",
      "on": "ギ",
      "kun": ""
    },
    {
      "ID": 1353,
      "character": "倣",
      "keyWords": "COPY AFTER",
      "on": "ホウ",
      "kun": "なら.う"
    },
    {
      "ID": 1354,
      "character": "似",
      "keyWords": "RESEMBLE",
      "on": "ジ",
      "kun": "に.る"
    },
    {
      "ID": 1355,
      "character": "俵",
      "keyWords": "STRAW SACK",
      "on": "ヒョウ",
      "kun": "たわら"
    },
    {
      "ID": 1356,
      "character": "俺",
      "keyWords": "I",
      "on": "",
      "kun": "おれ"
    },
    {
      "ID": 1357,
      "character": "庵",
      "keyWords": "HERMITAGE",
      "on": "アン",
      "kun": "いおり"
    },
    {
      "ID": 1358,
      "character": "僕",
      "keyWords": "I ・ MANSERVANT",
      "on": "ボク",
      "kun": ""
    },
    {
      "ID": 1359,
      "character": "撲",
      "keyWords": "DEAL A BLOW",
      "on": "ボク",
      "kun": ""
    },
    {
      "ID": 1360,
      "character": "叩",
      "keyWords": "STRIKE",
      "on": "コウ",
      "kun": "たた.く"
    },
    {
      "ID": 1361,
      "character": "伐",
      "keyWords": "CUT DOWN",
      "on": "バツ",
      "kun": ""
    },
    {
      "ID": 1362,
      "character": "閥",
      "keyWords": "CLIQUE",
      "on": "バツ",
      "kun": ""
    },
    {
      "ID": 1363,
      "character": "闘",
      "keyWords": "FIGHT",
      "on": "トウ",
      "kun": "たたか.う"
    },
    {
      "ID": 1364,
      "character": "闇",
      "keyWords": "DARK",
      "on": "アン*",
      "kun": "やみ"
    },
    {
      "ID": 1365,
      "character": "閑",
      "keyWords": "LEISURE ・ QUIET",
      "on": "カン",
      "kun": ""
    },
    {
      "ID": 1366,
      "character": "脈",
      "keyWords": "VEIN ・ PULSE",
      "on": "ミャク",
      "kun": ""
    },
    {
      "ID": 1367,
      "character": "派",
      "keyWords": "SECT ・ DISPATCH",
      "on": "ハ",
      "kun": ""
    },
    {
      "ID": 1368,
      "character": "缶",
      "keyWords": "CAN",
      "on": "カン",
      "kun": ""
    },
    {
      "ID": 1369,
      "character": "揺",
      "keyWords": "SHAKE",
      "on": "ヨウ",
      "kun": "ゆ.れる ・ ゆ.る ・ ゆ.らぐ ・ ゆ.るぐ ・ ゆ.する ・ ゆ.さぶる ・ ゆ.すぶる"
    },
    {
      "ID": 1370,
      "character": "謡",
      "keyWords": "POPULAR SONG",
      "on": "ヨウ",
      "kun": "うたい ・ うた.う"
    },
    {
      "ID": 1371,
      "character": "遥",
      "keyWords": "FAR",
      "on": "ヨウ",
      "kun": "はる.か"
    },
    {
      "ID": 1372,
      "character": "陶",
      "keyWords": "POTTERY",
      "on": "トウ",
      "kun": ""
    },
    {
      "ID": 1373,
      "character": "陳",
      "keyWords": "SET FORTH",
      "on": "チン",
      "kun": ""
    },
    {
      "ID": 1374,
      "character": "陣",
      "keyWords": "BATTLE FORMATION ・ CAMP",
      "on": "ジン",
      "kun": ""
    },
    {
      "ID": 1375,
      "character": "陥",
      "keyWords": "FALL IN [INTO]",
      "on": "カン",
      "kun": "おちい.る ・ おとしい.れる"
    },
    {
      "ID": 1376,
      "character": "隆",
      "keyWords": "PROSPER",
      "on": "リュウ",
      "kun": ""
    },
    {
      "ID": 1377,
      "character": "降",
      "keyWords": "DESCEND",
      "on": "コウ",
      "kun": "お.りる ・ お.ろす ・ ふ.る ・ ふ.り"
    },
    {
      "ID": 1378,
      "character": "峰",
      "keyWords": "PEAK",
      "on": "ホウ",
      "kun": "みね"
    },
    {
      "ID": 1379,
      "character": "逢",
      "keyWords": "MEET",
      "on": "ホウ",
      "kun": "あ.う"
    },
    {
      "ID": 1380,
      "character": "縫",
      "keyWords": "SEW",
      "on": "ホウ",
      "kun": "ぬ.う"
    },
    {
      "ID": 1381,
      "character": "蜂",
      "keyWords": "BEE",
      "on": "ホウ",
      "kun": "はち"
    },
    {
      "ID": 1382,
      "character": "蜜",
      "keyWords": "HONEY",
      "on": "ミツ",
      "kun": ""
    },
    {
      "ID": 1383,
      "character": "密",
      "keyWords": "CLOSE ・ SECRET",
      "on": "ミツ",
      "kun": ""
    },
    {
      "ID": 1384,
      "character": "秘",
      "keyWords": "SECRET",
      "on": "ヒ",
      "kun": "ひ.める"
    },
    {
      "ID": 1385,
      "character": "欧",
      "keyWords": "EUROPE",
      "on": "オウ",
      "kun": ""
    },
    {
      "ID": 1386,
      "character": "枢",
      "keyWords": "PIVOT",
      "on": "スウ",
      "kun": ""
    },
    {
      "ID": 1387,
      "character": "殴",
      "keyWords": "BEAT",
      "on": "オウ",
      "kun": "なぐ.る"
    },
    {
      "ID": 1388,
      "character": "駆",
      "keyWords": "DRIVE",
      "on": "ク",
      "kun": "か.ける ・ か.る"
    },
    {
      "ID": 1389,
      "character": "馳",
      "keyWords": "GALLOP",
      "on": "チ",
      "kun": "は.せる"
    },
    {
      "ID": 1390,
      "character": "騒",
      "keyWords": "CLAMOR",
      "on": "ソウ",
      "kun": "さわ.ぐ"
    },
    {
      "ID": 1391,
      "character": "旭",
      "keyWords": "RISING SUN",
      "on": "キョク",
      "kun": "あさひ"
    },
    {
      "ID": 1392,
      "character": "旦",
      "keyWords": "DAWN",
      "on": "タン ・ ダン",
      "kun": ""
    },
    {
      "ID": 1393,
      "character": "但",
      "keyWords": "PROVIDED THAT",
      "on": "",
      "kun": "ただ.し"
    },
    {
      "ID": 1394,
      "character": "担",
      "keyWords": "BEAR ON SHOULDER ・ UNDERTAKE",
      "on": "タン",
      "kun": "かつ.ぐ ・ にな.う"
    },
    {
      "ID": 1395,
      "character": "亘",
      "keyWords": "SPAN",
      "on": "コウ",
      "kun": "わた.る"
    },
    {
      "ID": 1396,
      "character": "恒",
      "keyWords": "CONSTANT",
      "on": "コウ",
      "kun": ""
    },
    {
      "ID": 1397,
      "character": "垣",
      "keyWords": "FENCE",
      "on": "",
      "kun": "かき"
    },
    {
      "ID": 1398,
      "character": "宣",
      "keyWords": "PROCLAIM",
      "on": "セン",
      "kun": ""
    },
    {
      "ID": 1399,
      "character": "喧",
      "keyWords": "CLAMOROUS",
      "on": "ケン",
      "kun": "かまびす.しい ・ やかま.しい"
    },
    {
      "ID": 1400,
      "character": "嘩",
      "keyWords": "NOISY",
      "on": "カ",
      "kun": ""
    },
    {
      "ID": 1401,
      "character": "唾",
      "keyWords": "SALIVA",
      "on": "ダ",
      "kun": "つば"
    },
    {
      "ID": 1402,
      "character": "壷",
      "keyWords": "JAR",
      "on": "コ",
      "kun": "つぼ"
    },
    {
      "ID": 1403,
      "character": "坪",
      "keyWords": "<TSUBO> (about 3.3 square meters)",
      "on": "",
      "kun": "つぼ"
    },
    {
      "ID": 1404,
      "character": "畔",
      "keyWords": "WATERSIDE",
      "on": "ハン",
      "kun": ""
    },
    {
      "ID": 1405,
      "character": "衆",
      "keyWords": "MULTITUDE",
      "on": "シュウ ・ シュ",
      "kun": ""
    },
    {
      "ID": 1406,
      "character": "伊",
      "keyWords": "PHONETIC [I]",
      "on": "イ",
      "kun": ""
    },
    {
      "ID": 1407,
      "character": "君",
      "keyWords": "RULER ・ FAMILIAR TITLE ・ YOU",
      "on": "クン",
      "kun": "きみ ・ -ぎみ"
    },
    {
      "ID": 1408,
      "character": "群",
      "keyWords": "GROUP",
      "on": "グン",
      "kun": "む.れる ・ む.れ ・ むら ・ むら.がる"
    },
    {
      "ID": 1409,
      "character": "郡",
      "keyWords": "COUNTY",
      "on": "グン",
      "kun": ""
    },
    {
      "ID": 1410,
      "character": "那",
      "keyWords": "PHONETIC [NA]",
      "on": "ナ",
      "kun": ""
    },
    {
      "ID": 1411,
      "character": "邦",
      "keyWords": "STATE ・ JAPAN",
      "on": "ホウ",
      "kun": ""
    },
    {
      "ID": 1412,
      "character": "郊",
      "keyWords": "SUBURB",
      "on": "コウ",
      "kun": ""
    },
    {
      "ID": 1413,
      "character": "効",
      "keyWords": "EFFECT",
      "on": "コウ",
      "kun": "き.く"
    },
    {
      "ID": 1414,
      "character": "絞",
      "keyWords": "STRANGLE ・ WRING",
      "on": "コウ",
      "kun": "しぼ.る ・ し.める ・ し.まる"
    },
    {
      "ID": 1415,
      "character": "搾",
      "keyWords": "SQUEEZE",
      "on": "サク",
      "kun": "しぼ.る"
    },
    {
      "ID": 1416,
      "character": "紋",
      "keyWords": "CREST",
      "on": "モン",
      "kun": ""
    },
    {
      "ID": 1417,
      "character": "菊",
      "keyWords": "CHRYSANTHEMUM",
      "on": "キク",
      "kun": ""
    },
    {
      "ID": 1418,
      "character": "帝",
      "keyWords": "EMPEROR",
      "on": "テイ",
      "kun": ""
    },
    {
      "ID": 1419,
      "character": "締",
      "keyWords": "CONCLUDE ・ TIGHTEN",
      "on": "テイ",
      "kun": "し.まる ・ し.まり ・ し.める ・ -し.め ・ -じ.め"
    },
    {
      "ID": 1420,
      "character": "諦",
      "keyWords": "GIVE UP",
      "on": "テイ",
      "kun": "あきら.める"
    },
    {
      "ID": 1421,
      "character": "享",
      "keyWords": "ENJOY",
      "on": "キョウ",
      "kun": ""
    },
    {
      "ID": 1422,
      "character": "郭",
      "keyWords": "OUTER ENCLOSURE",
      "on": "カク",
      "kun": ""
    },
    {
      "ID": 1423,
      "character": "亭",
      "keyWords": "INN ・ PSEUDONYM SUFFIX",
      "on": "テイ",
      "kun": ""
    },
    {
      "ID": 1424,
      "character": "停",
      "keyWords": "STOP",
      "on": "テイ",
      "kun": ""
    },
    {
      "ID": 1425,
      "character": "昆",
      "keyWords": "INSECT",
      "on": "コン",
      "kun": ""
    },
    {
      "ID": 1426,
      "character": "混",
      "keyWords": "MIX",
      "on": "コン",
      "kun": "ま.じる ・ -ま.じり ・ ま.ざる ・ ま.ぜる ・ こ.む"
    },
    {
      "ID": 1427,
      "character": "皆",
      "keyWords": "ALL",
      "on": "カイ",
      "kun": "みな ・ みんな*"
    },
    {
      "ID": 1428,
      "character": "楷",
      "keyWords": "BLOCK CHARACTER STYLE",
      "on": "カイ",
      "kun": ""
    },
    {
      "ID": 1429,
      "character": "諧",
      "keyWords": "HARMONY",
      "on": "カイ",
      "kun": ""
    },
    {
      "ID": 1430,
      "character": "階",
      "keyWords": "FLOOR ・ RANK",
      "on": "カイ",
      "kun": ""
    },
    {
      "ID": 1431,
      "character": "陛",
      "keyWords": "IMPERIAL PALACE STEPS",
      "on": "ヘイ",
      "kun": ""
    },
    {
      "ID": 1432,
      "character": "陸",
      "keyWords": "LAND",
      "on": "リク",
      "kun": ""
    },
    {
      "ID": 1433,
      "character": "睦",
      "keyWords": "FRIENDLY",
      "on": "ボク",
      "kun": "むつ.まじい* ・ むつ.む*"
    },
    {
      "ID": 1434,
      "character": "勢",
      "keyWords": "POWER ・ CONDITION",
      "on": "セイ",
      "kun": "いきお.い"
    },
    {
      "ID": 1435,
      "character": "熱",
      "keyWords": "HEAT",
      "on": "ネツ",
      "kun": "あつ.い"
    },
    {
      "ID": 1436,
      "character": "熟",
      "keyWords": "MATURE",
      "on": "ジュク",
      "kun": "う.れる"
    },
    {
      "ID": 1437,
      "character": "塾",
      "keyWords": "PRIVATE SCHOOL",
      "on": "ジュク",
      "kun": ""
    },
    {
      "ID": 1438,
      "character": "陵",
      "keyWords": "IMPERIAL MAUSOLEUM",
      "on": "リョウ",
      "kun": "みささぎ"
    },
    {
      "ID": 1439,
      "character": "菱",
      "keyWords": "RHOMBUS",
      "on": "リョウ",
      "kun": "ひし"
    },
    {
      "ID": 1440,
      "character": "俊",
      "keyWords": "BRILLIANT PERSON",
      "on": "シュン",
      "kun": ""
    },
    {
      "ID": 1441,
      "character": "唆",
      "keyWords": "INSTIGATE",
      "on": "サ",
      "kun": "そそのか.す"
    },
    {
      "ID": 1442,
      "character": "筈",
      "keyWords": "TO BE EXPECTED",
      "on": "カツ",
      "kun": "はず"
    },
    {
      "ID": 1443,
      "character": "箸",
      "keyWords": "CHOPSTICKS",
      "on": "チョ*",
      "kun": "はし"
    },
    {
      "ID": 1444,
      "character": "暑",
      "keyWords": "HOT",
      "on": "ショ",
      "kun": "あつ.い"
    },
    {
      "ID": 1445,
      "character": "署",
      "keyWords": "GOVERNMENT OFFICE ・ SIGN ONE'S NAME",
      "on": "ショ",
      "kun": ""
    },
    {
      "ID": 1446,
      "character": "曙",
      "keyWords": "DAWN",
      "on": "ショ ・ ジョ",
      "kun": "あけぼの"
    },
    {
      "ID": 1447,
      "character": "賭",
      "keyWords": "WAGER",
      "on": "ト",
      "kun": "か.ける"
    },
    {
      "ID": 1448,
      "character": "諸",
      "keyWords": "VARIOUS",
      "on": "ショ",
      "kun": ""
    },
    {
      "ID": 1449,
      "character": "儲",
      "keyWords": "PROFIT",
      "on": "チョ",
      "kun": "もう.ける ・ もう.かる ・ もうけ"
    },
    {
      "ID": 1450,
      "character": "緒",
      "keyWords": "OUTSET ・ LINE",
      "on": "ショ ・ チョ",
      "kun": "お"
    },
    {
      "ID": 1451,
      "character": "翁",
      "keyWords": "OLD MAN",
      "on": "オウ",
      "kun": ""
    },
    {
      "ID": 1452,
      "character": "婆",
      "keyWords": "OLD WOMAN",
      "on": "バ",
      "kun": "ばあ"
    },
    {
      "ID": 1453,
      "character": "姿",
      "keyWords": "FIGURE",
      "on": "シ",
      "kun": "すがた"
    },
    {
      "ID": 1454,
      "character": "恣",
      "keyWords": "ARBITRARY",
      "on": "シ",
      "kun": ""
    },
    {
      "ID": 1455,
      "character": "妄",
      "keyWords": "RASH",
      "on": "モウ ・ ボウ",
      "kun": ""
    },
    {
      "ID": 1456,
      "character": "萎",
      "keyWords": "WILT",
      "on": "イ",
      "kun": "なえ.る ・ しぼ.む* ・ しお.れる* ・ しな.びる*"
    },
    {
      "ID": 1457,
      "character": "妻",
      "keyWords": "WIFE",
      "on": "サイ",
      "kun": "つま"
    },
    {
      "ID": 1458,
      "character": "凄",
      "keyWords": "TREMENDOUS",
      "on": "セイ",
      "kun": "すご.い* ・ すさ.まじい* ・ すご.む*"
    },
    {
      "ID": 1459,
      "character": "章",
      "keyWords": "CHAPTER ・ BADGE",
      "on": "ショウ",
      "kun": ""
    },
    {
      "ID": 1460,
      "character": "彰",
      "keyWords": "PROCLAIM MERITS",
      "on": "ショウ",
      "kun": ""
    },
    {
      "ID": 1461,
      "character": "障",
      "keyWords": "HINDRANCE",
      "on": "ショウ",
      "kun": "さわ.る"
    },
    {
      "ID": 1462,
      "character": "辛",
      "keyWords": "PUNGENT ・ HARD",
      "on": "シン",
      "kun": "から.い ・ つら.い*"
    },
    {
      "ID": 1463,
      "character": "宰",
      "keyWords": "PRESIDE",
      "on": "サイ",
      "kun": ""
    },
    {
      "ID": 1464,
      "character": "辣",
      "keyWords": "SHARP",
      "on": "ラツ",
      "kun": ""
    },
    {
      "ID": 1465,
      "character": "辞",
      "keyWords": "WORD ・ RESIGN",
      "on": "ジ",
      "kun": "や.める"
    },
    {
      "ID": 1466,
      "character": "壁",
      "keyWords": "WALL",
      "on": "ヘキ",
      "kun": "かべ"
    },
    {
      "ID": 1467,
      "character": "璧",
      "keyWords": "MAGNIFICENT JEWEL",
      "on": "ヘキ",
      "kun": ""
    },
    {
      "ID": 1468,
      "character": "癖",
      "keyWords": "HABIT",
      "on": "ヘキ",
      "kun": "くせ"
    },
    {
      "ID": 1469,
      "character": "避",
      "keyWords": "AVOID",
      "on": "ヒ",
      "kun": "さ.ける"
    },
    {
      "ID": 1470,
      "character": "幸",
      "keyWords": "GOOD FORTUNE ・ HAPPINESS",
      "on": "コウ",
      "kun": "さいわ.い ・ さち ・ しあわ.せ"
    },
    {
      "ID": 1471,
      "character": "服",
      "keyWords": "CLOTHES ・ SUBMIT",
      "on": "フク",
      "kun": ""
    },
    {
      "ID": 1472,
      "character": "報",
      "keyWords": "REPORT ・ REQUITE",
      "on": "ホウ",
      "kun": "むく.いる ・ むく.う"
    },
    {
      "ID": 1473,
      "character": "執",
      "keyWords": "EXECUTE ・ SEIZE",
      "on": "シツ ・ シュウ",
      "kun": "と.る"
    },
    {
      "ID": 1474,
      "character": "摯",
      "keyWords": "SINCERE",
      "on": "シ",
      "kun": ""
    },
    {
      "ID": 1475,
      "character": "達",
      "keyWords": "ATTAIN ・ PLURAL SUFFIX",
      "on": "タツ",
      "kun": "-たち*"
    },
    {
      "ID": 1476,
      "character": "朗",
      "keyWords": "CHEERFUL ・ CLEAR",
      "on": "ロウ",
      "kun": "ほが.らか"
    },
    {
      "ID": 1477,
      "character": "浪",
      "keyWords": "BILLOW ・ ROAM",
      "on": "ロウ",
      "kun": ""
    },
    {
      "ID": 1478,
      "character": "呉",
      "keyWords": "KINGDOM OF WU ・ GIVE",
      "on": "ゴ",
      "kun": "く.れる"
    },
    {
      "ID": 1479,
      "character": "娯",
      "keyWords": "ENJOYMENT",
      "on": "ゴ",
      "kun": ""
    },
    {
      "ID": 1480,
      "character": "誤",
      "keyWords": "MISTAKE",
      "on": "ゴ",
      "kun": "あやま.る ・ -あやま.る"
    },
    {
      "ID": 1481,
      "character": "富",
      "keyWords": "RICH",
      "on": "フ ・ フウ",
      "kun": "と.む ・ とみ"
    },
    {
      "ID": 1482,
      "character": "副",
      "keyWords": "SECONDARY",
      "on": "フク",
      "kun": ""
    },
    {
      "ID": 1483,
      "character": "幅",
      "keyWords": "WIDTH",
      "on": "フク",
      "kun": "はば"
    },
    {
      "ID": 1484,
      "character": "福",
      "keyWords": "FORTUNE",
      "on": "フク",
      "kun": ""
    },
    {
      "ID": 1485,
      "character": "祉",
      "keyWords": "BLESSEDNESS",
      "on": "シ",
      "kun": ""
    },
    {
      "ID": 1486,
      "character": "禍",
      "keyWords": "CALAMITY",
      "on": "カ",
      "kun": ""
    },
    {
      "ID": 1487,
      "character": "渦",
      "keyWords": "WHIRLPOOL",
      "on": "カ",
      "kun": "うず"
    },
    {
      "ID": 1488,
      "character": "鍋",
      "keyWords": "POT",
      "on": "カ*",
      "kun": "なべ"
    },
    {
      "ID": 1489,
      "character": "蘭",
      "keyWords": "ORCHID ・ HOLLAND",
      "on": "ラン",
      "kun": ""
    },
    {
      "ID": 1490,
      "character": "欄",
      "keyWords": "COLUMN",
      "on": "ラン",
      "kun": ""
    },
    {
      "ID": 1491,
      "character": "潤",
      "keyWords": "MOIST",
      "on": "ジュン",
      "kun": "うるお.う ・ うるお.す ・ うる.む"
    },
    {
      "ID": 1492,
      "character": "淵",
      "keyWords": "EDGE ・ DEEP POOL",
      "on": "エン",
      "kun": "ふち"
    },
    {
      "ID": 1493,
      "character": "滑",
      "keyWords": "SLIDE ・ SMOOTH",
      "on": "カツ ・ コツ",
      "kun": "すべ.る ・ なめ.らか"
    },
    {
      "ID": 1494,
      "character": "稽",
      "keyWords": "PRACTICE",
      "on": "ケイ",
      "kun": ""
    },
    {
      "ID": 1495,
      "character": "肩",
      "keyWords": "SHOULDER",
      "on": "ケン",
      "kun": "かた"
    },
    {
      "ID": 1496,
      "character": "脅",
      "keyWords": "THREATEN",
      "on": "キョウ",
      "kun": "おびや.かす ・ おど.す ・ おど.かす"
    },
    {
      "ID": 1497,
      "character": "肯",
      "keyWords": "ASSENT",
      "on": "コウ",
      "kun": ""
    },
    {
      "ID": 1498,
      "character": "双",
      "keyWords": "SET OF TWO",
      "on": "ソウ",
      "kun": "ふた"
    },
    {
      "ID": 1499,
      "character": "江",
      "keyWords": "INLET",
      "on": "コウ",
      "kun": "え"
    },
    {
      "ID": 1500,
      "character": "湾",
      "keyWords": "BAY",
      "on": "ワン",
      "kun": ""
    },
    {
      "ID": 1501,
      "character": "港",
      "keyWords": "PORT",
      "on": "コウ",
      "kun": "みなと"
    },
    {
      "ID": 1502,
      "character": "選",
      "keyWords": "SELECT",
      "on": "セン",
      "kun": "えら.ぶ"
    },
    {
      "ID": 1503,
      "character": "択",
      "keyWords": "SELECT",
      "on": "タク",
      "kun": ""
    },
    {
      "ID": 1504,
      "character": "沢",
      "keyWords": "SWAMP ・ ABUNDANT",
      "on": "タク",
      "kun": "さわ"
    },
    {
      "ID": 1505,
      "character": "訳",
      "keyWords": "TRANSLATE ・ SENSE",
      "on": "ヤク",
      "kun": "わけ"
    },
    {
      "ID": 1506,
      "character": "釈",
      "keyWords": "ELUCIDATE ・ RELEASE",
      "on": "シャク",
      "kun": ""
    },
    {
      "ID": 1507,
      "character": "敷",
      "keyWords": "LAY",
      "on": "フ",
      "kun": "し.く ・ -し.き"
    },
    {
      "ID": 1508,
      "character": "傲",
      "keyWords": "PROUD",
      "on": "ゴウ",
      "kun": ""
    },
    {
      "ID": 1509,
      "character": "贅",
      "keyWords": "LUXURY",
      "on": "ゼイ",
      "kun": ""
    },
    {
      "ID": 1510,
      "character": "審",
      "keyWords": "EXAMINE CAREFULLY ・ TRY",
      "on": "シン",
      "kun": ""
    },
    {
      "ID": 1511,
      "character": "藩",
      "keyWords": "FEUDAL DOMAIN",
      "on": "ハン",
      "kun": ""
    },
    {
      "ID": 1512,
      "character": "翻",
      "keyWords": "TURN OVER ・ RENDER IN ANOTHER FORM",
      "on": "ホン",
      "kun": "ひるがえ.る ・ ひるがえ.す"
    },
    {
      "ID": 1513,
      "character": "翔",
      "keyWords": "SOAR",
      "on": "ショウ",
      "kun": "かけ.る ・ と.ぶ"
    },
    {
      "ID": 1514,
      "character": "査",
      "keyWords": "LOOK INTO",
      "on": "サ",
      "kun": ""
    },
    {
      "ID": 1515,
      "character": "租",
      "keyWords": "LAND TAX",
      "on": "ソ",
      "kun": ""
    },
    {
      "ID": 1516,
      "character": "粗",
      "keyWords": "COARSE",
      "on": "ソ",
      "kun": "あら.い ・ あら-"
    },
    {
      "ID": 1517,
      "character": "阻",
      "keyWords": "HAMPER",
      "on": "ソ",
      "kun": "はば.む"
    },
    {
      "ID": 1518,
      "character": "狙",
      "keyWords": "AIM AT",
      "on": "ソ",
      "kun": "ねら.う"
    },
    {
      "ID": 1519,
      "character": "宜",
      "keyWords": "RIGHT",
      "on": "ギ",
      "kun": "よろ.しい* ・ よろ.しく*"
    },
    {
      "ID": 1520,
      "character": "畳",
      "keyWords": "<TATAMI> (straw mat) ・ FOLD UP",
      "on": "ジョウ",
      "kun": "たた.む ・ たた.み- ・ たたみ"
    },
    {
      "ID": 1521,
      "character": "甲",
      "keyWords": "SHELL ・ FIRST IN A SERIES",
      "on": "コウ ・ カン ・ カ*",
      "kun": ""
    },
    {
      "ID": 1522,
      "character": "乙",
      "keyWords": "SECOND IN A SERIES",
      "on": "オツ",
      "kun": ""
    },
    {
      "ID": 1523,
      "character": "丙",
      "keyWords": "THIRD IN A SERIES",
      "on": "ヘイ",
      "kun": ""
    },
    {
      "ID": 1524,
      "character": "柄",
      "keyWords": "CHARACTER ・ STATUS",
      "on": "ヘイ",
      "kun": "がら"
    },
    {
      "ID": 1525,
      "character": "押",
      "keyWords": "PUSH",
      "on": "オウ",
      "kun": "お.す ・ お.し- ・ お.っ- ・ お.さえる"
    },
    {
      "ID": 1526,
      "character": "抽",
      "keyWords": "DRAW OUT",
      "on": "チュウ",
      "kun": ""
    },
    {
      "ID": 1527,
      "character": "捜",
      "keyWords": "LOOK FOR",
      "on": "ソウ",
      "kun": "さが.す"
    },
    {
      "ID": 1528,
      "character": "届",
      "keyWords": "DELIVER ・ REACH",
      "on": "",
      "kun": "とど.ける ・ -とど.け ・ とど.く"
    },
    {
      "ID": 1529,
      "character": "宙",
      "keyWords": "SPACE ・ MIDAIR",
      "on": "チュウ",
      "kun": ""
    },
    {
      "ID": 1530,
      "character": "笛",
      "keyWords": "FLUTE",
      "on": "テキ",
      "kun": "ふえ"
    },
    {
      "ID": 1531,
      "character": "袖",
      "keyWords": "SLEEVE",
      "on": "シュウ",
      "kun": "そで"
    },
    {
      "ID": 1532,
      "character": "襟",
      "keyWords": "COLLAR",
      "on": "キン",
      "kun": "えり"
    },
    {
      "ID": 1533,
      "character": "衿",
      "keyWords": "COLLAR",
      "on": "キン",
      "kun": "えり"
    },
    {
      "ID": 1534,
      "character": "裾",
      "keyWords": "CUFF",
      "on": "",
      "kun": "すそ"
    },
    {
      "ID": 1535,
      "character": "据",
      "keyWords": "SET",
      "on": "",
      "kun": "す.える ・ す.わる"
    },
    {
      "ID": 1536,
      "character": "握",
      "keyWords": "GRASP",
      "on": "アク",
      "kun": "にぎ.る"
    },
    {
      "ID": 1537,
      "character": "揃",
      "keyWords": "MAKE UNIFORM",
      "on": "セン",
      "kun": "そろ.える ・ そろ.う ・ そろ.い ・ -ぞろ.い"
    },
    {
      "ID": 1538,
      "character": "撫",
      "keyWords": "STROKE",
      "on": "ブ",
      "kun": "な.でる"
    },
    {
      "ID": 1539,
      "character": "託",
      "keyWords": "ENTRUST",
      "on": "タク",
      "kun": ""
    },
    {
      "ID": 1540,
      "character": "宅",
      "keyWords": "DWELLING HOUSE",
      "on": "タク",
      "kun": ""
    },
    {
      "ID": 1541,
      "character": "詫",
      "keyWords": "APOLOGIZE",
      "on": "タ",
      "kun": "わ.びる ・ わ.び"
    },
    {
      "ID": 1542,
      "character": "宇",
      "keyWords": "UNIVERSE",
      "on": "ウ",
      "kun": ""
    },
    {
      "ID": 1543,
      "character": "芋",
      "keyWords": "POTATO",
      "on": "",
      "kun": "いも"
    },
    {
      "ID": 1544,
      "character": "寿",
      "keyWords": "LONGEVITY ・ CONGRATULATIONS",
      "on": "",
      "kun": ""
    },
    {
      "ID": 1545,
      "character": "鋳",
      "keyWords": "CAST",
      "on": "チュウ",
      "kun": "い.る"
    },
    {
      "ID": 1546,
      "character": "銘",
      "keyWords": "INSCRIPTION",
      "on": "メイ",
      "kun": ""
    },
    {
      "ID": 1547,
      "character": "鏡",
      "keyWords": "MIRROR ・ OPTICAL INSTRUMENT",
      "on": "キョウ",
      "kun": "かがみ"
    },
    {
      "ID": 1548,
      "character": "境",
      "keyWords": "BOUNDARY ・ SITUATION",
      "on": "キョウ ・ ケイ",
      "kun": "さかい"
    },
    {
      "ID": 1549,
      "character": "環",
      "keyWords": "RING ・ SURROUND",
      "on": "カン",
      "kun": ""
    },
    {
      "ID": 1550,
      "character": "還",
      "keyWords": "RETURN",
      "on": "カン",
      "kun": ""
    },
    {
      "ID": 1551,
      "character": "盾",
      "keyWords": "SHIELD",
      "on": "ジュン",
      "kun": "たて"
    },
    {
      "ID": 1552,
      "character": "循",
      "keyWords": "CIRCULATE",
      "on": "ジュン",
      "kun": ""
    },
    {
      "ID": 1553,
      "character": "巡",
      "keyWords": "MAKE THE ROUNDS",
      "on": "ジュン",
      "kun": "めぐ.る ・ めぐ.り"
    },
    {
      "ID": 1554,
      "character": "這",
      "keyWords": "CRAWL",
      "on": "シャ",
      "kun": "は.う"
    },
    {
      "ID": 1555,
      "character": "逓",
      "keyWords": "RELAY",
      "on": "テイ",
      "kun": ""
    },
    {
      "ID": 1556,
      "character": "息",
      "keyWords": "BREATH",
      "on": "ソク",
      "kun": "いき"
    },
    {
      "ID": 1557,
      "character": "憩",
      "keyWords": "TAKE A REST",
      "on": "ケイ",
      "kun": "いこ.い ・ いこ.う"
    },
    {
      "ID": 1558,
      "character": "鼻",
      "keyWords": "NOSE",
      "on": "ビ",
      "kun": "はな"
    },
    {
      "ID": 1559,
      "character": "孔",
      "keyWords": "OPEN HOLE",
      "on": "コウ",
      "kun": ""
    },
    {
      "ID": 1560,
      "character": "臭",
      "keyWords": "BAD SMELL",
      "on": "シュウ",
      "kun": "くさ.い ・ -くさ.い ・ にお.う ・ にお.い"
    },
    {
      "ID": 1561,
      "character": "嗅",
      "keyWords": "SMELL",
      "on": "キュウ",
      "kun": "か.ぐ"
    },
    {
      "ID": 1562,
      "character": "奥",
      "keyWords": "INNER PART",
      "on": "オウ",
      "kun": "おく"
    },
    {
      "ID": 1563,
      "character": "尖",
      "keyWords": "POINTY",
      "on": "セン",
      "kun": "とが.る ・ とん.がる"
    },
    {
      "ID": 1564,
      "character": "突",
      "keyWords": "THRUST",
      "on": "トツ",
      "kun": "つ.く"
    },
    {
      "ID": 1565,
      "character": "窒",
      "keyWords": "CHOKE ・ NITROGEN",
      "on": "チツ",
      "kun": ""
    },
    {
      "ID": 1566,
      "character": "窃",
      "keyWords": "STEAL",
      "on": "セツ",
      "kun": ""
    },
    {
      "ID": 1567,
      "character": "衝",
      "keyWords": "COLLIDE",
      "on": "ショウ",
      "kun": ""
    },
    {
      "ID": 1568,
      "character": "契",
      "keyWords": "PLEDGE",
      "on": "ケイ",
      "kun": "ちぎ.る"
    },
    {
      "ID": 1569,
      "character": "喫",
      "keyWords": "INGEST",
      "on": "キツ",
      "kun": ""
    },
    {
      "ID": 1570,
      "character": "潔",
      "keyWords": "IMMACULATE",
      "on": "ケツ",
      "kun": "いさぎよ.い"
    },
    {
      "ID": 1571,
      "character": "侮",
      "keyWords": "INSULT",
      "on": "ブ",
      "kun": "あなど.る"
    },
    {
      "ID": 1572,
      "character": "梅",
      "keyWords": "JAPANESE APRICOT",
      "on": "バイ",
      "kun": "うめ"
    },
    {
      "ID": 1573,
      "character": "悔",
      "keyWords": "REPENT",
      "on": "カイ",
      "kun": "く.いる ・ く.やむ ・ くや.しい"
    },
    {
      "ID": 1574,
      "character": "敏",
      "keyWords": "NIMBLE",
      "on": "ビン",
      "kun": ""
    },
    {
      "ID": 1575,
      "character": "繁",
      "keyWords": "THRIVE",
      "on": "ハン",
      "kun": ""
    },
    {
      "ID": 1576,
      "character": "繋",
      "keyWords": "CONNECT",
      "on": "ケイ",
      "kun": "つな.ぐ ・ つな.がる ・ かか.る"
    },
    {
      "ID": 1577,
      "character": "茂",
      "keyWords": "GROW THICK",
      "on": "モ",
      "kun": "しげ.る"
    },
    {
      "ID": 1578,
      "character": "橋",
      "keyWords": "BRIDGE",
      "on": "キョウ",
      "kun": "はし"
    },
    {
      "ID": 1579,
      "character": "矯",
      "keyWords": "RECTIFY",
      "on": "キョウ",
      "kun": "た.める"
    },
    {
      "ID": 1580,
      "character": "稿",
      "keyWords": "MANUSCRIPT",
      "on": "コウ",
      "kun": ""
    },
    {
      "ID": 1581,
      "character": "縞",
      "keyWords": "STRIPE",
      "on": "コウ",
      "kun": "しま"
    },
    {
      "ID": 1582,
      "character": "箋",
      "keyWords": "WRITING PAPER",
      "on": "セン",
      "kun": ""
    },
    {
      "ID": 1583,
      "character": "残",
      "keyWords": "LEAVE BEHIND ・ RUTHLESS",
      "on": "ザン",
      "kun": "のこ.る ・ のこ.す"
    },
    {
      "ID": 1584,
      "character": "桟",
      "keyWords": "SCAFFOLD",
      "on": "サン",
      "kun": ""
    },
    {
      "ID": 1585,
      "character": "銭",
      "keyWords": "MONEY",
      "on": "セン",
      "kun": "ぜに"
    },
    {
      "ID": 1586,
      "character": "践",
      "keyWords": "PUT INTO ACTION",
      "on": "セン",
      "kun": ""
    },
    {
      "ID": 1587,
      "character": "浅",
      "keyWords": "SHALLOW",
      "on": "セン",
      "kun": "あさ.い"
    },
    {
      "ID": 1588,
      "character": "洩",
      "keyWords": "LEAK",
      "on": "エイ ・ セツ",
      "kun": "も.る ・ も.れる ・ も.らす"
    },
    {
      "ID": 1589,
      "character": "壮",
      "keyWords": "VIGOROUS ・ GRAND",
      "on": "ソウ",
      "kun": ""
    },
    {
      "ID": 1590,
      "character": "荘",
      "keyWords": "VILLA ・ DIGNIFIED",
      "on": "ソウ",
      "kun": ""
    },
    {
      "ID": 1591,
      "character": "装",
      "keyWords": "DRESS ・ FIT OUT",
      "on": "ソウ ・ ショウ",
      "kun": "よそお.う"
    },
    {
      "ID": 1592,
      "character": "冥",
      "keyWords": "DARK",
      "on": "メイ ・ ミョウ",
      "kun": ""
    },
    {
      "ID": 1593,
      "character": "暗",
      "keyWords": "DARK",
      "on": "アン",
      "kun": "くら.い"
    },
    {
      "ID": 1594,
      "character": "韻",
      "keyWords": "RHYME",
      "on": "イン",
      "kun": ""
    },
    {
      "ID": 1595,
      "character": "損",
      "keyWords": "LOSS",
      "on": "ソン",
      "kun": "そこ.なう ・ -そこ.なう ・ そこ.ねる ・ -そこ.ねる"
    },
    {
      "ID": 1596,
      "character": "捕",
      "keyWords": "CATCH",
      "on": "ホ",
      "kun": "と.らえる ・ と.らわれる ・ と.る ・ つか.まえる ・ つか.まる"
    },
    {
      "ID": 1597,
      "character": "挿",
      "keyWords": "INSERT",
      "on": "ソウ",
      "kun": "さ.す"
    },
    {
      "ID": 1598,
      "character": "補",
      "keyWords": "SUPPLEMENT",
      "on": "ホ",
      "kun": "おぎな.う"
    },
    {
      "ID": 1599,
      "character": "浦",
      "keyWords": "SEASIDE",
      "on": "",
      "kun": "うら"
    },
    {
      "ID": 1600,
      "character": "哺",
      "keyWords": "SUCKLE",
      "on": "ホ",
      "kun": ""
    },
    {
      "ID": 1601,
      "character": "舗",
      "keyWords": "PAVE ・ SHOP",
      "on": "ホ",
      "kun": ""
    },
    {
      "ID": 1602,
      "character": "掴",
      "keyWords": "GRASP",
      "on": "カク",
      "kun": "つか.む ・ つか.まえる ・ つか.まる"
    },
    {
      "ID": 1603,
      "character": "捉",
      "keyWords": "CATCH",
      "on": "ソク",
      "kun": "とら.える"
    },
    {
      "ID": 1604,
      "character": "促",
      "keyWords": "HASTEN",
      "on": "ソク",
      "kun": "うなが.す"
    },
    {
      "ID": 1605,
      "character": "筆",
      "keyWords": "BRUSH ・ WRITING",
      "on": "ヒツ",
      "kun": "ふで"
    },
    {
      "ID": 1606,
      "character": "津",
      "keyWords": "HARBOR",
      "on": "シン",
      "kun": "つ"
    },
    {
      "ID": 1607,
      "character": "律",
      "keyWords": "LAW ・ RHYTHM",
      "on": "リツ ・ リチ",
      "kun": ""
    },
    {
      "ID": 1608,
      "character": "逮",
      "keyWords": "CATCH A CRIMINAL",
      "on": "タイ",
      "kun": ""
    },
    {
      "ID": 1609,
      "character": "建",
      "keyWords": "BUILD",
      "on": "ケン ・ コン",
      "kun": "た.てる ・ た.て ・ -だ.て ・ た.つ"
    },
    {
      "ID": 1610,
      "character": "健",
      "keyWords": "ROBUST",
      "on": "ケン",
      "kun": "すこ.やか"
    },
    {
      "ID": 1611,
      "character": "康",
      "keyWords": "HEALTHY",
      "on": "コウ",
      "kun": ""
    },
    {
      "ID": 1612,
      "character": "庸",
      "keyWords": "MEDIOCRE",
      "on": "ヨウ",
      "kun": ""
    },
    {
      "ID": 1613,
      "character": "粛",
      "keyWords": "PURGE ・ HUSHED",
      "on": "シュク",
      "kun": ""
    },
    {
      "ID": 1614,
      "character": "繍",
      "keyWords": "EMBROIDERY",
      "on": "シュウ",
      "kun": ""
    },
    {
      "ID": 1615,
      "character": "唐",
      "keyWords": "TANG DYNASTY",
      "on": "トウ",
      "kun": "から"
    },
    {
      "ID": 1616,
      "character": "糖",
      "keyWords": "SUGAR",
      "on": "トウ",
      "kun": ""
    },
    {
      "ID": 1617,
      "character": "粧",
      "keyWords": "APPLY MAKEUP",
      "on": "ショウ",
      "kun": ""
    },
    {
      "ID": 1618,
      "character": "糧",
      "keyWords": "FOOD PROVISIONS",
      "on": "リョウ ・ ロウ",
      "kun": "かて"
    },
    {
      "ID": 1619,
      "character": "粉",
      "keyWords": "POWDER",
      "on": "フン",
      "kun": "こ ・ こな"
    },
    {
      "ID": 1620,
      "character": "紛",
      "keyWords": "CONFUSED",
      "on": "フン",
      "kun": "まぎ.れる ・ -まぎ.れ ・ まぎ.らす ・ まぎ.らわす ・ まぎ.らわしい"
    },
    {
      "ID": 1621,
      "character": "糾",
      "keyWords": "INQUIRE INTO",
      "on": "キュウ",
      "kun": ""
    },
    {
      "ID": 1622,
      "character": "粋",
      "keyWords": "REFINED",
      "on": "スイ",
      "kun": "いき"
    },
    {
      "ID": 1623,
      "character": "砕",
      "keyWords": "CRUSH UP",
      "on": "サイ",
      "kun": "くだ.く ・ くだ.ける"
    },
    {
      "ID": 1624,
      "character": "枠",
      "keyWords": "FRAME",
      "on": "",
      "kun": "わく"
    },
    {
      "ID": 1625,
      "character": "酔",
      "keyWords": "BECOME INTOXICATED",
      "on": "スイ",
      "kun": "よ.う ・ よ.い"
    },
    {
      "ID": 1626,
      "character": "醒",
      "keyWords": "WAKE UP",
      "on": "セイ",
      "kun": "さ.める* ・ さ.ます*"
    },
    {
      "ID": 1627,
      "character": "酬",
      "keyWords": "RECIPROCATE",
      "on": "シュウ",
      "kun": ""
    },
    {
      "ID": 1628,
      "character": "酷",
      "keyWords": "SEVERE",
      "on": "コク",
      "kun": "ひど.い*"
    },
    {
      "ID": 1629,
      "character": "凡",
      "keyWords": "COMMONPLACE",
      "on": "ボン ・ ハン",
      "kun": ""
    },
    {
      "ID": 1630,
      "character": "凧",
      "keyWords": "KITE",
      "on": "",
      "kun": "たこ"
    },
    {
      "ID": 1631,
      "character": "帆",
      "keyWords": "SAIL",
      "on": "ハン",
      "kun": "ほ"
    },
    {
      "ID": 1632,
      "character": "汎",
      "keyWords": "PAN-",
      "on": "ハン",
      "kun": ""
    },
    {
      "ID": 1633,
      "character": "恐",
      "keyWords": "FEAR",
      "on": "キョウ",
      "kun": "おそ.れる ・ おそ.る ・ おそ.ろしい"
    },
    {
      "ID": 1634,
      "character": "怖",
      "keyWords": "FEARFUL",
      "on": "フ",
      "kun": "こわ.い ・ こわ.がる"
    },
    {
      "ID": 1635,
      "character": "築",
      "keyWords": "CONSTRUCT",
      "on": "チク",
      "kun": "きず.く"
    },
    {
      "ID": 1636,
      "character": "尋",
      "keyWords": "INQUIRE",
      "on": "ジン",
      "kun": "たず.ねる"
    },
    {
      "ID": 1637,
      "character": "訊",
      "keyWords": "INTERROGATE",
      "on": "ジン",
      "kun": "たず.ねる ・ き.く"
    },
    {
      "ID": 1638,
      "character": "諮",
      "keyWords": "CONSULT",
      "on": "シ",
      "kun": "はか.る"
    },
    {
      "ID": 1639,
      "character": "抗",
      "keyWords": "RESIST",
      "on": "コウ",
      "kun": ""
    },
    {
      "ID": 1640,
      "character": "航",
      "keyWords": "NAVIGATE",
      "on": "コウ",
      "kun": ""
    },
    {
      "ID": 1641,
      "character": "坑",
      "keyWords": "PIT",
      "on": "コウ",
      "kun": ""
    },
    {
      "ID": 1642,
      "character": "拝",
      "keyWords": "WORSHIP ・ HUMBLY",
      "on": "ハイ",
      "kun": "おが.む"
    },
    {
      "ID": 1643,
      "character": "耕",
      "keyWords": "TILL",
      "on": "コウ",
      "kun": "たがや.す"
    },
    {
      "ID": 1644,
      "character": "耗",
      "keyWords": "WEAR AWAY",
      "on": "モウ ・ コウ",
      "kun": ""
    },
    {
      "ID": 1645,
      "character": "崇",
      "keyWords": "REVERENCE",
      "on": "スウ",
      "kun": ""
    },
    {
      "ID": 1646,
      "character": "灰",
      "keyWords": "ASH",
      "on": "カイ",
      "kun": "はい"
    },
    {
      "ID": 1647,
      "character": "炭",
      "keyWords": "COAL ・ CHARCOAL ・ CARBON",
      "on": "タン",
      "kun": "すみ"
    },
    {
      "ID": 1648,
      "character": "岸",
      "keyWords": "SHORE",
      "on": "ガン",
      "kun": "きし"
    },
    {
      "ID": 1649,
      "character": "岩",
      "keyWords": "ROCK",
      "on": "ガン",
      "kun": "いわ"
    },
    {
      "ID": 1650,
      "character": "崩",
      "keyWords": "CRUMBLE",
      "on": "ホウ",
      "kun": "くず.れる ・ -くず.れ ・ くず.す"
    },
    {
      "ID": 1651,
      "character": "嵐",
      "keyWords": "STORM",
      "on": "",
      "kun": "あらし"
    },
    {
      "ID": 1652,
      "character": "崖",
      "keyWords": "CLIFF",
      "on": "ガイ",
      "kun": "がけ"
    },
    {
      "ID": 1653,
      "character": "催",
      "keyWords": "SPONSOR",
      "on": "サイ",
      "kun": "もよお.す"
    },
    {
      "ID": 1654,
      "character": "焦",
      "keyWords": "SCORCH ・ BE IMPATIENT",
      "on": "ショウ",
      "kun": "こ.げる ・ こ.がす ・ こ.がれる ・ あせ.る"
    },
    {
      "ID": 1655,
      "character": "礁",
      "keyWords": "REEF",
      "on": "ショウ",
      "kun": ""
    },
    {
      "ID": 1656,
      "character": "奮",
      "keyWords": "ROUSE UP",
      "on": "フン",
      "kun": "ふる.う"
    },
    {
      "ID": 1657,
      "character": "奪",
      "keyWords": "SEIZE",
      "on": "ダツ",
      "kun": "うば.う"
    },
    {
      "ID": 1658,
      "character": "隻",
      "keyWords": "ONE OF A PAIR ・ COUNTER FOR SHIPS",
      "on": "セキ",
      "kun": ""
    },
    {
      "ID": 1659,
      "character": "獲",
      "keyWords": "CATCH GAME",
      "on": "カク",
      "kun": "え.る"
    },
    {
      "ID": 1660,
      "character": "穫",
      "keyWords": "HARVEST",
      "on": "カク",
      "kun": ""
    },
    {
      "ID": 1661,
      "character": "護",
      "keyWords": "PROTECT",
      "on": "ゴ",
      "kun": "まも.る*"
    },
    {
      "ID": 1662,
      "character": "譲",
      "keyWords": "CEDE",
      "on": "ジョウ",
      "kun": "ゆず.る"
    },
    {
      "ID": 1663,
      "character": "嬢",
      "keyWords": "YOUNG LADY",
      "on": "ジョウ",
      "kun": ""
    },
    {
      "ID": 1664,
      "character": "醸",
      "keyWords": "BREW",
      "on": "ジョウ",
      "kun": "かも.す"
    },
    {
      "ID": 1665,
      "character": "壌",
      "keyWords": "ARABLE SOIL",
      "on": "ジョウ",
      "kun": ""
    },
    {
      "ID": 1666,
      "character": "壊",
      "keyWords": "BREAK DOWN",
      "on": "カイ",
      "kun": "こわ.す ・ こわ.れる"
    },
    {
      "ID": 1667,
      "character": "懐",
      "keyWords": "BOSOM ・ LONG FOR",
      "on": "カイ",
      "kun": "ふところ ・ なつ.かしい ・ なつ.かしむ ・ なつ.く ・ なつ.ける"
    },
    {
      "ID": 1668,
      "character": "徳",
      "keyWords": "VIRTUE",
      "on": "トク",
      "kun": ""
    },
    {
      "ID": 1669,
      "character": "聴",
      "keyWords": "LISTEN",
      "on": "チョウ",
      "kun": "き.く"
    },
    {
      "ID": 1670,
      "character": "恥",
      "keyWords": "SHAME",
      "on": "チ",
      "kun": "は.じる ・ はじ ・ は.じらう ・ は.ずかしい"
    },
    {
      "ID": 1671,
      "character": "羞",
      "keyWords": "SHAME",
      "on": "シュウ",
      "kun": ""
    },
    {
      "ID": 1672,
      "character": "爵",
      "keyWords": "RANK OF NOBILITY",
      "on": "シャク",
      "kun": ""
    },
    {
      "ID": 1673,
      "character": "侯",
      "keyWords": "FEUDAL LORD",
      "on": "コウ",
      "kun": ""
    },
    {
      "ID": 1674,
      "character": "喉",
      "keyWords": "THROAT",
      "on": "コウ",
      "kun": "のど"
    },
    {
      "ID": 1675,
      "character": "候",
      "keyWords": "SEASON ・ SEASONAL WEATHER",
      "on": "コウ",
      "kun": "そうろう"
    },
    {
      "ID": 1676,
      "character": "修",
      "keyWords": "CULTIVATE ・ REPAIR",
      "on": "シュウ ・ シュ",
      "kun": "おさ.める ・ おさ.まる"
    },
    {
      "ID": 1677,
      "character": "悠",
      "keyWords": "LEISURELY",
      "on": "ユウ",
      "kun": ""
    },
    {
      "ID": 1678,
      "character": "是",
      "keyWords": "RIGHT",
      "on": "ゼ",
      "kun": ""
    },
    {
      "ID": 1679,
      "character": "提",
      "keyWords": "PRESENT ・ CARRY IN HAND",
      "on": "テイ",
      "kun": "さ.げる"
    },
    {
      "ID": 1680,
      "character": "堤",
      "keyWords": "EMBANKMENT",
      "on": "テイ",
      "kun": "つつみ"
    },
    {
      "ID": 1681,
      "character": "題",
      "keyWords": "HEADING ・ TOPIC ・ PROBLEM",
      "on": "ダイ",
      "kun": ""
    },
    {
      "ID": 1682,
      "character": "匙",
      "keyWords": "SPOON",
      "on": "シ",
      "kun": "さじ"
    },
    {
      "ID": 1683,
      "character": "冒",
      "keyWords": "RISK",
      "on": "ボウ",
      "kun": "おか.す"
    },
    {
      "ID": 1684,
      "character": "昌",
      "keyWords": "CLEAR",
      "on": "ショウ",
      "kun": ""
    },
    {
      "ID": 1685,
      "character": "唱",
      "keyWords": "SING",
      "on": "ショウ",
      "kun": "とな.える"
    },
    {
      "ID": 1686,
      "character": "晶",
      "keyWords": "CRYSTAL",
      "on": "ショウ",
      "kun": ""
    },
    {
      "ID": 1687,
      "character": "帽",
      "keyWords": "HEADGEAR",
      "on": "ボウ",
      "kun": ""
    },
    {
      "ID": 1688,
      "character": "棟",
      "keyWords": "BUILDING",
      "on": "トウ",
      "kun": "むね ・ むな-"
    },
    {
      "ID": 1689,
      "character": "凍",
      "keyWords": "FREEZE",
      "on": "トウ",
      "kun": "こお.る ・ こご.える"
    },
    {
      "ID": 1690,
      "character": "氷",
      "keyWords": "ICE",
      "on": "ヒョウ",
      "kun": "こおり ・ ひ"
    },
    {
      "ID": 1691,
      "character": "永",
      "keyWords": "ETERNAL",
      "on": "エイ",
      "kun": "なが.い"
    },
    {
      "ID": 1692,
      "character": "泳",
      "keyWords": "SWIM",
      "on": "エイ",
      "kun": "およ.ぐ"
    },
    {
      "ID": 1693,
      "character": "詠",
      "keyWords": "RECITE POETRY",
      "on": "エイ",
      "kun": "よ.む"
    },
    {
      "ID": 1694,
      "character": "札",
      "keyWords": "TAG",
      "on": "サツ",
      "kun": "ふだ"
    },
    {
      "ID": 1695,
      "character": "枚",
      "keyWords": "COUNTER FOR FLAT THINGS",
      "on": "マイ",
      "kun": ""
    },
    {
      "ID": 1696,
      "character": "杯",
      "keyWords": "CUP",
      "on": "ハイ",
      "kun": "さかずき"
    },
    {
      "ID": 1697,
      "character": "析",
      "keyWords": "ANALYZE",
      "on": "セキ",
      "kun": ""
    },
    {
      "ID": 1698,
      "character": "折",
      "keyWords": "BREAK (OFF) ・ FOLD",
      "on": "セツ",
      "kun": "お.る ・ おり ・ お.り ・ -お.り ・ お.れる"
    },
    {
      "ID": 1699,
      "character": "挫",
      "keyWords": "BREAK",
      "on": "ザ",
      "kun": "くじ.く* ・ くじ.ける*"
    },
    {
      "ID": 1700,
      "character": "捻",
      "keyWords": "TWIST",
      "on": "ネン",
      "kun": "ひね.る* ・ ひね.くる*"
    },
    {
      "ID": 1701,
      "character": "誓",
      "keyWords": "SWEAR",
      "on": "セイ",
      "kun": "ちか.う"
    },
    {
      "ID": 1702,
      "character": "逝",
      "keyWords": "DEPART THIS LIFE",
      "on": "セイ",
      "kun": "い.く ・ ゆ.く"
    },
    {
      "ID": 1703,
      "character": "哲",
      "keyWords": "WISE ・ PHILOSOPHY",
      "on": "テツ",
      "kun": ""
    },
    {
      "ID": 1704,
      "character": "斬",
      "keyWords": "KILL",
      "on": "ザン",
      "kun": "き.る"
    },
    {
      "ID": 1705,
      "character": "漸",
      "keyWords": "GRADUALLY",
      "on": "ゼン",
      "kun": ""
    },
    {
      "ID": 1706,
      "character": "暫",
      "keyWords": "SHORT WHILE",
      "on": "ザン",
      "kun": "しばら.く*"
    },
    {
      "ID": 1707,
      "character": "斥",
      "keyWords": "REJECT",
      "on": "セキ",
      "kun": ""
    },
    {
      "ID": 1708,
      "character": "訴",
      "keyWords": "APPEAL TO ・ SUE",
      "on": "ソ",
      "kun": "うった.える"
    },
    {
      "ID": 1709,
      "character": "訟",
      "keyWords": "LITIGATE",
      "on": "ショウ",
      "kun": ""
    },
    {
      "ID": 1710,
      "character": "究",
      "keyWords": "STUDY EXHAUSTIVELY",
      "on": "キュウ",
      "kun": "きわ.める"
    },
    {
      "ID": 1711,
      "character": "窮",
      "keyWords": "BE IN EXTREMITY",
      "on": "キュウ",
      "kun": "きわ.める ・ きわ.まる ・ きわ.まり ・ きわ.み"
    },
    {
      "ID": 1712,
      "character": "極",
      "keyWords": "EXTREME ・ POLE",
      "on": "キョク ・ ゴク",
      "kun": "きわ.める ・ きわ.まる ・ きわ.まり ・ きわ.み"
    },
    {
      "ID": 1713,
      "character": "函",
      "keyWords": "BOX",
      "on": "カン",
      "kun": "はこ"
    },
    {
      "ID": 1714,
      "character": "探",
      "keyWords": "PROBE ・ LOOK FOR",
      "on": "タン",
      "kun": "さぐ.る ・ さが.す"
    },
    {
      "ID": 1715,
      "character": "深",
      "keyWords": "DEEP",
      "on": "シン",
      "kun": "ふか.い ・ -ぶか.い ・ ふか.まる ・ ふか.める"
    },
    {
      "ID": 1716,
      "character": "慄",
      "keyWords": "TREMBLE",
      "on": "リツ",
      "kun": ""
    },
    {
      "ID": 1717,
      "character": "惧",
      "keyWords": "FEAR",
      "on": "グ",
      "kun": ""
    },
    {
      "ID": 1718,
      "character": "慎",
      "keyWords": "PRUDENT",
      "on": "シン",
      "kun": "つつし.む"
    },
    {
      "ID": 1719,
      "character": "鎮",
      "keyWords": "QUELL",
      "on": "チン",
      "kun": "しず.めるしず.まる"
    },
    {
      "ID": 1720,
      "character": "塡",
      "keyWords": "FILL (IN)",
      "on": "テン",
      "kun": ""
    },
    {
      "ID": 1721,
      "character": "婚",
      "keyWords": "MARRY",
      "on": "コン",
      "kun": ""
    },
    {
      "ID": 1722,
      "character": "囚",
      "keyWords": "PRISONER",
      "on": "シュウ",
      "kun": ""
    },
    {
      "ID": 1723,
      "character": "困",
      "keyWords": "BE IN TROUBLE",
      "on": "コン",
      "kun": "こま.る"
    },
    {
      "ID": 1724,
      "character": "梱",
      "keyWords": "PACKAGE",
      "on": "コン",
      "kun": ""
    },
    {
      "ID": 1725,
      "character": "因",
      "keyWords": "CAUSE",
      "on": "イン",
      "kun": "よ.る"
    },
    {
      "ID": 1726,
      "character": "姻",
      "keyWords": "MARRIAGE",
      "on": "イン",
      "kun": ""
    },
    {
      "ID": 1727,
      "character": "咽",
      "keyWords": "THROAT",
      "on": "イン",
      "kun": ""
    },
    {
      "ID": 1728,
      "character": "恩",
      "keyWords": "GRACE ・ DEBT OF GRATITUDE",
      "on": "オン",
      "kun": ""
    },
    {
      "ID": 1729,
      "character": "菌",
      "keyWords": "BACTERIA",
      "on": "キン",
      "kun": ""
    },
    {
      "ID": 1730,
      "character": "漢",
      "keyWords": "CHINESE HAN DYNASTY ・ FELLOW",
      "on": "カン",
      "kun": ""
    },
    {
      "ID": 1731,
      "character": "嘆",
      "keyWords": "SIGH",
      "on": "タン",
      "kun": "なげ.く ・ なげ.かわしい"
    },
    {
      "ID": 1732,
      "character": "勤",
      "keyWords": "SERVICE",
      "on": "キン ・ ゴン",
      "kun": "つと.める ・ -ずと.め ・ つと.まる"
    },
    {
      "ID": 1733,
      "character": "謹",
      "keyWords": "RESPECTFULLY",
      "on": "キン",
      "kun": "つつし.む"
    },
    {
      "ID": 1734,
      "character": "僅",
      "keyWords": "A FEW",
      "on": "キン",
      "kun": "わず.か"
    },
    {
      "ID": 1735,
      "character": "索",
      "keyWords": "SEARCH FOR",
      "on": "サク",
      "kun": ""
    },
    {
      "ID": 1736,
      "character": "牽",
      "keyWords": "PULL",
      "on": "ケン",
      "kun": "ひ.く"
    },
    {
      "ID": 1737,
      "character": "牢",
      "keyWords": "PRISON ・ HARDNESS",
      "on": "ロウ",
      "kun": ""
    },
    {
      "ID": 1738,
      "character": "啓",
      "keyWords": "ENLIGHTEN ・ ADDRESS RESPECTFULLY",
      "on": "ケイ",
      "kun": ""
    },
    {
      "ID": 1739,
      "character": "庶",
      "keyWords": "MANIFOLD",
      "on": "ショ",
      "kun": ""
    },
    {
      "ID": 1740,
      "character": "遮",
      "keyWords": "INTERRUPT",
      "on": "シャ",
      "kun": "さえ.ぎる"
    },
    {
      "ID": 1741,
      "character": "燕",
      "keyWords": "SWALLOW",
      "on": "エン",
      "kun": "つばめ"
    },
    {
      "ID": 1742,
      "character": "雀",
      "keyWords": "SPARROW ・ MAHJONG",
      "on": "ジャク ・ ジャン",
      "kun": "すずめ"
    },
    {
      "ID": 1743,
      "character": "劣",
      "keyWords": "INFERIOR",
      "on": "レツ",
      "kun": "おと.る"
    },
    {
      "ID": 1744,
      "character": "抄",
      "keyWords": "EXCERPT",
      "on": "ショウ",
      "kun": ""
    },
    {
      "ID": 1745,
      "character": "秒",
      "keyWords": "SECOND",
      "on": "ビョウ",
      "kun": ""
    },
    {
      "ID": 1746,
      "character": "妙",
      "keyWords": "MARVELOUS",
      "on": "ミョウ",
      "kun": ""
    },
    {
      "ID": 1747,
      "character": "沙",
      "keyWords": "SAND",
      "on": "サ",
      "kun": "すな"
    },
    {
      "ID": 1748,
      "character": "汰",
      "keyWords": "SIFT OUT",
      "on": "タ",
      "kun": ""
    },
    {
      "ID": 1749,
      "character": "煎",
      "keyWords": "BOIL",
      "on": "セン",
      "kun": "い.る"
    },
    {
      "ID": 1750,
      "character": "炒",
      "keyWords": "ROAST",
      "on": "ショウ ・ ソウ",
      "kun": "い.る ・ いた.める"
    },
    {
      "ID": 1751,
      "character": "炊",
      "keyWords": "COOK",
      "on": "スイ",
      "kun": "た.く ・ -だ.き"
    },
    {
      "ID": 1752,
      "character": "焚",
      "keyWords": "KINDLE",
      "on": "フン",
      "kun": "た.く"
    },
    {
      "ID": 1753,
      "character": "薪",
      "keyWords": "FIREWOOD",
      "on": "シン",
      "kun": "たきぎ"
    },
    {
      "ID": 1754,
      "character": "乃",
      "keyWords": "POSSESSIVE PARTICLE",
      "on": "ナイ ・ ダイ",
      "kun": "の ・ すなわ.ち"
    },
    {
      "ID": 1755,
      "character": "之",
      "keyWords": "POSSESSIVE PARTICLE",
      "on": "シ",
      "kun": "の ・ これ"
    },
    {
      "ID": 1756,
      "character": "此",
      "keyWords": "THIS",
      "on": "シ",
      "kun": "こ.れ ・ こ.の"
    },
    {
      "ID": 1757,
      "character": "其",
      "keyWords": "THAT",
      "on": "キ",
      "kun": "そ.れ ・ そ.の"
    },
    {
      "ID": 1758,
      "character": "乏",
      "keyWords": "SCANTY",
      "on": "ボウ",
      "kun": "とぼ.しい"
    },
    {
      "ID": 1759,
      "character": "芝",
      "keyWords": "LAWN GRASS",
      "on": "",
      "kun": "しば"
    },
    {
      "ID": 1760,
      "character": "及",
      "keyWords": "REACH TO",
      "on": "キュウ",
      "kun": "およ.ぶ ・ およ.び ・ および ・ およ.ぼす"
    },
    {
      "ID": 1761,
      "character": "扱",
      "keyWords": "HANDLE",
      "on": "",
      "kun": "あつか.う ・ あつか.い"
    },
    {
      "ID": 1762,
      "character": "級",
      "keyWords": "GRADE",
      "on": "キュウ",
      "kun": ""
    },
    {
      "ID": 1763,
      "character": "吸",
      "keyWords": "SUCK ・ BREATHE IN",
      "on": "キュウ",
      "kun": "す.う"
    },
    {
      "ID": 1764,
      "character": "吹",
      "keyWords": "BLOW",
      "on": "スイ",
      "kun": "ふ.く"
    },
    {
      "ID": 1765,
      "character": "呼",
      "keyWords": "CALL",
      "on": "コ",
      "kun": "よ.ぶ"
    },
    {
      "ID": 1766,
      "character": "吐",
      "keyWords": "SPEW",
      "on": "ト",
      "kun": "は.く"
    },
    {
      "ID": 1767,
      "character": "叶",
      "keyWords": "BE FULFILLED",
      "on": "キョウ ・ ギョウ",
      "kun": "かな.う ・ かな.える"
    },
    {
      "ID": 1768,
      "character": "叱",
      "keyWords": "SCOLD",
      "on": "シツ",
      "kun": "しか.る"
    },
    {
      "ID": 1769,
      "character": "叫",
      "keyWords": "SHOUT",
      "on": "キョウ",
      "kun": "さけ.ぶ"
    },
    {
      "ID": 1770,
      "character": "吟",
      "keyWords": "RECITE",
      "on": "ギン",
      "kun": ""
    },
    {
      "ID": 1771,
      "character": "含",
      "keyWords": "CONTAIN",
      "on": "ガン",
      "kun": "ふく.む ・ ふく.める"
    },
    {
      "ID": 1772,
      "character": "琴",
      "keyWords": "<KOTO> (japanese zither)",
      "on": "キン",
      "kun": "こと"
    },
    {
      "ID": 1773,
      "character": "迷",
      "keyWords": "PERPLEXED",
      "on": "メイ",
      "kun": "まよ.う"
    },
    {
      "ID": 1774,
      "character": "謎",
      "keyWords": "RIDDLE",
      "on": "",
      "kun": "なぞ"
    },
    {
      "ID": 1775,
      "character": "逆",
      "keyWords": "REVERSE",
      "on": "ギャク",
      "kun": "さか ・ さか.さ ・ さか.らう"
    },
    {
      "ID": 1776,
      "character": "遡",
      "keyWords": "GO BACK IN TIME",
      "on": "ソ",
      "kun": "さかのぼ.る"
    },
    {
      "ID": 1777,
      "character": "塑",
      "keyWords": "MODEL",
      "on": "ソ",
      "kun": ""
    },
    {
      "ID": 1778,
      "character": "勲",
      "keyWords": "MERITORIOUS SERVICE",
      "on": "クン",
      "kun": ""
    },
    {
      "ID": 1779,
      "character": "薫",
      "keyWords": "BALMY",
      "on": "クン",
      "kun": "かお.る"
    },
    {
      "ID": 1780,
      "character": "芳",
      "keyWords": "FRAGRANT",
      "on": "ホウ",
      "kun": "かんば.しい"
    },
    {
      "ID": 1781,
      "character": "香",
      "keyWords": "SWEET SMELL",
      "on": "コウ ・ キョウ",
      "kun": "か ・ かお.り ・ かお.る"
    },
    {
      "ID": 1782,
      "character": "秀",
      "keyWords": "EXCELLENT",
      "on": "シュウ",
      "kun": "ひい.でる"
    },
    {
      "ID": 1783,
      "character": "誘",
      "keyWords": "INDUCE",
      "on": "ユウ",
      "kun": "さそ.う"
    },
    {
      "ID": 1784,
      "character": "拐",
      "keyWords": "KIDNAP",
      "on": "カイ",
      "kun": ""
    },
    {
      "ID": 1785,
      "character": "透",
      "keyWords": "PASS THROUGH ・ SEE THROUGH",
      "on": "トウ",
      "kun": "す.く ・ す.かす ・ す.ける"
    },
    {
      "ID": 1786,
      "character": "携",
      "keyWords": "CARRY IN HAND",
      "on": "ケイ",
      "kun": "たずさ.える ・ たずさ.わる"
    },
    {
      "ID": 1787,
      "character": "雄",
      "keyWords": "MALE ・ HEROIC",
      "on": "ユウ",
      "kun": "お- ・ おす"
    },
    {
      "ID": 1788,
      "character": "雌",
      "keyWords": "FEMALE",
      "on": "シ",
      "kun": "め- ・ めす"
    },
    {
      "ID": 1789,
      "character": "些",
      "keyWords": "A LITTLE BIT",
      "on": "サ",
      "kun": "いささか ・ ち.と ・ ちっ.と"
    },
    {
      "ID": 1790,
      "character": "柴",
      "keyWords": "BRUSHWOOD",
      "on": "サイ",
      "kun": "しば"
    },
    {
      "ID": 1791,
      "character": "紫",
      "keyWords": "PURPLE",
      "on": "シ",
      "kun": "むらさき"
    },
    {
      "ID": 1792,
      "character": "髪",
      "keyWords": "HAIR",
      "on": "ハツ",
      "kun": "かみ"
    },
    {
      "ID": 1793,
      "character": "髭",
      "keyWords": "BEARD",
      "on": "シ",
      "kun": "ひげ"
    },
    {
      "ID": 1794,
      "character": "詐",
      "keyWords": "SWINDLE",
      "on": "サ",
      "kun": ""
    },
    {
      "ID": 1795,
      "character": "欺",
      "keyWords": "DECEIVE",
      "on": "ギ",
      "kun": "あざむ.く"
    },
    {
      "ID": 1796,
      "character": "棋",
      "keyWords": "<SHOGI> (japanese chess)",
      "on": "キ",
      "kun": ""
    },
    {
      "ID": 1797,
      "character": "碁",
      "keyWords": "<GO> (japanese checkers)",
      "on": "ゴ",
      "kun": ""
    },
    {
      "ID": 1798,
      "character": "甚",
      "keyWords": "EXTREMELY",
      "on": "ジン",
      "kun": "はなは.だ ・ はなは.だしい"
    },
    {
      "ID": 1799,
      "character": "勘",
      "keyWords": "CHECK ・ INTUITIVE PERCEPTION",
      "on": "カン",
      "kun": ""
    },
    {
      "ID": 1800,
      "character": "堪",
      "keyWords": "ENDURE",
      "on": "カン",
      "kun": "た.える ・ たま.る*"
    },
    {
      "ID": 1801,
      "character": "匹",
      "keyWords": "COUNTER FOR ANIMALS",
      "on": "ヒツ",
      "kun": "ひき"
    },
    {
      "ID": 1802,
      "character": "匠",
      "keyWords": "CRAFTSMAN",
      "on": "ショウ",
      "kun": ""
    },
    {
      "ID": 1803,
      "character": "匿",
      "keyWords": "CONCEAL",
      "on": "トク",
      "kun": ""
    },
    {
      "ID": 1804,
      "character": "諾",
      "keyWords": "CONSENT",
      "on": "ダク",
      "kun": ""
    },
    {
      "ID": 1805,
      "character": "乞",
      "keyWords": "BEG",
      "on": "",
      "kun": "こ.う"
    },
    {
      "ID": 1806,
      "character": "迄",
      "keyWords": "UP TO",
      "on": "キツ",
      "kun": "まで"
    },
    {
      "ID": 1807,
      "character": "乾",
      "keyWords": "DRY",
      "on": "カン",
      "kun": "かわ.く ・ かわ.かす"
    },
    {
      "ID": 1808,
      "character": "幹",
      "keyWords": "TRUNK",
      "on": "カン",
      "kun": "みき"
    },
    {
      "ID": 1809,
      "character": "操",
      "keyWords": "MANIPULATE ・ FIDELITY",
      "on": "ソウ",
      "kun": "みさお ・ あやつ.る"
    },
    {
      "ID": 1810,
      "character": "燥",
      "keyWords": "DRY OUT",
      "on": "ソウ",
      "kun": ""
    },
    {
      "ID": 1811,
      "character": "繰",
      "keyWords": "REEL ・ SHIFT ONWARD",
      "on": "",
      "kun": "く.る"
    },
    {
      "ID": 1812,
      "character": "藻",
      "keyWords": "SEAWEED",
      "on": "ソウ",
      "kun": "も"
    },
    {
      "ID": 1813,
      "character": "噴",
      "keyWords": "SPOUT",
      "on": "フン",
      "kun": "ふ.く"
    },
    {
      "ID": 1814,
      "character": "墳",
      "keyWords": "TUMULUS",
      "on": "フン",
      "kun": ""
    },
    {
      "ID": 1815,
      "character": "憤",
      "keyWords": "INDIGNATION",
      "on": "フン",
      "kun": "いきどおる"
    },
    {
      "ID": 1816,
      "character": "牙",
      "keyWords": "FANG",
      "on": "ガ ・ ゲ",
      "kun": "きば"
    },
    {
      "ID": 1817,
      "character": "芽",
      "keyWords": "BUD",
      "on": "ガ",
      "kun": "め"
    },
    {
      "ID": 1818,
      "character": "雅",
      "keyWords": "ELEGANT",
      "on": "ガ",
      "kun": ""
    },
    {
      "ID": 1819,
      "character": "邪",
      "keyWords": "EVIL",
      "on": "ジャ",
      "kun": ""
    },
    {
      "ID": 1820,
      "character": "既",
      "keyWords": "ALREADY",
      "on": "キ",
      "kun": "すで.に"
    },
    {
      "ID": 1821,
      "character": "概",
      "keyWords": "GENERAL",
      "on": "ガイ",
      "kun": ""
    },
    {
      "ID": 1822,
      "character": "慨",
      "keyWords": "DEPLORE",
      "on": "ガイ",
      "kun": ""
    },
    {
      "ID": 1823,
      "character": "苗",
      "keyWords": "SEEDLING",
      "on": "ビョウ ・ ミョウ*",
      "kun": "なえ ・ なわ-"
    },
    {
      "ID": 1824,
      "character": "描",
      "keyWords": "DEPICT",
      "on": "ビョウ",
      "kun": "えが.く ・ か.く"
    },
    {
      "ID": 1825,
      "character": "猫",
      "keyWords": "CAT",
      "on": "ビョウ",
      "kun": "ねこ"
    },
    {
      "ID": 1826,
      "character": "萌",
      "keyWords": "GERMINATE",
      "on": "ホウ ・ ボウ",
      "kun": "も.える ・ きざ.す"
    },
    {
      "ID": 1827,
      "character": "兆",
      "keyWords": "SIGN ・ TRILLION",
      "on": "チョウ",
      "kun": "きざ.す ・ きざ.し"
    },
    {
      "ID": 1828,
      "character": "眺",
      "keyWords": "GAZE",
      "on": "チョウ",
      "kun": "なが.める"
    },
    {
      "ID": 1829,
      "character": "逃",
      "keyWords": "ESCAPE",
      "on": "トウ",
      "kun": "に.げる ・ に.がす ・ のが.す ・ のが.れる"
    },
    {
      "ID": 1830,
      "character": "桃",
      "keyWords": "PEACH",
      "on": "トウ",
      "kun": "もも"
    },
    {
      "ID": 1831,
      "character": "跳",
      "keyWords": "JUMP",
      "on": "チョウ",
      "kun": "は.ねる ・ と.ぶ ・ -と.び"
    },
    {
      "ID": 1832,
      "character": "挑",
      "keyWords": "PROVOKE",
      "on": "チョウ",
      "kun": "いど.む"
    },
    {
      "ID": 1833,
      "character": "拙",
      "keyWords": "CLUMSY",
      "on": "セツ",
      "kun": "つたな.い"
    },
    {
      "ID": 1834,
      "character": "屈",
      "keyWords": "BEND",
      "on": "クツ",
      "kun": "かが.む* ・ かが.める*"
    },
    {
      "ID": 1835,
      "character": "掘",
      "keyWords": "DIG",
      "on": "クツ",
      "kun": "ほ.る"
    },
    {
      "ID": 1836,
      "character": "堀",
      "keyWords": "DITCH",
      "on": "",
      "kun": "ほり"
    },
    {
      "ID": 1837,
      "character": "封",
      "keyWords": "SEAL ・ ENFEOFF",
      "on": "フウ ・ ホウ",
      "kun": ""
    },
    {
      "ID": 1838,
      "character": "筒",
      "keyWords": "TUBE",
      "on": "トウ",
      "kun": "つつ"
    },
    {
      "ID": 1839,
      "character": "管",
      "keyWords": "PIPE ・ EXERCISE CONTROL",
      "on": "カン",
      "kun": "くだ"
    },
    {
      "ID": 1840,
      "character": "棺",
      "keyWords": "COFFIN",
      "on": "カン",
      "kun": "ひつぎ"
    },
    {
      "ID": 1841,
      "character": "轄",
      "keyWords": "EXERCISE JURISDICTION OVER",
      "on": "カツ",
      "kun": ""
    },
    {
      "ID": 1842,
      "character": "洞",
      "keyWords": "CAVE",
      "on": "ドウ",
      "kun": "ほら"
    },
    {
      "ID": 1843,
      "character": "窟",
      "keyWords": "CAVE",
      "on": "クツ",
      "kun": ""
    },
    {
      "ID": 1844,
      "character": "淫",
      "keyWords": "LEWD",
      "on": "イン",
      "kun": "みだ.ら"
    },
    {
      "ID": 1845,
      "character": "妊",
      "keyWords": "BECOME PREGNANT",
      "on": "ニン",
      "kun": ""
    },
    {
      "ID": 1846,
      "character": "娠",
      "keyWords": "CONCEIVE",
      "on": "シン",
      "kun": ""
    },
    {
      "ID": 1847,
      "character": "唇",
      "keyWords": "LIP",
      "on": "シン",
      "kun": "くちびる"
    },
    {
      "ID": 1848,
      "character": "辱",
      "keyWords": "HUMILIATE",
      "on": "ジョク",
      "kun": "はずかし.める"
    },
    {
      "ID": 1849,
      "character": "襲",
      "keyWords": "RAID ・ INHERIT",
      "on": "シュウ",
      "kun": "おそ.う"
    },
    {
      "ID": 1850,
      "character": "伏",
      "keyWords": "PROSTRATE",
      "on": "フク",
      "kun": "ふ.せる ・ ふ.す"
    },
    {
      "ID": 1851,
      "character": "吠",
      "keyWords": "HOWL",
      "on": "ベイ ・ ハイ",
      "kun": "ほ.える"
    },
    {
      "ID": 1852,
      "character": "噛",
      "keyWords": "BITE",
      "on": "ゴウ ・ コウ",
      "kun": "か.む"
    },
    {
      "ID": 1853,
      "character": "班",
      "keyWords": "SQUAD",
      "on": "ハン",
      "kun": ""
    },
    {
      "ID": 1854,
      "character": "斑",
      "keyWords": "SPOT",
      "on": "ハン",
      "kun": ""
    },
    {
      "ID": 1855,
      "character": "輩",
      "keyWords": "FELLOW",
      "on": "ハイ",
      "kun": ""
    },
    {
      "ID": 1856,
      "character": "悲",
      "keyWords": "SAD",
      "on": "ヒ",
      "kun": "かな.しい ・ かな.しむ"
    },
    {
      "ID": 1857,
      "character": "忽",
      "keyWords": "SUDDENLY ・ CARELESS",
      "on": "コツ",
      "kun": "たちま.ち"
    },
    {
      "ID": 1858,
      "character": "惚",
      "keyWords": "FALL IN LOVE WITH",
      "on": "コツ",
      "kun": "ほれ.る ・ ぼけ.る"
    },
    {
      "ID": 1859,
      "character": "猿",
      "keyWords": "MONKEY",
      "on": "エン",
      "kun": "さる"
    },
    {
      "ID": 1860,
      "character": "哀",
      "keyWords": "SORROW ・ PITY",
      "on": "アイ",
      "kun": "あわ.れ ・ あわ.れむ"
    },
    {
      "ID": 1861,
      "character": "衰",
      "keyWords": "DECLINE",
      "on": "スイ",
      "kun": "おとろ.える ・"
    },
    {
      "ID": 1862,
      "character": "衷",
      "keyWords": "INNER HEART",
      "on": "チュウ",
      "kun": ""
    },
    {
      "ID": 1863,
      "character": "喪",
      "keyWords": "MOURNING ・ LOSS",
      "on": "ソウ",
      "kun": "も"
    },
    {
      "ID": 1864,
      "character": "忌",
      "keyWords": "MOURNING ・ ABHOR",
      "on": "キ",
      "kun": "い.む ・ い.み ・ い.まわしい"
    },
    {
      "ID": 1865,
      "character": "卓",
      "keyWords": "TABLE ・ PROMINENT",
      "on": "タク",
      "kun": ""
    },
    {
      "ID": 1866,
      "character": "悼",
      "keyWords": "MOURN",
      "on": "トウ",
      "kun": "いた.む"
    },
    {
      "ID": 1867,
      "character": "貞",
      "keyWords": "CHASTE",
      "on": "テイ",
      "kun": ""
    },
    {
      "ID": 1868,
      "character": "偵",
      "keyWords": "SPY",
      "on": "テイ",
      "kun": ""
    },
    {
      "ID": 1869,
      "character": "覇",
      "keyWords": "SUPREMACY",
      "on": "ハ",
      "kun": ""
    },
    {
      "ID": 1870,
      "character": "覆",
      "keyWords": "COVER ・ OVERTURN",
      "on": "フク",
      "kun": "おお.う ・ くつがえ.す ・ くつがえ.る"
    },
    {
      "ID": 1871,
      "character": "履",
      "keyWords": "FULFILL ・ PUT ON FOOTWEAR",
      "on": "リ",
      "kun": "は.く"
    },
    {
      "ID": 1872,
      "character": "属",
      "keyWords": "BELONG TO",
      "on": "ゾク",
      "kun": ""
    },
    {
      "ID": 1873,
      "character": "嘱",
      "keyWords": "CHARGE WITH",
      "on": "ショク",
      "kun": ""
    },
    {
      "ID": 1874,
      "character": "偶",
      "keyWords": "BY CHANCE ・ COUPLE",
      "on": "グウ",
      "kun": ""
    },
    {
      "ID": 1875,
      "character": "隅",
      "keyWords": "NOOK",
      "on": "グウ",
      "kun": "すみ"
    },
    {
      "ID": 1876,
      "character": "隙",
      "keyWords": "CREVICE",
      "on": "ゲキ",
      "kun": "すき"
    },
    {
      "ID": 1877,
      "character": "遇",
      "keyWords": "TREAT ・ ENCOUNTER",
      "on": "グウ",
      "kun": "あ.う*"
    },
    {
      "ID": 1878,
      "character": "愚",
      "keyWords": "FOOLISH",
      "on": "グ",
      "kun": "おろ.か"
    },
    {
      "ID": 1879,
      "character": "曹",
      "keyWords": "SERGEANT",
      "on": "ソウ",
      "kun": ""
    },
    {
      "ID": 1880,
      "character": "遭",
      "keyWords": "MEET WITH",
      "on": "ソウ",
      "kun": "あ.う ・ あ.わせる"
    },
    {
      "ID": 1881,
      "character": "槽",
      "keyWords": "TUB",
      "on": "ソウ",
      "kun": ""
    },
    {
      "ID": 1882,
      "character": "妨",
      "keyWords": "HINDER",
      "on": "ボウ",
      "kun": "さまた.げる"
    },
    {
      "ID": 1883,
      "character": "坊",
      "keyWords": "SONNY BOY ・ COLLOQUIAL PERSON SUFFIX",
      "on": "ボウ ・ ボッ-",
      "kun": ""
    },
    {
      "ID": 1884,
      "character": "傍",
      "keyWords": "BESIDE",
      "on": "ボウ",
      "kun": "かたわ.ら ・ そば*"
    },
    {
      "ID": 1885,
      "character": "於",
      "keyWords": "AT",
      "on": "オ",
      "kun": "おい.て ・ お.ける"
    },
    {
      "ID": 1886,
      "character": "房",
      "keyWords": "CHAMBER ・ TUFT",
      "on": "ボウ",
      "kun": "ふさ"
    },
    {
      "ID": 1887,
      "character": "扇",
      "keyWords": "FAN",
      "on": "セン",
      "kun": "おうぎ"
    },
    {
      "ID": 1888,
      "character": "扉",
      "keyWords": "HINGED DOOR",
      "on": "ヒ",
      "kun": "とびら"
    },
    {
      "ID": 1889,
      "character": "雇",
      "keyWords": "EMPLOY",
      "on": "コ",
      "kun": "やと.う"
    },
    {
      "ID": 1890,
      "character": "顧",
      "keyWords": "LOOK BACK ON",
      "on": "コ",
      "kun": "かえり.みる"
    },
    {
      "ID": 1891,
      "character": "屑",
      "keyWords": "SCRAPS",
      "on": "",
      "kun": "くず"
    },
    {
      "ID": 1892,
      "character": "糞",
      "keyWords": "DROPPINGS",
      "on": "フン",
      "kun": "くそ"
    },
    {
      "ID": 1893,
      "character": "尿",
      "keyWords": "URINE",
      "on": "ニョウ",
      "kun": ""
    },
    {
      "ID": 1894,
      "character": "泌",
      "keyWords": "SECRETE",
      "on": "ヒツ ・ ヒ",
      "kun": ""
    },
    {
      "ID": 1895,
      "character": "尻",
      "keyWords": "BUTTOCKS",
      "on": "",
      "kun": "しり"
    },
    {
      "ID": 1896,
      "character": "炉",
      "keyWords": "FURNACE",
      "on": "ロ",
      "kun": ""
    },
    {
      "ID": 1897,
      "character": "窯",
      "keyWords": "KILN",
      "on": "ヨウ",
      "kun": "かま"
    },
    {
      "ID": 1898,
      "character": "釜",
      "keyWords": "IRON POT",
      "on": "",
      "kun": "かま"
    },
    {
      "ID": 1899,
      "character": "爺",
      "keyWords": "OLD MAN",
      "on": "ヤ",
      "kun": "じい ・ じじ ・ じじい ・ おやじ"
    },
    {
      "ID": 1900,
      "character": "窪",
      "keyWords": "SINK",
      "on": "ワ",
      "kun": "くぼ.む ・ くぼ.まる ・ くぼ"
    },
    {
      "ID": 1901,
      "character": "佳",
      "keyWords": "FINE",
      "on": "カ",
      "kun": ""
    },
    {
      "ID": 1902,
      "character": "涯",
      "keyWords": "FAR END",
      "on": "ガイ",
      "kun": ""
    },
    {
      "ID": 1903,
      "character": "暇",
      "keyWords": "FREE TIME",
      "on": "カ",
      "kun": "ひま"
    },
    {
      "ID": 1904,
      "character": "霞",
      "keyWords": "MIST",
      "on": "カ",
      "kun": "かすみ ・ かす.む"
    },
    {
      "ID": 1905,
      "character": "雰",
      "keyWords": "ATMOSPHERE",
      "on": "フン",
      "kun": ""
    },
    {
      "ID": 1906,
      "character": "霧",
      "keyWords": "FOG",
      "on": "ム",
      "kun": "きり"
    },
    {
      "ID": 1907,
      "character": "露",
      "keyWords": "DEW ・ EXPOSE",
      "on": "ロ ・ ロウ",
      "kun": "つゆ"
    },
    {
      "ID": 1908,
      "character": "霜",
      "keyWords": "FROST",
      "on": "ソウ",
      "kun": "しも"
    },
    {
      "ID": 1909,
      "character": "箱",
      "keyWords": "BOX",
      "on": "",
      "kun": "はこ"
    },
    {
      "ID": 1910,
      "character": "籍",
      "keyWords": "REGISTER",
      "on": "セキ",
      "kun": ""
    },
    {
      "ID": 1911,
      "character": "貫",
      "keyWords": "PENETRATE",
      "on": "カン",
      "kun": "つらぬ.く"
    },
    {
      "ID": 1912,
      "character": "慣",
      "keyWords": "HABITUAL PRACTICE",
      "on": "カン",
      "kun": "な.れる ・ な.らす"
    },
    {
      "ID": 1913,
      "character": "頂",
      "keyWords": "SUMMIT ・ RECEIVE HUMBLY",
      "on": "チョウ",
      "kun": "いただ.く ・ いただき"
    },
    {
      "ID": 1914,
      "character": "戴",
      "keyWords": "RECEIVE HUMBLY",
      "on": "タイ ・ ダイ*",
      "kun": "いただ.く*"
    },
    {
      "ID": 1915,
      "character": "項",
      "keyWords": "CLAUSE",
      "on": "コウ",
      "kun": ""
    },
    {
      "ID": 1916,
      "character": "頃",
      "keyWords": "TIME ・ ABOUT",
      "on": "",
      "kun": "ころ ・ ごろ ・ -ごろ"
    },
    {
      "ID": 1917,
      "character": "傾",
      "keyWords": "INCLINE",
      "on": "ケイ",
      "kun": "かたむ.く ・ かたむ.ける ・ かし.げる*"
    },
    {
      "ID": 1918,
      "character": "頑",
      "keyWords": "STUBBORN",
      "on": "ガン",
      "kun": ""
    },
    {
      "ID": 1919,
      "character": "頒",
      "keyWords": "DISTRIBUTE WIDELY",
      "on": "ハン",
      "kun": ""
    },
    {
      "ID": 1920,
      "character": "頓",
      "keyWords": "SUDDENLY",
      "on": "トン",
      "kun": "とみ*"
    },
    {
      "ID": 1921,
      "character": "顕",
      "keyWords": "MANIFEST",
      "on": "ケン",
      "kun": ""
    },
    {
      "ID": 1922,
      "character": "領",
      "keyWords": "DOMINION",
      "on": "リョウ",
      "kun": ""
    },
    {
      "ID": 1923,
      "character": "頻",
      "keyWords": "REPEATEDLY",
      "on": "ヒン",
      "kun": "しきり*"
    },
    {
      "ID": 1924,
      "character": "捗",
      "keyWords": "MAKE PROGRESS",
      "on": "チョク",
      "kun": "はかど.る*"
    },
    {
      "ID": 1925,
      "character": "順",
      "keyWords": "ORDER ・ OBEY",
      "on": "ジュン",
      "kun": ""
    },
    {
      "ID": 1926,
      "character": "馴",
      "keyWords": "GET USED TO",
      "on": "ジュン",
      "kun": "な.れる ・ な.らす"
    },
    {
      "ID": 1927,
      "character": "訓",
      "keyWords": "INSTRUCT",
      "on": "クン",
      "kun": ""
    },
    {
      "ID": 1928,
      "character": "須",
      "keyWords": "MUST",
      "on": "ス ・ シュ*",
      "kun": ""
    },
    {
      "ID": 1929,
      "character": "額",
      "keyWords": "AMOUNT ・ PICTURE FRAME ・ FOREHEAD",
      "on": "ガク",
      "kun": "ひたい"
    },
    {
      "ID": 1930,
      "character": "頼",
      "keyWords": "RELY ON ・ ASK",
      "on": "ライ",
      "kun": "たの.む ・ たの.もしい ・ たよ.る"
    },
    {
      "ID": 1931,
      "character": "瀬",
      "keyWords": "SHALLOWS",
      "on": "",
      "kun": "せ"
    },
    {
      "ID": 1932,
      "character": "峡",
      "keyWords": "GORGE",
      "on": "キョウ",
      "kun": ""
    },
    {
      "ID": 1933,
      "character": "狭",
      "keyWords": "NARROW",
      "on": "キョウ",
      "kun": "せま.い ・ せば.める ・ せば.まる"
    },
    {
      "ID": 1934,
      "character": "挟",
      "keyWords": "HOLD BETWEEN",
      "on": "キョウ",
      "kun": "はさむ"
    },
    {
      "ID": 1935,
      "character": "頰",
      "keyWords": "CHEEKS",
      "on": "キョウ*",
      "kun": "ほお ・ ほほ"
    },
    {
      "ID": 1936,
      "character": "顎",
      "keyWords": "JAW",
      "on": "ガク",
      "kun": "あご"
    },
    {
      "ID": 1937,
      "character": "煩",
      "keyWords": "VEXING",
      "on": "ハン ・ ボン",
      "kun": "わずら.う ・ わずら.わす"
    },
    {
      "ID": 1938,
      "character": "串",
      "keyWords": "SKEWER",
      "on": "",
      "kun": "くし"
    },
    {
      "ID": 1939,
      "character": "患",
      "keyWords": "AFFECTED BY DISEASE",
      "on": "カン",
      "kun": "わずら.う"
    },
    {
      "ID": 1940,
      "character": "疾",
      "keyWords": "DISEASE ・ FAST",
      "on": "シツ",
      "kun": ""
    },
    {
      "ID": 1941,
      "character": "痴",
      "keyWords": "STUPID ・ INFATUATED",
      "on": "チ",
      "kun": ""
    },
    {
      "ID": 1942,
      "character": "疫",
      "keyWords": "EPIDEMIC",
      "on": "エキ ・ ヤク",
      "kun": ""
    },
    {
      "ID": 1943,
      "character": "痢",
      "keyWords": "DIARRHEA",
      "on": "リ",
      "kun": ""
    },
    {
      "ID": 1944,
      "character": "痘",
      "keyWords": "SMALLPOX",
      "on": "トウ",
      "kun": ""
    },
    {
      "ID": 1945,
      "character": "瘍",
      "keyWords": "ULCER",
      "on": "ヨウ",
      "kun": ""
    },
    {
      "ID": 1946,
      "character": "癌",
      "keyWords": "CANCER",
      "on": "ガン",
      "kun": ""
    },
    {
      "ID": 1947,
      "character": "痩",
      "keyWords": "BECOME THIN",
      "on": "ソウ",
      "kun": "や.せる"
    },
    {
      "ID": 1948,
      "character": "疲",
      "keyWords": "TIRED",
      "on": "ヒ",
      "kun": "つか.れる ・ -ずか.れ"
    },
    {
      "ID": 1949,
      "character": "被",
      "keyWords": "BE SUBJECTED TO",
      "on": "ヒ",
      "kun": "こうむ.る"
    },
    {
      "ID": 1950,
      "character": "披",
      "keyWords": "OPEN OUT",
      "on": "ヒ",
      "kun": ""
    },
    {
      "ID": 1951,
      "character": "抜",
      "keyWords": "PULL OUT ・ STAND OUT",
      "on": "バツ",
      "kun": "ぬ.く ・ -ぬ.く ・ ぬ.き ・ ぬ.ける ・ ぬ.かす ・ ぬ.かる"
    },
    {
      "ID": 1952,
      "character": "控",
      "keyWords": "HOLD BACK",
      "on": "コウ",
      "kun": "ひか.える ・ ひか.え"
    },
    {
      "ID": 1953,
      "character": "扶",
      "keyWords": "LEND SUPPORT TO",
      "on": "フ",
      "kun": ""
    },
    {
      "ID": 1954,
      "character": "抹",
      "keyWords": "WIPE",
      "on": "マツ",
      "kun": ""
    },
    {
      "ID": 1955,
      "character": "拓",
      "keyWords": "OPEN UP",
      "on": "タク",
      "kun": ""
    },
    {
      "ID": 1956,
      "character": "拷",
      "keyWords": "TORTURE",
      "on": "ゴウ",
      "kun": ""
    },
    {
      "ID": 1957,
      "character": "楼",
      "keyWords": "TALL BUILDING",
      "on": "ロウ",
      "kun": ""
    },
    {
      "ID": 1958,
      "character": "壇",
      "keyWords": "PLATFORM",
      "on": "ダン ・ タン",
      "kun": ""
    },
    {
      "ID": 1959,
      "character": "塔",
      "keyWords": "TOWER",
      "on": "トウ",
      "kun": ""
    },
    {
      "ID": 1960,
      "character": "搭",
      "keyWords": "LOAD ON BOARD",
      "on": "トウ",
      "kun": ""
    },
    {
      "ID": 1961,
      "character": "寡",
      "keyWords": "FEW ・ WIDOW(ER)",
      "on": "カ",
      "kun": ""
    },
    {
      "ID": 1962,
      "character": "賓",
      "keyWords": "GUEST",
      "on": "ヒン",
      "kun": ""
    },
    {
      "ID": 1963,
      "character": "飾",
      "keyWords": "DECORATE",
      "on": "ショク",
      "kun": "かざ.る ・ かざ.り"
    },
    {
      "ID": 1964,
      "character": "飽",
      "keyWords": "SATIATED",
      "on": "ホウ",
      "kun": "あ.きる ・ あ.かす"
    },
    {
      "ID": 1965,
      "character": "餓",
      "keyWords": "STARVE",
      "on": "ガ",
      "kun": ""
    },
    {
      "ID": 1966,
      "character": "飢",
      "keyWords": "STARVE",
      "on": "キ",
      "kun": "う.える"
    },
    {
      "ID": 1967,
      "character": "机",
      "keyWords": "DESK",
      "on": "キ",
      "kun": "つくえ"
    },
    {
      "ID": 1968,
      "character": "冗",
      "keyWords": "REDUNDANT",
      "on": "ジョウ",
      "kun": ""
    },
    {
      "ID": 1969,
      "character": "冠",
      "keyWords": "CROWN",
      "on": "カン",
      "kun": "かんむり"
    },
    {
      "ID": 1970,
      "character": "離",
      "keyWords": "SEPARATE",
      "on": "リ",
      "kun": "はな.れる ・ はな.す"
    },
    {
      "ID": 1971,
      "character": "胸",
      "keyWords": "CHEST",
      "on": "キョウ",
      "kun": "むね ・ むな-"
    },
    {
      "ID": 1972,
      "character": "悩",
      "keyWords": "SUFFER",
      "on": "ノウ",
      "kun": "なや.む ・ なや.ます"
    },
    {
      "ID": 1973,
      "character": "脳",
      "keyWords": "BRAIN",
      "on": "ノウ",
      "kun": ""
    },
    {
      "ID": 1974,
      "character": "臓",
      "keyWords": "INTERNAL ORGAN",
      "on": "ゾウ",
      "kun": ""
    },
    {
      "ID": 1975,
      "character": "胃",
      "keyWords": "STOMACH",
      "on": "イ",
      "kun": ""
    },
    {
      "ID": 1976,
      "character": "炎",
      "keyWords": "FLAME ・ INFLAMMATION",
      "on": "エン",
      "kun": "ほのお"
    },
    {
      "ID": 1977,
      "character": "談",
      "keyWords": "TALK",
      "on": "ダン",
      "kun": ""
    },
    {
      "ID": 1978,
      "character": "淡",
      "keyWords": "LIGHT",
      "on": "タン",
      "kun": "あわ.い"
    },
    {
      "ID": 1979,
      "character": "災",
      "keyWords": "NATURAL CALAMITY",
      "on": "サイ",
      "kun": "わざわ.い"
    },
    {
      "ID": 1980,
      "character": "肝",
      "keyWords": "LIVER",
      "on": "カン",
      "kun": "きも"
    },
    {
      "ID": 1981,
      "character": "肺",
      "keyWords": "LUNG",
      "on": "ハイ",
      "kun": ""
    },
    {
      "ID": 1982,
      "character": "胆",
      "keyWords": "GALLBLADDER",
      "on": "タン",
      "kun": ""
    },
    {
      "ID": 1983,
      "character": "腺",
      "keyWords": "GLAND",
      "on": "セン",
      "kun": ""
    },
    {
      "ID": 1984,
      "character": "胞",
      "keyWords": "MEMBRANOUS SAC",
      "on": "ホウ",
      "kun": ""
    },
    {
      "ID": 1985,
      "character": "腸",
      "keyWords": "INTESTINES",
      "on": "チョウ",
      "kun": ""
    },
    {
      "ID": 1986,
      "character": "胎",
      "keyWords": "WOMB ・ FETUS",
      "on": "タイ",
      "kun": ""
    },
    {
      "ID": 1987,
      "character": "腰",
      "keyWords": "WAIST",
      "on": "ヨウ",
      "kun": "こし"
    },
    {
      "ID": 1988,
      "character": "肘",
      "keyWords": "ELBOW",
      "on": "",
      "kun": "ひじ"
    },
    {
      "ID": 1989,
      "character": "膝",
      "keyWords": "KNEE",
      "on": "シツ*",
      "kun": "ひざ"
    },
    {
      "ID": 1990,
      "character": "股",
      "keyWords": "CROTCH",
      "on": "コ",
      "kun": "また"
    },
    {
      "ID": 1991,
      "character": "肢",
      "keyWords": "LIMB",
      "on": "シ",
      "kun": ""
    },
    {
      "ID": 1992,
      "character": "胴",
      "keyWords": "TRUNK",
      "on": "ドウ",
      "kun": ""
    },
    {
      "ID": 1993,
      "character": "脇",
      "keyWords": "ARMPIT ・ ASIDE",
      "on": "キョウ*",
      "kun": "わき ・ わけ"
    },
    {
      "ID": 1994,
      "character": "脂",
      "keyWords": "FAT",
      "on": "シ",
      "kun": "あぶら"
    },
    {
      "ID": 1995,
      "character": "詣",
      "keyWords": "VISIT A TEMPLE",
      "on": "ケイ",
      "kun": "もう.で ・ もうで ・ もう.でる"
    },
    {
      "ID": 1996,
      "character": "肪",
      "keyWords": "ANIMAL FAT",
      "on": "ボウ",
      "kun": ""
    },
    {
      "ID": 1997,
      "character": "肌",
      "keyWords": "SKIN",
      "on": "",
      "kun": "はだ"
    },
    {
      "ID": 1998,
      "character": "膚",
      "keyWords": "SKIN",
      "on": "フ",
      "kun": ""
    },
    {
      "ID": 1999,
      "character": "慮",
      "keyWords": "CONSIDER",
      "on": "リョ",
      "kun": ""
    },
    {
      "ID": 2000,
      "character": "虐",
      "keyWords": "CRUEL",
      "on": "ギャク",
      "kun": "しいた.げる"
    },
    {
      "ID": 2001,
      "character": "虞",
      "keyWords": "RISK",
      "on": "",
      "kun": "おそれ"
    },
    {
      "ID": 2002,
      "character": "劇",
      "keyWords": "DRAMA",
      "on": "ゲキ",
      "kun": ""
    },
    {
      "ID": 2003,
      "character": "虚",
      "keyWords": "EMPTY ・ FALSE",
      "on": "キョ ・ コ",
      "kun": ""
    },
    {
      "ID": 2004,
      "character": "虜",
      "keyWords": "CAPTIVE",
      "on": "リョ",
      "kun": ""
    },
    {
      "ID": 2005,
      "character": "勇",
      "keyWords": "BRAVE",
      "on": "ユウ",
      "kun": "いさ.む"
    },
    {
      "ID": 2006,
      "character": "湧",
      "keyWords": "WELL UP",
      "on": "ユウ",
      "kun": "わ.く"
    },
    {
      "ID": 2007,
      "character": "戯",
      "keyWords": "SPORT",
      "on": "ギ",
      "kun": "たわむ.れる"
    },
    {
      "ID": 2008,
      "character": "繊",
      "keyWords": "FINE ・ FIBER",
      "on": "セン",
      "kun": ""
    },
    {
      "ID": 2009,
      "character": "緻",
      "keyWords": "FINE",
      "on": "チ",
      "kun": ""
    },
    {
      "ID": 2010,
      "character": "嘘",
      "keyWords": "LIE",
      "on": "キョ",
      "kun": "うそ"
    },
    {
      "ID": 2011,
      "character": "噂",
      "keyWords": "RUMOR",
      "on": "ソン",
      "kun": "うわさ"
    },
    {
      "ID": 2012,
      "character": "樽",
      "keyWords": "BARREL",
      "on": "ソン",
      "kun": "たる"
    },
    {
      "ID": 2013,
      "character": "距",
      "keyWords": "DISTANCE",
      "on": "キョ",
      "kun": ""
    },
    {
      "ID": 2014,
      "character": "拒",
      "keyWords": "REFUSE",
      "on": "キョ",
      "kun": "こば.む"
    },
    {
      "ID": 2015,
      "character": "嬉",
      "keyWords": "GLAD",
      "on": "キ",
      "kun": "うれ.しい"
    },
    {
      "ID": 2016,
      "character": "鼓",
      "keyWords": "DRUM",
      "on": "コ",
      "kun": "つずみ"
    },
    {
      "ID": 2017,
      "character": "樹",
      "keyWords": "STANDING TREE",
      "on": "ジュ",
      "kun": ""
    },
    {
      "ID": 2018,
      "character": "膨",
      "keyWords": "EXPAND",
      "on": "ボウ",
      "kun": "ふく.らむ ・ ふく.れる"
    },
    {
      "ID": 2019,
      "character": "脹",
      "keyWords": "SWELL",
      "on": "チョウ",
      "kun": ""
    },
    {
      "ID": 2020,
      "character": "張",
      "keyWords": "SPREAD ・ STRAIN",
      "on": "チョウ",
      "kun": "は.る ・ -は.り ・ -ば.り"
    },
    {
      "ID": 2021,
      "character": "帳",
      "keyWords": "NOTEBOOK",
      "on": "チョウ",
      "kun": ""
    },
    {
      "ID": 2022,
      "character": "腫",
      "keyWords": "TUMOR",
      "on": "シュ",
      "kun": "は.れる ・ は.らす"
    },
    {
      "ID": 2023,
      "character": "肥",
      "keyWords": "FATTEN",
      "on": "ヒ",
      "kun": "こ.える ・ こえ ・ こ.やす ・ こ.やし"
    },
    {
      "ID": 2024,
      "character": "把",
      "keyWords": "GRIP",
      "on": "ハ ・ ワ",
      "kun": ""
    },
    {
      "ID": 2025,
      "character": "誇",
      "keyWords": "BOAST",
      "on": "コ",
      "kun": "ほこ.る"
    },
    {
      "ID": 2026,
      "character": "覧",
      "keyWords": "LOOK OVER",
      "on": "ラン",
      "kun": ""
    },
    {
      "ID": 2027,
      "character": "監",
      "keyWords": "OVERSEE",
      "on": "カン",
      "kun": ""
    },
    {
      "ID": 2028,
      "character": "鑑",
      "keyWords": "APPRAISE ・ REFER TO",
      "on": "カン",
      "kun": "かんが.みる"
    },
    {
      "ID": 2029,
      "character": "艦",
      "keyWords": "WARSHIP",
      "on": "カン",
      "kun": ""
    },
    {
      "ID": 2030,
      "character": "濫",
      "keyWords": "EXCESSIVE",
      "on": "ラン",
      "kun": ""
    },
    {
      "ID": 2031,
      "character": "藍",
      "keyWords": "INDIGO",
      "on": "ラン",
      "kun": "あい"
    },
    {
      "ID": 2032,
      "character": "賢",
      "keyWords": "WISE",
      "on": "ケン",
      "kun": "かしこ.い"
    },
    {
      "ID": 2033,
      "character": "腎",
      "keyWords": "KIDNEY",
      "on": "ジン",
      "kun": ""
    },
    {
      "ID": 2034,
      "character": "堅",
      "keyWords": "FIRM",
      "on": "ケン",
      "kun": "かた.い ・ -がた.い"
    },
    {
      "ID": 2035,
      "character": "緊",
      "keyWords": "TIGHTEN ・ EXIGENT",
      "on": "キン",
      "kun": ""
    },
    {
      "ID": 2036,
      "character": "勃",
      "keyWords": "SUDDENLY RISING",
      "on": "ボツ",
      "kun": ""
    },
    {
      "ID": 2037,
      "character": "励",
      "keyWords": "WORK HARD",
      "on": "レイ",
      "kun": "はげ.む ・ はげ.ます"
    },
    {
      "ID": 2038,
      "character": "栃",
      "keyWords": "HORSE CHESTNUT",
      "on": "",
      "kun": "とち"
    },
    {
      "ID": 2039,
      "character": "茨",
      "keyWords": "BRIER",
      "on": "",
      "kun": "いばら"
    },
    {
      "ID": 2040,
      "character": "羨",
      "keyWords": "ENVIOUS",
      "on": "セン",
      "kun": "うらや.む ・ うらや.ましい"
    },
    {
      "ID": 2041,
      "character": "歳",
      "keyWords": "YEAR ・ -YEARS OLD",
      "on": "サイ ・ セイ",
      "kun": ""
    },
    {
      "ID": 2042,
      "character": "戚",
      "keyWords": "KIN",
      "on": "セキ",
      "kun": ""
    },
    {
      "ID": 2043,
      "character": "叔",
      "keyWords": "YOUNGER SIBLING OF PARENT",
      "on": "シュク",
      "kun": ""
    },
    {
      "ID": 2044,
      "character": "淑",
      "keyWords": "GRACEFUL",
      "on": "シュク",
      "kun": ""
    },
    {
      "ID": 2045,
      "character": "寂",
      "keyWords": "LONESOME",
      "on": "ジャク ・ セキ",
      "kun": "さび ・ さび.しい ・ さび.れる"
    },
    {
      "ID": 2046,
      "character": "督",
      "keyWords": "SUPERVISE ・ COMMANDER",
      "on": "トク",
      "kun": ""
    },
    {
      "ID": 2047,
      "character": "奴",
      "keyWords": "SLAVE ・ GUY",
      "on": "ド",
      "kun": "やつ*"
    },
    {
      "ID": 2048,
      "character": "努",
      "keyWords": "EXERT",
      "on": "ド",
      "kun": "つと.める"
    },
    {
      "ID": 2049,
      "character": "怒",
      "keyWords": "GET ANGRY",
      "on": "ド",
      "kun": "いか.る ・ おこ.る"
    },
    {
      "ID": 2050,
      "character": "隷",
      "keyWords": "UNDERLING",
      "on": "レイ",
      "kun": ""
    },
    {
      "ID": 2051,
      "character": "款",
      "keyWords": "ARTICLE ・ FRIENDLY RELATIONS",
      "on": "カン",
      "kun": ""
    },
    {
      "ID": 2052,
      "character": "殻",
      "keyWords": "HUSK",
      "on": "カク",
      "kun": "から ・ がら"
    },
    {
      "ID": 2053,
      "character": "穀",
      "keyWords": "GRAIN",
      "on": "コク",
      "kun": ""
    },
    {
      "ID": 2054,
      "character": "臼",
      "keyWords": "MORTAR",
      "on": "キュウ",
      "kun": "うす"
    },
    {
      "ID": 2055,
      "character": "毀",
      "keyWords": "BREAK",
      "on": "キ",
      "kun": "こぼ.れる* ・ こわ.れる*"
    },
    {
      "ID": 2056,
      "character": "廉",
      "keyWords": "HONEST ・ CHEAP",
      "on": "レン",
      "kun": ""
    },
    {
      "ID": 2057,
      "character": "鎌",
      "keyWords": "SICKLE",
      "on": "",
      "kun": "かま"
    },
    {
      "ID": 2058,
      "character": "嫌",
      "keyWords": "DISLIKE",
      "on": "ケン ・ ゲン",
      "kun": "きら.う ・ きら.い ・ いや"
    },
    {
      "ID": 2059,
      "character": "謙",
      "keyWords": "HUMBLE",
      "on": "ケン",
      "kun": ""
    },
    {
      "ID": 2060,
      "character": "遜",
      "keyWords": "HUMBLE",
      "on": "ソン",
      "kun": ""
    },
    {
      "ID": 2061,
      "character": "亀",
      "keyWords": "TURTLE",
      "on": "キ",
      "kun": "かめ"
    },
    {
      "ID": 2062,
      "character": "練",
      "keyWords": "TRAIN",
      "on": "レン",
      "kun": "ね.る ・ ね.り-"
    },
    {
      "ID": 2063,
      "character": "錬",
      "keyWords": "REFINE",
      "on": "レン",
      "kun": ""
    },
    {
      "ID": 2064,
      "character": "鍛",
      "keyWords": "FORGE",
      "on": "タン",
      "kun": "きた.える"
    },
    {
      "ID": 2065,
      "character": "鉱",
      "keyWords": "ORE ・ MINE",
      "on": "コウ",
      "kun": ""
    },
    {
      "ID": 2066,
      "character": "銅",
      "keyWords": "COPPER",
      "on": "ドウ",
      "kun": ""
    },
    {
      "ID": 2067,
      "character": "鉛",
      "keyWords": "LEAD",
      "on": "エン",
      "kun": "なまり"
    },
    {
      "ID": 2068,
      "character": "銑",
      "keyWords": "PIG IRON",
      "on": "セン",
      "kun": ""
    },
    {
      "ID": 2069,
      "character": "鋼",
      "keyWords": "STEEL",
      "on": "コウ",
      "kun": "はがね"
    },
    {
      "ID": 2070,
      "character": "剛",
      "keyWords": "TOUGH",
      "on": "ゴウ",
      "kun": ""
    },
    {
      "ID": 2071,
      "character": "綱",
      "keyWords": "ROPE ・ MAIN POINTS",
      "on": "コウ",
      "kun": "つな"
    },
    {
      "ID": 2072,
      "character": "網",
      "keyWords": "NET",
      "on": "モウ",
      "kun": "あみ"
    },
    {
      "ID": 2073,
      "character": "縄",
      "keyWords": "ROPE",
      "on": "ジョウ",
      "kun": "なわ"
    },
    {
      "ID": 2074,
      "character": "鉢",
      "keyWords": "BOWL",
      "on": "ハチ ・ ハツ",
      "kun": ""
    },
    {
      "ID": 2075,
      "character": "鎖",
      "keyWords": "CHAIN",
      "on": "サ",
      "kun": "くさり"
    },
    {
      "ID": 2076,
      "character": "絆",
      "keyWords": "BONDS",
      "on": "ハン ・ バン",
      "kun": "きずな"
    },
    {
      "ID": 2077,
      "character": "鍵",
      "keyWords": "KEY",
      "on": "ケン",
      "kun": "かぎ"
    },
    {
      "ID": 2078,
      "character": "釘",
      "keyWords": "NAIL",
      "on": "テイ",
      "kun": "くぎ"
    },
    {
      "ID": 2079,
      "character": "錮",
      "keyWords": "LOCK DOWN",
      "on": "コ",
      "kun": ""
    },
    {
      "ID": 2080,
      "character": "錠",
      "keyWords": "LOCK ・ PILL",
      "on": "ジョウ",
      "kun": ""
    },
    {
      "ID": 2081,
      "character": "綻",
      "keyWords": "COME APART AT THE SEAMS",
      "on": "タン",
      "kun": "ほころ.びる"
    },
    {
      "ID": 2082,
      "character": "鈴",
      "keyWords": "BELL",
      "on": "レイ ・ リン",
      "kun": "すず"
    },
    {
      "ID": 2083,
      "character": "鐘",
      "keyWords": "BELL",
      "on": "ショウ",
      "kun": "かね"
    },
    {
      "ID": 2084,
      "character": "瞳",
      "keyWords": "PUPIL",
      "on": "ドウ",
      "kun": "ひとみ"
    },
    {
      "ID": 2085,
      "character": "憧",
      "keyWords": "YEARN AFTER",
      "on": "ショウ ・ ドウ*",
      "kun": "あこが.れる"
    },
    {
      "ID": 2086,
      "character": "憬",
      "keyWords": "YEARN AFTER",
      "on": "ケイ",
      "kun": ""
    },
    {
      "ID": 2087,
      "character": "卑",
      "keyWords": "MEAN",
      "on": "ヒ",
      "kun": "いや.しい ・ いや.しむ ・ いや.しめる"
    },
    {
      "ID": 2088,
      "character": "碑",
      "keyWords": "MONUMENT",
      "on": "ヒ",
      "kun": ""
    },
    {
      "ID": 2089,
      "character": "痺",
      "keyWords": "PARALYSIS",
      "on": "ヒ",
      "kun": "しび.れる"
    },
    {
      "ID": 2090,
      "character": "鬼",
      "keyWords": "DEMON",
      "on": "キ",
      "kun": "おに ・ おに-"
    },
    {
      "ID": 2091,
      "character": "塊",
      "keyWords": "LUMP",
      "on": "カイ",
      "kun": "かたまり"
    },
    {
      "ID": 2092,
      "character": "醜",
      "keyWords": "UGLY",
      "on": "シュウ",
      "kun": "みにく.い"
    },
    {
      "ID": 2093,
      "character": "魂",
      "keyWords": "SOUL",
      "on": "コン",
      "kun": "たましい"
    },
    {
      "ID": 2094,
      "character": "魅",
      "keyWords": "CHARM",
      "on": "ミ",
      "kun": ""
    },
    {
      "ID": 2095,
      "character": "魔",
      "keyWords": "DEMON",
      "on": "マ",
      "kun": ""
    },
    {
      "ID": 2096,
      "character": "畏",
      "keyWords": "FEAR",
      "on": "イ",
      "kun": "おそ.れ ・ おそ.れる"
    },
    {
      "ID": 2097,
      "character": "刷",
      "keyWords": "PRINT",
      "on": "サツ",
      "kun": "す.る ・ -ず.り ・ -ずり"
    },
    {
      "ID": 2098,
      "character": "擦",
      "keyWords": "RUB",
      "on": "サツ",
      "kun": "す.る ・ す.れる ・ -ず.れ"
    },
    {
      "ID": 2099,
      "character": "摩",
      "keyWords": "RUB AGAINST",
      "on": "マ",
      "kun": ""
    },
    {
      "ID": 2100,
      "character": "磨",
      "keyWords": "POLISH",
      "on": "マ",
      "kun": "みが.く"
    },
    {
      "ID": 2101,
      "character": "凹",
      "keyWords": "CONCAVE",
      "on": "オウ",
      "kun": ""
    },
    {
      "ID": 2102,
      "character": "凸",
      "keyWords": "CONVEX",
      "on": "トツ",
      "kun": ""
    },
    {
      "ID": 2103,
      "character": "奉",
      "keyWords": "DEDICATE",
      "on": "ホウ ・ ブ",
      "kun": "たてまつ.る"
    },
    {
      "ID": 2104,
      "character": "奏",
      "keyWords": "PLAY MUSIC",
      "on": "ソウ",
      "kun": "かな.でる"
    },
    {
      "ID": 2105,
      "character": "泰",
      "keyWords": "TRANQUIL",
      "on": "タイ",
      "kun": ""
    },
    {
      "ID": 2106,
      "character": "俸",
      "keyWords": "SALARY",
      "on": "ホウ",
      "kun": ""
    },
    {
      "ID": 2107,
      "character": "棒",
      "keyWords": "ROD",
      "on": "ボウ",
      "kun": ""
    },
    {
      "ID": 2108,
      "character": "捧",
      "keyWords": "DEDICATE",
      "on": "ホウ",
      "kun": "ささ.げる"
    },
    {
      "ID": 2109,
      "character": "耐",
      "keyWords": "WITHSTAND",
      "on": "タイ",
      "kun": "た.える"
    },
    {
      "ID": 2110,
      "character": "霊",
      "keyWords": "SPIRIT",
      "on": "レイ ・ リョウ",
      "kun": "たま"
    },
    {
      "ID": 2111,
      "character": "需",
      "keyWords": "DEMAND",
      "on": "ジュ",
      "kun": ""
    },
    {
      "ID": 2112,
      "character": "濡",
      "keyWords": "WET",
      "on": "ジュ",
      "kun": "ぬ.れる ・ ぬ.らす"
    },
    {
      "ID": 2113,
      "character": "儒",
      "keyWords": "CONFUCIANISM",
      "on": "ジュ",
      "kun": ""
    },
    {
      "ID": 2114,
      "character": "端",
      "keyWords": "EDGE",
      "on": "タン",
      "kun": "はし ・ は ・ はた ・ -ばた"
    },
    {
      "ID": 2115,
      "character": "壱",
      "keyWords": "ONE",
      "on": "イチ",
      "kun": ""
    },
    {
      "ID": 2116,
      "character": "尼",
      "keyWords": "BUDDHIST NUN",
      "on": "ニ",
      "kun": "あま"
    },
    {
      "ID": 2117,
      "character": "泥",
      "keyWords": "MUD",
      "on": "デイ",
      "kun": "どろ"
    },
    {
      "ID": 2118,
      "character": "漏",
      "keyWords": "LEAK",
      "on": "ロウ",
      "kun": "も.る ・ も.れる ・ も.らす"
    },
    {
      "ID": 2119,
      "character": "氾",
      "keyWords": "FLOOD",
      "on": "ハン",
      "kun": ""
    },
    {
      "ID": 2120,
      "character": "彙",
      "keyWords": "CATALOG",
      "on": "イ",
      "kun": ""
    },
    {
      "ID": 2121,
      "character": "某",
      "keyWords": "A CERTAIN",
      "on": "ボウ",
      "kun": ""
    },
    {
      "ID": 2122,
      "character": "謀",
      "keyWords": "SCHEME",
      "on": "ボウ ・ ム",
      "kun": "はか.る"
    },
    {
      "ID": 2123,
      "character": "媒",
      "keyWords": "MEDIATE",
      "on": "バイ",
      "kun": ""
    },
    {
      "ID": 2124,
      "character": "尉",
      "keyWords": "OFFICER",
      "on": "イ",
      "kun": ""
    },
    {
      "ID": 2125,
      "character": "慰",
      "keyWords": "CONSOLE",
      "on": "イ",
      "kun": "なぐさ.める ・ なぐさ.む"
    },
    {
      "ID": 2126,
      "character": "酪",
      "keyWords": "DAIRY PRODUCTS",
      "on": "ラク",
      "kun": ""
    },
    {
      "ID": 2127,
      "character": "酵",
      "keyWords": "FERMENT",
      "on": "コウ",
      "kun": ""
    },
    {
      "ID": 2128,
      "character": "醤",
      "keyWords": "SOY SAUCE",
      "on": "ショウ",
      "kun": ""
    },
    {
      "ID": 2129,
      "character": "酢",
      "keyWords": "VINEGAR",
      "on": "サク",
      "kun": "す"
    },
    {
      "ID": 2130,
      "character": "酎",
      "keyWords": "<SHOCHU> (japanese distilled liquor)",
      "on": "チュウ",
      "kun": ""
    },
    {
      "ID": 2131,
      "character": "酌",
      "keyWords": "POUR WINE",
      "on": "シャク",
      "kun": "く.む"
    },
    {
      "ID": 2132,
      "character": "釣",
      "keyWords": "ANGLE",
      "on": "チョウ",
      "kun": "つ.る ・ つ.り ・ つ.り-"
    },
    {
      "ID": 2133,
      "character": "畜",
      "keyWords": "(RAISE) LIVESTOCK",
      "on": "チク",
      "kun": ""
    },
    {
      "ID": 2134,
      "character": "蓄",
      "keyWords": "STORE UP",
      "on": "チク",
      "kun": "たくわ.える"
    },
    {
      "ID": 2135,
      "character": "玄",
      "keyWords": "PROFOUND",
      "on": "ゲン",
      "kun": ""
    },
    {
      "ID": 2136,
      "character": "眩",
      "keyWords": "DAZZLING",
      "on": "ゲン",
      "kun": "くるめ.く ・ まぶ.しい ・ まばゆ.い"
    },
    {
      "ID": 2137,
      "character": "呟",
      "keyWords": "MUTTER",
      "on": "ゲン",
      "kun": "つぶや.く"
    },
    {
      "ID": 2138,
      "character": "囁",
      "keyWords": "WHISPER",
      "on": "",
      "kun": "ささや.く"
    },
    {
      "ID": 2139,
      "character": "喋",
      "keyWords": "SPEAK",
      "on": "チョウ",
      "kun": "しゃべ.る"
    },
    {
      "ID": 2140,
      "character": "喩",
      "keyWords": "LIKEN",
      "on": "ユ",
      "kun": ""
    },
    {
      "ID": 2141,
      "character": "鬱",
      "keyWords": "DEPRESSION ・ CONGESTED",
      "on": "ウツ",
      "kun": ""
    },
    {
      "ID": 2142,
      "character": "弦",
      "keyWords": "STRING",
      "on": "ゲン",
      "kun": "つる"
    },
    {
      "ID": 2143,
      "character": "舷",
      "keyWords": "GUNWALE",
      "on": "ゲン",
      "kun": ""
    },
    {
      "ID": 2144,
      "character": "舵",
      "keyWords": "RUDDER",
      "on": "ダ",
      "kun": "かじ"
    },
    {
      "ID": 2145,
      "character": "幻",
      "keyWords": "PHANTOM",
      "on": "ゲン",
      "kun": "まぼろし"
    },
    {
      "ID": 2146,
      "character": "幽",
      "keyWords": "QUIET AND SECLUDED",
      "on": "ユウ",
      "kun": ""
    },
    {
      "ID": 2147,
      "character": "幼",
      "keyWords": "VERY YOUNG",
      "on": "ヨウ",
      "kun": "おさな.い"
    },
    {
      "ID": 2148,
      "character": "稚",
      "keyWords": "CHILD",
      "on": "チ",
      "kun": ""
    },
    {
      "ID": 2149,
      "character": "維",
      "keyWords": "FIBER",
      "on": "イ",
      "kun": ""
    },
    {
      "ID": 2150,
      "character": "推",
      "keyWords": "INFER ・ PUSH FORWARD",
      "on": "スイ",
      "kun": "お.す"
    },
    {
      "ID": 2151,
      "character": "堆",
      "keyWords": "PILE UP",
      "on": "タイ",
      "kun": "うずたか.い*"
    },
    {
      "ID": 2152,
      "character": "椎",
      "keyWords": "SPINE ・ CHINQUAPIN",
      "on": "ツイ",
      "kun": "しい*"
    },
    {
      "ID": 2153,
      "character": "脊",
      "keyWords": "SPINE",
      "on": "セキ",
      "kun": ""
    },
    {
      "ID": 2154,
      "character": "雛",
      "keyWords": "CHICK",
      "on": "スウ ・ ジュ",
      "kun": "ひな ・ ひよこ"
    },
    {
      "ID": 2155,
      "character": "誰",
      "keyWords": "WHO",
      "on": "",
      "kun": "だれ"
    },
    {
      "ID": 2156,
      "character": "唯",
      "keyWords": "MERELY",
      "on": "ユイ ・ イ",
      "kun": ""
    },
    {
      "ID": 2157,
      "character": "鳴",
      "keyWords": "CRY ・ SOUND",
      "on": "メイ",
      "kun": "な.く ・ な.る ・ な.らす"
    },
    {
      "ID": 2158,
      "character": "亥",
      "keyWords": "THE BOAR",
      "on": "ガイ",
      "kun": "い"
    },
    {
      "ID": 2159,
      "character": "刻",
      "keyWords": "ENGRAVE ・ POINT IN TIME",
      "on": "コク",
      "kun": "きざ.む ・ きざ.み"
    },
    {
      "ID": 2160,
      "character": "劾",
      "keyWords": "EXPOSE CRIMES",
      "on": "ガイ",
      "kun": ""
    },
    {
      "ID": 2161,
      "character": "核",
      "keyWords": "NUCLEUS",
      "on": "カク",
      "kun": ""
    },
    {
      "ID": 2162,
      "character": "骸",
      "keyWords": "BODY",
      "on": "ガイ",
      "kun": ""
    },
    {
      "ID": 2163,
      "character": "咳",
      "keyWords": "COUGH",
      "on": "ガイ",
      "kun": "せき ・ せ.く"
    },
    {
      "ID": 2164,
      "character": "該",
      "keyWords": "CORRESPOND TO",
      "on": "ガイ",
      "kun": ""
    },
    {
      "ID": 2165,
      "character": "診",
      "keyWords": "EXAMINE A PATIENT",
      "on": "シン",
      "kun": "み.る"
    },
    {
      "ID": 2166,
      "character": "珍",
      "keyWords": "RARE",
      "on": "チン",
      "kun": "めずら.しい"
    },
    {
      "ID": 2167,
      "character": "瓦",
      "keyWords": "TILE",
      "on": "ガ",
      "kun": "かわら"
    },
    {
      "ID": 2168,
      "character": "併",
      "keyWords": "PUT TOGETHER",
      "on": "ヘイ",
      "kun": "あわ.せる"
    },
    {
      "ID": 2169,
      "character": "瓶",
      "keyWords": "BOTTLE",
      "on": "ビン",
      "kun": ""
    },
    {
      "ID": 2170,
      "character": "屏",
      "keyWords": "FENCE",
      "on": "ビョウ ・ ヘイ",
      "kun": ""
    },
    {
      "ID": 2171,
      "character": "塀",
      "keyWords": "FENCE",
      "on": "ヘイ",
      "kun": ""
    },
    {
      "ID": 2172,
      "character": "餅",
      "keyWords": "RICE CAKE",
      "on": "ヘイ",
      "kun": "もち"
    },
    {
      "ID": 2173,
      "character": "餌",
      "keyWords": "FEED ・ BAIT",
      "on": "ジ",
      "kun": "え ・ えさ"
    },
    {
      "ID": 2174,
      "character": "呑",
      "keyWords": "SWALLOW",
      "on": "ドン",
      "kun": "の.む"
    },
    {
      "ID": 2175,
      "character": "沃",
      "keyWords": "FERTILITY",
      "on": "ヨク",
      "kun": ""
    },
    {
      "ID": 2176,
      "character": "妖",
      "keyWords": "BEWITCHING",
      "on": "ヨウ",
      "kun": "あや.しい"
    },
    {
      "ID": 2177,
      "character": "呪",
      "keyWords": "CHARM",
      "on": "ジュ",
      "kun": "のろ.う ・ まじな.う*"
    },
    {
      "ID": 2178,
      "character": "艶",
      "keyWords": "CHARMING ・ ROMANCE",
      "on": "エン",
      "kun": "つや ・ なま.めかしい* ・ あで.やか*"
    },
    {
      "ID": 2179,
      "character": "慈",
      "keyWords": "AFFECTIONATE",
      "on": "ジ",
      "kun": "いつく.しむ"
    },
    {
      "ID": 2180,
      "character": "滋",
      "keyWords": "NOURISH",
      "on": "ジ",
      "kun": ""
    },
    {
      "ID": 2181,
      "character": "磁",
      "keyWords": "MAGNETISM",
      "on": "ジ",
      "kun": ""
    },
    {
      "ID": 2182,
      "character": "擁",
      "keyWords": "EMBRACE",
      "on": "ヨウ",
      "kun": ""
    },
    {
      "ID": 2183,
      "character": "腐",
      "keyWords": "ROT",
      "on": "フ",
      "kun": "くさ.る ・ -くさ.る ・ くさ.れる ・ くさ.れ ・ くさ.らす"
    },
    {
      "ID": 2184,
      "character": "芯",
      "keyWords": "CORE",
      "on": "シン",
      "kun": ""
    },
    {
      "ID": 2185,
      "character": "蒔",
      "keyWords": "SOW",
      "on": "ジ ・ シ",
      "kun": "ま.く"
    },
    {
      "ID": 2186,
      "character": "撒",
      "keyWords": "SCATTER",
      "on": "サン ・ サツ",
      "kun": "ま.く"
    },
    {
      "ID": 2187,
      "character": "撤",
      "keyWords": "WITHDRAW",
      "on": "テツ",
      "kun": ""
    },
    {
      "ID": 2188,
      "character": "徹",
      "keyWords": "GO THROUGH",
      "on": "テツ",
      "kun": ""
    },
    {
      "ID": 2189,
      "character": "微",
      "keyWords": "SLIGHT",
      "on": "ビ",
      "kun": "かす.か*"
    },
    {
      "ID": 2190,
      "character": "徴",
      "keyWords": "LEVY ・ SIGN",
      "on": "チョウ",
      "kun": ""
    },
    {
      "ID": 2191,
      "character": "懲",
      "keyWords": "CHASTISE",
      "on": "チョウ",
      "kun": "こ.りる ・ こ.らす ・ こ.らしめる"
    },
    {
      "ID": 2192,
      "character": "殆",
      "keyWords": "ALMOST",
      "on": "タイ ・ ダイ",
      "kun": "ほとん.ど ・ ほとほと"
    },
    {
      "ID": 2193,
      "character": "后",
      "keyWords": "EMPRESS",
      "on": "コウ",
      "kun": ""
    },
    {
      "ID": 2194,
      "character": "垢",
      "keyWords": "DIRT",
      "on": "コウ ・ ク",
      "kun": "あか"
    },
    {
      "ID": 2195,
      "character": "妃",
      "keyWords": "PRINCESS",
      "on": "ヒ",
      "kun": ""
    },
    {
      "ID": 2196,
      "character": "姫",
      "keyWords": "DAUGHTER OF NOBLE BIRTH",
      "on": "",
      "kun": "ひめ ・ ひめ-"
    },
    {
      "ID": 2197,
      "character": "如",
      "keyWords": "AS",
      "on": "ジョ ・ ニョ",
      "kun": "ごと.し*"
    },
    {
      "ID": 2198,
      "character": "茹",
      "keyWords": "BOIL",
      "on": "ジョ",
      "kun": "ゆ.でる ・ う.でる"
    },
    {
      "ID": 2199,
      "character": "婿",
      "keyWords": "SON-IN-LAW",
      "on": "セイ",
      "kun": "むこ"
    },
    {
      "ID": 2200,
      "character": "娘",
      "keyWords": "DAUGHTER ・ GIRL",
      "on": "",
      "kun": "むすめ"
    },
    {
      "ID": 2201,
      "character": "嫁",
      "keyWords": "WED A MAN ・ BRIDE",
      "on": "カ",
      "kun": "よめ ・ とつ.ぐ"
    },
    {
      "ID": 2202,
      "character": "稼",
      "keyWords": "WORK",
      "on": "カ",
      "kun": "かせ.ぐ"
    },
    {
      "ID": 2203,
      "character": "塚",
      "keyWords": "MOUND",
      "on": "",
      "kun": "つか ・ -ずか"
    },
    {
      "ID": 2204,
      "character": "豪",
      "keyWords": "GREAT MAN ・ MAGNIFICENT",
      "on": "ゴウ",
      "kun": ""
    },
    {
      "ID": 2205,
      "character": "蒙",
      "keyWords": "IGNORANCE ・ PHONETIC [MÔ]",
      "on": "モウ",
      "kun": ""
    },
    {
      "ID": 2206,
      "character": "墾",
      "keyWords": "CLEAR LAND FOR FARMING",
      "on": "コン",
      "kun": ""
    },
    {
      "ID": 2207,
      "character": "懇",
      "keyWords": "FAMILIAR ・ EARNEST",
      "on": "コン",
      "kun": "ねんご.ろ"
    },
    {
      "ID": 2208,
      "character": "貌",
      "keyWords": "APPEARANCE",
      "on": "ボウ",
      "kun": ""
    },
    {
      "ID": 2209,
      "character": "逐",
      "keyWords": "DRIVE OUT ・ ONE BY ONE",
      "on": "チク",
      "kun": ""
    },
    {
      "ID": 2210,
      "character": "遂",
      "keyWords": "ACCOMPLISH",
      "on": "スイ",
      "kun": "と.げる ・ つい.に*"
    },
    {
      "ID": 2211,
      "character": "墜",
      "keyWords": "DROP DOWN",
      "on": "ツイ",
      "kun": ""
    },
    {
      "ID": 2212,
      "character": "堕",
      "keyWords": "DEGENERATE",
      "on": "ダ",
      "kun": ""
    },
    {
      "ID": 2213,
      "character": "随",
      "keyWords": "FOLLOW",
      "on": "ズイ",
      "kun": ""
    },
    {
      "ID": 2214,
      "character": "附",
      "keyWords": "ATTACH",
      "on": "フ",
      "kun": ""
    },
    {
      "ID": 2215,
      "character": "髄",
      "keyWords": "MARROW",
      "on": "ズイ",
      "kun": ""
    },
    {
      "ID": 2216,
      "character": "怠",
      "keyWords": "IDLE",
      "on": "タイ",
      "kun": "おこた.る ・ なま.ける"
    },
    {
      "ID": 2217,
      "character": "惰",
      "keyWords": "LAZY",
      "on": "ダ",
      "kun": ""
    },
    {
      "ID": 2218,
      "character": "佐",
      "keyWords": "ASSIST ・ FIELD OFFICER",
      "on": "サ",
      "kun": ""
    },
    {
      "ID": 2219,
      "character": "玩",
      "keyWords": "PLAY WITH",
      "on": "ガン",
      "kun": "もてあそ.ぶ*"
    },
    {
      "ID": 2220,
      "character": "弄",
      "keyWords": "PLAY WITH",
      "on": "ロウ",
      "kun": "もてあそ.ぶ"
    },
    {
      "ID": 2221,
      "character": "嘲",
      "keyWords": "RIDICULE",
      "on": "チョウ",
      "kun": "あざけ.る"
    },
    {
      "ID": 2222,
      "character": "奔",
      "keyWords": "RUSH",
      "on": "ホン",
      "kun": ""
    },
    {
      "ID": 2223,
      "character": "弊",
      "keyWords": "EVIL PRACTICE",
      "on": "ヘイ",
      "kun": ""
    },
    {
      "ID": 2224,
      "character": "幣",
      "keyWords": "CURRENCY ・ SHINTO PAPER OFFERING",
      "on": "ヘイ",
      "kun": ""
    },
    {
      "ID": 2225,
      "character": "蔽",
      "keyWords": "COVER",
      "on": "ヘイ",
      "kun": ""
    },
    {
      "ID": 2226,
      "character": "朋",
      "keyWords": "COMRADE",
      "on": "ホウ",
      "kun": "とも"
    },
    {
      "ID": 2227,
      "character": "棚",
      "keyWords": "SHELF",
      "on": "",
      "kun": "たな ・ -だな"
    },
    {
      "ID": 2228,
      "character": "柵",
      "keyWords": "FENCE",
      "on": "サク",
      "kun": ""
    },
    {
      "ID": 2229,
      "character": "桁",
      "keyWords": "DIGIT ・ BEAM",
      "on": "",
      "kun": "けた"
    },
    {
      "ID": 2230,
      "character": "栓",
      "keyWords": "STOPPER",
      "on": "セン",
      "kun": ""
    },
    {
      "ID": 2231,
      "character": "詮",
      "keyWords": "INQUIRY",
      "on": "セン",
      "kun": ""
    },
    {
      "ID": 2232,
      "character": "塞",
      "keyWords": "PLUG UP",
      "on": "ソク ・ サイ",
      "kun": "ふさ.ぐ ・ ふさ.がる"
    },
    {
      "ID": 2233,
      "character": "梗",
      "keyWords": "BLOCK",
      "on": "コウ",
      "kun": ""
    },
    {
      "ID": 2234,
      "character": "柿",
      "keyWords": "PERSIMMON",
      "on": "シ*",
      "kun": "かき"
    },
    {
      "ID": 2235,
      "character": "藤",
      "keyWords": "WISTERIA",
      "on": "トウ",
      "kun": "ふじ"
    },
    {
      "ID": 2236,
      "character": "騰",
      "keyWords": "RISE",
      "on": "トウ",
      "kun": ""
    },
    {
      "ID": 2237,
      "character": "謄",
      "keyWords": "TRANSCRIBE",
      "on": "トウ",
      "kun": ""
    },
    {
      "ID": 2238,
      "character": "麺",
      "keyWords": "NOODLES",
      "on": "メン",
      "kun": ""
    },
    {
      "ID": 2239,
      "character": "拉",
      "keyWords": "KIDNAP",
      "on": "ラ",
      "kun": ""
    },
    {
      "ID": 2240,
      "character": "晃",
      "keyWords": "DAZZLING",
      "on": "コウ",
      "kun": ""
    },
    {
      "ID": 2241,
      "character": "幌",
      "keyWords": "AWNING",
      "on": "コウ",
      "kun": "ほろ"
    },
    {
      "ID": 2242,
      "character": "厘",
      "keyWords": "<RIN> (0.001 yen)",
      "on": "リン",
      "kun": ""
    },
    {
      "ID": 2243,
      "character": "畝",
      "keyWords": "<SE> (RIDGE)",
      "on": "",
      "kun": "うね・せ"
    },
    {
      "ID": 2244,
      "character": "匁",
      "keyWords": "<MONME> (3.75 grams)",
      "on": "",
      "kun": "もんめ"
    },
    {
      "ID": 2245,
      "character": "匂",
      "keyWords": "SMELL",
      "on": "",
      "kun": "にお.う ・ にお.い ・ にお.わせる"
    },
    {
      "ID": 2246,
      "character": "勾",
      "keyWords": "BENT",
      "on": "コウ",
      "kun": ""
    },
    {
      "ID": 2247,
      "character": "挨",
      "keyWords": "GREET",
      "on": "アイ",
      "kun": ""
    },
    {
      "ID": 2248,
      "character": "拶",
      "keyWords": "GREET",
      "on": "サツ",
      "kun": ""
    },
    {
      "ID": 2249,
      "character": "曖",
      "keyWords": "NOT CLEAR",
      "on": "アイ",
      "kun": ""
    },
    {
      "ID": 2250,
      "character": "昧",
      "keyWords": "DARK",
      "on": "マイ",
      "kun": ""
    },
    {
      "ID": 2251,
      "character": "瑠",
      "keyWords": "LAPIS LAZULI",
      "on": "ル",
      "kun": ""
    },
    {
      "ID": 2252,
      "character": "璃",
      "keyWords": "GLASSY SUBSTANCE",
      "on": "リ",
      "kun": ""
    },
    {
      "ID": 2253,
      "character": "嫉",
      "keyWords": "ENVY",
      "on": "シツ",
      "kun": ""
    },
    {
      "ID": 2254,
      "character": "妬",
      "keyWords": "ENVY",
      "on": "ト",
      "kun": "ねた.む"
    },
    {
      "ID": 2255,
      "character": "鹿",
      "keyWords": "DEER",
      "on": "",
      "kun": "しか ・ か"
    },
    {
      "ID": 2256,
      "character": "塵",
      "keyWords": "DUST",
      "on": "ジン",
      "kun": "ちり ・ ごみ"
    },
    {
      "ID": 2257,
      "character": "麓",
      "keyWords": "FOOT OF A MOUNTAIN",
      "on": "ロク",
      "kun": "ふもと"
    },
    {
      "ID": 2258,
      "character": "麗",
      "keyWords": "OF GRACEFUL BEAUTY",
      "on": "レイ",
      "kun": "うるわ.しい"
    },
    {
      "ID": 2259,
      "character": "薦",
      "keyWords": "RECOMMEND",
      "on": "セン",
      "kun": "すす.める"
    },
    {
      "ID": 2260,
      "character": "慶",
      "keyWords": "FELICITATION",
      "on": "ケイ",
      "kun": ""
    },
    {
      "ID": 2261,
      "character": "兜",
      "keyWords": "HELMET",
      "on": "トウ ・ ト",
      "kun": "かぶと"
    },
    {
      "ID": 2262,
      "character": "睨",
      "keyWords": "GLARE AT",
      "on": "ゲイ",
      "kun": "にら.む"
    },
    {
      "ID": 2263,
      "character": "鼠",
      "keyWords": "RAT",
      "on": "ソ",
      "kun": "ねずみ ・ ねず"
    },
    {
      "ID": 2264,
      "character": "溺",
      "keyWords": "DROWN",
      "on": "デキ",
      "kun": "おぼ.れる"
    },
    {
      "ID": 2265,
      "character": "潟",
      "keyWords": "LAGOON",
      "on": "",
      "kun": "かた ・ -がた"
    },
    {
      "ID": 2266,
      "character": "濁",
      "keyWords": "TURBID",
      "on": "ダク",
      "kun": "にご.る ・ にご.す"
    },
    {
      "ID": 2267,
      "character": "渇",
      "keyWords": "RUN DRY ・ THIRST",
      "on": "カツ",
      "kun": "かわ.く"
    },
    {
      "ID": 2268,
      "character": "褐",
      "keyWords": "BROWN",
      "on": "カツ",
      "kun": ""
    },
    {
      "ID": 2269,
      "character": "葛",
      "keyWords": "KUDZU",
      "on": "カツ",
      "kun": "くず"
    },
    {
      "ID": 2270,
      "character": "喝",
      "keyWords": "SHOUT AT",
      "on": "カツ",
      "kun": ""
    },
    {
      "ID": 2271,
      "character": "謁",
      "keyWords": "BE GRANTED AN AUDIENCE",
      "on": "エツ",
      "kun": ""
    },
    {
      "ID": 2272,
      "character": "掲",
      "keyWords": "PUT UP",
      "on": "ケイ",
      "kun": "かか.げる"
    },
    {
      "ID": 2273,
      "character": "戌",
      "keyWords": "THE DOG",
      "on": "ジュツ",
      "kun": "いぬ"
    },
    {
      "ID": 2274,
      "character": "尤",
      "keyWords": "REASONABLE",
      "on": "ユウ",
      "kun": "もっと.も"
    },
    {
      "ID": 2275,
      "character": "駄",
      "keyWords": "GOOD FOR NOTHING ・ CLOGS",
      "on": "ダ ・ タ*",
      "kun": ""
    },
    {
      "ID": 2276,
      "character": "駒",
      "keyWords": "HORSE ・ CHESS PIECE",
      "on": "",
      "kun": "こま"
    },
    {
      "ID": 2277,
      "character": "篤",
      "keyWords": "SERIOUS ・ KIND",
      "on": "トク",
      "kun": ""
    },
    {
      "ID": 2278,
      "character": "罵",
      "keyWords": "SPEAK ILL OF",
      "on": "バ",
      "kun": "ののし.る"
    },
    {
      "ID": 2279,
      "character": "蔑",
      "keyWords": "SCORN",
      "on": "ベツ",
      "kun": "さげす.む ・ ないがし.ろ*"
    },
    {
      "ID": 2280,
      "character": "罠",
      "keyWords": "TRAP",
      "on": "",
      "kun": "わな"
    },
    {
      "ID": 2281,
      "character": "烏",
      "keyWords": "RAVEN",
      "on": "ウ ・ ウウ ・ オ",
      "kun": "からす"
    },
    {
      "ID": 2282,
      "character": "鴨",
      "keyWords": "DUCK",
      "on": "オウ",
      "kun": "かも"
    },
    {
      "ID": 2283,
      "character": "鳩",
      "keyWords": "PIGEON",
      "on": "キュウ",
      "kun": "はと"
    },
    {
      "ID": 2284,
      "character": "鶏",
      "keyWords": "CHICKEN",
      "on": "ケイ",
      "kun": "にわとり"
    },
    {
      "ID": 2285,
      "character": "渓",
      "keyWords": "RAVINE",
      "on": "ケイ",
      "kun": ""
    },
    {
      "ID": 2286,
      "character": "鷹",
      "keyWords": "HAWK",
      "on": "ヨウ ・ オウ",
      "kun": "たか"
    },
    {
      "ID": 2287,
      "character": "鷲",
      "keyWords": "EAGLE",
      "on": "シュウ",
      "kun": "わし"
    },
    {
      "ID": 2288,
      "character": "璽",
      "keyWords": "IMPERIAL SEAL",
      "on": "ジ",
      "kun": ""
    },
    {
      "ID": 2289,
      "character": "爽",
      "keyWords": "REFRESHING",
      "on": "ソウ",
      "kun": "さわ.やか"
    },
    {
      "ID": 2290,
      "character": "綴",
      "keyWords": "STITCH TOGETHER ・ COMPOSE",
      "on": "テイ ・ テツ",
      "kun": "と.じる ・ つず.る"
    },
    {
      "ID": 2291,
      "character": "桑",
      "keyWords": "MULBERRY",
      "on": "ソウ",
      "kun": "くわ"
    },
    {
      "ID": 2292,
      "character": "蚕",
      "keyWords": "SILKWORM",
      "on": "サン",
      "kun": "かいこ"
    },
    {
      "ID": 2293,
      "character": "蛋",
      "keyWords": "EGG",
      "on": "タン",
      "kun": ""
    },
    {
      "ID": 2294,
      "character": "蟹",
      "keyWords": "CRAB",
      "on": "カイ",
      "kun": "かに"
    },
    {
      "ID": 2295,
      "character": "蚊",
      "keyWords": "MOSQUITO",
      "on": "",
      "kun": "か"
    },
    {
      "ID": 2296,
      "character": "巳",
      "keyWords": "THE SERPENT",
      "on": "シ",
      "kun": "み"
    },
    {
      "ID": 2297,
      "character": "蛇",
      "keyWords": "SNAKE",
      "on": "ジャ ・ ダ",
      "kun": "へび"
    },
    {
      "ID": 2298,
      "character": "繭",
      "keyWords": "COCOON",
      "on": "ケン",
      "kun": "まゆ"
    },
    {
      "ID": 2299,
      "character": "蝶",
      "keyWords": "BUTTERFLY",
      "on": "チョウ",
      "kun": ""
    },
    {
      "ID": 2300,
      "character": "虹",
      "keyWords": "RAINBOW",
      "on": "コウ*",
      "kun": "にじ"
    }
   ];

export {Kanji};