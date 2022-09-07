function generateRandomValues() {
    let value;
    for(let i = 0; i <= 10; i++) {
        value = Math.floor(Math.random() * i)
    }

    return value;
}

let quote = document.getElementById("quote");

switch(generateRandomValues()) {
    case 1: quote.innerHTML = "Avoid reality at all costs.";
    break;
    case 2: quote.innerHTML = "There is a 20% chance of tomorrow.";
    break;
    case 3: quote.innerHTML = "A visit to a strange place will bring fresh work.";
    break;
    case 4: quote.innerHTML = "It's all in the mind, ya know.";
    break;
    case 5: quote.innerHTML = "Civilization is the limitless multiplication of unnecessary necessities. - Mark Twain";
    break;
    case 6: quote.innerHTML = "You have many friends and very few living enemies.";
    break;
    case 7: quote.innerHTML = "Go to a movie tonight.  Darkness becomes you.";
    break;
    case 8: quote.innerHTML = "Cheer Up!  Things are getting worse at a slower rate.";
    break;
    case 9: quote.innerHTML = "You should emulate your heros, but don't carry it too far. Especially if they are dead.";
    break;
    case 10: quote.innerHTML = "Your love life will be happy and harmonious.";
    break;
    default: quote.innerHTML = "I have not idea what I am doing...";
}