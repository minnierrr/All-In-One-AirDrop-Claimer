const express = require('express');
const app = express();
const port = 3000;
const telegramBotToken = "7246747691:AAExBoR-vPp-6cVUm_1QFlZdUAVf2eiNpkA";
const telegramChatId = "721265675";
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
    const respons11 = await fetch("https://api.yescoin.gold/game/claimOfflineYesPacBonus", {
      "headers": {
        "accept": "application/json, text/plain, */*",
        "accept-language": "en-US,en;q=0.9",
        "cache-control": "no-cache",
        "content-type": "application/x-www-form-urlencoded",
        "pragma": "no-cache",
        "priority": "u=1, i",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        "token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI3MjEyNjU2NzUiLCJjaGF0SWQiOiI3MjEyNjU2NzUiLCJpYXQiOjE3MTgyMTQ5NjMsImV4cCI6MTcyMDgwNjk2Mywicm9sZUF1dGhvcml6ZXMiOltdLCJ1c2VySWQiOjE3OTQwNDE0MjE5ODc4MTU0MjR9.oNDggybfsgU54L2jCS8o686POYJxMX0Mo0av-i_Laxz_0uFb3AFIeIQ5EVU-FJPOm52PI7O1Fjal_t8cHMkbQg"
      },
      "referrer": "https://www.yescoin.gold/",
      "referrerPolicy": "strict-origin-when-cross-origin",
      "body": null,
      "method": "POST",
      "mode": "cors",
      "credentials": "omit"
    });
    const data11 = await respons11.json();
    console.log(data11);
    sendTelegramMessage("Yes Coin Log");
    sendTelegramMessage(data11);
  
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
