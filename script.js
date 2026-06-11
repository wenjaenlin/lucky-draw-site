const drawData = {
  tarot: [
    { title: "愚者", text: "新的旅程正在招手。先帶著好奇心踏出一步，不必等到所有答案都準備好。" },
    { title: "魔術師", text: "你已經擁有需要的資源。專注在最重要的目標，讓想法透過行動慢慢成形。" },
    { title: "女祭司", text: "答案可能藏在安靜的感受裡。暫時放下外界聲音，相信你的直覺與觀察。" },
    { title: "皇后", text: "請溫柔照顧自己與身邊的人。當你給予時間和滋養，美好的事物會自然成長。" },
    { title: "皇帝", text: "現在適合建立清楚的界線與計畫。穩定地安排步驟，會讓你更有掌握感。" },
    { title: "教皇", text: "傳統經驗或值得信任的建議能帶來幫助。保留自己的判斷，也不妨向前輩請教。" },
    { title: "戀人", text: "一個選擇正在提醒你確認內心真正重視的事。坦誠溝通，做出與價值一致的決定。" },
    { title: "戰車", text: "方向確定後，就勇敢向前。把分散的心力收回來，穩穩掌握自己的步調。" },
    { title: "力量", text: "真正的力量來自耐心與溫柔。面對困難時，不必硬碰硬，你比想像中更有韌性。" },
    { title: "隱者", text: "給自己一點獨處與整理的空間。慢下來看清真正需要的方向，再出發也不遲。" },
    { title: "命運之輪", text: "變化正在發生，眼前的轉折也可能帶來新機會。保持彈性，順勢調整你的選擇。" },
    { title: "正義", text: "請回到事實，公平衡量每個面向。誠實面對選擇與責任，答案會逐漸清楚。" },
    { title: "倒吊人", text: "暫停不等於停滯。換個角度看待現在的處境，放下執著後可能看見新的出口。" },
    { title: "死神", text: "某個階段正在結束，為新的開始騰出位置。允許自己告別，不必勉強留住已不適合的事物。" },
    { title: "節制", text: "現在需要耐心調和不同需求。放慢速度、找到平衡，事情會以更舒服的方式前進。" },
    { title: "惡魔", text: "留意讓你感到受困的習慣或念頭。看見它，就是鬆開束縛的第一步，你仍有選擇。" },
    { title: "高塔", text: "突如其來的改變可能令人不安，卻也在清理不穩固的基礎。先照顧好自己，再重新整理。" },
    { title: "星星", text: "希望正在慢慢回來。相信修復需要時間，持續做一件讓自己靠近理想的小事。" },
    { title: "月亮", text: "資訊尚未完全明朗，情緒也可能放大擔心。先別急著定論，多給自己一些確認的時間。" },
    { title: "太陽", text: "明亮而開放的能量陪伴著你。真誠表達、享受成果，也把這份溫暖分享出去。" },
    { title: "審判", text: "過去的經驗正在喚醒新的理解。聽見內心的召喚，原諒不足，做出更成熟的選擇。" },
    { title: "世界", text: "一段歷程正走向完整。好好肯定自己的努力，帶著收穫迎接下一個階段。" }
  ],
  iching: [
    { title: "乾卦", interpretation: "創造力充足，適合主動開展，但力量越大越要保持清醒。", advice: "訂出明確目標，積極行動，同時聽取可靠意見。" },
    { title: "坤卦", interpretation: "此刻重點是承接與配合，以穩定耐心讓事情逐步成形。", advice: "先理解現況與他人需要，再用踏實步驟向前。" },
    { title: "屯卦", interpretation: "事情剛起步，混亂和阻力都是成長過程的一部分。", advice: "先處理最基本的問題，尋求協助，不必急著一次到位。" },
    { title: "蒙卦", interpretation: "資訊或經驗仍不足，保持學習能避免憑想像做決定。", advice: "把問題問清楚，向可信任的人請教後再行動。" },
    { title: "需卦", interpretation: "時機尚在醞釀，等待不是停滯，而是為行動累積條件。", advice: "照顧好日常準備，耐心觀察明確訊號。" },
    { title: "訟卦", interpretation: "立場差異容易造成摩擦，硬要爭到底可能兩敗俱傷。", advice: "先釐清共同目標，保留溝通空間，必要時請第三方協調。" },
    { title: "師卦", interpretation: "任務需要紀律、分工與一致方向，單靠熱情並不足夠。", advice: "確認規則與責任，選擇可靠夥伴一起完成。" },
    { title: "比卦", interpretation: "互信與連結能帶來支持，合適的合作關係值得經營。", advice: "主動表達善意，也確認彼此價值和承諾是否一致。" },
    { title: "小畜卦", interpretation: "進展雖小，持續累積仍能形成影響，暫時不宜冒進。", advice: "把細節做好、保存實力，等待條件更加成熟。" },
    { title: "履卦", interpretation: "局勢需要謹慎應對，尊重界線就能平穩通過。", advice: "注意說話與行動分寸，依照規則一步一步前進。" },
    { title: "泰卦", interpretation: "交流順暢、資源協調，是推動計畫的良好時機。", advice: "把握機會促成合作，也別忽略長期維護。" },
    { title: "否卦", interpretation: "目前溝通不易、推進受阻，勉強突破可能增加消耗。", advice: "守住核心原則，減少無效投入，等待局勢轉變。" },
    { title: "同人卦", interpretation: "公開坦誠能聚集志同道合的人，共同目標比個人得失重要。", advice: "說明你的方向，尋找理念相近且能互補的夥伴。" },
    { title: "大有卦", interpretation: "資源與成果逐漸豐盛，現在更需要妥善運用與分享。", advice: "珍惜已有優勢，公平分配，避免因自滿忽略風險。" },
    { title: "謙卦", interpretation: "保持謙遜能讓關係與成果更穩固，也更容易獲得支持。", advice: "肯定自己的能力，但為不同意見保留空間。" },
    { title: "豫卦", interpretation: "氣氛轉為輕快，適合凝聚士氣，但不可只停留在期待。", advice: "把熱情化成具體計畫，提早準備可能的變化。" },
    { title: "隨卦", interpretation: "順應變化能打開新路，關鍵是知道什麼值得跟隨。", advice: "保持彈性，同時確認選擇沒有違背你的原則。" },
    { title: "蠱卦", interpretation: "過去累積的問題需要整理，修正後才能重新順暢。", advice: "找出根本原因，負責任地處理，不要只補表面。" },
    { title: "臨卦", interpretation: "機會正在靠近，你的影響力也逐漸增加。", advice: "主動關心進度與他人需要，用真誠建立信任。" },
    { title: "觀卦", interpretation: "先觀察全局比立刻行動更重要，你也正被他人觀察。", advice: "拉開距離整理資訊，並讓自己的言行保持一致。" },
    { title: "噬嗑卦", interpretation: "有障礙需要明確處理，拖延會讓問題更加複雜。", advice: "依事實與規則做決定，態度堅定但避免情緒化。" },
    { title: "賁卦", interpretation: "適度包裝能提升表達，但真正價值仍在內容本身。", advice: "整理呈現方式，同時確保核心內容真實而扎實。" },
    { title: "剝卦", interpretation: "舊結構正在鬆動，現階段宜減少消耗、保護根本。", advice: "放下不再適合的部分，先穩住生活與重要關係。" },
    { title: "復卦", interpretation: "低潮後出現轉機，適合回到初心，重新開始。", advice: "從一個簡單且正確的小步驟做起，不必操之過急。" },
    { title: "無妄卦", interpretation: "真誠自然最能避免多餘麻煩，不宜抱著僥倖心理。", advice: "按照事實行動，做好本分，不強求不可控制的結果。" },
    { title: "大畜卦", interpretation: "能力與資源正在累積，暫緩出手能換來更大空間。", advice: "持續學習和準備，把力量留給真正重要的時刻。" },
    { title: "頤卦", interpretation: "你吸收的資訊、食物與關係，都在影響目前狀態。", advice: "選擇真正滋養你的內容，也留意說出口的話。" },
    { title: "大過卦", interpretation: "責任或壓力已超出平常，需要調整結構而非繼續硬撐。", advice: "分散負擔、處理最危急處，必要時果斷改變方法。" },
    { title: "坎卦", interpretation: "挑戰可能接連出現，穩定內心比追求速度更重要。", advice: "辨認風險、保留退路，一次專注跨過一個難關。" },
    { title: "離卦", interpretation: "看清方向與依靠能帶來明朗，但也要避免過度依附。", advice: "釐清事實，維持熱情，選擇健康可靠的支持。" },
    { title: "咸卦", interpretation: "彼此的感受與吸引正在產生影響，真誠回應能促進連結。", advice: "留意細微訊號，尊重對方界線，坦白表達心意。" },
    { title: "恆卦", interpretation: "長期成果來自穩定投入，而不是短暫的衝刺。", advice: "選定可持續的做法，定期檢視但不要輕易放棄。" },
    { title: "遯卦", interpretation: "暫時退讓能避開無謂消耗，這是策略而不是失敗。", advice: "拉開距離保存實力，把注意力轉回可掌握之處。" },
    { title: "大壯卦", interpretation: "力量正在上升，若使用得當可推動重要進展。", advice: "有自信地行動，但尊重規則與他人的承受範圍。" },
    { title: "晉卦", interpretation: "努力逐漸被看見，適合向前推進並擴大影響。", advice: "主動展示成果，也持續改善不足與回應期待。" },
    { title: "明夷卦", interpretation: "環境暫時不利，光芒需要收斂，以免受到不必要的傷害。", advice: "低調保護自己，守住信念，重要決定先不張揚。" },
    { title: "家人卦", interpretation: "內部秩序與彼此角色會影響整體穩定。", advice: "從熟悉的關係開始溝通，清楚分工並互相照顧。" },
    { title: "睽卦", interpretation: "差異已經浮現，不必強求一致，仍可尋找可合作之處。", advice: "先理解各自立場，從小範圍共識開始推進。" },
    { title: "蹇卦", interpretation: "前路有實際阻礙，繞道或停下評估比硬闖有效。", advice: "調整路線並尋求專業協助，先解決關鍵瓶頸。" },
    { title: "解卦", interpretation: "壓力開始鬆動，現在適合化解誤會與處理遺留問題。", advice: "把握轉機盡快收尾，以寬容但明確的方式溝通。" },
    { title: "損卦", interpretation: "適度減少能換來更重要的平衡，捨棄不等於失去。", advice: "刪去低效投入，把時間資源留給核心目標。" },
    { title: "益卦", interpretation: "付出與合作能帶來增長，利他的選擇也會回到自己身上。", advice: "把資源用在能共同受益之處，勇於採取改善行動。" },
    { title: "夬卦", interpretation: "問題已到需要表態的時刻，清楚決斷才能停止反覆。", advice: "公開說明事實與界線，堅定處理但不要攻擊他人。" },
    { title: "姤卦", interpretation: "意外的人事物突然出現，吸引力強卻仍需仔細判斷。", advice: "保持開放但不要急著承諾，先觀察長期影響。" },
    { title: "萃卦", interpretation: "人群與資源正在匯聚，清楚的共同方向能形成力量。", advice: "建立讓大家理解的目標，重視協調與公平參與。" },
    { title: "升卦", interpretation: "進展雖然緩慢，持續累積就能穩定向上。", advice: "從基礎做起，尋找支持，每天推進一小步。" },
    { title: "困卦", interpretation: "資源有限或心情受壓，現階段需要保存能量。", advice: "減少不必要承諾，向可信任的人求助並照顧基本需求。" },
    { title: "井卦", interpretation: "穩定而共享的資源值得維護，更新方法才能持續受益。", advice: "整理基礎系統，也把可靠知識與支持分享出去。" },
    { title: "革卦", interpretation: "改變的必要性已成熟，舊方法難以回應現在的需要。", advice: "說明改變原因，選好時機，循序完成轉換。" },
    { title: "鼎卦", interpretation: "新的結構正在成形，整合人才與資源能帶來提升。", advice: "明確分工並培養長期能力，讓成果真正穩定下來。" },
    { title: "震卦", interpretation: "突發變化帶來震動，也喚醒你重新面對重要的事。", advice: "先穩住情緒、確認安全，再迅速調整行動。" },
    { title: "艮卦", interpretation: "此刻需要停下來，清楚界線能避免事情過度延伸。", advice: "該休息就休息，該停止就停止，安靜整理下一步。" },
    { title: "漸卦", interpretation: "循序漸進最符合現在節奏，關係與計畫都需要時間培養。", advice: "尊重每個階段，不比較速度，持續完成眼前步驟。" },
    { title: "歸妹卦", interpretation: "位置或期待尚未完全對齊，急著定案容易留下問題。", advice: "確認彼此角色與條件，不因一時情緒做長期承諾。" },
    { title: "豐卦", interpretation: "能見度與成果來到高點，機會多也伴隨較高責任。", advice: "把握盛況完成重點，同時為之後的變化預留空間。" },
    { title: "旅卦", interpretation: "身處變動或陌生環境，保持彈性與禮貌有助於前行。", advice: "輕裝上路、尊重當地規則，先照顧眼前需要。" },
    { title: "巽卦", interpretation: "溫和持續的影響比強勢推動更容易深入人心。", advice: "反覆清楚溝通，用小幅調整逐步促成改變。" },
    { title: "兌卦", interpretation: "真誠交流與喜悅能拉近距離，但別只說討喜的話。", advice: "分享感受、用心傾聽，讓承諾與實際行動一致。" },
    { title: "渙卦", interpretation: "僵局開始消散，重新連結能化解疏離與誤解。", advice: "主動打開溝通，先處理共同的擔心與核心問題。" },
    { title: "節卦", interpretation: "適當限制能保護資源與關係，過度嚴格則容易失去彈性。", advice: "設定可實行的界線，保留休息與調整空間。" },
    { title: "中孚卦", interpretation: "誠信是目前最重要的基礎，真心能穿越表面差異。", advice: "說到做到，也先確認自己是否願意承擔承諾。" },
    { title: "小過卦", interpretation: "小事需要格外留心，現在適合微調而非推動巨大改變。", advice: "降低風險，把細節做好，避免超出能力範圍。" },
    { title: "既濟卦", interpretation: "事情看似完成，維持成果仍需要謹慎與持續照顧。", advice: "做好收尾與檢查，不因順利就忽略細小風險。" },
    { title: "未濟卦", interpretation: "目標已經接近，但最後階段仍有變數，不宜鬆懈。", advice: "耐心完成最後步驟，確認條件齊備後再正式定案。" }
  ]
};

