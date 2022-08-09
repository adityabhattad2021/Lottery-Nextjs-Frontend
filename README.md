# Nextjs Frontend of smart contract lottery.

Built with ❤️ using: NextJS Solidity Chainlink Moralis web3uikit Ethers Hardhat 
![GITHUBUPL](https://user-images.githubusercontent.com/93488388/183623456-2aca65cf-ef59-4fda-a2f0-b01e466d3b9e.png)

Site Live On: https://silent-tree-2650.on.fleek.co/
 

## Usage

Running with rinkeby testnet.

```
git clone https://github.com/adityabhattad2021/Lottery-Nextjs-Frontend.git
cd Lottery-Nextjs-Frontend
yarn
yarn dev
```


Running with local hardhat blockchain.

1. Clone the required projects.
```
git clone https://github.com/adityabhattad2021/Lottery-Nextjs-Frontend.git
git clone https://github.com/adityabhattad2021/Lottery-Smart-Contract.git
cd Lottery-Smart-Contract
yarn 
yarn hardhat node
```

2. Add hardhat network to your metamask/wallet

- Get the RPC_URL of your hh node (usually `http://127.0.0.1:8545/`)
- Go to your wallet and add a new network. [See instructions here.](https://metamask.zendesk.com/hc/en-us/articles/360043227612-How-to-add-a-custom-network-RPC)
  - Network Name: Hardhat-Localhost
  - New RPC URL: http://127.0.0.1:8545/
  - Chain ID: 31337
  - Currency Symbol: ETH (or GO)
  - Block Explorer URL: None


  Ideally, you'd then [import one of the accounts](https://metamask.zendesk.com/hc/en-us/articles/360015489331-How-to-import-an-Account) from hardhat to your wallet/metamask. 

3. Run this code

```
cd ../Lottery-Nextjs-Frontend
yarn dev
```

4. Go to UI and have fun!

Head over to your [localhost](http://localhost:3000) and play with the lottery!




