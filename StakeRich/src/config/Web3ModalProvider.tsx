import React from "react";
import ReactDOM from "react-dom/client";
import { createWeb3Modal } from "@web3modal/wagmi/react";
import { http, createConfig, WagmiProvider } from "wagmi";
import { mainnet, arbitrum } from "viem/chains";
import { walletConnect, coinbaseWallet, injected } from "wagmi/connectors";
import type { CreateConnectorFn } from '@wagmi/core';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { authConnector } from "@web3modal/wagmi";

const queryClient = new QueryClient();

const projectId = "9c702d939dc8dcc1aa1c78f525f113d6";
if (!projectId) throw new Error("Project ID is undefined");

const metadata = {
  name: "Web3Modal",
  description: "Web3Modal Example",
  url: "https://web3modal.com",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const chains = [mainnet, arbitrum] as const;
const connectors: CreateConnectorFn[] = [];
connectors.push(walletConnect({ projectId, metadata, showQrModal: false }));
connectors.push(injected({ shimDisconnect: true }));
connectors.push(coinbaseWallet({
  appName: metadata.name,
  appLogoUrl: metadata.icons[0],
}));

connectors.push(authConnector({
  options: { projectId },
  socials: ['google', 'x', 'github', 'discord', 'apple'],
  showWallets: true,
  email: true,
  walletFeatures: false,
}));

const wagmiConfig = createConfig({
  chains,
  transports: {
    [mainnet.id]: http(),
    [arbitrum.id]: http(),
  },
  connectors: connectors,
});

createWeb3Modal({
  themeVariables: {
    '--w3m-font-family': "'Press Start 2P', cursive",
    '--w3m-accent': '#331f80',  
    '--w3m-color-mix': '#331f80',
    '--w3m-color-mix-strength': 40,
    '--w3m-font-size-master': '8px',
    '--w3m-border-radius-master': '8px',
    '--w3m-z-index': 1000,
  },
  wagmiConfig, 
  projectId 
});

export function AppKitProvider({ children }) {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </WagmiProvider>
  );
}

// ConnectButton component
export function ConnectButton() {
  return (
    <w3m-button>
      <span>Connect Wallet</span>
    </w3m-button>
  );
}
