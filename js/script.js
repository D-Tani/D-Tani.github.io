document.addEventListener('DOMContentLoaded', () => {
    const diaryEntries = [
        {
            title: "1日目 上陸",
            date: "2023年8月29日",
            content: "単身で北海道に住む母に会うために初の北海道上陸。残暑が厳しい本州に対して、気温ほど暑さを感じさせない風が空港を出ると感じられた。",
            image: "airport.jpg"
        },
        {
            title: "青い池",
            content: "水面がエメラルド色に見える観光名所。外国人が多く、様々な言語が飛び交っていました。",
            image: "bluepond.jpg"
        },
        {
            title: "温泉の横にある森の家々",
            image: "foresthouses.jpg"
        },
        {
            title: "2日目 SHIRO みんなの工場",
            date: "2023年8月30日",
            content: "砂川にある国産フレグランスブランドの工場施設へ。やはり女性客が多くややアウェーな雰囲気を感じた。施設内のカフェでゆっくりとした時間を過ごし、お土産を買って後にした。",
            image: "shirofactory.jpg",
            image: "shirocafe.jpg"
        },
        {
            title: "昼食",
            content: "何もない平原の中にポツンとある喫茶店で昼食。大地と空が近くさえ感じる景色を見ながら、柔らかい肉とピザトーストにかぶりついた。なんと贅沢な時間だろう。",
            image: "coffee.jpg",
            image: "plate.jpg"
        },
        {
            title: "大自然",
            content: "帰りの飛行機の時間も迫ってきた頃、最後に北海道の大きさを体験することにした。あたり一面「何も無い」が広がる光景、東京では到底味わえない開放感が最高だった。",
            image: "nothing.jpg",
            image: "nothting2.jpg"
        }
    ];

    const diaryContainer = document.getElementById('diary-container');

    diaryEntries.forEach(entry => {
        const section = document.createElement('section');

        const img = document.createElement('img');
        img.src = entry.image;
        img.alt = entry.title;

        const h2 = document.createElement('h2');
        h2.textContent = entry.title;

        const date = document.createElement('p');
        date.textContent = entry.date;
        date.style.fontStyle = 'italic';

        const content = document.createElement('p');
        content.textContent = entry.content;

        section.appendChild(img);
        section.appendChild(h2);
        section.appendChild(date);
        section.appendChild(content);

        diaryContainer.appendChild(section);
    });
});
