import React, { useEffect, useState, useRef, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Navbar from "../components/Navbar/Navbar";
import "./Test.css";
import Main from "../models/main.jsx";
import { useNavigate } from "react-router-dom";
import { FaWallet } from "react-icons/fa";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ethers } from "ethers";
import MyContractABI from "../abis/abis.json";

const contractAddress = "0xBF29CaDC964CeaE5a2dbbCfcc0B8Ec9cA75b90B7";

let provider, signer, contract;

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
        fontFamily: "Orbitron, sans-serif",
        fontWeight: "bold",
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 18,
        fontFamily: "Orbitron, sans-serif",
        fontWeight: "bold",
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
        backgroundColor: "#CDC1FF",
    },
    "&:last-child td, &:last-child th": {
        border: 0,
    },
}));

function createData(address, amount, roi) {
    return { address, amount, roi };
}

const rows = [
    createData("0xkavyansh", 0.123, 18),
    createData("0xtanay", 0.1433, 10),
    createData("0xrajdeep", 0.32423, 11),
    createData("0xharshil", 0.43, 9),
];

const Test = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [walletAddress, setWalletAddress] = useState("");
    const navigate = useNavigate();
    const stakeRef = useRef(null);
    const sendRef = useRef(null);

    useEffect(() => {
        const handleDarkModeToggle = () => {
            setDarkMode(document.body.classList.contains("dark-mode"));
        };

        window.addEventListener("dark-mode-toggle", handleDarkModeToggle);

        return () => {
            window.removeEventListener("dark-mode-toggle", handleDarkModeToggle);
        };
    }, []);

    useEffect(() => {
        const initializeContract = async () => {
            if (!window.ethereum) return;
            provider = new ethers.providers.Web3Provider(window.ethereum);
            signer = provider.getSigner();
            contract = new ethers.Contract(contractAddress, MyContractABI, signer);
        };
        initializeContract();
    }, []);

    const connectWallet = async () => {
        try {
            if (!window.ethereum) return alert("Please install MetaMask.");
            const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
            setWalletAddress(accounts[0]);
        } catch (error) {
            console.error("Error connecting to wallet:", error);
        }
    };

    const getAllTransactions = async () => {
        try {
            if (!contract) {
                throw new Error("Contract is not initialized. Please connect your wallet.");
            }
            const transactions = await contract.getAllTransactions();
            document.getElementById("transaction-list").innerHTML = "";

            transactions.forEach((tx, index) => {
                const sender = tx.sender;
                const amount = ethers.utils.formatEther(tx.amount);
                const txElement = document.createElement("p");
                txElement.textContent = `Transaction ${index + 1}: Sender - ${sender}, Amount - ${amount} ETH`;
                document.getElementById("transaction-list").appendChild(txElement);
            });
        } catch (error) {
            console.error("Error fetching transactions:", error);
        }
    };

    const sendEther = async () => {
        const recipientAddress = document.getElementById("recipientAddress").value;
        const amount = document.getElementById("ethAmount").value;

        try {
            // Check if Ethereum provider is available
            if (!window.ethereum) {
                console.error("Please install MetaMask!");
                return;
            }

            if (!recipientAddress || !amount) {
                console.error("Please enter both recipient address and amount.");
                return;
            }

            // Create the transaction
            const transaction = {
                to: recipientAddress,
                value: ethers.utils.parseEther(amount), // Ensure 'amount' is a string
            };

            // Send the transaction
            const txResponse = await signer.sendTransaction(transaction);
            console.log("Transaction Response:", txResponse);
        } catch (error) {
            console.error("Error sending Ether:", error);
        }
    };

    const handleTradeNowClick = () => {
        navigate("/buy");
    };

    const scrollToStakeSection = () => {
        if (stakeRef.current) {
            stakeRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    const scrollToSendSection = () => {
        if (sendRef.current) {
            sendRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    const animations = ["Hey!", "pose"];

    return (
        <>
            <Navbar />
            <div className={`hero-sectionb ${darkMode ? "dark-mode" : ""}`}>
                <div className="news mr-40 ml-40">
                    <h1 className="flex flex-col justify-center items-center">
                        <span className="trustedb" onClick={scrollToStakeSection}>
                            Stake
                        </span>
                        <span className="trustedc">OR</span>
                        <span className="trustedb" onClick={scrollToSendSection}>
                            Send
                        </span>
                    </h1>
                </div>
                <div className="model">
                    <Canvas shadows camera={{ position: [0, 0, 10] }}>
                        <ambientLight intensity={0.4} />
                        <directionalLight
                            position={[5, 10, 5]}
                            intensity={5}
                            shadow-mapSize-width={1024}
                            shadow-mapSize-height={1024}
                            shadow-camera-near={0.5}
                            shadow-camera-far={50}
                            shadow-camera-left={-10}
                            shadow-camera-right={10}
                            shadow-camera-top={10}
                            shadow-camera-bottom={-10}
                        />
                        <pointLight position={[0, 10, 10]} intensity={1} />
                        <pointLight position={[0, -10, -10]} intensity={0.5} />
                        <Suspense fallback={null}>
                            <Main
                                position={[-1, -4.5, 0]}
                                rotation={[0.2, 1.5, 0]}
                                scale={[0.5, 0.5, 0.5]}
                                castShadow
                                receiveShadow
                                animation={animations[0]}
                                hoverAnimation={animations[1]}
                            />
                            <mesh
                                position={[0, -3, 0]}
                                rotation={[-Math.PI / 2, 0, 0]}
                                receiveShadow
                            >
                                <planeGeometry args={[50, 50]} />
                                <shadowMaterial opacity={0.5} />
                            </mesh>
                        </Suspense>
                    </Canvas>
                </div>
            </div>

            <div ref={stakeRef}>
                <div className="flex justify-center items-center text-7xl pt-20">
                    Stake
                </div>
                <div className="flex justify-end items-end">
                    <button
                        className="wallet w-40 mx-40"
                        onClick={connectWallet}
                    >
                        <FaWallet /> {walletAddress ? `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}` : "Connect Wallet"}
                    </button>
                </div>
                <div className="px-40 pt-10">
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 700 }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>Wallet Address</StyledTableCell>
                                    <StyledTableCell align="right">Amount</StyledTableCell>
                                    <StyledTableCell align="right">ROI(%)</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <StyledTableRow key={row.address}>
                                        <StyledTableCell component="th" scope="row">
                                            {row.address}
                                        </StyledTableCell>
                                        <StyledTableCell align="right">
                                            {row.amount}
                                        </StyledTableCell>
                                        <StyledTableCell align="right">
                                            {row.roi}
                                        </StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>

            <div ref={sendRef}>
                <div className="flex justify-center items-center text-7xl pt-40 pb-20" >
                    Send Ether
                </div>
                <div className="flex justify-center items-center">
                    <input
                        type="text"
                        id="recipientAddress"
                        placeholder="Recipient Address"
                        className="mx-2 border-2 border-gray-400 rounded p-2"
                    />
                    <input
                        type="text"
                        id="ethAmount"
                        placeholder="Amount (ETH)"
                        className="mx-2 border-2 border-gray-400 rounded p-2"
                    />
                    <button onClick={sendEther} className="send-button w-40 py-2">Send</button>
                </div>
                <div className="transaction-list mt-5" id="transaction-list"></div>
                <button onClick={getAllTransactions} className="fetch-transactions mb-20">Fetch All Transactions</button>
            </div>
        </>
    );
};

export default Test;
