"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayStation = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
exports.PlayStation = {
    currency: '$',
    labels: {
        inStock: [
            {
                container: '.productHero-info .add-to-cart:not(.hide)',
                text: ['Add'],
            },
            {
                container: '.bulleted-info.queue',
                text: ['queue'],
            },
        ],
        outOfStock: {
            container: '.productHero-info .out-stock-wrpr:not(.hide)',
            text: ['Out of Stock'],
        },
    },
    links: [
        {
            brand: 'test:brand',
            itemNumber: '3005715',
            model: 'test:model',
            series: 'test:series',
            url: 'https://direct.playstation.com/en-us/accessories/accessory/dualsense-wireless-controller.3005715',
        },
        {
            brand: 'sony',
            itemNumber: '3005816',
            model: 'ps5 console',
            series: 'sonyps5c',
            url: 'https://direct.playstation.com/en-us/consoles/console/playstation5-console.3005816',
        },
        {
            brand: 'sony',
            itemNumber: '3005817',
            model: 'ps5 digital',
            series: 'sonyps5de',
            url: 'https://direct.playstation.com/en-us/consoles/console/playstation5-digital-edition-console.3005817',
        },
    ],
    name: 'playstation',
    realTimeInventoryLookup: async (itemNumber) => {
        const request_url = 'https://api.direct.playstation.com/commercewebservices/ps-direct-us/products/productList?fields=BASIC&productCodes=' +
            itemNumber;
        const response = await node_fetch_1.default(request_url);
        const response_json = await response.json();
        if (response_json.products[0].stock.stockLevelStatus !== 'outOfStock' &&
            response_json.products[0].maxOrderQuantity >= 0) {
            return true;
        }
        return false;
    },
};
//# sourceMappingURL=playstation.js.map