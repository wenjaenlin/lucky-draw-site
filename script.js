const drawData = {
  tarot: [
    {
      title: "太陽",
      text: "今天適合保持自信，事情會因為你的主動而變得更明亮。"
    },
    {
      title: "星星",
      text: "你正在慢慢靠近希望，先相信自己，再讓答案浮現。"
    },
    {
      title: "節制",
      text: "先不要急著做決定，平衡情緒與現實會帶來更好的結果。"
    }
  ],
  iching: [
    {
      title: "乾卦",
      text: "行動力很重要，現在適合主動前進，但也要記得穩住節奏。"
    },
    {
      title: "坤卦",
      text: "先承接現況、觀察局勢，溫柔而穩定的力量會幫助你。"
    },
    {
      title: "震卦",
      text: "可能會有突然的變化，但變動也代表新的開始正在靠近。"
    }
  ],
  zodiac: [
    {
      title: "太陽・獅子・第五宮",
      text: "今天的重點是展現自己，適合創作、表達、讓別人看見你的亮點。"
    },
    {
      title: "月亮・巨蟹・第四宮",
      text: "你的情緒正在提醒你回到內心，照顧自己會比硬撐更重要。"
    },
    {
      title: "水星・雙子・第三宮",
      text: "溝通、學習與交換訊息會帶來新的線索，可以多留意對話中的關鍵字。"
    }
  ]
};

function drawCard(type) {
  const cards = drawData[type];
  const randomIndex = Math.floor(Math.random() * cards.length);
  const result = cards[randomIndex];

  document.getElementById("resultTitle").textContent = result.title;
  document.getElementById("resultText").textContent = result.text;
}
