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
import { toast } from "react-toastify"; 
import MyContractABI from "../abis/abis.json";

const contractAddress = "0x7582993721F6EB18418D987221Ca5Aacb3246E6F";

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
    createData("0x69c0ebF6408F5D50512C4106B97CdEe0A5CD900E", 0.123, 18),
    createData("0xBF29CaDC964CeaE5a2dbbCfcc0B8Ec9cA75b90B7", 0.1433, 10),
    createData("0xaDC968DC964CeaE5aDCbbC06B97Cdc9cA75b90B7", 0.32423, 11),
    createData("0xaDCbbC06C964CeaE5fcdbbCfcc0B8E9cA75dbb23", 0.43, 9),
];

const Test = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [walletAddress, setWalletAddress] = useState("");
    const [signer, setSigner] = useState(null); 
    const [contract, setContract] = useState(null); 
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

const connectWallet = async () => {
    try {
        if (typeof window.ethereum === "undefined") {
            toast.error("Please install MetaMask."); // Show error toast
            return;
        }
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        setWalletAddress(accounts[0]);

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        setSigner(signer);

        const contract = new ethers.Contract(contractAddress, MyContractABI, signer);
        setContract(contract);
    } catch (error) {
        if (error.code === 4001) { 
            toast.warn("You denied account access."); 
        } else {
            console.error("Error connecting to wallet:", error);
            toast.error("Error connecting to wallet."); 
        }
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
        const recipientAddress = contractAddress
        const amount = document.getElementById("ethAmount").value;

        try {
            if (!signer || !contract) {
                alert("Please connect your wallet before sending Ether.");
                return;
            }

            if (!recipientAddress || !amount) {
                alert("Please enter both recipient address and amount.");
                return;
            }

            const transaction = {
                to: recipientAddress,
                value: ethers.utils.parseEther(amount),
            };

            const txResponse = await signer.sendTransaction(transaction);
            await txResponse.wait(); 
            console.log("Transaction Response:", txResponse);
            alert("Transaction successful!");
        } catch (error) {
            console.error("Error sending Ether:", error);
            alert("Transaction failed. Please check the console for details.");
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
        <div className="bg-gradient-to-r from-blue-300 to-blue-600">
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
                                        <StyledTableCell align="right">{row.amount}</StyledTableCell>
                                        <StyledTableCell align="right">{row.roi}</StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>

            <div ref={sendRef}>
                <div className="flex justify-center items-center text-5xl pt-20 mb-40">
                    Send Ether
                </div>
                
                <div id="transaction-list" className="pt-4"></div>
            </div>
        </div>
    );
};

export default Test;
