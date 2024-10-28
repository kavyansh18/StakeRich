import React, { useEffect, useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import Navbar from "../components/Navbar/Navbar";
import "./Test.css";
import { Suspense } from "react";
import Main from "../models/main.jsx";
import { Link, useNavigate, useLocation } from "react-router-dom";
import test from "../assets/6581883.gif";
import { FaWallet } from "react-icons/fa";
import bitcoin from "../assets/bitcoinnew.gif";

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ethers } from "ethers";

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
  // hide last border
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

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        // Request account access
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        // Check if connected to Sepolia testnet
        const chainId = await window.ethereum.request({ method: "eth_chainId" });
        if (chainId !== "0xaa36a7") { // Sepolia testnet chain ID
          await window.ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: "0xaa36a7" }],
          });
        }
        setWalletAddress(accounts[0]);
      } catch (error) {
        console.error("Error connecting to MetaMask", error);
      }
    } else {
      alert("Please install MetaMask to connect your wallet.");
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
                <planeGeometry args={[50, 50]} /> //roi, address, amount
                <shadowMaterial opacity={0.5} />
              </mesh>
            </Suspense>
          </Canvas>
        </div>
      </div>

      {/* Stake Section with ref */}
      <div ref={stakeRef}>
        <div className="flex justify-center items-center text-7xl pt-20">
          Stake
        </div>
        <div className="flex justify-end items-end">
          <button
            className="wallet w-40 mx-40"
            onClick={connectWallet}
          >
            <FaWallet className="mr-2" />
            {walletAddress ? `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}` : "Connect Wallet"}
          </button>
        </div>
        <div className="h-[40rem] flex justify-center items-start mt-16">
          <div className="w-[44rem]">
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 600 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Address</StyledTableCell>
                    <StyledTableCell align="right">Amount</StyledTableCell>
                    <StyledTableCell align="right">ROI</StyledTableCell>
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
                      <StyledTableCell
                        align="right"
                        style={{ color: "green", fontWeight: "bold" }}
                      >
                        {row.roi}%
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>

      <div ref={sendRef}>
        <div className="flex justify-center items-center text-7xl pt-20">
          Send
        </div>
        <div className="flex justify-center items-center">
          <img src={test} alt="Stake Image" />
        </div>
      </div>
    </>
  );
};

export default Test;
