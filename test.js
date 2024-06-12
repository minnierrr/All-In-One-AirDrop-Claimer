const claim = async () => {
    const timestamp = Math.floor(Date.now() / 1000);
    const response = await fetch("https://api.yescoin.gold/game/claimOfflineYesPacBonus", {
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
    const data = await response.json();
    console.log(data);
}

claim()