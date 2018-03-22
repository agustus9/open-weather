"http://samples.openweathermap.org/data/2.5/forecast?q=London,uk&appid=2b15c90140172d77aa2145870128752c"

const main = () => {
  const site = 'http://api.openweathermap.org/data/2.5/'
  const weatherKEY = "2b15c90140172d77aa2145870128752c";

  const btn = document.createElement("Button");
  const t = document.createTextNode("Click Me");
  btn.appendChild(t);
  document.body.appendChild(btn);

  
  btn.addEventListener("click", (event) => {
    console.log("clicked");
    const fetchMe = `${site}forecast?q=London,uk&appid=${weatherKEY}`;
    console.log(fetchMe);
    fetch(fetchMe).then((response) => {
      console.log(response.status);
      if (response.status === 200) {
        return response.json()
      }

  // const current = document.querySelector(".click");
  // current.addEventListener("click", (event) => {
  //   console.log("clicked");
  //   const fetchMe = `${site}forecast?q=London,uk&appid=${weatherKEY}`;
  //   console.log(fetchMe);
  //   fetch(fetchMe).then((response) => {
  //     console.log(response.status);
  //     if (response.status === 200) {
  //       return response.json()
  //     }
    }).then((weather) => {
      console.log(weather);
      const output = document.querySelector(".data-log")
      output.textContent = `${weather.name}`;
    });
  })

  console.log("display city");

  document.querySelector('h1').textContent += ''
}

document.addEventListener('DOMContentLoaded', main)
