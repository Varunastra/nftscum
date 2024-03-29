export declare global {
    namespace NodeJS {
        interface ProcessEnv {
            SENDER_WALLET_SEED: string;
            SENDER_BNB_AMOUNT: string;
        }
    }
}