const planets = ["太陽", "月亮", "水星", "金星", "火星", "木星", "土星", "天王星", "海王星", "冥王星"];
const signs = ["牡羊", "金牛", "雙子", "巨蟹", "獅子", "處女", "天秤", "天蠍", "射手", "摩羯", "水瓶", "雙魚"];
const houses = ["第一宮", "第二宮", "第三宮", "第四宮", "第五宮", "第六宮", "第七宮", "第八宮", "第九宮", "第十宮", "第十一宮", "第十二宮"];

const planetMeanings = {
  太陽: "把焦點放在自我認同與展現上",
  月亮: "留意內在感受與安全感的需要",
  水星: "透過溝通、思考與學習找線索",
  金星: "關注關係、價值感與讓你愉悅的事",
  火星: "把動力用在清楚而直接的行動上",
  木星: "用開放眼光尋找成長與擴展的機會",
  土星: "以耐心、責任與界線建立穩固基礎",
  天王星: "接受不同以往的想法與突然轉變",
  海王星: "傾聽想像與直覺，也要確認現實資訊",
  冥王星: "看見深層改變，放下已不適合的模式"
};

const signMeanings = {
  牡羊: "勇敢先行",
  金牛: "穩定累積",
  雙子: "保持好奇並交換資訊",
  巨蟹: "溫柔照顧感受",
  獅子: "自信而真誠地表達",
  處女: "整理細節並務實改善",
  天秤: "尋找公平與合作",
  天蠍: "深入面對真正的需求",
  射手: "放大視野並探索可能",
  摩羯: "訂立目標並踏實執行",
  水瓶: "跳脫慣例、連結群體",
  雙魚: "運用同理與想像力"
};

