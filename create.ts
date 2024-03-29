import { ethers } from "ethers";

const accounts = [];

for (let i = 0; i < 100; i++) {
    const wallet = ethers.Wallet.createRandom();

    accounts.push(`${wallet.privateKey},${wallet.address},${wallet.mnemonic?.phrase}`);
}

await Bun.write(Bun.file("./accounts.csv"), accounts.join("\n"));