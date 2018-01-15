// タイムテーブルは以下のURLより
// https://www.ospn.jp/osc2018-hamanako/modules/eventrsv/?id=1&noform=1
exports.getTimetable = function(){
  return [
    { start_at: "10:00",
      end_at: "10:15", 
      title: "インターナショナル・オープンデータ・デイ2018 in KOSAIへのお誘い",
      group: "オープンデータ浜名湖 ",
      spealer: "浦田 芳孝",
      position: "メンバー"},
    { start_at: "10:15",
      end_at: "10:30",
      title: "オープンソースライセンス理解のための法務知財部門向けのIT用語解説ドキュメントについて",
      group: "一般社団法人オープンソースライセンス研究所 ",
      spealer: "杉本 等",
      position: "オープンソースライセンス研究所 所長"},
    { start_at: "10:30",
      end_at: "10:45",
      title: "みんなで作るオープン地図 OpenStreetMap の最新情報",
      group: "OpenStreetMap Japan ",
      spealer: "下り専門",
      position: ""},
    { start_at: "11:00",
      end_at: "11:15",
      title: "NetBSDのご紹介",
      group: "日本NetBSDユーザーグループ",
      spealer: "蛯原 純",
      position: "The NetBSD Project Developer"},
    { start_at: "11:15",
      end_at: "11:30",
      title: "LibreOffice6.0の新機能",
      group: "LibreOffice日本語チーム",
      spealer: "近藤 昌貴",
      position: ""},
    { start_at: "11:30",
      end_at: "11:45",
      title: "UNIXを開発したベル研究所▼電話会社が半導体素子やOSを開発した理由 日本の産業を支える品質管理手法もベル研究所由来 なぜコンピュータは正確か",
      group: "Netpbm",
      spealer: "漆畑 晶",
      position: ""},
    { start_at: "11:45",
      end_at: "12:00",
      title: "ディープラーニングを使ったキュウリ選別機の開発話",
      group: "workpiles",
      spealer: "小池 誠",
      position: ""},
    { start_at: "13:00",
      end_at: "13:15",
      title: "今さら聞けない人のためのDevOps超入門",
      group: "日本仮想化技術株式会社 ",
      spealer: "宮原 徹",
      position: "代表取締役社長兼CEO"},
    { start_at: "13:15",
      end_at: "13:30",
      title: "気軽にクイズでコミュニケーション　Netcommonsの使い方紹介",
      group: "Netcommons名古屋ユーザー会",
      spealer: "長澤 啓一",
      position: "代表"},
    { start_at: "13:30",
      end_at: "13:45",
      title: "余は如何にしてオープンソース信徒となりし乎",
      group: "特定非営利活動法人オープンソースソフトウェア協会 ",
      spealer: "湯澤 一比古",
      position: "理事"},
    { start_at: "14:00",
      end_at: "14:15",
      title: "簡単に構築！ IoTプラットフォームQIoT Suite Lite ～センシングデータの取得からダッシュボード表示まで～",
      group: "三栄ハイテックス株式会社 ",
      spealer: "清水 絢子",
      position: "三栄ハイテックス株式会社"},
    { start_at: "14:15",
      end_at: "14:30",
      title: "初めてのAndroid-x86 インストール方法",
      group: "Netwalker実験所 ",
      spealer: "Kapper",
      position: ""},
    { start_at: "14:30",
      end_at: "14:45",
      title: "openSUSE Leap 15の紹介(仮)",
      group: "日本openSUSEユーザ会 ",
      spealer: "川上けんと",
      position: ""},
    { start_at: "15:15",
      end_at: "15:30",
      title: "Yamahaで作る誤家庭ネットワーク #逸般の誤家庭",
      group: "ヤマハ株式会社 ",
      spealer: "深沢 豪",
      position: "ヤマハ株式会社 楽器・音響事業本部 音響開発統括部 SN開発部"},
    { start_at: "15:30",
      end_at: "15:45",
      title: "kintone使えば3分間で業務アプリがつくれるって本当？",
      group: "kintone Café 浜松 ",
      spealer: "吉田 和弘",
      position: "スタッフ"},
    { start_at: "15:45",
      end_at: "16:00",
      title: "島田商業高等学校での取り組み",
      group: "静岡県立島田商業高等学校",
      spealer: "豊島 宏",
      position: "静岡県立島田商業高等学校"},
    { start_at: "16:15",
      end_at: "16:30",
      title: "Ultibo(ベアメタルフレームワーク）のご紹介 -RaspberryPiにLinuxはいらない-",
      group: "ポリテクカレッジ浜松",
      spealer: "天城 康晴",
      position: ""},
    { start_at: "16:30",
      end_at: "16:45",
      title: "concrete5.8.3 最新版コンクリ5.8版の紹介。",
      group: "concrete5japan 浜松UG コン☆はま！",
      spealer: "榊 友哉",
      position: "concrete5japan エヴァンジェリスト"},
    { start_at: "16:45",
      end_at: "17:00",
      title: "ホットな日本語入力技術のお勉強。～OSC2018 Hamanako編～",
      group: "おーぷん万葉",
      spealer: "橋本 雅彦",
      position: ""},
    { start_at: "17:10",
      end_at: "18:00",
      title: "ライトニングトーク＆閉会式",
      group: "",
      spealer: "杉本 等",
      position: "OSC浜名湖実行委員長/オープンデータ浜名湖 代表"},
  ];
}

exports.getNextSession = function(now){
  var d = {};
  if (now < new Date("2018-02-11")){
    d = { title: "まだ開催されていません。" };
  }
  else if (now > new Date("2018-02-11 18:00")){
    d = { title: "終了しました"};
  }
  else {
    d = this.getTimetable().find(function(d){
      var date = "2018-02-11";
      var start_date = new Date(date + " " + d.start_at);
      var end_date = new Date(date + " " + d.end_at);
      if (start_date < now && now <= end_date){
        return true;
      }
    });
    
    if (d === undefined){
      d = { start_at: "", end_at: "", title: "今の時間は休憩中です"};
    }
  }

  return d;
}