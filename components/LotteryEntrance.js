import { useWeb3Contract, useMoralis } from "react-moralis";
import { contractAddresses, abi } from "../constants";
import { useEffect, useState } from "react";
import { useNotification } from "web3uikit";
import { ethers } from "ethers";

export default function LotteryEntrance() {
	const { chainId: chainIdHex, isWeb3Enabled } = useMoralis();
	const dispatch = useNotification();
	const chainId = parseInt(chainIdHex);
	const ABI = abi;
	const lotteryAddress = chainId in contractAddresses ? contractAddresses[chainId][0] : null;
	console.log(`Chain id is ${chainId}\n Lottery Address is ${lotteryAddress}`);

	const [entranceFee, setEntranceFee] = useState("0");
	const [recentWinner, setRecentWinner] = useState("0");
    const [numPlayers, setNumPlayers] = useState("0");
    
    const { runContractFunction: enterLotteryFunc,isLoading,isFetching } = useWeb3Contract({
		abi: ABI,
		contractAddress: lotteryAddress,
		functionName: "enterLottery",
		msgValue: entranceFee,
		params: {},
	});

	const { runContractFunction: getEntranceFeeFunc } = useWeb3Contract({
		abi: ABI,
		contractAddress: lotteryAddress,
		functionName: "getEntrenceFee",
		params: {},
	});

	

	const { runContractFunction: getNumPlayersFunc } = useWeb3Contract({
		abi: ABI,
		contractAddress: lotteryAddress,
		functionName: "getNumberOfPlayers",
		params: {},
	});

	const { runContractFunction: getRecentWinnerFunc } = useWeb3Contract({
		abi: ABI,
		contractAddress: lotteryAddress,
		functionName: "getRecentWinner",
		params: {},
	});

	useEffect(() => {
		console.log(isWeb3Enabled ? "Web3 is enabled" : "Web3 is not enabled");
		if (isWeb3Enabled) {
			updateUI();
		}
	}, [isWeb3Enabled]);

	async function updateUI() {
		if (lotteryAddress) {
			const entranceFeeFromCall = (await getEntranceFeeFunc()).toString();
			const recentWinnerFromCall = (await getRecentWinnerFunc()).toString();
			const numberOfPlayersFromCall = (await getNumPlayersFunc()).toString();
			setEntranceFee(entranceFeeFromCall);
			setNumPlayers(numberOfPlayersFromCall);
			setRecentWinner(recentWinnerFromCall);
			console.log(`Entrance Feee was set to ${entranceFee}`);
			console.log(`Number of Players was set to ${numPlayers}`);
			console.log(`Recent Winner was set to ${recentWinner}`);
		}
	}

	async function handleSuccess(tx) {
		await tx.wait(1);
		handleNewNotification(tx);
		updateUI();
	}

	async function handleNewNotification() {
		dispatch({
			type: "info",
			message: "Transection Sent Successfully.",
			title: "Transection Notification",
			position: "topR",
			icon: "ada",
		});
	}

	return (
		<div>
			{lotteryAddress ? (
				<div className="flex justify-center flex-col items-center">
					<div className="py-4 px-4 ">
						<h2 className="text-3xl font-bold py-4 px-4 text-center">A Fully Decentralized Lottery automated using Chainlink.</h2>
						<h3 className="text-2xl font-semibold py-4 px-2 text-left">Current Number Of Participants in this Lottery: {numPlayers}</h3>
						<h3 className="text-2xl font-semibold py-4 px-2 text-left">Recent Winner was {recentWinner}.</h3>
						<h3 className="text-2xl font-semibold py-4 px-2 text-left">
							The entrance Fee for this Lottery is 
							{ethers.utils.formatUnits(entranceFee, "ether")}.
						</h3>
					</div>
					<button
                        className="bg-black text-white hover:bg-blue-800 font-bold py-2 text-lg px-6 rounded dark:bg-white dark:text-black dark:hover:bg-gray-300 dark:outline-black-1"
                        disabled={isLoading||isFetching}
						onClick={async () => {
							await enterLotteryFunc({
								onSuccess: handleSuccess,
								onError: (error) => {
									console.log(error);
								},
							});
						}}
					>
                        {isLoading || isFetching ? (
                            <div className="animate-spin spinner-border h-8 w-8 border-b-2 rounded-full"></div>
                        ) : (
                                <div>Enter Lottery</div>
                        )}
					</button>
				</div>
			) : (
				<div>No Lottery Smart Contract Detected!</div>
			)}
		</div>
	);
}
