let getResume = () => {
    let items = [...document.querySelector(".name .text-hidden")];
    for (let i of items) {
      if (i.textContent === "简历") {
        return i.previousElementSibling;
      }
    }
  }
  
  let resume = getResume();
  resume.links.addEventListener("onclick", () => {
    let pwSet = 2002;
    let pwInput = prompt("查看简历请输入密码：", "");
    if (pwInput === null && pwInput !== pwSet) {
      alert('密码错误');
      window.location.href = 'https://sova.org.cn';
    } else {
      window.open("https://chycheung.me", '_blank');
    }
  });
  