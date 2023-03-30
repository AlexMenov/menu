
const button = document.querySelector('button');
const article = document.getElementById("article").value;
button.addEventListener('click', async () => {
    console.log("click");
    let data = await fetch('https://api.forum-auto.ru/v2/clientinfo?login=493358_stroyzar&pass=sAVDkrEbqd&art');
    data = data.json();
    console.log(data);
})