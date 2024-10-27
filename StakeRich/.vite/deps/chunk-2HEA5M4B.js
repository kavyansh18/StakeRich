import {
  LitElement,
  _$LH,
  css,
  html,
  nothing,
  property,
  state
} from "./chunk-YJTPXML4.js";
import {
  AccountController,
  ApiController,
  AssetController,
  AssetUtil,
  BlockchainApiController,
  ChainController,
  ConnectionController,
  ConnectorController,
  ConstantsUtil,
  ConstantsUtil2,
  CoreHelperUtil,
  DateUtil,
  EnsController,
  EventsController,
  InputUtil,
  MathUtil,
  ModalController,
  NavigationUtil,
  NetworkController,
  NumberUtil,
  OnRampController,
  OptionsController,
  PublicStateController,
  RouterController,
  RouterUtil,
  SendController,
  SnackController,
  StorageUtil,
  SwapController,
  ThemeController,
  TooltipController,
  TransactionUtil,
  TransactionsController,
  UiHelperUtil,
  W3mFrameHelpers,
  W3mFrameRpcConstants,
  customElement,
  getW3mThemeVariables,
  setColorTheme,
  setThemeVariables
} from "./chunk-3TXFJNUW.js";
import {
  fallback,
  http
} from "./chunk-PVGSVGTL.js";

// node_modules/@web3modal/scaffold-utils/dist/esm/src/ConstantsUtil.js
var ConstantsUtil3 = {
  WALLET_CONNECT_CONNECTOR_ID: "walletConnect",
  INJECTED_CONNECTOR_ID: "injected",
  WALLET_STANDARD_CONNECTOR_ID: "announced",
  COINBASE_CONNECTOR_ID: "coinbaseWallet",
  COINBASE_SDK_CONNECTOR_ID: "coinbaseWalletSDK",
  SAFE_CONNECTOR_ID: "safe",
  LEDGER_CONNECTOR_ID: "ledger",
  EIP6963_CONNECTOR_ID: "eip6963",
  AUTH_CONNECTOR_ID: "w3mAuth",
  EIP155: "eip155",
  ADD_CHAIN_METHOD: "wallet_addEthereumChain",
  EIP6963_ANNOUNCE_EVENT: "eip6963:announceProvider",
  EIP6963_REQUEST_EVENT: "eip6963:requestProvider",
  CONNECTOR_RDNS_MAP: {
    coinbaseWallet: "com.coinbase.wallet",
    coinbaseWalletSDK: "com.coinbase.wallet"
  },
  VERSION: "5.0.7"
};

// node_modules/@web3modal/scaffold-utils/dist/esm/src/PresetsUtil.js
var PresetsUtil = {
  ConnectorExplorerIds: {
    [ConstantsUtil3.COINBASE_CONNECTOR_ID]: "fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",
    [ConstantsUtil3.COINBASE_SDK_CONNECTOR_ID]: "fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",
    [ConstantsUtil3.SAFE_CONNECTOR_ID]: "225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f",
    [ConstantsUtil3.LEDGER_CONNECTOR_ID]: "19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927"
  },
  EIP155NetworkImageIds: {
    1: "ba0ba0cd-17c6-4806-ad93-f9d174f17900",
    42161: "3bff954d-5cb0-47a0-9a23-d20192e74600",
    43114: "30c46e53-e989-45fb-4549-be3bd4eb3b00",
    56: "93564157-2e8e-4ce7-81df-b264dbee9b00",
    250: "06b26297-fe0c-4733-5d6b-ffa5498aac00",
    10: "ab9c186a-c52f-464b-2906-ca59d760a400",
    137: "41d04d42-da3b-4453-8506-668cc0727900",
    100: "02b53f6a-e3d4-479e-1cb4-21178987d100",
    9001: "f926ff41-260d-4028-635e-91913fc28e00",
    324: "b310f07f-4ef7-49f3-7073-2a0a39685800",
    314: "5a73b3dd-af74-424e-cae0-0de859ee9400",
    4689: "34e68754-e536-40da-c153-6ef2e7188a00",
    1088: "3897a66d-40b9-4833-162f-a2c90531c900",
    1284: "161038da-44ae-4ec7-1208-0ea569454b00",
    1285: "f1d73bb6-5450-4e18-38f7-fb6484264a00",
    7777777: "845c60df-d429-4991-e687-91ae45791600",
    42220: "ab781bbc-ccc6-418d-d32d-789b15da1f00",
    8453: "7289c336-3981-4081-c5f4-efc26ac64a00",
    1313161554: "3ff73439-a619-4894-9262-4470c773a100",
    2020: "b8101fc0-9c19-4b6f-ec65-f6dfff106e00",
    2021: "b8101fc0-9c19-4b6f-ec65-f6dfff106e00",
    "5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp": "a1b58899-f671-4276-6a5e-56ca5bd59700",
    "4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z": "a1b58899-f671-4276-6a5e-56ca5bd59700",
    EtWTRABZaYq6iMfeYKouRu166VU2xqa1: "a1b58899-f671-4276-6a5e-56ca5bd59700"
  },
  ConnectorImageIds: {
    [ConstantsUtil3.COINBASE_CONNECTOR_ID]: "0c2840c3-5b04-4c44-9661-fbd4b49e1800",
    [ConstantsUtil3.COINBASE_SDK_CONNECTOR_ID]: "0c2840c3-5b04-4c44-9661-fbd4b49e1800",
    [ConstantsUtil3.SAFE_CONNECTOR_ID]: "461db637-8616-43ce-035a-d89b8a1d5800",
    [ConstantsUtil3.LEDGER_CONNECTOR_ID]: "54a1aa77-d202-4f8d-0fb2-5d2bb6db0300",
    [ConstantsUtil3.WALLET_CONNECT_CONNECTOR_ID]: "ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400",
    [ConstantsUtil3.INJECTED_CONNECTOR_ID]: "07ba87ed-43aa-4adf-4540-9e6a2b9cae00"
  },
  ConnectorNamesMap: {
    [ConstantsUtil3.INJECTED_CONNECTOR_ID]: "Browser Wallet",
    [ConstantsUtil3.WALLET_CONNECT_CONNECTOR_ID]: "WalletConnect",
    [ConstantsUtil3.COINBASE_CONNECTOR_ID]: "Coinbase",
    [ConstantsUtil3.COINBASE_SDK_CONNECTOR_ID]: "Coinbase",
    [ConstantsUtil3.LEDGER_CONNECTOR_ID]: "Ledger",
    [ConstantsUtil3.SAFE_CONNECTOR_ID]: "Safe"
  },
  ConnectorTypesMap: {
    [ConstantsUtil3.INJECTED_CONNECTOR_ID]: "INJECTED",
    [ConstantsUtil3.WALLET_CONNECT_CONNECTOR_ID]: "WALLET_CONNECT",
    [ConstantsUtil3.EIP6963_CONNECTOR_ID]: "ANNOUNCED",
    [ConstantsUtil3.AUTH_CONNECTOR_ID]: "AUTH"
  },
  WalletConnectRpcChainIds: [
    1,
    5,
    11155111,
    10,
    420,
    42161,
    421613,
    137,
    80001,
    42220,
    1313161554,
    1313161555,
    56,
    97,
    43114,
    43113,
    100,
    8453,
    84531,
    7777777,
    999,
    324,
    280
  ]
};

// node_modules/@web3modal/scaffold-utils/dist/esm/src/HelpersUtil.js
var HelpersUtil = {
  getCaipTokens(tokens) {
    if (!tokens) {
      return void 0;
    }
    const caipTokens = {};
    Object.entries(tokens).forEach(([id, token]) => {
      caipTokens[`${ConstantsUtil3.EIP155}:${id}`] = token;
    });
    return caipTokens;
  }
};

// node_modules/@web3modal/scaffold/dist/esm/src/client.js
var isInitialized = false;
var Web3ModalScaffold = class {
  constructor(options) {
    this.initPromise = void 0;
    this.setIsConnected = (isConnected, chain) => {
      AccountController.setIsConnected(isConnected, chain);
    };
    this.getIsConnectedState = () => AccountController.state.isConnected;
    this.setAllAccounts = (addresses = []) => {
      AccountController.setAllAccounts(addresses);
      OptionsController.setHasMultipleAddresses((addresses == null ? void 0 : addresses.length) > 1);
    };
    this.addAddressLabel = (address, label) => {
      AccountController.addAddressLabel(address, label);
    };
    this.removeAddressLabel = (address) => {
      AccountController.removeAddressLabel(address);
    };
    this.setCaipAddress = (caipAddress, chain) => {
      AccountController.setCaipAddress(caipAddress, chain);
    };
    this.setBalance = (balance, balanceSymbol, chain) => {
      AccountController.setBalance(balance, balanceSymbol, chain);
    };
    this.setProfileName = (profileName, chain) => {
      AccountController.setProfileName(profileName, chain);
    };
    this.setProfileImage = (profileImage, chain) => {
      AccountController.setProfileImage(profileImage, chain);
    };
    this.resetAccount = (chain) => {
      AccountController.resetAccount(chain);
    };
    this.setCaipNetwork = (caipNetwork) => {
      NetworkController.setCaipNetwork(caipNetwork);
    };
    this.getCaipNetwork = () => NetworkController.state.caipNetwork;
    this.setRequestedCaipNetworks = (requestedCaipNetworks, chain) => {
      NetworkController.setRequestedCaipNetworks(requestedCaipNetworks, chain);
    };
    this.getApprovedCaipNetworkIds = () => NetworkController.getApprovedCaipNetworkIds();
    this.setApprovedCaipNetworksData = () => NetworkController.setApprovedCaipNetworksData();
    this.resetNetwork = () => {
      NetworkController.resetNetwork();
    };
    this.setConnectors = (connectors) => {
      ConnectorController.setConnectors(connectors);
    };
    this.addConnector = (connector) => {
      ConnectorController.addConnector(connector);
    };
    this.getConnectors = () => ConnectorController.getConnectors();
    this.resetWcConnection = () => {
      ConnectionController.resetWcConnection();
    };
    this.fetchIdentity = (request) => BlockchainApiController.fetchIdentity(request);
    this.setAddressExplorerUrl = (addressExplorerUrl, chain) => {
      AccountController.setAddressExplorerUrl(addressExplorerUrl, chain);
    };
    this.setSmartAccountDeployed = (isDeployed, chain) => {
      AccountController.setSmartAccountDeployed(isDeployed, chain);
    };
    this.setConnectedWalletInfo = (connectedWalletInfo, chain) => {
      AccountController.setConnectedWalletInfo(connectedWalletInfo, chain);
    };
    this.setSmartAccountEnabledNetworks = (smartAccountEnabledNetworks, chain) => {
      NetworkController.setSmartAccountEnabledNetworks(smartAccountEnabledNetworks, chain);
    };
    this.setPreferredAccountType = (preferredAccountType, chain) => {
      AccountController.setPreferredAccountType(preferredAccountType, chain);
    };
    this.getWalletConnectName = (address) => EnsController.getNamesForAddress(address);
    this.resolveWalletConnectName = async (name) => {
      var _a2;
      const trimmedName = name.replace(ConstantsUtil.WC_NAME_SUFFIX, "");
      const wcNameAddress = await EnsController.resolveName(trimmedName);
      const networkNameAddresses = Object.values(wcNameAddress == null ? void 0 : wcNameAddress.addresses) || [];
      return ((_a2 = networkNameAddresses[0]) == null ? void 0 : _a2.address) || false;
    };
    this.setEIP6963Enabled = (enabled) => {
      OptionsController.setEIP6963Enabled(enabled);
    };
    this.initControllers(options);
    this.initOrContinue();
  }
  async open(options) {
    await this.initOrContinue();
    ModalController.open(options);
  }
  async close() {
    await this.initOrContinue();
    ModalController.close();
  }
  setLoading(loading) {
    ModalController.setLoading(loading);
  }
  getThemeMode() {
    return ThemeController.state.themeMode;
  }
  getThemeVariables() {
    return ThemeController.state.themeVariables;
  }
  setThemeMode(themeMode) {
    ThemeController.setThemeMode(themeMode);
    setColorTheme(ThemeController.state.themeMode);
  }
  setThemeVariables(themeVariables) {
    ThemeController.setThemeVariables(themeVariables);
    setThemeVariables(ThemeController.state.themeVariables);
  }
  subscribeTheme(callback) {
    return ThemeController.subscribe(callback);
  }
  getWalletInfo() {
    return AccountController.state.connectedWalletInfo;
  }
  subscribeWalletInfo(callback) {
    return AccountController.subscribeKey("connectedWalletInfo", callback);
  }
  subscribeShouldUpdateToAddress(callback) {
    AccountController.subscribeKey("shouldUpdateToAddress", callback);
  }
  subscribeCaipNetworkChange(callback) {
    NetworkController.subscribeKey("caipNetwork", callback);
  }
  getState() {
    return PublicStateController.state;
  }
  subscribeState(callback) {
    return PublicStateController.subscribe(callback);
  }
  showErrorMessage(message) {
    SnackController.showError(message);
  }
  showSuccessMessage(message) {
    SnackController.showSuccess(message);
  }
  getEvent() {
    return { ...EventsController.state };
  }
  subscribeEvents(callback) {
    return EventsController.subscribe(callback);
  }
  replace(route) {
    RouterController.replace(route);
  }
  redirect(route) {
    RouterController.push(route);
  }
  popTransactionStack(cancel) {
    RouterController.popTransactionStack(cancel);
  }
  isOpen() {
    return ModalController.state.open;
  }
  isTransactionStackEmpty() {
    return RouterController.state.transactionStack.length === 0;
  }
  isTransactionShouldReplaceView() {
    var _a2;
    return (_a2 = RouterController.state.transactionStack[RouterController.state.transactionStack.length - 1]) == null ? void 0 : _a2.replace;
  }
  async initControllers(options) {
    ChainController.initialize([
      {
        networkControllerClient: options.networkControllerClient,
        connectionControllerClient: options.connectionControllerClient,
        chain: options.chain
      }
    ]);
    NetworkController.setDefaultCaipNetwork(options.defaultChain, options.chain);
    OptionsController.setProjectId(options.projectId);
    OptionsController.setAllWallets(options.allWallets);
    OptionsController.setIncludeWalletIds(options.includeWalletIds);
    OptionsController.setExcludeWalletIds(options.excludeWalletIds);
    OptionsController.setFeaturedWalletIds(options.featuredWalletIds);
    OptionsController.setTokens(options.tokens);
    OptionsController.setTermsConditionsUrl(options.termsConditionsUrl);
    OptionsController.setPrivacyPolicyUrl(options.privacyPolicyUrl);
    OptionsController.setEnableAnalytics(options.enableAnalytics);
    OptionsController.setCustomWallets(options.customWallets);
    OptionsController.setIsUniversalProvider(options.isUniversalProvider);
    OptionsController.setSdkVersion(options._sdkVersion);
    OptionsController.setOnrampEnabled(options.enableOnramp !== false);
    if (options.metadata) {
      OptionsController.setMetadata(options.metadata);
    }
    if (options.themeMode) {
      ThemeController.setThemeMode(options.themeMode);
    }
    if (options.themeVariables) {
      ThemeController.setThemeVariables(options.themeVariables);
    }
    if (options.disableAppend) {
      OptionsController.setDisableAppend(Boolean(options.disableAppend));
    }
    if (options.allowUnsupportedChain) {
      NetworkController.setAllowUnsupportedChain(options.allowUnsupportedChain);
    }
    if (options.siweControllerClient) {
      const { SIWEController } = await import("./exports-VVXRRPWP.js");
      SIWEController.setSIWEClient(options.siweControllerClient);
    }
  }
  async initOrContinue() {
    if (!this.initPromise && !isInitialized && CoreHelperUtil.isClient()) {
      isInitialized = true;
      this.initPromise = new Promise(async (resolve) => {
        await Promise.all([import("./esm-WNNED7ZC.js"), import("./w3m-modal-SGTIAGAJ.js")]);
        const modal = document.createElement("w3m-modal");
        if (!OptionsController.state.disableAppend) {
          document.body.insertAdjacentElement("beforeend", modal);
        }
        resolve();
      });
    }
    return this.initPromise;
  }
};

// node_modules/@web3modal/scaffold-ui/node_modules/lit-html/development/directives/if-defined.js
var ifDefined = (value) => value ?? nothing;

// node_modules/@web3modal/scaffold-ui/dist/esm/src/modal/w3m-account-button/index.js
var __decorate = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mAccountButton = class W3mAccountButton2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.disabled = false;
    this.balance = "show";
    this.charsStart = 4;
    this.charsEnd = 6;
    this.address = AccountController.state.address;
    this.balanceVal = AccountController.state.balance;
    this.balanceSymbol = AccountController.state.balanceSymbol;
    this.profileName = AccountController.state.profileName;
    this.profileImage = AccountController.state.profileImage;
    this.network = NetworkController.state.caipNetwork;
    this.isUnsupportedChain = NetworkController.state.isUnsupportedChain;
    this.unsubscribe.push(...[
      AccountController.subscribe((val) => {
        if (val.isConnected) {
          this.address = val.address;
          this.balanceVal = val.balance;
          this.profileName = val.profileName;
          this.profileImage = val.profileImage;
          this.balanceSymbol = val.balanceSymbol;
        } else {
          this.address = "";
          this.balanceVal = "";
          this.profileName = "";
          this.profileImage = "";
          this.balanceSymbol = "";
        }
      }),
      NetworkController.subscribeKey("caipNetwork", (val) => {
        this.network = val;
      }),
      NetworkController.subscribeKey("isUnsupportedChain", (val) => {
        this.isUnsupportedChain = val;
      })
    ]);
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    const networkImage = AssetUtil.getNetworkImage(this.network);
    const showBalance = this.balance === "show";
    return html`
      <wui-account-button
        .disabled=${Boolean(this.disabled)}
        .isUnsupportedChain=${this.isUnsupportedChain}
        address=${ifDefined(this.address)}
        profileName=${ifDefined(this.profileName)}
        networkSrc=${ifDefined(networkImage)}
        avatarSrc=${ifDefined(this.profileImage)}
        balance=${showBalance ? CoreHelperUtil.formatBalance(this.balanceVal, this.balanceSymbol) : ""}
        @click=${this.onClick.bind(this)}
        data-testid="account-button"
        .charsStart=${this.charsStart}
        .charsEnd=${this.charsEnd}
      >
      </wui-account-button>
    `;
  }
  onClick() {
    if (this.isUnsupportedChain) {
      ModalController.open({ view: "UnsupportedChain" });
    } else {
      ModalController.open();
    }
  }
};
__decorate([
  property({ type: Boolean })
], W3mAccountButton.prototype, "disabled", void 0);
__decorate([
  property()
], W3mAccountButton.prototype, "balance", void 0);
__decorate([
  property()
], W3mAccountButton.prototype, "charsStart", void 0);
__decorate([
  property()
], W3mAccountButton.prototype, "charsEnd", void 0);
__decorate([
  state()
], W3mAccountButton.prototype, "address", void 0);
__decorate([
  state()
], W3mAccountButton.prototype, "balanceVal", void 0);
__decorate([
  state()
], W3mAccountButton.prototype, "balanceSymbol", void 0);
__decorate([
  state()
], W3mAccountButton.prototype, "profileName", void 0);
__decorate([
  state()
], W3mAccountButton.prototype, "profileImage", void 0);
__decorate([
  state()
], W3mAccountButton.prototype, "network", void 0);
__decorate([
  state()
], W3mAccountButton.prototype, "isUnsupportedChain", void 0);
W3mAccountButton = __decorate([
  customElement("w3m-account-button")
], W3mAccountButton);

// node_modules/@web3modal/scaffold-ui/dist/esm/src/modal/w3m-button/styles.js
var styles_default = css`
  :host {
    display: block;
    width: max-content;
  }
`;

// node_modules/@web3modal/scaffold-ui/dist/esm/src/modal/w3m-button/index.js
var __decorate2 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mButton = class W3mButton2 extends LitElement {
  constructor() {
    super(...arguments);
    this.unsubscribe = [];
    this.disabled = false;
    this.balance = void 0;
    this.size = void 0;
    this.label = void 0;
    this.loadingLabel = void 0;
    this.charsStart = 4;
    this.charsEnd = 6;
    this.isAccount = AccountController.state.isConnected;
    this.isLoading = ModalController.state.loading;
  }
  firstUpdated() {
    this.unsubscribe.push(AccountController.subscribeKey("isConnected", (val) => {
      this.isAccount = val;
    }), ModalController.subscribeKey("loading", (val) => {
      this.isLoading = val;
    }));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    return this.isAccount && !this.isLoading ? html`
          <w3m-account-button
            .disabled=${Boolean(this.disabled)}
            balance=${ifDefined(this.balance)}
            .charsStart=${ifDefined(this.charsStart)}
            .charsEnd=${ifDefined(this.charsEnd)}
          >
          </w3m-account-button>
        ` : html`
          <w3m-connect-button
            size=${ifDefined(this.size)}
            label=${ifDefined(this.label)}
            loadingLabel=${ifDefined(this.loadingLabel)}
          ></w3m-connect-button>
        `;
  }
};
W3mButton.styles = styles_default;
__decorate2([
  property({ type: Boolean })
], W3mButton.prototype, "disabled", void 0);
__decorate2([
  property()
], W3mButton.prototype, "balance", void 0);
__decorate2([
  property()
], W3mButton.prototype, "size", void 0);
__decorate2([
  property()
], W3mButton.prototype, "label", void 0);
__decorate2([
  property()
], W3mButton.prototype, "loadingLabel", void 0);
__decorate2([
  property()
], W3mButton.prototype, "charsStart", void 0);
__decorate2([
  property()
], W3mButton.prototype, "charsEnd", void 0);
__decorate2([
  state()
], W3mButton.prototype, "isAccount", void 0);
__decorate2([
  state()
], W3mButton.prototype, "isLoading", void 0);
W3mButton = __decorate2([
  customElement("w3m-button")
], W3mButton);

// node_modules/@web3modal/scaffold-ui/dist/esm/src/modal/w3m-connect-button/index.js
var __decorate3 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mConnectButton = class W3mConnectButton2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.size = "md";
    this.label = "Connect Wallet";
    this.loadingLabel = "Connecting...";
    this.open = ModalController.state.open;
    this.loading = ModalController.state.loading;
    this.unsubscribe.push(ModalController.subscribe((val) => {
      this.open = val.open;
      this.loading = val.loading;
    }));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    const isLoading = this.loading || this.open;
    return html`
      <wui-connect-button
        size=${ifDefined(this.size)}
        .loading=${isLoading}
        @click=${this.onClick.bind(this)}
        data-testid="connect-button"
      >
        ${isLoading ? this.loadingLabel : this.label}
      </wui-connect-button>
    `;
  }
  onClick() {
    if (this.open) {
      ModalController.close();
    } else if (!this.loading) {
      ModalController.open();
    }
  }
};
__decorate3([
  property()
], W3mConnectButton.prototype, "size", void 0);
__decorate3([
  property()
], W3mConnectButton.prototype, "label", void 0);
__decorate3([
  property()
], W3mConnectButton.prototype, "loadingLabel", void 0);
__decorate3([
  state()
], W3mConnectButton.prototype, "open", void 0);
__decorate3([
  state()
], W3mConnectButton.prototype, "loading", void 0);
W3mConnectButton = __decorate3([
  customElement("w3m-connect-button")
], W3mConnectButton);

// node_modules/@web3modal/scaffold-ui/dist/esm/src/modal/w3m-network-button/styles.js
var styles_default2 = css`
  :host {
    display: block;
    width: max-content;
  }
`;

// node_modules/@web3modal/scaffold-ui/dist/esm/src/modal/w3m-network-button/index.js
var __decorate4 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mNetworkButton = class W3mNetworkButton2 extends LitElement {
  constructor() {
    super(...arguments);
    this.unsubscribe = [];
    this.disabled = false;
    this.network = NetworkController.state.caipNetwork;
    this.connected = AccountController.state.isConnected;
    this.loading = ModalController.state.loading;
    this.isUnsupportedChain = NetworkController.state.isUnsupportedChain;
  }
  firstUpdated() {
    this.unsubscribe.push(...[
      NetworkController.subscribeKey("caipNetwork", (val) => this.network = val),
      AccountController.subscribeKey("isConnected", (val) => this.connected = val),
      ModalController.subscribeKey("loading", (val) => this.loading = val),
      NetworkController.subscribeKey("isUnsupportedChain", (val) => this.isUnsupportedChain = val)
    ]);
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    return html`
      <wui-network-button
        data-testid="w3m-network-button"
        .disabled=${Boolean(this.disabled || this.loading)}
        .isUnsupportedChain=${this.isUnsupportedChain}
        imageSrc=${ifDefined(AssetUtil.getNetworkImage(this.network))}
        @click=${this.onClick.bind(this)}
      >
        ${this.getLabel()}
        <slot></slot>
      </wui-network-button>
    `;
  }
  getLabel() {
    if (this.label) {
      return this.label;
    }
    if (this.isUnsupportedChain) {
      return "Switch Network";
    }
    if (this.network) {
      return this.network.name;
    }
    if (this.connected) {
      return "Unknown Network";
    }
    return "Select Network";
  }
  onClick() {
    if (!this.loading) {
      EventsController.sendEvent({ type: "track", event: "CLICK_NETWORKS" });
      ModalController.open({ view: "Networks" });
    }
  }
};
W3mNetworkButton.styles = styles_default2;
__decorate4([
  property({ type: Boolean })
], W3mNetworkButton.prototype, "disabled", void 0);
__decorate4([
  property({ type: String })
], W3mNetworkButton.prototype, "label", void 0);
__decorate4([
  state()
], W3mNetworkButton.prototype, "network", void 0);
__decorate4([
  state()
], W3mNetworkButton.prototype, "connected", void 0);
__decorate4([
  state()
], W3mNetworkButton.prototype, "loading", void 0);
__decorate4([
  state()
], W3mNetworkButton.prototype, "isUnsupportedChain", void 0);
W3mNetworkButton = __decorate4([
  customElement("w3m-network-button")
], W3mNetworkButton);

// node_modules/@web3modal/scaffold-ui/dist/esm/src/modal/w3m-router/styles.js
var styles_default3 = css`
  :host {
    display: block;
    will-change: transform, opacity;
  }
`;

// node_modules/@web3modal/scaffold-ui/dist/esm/src/modal/w3m-router/index.js
var __decorate5 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mRouter = class W3mRouter2 extends LitElement {
  constructor() {
    super();
    this.resizeObserver = void 0;
    this.prevHeight = "0px";
    this.prevHistoryLength = 1;
    this.unsubscribe = [];
    this.view = RouterController.state.view;
    this.unsubscribe.push(RouterController.subscribeKey("view", (val) => this.onViewChange(val)));
  }
  firstUpdated() {
    this.resizeObserver = new ResizeObserver(async ([content]) => {
      const height = `${content == null ? void 0 : content.contentRect.height}px`;
      if (this.prevHeight !== "0px") {
        await this.animate([{ height: this.prevHeight }, { height }], {
          duration: 150,
          easing: "ease",
          fill: "forwards"
        }).finished;
        this.style.height = "auto";
      }
      this.prevHeight = height;
    });
    this.resizeObserver.observe(this.getWrapper());
  }
  disconnectedCallback() {
    var _a2;
    (_a2 = this.resizeObserver) == null ? void 0 : _a2.unobserve(this.getWrapper());
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    return html`<div>${this.viewTemplate()}</div>`;
  }
  viewTemplate() {
    switch (this.view) {
      case "AccountSettings":
        return html`<w3m-account-settings-view></w3m-account-settings-view>`;
      case "Account":
        return html`<w3m-account-view></w3m-account-view>`;
      case "AllWallets":
        return html`<w3m-all-wallets-view></w3m-all-wallets-view>`;
      case "ApproveTransaction":
        return html`<w3m-approve-transaction-view></w3m-approve-transaction-view>`;
      case "BuyInProgress":
        return html`<w3m-buy-in-progress-view></w3m-buy-in-progress-view>`;
      case "ChooseAccountName":
        return html`<w3m-choose-account-name-view></w3m-choose-account-name-view>`;
      case "Connect":
        return html`<w3m-connect-view></w3m-connect-view>`;
      case "ConnectingWalletConnect":
        return html`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;
      case "ConnectingExternal":
        return html`<w3m-connecting-external-view></w3m-connecting-external-view>`;
      case "ConnectingSiwe":
        return html`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;
      case "ConnectWallets":
        return html`<w3m-connect-wallets-view></w3m-connect-wallets-view>`;
      case "ConnectSocials":
        return html`<w3m-connect-socials-view></w3m-connect-socials-view>`;
      case "ConnectingSocial":
        return html`<w3m-connecting-social-view></w3m-connecting-social-view>`;
      case "Downloads":
        return html`<w3m-downloads-view></w3m-downloads-view>`;
      case "EmailVerifyOtp":
        return html`<w3m-email-verify-otp-view></w3m-email-verify-otp-view>`;
      case "EmailVerifyDevice":
        return html`<w3m-email-verify-device-view></w3m-email-verify-device-view>`;
      case "GetWallet":
        return html`<w3m-get-wallet-view></w3m-get-wallet-view>`;
      case "Networks":
        return html`<w3m-networks-view></w3m-networks-view>`;
      case "SwitchNetwork":
        return html`<w3m-network-switch-view></w3m-network-switch-view>`;
      case "Profile":
        return html`<w3m-profile-view></w3m-profile-view>`;
      case "SelectAddresses":
        return html`<w3m-select-addresses-view></w3m-select-addresses-view>`;
      case "SwitchAddress":
        return html`<w3m-switch-address-view></w3m-switch-address-view>`;
      case "Transactions":
        return html`<w3m-transactions-view></w3m-transactions-view>`;
      case "OnRampProviders":
        return html`<w3m-onramp-providers-view></w3m-onramp-providers-view>`;
      case "OnRampActivity":
        return html`<w3m-onramp-activity-view></w3m-onramp-activity-view>`;
      case "OnRampTokenSelect":
        return html`<w3m-onramp-token-select-view></w3m-onramp-token-select-view>`;
      case "OnRampFiatSelect":
        return html`<w3m-onramp-fiat-select-view></w3m-onramp-fiat-select-view>`;
      case "UpgradeEmailWallet":
        return html`<w3m-upgrade-wallet-view></w3m-upgrade-wallet-view>`;
      case "UpgradeToSmartAccount":
        return html`<w3m-upgrade-to-smart-account-view></w3m-upgrade-to-smart-account-view>`;
      case "UpdateEmailWallet":
        return html`<w3m-update-email-wallet-view></w3m-update-email-wallet-view>`;
      case "UpdateEmailPrimaryOtp":
        return html`<w3m-update-email-primary-otp-view></w3m-update-email-primary-otp-view>`;
      case "UpdateEmailSecondaryOtp":
        return html`<w3m-update-email-secondary-otp-view></w3m-update-email-secondary-otp-view>`;
      case "UnsupportedChain":
        return html`<w3m-unsupported-chain-view></w3m-unsupported-chain-view>`;
      case "Swap":
        return html`<w3m-swap-view></w3m-swap-view>`;
      case "SwapSelectToken":
        return html`<w3m-swap-select-token-view></w3m-swap-select-token-view>`;
      case "SwapPreview":
        return html`<w3m-swap-preview-view></w3m-swap-preview-view>`;
      case "WalletSend":
        return html`<w3m-wallet-send-view></w3m-wallet-send-view>`;
      case "WalletSendSelectToken":
        return html`<w3m-wallet-send-select-token-view></w3m-wallet-send-select-token-view>`;
      case "WalletSendPreview":
        return html`<w3m-wallet-send-preview-view></w3m-wallet-send-preview-view>`;
      case "WhatIsABuy":
        return html`<w3m-what-is-a-buy-view></w3m-what-is-a-buy-view>`;
      case "WalletReceive":
        return html`<w3m-wallet-receive-view></w3m-wallet-receive-view>`;
      case "WalletCompatibleNetworks":
        return html`<w3m-wallet-compatible-networks-view></w3m-wallet-compatible-networks-view>`;
      case "WhatIsAWallet":
        return html`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;
      case "WhatIsANetwork":
        return html`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;
      default:
        return html`<w3m-connect-view></w3m-connect-view>`;
    }
  }
  async onViewChange(newView) {
    TooltipController.hide();
    const { history } = RouterController.state;
    let xOut = -10;
    let xIn = 10;
    if (history.length < this.prevHistoryLength) {
      xOut = 10;
      xIn = -10;
    }
    this.prevHistoryLength = history.length;
    await this.animate([
      { opacity: 1, transform: "translateX(0px)" },
      { opacity: 0, transform: `translateX(${xOut}px)` }
    ], { duration: 150, easing: "ease", fill: "forwards" }).finished;
    this.view = newView;
    await this.animate([
      { opacity: 0, transform: `translateX(${xIn}px)` },
      { opacity: 1, transform: "translateX(0px)" }
    ], { duration: 150, easing: "ease", fill: "forwards", delay: 50 }).finished;
  }
  getWrapper() {
    var _a2;
    return (_a2 = this.shadowRoot) == null ? void 0 : _a2.querySelector("div");
  }
};
W3mRouter.styles = styles_default3;
__decorate5([
  state()
], W3mRouter.prototype, "view", void 0);
W3mRouter = __decorate5([
  customElement("w3m-router")
], W3mRouter);

// node_modules/@web3modal/scaffold-ui/dist/esm/src/modal/w3m-onramp-widget/styles.js
var styles_default4 = css`
  :host > wui-flex {
    width: 100%;
    max-width: 360px;
  }

  :host > wui-flex > wui-flex {
    border-radius: var(--wui-border-radius-l);
    width: 100%;
  }

  .amounts-container {
    width: 100%;
  }
`;

// node_modules/@web3modal/scaffold-ui/dist/esm/src/modal/w3m-onramp-widget/index.js
var __decorate6 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var PAYMENT_CURRENCY_SYMBOLS = {
  USD: "$",
  EUR: "€",
  GBP: "£"
};
var BUY_PRESET_AMOUNTS = [100, 250, 500, 1e3];
var W3mOnrampWidget = class W3mOnrampWidget2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.disabled = false;
    this.connected = AccountController.state.isConnected;
    this.loading = ModalController.state.loading;
    this.paymentCurrency = OnRampController.state.paymentCurrency;
    this.paymentAmount = OnRampController.state.paymentAmount;
    this.purchaseAmount = OnRampController.state.purchaseAmount;
    this.quoteLoading = OnRampController.state.quotesLoading;
    this.unsubscribe.push(...[
      AccountController.subscribeKey("isConnected", (val) => {
        this.connected = val;
      }),
      ModalController.subscribeKey("loading", (val) => {
        this.loading = val;
      }),
      OnRampController.subscribe((val) => {
        this.paymentCurrency = val.paymentCurrency;
        this.paymentAmount = val.paymentAmount;
        this.purchaseAmount = val.purchaseAmount;
        this.quoteLoading = val.quotesLoading;
      })
    ]);
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    return html`
      <wui-flex flexDirection="column" justifyContent="center" alignItems="center">
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <w3m-onramp-input
            type="Fiat"
            @inputChange=${this.onPaymentAmountChange.bind(this)}
            .value=${this.paymentAmount || 0}
          ></w3m-onramp-input>
          <w3m-onramp-input
            type="Token"
            .value=${this.purchaseAmount || 0}
            .loading=${this.quoteLoading}
          ></w3m-onramp-input>
          <wui-flex justifyContent="space-evenly" class="amounts-container" gap="xs">
            ${BUY_PRESET_AMOUNTS.map((amount) => {
      var _a2;
      return html`<wui-button
                  variant=${this.paymentAmount === amount ? "accent" : "neutral"}
                  size="md"
                  textVariant="paragraph-600"
                  fullWidth
                  @click=${() => this.selectPresetAmount(amount)}
                  >${`${PAYMENT_CURRENCY_SYMBOLS[((_a2 = this.paymentCurrency) == null ? void 0 : _a2.id) || "USD"]} ${amount}`}</wui-button
                >`;
    })}
          </wui-flex>
          ${this.templateButton()}
        </wui-flex>
      </wui-flex>
    `;
  }
  templateButton() {
    return this.connected ? html`<wui-button
          @click=${this.getQuotes.bind(this)}
          variant="main"
          fullWidth
          size="lg"
          borderRadius="xs"
        >
          Get quotes
        </wui-button>` : html`<wui-button
          @click=${this.openModal.bind(this)}
          variant="accent"
          fullWidth
          size="lg"
          borderRadius="xs"
        >
          Connect wallet
        </wui-button>`;
  }
  getQuotes() {
    if (!this.loading) {
      ModalController.open({ view: "OnRampProviders" });
    }
  }
  openModal() {
    ModalController.open({ view: "Connect" });
  }
  async onPaymentAmountChange(event) {
    OnRampController.setPaymentAmount(Number(event.detail));
    await OnRampController.getQuote();
  }
  async selectPresetAmount(amount) {
    OnRampController.setPaymentAmount(amount);
    await OnRampController.getQuote();
  }
};
W3mOnrampWidget.styles = styles_default4;
__decorate6([
  property({ type: Boolean })
], W3mOnrampWidget.prototype, "disabled", void 0);
__decorate6([
  state()
], W3mOnrampWidget.prototype, "connected", void 0);
__decorate6([
  state()
], W3mOnrampWidget.prototype, "loading", void 0);
__decorate6([
  state()
], W3mOnrampWidget.prototype, "paymentCurrency", void 0);
__decorate6([
  state()
], W3mOnrampWidget.prototype, "paymentAmount", void 0);
__decorate6([
  state()
], W3mOnrampWidget.prototype, "purchaseAmount", void 0);
__decorate6([
  state()
], W3mOnrampWidget.prototype, "quoteLoading", void 0);
W3mOnrampWidget = __decorate6([
  customElement("w3m-onramp-widget")
], W3mOnrampWidget);

// node_modules/@web3modal/scaffold-ui/dist/esm/src/views/w3m-account-settings-view/index.js
var __decorate7 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mAccountSettingsView = class W3mAccountSettingsView2 extends LitElement {
  constructor() {
    super();
    this.usubscribe = [];
    this.networkImages = AssetController.state.networkImages;
    this.address = AccountController.state.address;
    this.profileImage = AccountController.state.profileImage;
    this.profileName = AccountController.state.profileName;
    this.network = NetworkController.state.caipNetwork;
    this.preferredAccountType = AccountController.state.preferredAccountType;
    this.disconnecting = false;
    this.loading = false;
    this.switched = false;
    this.text = "";
    this.usubscribe.push(...[
      AccountController.subscribe((val) => {
        if (val.address) {
          this.address = val.address;
          this.profileImage = val.profileImage;
          this.profileName = val.profileName;
          this.preferredAccountType = val.preferredAccountType;
        } else {
          ModalController.close();
        }
      }),
      AccountController.subscribeKey("preferredAccountType", (val) => this.preferredAccountType = val),
      NetworkController.subscribeKey("caipNetwork", (val) => {
        if (val == null ? void 0 : val.id) {
          this.network = val;
        }
      })
    ]);
  }
  disconnectedCallback() {
    this.usubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    var _a2, _b2, _c;
    if (!this.address) {
      throw new Error("w3m-account-settings-view: No account provided");
    }
    const networkImage = this.networkImages[((_a2 = this.network) == null ? void 0 : _a2.imageId) ?? ""];
    const name = (_b2 = this.profileName) == null ? void 0 : _b2.split(".")[0];
    return html`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="l"
        .padding=${["0", "xl", "m", "xl"]}
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${ifDefined(this.profileImage)}
          size="2lg"
        ></wui-avatar>
        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="3xs" alignItems="center" justifyContent="center">
            <wui-text variant="title-6-600" color="fg-100" data-testid="account-settings-address">
              ${name ? UiHelperUtil.getTruncateString({
      string: name,
      charsStart: 20,
      charsEnd: 0,
      truncate: "end"
    }) : UiHelperUtil.getTruncateString({
      string: this.address,
      charsStart: 4,
      charsEnd: 6,
      truncate: "middle"
    })}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="fg-200"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
      <wui-flex flexDirection="column" gap="m">
        <wui-flex flexDirection="column" gap="xs" .padding=${["0", "l", "m", "l"]}>
          ${this.authCardTemplate()}
          <w3m-account-auth-button></w3m-account-auth-button>
          <wui-list-item
            .variant=${networkImage ? "image" : "icon"}
            iconVariant="overlay"
            icon="networkPlaceholder"
            imageSrc=${ifDefined(networkImage)}
            ?chevron=${this.isAllowedNetworkSwitch()}
            @click=${this.onNetworks.bind(this)}
            data-testid="account-switch-network-button"
          >
            <wui-text variant="paragraph-500" color="fg-100">
              ${((_c = this.network) == null ? void 0 : _c.name) ?? "Unknown"}
            </wui-text>
          </wui-list-item>
          ${this.togglePreferredAccountBtnTemplate()} ${this.chooseNameButtonTemplate()}
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="disconnect"
            ?chevron=${false}
            .loading=${this.disconnecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `;
  }
  chooseNameButtonTemplate() {
    const type = StorageUtil.getConnectedConnector();
    const authConnector = ConnectorController.getAuthConnector();
    if (!authConnector || type !== "AUTH" || this.profileName) {
      return null;
    }
    return html`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="id"
        iconSize="sm"
        ?chevron=${true}
        @click=${this.onChooseName.bind(this)}
        data-testid="account-choose-name-button"
      >
        <wui-text variant="paragraph-500" color="fg-100">Choose account name </wui-text>
      </wui-list-item>
    `;
  }
  authCardTemplate() {
    const type = StorageUtil.getConnectedConnector();
    const authConnector = ConnectorController.getAuthConnector();
    const { origin } = location;
    if (!authConnector || type !== "AUTH" || origin.includes(ConstantsUtil2.SECURE_SITE)) {
      return null;
    }
    return html`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `;
  }
  isAllowedNetworkSwitch() {
    const requestedCaipNetworks = NetworkController.getRequestedCaipNetworks();
    const isMultiNetwork = requestedCaipNetworks ? requestedCaipNetworks.length > 1 : false;
    const isValidNetwork = requestedCaipNetworks == null ? void 0 : requestedCaipNetworks.find(({ id }) => {
      var _a2;
      return id === ((_a2 = this.network) == null ? void 0 : _a2.id);
    });
    return isMultiNetwork || !isValidNetwork;
  }
  onCopyAddress() {
    try {
      if (this.profileName) {
        CoreHelperUtil.copyToClopboard(this.profileName);
        SnackController.showSuccess("Name copied");
      } else if (this.address) {
        CoreHelperUtil.copyToClopboard(this.address);
        SnackController.showSuccess("Address copied");
      }
    } catch {
      SnackController.showError("Failed to copy");
    }
  }
  togglePreferredAccountBtnTemplate() {
    const networkEnabled = NetworkController.checkIfSmartAccountEnabled();
    const type = StorageUtil.getConnectedConnector();
    const authConnector = ConnectorController.getAuthConnector();
    if (!authConnector || type !== "AUTH" || !networkEnabled) {
      return null;
    }
    if (!this.switched) {
      this.text = this.preferredAccountType === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT ? "Switch to your EOA" : "Switch to your smart account";
    }
    return html`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="swapHorizontalBold"
        iconSize="sm"
        ?chevron=${true}
        ?loading=${this.loading}
        @click=${this.changePreferredAccountType.bind(this)}
        data-testid="account-toggle-preferred-account-type"
      >
        <wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text>
      </wui-list-item>
    `;
  }
  onChooseName() {
    RouterController.push("ChooseAccountName");
  }
  async changePreferredAccountType() {
    const smartAccountEnabled = NetworkController.checkIfSmartAccountEnabled();
    const accountTypeTarget = this.preferredAccountType === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT || !smartAccountEnabled ? W3mFrameRpcConstants.ACCOUNT_TYPES.EOA : W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT;
    const authConnector = ConnectorController.getAuthConnector();
    if (!authConnector) {
      return;
    }
    this.loading = true;
    await ConnectionController.setPreferredAccountType(accountTypeTarget);
    this.text = accountTypeTarget === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT ? "Switch to your EOA" : "Switch to your smart account";
    this.switched = true;
    SendController.resetSend();
    this.loading = false;
    this.requestUpdate();
  }
  onNetworks() {
    if (this.isAllowedNetworkSwitch()) {
      RouterController.push("Networks");
    }
  }
  async onDisconnect() {
    try {
      this.disconnecting = true;
      await ConnectionController.disconnect();
      EventsController.sendEvent({ type: "track", event: "DISCONNECT_SUCCESS" });
      ModalController.close();
    } catch {
      EventsController.sendEvent({ type: "track", event: "DISCONNECT_ERROR" });
      SnackController.showError("Failed to disconnect");
    } finally {
      this.disconnecting = false;
    }
  }
  onGoToUpgradeView() {
    EventsController.sendEvent({ type: "track", event: "EMAIL_UPGRADE_FROM_MODAL" });
    RouterController.push("UpgradeEmailWallet");
  }
};
__decorate7([
  state()
], W3mAccountSettingsView.prototype, "address", void 0);
__decorate7([
  state()
], W3mAccountSettingsView.prototype, "profileImage", void 0);
__decorate7([
  state()
], W3mAccountSettingsView.prototype, "profileName", void 0);
__decorate7([
  state()
], W3mAccountSettingsView.prototype, "network", void 0);
__decorate7([
  state()
], W3mAccountSettingsView.prototype, "preferredAccountType", void 0);
__decorate7([
  state()
], W3mAccountSettingsView.prototype, "disconnecting", void 0);
__decorate7([
  state()
], W3mAccountSettingsView.prototype, "loading", void 0);
__decorate7([
  state()
], W3mAccountSettingsView.prototype, "switched", void 0);
__decorate7([
  state()
], W3mAccountSettingsView.prototype, "text", void 0);
W3mAccountSettingsView = __decorate7([
  customElement("w3m-account-settings-view")
], W3mAccountSettingsView);

// node_modules/@web3modal/scaffold-ui/dist/esm/src/views/w3m-account-view/index.js
var __decorate8 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mAccountView = class W3mAccountView2 extends LitElement {
  render() {
    const type = StorageUtil.getConnectedConnector();
    const authConnector = ConnectorController.getAuthConnector();
    return html`
      ${(authConnector == null ? void 0 : authConnector.walletFeatures) && type === "AUTH" ? this.walletFeaturesTemplate() : this.defaultTemplate()}
    `;
  }
  walletFeaturesTemplate() {
    return html`<w3m-account-wallet-features-widget></w3m-account-wallet-features-widget>`;
  }
  defaultTemplate() {
    return html`<w3m-account-default-widget></w3m-account-default-widget>`;
  }
};
W3mAccountView = __decorate8([
  customElement("w3m-account-view")
], W3mAccountView);

// node_modules/@web3modal/scaffold-ui/dist/esm/src/views/w3m-all-wallets-view/index.js
var __decorate9 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mAllWalletsView = class W3mAllWalletsView2 extends LitElement {
  constructor() {
    super(...arguments);
    this.search = "";
    this.onDebouncedSearch = CoreHelperUtil.debounce((value) => {
      this.search = value;
    });
  }
  render() {
    const isSearch = this.search.length >= 2;
    return html`
      <wui-flex .padding=${["0", "s", "s", "s"]} gap="s">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${isSearch ? html`<w3m-all-wallets-search query=${this.search}></w3m-all-wallets-search>` : html`<w3m-all-wallets-list></w3m-all-wallets-list>`}
    `;
  }
  onInputChange(event) {
    this.onDebouncedSearch(event.detail);
  }
  qrButtonTemplate() {
    if (CoreHelperUtil.isMobile()) {
      return html`
        <wui-icon-box
          size="lg"
          iconSize="xl"
          iconColor="accent-100"
          backgroundColor="accent-100"
          icon="qrCode"
          background="transparent"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `;
    }
    return null;
  }
  onWalletConnectQr() {
    RouterController.push("ConnectingWalletConnect");
  }
};
__decorate9([
  state()
], W3mAllWalletsView.prototype, "search", void 0);
W3mAllWalletsView = __decorate9([
  customElement("w3m-all-wallets-view")
], W3mAllWalletsView);

// node_modules/@web3modal/scaffold-ui/dist/esm/src/views/w3m-buy-in-progress-view/styles.js
var styles_default5 = css`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-visual {
    width: var(--wui-wallet-image-size-lg);
    height: var(--wui-wallet-image-size-lg);
    border-radius: calc(var(--wui-border-radius-5xs) * 9 - var(--wui-border-radius-xxs));
    position: relative;
    overflow: hidden;
  }

  wui-visual::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-border-radius-5xs) * 9 - var(--wui-border-radius-xxs));
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition:
      opacity var(--wui-ease-out-power-2) var(--wui-duration-lg),
      transform var(--wui-ease-out-power-2) var(--wui-duration-lg);
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  wui-link {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
  }
`;

// node_modules/@web3modal/scaffold-ui/dist/esm/src/views/w3m-buy-in-progress-view/index.js
var __decorate10 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mBuyInProgressView = class W3mBuyInProgressView2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.selectedOnRampProvider = OnRampController.state.selectedProvider;
    this.uri = ConnectionController.state.wcUri;
    this.ready = false;
    this.showRetry = false;
    this.buffering = false;
    this.error = false;
    this.startTime = null;
    this.isMobile = false;
    this.onRetry = void 0;
    this.unsubscribe.push(...[
      OnRampController.subscribeKey("selectedProvider", (val) => {
        this.selectedOnRampProvider = val;
      })
    ]);
    this.watchTransactions();
  }
  disconnectedCallback() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
  render() {
    var _a2, _b2;
    let label = "Continue in external window";
    if (this.error) {
      label = "Buy failed";
    } else if (this.selectedOnRampProvider) {
      label = `Buy in ${(_a2 = this.selectedOnRampProvider) == null ? void 0 : _a2.label}`;
    }
    const subLabel = this.error ? "Buy can be declined from your side or due to and error on the provider app" : `We’ll notify you once your Buy is processed`;
    return html`
      <wui-flex
        data-error=${ifDefined(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl", "xl", "xl", "xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-visual
            name=${ifDefined((_b2 = this.selectedOnRampProvider) == null ? void 0 : _b2.name)}
            size="lg"
            class="provider-image"
          >
          </wui-visual>

          ${this.error ? null : this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error ? "error-100" : "fg-100"}>
            ${label}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${subLabel}</wui-text>
        </wui-flex>

        ${this.error ? this.tryAgainTemplate() : null}
      </wui-flex>

      <wui-flex .padding=${["0", "xl", "xl", "xl"]} justifyContent="center">
        <wui-link @click=${this.onCopyUri} color="fg-200">
          <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
          Copy link
        </wui-link>
      </wui-flex>
    `;
  }
  watchTransactions() {
    if (!this.selectedOnRampProvider) {
      return;
    }
    switch (this.selectedOnRampProvider.name) {
      case "coinbase":
        this.startTime = Date.now();
        this.initializeCoinbaseTransactions();
        break;
      default:
        break;
    }
  }
  async initializeCoinbaseTransactions() {
    await this.watchCoinbaseTransactions();
    this.intervalId = setInterval(() => this.watchCoinbaseTransactions(), 4e3);
  }
  async watchCoinbaseTransactions() {
    try {
      const address = AccountController.state.address;
      const projectId = OptionsController.state.projectId;
      if (!address) {
        throw new Error("No address found");
      }
      const coinbaseResponse = await BlockchainApiController.fetchTransactions({
        account: address,
        onramp: "coinbase",
        projectId
      });
      const newTransactions = coinbaseResponse.data.filter((tx) => new Date(tx.metadata.minedAt) > new Date(this.startTime) || tx.metadata.status === "ONRAMP_TRANSACTION_STATUS_IN_PROGRESS");
      if (newTransactions.length) {
        clearInterval(this.intervalId);
        RouterController.replace("OnRampActivity");
      } else if (this.startTime && Date.now() - this.startTime >= 18e4) {
        clearInterval(this.intervalId);
        this.error = true;
      }
    } catch (error) {
      SnackController.showError(error);
    }
  }
  onTryAgain() {
    if (!this.selectedOnRampProvider) {
      return;
    }
    this.error = false;
    CoreHelperUtil.openHref(this.selectedOnRampProvider.url, "popupWindow", "width=600,height=800,scrollbars=yes");
  }
  tryAgainTemplate() {
    var _a2;
    if (!((_a2 = this.selectedOnRampProvider) == null ? void 0 : _a2.url)) {
      return null;
    }
    return html`<wui-button size="md" variant="accent" @click=${this.onTryAgain.bind(this)}>
      <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
      Try again
    </wui-button>`;
  }
  loaderTemplate() {
    const borderRadiusMaster = ThemeController.state.themeVariables["--w3m-border-radius-master"];
    const radius = borderRadiusMaster ? parseInt(borderRadiusMaster.replace("px", ""), 10) : 4;
    return html`<wui-loading-thumbnail radius=${radius * 9}></wui-loading-thumbnail>`;
  }
  onCopyUri() {
    var _a2;
    if (!((_a2 = this.selectedOnRampProvider) == null ? void 0 : _a2.url)) {
      SnackController.showError("No link found");
      RouterController.goBack();
      return;
    }
    try {
      CoreHelperUtil.copyToClopboard(this.selectedOnRampProvider.url);
      SnackController.showSuccess("Link copied");
    } catch {
      SnackController.showError("Failed to copy");
    }
  }
};
W3mBuyInProgressView.styles = styles_default5;
__decorate10([
  state()
], W3mBuyInProgressView.prototype, "intervalId", void 0);
__decorate10([
  state()
], W3mBuyInProgressView.prototype, "selectedOnRampProvider", void 0);
__decorate10([
  state()
], W3mBuyInProgressView.prototype, "uri", void 0);
__decorate10([
  state()
], W3mBuyInProgressView.prototype, "ready", void 0);
__decorate10([
  state()
], W3mBuyInProgressView.prototype, "showRetry", void 0);
__decorate10([
  state()
], W3mBuyInProgressView.prototype, "buffering", void 0);
__decorate10([
  state()
], W3mBuyInProgressView.prototype, "error", void 0);
__decorate10([
  state()
], W3mBuyInProgressView.prototype, "startTime", void 0);
__decorate10([
  property({ type: Boolean })
], W3mBuyInProgressView.prototype, "isMobile", void 0);
__decorate10([
  property()
], W3mBuyInProgressView.prototype, "onRetry", void 0);
W3mBuyInProgressView = __decorate10([
  customElement("w3m-buy-in-progress-view")
], W3mBuyInProgressView);

// node_modules/@web3modal/scaffold-ui/dist/esm/src/views/w3m-connect-view/styles.js
var styles_default6 = css`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    scrollbar-width: none;
    overflow-y: scroll;
    overflow-x: hidden;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }

  .all-wallets {
    flex-flow: column;
  }
`;

// node_modules/@web3modal/scaffold-ui/dist/esm/src/views/w3m-connect-view/index.js
var __decorate11 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mConnectView = class W3mConnectView2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.connectors = ConnectorController.state.connectors;
    this.unsubscribe.push(ConnectorController.subscribeKey("connectors", (val) => this.connectors = val));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    return html`
      <wui-flex flexDirection="column" .padding=${["3xs", "s", "s", "s"]}>
        <w3m-email-login-widget></w3m-email-login-widget>
        <w3m-social-login-widget></w3m-social-login-widget>
        ${this.walletListTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `;
  }
  walletListTemplate() {
    const authConnector = this.connectors.find((c) => c.type === "AUTH");
    if (authConnector == null ? void 0 : authConnector.socials) {
      if (authConnector == null ? void 0 : authConnector.showWallets) {
        return html`
          <wui-flex flexDirection="column" gap="xs" .margin=${["xs", "0", "0", "0"]}>
            <w3m-connector-list></w3m-connector-list>
            <wui-flex class="all-wallets" .margin=${["xs", "0", "0", "0"]}>
              <w3m-all-wallets-widget></w3m-all-wallets-widget>
            </wui-flex>
          </wui-flex>
        `;
      }
      return html` <wui-list-button
        @click=${this.onContinueWalletClick.bind(this)}
        text="Continue with a wallet"
      ></wui-list-button>`;
    }
    return html`<w3m-wallet-login-list></w3m-wallet-login-list>`;
  }
  onContinueWalletClick() {
    RouterController.push("ConnectWallets");
  }
};
W3mConnectView.styles = styles_default6;
__decorate11([
  state()
], W3mConnectView.prototype, "connectors", void 0);
W3mConnectView = __decorate11([
  customElement("w3m-connect-view")
], W3mConnectView);

// node_modules/@web3modal/scaffold-ui/dist/esm/src/utils/w3m-connecting-widget/styles.js
var styles_default7 = css`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition-property: opacity, transform;
    transition-duration: var(--wui-duration-lg);
    transition-timing-function: var(--wui-ease-out-power-2);
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }
`;

// node_modules/@web3modal/scaffold-ui/dist/esm/src/utils/w3m-connecting-widget/index.js
var __decorate12 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mConnectingWidget = class extends LitElement {
  constructor() {
    var _a2, _b2, _c, _d;
    super();
    this.wallet = (_a2 = RouterController.state.data) == null ? void 0 : _a2.wallet;
    this.connector = (_b2 = RouterController.state.data) == null ? void 0 : _b2.connector;
    this.timeout = void 0;
    this.secondaryBtnLabel = "Try again";
    this.secondaryBtnIcon = "refresh";
    this.secondaryLabel = "Accept connection request in the wallet";
    this.onConnect = void 0;
    this.onRender = void 0;
    this.onAutoConnect = void 0;
    this.isWalletConnect = true;
    this.unsubscribe = [];
    this.imageSrc = AssetUtil.getWalletImage(this.wallet) ?? AssetUtil.getConnectorImage(this.connector);
    this.name = ((_c = this.wallet) == null ? void 0 : _c.name) ?? ((_d = this.connector) == null ? void 0 : _d.name) ?? "Wallet";
    this.isRetrying = false;
    this.uri = ConnectionController.state.wcUri;
    this.error = ConnectionController.state.wcError;
    this.ready = false;
    this.showRetry = false;
    this.buffering = false;
    this.isMobile = false;
    this.onRetry = void 0;
    this.unsubscribe.push(...[
      ConnectionController.subscribeKey("wcUri", (val) => {
        var _a3;
        this.uri = val;
        if (this.isRetrying && this.onRetry) {
          this.isRetrying = false;
          (_a3 = this.onConnect) == null ? void 0 : _a3.call(this);
        }
      }),
      ConnectionController.subscribeKey("wcError", (val) => this.error = val),
      ConnectionController.subscribeKey("buffering", (val) => this.buffering = val)
    ]);
  }
  firstUpdated() {
    var _a2;
    (_a2 = this.onAutoConnect) == null ? void 0 : _a2.call(this);
    this.showRetry = !this.onAutoConnect;
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
    clearTimeout(this.timeout);
  }
  render() {
    var _a2;
    (_a2 = this.onRender) == null ? void 0 : _a2.call(this);
    this.onShowRetry();
    const subLabel = this.error ? "Connection can be declined if a previous request is still active" : this.secondaryLabel;
    let label = `Continue in ${this.name}`;
    if (this.buffering) {
      label = "Connecting...";
    }
    if (this.error) {
      label = "Connection declined";
    }
    return html`
      <wui-flex
        data-error=${ifDefined(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl", "xl", "xl", "xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${ifDefined(this.imageSrc)}></wui-wallet-image>

          ${this.error ? null : this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error ? "error-100" : "fg-100"}>
            ${label}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${subLabel}</wui-text>
        </wui-flex>

        <wui-button
          variant="accent"
          size="md"
          ?disabled=${!this.error && this.buffering}
          @click=${this.onTryAgain.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
          ${this.secondaryBtnLabel}
        </wui-button>
      </wui-flex>

      ${this.isWalletConnect ? html`
            <wui-flex .padding=${["0", "xl", "xl", "xl"]} justifyContent="center">
              <wui-link @click=${this.onCopyUri} color="fg-200">
                <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
                Copy link
              </wui-link>
            </wui-flex>
          ` : null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `;
  }
  onShowRetry() {
    var _a2;
    if (this.error && !this.showRetry) {
      this.showRetry = true;
      const retryButton = (_a2 = this.shadowRoot) == null ? void 0 : _a2.querySelector("wui-button");
      retryButton == null ? void 0 : retryButton.animate([{ opacity: 0 }, { opacity: 1 }], {
        fill: "forwards",
        easing: "ease"
      });
    }
  }
  onTryAgain() {
    var _a2, _b2;
    if (!this.buffering) {
      ConnectionController.setWcError(false);
      if (this.onRetry) {
        this.isRetrying = true;
        (_a2 = this.onRetry) == null ? void 0 : _a2.call(this);
      } else {
        (_b2 = this.onConnect) == null ? void 0 : _b2.call(this);
      }
    }
  }
  loaderTemplate() {
    const borderRadiusMaster = ThemeController.state.themeVariables["--w3m-border-radius-master"];
    const radius = borderRadiusMaster ? parseInt(borderRadiusMaster.replace("px", ""), 10) : 4;
    return html`<wui-loading-thumbnail radius=${radius * 9}></wui-loading-thumbnail>`;
  }
  onCopyUri() {
    try {
      if (this.uri) {
        CoreHelperUtil.copyToClopboard(this.uri);
        SnackController.showSuccess("Link copied");
      }
    } catch {
      SnackController.showError("Failed to copy");
    }
  }
};
W3mConnectingWidget.styles = styles_default7;
__decorate12([
  state()
], W3mConnectingWidget.prototype, "uri", void 0);
__decorate12([
  state()
], W3mConnectingWidget.prototype, "error", void 0);
__decorate12([
  state()
], W3mConnectingWidget.prototype, "ready", void 0);
__decorate12([
  state()
], W3mConnectingWidget.prototype, "showRetry", void 0);
__decorate12([
  state()
], W3mConnectingWidget.prototype, "buffering", void 0);
__decorate12([
  property({ type: Boolean })
], W3mConnectingWidget.prototype, "isMobile", void 0);
__decorate12([
  property()
], W3mConnectingWidget.prototype, "onRetry", void 0);

// node_modules/@web3modal/scaffold-ui/dist/esm/src/views/w3m-connecting-external-view/index.js
var __decorate13 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mConnectingExternalView = class W3mConnectingExternalView2 extends W3mConnectingWidget {
  constructor() {
    super();
    if (!this.connector) {
      throw new Error("w3m-connecting-view: No connector provided");
    }
    EventsController.sendEvent({
      type: "track",
      event: "SELECT_WALLET",
      properties: {
        name: this.connector.name ?? "Unknown",
        platform: "browser"
      }
    });
    this.onConnect = this.onConnectProxy.bind(this);
    this.onAutoConnect = this.onConnectProxy.bind(this);
    this.isWalletConnect = false;
  }
  async onConnectProxy() {
    try {
      this.error = false;
      if (this.connector) {
        if (this.connector.imageUrl) {
          StorageUtil.setConnectedWalletImageUrl(this.connector.imageUrl);
        }
        if (this.connector.id !== ConstantsUtil3.COINBASE_SDK_CONNECTOR_ID || !this.error) {
          await ConnectionController.connectExternal(this.connector);
          if (OptionsController.state.isSiweEnabled) {
            RouterController.push("ConnectingSiwe");
          } else {
            ModalController.close();
          }
          EventsController.sendEvent({
            type: "track",
            event: "CONNECT_SUCCESS",
            properties: { method: "browser", name: this.connector.name || "Unknown" }
          });
        }
      }
    } catch (error) {
      EventsController.sendEvent({
        type: "track",
        event: "CONNECT_ERROR",
        properties: { message: (error == null ? void 0 : error.message) ?? "Unknown" }
      });
      this.error = true;
    }
  }
};
W3mConnectingExternalView = __decorate13([
  customElement("w3m-connecting-external-view")
], W3mConnectingExternalView);

// node_modules/@web3modal/scaffold-ui/dist/esm/src/views/w3m-connecting-wc-view/index.js
var __decorate14 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mConnectingWcView = class W3mConnectingWcView2 extends LitElement {
  constructor() {
    var _a2;
    super();
    this.interval = void 0;
    this.lastRetry = Date.now();
    this.wallet = (_a2 = RouterController.state.data) == null ? void 0 : _a2.wallet;
    this.platform = void 0;
    this.platforms = [];
    this.initializeConnection();
    this.interval = setInterval(this.initializeConnection.bind(this), ConstantsUtil2.TEN_SEC_MS);
  }
  disconnectedCallback() {
    clearTimeout(this.interval);
  }
  render() {
    if (!this.wallet) {
      return html`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;
    }
    this.determinePlatforms();
    return html`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
    `;
  }
  async initializeConnection(retry = false) {
    try {
      const { wcPairingExpiry } = ConnectionController.state;
      if (retry || CoreHelperUtil.isPairingExpired(wcPairingExpiry)) {
        if (this.wallet) {
          const url = AssetUtil.getWalletImage(this.wallet);
          if (url) {
            StorageUtil.setConnectedWalletImageUrl(url);
          }
        } else {
          const connectors = ConnectorController.state.connectors;
          const connector = connectors.find((c) => c.type === "WALLET_CONNECT");
          const url = AssetUtil.getConnectorImage(connector);
          if (url) {
            StorageUtil.setConnectedWalletImageUrl(url);
          }
        }
        await ConnectionController.connectWalletConnect();
        this.finalizeConnection();
        if (StorageUtil.getConnectedConnector() === "AUTH" && OptionsController.state.hasMultipleAddresses) {
          RouterController.push("SelectAddresses");
        } else if (OptionsController.state.isSiweEnabled) {
          const { SIWEController } = await import("./exports-VVXRRPWP.js");
          if (SIWEController.state.status === "success") {
            ModalController.close();
          } else {
            RouterController.push("ConnectingSiwe");
          }
        } else {
          ModalController.close();
        }
      }
    } catch (error) {
      EventsController.sendEvent({
        type: "track",
        event: "CONNECT_ERROR",
        properties: { message: (error == null ? void 0 : error.message) ?? "Unknown" }
      });
      ConnectionController.setWcError(true);
      if (CoreHelperUtil.isAllowedRetry(this.lastRetry)) {
        SnackController.showError("Declined");
        this.lastRetry = Date.now();
        this.initializeConnection(true);
      }
    }
  }
  finalizeConnection() {
    var _a2;
    const { wcLinking, recentWallet } = ConnectionController.state;
    if (wcLinking) {
      StorageUtil.setWalletConnectDeepLink(wcLinking);
    }
    if (recentWallet) {
      StorageUtil.setWeb3ModalRecent(recentWallet);
    }
    EventsController.sendEvent({
      type: "track",
      event: "CONNECT_SUCCESS",
      properties: {
        method: wcLinking ? "mobile" : "qrcode",
        name: ((_a2 = this.wallet) == null ? void 0 : _a2.name) || "Unknown"
      }
    });
  }
  determinePlatforms() {
    if (!this.wallet) {
      throw new Error("w3m-connecting-wc-view:determinePlatforms No wallet");
    }
    if (this.platform) {
      return;
    }
    const { mobile_link, desktop_link, webapp_link, injected, rdns } = this.wallet;
    const injectedIds = injected == null ? void 0 : injected.map(({ injected_id }) => injected_id).filter(Boolean);
    const browserIds = rdns ? [rdns] : injectedIds ?? [];
    const isBrowser = OptionsController.state.isUniversalProvider ? false : browserIds.length;
    const isMobileWc = mobile_link;
    const isWebWc = webapp_link;
    const isBrowserInstalled = ConnectionController.checkInstalled(browserIds);
    const isBrowserWc = isBrowser && isBrowserInstalled;
    const isDesktopWc = desktop_link && !CoreHelperUtil.isMobile();
    if (isBrowserWc) {
      this.platforms.push("browser");
    }
    if (isMobileWc) {
      this.platforms.push(CoreHelperUtil.isMobile() ? "mobile" : "qrcode");
    }
    if (isWebWc) {
      this.platforms.push("web");
    }
    if (isDesktopWc) {
      this.platforms.push("desktop");
    }
    if (!isBrowserWc && isBrowser) {
      this.platforms.push("unsupported");
    }
    this.platform = this.platforms[0];
  }
  platformTemplate() {
    switch (this.platform) {
      case "browser":
        return html`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;
      case "desktop":
        return html`
          <w3m-connecting-wc-desktop .onRetry=${() => this.initializeConnection(true)}>
          </w3m-connecting-wc-desktop>
        `;
      case "web":
        return html`
          <w3m-connecting-wc-web .onRetry=${() => this.initializeConnection(true)}>
          </w3m-connecting-wc-web>
        `;
      case "mobile":
        return html`
          <w3m-connecting-wc-mobile isMobile .onRetry=${() => this.initializeConnection(true)}>
          </w3m-connecting-wc-mobile>
        `;
      case "qrcode":
        return html`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;
      default:
        return html`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`;
    }
  }
  headerTemplate() {
    const multiPlatform = this.platforms.length > 1;
    if (!multiPlatform) {
      return null;
    }
    return html`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `;
  }
  async onSelectPlatform(platform) {
    var _a2;
    const container = (_a2 = this.shadowRoot) == null ? void 0 : _a2.querySelector("div");
    if (container) {
      await container.animate([{ opacity: 1 }, { opacity: 0 }], {
        duration: 200,
        fill: "forwards",
        easing: "ease"
      }).finished;
      this.platform = platform;
      container.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: 200,
        fill: "forwards",
        easing: "ease"
      });
    }
  }
};
__decorate14([
  state()
], W3mConnectingWcView.prototype, "platform", void 0);
__decorate14([
  state()
], W3mConnectingWcView.prototype, "platforms", void 0);
W3mConnectingWcView = __decorate14([
  customElement("w3m-connecting-wc-view")
], W3mConnectingWcView);

// node_modules/@web3modal/scaffold-ui/dist/esm/src/views/w3m-choose-account-name-view/styles.js
var styles_default8 = css`
  .continue-button-container {
    width: 100%;
  }
`;

// node_modules/@web3modal/scaffold-ui/dist/esm/src/views/w3m-choose-account-name-view/index.js
var __decorate15 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mChooseAccountNameView = class W3mChooseAccountNameView2 extends LitElement {
  constructor() {
    super(...arguments);
    this.loading = false;
  }
  render() {
    return html`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="xxl"
        .padding=${["0", "0", "l", "0"]}
      >
        ${this.onboardingTemplate()} ${this.buttonsTemplate()}
        <wui-link
          @click=${() => {
      CoreHelperUtil.openHref(NavigationUtil.URLS.FAQ, "_blank");
    }}
        >
          Learn more about names
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-link>
      </wui-flex>
    `;
  }
  onboardingTemplate() {
    return html` <wui-flex
      flexDirection="column"
      gap="xxl"
      alignItems="center"
      .padding=${["0", "xxl", "0", "xxl"]}
    >
      <wui-flex gap="s" alignItems="center" justifyContent="center">
        <wui-icon-box
          icon="id"
          size="xl"
          iconSize="xxl"
          iconColor="fg-200"
          backgroundColor="fg-200"
        ></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="s">
        <wui-text align="center" variant="medium-600" color="fg-100">
          Choose your account name
        </wui-text>
        <wui-text align="center" variant="paragraph-400" color="fg-100">
          Finally say goodbye to 0x addresses, name your account to make it easier to exchange
          assets
        </wui-text>
      </wui-flex>
    </wui-flex>`;
  }
  buttonsTemplate() {
    return html`<wui-flex
      .padding=${["0", "2l", "0", "2l"]}
      gap="s"
      class="continue-button-container"
    >
      <wui-button
        fullWidth
        .loading=${this.loading}
        size="lg"
        borderRadius="xs"
        @click=${this.handleContinue.bind(this)}
        >Choose name
      </wui-button>
    </wui-flex>`;
  }
  handleContinue() {
    RouterController.push("RegisterAccountName");
    EventsController.sendEvent({
      type: "track",
      event: "OPEN_ENS_FLOW",
      properties: {
        isSmartAccount: AccountController.state.preferredAccountType === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT
      }
    });
  }
};
W3mChooseAccountNameView.styles = styles_default8;
__decorate15([
  state()
], W3mChooseAccountNameView.prototype, "loading", void 0);
W3mChooseAccountNameView = __decorate15([
  customElement("w3m-choose-account-name-view")
], W3mChooseAccountNameView);

// node_modules/@web3modal/scaffold-ui/dist/esm/src/views/w3m-downloads-view/index.js
var __decorate16 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mDownloadsView = class W3mDownloadsView2 extends LitElement {
  constructor() {
    var _a2;
    super(...arguments);
    this.wallet = (_a2 = RouterController.state.data) == null ? void 0 : _a2.wallet;
  }
  render() {
    if (!this.wallet) {
      throw new Error("w3m-downloads-view");
    }
    return html`
      <wui-flex gap="xs" flexDirection="column" .padding=${["s", "s", "l", "s"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `;
  }
  chromeTemplate() {
    var _a2;
    if (!((_a2 = this.wallet) == null ? void 0 : _a2.chrome_store)) {
      return null;
    }
    return html`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>
    </wui-list-item>`;
  }
  iosTemplate() {
    var _a2;
    if (!((_a2 = this.wallet) == null ? void 0 : _a2.app_store)) {
      return null;
    }
    return html`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>
    </wui-list-item>`;
  }
  androidTemplate() {
    var _a2;
    if (!((_a2 = this.wallet) == null ? void 0 : _a2.play_store)) {
      return null;
    }
    return html`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>
    </wui-list-item>`;
  }
  homepageTemplate() {
    var _a2;
    if (!((_a2 = this.wallet) == null ? void 0 : _a2.homepage)) {
      return null;
    }
    return html`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>
      </wui-list-item>
    `;
  }
  onChromeStore() {
    var _a2;
    if ((_a2 = this.wallet) == null ? void 0 : _a2.chrome_store) {
      CoreHelperUtil.openHref(this.wallet.chrome_store, "_blank");
    }
  }
  onAppStore() {
    var _a2;
    if ((_a2 = this.wallet) == null ? void 0 : _a2.app_store) {
      CoreHelperUtil.openHref(this.wallet.app_store, "_blank");
    }
  }
  onPlayStore() {
    var _a2;
    if ((_a2 = this.wallet) == null ? void 0 : _a2.play_store) {
      CoreHelperUtil.openHref(this.wallet.play_store, "_blank");
    }
  }
  onHomePage() {
    var _a2;
    if ((_a2 = this.wallet) == null ? void 0 : _a2.homepage) {
      CoreHelperUtil.openHref(this.wallet.homepage, "_blank");
    }
  }
};
W3mDownloadsView = __decorate16([
  customElement("w3m-downloads-view")
], W3mDownloadsView);

// node_modules/@web3modal/scaffold-ui/dist/esm/src/views/w3m-get-wallet-view/index.js
var __decorate17 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var EXPLORER = "https://walletconnect.com/explorer";
var W3mGetWalletView = class W3mGetWalletView2 extends LitElement {
  render() {
    return html`
      <wui-flex flexDirection="column" .padding=${["0", "s", "s", "s"]} gap="xs">
        ${this.recommendedWalletsTemplate()}
        <wui-list-wallet
          name="Explore all"
          showAllWallets
          walletIcon="allWallets"
          icon="externalLink"
          @click=${() => {
      CoreHelperUtil.openHref("https://walletconnect.com/explorer?type=wallet", "_blank");
    }}
        ></wui-list-wallet>
      </wui-flex>
    `;
  }
  recommendedWalletsTemplate() {
    const { recommended, featured } = ApiController.state;
    const { customWallets } = OptionsController.state;
    const wallets = [...featured, ...customWallets ?? [], ...recommended].slice(0, 4);
    return wallets.map((wallet) => html`
        <wui-list-wallet
          name=${wallet.name ?? "Unknown"}
          tagVariant="main"
          imageSrc=${ifDefined(AssetUtil.getWalletImage(wallet))}
          @click=${() => {
      CoreHelperUtil.openHref(wallet.homepage ?? EXPLORER, "_blank");
    }}
        ></wui-list-wallet>
      `);
  }
};
W3mGetWalletView = __decorate17([
  customElement("w3m-get-wallet-view")
], W3mGetWalletView);

// node_modules/@web3modal/scaffold-ui/dist/esm/src/views/w3m-register-account-name-view/styles.js
var styles_default9 = css`
  wui-flex {
    width: 100%;
  }

  .suggestion {
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }

  .suggestion:hover {
    background-color: var(--wui-color-gray-glass-005);
    cursor: pointer;
  }

  .suggested-name {
    max-width: 75%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  form {
    width: 100%;
  }

  wui-icon-link {
    position: absolute;
    right: 20px;
    transform: translateY(11px);
  }
`;

// node_modules/@web3modal/scaffold-ui/node_modules/lit-html/development/directive-helpers.js
var { _ChildPart: ChildPart } = _$LH;
var ENABLE_SHADYDOM_NOPATCH = true;
var _a, _b;
var wrap = ENABLE_SHADYDOM_NOPATCH && ((_a = window.ShadyDOM) == null ? void 0 : _a.inUse) && ((_b = window.ShadyDOM) == null ? void 0 : _b.noPatch) === true ? window.ShadyDOM.wrap : (node) => node;
var isSingleExpression = (part) => part.strings === void 0;

// node_modules/@web3modal/scaffold-ui/node_modules/lit-html/development/directive.js
var PartType = {
  ATTRIBUTE: 1,
  CHILD: 2,
  PROPERTY: 3,
  BOOLEAN_ATTRIBUTE: 4,
  EVENT: 5,
  ELEMENT: 6
};
var directive = (c) => (...values) => ({
  // This property needs to remain unminified.
  ["_$litDirective$"]: c,
  values
});
var Directive = class {
  constructor(_partInfo) {
  }
  // See comment in Disconnectable interface for why this is a getter
  get _$isConnected() {
    return this._$parent._$isConnected;
  }
  /** @internal */
  _$initialize(part, parent, attributeIndex) {
    this.__part = part;
    this._$parent = parent;
    this.__attributeIndex = attributeIndex;
  }
  /** @internal */
  _$resolve(part, props) {
    return this.update(part, props);
  }
  update(_part, props) {
    return this.render(...props);
  }
};

// node_modules/@web3modal/scaffold-ui/node_modules/lit-html/development/async-directive.js
var DEV_MODE = true;
var notifyChildrenConnectedChanged = (parent, isConnected) => {
  var _a2;
  const children = parent._$disconnectableChildren;
  if (children === void 0) {
    return false;
  }
  for (const obj of children) {
    (_a2 = obj["_$notifyDirectiveConnectionChanged"]) == null ? void 0 : _a2.call(obj, isConnected, false);
    notifyChildrenConnectedChanged(obj, isConnected);
  }
  return true;
};
var removeDisconnectableFromParent = (obj) => {
  let parent, children;
  do {
    if ((parent = obj._$parent) === void 0) {
      break;
    }
    children = parent._$disconnectableChildren;
    children.delete(obj);
    obj = parent;
  } while ((children == null ? void 0 : children.size) === 0);
};
var addDisconnectableToParent = (obj) => {
  for (let parent; parent = obj._$parent; obj = parent) {
    let children = parent._$disconnectableChildren;
    if (children === void 0) {
      parent._$disconnectableChildren = children = /* @__PURE__ */ new Set();
    } else if (children.has(obj)) {
      break;
    }
    children.add(obj);
    installDisconnectAPI(parent);
  }
};
function reparentDisconnectables(newParent) {
  if (this._$disconnectableChildren !== void 0) {
    removeDisconnectableFromParent(this);
    this._$parent = newParent;
    addDisconnectableToParent(this);
  } else {
    this._$parent = newParent;
  }
}
function notifyChildPartConnectedChanged(isConnected, isClearingValue = false, fromPartIndex = 0) {
  const value = this._$committedValue;
  const children = this._$disconnectableChildren;
  if (children === void 0 || children.size === 0) {
    return;
  }
  if (isClearingValue) {
    if (Array.isArray(value)) {
      for (let i = fromPartIndex; i < value.length; i++) {
        notifyChildrenConnectedChanged(value[i], false);
        removeDisconnectableFromParent(value[i]);
      }
    } else if (value != null) {
      notifyChildrenConnectedChanged(value, false);
      removeDisconnectableFromParent(value);
    }
  } else {
    notifyChildrenConnectedChanged(this, isConnected);
  }
}
var installDisconnectAPI = (obj) => {
  if (obj.type == PartType.CHILD) {
    obj._$notifyConnectionChanged ?? (obj._$notifyConnectionChanged = notifyChildPartConnectedChanged);
    obj._$reparentDisconnectables ?? (obj._$reparentDisconnectables = reparentDisconnectables);
  }
};
var AsyncDirective = class extends Directive {
  constructor() {
    super(...arguments);
    this._$disconnectableChildren = void 0;
  }
  /**
   * Initialize the part with internal fields
   * @param part
   * @param parent
   * @param attributeIndex
   */
  _$initialize(part, parent, attributeIndex) {
    super._$initialize(part, parent, attributeIndex);
    addDisconnectableToParent(this);
    this.isConnected = part._$isConnected;
  }
  // This property needs to remain unminified.
  /**
   * Called from the core code when a directive is going away from a part (in
   * which case `shouldRemoveFromParent` should be true), and from the
   * `setChildrenConnected` helper function when recursively changing the
   * connection state of a tree (in which case `shouldRemoveFromParent` should
   * be false).
   *
   * @param isConnected
   * @param isClearingDirective - True when the directive itself is being
   *     removed; false when the tree is being disconnected
   * @internal
   */
  ["_$notifyDirectiveConnectionChanged"](isConnected, isClearingDirective = true) {
    var _a2, _b2;
    if (isConnected !== this.isConnected) {
      this.isConnected = isConnected;
      if (isConnected) {
        (_a2 = this.reconnected) == null ? void 0 : _a2.call(this);
      } else {
        (_b2 = this.disconnected) == null ? void 0 : _b2.call(this);
      }
    }
    if (isClearingDirective) {
      notifyChildrenConnectedChanged(this, isConnected);
      removeDisconnectableFromParent(this);
    }
  }
  /**
   * Sets the value of the directive's Part outside the normal `update`/`render`
   * lifecycle of a directive.
   *
   * This method should not be called synchronously from a directive's `update`
   * or `render`.
   *
   * @param directive The directive to update
   * @param value The value to set
   */
  setValue(value) {
    if (isSingleExpression(this.__part)) {
      this.__part._$setValue(value, this);
    } else {
      if (DEV_MODE && this.__attributeIndex === void 0) {
        throw new Error(`Expected this.__attributeIndex to be a number`);
      }
      const newValues = [...this.__part._$committedValue];
      newValues[this.__attributeIndex] = value;
      this.__part._$setValue(newValues, this, 0);
    }
  }
  /**
   * User callbacks for implementing logic to release any resources/subscriptions
   * that may have been retained by this directive. Since directives may also be
   * re-connected, `reconnected` should also be implemented to restore the
   * working state of the directive prior to the next render.
   */
  disconnected() {
  }
  reconnected() {
  }
};

// node_modules/@web3modal/scaffold-ui/node_modules/lit-html/development/directives/ref.js
var createRef = () => new Ref();
var Ref = class {
};
var lastElementForContextAndCallback = /* @__PURE__ */ new WeakMap();
var RefDirective = class extends AsyncDirective {
  render(_ref) {
    return nothing;
  }
  update(part, [ref2]) {
    var _a2;
    const refChanged = ref2 !== this._ref;
    if (refChanged && this._ref !== void 0) {
      this._updateRefValue(void 0);
    }
    if (refChanged || this._lastElementForRef !== this._element) {
      this._ref = ref2;
      this._context = (_a2 = part.options) == null ? void 0 : _a2.host;
      this._updateRefValue(this._element = part.element);
    }
    return nothing;
  }
  _updateRefValue(element) {
    if (!this.isConnected) {
      element = void 0;
    }
    if (typeof this._ref === "function") {
      const context = this._context ?? globalThis;
      let lastElementForCallback = lastElementForContextAndCallback.get(context);
      if (lastElementForCallback === void 0) {
        lastElementForCallback = /* @__PURE__ */ new WeakMap();
        lastElementForContextAndCallback.set(context, lastElementForCallback);
      }
      if (lastElementForCallback.get(this._ref) !== void 0) {
        this._ref.call(this._context, void 0);
      }
      lastElementForCallback.set(this._ref, element);
      if (element !== void 0) {
        this._ref.call(this._context, element);
      }
    } else {
      this._ref.value = element;
    }
  }
  get _lastElementForRef() {
    var _a2, _b2;
    return typeof this._ref === "function" ? (_a2 = lastElementForContextAndCallback.get(this._context ?? globalThis)) == null ? void 0 : _a2.get(this._ref) : (_b2 = this._ref) == null ? void 0 : _b2.value;
  }
  disconnected() {
    if (this._lastElementForRef === this._element) {
      this._updateRefValue(void 0);
    }
  }
  reconnected() {
    this._updateRefValue(this._element);
  }
};
var ref = directive(RefDirective);

// node_modules/@web3modal/scaffold-ui/dist/esm/src/views/w3m-register-account-name-view/index.js
var __decorate18 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mRegisterAccountNameView = class W3mRegisterAccountNameView2 extends LitElement {
  constructor() {
    super();
    this.formRef = createRef();
    this.usubscribe = [];
    this.name = "";
    this.error = "";
    this.loading = EnsController.state.loading;
    this.suggestions = EnsController.state.suggestions;
    this.registered = false;
    this.profileName = AccountController.state.profileName;
    this.onDebouncedNameInputChange = CoreHelperUtil.debounce((value) => {
      if (EnsController.validateName(value)) {
        this.error = "";
        this.name = value;
        EnsController.getSuggestions(value);
        EnsController.isNameRegistered(value).then((registered) => {
          this.registered = registered;
        });
      } else if (value.length < 4) {
        this.error = "Name must be at least 4 characters long";
      } else {
        this.error = "Can only contain letters, numbers and - characters";
      }
    });
    this.usubscribe.push(...[
      EnsController.subscribe((val) => {
        this.suggestions = val.suggestions;
        this.loading = val.loading;
      }),
      AccountController.subscribeKey("profileName", (val) => {
        this.profileName = val;
        if (val) {
          this.error = "You already own a name";
        }
      })
    ]);
  }
  firstUpdated() {
    var _a2;
    (_a2 = this.formRef.value) == null ? void 0 : _a2.addEventListener("keydown", this.onEnterKey.bind(this));
  }
  disconnectedCallback() {
    var _a2;
    super.disconnectedCallback();
    this.usubscribe.forEach((unsub) => unsub());
    (_a2 = this.formRef.value) == null ? void 0 : _a2.removeEventListener("keydown", this.onEnterKey.bind(this));
  }
  render() {
    return html`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="m"
        .padding=${["0", "s", "m", "s"]}
      >
        <form ${ref(this.formRef)} @submit=${this.onSubmitName.bind(this)}>
          <wui-ens-input
            @inputChange=${this.onNameInputChange.bind(this)}
            .errorMessage=${this.error}
            .value=${this.name}
          >
          </wui-ens-input>
          ${this.submitButtonTemplate()}
          <input type="submit" hidden />
        </form>
        ${this.templateSuggestions()}
      </wui-flex>
    `;
  }
  submitButtonTemplate() {
    const showSubmit = this.isAllowedToSubmit();
    return showSubmit ? html`
          <wui-icon-link
            size="sm"
            icon="chevronRight"
            iconcolor="accent-100"
            @click=${this.onSubmitName.bind(this)}
          >
          </wui-icon-link>
        ` : null;
  }
  onSelectSuggestion(name) {
    return () => {
      this.name = name;
      this.registered = false;
      this.requestUpdate();
    };
  }
  onNameInputChange(event) {
    this.onDebouncedNameInputChange(event.detail);
  }
  nameSuggestionTagTemplate() {
    if (this.loading) {
      return html`<wui-loading-spinner size="lg" color="fg-100"></wui-loading-spinner>`;
    }
    return this.registered ? html`<wui-tag variant="shade" size="lg">Registered</wui-tag>` : html`<wui-tag variant="success" size="lg">Available</wui-tag>`;
  }
  templateSuggestions() {
    if (!this.name || this.name.length < 4 || this.error) {
      return null;
    }
    const suggestions = this.registered ? this.suggestions.filter((s) => s.name !== this.name) : [];
    return html`<wui-flex flexDirection="column" gap="xxs" alignItems="center">
      <wui-flex
        .padding=${["m", "m", "m", "m"]}
        justifyContent="space-between"
        class="suggestion"
      >
        <wui-text color="fg-100" variant="paragraph-400" class="suggested-name">
          ${this.name}</wui-text
        >${this.nameSuggestionTagTemplate()}
      </wui-flex>
      ${suggestions.map((suggestion) => this.availableNameTemplate(suggestion.name))}
    </wui-flex>`;
  }
  availableNameTemplate(suggestion) {
    return html` <wui-flex
      .padding=${["m", "m", "m", "m"]}
      justifyContent="space-between"
      class="suggestion"
      @click=${this.onSelectSuggestion(suggestion)}
    >
      <wui-text color="fg-100" variant="paragraph-400" class="suggested-name">
        ${suggestion}
      </wui-text>
      <wui-tag variant="success" size="lg">Available</wui-tag>
    </wui-flex>`;
  }
  isAllowedToSubmit() {
    return !this.loading && !this.registered && !this.error && !this.profileName && EnsController.validateName(this.name);
  }
  async onSubmitName() {
    try {
      if (!this.isAllowedToSubmit()) {
        return;
      }
      EventsController.sendEvent({
        type: "track",
        event: "REGISTER_NAME_INITIATED",
        properties: {
          isSmartAccount: AccountController.state.preferredAccountType === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT,
          ensName: this.name
        }
      });
      await EnsController.registerName(this.name);
      EventsController.sendEvent({
        type: "track",
        event: "REGISTER_NAME_SUCCESS",
        properties: {
          isSmartAccount: AccountController.state.preferredAccountType === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT,
          ensName: this.name
        }
      });
    } catch (error) {
      SnackController.showError(error.message);
      EventsController.sendEvent({
        type: "track",
        event: "REGISTER_NAME_ERROR",
        properties: {
          isSmartAccount: AccountController.state.preferredAccountType === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT,
          ensName: this.name,
          error: (error == null ? void 0 : error.message) || "Unknown error"
        }
      });
    }
  }
  onEnterKey(event) {
    if (event.key === "Enter" && this.isAllowedToSubmit()) {
      this.onSubmitName();
    }
  }
};
W3mRegisterAccountNameView.styles = styles_default9;
__decorate18([
  property()
], W3mRegisterAccountNameView.prototype, "errorMessage", void 0);
__decorate18([
  state()
], W3mRegisterAccountNameView.prototype, "name", void 0);
__decorate18([
  state()
], W3mRegisterAccountNameView.prototype, "error", void 0);
__decorate18([
  state()
], W3mRegisterAccountNameView.prototype, "loading", void 0);
__decorate18([
  state()
], W3mRegisterAccountNameView.prototype, "suggestions", void 0);
__decorate18([
  state()
], W3mRegisterAccountNameView.prototype, "registered", void 0);
__decorate18([
  state()
], W3mRegisterAccountNameView.prototype, "profileName", void 0);
W3mRegisterAccountNameView = __decorate18([
  customElement("w3m-register-account-name-view")
], W3mRegisterAccountNameView);

// node_modules/@web3modal/scaffold-ui/dist/esm/src/views/w3m-register-account-name-success-view/styles.js
var styles_default10 = css`
  .continue-button-container {
    width: 100%;
  }
`;

// node_modules/@web3modal/scaffold-ui/dist/esm/src/views/w3m-register-account-name-success-view/index.js
var __decorate19 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mRegisterAccountNameSuccess = class W3mRegisterAccountNameSuccess2 extends LitElement {
  render() {
    return html`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="xxl"
        .padding=${["0", "0", "l", "0"]}
      >
        ${this.onboardingTemplate()} ${this.buttonsTemplate()}
        <wui-link
          @click=${() => {
      CoreHelperUtil.openHref(NavigationUtil.URLS.FAQ, "_blank");
    }}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-link>
      </wui-flex>
    `;
  }
  onboardingTemplate() {
    return html` <wui-flex
      flexDirection="column"
      gap="xxl"
      alignItems="center"
      .padding=${["0", "xxl", "0", "xxl"]}
    >
      <wui-flex gap="s" alignItems="center" justifyContent="center">
        <wui-icon-box
          size="xl"
          iconcolor="success-100"
          backgroundcolor="success-100"
          icon="checkmark"
          background="opaque"
        ></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="s">
        <wui-text align="center" variant="medium-600" color="fg-100">
          Account name chosen successfully
        </wui-text>
        <wui-text align="center" variant="paragraph-400" color="fg-100">
          You can now fund your account and trade crypto
        </wui-text>
      </wui-flex>
    </wui-flex>`;
  }
  buttonsTemplate() {
    return html`<wui-flex
      .padding=${["0", "2l", "0", "2l"]}
      gap="s"
      class="continue-button-container"
    >
      <wui-button fullWidth size="lg" borderRadius="xs" @click=${this.redirectToAccount.bind(this)}
        >Let's Go!
      </wui-button>
    </wui-flex>`;
  }
  redirectToAccount() {
    RouterController.replace("Account");
  }
};
W3mRegisterAccountNameSuccess.styles = styles_default10;
W3mRegisterAccountNameSuccess = __decorate19([
  customElement("w3m-register-account-name-success-view")
], W3mRegisterAccountNameSuccess);

// node_modules/@web3modal/scaffold-ui/dist/esm/src/views/w3m-network-switch-view/styles.js
var styles_default11 = css`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: 4px;
    bottom: 0;
    opacity: 0;
    transform: scale(0.5);
    z-index: 1;
  }

  wui-button {
    display: none;
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  wui-button[data-retry='true'] {
    display: block;
    opacity: 1;
  }
`;

// node_modules/@web3modal/scaffold-ui/dist/esm/src/utils/NetworkUtil.js
var NetworkUtil = {
  onNetworkChange: async () => {
    var _a2, _b2;
    if (OptionsController.state.isSiweEnabled) {
      const { SIWEController } = await import("./exports-VVXRRPWP.js");
      if ((_b2 = (_a2 = SIWEController.state._client) == null ? void 0 : _a2.options) == null ? void 0 : _b2.signOutOnNetworkChange) {
        await SIWEController.signOut();
      } else {
        RouterUtil.navigateAfterNetworkSwitch();
      }
    } else {
      RouterUtil.navigateAfterNetworkSwitch();
    }
  }
};

// node_modules/@web3modal/scaffold-ui/dist/esm/src/views/w3m-network-switch-view/index.js
var __decorate20 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mNetworkSwitchView = class W3mNetworkSwitchView2 extends LitElement {
  constructor() {
    var _a2;
    super();
    this.network = (_a2 = RouterController.state.data) == null ? void 0 : _a2.network;
    this.unsubscribe = [];
    this.showRetry = false;
    this.error = false;
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  firstUpdated() {
    this.onSwitchNetwork();
  }
  render() {
    if (!this.network) {
      throw new Error("w3m-network-switch-view: No network provided");
    }
    this.onShowRetry();
    const label = this.getLabel();
    const subLabel = this.getSubLabel();
    return html`
      <wui-flex
        data-error=${this.error}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl", "xl", "3xl", "xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-network-image
            size="lg"
            imageSrc=${ifDefined(AssetUtil.getNetworkImage(this.network))}
          ></wui-network-image>

          ${this.error ? null : html`<wui-loading-hexagon></wui-loading-hexagon>`}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            ?border=${true}
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">${label}</wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${subLabel}</wui-text>
        </wui-flex>

        <wui-button
          data-retry=${this.showRetry}
          variant="accent"
          size="md"
          .disabled=${!this.error}
          @click=${this.onSwitchNetwork.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try again
        </wui-button>
      </wui-flex>
    `;
  }
  getSubLabel() {
    const type = StorageUtil.getConnectedConnector();
    const authConnector = ConnectorController.getAuthConnector();
    if (authConnector && type === "AUTH") {
      return "";
    }
    return this.error ? "Switch can be declined if chain is not supported by a wallet or previous request is still active" : "Accept connection request in your wallet";
  }
  getLabel() {
    var _a2;
    const type = StorageUtil.getConnectedConnector();
    const authConnector = ConnectorController.getAuthConnector();
    if (authConnector && type === "AUTH") {
      return `Switching to ${((_a2 = this.network) == null ? void 0 : _a2.name) ?? "Unknown"} network...`;
    }
    return this.error ? "Switch declined" : "Approve in wallet";
  }
  onShowRetry() {
    var _a2;
    if (this.error && !this.showRetry) {
      this.showRetry = true;
      const retryButton = (_a2 = this.shadowRoot) == null ? void 0 : _a2.querySelector("wui-button");
      retryButton == null ? void 0 : retryButton.animate([{ opacity: 0 }, { opacity: 1 }], {
        fill: "forwards",
        easing: "ease"
      });
    }
  }
  async onSwitchNetwork() {
    try {
      this.error = false;
      if (this.network) {
        await NetworkController.switchActiveNetwork(this.network);
        await NetworkUtil.onNetworkChange();
      }
    } catch {
      this.error = true;
    }
  }
};
W3mNetworkSwitchView.styles = styles_default11;
__decorate20([
  state()
], W3mNetworkSwitchView.prototype, "showRetry", void 0);
__decorate20([
  state()
], W3mNetworkSwitchView.prototype, "error", void 0);
W3mNetworkSwitchView = __decorate20([
  customElement("w3m-network-switch-view")
], W3mNetworkSwitchView);

// node_modules/@web3modal/scaffold-ui/dist/esm/src/views/w3m-networks-view/styles.js
var styles_default12 = css`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }
`;

// node_modules/@web3modal/scaffold-ui/dist/esm/src/views/w3m-networks-view/index.js
var __decorate21 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mNetworksView = class W3mNetworksView2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.caipNetwork = NetworkController.state.caipNetwork;
    this.requestedCaipNetworks = NetworkController.getRequestedCaipNetworks();
    this.unsubscribe.push(NetworkController.subscribeKey("caipNetwork", (val) => this.caipNetwork = val));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    return html`
      <wui-grid padding="s" gridTemplateColumns="repeat(4, 1fr)" rowGap="l" columnGap="xs">
        ${this.networksTemplate()}
      </wui-grid>

      <wui-separator></wui-separator>

      <wui-flex padding="s" flexDirection="column" gap="m" alignItems="center">
        <wui-text variant="small-400" color="fg-300" align="center">
          Your connected wallet may not support some of the networks available for this dApp
        </wui-text>
        <wui-link @click=${this.onNetworkHelp.bind(this)}>
          <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
          What is a network
        </wui-link>
      </wui-flex>
    `;
  }
  onNetworkHelp() {
    EventsController.sendEvent({ type: "track", event: "CLICK_NETWORK_HELP" });
    RouterController.push("WhatIsANetwork");
  }
  networksTemplate() {
    const requestedCaipNetworks = NetworkController.getRequestedCaipNetworks();
    const approvedCaipNetworkIds = NetworkController.state.approvedCaipNetworkIds;
    const supportsAllNetworks = NetworkController.state.supportsAllNetworks;
    const sortedNetworks = CoreHelperUtil.sortRequestedNetworks(approvedCaipNetworkIds, requestedCaipNetworks);
    return sortedNetworks == null ? void 0 : sortedNetworks.map((network) => {
      var _a2;
      return html`
        <wui-card-select
          .selected=${((_a2 = this.caipNetwork) == null ? void 0 : _a2.id) === network.id}
          imageSrc=${ifDefined(AssetUtil.getNetworkImage(network))}
          type="network"
          name=${network.name ?? network.id}
          @click=${() => this.onSwitchNetwork(network)}
          .disabled=${!supportsAllNetworks && !(approvedCaipNetworkIds == null ? void 0 : approvedCaipNetworkIds.includes(network.id))}
          data-testid=${`w3m-network-switch-${network.name ?? network.id}`}
        ></wui-card-select>
      `;
    });
  }
  async onSwitchNetwork(network) {
    const isConnected = AccountController.state.isConnected;
    const approvedCaipNetworkIds = NetworkController.state.approvedCaipNetworkIds;
    const supportsAllNetworks = NetworkController.state.supportsAllNetworks;
    const caipNetwork = NetworkController.state.caipNetwork;
    const routerData = RouterController.state.data;
    if (isConnected && (caipNetwork == null ? void 0 : caipNetwork.id) !== network.id) {
      if (approvedCaipNetworkIds == null ? void 0 : approvedCaipNetworkIds.includes(network.id)) {
        await NetworkController.switchActiveNetwork(network);
        await NetworkUtil.onNetworkChange();
      } else if (supportsAllNetworks) {
        RouterController.push("SwitchNetwork", { ...routerData, network });
      }
    } else if (!isConnected) {
      NetworkController.setCaipNetwork(network);
      RouterController.push("Connect");
    }
  }
};
W3mNetworksView.styles = styles_default12;
__decorate21([
  state()
], W3mNetworksView.prototype, "caipNetwork", void 0);
__decorate21([
  state()
], W3mNetworksView.prototype, "requestedCaipNetworks", void 0);
W3mNetworksView = __decorate21([
  customElement("w3m-networks-view")
], W3mNetworksView);

// node_modules/@web3modal/scaffold-ui/dist/esm/src/views/w3m-onramp-activity-view/styles.js
var styles_default13 = css`
  :host > wui-flex {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
    padding: var(--wui-spacing-m);
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }

  :host > wui-flex > wui-flex {
    width: 100%;
  }

  wui-transaction-list-item-loader {
    width: 100%;
  }
`;

// node_modules/@web3modal/scaffold-ui/dist/esm/src/views/w3m-onramp-activity-view/index.js
var __decorate22 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var LOADING_ITEM_COUNT = 7;
var W3mOnRampActivityView = class W3mOnRampActivityView2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.selectedOnRampProvider = OnRampController.state.selectedProvider;
    this.loading = false;
    this.coinbaseTransactions = TransactionsController.state.coinbaseTransactions;
    this.tokenImages = AssetController.state.tokenImages;
    this.unsubscribe.push(...[
      OnRampController.subscribeKey("selectedProvider", (val) => {
        this.selectedOnRampProvider = val;
      }),
      AssetController.subscribeKey("tokenImages", (val) => this.tokenImages = val),
      () => {
        clearTimeout(this.refetchTimeout);
      },
      TransactionsController.subscribe((val) => {
        this.coinbaseTransactions = { ...val.coinbaseTransactions };
      })
    ]);
    TransactionsController.clearCursor();
    this.fetchTransactions();
  }
  render() {
    return html`
      <wui-flex flexDirection="column" .padding=${["0", "s", "s", "s"]} gap="xs">
        ${this.loading ? this.templateLoading() : this.templateTransactionsByYear()}
      </wui-flex>
    `;
  }
  templateTransactions(transactions) {
    return transactions == null ? void 0 : transactions.map((transaction) => {
      var _a2, _b2, _c;
      const date = DateUtil.formatDate((_a2 = transaction == null ? void 0 : transaction.metadata) == null ? void 0 : _a2.minedAt);
      const transfer = transaction.transfers[0];
      const fungibleInfo = transfer == null ? void 0 : transfer.fungible_info;
      if (!fungibleInfo) {
        return null;
      }
      const icon = ((_b2 = fungibleInfo == null ? void 0 : fungibleInfo.icon) == null ? void 0 : _b2.url) || ((_c = this.tokenImages) == null ? void 0 : _c[fungibleInfo.symbol || ""]);
      return html`
        <w3m-onramp-activity-item
          label="Bought"
          .completed=${transaction.metadata.status === "ONRAMP_TRANSACTION_STATUS_SUCCESS"}
          .inProgress=${transaction.metadata.status === "ONRAMP_TRANSACTION_STATUS_IN_PROGRESS"}
          .failed=${transaction.metadata.status === "ONRAMP_TRANSACTION_STATUS_FAILED"}
          purchaseCurrency=${ifDefined(fungibleInfo.symbol)}
          purchaseValue=${transfer.quantity.numeric}
          date=${date}
          icon=${ifDefined(icon)}
          symbol=${ifDefined(fungibleInfo.symbol)}
        ></w3m-onramp-activity-item>
      `;
    });
  }
  templateTransactionsByYear() {
    const sortedYearKeys = Object.keys(this.coinbaseTransactions).sort().reverse();
    return sortedYearKeys.map((year) => {
      const yearInt = parseInt(year, 10);
      const sortedMonthIndexes = new Array(12).fill(null).map((_, idx) => idx).reverse();
      return sortedMonthIndexes.map((month) => {
        var _a2;
        const groupTitle = TransactionUtil.getTransactionGroupTitle(yearInt, month);
        const transactions = (_a2 = this.coinbaseTransactions[yearInt]) == null ? void 0 : _a2[month];
        if (!transactions) {
          return null;
        }
        return html`
          <wui-flex flexDirection="column">
            <wui-flex
              alignItems="center"
              flexDirection="row"
              .padding=${["xs", "s", "s", "s"]}
            >
              <wui-text variant="paragraph-500" color="fg-200">${groupTitle}</wui-text>
            </wui-flex>
            <wui-flex flexDirection="column" gap="xs">
              ${this.templateTransactions(transactions)}
            </wui-flex>
          </wui-flex>
        `;
      });
    });
  }
  async fetchTransactions() {
    const provider = "coinbase";
    if (provider === "coinbase") {
      await this.fetchCoinbaseTransactions();
    }
  }
  async fetchCoinbaseTransactions() {
    const address = AccountController.state.address;
    const projectId = OptionsController.state.projectId;
    if (!address) {
      throw new Error("No address found");
    }
    if (!projectId) {
      throw new Error("No projectId found");
    }
    this.loading = true;
    await TransactionsController.fetchTransactions(address, "coinbase");
    this.loading = false;
    this.refetchLoadingTransactions();
  }
  refetchLoadingTransactions() {
    var _a2;
    const today = /* @__PURE__ */ new Date();
    const currentMonthTxs = ((_a2 = this.coinbaseTransactions[today.getFullYear()]) == null ? void 0 : _a2[today.getMonth()]) || [];
    const loadingTransactions = currentMonthTxs.filter((transaction) => transaction.metadata.status === "ONRAMP_TRANSACTION_STATUS_IN_PROGRESS");
    if (loadingTransactions.length === 0) {
      clearTimeout(this.refetchTimeout);
      return;
    }
    this.refetchTimeout = setTimeout(async () => {
      const address = AccountController.state.address;
      await TransactionsController.fetchTransactions(address, "coinbase");
      this.refetchLoadingTransactions();
    }, 3e3);
  }
  templateLoading() {
    return Array(LOADING_ITEM_COUNT).fill(html` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map((item) => item);
  }
};
W3mOnRampActivityView.styles = styles_default13;
__decorate22([
  state()
], W3mOnRampActivityView.prototype, "selectedOnRampProvider", void 0);
__decorate22([
  state()
], W3mOnRampActivityView.prototype, "loading", void 0);
__decorate22([
  state()
], W3mOnRampActivityView.prototype, "coinbaseTransactions", void 0);
__decorate22([
  state()
], W3mOnRampActivityView.prototype, "tokenImages", void 0);
W3mOnRampActivityView = __decorate22([
  customElement("w3m-onramp-activity-view")
], W3mOnRampActivityView);

// node_modules/@web3modal/scaffold-ui/dist/esm/src/views/w3m-onramp-fiat-select-view/styles.js
var styles_default14 = css`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }
`;

// node_modules/@web3modal/scaffold-ui/dist/esm/src/views/w3m-onramp-fiat-select-view/index.js
var __decorate23 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mOnrampFiatSelectView = class W3mOnrampFiatSelectView2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.selectedCurrency = OnRampController.state.paymentCurrency;
    this.currencies = OnRampController.state.paymentCurrencies;
    this.currencyImages = AssetController.state.currencyImages;
    this.unsubscribe.push(...[
      OnRampController.subscribe((val) => {
        this.selectedCurrency = val.paymentCurrency;
        this.currencies = val.paymentCurrencies;
      }),
      AssetController.subscribeKey("currencyImages", (val) => this.currencyImages = val)
    ]);
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    return html`
      <wui-flex flexDirection="column" .padding=${["0", "s", "s", "s"]} gap="xs">
        ${this.currenciesTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `;
  }
  currenciesTemplate() {
    return this.currencies.map((currency) => {
      var _a2;
      return html`
        <wui-list-item
          imageSrc=${ifDefined((_a2 = this.currencyImages) == null ? void 0 : _a2[currency.id])}
          @click=${() => this.selectCurrency(currency)}
          variant="image"
        >
          <wui-text variant="paragraph-500" color="fg-100">${currency.id}</wui-text>
        </wui-list-item>
      `;
    });
  }
  selectCurrency(currency) {
    if (!currency) {
      return;
    }
    OnRampController.setPaymentCurrency(currency);
    ModalController.close();
  }
};
W3mOnrampFiatSelectView.styles = styles_default14;
__decorate23([
  state()
], W3mOnrampFiatSelectView.prototype, "selectedCurrency", void 0);
__decorate23([
  state()
], W3mOnrampFiatSelectView.prototype, "currencies", void 0);
__decorate23([
  state()
], W3mOnrampFiatSelectView.prototype, "currencyImages", void 0);
W3mOnrampFiatSelectView = __decorate23([
  customElement("w3m-onramp-fiat-select-view")
], W3mOnrampFiatSelectView);

// node_modules/@web3modal/scaffold-ui/dist/esm/src/views/w3m-onramp-providers-view/index.js
var __decorate24 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mOnRampProvidersView = class W3mOnRampProvidersView2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.providers = OnRampController.state.providers;
    this.unsubscribe.push(...[
      OnRampController.subscribeKey("providers", (val) => {
        this.providers = val;
      })
    ]);
  }
  firstUpdated() {
    const urlPromises = this.providers.map(async (provider) => {
      if (provider.name === "coinbase") {
        return await this.getCoinbaseOnRampURL();
      }
      return Promise.resolve(provider == null ? void 0 : provider.url);
    });
    Promise.all(urlPromises).then((urls) => {
      this.providers = this.providers.map((provider, index) => ({
        ...provider,
        url: urls[index] || ""
      }));
    });
  }
  render() {
    return html`
      <wui-flex flexDirection="column" .padding=${["0", "s", "s", "s"]} gap="xs">
        ${this.onRampProvidersTemplate()}
      </wui-flex>
      <w3m-onramp-providers-footer></w3m-onramp-providers-footer>
    `;
  }
  onRampProvidersTemplate() {
    return this.providers.map((provider) => html`
        <w3m-onramp-provider-item
          label=${provider.label}
          name=${provider.name}
          feeRange=${provider.feeRange}
          @click=${() => {
      this.onClickProvider(provider);
    }}
          ?disabled=${!provider.url}
        ></w3m-onramp-provider-item>
      `);
  }
  onClickProvider(provider) {
    OnRampController.setSelectedProvider(provider);
    RouterController.push("BuyInProgress");
    CoreHelperUtil.openHref(provider.url, "popupWindow", "width=600,height=800,scrollbars=yes");
    EventsController.sendEvent({
      type: "track",
      event: "SELECT_BUY_PROVIDER",
      properties: {
        provider: provider.name,
        isSmartAccount: AccountController.state.preferredAccountType === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT
      }
    });
  }
  async getCoinbaseOnRampURL() {
    const address = AccountController.state.address;
    const network = NetworkController.state.caipNetwork;
    if (!address) {
      throw new Error("No address found");
    }
    if (!(network == null ? void 0 : network.name)) {
      throw new Error("No network found");
    }
    const defaultNetwork = ConstantsUtil2.WC_COINBASE_PAY_SDK_CHAIN_NAME_MAP[network.name] ?? ConstantsUtil2.WC_COINBASE_PAY_SDK_FALLBACK_CHAIN;
    const purchaseCurrency = OnRampController.state.purchaseCurrency;
    const assets = purchaseCurrency ? [purchaseCurrency.symbol] : OnRampController.state.purchaseCurrencies.map((currency) => currency.symbol);
    return await BlockchainApiController.generateOnRampURL({
      defaultNetwork,
      destinationWallets: [
        { address, blockchains: ConstantsUtil2.WC_COINBASE_PAY_SDK_CHAINS, assets }
      ],
      partnerUserId: address,
      purchaseAmount: OnRampController.state.purchaseAmount
    });
  }
};
__decorate24([
  state()
], W3mOnRampProvidersView.prototype, "providers", void 0);
W3mOnRampProvidersView = __decorate24([
  customElement("w3m-onramp-providers-view")
], W3mOnRampProvidersView);

// node_modules/@web3modal/scaffold-ui/dist/esm/src/views/w3m-onramp-tokens-select-view/styles.js
var styles_default15 = css`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }
`;

// node_modules/@web3modal/scaffold-ui/dist/esm/src/views/w3m-onramp-tokens-select-view/index.js
var __decorate25 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mOnrampTokensView = class W3mOnrampTokensView2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.selectedCurrency = OnRampController.state.purchaseCurrencies;
    this.tokens = OnRampController.state.purchaseCurrencies;
    this.tokenImages = AssetController.state.tokenImages;
    this.unsubscribe.push(...[
      OnRampController.subscribe((val) => {
        this.selectedCurrency = val.purchaseCurrencies;
        this.tokens = val.purchaseCurrencies;
      }),
      AssetController.subscribeKey("tokenImages", (val) => this.tokenImages = val)
    ]);
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    return html`
      <wui-flex flexDirection="column" .padding=${["0", "s", "s", "s"]} gap="xs">
        ${this.currenciesTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `;
  }
  currenciesTemplate() {
    return this.tokens.map((token) => {
      var _a2;
      return html`
        <wui-list-item
          imageSrc=${ifDefined((_a2 = this.tokenImages) == null ? void 0 : _a2[token.symbol])}
          @click=${() => this.selectToken(token)}
          variant="image"
        >
          <wui-flex gap="3xs" alignItems="center">
            <wui-text variant="paragraph-500" color="fg-100">${token.name}</wui-text>
            <wui-text variant="small-400" color="fg-200">${token.symbol}</wui-text>
          </wui-flex>
        </wui-list-item>
      `;
    });
  }
  selectToken(currency) {
    if (!currency) {
      return;
    }
    OnRampController.setPurchaseCurrency(currency);
    ModalController.close();
  }
};
W3mOnrampTokensView.styles = styles_default15;
__decorate25([
  state()
], W3mOnrampTokensView.prototype, "selectedCurrency", void 0);
__decorate25([
  state()
], W3mOnrampTokensView.prototype, "tokens", void 0);
__decorate25([
  state()
], W3mOnrampTokensView.prototype, "tokenImages", void 0);
W3mOnrampTokensView = __decorate25([
  customElement("w3m-onramp-token-select-view")
], W3mOnrampTokensView);

// node_modules/@web3modal/scaffold-ui/dist/esm/src/views/w3m-swap-view/styles.js
var styles_default16 = css`
  :host > wui-flex:first-child {
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  .action-button {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
  }

  .action-button:disabled {
    border-color: 1px solid var(--wui-color-gray-glass-005);
  }

  .swap-inputs-container {
    position: relative;
  }

  .replace-tokens-button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    gap: var(--wui-spacing-1xs);
    border-radius: var(--wui-border-radius-xs);
    background-color: var(--wui-color-modal-bg-base);
    padding: var(--wui-spacing-xxs);
  }

  .replace-tokens-button-container > button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 40px;
    padding: var(--wui-spacing-xs);
    border: none;
    border-radius: var(--wui-border-radius-xxs);
    background: var(--wui-color-gray-glass-002);
    transition: background-color var(--wui-duration-md) var(--wui-ease-out-power-1);
    will-change: background-color;
    z-index: 20;
  }

  .replace-tokens-button-container > button:hover {
    background: var(--wui-color-gray-glass-005);
  }

  .details-container > wui-flex {
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    width: 100%;
  }

  .details-container > wui-flex > button {
    border: none;
    background: none;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    transition: background 0.2s linear;
  }

  .details-container > wui-flex > button:hover {
    background: var(--wui-color-gray-glass-002);
  }

  .details-content-container {
    padding: var(--wui-spacing-1xs);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details-content-container > wui-flex {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: var(--wui-spacing-s) var(--wui-spacing-xl);
    border-radius: var(--wui-border-radius-xxs);
    background: var(--wui-color-gray-glass-002);
  }
`;

// node_modules/@web3modal/scaffold-ui/dist/esm/src/views/w3m-swap-view/index.js
var __decorate26 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mSwapView = class W3mSwapView2 extends LitElement {
  constructor() {
    var _a2;
    super();
    this.unsubscribe = [];
    this.detailsOpen = false;
    this.caipNetworkId = (_a2 = NetworkController.state.caipNetwork) == null ? void 0 : _a2.id;
    this.initialized = SwapController.state.initialized;
    this.loadingQuote = SwapController.state.loadingQuote;
    this.loadingPrices = SwapController.state.loadingPrices;
    this.loadingTransaction = SwapController.state.loadingTransaction;
    this.sourceToken = SwapController.state.sourceToken;
    this.sourceTokenAmount = SwapController.state.sourceTokenAmount;
    this.sourceTokenPriceInUSD = SwapController.state.sourceTokenPriceInUSD;
    this.toToken = SwapController.state.toToken;
    this.toTokenAmount = SwapController.state.toTokenAmount;
    this.toTokenPriceInUSD = SwapController.state.toTokenPriceInUSD;
    this.inputError = SwapController.state.inputError;
    this.gasPriceInUSD = SwapController.state.gasPriceInUSD;
    this.fetchError = SwapController.state.fetchError;
    this.onDebouncedGetSwapCalldata = CoreHelperUtil.debounce(async () => {
      await SwapController.swapTokens();
    }, 200);
    NetworkController.subscribeKey("caipNetwork", (newCaipNetwork) => {
      if (this.caipNetworkId !== (newCaipNetwork == null ? void 0 : newCaipNetwork.id)) {
        this.caipNetworkId = newCaipNetwork == null ? void 0 : newCaipNetwork.id;
        SwapController.resetState();
        SwapController.initializeState();
      }
    });
    this.unsubscribe.push(...[
      ModalController.subscribeKey("open", (isOpen) => {
        if (!isOpen) {
          SwapController.resetState();
        }
      }),
      RouterController.subscribeKey("view", (newRoute) => {
        if (!newRoute.includes("Swap")) {
          SwapController.resetValues();
        }
      }),
      SwapController.subscribe((newState) => {
        this.initialized = newState.initialized;
        this.loadingQuote = newState.loadingQuote;
        this.loadingPrices = newState.loadingPrices;
        this.loadingTransaction = newState.loadingTransaction;
        this.sourceToken = newState.sourceToken;
        this.sourceTokenAmount = newState.sourceTokenAmount;
        this.sourceTokenPriceInUSD = newState.sourceTokenPriceInUSD;
        this.toToken = newState.toToken;
        this.toTokenAmount = newState.toTokenAmount;
        this.toTokenPriceInUSD = newState.toTokenPriceInUSD;
        this.inputError = newState.inputError;
        this.gasPriceInUSD = newState.gasPriceInUSD;
        this.fetchError = newState.fetchError;
      })
    ]);
  }
  firstUpdated() {
    SwapController.initializeState();
    this.watchTokensAndValues();
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe == null ? void 0 : unsubscribe());
    clearInterval(this.interval);
  }
  render() {
    return html`
      <wui-flex flexDirection="column" .padding=${["0", "l", "l", "l"]} gap="s">
        ${this.initialized ? this.templateSwap() : this.templateLoading()}
      </wui-flex>
    `;
  }
  watchTokensAndValues() {
    this.interval = setInterval(() => {
      SwapController.getNetworkTokenPrice();
      SwapController.getMyTokensWithBalance();
      SwapController.swapTokens();
    }, 1e4);
  }
  templateSwap() {
    return html`
      <wui-flex flexDirection="column" gap="s">
        <wui-flex flexDirection="column" alignItems="center" gap="xs" class="swap-inputs-container">
          ${this.templateTokenInput("sourceToken", this.sourceToken)}
          ${this.templateTokenInput("toToken", this.toToken)} ${this.templateReplaceTokensButton()}
        </wui-flex>
        ${this.templateDetails()} ${this.templateActionButton()}
      </wui-flex>
    `;
  }
  actionButtonLabel() {
    if (this.fetchError) {
      return "Swap";
    }
    if (!this.sourceToken || !this.toToken) {
      return "Select token";
    }
    if (!this.sourceTokenAmount) {
      return "Enter amount";
    }
    if (this.inputError) {
      return this.inputError;
    }
    return "Review swap";
  }
  templateReplaceTokensButton() {
    return html`
      <wui-flex class="replace-tokens-button-container">
        <button @click=${this.onSwitchTokens.bind(this)}>
          <wui-icon name="recycleHorizontal" color="fg-250" size="lg"></wui-icon>
        </button>
      </wui-flex>
    `;
  }
  templateLoading() {
    return html`
      <wui-flex flexDirection="column" gap="l">
        <wui-flex flexDirection="column" alignItems="center" gap="xs" class="swap-inputs-container">
          <w3m-swap-input-skeleton target="sourceToken"></w3m-swap-input-skeleton>
          <w3m-swap-input-skeleton target="toToken"></w3m-swap-input-skeleton>
          ${this.templateReplaceTokensButton()}
        </wui-flex>
        ${this.templateActionButton()}
      </wui-flex>
    `;
  }
  templateTokenInput(target, token) {
    var _a2, _b2;
    const myToken = (_a2 = SwapController.state.myTokensWithBalance) == null ? void 0 : _a2.find((ct) => (ct == null ? void 0 : ct.address) === (token == null ? void 0 : token.address));
    const amount = target === "toToken" ? this.toTokenAmount : this.sourceTokenAmount;
    const price = target === "toToken" ? this.toTokenPriceInUSD : this.sourceTokenPriceInUSD;
    let value = parseFloat(amount) * price;
    if (target === "toToken") {
      value -= this.gasPriceInUSD || 0;
    }
    return html`<w3m-swap-input
      .value=${target === "toToken" ? this.toTokenAmount : this.sourceTokenAmount}
      ?disabled=${this.loadingQuote && target === "toToken"}
      .onSetAmount=${this.handleChangeAmount.bind(this)}
      target=${target}
      .token=${token}
      .balance=${(_b2 = myToken == null ? void 0 : myToken.quantity) == null ? void 0 : _b2.numeric}
      .price=${myToken == null ? void 0 : myToken.price}
      .marketValue=${value}
      .onSetMaxValue=${this.onSetMaxValue.bind(this)}
    ></w3m-swap-input>`;
  }
  onSetMaxValue(target, balance) {
    const token = target === "sourceToken" ? this.sourceToken : this.toToken;
    const isNetworkToken = (token == null ? void 0 : token.address) === ConstantsUtil2.NATIVE_TOKEN_ADDRESS;
    let value = "0";
    if (!balance) {
      value = "0";
      this.handleChangeAmount(target, value);
      return;
    }
    if (!this.gasPriceInUSD) {
      value = balance;
      this.handleChangeAmount(target, value);
      return;
    }
    const amountOfTokenGasRequires = NumberUtil.bigNumber(this.gasPriceInUSD.toFixed(5)).dividedBy(this.sourceTokenPriceInUSD);
    const maxValue = isNetworkToken ? NumberUtil.bigNumber(balance).minus(amountOfTokenGasRequires) : NumberUtil.bigNumber(balance);
    this.handleChangeAmount(target, maxValue.isGreaterThan(0) ? maxValue.toFixed(20) : "0");
  }
  templateDetails() {
    if (!this.sourceToken || !this.toToken || this.inputError) {
      return null;
    }
    return html`<w3m-swap-details .detailsOpen=${this.detailsOpen}></w3m-swap-details>`;
  }
  handleChangeAmount(target, value) {
    SwapController.clearError();
    if (target === "sourceToken") {
      SwapController.setSourceTokenAmount(value);
    } else {
      SwapController.setToTokenAmount(value);
    }
    this.onDebouncedGetSwapCalldata();
  }
  templateActionButton() {
    const haveNoTokenSelected = !this.toToken || !this.sourceToken;
    const haveNoAmount = !this.sourceTokenAmount;
    const loading = this.loadingQuote || this.loadingPrices || this.loadingTransaction;
    const disabled = loading || haveNoTokenSelected || haveNoAmount || this.inputError;
    return html` <wui-flex gap="xs">
      <wui-button
        class="action-button"
        fullWidth
        size="lg"
        borderRadius="xs"
        variant=${haveNoTokenSelected ? "neutral" : "main"}
        .loading=${loading}
        .disabled=${disabled}
        @click=${this.onSwapPreview.bind(this)}
      >
        ${this.actionButtonLabel()}
      </wui-button>
    </wui-flex>`;
  }
  onSwitchTokens() {
    SwapController.switchTokens();
  }
  onSwapPreview() {
    var _a2, _b2;
    if (this.fetchError) {
      SwapController.swapTokens();
      return;
    }
    EventsController.sendEvent({
      type: "track",
      event: "INITIATE_SWAP",
      properties: {
        network: this.caipNetworkId || "",
        swapFromToken: ((_a2 = this.sourceToken) == null ? void 0 : _a2.symbol) || "",
        swapToToken: ((_b2 = this.toToken) == null ? void 0 : _b2.symbol) || "",
        swapfromAmount: this.sourceTokenAmount || "",
        swapToAmount: this.toTokenAmount || "",
        isSmartAccount: AccountController.state.preferredAccountType === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT
      }
    });
    RouterController.push("SwapPreview");
  }
};
W3mSwapView.styles = styles_default16;
__decorate26([
  state()
], W3mSwapView.prototype, "interval", void 0);
__decorate26([
  state()
], W3mSwapView.prototype, "detailsOpen", void 0);
__decorate26([
  state()
], W3mSwapView.prototype, "caipNetworkId", void 0);
__decorate26([
  state()
], W3mSwapView.prototype, "initialized", void 0);
__decorate26([
  state()
], W3mSwapView.prototype, "loadingQuote", void 0);
__decorate26([
  state()
], W3mSwapView.prototype, "loadingPrices", void 0);
__decorate26([
  state()
], W3mSwapView.prototype, "loadingTransaction", void 0);
__decorate26([
  state()
], W3mSwapView.prototype, "sourceToken", void 0);
__decorate26([
  state()
], W3mSwapView.prototype, "sourceTokenAmount", void 0);
__decorate26([
  state()
], W3mSwapView.prototype, "sourceTokenPriceInUSD", void 0);
__decorate26([
  state()
], W3mSwapView.prototype, "toToken", void 0);
__decorate26([
  state()
], W3mSwapView.prototype, "toTokenAmount", void 0);
__decorate26([
  state()
], W3mSwapView.prototype, "toTokenPriceInUSD", void 0);
__decorate26([
  state()
], W3mSwapView.prototype, "inputError", void 0);
__decorate26([
  state()
], W3mSwapView.prototype, "gasPriceInUSD", void 0);
__decorate26([
  state()
], W3mSwapView.prototype, "fetchError", void 0);
W3mSwapView = __decorate26([
  customElement("w3m-swap-view")
], W3mSwapView);

// node_modules/@web3modal/scaffold-ui/dist/esm/src/views/w3m-swap-preview-view/styles.js
var styles_default17 = css`
  :host > wui-flex:first-child {
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }

  .preview-container,
  .details-container {
    width: 100%;
  }

  .token-image {
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
    border-radius: 12px;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  .token-item {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-xxs);
    padding: var(--wui-spacing-xs);
    height: 40px;
    border: none;
    border-radius: 80px;
    background: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    cursor: pointer;
    transition: background 0.2s linear;
  }

  .token-item:hover {
    background: var(--wui-color-gray-glass-005);
  }

  .preview-token-details-container {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: var(--wui-spacing-s) var(--wui-spacing-xl);
    border-radius: var(--wui-border-radius-xxs);
    background: var(--wui-color-gray-glass-002);
  }

  .action-buttons-container {
    width: 100%;
    gap: var(--wui-spacing-xs);
  }

  .action-buttons-container > button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    height: 48px;
    border-radius: var(--wui-border-radius-xs);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  .action-buttons-container > button:disabled {
    opacity: 0.8;
    cursor: not-allowed;
  }

  .action-button > wui-loading-spinner {
    display: inline-block;
  }

  .cancel-button:hover,
  .action-button:hover {
    cursor: pointer;
  }

  .action-buttons-container > wui-button.cancel-button {
    flex: 2;
  }

  .action-buttons-container > wui-button.action-button {
    flex: 4;
  }

  .action-buttons-container > button.action-button > wui-text {
    color: white;
  }

  .details-container > wui-flex {
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    width: 100%;
  }

  .details-container > wui-flex > button {
    border: none;
    background: none;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    transition: background 0.2s linear;
  }

  .details-container > wui-flex > button:hover {
    background: var(--wui-color-gray-glass-002);
  }

  .details-content-container {
    padding: var(--wui-spacing-1xs);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details-content-container > wui-flex {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: var(--wui-spacing-s) var(--wui-spacing-xl);
    border-radius: var(--wui-border-radius-xxs);
    background: var(--wui-color-gray-glass-002);
  }
`;

// node_modules/@web3modal/scaffold-ui/dist/esm/src/views/w3m-swap-preview-view/index.js
var __decorate27 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mSwapPreviewView = class W3mSwapPreviewView2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.detailsOpen = true;
    this.approvalTransaction = SwapController.state.approvalTransaction;
    this.swapTransaction = SwapController.state.swapTransaction;
    this.sourceToken = SwapController.state.sourceToken;
    this.sourceTokenAmount = SwapController.state.sourceTokenAmount ?? "";
    this.sourceTokenPriceInUSD = SwapController.state.sourceTokenPriceInUSD;
    this.toToken = SwapController.state.toToken;
    this.toTokenAmount = SwapController.state.toTokenAmount ?? "";
    this.toTokenPriceInUSD = SwapController.state.toTokenPriceInUSD;
    this.caipNetwork = NetworkController.state.caipNetwork;
    this.balanceSymbol = AccountController.state.balanceSymbol;
    this.gasPriceInUSD = SwapController.state.gasPriceInUSD;
    this.inputError = SwapController.state.inputError;
    this.loadingQuote = SwapController.state.loadingQuote;
    this.loadingApprovalTransaction = SwapController.state.loadingApprovalTransaction;
    this.loadingBuildTransaction = SwapController.state.loadingBuildTransaction;
    this.loadingTransaction = SwapController.state.loadingTransaction;
    this.unsubscribe.push(...[
      AccountController.subscribeKey("balanceSymbol", (newBalanceSymbol) => {
        if (this.balanceSymbol !== newBalanceSymbol) {
          RouterController.goBack();
        }
      }),
      NetworkController.subscribeKey("caipNetwork", (newCaipNetwork) => {
        if (this.caipNetwork !== newCaipNetwork) {
          this.caipNetwork = newCaipNetwork;
        }
      }),
      SwapController.subscribe((newState) => {
        this.approvalTransaction = newState.approvalTransaction;
        this.swapTransaction = newState.swapTransaction;
        this.sourceToken = newState.sourceToken;
        this.gasPriceInUSD = newState.gasPriceInUSD;
        this.toToken = newState.toToken;
        this.gasPriceInUSD = newState.gasPriceInUSD;
        this.toTokenPriceInUSD = newState.toTokenPriceInUSD;
        this.sourceTokenAmount = newState.sourceTokenAmount ?? "";
        this.toTokenAmount = newState.toTokenAmount ?? "";
        this.inputError = newState.inputError;
        if (newState.inputError) {
          RouterController.goBack();
        }
        this.loadingQuote = newState.loadingQuote;
        this.loadingApprovalTransaction = newState.loadingApprovalTransaction;
        this.loadingBuildTransaction = newState.loadingBuildTransaction;
        this.loadingTransaction = newState.loadingTransaction;
      })
    ]);
  }
  firstUpdated() {
    SwapController.getTransaction();
    this.refreshTransaction();
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe == null ? void 0 : unsubscribe());
    clearInterval(this.interval);
  }
  render() {
    return html`
      <wui-flex flexDirection="column" .padding=${["0", "l", "l", "l"]} gap="s">
        ${this.templateSwap()}
      </wui-flex>
    `;
  }
  refreshTransaction() {
    this.interval = setInterval(() => {
      if (!SwapController.getApprovalLoadingState()) {
        SwapController.getTransaction();
      }
    }, 1e4);
  }
  templateSwap() {
    var _a2, _b2, _c, _d;
    const sourceTokenText = `${UiHelperUtil.formatNumberToLocalString(parseFloat(this.sourceTokenAmount))} ${(_a2 = this.sourceToken) == null ? void 0 : _a2.symbol}`;
    const toTokenText = `${UiHelperUtil.formatNumberToLocalString(parseFloat(this.toTokenAmount))} ${(_b2 = this.toToken) == null ? void 0 : _b2.symbol}`;
    const sourceTokenValue = parseFloat(this.sourceTokenAmount) * this.sourceTokenPriceInUSD;
    const toTokenValue = parseFloat(this.toTokenAmount) * this.toTokenPriceInUSD - (this.gasPriceInUSD || 0);
    const sentPrice = UiHelperUtil.formatNumberToLocalString(sourceTokenValue);
    const receivePrice = UiHelperUtil.formatNumberToLocalString(toTokenValue);
    const loading = this.loadingQuote || this.loadingBuildTransaction || this.loadingTransaction || this.loadingApprovalTransaction;
    return html`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        <wui-flex class="preview-container" flexDirection="column" alignItems="flex-start" gap="l">
          <wui-flex
            class="preview-token-details-container"
            alignItems="center"
            justifyContent="space-between"
            gap="l"
          >
            <wui-flex flexDirection="column" alignItems="flex-start" gap="4xs">
              <wui-text variant="small-400" color="fg-150">Send</wui-text>
              <wui-text variant="paragraph-400" color="fg-100">$${sentPrice}</wui-text>
            </wui-flex>
            <wui-token-button
              flexDirection="row-reverse"
              text=${sourceTokenText}
              imageSrc=${(_c = this.sourceToken) == null ? void 0 : _c.logoUri}
            >
            </wui-token-button>
          </wui-flex>
          <wui-icon name="recycleHorizontal" color="fg-200" size="md"></wui-icon>
          <wui-flex
            class="preview-token-details-container"
            alignItems="center"
            justifyContent="space-between"
            gap="l"
          >
            <wui-flex flexDirection="column" alignItems="flex-start" gap="4xs">
              <wui-text variant="small-400" color="fg-150">Receive</wui-text>
              <wui-text variant="paragraph-400" color="fg-100">$${receivePrice}</wui-text>
            </wui-flex>
            <wui-token-button
              flexDirection="row-reverse"
              text=${toTokenText}
              imageSrc=${(_d = this.toToken) == null ? void 0 : _d.logoUri}
            >
            </wui-token-button>
          </wui-flex>
        </wui-flex>

        ${this.templateDetails()}

        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="xs">
          <wui-icon size="sm" color="fg-200" name="infoCircle"></wui-icon>
          <wui-text variant="small-400" color="fg-200">Review transaction carefully</wui-text>
        </wui-flex>

        <wui-flex
          class="action-buttons-container"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          gap="xs"
        >
          <wui-button
            class="cancel-button"
            fullWidth
            size="lg"
            borderRadius="xs"
            variant="neutral"
            @click=${this.onCancelTransaction.bind(this)}
          >
            <wui-text variant="paragraph-600" color="fg-200">Cancel</wui-text>
          </wui-button>
          <wui-button
            class="action-button"
            fullWidth
            size="lg"
            borderRadius="xs"
            variant="main"
            ?loading=${loading}
            ?disabled=${loading}
            @click=${this.onSendTransaction.bind(this)}
          >
            <wui-text variant="paragraph-600" color="inverse-100">
              ${this.actionButtonLabel()}
            </wui-text>
          </wui-button>
        </wui-flex>
      </wui-flex>
    `;
  }
  templateDetails() {
    if (!this.sourceToken || !this.toToken || this.inputError) {
      return null;
    }
    return html`<w3m-swap-details .detailsOpen=${this.detailsOpen}></w3m-swap-details>`;
  }
  actionButtonLabel() {
    if (this.loadingApprovalTransaction) {
      return "Approving...";
    }
    if (this.approvalTransaction) {
      return "Approve";
    }
    return "Swap";
  }
  onCancelTransaction() {
    RouterController.goBack();
  }
  onSendTransaction() {
    if (this.approvalTransaction) {
      SwapController.sendTransactionForApproval(this.approvalTransaction);
    } else {
      SwapController.sendTransactionForSwap(this.swapTransaction);
    }
  }
};
W3mSwapPreviewView.styles = styles_default17;
__decorate27([
  state()
], W3mSwapPreviewView.prototype, "interval", void 0);
__decorate27([
  state()
], W3mSwapPreviewView.prototype, "detailsOpen", void 0);
__decorate27([
  state()
], W3mSwapPreviewView.prototype, "approvalTransaction", void 0);
__decorate27([
  state()
], W3mSwapPreviewView.prototype, "swapTransaction", void 0);
__decorate27([
  state()
], W3mSwapPreviewView.prototype, "sourceToken", void 0);
__decorate27([
  state()
], W3mSwapPreviewView.prototype, "sourceTokenAmount", void 0);
__decorate27([
  state()
], W3mSwapPreviewView.prototype, "sourceTokenPriceInUSD", void 0);
__decorate27([
  state()
], W3mSwapPreviewView.prototype, "toToken", void 0);
__decorate27([
  state()
], W3mSwapPreviewView.prototype, "toTokenAmount", void 0);
__decorate27([
  state()
], W3mSwapPreviewView.prototype, "toTokenPriceInUSD", void 0);
__decorate27([
  state()
], W3mSwapPreviewView.prototype, "caipNetwork", void 0);
__decorate27([
  state()
], W3mSwapPreviewView.prototype, "balanceSymbol", void 0);
__decorate27([
  state()
], W3mSwapPreviewView.prototype, "gasPriceInUSD", void 0);
__decorate27([
  state()
], W3mSwapPreviewView.prototype, "inputError", void 0);
__decorate27([
  state()
], W3mSwapPreviewView.prototype, "loadingQuote", void 0);
__decorate27([
  state()
], W3mSwapPreviewView.prototype, "loadingApprovalTransaction", void 0);
__decorate27([
  state()
], W3mSwapPreviewView.prototype, "loadingBuildTransaction", void 0);
__decorate27([
  state()
], W3mSwapPreviewView.prototype, "loadingTransaction", void 0);
W3mSwapPreviewView = __decorate27([
  customElement("w3m-swap-preview-view")
], W3mSwapPreviewView);

// node_modules/@web3modal/scaffold-ui/dist/esm/src/views/w3m-swap-select-token-view/styles.js
var styles_default18 = css`
  :host {
    --tokens-scroll--top-opacity: 0;
    --tokens-scroll--bottom-opacity: 1;
    --suggested-tokens-scroll--left-opacity: 0;
    --suggested-tokens-scroll--right-opacity: 1;
  }

  :host > wui-flex:first-child {
    overflow-y: hidden;
    overflow-x: hidden;
    scrollbar-width: none;
    scrollbar-height: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  .suggested-tokens-container {
    overflow-x: auto;
    mask-image: linear-gradient(
      to right,
      rgba(0, 0, 0, calc(1 - var(--suggested-tokens-scroll--left-opacity))) 0px,
      rgba(200, 200, 200, calc(1 - var(--suggested-tokens-scroll--left-opacity))) 1px,
      black 50px,
      black 90px,
      black calc(100% - 90px),
      black calc(100% - 50px),
      rgba(155, 155, 155, calc(1 - var(--suggested-tokens-scroll--right-opacity))) calc(100% - 1px),
      rgba(0, 0, 0, calc(1 - var(--suggested-tokens-scroll--right-opacity))) 100%
    );
  }

  .suggested-tokens-container::-webkit-scrollbar {
    display: none;
  }

  .tokens-container {
    border-top: 1px solid var(--wui-color-gray-glass-005);
    height: 100%;
    max-height: 390px;
  }

  .tokens {
    width: 100%;
    overflow-y: auto;
    mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, calc(1 - var(--tokens-scroll--top-opacity))) 0px,
      rgba(200, 200, 200, calc(1 - var(--tokens-scroll--top-opacity))) 1px,
      black 50px,
      black 90px,
      black calc(100% - 90px),
      black calc(100% - 50px),
      rgba(155, 155, 155, calc(1 - var(--tokens-scroll--bottom-opacity))) calc(100% - 1px),
      rgba(0, 0, 0, calc(1 - var(--tokens-scroll--bottom-opacity))) 100%
    );
  }

  .network-search-input,
  .select-network-button {
    height: 40px;
  }

  .select-network-button {
    border: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
    background-color: transparent;
    border-radius: var(--wui-border-radius-xxs);
    padding: var(--wui-spacing-xs);
    align-items: center;
    transition: background-color 0.2s linear;
  }

  .select-network-button:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  .select-network-button > wui-image {
    width: 26px;
    height: 26px;
    border-radius: var(--wui-border-radius-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }
`;

// node_modules/@web3modal/scaffold-ui/dist/esm/src/views/w3m-swap-select-token-view/index.js
var __decorate28 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mSwapSelectTokenView = class W3mSwapSelectTokenView2 extends LitElement {
  constructor() {
    var _a2;
    super();
    this.unsubscribe = [];
    this.targetToken = (_a2 = RouterController.state.data) == null ? void 0 : _a2.target;
    this.sourceToken = SwapController.state.sourceToken;
    this.sourceTokenAmount = SwapController.state.sourceTokenAmount;
    this.toToken = SwapController.state.toToken;
    this.myTokensWithBalance = SwapController.state.myTokensWithBalance;
    this.popularTokens = SwapController.state.popularTokens;
    this.searchValue = "";
    this.unsubscribe.push(...[
      SwapController.subscribe((newState) => {
        this.sourceToken = newState.sourceToken;
        this.toToken = newState.toToken;
        this.myTokensWithBalance = newState.myTokensWithBalance;
      })
    ]);
  }
  updated() {
    var _a2, _b2;
    const suggestedTokensContainer = (_a2 = this.renderRoot) == null ? void 0 : _a2.querySelector(".suggested-tokens-container");
    suggestedTokensContainer == null ? void 0 : suggestedTokensContainer.addEventListener("scroll", this.handleSuggestedTokensScroll.bind(this));
    const tokensList = (_b2 = this.renderRoot) == null ? void 0 : _b2.querySelector(".tokens");
    tokensList == null ? void 0 : tokensList.addEventListener("scroll", this.handleTokenListScroll.bind(this));
  }
  disconnectedCallback() {
    var _a2, _b2;
    super.disconnectedCallback();
    const suggestedTokensContainer = (_a2 = this.renderRoot) == null ? void 0 : _a2.querySelector(".suggested-tokens-container");
    const tokensList = (_b2 = this.renderRoot) == null ? void 0 : _b2.querySelector(".tokens");
    suggestedTokensContainer == null ? void 0 : suggestedTokensContainer.removeEventListener("scroll", this.handleSuggestedTokensScroll.bind(this));
    tokensList == null ? void 0 : tokensList.removeEventListener("scroll", this.handleTokenListScroll.bind(this));
    clearInterval(this.interval);
  }
  render() {
    return html`
      <wui-flex flexDirection="column" gap="s">
        ${this.templateSearchInput()} ${this.templateSuggestedTokens()} ${this.templateTokens()}
      </wui-flex>
    `;
  }
  onSelectToken(token) {
    if (this.targetToken === "sourceToken") {
      SwapController.setSourceToken(token);
    } else {
      SwapController.setToToken(token);
      if (this.sourceToken && this.sourceTokenAmount) {
        SwapController.swapTokens();
      }
    }
    RouterController.goBack();
  }
  templateSearchInput() {
    return html`
      <wui-flex .padding=${["3xs", "s", "0", "s"]} gap="xs">
        <wui-input-text
          class="network-search-input"
          size="sm"
          placeholder="Search token"
          icon="search"
          .value=${this.searchValue}
          @inputChange=${this.onSearchInputChange.bind(this)}
        ></wui-input-text>
      </wui-flex>
    `;
  }
  templateTokens() {
    const yourTokens = this.myTokensWithBalance ? Object.values(this.myTokensWithBalance) : [];
    const tokens = this.popularTokens ? this.popularTokens : [];
    const filteredYourTokens = this.filterTokensWithText(yourTokens, this.searchValue);
    const filteredTokens = this.filterTokensWithText(tokens, this.searchValue);
    return html`
      <wui-flex class="tokens-container">
        <wui-flex class="tokens" .padding=${["0", "s", "s", "s"]} flexDirection="column">
          ${(filteredYourTokens == null ? void 0 : filteredYourTokens.length) > 0 ? html`
                <wui-flex justifyContent="flex-start" padding="s">
                  <wui-text variant="paragraph-500" color="fg-200">Your tokens</wui-text>
                </wui-flex>
                ${filteredYourTokens.map((token) => {
      var _a2, _b2, _c;
      const selected = token.symbol === ((_a2 = this.sourceToken) == null ? void 0 : _a2.symbol) || token.symbol === ((_b2 = this.toToken) == null ? void 0 : _b2.symbol);
      return html`
                    <wui-token-list-item
                      name=${token.name}
                      ?disabled=${selected}
                      symbol=${token.symbol}
                      price=${token == null ? void 0 : token.price}
                      amount=${(_c = token == null ? void 0 : token.quantity) == null ? void 0 : _c.numeric}
                      imageSrc=${token.logoUri}
                      @click=${() => {
        if (!selected) {
          this.onSelectToken(token);
        }
      }}
                    >
                    </wui-token-list-item>
                  `;
    })}
              ` : null}

          <wui-flex justifyContent="flex-start" padding="s">
            <wui-text variant="paragraph-500" color="fg-200">Tokens</wui-text>
          </wui-flex>
          ${(filteredTokens == null ? void 0 : filteredTokens.length) > 0 ? filteredTokens.map((token) => html`
                  <wui-token-list-item
                    name=${token.name}
                    symbol=${token.symbol}
                    imageSrc=${token.logoUri}
                    @click=${() => this.onSelectToken(token)}
                  >
                  </wui-token-list-item>
                `) : null}
        </wui-flex>
      </wui-flex>
    `;
  }
  templateSuggestedTokens() {
    const tokens = SwapController.state.suggestedTokens ? SwapController.state.suggestedTokens.slice(0, 8) : null;
    if (!tokens) {
      return null;
    }
    return html`
      <wui-flex class="suggested-tokens-container" .padding=${["0", "s", "0", "s"]} gap="xs">
        ${tokens.map((token) => html`
            <wui-token-button
              text=${token.symbol}
              imageSrc=${token.logoUri}
              @click=${() => this.onSelectToken(token)}
            >
            </wui-token-button>
          `)}
      </wui-flex>
    `;
  }
  onSearchInputChange(event) {
    this.searchValue = event.detail;
  }
  handleSuggestedTokensScroll() {
    var _a2;
    const container = (_a2 = this.renderRoot) == null ? void 0 : _a2.querySelector(".suggested-tokens-container");
    if (!container) {
      return;
    }
    container.style.setProperty("--suggested-tokens-scroll--left-opacity", MathUtil.interpolate([0, 100], [0, 1], container.scrollLeft).toString());
    container.style.setProperty("--suggested-tokens-scroll--right-opacity", MathUtil.interpolate([0, 100], [0, 1], container.scrollWidth - container.scrollLeft - container.offsetWidth).toString());
  }
  handleTokenListScroll() {
    var _a2;
    const container = (_a2 = this.renderRoot) == null ? void 0 : _a2.querySelector(".tokens");
    if (!container) {
      return;
    }
    container.style.setProperty("--tokens-scroll--top-opacity", MathUtil.interpolate([0, 100], [0, 1], container.scrollTop).toString());
    container.style.setProperty("--tokens-scroll--bottom-opacity", MathUtil.interpolate([0, 100], [0, 1], container.scrollHeight - container.scrollTop - container.offsetHeight).toString());
  }
  filterTokensWithText(tokens, text) {
    return tokens.filter((token) => `${token.symbol} ${token.name} ${token.address}`.toLowerCase().includes(text.toLowerCase()));
  }
};
W3mSwapSelectTokenView.styles = styles_default18;
__decorate28([
  state()
], W3mSwapSelectTokenView.prototype, "interval", void 0);
__decorate28([
  state()
], W3mSwapSelectTokenView.prototype, "targetToken", void 0);
__decorate28([
  state()
], W3mSwapSelectTokenView.prototype, "sourceToken", void 0);
__decorate28([
  state()
], W3mSwapSelectTokenView.prototype, "sourceTokenAmount", void 0);
__decorate28([
  state()
], W3mSwapSelectTokenView.prototype, "toToken", void 0);
__decorate28([
  state()
], W3mSwapSelectTokenView.prototype, "myTokensWithBalance", void 0);
__decorate28([
  state()
], W3mSwapSelectTokenView.prototype, "popularTokens", void 0);
__decorate28([
  state()
], W3mSwapSelectTokenView.prototype, "searchValue", void 0);
W3mSwapSelectTokenView = __decorate28([
  customElement("w3m-swap-select-token-view")
], W3mSwapSelectTokenView);

// node_modules/@web3modal/scaffold-ui/dist/esm/src/views/w3m-transactions-view/styles.js
var styles_default19 = css`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }
`;

// node_modules/@web3modal/scaffold-ui/dist/esm/src/views/w3m-transactions-view/index.js
var __decorate29 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mTransactionsView = class W3mTransactionsView2 extends LitElement {
  render() {
    return html`
      <wui-flex flexDirection="column" .padding=${["0", "m", "m", "m"]} gap="s">
        <w3m-activity-list page="activity"></w3m-activity-list>
      </wui-flex>
    `;
  }
};
W3mTransactionsView.styles = styles_default19;
W3mTransactionsView = __decorate29([
  customElement("w3m-transactions-view")
], W3mTransactionsView);

// node_modules/@web3modal/scaffold-ui/dist/esm/src/views/w3m-what-is-a-network-view/index.js
var __decorate30 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var data = [
  {
    images: ["network", "layers", "system"],
    title: "The system’s nuts and bolts",
    text: "A network is what brings the blockchain to life, as this technical infrastructure allows apps to access the ledger and smart contract services."
  },
  {
    images: ["noun", "defiAlt", "dao"],
    title: "Designed for different uses",
    text: "Each network is designed differently, and may therefore suit certain apps and experiences."
  }
];
var W3mWhatIsANetworkView = class W3mWhatIsANetworkView2 extends LitElement {
  render() {
    return html`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl", "xl", "xl", "xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${data}></w3m-help-widget>
        <wui-button
          variant="main"
          size="md"
          @click=${() => {
      CoreHelperUtil.openHref("https://ethereum.org/en/developers/docs/networks/", "_blank");
    }}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>
    `;
  }
};
W3mWhatIsANetworkView = __decorate30([
  customElement("w3m-what-is-a-network-view")
], W3mWhatIsANetworkView);

// node_modules/@web3modal/scaffold-ui/dist/esm/src/views/w3m-what-is-a-wallet-view/index.js
var __decorate31 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var data2 = [
  {
    images: ["login", "profile", "lock"],
    title: "One login for all of web3",
    text: "Log in to any app by connecting your wallet. Say goodbye to countless passwords!"
  },
  {
    images: ["defi", "nft", "eth"],
    title: "A home for your digital assets",
    text: "A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs."
  },
  {
    images: ["browser", "noun", "dao"],
    title: "Your gateway to a new web",
    text: "With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more."
  }
];
var W3mWhatIsAWalletView = class W3mWhatIsAWalletView2 extends LitElement {
  render() {
    return html`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl", "xl", "xl", "xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${data2}></w3m-help-widget>
        <wui-button variant="main" size="md" @click=${this.onGetWallet.bind(this)}>
          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>
          Get a wallet
        </wui-button>
      </wui-flex>
    `;
  }
  onGetWallet() {
    EventsController.sendEvent({ type: "track", event: "CLICK_GET_WALLET" });
    RouterController.push("GetWallet");
  }
};
W3mWhatIsAWalletView = __decorate31([
  customElement("w3m-what-is-a-wallet-view")
], W3mWhatIsAWalletView);

// node_modules/@web3modal/scaffold-ui/dist/esm/src/views/w3m-what-is-a-buy-view/index.js
var __decorate32 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mWhatIsABuyView = class W3mWhatIsABuyView2 extends LitElement {
  render() {
    return html`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl", "3xl", "xl", "3xl"]}
        alignItems="center"
        gap="xl"
      >
        <wui-visual name="onrampCard"></wui-visual>
        <wui-flex flexDirection="column" gap="xs" alignItems="center">
          <wui-text align="center" variant="paragraph-500" color="fg-100">
            Quickly and easily buy digital assets!
          </wui-text>
          <wui-text align="center" variant="small-400" color="fg-200">
            Simply select your preferred onramp provider and add digital assets to your account
            using your credit card or bank transfer
          </wui-text>
        </wui-flex>
        <wui-button @click=${RouterController.goBack}>
          <wui-icon size="sm" color="inherit" name="add" slot="iconLeft"></wui-icon>
          Buy
        </wui-button>
      </wui-flex>
    `;
  }
};
W3mWhatIsABuyView = __decorate32([
  customElement("w3m-what-is-a-buy-view")
], W3mWhatIsABuyView);

// node_modules/@web3modal/scaffold-ui/dist/esm/src/utils/w3m-email-otp-widget/styles.js
var styles_default20 = css`
  wui-loading-spinner {
    margin: 9px auto;
  }

  .email-display,
  .email-display wui-text {
    max-width: 100%;
  }
`;

// node_modules/@web3modal/scaffold-ui/dist/esm/src/utils/w3m-email-otp-widget/index.js
var __decorate33 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var OTP_LENGTH = 6;
var W3mEmailOtpWidget = class W3mEmailOtpWidget2 extends LitElement {
  firstUpdated() {
    this.startOTPTimeout();
  }
  disconnectedCallback() {
    clearTimeout(this.OTPTimeout);
  }
  constructor() {
    var _a2;
    super();
    this.loading = false;
    this.timeoutTimeLeft = W3mFrameHelpers.getTimeToNextEmailLogin();
    this.error = "";
    this.otp = "";
    this.email = (_a2 = RouterController.state.data) == null ? void 0 : _a2.email;
    this.authConnector = ConnectorController.getAuthConnector();
  }
  render() {
    if (!this.email) {
      throw new Error("w3m-email-otp-widget: No email provided");
    }
    const isResendDisabled = Boolean(this.timeoutTimeLeft);
    const footerLabels = this.getFooterLabels(isResendDisabled);
    return html`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["l", "0", "l", "0"]}
        gap="l"
      >
        <wui-flex
          class="email-display"
          flexDirection="column"
          alignItems="center"
          .padding=${["0", "xl", "0", "xl"]}
        >
          <wui-text variant="paragraph-400" color="fg-100" align="center">
            Enter the code we sent to
          </wui-text>
          <wui-text variant="paragraph-500" color="fg-100" lineClamp="1" align="center">
            ${this.email}
          </wui-text>
        </wui-flex>

        <wui-text variant="small-400" color="fg-200">The code expires in 20 minutes</wui-text>

        ${this.loading ? html`<wui-loading-spinner size="xl" color="accent-100"></wui-loading-spinner>` : html` <wui-flex flexDirection="column" alignItems="center" gap="xs">
              <wui-otp
                dissabled
                length="6"
                @inputChange=${this.onOtpInputChange.bind(this)}
                .otp=${this.otp}
              ></wui-otp>
              ${this.error ? html`
                    <wui-text variant="small-400" align="center" color="error-100">
                      ${this.error}. Try Again
                    </wui-text>
                  ` : null}
            </wui-flex>`}

        <wui-flex alignItems="center" gap="xs">
          <wui-text variant="small-400" color="fg-200">${footerLabels.title}</wui-text>
          <wui-link @click=${this.onResendCode.bind(this)} .disabled=${isResendDisabled}>
            ${footerLabels.action}
          </wui-link>
        </wui-flex>
      </wui-flex>
    `;
  }
  startOTPTimeout() {
    this.timeoutTimeLeft = W3mFrameHelpers.getTimeToNextEmailLogin();
    this.OTPTimeout = setInterval(() => {
      if (this.timeoutTimeLeft > 0) {
        this.timeoutTimeLeft = W3mFrameHelpers.getTimeToNextEmailLogin();
      } else {
        clearInterval(this.OTPTimeout);
      }
    }, 1e3);
  }
  async onOtpInputChange(event) {
    var _a2;
    try {
      if (!this.loading) {
        this.otp = event.detail;
        if (this.authConnector && this.otp.length === OTP_LENGTH) {
          this.loading = true;
          await ((_a2 = this.onOtpSubmit) == null ? void 0 : _a2.call(this, this.otp));
        }
      }
    } catch (error) {
      this.error = CoreHelperUtil.parseError(error);
      this.loading = false;
    }
  }
  async onResendCode() {
    try {
      if (this.onOtpResend) {
        if (!this.loading && !this.timeoutTimeLeft) {
          this.error = "";
          this.otp = "";
          const authConnector = ConnectorController.getAuthConnector();
          if (!authConnector || !this.email) {
            throw new Error("w3m-email-otp-widget: Unable to resend email");
          }
          this.loading = true;
          await this.onOtpResend(this.email);
          this.startOTPTimeout();
          SnackController.showSuccess("Code email resent");
        }
      } else if (this.onStartOver) {
        this.onStartOver();
      }
    } catch (error) {
      SnackController.showError(error);
    } finally {
      this.loading = false;
    }
  }
  getFooterLabels(isResendDisabled) {
    if (this.onStartOver) {
      return {
        title: "Something wrong?",
        action: `Try again ${isResendDisabled ? `in ${this.timeoutTimeLeft}s` : ""}`
      };
    }
    return {
      title: `Didn't receive it?`,
      action: `Resend ${isResendDisabled ? `in ${this.timeoutTimeLeft}s` : "Code"}`
    };
  }
};
W3mEmailOtpWidget.styles = styles_default20;
__decorate33([
  state()
], W3mEmailOtpWidget.prototype, "loading", void 0);
__decorate33([
  state()
], W3mEmailOtpWidget.prototype, "timeoutTimeLeft", void 0);
__decorate33([
  state()
], W3mEmailOtpWidget.prototype, "error", void 0);
W3mEmailOtpWidget = __decorate33([
  customElement("w3m-email-otp-widget")
], W3mEmailOtpWidget);

// node_modules/@web3modal/scaffold-ui/dist/esm/src/views/w3m-email-verify-otp-view/index.js
var __decorate34 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mEmailVerifyOtpView = class W3mEmailVerifyOtpView2 extends W3mEmailOtpWidget {
  constructor() {
    super();
    this.unsubscribe = [];
    this.smartAccountDeployed = AccountController.state.smartAccountDeployed;
    this.onOtpSubmit = async (otp) => {
      try {
        if (this.authConnector) {
          const smartAccountEnabled = NetworkController.checkIfSmartAccountEnabled();
          await this.authConnector.provider.connectOtp({ otp });
          EventsController.sendEvent({ type: "track", event: "EMAIL_VERIFICATION_CODE_PASS" });
          await ConnectionController.connectExternal(this.authConnector);
          EventsController.sendEvent({
            type: "track",
            event: "CONNECT_SUCCESS",
            properties: { method: "email", name: this.authConnector.name || "Unknown" }
          });
          if (AccountController.state.allAccounts.length > 1) {
            RouterController.push("SelectAddresses");
          } else if (smartAccountEnabled && !this.smartAccountDeployed) {
            RouterController.push("UpgradeToSmartAccount");
          } else {
            ModalController.close();
          }
        }
      } catch (error) {
        EventsController.sendEvent({ type: "track", event: "EMAIL_VERIFICATION_CODE_FAIL" });
        throw error;
      }
    };
    this.onOtpResend = async (email) => {
      if (this.authConnector) {
        await this.authConnector.provider.connectEmail({ email });
        EventsController.sendEvent({ type: "track", event: "EMAIL_VERIFICATION_CODE_SENT" });
      }
    };
    this.unsubscribe.push(AccountController.subscribeKey("smartAccountDeployed", (val) => {
      this.smartAccountDeployed = val;
    }));
  }
};
__decorate34([
  state()
], W3mEmailVerifyOtpView.prototype, "smartAccountDeployed", void 0);
W3mEmailVerifyOtpView = __decorate34([
  customElement("w3m-email-verify-otp-view")
], W3mEmailVerifyOtpView);

// node_modules/@web3modal/scaffold-ui/dist/esm/src/views/w3m-email-verify-device-view/styles.js
var styles_default21 = css`
  wui-icon-box {
    height: var(--wui-icon-box-size-xl);
    width: var(--wui-icon-box-size-xl);
  }
`;

// node_modules/@web3modal/scaffold-ui/dist/esm/src/views/w3m-email-verify-device-view/index.js
var __decorate35 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mEmailVerifyDeviceView = class W3mEmailVerifyDeviceView2 extends LitElement {
  constructor() {
    var _a2;
    super();
    this.email = (_a2 = RouterController.state.data) == null ? void 0 : _a2.email;
    this.authConnector = ConnectorController.getAuthConnector();
    this.loading = false;
    this.listenForDeviceApproval();
  }
  render() {
    if (!this.email) {
      throw new Error("w3m-email-verify-device-view: No email provided");
    }
    if (!this.authConnector) {
      throw new Error("w3m-email-verify-device-view: No auth connector provided");
    }
    return html`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["xxl", "s", "xxl", "s"]}
        gap="l"
      >
        <wui-icon-box
          size="xl"
          iconcolor="accent-100"
          backgroundcolor="accent-100"
          icon="verify"
          background="opaque"
        ></wui-icon-box>

        <wui-flex flexDirection="column" alignItems="center" gap="s">
          <wui-flex flexDirection="column" alignItems="center">
            <wui-text variant="paragraph-400" color="fg-100">
              Approve the login link we sent to
            </wui-text>
            <wui-text variant="paragraph-400" color="fg-100"><b>${this.email}</b></wui-text>
          </wui-flex>

          <wui-text variant="small-400" color="fg-200" align="center">
            The code expires in 20 minutes
          </wui-text>

          <wui-flex alignItems="center" id="w3m-resend-section" gap="xs">
            <wui-text variant="small-400" color="fg-100" align="center">
              Didn't receive it?
            </wui-text>
            <wui-link @click=${this.onResendCode.bind(this)} .disabled=${this.loading}>
              Resend email
            </wui-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `;
  }
  async listenForDeviceApproval() {
    if (this.authConnector) {
      try {
        await this.authConnector.provider.connectDevice();
        EventsController.sendEvent({ type: "track", event: "DEVICE_REGISTERED_FOR_EMAIL" });
        EventsController.sendEvent({ type: "track", event: "EMAIL_VERIFICATION_CODE_SENT" });
        RouterController.replace("EmailVerifyOtp", { email: this.email });
      } catch (error) {
        RouterController.goBack();
      }
    }
  }
  async onResendCode() {
    try {
      if (!this.loading) {
        if (!this.authConnector || !this.email) {
          throw new Error("w3m-email-login-widget: Unable to resend email");
        }
        this.loading = true;
        await this.authConnector.provider.connectEmail({ email: this.email });
        this.listenForDeviceApproval();
        SnackController.showSuccess("Code email resent");
      }
    } catch (error) {
      SnackController.showError(error);
    } finally {
      this.loading = false;
    }
  }
};
W3mEmailVerifyDeviceView.styles = styles_default21;
__decorate35([
  state()
], W3mEmailVerifyDeviceView.prototype, "loading", void 0);
W3mEmailVerifyDeviceView = __decorate35([
  customElement("w3m-email-verify-device-view")
], W3mEmailVerifyDeviceView);

// node_modules/@web3modal/scaffold-ui/dist/esm/src/views/w3m-approve-transaction-view/styles.js
var styles_default22 = css`
  div {
    width: 100%;
    height: 400px;
  }

  [data-ready='false'] {
    transform: scale(1.05);
  }

  @media (max-width: 430px) {
    [data-ready='false'] {
      transform: translateY(-50px);
    }
  }
`;

// node_modules/@web3modal/scaffold-ui/dist/esm/src/views/w3m-approve-transaction-view/index.js
var __decorate36 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var PAGE_HEIGHT = 400;
var PAGE_WIDTH = 360;
var HEADER_HEIGHT = 64;
var W3mApproveTransactionView = class W3mApproveTransactionView2 extends LitElement {
  constructor() {
    super();
    this.bodyObserver = void 0;
    this.unsubscribe = [];
    this.iframe = document.getElementById("w3m-iframe");
    this.ready = false;
    this.unsubscribe.push(...[
      ModalController.subscribeKey("open", (isOpen) => {
        if (!isOpen) {
          this.onHideIframe();
          RouterController.popTransactionStack();
        }
      })
    ]);
  }
  disconnectedCallback() {
    var _a2;
    this.onHideIframe();
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
    (_a2 = this.bodyObserver) == null ? void 0 : _a2.unobserve(window.document.body);
  }
  async firstUpdated() {
    await this.syncTheme();
    this.iframe.style.display = "block";
    this.bodyObserver = new ResizeObserver((entries) => {
      var _a2, _b2;
      const contentBoxSize = (_a2 = entries == null ? void 0 : entries[0]) == null ? void 0 : _a2.contentBoxSize;
      const width = (_b2 = contentBoxSize == null ? void 0 : contentBoxSize[0]) == null ? void 0 : _b2.inlineSize;
      this.iframe.style.height = `${PAGE_HEIGHT}px`;
      if (width && width <= 430) {
        this.iframe.style.width = "100%";
        this.iframe.style.left = "0px";
        this.iframe.style.bottom = "0px";
        this.iframe.style.top = "unset";
      } else {
        this.iframe.style.width = `${PAGE_WIDTH}px`;
        this.iframe.style.left = `calc(50% - ${PAGE_WIDTH / 2}px)`;
        this.iframe.style.top = `calc(50% - ${PAGE_HEIGHT / 2}px + ${HEADER_HEIGHT / 2}px)`;
        this.iframe.style.bottom = "unset";
      }
      this.ready = true;
    });
    this.bodyObserver.observe(window.document.body);
  }
  render() {
    if (this.ready) {
      this.onShowIframe();
    }
    return html`<div data-ready=${this.ready}></div>`;
  }
  onShowIframe() {
    const isMobile = window.innerWidth <= 430;
    this.iframe.animate([
      { opacity: 0, transform: isMobile ? "translateY(50px)" : "scale(.95)" },
      { opacity: 1, transform: isMobile ? "translateY(0)" : "scale(1)" }
    ], { duration: 200, easing: "ease", fill: "forwards" });
  }
  async onHideIframe() {
    this.iframe.style.display = "none";
    await this.iframe.animate([{ opacity: 1 }, { opacity: 0 }], {
      duration: 200,
      easing: "ease",
      fill: "forwards"
    }).finished;
  }
  async syncTheme() {
    const authConnector = ConnectorController.getAuthConnector();
    if (authConnector) {
      const themeMode = ThemeController.getSnapshot().themeMode;
      const themeVariables = ThemeController.getSnapshot().themeVariables;
      await authConnector.provider.syncTheme({
        themeVariables,
        w3mThemeVariables: getW3mThemeVariables(themeVariables, themeMode)
      });
    }
  }
};
W3mApproveTransactionView.styles = styles_default22;
__decorate36([
  state()
], W3mApproveTransactionView.prototype, "ready", void 0);
W3mApproveTransactionView = __decorate36([
  customElement("w3m-approve-transaction-view")
], W3mApproveTransactionView);

// node_modules/@web3modal/scaffold-ui/dist/esm/src/views/w3m-upgrade-wallet-view/index.js
var __decorate37 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mUpgradeWalletView = class W3mUpgradeWalletView2 extends LitElement {
  render() {
    return html`
      <wui-flex flexDirection="column" alignItems="center" gap="xl" padding="xl">
        <wui-text variant="paragraph-400" color="fg-100">Follow the instructions on</wui-text>
        <wui-chip
          icon="externalLink"
          variant="fill"
          href=${ConstantsUtil2.SECURE_SITE_DASHBOARD}
          imageSrc=${ConstantsUtil2.SECURE_SITE_FAVICON}
          data-testid="w3m-secure-website-button"
        >
        </wui-chip>
        <wui-text variant="small-400" color="fg-200">
          You will have to reconnect for security reasons
        </wui-text>
      </wui-flex>
    `;
  }
};
W3mUpgradeWalletView = __decorate37([
  customElement("w3m-upgrade-wallet-view")
], W3mUpgradeWalletView);

// node_modules/@web3modal/scaffold-ui/dist/esm/src/views/w3m-upgrade-to-smart-account-view/index.js
var __decorate38 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mUpgradeToSmartAccountView = class W3mUpgradeToSmartAccountView2 extends LitElement {
  constructor() {
    super(...arguments);
    this.authConnector = ConnectorController.getAuthConnector();
    this.loading = false;
    this.setPreferSmartAccount = async () => {
      if (this.authConnector) {
        try {
          this.loading = true;
          await ConnectionController.setPreferredAccountType(W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT);
          this.loading = false;
          RouterUtil.navigateAfterPreferredAccountTypeSelect();
        } catch (e) {
          SnackController.showError("Error upgrading to smart account");
        }
      }
    };
  }
  render() {
    return html`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="xxl"
        .padding=${["0", "0", "l", "0"]}
      >
        ${this.onboardingTemplate()} ${this.buttonsTemplate()}
        <wui-link
          @click=${() => {
      CoreHelperUtil.openHref(NavigationUtil.URLS.FAQ, "_blank");
    }}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-link>
      </wui-flex>
    `;
  }
  onboardingTemplate() {
    return html` <wui-flex
      flexDirection="column"
      gap="xxl"
      alignItems="center"
      .padding=${["0", "xxl", "0", "xxl"]}
    >
      <wui-flex gap="s" alignItems="center" justifyContent="center">
        <wui-visual name="google"></wui-visual>
        <wui-visual name="pencil"></wui-visual>
        <wui-visual name="lightbulb"></wui-visual>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="s">
        <wui-text align="center" variant="medium-600" color="fg-100">
          Discover Smart Accounts
        </wui-text>
        <wui-text align="center" variant="paragraph-400" color="fg-100">
          Access advanced features such as username, social login, improved security and a smoother
          user experience!
        </wui-text>
      </wui-flex>
    </wui-flex>`;
  }
  buttonsTemplate() {
    return html`<wui-flex .padding=${["0", "2l", "0", "2l"]} gap="s">
      <wui-button
        variant="accent"
        @click=${this.redirectToAccount.bind(this)}
        size="lg"
        borderRadius="xs"
      >
        Do it later
      </wui-button>
      <wui-button
        .loading=${this.loading}
        size="lg"
        borderRadius="xs"
        @click=${this.setPreferSmartAccount.bind(this)}
        >Continue
      </wui-button>
    </wui-flex>`;
  }
  redirectToAccount() {
    RouterController.push("Account");
  }
};
__decorate38([
  state()
], W3mUpgradeToSmartAccountView.prototype, "authConnector", void 0);
__decorate38([
  state()
], W3mUpgradeToSmartAccountView.prototype, "loading", void 0);
W3mUpgradeToSmartAccountView = __decorate38([
  customElement("w3m-upgrade-to-smart-account-view")
], W3mUpgradeToSmartAccountView);

// node_modules/@web3modal/scaffold-ui/dist/esm/src/views/w3m-update-email-wallet-view/styles.js
var styles_default23 = css`
  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }
`;

// node_modules/@web3modal/scaffold-ui/dist/esm/src/views/w3m-update-email-wallet-view/index.js
var __decorate39 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mUpdateEmailWalletView = class W3mUpdateEmailWalletView2 extends LitElement {
  constructor() {
    var _a2;
    super(...arguments);
    this.formRef = createRef();
    this.initialEmail = ((_a2 = RouterController.state.data) == null ? void 0 : _a2.email) ?? "";
    this.email = "";
    this.loading = false;
  }
  firstUpdated() {
    var _a2;
    (_a2 = this.formRef.value) == null ? void 0 : _a2.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        this.onSubmitEmail(event);
      }
    });
  }
  render() {
    const showSubmit = !this.loading && this.email.length > 3 && this.email !== this.initialEmail;
    return html`
      <wui-flex flexDirection="column" padding="m" gap="m">
        <form ${ref(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
          <wui-email-input
            value=${this.initialEmail}
            .disabled=${this.loading}
            @inputChange=${this.onEmailInputChange.bind(this)}
          >
          </wui-email-input>
          <input type="submit" hidden />
        </form>

        <wui-flex gap="s">
          <wui-button size="md" variant="neutral" fullWidth @click=${RouterController.goBack}>
            Cancel
          </wui-button>

          <wui-button
            size="md"
            variant="main"
            fullWidth
            @click=${this.onSubmitEmail.bind(this)}
            .disabled=${!showSubmit}
            .loading=${this.loading}
          >
            Save
          </wui-button>
        </wui-flex>
      </wui-flex>
    `;
  }
  onEmailInputChange(event) {
    this.email = event.detail;
  }
  async onSubmitEmail(event) {
    try {
      if (this.loading) {
        return;
      }
      this.loading = true;
      event.preventDefault();
      const authConnector = ConnectorController.getAuthConnector();
      if (!authConnector) {
        throw new Error("w3m-update-email-wallet: Auth connector not found");
      }
      const response = await authConnector.provider.updateEmail({ email: this.email });
      EventsController.sendEvent({ type: "track", event: "EMAIL_EDIT" });
      if (response.action === "VERIFY_SECONDARY_OTP") {
        RouterController.push("UpdateEmailSecondaryOtp", {
          email: this.initialEmail,
          newEmail: this.email
        });
      } else {
        RouterController.push("UpdateEmailPrimaryOtp", {
          email: this.initialEmail,
          newEmail: this.email
        });
      }
    } catch (error) {
      SnackController.showError(error);
      this.loading = false;
    }
  }
};
W3mUpdateEmailWalletView.styles = styles_default23;
__decorate39([
  state()
], W3mUpdateEmailWalletView.prototype, "email", void 0);
__decorate39([
  state()
], W3mUpdateEmailWalletView.prototype, "loading", void 0);
W3mUpdateEmailWalletView = __decorate39([
  customElement("w3m-update-email-wallet-view")
], W3mUpdateEmailWalletView);

// node_modules/@web3modal/scaffold-ui/dist/esm/src/views/w3m-update-email-primary-otp-view/index.js
var __decorate40 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mUpdateEmailPrimaryOtpView = class W3mUpdateEmailPrimaryOtpView2 extends W3mEmailOtpWidget {
  constructor() {
    var _a2;
    super();
    this.email = (_a2 = RouterController.state.data) == null ? void 0 : _a2.email;
    this.onOtpSubmit = async (otp) => {
      try {
        if (this.authConnector) {
          await this.authConnector.provider.updateEmailPrimaryOtp({ otp });
          EventsController.sendEvent({ type: "track", event: "EMAIL_VERIFICATION_CODE_PASS" });
          RouterController.replace("UpdateEmailSecondaryOtp", RouterController.state.data);
        }
      } catch (error) {
        EventsController.sendEvent({ type: "track", event: "EMAIL_VERIFICATION_CODE_FAIL" });
        throw error;
      }
    };
    this.onStartOver = () => {
      RouterController.replace("UpdateEmailWallet", RouterController.state.data);
    };
  }
};
W3mUpdateEmailPrimaryOtpView = __decorate40([
  customElement("w3m-update-email-primary-otp-view")
], W3mUpdateEmailPrimaryOtpView);

// node_modules/@web3modal/scaffold-ui/dist/esm/src/views/w3m-update-email-secondary-otp-view/index.js
var __decorate41 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mUpdateEmailSecondaryOtpView = class W3mUpdateEmailSecondaryOtpView2 extends W3mEmailOtpWidget {
  constructor() {
    var _a2;
    super();
    this.email = (_a2 = RouterController.state.data) == null ? void 0 : _a2.newEmail;
    this.onOtpSubmit = async (otp) => {
      try {
        if (this.authConnector) {
          await this.authConnector.provider.updateEmailSecondaryOtp({ otp });
          EventsController.sendEvent({ type: "track", event: "EMAIL_VERIFICATION_CODE_PASS" });
          RouterController.reset("Account");
        }
      } catch (error) {
        EventsController.sendEvent({ type: "track", event: "EMAIL_VERIFICATION_CODE_FAIL" });
        throw error;
      }
    };
    this.onStartOver = () => {
      RouterController.replace("UpdateEmailWallet", RouterController.state.data);
    };
  }
};
W3mUpdateEmailSecondaryOtpView = __decorate41([
  customElement("w3m-update-email-secondary-otp-view")
], W3mUpdateEmailSecondaryOtpView);

// node_modules/@web3modal/scaffold-ui/dist/esm/src/views/w3m-unsupported-chain-view/styles.js
var styles_default24 = css`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`;

// node_modules/@web3modal/scaffold-ui/dist/esm/src/views/w3m-unsupported-chain-view/index.js
var __decorate42 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mUnsupportedChainView = class W3mUnsupportedChainView2 extends LitElement {
  constructor() {
    var _a2;
    super(...arguments);
    this.swapUnsupportedChain = (_a2 = RouterController.state.data) == null ? void 0 : _a2.swapUnsupportedChain;
    this.disconecting = false;
  }
  render() {
    return html`
      <wui-flex class="container" flexDirection="column" gap="0">
        <wui-flex
          class="container"
          flexDirection="column"
          .padding=${["m", "xl", "xs", "xl"]}
          alignItems="center"
          gap="xl"
        >
          ${this.descriptionTemplate()}
        </wui-flex>

        <wui-flex flexDirection="column" padding="s" gap="xs">
          ${this.networksTemplate()}
        </wui-flex>

        <wui-separator text="or"></wui-separator>
        <wui-flex flexDirection="column" padding="s" gap="xs">
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="disconnect"
            ?chevron=${false}
            .loading=${this.disconecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `;
  }
  descriptionTemplate() {
    if (this.swapUnsupportedChain) {
      return html`
        <wui-text variant="small-400" color="fg-200" align="center">
          The swap feature doesn’t support your current network. Switch to an available option to
          continue.
        </wui-text>
      `;
    }
    return html`
      <wui-text variant="small-400" color="fg-200" align="center">
        This app doesn’t support your current network. Switch to an available option to continue.
      </wui-text>
    `;
  }
  networksTemplate() {
    const requestedCaipNetworks = NetworkController.getRequestedCaipNetworks();
    const approvedCaipNetworkIds = NetworkController.state.approvedCaipNetworkIds;
    const sortedNetworks = CoreHelperUtil.sortRequestedNetworks(approvedCaipNetworkIds, requestedCaipNetworks);
    const filteredNetworks = this.swapUnsupportedChain ? sortedNetworks.filter((network) => ConstantsUtil2.SWAP_SUPPORTED_NETWORKS.includes(network.id)) : sortedNetworks;
    return filteredNetworks.map((network) => html`
        <wui-list-network
          imageSrc=${ifDefined(AssetUtil.getNetworkImage(network))}
          name=${network.name ?? "Unknown"}
          @click=${() => this.onSwitchNetwork(network)}
        >
        </wui-list-network>
      `);
  }
  async onDisconnect() {
    try {
      this.disconecting = true;
      await ConnectionController.disconnect();
      EventsController.sendEvent({
        type: "track",
        event: "DISCONNECT_SUCCESS"
      });
      ModalController.close();
    } catch {
      EventsController.sendEvent({ type: "track", event: "DISCONNECT_ERROR" });
      SnackController.showError("Failed to disconnect");
    } finally {
      this.disconecting = false;
    }
  }
  async onSwitchNetwork(network) {
    const isConnected = AccountController.state.isConnected;
    const approvedCaipNetworkIds = NetworkController.state.approvedCaipNetworkIds;
    const supportsAllNetworks = NetworkController.state.supportsAllNetworks;
    const caipNetwork = NetworkController.state.caipNetwork;
    const routerData = RouterController.state.data;
    if (isConnected && (caipNetwork == null ? void 0 : caipNetwork.id) !== network.id) {
      if (approvedCaipNetworkIds == null ? void 0 : approvedCaipNetworkIds.includes(network.id)) {
        await NetworkController.switchActiveNetwork(network);
        await NetworkUtil.onNetworkChange();
      } else if (supportsAllNetworks) {
        RouterController.push("SwitchNetwork", { ...routerData, network });
      }
    } else if (!isConnected) {
      NetworkController.setCaipNetwork(network);
      RouterController.push("Connect");
    }
  }
};
W3mUnsupportedChainView.styles = styles_default24;
__decorate42([
  state()
], W3mUnsupportedChainView.prototype, "disconecting", void 0);
W3mUnsupportedChainView = __decorate42([
  customElement("w3m-unsupported-chain-view")
], W3mUnsupportedChainView);

// node_modules/@web3modal/scaffold-ui/dist/esm/src/views/w3m-wallet-receive-view/styles.js
var styles_default25 = css`
  wui-compatible-network {
    margin-top: var(--wui-spacing-l);
  }
`;

// node_modules/@web3modal/scaffold-ui/dist/esm/src/views/w3m-wallet-receive-view/index.js
var __decorate43 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mWalletReceiveView = class W3mWalletReceiveView2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.address = AccountController.state.address;
    this.profileName = AccountController.state.profileName;
    this.network = NetworkController.state.caipNetwork;
    this.preferredAccountType = AccountController.state.preferredAccountType;
    this.unsubscribe.push(...[
      AccountController.subscribe((val) => {
        if (val.address) {
          this.address = val.address;
          this.profileName = val.profileName;
          this.preferredAccountType = val.preferredAccountType;
        } else {
          SnackController.showError("Account not found");
        }
      })
    ], NetworkController.subscribeKey("caipNetwork", (val) => {
      if (val == null ? void 0 : val.id) {
        this.network = val;
      }
    }));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    if (!this.address) {
      throw new Error("w3m-wallet-receive-view: No account provided");
    }
    const networkImage = AssetUtil.getNetworkImage(this.network);
    return html` <wui-flex
      flexDirection="column"
      .padding=${["0", "l", "l", "l"]}
      alignItems="center"
    >
      <wui-chip-button
        @click=${this.onCopyClick.bind(this)}
        text=${UiHelperUtil.getTruncateString({
      string: this.profileName || this.address || "",
      charsStart: this.profileName ? 18 : 4,
      charsEnd: this.profileName ? 0 : 4,
      truncate: this.profileName ? "end" : "middle"
    })}
        icon="copy"
        size="sm"
        imageSrc=${networkImage ? networkImage : ""}
        variant="gray"
      ></wui-chip-button>
      <wui-flex
        flexDirection="column"
        .padding=${["l", "0", "0", "0"]}
        alignItems="center"
        gap="s"
      >
        <wui-qr-code
          size=${232}
          theme=${ThemeController.state.themeMode}
          uri=${this.address}
          ?arenaClear=${true}
          data-testid="wui-qr-code"
        ></wui-qr-code>
        <wui-text variant="paragraph-500" color="fg-100" align="center">
          Copy your address or scan this QR code
        </wui-text>
      </wui-flex>
      ${this.networkTemplate()}
    </wui-flex>`;
  }
  networkTemplate() {
    var _a2;
    const requestedCaipNetworks = NetworkController.getRequestedCaipNetworks();
    const isNetworkEnabledForSmartAccounts = NetworkController.checkIfSmartAccountEnabled();
    const caipNetwork = NetworkController.state.caipNetwork;
    if (this.preferredAccountType === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT && isNetworkEnabledForSmartAccounts) {
      if (!caipNetwork) {
        return null;
      }
      return html`<wui-compatible-network
        @click=${this.onReceiveClick.bind(this)}
        text="Only receive assets on this network"
        .networkImages=${[AssetUtil.getNetworkImage(caipNetwork) ?? ""]}
      ></wui-compatible-network>`;
    }
    const slicedNetworks = (_a2 = requestedCaipNetworks == null ? void 0 : requestedCaipNetworks.filter((network) => network == null ? void 0 : network.imageId)) == null ? void 0 : _a2.slice(0, 5);
    const imagesArray = slicedNetworks.map(AssetUtil.getNetworkImage).filter(Boolean);
    return html`<wui-compatible-network
      @click=${this.onReceiveClick.bind(this)}
      text="Only receive assets on these networks"
      .networkImages=${imagesArray}
    ></wui-compatible-network>`;
  }
  onReceiveClick() {
    RouterController.push("WalletCompatibleNetworks");
  }
  onCopyClick() {
    try {
      if (this.address) {
        CoreHelperUtil.copyToClopboard(this.address);
        SnackController.showSuccess("Address copied");
      }
    } catch {
      SnackController.showError("Failed to copy");
    }
  }
};
W3mWalletReceiveView.styles = styles_default25;
__decorate43([
  state()
], W3mWalletReceiveView.prototype, "address", void 0);
__decorate43([
  state()
], W3mWalletReceiveView.prototype, "profileName", void 0);
__decorate43([
  state()
], W3mWalletReceiveView.prototype, "network", void 0);
__decorate43([
  state()
], W3mWalletReceiveView.prototype, "preferredAccountType", void 0);
W3mWalletReceiveView = __decorate43([
  customElement("w3m-wallet-receive-view")
], W3mWalletReceiveView);

// node_modules/@web3modal/scaffold-ui/dist/esm/src/views/w3m-wallet-compatible-networks-view/styles.js
var styles_default26 = css`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`;

// node_modules/@web3modal/scaffold-ui/dist/esm/src/views/w3m-wallet-compatible-networks-view/index.js
var __decorate44 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mWalletCompatibleNetworksView = class W3mWalletCompatibleNetworksView2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.preferredAccountType = AccountController.state.preferredAccountType;
    this.unsubscribe.push(AccountController.subscribeKey("preferredAccountType", (val) => {
      this.preferredAccountType = val;
    }));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    return html` <wui-flex
      flexDirection="column"
      .padding=${["xs", "s", "m", "s"]}
      gap="xs"
    >
      <wui-banner
        icon="warningCircle"
        text="You can only receive assets on these networks"
      ></wui-banner>
      ${this.networkTemplate()}
    </wui-flex>`;
  }
  networkTemplate() {
    const requestedCaipNetworks = NetworkController.getRequestedCaipNetworks();
    const approvedCaipNetworkIds = NetworkController.state.approvedCaipNetworkIds;
    const caipNetwork = NetworkController.state.caipNetwork;
    const isNetworkEnabledForSmartAccounts = NetworkController.checkIfSmartAccountEnabled();
    let sortedNetworks = CoreHelperUtil.sortRequestedNetworks(approvedCaipNetworkIds, requestedCaipNetworks);
    if (isNetworkEnabledForSmartAccounts && this.preferredAccountType === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT) {
      if (!caipNetwork) {
        return null;
      }
      sortedNetworks = [caipNetwork];
    }
    return sortedNetworks.map((network) => html`
        <wui-list-network
          imageSrc=${ifDefined(AssetUtil.getNetworkImage(network))}
          name=${network.name ?? "Unknown"}
          ?transparent=${true}
        >
        </wui-list-network>
      `);
  }
};
W3mWalletCompatibleNetworksView.styles = styles_default26;
__decorate44([
  state()
], W3mWalletCompatibleNetworksView.prototype, "preferredAccountType", void 0);
W3mWalletCompatibleNetworksView = __decorate44([
  customElement("w3m-wallet-compatible-networks-view")
], W3mWalletCompatibleNetworksView);

// node_modules/@web3modal/scaffold-ui/dist/esm/src/views/w3m-wallet-send-view/styles.js
var styles_default27 = css`
  :host {
    display: block;
  }

  wui-flex {
    position: relative;
  }

  wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xs) !important;
    border: 5px solid var(--wui-color-bg-125);
    background: var(--wui-color-bg-175);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }

  wui-button {
    --local-border-radius: var(--wui-border-radius-xs) !important;
  }

  .inputContainer {
    height: fit-content;
  }
`;

// node_modules/@web3modal/scaffold-ui/dist/esm/src/views/w3m-wallet-send-view/index.js
var __decorate45 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mWalletSendView = class W3mWalletSendView2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.token = SendController.state.token;
    this.sendTokenAmount = SendController.state.sendTokenAmount;
    this.receiverAddress = SendController.state.receiverAddress;
    this.receiverProfileName = SendController.state.receiverProfileName;
    this.loading = SendController.state.loading;
    this.gasPriceInUSD = SendController.state.gasPriceInUSD;
    this.message = "Preview Send";
    this.fetchNetworkPrice();
    this.unsubscribe.push(...[
      SendController.subscribe((val) => {
        this.token = val.token;
        this.sendTokenAmount = val.sendTokenAmount;
        this.receiverAddress = val.receiverAddress;
        this.gasPriceInUSD = val.gasPriceInUSD;
        this.receiverProfileName = val.receiverProfileName;
        this.loading = val.loading;
      })
    ]);
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    this.getMessage();
    return html` <wui-flex flexDirection="column" .padding=${["0", "l", "l", "l"]}>
      <wui-flex class="inputContainer" gap="xs" flexDirection="column">
        <w3m-input-token
          .token=${this.token}
          .sendTokenAmount=${this.sendTokenAmount}
          .gasPriceInUSD=${this.gasPriceInUSD}
        ></w3m-input-token>
        <wui-icon-box
          size="inherit"
          backgroundColor="fg-300"
          iconSize="lg"
          iconColor="fg-250"
          background="opaque"
          icon="arrowBottom"
        ></wui-icon-box>
        <w3m-input-address
          .value=${this.receiverProfileName ? this.receiverProfileName : this.receiverAddress}
        ></w3m-input-address>
      </wui-flex>
      <wui-flex .margin=${["l", "0", "0", "0"]}>
        <wui-button
          @click=${this.onButtonClick.bind(this)}
          ?disabled=${!this.message.startsWith("Preview Send")}
          size="lg"
          variant="main"
          ?loading=${this.loading}
          fullWidth
        >
          ${this.message}
        </wui-button>
      </wui-flex>
    </wui-flex>`;
  }
  async fetchNetworkPrice() {
    await SwapController.getNetworkTokenPrice();
    const gas = await SwapController.getInitialGasPrice();
    if ((gas == null ? void 0 : gas.gasPrice) && (gas == null ? void 0 : gas.gasPriceInUSD)) {
      SendController.setGasPrice(gas.gasPrice);
      SendController.setGasPriceInUsd(gas.gasPriceInUSD);
    }
  }
  onButtonClick() {
    RouterController.push("WalletSendPreview");
  }
  getMessage() {
    var _a2;
    this.message = "Preview Send";
    if (this.receiverAddress && !CoreHelperUtil.isAddress(this.receiverAddress)) {
      this.message = "Invalid Address";
    }
    if (!this.receiverAddress) {
      this.message = "Add Address";
    }
    if (this.sendTokenAmount && this.token && this.sendTokenAmount > Number(this.token.quantity.numeric)) {
      this.message = "Insufficient Funds";
    }
    if (!this.sendTokenAmount) {
      this.message = "Add Amount";
    }
    if (this.sendTokenAmount && ((_a2 = this.token) == null ? void 0 : _a2.price)) {
      const value = this.sendTokenAmount * this.token.price;
      if (!value) {
        this.message = "Incorrect Value";
      }
    }
    if (!this.token) {
      this.message = "Select Token";
    }
  }
};
W3mWalletSendView.styles = styles_default27;
__decorate45([
  state()
], W3mWalletSendView.prototype, "token", void 0);
__decorate45([
  state()
], W3mWalletSendView.prototype, "sendTokenAmount", void 0);
__decorate45([
  state()
], W3mWalletSendView.prototype, "receiverAddress", void 0);
__decorate45([
  state()
], W3mWalletSendView.prototype, "receiverProfileName", void 0);
__decorate45([
  state()
], W3mWalletSendView.prototype, "loading", void 0);
__decorate45([
  state()
], W3mWalletSendView.prototype, "gasPriceInUSD", void 0);
__decorate45([
  state()
], W3mWalletSendView.prototype, "message", void 0);
W3mWalletSendView = __decorate45([
  customElement("w3m-wallet-send-view")
], W3mWalletSendView);

// node_modules/@web3modal/scaffold-ui/dist/esm/src/views/w3m-wallet-send-select-token-view/styles.js
var styles_default28 = css`
  .contentContainer {
    height: 440px;
    overflow: scroll;
    scrollbar-width: none;
  }

  .contentContainer::-webkit-scrollbar {
    display: none;
  }

  wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }
`;

// node_modules/@web3modal/scaffold-ui/dist/esm/src/views/w3m-wallet-send-select-token-view/index.js
var __decorate46 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mSendSelectTokenView = class W3mSendSelectTokenView2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.tokenBalance = AccountController.state.tokenBalance;
    this.search = "";
    this.onDebouncedSearch = CoreHelperUtil.debounce((value) => {
      this.search = value;
    });
    this.unsubscribe.push(...[
      AccountController.subscribe((val) => {
        this.tokenBalance = val.tokenBalance;
      })
    ]);
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    return html`
      <wui-flex flexDirection="column">
        ${this.templateSearchInput()} <wui-separator></wui-separator> ${this.templateTokens()}
      </wui-flex>
    `;
  }
  templateSearchInput() {
    return html`
      <wui-flex gap="xs" padding="s">
        <wui-input-text
          @inputChange=${this.onInputChange.bind(this)}
          class="network-search-input"
          size="sm"
          placeholder="Search token"
          icon="search"
        ></wui-input-text>
      </wui-flex>
    `;
  }
  templateTokens() {
    var _a2, _b2;
    this.tokens = (_a2 = this.tokenBalance) == null ? void 0 : _a2.filter((token) => {
      var _a3;
      return token.chainId === ((_a3 = NetworkController.state.caipNetwork) == null ? void 0 : _a3.id);
    });
    if (this.search) {
      this.filteredTokens = (_b2 = this.tokenBalance) == null ? void 0 : _b2.filter((token) => token.name.toLowerCase().includes(this.search.toLowerCase()));
    } else {
      this.filteredTokens = this.tokens;
    }
    return html`
      <wui-flex
        class="contentContainer"
        flexDirection="column"
        .padding=${["0", "s", "0", "s"]}
      >
        <wui-flex justifyContent="flex-start" .padding=${["m", "s", "s", "s"]}>
          <wui-text variant="paragraph-500" color="fg-200">Your tokens</wui-text>
        </wui-flex>
        <wui-flex flexDirection="column" gap="xs">
          ${this.filteredTokens && this.filteredTokens.length > 0 ? this.filteredTokens.map((token) => html`<wui-list-token
                    @click=${this.handleTokenClick.bind(this, token)}
                    ?clickable=${true}
                    tokenName=${token.name}
                    tokenImageUrl=${token.iconUrl}
                    tokenAmount=${token.quantity.numeric}
                    tokenValue=${token.value}
                    tokenCurrency=${token.symbol}
                  ></wui-list-token>`) : html`<wui-flex
                .padding=${["4xl", "0", "0", "0"]}
                alignItems="center"
                flexDirection="column"
                gap="l"
              >
                <wui-icon-box
                  icon="coinPlaceholder"
                  size="inherit"
                  iconColor="fg-200"
                  backgroundColor="fg-200"
                  iconSize="lg"
                ></wui-icon-box>
                <wui-flex
                  class="textContent"
                  gap="xs"
                  flexDirection="column"
                  justifyContent="center"
                  flexDirection="column"
                >
                  <wui-text variant="paragraph-500" align="center" color="fg-100"
                    >No tokens found</wui-text
                  >
                  <wui-text variant="small-400" align="center" color="fg-200"
                    >Your tokens will appear here</wui-text
                  >
                </wui-flex>
                <wui-link @click=${this.onBuyClick.bind(this)}>Buy</wui-link>
              </wui-flex>`}
        </wui-flex>
      </wui-flex>
    `;
  }
  onBuyClick() {
    RouterController.push("OnRampProviders");
  }
  onInputChange(event) {
    this.onDebouncedSearch(event.detail);
  }
  handleTokenClick(token) {
    SendController.setToken(token);
    SendController.setTokenAmount(void 0);
    RouterController.goBack();
  }
};
W3mSendSelectTokenView.styles = styles_default28;
__decorate46([
  state()
], W3mSendSelectTokenView.prototype, "tokenBalance", void 0);
__decorate46([
  state()
], W3mSendSelectTokenView.prototype, "tokens", void 0);
__decorate46([
  state()
], W3mSendSelectTokenView.prototype, "filteredTokens", void 0);
__decorate46([
  state()
], W3mSendSelectTokenView.prototype, "search", void 0);
W3mSendSelectTokenView = __decorate46([
  customElement("w3m-wallet-send-select-token-view")
], W3mSendSelectTokenView);

// node_modules/@web3modal/scaffold-ui/dist/esm/src/views/w3m-wallet-send-preview-view/styles.js
var styles_default29 = css`
  wui-avatar,
  wui-image {
    display: ruby;
    width: 32px;
    height: 32px;
    border-radius: var(--wui-border-radius-3xl);
  }

  .sendButton {
    width: 70%;
    --local-width: 100% !important;
    --local-border-radius: var(--wui-border-radius-xs) !important;
  }

  .cancelButton {
    width: 30%;
    --local-width: 100% !important;
    --local-border-radius: var(--wui-border-radius-xs) !important;
  }
`;

// node_modules/@web3modal/scaffold-ui/dist/esm/src/views/w3m-wallet-send-preview-view/index.js
var __decorate47 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mWalletSendPreviewView = class W3mWalletSendPreviewView2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.token = SendController.state.token;
    this.sendTokenAmount = SendController.state.sendTokenAmount;
    this.receiverAddress = SendController.state.receiverAddress;
    this.receiverProfileName = SendController.state.receiverProfileName;
    this.receiverProfileImageUrl = SendController.state.receiverProfileImageUrl;
    this.gasPriceInUSD = SendController.state.gasPriceInUSD;
    this.caipNetwork = NetworkController.state.caipNetwork;
    this.unsubscribe.push(...[
      SendController.subscribe((val) => {
        this.token = val.token;
        this.sendTokenAmount = val.sendTokenAmount;
        this.receiverAddress = val.receiverAddress;
        this.gasPriceInUSD = val.gasPriceInUSD;
        this.receiverProfileName = val.receiverProfileName;
        this.receiverProfileImageUrl = val.receiverProfileImageUrl;
      }),
      NetworkController.subscribeKey("caipNetwork", (val) => this.caipNetwork = val)
    ]);
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    var _a2, _b2;
    return html` <wui-flex flexDirection="column" .padding=${["0", "l", "l", "l"]}>
      <wui-flex gap="xs" flexDirection="column" .padding=${["0", "xs", "0", "xs"]}>
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-flex flexDirection="column" gap="4xs">
            <wui-text variant="small-400" color="fg-150">Send</wui-text>
            ${this.sendValueTemplate()}
          </wui-flex>
          <wui-preview-item
            text="${this.sendTokenAmount ? UiHelperUtil.roundNumber(this.sendTokenAmount, 6, 5) : "unknown"} ${(_a2 = this.token) == null ? void 0 : _a2.symbol}"
            .imageSrc=${(_b2 = this.token) == null ? void 0 : _b2.iconUrl}
          ></wui-preview-item>
        </wui-flex>
        <wui-flex>
          <wui-icon color="fg-200" size="md" name="arrowBottom"></wui-icon>
        </wui-flex>
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="small-400" color="fg-150">To</wui-text>
          <wui-preview-item
            text="${this.receiverProfileName ? UiHelperUtil.getTruncateString({
      string: this.receiverProfileName,
      charsStart: 20,
      charsEnd: 0,
      truncate: "end"
    }) : UiHelperUtil.getTruncateString({
      string: this.receiverAddress ? this.receiverAddress : "",
      charsStart: 4,
      charsEnd: 4,
      truncate: "middle"
    })}"
            address=${this.receiverAddress ?? ""}
            .imageSrc=${this.receiverProfileImageUrl ?? void 0}
            .isAddress=${true}
          ></wui-preview-item>
        </wui-flex>
      </wui-flex>
      <wui-flex flexDirection="column" .padding=${["xxl", "0", "0", "0"]}>
        <w3m-wallet-send-details
          .caipNetwork=${this.caipNetwork}
          .receiverAddress=${this.receiverAddress}
          .networkFee=${this.gasPriceInUSD}
        ></w3m-wallet-send-details>
        <wui-flex justifyContent="center" gap="xxs" .padding=${["s", "0", "0", "0"]}>
          <wui-icon size="sm" color="fg-200" name="warningCircle"></wui-icon>
          <wui-text variant="small-400" color="fg-200">Review transaction carefully</wui-text>
        </wui-flex>
        <wui-flex justifyContent="center" gap="s" .padding=${["l", "0", "0", "0"]}>
          <wui-button
            class="cancelButton"
            @click=${this.onCancelClick.bind(this)}
            size="lg"
            variant="neutral"
          >
            Cancel
          </wui-button>
          <wui-button
            class="sendButton"
            @click=${this.onSendClick.bind(this)}
            size="lg"
            variant="main"
          >
            Send
          </wui-button>
        </wui-flex>
      </wui-flex></wui-flex
    >`;
  }
  sendValueTemplate() {
    if (this.token && this.sendTokenAmount) {
      const price = this.token.price;
      const totalValue = price * this.sendTokenAmount;
      return html`<wui-text variant="paragraph-400" color="fg-100"
        >$${totalValue.toFixed(2)}</wui-text
      >`;
    }
    return null;
  }
  onSendClick() {
    SendController.sendToken();
  }
  onCancelClick() {
    RouterController.goBack();
  }
};
W3mWalletSendPreviewView.styles = styles_default29;
__decorate47([
  state()
], W3mWalletSendPreviewView.prototype, "token", void 0);
__decorate47([
  state()
], W3mWalletSendPreviewView.prototype, "sendTokenAmount", void 0);
__decorate47([
  state()
], W3mWalletSendPreviewView.prototype, "receiverAddress", void 0);
__decorate47([
  state()
], W3mWalletSendPreviewView.prototype, "receiverProfileName", void 0);
__decorate47([
  state()
], W3mWalletSendPreviewView.prototype, "receiverProfileImageUrl", void 0);
__decorate47([
  state()
], W3mWalletSendPreviewView.prototype, "gasPriceInUSD", void 0);
__decorate47([
  state()
], W3mWalletSendPreviewView.prototype, "caipNetwork", void 0);
W3mWalletSendPreviewView = __decorate47([
  customElement("w3m-wallet-send-preview-view")
], W3mWalletSendPreviewView);

// node_modules/@web3modal/scaffold-ui/dist/esm/src/views/w3m-connect-wallets-view/styles.js
var styles_default30 = css`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }
  wui-flex::-webkit-scrollbar {
    display: none;
  }
`;

// node_modules/@web3modal/scaffold-ui/dist/esm/src/views/w3m-connect-wallets-view/index.js
var __decorate48 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mConnectWalletsView = class W3mConnectWalletsView2 extends LitElement {
  render() {
    return html`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        <w3m-wallet-login-list></w3m-wallet-login-list>
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `;
  }
};
W3mConnectWalletsView.styles = styles_default30;
W3mConnectWalletsView = __decorate48([
  customElement("w3m-connect-wallets-view")
], W3mConnectWalletsView);

// node_modules/@web3modal/scaffold-ui/dist/esm/src/views/w3m-connect-socials-view/styles.js
var styles_default31 = css`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }
  wui-flex::-webkit-scrollbar {
    display: none;
  }
`;

// node_modules/@web3modal/scaffold-ui/dist/esm/src/views/w3m-connect-socials-view/index.js
var __decorate49 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mConnectSocialsView = class W3mConnectSocialsView2 extends LitElement {
  render() {
    return html`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        <w3m-social-login-list></w3m-social-login-list>
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `;
  }
};
W3mConnectSocialsView.styles = styles_default31;
W3mConnectSocialsView = __decorate49([
  customElement("w3m-connect-socials-view")
], W3mConnectSocialsView);

// node_modules/@web3modal/scaffold-ui/dist/esm/src/views/w3m-connecting-social-view/styles.js
var styles_default32 = css`
  wui-logo {
    width: 80px;
    height: 80px;
    border-radius: var(--wui-border-radius-m);
  }
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }
  wui-flex:first-child:not(:only-child) {
    position: relative;
  }
  wui-loading-thumbnail {
    position: absolute;
  }
  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }
  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }
  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }
  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }
  .capitalize {
    text-transform: capitalize;
  }
`;

// node_modules/@web3modal/scaffold-ui/dist/esm/src/utils/ConstantsUtil.js
var ConstantsUtil4 = {
  ACCOUNT_TABS: [{ label: "Tokens" }, { label: "NFTs" }, { label: "Activity" }],
  SECURE_SITE_ORIGIN: process.env["NEXT_PUBLIC_SECURE_SITE_ORIGIN"] || "https://secure.walletconnect.com"
};

// node_modules/@web3modal/scaffold-ui/dist/esm/src/views/w3m-connecting-social-view/index.js
var __decorate50 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mConnectingSocialView = class W3mConnectingSocialView2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.socialProvider = AccountController.state.socialProvider;
    this.socialWindow = AccountController.state.socialWindow;
    this.error = false;
    this.connecting = false;
    this.message = "Connect in the provider window";
    this.authConnector = ConnectorController.getAuthConnector();
    this.handleSocialConnection = async (event) => {
      var _a2;
      if ((_a2 = event.data) == null ? void 0 : _a2.resultUri) {
        if (event.origin === ConstantsUtil4.SECURE_SITE_ORIGIN) {
          window.removeEventListener("message", this.handleSocialConnection, false);
          try {
            if (this.authConnector && !this.connecting) {
              if (this.socialWindow) {
                this.socialWindow.close();
                AccountController.setSocialWindow(void 0, ChainController.state.activeChain);
              }
              this.connecting = true;
              this.updateMessage();
              const uri = event.data.resultUri;
              await this.authConnector.provider.connectSocial(uri);
              if (this.socialProvider) {
                StorageUtil.setConnectedSocialProvider(this.socialProvider);
                await ConnectionController.connectExternal(this.authConnector);
                EventsController.sendEvent({
                  type: "track",
                  event: "SOCIAL_LOGIN_SUCCESS",
                  properties: { provider: this.socialProvider }
                });
              }
            }
          } catch (error) {
            this.error = true;
            this.updateMessage();
            if (this.socialProvider) {
              EventsController.sendEvent({
                type: "track",
                event: "SOCIAL_LOGIN_ERROR",
                properties: { provider: this.socialProvider }
              });
            }
          }
        } else {
          RouterController.goBack();
          SnackController.showError("Untrusted Origin");
          if (this.socialProvider) {
            EventsController.sendEvent({
              type: "track",
              event: "SOCIAL_LOGIN_ERROR",
              properties: { provider: this.socialProvider }
            });
          }
        }
      }
    };
    this.unsubscribe.push(...[
      AccountController.subscribe((val) => {
        if (val.socialProvider) {
          this.socialProvider = val.socialProvider;
        }
        if (val.socialWindow) {
          this.socialWindow = val.socialWindow;
        }
        if (val.address) {
          if (ModalController.state.open) {
            ModalController.close();
          }
        }
      })
    ]);
    if (this.authConnector) {
      this.connectSocial();
    }
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
    window.removeEventListener("message", this.handleSocialConnection, false);
  }
  render() {
    return html`
      <wui-flex
        data-error=${ifDefined(this.error)}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl", "xl", "xl", "xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-logo logo=${ifDefined(this.socialProvider)}></wui-logo>
          ${this.error ? null : this.loaderTemplate()}
          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100"
            >Log in with
            <span class="capitalize">${this.socialProvider ?? "Social"}</span></wui-text
          >
          <wui-text align="center" variant="small-400" color=${this.error ? "error-100" : "fg-200"}
            >${this.message}</wui-text
          ></wui-flex
        >
      </wui-flex>
    `;
  }
  loaderTemplate() {
    const borderRadiusMaster = ThemeController.state.themeVariables["--w3m-border-radius-master"];
    const radius = borderRadiusMaster ? parseInt(borderRadiusMaster.replace("px", ""), 10) : 4;
    return html`<wui-loading-thumbnail radius=${radius * 9}></wui-loading-thumbnail>`;
  }
  connectSocial() {
    const interval = setInterval(() => {
      var _a2;
      if ((_a2 = this.socialWindow) == null ? void 0 : _a2.closed) {
        if (!this.connecting && RouterController.state.view === "ConnectingSocial") {
          RouterController.goBack();
        }
        clearInterval(interval);
      }
    }, 1e3);
    window.addEventListener("message", this.handleSocialConnection, false);
  }
  updateMessage() {
    if (this.error) {
      this.message = "Something went wrong";
    } else if (this.connecting) {
      this.message = "Retrieving user data";
    } else {
      this.message = "Connect in the provider window";
    }
  }
};
W3mConnectingSocialView.styles = styles_default32;
__decorate50([
  state()
], W3mConnectingSocialView.prototype, "socialProvider", void 0);
__decorate50([
  state()
], W3mConnectingSocialView.prototype, "socialWindow", void 0);
__decorate50([
  state()
], W3mConnectingSocialView.prototype, "error", void 0);
__decorate50([
  state()
], W3mConnectingSocialView.prototype, "connecting", void 0);
__decorate50([
  state()
], W3mConnectingSocialView.prototype, "message", void 0);
W3mConnectingSocialView = __decorate50([
  customElement("w3m-connecting-social-view")
], W3mConnectingSocialView);

// node_modules/@web3modal/scaffold-ui/dist/esm/src/views/w3m-profile-view/styles.js
var styles_default33 = css`
  wui-flex {
    width: 100%;
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }

  .account-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .account-links wui-flex {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background: red;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding: 10px;
    flex: 1 0 0;

    border-radius: var(--XS, 16px);
    border: 1px solid var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    background: var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  .account-links wui-flex:hover {
    background: var(--dark-accent-glass-015, rgba(71, 161, 255, 0.15));
  }

  .account-links wui-flex wui-icon {
    width: var(--S, 20px);
    height: var(--S, 20px);
  }

  .account-links wui-flex wui-icon svg path {
    stroke: #47a1ff;
  }

  .account-settings-button {
    padding: calc(var(--wui-spacing-m) - 1px) var(--wui-spacing-2l);
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
    border: 1px solid var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    cursor: pointer;
  }

  .account-settings-button:hover {
    background: var(--wui-color-gray-glass-005);
  }
`;

// node_modules/@web3modal/scaffold-ui/dist/esm/src/views/w3m-profile-view/index.js
var __decorate51 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mProfileView = class W3mProfileView2 extends LitElement {
  constructor() {
    super();
    this.usubscribe = [];
    this.address = AccountController.state.address;
    this.profileImage = AccountController.state.profileImage;
    this.profileName = AccountController.state.profileName;
    this.accounts = AccountController.state.allAccounts;
    this.usubscribe.push(AccountController.subscribeKey("address", (address) => {
      if (address) {
        this.address = address;
      } else {
        ModalController.close();
      }
    }));
    this.usubscribe.push(AccountController.subscribeKey("profileImage", (profileImage) => {
      this.profileImage = profileImage;
    }));
    this.usubscribe.push(AccountController.subscribeKey("profileName", (profileName) => {
      this.profileName = profileName;
    }));
  }
  disconnectedCallback() {
    this.usubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    var _a2;
    if (!this.address) {
      throw new Error("w3m-profile-view: No account provided");
    }
    const name = (_a2 = this.profileName) == null ? void 0 : _a2.split(".")[0];
    return html`
      <wui-flex flexDirection="column" gap="l" .padding=${["0", "xl", "m", "xl"]}>
        <wui-flex flexDirection="column" alignItems="center" gap="l">
          <wui-avatar
            alt=${this.address}
            address=${this.address}
            imageSrc=${ifDefined(this.profileImage)}
            size="2lg"
          ></wui-avatar>
          <wui-flex flexDirection="column" alignItems="center">
            <wui-flex gap="3xs" alignItems="center" justifyContent="center">
              <wui-text variant="title-6-600" color="fg-100" data-testid="account-settings-address">
                ${name ? UiHelperUtil.getTruncateString({
      string: name,
      charsStart: 20,
      charsEnd: 0,
      truncate: "end"
    }) : UiHelperUtil.getTruncateString({
      string: this.address,
      charsStart: 4,
      charsEnd: 6,
      truncate: "middle"
    })}
              </wui-text>
              <wui-icon-link
                size="md"
                icon="copy"
                iconColor="fg-200"
                @click=${this.onCopyAddress}
              ></wui-icon-link>
            </wui-flex>
          </wui-flex>
        </wui-flex>
        <wui-flex
          data-testid="account-settings-button"
          justifyContent="center"
          alignItems="center"
          class="account-settings-button"
          @click=${() => RouterController.push("AccountSettings")}
        >
          <wui-text variant="paragraph-500" color="fg-100">Account Settings</wui-text>
        </wui-flex>
        ${this.accountsTemplate()}
      </wui-flex>
    `;
  }
  accountsTemplate() {
    return html`<wui-flex flexDirection="column">
      <wui-flex .padding=${["3xs", "m", "s", "s"]}>
        <wui-text color="fg-200" variant="paragraph-400">Your accounts</wui-text>
      </wui-flex>
      <wui-flex flexDirection="column" gap="xxs">
        ${this.accounts.map((account) => this.accountTemplate(account))}
      </wui-flex>
    </wui-flex>`;
  }
  async onSwitchAccount(account) {
    AccountController.setShouldUpdateToAddress(account.address);
    const emailConnector = ConnectorController.getAuthConnector();
    if (!emailConnector) {
      return;
    }
    await emailConnector.provider.setPreferredAccount(account.type);
    await emailConnector.provider.connect();
  }
  accountTemplate(account) {
    return html`<wui-list-account accountAddress=${account.address} accountType=${account.type}>
      ${account.address === this.address ? "" : html`<wui-button
            slot="action"
            textVariant="small-600"
            size="sm"
            variant="accent"
            @click=${() => this.onSwitchAccount(account)}
            >Switch</wui-button
          >`}
    </wui-list-account>`;
  }
  onCopyAddress() {
    try {
      if (this.profileName) {
        CoreHelperUtil.copyToClopboard(this.profileName);
        SnackController.showSuccess("Name copied");
      } else if (this.address) {
        CoreHelperUtil.copyToClopboard(this.address);
        SnackController.showSuccess("Address copied");
      }
    } catch {
      SnackController.showError("Failed to copy");
    }
  }
};
W3mProfileView.styles = styles_default33;
__decorate51([
  state()
], W3mProfileView.prototype, "address", void 0);
__decorate51([
  state()
], W3mProfileView.prototype, "profileImage", void 0);
__decorate51([
  state()
], W3mProfileView.prototype, "profileName", void 0);
__decorate51([
  state()
], W3mProfileView.prototype, "accounts", void 0);
W3mProfileView = __decorate51([
  customElement("w3m-profile-view")
], W3mProfileView);

// node_modules/@web3modal/scaffold-ui/dist/esm/src/views/w3m-select-addresses-view/styles.js
var styles_default34 = css`
  input[type='checkbox'] {
    all: revert;
    width: var(--wui-spacing-xl);
    height: var(--wui-spacing-xl);
    accent-color: var(--wui-color-accent-100);
  }
`;

// node_modules/@web3modal/scaffold-ui/dist/esm/src/views/w3m-select-addresses-view/index.js
var __decorate52 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mSelectAddressesView = class W3mSelectAddressesView2 extends LitElement {
  constructor() {
    super();
    this.metadata = OptionsController.state.metadata;
    this.allAccounts = AccountController.state.allAccounts;
    this.selectedAccounts = AccountController.state.allAccounts;
    this.selectAll = true;
    this.approved = false;
    this.isApproving = false;
    this.getAddressTemplate = (account) => {
      const checked = this.selectedAccounts.some((_account) => _account.address === account.address);
      return html`<wui-list-account accountAddress="${account.address}" accountType="${account.type}">
      <input
        id="${account.address}"
        slot="action"
        type="checkbox"
        .checked="${checked}"
        @change="${this.handleClick(account)}"
      />
    </wui-list-account>`;
    };
    this.onSelectAll = (event) => {
      const checked = event.target.checked;
      this.selectAll = this.selectedAccounts.length === this.allAccounts.length;
      this.allAccounts.forEach((account) => {
        this.onSelect(account, checked);
      });
    };
    this.onSelect = (account, add) => {
      if (add) {
        this.selectedAccounts.push(account);
      } else {
        this.selectedAccounts = this.selectedAccounts.filter((a) => a.address !== account.address);
      }
      if (this.selectedAccounts.length > 0) {
        this.selectAll = this.selectedAccounts.length === this.allAccounts.length;
      }
    };
    AccountController.subscribeKey("allAccounts", (allAccounts) => {
      this.allAccounts = allAccounts;
    });
  }
  render() {
    var _a2, _b2;
    return html`
    <wui-flex justifyContent="center" .padding=${["xl", "0", "xl", "0"]}>
      <wui-banner-img imageSrc="${ifDefined((_a2 = this.metadata) == null ? void 0 : _a2.icons[0])}" text="${ifDefined((_b2 = this.metadata) == null ? void 0 : _b2.url)}" size="sm"></wui-banner>
    </wui-flex>
    <wui-flex .padding=${["0", "xl", "0", "xl"]} flexDirection="row" justifyContent="space-between">
        <wui-text variant="paragraph-400" color="fg-200">Select all</wui-text>
        <input type="checkbox" .checked=${this.selectAll}  @click=${this.onSelectAll.bind(this)} />
    </wui-flex>
      <wui-flex flexDirection="column" .padding=${["l", "xl", "xl", "xl"]}>
        ${this.allAccounts.map((account) => this.getAddressTemplate(account))}
      </wui-flex>
      <wui-flex .padding=${["l", "xl", "xl", "xl"]} gap="s" justifyContent="space-between">
        <wui-button
          size="md"
          ?fullwidth=${true}
          variant="neutral"
          @click=${this.onCancel.bind(this)}
          data-testid="w3m-connecting-siwe-cancel"
        >
          Cancel
        </wui-button>
        <wui-button
          size="md"
          ?fullwidth=${true}
          variant="main"
          .disabled=${this.selectedAccounts.length === 0}
          @click=${this.onContinue.bind(this)}
          ?loading=${this.isApproving}
        >
          ${this.isApproving ? "Signing..." : "Continue"}
        </wui-button>
      </wui-flex>
    `;
  }
  handleClick(account) {
    return (event) => {
      var _a2;
      const target = event.target;
      (_a2 = this.onSelect) == null ? void 0 : _a2.call(this, { ...account }, target == null ? void 0 : target.checked);
    };
  }
  onContinue() {
    var _a2;
    if (this.selectedAccounts.length > 0) {
      this.isApproving = true;
      AccountController.setAllAccounts(this.selectedAccounts);
      AccountController.setShouldUpdateToAddress(((_a2 = this.selectedAccounts[0]) == null ? void 0 : _a2.address) ?? "");
      this.approved = true;
      this.isApproving = false;
      ModalController.close();
    } else {
      this.onCancel();
    }
  }
  async onCancel() {
    const { isConnected } = AccountController.state;
    if (isConnected) {
      await ConnectionController.disconnect();
      ModalController.close();
    } else {
      RouterController.push("Connect");
    }
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    if (!this.approved) {
      this.onCancel();
    }
  }
};
W3mSelectAddressesView.styles = styles_default34;
__decorate52([
  state()
], W3mSelectAddressesView.prototype, "allAccounts", void 0);
__decorate52([
  state()
], W3mSelectAddressesView.prototype, "selectedAccounts", void 0);
__decorate52([
  state()
], W3mSelectAddressesView.prototype, "selectAll", void 0);
__decorate52([
  state()
], W3mSelectAddressesView.prototype, "approved", void 0);
__decorate52([
  state()
], W3mSelectAddressesView.prototype, "isApproving", void 0);
W3mSelectAddressesView = __decorate52([
  customElement("w3m-select-addresses-view")
], W3mSelectAddressesView);

// node_modules/@web3modal/scaffold-ui/dist/esm/src/views/w3m-switch-address-view/styles.js
var styles_default35 = css`
  wui-avatar {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    box-shadow: 0 0 0 0;
  }

  wui-icon-box {
    position: relative;
    right: 15px;
    top: 15px;
    border: 2px solid var(--wui-color-bg-150);
    background-color: var(--wui-color-bg-125);
  }
`;

// node_modules/@web3modal/scaffold-ui/dist/esm/src/views/w3m-switch-address-view/index.js
var __decorate53 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mSwitchAddressView = class W3mSwitchAddressView2 extends LitElement {
  constructor() {
    super();
    this.metadata = OptionsController.state.metadata;
    this.allAccounts = AccountController.state.allAccounts || [];
    this.balances = {};
    this.labels = AccountController.state.addressLabels;
    this.currentAddress = AccountController.state.address || "";
    this.connectedConnector = StorageUtil.getConnectedConnector();
    this.shouldShowIcon = this.connectedConnector === "AUTH";
    this.caipNetwork = NetworkController.state.caipNetwork;
    AccountController.subscribeKey("allAccounts", (allAccounts) => {
      this.allAccounts = allAccounts;
    });
  }
  connectedCallback() {
    super.connectedCallback();
    this.allAccounts.forEach((account) => {
      var _a2;
      BlockchainApiController.getBalance(account.address, (_a2 = this.caipNetwork) == null ? void 0 : _a2.id).then((response) => {
        let total = this.balances[account.address] || 0;
        if (response.balances.length > 0) {
          total = response.balances.reduce((acc, balance) => acc + ((balance == null ? void 0 : balance.value) || 0), 0);
        }
        this.balances[account.address] = total;
        this.requestUpdate();
      });
    });
  }
  getAddressIcon(type) {
    if (type === "smartAccount") {
      return "lightbulb";
    }
    return "mail";
  }
  render() {
    var _a2, _b2;
    return html`
      <wui-flex justifyContent="center" .padding=${["xl", "0", "xl", "0"]}>
        <wui-banner-img
          imageSrc=${ifDefined((_a2 = this.metadata) == null ? void 0 : _a2.icons[0])}
          text=${ifDefined((_b2 = this.metadata) == null ? void 0 : _b2.url)}
          size="sm"
        ></wui-banner-img>
      </wui-flex>
      <wui-flex flexDirection="column" gap="xxl" .padding=${["l", "xl", "xl", "xl"]}>
        ${this.allAccounts.map((account) => this.getAddressTemplate(account))}
      </wui-flex>
    `;
  }
  getAddressTemplate(account) {
    var _a2, _b2, _c, _d;
    const label = (_a2 = this.labels) == null ? void 0 : _a2.get(account.address);
    return html`
      <wui-flex
        flexDirection="row"
        justifyContent="space-between"
        data-testid="switch-address-item"
      >
        <wui-flex alignItems="center">
          <wui-avatar address=${account.address}></wui-avatar>
          ${this.shouldShowIcon ? html`<wui-icon-box
                size="sm"
                iconcolor="fg-200"
                backgroundcolor="glass-002"
                background="gray"
                icon="${this.getAddressIcon(account.type)}"
                ?border=${true}
              ></wui-icon-box>` : html`<wui-flex .padding="${["0", "0", "0", "s"]}"></wui-flex>`}
          <wui-flex flexDirection="column">
            <wui-text class="address" variant="paragraph-500" color="fg-100"
              >${label ? label : UiHelperUtil.getTruncateString({
      string: account.address,
      charsStart: 4,
      charsEnd: 6,
      truncate: "middle"
    })}</wui-text
            >
            <wui-text class="address-description" variant="small-400">
              ${typeof this.balances[account.address] === "number" ? `$${(_b2 = this.balances[account.address]) == null ? void 0 : _b2.toFixed(2)}` : html`<wui-loading-spinner size="sm" color="accent-100"></wui-loading-spinner>`}
            </wui-text>
          </wui-flex>
        </wui-flex>
        <wui-flex gap="s" alignItems="center">
          ${((_c = account.address) == null ? void 0 : _c.toLowerCase()) === ((_d = this.currentAddress) == null ? void 0 : _d.toLowerCase()) ? "" : html`
                <wui-button
                  textVariant="small-600"
                  size="md"
                  variant="accent"
                  @click=${() => this.onSwitchAddress(account.address)}
                  >Switch to</wui-button
                >
              `}
        </wui-flex>
      </wui-flex>
    `;
  }
  onSwitchAddress(address) {
    AccountController.setShouldUpdateToAddress(address);
    ModalController.close();
  }
};
W3mSwitchAddressView.styles = styles_default35;
__decorate53([
  state()
], W3mSwitchAddressView.prototype, "allAccounts", void 0);
__decorate53([
  state()
], W3mSwitchAddressView.prototype, "balances", void 0);
W3mSwitchAddressView = __decorate53([
  customElement("w3m-switch-address-view")
], W3mSwitchAddressView);

// node_modules/@web3modal/scaffold-ui/dist/esm/src/partials/w3m-all-wallets-list/styles.js
var styles_default36 = css`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 76px);
  }

  @media (max-width: 435px) {
    wui-grid {
      grid-template-columns: repeat(auto-fill, 77px);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;

// node_modules/@web3modal/scaffold-ui/dist/esm/src/utils/markWalletsAsInstalled.js
function markWalletsAsInstalled(wallets) {
  const { connectors } = ConnectorController.state;
  const installedConnectors = connectors.filter((c) => c.type === "ANNOUNCED").reduce((acum, val) => {
    var _a2;
    if (!((_a2 = val.info) == null ? void 0 : _a2.rdns)) {
      return acum;
    }
    acum[val.info.rdns] = true;
    return acum;
  }, {});
  const walletsWithInstalled = wallets.map((wallet) => ({
    ...wallet,
    installed: Boolean(wallet.rdns) && Boolean(installedConnectors[wallet.rdns ?? ""])
  }));
  const sortedWallets = walletsWithInstalled.sort((a, b) => Number(b.installed) - Number(a.installed));
  return sortedWallets;
}

// node_modules/@web3modal/scaffold-ui/dist/esm/src/partials/w3m-all-wallets-list/index.js
var __decorate54 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var PAGINATOR_ID = "local-paginator";
var W3mAllWalletsList = class W3mAllWalletsList2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.paginationObserver = void 0;
    this.initial = !ApiController.state.wallets.length;
    this.wallets = ApiController.state.wallets;
    this.recommended = ApiController.state.recommended;
    this.featured = ApiController.state.featured;
    this.unsubscribe.push(...[
      ApiController.subscribeKey("wallets", (val) => this.wallets = val),
      ApiController.subscribeKey("recommended", (val) => this.recommended = val),
      ApiController.subscribeKey("featured", (val) => this.featured = val)
    ]);
  }
  firstUpdated() {
    this.initialFetch();
    this.createPaginationObserver();
  }
  disconnectedCallback() {
    var _a2;
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
    (_a2 = this.paginationObserver) == null ? void 0 : _a2.disconnect();
  }
  render() {
    return html`
      <wui-grid
        data-scroll=${!this.initial}
        .padding=${["0", "s", "s", "s"]}
        columnGap="xxs"
        rowGap="l"
        justifyContent="space-between"
      >
        ${this.initial ? this.shimmerTemplate(16) : this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `;
  }
  async initialFetch() {
    var _a2;
    const gridEl = (_a2 = this.shadowRoot) == null ? void 0 : _a2.querySelector("wui-grid");
    if (this.initial && gridEl) {
      await ApiController.fetchWallets({ page: 1 });
      await gridEl.animate([{ opacity: 1 }, { opacity: 0 }], {
        duration: 200,
        fill: "forwards",
        easing: "ease"
      }).finished;
      this.initial = false;
      gridEl.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: 200,
        fill: "forwards",
        easing: "ease"
      });
    }
  }
  shimmerTemplate(items, id) {
    return [...Array(items)].map(() => html`
        <wui-card-select-loader type="wallet" id=${ifDefined(id)}></wui-card-select-loader>
      `);
  }
  walletsTemplate() {
    const wallets = [...this.featured, ...this.recommended, ...this.wallets];
    const walletsWithInstalled = markWalletsAsInstalled(wallets);
    return walletsWithInstalled.map((wallet) => html`
        <wui-card-select
          imageSrc=${ifDefined(AssetUtil.getWalletImage(wallet))}
          type="wallet"
          name=${wallet.name}
          @click=${() => this.onConnectWallet(wallet)}
          .installed=${wallet.installed}
        ></wui-card-select>
      `);
  }
  paginationLoaderTemplate() {
    const { wallets, recommended, featured, count } = ApiController.state;
    const columns = window.innerWidth < 352 ? 3 : 4;
    const currentWallets = wallets.length + recommended.length;
    const minimumRows = Math.ceil(currentWallets / columns);
    let shimmerCount = minimumRows * columns - currentWallets + columns;
    shimmerCount -= wallets.length ? featured.length % columns : 0;
    if (count === 0 && featured.length > 0) {
      return null;
    }
    if (count === 0 || [...featured, ...wallets, ...recommended].length < count) {
      return this.shimmerTemplate(shimmerCount, PAGINATOR_ID);
    }
    return null;
  }
  createPaginationObserver() {
    var _a2;
    const loaderEl = (_a2 = this.shadowRoot) == null ? void 0 : _a2.querySelector(`#${PAGINATOR_ID}`);
    if (loaderEl) {
      this.paginationObserver = new IntersectionObserver(([element]) => {
        if ((element == null ? void 0 : element.isIntersecting) && !this.initial) {
          const { page, count, wallets } = ApiController.state;
          if (wallets.length < count) {
            ApiController.fetchWallets({ page: page + 1 });
          }
        }
      });
      this.paginationObserver.observe(loaderEl);
    }
  }
  onConnectWallet(wallet) {
    const connector = ConnectorController.getConnector(wallet.id, wallet.rdns);
    if (connector) {
      RouterController.push("ConnectingExternal", { connector });
    } else {
      RouterController.push("ConnectingWalletConnect", { wallet });
    }
  }
};
W3mAllWalletsList.styles = styles_default36;
__decorate54([
  state()
], W3mAllWalletsList.prototype, "initial", void 0);
__decorate54([
  state()
], W3mAllWalletsList.prototype, "wallets", void 0);
__decorate54([
  state()
], W3mAllWalletsList.prototype, "recommended", void 0);
__decorate54([
  state()
], W3mAllWalletsList.prototype, "featured", void 0);
W3mAllWalletsList = __decorate54([
  customElement("w3m-all-wallets-list")
], W3mAllWalletsList);

// node_modules/@web3modal/scaffold-ui/dist/esm/src/partials/w3m-all-wallets-search/styles.js
var styles_default37 = css`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }
`;

// node_modules/@web3modal/scaffold-ui/dist/esm/src/partials/w3m-all-wallets-search/index.js
var __decorate55 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mAllWalletsSearch = class W3mAllWalletsSearch2 extends LitElement {
  constructor() {
    super(...arguments);
    this.prevQuery = "";
    this.loading = true;
    this.query = "";
  }
  render() {
    this.onSearch();
    return this.loading ? html`<wui-loading-spinner color="accent-100"></wui-loading-spinner>` : this.walletsTemplate();
  }
  async onSearch() {
    if (this.query.trim() !== this.prevQuery.trim()) {
      this.prevQuery = this.query;
      this.loading = true;
      await ApiController.searchWallet({ search: this.query });
      this.loading = false;
    }
  }
  walletsTemplate() {
    const { search } = ApiController.state;
    const wallets = markWalletsAsInstalled(search);
    if (!search.length) {
      return html`
        <wui-flex justifyContent="center" alignItems="center" gap="s" flexDirection="column">
          <wui-icon-box
            size="lg"
            iconColor="fg-200"
            backgroundColor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text color="fg-200" variant="paragraph-500">No Wallet found</wui-text>
        </wui-flex>
      `;
    }
    return html`
      <wui-grid
        .padding=${["0", "s", "s", "s"]}
        gridTemplateColumns="repeat(4, 1fr)"
        rowGap="l"
        columnGap="xs"
      >
        ${wallets.map((wallet) => html`
            <wui-card-select
              imageSrc=${ifDefined(AssetUtil.getWalletImage(wallet))}
              type="wallet"
              name=${wallet.name}
              @click=${() => this.onConnectWallet(wallet)}
              .installed=${wallet.installed}
            ></wui-card-select>
          `)}
      </wui-grid>
    `;
  }
  onConnectWallet(wallet) {
    const connector = ConnectorController.getConnector(wallet.id, wallet.rdns);
    if (connector) {
      RouterController.push("ConnectingExternal", { connector });
    } else {
      RouterController.push("ConnectingWalletConnect", { wallet });
    }
  }
};
W3mAllWalletsSearch.styles = styles_default37;
__decorate55([
  state()
], W3mAllWalletsSearch.prototype, "loading", void 0);
__decorate55([
  property()
], W3mAllWalletsSearch.prototype, "query", void 0);
W3mAllWalletsSearch = __decorate55([
  customElement("w3m-all-wallets-search")
], W3mAllWalletsSearch);

// node_modules/@web3modal/scaffold-ui/dist/esm/src/partials/w3m-connecting-header/index.js
var __decorate56 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mConnectingHeader = class W3mConnectingHeader2 extends LitElement {
  constructor() {
    super();
    this.platformTabs = [];
    this.unsubscribe = [];
    this.platforms = [];
    this.onSelectPlatfrom = void 0;
    this.buffering = false;
    this.unsubscribe.push(ConnectionController.subscribeKey("buffering", (val) => this.buffering = val));
  }
  disconnectCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    const tabs = this.generateTabs();
    return html`
      <wui-flex justifyContent="center" .padding=${["0", "0", "l", "0"]}>
        <wui-tabs
          ?disabled=${this.buffering}
          .tabs=${tabs}
          .onTabChange=${this.onTabChange.bind(this)}
        ></wui-tabs>
      </wui-flex>
    `;
  }
  generateTabs() {
    const tabs = this.platforms.map((platform) => {
      if (platform === "browser") {
        return { label: "Browser", icon: "extension", platform: "browser" };
      } else if (platform === "mobile") {
        return { label: "Mobile", icon: "mobile", platform: "mobile" };
      } else if (platform === "qrcode") {
        return { label: "Mobile", icon: "mobile", platform: "qrcode" };
      } else if (platform === "web") {
        return { label: "Webapp", icon: "browser", platform: "web" };
      } else if (platform === "desktop") {
        return { label: "Desktop", icon: "desktop", platform: "desktop" };
      }
      return { label: "Browser", icon: "extension", platform: "unsupported" };
    });
    this.platformTabs = tabs.map(({ platform }) => platform);
    return tabs;
  }
  onTabChange(index) {
    var _a2;
    const tab = this.platformTabs[index];
    if (tab) {
      (_a2 = this.onSelectPlatfrom) == null ? void 0 : _a2.call(this, tab);
    }
  }
};
__decorate56([
  property({ type: Array })
], W3mConnectingHeader.prototype, "platforms", void 0);
__decorate56([
  property()
], W3mConnectingHeader.prototype, "onSelectPlatfrom", void 0);
__decorate56([
  state()
], W3mConnectingHeader.prototype, "buffering", void 0);
W3mConnectingHeader = __decorate56([
  customElement("w3m-connecting-header")
], W3mConnectingHeader);

// node_modules/@web3modal/scaffold-ui/dist/esm/src/partials/w3m-connecting-wc-browser/index.js
var __decorate57 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mConnectingWcBrowser = class W3mConnectingWcBrowser2 extends W3mConnectingWidget {
  constructor() {
    super();
    if (!this.wallet) {
      throw new Error("w3m-connecting-wc-browser: No wallet provided");
    }
    this.onConnect = this.onConnectProxy.bind(this);
    this.onAutoConnect = this.onConnectProxy.bind(this);
    EventsController.sendEvent({
      type: "track",
      event: "SELECT_WALLET",
      properties: { name: this.wallet.name, platform: "browser" }
    });
  }
  async onConnectProxy() {
    var _a2;
    try {
      this.error = false;
      const { connectors } = ConnectorController.state;
      const announcedConnector = connectors.find((c) => {
        var _a3, _b2;
        return c.type === "ANNOUNCED" && ((_a3 = c.info) == null ? void 0 : _a3.rdns) === ((_b2 = this.wallet) == null ? void 0 : _b2.rdns);
      });
      const injectedConnector = connectors.find((c) => c.type === "INJECTED");
      if (announcedConnector) {
        await ConnectionController.connectExternal(announcedConnector);
      } else if (injectedConnector) {
        await ConnectionController.connectExternal(injectedConnector);
      }
      ModalController.close();
      EventsController.sendEvent({
        type: "track",
        event: "CONNECT_SUCCESS",
        properties: { method: "browser", name: ((_a2 = this.wallet) == null ? void 0 : _a2.name) || "Unknown" }
      });
    } catch (error) {
      EventsController.sendEvent({
        type: "track",
        event: "CONNECT_ERROR",
        properties: { message: (error == null ? void 0 : error.message) ?? "Unknown" }
      });
      this.error = true;
    }
  }
};
W3mConnectingWcBrowser = __decorate57([
  customElement("w3m-connecting-wc-browser")
], W3mConnectingWcBrowser);

// node_modules/@web3modal/scaffold-ui/dist/esm/src/partials/w3m-connecting-wc-desktop/index.js
var __decorate58 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mConnectingWcDesktop = class W3mConnectingWcDesktop2 extends W3mConnectingWidget {
  constructor() {
    super();
    if (!this.wallet) {
      throw new Error("w3m-connecting-wc-desktop: No wallet provided");
    }
    this.onConnect = this.onConnectProxy.bind(this);
    this.onRender = this.onRenderProxy.bind(this);
    EventsController.sendEvent({
      type: "track",
      event: "SELECT_WALLET",
      properties: { name: this.wallet.name, platform: "desktop" }
    });
  }
  onRenderProxy() {
    if (!this.ready && this.uri) {
      this.ready = true;
      this.timeout = setTimeout(() => {
        var _a2;
        (_a2 = this.onConnect) == null ? void 0 : _a2.call(this);
      }, 200);
    }
  }
  onConnectProxy() {
    var _a2;
    if (((_a2 = this.wallet) == null ? void 0 : _a2.desktop_link) && this.uri) {
      try {
        this.error = false;
        const { desktop_link, name } = this.wallet;
        const { redirect, href } = CoreHelperUtil.formatNativeUrl(desktop_link, this.uri);
        ConnectionController.setWcLinking({ name, href });
        ConnectionController.setRecentWallet(this.wallet);
        CoreHelperUtil.openHref(redirect, "_blank");
      } catch {
        this.error = true;
      }
    }
  }
};
W3mConnectingWcDesktop = __decorate58([
  customElement("w3m-connecting-wc-desktop")
], W3mConnectingWcDesktop);

// node_modules/@web3modal/scaffold-ui/dist/esm/src/partials/w3m-connecting-wc-mobile/index.js
var __decorate59 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mConnectingWcMobile = class W3mConnectingWcMobile2 extends W3mConnectingWidget {
  constructor() {
    super();
    if (!this.wallet) {
      throw new Error("w3m-connecting-wc-mobile: No wallet provided");
    }
    this.onConnect = this.onConnectProxy.bind(this);
    this.onRender = this.onRenderProxy.bind(this);
    document.addEventListener("visibilitychange", this.onBuffering.bind(this));
    EventsController.sendEvent({
      type: "track",
      event: "SELECT_WALLET",
      properties: { name: this.wallet.name, platform: "mobile" }
    });
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener("visibilitychange", this.onBuffering.bind(this));
  }
  onRenderProxy() {
    var _a2;
    if (!this.ready && this.uri) {
      this.ready = true;
      (_a2 = this.onConnect) == null ? void 0 : _a2.call(this);
    }
  }
  onConnectProxy() {
    var _a2;
    if (((_a2 = this.wallet) == null ? void 0 : _a2.mobile_link) && this.uri) {
      try {
        this.error = false;
        const { mobile_link, name } = this.wallet;
        const { redirect, href } = CoreHelperUtil.formatNativeUrl(mobile_link, this.uri);
        ConnectionController.setWcLinking({ name, href });
        ConnectionController.setRecentWallet(this.wallet);
        CoreHelperUtil.openHref(redirect, "_self");
      } catch {
        this.error = true;
      }
    }
  }
  onBuffering() {
    const isIos = CoreHelperUtil.isIos();
    if ((document == null ? void 0 : document.visibilityState) === "visible" && !this.error && isIos) {
      ConnectionController.setBuffering(true);
      setTimeout(() => {
        ConnectionController.setBuffering(false);
      }, 5e3);
    }
  }
};
W3mConnectingWcMobile = __decorate59([
  customElement("w3m-connecting-wc-mobile")
], W3mConnectingWcMobile);

// node_modules/@web3modal/scaffold-ui/dist/esm/src/partials/w3m-connecting-wc-qrcode/styles.js
var styles_default38 = css`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }
`;

// node_modules/@web3modal/scaffold-ui/dist/esm/src/partials/w3m-connecting-wc-qrcode/index.js
var __decorate60 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mConnectingWcQrcode = class W3mConnectingWcQrcode2 extends W3mConnectingWidget {
  constructor() {
    var _a2;
    super();
    this.forceUpdate = () => {
      this.requestUpdate();
    };
    window.addEventListener("resize", this.forceUpdate);
    EventsController.sendEvent({
      type: "track",
      event: "SELECT_WALLET",
      properties: { name: ((_a2 = this.wallet) == null ? void 0 : _a2.name) ?? "WalletConnect", platform: "qrcode" }
    });
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener("resize", this.forceUpdate);
  }
  render() {
    this.onRenderProxy();
    return html`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["0", "xl", "xl", "xl"]}
        gap="xl"
      >
        <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

        <wui-text variant="paragraph-500" color="fg-100">
          Scan this QR Code with your phone
        </wui-text>
        ${this.copyTemplate()}
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `;
  }
  onRenderProxy() {
    if (!this.ready && this.uri) {
      this.timeout = setTimeout(() => {
        this.ready = true;
      }, 200);
    }
  }
  qrCodeTemplate() {
    if (!this.uri || !this.ready) {
      return null;
    }
    const size = this.getBoundingClientRect().width - 40;
    const alt = this.wallet ? this.wallet.name : void 0;
    ConnectionController.setWcLinking(void 0);
    ConnectionController.setRecentWallet(this.wallet);
    return html` <wui-qr-code
      size=${size}
      theme=${ThemeController.state.themeMode}
      uri=${this.uri}
      imageSrc=${ifDefined(AssetUtil.getWalletImage(this.wallet))}
      alt=${ifDefined(alt)}
      data-testid="wui-qr-code"
    ></wui-qr-code>`;
  }
  copyTemplate() {
    const inactive = !this.uri || !this.ready;
    return html`<wui-link
      .disabled=${inactive}
      @click=${this.onCopyUri}
      color="fg-200"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
      Copy link
    </wui-link>`;
  }
};
W3mConnectingWcQrcode.styles = styles_default38;
W3mConnectingWcQrcode = __decorate60([
  customElement("w3m-connecting-wc-qrcode")
], W3mConnectingWcQrcode);

// node_modules/@web3modal/scaffold-ui/dist/esm/src/partials/w3m-connecting-wc-unsupported/index.js
var __decorate61 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mConnectingWcUnsupported = class W3mConnectingWcUnsupported2 extends LitElement {
  constructor() {
    var _a2;
    super();
    this.wallet = (_a2 = RouterController.state.data) == null ? void 0 : _a2.wallet;
    if (!this.wallet) {
      throw new Error("w3m-connecting-wc-unsupported: No wallet provided");
    }
    EventsController.sendEvent({
      type: "track",
      event: "SELECT_WALLET",
      properties: { name: this.wallet.name, platform: "browser" }
    });
  }
  render() {
    return html`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl", "xl", "xl", "xl"]}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${ifDefined(AssetUtil.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `;
  }
};
W3mConnectingWcUnsupported = __decorate61([
  customElement("w3m-connecting-wc-unsupported")
], W3mConnectingWcUnsupported);

// node_modules/@web3modal/scaffold-ui/dist/esm/src/partials/w3m-connecting-wc-web/index.js
var __decorate62 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mConnectingWcWeb = class W3mConnectingWcWeb2 extends W3mConnectingWidget {
  constructor() {
    super();
    if (!this.wallet) {
      throw new Error("w3m-connecting-wc-web: No wallet provided");
    }
    this.onConnect = this.onConnectProxy.bind(this);
    this.secondaryBtnLabel = "Open";
    this.secondaryLabel = "Open and continue in a new browser tab";
    this.secondaryBtnIcon = "externalLink";
    EventsController.sendEvent({
      type: "track",
      event: "SELECT_WALLET",
      properties: { name: this.wallet.name, platform: "web" }
    });
  }
  onConnectProxy() {
    var _a2;
    if (((_a2 = this.wallet) == null ? void 0 : _a2.webapp_link) && this.uri) {
      try {
        this.error = false;
        const { webapp_link, name } = this.wallet;
        const { redirect, href } = CoreHelperUtil.formatUniversalUrl(webapp_link, this.uri);
        ConnectionController.setWcLinking({ name, href });
        ConnectionController.setRecentWallet(this.wallet);
        CoreHelperUtil.openHref(redirect, "_blank");
      } catch {
        this.error = true;
      }
    }
  }
};
W3mConnectingWcWeb = __decorate62([
  customElement("w3m-connecting-wc-web")
], W3mConnectingWcWeb);

// node_modules/@web3modal/scaffold-ui/dist/esm/src/partials/w3m-swap-details/styles.js
var styles_default39 = css`
  :host {
    width: 100%;
  }

  .details-container > wui-flex {
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    width: 100%;
  }

  .details-container > wui-flex > button {
    border: none;
    background: none;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    cursor: pointer;
  }

  .details-content-container {
    padding: var(--wui-spacing-1xs);
    padding-top: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details-content-container > wui-flex {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: var(--wui-spacing-s);
    padding-left: var(--wui-spacing-s);
    padding-right: var(--wui-spacing-1xs);
    border-radius: calc(var(--wui-border-radius-5xs) + var(--wui-border-radius-4xs));
    background: var(--wui-color-gray-glass-002);
  }

  .details-row-title {
    white-space: nowrap;
  }

  .details-row.provider-free-row {
    padding-right: var(--wui-spacing-xs);
  }
`;

// node_modules/@web3modal/scaffold-ui/dist/esm/src/partials/w3m-swap-details/index.js
var __decorate63 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var slippageRate = ConstantsUtil2.CONVERT_SLIPPAGE_TOLERANCE;
var WuiSwapDetails = class WuiSwapDetails2 extends LitElement {
  constructor() {
    var _a2;
    super();
    this.unsubscribe = [];
    this.networkName = (_a2 = NetworkController.state.caipNetwork) == null ? void 0 : _a2.name;
    this.detailsOpen = false;
    this.sourceToken = SwapController.state.sourceToken;
    this.toToken = SwapController.state.toToken;
    this.toTokenAmount = SwapController.state.toTokenAmount;
    this.sourceTokenPriceInUSD = SwapController.state.sourceTokenPriceInUSD;
    this.toTokenPriceInUSD = SwapController.state.toTokenPriceInUSD;
    this.gasPriceInUSD = SwapController.state.gasPriceInUSD;
    this.priceImpact = SwapController.state.priceImpact;
    this.maxSlippage = SwapController.state.maxSlippage;
    this.networkTokenSymbol = SwapController.state.networkTokenSymbol;
    this.inputError = SwapController.state.inputError;
    this.unsubscribe.push(...[
      SwapController.subscribe((newState) => {
        this.sourceToken = newState.sourceToken;
        this.toToken = newState.toToken;
        this.toTokenAmount = newState.toTokenAmount;
        this.gasPriceInUSD = newState.gasPriceInUSD;
        this.priceImpact = newState.priceImpact;
        this.maxSlippage = newState.maxSlippage;
        this.sourceTokenPriceInUSD = newState.sourceTokenPriceInUSD;
        this.toTokenPriceInUSD = newState.toTokenPriceInUSD;
        this.inputError = newState.inputError;
      })
    ]);
  }
  render() {
    const minReceivedAmount = this.toTokenAmount && this.maxSlippage ? NumberUtil.bigNumber(this.toTokenAmount).minus(this.maxSlippage).toString() : null;
    if (!this.sourceToken || !this.toToken || this.inputError) {
      return null;
    }
    const toTokenSwappedAmount = this.sourceTokenPriceInUSD && this.toTokenPriceInUSD ? 1 / this.toTokenPriceInUSD * this.sourceTokenPriceInUSD : 0;
    return html`
      <wui-flex flexDirection="column" alignItems="center" gap="1xs" class="details-container">
        <wui-flex flexDirection="column">
          <button @click=${this.toggleDetails.bind(this)}>
            <wui-flex justifyContent="space-between" .padding=${["0", "xs", "0", "xs"]}>
              <wui-flex justifyContent="flex-start" flexGrow="1" gap="xs">
                <wui-text variant="small-400" color="fg-100">
                  1 ${this.sourceToken.symbol} =
                  ${UiHelperUtil.formatNumberToLocalString(toTokenSwappedAmount, 3)}
                  ${this.toToken.symbol}
                </wui-text>
                <wui-text variant="small-400" color="fg-200">
                  $${UiHelperUtil.formatNumberToLocalString(this.sourceTokenPriceInUSD)}
                </wui-text>
              </wui-flex>
              <wui-icon name="chevronBottom"></wui-icon>
            </wui-flex>
          </button>
          ${this.detailsOpen ? html`
                <wui-flex flexDirection="column" gap="xs" class="details-content-container">
                  <wui-flex flexDirection="column" gap="xs">
                    <wui-flex
                      justifyContent="space-between"
                      alignItems="center"
                      class="details-row"
                    >
                      <wui-flex alignItems="center" gap="xs">
                        <wui-text class="details-row-title" variant="small-400" color="fg-150">
                          Network cost
                        </wui-text>
                        <w3m-tooltip-trigger
                          text=${`Network cost is paid in ${this.networkTokenSymbol} on the ${this.networkName} network in order to execute transaction.`}
                        >
                          <wui-icon size="xs" color="fg-250" name="infoCircle"></wui-icon>
                        </w3m-tooltip-trigger>
                      </wui-flex>
                      <wui-text variant="small-400" color="fg-100">
                        $${UiHelperUtil.formatNumberToLocalString(this.gasPriceInUSD, 3)}
                      </wui-text>
                    </wui-flex>
                  </wui-flex>
                  ${this.priceImpact ? html` <wui-flex flexDirection="column" gap="xs">
                        <wui-flex
                          justifyContent="space-between"
                          alignItems="center"
                          class="details-row"
                        >
                          <wui-flex alignItems="center" gap="xs">
                            <wui-text class="details-row-title" variant="small-400" color="fg-150">
                              Price impact
                            </wui-text>
                            <w3m-tooltip-trigger
                              text="Price impact reflects the change in market price due to your trade"
                            >
                              <wui-icon size="xs" color="fg-250" name="infoCircle"></wui-icon>
                            </w3m-tooltip-trigger>
                          </wui-flex>
                          <wui-flex>
                            <wui-text variant="small-400" color="fg-200">
                              ${UiHelperUtil.formatNumberToLocalString(this.priceImpact, 3)}%
                            </wui-text>
                          </wui-flex>
                        </wui-flex>
                      </wui-flex>` : null}
                  ${this.maxSlippage && this.sourceToken.symbol ? html`<wui-flex flexDirection="column" gap="xs">
                        <wui-flex
                          justifyContent="space-between"
                          alignItems="center"
                          class="details-row"
                        >
                          <wui-flex alignItems="center" gap="xs">
                            <wui-text class="details-row-title" variant="small-400" color="fg-150">
                              Max. slippage
                            </wui-text>
                            <w3m-tooltip-trigger
                              text=${`Max slippage sets the minimum amount you must receive for the transaction to proceed. ${minReceivedAmount ? `Transaction will be reversed if you receive less than ${UiHelperUtil.formatNumberToLocalString(minReceivedAmount, 6)} ${this.toToken.symbol} due to price changes.` : ""}`}
                            >
                              <wui-icon size="xs" color="fg-250" name="infoCircle"></wui-icon>
                            </w3m-tooltip-trigger>
                          </wui-flex>
                          <wui-flex>
                            <wui-text variant="small-400" color="fg-200">
                              ${UiHelperUtil.formatNumberToLocalString(this.maxSlippage, 6)}
                              ${this.toToken.symbol} ${slippageRate}%
                            </wui-text>
                          </wui-flex>
                        </wui-flex>
                      </wui-flex>` : null}
                  <wui-flex flexDirection="column" gap="xs">
                    <wui-flex
                      justifyContent="space-between"
                      alignItems="center"
                      class="details-row provider-free-row"
                    >
                      <wui-flex alignItems="center" gap="xs">
                        <wui-text class="details-row-title" variant="small-400" color="fg-150">
                          Provider fee
                        </wui-text>
                      </wui-flex>
                      <wui-flex>
                        <wui-text variant="small-400" color="fg-200">0.85%</wui-text>
                      </wui-flex>
                    </wui-flex>
                  </wui-flex>
                </wui-flex>
              ` : null}
        </wui-flex>
      </wui-flex>
    `;
  }
  toggleDetails() {
    this.detailsOpen = !this.detailsOpen;
  }
};
WuiSwapDetails.styles = [styles_default39];
__decorate63([
  state()
], WuiSwapDetails.prototype, "networkName", void 0);
__decorate63([
  property()
], WuiSwapDetails.prototype, "detailsOpen", void 0);
__decorate63([
  state()
], WuiSwapDetails.prototype, "sourceToken", void 0);
__decorate63([
  state()
], WuiSwapDetails.prototype, "toToken", void 0);
__decorate63([
  state()
], WuiSwapDetails.prototype, "toTokenAmount", void 0);
__decorate63([
  state()
], WuiSwapDetails.prototype, "sourceTokenPriceInUSD", void 0);
__decorate63([
  state()
], WuiSwapDetails.prototype, "toTokenPriceInUSD", void 0);
__decorate63([
  state()
], WuiSwapDetails.prototype, "gasPriceInUSD", void 0);
__decorate63([
  state()
], WuiSwapDetails.prototype, "priceImpact", void 0);
__decorate63([
  state()
], WuiSwapDetails.prototype, "maxSlippage", void 0);
__decorate63([
  state()
], WuiSwapDetails.prototype, "networkTokenSymbol", void 0);
__decorate63([
  state()
], WuiSwapDetails.prototype, "inputError", void 0);
WuiSwapDetails = __decorate63([
  customElement("w3m-swap-details")
], WuiSwapDetails);

// node_modules/@web3modal/scaffold-ui/dist/esm/src/partials/w3m-swap-input/styles.js
var styles_default40 = css`
  :host > wui-flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: var(--wui-border-radius-s);
    background-color: var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-xl);
    padding-right: var(--wui-spacing-s);
    width: 100%;
    height: 100px;
    box-sizing: border-box;
    box-shadow: inset 0px 0px 0px 1px var(--wui-color-gray-glass-002);
    position: relative;
    transition: box-shadow var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
  }

  :host wui-flex.focus {
    box-shadow: inset 0px 0px 0px 1px var(--wui-color-gray-glass-005);
  }

  :host > wui-flex .swap-input,
  :host > wui-flex .swap-token-button {
    z-index: 10;
  }

  :host > wui-flex .swap-input {
    -webkit-mask-image: linear-gradient(
      270deg,
      transparent 0px,
      transparent 8px,
      black 24px,
      black 25px,
      black 32px,
      black 100%
    );
    mask-image: linear-gradient(
      270deg,
      transparent 0px,
      transparent 8px,
      black 24px,
      black 25px,
      black 32px,
      black 100%
    );
  }

  :host > wui-flex .swap-input input {
    background: none;
    border: none;
    height: 42px;
    width: 100%;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    letter-spacing: -1.28px;
    outline: none;
    caret-color: var(--wui-color-accent-100);
    color: var(--wui-color-fg-100);
    padding: 0px;
  }

  :host > wui-flex .swap-input input:focus-visible {
    outline: none;
  }

  :host > wui-flex .swap-input input::-webkit-outer-spin-button,
  :host > wui-flex .swap-input input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .max-value-button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: var(--wui-color-gray-glass-020);
    padding-left: 0px;
  }

  .market-value {
    min-height: 18px;
  }
`;

// node_modules/@web3modal/scaffold-ui/dist/esm/src/partials/w3m-swap-input/index.js
var __decorate64 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var MINIMUM_USD_VALUE_TO_CONVERT = 5e-5;
var W3mSwapInput = class W3mSwapInput2 extends LitElement {
  constructor() {
    super(...arguments);
    this.focused = false;
    this.price = 0;
    this.target = "sourceToken";
    this.onSetAmount = null;
    this.onSetMaxValue = null;
  }
  render() {
    const marketValue = this.marketValue || "0";
    const isMarketValueGreaterThanZero = NumberUtil.bigNumber(marketValue).isGreaterThan("0");
    return html`
      <wui-flex class="${this.focused ? "focus" : ""}" justifyContent="space-between">
        <wui-flex
          flex="1"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
          class="swap-input"
        >
          <input
            @focusin=${() => this.onFocusChange(true)}
            @focusout=${() => this.onFocusChange(false)}
            ?disabled=${this.disabled}
            .value=${this.value}
            @input=${this.dispatchInputChangeEvent}
            @keydown=${this.handleKeydown}
            placeholder="0"
            type="text"
            inputmode="decimal"
          />
          <wui-text class="market-value" variant="small-400" color="fg-200">
            ${isMarketValueGreaterThanZero ? `$${UiHelperUtil.formatNumberToLocalString(this.marketValue, 3)}` : null}
          </wui-text>
        </wui-flex>
        ${this.templateTokenSelectButton()}
      </wui-flex>
    `;
  }
  handleKeydown(event) {
    return InputUtil.numericInputKeyDown(event, this.value, (value) => {
      var _a2;
      return (_a2 = this.onSetAmount) == null ? void 0 : _a2.call(this, this.target, value);
    });
  }
  dispatchInputChangeEvent(event) {
    if (!this.onSetAmount) {
      return;
    }
    const value = event.target.value.replace(/[^0-9.]/gu, "");
    if (value === "," || value === ".") {
      this.onSetAmount(this.target, "0.");
    } else if (value.endsWith(",")) {
      this.onSetAmount(this.target, value.replace(",", "."));
    } else {
      this.onSetAmount(this.target, value);
    }
  }
  setMaxValueToInput() {
    var _a2;
    (_a2 = this.onSetMaxValue) == null ? void 0 : _a2.call(this, this.target, this.balance);
  }
  templateTokenSelectButton() {
    if (!this.token) {
      return html` <wui-button
        class="swap-token-button"
        size="md"
        variant="accent"
        @click=${this.onSelectToken.bind(this)}
      >
        Select token
      </wui-button>`;
    }
    return html`
      <wui-flex
        class="swap-token-button"
        flexDirection="column"
        alignItems="flex-end"
        justifyContent="center"
        gap="xxs"
      >
        <wui-token-button
          text=${this.token.symbol}
          imageSrc=${this.token.logoUri}
          @click=${this.onSelectToken.bind(this)}
        >
        </wui-token-button>
        <wui-flex alignItems="center" gap="xxs"> ${this.tokenBalanceTemplate()} </wui-flex>
      </wui-flex>
    `;
  }
  tokenBalanceTemplate() {
    const balanceValueInUSD = NumberUtil.multiply(this.balance, this.price);
    const haveBalance = balanceValueInUSD ? balanceValueInUSD == null ? void 0 : balanceValueInUSD.isGreaterThan(MINIMUM_USD_VALUE_TO_CONVERT) : false;
    return html`
      ${haveBalance ? html`<wui-text variant="small-400" color="fg-200">
            ${UiHelperUtil.formatNumberToLocalString(this.balance, 3)}
          </wui-text>` : null}
      ${this.target === "sourceToken" ? this.tokenActionButtonTemplate(haveBalance) : null}
    `;
  }
  tokenActionButtonTemplate(haveBalance) {
    if (haveBalance) {
      return html` <button class="max-value-button" @click=${this.setMaxValueToInput.bind(this)}>
        <wui-text color="accent-100" variant="small-600">Max</wui-text>
      </button>`;
    }
    return html` <button class="max-value-button" @click=${this.onBuyToken.bind(this)}>
      <wui-text color="accent-100" variant="small-600">Buy</wui-text>
    </button>`;
  }
  onFocusChange(state2) {
    this.focused = state2;
  }
  onSelectToken() {
    EventsController.sendEvent({ type: "track", event: "CLICK_SELECT_TOKEN_TO_SWAP" });
    RouterController.push("SwapSelectToken", {
      target: this.target
    });
  }
  onBuyToken() {
    RouterController.push("OnRampProviders");
  }
};
W3mSwapInput.styles = [styles_default40];
__decorate64([
  property()
], W3mSwapInput.prototype, "focused", void 0);
__decorate64([
  property()
], W3mSwapInput.prototype, "balance", void 0);
__decorate64([
  property()
], W3mSwapInput.prototype, "value", void 0);
__decorate64([
  property()
], W3mSwapInput.prototype, "price", void 0);
__decorate64([
  property()
], W3mSwapInput.prototype, "marketValue", void 0);
__decorate64([
  property()
], W3mSwapInput.prototype, "disabled", void 0);
__decorate64([
  property()
], W3mSwapInput.prototype, "target", void 0);
__decorate64([
  property()
], W3mSwapInput.prototype, "token", void 0);
__decorate64([
  property()
], W3mSwapInput.prototype, "onSetAmount", void 0);
__decorate64([
  property()
], W3mSwapInput.prototype, "onSetMaxValue", void 0);
W3mSwapInput = __decorate64([
  customElement("w3m-swap-input")
], W3mSwapInput);

// node_modules/@web3modal/scaffold-ui/dist/esm/src/partials/w3m-swap-input-skeleton/styles.js
var styles_default41 = css`
  :host {
    width: 100%;
  }

  :host > wui-flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: var(--wui-border-radius-s);
    padding: var(--wui-spacing-xl);
    padding-right: var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0px 0px 0px 1px var(--wui-color-gray-glass-002);
    width: 100%;
    height: 100px;
    box-sizing: border-box;
    position: relative;
  }

  wui-shimmer.market-value {
    opacity: 0;
  }

  :host > wui-flex > svg.input_mask {
    position: absolute;
    inset: 0;
    z-index: 5;
  }

  :host wui-flex .input_mask__border,
  :host wui-flex .input_mask__background {
    transition: fill var(--wui-duration-md) var(--wui-ease-out-power-1);
    will-change: fill;
  }

  :host wui-flex .input_mask__border {
    fill: var(--wui-color-gray-glass-020);
  }

  :host wui-flex .input_mask__background {
    fill: var(--wui-color-gray-glass-002);
  }
`;

// node_modules/@web3modal/scaffold-ui/dist/esm/src/partials/w3m-swap-input-skeleton/index.js
var __decorate65 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mSwapInputSkeleton = class W3mSwapInputSkeleton2 extends LitElement {
  constructor() {
    super(...arguments);
    this.target = "sourceToken";
  }
  render() {
    return html`
      <wui-flex class justifyContent="space-between">
        <wui-flex
          flex="1"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
          class="swap-input"
          gap="xxs"
        >
          <wui-shimmer width="80px" height="40px" borderRadius="xxs" variant="light"></wui-shimmer>
        </wui-flex>
        ${this.templateTokenSelectButton()}
      </wui-flex>
    `;
  }
  templateTokenSelectButton() {
    return html`
      <wui-flex
        class="swap-token-button"
        flexDirection="column"
        alignItems="flex-end"
        justifyContent="center"
        gap="xxs"
      >
        <wui-shimmer width="80px" height="40px" borderRadius="3xl" variant="light"></wui-shimmer>
      </wui-flex>
    `;
  }
};
W3mSwapInputSkeleton.styles = [styles_default41];
__decorate65([
  property()
], W3mSwapInputSkeleton.prototype, "target", void 0);
W3mSwapInputSkeleton = __decorate65([
  customElement("w3m-swap-input-skeleton")
], W3mSwapInputSkeleton);

// node_modules/@web3modal/scaffold-ui/dist/esm/src/partials/w3m-header/styles.js
var styles_default42 = css`
  :host {
    height: 64px;
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-icon-link[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }
`;

// node_modules/@web3modal/scaffold-ui/dist/esm/src/partials/w3m-header/index.js
var __decorate66 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var BETA_SCREENS = ["Swap", "SwapSelectToken", "SwapPreview"];
function headings() {
  var _a2, _b2, _c, _d, _e, _f, _g;
  const connectorName = (_b2 = (_a2 = RouterController.state.data) == null ? void 0 : _a2.connector) == null ? void 0 : _b2.name;
  const walletName = (_d = (_c = RouterController.state.data) == null ? void 0 : _c.wallet) == null ? void 0 : _d.name;
  const networkName = (_f = (_e = RouterController.state.data) == null ? void 0 : _e.network) == null ? void 0 : _f.name;
  const name = walletName ?? connectorName;
  const connectors = ConnectorController.getConnectors();
  const isEmail = connectors.length === 1 && ((_g = connectors[0]) == null ? void 0 : _g.id) === "w3m-email";
  return {
    Connect: `Connect ${isEmail ? "Email" : ""} Wallet`,
    ChooseAccountName: void 0,
    Account: void 0,
    AccountSettings: void 0,
    AllWallets: "All Wallets",
    ApproveTransaction: "Approve Transaction",
    BuyInProgress: "Buy",
    ConnectingExternal: name ?? "Connect Wallet",
    ConnectingWalletConnect: name ?? "WalletConnect",
    ConnectingSiwe: "Sign In",
    Convert: "Convert",
    ConvertSelectToken: "Select token",
    ConvertPreview: "Preview convert",
    Downloads: name ? `Get ${name}` : "Downloads",
    EmailVerifyOtp: "Confirm Email",
    EmailVerifyDevice: "Register Device",
    GetWallet: "Get a wallet",
    Networks: "Choose Network",
    OnRampProviders: "Choose Provider",
    OnRampActivity: "Activity",
    OnRampTokenSelect: "Select Token",
    OnRampFiatSelect: "Select Currency",
    Profile: void 0,
    SelectAddresses: "Select accounts",
    SwitchNetwork: networkName ?? "Switch Network",
    SwitchAddress: "Switch Address",
    Transactions: "Activity",
    UnsupportedChain: "Switch Network",
    UpgradeEmailWallet: "Upgrade your Wallet",
    UpgradeToSmartAccount: void 0,
    UpdateEmailWallet: "Edit Email",
    UpdateEmailPrimaryOtp: "Confirm Current Email",
    UpdateEmailSecondaryOtp: "Confirm New Email",
    WhatIsABuy: "What is Buy?",
    RegisterAccountName: "Choose name",
    RegisterAccountNameSuccess: "",
    WalletReceive: "Receive",
    WalletCompatibleNetworks: "Compatible Networks",
    Swap: "Swap",
    SwapSelectToken: "Select token",
    SwapPreview: "Preview swap",
    WalletSend: "Send",
    WalletSendPreview: "Review send",
    WalletSendSelectToken: "Select Token",
    WhatIsANetwork: "What is a network?",
    WhatIsAWallet: "What is a wallet?",
    ConnectWallets: "Connect wallet",
    ConnectSocials: "All socials",
    ConnectingSocial: AccountController.state.socialProvider ? AccountController.state.socialProvider : "Connect Social"
  };
}
var W3mHeader = class W3mHeader2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.heading = headings()[RouterController.state.view];
    this.buffering = false;
    this.showBack = false;
    this.unsubscribe.push(RouterController.subscribeKey("view", (val) => {
      this.onViewChange(val);
      this.onHistoryChange();
    }), ConnectionController.subscribeKey("buffering", (val) => this.buffering = val));
  }
  disconnectCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    return html`
      <wui-flex .padding=${this.getPadding()} justifyContent="space-between" alignItems="center">
        ${this.dynamicButtonTemplate()} ${this.titleTemplate()}
        <wui-icon-link
          ?disabled=${this.buffering}
          icon="close"
          @click=${this.onClose.bind(this)}
          data-testid="w3m-header-close"
        ></wui-icon-link>
      </wui-flex>
    `;
  }
  onWalletHelp() {
    EventsController.sendEvent({ type: "track", event: "CLICK_WALLET_HELP" });
    RouterController.push("WhatIsAWallet");
  }
  async onClose() {
    if (OptionsController.state.isSiweEnabled) {
      const { SIWEController } = await import("./exports-VVXRRPWP.js");
      if (SIWEController.state.status !== "success") {
        await ConnectionController.disconnect();
      }
    }
    ModalController.close();
  }
  titleTemplate() {
    const isBeta = BETA_SCREENS.includes(RouterController.state.view);
    return html`
      <wui-flex class="w3m-header-title" alignItems="center" gap="xs">
        <wui-text variant="paragraph-700" color="fg-100">${this.heading}</wui-text>
        ${isBeta ? html`<wui-tag variant="main">Beta</wui-tag>` : null}
      </wui-flex>
    `;
  }
  dynamicButtonTemplate() {
    const { view } = RouterController.state;
    const isConnectHelp = view === "Connect";
    const isApproveTransaction = view === "ApproveTransaction";
    const isUpgradeToSmartAccounts = view === "UpgradeToSmartAccount";
    const isConnectingSIWEView = view === "ConnectingSiwe";
    const shouldHideBack = isApproveTransaction || isUpgradeToSmartAccounts || isConnectingSIWEView;
    if (this.showBack && !shouldHideBack) {
      return html`<wui-icon-link
        id="dynamic"
        icon="chevronLeft"
        ?disabled=${this.buffering}
        @click=${this.onGoBack.bind(this)}
      ></wui-icon-link>`;
    }
    return html`<wui-icon-link
      data-hidden=${!isConnectHelp}
      id="dynamic"
      icon="helpCircle"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-link>`;
  }
  getPadding() {
    if (this.heading) {
      return ["l", "2l", "l", "2l"];
    }
    return ["l", "2l", "0", "2l"];
  }
  async onViewChange(view) {
    var _a2;
    const headingEl = (_a2 = this.shadowRoot) == null ? void 0 : _a2.querySelector("wui-flex.w3m-header-title");
    if (headingEl) {
      const preset = headings()[view];
      await headingEl.animate([{ opacity: 1 }, { opacity: 0 }], {
        duration: 200,
        fill: "forwards",
        easing: "ease"
      }).finished;
      this.heading = preset;
      headingEl.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: 200,
        fill: "forwards",
        easing: "ease"
      });
    }
  }
  async onHistoryChange() {
    var _a2;
    const { history } = RouterController.state;
    const buttonEl = (_a2 = this.shadowRoot) == null ? void 0 : _a2.querySelector("#dynamic");
    if (history.length > 1 && !this.showBack && buttonEl) {
      await buttonEl.animate([{ opacity: 1 }, { opacity: 0 }], {
        duration: 200,
        fill: "forwards",
        easing: "ease"
      }).finished;
      this.showBack = true;
      buttonEl.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: 200,
        fill: "forwards",
        easing: "ease"
      });
    } else if (history.length <= 1 && this.showBack && buttonEl) {
      await buttonEl.animate([{ opacity: 1 }, { opacity: 0 }], {
        duration: 200,
        fill: "forwards",
        easing: "ease"
      }).finished;
      this.showBack = false;
      buttonEl.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: 200,
        fill: "forwards",
        easing: "ease"
      });
    }
  }
  onGoBack() {
    RouterController.goBack();
  }
};
W3mHeader.styles = [styles_default42];
__decorate66([
  state()
], W3mHeader.prototype, "heading", void 0);
__decorate66([
  state()
], W3mHeader.prototype, "buffering", void 0);
__decorate66([
  state()
], W3mHeader.prototype, "showBack", void 0);
W3mHeader = __decorate66([
  customElement("w3m-header")
], W3mHeader);

// node_modules/@web3modal/scaffold-ui/dist/esm/src/partials/w3m-help-widget/index.js
var __decorate67 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mHelpWidget = class W3mHelpWidget2 extends LitElement {
  constructor() {
    super(...arguments);
    this.data = [];
  }
  render() {
    return html`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        ${this.data.map((item) => html`
            <wui-flex flexDirection="column" alignItems="center" gap="xl">
              <wui-flex flexDirection="row" justifyContent="center" gap="1xs">
                ${item.images.map((image) => html`<wui-visual name=${image}></wui-visual>`)}
              </wui-flex>
            </wui-flex>
            <wui-flex flexDirection="column" alignItems="center" gap="xxs">
              <wui-text variant="paragraph-500" color="fg-100" align="center">
                ${item.title}
              </wui-text>
              <wui-text variant="small-500" color="fg-200" align="center">${item.text}</wui-text>
            </wui-flex>
          `)}
      </wui-flex>
    `;
  }
};
__decorate67([
  property({ type: Array })
], W3mHelpWidget.prototype, "data", void 0);
W3mHelpWidget = __decorate67([
  customElement("w3m-help-widget")
], W3mHelpWidget);

// node_modules/@web3modal/scaffold-ui/dist/esm/src/partials/w3m-onramp-activity-item/styles.js
var styles_default43 = css`
  :host {
    width: 100%;
  }

  :host > wui-flex {
    width: 100%;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xs);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: var(--wui-spacing-s);
  }

  :host > wui-flex:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  .purchase-image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: var(--wui-icon-box-size-lg);
    height: var(--wui-icon-box-size-lg);
  }

  .purchase-image-container wui-image {
    width: 100%;
    height: 100%;
    position: relative;
    border-radius: calc(var(--wui-icon-box-size-lg) / 2);
  }

  .purchase-image-container wui-image::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-icon-box-size-lg) / 2);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  .purchase-image-container wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }
`;

// node_modules/@web3modal/scaffold-ui/dist/esm/src/partials/w3m-onramp-activity-item/index.js
var __decorate68 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mOnRampActivityItem = class W3mOnRampActivityItem2 extends LitElement {
  constructor() {
    super(...arguments);
    this.disabled = false;
    this.color = "inherit";
    this.label = "Bought";
    this.purchaseValue = "";
    this.purchaseCurrency = "";
    this.date = "";
    this.completed = false;
    this.inProgress = false;
    this.failed = false;
    this.onClick = null;
    this.symbol = "";
  }
  firstUpdated() {
    if (!this.icon) {
      this.fetchTokenImage();
    }
  }
  render() {
    return html`
      <wui-flex>
        ${this.imageTemplate()}
        <wui-flex flexDirection="column" gap="4xs" flexGrow="1">
          <wui-flex gap="xxs" alignItems="center" justifyContent="flex-start">
            ${this.statusIconTemplate()}
            <wui-text variant="paragraph-500" color="fg-100"> ${this.label}</wui-text>
          </wui-flex>
          <wui-text variant="small-400" color="fg-200">
            + ${this.purchaseValue} ${this.purchaseCurrency}
          </wui-text>
        </wui-flex>
        ${this.inProgress ? html`<wui-loading-spinner color="fg-200" size="md"></wui-loading-spinner>` : html`<wui-text variant="micro-700" color="fg-300"><span>${this.date}</span></wui-text>`}
      </wui-flex>
    `;
  }
  async fetchTokenImage() {
    await ApiController._fetchTokenImage(this.purchaseCurrency);
  }
  statusIconTemplate() {
    if (this.inProgress) {
      return null;
    }
    return this.completed ? this.boughtIconTemplate() : this.errorIconTemplate();
  }
  errorIconTemplate() {
    return html`<wui-icon-box
      size="xxs"
      iconColor="error-100"
      backgroundColor="error-100"
      background="opaque"
      icon="close"
      borderColor="wui-color-bg-125"
    ></wui-icon-box>`;
  }
  imageTemplate() {
    const icon = this.icon || `https://avatar.vercel.sh/andrew.svg?size=50&text=${this.symbol}`;
    return html`<wui-flex class="purchase-image-container">
      <wui-image src=${icon}></wui-image>
    </wui-flex>`;
  }
  boughtIconTemplate() {
    return html`<wui-icon-box
      size="xxs"
      iconColor="success-100"
      backgroundColor="success-100"
      background="opaque"
      icon="arrowBottom"
      borderColor="wui-color-bg-125"
    ></wui-icon-box>`;
  }
};
W3mOnRampActivityItem.styles = [styles_default43];
__decorate68([
  property({ type: Boolean })
], W3mOnRampActivityItem.prototype, "disabled", void 0);
__decorate68([
  property()
], W3mOnRampActivityItem.prototype, "color", void 0);
__decorate68([
  property()
], W3mOnRampActivityItem.prototype, "label", void 0);
__decorate68([
  property()
], W3mOnRampActivityItem.prototype, "purchaseValue", void 0);
__decorate68([
  property()
], W3mOnRampActivityItem.prototype, "purchaseCurrency", void 0);
__decorate68([
  property()
], W3mOnRampActivityItem.prototype, "date", void 0);
__decorate68([
  property({ type: Boolean })
], W3mOnRampActivityItem.prototype, "completed", void 0);
__decorate68([
  property({ type: Boolean })
], W3mOnRampActivityItem.prototype, "inProgress", void 0);
__decorate68([
  property({ type: Boolean })
], W3mOnRampActivityItem.prototype, "failed", void 0);
__decorate68([
  property()
], W3mOnRampActivityItem.prototype, "onClick", void 0);
__decorate68([
  property()
], W3mOnRampActivityItem.prototype, "symbol", void 0);
__decorate68([
  property()
], W3mOnRampActivityItem.prototype, "icon", void 0);
W3mOnRampActivityItem = __decorate68([
  customElement("w3m-onramp-activity-item")
], W3mOnRampActivityItem);

// node_modules/@web3modal/scaffold-ui/dist/esm/src/partials/w3m-onramp-input/styles.js
var styles_default44 = css`
  :host {
    width: 100%;
  }

  wui-loading-spinner {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
  }

  .currency-container {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: var(--wui-spacing-1xs);
    height: 40px;
    padding: var(--wui-spacing-xs) var(--wui-spacing-1xs) var(--wui-spacing-xs)
      var(--wui-spacing-xs);
    min-width: 95px;
    border-radius: var(--FULL, 1000px);
    border: 1px solid var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    cursor: pointer;
  }

  .currency-container > wui-image {
    height: 24px;
    width: 24px;
    border-radius: 50%;
  }
`;

// node_modules/@web3modal/scaffold-ui/dist/esm/src/partials/w3m-onramp-input/index.js
var __decorate69 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mInputCurrency = class W3mInputCurrency2 extends LitElement {
  constructor() {
    var _a2;
    super();
    this.unsubscribe = [];
    this.type = "Token";
    this.value = 0;
    this.currencies = [];
    this.selectedCurrency = (_a2 = this.currencies) == null ? void 0 : _a2[0];
    this.currencyImages = AssetController.state.currencyImages;
    this.tokenImages = AssetController.state.tokenImages;
    this.unsubscribe.push(OnRampController.subscribeKey("purchaseCurrency", (val) => {
      if (!val || this.type === "Fiat") {
        return;
      }
      this.selectedCurrency = this.formatPurchaseCurrency(val);
    }), OnRampController.subscribeKey("paymentCurrency", (val) => {
      if (!val || this.type === "Token") {
        return;
      }
      this.selectedCurrency = this.formatPaymentCurrency(val);
    }), OnRampController.subscribe((val) => {
      if (this.type === "Fiat") {
        this.currencies = val.purchaseCurrencies.map(this.formatPurchaseCurrency);
      } else {
        this.currencies = val.paymentCurrencies.map(this.formatPaymentCurrency);
      }
    }), AssetController.subscribe((val) => {
      this.currencyImages = { ...val.currencyImages };
      this.tokenImages = { ...val.tokenImages };
    }));
  }
  firstUpdated() {
    OnRampController.getAvailableCurrencies();
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    var _a2;
    const symbol = ((_a2 = this.selectedCurrency) == null ? void 0 : _a2.symbol) || "";
    const image = this.currencyImages[symbol] || this.tokenImages[symbol];
    return html`<wui-input-text type="number" size="lg" value=${this.value}>
      ${this.selectedCurrency ? html` <wui-flex
            class="currency-container"
            justifyContent="space-between"
            alignItems="center"
            gap="xxs"
            @click=${() => ModalController.open({ view: `OnRamp${this.type}Select` })}
          >
            <wui-image src=${ifDefined(image)}></wui-image>
            <wui-text color="fg-100">${this.selectedCurrency.symbol}</wui-text>
          </wui-flex>` : html`<wui-loading-spinner></wui-loading-spinner>`}
    </wui-input-text>`;
  }
  formatPaymentCurrency(currency) {
    return {
      name: currency.id,
      symbol: currency.id
    };
  }
  formatPurchaseCurrency(currency) {
    return {
      name: currency.name,
      symbol: currency.symbol
    };
  }
};
W3mInputCurrency.styles = styles_default44;
__decorate69([
  property({ type: String })
], W3mInputCurrency.prototype, "type", void 0);
__decorate69([
  property({ type: Number })
], W3mInputCurrency.prototype, "value", void 0);
__decorate69([
  state()
], W3mInputCurrency.prototype, "currencies", void 0);
__decorate69([
  state()
], W3mInputCurrency.prototype, "selectedCurrency", void 0);
__decorate69([
  state()
], W3mInputCurrency.prototype, "currencyImages", void 0);
__decorate69([
  state()
], W3mInputCurrency.prototype, "tokenImages", void 0);
W3mInputCurrency = __decorate69([
  customElement("w3m-onramp-input")
], W3mInputCurrency);

// node_modules/@web3modal/scaffold-ui/dist/esm/src/partials/w3m-onramp-provider-item/styles.js
var styles_default45 = css`
  button {
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xs);
    border: none;
    outline: none;
    background-color: var(--wui-color-gray-glass-002);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: var(--wui-spacing-s);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }

  .provider-image {
    width: var(--wui-spacing-3xl);
    min-width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    border-radius: calc(var(--wui-border-radius-xs) - calc(var(--wui-spacing-s) / 2));
    position: relative;
    overflow: hidden;
  }

  .provider-image::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-border-radius-xs) - calc(var(--wui-spacing-s) / 2));
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  .network-icon {
    width: var(--wui-spacing-m);
    height: var(--wui-spacing-m);
    border-radius: calc(var(--wui-spacing-m) / 2);
    overflow: hidden;
    box-shadow:
      0 0 0 3px var(--wui-color-gray-glass-002),
      0 0 0 3px var(--wui-color-modal-bg);
    transition: box-shadow var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: box-shadow;
  }

  button:hover .network-icon {
    box-shadow:
      0 0 0 3px var(--wui-color-gray-glass-005),
      0 0 0 3px var(--wui-color-modal-bg);
  }
`;

// node_modules/@web3modal/scaffold-ui/dist/esm/src/partials/w3m-onramp-provider-item/index.js
var __decorate70 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mOnRampProviderItem = class W3mOnRampProviderItem2 extends LitElement {
  constructor() {
    super(...arguments);
    this.disabled = false;
    this.color = "inherit";
    this.label = "";
    this.feeRange = "";
    this.loading = false;
    this.onClick = null;
  }
  render() {
    return html`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-visual name=${ifDefined(this.name)} class="provider-image"></wui-visual>
        <wui-flex flexDirection="column" gap="4xs">
          <wui-text variant="paragraph-500" color="fg-100">${this.label}</wui-text>
          <wui-flex alignItems="center" justifyContent="flex-start" gap="l">
            <wui-text variant="tiny-500" color="fg-100">
              <wui-text variant="tiny-400" color="fg-200">Fees</wui-text>
              ${this.feeRange}
            </wui-text>
            <wui-flex gap="xxs">
              <wui-icon name="bank" size="xs" color="fg-150"></wui-icon>
              <wui-icon name="card" size="xs" color="fg-150"></wui-icon>
            </wui-flex>
            ${this.networksTemplate()}
          </wui-flex>
        </wui-flex>
        ${this.loading ? html`<wui-loading-spinner color="fg-200" size="md"></wui-loading-spinner>` : html`<wui-icon name="chevronRight" color="fg-200" size="sm"></wui-icon>`}
      </button>
    `;
  }
  networksTemplate() {
    var _a2;
    const requestedCaipNetworks = NetworkController.getRequestedCaipNetworks();
    const slicedNetworks = (_a2 = requestedCaipNetworks == null ? void 0 : requestedCaipNetworks.filter((network) => network == null ? void 0 : network.imageId)) == null ? void 0 : _a2.slice(0, 5);
    return html`
      <wui-flex class="networks">
        ${slicedNetworks == null ? void 0 : slicedNetworks.map((network) => html`
            <wui-flex class="network-icon">
              <wui-image src=${ifDefined(AssetUtil.getNetworkImage(network))}></wui-image>
            </wui-flex>
          `)}
      </wui-flex>
    `;
  }
};
W3mOnRampProviderItem.styles = [styles_default45];
__decorate70([
  property({ type: Boolean })
], W3mOnRampProviderItem.prototype, "disabled", void 0);
__decorate70([
  property()
], W3mOnRampProviderItem.prototype, "color", void 0);
__decorate70([
  property()
], W3mOnRampProviderItem.prototype, "name", void 0);
__decorate70([
  property()
], W3mOnRampProviderItem.prototype, "label", void 0);
__decorate70([
  property()
], W3mOnRampProviderItem.prototype, "feeRange", void 0);
__decorate70([
  property({ type: Boolean })
], W3mOnRampProviderItem.prototype, "loading", void 0);
__decorate70([
  property()
], W3mOnRampProviderItem.prototype, "onClick", void 0);
W3mOnRampProviderItem = __decorate70([
  customElement("w3m-onramp-provider-item")
], W3mOnRampProviderItem);

// node_modules/@web3modal/scaffold-ui/dist/esm/src/partials/w3m-legal-footer/styles.js
var styles_default46 = css`
  wui-flex {
    background-color: var(--wui-color-gray-glass-005);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 500;
  }
`;

// node_modules/@web3modal/scaffold-ui/dist/esm/src/partials/w3m-legal-footer/index.js
var __decorate71 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mLegalFooter = class W3mLegalFooter2 extends LitElement {
  render() {
    const { termsConditionsUrl, privacyPolicyUrl } = OptionsController.state;
    if (!termsConditionsUrl && !privacyPolicyUrl) {
      return null;
    }
    return html`
      <wui-flex .padding=${["m", "s", "s", "s"]} justifyContent="center">
        <wui-text color="fg-250" variant="small-400" align="center">
          By connecting your wallet, you agree to our <br />
          ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-flex>
    `;
  }
  andTemplate() {
    const { termsConditionsUrl, privacyPolicyUrl } = OptionsController.state;
    return termsConditionsUrl && privacyPolicyUrl ? "and" : "";
  }
  termsTemplate() {
    const { termsConditionsUrl } = OptionsController.state;
    if (!termsConditionsUrl) {
      return null;
    }
    return html`<a href=${termsConditionsUrl}>Terms of Service</a>`;
  }
  privacyTemplate() {
    const { privacyPolicyUrl } = OptionsController.state;
    if (!privacyPolicyUrl) {
      return null;
    }
    return html`<a href=${privacyPolicyUrl}>Privacy Policy</a>`;
  }
};
W3mLegalFooter.styles = [styles_default46];
W3mLegalFooter = __decorate71([
  customElement("w3m-legal-footer")
], W3mLegalFooter);

// node_modules/@web3modal/scaffold-ui/dist/esm/src/partials/w3m-mobile-download-links/styles.js
var styles_default47 = css`
  :host {
    display: block;
    padding: 0 var(--wui-spacing-xl) var(--wui-spacing-xl);
  }
`;

// node_modules/@web3modal/scaffold-ui/dist/esm/src/partials/w3m-mobile-download-links/index.js
var __decorate72 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mMobileDownloadLinks = class W3mMobileDownloadLinks2 extends LitElement {
  constructor() {
    super(...arguments);
    this.wallet = void 0;
  }
  render() {
    if (!this.wallet) {
      this.style.display = "none";
      return null;
    }
    const { name, app_store, play_store, chrome_store, homepage } = this.wallet;
    const isMobile = CoreHelperUtil.isMobile();
    const isIos = CoreHelperUtil.isIos();
    const isAndroid = CoreHelperUtil.isAndroid();
    const isMultiple = [app_store, play_store, homepage, chrome_store].filter(Boolean).length > 1;
    const shortName = UiHelperUtil.getTruncateString({
      string: name,
      charsStart: 12,
      charsEnd: 0,
      truncate: "end"
    });
    if (isMultiple && !isMobile) {
      return html`
        <wui-cta-button
          label=${`Don't have ${shortName}?`}
          buttonLabel="Get"
          @click=${() => RouterController.push("Downloads", { wallet: this.wallet })}
        ></wui-cta-button>
      `;
    }
    if (!isMultiple && homepage) {
      return html`
        <wui-cta-button
          label=${`Don't have ${shortName}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `;
    }
    if (app_store && isIos) {
      return html`
        <wui-cta-button
          label=${`Don't have ${shortName}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `;
    }
    if (play_store && isAndroid) {
      return html`
        <wui-cta-button
          label=${`Don't have ${shortName}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `;
    }
    this.style.display = "none";
    return null;
  }
  onAppStore() {
    var _a2;
    if ((_a2 = this.wallet) == null ? void 0 : _a2.app_store) {
      CoreHelperUtil.openHref(this.wallet.app_store, "_blank");
    }
  }
  onPlayStore() {
    var _a2;
    if ((_a2 = this.wallet) == null ? void 0 : _a2.play_store) {
      CoreHelperUtil.openHref(this.wallet.play_store, "_blank");
    }
  }
  onHomePage() {
    var _a2;
    if ((_a2 = this.wallet) == null ? void 0 : _a2.homepage) {
      CoreHelperUtil.openHref(this.wallet.homepage, "_blank");
    }
  }
};
W3mMobileDownloadLinks.styles = [styles_default47];
__decorate72([
  property({ type: Object })
], W3mMobileDownloadLinks.prototype, "wallet", void 0);
W3mMobileDownloadLinks = __decorate72([
  customElement("w3m-mobile-download-links")
], W3mMobileDownloadLinks);

// node_modules/@web3modal/scaffold-ui/dist/esm/src/partials/w3m-onramp-providers-footer/styles.js
var styles_default48 = css`
  wui-flex {
    border-top: 1px solid var(--wui-color-gray-glass-005);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-3xs);
  }
`;

// node_modules/@web3modal/scaffold-ui/dist/esm/src/partials/w3m-onramp-providers-footer/index.js
var __decorate73 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mOnRampProvidersFooter = class W3mOnRampProvidersFooter2 extends LitElement {
  render() {
    const { termsConditionsUrl, privacyPolicyUrl } = OptionsController.state;
    if (!termsConditionsUrl && !privacyPolicyUrl) {
      return null;
    }
    return html`
      <wui-flex
        .padding=${["m", "s", "s", "s"]}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="s"
      >
        <wui-text color="fg-250" variant="small-400" align="center">
          We work with the best providers to give you the lowest fees and best support. More options
          coming soon!
        </wui-text>

        ${this.howDoesItWorkTemplate()}
      </wui-flex>
    `;
  }
  howDoesItWorkTemplate() {
    return html` <wui-link @click=${this.onWhatIsBuy.bind(this)}>
      <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
      How does it work?
    </wui-link>`;
  }
  onWhatIsBuy() {
    EventsController.sendEvent({
      type: "track",
      event: "SELECT_WHAT_IS_A_BUY",
      properties: {
        isSmartAccount: AccountController.state.preferredAccountType === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT
      }
    });
    RouterController.push("WhatIsABuy");
  }
};
W3mOnRampProvidersFooter.styles = [styles_default48];
W3mOnRampProvidersFooter = __decorate73([
  customElement("w3m-onramp-providers-footer")
], W3mOnRampProvidersFooter);

// node_modules/@web3modal/scaffold-ui/dist/esm/src/partials/w3m-snackbar/styles.js
var styles_default49 = css`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
    width: max-content;
  }
`;

// node_modules/@web3modal/scaffold-ui/dist/esm/src/partials/w3m-snackbar/index.js
var __decorate74 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var presets = {
  loading: void 0,
  success: {
    backgroundColor: "success-100",
    iconColor: "success-100",
    icon: "checkmark"
  },
  error: {
    backgroundColor: "error-100",
    iconColor: "error-100",
    icon: "close"
  }
};
var W3mSnackBar = class W3mSnackBar2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.timeout = void 0;
    this.open = SnackController.state.open;
    this.unsubscribe.push(SnackController.subscribeKey("open", (val) => {
      this.open = val;
      this.onOpen();
    }));
  }
  disconnectedCallback() {
    clearTimeout(this.timeout);
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    const { message, variant } = SnackController.state;
    const preset = presets[variant];
    return html`
      <wui-snackbar
        message=${message}
        backgroundColor=${preset == null ? void 0 : preset.backgroundColor}
        iconColor=${preset == null ? void 0 : preset.iconColor}
        icon=${preset == null ? void 0 : preset.icon}
        .loading=${variant === "loading"}
      ></wui-snackbar>
    `;
  }
  onOpen() {
    clearTimeout(this.timeout);
    if (this.open) {
      this.animate([
        { opacity: 0, transform: "translateX(-50%) scale(0.85)" },
        { opacity: 1, transform: "translateX(-50%) scale(1)" }
      ], {
        duration: 150,
        fill: "forwards",
        easing: "ease"
      });
      this.timeout = setTimeout(() => SnackController.hide(), 2500);
    } else {
      this.animate([
        { opacity: 1, transform: "translateX(-50%) scale(1)" },
        { opacity: 0, transform: "translateX(-50%) scale(0.85)" }
      ], {
        duration: 150,
        fill: "forwards",
        easing: "ease"
      });
    }
  }
};
W3mSnackBar.styles = styles_default49;
__decorate74([
  state()
], W3mSnackBar.prototype, "open", void 0);
W3mSnackBar = __decorate74([
  customElement("w3m-snackbar")
], W3mSnackBar);

// node_modules/@web3modal/scaffold-ui/dist/esm/src/partials/w3m-email-login-widget/styles.js
var styles_default50 = css`
  wui-separator {
    margin: var(--wui-spacing-s) calc(var(--wui-spacing-s) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }

  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }

  wui-icon-link,
  wui-loading-spinner {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  wui-icon-link {
    right: var(--wui-spacing-xs);
  }

  wui-loading-spinner {
    right: var(--wui-spacing-m);
  }
`;

// node_modules/@web3modal/scaffold-ui/dist/esm/src/partials/w3m-email-login-widget/index.js
var __decorate75 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mEmailLoginWidget = class W3mEmailLoginWidget2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.formRef = createRef();
    this.connectors = ConnectorController.state.connectors;
    this.email = "";
    this.loading = false;
    this.error = "";
    this.unsubscribe.push(ConnectorController.subscribeKey("connectors", (val) => this.connectors = val));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  firstUpdated() {
    var _a2;
    (_a2 = this.formRef.value) == null ? void 0 : _a2.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        this.onSubmitEmail(event);
      }
    });
  }
  render() {
    const connector = this.connectors.find((c) => c.type === "AUTH");
    const multipleConnectors = this.connectors.length > 1;
    if (!(connector == null ? void 0 : connector.email)) {
      return null;
    }
    return html`
      <form ${ref(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
        <wui-email-input
          @focus=${this.onFocusEvent.bind(this)}
          .disabled=${this.loading}
          @inputChange=${this.onEmailInputChange.bind(this)}
          .errorMessage=${this.error}
        >
        </wui-email-input>

        ${this.submitButtonTemplate()}${this.loadingTemplate()}
        <input type="submit" hidden />
      </form>

      ${connector.socials || !multipleConnectors ? null : html`<wui-flex .padding=${["xxs", "0", "0", "0"]}>
            <wui-separator text="or"></wui-separator>
          </wui-flex>`}
    `;
  }
  submitButtonTemplate() {
    const showSubmit = !this.loading && this.email.length > 3;
    return showSubmit ? html`
          <wui-icon-link
            size="sm"
            icon="chevronRight"
            iconcolor="accent-100"
            @click=${this.onSubmitEmail.bind(this)}
          >
          </wui-icon-link>
        ` : null;
  }
  loadingTemplate() {
    return this.loading ? html`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>` : null;
  }
  onEmailInputChange(event) {
    this.email = event.detail.trim();
    this.error = "";
  }
  async onSubmitEmail(event) {
    try {
      if (this.loading) {
        return;
      }
      this.loading = true;
      event.preventDefault();
      const authConnector = ConnectorController.getAuthConnector();
      if (!authConnector) {
        throw new Error("w3m-email-login-widget: Auth connector not found");
      }
      const { action } = await authConnector.provider.connectEmail({ email: this.email });
      EventsController.sendEvent({ type: "track", event: "EMAIL_SUBMITTED" });
      if (action === "VERIFY_OTP") {
        EventsController.sendEvent({ type: "track", event: "EMAIL_VERIFICATION_CODE_SENT" });
        RouterController.push("EmailVerifyOtp", { email: this.email });
      } else if (action === "VERIFY_DEVICE") {
        RouterController.push("EmailVerifyDevice", { email: this.email });
      }
    } catch (error) {
      const parsedError = CoreHelperUtil.parseError(error);
      if (parsedError == null ? void 0 : parsedError.includes("Invalid email")) {
        this.error = "Invalid email. Try again.";
      } else {
        SnackController.showError(error);
      }
    } finally {
      this.loading = false;
    }
  }
  onFocusEvent() {
    EventsController.sendEvent({ type: "track", event: "EMAIL_LOGIN_SELECTED" });
  }
};
W3mEmailLoginWidget.styles = styles_default50;
__decorate75([
  state()
], W3mEmailLoginWidget.prototype, "connectors", void 0);
__decorate75([
  state()
], W3mEmailLoginWidget.prototype, "email", void 0);
__decorate75([
  state()
], W3mEmailLoginWidget.prototype, "loading", void 0);
__decorate75([
  state()
], W3mEmailLoginWidget.prototype, "error", void 0);
W3mEmailLoginWidget = __decorate75([
  customElement("w3m-email-login-widget")
], W3mEmailLoginWidget);

// node_modules/@web3modal/scaffold-ui/dist/esm/src/partials/w3m-account-default-widget/styles.js
var styles_default51 = css`
  wui-flex {
    width: 100%;
  }

  :host > wui-flex:first-child {
    transform: translateY(calc(var(--wui-spacing-xxs) * -1));
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }

  wui-notice-card {
    margin-bottom: var(--wui-spacing-3xs);
  }

  w3m-transactions-view {
    max-height: 200px;
  }

  .tab-content-container {
    height: 300px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  .tab-content-container::-webkit-scrollbar {
    display: none;
  }

  .account-button {
    width: auto;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-s);
    height: 48px;
    padding: var(--wui-spacing-xs);
    padding-right: var(--wui-spacing-s);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: 24px;
    transaction: background-color 0.2s linear;
  }

  .account-button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }

  .avatar-container {
    position: relative;
  }

  wui-avatar.avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  wui-avatar.network-avatar {
    width: 16px;
    height: 16px;
    position: absolute;
    left: 100%;
    top: 100%;
    transform: translate(-75%, -75%);
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  .account-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .account-links wui-flex {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background: red;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding: 10px;
    flex: 1 0 0;
    border-radius: var(--XS, 16px);
    border: 1px solid var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    background: var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  .account-links wui-flex:hover {
    background: var(--dark-accent-glass-015, rgba(71, 161, 255, 0.15));
  }

  .account-links wui-flex wui-icon {
    width: var(--S, 20px);
    height: var(--S, 20px);
  }

  .account-links wui-flex wui-icon svg path {
    stroke: #667dff;
  }
`;

// node_modules/@web3modal/scaffold-ui/dist/esm/src/partials/w3m-account-default-widget/index.js
var __decorate76 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mAccountDefaultWidget = class W3mAccountDefaultWidget2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.address = AccountController.state.address;
    this.profileImage = AccountController.state.profileImage;
    this.profileName = AccountController.state.profileName;
    this.network = NetworkController.state.caipNetwork;
    this.disconnecting = false;
    this.balance = AccountController.state.balance;
    this.balanceSymbol = AccountController.state.balanceSymbol;
    this.unsubscribe.push(...[
      AccountController.subscribe((val) => {
        if (val.address) {
          this.address = val.address;
          this.profileImage = val.profileImage;
          this.profileName = val.profileName;
          this.balance = val.balance;
          this.balanceSymbol = val.balanceSymbol;
        } else if (!this.disconnecting) {
          SnackController.showError("Account not found");
        }
      }),
      NetworkController.subscribeKey("caipNetwork", (val) => {
        if (val == null ? void 0 : val.id) {
          this.network = val;
        }
      })
    ]);
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    var _a2, _b2;
    if (!this.address) {
      throw new Error("w3m-account-view: No account provided");
    }
    const networkImage = AssetUtil.getNetworkImage(this.network);
    const account = (_a2 = AccountController.state.allAccounts) == null ? void 0 : _a2.find((acc) => acc.address === this.address);
    const label = AccountController.state.addressLabels.get(this.address);
    return html`<wui-flex
        flexDirection="column"
        .padding=${["0", "xl", "m", "xl"]}
        alignItems="center"
        gap="l"
      >
        <wui-profile-button-v2
          .onProfileClick=${this.handleSwitchAccountsView.bind(this)}
          address=${ifDefined(this.address)}
          icon="${(account == null ? void 0 : account.type) === "smartAccount" ? "lightbulb" : "mail"}"
          avatarSrc=${ifDefined(this.profileImage ? this.profileImage : void 0)}
          profileName=${ifDefined(label ? label : this.profileName)}
          .onCopyClick=${this.onCopyAddress.bind(this)}
        ></wui-profile-button-v2>
        <wui-flex flexDirection="column" alignItems="center">
          <wui-text variant="paragraph-500" color="fg-200"
            >${CoreHelperUtil.formatBalance(this.balance, this.balanceSymbol)}</wui-text
          >
        </wui-flex>
        ${this.explorerBtnTemplate()}
      </wui-flex>

      <wui-flex flexDirection="column" gap="xs" .padding=${["0", "s", "s", "s"]}>
        ${this.authCardTemplate()} <w3m-account-auth-button></w3m-account-auth-button>

        <wui-list-item
          .variant=${networkImage ? "image" : "icon"}
          iconVariant="overlay"
          icon="networkPlaceholder"
          imageSrc=${ifDefined(networkImage)}
          ?chevron=${this.isAllowedNetworkSwitch()}
          @click=${this.onNetworks.bind(this)}
          data-testid="w3m-account-select-network"
        >
          <wui-text variant="paragraph-500" color="fg-100">
            ${((_b2 = this.network) == null ? void 0 : _b2.name) ?? "Unknown"}
          </wui-text>
        </wui-list-item>
        ${this.onrampTemplate()}
        <wui-list-item
          iconVariant="blue"
          icon="swapHorizontalMedium"
          iconSize="sm"
          ?chevron=${true}
          @click=${this.onTransactions.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-100">Activity</wui-text>
        </wui-list-item>
        <wui-list-item
          variant="icon"
          iconVariant="overlay"
          icon="disconnect"
          ?chevron=${false}
          .loading=${this.disconnecting}
          @click=${this.onDisconnect.bind(this)}
          data-testid="disconnect-button"
        >
          <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>`;
  }
  onrampTemplate() {
    const { enableOnramp } = OptionsController.state;
    if (!enableOnramp) {
      return null;
    }
    return html`
      <wui-list-item
        iconVariant="blue"
        icon="card"
        ?chevron=${true}
        @click=${this.handleClickPay.bind(this)}
      >
        <wui-text variant="paragraph-500" color="fg-100">Buy crypto</wui-text>
      </wui-list-item>
    `;
  }
  authCardTemplate() {
    const type = StorageUtil.getConnectedConnector();
    const authConnector = ConnectorController.getAuthConnector();
    const { origin } = location;
    if (!authConnector || type !== "AUTH" || origin.includes(ConstantsUtil2.SECURE_SITE)) {
      return null;
    }
    return html`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `;
  }
  handleSwitchAccountsView() {
    RouterController.push("SwitchAddress");
  }
  handleClickPay() {
    RouterController.push("OnRampProviders");
  }
  explorerBtnTemplate() {
    const addressExplorerUrl = AccountController.state.addressExplorerUrl;
    if (!addressExplorerUrl) {
      return null;
    }
    return html`
      <wui-button size="md" variant="neutral" @click=${this.onExplorer.bind(this)}>
        <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
        Block Explorer
        <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
      </wui-button>
    `;
  }
  isAllowedNetworkSwitch() {
    const requestedCaipNetworks = NetworkController.getRequestedCaipNetworks();
    const isMultiNetwork = requestedCaipNetworks ? requestedCaipNetworks.length > 1 : false;
    const isValidNetwork = requestedCaipNetworks == null ? void 0 : requestedCaipNetworks.find(({ id }) => {
      var _a2;
      return id === ((_a2 = this.network) == null ? void 0 : _a2.id);
    });
    return isMultiNetwork || !isValidNetwork;
  }
  onCopyAddress() {
    try {
      if (this.address) {
        CoreHelperUtil.copyToClopboard(this.address);
        SnackController.showSuccess("Address copied");
      }
    } catch {
      SnackController.showError("Failed to copy");
    }
  }
  onNetworks() {
    if (this.isAllowedNetworkSwitch()) {
      EventsController.sendEvent({ type: "track", event: "CLICK_NETWORKS" });
      RouterController.push("Networks");
    }
  }
  onTransactions() {
    EventsController.sendEvent({
      type: "track",
      event: "CLICK_TRANSACTIONS",
      properties: {
        isSmartAccount: AccountController.state.preferredAccountType === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT
      }
    });
    RouterController.push("Transactions");
  }
  async onDisconnect() {
    try {
      this.disconnecting = true;
      await ConnectionController.disconnect();
      EventsController.sendEvent({ type: "track", event: "DISCONNECT_SUCCESS" });
      ModalController.close();
    } catch {
      EventsController.sendEvent({ type: "track", event: "DISCONNECT_ERROR" });
      SnackController.showError("Failed to disconnect");
    } finally {
      this.disconnecting = false;
    }
  }
  onExplorer() {
    const addressExplorerUrl = AccountController.state.addressExplorerUrl;
    if (addressExplorerUrl) {
      CoreHelperUtil.openHref(addressExplorerUrl, "_blank");
    }
  }
  onGoToUpgradeView() {
    EventsController.sendEvent({ type: "track", event: "EMAIL_UPGRADE_FROM_MODAL" });
    RouterController.push("UpgradeEmailWallet");
  }
};
W3mAccountDefaultWidget.styles = styles_default51;
__decorate76([
  state()
], W3mAccountDefaultWidget.prototype, "address", void 0);
__decorate76([
  state()
], W3mAccountDefaultWidget.prototype, "profileImage", void 0);
__decorate76([
  state()
], W3mAccountDefaultWidget.prototype, "profileName", void 0);
__decorate76([
  state()
], W3mAccountDefaultWidget.prototype, "network", void 0);
__decorate76([
  state()
], W3mAccountDefaultWidget.prototype, "disconnecting", void 0);
__decorate76([
  state()
], W3mAccountDefaultWidget.prototype, "balance", void 0);
__decorate76([
  state()
], W3mAccountDefaultWidget.prototype, "balanceSymbol", void 0);
W3mAccountDefaultWidget = __decorate76([
  customElement("w3m-account-default-widget")
], W3mAccountDefaultWidget);

// node_modules/@web3modal/scaffold-ui/dist/esm/src/partials/w3m-account-wallet-features-widget/styles.js
var styles_default52 = css`
  wui-flex {
    width: 100%;
  }

  wui-promo {
    position: absolute;
    top: -32px;
  }

  wui-profile-button {
    margin-top: calc(-1 * var(--wui-spacing-2l));
  }

  wui-promo + wui-profile-button {
    margin-top: var(--wui-spacing-2l);
  }

  wui-tabs {
    width: 100%;
  }

  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }

  .contentContainer > .textContent {
    width: 65%;
  }
`;

// node_modules/@web3modal/scaffold-ui/dist/esm/src/partials/w3m-account-wallet-features-widget/index.js
var __decorate77 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var TABS = 3;
var TABS_PADDING = 48;
var MODAL_MOBILE_VIEW_PX = 430;
var W3mAccountWalletFeaturesWidget = class W3mAccountWalletFeaturesWidget2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.address = AccountController.state.address;
    this.profileImage = AccountController.state.profileImage;
    this.profileName = AccountController.state.profileName;
    this.smartAccountDeployed = AccountController.state.smartAccountDeployed;
    this.network = NetworkController.state.caipNetwork;
    this.currentTab = AccountController.state.currentTab;
    this.tokenBalance = AccountController.state.tokenBalance;
    this.preferredAccountType = AccountController.state.preferredAccountType;
    this.unsubscribe.push(...[
      AccountController.subscribe((val) => {
        if (val.address) {
          this.address = val.address;
          this.profileImage = val.profileImage;
          this.profileName = val.profileName;
          this.currentTab = val.currentTab;
          this.tokenBalance = val.tokenBalance;
          this.smartAccountDeployed = val.smartAccountDeployed;
          this.preferredAccountType = val.preferredAccountType;
        } else {
          ModalController.close();
        }
      })
    ], NetworkController.subscribeKey("caipNetwork", (val) => {
      this.network = val;
    }));
    this.watchSwapValues();
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
    clearInterval(this.watchTokenBalance);
  }
  firstUpdated() {
    AccountController.fetchTokenBalance();
  }
  render() {
    if (!this.address) {
      throw new Error("w3m-account-view: No account provided");
    }
    const networkImage = AssetUtil.getNetworkImage(this.network);
    return html`<wui-flex
      flexDirection="column"
      .padding=${["0", "xl", "m", "xl"]}
      alignItems="center"
      gap="m"
    >
      ${this.network && html`<wui-network-icon .network=${this.network}></wui-network-icon>`}
      ${this.activateAccountTemplate()}
      <wui-profile-button
        @click=${this.onProfileButtonClick.bind(this)}
        address=${ifDefined(this.address)}
        networkSrc=${ifDefined(networkImage)}
        icon="chevronBottom"
        avatarSrc=${ifDefined(this.profileImage ? this.profileImage : void 0)}
        profileName=${this.profileName}
        data-testid="w3m-profile-button"
      ></wui-profile-button>
      ${this.tokenBalanceTemplate()}
      <wui-flex gap="s">
        <w3m-tooltip-trigger text="Buy">
          <wui-icon-button @click=${this.onBuyClick.bind(this)} icon="card"></wui-icon-button>
        </w3m-tooltip-trigger>
        <w3m-tooltip-trigger text="Swap">
          <wui-icon-button @click=${this.onSwapClick.bind(this)} icon="recycleHorizontal">
          </wui-icon-button>
        </w3m-tooltip-trigger>
        <w3m-tooltip-trigger text="Receive">
          <wui-icon-button @click=${this.onReceiveClick.bind(this)} icon="arrowBottomCircle">
          </wui-icon-button>
        </w3m-tooltip-trigger>
        <w3m-tooltip-trigger text="Send">
          <wui-icon-button @click=${this.onSendClick.bind(this)} icon="send"></wui-icon-button>
        </w3m-tooltip-trigger>
      </wui-flex>

      <wui-tabs
        .onTabChange=${this.onTabChange.bind(this)}
        .activeTab=${this.currentTab}
        localTabWidth=${CoreHelperUtil.isMobile() && window.innerWidth < MODAL_MOBILE_VIEW_PX ? `${(window.innerWidth - TABS_PADDING) / TABS}px` : "104px"}
        .tabs=${ConstantsUtil4.ACCOUNT_TABS}
      ></wui-tabs>
      ${this.listContentTemplate()}
    </wui-flex>`;
  }
  watchSwapValues() {
    this.watchTokenBalance = setInterval(() => AccountController.fetchTokenBalance(), 1e4);
  }
  listContentTemplate() {
    if (this.currentTab === 0) {
      return html`<w3m-account-tokens-widget></w3m-account-tokens-widget>`;
    }
    if (this.currentTab === 1) {
      return html`<w3m-account-nfts-widget></w3m-account-nfts-widget>`;
    }
    if (this.currentTab === 2) {
      return html`<w3m-account-activity-widget></w3m-account-activity-widget>`;
    }
    return html`<w3m-account-tokens-widget></w3m-account-tokens-widget>`;
  }
  tokenBalanceTemplate() {
    var _a2;
    if (this.tokenBalance && ((_a2 = this.tokenBalance) == null ? void 0 : _a2.length) >= 0) {
      const value = CoreHelperUtil.calculateBalance(this.tokenBalance);
      const { dollars = "0", pennies = "00" } = CoreHelperUtil.formatTokenBalance(value);
      return html`<wui-balance dollars=${dollars} pennies=${pennies}></wui-balance>`;
    }
    return html`<wui-balance dollars="0" pennies="00"></wui-balance>`;
  }
  activateAccountTemplate() {
    const smartAccountEnabled = NetworkController.checkIfSmartAccountEnabled();
    if (!smartAccountEnabled || this.preferredAccountType !== W3mFrameRpcConstants.ACCOUNT_TYPES.EOA || this.smartAccountDeployed) {
      return null;
    }
    return html` <wui-promo
      text=${"Activate your account"}
      @click=${this.onUpdateToSmartAccount.bind(this)}
      data-testid="activate-smart-account-promo"
    ></wui-promo>`;
  }
  onTabChange(index) {
    AccountController.setCurrentTab(index);
  }
  onProfileButtonClick() {
    RouterController.push("Profile");
  }
  onBuyClick() {
    RouterController.push("OnRampProviders");
  }
  onSwapClick() {
    var _a2, _b2, _c;
    if (((_a2 = this.network) == null ? void 0 : _a2.id) && !ConstantsUtil2.SWAP_SUPPORTED_NETWORKS.includes((_b2 = this.network) == null ? void 0 : _b2.id)) {
      RouterController.push("UnsupportedChain", {
        swapUnsupportedChain: true
      });
    } else {
      EventsController.sendEvent({
        type: "track",
        event: "OPEN_SWAP",
        properties: {
          network: ((_c = this.network) == null ? void 0 : _c.id) || "",
          isSmartAccount: AccountController.state.preferredAccountType === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT
        }
      });
      RouterController.push("Swap");
    }
  }
  onReceiveClick() {
    RouterController.push("WalletReceive");
  }
  onSendClick() {
    var _a2;
    EventsController.sendEvent({
      type: "track",
      event: "OPEN_SEND",
      properties: {
        network: ((_a2 = this.network) == null ? void 0 : _a2.id) || "",
        isSmartAccount: AccountController.state.preferredAccountType === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT
      }
    });
    RouterController.push("WalletSend");
  }
  onUpdateToSmartAccount() {
    RouterController.push("UpgradeToSmartAccount");
  }
};
W3mAccountWalletFeaturesWidget.styles = styles_default52;
__decorate77([
  state()
], W3mAccountWalletFeaturesWidget.prototype, "watchTokenBalance", void 0);
__decorate77([
  state()
], W3mAccountWalletFeaturesWidget.prototype, "address", void 0);
__decorate77([
  state()
], W3mAccountWalletFeaturesWidget.prototype, "profileImage", void 0);
__decorate77([
  state()
], W3mAccountWalletFeaturesWidget.prototype, "profileName", void 0);
__decorate77([
  state()
], W3mAccountWalletFeaturesWidget.prototype, "smartAccountDeployed", void 0);
__decorate77([
  state()
], W3mAccountWalletFeaturesWidget.prototype, "network", void 0);
__decorate77([
  state()
], W3mAccountWalletFeaturesWidget.prototype, "currentTab", void 0);
__decorate77([
  state()
], W3mAccountWalletFeaturesWidget.prototype, "tokenBalance", void 0);
__decorate77([
  state()
], W3mAccountWalletFeaturesWidget.prototype, "preferredAccountType", void 0);
W3mAccountWalletFeaturesWidget = __decorate77([
  customElement("w3m-account-wallet-features-widget")
], W3mAccountWalletFeaturesWidget);

// node_modules/@web3modal/scaffold-ui/dist/esm/src/partials/w3m-account-activity-widget/styles.js
var styles_default53 = css`
  :host {
    width: 100%;
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }

  :host::-webkit-scrollbar {
    display: none;
  }
`;

// node_modules/@web3modal/scaffold-ui/dist/esm/src/partials/w3m-account-activity-widget/index.js
var __decorate78 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mAccountActivityWidget = class W3mAccountActivityWidget2 extends LitElement {
  render() {
    return html`<w3m-activity-list page="account"></w3m-activity-list>`;
  }
};
W3mAccountActivityWidget.styles = styles_default53;
W3mAccountActivityWidget = __decorate78([
  customElement("w3m-account-activity-widget")
], W3mAccountActivityWidget);

// node_modules/@web3modal/scaffold-ui/dist/esm/src/partials/w3m-account-nfts-widget/styles.js
var styles_default54 = css`
  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }

  .contentContainer > .textContent {
    width: 65%;
  }
`;

// node_modules/@web3modal/scaffold-ui/dist/esm/src/partials/w3m-account-nfts-widget/index.js
var __decorate79 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mAccountNftsWidget = class W3mAccountNftsWidget2 extends LitElement {
  render() {
    return html`${this.nftTemplate()}`;
  }
  nftTemplate() {
    return html` <wui-flex
      class="contentContainer"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="l"
    >
      <wui-icon-box
        icon="wallet"
        size="inherit"
        iconColor="fg-200"
        backgroundColor="fg-200"
        iconSize="lg"
      ></wui-icon-box>
      <wui-flex
        class="textContent"
        gap="xs"
        flexDirection="column"
        justifyContent="center"
        flexDirection="column"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100">Coming soon</wui-text>
        <wui-text variant="small-400" align="center" color="fg-200"
          >Stay tuned for our upcoming NFT feature</wui-text
        >
      </wui-flex>
      <wui-link @click=${this.onReceiveClick.bind(this)}>Receive funds</wui-link>
    </wui-flex>`;
  }
  onReceiveClick() {
    RouterController.push("WalletReceive");
  }
};
W3mAccountNftsWidget.styles = styles_default54;
W3mAccountNftsWidget = __decorate79([
  customElement("w3m-account-nfts-widget")
], W3mAccountNftsWidget);

// node_modules/@web3modal/scaffold-ui/dist/esm/src/partials/w3m-account-tokens-widget/styles.js
var styles_default55 = css`
  :host {
    width: 100%;
  }

  wui-flex {
    width: 100%;
  }

  .contentContainer {
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }

  .contentContainer::-webkit-scrollbar {
    display: none;
  }
`;

// node_modules/@web3modal/scaffold-ui/dist/esm/src/partials/w3m-account-tokens-widget/index.js
var __decorate80 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mAccountTokensWidget = class W3mAccountTokensWidget2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.tokenBalance = AccountController.state.tokenBalance;
    this.unsubscribe.push(...[
      AccountController.subscribe((val) => {
        this.tokenBalance = val.tokenBalance;
      })
    ]);
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    return html`${this.tokenTemplate()}`;
  }
  tokenTemplate() {
    var _a2;
    if (this.tokenBalance && ((_a2 = this.tokenBalance) == null ? void 0 : _a2.length) > 0) {
      return html`<wui-flex class="contentContainer" flexDirection="column" gap="xs">
        ${this.tokenItemTemplate()}
      </wui-flex>`;
    }
    return html` <wui-flex flexDirection="column" gap="xs"
      ><wui-list-description
        @click=${this.onBuyClick.bind(this)}
        text="Buy Crypto"
        description="Easy with card or bank account"
        icon="card"
        iconColor="success-100"
        iconBackgroundColor="success-100"
        tag="popular"
      ></wui-list-description
      ><wui-list-description
        @click=${this.onReceiveClick.bind(this)}
        text="Receive funds"
        description="Transfer tokens on your wallet"
        icon="arrowBottomCircle"
        iconColor="fg-200"
        iconBackgroundColor="fg-200"
      ></wui-list-description
    ></wui-flex>`;
  }
  tokenItemTemplate() {
    var _a2;
    return (_a2 = this.tokenBalance) == null ? void 0 : _a2.map((token) => html`<wui-list-token
          tokenName=${token.name}
          tokenImageUrl=${token.iconUrl}
          tokenAmount=${token.quantity.numeric}
          tokenValue=${token.value}
          tokenCurrency=${token.symbol}
        ></wui-list-token>`);
  }
  onReceiveClick() {
    RouterController.push("WalletReceive");
  }
  onBuyClick() {
    EventsController.sendEvent({
      type: "track",
      event: "SELECT_BUY_CRYPTO",
      properties: {
        isSmartAccount: AccountController.state.preferredAccountType === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT
      }
    });
    RouterController.push("OnRampProviders");
  }
};
W3mAccountTokensWidget.styles = styles_default55;
__decorate80([
  state()
], W3mAccountTokensWidget.prototype, "tokenBalance", void 0);
W3mAccountTokensWidget = __decorate80([
  customElement("w3m-account-tokens-widget")
], W3mAccountTokensWidget);

// node_modules/@web3modal/scaffold-ui/dist/esm/src/partials/w3m-activity-list/styles.js
var styles_default56 = css`
  :host {
    min-height: 100%;
  }

  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }

  .contentContainer > .textContent {
    width: 65%;
  }

  .emptyContainer {
    height: 100%;
  }
`;

// node_modules/@web3modal/scaffold-ui/dist/esm/src/partials/w3m-activity-list/index.js
var __decorate81 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var PAGINATOR_ID2 = "last-transaction";
var LOADING_ITEM_COUNT2 = 7;
var W3mActivityList = class W3mActivityList2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.paginationObserver = void 0;
    this.page = "activity";
    this.address = AccountController.state.address;
    this.transactionsByYear = TransactionsController.state.transactionsByYear;
    this.loading = TransactionsController.state.loading;
    this.empty = TransactionsController.state.empty;
    this.next = TransactionsController.state.next;
    TransactionsController.clearCursor();
    this.unsubscribe.push(...[
      AccountController.subscribe((val) => {
        if (val.isConnected) {
          if (this.address !== val.address) {
            this.address = val.address;
            TransactionsController.resetTransactions();
            TransactionsController.fetchTransactions(val.address);
          }
        }
      }),
      TransactionsController.subscribe((val) => {
        this.transactionsByYear = val.transactionsByYear;
        this.loading = val.loading;
        this.empty = val.empty;
        this.next = val.next;
      })
    ]);
  }
  firstUpdated() {
    TransactionsController.fetchTransactions(this.address);
    this.createPaginationObserver();
  }
  updated() {
    this.setPaginationObserver();
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    return html` ${this.empty ? null : this.templateTransactionsByYear()}
    ${this.loading ? this.templateLoading() : null}
    ${!this.loading && this.empty ? this.templateEmpty() : null}`;
  }
  templateTransactionsByYear() {
    const sortedYearKeys = Object.keys(this.transactionsByYear).sort().reverse();
    return sortedYearKeys.map((year, index) => {
      const isLastGroup = index === sortedYearKeys.length - 1;
      const yearInt = parseInt(year, 10);
      const sortedMonthIndexes = new Array(12).fill(null).map((_, idx) => idx).reverse();
      return sortedMonthIndexes.map((month) => {
        var _a2;
        const groupTitle = TransactionUtil.getTransactionGroupTitle(yearInt, month);
        const transactions = (_a2 = this.transactionsByYear[yearInt]) == null ? void 0 : _a2[month];
        if (!transactions) {
          return null;
        }
        return html`
          <wui-flex flexDirection="column">
            <wui-flex
              alignItems="center"
              flexDirection="row"
              .padding=${["xs", "s", "s", "s"]}
            >
              <wui-text variant="paragraph-500" color="fg-200">${groupTitle}</wui-text>
            </wui-flex>
            <wui-flex flexDirection="column" gap="xs">
              ${this.templateTransactions(transactions, isLastGroup)}
            </wui-flex>
          </wui-flex>
        `;
      });
    });
  }
  templateRenderTransaction(transaction, isLastTransaction) {
    const { date, descriptions, direction, isAllNFT, images, status, transfers, type } = this.getTransactionListItemProps(transaction);
    const haveMultipleTransfers = (transfers == null ? void 0 : transfers.length) > 1;
    const haveTwoTransfers = (transfers == null ? void 0 : transfers.length) === 2;
    if (haveTwoTransfers && !isAllNFT) {
      return html`
        <wui-transaction-list-item
          date=${date}
          .direction=${direction}
          id=${isLastTransaction && this.next ? PAGINATOR_ID2 : ""}
          status=${status}
          type=${type}
          .images=${images}
          .descriptions=${descriptions}
        ></wui-transaction-list-item>
      `;
    }
    if (haveMultipleTransfers) {
      return transfers.map((transfer, index) => {
        const description = TransactionUtil.getTransferDescription(transfer);
        const isLastTransfer = isLastTransaction && index === transfers.length - 1;
        return html` <wui-transaction-list-item
          date=${date}
          direction=${transfer.direction}
          id=${isLastTransfer && this.next ? PAGINATOR_ID2 : ""}
          status=${status}
          type=${type}
          .onlyDirectionIcon=${true}
          .images=${[images[index]]}
          .descriptions=${[description]}
        ></wui-transaction-list-item>`;
      });
    }
    return html`
      <wui-transaction-list-item
        date=${date}
        .direction=${direction}
        id=${isLastTransaction && this.next ? PAGINATOR_ID2 : ""}
        status=${status}
        type=${type}
        .images=${images}
        .descriptions=${descriptions}
      ></wui-transaction-list-item>
    `;
  }
  templateTransactions(transactions, isLastGroup) {
    return transactions.map((transaction, index) => {
      const isLastTransaction = isLastGroup && index === transactions.length - 1;
      return html`${this.templateRenderTransaction(transaction, isLastTransaction)}`;
    });
  }
  emptyStateActivity() {
    return html`<wui-flex
      class="emptyContainer"
      flexGrow="1"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      .padding=${["3xl", "xl", "3xl", "xl"]}
      gap="xl"
    >
      <wui-icon-box
        backgroundColor="gray-glass-005"
        background="gray"
        iconColor="fg-200"
        icon="wallet"
        size="lg"
        ?border=${true}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
      <wui-flex flexDirection="column" alignItems="center" gap="xs">
        <wui-text align="center" variant="paragraph-500" color="fg-100"
          >No Transactions yet</wui-text
        >
        <wui-text align="center" variant="small-500" color="fg-200"
          >Start trading on dApps <br />
          to grow your wallet!</wui-text
        >
      </wui-flex>
    </wui-flex>`;
  }
  emptyStateAccount() {
    return html`<wui-flex
      class="contentContainer"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="l"
    >
      <wui-icon-box
        icon="swapHorizontal"
        size="inherit"
        iconColor="fg-200"
        backgroundColor="fg-200"
        iconSize="lg"
      ></wui-icon-box>
      <wui-flex
        class="textContent"
        gap="xs"
        flexDirection="column"
        justifyContent="center"
        flexDirection="column"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100">No activity yet</wui-text>
        <wui-text variant="small-400" align="center" color="fg-200"
          >Your next transactions will appear here</wui-text
        >
      </wui-flex>
      <wui-link @click=${this.onReceiveClick.bind(this)}>Trade</wui-link>
    </wui-flex>`;
  }
  templateEmpty() {
    if (this.page === "account") {
      return html`${this.emptyStateAccount()}`;
    }
    return html`${this.emptyStateActivity()}`;
  }
  templateLoading() {
    if (this.page === "activity") {
      return Array(LOADING_ITEM_COUNT2).fill(html` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map((item) => item);
    }
    return null;
  }
  onReceiveClick() {
    RouterController.push("WalletReceive");
  }
  createPaginationObserver() {
    const { projectId } = OptionsController.state;
    this.paginationObserver = new IntersectionObserver(([element]) => {
      if ((element == null ? void 0 : element.isIntersecting) && !this.loading) {
        TransactionsController.fetchTransactions(this.address);
        EventsController.sendEvent({
          type: "track",
          event: "LOAD_MORE_TRANSACTIONS",
          properties: {
            address: this.address,
            projectId,
            cursor: this.next,
            isSmartAccount: AccountController.state.preferredAccountType === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT
          }
        });
      }
    }, {});
    this.setPaginationObserver();
  }
  setPaginationObserver() {
    var _a2, _b2, _c;
    (_a2 = this.paginationObserver) == null ? void 0 : _a2.disconnect();
    const lastItem = (_b2 = this.shadowRoot) == null ? void 0 : _b2.querySelector(`#${PAGINATOR_ID2}`);
    if (lastItem) {
      (_c = this.paginationObserver) == null ? void 0 : _c.observe(lastItem);
    }
  }
  getTransactionListItemProps(transaction) {
    var _a2, _b2, _c, _d, _e;
    const date = DateUtil.formatDate((_a2 = transaction == null ? void 0 : transaction.metadata) == null ? void 0 : _a2.minedAt);
    const descriptions = TransactionUtil.getTransactionDescriptions(transaction);
    const transfers = transaction == null ? void 0 : transaction.transfers;
    const transfer = (_b2 = transaction == null ? void 0 : transaction.transfers) == null ? void 0 : _b2[0];
    const isAllNFT = Boolean(transfer) && ((_c = transaction == null ? void 0 : transaction.transfers) == null ? void 0 : _c.every((item) => Boolean(item.nft_info)));
    const images = TransactionUtil.getTransactionImages(transfers);
    return {
      date,
      direction: transfer == null ? void 0 : transfer.direction,
      descriptions,
      isAllNFT,
      images,
      status: (_d = transaction.metadata) == null ? void 0 : _d.status,
      transfers,
      type: (_e = transaction.metadata) == null ? void 0 : _e.operationType
    };
  }
};
W3mActivityList.styles = styles_default56;
__decorate81([
  property()
], W3mActivityList.prototype, "page", void 0);
__decorate81([
  state()
], W3mActivityList.prototype, "address", void 0);
__decorate81([
  state()
], W3mActivityList.prototype, "transactionsByYear", void 0);
__decorate81([
  state()
], W3mActivityList.prototype, "loading", void 0);
__decorate81([
  state()
], W3mActivityList.prototype, "empty", void 0);
__decorate81([
  state()
], W3mActivityList.prototype, "next", void 0);
W3mActivityList = __decorate81([
  customElement("w3m-activity-list")
], W3mActivityList);

// node_modules/@web3modal/scaffold-ui/dist/esm/src/partials/w3m-input-token/styles.js
var styles_default57 = css`
  :host {
    width: 100%;
    height: 100px;
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-color-gray-glass-002);
    background-color: var(--wui-color-gray-glass-002);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
  }

  :host(:hover) {
    background-color: var(--wui-color-gray-glass-005);
  }

  wui-flex {
    width: 100%;
    height: fit-content;
  }

  wui-button {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  wui-input-amount {
    mask-image: linear-gradient(
      270deg,
      transparent 0px,
      transparent 8px,
      black 24px,
      black 25px,
      black 32px,
      black 100%
    );
  }

  .totalValue {
    width: 100%;
  }
`;

// node_modules/@web3modal/scaffold-ui/dist/esm/src/partials/w3m-input-token/index.js
var __decorate82 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mInputToken = class W3mInputToken2 extends LitElement {
  render() {
    return html` <wui-flex
      flexDirection="column"
      gap="4xs"
      .padding=${["xl", "s", "l", "l"]}
    >
      <wui-flex alignItems="center">
        <wui-input-amount
          @inputChange=${this.onInputChange.bind(this)}
          ?disabled=${!this.token && true}
          .value=${this.sendTokenAmount ? String(this.sendTokenAmount) : ""}
        ></wui-input-amount>
        ${this.buttonTemplate()}
      </wui-flex>
      <wui-flex alignItems="center" justifyContent="space-between">
        ${this.sendValueTemplate()}
        <wui-flex alignItems="center" gap="4xs" justifyContent="flex-end">
          ${this.maxAmountTemplate()} ${this.actionTemplate()}
        </wui-flex>
      </wui-flex>
    </wui-flex>`;
  }
  buttonTemplate() {
    if (this.token) {
      return html`<wui-token-button
        text=${this.token.symbol}
        imageSrc=${this.token.iconUrl}
        @click=${this.handleSelectButtonClick.bind(this)}
      >
      </wui-token-button>`;
    }
    return html`<wui-button
      size="md"
      variant="accent"
      @click=${this.handleSelectButtonClick.bind(this)}
      >Select token</wui-button
    >`;
  }
  handleSelectButtonClick() {
    RouterController.push("WalletSendSelectToken");
  }
  sendValueTemplate() {
    if (this.token && this.sendTokenAmount) {
      const price = this.token.price;
      const totalValue = price * this.sendTokenAmount;
      return html`<wui-text class="totalValue" variant="small-400" color="fg-200"
        >${totalValue ? `$${UiHelperUtil.formatNumberToLocalString(totalValue, 2)}` : "Incorrect value"}</wui-text
      >`;
    }
    return null;
  }
  maxAmountTemplate() {
    if (this.token) {
      if (this.sendTokenAmount && this.sendTokenAmount > Number(this.token.quantity.numeric)) {
        return html` <wui-text variant="small-400" color="error-100">
          ${UiHelperUtil.roundNumber(Number(this.token.quantity.numeric), 6, 5)}
        </wui-text>`;
      }
      return html` <wui-text variant="small-400" color="fg-200">
        ${UiHelperUtil.roundNumber(Number(this.token.quantity.numeric), 6, 5)}
      </wui-text>`;
    }
    return null;
  }
  actionTemplate() {
    if (this.token) {
      if (this.sendTokenAmount && this.sendTokenAmount > Number(this.token.quantity.numeric)) {
        return html`<wui-link @click=${this.onBuyClick.bind(this)}>Buy</wui-link>`;
      }
      return html`<wui-link @click=${this.onMaxClick.bind(this)}>Max</wui-link>`;
    }
    return null;
  }
  onInputChange(event) {
    SendController.setTokenAmount(event.detail);
  }
  onMaxClick() {
    if (this.token && this.gasPriceInUSD) {
      const amountOfTokenGasRequires = NumberUtil.bigNumber(this.gasPriceInUSD.toFixed(5)).dividedBy(this.token.price);
      const isNetworkToken = this.token.address === void 0;
      const maxValue = isNetworkToken ? NumberUtil.bigNumber(this.token.quantity.numeric).minus(amountOfTokenGasRequires) : NumberUtil.bigNumber(this.token.quantity.numeric);
      SendController.setTokenAmount(Number(maxValue.toFixed(20)));
    }
  }
  onBuyClick() {
    RouterController.push("OnRampProviders");
  }
};
W3mInputToken.styles = styles_default57;
__decorate82([
  property({ type: Object })
], W3mInputToken.prototype, "token", void 0);
__decorate82([
  property({ type: Number })
], W3mInputToken.prototype, "sendTokenAmount", void 0);
__decorate82([
  property({ type: Number })
], W3mInputToken.prototype, "gasPriceInUSD", void 0);
W3mInputToken = __decorate82([
  customElement("w3m-input-token")
], W3mInputToken);

// node_modules/@web3modal/scaffold-ui/dist/esm/src/partials/w3m-input-address/styles.js
var styles_default58 = css`
  :host {
    width: 100%;
    height: 100px;
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-color-gray-glass-002);
    background-color: var(--wui-color-gray-glass-002);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
    position: relative;
  }

  :host(:hover) {
    background-color: var(--wui-color-gray-glass-005);
  }

  wui-flex {
    width: 100%;
    height: fit-content;
  }

  wui-button {
    display: ruby;
    color: var(--wui-color-fg-100);
    margin: 0 var(--wui-spacing-xs);
  }

  .instruction {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  .paste {
    display: inline-flex;
  }

  textarea {
    background: transparent;
    width: 100%;
    font-family: var(--w3m-font-family);
    font-size: var(--wui-font-size-medium);
    font-style: normal;
    font-weight: var(--wui-font-weight-light);
    line-height: 130%;
    letter-spacing: var(--wui-letter-spacing-medium);
    color: var(--wui-color-fg-100);
    caret-color: var(--wui-color-accent-100);
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
    border: none;
    outline: none;
    appearance: none;
    resize: none;
    overflow: hidden;
  }
`;

// node_modules/@web3modal/scaffold-ui/dist/esm/src/partials/w3m-input-address/index.js
var __decorate83 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mInputAddress = class W3mInputAddress2 extends LitElement {
  constructor() {
    super(...arguments);
    this.inputElementRef = createRef();
    this.instructionElementRef = createRef();
    this.instructionHidden = Boolean(this.value);
    this.pasting = false;
    this.onDebouncedSearch = CoreHelperUtil.debounce(async (value) => {
      const address = await ConnectionController.getEnsAddress(value);
      SendController.setLoading(false);
      if (address) {
        SendController.setReceiverProfileName(value);
        SendController.setReceiverAddress(address);
        const avatar = await ConnectionController.getEnsAvatar(value);
        if (avatar) {
          SendController.setReceiverProfileImageUrl(avatar);
        }
      } else {
        SendController.setReceiverAddress(value);
        SendController.setReceiverProfileName(void 0);
        SendController.setReceiverProfileImageUrl(void 0);
      }
    });
  }
  firstUpdated() {
    if (this.value) {
      this.instructionHidden = true;
    }
    this.checkHidden();
  }
  render() {
    return html` <wui-flex
      @click=${this.onBoxClick.bind(this)}
      flexDirection="column"
      justifyContent="center"
      gap="4xs"
      .padding=${["2xl", "l", "xl", "l"]}
    >
      <wui-text
        ${ref(this.instructionElementRef)}
        class="instruction"
        color="fg-300"
        variant="medium-400"
      >
        Type or
        <wui-button
          class="paste"
          size="md"
          variant="neutral"
          iconLeft="copy"
          @click=${this.onPasteClick.bind(this)}
        >
          <wui-icon size="sm" color="inherit" slot="iconLeft" name="copy"></wui-icon>
          Paste
        </wui-button>
        address
      </wui-text>
      <textarea
        spellcheck="false"
        ?disabled=${!this.instructionHidden}
        ${ref(this.inputElementRef)}
        @input=${this.onInputChange.bind(this)}
        @blur=${this.onBlur.bind(this)}
        .value=${this.value ?? ""}
        autocomplete="off"
      >
${this.value ?? ""}</textarea
      >
    </wui-flex>`;
  }
  async focusInput() {
    var _a2;
    if (this.instructionElementRef.value) {
      this.instructionHidden = true;
      await this.toggleInstructionFocus(false);
      this.instructionElementRef.value.style.pointerEvents = "none";
      (_a2 = this.inputElementRef.value) == null ? void 0 : _a2.focus();
      if (this.inputElementRef.value) {
        this.inputElementRef.value.selectionStart = this.inputElementRef.value.selectionEnd = this.inputElementRef.value.value.length;
      }
    }
  }
  async focusInstruction() {
    var _a2;
    if (this.instructionElementRef.value) {
      this.instructionHidden = false;
      await this.toggleInstructionFocus(true);
      this.instructionElementRef.value.style.pointerEvents = "auto";
      (_a2 = this.inputElementRef.value) == null ? void 0 : _a2.blur();
    }
  }
  async toggleInstructionFocus(focus) {
    if (this.instructionElementRef.value) {
      await this.instructionElementRef.value.animate([{ opacity: focus ? 0 : 1 }, { opacity: focus ? 1 : 0 }], {
        duration: 100,
        easing: "ease",
        fill: "forwards"
      }).finished;
    }
  }
  onBoxClick() {
    if (!this.value && !this.instructionHidden) {
      this.focusInput();
    }
  }
  onBlur() {
    if (!this.value && this.instructionHidden && !this.pasting) {
      this.focusInstruction();
    }
  }
  checkHidden() {
    if (this.instructionHidden) {
      this.focusInput();
    }
  }
  async onPasteClick() {
    this.pasting = true;
    const text = await navigator.clipboard.readText();
    SendController.setReceiverAddress(text);
    this.focusInput();
  }
  onInputChange(e) {
    this.pasting = false;
    const element = e.target;
    if (element.value && !this.instructionHidden) {
      this.focusInput();
    }
    SendController.setLoading(true);
    this.onDebouncedSearch(element.value);
  }
};
W3mInputAddress.styles = styles_default58;
__decorate83([
  property()
], W3mInputAddress.prototype, "value", void 0);
__decorate83([
  state()
], W3mInputAddress.prototype, "instructionHidden", void 0);
__decorate83([
  state()
], W3mInputAddress.prototype, "pasting", void 0);
W3mInputAddress = __decorate83([
  customElement("w3m-input-address")
], W3mInputAddress);

// node_modules/@web3modal/scaffold-ui/dist/esm/src/partials/w3m-wallet-send-details/styles.js
var styles_default59 = css`
  :host {
    display: flex;
    width: auto;
    flex-direction: column;
    gap: var(--wui-border-radius-1xs);
    border-radius: var(--wui-border-radius-s);
    background: var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-s) var(--wui-spacing-1xs) var(--wui-spacing-1xs)
      var(--wui-spacing-1xs);
  }

  wui-text {
    padding: 0 var(--wui-spacing-1xs);
  }

  wui-flex {
    margin-top: var(--wui-spacing-1xs);
  }

  .network {
    cursor: pointer;
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
  }

  .network:focus-visible {
    border: 1px solid var(--wui-color-accent-100);
    background-color: var(--wui-color-gray-glass-005);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  .network:hover {
    background-color: var(--wui-color-gray-glass-005);
  }

  .network:active {
    background-color: var(--wui-color-gray-glass-010);
  }
`;

// node_modules/@web3modal/scaffold-ui/dist/esm/src/partials/w3m-wallet-send-details/index.js
var __decorate84 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mWalletSendDetails = class W3mWalletSendDetails2 extends LitElement {
  render() {
    return html` <wui-text variant="small-400" color="fg-200">Details</wui-text>
      <wui-flex flexDirection="column" gap="xxs">
        <wui-list-content textTitle="Network cost" textValue="$${ifDefined(UiHelperUtil.formatNumberToLocalString(this.networkFee, 2))}"></wui-list-content></wui-list-content>
        <wui-list-content
          textTitle="Address"
          textValue=${UiHelperUtil.getTruncateString({
      string: this.receiverAddress ?? "",
      charsStart: 4,
      charsEnd: 4,
      truncate: "middle"
    })}
        >
        </wui-list-content>
        ${this.networkTemplate()}
      </wui-flex>`;
  }
  networkTemplate() {
    var _a2;
    if ((_a2 = this.caipNetwork) == null ? void 0 : _a2.name) {
      return html` <wui-list-content
        @click=${() => this.onNetworkClick(this.caipNetwork)}
        class="network"
        textTitle="Network"
        imageSrc=${ifDefined(AssetUtil.getNetworkImage(this.caipNetwork))}
      ></wui-list-content>`;
    }
    return null;
  }
  onNetworkClick(network) {
    if (network) {
      RouterController.push("Networks", { network });
    }
  }
};
W3mWalletSendDetails.styles = styles_default59;
__decorate84([
  property()
], W3mWalletSendDetails.prototype, "receiverAddress", void 0);
__decorate84([
  property({ type: Object })
], W3mWalletSendDetails.prototype, "caipNetwork", void 0);
__decorate84([
  property({ type: Number })
], W3mWalletSendDetails.prototype, "networkFee", void 0);
W3mWalletSendDetails = __decorate84([
  customElement("w3m-wallet-send-details")
], W3mWalletSendDetails);

// node_modules/@web3modal/scaffold-ui/dist/esm/src/partials/w3m-tooltip/styles.js
var styles_default60 = css`
  :host {
    pointer-events: none;
  }

  :host > wui-flex {
    display: var(--w3m-tooltip-display);
    opacity: var(--w3m-tooltip-opacity);
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    color: var(--wui-color-bg-100);
    position: fixed;
    top: var(--w3m-tooltip-top);
    left: var(--w3m-tooltip-left);
    transform: translate(calc(-50% + var(--w3m-tooltip-parent-width)), calc(-100% - 8px));
    max-width: calc(var(--w3m-modal-width) - var(--wui-spacing-xl));
    transition: opacity 0.2s var(--wui-ease-out-power-2);
    will-change: opacity;
  }

  :host([data-variant='shade']) > wui-flex {
    background-color: var(--wui-color-bg-150);
    border: 1px solid var(--wui-color-gray-glass-005);
  }

  :host([data-variant='shade']) > wui-flex > wui-text {
    color: var(--wui-color-fg-150);
  }

  :host([data-variant='fill']) > wui-flex {
    background-color: var(--wui-color-fg-100);
    border: none;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
    color: var(--wui-color-bg-150);
  }

  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`;

// node_modules/@web3modal/scaffold-ui/dist/esm/src/partials/w3m-tooltip/index.js
var __decorate85 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mTooltip = class W3mTooltip2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.open = TooltipController.state.open;
    this.message = TooltipController.state.message;
    this.triggerRect = TooltipController.state.triggerRect;
    this.variant = TooltipController.state.variant;
    this.unsubscribe.push(...[
      TooltipController.subscribe((newState) => {
        this.open = newState.open;
        this.message = newState.message;
        this.triggerRect = newState.triggerRect;
        this.variant = newState.variant;
      })
    ]);
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    this.dataset["variant"] = this.variant;
    const topValue = this.triggerRect.top;
    const leftValue = this.triggerRect.left;
    this.style.cssText = `
    --w3m-tooltip-top: ${topValue}px;
    --w3m-tooltip-left: ${leftValue}px;
    --w3m-tooltip-parent-width: ${this.triggerRect.width / 2}px;
    --w3m-tooltip-display: ${this.open ? "flex" : "none"};
    --w3m-tooltip-opacity: ${this.open ? 1 : 0};
    `;
    return html`<wui-flex>
      <wui-icon data-placement="top" color="fg-100" size="inherit" name="cursor"></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>
    </wui-flex>`;
  }
};
W3mTooltip.styles = [styles_default60];
__decorate85([
  state()
], W3mTooltip.prototype, "open", void 0);
__decorate85([
  state()
], W3mTooltip.prototype, "message", void 0);
__decorate85([
  state()
], W3mTooltip.prototype, "triggerRect", void 0);
__decorate85([
  state()
], W3mTooltip.prototype, "variant", void 0);
W3mTooltip = __decorate85([
  customElement("w3m-tooltip")
], W3mTooltip);

// node_modules/@web3modal/scaffold-ui/dist/esm/src/partials/w3m-tooltip-trigger/styles.js
var styles_default61 = css`
  :host {
    width: 100%;
    display: block;
  }
`;

// node_modules/@web3modal/scaffold-ui/dist/esm/src/partials/w3m-tooltip-trigger/index.js
var __decorate86 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var WuiTooltipTrigger = class WuiTooltipTrigger2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.text = "";
    this.open = TooltipController.state.open;
    this.unsubscribe.push(RouterController.subscribeKey("view", () => {
      TooltipController.hide();
    }), ModalController.subscribeKey("open", (modalOpen) => {
      if (!modalOpen) {
        TooltipController.hide();
      }
    }), TooltipController.subscribeKey("open", (tooltipOpen) => {
      this.open = tooltipOpen;
    }));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
    TooltipController.hide();
  }
  render() {
    return html`
      <div
        @pointermove=${this.onMouseEnter.bind(this)}
        @pointerleave=${this.onMouseLeave.bind(this)}
      >
        ${this.renderChildren()}
      </div>
    `;
  }
  renderChildren() {
    return html`<slot></slot> `;
  }
  onMouseEnter() {
    const rect = this.getBoundingClientRect();
    if (!this.open) {
      TooltipController.showTooltip({
        message: this.text,
        triggerRect: {
          width: rect.width,
          height: rect.height,
          left: rect.left,
          top: rect.top
        },
        variant: "shade"
      });
    }
  }
  onMouseLeave(event) {
    if (!this.contains(event.relatedTarget)) {
      TooltipController.hide();
    }
  }
};
WuiTooltipTrigger.styles = [styles_default61];
__decorate86([
  property()
], WuiTooltipTrigger.prototype, "text", void 0);
__decorate86([
  state()
], WuiTooltipTrigger.prototype, "open", void 0);
WuiTooltipTrigger = __decorate86([
  customElement("w3m-tooltip-trigger")
], WuiTooltipTrigger);

// node_modules/@web3modal/scaffold-ui/dist/esm/src/partials/w3m-social-login-widget/styles.js
var styles_default62 = css`
  :host > wui-flex:first-child {
    margin-top: var(--wui-spacing-s);
  }
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-m)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`;

// node_modules/@web3modal/scaffold-ui/dist/esm/src/partials/w3m-social-login-widget/index.js
var __decorate87 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var MAX_TOP_VIEW = 2;
var MAXIMUM_LENGTH = 6;
var W3mSocialLoginWidget = class W3mSocialLoginWidget2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.connectors = ConnectorController.state.connectors;
    this.connector = this.connectors.find((c) => c.type === "AUTH");
    this.unsubscribe.push(ConnectorController.subscribeKey("connectors", (val) => {
      this.connectors = val;
      this.connector = this.connectors.find((c) => c.type === "AUTH");
    }));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    var _a2;
    if (!((_a2 = this.connector) == null ? void 0 : _a2.socials)) {
      return null;
    }
    return html`
      <wui-flex
        class="container"
        flexDirection="column"
        gap="xs"
        .padding=${["0", "0", "xs", "0"]}
      >
        ${this.topViewTemplate()}${this.bottomViewTemplate()}
      </wui-flex>
      ${this.separatorTemplate()}
    `;
  }
  topViewTemplate() {
    var _a2, _b2, _c;
    if (!((_a2 = this.connector) == null ? void 0 : _a2.socials)) {
      return null;
    }
    if (this.connector.socials.length === 2) {
      return html` <wui-flex gap="xs">
        ${this.connector.socials.slice(0, MAX_TOP_VIEW).map((social) => html`<wui-logo-select
              data-testid=${`social-selector-${social}`}
              @click=${() => {
        this.onSocialClick(social);
      }}
              logo=${social}
            ></wui-logo-select>`)}
      </wui-flex>`;
    }
    return html` <wui-list-social
      data-testid=${`social-selector-${(_c = (_b2 = this.connector) == null ? void 0 : _b2.socials) == null ? void 0 : _c[0]}`}
      @click=${() => {
      var _a3, _b3;
      this.onSocialClick((_b3 = (_a3 = this.connector) == null ? void 0 : _a3.socials) == null ? void 0 : _b3[0]);
    }}
      logo=${ifDefined(this.connector.socials[0])}
      align="center"
      name=${`Continue with ${this.connector.socials[0]}`}
    ></wui-list-social>`;
  }
  bottomViewTemplate() {
    var _a2, _b2, _c;
    if (!((_a2 = this.connector) == null ? void 0 : _a2.socials)) {
      return null;
    }
    if (((_b2 = this.connector) == null ? void 0 : _b2.socials.length) <= MAX_TOP_VIEW) {
      return null;
    }
    if (((_c = this.connector) == null ? void 0 : _c.socials.length) > MAXIMUM_LENGTH) {
      return html`<wui-flex gap="xs">
        ${this.connector.socials.slice(1, MAXIMUM_LENGTH - 1).map((social) => html`<wui-logo-select
              data-testid=${`social-selector-${social}`}
              @click=${() => {
        this.onSocialClick(social);
      }}
              logo=${social}
            ></wui-logo-select>`)}
        <wui-logo-select logo="more" @click=${this.onMoreSocialsClick.bind(this)}></wui-logo-select>
      </wui-flex>`;
    }
    return html`<wui-flex gap="xs">
      ${this.connector.socials.slice(1, this.connector.socials.length).map((social) => html`<wui-logo-select
            data-testid=${`social-selector-${social}`}
            @click=${() => {
      this.onSocialClick(social);
    }}
            logo=${social}
          ></wui-logo-select>`)}
    </wui-flex>`;
  }
  separatorTemplate() {
    const walletConnectConnector = this.connectors.find((c) => c.type === "WALLET_CONNECT");
    if (walletConnectConnector) {
      return html`<wui-separator text="or"></wui-separator>`;
    }
    return null;
  }
  onMoreSocialsClick() {
    RouterController.push("ConnectSocials");
  }
  async onSocialClick(socialProvider) {
    var _a2, _b2;
    if (socialProvider) {
      AccountController.setSocialProvider(socialProvider, ChainController.state.activeChain);
      EventsController.sendEvent({
        type: "track",
        event: "SOCIAL_LOGIN_STARTED",
        properties: { provider: socialProvider }
      });
      RouterController.push("ConnectingSocial");
    }
    const authConnector = ConnectorController.getAuthConnector();
    this.popupWindow = CoreHelperUtil.returnOpenHref("", "popupWindow", "width=600,height=800,scrollbars=yes");
    try {
      if (authConnector && socialProvider) {
        const { uri } = await authConnector.provider.getSocialRedirectUri({
          provider: socialProvider
        });
        if (this.popupWindow && uri) {
          AccountController.setSocialWindow(this.popupWindow, ChainController.state.activeChain);
          this.popupWindow.location.href = uri;
        } else {
          (_a2 = this.popupWindow) == null ? void 0 : _a2.close();
          throw new Error("Something went wrong");
        }
      }
    } catch (error) {
      (_b2 = this.popupWindow) == null ? void 0 : _b2.close();
      SnackController.showError("Something went wrong");
    }
  }
};
W3mSocialLoginWidget.styles = styles_default62;
__decorate87([
  state()
], W3mSocialLoginWidget.prototype, "connectors", void 0);
W3mSocialLoginWidget = __decorate87([
  customElement("w3m-social-login-widget")
], W3mSocialLoginWidget);

// node_modules/@web3modal/scaffold-ui/dist/esm/src/partials/w3m-wallet-login-list/index.js
var __decorate88 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mWalletLoginList = class W3mWalletLoginList2 extends LitElement {
  render() {
    return html`
      <wui-flex flexDirection="column" gap="xs">
        <w3m-connector-list></w3m-connector-list>
        <w3m-all-wallets-widget></w3m-all-wallets-widget>
      </wui-flex>
    `;
  }
};
W3mWalletLoginList = __decorate88([
  customElement("w3m-wallet-login-list")
], W3mWalletLoginList);

// node_modules/@web3modal/scaffold-ui/dist/esm/src/partials/w3m-social-login-list/styles.js
var styles_default63 = css`
  :host {
    margin-top: var(--wui-spacing-3xs);
  }
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-xs)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`;

// node_modules/@web3modal/scaffold-ui/dist/esm/src/partials/w3m-social-login-list/index.js
var __decorate89 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mSocialLoginList = class W3mSocialLoginList2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.connectors = ConnectorController.state.connectors;
    this.connector = this.connectors.find((c) => c.type === "AUTH");
    this.unsubscribe.push(ConnectorController.subscribeKey("connectors", (val) => {
      this.connectors = val;
      this.connector = this.connectors.find((c) => c.type === "AUTH");
    }));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    var _a2;
    if (!((_a2 = this.connector) == null ? void 0 : _a2.socials)) {
      return null;
    }
    return html` <wui-flex flexDirection="column" gap="xs">
      ${this.connector.socials.map((social) => html`<wui-list-social name=${social} logo=${social}></wui-list-social>`)}
    </wui-flex>`;
  }
};
W3mSocialLoginList.styles = styles_default63;
__decorate89([
  state()
], W3mSocialLoginList.prototype, "connectors", void 0);
W3mSocialLoginList = __decorate89([
  customElement("w3m-social-login-list")
], W3mSocialLoginList);

// node_modules/@web3modal/scaffold-ui/dist/esm/src/partials/w3m-connect-announced-widget/index.js
var __decorate90 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mConnectAnnouncedWidget = class W3mConnectAnnouncedWidget2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.connectors = ConnectorController.state.connectors;
    this.unsubscribe.push(ConnectorController.subscribeKey("connectors", (val) => this.connectors = val));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    const announcedConnectors = this.connectors.filter((connector) => connector.type === "ANNOUNCED");
    if (!(announcedConnectors == null ? void 0 : announcedConnectors.length)) {
      this.style.cssText = `display: none`;
      return null;
    }
    return html`
      <wui-flex flexDirection="column" gap="xs">
        ${announcedConnectors.map((connector) => {
      var _a2, _b2;
      if (((_a2 = connector.info) == null ? void 0 : _a2.rdns) && ApiController.state.excludedRDNS) {
        if (ApiController.state.excludedRDNS.includes((_b2 = connector == null ? void 0 : connector.info) == null ? void 0 : _b2.rdns)) {
          return null;
        }
      }
      return html`
            <wui-list-wallet
              imageSrc=${ifDefined(AssetUtil.getConnectorImage(connector))}
              name=${connector.name ?? "Unknown"}
              @click=${() => this.onConnector(connector)}
              tagVariant="success"
              tagLabel="installed"
              data-testid=${`wallet-selector-${connector.id}`}
              .installed=${true}
            >
            </wui-list-wallet>
          `;
    })}
      </wui-flex>
    `;
  }
  onConnector(connector) {
    if (connector.type === "WALLET_CONNECT") {
      if (CoreHelperUtil.isMobile()) {
        RouterController.push("AllWallets");
      } else {
        RouterController.push("ConnectingWalletConnect");
      }
    } else {
      RouterController.push("ConnectingExternal", { connector });
    }
  }
};
__decorate90([
  state()
], W3mConnectAnnouncedWidget.prototype, "connectors", void 0);
W3mConnectAnnouncedWidget = __decorate90([
  customElement("w3m-connect-announced-widget")
], W3mConnectAnnouncedWidget);

// node_modules/@web3modal/scaffold-ui/dist/esm/src/partials/w3m-connect-custom-widget/index.js
var __decorate91 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mConnectCustomWidget = class W3mConnectCustomWidget2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.connectors = ConnectorController.state.connectors;
    this.unsubscribe.push(ConnectorController.subscribeKey("connectors", (val) => this.connectors = val));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    const { customWallets } = OptionsController.state;
    if (!(customWallets == null ? void 0 : customWallets.length)) {
      this.style.cssText = `display: none`;
      return null;
    }
    const wallets = this.filterOutDuplicateWallets(customWallets);
    return html`<wui-flex flexDirection="column" gap="xs">
      ${wallets.map((wallet) => html`
          <wui-list-wallet
            imageSrc=${ifDefined(AssetUtil.getWalletImage(wallet))}
            name=${wallet.name ?? "Unknown"}
            @click=${() => this.onConnectWallet(wallet)}
            data-testid=${`wallet-selector-${wallet.id}`}
          >
          </wui-list-wallet>
        `)}
    </wui-flex>`;
  }
  filterOutDuplicateWallets(wallets) {
    const recent = StorageUtil.getRecentWallets();
    const connectorRDNSs = this.connectors.map((connector) => {
      var _a2;
      return (_a2 = connector.info) == null ? void 0 : _a2.rdns;
    }).filter(Boolean);
    const recentRDNSs = recent.map((wallet) => wallet.rdns).filter(Boolean);
    const allRDNSs = connectorRDNSs.concat(recentRDNSs);
    if (allRDNSs.includes("io.metamask.mobile") && CoreHelperUtil.isMobile()) {
      const index = allRDNSs.indexOf("io.metamask.mobile");
      allRDNSs[index] = "io.metamask";
    }
    const filtered = wallets.filter((wallet) => !allRDNSs.includes(String(wallet == null ? void 0 : wallet.rdns)));
    return filtered;
  }
  onConnectWallet(wallet) {
    RouterController.push("ConnectingWalletConnect", { wallet });
  }
};
__decorate91([
  state()
], W3mConnectCustomWidget.prototype, "connectors", void 0);
W3mConnectCustomWidget = __decorate91([
  customElement("w3m-connect-custom-widget")
], W3mConnectCustomWidget);

// node_modules/@web3modal/scaffold-ui/dist/esm/src/utils/WalletUtil.js
var WalletUtil = {
  filterOutDuplicatesByRDNS(wallets) {
    const connectors = OptionsController.state.enableEIP6963 ? ConnectorController.state.connectors : [];
    const recent = StorageUtil.getRecentWallets();
    const connectorRDNSs = connectors.map((connector) => {
      var _a2;
      return (_a2 = connector.info) == null ? void 0 : _a2.rdns;
    }).filter(Boolean);
    const recentRDNSs = recent.map((wallet) => wallet.rdns).filter(Boolean);
    const allRDNSs = connectorRDNSs.concat(recentRDNSs);
    if (allRDNSs.includes("io.metamask.mobile") && CoreHelperUtil.isMobile()) {
      const index = allRDNSs.indexOf("io.metamask.mobile");
      allRDNSs[index] = "io.metamask";
    }
    const filtered = wallets.filter((wallet) => !allRDNSs.includes(String(wallet == null ? void 0 : wallet.rdns)));
    return filtered;
  },
  filterOutDuplicatesByIds(wallets) {
    const connectors = ConnectorController.state.connectors;
    const recent = StorageUtil.getRecentWallets();
    const connectorIds = connectors.map((connector) => connector.explorerId);
    const recentIds = recent.map((wallet) => wallet.id);
    const allIds = connectorIds.concat(recentIds);
    const filtered = wallets.filter((wallet) => !allIds.includes(wallet == null ? void 0 : wallet.id));
    return filtered;
  },
  filterOutDuplicateWallets(wallets) {
    const uniqueByRDNS = this.filterOutDuplicatesByRDNS(wallets);
    const uniqueWallets = this.filterOutDuplicatesByIds(uniqueByRDNS);
    return uniqueWallets;
  }
};

// node_modules/@web3modal/scaffold-ui/dist/esm/src/partials/w3m-connect-featured-widget/index.js
var __decorate92 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mConnectFeaturedWidget = class W3mConnectFeaturedWidget2 extends LitElement {
  constructor() {
    super(...arguments);
    this.unsubscribe = [];
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    const { featured } = ApiController.state;
    if (!featured.length) {
      this.style.cssText = `display: none`;
      return null;
    }
    const wallets = WalletUtil.filterOutDuplicateWallets(featured);
    return html`
      <wui-flex flexDirection="column" gap="xs">
        ${wallets.map((wallet) => html`
            <wui-list-wallet
              imageSrc=${ifDefined(AssetUtil.getWalletImage(wallet))}
              name=${wallet.name ?? "Unknown"}
              @click=${() => this.onConnectWallet(wallet)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `;
  }
  onConnectWallet(wallet) {
    const connector = ConnectorController.getConnector(wallet.id, wallet.rdns);
    if (connector) {
      RouterController.push("ConnectingExternal", { connector });
    } else {
      RouterController.push("ConnectingWalletConnect", { wallet });
    }
  }
};
W3mConnectFeaturedWidget = __decorate92([
  customElement("w3m-connect-featured-widget")
], W3mConnectFeaturedWidget);

// node_modules/@web3modal/scaffold-ui/dist/esm/src/partials/w3m-connect-injected-widget/index.js
var __decorate93 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mConnectInjectedWidget = class W3mConnectInjectedWidget2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.connectors = ConnectorController.state.connectors;
    this.unsubscribe.push(ConnectorController.subscribeKey("connectors", (val) => this.connectors = val));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    var _a2;
    const injectedConnectors = this.connectors.filter((connector) => connector.type === "INJECTED");
    if (!(injectedConnectors == null ? void 0 : injectedConnectors.length) || injectedConnectors.length === 1 && ((_a2 = injectedConnectors[0]) == null ? void 0 : _a2.name) === "Browser Wallet" && !CoreHelperUtil.isMobile()) {
      this.style.cssText = `display: none`;
      return null;
    }
    return html`
      <wui-flex flexDirection="column" gap="xs">
        ${injectedConnectors.map((connector) => {
      var _a3, _b2;
      if (!CoreHelperUtil.isMobile() && connector.name === "Browser Wallet") {
        return null;
      }
      if (!ConnectionController.checkInstalled()) {
        this.style.cssText = `display: none`;
        return null;
      }
      if (((_a3 = connector.info) == null ? void 0 : _a3.rdns) && ApiController.state.excludedRDNS) {
        if (ApiController.state.excludedRDNS.includes((_b2 = connector == null ? void 0 : connector.info) == null ? void 0 : _b2.rdns)) {
          return null;
        }
      }
      return html`
            <wui-list-wallet
              imageSrc=${ifDefined(AssetUtil.getConnectorImage(connector))}
              .installed=${true}
              name=${connector.name ?? "Unknown"}
              tagVariant="success"
              tagLabel="installed"
              data-testid=${`wallet-selector-${connector.id}`}
              @click=${() => this.onConnector(connector)}
            >
            </wui-list-wallet>
          `;
    })}
      </wui-flex>
    `;
  }
  onConnector(connector) {
    RouterController.push("ConnectingExternal", { connector });
  }
};
__decorate93([
  state()
], W3mConnectInjectedWidget.prototype, "connectors", void 0);
W3mConnectInjectedWidget = __decorate93([
  customElement("w3m-connect-injected-widget")
], W3mConnectInjectedWidget);

// node_modules/@web3modal/scaffold-ui/dist/esm/src/partials/w3m-connect-coinbase-widget/index.js
var __decorate94 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mConnectCoinbaseWidget = class W3mConnectCoinbaseWidget2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.connectors = ConnectorController.state.connectors;
    this.unsubscribe.push(ConnectorController.subscribeKey("connectors", (val) => this.connectors = val));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    const coinbaseConnector = this.connectors.find((connector) => connector.id === "coinbaseWalletSDK");
    if (!coinbaseConnector) {
      this.style.cssText = `display: none`;
      return null;
    }
    return html`
      <wui-flex flexDirection="column" gap="xs">
        <wui-list-wallet
          imageSrc=${ifDefined(AssetUtil.getConnectorImage(coinbaseConnector))}
          .installed=${true}
          name=${ifDefined(coinbaseConnector.name)}
          data-testid=${`wallet-selector-${coinbaseConnector.id}`}
          @click=${() => this.onConnector(coinbaseConnector)}
        >
        </wui-list-wallet>
      </wui-flex>
    `;
  }
  async onCoinbaseConnector(connector) {
    try {
      ConnectionController.setWcError(false);
      if (connector.imageUrl) {
        StorageUtil.setConnectedWalletImageUrl(connector.imageUrl);
      }
      await ConnectionController.connectExternal(connector);
      if (OptionsController.state.isSiweEnabled) {
        RouterController.push("ConnectingSiwe");
      } else {
        ModalController.close();
      }
      EventsController.sendEvent({
        type: "track",
        event: "CONNECT_SUCCESS",
        properties: { method: "browser", name: connector.name || "Unknown" }
      });
    } catch (error) {
      EventsController.sendEvent({
        type: "track",
        event: "CONNECT_ERROR",
        properties: { message: (error == null ? void 0 : error.message) ?? "Unknown" }
      });
      ConnectionController.setWcError(true);
    }
  }
  onConnector(connector) {
    RouterController.push("ConnectingExternal", { connector });
    if (connector.id === ConstantsUtil3.COINBASE_SDK_CONNECTOR_ID) {
      this.onCoinbaseConnector(connector);
    }
  }
};
__decorate94([
  state()
], W3mConnectCoinbaseWidget.prototype, "connectors", void 0);
W3mConnectCoinbaseWidget = __decorate94([
  customElement("w3m-connect-coinbase-widget")
], W3mConnectCoinbaseWidget);

// node_modules/@web3modal/scaffold-ui/dist/esm/src/partials/w3m-connect-external-widget/index.js
var __decorate95 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mConnectExternalWidget = class W3mConnectExternalWidget2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.connectors = ConnectorController.state.connectors;
    this.unsubscribe.push(ConnectorController.subscribeKey("connectors", (val) => this.connectors = val));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    const externalConnectors = this.connectors.filter((connector) => connector.type === "EXTERNAL");
    if (!(externalConnectors == null ? void 0 : externalConnectors.length)) {
      this.style.cssText = `display: none`;
      return null;
    }
    return html`
      <wui-flex flexDirection="column" gap="xs">
        ${externalConnectors.map((connector) => {
      if (connector.id === "coinbaseWalletSDK") {
        return null;
      }
      return html`
            <wui-list-wallet
              imageSrc=${ifDefined(AssetUtil.getConnectorImage(connector))}
              .installed=${true}
              name=${connector.name ?? "Unknown"}
              data-testid=${`wallet-selector-external-${connector.id}`}
              @click=${() => this.onConnector(connector)}
            >
            </wui-list-wallet>
          `;
    })}
      </wui-flex>
    `;
  }
  onConnector(connector) {
    RouterController.push("ConnectingExternal", { connector });
  }
};
__decorate95([
  state()
], W3mConnectExternalWidget.prototype, "connectors", void 0);
W3mConnectExternalWidget = __decorate95([
  customElement("w3m-connect-external-widget")
], W3mConnectExternalWidget);

// node_modules/@web3modal/scaffold-ui/dist/esm/src/partials/w3m-connect-recent-widget/index.js
var __decorate96 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mConnectRecentWidget = class W3mConnectRecentWidget2 extends LitElement {
  render() {
    const recent = StorageUtil.getRecentWallets();
    if (!(recent == null ? void 0 : recent.length)) {
      this.style.cssText = `display: none`;
      return null;
    }
    return html`
      <wui-flex flexDirection="column" gap="xs">
        ${recent.map((wallet) => html`
            <wui-list-wallet
              imageSrc=${ifDefined(AssetUtil.getWalletImage(wallet))}
              name=${wallet.name ?? "Unknown"}
              @click=${() => this.onConnectWallet(wallet)}
              tagLabel="recent"
              tagVariant="shade"
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `;
  }
  onConnectWallet(wallet) {
    RouterController.push("ConnectingWalletConnect", { wallet });
  }
};
W3mConnectRecentWidget = __decorate96([
  customElement("w3m-connect-recent-widget")
], W3mConnectRecentWidget);

// node_modules/@web3modal/scaffold-ui/dist/esm/src/partials/w3m-connect-recommended-widget/index.js
var __decorate97 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mConnectRecommendedWidget = class W3mConnectRecommendedWidget2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.connectors = ConnectorController.state.connectors;
    this.unsubscribe.push(ConnectorController.subscribeKey("connectors", (val) => this.connectors = val));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    const connector = this.connectors.find((c) => c.type === "WALLET_CONNECT");
    if (!connector) {
      return null;
    }
    const { recommended } = ApiController.state;
    const { customWallets, featuredWalletIds } = OptionsController.state;
    const { connectors } = ConnectorController.state;
    const recent = StorageUtil.getRecentWallets();
    const injected = connectors.filter((c) => c.type === "INJECTED" || c.type === "ANNOUNCED");
    const injectedWallets = injected.filter((i) => i.name !== "Browser Wallet");
    if (featuredWalletIds || customWallets || !recommended.length) {
      this.style.cssText = `display: none`;
      return null;
    }
    const overrideLength = injectedWallets.length + recent.length;
    const maxRecommended = Math.max(0, 2 - overrideLength);
    const wallets = WalletUtil.filterOutDuplicateWallets(recommended).slice(0, maxRecommended);
    if (!wallets.length) {
      this.style.cssText = `display: none`;
      return null;
    }
    return html`
      <wui-flex flexDirection="column" gap="xs">
        ${wallets.map((wallet) => html`
            <wui-list-wallet
              imageSrc=${ifDefined(AssetUtil.getWalletImage(wallet))}
              name=${(wallet == null ? void 0 : wallet.name) ?? "Unknown"}
              @click=${() => this.onConnectWallet(wallet)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `;
  }
  onConnectWallet(wallet) {
    const connector = ConnectorController.getConnector(wallet.id, wallet.rdns);
    if (connector) {
      RouterController.push("ConnectingExternal", { connector });
    } else {
      RouterController.push("ConnectingWalletConnect", { wallet });
    }
  }
};
__decorate97([
  state()
], W3mConnectRecommendedWidget.prototype, "connectors", void 0);
W3mConnectRecommendedWidget = __decorate97([
  customElement("w3m-connect-recommended-widget")
], W3mConnectRecommendedWidget);

// node_modules/@web3modal/scaffold-ui/dist/esm/src/partials/w3m-connect-walletconnect-widget/index.js
var __decorate98 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mConnectWalletConnectWidget = class W3mConnectWalletConnectWidget2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.connectors = ConnectorController.state.connectors;
    this.unsubscribe.push(ConnectorController.subscribeKey("connectors", (val) => this.connectors = val));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    if (CoreHelperUtil.isMobile()) {
      this.style.cssText = `display: none`;
      return null;
    }
    const connector = this.connectors.find((c) => c.type === "WALLET_CONNECT");
    if (!connector) {
      this.style.cssText = `display: none`;
      return null;
    }
    return html`
      <wui-list-wallet
        imageSrc=${ifDefined(AssetUtil.getConnectorImage(connector))}
        name=${connector.name ?? "Unknown"}
        @click=${() => this.onConnector(connector)}
        tagLabel="qr code"
        tagVariant="main"
        data-testid="wallet-selector-walletconnect"
      >
      </wui-list-wallet>
    `;
  }
  onConnector(connector) {
    if (connector.type === "WALLET_CONNECT") {
      if (CoreHelperUtil.isMobile()) {
        RouterController.push("AllWallets");
      } else {
        RouterController.push("ConnectingWalletConnect");
      }
    } else {
      RouterController.push("ConnectingExternal", { connector });
    }
  }
};
__decorate98([
  state()
], W3mConnectWalletConnectWidget.prototype, "connectors", void 0);
W3mConnectWalletConnectWidget = __decorate98([
  customElement("w3m-connect-walletconnect-widget")
], W3mConnectWalletConnectWidget);

// node_modules/@web3modal/scaffold-ui/dist/esm/src/partials/w3m-connector-list/styles.js
var styles_default64 = css`
  :host {
    margin-top: var(--wui-spacing-3xs);
  }
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-xs)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`;

// node_modules/@web3modal/scaffold-ui/dist/esm/src/partials/w3m-connector-list/index.js
var __decorate99 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mConnectorList = class W3mConnectorList2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.connectors = ConnectorController.state.connectors;
    this.unsubscribe.push(ConnectorController.subscribeKey("connectors", (val) => this.connectors = val));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    const { custom, recent, announced, coinbase, injected, recommended, featured, external } = this.getConnectorsByType();
    return html`
      <wui-flex flexDirection="column" gap="xs">
        <w3m-connect-walletconnect-widget></w3m-connect-walletconnect-widget>
        ${recent.length ? html`<w3m-connect-recent-widget></w3m-connect-recent-widget>` : null}
        ${announced.length ? html`<w3m-connect-announced-widget></w3m-connect-announced-widget>` : null}
        ${injected.length ? html`<w3m-connect-injected-widget></w3m-connect-injected-widget>` : null}
        ${featured.length ? html`<w3m-connect-featured-widget></w3m-connect-featured-widget>` : null}
        ${(custom == null ? void 0 : custom.length) ? html`<w3m-connect-custom-widget></w3m-connect-custom-widget>` : null}
        ${coinbase ? html`<w3m-connect-coinbase-widget></w3m-connect-coinbase-widget>` : null}
        ${external.length ? html`<w3m-connect-external-widget></w3m-connect-external-widget>` : null}
        ${recommended.length ? html`<w3m-connect-recommended-widget></w3m-connect-recommended-widget>` : null}
      </wui-flex>
    `;
  }
  getConnectorsByType() {
    const { featured, recommended } = ApiController.state;
    const { customWallets: custom } = OptionsController.state;
    const recent = StorageUtil.getRecentWallets();
    const filteredRecommended = WalletUtil.filterOutDuplicateWallets(recommended);
    const filteredFeatured = WalletUtil.filterOutDuplicateWallets(featured);
    const announced = this.connectors.filter((connector) => connector.type === "ANNOUNCED");
    const injected = this.connectors.filter((connector) => connector.type === "INJECTED");
    const external = this.connectors.filter((connector) => connector.type === "EXTERNAL");
    const coinbase = this.connectors.find((connector) => connector.id === ConstantsUtil3.COINBASE_SDK_CONNECTOR_ID);
    const isEVM = ChainController.state.activeChain === ConstantsUtil.CHAIN.EVM;
    const includeAnnouncedAndInjected = isEVM ? OptionsController.state.enableEIP6963 : true;
    return {
      custom,
      recent,
      coinbase,
      external,
      announced: includeAnnouncedAndInjected ? announced : [],
      injected: includeAnnouncedAndInjected ? injected : [],
      recommended: filteredRecommended,
      featured: filteredFeatured
    };
  }
};
W3mConnectorList.styles = styles_default64;
__decorate99([
  state()
], W3mConnectorList.prototype, "connectors", void 0);
W3mConnectorList = __decorate99([
  customElement("w3m-connector-list")
], W3mConnectorList);

// node_modules/@web3modal/scaffold-ui/dist/esm/src/partials/w3m-all-wallets-widget/index.js
var __decorate100 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mAllWalletsWidget = class W3mAllWalletsWidget2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.connectors = ConnectorController.state.connectors;
    this.count = ApiController.state.count;
    this.unsubscribe.push(ConnectorController.subscribeKey("connectors", (val) => this.connectors = val), ApiController.subscribeKey("count", (val) => this.count = val));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    const connector = this.connectors.find((c) => c.type === "WALLET_CONNECT");
    const { allWallets } = OptionsController.state;
    if (!connector || allWallets === "HIDE") {
      return null;
    }
    if (allWallets === "ONLY_MOBILE" && !CoreHelperUtil.isMobile()) {
      return null;
    }
    const featuredCount = ApiController.state.featured.length;
    const rawCount = this.count + featuredCount;
    const roundedCount = rawCount < 10 ? rawCount : Math.floor(rawCount / 10) * 10;
    const tagLabel = roundedCount < rawCount ? `${roundedCount}+` : `${roundedCount}`;
    return html`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${tagLabel}
        tagVariant="shade"
        data-testid="all-wallets"
      ></wui-list-wallet>
    `;
  }
  onAllWallets() {
    EventsController.sendEvent({ type: "track", event: "CLICK_ALL_WALLETS" });
    RouterController.push("AllWallets");
  }
};
__decorate100([
  state()
], W3mAllWalletsWidget.prototype, "connectors", void 0);
__decorate100([
  state()
], W3mAllWalletsWidget.prototype, "count", void 0);
W3mAllWalletsWidget = __decorate100([
  customElement("w3m-all-wallets-widget")
], W3mAllWalletsWidget);

// node_modules/@web3modal/scaffold-ui/dist/esm/src/partials/w3m-account-auth-button/index.js
var __decorate101 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mAccountAuthButton = class W3mAccountAuthButton2 extends LitElement {
  constructor() {
    super(...arguments);
    this.socialProvider = StorageUtil.getConnectedSocialProvider();
    this.socialUsername = StorageUtil.getConnectedSocialUsername();
  }
  render() {
    const type = StorageUtil.getConnectedConnector();
    const authConnector = ConnectorController.getAuthConnector();
    if (!authConnector || type !== "AUTH") {
      this.style.cssText = `display: none`;
      return null;
    }
    const email = authConnector.provider.getEmail() ?? "";
    return html`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon=${this.socialProvider ?? "mail"}
        iconSize=${this.socialProvider ? "xxl" : "sm"}
        data-testid="w3m-account-email-update"
        ?chevron=${!this.socialProvider}
        @click=${() => {
      this.onGoToUpdateEmail(email, this.socialProvider);
    }}
      >
        <wui-text variant="paragraph-500" color="fg-100">${this.getAuthName(email)}</wui-text>
      </wui-list-item>
    `;
  }
  onGoToUpdateEmail(email, socialProvider) {
    if (!socialProvider) {
      RouterController.push("UpdateEmailWallet", { email });
    }
  }
  getAuthName(email) {
    if (this.socialUsername) {
      if (this.socialProvider === "discord" && this.socialUsername.endsWith("0")) {
        return this.socialUsername.slice(0, -1);
      }
      return this.socialUsername;
    }
    return email.length > 30 ? `${email.slice(0, -3)}...` : email;
  }
};
W3mAccountAuthButton = __decorate101([
  customElement("w3m-account-auth-button")
], W3mAccountAuthButton);

// node_modules/@web3modal/wagmi/dist/esm/src/utils/helpers.js
function getCaipDefaultChain(chain) {
  if (!chain) {
    return void 0;
  }
  return {
    id: `${ConstantsUtil3.EIP155}:${chain.id}`,
    name: chain.name,
    imageId: PresetsUtil.EIP155NetworkImageIds[chain.id]
  };
}
async function getWalletConnectCaipNetworks(connector) {
  var _a2, _b2, _c, _d;
  if (!connector) {
    throw new Error("networkControllerClient:getApprovedCaipNetworks - connector is undefined");
  }
  const provider = await (connector == null ? void 0 : connector.getProvider());
  const ns = (_b2 = (_a2 = provider == null ? void 0 : provider.signer) == null ? void 0 : _a2.session) == null ? void 0 : _b2.namespaces;
  const nsMethods = (_c = ns == null ? void 0 : ns[ConstantsUtil3.EIP155]) == null ? void 0 : _c.methods;
  const nsChains = (_d = ns == null ? void 0 : ns[ConstantsUtil3.EIP155]) == null ? void 0 : _d.chains;
  return {
    supportsAllNetworks: Boolean(nsMethods == null ? void 0 : nsMethods.includes(ConstantsUtil3.ADD_CHAIN_METHOD)),
    approvedCaipNetworkIds: nsChains
  };
}
function getEmailCaipNetworks() {
  return {
    supportsAllNetworks: false,
    approvedCaipNetworkIds: PresetsUtil.WalletConnectRpcChainIds.map((id) => `${ConstantsUtil3.EIP155}:${id}`)
  };
}
function getTransport({ chain, projectId }) {
  var _a2, _b2;
  const RPC_URL = CoreHelperUtil.getBlockchainApiUrl();
  const chainDefaultUrl = (_b2 = (_a2 = chain.rpcUrls[0]) == null ? void 0 : _a2.http) == null ? void 0 : _b2[0];
  if (!PresetsUtil.WalletConnectRpcChainIds.includes(chain.id)) {
    return http(chainDefaultUrl);
  }
  return fallback([
    http(`${RPC_URL}/v1/?chainId=${ConstantsUtil3.EIP155}:${chain.id}&projectId=${projectId}`),
    http(chainDefaultUrl)
  ]);
}

export {
  ConstantsUtil3 as ConstantsUtil,
  PresetsUtil,
  HelpersUtil,
  Web3ModalScaffold,
  getCaipDefaultChain,
  getWalletConnectCaipNetworks,
  getEmailCaipNetworks,
  getTransport
};
/*! Bundled license information:

lit-html/development/directives/if-defined.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/development/directive-helpers.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/development/directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/development/async-directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/development/directives/ref.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
//# sourceMappingURL=chunk-2HEA5M4B.js.map
