const express = require('express');
const app = express();
const port = 3000;
const telegramBotToken = "6846260168:AAGuSGtoqRfuYhhtvZ11xoacx2nyKI2ixN0";
const telegramChatId = "1196575861";
async function sendTelegramMessage(message) {
  try {
      const response = await fetch("https://api.telegram.org/bot" + telegramBotToken + "/sendMessage", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({
              chat_id: telegramChatId,
              text: message
          })
      });

      const data = await response.json();
      messageId = data.result.message_id; 
      console.log(messageId); // Printing the response data

  } catch (error) {
      //console.error('Error sending telegram message:', error);
      //sendTelegramMessage('Error sending telegram message: ' + error);    
  }
}

const claim = async () => {
    const timestamp = Math.floor(Date.now() / 1000);
    const response = await fetch("https://api.hamsterkombat.io/clicker/tap", {
        "headers": {
          "accept": "application/json",
          "accept-language": "en",
          "authorization": "Bearer 1718213753242P0i9sCMHPxOARCW0UB6DxlP7B2SqIFSKOXAfT3EIHZzLcfmFAwBVpxnhBDs3MBVT721265675",
          "content-type": "application/json",
          "sec-ch-ua": "\"Google Chrome\";v=\"123\", \"Not:A-Brand\";v=\"8\", \"Chromium\";v=\"123\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"Linux\"",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site"
        },
        "referrer": "https://hamsterkombat.io/",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": `{"count":1500,"availableTaps":1000,"timestamp":${timestamp}}`,
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
      });
    const data = await response.json();
    const data1 = data.clickerUser.balanceCoins;
    
    const final = "data3.player.full_name" + " " + data1;
    console.log(final);
  const response2 = await fetch("https://api-clicker.pixelverse.xyz/api/mining/claim", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "en-US,en;q=0.9",
    "cache-control": "no-cache",
    "initdata": "query_id=AAELpP0qAAAAAAuk_So-JUhp&user=%7B%22id%22%3A721265675%2C%22first_name%22%3A%22HK%22%2C%22last_name%22%3A%22%22%2C%22language_code%22%3A%22en%22%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=1718213951&hash=ff307ab4dcd2e60e5aa4a15cf49b3e8c384babf8e2e5a5e69958fa264168c832",
    "pragma": "no-cache",
    "priority": "u=1, i",
    "sec-ch-ua": "\"Google Chrome\";v=\"125\", \"Chromium\";v=\"125\", \"Not.A/Brand\";v=\"24\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "cross-site",
    "secret": "a9a2bb1f441784de183a0fc5e3d8d91f8fb5080736c721c2045664684b15f892",
    "tg-id": "721265675",
    "username": ""
  },
  "referrer": "https://sexyzbot.pxlvrs.io/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "POST",
  "mode": "cors",
  "credentials": "omit"
});
  const restore2 = await fetch("https://jjvnmoyncmcewnuykyid.supabase.co/rest/v1/rpc/restore_attempt", {
  "headers": {
    "accept": "*/*",
    "accept-language": "en",
    "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impqdm5tb3luY21jZXdudXlreWlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg3MDE5ODIsImV4cCI6MjAyNDI3Nzk4Mn0.oZh_ECA6fA2NlwoUamf1TqF45lrMC0uIdJXvVitDbZ8",
    "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZWxlZ3JhbUlkIjo1NzE3MDAyNzE2LCJpYXQiOjE3MTgwODkyMTh9.89a9OA8pDVTOrBraNrapnMqjeQY3C8hPtTw9hnIA2S0",
    "cache-control": "no-cache",
    "content-profile": "public",
    "content-type": "application/json",
    "pragma": "no-cache",
    "sec-ch-ua": "\"Not A;Brand\";v=\"99\", \"Chromium\";v=\"123\", \"Google Chrome\";v=\"123\"",
    "sec-ch-ua-mobile": "?1",
    "sec-ch-ua-platform": "\"Android\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "cross-site",
    "x-client-info": "postgrest-js/1.9.2",
    "x-telegram-user-id": "5717002716"
  },
  "referrer": "https://dot.dapplab.xyz/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "{}",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});
  console.log("restore dot coin");
  console.log(restore2.json());
  const res3 = await fetch("https://hexacore-tg-api.onrender.com/api/daily-reward", {
  "headers": {
    "accept": "*/*",
    "accept-language": "en",
    "authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo1NzE3MDAyNzE2LCJ1c2VybmFtZSI6ImRpbGVlcDI4NiIsInRpbWVzdGFtcCI6MTcxODA4NzU2Ni45MDk2Mzl9.y7cLitE_H6BVwKJAmp9tWw2GQij-yhDz7YHW8G8C3Lo",
    "cache-control": "no-cache",
    "content-type": "application/json",
    "pragma": "no-cache",
    "sec-ch-ua": "\"Google Chrome\";v=\"123\", \"Not:A-Brand\";v=\"8\", \"Chromium\";v=\"123\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Linux\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "cross-site"
  },
  "referrer": "https://ago-wallet.hexacore.io/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "{\"user_id\":5717002716}",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});
  const res4 = await fetch("https://hexacore-tg-api.onrender.com/api/mining-complete", {
  "headers": {
    "accept": "*/*",
    "accept-language": "en",
    "authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo1NzE3MDAyNzE2LCJ1c2VybmFtZSI6ImRpbGVlcDI4NiIsInRpbWVzdGFtcCI6MTcxODA4NzU2Ni45MDk2Mzl9.y7cLitE_H6BVwKJAmp9tWw2GQij-yhDz7YHW8G8C3Lo",
    "cache-control": "no-cache",
    "content-type": "application/json",
    "pragma": "no-cache",
    "sec-ch-ua": "\"Google Chrome\";v=\"123\", \"Not:A-Brand\";v=\"8\", \"Chromium\";v=\"123\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Linux\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "cross-site"
  },
  "referrer": "https://ago-wallet.hexacore.io/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "{\"taps\":40}",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});
  const response5 = await fetch("https://api.hamsterkombat.io/clicker/sync", {
        "headers": {
          "accept": "*/*",
          "accept-language": "en-US,en;q=0.9",
          "authorization": "Bearer 1718213753242P0i9sCMHPxOARCW0UB6DxlP7B2SqIFSKOXAfT3EIHZzLcfmFAwBVpxnhBDs3MBVT721265675",
          "cache-control": "no-cache",
          "pragma": "no-cache",
          "sec-ch-ua": "\"Not/A)Brand\";v=\"8\", \"Chromium\";v=\"126\", \"Google Chrome\";v=\"126\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"Linux\"",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site"
        },
        "referrer": "https://hamsterkombat.io/",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": null,
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
      });
    const data5 = await response5.json();
    console.log(data);
  
    sendTelegramMessage(final);
    return final
}
claim();

app.get('/', async (req, res) => {
    const balance = await claim();
    res.send(`Balance: ${balance}`);
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
