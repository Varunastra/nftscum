import { Wallet, JsonRpcProvider, parseUnits } from "ethers";

const BSC_RPC = "https://opbnb-mainnet-rpc.bnbchain.org";

const provider = new JsonRpcProvider(BSC_RPC);

const accounts = await Bun.file("./accounts.csv").text();

const wallets = accounts
    .split("\n")
    .map(account => account.split(",")[1]);

const wallet = Wallet.fromPhrase(process.env.SENDER_WALLET_SEED, provider);

for (const address of wallets) {
    const tx = await wallet.sendTransaction({
        to: address,
        value: parseUnits(process.env.SENDER_BNB_AMOUNT, 'ether'),
    });

    console.log(tx.hash);
}