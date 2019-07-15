import { ethers } from 'ethers';
import IexecDoracleUpdater_PriceFeed from './IexecDoracleUpdater_PriceFeed';

// mainnet 0xed4a0189511859427c33dcc7c85fdd36575ae946
// kovan   0x3b9F1a9aeCb1991f3818f45bd4CC735f4BEE93Ac

let doracle_addr: string                = process.env.DORACLE_ADDR;
let private_key: string                 = process.env.MNEMONIC;
let provider: ethers.providers.Provider = ethers.getDefaultProvider(process.env.PROVIDER);

let wallet: ethers.Wallet       = new ethers.Wallet(private_key, provider);
let daemon: IexecDoracleUpdater_PriceFeed = new IexecDoracleUpdater_PriceFeed(doracle_addr, wallet, process.env.REQUESTER);

daemon.checkData("test 1");
daemon.testCheckData("test 2");
// daemon.start();
