function generateRandomValues() {
    let value;
    for(let i = 0; i < 10; i++) {
        value = Math.floor(Math.random() * i)
    }

    return value;
}
