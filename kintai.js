const btn1 = document.getElementById('btn1');

btn1.addEventListener('click', () => {
    alert('出勤しました。今日も頑張りましょう！');
});

const btn2 = document.getElementById('btn2');

btn2.addEventListener('click', () => {
    alert('退勤しました。今日もお疲れ様でした！');
});

const btn3 = document.getElementById('btn3');

btn3.addEventListener('click', () => {
    alert('休憩に入りました。きちんと休息を取りましょう！');
});

const clock = () => {
    //　現在の日時・時刻の情報を取得 
    const d = new Date();

    //　年を取得 
    let year = d.getFullYear();
    // 月を取得
    let month = d.getMonth() + 1;
    // 日を取得
    let date = d.getDate();
    //　曜日を取得
    let dayNum = d.getDay();
    const weekday = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    let day = weekday[dayNum];
    // 時を習得
    let hour = d.getHours();
    // 分を取得
    let min = d.getMinutes();
    //　秒を取得
    let sec = d.getSeconds();

    // 一桁の場合は0を足して二桁に
    month = month < 10 ? "0" + month : month;
    date = date < 10 ? "0" + date : date;
    hour= hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    // 日付・時刻の文字列を作成
    let today = `${year}.${month}.${date}.${day}`;
    let time =`${hour}.${min}.${sec}`;

    // 文字列をpタグに挿入
    document.querySelector(".clock-date").innerText = today;
    document.querySelector(".clock-time").innerText = time;
};

// 一秒ごとにclock関数を呼び出す
setInterval(clock, 1000);
