import { Wallet, parseUnits, ethers } from "ethers";

const BSC_RPC = "https://opbnb-mainnet-rpc.bnbchain.org";

const provider = new ethers.JsonRpcProvider(BSC_RPC);

const accounts = await Bun.file("./accounts.csv").text();

const wallets = accounts
    .split("\n")
    .map(account => account.split(",")[2]);

for (const seed of wallets) {
    const wallet = Wallet.fromPhrase(seed, provider);

    const tx = await wallet.sendTransaction({
        to: '0x3c76649cbae809e18bb577a9e291935f81a00195',
        value: parseUnits('0.0001', 'ether'),
        data: "0x2ae3594a",
    });

    console.log(tx.hash);
}