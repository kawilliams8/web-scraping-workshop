let jquery = require('jQuery');
let jsdom = require("jsdom").jsdom;
let Nightmare = require("nightmare");
let nightmare = Nightmare({ show: true });

// nightmare
//   .goto("https://turing.io/team/")
//   .click('a[href="/team/instructors"]')
//   .wait("h3")
//   .evaluate(function() {
//     var nameNodes = document.querySelectorAll("h3");
//     var list = [].slice.call(nameNodes);
//     return list.map(function(node) {
//       return node.innerText;
//     });
//   })
//   .end()
//   .then(function(result) {
//     console.log(result);
//   })
//   .catch(function(error) {
//     console.error("Search failed:", error);
//   });


nightmare
  .goto("https://denver.craigslist.org/search/sss?query=pepsi+center+tickets")
  .wait(2000)
  .evaluate(() => {
    let tickets = [];
    $(".result-title.hdrlnk").each(function() {
      item = {};
      item["title"] = $(this).text();
      item["link"] = $(this).attr("href");
      tickets.push(item);
    });
    return tickets;
  })
  .end()
  .then(result => console.log("tickets: ", result))
  .catch(error => console.error("Search failed: ", error));
