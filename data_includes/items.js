var items = [
         ["sep", "SeparatorZ", { }],
         ["setcounter", "__SetCounter__", { }],
         ["intro", "Form", {
             html: { include: "intro.html" },
             validators: {
             age: function (s) { if (s.match(/^\d+$/)) return true; else return "Bad value for \u2018age\u2019"; }
             }
         } ],
         ["intro2", "Message", {
             html: { include: "intro2.html" },
         } ],
         ["intro3", "Message", {
             html: { include: "intro3.html" },
         } ],
         ["intro4", "Message", {
             html: { include: "intro4.html" },
         } ],

         //practice
         ["practicezero", "DashedSentenceNoSpace", {s: "この 文は 実験に 慣れて いただく ための 練習文 です。"}],
         ["practice", "DashedSentenceNoSpace", {s: "この文も 練習文で、 質問が あとに 続きます。"},
          "Question", {hasCorrect: 0,
               q: "今のところだいじょうぶですか？（Yキーを押してみてください）",}],
         ["practice", "DashedSentenceNoSpace", {s: "少年が 間違って カレーに 砂糖を 入れた。"},
          "Question", {hasCorrect: 0, q: "少年は砂糖を入れた",}],
         ["practice", "DashedSentenceNoSpace", {s: "柔道部員は 道場で 寝ていた 野良猫を 外に 出した。"},
          "Question", {hasCorrect: 1, q: "柔道部員は寝ていた",}],
         ["practice", "DashedSentenceNoSpace", {s: "若い インストラクターが 根気よく 指導した 女性は 実は 京都で 勤めている。"},
          "Question", {hasCorrect: 1, q: "インストラクターが指導したのは男性である ",}],
         ["practice", "DashedSentenceNoSpace", {s: "漫画家が 締め切りが 近いにも かかわらず ネットゲームに 熱中していたと 編集者は 愚痴を こぼした"},
          "Question", {hasCorrect: 0, q: "漫画家はネットゲームに熱中した",}],

         //after the practice, before the experimental materials
         ["postpractice", "Message", {
             html: { include: "postpractice.html" },
         }],

         //after the experiment
         ["code","Question",{q: ""+randomcode+"", timeout: 10}],

         // item number start with 176

[["exmb_a",21], "DashedSentenceNoSpace", {s: "子供が リュックを ガードレールに あてたので 金具が 少し 削れた。"}, "Question", {q: "リュックの金具が削れた", hasCorrect:0}],
[["exmb_a",22], "DashedSentenceNoSpace", {s: "子供が ガードレールを リュックに あてたので 金具が 少し 削れた。"}, "Question", {q: "リュックの金具が削れた", hasCorrect:0}],
[["exmb_a",23], "DashedSentenceNoSpace", {s: "子供が 雪玉を ガードレールに あてたと 体育委員が うれしそうに 自慢した。"}, "Question", {q: "体育委員がガードレールにあたった", hasCorrect:1}],
[["exmb_a",24], "DashedSentenceNoSpace", {s: "子供が ガードレールを 雪玉に あてたと 体育委員が うれしそうに 自慢した。"}, "Question", {q: "体育委員がガードレールにあたった", hasCorrect:1}],
[["exmb_a",25], "DashedSentenceNoSpace", {s: "小学生が ランドセルを ベンチに あてたので 革が はがれて 悲しんだ。"}, "Question", {q: "ランドセルの革がはがれた", hasCorrect:0}],
[["exmb_a",26], "DashedSentenceNoSpace", {s: "小学生が ベンチを ランドセルに あてたので 革が はがれて 悲しんだ。"}, "Question", {q: "ランドセルの革がはがれた", hasCorrect:0}],
[["exmb_a",27], "DashedSentenceNoSpace", {s: "小学生が ゲートボールを ベンチに あてたと 審判が 冷たく 言い放った。"}, "Question", {q: "ゲートボールが審判にあたった", hasCorrect:1}],
[["exmb_a",28], "DashedSentenceNoSpace", {s: "小学生が ベンチを ゲートボールに あてたと 審判が 冷たく 言い放った。"}, "Question", {q: "ゲートボールが審判にあたった", hasCorrect:1}],
[["exmb_b",29], "DashedSentenceNoSpace", {s: "弟が バンパーを 縁石に あてたので 修理が 大変だと 嘆いた。"}, "Question", {q: "バンパーの修理は大変だ", hasCorrect:0}],
[["exmb_b",30], "DashedSentenceNoSpace", {s: "弟が 縁石を バンパーに あてたので 修理が 大変だと 嘆いた。"}, "Question", {q: "バンパーの修理は大変だ", hasCorrect:0}],
[["exmb_b",31], "DashedSentenceNoSpace", {s: "弟が ドッジボールを 縁石に あてたと コーチが 生徒たちを 怒った。"}, "Question", {q: "ドッジボールはコーチにあたった", hasCorrect:1}],
[["exmb_b",32], "DashedSentenceNoSpace", {s: "弟が 縁石を ドッジボールに あてたと コーチが 生徒たちを 怒った。"}, "Question", {q: "ドッジボールはコーチにあたった", hasCorrect:1}],
[["exmb_b",33], "DashedSentenceNoSpace", {s: "観光客が 釣り竿を 岩に あてたので 大物を 取り逃がして 落胆した。"}, "Question", {q: "大物を取り逃がしてしまった", hasCorrect:0}],
[["exmb_b",34], "DashedSentenceNoSpace", {s: "観光客が 岩を 釣り竿に あてたので 大物を 取り逃がして 落胆した。"}, "Question", {q: "大物を取り逃がしてしまった", hasCorrect:0}],
[["exmb_b",35], "DashedSentenceNoSpace", {s: "観光客が 水風船を 岩に あてたと 釣り人が 迷惑そうに 訴えた。"}, "Question", {q: "水風船は釣り人にあたった", hasCorrect:1}],
[["exmb_b",36], "DashedSentenceNoSpace", {s: "観光客が 岩を 水風船に あてたと 釣り人が 迷惑そうに 訴えた。"}, "Question", {q: "水風船は釣り人にあたった", hasCorrect:1}],
[["exim_a",21], "DashedSentenceNoSpace", {s: "少年が 車輪を フェンスに あてたので 荷台の ダンボール箱が 崩れた。"}, "Question", {q: "車輪はフェンスにあたった", hasCorrect:0}],
[["exim_a",22], "DashedSentenceNoSpace", {s: "少年が フェンスを 車輪に あてたので 荷台の ダンボール箱が 崩れた。"}, "Question", {q: "車輪はフェンスにあたった", hasCorrect:0}],
[["exim_a",23], "DashedSentenceNoSpace", {s: "少年が フリスビーを フェンスに あてたと 隣人に こっぴどく 怒られた。"}, "Question", {q: "フリスビーは隣人にあたった", hasCorrect:1}],
[["exim_a",24], "DashedSentenceNoSpace", {s: "少年が フェンスを フリスビーに あてたと 隣人に こっぴどく 怒られた。"}, "Question", {q: "フリスビーは隣人にあたった", hasCorrect:1}],
[["exim_a",25], "DashedSentenceNoSpace", {s: "酔っ払いが 帽子を 交通標識に あてたので 帽子が 道路に 落ちた。"}, "Question", {q: "帽子は交通標識にあたった", hasCorrect:0}],
[["exim_a",26], "DashedSentenceNoSpace", {s: "酔っ払いが 交通標識を 帽子に あてたので 帽子が 道路に 落ちた。"}, "Question", {q: "帽子は交通標識にあたった", hasCorrect:0}],
[["exim_a",27], "DashedSentenceNoSpace", {s: "酔っ払いが 石つぶてを 交通標識に あてたと 警官から 厳しく 注意された。"}, "Question", {q: "石つぶては警官にあたった", hasCorrect:1}],
[["exim_a",28], "DashedSentenceNoSpace", {s: "酔っ払いが 交通標識を 石つぶてに あてたと 警官から 厳しく 注意された。"}, "Question", {q: "石つぶては警官にあたった", hasCorrect:1}],
[["exim_b",29], "DashedSentenceNoSpace", {s: "後輩が ラケットを 壁に あてたので 壁が へこんで 焦った。"}, "Question", {q: "ラケットは壁にあたった", hasCorrect:0}],
[["exim_b",30], "DashedSentenceNoSpace", {s: "後輩が 壁を ラケットに あてたので 壁が へこんで 焦った。"}, "Question", {q: "ラケットは壁にあたった", hasCorrect:0}],
[["exim_b",31], "DashedSentenceNoSpace", {s: "後輩が テニスボールを 壁に あてたと バスケ部員は 難癖を つけた。"}, "Question", {q: "テニスボールがバスケ部員にあたった", hasCorrect:1}],
[["exim_b",32], "DashedSentenceNoSpace", {s: "後輩が 壁を テニスボールに あてたと バスケ部員は 難癖を つけた。"}, "Question", {q: "テニスボールがバスケ部員にあたった", hasCorrect:1}],
[["exim_b",33], "DashedSentenceNoSpace", {s: "家政婦が はたきを 骨董品に あてたので 祖父から 大目玉を くらった。"}, "Question", {q: "はたきは骨董品にあたった", hasCorrect:0}],
[["exim_b",34], "DashedSentenceNoSpace", {s: "家政婦が 骨董品を はたきに あてたので 祖父から 大目玉を くらった。"}, "Question", {q: "はたきは骨董品にあたった", hasCorrect:0}],
[["exim_b",35], "DashedSentenceNoSpace", {s: "家政婦が 球を 骨董品に あてたので 鑑定士は 肝を 冷やした。"}, "Question", {q: "球は鑑定士にあたった", hasCorrect:1}],
[["exim_b",36], "DashedSentenceNoSpace", {s: "家政婦が 骨董品を 球に あてたので 鑑定士は 肝を 冷やした。"}, "Question", {q: "球は鑑定士にあたった", hasCorrect:1}],
[["onmb_a",21],"DashedSentenceNoSpace", {s: "新入社員が サイドミラーを 電柱に ぶつけたので ドライバーは 冷や汗を かいた。"}, "Question", {q: "サイドミラーは電柱にぶつかった", hasCorrect:0}],
[["onmb_a",22],"DashedSentenceNoSpace", {s: "新入社員が 電柱を サイドミラーに ぶつけたので ドライバーは 冷や汗を かいた。"}, "Question", {q: "サイドミラーは電柱にぶつかった", hasCorrect:0}],
[["onmb_a",23],"DashedSentenceNoSpace", {s: "新入社員が 空き缶を 電柱に ぶつけたので 清掃員は 若者を にらんだ。"}, "Question", {q: "空き缶は清掃員にぶつかった", hasCorrect:1}],
[["onmb_a",24],"DashedSentenceNoSpace", {s: "新入社員が 電柱を 空き缶に ぶつけたので 清掃員は 若者を にらんだ。"}, "Question", {q: "空き缶は清掃員にぶつかった", hasCorrect:1}],
[["onmb_a",25],"DashedSentenceNoSpace", {s: "友達が 荷物を 柱に ぶつけたので 箱から 商品が 飛び出た。"}, "Question", {q: "荷物は柱にぶつかった", hasCorrect:0}],
[["onmb_a",26],"DashedSentenceNoSpace", {s: "友達が 柱を 荷物に ぶつけたので 箱から 商品が 飛び出た。"}, "Question", {q: "荷物は柱にぶつかった", hasCorrect:0}],
[["onmb_a",27],"DashedSentenceNoSpace", {s: "友達が ビー玉を 柱に ぶつけたので 甥っ子は 楽しそうに 笑った。"}, "Question", {q: "ビー玉は甥っ子にぶつかった", hasCorrect:1}],
[["onmb_a",28],"DashedSentenceNoSpace", {s: "友達が 柱を ビー玉に ぶつけたので 甥っ子は 楽しそうに 笑った。"}, "Question", {q: "ビー玉は甥っ子にぶつかった", hasCorrect:1}],
[["onmb_b",29],"DashedSentenceNoSpace", {s: "掃除当番が ほうきを 窓ガラスに ぶつけたので 窓が 粉々に 割れた。"}, "Question", {q: "ほうきは窓ガラスにぶつかった", hasCorrect:0}],
[["onmb_b",30],"DashedSentenceNoSpace", {s: "掃除当番が 窓ガラスを ほうきに ぶつけたので 窓が 粉々に 割れた。"}, "Question", {q: "ほうきは窓ガラスにぶつかった", hasCorrect:0}],
[["onmb_b",31],"DashedSentenceNoSpace", {s: "掃除当番が ボールを 窓ガラスに ぶつけたので 野球少年は すぐさま 逃げ出した。"}, "Question", {q: "ボールは野球少年にぶつかった", hasCorrect:1}],
[["onmb_b",32],"DashedSentenceNoSpace", {s: "掃除当番が 窓ガラスを ボールに ぶつけたので 野球少年は すぐさま 逃げ出した。"}, "Question", {q: "ボールは野球少年にぶつかった", hasCorrect:1}],
[["onmb_b",33],"DashedSentenceNoSpace", {s: "息子が はしごを 外壁に ぶつけたと 業者は 素直に 白状した。"}, "Question", {q: "はしごは外壁にぶつかった", hasCorrect:0}],
[["onmb_b",34],"DashedSentenceNoSpace", {s: "息子が 外壁を はしごに ぶつけたと 業者は 素直に 白状した。"}, "Question", {q: "はしごは外壁にぶつかった", hasCorrect:0}],
[["onmb_b",35],"DashedSentenceNoSpace", {s: "息子が ラジコン飛行機を 外壁に ぶつけたと 中学生は 故障を 疑った。"}, "Question", {q: "ラジコン飛行機は中学生にぶつかった", hasCorrect:1}],
[["onmb_b",36],"DashedSentenceNoSpace", {s: "息子が 外壁を ラジコン飛行機に ぶつけたと 中学生は 故障を 疑った。"}, "Question", {q: "ラジコン飛行機は中学生にぶつかった", hasCorrect:1}],
[["onim_a",21],"DashedSentenceNoSpace", {s: "サッカー部員が くつを ゴールポストに ぶつけたと 用務員は 部員を 叱った。"}, "Question", {q: "くつはゴールポストにぶつかった", hasCorrect:0}],
[["onim_a",22],"DashedSentenceNoSpace", {s: "サッカー部員が ゴールポストを くつに ぶつけたと 用務員は 部員を 叱った。"}, "Question", {q: "くつはゴールポストにぶつかった", hasCorrect:0}],
[["onim_a",23],"DashedSentenceNoSpace", {s: "サッカー部員が サッカーボールを ゴールポストに ぶつけたと 監督は 部員を なじった。"}, "Question", {q: "サッカーボールは監督にぶつかった", hasCorrect:1}],
[["onim_a",24],"DashedSentenceNoSpace", {s: "サッカー部員が ゴールポストを サッカーボールに ぶつけたと 監督は 部員を なじった。"}, "Question", {q: "サッカーボールは監督にぶつかった", hasCorrect:1}],
[["onim_a",25],"DashedSentenceNoSpace", {s: "部長が キャリーバッグを 塀に ぶつけたので 車輪が 完全に 壊れた。"}, "Question", {q: "キャリーバッグは塀にぶつかった", hasCorrect:0}],
[["onim_a",26],"DashedSentenceNoSpace", {s: "部長が 塀を キャリーバッグに ぶつけたので 車輪が 完全に 壊れた。"}, "Question", {q: "キャリーバッグは塀にぶつかった", hasCorrect:0}],
[["onim_a",27],"DashedSentenceNoSpace", {s: "部長が 砲丸を 塀に ぶつけたと 部員は 慌てて 報告した。"}, "Question", {q: "砲丸は部員にぶつかった", hasCorrect:1}],
[["onim_a",28],"DashedSentenceNoSpace", {s: "部長が 塀を 砲丸に ぶつけたと 部員は 慌てて 報告した。"}, "Question", {q: "砲丸は部員にぶつかった", hasCorrect:1}],
[["onim_b",29],"DashedSentenceNoSpace", {s: "いとこが 腕時計を テーブルに ぶつけたので 文字盤に ヒビが 入った。"}, "Question", {q: "腕時計はテーブルにぶつかった", hasCorrect:0}],
[["onim_b",30],"DashedSentenceNoSpace", {s: "いとこが テーブルを 腕時計に ぶつけたので 文字盤に ヒビが 入った。"}, "Question", {q: "腕時計はテーブルにぶつかった", hasCorrect:0}],
[["onim_b",31],"DashedSentenceNoSpace", {s: "いとこが 投げ輪を テーブルに ぶつけたと 祭り客は 文句を 言った。"}, "Question", {q: "投げ輪は祭り客にぶつかった", hasCorrect:1}],
[["onim_b",32],"DashedSentenceNoSpace", {s: "いとこが テーブルを 投げ輪に ぶつけたと 祭り客は 文句を 言った。"}, "Question", {q: "投げ輪は祭り客にぶつかった", hasCorrect:1}],
[["onim_b",33],"DashedSentenceNoSpace", {s: "部員が 傘を 門に ぶつけたので 風紀委員が くすくす 笑った。"}, "Question", {q: "傘は門にぶつかった", hasCorrect:0}],
[["onim_b",34],"DashedSentenceNoSpace", {s: "部員が 門を 傘に ぶつけたので 風紀委員が くすくす 笑った。"}, "Question", {q: "傘は門にぶつかった", hasCorrect:0}],
[["onim_b",35],"DashedSentenceNoSpace", {s: "部員が ラグビーボールを 門に ぶつけたと コーチは 警備員に ぼやいた。"}, "Question", {q: "ラグビーボールはコーチにぶつかった", hasCorrect:1}],
[["onim_b",36],"DashedSentenceNoSpace", {s: "部員が 門を ラグビーボールに ぶつけたと コーチは 警備員に ぼやいた。"}, "Question", {q: "ラグビーボールはコーチにぶつかった", hasCorrect:1}],
["goodfiller","DashedSentenceNoSpace",{s: "お母さんが ベビーカーを 公園まで 押したらしいと 近所の人が ひそひそ 噂した。"}, "Question", {q: "お母さんはベビーカーを押した", hasCorrect:0}],
["goodfiller","DashedSentenceNoSpace",{s: "お客さんが DVDを 棚へ 戻したのを 店員は 不審だと 思った。"}, "Question", {q: "店員はDVDを戻した", hasCorrect:1}],
["goodfiller","DashedSentenceNoSpace",{s: "女性が 結婚を 春まで 延期したことを 同期たちは まったく 知らなかった。"}, "Question", {q: "女性は結婚を延期した", hasCorrect:0}],
["goodfiller","DashedSentenceNoSpace",{s: "コックが 新メニューを 弟子と 考案したことを チーフは ひそかに 妬んだ。"}, "Question", {q: "チーフは新メニューを考案した", hasCorrect:1}],
["goodfiller","DashedSentenceNoSpace",{s: "学生が 勉強会を 友達と ひらいたので テストは 前回よりも うまくいった。"}, "Question", {q: "学生は勉強会をひらいた", hasCorrect:0}],
["goodfiller","DashedSentenceNoSpace",{s: "警察が 男性を 不審者と みなしたので 男性は 必死に 弁明した。"}, "Question", {q: "警察は必死に弁明した", hasCorrect:1}],
["goodfiller","DashedSentenceNoSpace",{s: "店主が アラビア産の豆を ケニア産の豆と ブレンドしたのは 常連客には 評判が よかった。"}, "Question", {q: "店主は豆をブレンドした", hasCorrect:0}],
["goodfiller","DashedSentenceNoSpace",{s: "先生が 資料を コンビニで コピーしたらしいと 保護者が ママ友に 話した。"}, "Question", {q: "保護者が資料をコピーした", hasCorrect:1}],
["goodfiller","DashedSentenceNoSpace",{s: "女性が 友達を 5時まで 待ったらしいと SNSに つらつらと 書いた。"}, "Question", {q: "女性は友達を待った", hasCorrect:0}],
["goodfiller","DashedSentenceNoSpace",{s: "奥さんが 利用料金を カードで 払ったので 夫は ぐちぐち 責めた。"}, "Question", {q: "夫は利用料金をカード払いした", hasCorrect:1}],
["goodfiller","DashedSentenceNoSpace",{s: "サラリーマンが 辞職を 妻へ 打ち明けたので 空気が どんより 重かった。"}, "Question", {q: "サラリーマンは辞職を打ち明けた", hasCorrect:0}],
["goodfiller","DashedSentenceNoSpace",{s: "シェフが 鍋を 強火で 煮たことを ソムリエは おかしいと 感じた。"}, "Question", {q: "ソムリエは鍋を煮た", hasCorrect:1}],
["goodfiller","DashedSentenceNoSpace",{s: "入試担当者によると 英語教師が 入試問題を 1週間で 作成すると 教頭に  誓ったらしい。"}, "Question", {q: "英語教師は教頭に誓った", hasCorrect:0}],
["goodfiller","DashedSentenceNoSpace",{s: "担当医によると 患者が 病室で タバコを 吸ったのを 見つけて  叱ったらしい。"}, "Question", {q: "患者は待合室でタバコを吸った", hasCorrect:1}],
["goodfiller","DashedSentenceNoSpace",{s: "撮影現場では 人気俳優の 熱狂的な ファンたちを 遠ざけるよう 映画監督が  指示したらしい。"}, "Question", {q: "指示したのは映画監督だ", hasCorrect:0}],
["goodfiller","DashedSentenceNoSpace",{s: "マネージャーによると 有名子役の 身長が 伸びたため 衣装を 作り直すよう  言われたらしい。"}, "Question", {q: "マネージャーの身長が伸びた", hasCorrect:1}],
["goodfiller","DashedSentenceNoSpace",{s: "高校生が 紙飛行機を 向こう岸へ 飛ばしたので 先輩も 真似して 飛ばした。"}, "Question", {q: "真似したのは先輩だ", hasCorrect:0}],
["goodfiller","DashedSentenceNoSpace",{s: "タクシー運転手が お客さんを 駅前まで 乗せたところを 通行人が はっきりと 目撃した。"}, "Question", {q: "タクシー運転手が目撃した", hasCorrect:1}],
["goodfiller","DashedSentenceNoSpace",{s: "職人が 時計を ハンマーで 壊したことを マスコミは 目玉記事に 取り上げた。"}, "Question", {q: "目玉記事に取り上げたのはマスコミだ", hasCorrect:0}],
["goodfiller","DashedSentenceNoSpace",{s: "添乗員が 集合場所を 地図で 調べたので ツアー客は 頼りないと 感じた。"}, "Question", {q: "調べたのはツアー客だ", hasCorrect:1}],
["goodfiller","DashedSentenceNoSpace",{s: "有名俳優が 夏休みを ハワイで 満喫したらしいと マネージャーは 嘘を ついた。"}, "Question", {q: "嘘をついたのはマネージャーだ", hasCorrect:0}],
["goodfiller","DashedSentenceNoSpace",{s: "秘書が 会合場所を メールで 連絡したので 政治家は 賄賂を 用意した。"}, "Question", {q: "連絡したのは政治家だ", hasCorrect:1}],
["goodfiller","DashedSentenceNoSpace",{s: "画家が 田園風景を 鉛筆で スケッチしたので 依頼主は 期待を ふくらませた。"}, "Question", {q: "期待をふくらませたのは依頼主だ", hasCorrect:0}],
["goodfiller","DashedSentenceNoSpace",{s: "マスターが 牛乳を 電子レンジで あたためたので 学生は ココアを 準備した。"}, "Question", {q: "ココアを準備したのはマスターだ", hasCorrect:1}],
[["T",1], "DashedSentenceNoSpace", {s: "職人が ペンキを 壁に 塗ったので 汚れは 少し 薄くなった。"}, "Question", {q: "ペンキが壁に塗られた", hasCorrect:0}],
[["T",2], "DashedSentenceNoSpace", {s: "パン屋が バターを パンに 塗ったので サンドイッチは おいしく 仕上がった。"}, "Question", {q: "パンがおいしく焼けた", hasCorrect:1}],
[["T",3], "DashedSentenceNoSpace", {s: "ネイリストが マニキュアを 爪に 塗ったので 女性客は 上機嫌で 帰った。"}, "Question", {q: "マニキュアが爪に塗られた", hasCorrect:0}],
[["T",4], "DashedSentenceNoSpace", {s: "メイク係が ルージュを 唇に 塗ったので アイドルは 気分が 高揚した。"}, "Question", {q: "メイク係の気分が高揚した", hasCorrect:1}],
[["T",5], "DashedSentenceNoSpace", {s: "アルバイトが 針を 手に 刺したので 上司は 救急箱を 探した。"}, "Question", {q: "針が手に刺さった", hasCorrect:0}],
[["T",6], "DashedSentenceNoSpace", {s: "店主が 串を 鶏肉に 刺したので 新人は 手さばきに 感動した。"}, "Question", {q: "店主が感動した", hasCorrect:1}],
[["T",7], "DashedSentenceNoSpace", {s: "シェフが 包丁を ブロック肉に 刺したので 見習いは オーブンを あたためた。"}, "Question", {q: "包丁がブロック肉に刺さった", hasCorrect:0}],
[["T",8], "DashedSentenceNoSpace", {s: "写真屋が 押しピンを 掲示板に 刺したので カレンダーは きちんと 固定された。"}, "Question", {q: "押しピンはうまく刺さらなかった", hasCorrect:1}],
[["T",9], "DashedSentenceNoSpace", {s: "小学生が お菓子を 部屋に ちらかしたので 母親は 仕方なく 掃除した。"}, "Question", {q: "部屋にはお菓子があった", hasCorrect:0}],
[["T",10], "DashedSentenceNoSpace", {s: "男子生徒が 消しかすを 机に ちらかしたので 女子生徒は 座るのを 嫌がった。"}, "Question", {q: "女子生徒が消しかすをちらかした", hasCorrect:1}],
[["T",11], "DashedSentenceNoSpace", {s: "課長が 靴下を リビングに ちらかしたので 義母は 嫌そうに 拾った。"}, "Question", {q: "議長が靴下をちらかした", hasCorrect:0}],
[["T",12], "DashedSentenceNoSpace", {s: "園児が おもちゃを 砂場に ちらかしたので PTA役員は 陰で 噂した。"}, "Question", {q: "PTA役員が砂場をちらかした", hasCorrect:1}],
[["T",13], "DashedSentenceNoSpace", {s: "遭難者が 縄を 木に くくったので 捜索隊に すぐに 発見された。"}, "Question", {q: "縄が木にくくられた", hasCorrect:0}],
[["T",14], "DashedSentenceNoSpace", {s: "隣人が ひもを 古新聞に くくったので 大家さんは ルール違反を 告げ口した。"}, "Question", {q: "大家さんがルール違反した", hasCorrect:1}],
[["T",15], "DashedSentenceNoSpace", {s: "女医が ヘアゴムを 髪に くくったので 点滴の 用意が 始まった。"}, "Question", {q: "女医は髪をくくった", hasCorrect:0}],
[["T",16], "DashedSentenceNoSpace", {s: "配送業者が ビニールひもを 荷台に くくったので カバーを ゆっくり おろした。"}, "Question", {q: "ビニールひもがカバーにくくられた", hasCorrect:1}],
[["T",17], "DashedSentenceNoSpace", {s: "料理研究家が バターを パスタに からめたので 香りは スタジオ内に 充満した。"}, "Question", {q: "料理研究家はバターをパスタとからめた", hasCorrect:0}],
[["T",18], "DashedSentenceNoSpace", {s: "和菓子屋が 黒蜜を アイスに からめたので 常連客は 新メニューを 期待した。"}, "Question", {q: "黒蜜はわらび餅にかけられた", hasCorrect:1}],
[["T",19], "DashedSentenceNoSpace", {s: "主婦が ソースを 肉団子に からめたので 娘は 待ちきれず つまみ食いした。"}, "Question", {q: "ソースは肉団子とからまった", hasCorrect:0}],
[["T",20], "DashedSentenceNoSpace", {s: "オーナーが シロップを ワッフルに からめたので 取材班は カメラを まわした。"}, "Question", {q: "シロップはかき氷にかけられた", hasCorrect:1}],
[["T",21], "DashedSentenceNoSpace", {s: "ホールスタッフが ビールを グラスに いっぱいにしたので 客は 喜んで 飲み干した。"}, "Question", {q: "客はビールを飲み干した", hasCorrect:0}],
[["T",22], "DashedSentenceNoSpace", {s: "看板娘がが バスケットを キャンディに いっぱいにしたので 子供たちは わらわらと 集まった。"}, "Question", {q: "バスケットはクッキーでいっぱいだった", hasCorrect:1}],
[["T",23], "DashedSentenceNoSpace", {s: "家政婦が お湯を 浴槽に いっぱいにしたので 執事は 遠慮がちに たしなめた。"}, "Question", {q: "浴槽はお湯でいっぱいだった", hasCorrect:0}],
[["T",24], "DashedSentenceNoSpace", {s: "トップモデルが 洋服を クローゼットに いっぱいにしたので 弟は 浪費癖に うんざりした。"}, "Question", {q: "クローゼットは段ボールでいっぱいだった", hasCorrect:1}],
[["L",1], "DashedSentenceNoSpace", {s: "職人が 壁を ペンキで 塗ったので 汚れは 少し 薄くなった。"}, "Question", {q: "ペンキが薄くなった", hasCorrect:1}],
[["L",2], "DashedSentenceNoSpace", {s: "パン屋が パンを バターで 塗ったので サンドイッチは おいしく 仕上がった。"}, "Question", {q: "バターがパンに塗られた", hasCorrect:0}],
[["L",3], "DashedSentenceNoSpace", {s: "ネイリストが 爪を マニキュアで 塗ったので 女性客は 上機嫌で 帰った。"}, "Question", {q: "ネイリストは上機嫌だった", hasCorrect:1}],
[["L",4], "DashedSentenceNoSpace", {s: "メイク係が 唇を ルージュで 塗ったので アイドルは 気分が 高揚した。"}, "Question", {q: "ルージュが唇に塗られた", hasCorrect:0}],
[["L",5], "DashedSentenceNoSpace", {s: "アルバイトが 手を 針で 刺したので 上司は 救急箱を 探した。"}, "Question", {q: "アルバイトが救急箱を探した", hasCorrect:1}],
[["L",6], "DashedSentenceNoSpace", {s: "店主が 鶏肉を 串で 刺したので 新人は 手さばきに 感動した。"}, "Question", {q: "串が鶏肉に刺さった", hasCorrect:0}],
[["L",7], "DashedSentenceNoSpace", {s: "シェフが ブロック肉を 包丁で 刺したので 見習いは オーブンを あたためた。"}, "Question", {q: "シェフがオーブンをあたためた", hasCorrect:1}],
[["L",8], "DashedSentenceNoSpace", {s: "写真屋が 掲示板を 押しピンで 刺したので カレンダーは きちんと 固定された。"}, "Question", {q: "押しピンが掲示板に刺さった", hasCorrect:0}],
[["L",9], "DashedSentenceNoSpace", {s: "小学生が 部屋を お菓子で ちらかしたので 母親は 仕方なく 掃除した。"}, "Question", {q: "小学生が部屋を掃除した", hasCorrect:1}],
[["L",10], "DashedSentenceNoSpace", {s: "男子生徒が 机を 消しかすで ちらかしたので 女子生徒は 座るのを 嫌がった。"}, "Question", {q: "男子生徒が消しかすをちらかした", hasCorrect:0}],
[["L",11], "DashedSentenceNoSpace", {s: "課長が リビングを 靴下で ちらかしたので 義母は 嫌そうに 拾った。"}, "Question", {q: "義母が靴下をちらかした", hasCorrect:1}],
[["L",12], "DashedSentenceNoSpace", {s: "園児が 砂場を おもちゃで ちらかしたので PTA役員は 陰で 噂した。"}, "Question", {q: "園児が砂場をちらかした", hasCorrect:0}],
[["L",13], "DashedSentenceNoSpace", {s: "遭難者が 木を 縄で くくったので 捜索隊に すぐに 発見された。"}, "Question", {q: "リボンが木にくくられた", hasCorrect:1}],
[["L",14], "DashedSentenceNoSpace", {s: "隣人が 古新聞を ひもで くくったので 大家さんは ルール違反を 告げ口した。"}, "Question", {q: "隣人がルール違反した", hasCorrect:0}],
[["L",15], "DashedSentenceNoSpace", {s: "女医が 髪を ヘアゴムで くくったので 点滴の 用意が 始まった。"}, "Question", {q: "看護師は髪をくくった", hasCorrect:1}],
[["L",16], "DashedSentenceNoSpace", {s: "配送業者が 荷台を ビニールひもで くくったので カバーを ゆっくり おろした。"}, "Question", {q: "ビニールひもが荷台にくくられた", hasCorrect:0}],
[["L",17], "DashedSentenceNoSpace", {s: "料理研究家が パスタを バターで からめたので 香りは スタジオ内に 充満した。"}, "Question", {q: "料理研究家はバターをトーストに塗った", hasCorrect:1}],
[["L",18], "DashedSentenceNoSpace", {s: "和菓子屋が アイスを 黒蜜で からめたので 常連客は 新メニューを 期待した。"}, "Question", {q: "黒蜜はアイスにからまった", hasCorrect:0}],
[["L",19], "DashedSentenceNoSpace", {s: "主婦が 肉団子を ソースで からめたので 娘は 待ちきれず つまみ食いした。"}, "Question", {q: "ソースは焼きそばにかけられた", hasCorrect:1}],
[["L",20], "DashedSentenceNoSpace", {s: "オーナーが ワッフルを シロップで からめたので 取材班は カメラを まわした。"}, "Question", {q: "シロップはワッフルにからまった", hasCorrect:0}],
[["L",21], "DashedSentenceNoSpace", {s: "ホールスタッフが グラスを ビールで いっぱいにしたので 客は 喜んで 飲み干した。"}, "Question", {q: "客はジュースを飲み干した", hasCorrect:1}],
[["L",22], "DashedSentenceNoSpace", {s: "看板娘がが キャンディを バスケットで いっぱいにしたので 子供たちは わらわらと 集まった。"}, "Question", {q: "バスケットはキャンディでいっぱいだった", hasCorrect:0}],
[["L",23], "DashedSentenceNoSpace", {s: "家政婦が 浴槽を お湯で いっぱいにしたので 執事は 遠慮がちに たしなめた。"}, "Question", {q: "浴槽は水でいっぱいだった", hasCorrect:1}],
[["L",24], "DashedSentenceNoSpace", {s: "トップモデルが クローゼットを 洋服で いっぱいにしたので 弟は 浪費癖に うんざりした。"}, "Question", {q: "クローゼットは洋服でいっぱいだった", hasCorrect:0}],
[["Ts",1], "DashedSentenceNoSpace", {s: "職人が 壁に ペンキを 塗ったので 汚れは 少し 薄くなった。"}, "Question", {q: "ペンキが壁に塗られた", hasCorrect:0}],
[["Ts",2], "DashedSentenceNoSpace", {s: "パン屋が パンに バターを 塗ったので サンドイッチは おいしく 仕上がった。"}, "Question", {q: "パンがおいしく焼けた", hasCorrect:1}],
[["Ts",3], "DashedSentenceNoSpace", {s: "ネイリストが 爪に マニキュアを 塗ったので 女性客は 上機嫌で 帰った。"}, "Question", {q: "マニキュアが爪に塗られた", hasCorrect:0}],
[["Ts",4], "DashedSentenceNoSpace", {s: "メイク係が 唇に ルージュを 塗ったので アイドルは 気分が 高揚した。"}, "Question", {q: "メイク係の気分が高揚した", hasCorrect:1}],
[["Ts",5], "DashedSentenceNoSpace", {s: "アルバイトが 手に 針を 刺したので 上司は 救急箱を 探した。"}, "Question", {q: "針が手に刺さった", hasCorrect:0}],
[["Ts",6], "DashedSentenceNoSpace", {s: "店主が 鶏肉に 串を 刺したので 新人は 手さばきに 感動した。"}, "Question", {q: "店主が感動した", hasCorrect:1}],
[["Ts",7], "DashedSentenceNoSpace", {s: "シェフが ブロック肉に 包丁を 刺したので 見習いは オーブンを あたためた。"}, "Question", {q: "包丁がブロック肉に刺さった", hasCorrect:0}],
[["Ts",8], "DashedSentenceNoSpace", {s: "写真屋が 掲示板に 押しピンを 刺したので カレンダーは きちんと 固定された。"}, "Question", {q: "押しピンはうまく刺さらなかった", hasCorrect:1}],
[["Ts",9], "DashedSentenceNoSpace", {s: "小学生が 部屋に お菓子を ちらかしたので 母親は 仕方なく 掃除した。"}, "Question", {q: "部屋にはお菓子があった", hasCorrect:0}],
[["Ts",10], "DashedSentenceNoSpace", {s: "男子生徒が 机に 消しかすを ちらかしたので 女子生徒は 座るのを 嫌がった。"}, "Question", {q: "女子生徒が消しかすをちらかした", hasCorrect:1}],
[["Ts",11], "DashedSentenceNoSpace", {s: "課長が リビングに 靴下を ちらかしたので 義母は 嫌そうに 拾った。"}, "Question", {q: "議長が靴下をちらかした", hasCorrect:0}],
[["Ts",12], "DashedSentenceNoSpace", {s: "園児が 砂場に おもちゃを ちらかしたので PTA役員は 陰で 噂した。"}, "Question", {q: "PTA役員が砂場をちらかした", hasCorrect:1}],
[["Ts",13], "DashedSentenceNoSpace", {s: "遭難者が 木に 縄を くくったので 捜索隊に すぐに 発見された。"}, "Question", {q: "縄が木にくくられた", hasCorrect:0}],
[["Ts",14], "DashedSentenceNoSpace", {s: "隣人が 古新聞に ひもを くくったので 大家さんは ルール違反を 告げ口した。"}, "Question", {q: "大家さんがルール違反した", hasCorrect:1}],
[["Ts",15], "DashedSentenceNoSpace", {s: "女医が 髪に ヘアゴムを くくったので 点滴の 用意が 始まった。"}, "Question", {q: "女医は髪をくくった", hasCorrect:0}],
[["Ts",16], "DashedSentenceNoSpace", {s: "配送業者が 荷台に ビニールひもを くくったので カバーを ゆっくり おろした。"}, "Question", {q: "ビニールひもがカバーにくくられた", hasCorrect:1}],
[["Ts",17], "DashedSentenceNoSpace", {s: "料理研究家が パスタに バターを からめたので 香りは スタジオ内に 充満した。"}, "Question", {q: "料理研究家はバターをパスタとからめた", hasCorrect:0}],
[["Ts",18], "DashedSentenceNoSpace", {s: "和菓子屋が アイスに 黒蜜を からめたので 常連客は 新メニューを 期待した。"}, "Question", {q: "黒蜜はわらび餅にかけられた", hasCorrect:1}],
[["Ts",19], "DashedSentenceNoSpace", {s: "主婦が 肉団子に ソースを からめたので 娘は 待ちきれず つまみ食いした。"}, "Question", {q: "ソースは肉団子とからまった", hasCorrect:0}],
[["Ts",20], "DashedSentenceNoSpace", {s: "オーナーが ワッフルに シロップを からめたので 取材班は カメラを まわした。"}, "Question", {q: "シロップはかき氷にかけられた", hasCorrect:1}],
[["Ts",21], "DashedSentenceNoSpace", {s: "ホールスタッフが グラスに ビールを いっぱいにしたので 客は 喜んで 飲み干した。"}, "Question", {q: "客はビールを飲み干した", hasCorrect:0}],
[["Ts",22], "DashedSentenceNoSpace", {s: "看板娘がが キャンディに バスケットを いっぱいにしたので 子供たちは わらわらと 集まった。"}, "Question", {q: "バスケットはクッキーでいっぱいだった", hasCorrect:1}],
[["Ts",23], "DashedSentenceNoSpace", {s: "家政婦が 浴槽に お湯を いっぱいにしたので 執事は 遠慮がちに たしなめた。"}, "Question", {q: "浴槽はお湯でいっぱいだった", hasCorrect:0}],
[["Ts",24], "DashedSentenceNoSpace", {s: "トップモデルが クローゼットに 洋服を いっぱいにしたので 弟は 浪費癖に うんざりした。"}, "Question", {q: "クローゼットは段ボールでいっぱいだった", hasCorrect:1}],
[["Ls",1], "DashedSentenceNoSpace", {s: "職人が ペンキで 壁を 塗ったので 汚れは 少し 薄くなった。"}, "Question", {q: "ペンキが薄くなった", hasCorrect:1}],
[["Ls",2], "DashedSentenceNoSpace", {s: "パン屋が バターで パンを 塗ったので サンドイッチは おいしく 仕上がった。"}, "Question", {q: "バターがパンに塗られた", hasCorrect:0}],
[["Ls",3], "DashedSentenceNoSpace", {s: "ネイリストが マニキュアで 爪を 塗ったので 女性客は 上機嫌で 帰った。"}, "Question", {q: "ネイリストは上機嫌だった", hasCorrect:1}],
[["Ls",4], "DashedSentenceNoSpace", {s: "メイク係が ルージュで 唇を 塗ったので アイドルは 気分が 高揚した。"}, "Question", {q: "ルージュが唇に塗られた", hasCorrect:0}],
[["Ls",5], "DashedSentenceNoSpace", {s: "アルバイトが 針で 手を 刺したので 上司は 救急箱を 探した。"}, "Question", {q: "アルバイトが救急箱を探した", hasCorrect:1}],
[["Ls",6], "DashedSentenceNoSpace", {s: "店主が 串で 鶏肉を 刺したので 新人は 手さばきに 感動した。"}, "Question", {q: "串が鶏肉に刺さった", hasCorrect:0}],
[["Ls",7], "DashedSentenceNoSpace", {s: "シェフが 包丁で ブロック肉を 刺したので 見習いは オーブンを あたためた。"}, "Question", {q: "シェフがオーブンをあたためた", hasCorrect:1}],
[["Ls",8], "DashedSentenceNoSpace", {s: "写真屋が 押しピンで 掲示板を 刺したので カレンダーは きちんと 固定された。"}, "Question", {q: "押しピンが掲示板に刺さった", hasCorrect:0}],
[["Ls",9], "DashedSentenceNoSpace", {s: "小学生が お菓子で 部屋を ちらかしたので 母親は 仕方なく 掃除した。"}, "Question", {q: "小学生が部屋を掃除した", hasCorrect:1}],
[["Ls",10], "DashedSentenceNoSpace", {s: "男子生徒が 消しかすで 机を ちらかしたので 女子生徒は 座るのを 嫌がった。"}, "Question", {q: "男子生徒が消しかすをちらかした", hasCorrect:0}],
[["Ls",11], "DashedSentenceNoSpace", {s: "課長が 靴下で リビングを ちらかしたので 義母は 嫌そうに 拾った。"}, "Question", {q: "義母が靴下をちらかした", hasCorrect:1}],
[["Ls",12], "DashedSentenceNoSpace", {s: "園児が おもちゃで 砂場を ちらかしたので PTA役員は 陰で 噂した。"}, "Question", {q: "園児が砂場をちらかした", hasCorrect:0}],
[["Ls",13], "DashedSentenceNoSpace", {s: "遭難者が 縄で 木を くくったので 捜索隊に すぐに 発見された。"}, "Question", {q: "リボンが木にくくられた", hasCorrect:1}],
[["Ls",14], "DashedSentenceNoSpace", {s: "隣人が ひもで 古新聞を くくったので 大家さんは ルール違反を 告げ口した。"}, "Question", {q: "隣人がルール違反した", hasCorrect:0}],
[["Ls",15], "DashedSentenceNoSpace", {s: "女医が ヘアゴムで 髪を くくったので 点滴の 用意が 始まった。"}, "Question", {q: "看護師は髪をくくった", hasCorrect:1}],
[["Ls",16], "DashedSentenceNoSpace", {s: "配送業者が ビニールひもで 荷台を くくったので カバーを ゆっくり おろした。"}, "Question", {q: "ビニールひもが荷台にくくられた", hasCorrect:0}],
[["Ls",17], "DashedSentenceNoSpace", {s: "料理研究家が バターで パスタを からめたので 香りは スタジオ内に 充満した。"}, "Question", {q: "料理研究家はバターをトーストに塗った", hasCorrect:1}],
[["Ls",18], "DashedSentenceNoSpace", {s: "和菓子屋が 黒蜜で アイスを からめたので 常連客は 新メニューを 期待した。"}, "Question", {q: "黒蜜はアイスにからまった", hasCorrect:0}],
[["Ls",19], "DashedSentenceNoSpace", {s: "主婦が ソースで 肉団子を からめたので 娘は 待ちきれず つまみ食いした。"}, "Question", {q: "ソースは焼きそばにかけられた", hasCorrect:1}],
[["Ls",20], "DashedSentenceNoSpace", {s: "オーナーが シロップで ワッフルを からめたので 取材班は カメラを まわした。"}, "Question", {q: "シロップはワッフルにからまった", hasCorrect:0}],
[["Ls",21], "DashedSentenceNoSpace", {s: "ホールスタッフが ビールで グラスを いっぱいにしたので 客は 喜んで 飲み干した。"}, "Question", {q: "客はジュースを飲み干した", hasCorrect:1}],
[["Ls",22], "DashedSentenceNoSpace", {s: "看板娘がが バスケットで キャンディを いっぱいにしたので 子供たちは わらわらと 集まった。"}, "Question", {q: "バスケットはキャンディでいっぱいだった", hasCorrect:0}],
[["Ls",23], "DashedSentenceNoSpace", {s: "家政婦が お湯で 浴槽を いっぱいにしたので 執事は 遠慮がちに たしなめた。"}, "Question", {q: "浴槽は水でいっぱいだった", hasCorrect:1}],
[["Ls",24], "DashedSentenceNoSpace", {s: "トップモデルが 洋服で クローゼットを いっぱいにしたので 弟は 浪費癖に うんざりした。"}, "Question", {q: "クローゼットは洋服でいっぱいだった", hasCorrect:0}],
                 ];
