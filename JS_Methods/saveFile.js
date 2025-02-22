const fs = require("fs");

const generateRandomNumbers = (count) => {
    let numbers = "";
    for (let i = 0; i < count; i++) {
        numbers += Math.floor(Math.random() * 1000000) + ",\n"; // Adjust range as needed
    }
    return numbers;
};

const saveToFile = (filename, data) => {
    fs.writeFileSync(filename, data, "utf8");
    console.log(`File saved as ${filename}`);
};

const randomNumbers = generateRandomNumbers(100000);
saveToFile("randomss_numbers.txt", randomNumbers);