import { defineChain } from '../../utils/chain/defineChain.js';
export const moksha = /*#__PURE__*/ defineChain({
    id: 14800,
    name: 'Moksha',
    nativeCurrency: { name: 'Vana', symbol: 'VANA', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://rpc.moksha.vana.org'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Vanascan',
            url: 'https://moksha.vanascan.io/',
            apiUrl: 'https://moksha.vanascan.io/api',
        },
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 751532,
        },
        ensRegistry: { address: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e' },
        ensUniversalResolver: {
            address: '0xc8Af999e38273D658BE1b921b88A9Ddf005769cC',
            blockCreated: 5_317_080,
        },
    },
    testnet: true,
});
//# sourceMappingURL=sepolia.js.map