const houseMeanings = {
  第一宮: "你如何開始與呈現自己",
  第二宮: "金錢、資源與自我價值",
  第三宮: "溝通、學習與日常往來",
  第四宮: "家庭、內在與安全感",
  第五宮: "創作、興趣與浪漫表達",
  第六宮: "工作習慣、健康與日常秩序",
  第七宮: "伴侶、合作與一對一關係",
  第八宮: "共享資源、信任與深層轉變",
  第九宮: "遠行、信念與視野拓展",
  第十宮: "事業方向、責任與社會角色",
  第十一宮: "朋友、社群與未來願景",
  第十二宮: "休息、潛意識與內在整理"
};

const lastResults = {};

function randomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function drawDifferent(items, previousTitle) {
  if (items.length < 2) return items[0];

  let result = randomItem(items);
  while (result.title === previousTitle) {
    result = randomItem(items);
  }
  return result;
}

function createZodiacResult() {
  let planet;
  let sign;
  let house;
  let title;

  do {
    planet = randomItem(planets);
    sign = randomItem(signs);
    house = randomItem(houses);
    title = `${planet}・${sign}・${house}`;
  } while (title === lastResults.zodiac);

  return {
    title,
    text: `這組星座骰子邀請你${planetMeanings[planet]}，試著以「${signMeanings[sign]}」的方式，回應${houseMeanings[house]}這個生活主題。`
  };
}

function drawCard(type) {
  let result;

  if (type === "zodiac") {
    result = createZodiacResult();
  } else {
    const card = drawDifferent(drawData[type], lastResults[type]);
    result = type === "iching"
      ? { title: card.title, text: `卦象解讀：${card.interpretation}\n行動建議：${card.advice}` }
      : card;
  }

  lastResults[type] = result.title;
  document.getElementById("resultTitle").textContent = result.title;
  document.getElementById("resultText").textContent = result.text;
  document.getElementById("resultBox").scrollIntoView({ behavior: "smooth", block: "nearest" });
}
