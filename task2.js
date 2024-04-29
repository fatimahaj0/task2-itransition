const fs = require('fs');
const CryptoJS = require('crypto');

function calculateSHA3Hash(input) {
    const hash = CryptoJS.createHash('sha3-256');
    hash.update(input);
    return hash.digest('hex');
}

const directoryPath = 'D:\\fatima\\itransition\\data_files';
const files = fs.readdirSync(directoryPath);
let sortedHashes = [];

files.forEach(file => {
    const filePath = ${directoryPath}\\${file};
    const fileContent = fs.readFileSync(filePath);
    const hash = calculateSHA3Hash(fileContent);
    sortedHashes.push(hash);
})

sortedHashes.sort((a, b) => a.localeCompare(b));
let joinedHashes = sortedHashes.join('');
let email = "fatima_haj00@outlook.com".toLowerCase();

let joinedHashesEmail = joinedHashes + email;

let finalHash = calculateSHA3Hash(joinedHashesEmail);

console.log(Final SHA3 Hash: ${finalHash});