//  url ="https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&month=2009-01&outputsize=full&apikey=demo";

// async function stockname() {
//   try {
//     let res = await fetch(url);
//     let deta = await res.json();
//     console.log(deta);

//     let times = deta["Time Series (5min)"];
//     let latestTime = Object.keys(times)[0];
//     let stockData = times[latestTime];

//     let price = stockData["1. open"];
//     document.getElementById("stockPrice").textContent = `🟪 RELIANCE Open Price: ₹${price}`;
//   } catch (err) {
//     document.getElementById("stockPrice").textContent = "❌ Failed to load stock data.";
//     console.log("Error:", err);
//   }
// }et

// document.getElementById("btn").addEventListener("click", stockname);
// stockname();


