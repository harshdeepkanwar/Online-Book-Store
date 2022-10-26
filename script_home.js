const quote = document.getElementById("quote");
const author = document.getElementById("author");

const btn = document.getElementById("new-quote");

const new_quote = document.getElementById("new-quote");

btn.addEventListener("click", function () {
  const api = "https://type.fit/api/quotes";

  let Data = "";

  let xhr = new XMLHttpRequest();
  xhr.open("GET", "https://type.fit/api/quotes", true);
  xhr.send();

  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      Data = JSON.parse(xhr.responseText);
    }

    setTimeout(function () {
      let random = Math.floor(Math.random() * 1000);

      quote.innerHTML = `"${Data[random].text}"`;

      if (Data[random].author != null) {
        author.innerHTML = Data[random].author;
      } else {
        author.innerHTML = "Unknown";
      }
    }, 500);
  };
});

// setInterval(function(){
//   new_quote.click();
//   console.log("New Quote Clicked")
// },10000);



console.log("Api Successfull");