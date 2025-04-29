// ==UserScript==
// @name              fqqqq4444
// @namespace         https://github.com/Wenmoux/j8tool
// @version           1.0.3
// @description       番茄小说免费网页阅读 不用客户端 可下载小说
// @description:zh-cn 番茄小说免费网页阅读 不用客户端 可下载小说
// @description:en    Fanqie Novel Reading, No Need for a Client, Novels Available for Download
// @author            ibxff, SmashPhoenix272,wenmoux
// @license           MIT License
// @match             https://fanqienovel.com/*
// @require           https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.5/FileSaver.min.js
// @require           https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js
// @icon              data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDQ4IDQ4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0zNS40Mjg2IDQuODg0MzVDMzkuNjQ2MyA0Ljg4NDM1IDQzLjA4MTYgOC4zMTk3MyA0My4wODE2IDEyLjUzNzRWMzUuNDI4NkM0My4wODE2IDM5LjY0NjMgMzkuNjQ2MyA0My4wODE2IDM1LjQyODYgNDMuMDgxNkgxMi41Mzc0QzguMzE5NzMgNDMuMDgxNiA0Ljg4NDM1IDM5LjY0NjMgNC44ODQzNSAzNS40Mjg2VjEyLjUzNzRDNC44ODQzNSA4LjMxOTczIDguMzE5NzMgNC44ODQzNSAxMi41Mzc0IDQuODg0MzVIMzUuNDI4NlpNMzUuNDI4NiA0SDEyLjUzNzRDNy44MDk1MiA0IDQgNy44MDk1MiA0IDEyLjUzNzRWMzUuNDI4NkM0IDQwLjE1NjUgNy44MDk1MiA0My45NjYgMTIuNTM3NCA0My45NjZIMzUuNDI4NkM0MC4xNTY1IDQzLjk2NiA0My45NjYgNDAuMTU2NSA0My45NjYgMzUuNDI4NlYxMi41Mzc0QzQ0IDcuODA5NTIgNDAuMTU2NSA0IDM1LjQyODYgNFoiIGZpbGw9IiMzMzMiLz48cGF0aCBkPSJNMjkuMTAxNiA0VjEyLjQwMTRMMzIuMzMyOSAxMC41NjQ2TDM1LjU2NDEgMTIuNDAxNFY0SDI5LjEwMTZaIiBmaWxsPSIjMzMzIi8+PHBhdGggZD0iTTI0LjAzNCAxOC4yODU4QzE1LjgzNjcgMTguMjg1OCA4LjU1NzgyIDIxLjg1NzIgNCAyNy4zNjc0VjM1LjQyODZDNCA0MC4xNTY1IDcuODA5NTIgNDMuOTY2IDEyLjUzNzQgNDMuOTY2SDM1LjQyODZDNDAuMTU2NSA0My45NjYgNDMuOTY2IDQwLjE1NjUgNDMuOTY2IDM1LjQyODZWMjcuMjY1NEMzOS40MDgyIDIxLjc4OTIgMzIuMTk3MyAxOC4yODU4IDI0LjAzNCAxOC4yODU4Wk0xNC42MTIyIDM3LjY3MzVDMTMuMTE1NiAzNy42NzM1IDEyLjQwMTQgMzcuMTI5MyAxMi40MDE0IDM2LjQxNUMxMi40MDE0IDM1LjcwMDcgMTMuMDgxNiAzNS4xMjI1IDE0LjU3ODIgMzUuMTIyNUMxNi4wNzQ4IDM1LjEyMjUgMTcuODc3NiAzNi4zODEgMTcuODc3NiAzNi4zODFDMTcuODc3NiAzNi4zODEgMTYuMTA4OCAzNy42NzM1IDE0LjYxMjIgMzcuNjczNVpNMTUuODM2NyAzMS4yMTA5QzE0Ljc0ODMgMzAuMTU2NSAxNC42NDYzIDI5LjI3MjIgMTUuMTU2NSAyOC43NjJDMTUuNjY2NyAyOC4yNTE4IDE2LjU1MSAyOC4zMTk4IDE3LjYzOTUgMjkuNDA4MkMxOC43Mjc5IDMwLjQ2MjYgMTkuMDY4IDMyLjYwNTUgMTkuMDY4IDMyLjYwNTVDMTkuMDY4IDMyLjYwNTUgMTYuODkxMiAzMi4yNjU0IDE1LjgzNjcgMzEuMjEwOVpNMjQuMDM0IDMwLjQ2MjZDMjQuMDM0IDMwLjQ2MjYgMjIuNzQxNSAyOC43Mjc5IDIyLjcwNzUgMjcuMTk3M0MyMi43MDc1IDI1LjcwMDcgMjMuMjUxNyAyNC45ODY0IDIzLjk2NiAyNC45ODY0QzI0LjY4MDMgMjQuOTg2NCAyNS4yNTg1IDI1LjY2NjcgMjUuMjU4NSAyNy4xNjMzQzI1LjI5MjUgMjguNjkzOSAyNC4wMzQgMzAuNDYyNiAyNC4wMzQgMzAuNDYyNlpNMzAuMzYwNSAyOS4zNzQyQzMxLjQ0OSAyOC4zMTk4IDMyLjMzMzMgMjguMjUxOCAzMi44NDM1IDI4LjcyNzlDMzMuMzUzNyAyOS4yMzgxIDMzLjI1MTcgMzAuMTIyNSAzMi4xNjMzIDMxLjE3NjlDMzEuMDc0OCAzMi4yMzEzIDI4LjkzMiAzMi41Mzc1IDI4LjkzMiAzMi41Mzc1QzI4LjkzMiAzMi41Mzc1IDI5LjI3MjEgMzAuNDI4NiAzMC4zNjA1IDI5LjM3NDJaTTMzLjM1MzcgMzcuNjczNUMzMS44NTcxIDM3LjY3MzUgMzAuMDg4NCAzNi4zNDcgMzAuMDg4NCAzNi4zNDdDMzAuMDg4NCAzNi4zNDcgMzEuODU3MSAzNS4wODg1IDMzLjM4NzggMzUuMDg4NUMzNC44ODQ0IDM1LjA4ODUgMzUuNTk4NiAzNS43MDA3IDM1LjU2NDYgMzYuMzgxQzM1LjU2NDYgMzcuMTI5MyAzNC44NTAzIDM3LjY3MzUgMzMuMzUzNyAzNy42NzM1WiIgZmlsbD0iIzMzMyIvPjwvc3ZnPg==
// @grant            GM_xmlhttpRequest
// @grant            GM_addStyle
// @updateURL         https://update.greasyfork.org/scripts/518609/Fanqie%20Novel%20Free%20Reading.user.js
// @downloadURL       https://update.greasyfork.org/scripts/518609/Fanqie%20Novel%20Free%20Reading.meta.js
// ==/UserScript==


// Configuration
const CONFIG = {
    REG_KEY: "ac25c67ddd8f38c1b37a2348828e222e",
    INSTALL_ID: "4427064614339001",
    SERVER_DEVICE_ID: "4427064614334905",
    AID: "1967",
    VERSION_CODE: "62532"
};

//添加 MD3 风格的 CSS 样式
GM_addStyle(`
    /*全局样式变量 */
    :root {
        --primary-color: #ff6666;
        --primary-light: #ff8080;
        --primary-dark: #e65c5c;
        --surface-color: #ffffff;
        --on-surface-color: #1f1f1f;
        --surface-variant: #f5f5f5;
        --on-surface-variant: #49454f;
        --outline-color: #79747e;
        --success-color: #4caf50;
        --error-color: #f44336;
        --warning-color: #ff9800;
        --info-color: #2196f3;
        --shadow-color: rgba(0, 0, 0, 0.1);
        --border-radius: 16px;
        --font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;}

    /*浮动按钮 */
    .fq-float-btn {
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 56px;
        height: 56px;
        border-radius: 28px;
        background-color: var(--primary-color);
        color: white;
        box-shadow: 0 4px 8px var(--shadow-color);
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        z-index: 9999;transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);border: none;}

    .fq-float-btn:hover {
        background-color: var(--primary-light);
        box-shadow: 0 6px 12px var(--shadow-color);transform: translateY(-2px);
    }

    .fq-float-btn:active {
        background-color: var(--primary-dark);
        box-shadow: 0 2px 4px var(--shadow-color);transform: translateY(0);
    }

    .fq-float-btn svg {
        width: 24px;
        height: 24px;
        fill: white;
    }

    /*浮动面板 */
    .fq-panel {
        position: fixed;
        bottom: 100px;
        right: 30px;
        width: 360px;
        max-height: 500px;
        background-color: var(--surface-color);
        border-radius: var(--border-radius);
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
        z-index: 9998;
        overflow: hidden;
        transform-origin: bottom right;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);opacity: 0;transform: scale(0.8);
        pointer-events: none;
        font-family: var(--font-family);
    }

    .fq-panel.active {
        opacity: 1;
        transform: scale(1);
        pointer-events: all;
    }

    /* 面板头部 */
    .fq-panel-header {
        padding: 16px 20px;
        border-bottom: 1px solid var(--surface-variant);
        display: flex;
        align-items: center;
        justify-content: space-between;}

    .fq-panel-title {
        font-size: 18px;
        font-weight: 600;
        color: var(--on-surface-color);
        margin: 0;
    }

    .fq-panel-close {
        width: 32px;
        height: 32px;
        border-radius: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        background-color: transparent;
        transition: background-color 0.2s;
    }

    .fq-panel-close:hover {
        background-color: var(--surface-variant);
    }

    .fq-panel-close svg {
        width: 20px;
        height: 20px;
        fill: var(--on-surface-variant);
    }

    /* 标签栏 */
    .fq-tabs {
        display: flex;
        border-bottom: 1px solid var(--surface-variant);
    }

    .fq-tab {
        padding: 12px 16px;
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
        color: var(--on-surface-variant);
        position: relative;
        transition: color 0.2s;
    }

    .fq-tab.active {
        color: var(--primary-color);
    }

    .fq-tab.active::after {
        content: '';
        position: absolute;
        bottom: -1px;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: var(--primary-color);
    }

    /* 内容区域 */
    .fq-panel-content {
        padding: 16px 20px;
        max-height: 380px;
        overflow-y: auto;
    }

    .fq-tab-content {
        display: none;
    }

    .fq-tab-content.active {
        display: block;
    }

    /* 卡片样式 */
    .fq-card {
        background-color: var(--surface-color);
        border-radius:12px;
        padding: 16px;
        margin-bottom: 16px;box-shadow: 0 1px 3px var(--shadow-color);
        border: 1px solid var(--surface-variant);}

    .fq-card-title {
        font-size: 16px;
        font-weight: 600;
        color: var(--on-surface-color);
        margin: 0 0 12px 0;
    }

    /* 按钮样式 */
    .fq-button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        height: 36px;
        padding: 0 16px;
        border-radius: 18px;
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.2s;
        border: none;
        box-sizing: border-box;
    }

    .fq-button-primary {
        background-color: var(--primary-color);
        color: white;
    }

    .fq-button-primary:hover {
        background-color: var(--primary-light);
        box-shadow: 0 1px 3px var(--shadow-color);
    }

    .fq-button-outlined {
        background-color: transparent;
        border: 1px solid var(--outline-color);
        color: var(--on-surface-color);
    }

    .fq-button-outlined:hover {
        background-color: var(--surface-variant);}

    .fq-button[disabled] {
        opacity: 0.5;
        cursor: not-allowed;
    }

    .fq-button + .fq-button {
        margin-left: 8px;
    }

    /* 表单控件 */
    .fq-form-group {
        margin-bottom: 16px;
    }

    .fq-form-group label {
        display: block;
        font-size: 14px;
        color: var(--on-surface-variant);
        margin-bottom: 6px;
    }

    .fq-select {
        width: 100%;
        height: 40px;
        border-radius: 8px;
        border: 1px solid var(--outline-color);
        padding: 0 12px;
        font-size: 14px;
        color: var(--on-surface-color);
        appearance: none;
        background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="%2379747e" d="M7 10l5 5 5-5z"/></svg>');
        background-repeat: no-repeat;
        background-position: right 12px center;
        background-size: 24px;
        transition: border-color 0.2s;
    }

    .fq-select:focus {
        outline: none;
        border-color: var(--primary-color);
    }

    .fq-select option {
        font-size: 14px;
        padding: 8px;
    }

    /* 日志和状态 */
    .fq-log-item {
        padding: 10px 0;
        border-bottom: 1px solid var(--surface-variant);
        font-size: 14px;}

    .fq-log-item:last-child {
        border-bottom: none;
    }

    .fq-status {
        display: inline-block;
        padding: 2px 8px;
        border-radius: 4px;
        font-size: 12px;
        font-weight: 500;
    }

    .fq-status-success {
        background-color: rgba(76, 175, 80, 0.1);
        color: var(--success-color);
    }

    .fq-status-error {
        background-color: rgba(244, 67, 54, 0.1);
        color: var(--error-color);
    }

    .fq-status-pending {
        background-color: rgba(33, 150, 243, 0.1);
        color: var(--info-color);
    }

    .fq-status-warning {
        background-color: rgba(255, 152, 0, 0.1);
        color: var(--warning-color);
    }

    /* 进度条 */
    .fq-progress {
        width: 100%;
        height: 4px;
        background-color: var(--surface-variant);
        border-radius: 2px;
        overflow: hidden;margin: 12px 0;
    }

    .fq-progress-bar {
        height: 100%;
        background-color: var(--primary-color);
        border-radius: 2px;
        transition: width 0.3s;
    }

    /* 下载历史表格*/
    .fq-history-table {
        width: 100%;
        border-collapse: collapse;
        font-size: 14px;
    }

    .fq-history-table th,
    .fq-history-table td {
        padding: 8px 12px;
        text-align: left;
        border-bottom: 1px solid var(--surface-variant);
    }

    .fq-history-table th {
        color: var(--on-surface-variant);
        font-weight: 500;
    }

    /* 关于页面样式 */
    .fq-about-section {
        margin-bottom: 20px;
    }

    .fq-about-section h3 {
        font-size: 16px;
        color: var(--primary-color);
        margin-bottom: 10px;
    }

    .fq-about-section p {
        margin: 8px 0;
        font-size: 14px;
        line-height: 1.6;
    }

    .fq-about-section ul {
        padding-left: 20px;margin: 8px 0;
    }

    .fq-about-section li {
        margin-bottom: 4px;
    }

    .fq-donation-qr {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        justify-content: center;
        margin-top: 12px;
    }

    .fq-donation-item {
        text-align: center;
        width: 120px;
    }

    .fq-donation-item img {
        width: 100%;
        border-radius: 8px;
        border: 1px solid var(--surface-variant);
    }

    .fq-donation-item p {
        margin: 5px 0;
        font-size: 12px;
    }

    /* 动画效果 */
    @keyframes fade-in {
        from { opacity: 0; }
        to { opacity: 1; }
    }

    @keyframes scale-in {
        from { transform: scale(0.8); opacity: 0; }
        to { transform: scale(1); opacity: 1; }
    }

        /* 线程状态样式 */
        .fq-progress-text small {
            display: block;
            font-size: 11px;
            color: var(--on-surface-variant);
            margin-top: 5px;
            overflow-wrap: break-word;
        }
    /* 清除按钮样式 */
    .fq-clear-btn {
        background: none;
        border: none;
        color: var(--primary-color);
        cursor: pointer;font-size: 14px;
        padding: 0;text-decoration: underline;float: right;margin-top: -22px;}


    @keyframes spin {
        to {transform: rotate(360deg);}
    }
`);

// FqCrypto class for encryption/decryption
class FqCrypto {
    constructor(key) {
        this.key = this.hexToBytes(key);
        if (this.key.length !== 16) {
            throw new Error(`Invalid key length! Expected 16 bytes, got ${this.key.length}`);
        }
        this.cipherMode = { name: 'AES-CBC' };
    }

    hexToBytes(hex) {
        const bytes = [];
        for (let i = 0; i < hex.length; i += 2) {
            bytes.push(parseInt(hex.substr(i, 2), 16));
        }
        return new Uint8Array(bytes);
    }

    bytesToHex(bytes) {
        return Array.from(bytes).map(b => b.toString(16).padStart(2, '0')).join('');
    }

    async encrypt(data, iv) {
        const cryptoKey = await crypto.subtle.importKey(
            'raw',
            this.key,
            { name: 'AES-CBC' },
            false,
            ['encrypt']
        );
        const encrypted = await crypto.subtle.encrypt(
            { name: 'AES-CBC', iv },
            cryptoKey,
            this.pkcs7Pad(data)
        );
        return new Uint8Array(encrypted);
    }

    async decrypt(data) {
        const iv = data.slice(0, 16);
        const ct = data.slice(16);
        const cryptoKey = await crypto.subtle.importKey(
            'raw',
            this.key,
            { name: 'AES-CBC' },
            false,
            ['decrypt']
        );
        const decrypted = await crypto.subtle.decrypt(
            { name: 'AES-CBC', iv },
            cryptoKey,
            ct
        );
        return this.pkcs7Unpad(new Uint8Array(decrypted));
    }

    pkcs7Pad(data) {
        const blockSize = 16;
        const padding = blockSize - (data.length % blockSize);
        const padded = new Uint8Array(data.length + padding);
        padded.set(data);
        for (let i = data.length; i < padded.length; i++) {
            padded[i] = padding;
        }
        return padded;
    }

    pkcs7Unpad(data) {
        const padding = data[data.length - 1];
        if (padding > 16) return data;
        for (let i = data.length - padding; i < data.length; i++) {
            if (data[i] !== padding) return data;
        }
        return data.slice(0, data.length - padding);
    }

    async generateRegisterContent(deviceId, strVal = "0") {
        if (!/^\d+$/.test(deviceId) || !/^\d+$/.test(strVal)) {
            throw new Error("Invalid device ID or value");
        }
        const deviceIdBytes = new Uint8Array(8);
        const deviceIdNum = BigInt(deviceId);
        for (let i = 0; i < 8; i++) {
            deviceIdBytes[i] = Number((deviceIdNum >> BigInt(i * 8)) & BigInt(0xFF));
        }
        const strValBytes = new Uint8Array(8);
        const strValNum = BigInt(strVal);
        for (let i = 0; i < 8; i++) {
            strValBytes[i] = Number((strValNum >> BigInt(i * 8)) & BigInt(0xFF));
        }
        const combined = new Uint8Array([...deviceIdBytes, ...strValBytes]);
        const iv = crypto.getRandomValues(new Uint8Array(16));
        const encrypted = await this.encrypt(combined, iv);
        const result = new Uint8Array([...iv, ...encrypted]);
        return btoa(String.fromCharCode(...result));
    }
}

// API Client class
class FqClient {
    constructor(config) {
        this.config = config;
        this.crypto = new FqCrypto(config.REG_KEY);this.dynamicKey = null;this.keyExpireTime = 0;
        this.logger = new EventLogger();
    }

    async getContentKeys(itemIds) {
        this.logger.log(`正在获取章节ID: ${itemIds}的内容密钥...`, 'pending');
        const itemIdsStr = Array.isArray(itemIds) ? itemIds.join(',') : itemIds;
        try {
            const result = await this._apiRequest(
                "GET",
                "/reading/reader/batch_full/v",
                {
                    item_ids: itemIdsStr,
                    req_type: "1",
                    aid: this.config.AID,update_version_code: this.config.VERSION_CODE
                }
            );
            this.logger.log(`获取章节内容密钥成功`, 'success');
            return result;
        } catch (error) {
            this.logger.log(`获取章节内容密钥失败: ${error.message}`, 'error');
            throw error;
        }
    }

    async getDecryptionKey() {
        const now = Date.now();
        if (this.dynamicKey && this.keyExpireTime > now) {
            return this.dynamicKey;
        }
        this.logger.log('获取新的解密密钥...', 'pending');
        try {
            const content = await this.crypto.generateRegisterContent(this.config.SERVER_DEVICE_ID);
            const payload = {
                content: content,
                keyver: 1
            };
            const result = await this._apiRequest(
                "POST",
                "/reading/crypt/registerkey",
                { aid: this.config.AID },
                payload
            );
            const encryptedKey = Uint8Array.from(atob(result.data.key), c => c.charCodeAt(0));
            const decryptedKey = await this.crypto.decrypt(encryptedKey);
            this.dynamicKey = this.crypto.bytesToHex(decryptedKey);
            this.keyExpireTime = now + 3600000;
            this.logger.log('获取解密密钥成功', 'success');
            return this.dynamicKey;
        } catch (error) {
            this.logger.log(`获取解密密钥失败: ${error.message}`, 'error');
            throw error;
        }
    }

    async _apiRequest(method, endpoint, params = {}, data = null) {
        const url = new URL(`https://api5-normal-sinfonlineb.fqnovel.com${endpoint}`);
        Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
        const headers = {
            "Cookie": `install_id=${this.config.INSTALL_ID}`,
            "User-Agent": "okhttp/4.9.3"
        };
        if (data) {
            headers["Content-Type"] = "application/json";}
        return new Promise((resolve, reject) => {
            GM_xmlhttpRequest({
                method: method,
                url: url.toString(),
                headers: headers,
                data: data ? JSON.stringify(data) : undefined,
                onload: (response) => {
                    if (response.status >= 200 && response.status < 300) {
                        try {
                            resolve(JSON.parse(response.responseText));
                        } catch (e) {
                            reject(new Error(`解析响应失败: ${e.message}`));
                        }
                    } else {
                        reject(new Error(`API请求失败，状态码: ${response.status}`));
                    }
                },
                onerror: (error) => {
                    reject(new Error(`API请求错误: ${error.error}`));
                },
                timeout: 10000
            });
        });
    }

    async decryptContent(encryptedContent) {
        this.logger.log('开始解密内容...', 'pending');
        try {
            const dynamicKey = await this.getDecryptionKey();
            const contentCrypto = new FqCrypto(dynamicKey);
            const decoded = Uint8Array.from(atob(encryptedContent), c => c.charCodeAt(0));
            const decrypted = await contentCrypto.decrypt(decoded);
            const decompressed = await this.gunzip(decrypted);
            const content = new TextDecoder().decode(decompressed);
            this.logger.log('内容解密成功', 'success');
            return content;
        } catch (error) {
            this.logger.log(`内容解密失败: ${error.message}`, 'error');
            throw error;
        }
    }

    async gunzip(data) {
        const ds = new DecompressionStream('gzip');
        const writer = ds.writable.getWriter();
        writer.write(data);
        writer.close();
        return new Response(ds.readable).arrayBuffer().then(arrayBuffer => new Uint8Array(arrayBuffer));
    }
}

// 事件日志记录器
class EventLogger {
    constructor() {
        this.logs = [];
        this.listeners = [];
    }

    log(message, status = 'info') {
        const logEntry = {
            id: Date.now(),
            message,
            status,
            timestamp: new Date()
        };
        this.logs.push(logEntry);
        // 保留最新的50条日志
        if (this.logs.length > 50) {
            this.logs.shift();
        }
        this.notifyListeners(logEntry);return logEntry;
    }

    clear() {
        this.logs = [];
        this.notifyListeners({ clear: true });
    }

    getLogs() {
        return [...this.logs];
    }

    addListener(callback) {
        this.listeners.push(callback);return () => {
            this.listeners = this.listeners.filter(listener => listener !== callback);
        };
    }

    notifyListeners(logEntry) {
        this.listeners.forEach(listener => listener(logEntry));
    }
}

// 任务历史管理器
class TaskHistory {
    constructor() {
        this.tasks = this.loadFromStorage() || [];
        this.listeners = [];
    }

    addTask(task) {
        this.tasks.unshift(task);
        // 保留最新的20条任务记录
        if (this.tasks.length > 20) {
            this.tasks.pop();
        }
        this.saveToStorage();
        this.notifyListeners();
        return task;
    }

    updateTask(taskId, updates) {
        const taskIndex = this.tasks.findIndex(task => task.id === taskId);
        if (taskIndex !== -1) {
            this.tasks[taskIndex] = { ...this.tasks[taskIndex], ...updates };
            this.saveToStorage();
            this.notifyListeners();return this.tasks[taskIndex];
        }
        return null;
    }

    getTasks() {
        return [...this.tasks];
    }

    clear() {
        this.tasks = [];
        this.saveToStorage();
        this.notifyListeners();
    }

    loadFromStorage() {
        try {
            const tasksJson = localStorage.getItem('fanqie_download_tasks');
            return tasksJson ? JSON.parse(tasksJson) : null;
        } catch (e) {
            console.error('无法加载任务历史:', e);
            return null;
        }
    }

    saveToStorage() {
        try {
            localStorage.setItem('fanqie_download_tasks', JSON.stringify(this.tasks));
        } catch (e) {
            console.error('无法保存任务历史:', e);
        }
    }

    addListener(callback) {
        this.listeners.push(callback);
        return () => {
            this.listeners = this.listeners.filter(listener => listener !== callback);
        };
    }

    notifyListeners() {
        this.listeners.forEach(listener => listener());
    }
}

// 通用处理函数
function processChapterContent(content) {
    // 清理内容
    const cleanContent = content
        .replace(/<header>.*?<\/header>/g, '') // 移除标题
        .replace(/<footer>.*?<\/footer>/g, '') // 移除页脚
        .replace(/<article>/g, '') // 移除文章开始标签
        .replace(/<\/article>/g, '') // 移除文章结束标签
        .replace(/<p>/g, '') // 移除段落开始标签
        .replace(/<\/p>/g, '\n') // 将段落结束标签替换为换行
        .replace(/&nbsp;/g, ' ') // 替换HTML空格
        .replace(/&lt;/g, '<') // 替换HTML实体
        .replace(/&gt;/g, '>')
        .replace(/&amp;/g, '&')
        .replace(/&quot;/g, '"')
        .replace(/\n\s*\n/g, '\n') // 移除连续多个换行
        .replace(/^\s+|\s+$/gm, ''); // 修剪每行前后空白

    // 处理段落并添加缩进
    return cleanContent
        .split('\n')
        .filter(para => para.trim()) // 移除空段落
        .map(para => '　' + para.trim()) // 添加两个全角空格作为缩进
        .join('\n');
}

function processContentForDownload(content) {
    // 从内容提取章节标题
    const titleMatch = content.match(/<title>(.+?)<\/title>/);
    let title = titleMatch ? titleMatch[1] : '';
    title = title.replace(/在线免费阅读_番茄小说官网$/, '');

    // 使用通用函数处理内容
    const processedContent = processChapterContent(content);

    // 合并标题和内容，添加适当格式
    return `${title}\n${processedContent}`.trim();
}

// UI 组件类
class FanqieUI {
    constructor(client) {
        this.client = client;
        this.logger = client.logger;
        this.taskHistory = new TaskHistory();
        this.isPanelActive = false;this.activeTab = 'download';
        this.downloadFormat = 'txt';
        this.charset = 'UTF-8';
        this.downloadQueue = [];
        this.isDownloading = false;
        this.currentTaskId = null;
        this.progress = 0;
        this.totalChapters = 0;
        this.downloadThreads = 1;
        // 创建浮动按钮
        this.createFloatingButton();

        // 创建面板
        this.createPanel();

        // 添加日志监听器
        this.logger.addListener(this.updateLogs.bind(this));

        // 添加任务历史监听器
        this.taskHistory.addListener(this.updateHistory.bind(this));
    }

    createFloatingButton() {
        const button = document.createElement('button');
        button.className = 'fq-float-btn';
        button.innerHTML = `
            <svg viewBox="0 0 24 24">
                <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M12,10.5A1.5,1.5 0 0,1 13.5,12A1.5,1.5 0 0,1 12,13.5A1.5,1.5 0 0,1 10.5,12A1.5,1.5 0 0,1 12,10.5M7.5,10.5A1.5,1.5 0 0,1 9,12A1.5,1.5 0 0,1 7.5,13.5A1.5,1.5 0 0,1 6,12A1.5,1.5 0 0,1 7.5,10.5M16.5,10.5A1.5,1.5 0 0,1 18,12A1.5,1.5 0 0,1 16.5,13.5A1.5,1.5 0 0,1 15,12A1.5,1.5 0 0,1 16.5,10.5Z" />
            </svg>`;
        button.addEventListener('click', () => this.togglePanel());document.body.appendChild(button);this.floatBtn = button;
    }

    createPanel() {
        const panel = document.createElement('div');
        panel.className = 'fq-panel';
        panel.innerHTML = `
            <div class="fq-panel-header">
                <h3class="fq-panel-title">番茄小说助手</h3>
                <div class="fq-panel-close">
                    <svg viewBox="0 0 24 24">
                        <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
                    </svg>
                </div>
            </div>

            <div class="fq-tabs">
                <div class="fq-tab active" data-tab="download">下载</div>
                <div class="fq-tab" data-tab="logs">日志</div>
                <div class="fq-tab" data-tab="history">历史</div><div class="fq-tab" data-tab="about">关于</div>
            </div>

            <div class="fq-panel-content">
                <!-- 下载设置标签页 -->
                <div class="fq-tab-content active" id="download-tab">
                    <div class="fq-card">
                        <h4class="fq-card-title">下载选项</h4>
                        <div class="fq-form-group">
                            <label for="format-select">选择格式</label>
                            <select id="format-select" class="fq-select">
                                <option value="txt">TXT文本</option>
                                <option value="html">HTML网页</option>
                            </select>
                        </div>
              
<div class="fq-form-group">
    <label for="thread-select">下载线程数</label>
    <select id="thread-select" class="fq-select">
        <option value="1">1</option>
        <option value="3">3</option>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="50">50</option>
    </select>
</div>
                        <div class="fq-form-group">
                            <label for="charset-select">文件编码</label>
                            <select id="charset-select" class="fq-select"><option value="UTF-8">UTF-8</option>
                                <option value="GBK">GBK</option>
                                <option value="UNICODE">UNICODE</option>
                <option value="UTF-16">UTF-16</option>
                <option value="ASCII">ASCII</option>
                            </select>
                        </div>
                        <div class="fq-form-group" id="download-buttons">
                            <!-- 动态添加按钮 -->
                </div>
                    </div><div class="fq-card" id="progress-card" style="display: none;">
                        <h4 class="fq-card-title">下载进度</h4>
                        <div class="fq-progress"><div class="fq-progress-bar" style="width: 0%"></div>
                        </div>
                        <p class="fq-progress-text">0%</p></div>
                </div>

                <!-- 日志标签页 -->
                <div class="fq-tab-content" id="logs-tab">
                    <button class="fq-clear-btn">清空日志</button>
                    <div id="log-container"></div>
                </div>
                <!-- 历史标签页 -->
                <div class="fq-tab-content" id="history-tab">
                    <button class="fq-clear-btn">清空历史</button>
                    <table class="fq-history-table">
                        <thead>
                            <tr>
                                <th>名称</th><th>格式</th><th>时间</th><th>状态</th></tr>
                        </thead><tbody id="history-container"></tbody>
                    </table>
                </div>

                <!-- 关于标签页 -->
                <div class="fq-tab-content" id="about-tab">
                    <div class="fq-about-section">
                        <h3>关于插件</h3>
                        <p>番茄小说免费网页阅读工具，可在网页端解锁付费内容、下载小说。</p><p>版本：7.0.1</p><p>作者：ibxff, SmashPhoenix272，wenmoux</p>
                        <p>许可：MIT License</p>
                    </div>

                    <div class="fq-about-section">
                        <h3>功能介绍</h3>
                        <ul>
                            <li>解锁并阅读番茄小说的付费章节</li><li>支持整书下载，格式包括TXT和HTML</li><li>自定义文件编码</li>
                            <li>下载历史记录</li>
                </ul>
                    </div>
                    <div class="fq-about-section">
                        <h3>致谢</h3>
                        <p>感谢以下开源项目的支持：</p>
                        <ul>
                            <li>FileSaver.js</li>
                            <li>JSZip</li>
                        </ul><p>以及所有为本项目提供反馈和建议的用户。</p>
                    </div><div class="fq-about-section">
                        <h3>赞助支持</h3>
                        <p>如果您觉得本工具有用，欢迎赞助作者一杯咖啡:</p><div class="fq-donation-qr">
                            <!-- 这里可以放置赞助二维码 --><div class="fq-donation-item">
                                <p>微信赞赏码</p></div>
                            <div class="fq-donation-item">
                                <p>支付宝</p>
                            </div></div>
                    </div>
                </div>
            </div>
        `;document.body.appendChild(panel);this.panel = panel;

        // 添加事件监听器
        this.addEventListeners();

        // 更新历史和日志
        this.updateHistory();
        this.updateLogs();

        // 根据当前页面设置合适的下载按钮
        this.setupButtonsByPage();
    }

    addEventListeners() {
        // 关闭按钮
        this.panel.querySelector('.fq-panel-close').addEventListener('click', () => this.togglePanel());
        this.panel.querySelector('#thread-select').addEventListener('change', (e) => {
            this.downloadThreads = parseInt(e.target.value, 10);
        });
        // 标签切换
        this.panel.querySelectorAll('.fq-tab').forEach(tab => {
            tab.addEventListener('click', (e) => {
                this.activeTab = e.target.dataset.tab;
                this.panel.querySelectorAll('.fq-tab').forEach(t => t.classList.remove('active'));
                this.panel.querySelectorAll('.fq-tab-content').forEach(t => t.classList.remove('active'));
                e.target.classList.add('active');
                this.panel.querySelector(`#${this.activeTab}-tab`).classList.add('active');
            });
        });

        // 格式选择器
        this.panel.querySelector('#format-select').addEventListener('change', (e) => {
            this.downloadFormat = e.target.value;});

        // 编码选择器
        this.panel.querySelector('#charset-select').addEventListener('change', (e) => {
            this.charset = e.target.value;
        });

        // 清空日志按钮
        this.panel.querySelector('#logs-tab .fq-clear-btn').addEventListener('click', () => {
            this.logger.clear();
        });

        // 清空历史按钮
        this.panel.querySelector('#history-tab .fq-clear-btn').addEventListener('click', () => {
            this.taskHistory.clear();
        });
    }

    togglePanel() {
        this.isPanelActive = !this.isPanelActive;
        if (this.isPanelActive) {
            this.panel.classList.add('active');} else {
            this.panel.classList.remove('active');
        }
    }

    updateLogs(logEntry) {
        const logContainer = this.panel.querySelector('#log-container');

        if (logEntry && logEntry.clear) {
            logContainer.innerHTML = '';
            return;
        }

        // 如果没有特定日志条目，则更新所有日志
        if (!logEntry) {
            const logs = this.logger.getLogs();
            logContainer.innerHTML = '';
            logs.forEach(log => {
                this.addLogEntry(logContainer, log);
            });
            return;
        }

        // 添加新日志条目
        this.addLogEntry(logContainer, logEntry);

        // 滚动到最新日志
        logContainer.scrollTop = logContainer.scrollHeight;
    }

    addLogEntry(container, log) {
        const logItem = document.createElement('div');
        logItem.className = `fq-log-item`;

        const time = new Date(log.timestamp).toLocaleTimeString();
        const statusClass = `fq-status fq-status-${log.status}`;

        logItem.innerHTML = `
            <span class="${statusClass}">${log.status}</span>
            <span class="fq-log-time">[${time}]</span>
            <span class="fq-log-message">${log.message}</span>
        `;

        container.prepend(logItem);
    }

    updateHistory() {
        const historyContainer = this.panel.querySelector('#history-container');
        const tasks = this.taskHistory.getTasks();

        historyContainer.innerHTML = '';

        if (tasks.length === 0) {
            const emptyRow = document.createElement('tr');
            emptyRow.innerHTML = `<td colspan="4" style="text-align: center;">无下载历史</td>`;
            historyContainer.appendChild(emptyRow);
            return;
        }

        tasks.forEach(task => {
            const row = document.createElement('tr');
            const time = new Date(task.timestamp).toLocaleString();
            const statusClass = `fq-status fq-status-${task.status}`;

            row.innerHTML = `
                <td>${task.title}</td>
                <td>${task.format}</td>
                <td>${time}</td>
                <td><span class="${statusClass}">${this.getStatusText(task.status)}</span></td>
            `;

            historyContainer.appendChild(row);
        });
    }

    getStatusText(status) {
        switch (status) {
            case 'success': return '成功';
            case 'error': return '失败';
            case 'pending': return '进行中';
            default: return status;
        }
    }
    // 修改 updateProgress 方法
    updateProgress(current, total, threadsInfo = '') {
        if (!total) return;
    
        const progressCard = this.panel.querySelector('#progress-card');
        const progressBar = this.panel.querySelector('.fq-progress-bar');
        const progressText = this.panel.querySelector('.fq-progress-text');
    
        this.progress = Math.round((current / total) * 100);
    
        progressCard.style.display = 'block';
        progressBar.style.width = `${this.progress}%`;
        
        if (threadsInfo) {
            progressText.innerHTML = `${this.progress}%（${current}/${total}章）<br><small>${threadsInfo}</small>`;
        } else {
            progressText.textContent = `${this.progress}%（${current}/${total}章）`;
        }
    }

    resetProgress() {
        const progressCard = this.panel.querySelector('#progress-card');
        const progressBar = this.panel.querySelector('.fq-progress-bar');
        const progressText = this.panel.querySelector('.fq-progress-text');

        this.progress = 0;
        progressCard.style.display = 'none';
        progressBar.style.width = '0%';
        progressText.textContent = '0%';
    }

    setupButtonsByPage() {
        const path = window.location.href.match(/\/([^/]+)\/\d/)?.[1];
        const buttonContainer = this.panel.querySelector('#download-buttons');
        buttonContainer.innerHTML = '';

        if (path ==='reader') {
            //阅读页面：显示"下载当前章节"、"解锁并阅读"按钮
            const readButton = document.createElement('button');
            readButton.className = 'fq-button fq-button-primary';
            readButton.textContent = '解锁并阅读';
            readButton.addEventListener('click', () => this.unlockCurrentChapter());
            buttonContainer.appendChild(readButton);

            const downloadButton = document.createElement('button');
            downloadButton.className = 'fq-button fq-button-outlined';
            downloadButton.textContent = '下载当前章节';
            downloadButton.addEventListener('click', () => this.downloadCurrentChapter());
            buttonContainer.appendChild(downloadButton);
        } else if (path === 'page') {
            // 书籍页面：显示"下载全书"按钮
            const downloadAllButton = document.createElement('button');
            downloadAllButton.className = 'fq-button fq-button-primary';
            downloadAllButton.textContent = '下载全书';
            downloadAllButton.addEventListener('click', () => this.downloadFullBook());
            buttonContainer.appendChild(downloadAllButton);
        }
    }



    // 以下是功能方法

    async unlockCurrentChapter() {
        try {
            const url = window.location.href;
            const match = url.match(/\/(\d+)/);
            if (!match) {
                this.logger.log('无法识别章节ID', 'error');
                return;
            }

            const chapterId = match[1];
            this.logger.log(`正在解锁章节 ${chapterId}...`, 'pending');

            const response = await this.client.getContentKeys(chapterId);

            if (!response.data || !response.data[chapterId]) {
                throw new Error('找不到章节内容');
            }

            const decrypted = await this.client.decryptContent(response.data[chapterId].content);

            // 处理页面元素
            let cdiv = document.getElementsByClassName('muye-reader-content noselect')[0];
            if (cdiv) {
                cdiv.classList = cdiv.classList[0];
            } else {
                const html0 = document.getElementById('html_0');
                if (!html0) {
                    throw new Error('找不到内容容器');
                }
                cdiv = html0.children[2] || html0.children[0];if (!cdiv) {
                    throw new Error('找不到内容容器');
                }
            }

            document.getElementsByClassName('muye-to-fanqie')[0]?.remove();
            document.getElementsByClassName('pay-page')[0]?.remove();
            cdiv.innerHTML = decrypted;document.getElementById('html_0')?.classList.remove('pay-page-html');

            this.logger.log('章节解锁成功', 'success');this.togglePanel();
        } catch (error) {
            this.logger.log(`解锁章节失败: ${error.message}`, 'error');
        }
    }

    async downloadCurrentChapter() {
        try {
            const url = window.location.href;
            const match = url.match(/\/(\d+)/);
            if (!match) {
                this.logger.log('无法识别章节ID', 'error');
                return;
            }

            const chapterId = match[1];
            this.logger.log(`正在下载章节 ${chapterId}...`, 'pending');

            // 创建任务记录
            const taskId = Date.now();
            const taskTitle = document.title.replace(/在线免费阅读_番茄小说官网$/, '');
            this.currentTaskId = taskId;

            const task = this.taskHistory.addTask({
                id: taskId,
                title: taskTitle,
                format: this.downloadFormat,
                timestamp: Date.now(),
                status: 'pending',type: 'chapter'
            });

            const response = await this.client.getContentKeys(chapterId);

            if (!response.data || !response.data[chapterId]) {
                throw new Error('找不到章节内容');
            }
            const decrypted = await this.client.decryptContent(response.data[chapterId].content);
            const chapterData = response.data[chapterId];

            // 根据选择的格式生成文件
            if (this.downloadFormat === 'txt') {
                const content = processContentForDownload(decrypted);
                const blob = new Blob([content], { type: `text/plain;charset=${this.charset}` });
                saveAs(blob, `${taskTitle}.txt`);
            } else if (this.downloadFormat === 'html') {
                // 处理HTML格式
                const htmlContent = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${taskTitle}</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0 auto;
            max-width: 800px;padding: 20px;
        }
        h1 {
            text-align: center;
            color: #333;}
        p {
            text-indent: 2em;
            margin: 0.8em 0;
        }
    </style>
</head>
<body>
    <h1>${taskTitle}</h1>
    ${decrypted}
</body>
</html>`;

                const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
                saveAs(blob, `${taskTitle}.html`);
            }

            // 更新任务状态
            this.taskHistory.updateTask(taskId, { status: 'success' });
            this.logger.log('章节下载成功', 'success');

            // 自动关闭面板
            setTimeout(() => {
                if (this.isPanelActive) this.togglePanel();
            }, 1500);} catch (error) {
            this.logger.log(`下载章节失败: ${error.message}`, 'error');if (this.currentTaskId) {
                this.taskHistory.updateTask(this.currentTaskId, { status: 'error' });
            }
        }
    }
    async downloadFullBook() {
        if (this.isDownloading) {
            this.logger.log('已有下载任务正在进行', 'warning');
            return;
        }
    
        try {
            this.isDownloading = true;
    
            // 获取书籍信息
            const infoName = document.querySelector("#app > div > div.muye.muye-page > div > div.page-wrap > div > div.page-header-info > div.info > div.info-name > h1")?.innerHTML;
            const authorName = document.querySelector(".author-name-text")?.innerHTML;
            const totalChaptersText = document.querySelector(".page-directory-header h3")?.textContent.match(/(\d+)章/)?.[1] || '';
            const infoLabels = Array.from(document.querySelectorAll('.info-label span')).map(span => span.textContent).join(' ');
            const wordCount = document.querySelector('.info-count-word')?.textContent.trim();
            const lastUpdate = document.querySelector('.info-last')?.textContent.trim();
            const abstract = document.querySelector("#app > div > div.muye.muye-page > div > div.page-body-wrap > div > div.page-abstract-content > p")?.innerHTML;
    
            if (!infoName) {
                throw new Error('无法获取书籍信息');
            }
    
            // 创建任务记录
            const taskId = Date.now();
            this.currentTaskId = taskId;
            const task = this.taskHistory.addTask({
                id: taskId,
                title: infoName,
                format: this.downloadFormat,
                timestamp: Date.now(),
                status: 'pending',
                type: 'book'
            });
    
            // 获取所有章节链接
            const chapterElements = Array.from(document.getElementsByClassName('chapter-item'));
            this.totalChapters = chapterElements.length;
    
            if (this.totalChapters === 0) {
                throw new Error('未找到章节列表');
            }
    
            const threadCount = this.downloadThreads || 1;
            this.logger.log(`开始下载《${infoName}》共${this.totalChapters}章，使用${threadCount}线程下载`, 'pending');
    
            // 准备元数据
            let metadata = {
                title: infoName,
                author: authorName || '未知作者',
                description: abstract || '暂无简介',
                chapters: []
            };
    
            // 内容收集
            let content = `使用Fanqie Novel免费助手下载\n\n` +
                        `书名：${infoName}\n` +
                        `作者：${authorName || '未知'}\n` +
                        `标签：${infoLabels || '无'}\n` +
                        `字数：${wordCount || '未知'}\n` +
                        `更新：${lastUpdate || '未知'}\n\n` +
                        `简介：${abstract || '暂无简介'}\n\n`;
    
            content = content.replace(/undefined|null|NaN/g, '');
    
            // 筛选有效章节
            const validChapters = chapterElements.filter(ele => {
                const link = ele.querySelector('a');
                return link && link.href && link.href.match(/\/(\d+)/);
            });
    
            // 进度追踪变量
            let downloadedCount = 0;
            let downloadedChapters = new Map();
            let threadStatus = Array(threadCount).fill().map(() => ({ 
                current: '等待中', 
                completed: 0, 
                failed: 0 
            }));
            
            // 进度条更新函数
            const updateProgressDisplay = () => {
                const progressPercent = Math.round((downloadedCount / this.totalChapters) * 100);
                const progressBar = this.panel.querySelector('.fq-progress-bar');
                const progressText = this.panel.querySelector('.fq-progress-text');
                
                progressBar.style.width = `${progressPercent}%`;
                
                // 生成线程状态信息
                let threadInfo = threadStatus.map((status, i) => 
                    `线程${i+1}: ${status.completed}章✓ ${status.failed}章✗ ${status.current}`
                ).join('<br>');
                
                progressText.innerHTML = 
                    `总进度: ${progressPercent}%（${downloadedCount}/${this.totalChapters}章）` +
                    `<br><span class="fq-thread-status">${threadInfo}</span>`;
                    
                // 显示进度卡片
                this.panel.querySelector('#progress-card').style.display = 'block';
            };
    
            // 均匀分配任务给各线程
            const assignTasksToThreads = (tasks, threadCount) => {
                const result = Array(threadCount).fill().map(() => []);
                tasks.forEach((task, index) => {
                    result[index % threadCount].push(task);
                });
                return result;
            };
            
            // 分配章节给各线程
            const threadTasks = assignTasksToThreads(validChapters, threadCount);
            
            // 单个线程的下载函数
            const downloadByThread = async (chapters, threadId) => {
                const results = [];
                
                for (let i = 0; i < chapters.length; i++) {
                    const ele = chapters[i].querySelector('a');
                    if (!ele || !ele.href) continue;
                    
                    const match = ele.href.match(/\/(\d+)/);
                    if (!match) continue;
                    
                    const chapterId = match[1];
                    const chapterTitle = ele.textContent.trim();
                    
                    // 更新线程状态
                    threadStatus[threadId].current = chapterTitle;
                    updateProgressDisplay();
                    
                    try {
                        this.logger.log(`线程${threadId+1} 下载章节: ${chapterTitle}`, 'pending');
                        
                        // 获取章节内容
                        const response = await this.client.getContentKeys(chapterId);
                        
                        if (!response.data || !response.data[chapterId]) {
                            throw new Error(`找不到章节内容`);
                        }
                        
                        // 解密内容
                        const decrypted = await this.client.decryptContent(response.data[chapterId].content);
                        
                        // 处理章节内容
                        const processedContent = processChapterContent(decrypted);
                        
                        // 保存结果
                        const chapterResult = {
                            id: chapterId,
                            index: parseInt(chapterId, 10),
                            title: chapterTitle,
                            content: decrypted,
                            textContent: processedContent
                        };
                        
                        results.push(chapterResult);
                        downloadedChapters.set(chapterId, chapterResult);
                        
                        downloadedCount++;
                        threadStatus[threadId].completed++;
                        this.logger.log(`线程${threadId+1} 章节: ${chapterTitle} 下载成功`, 'success');
                        
                    } catch (error) {
                        threadStatus[threadId].failed++;
                        this.logger.log(`线程${threadId+1} 章节: ${chapterTitle} 下载失败: ${error.message}`, 'error');
                    }
                    
                    // 更新进度
                    updateProgressDisplay();
                }
                
                threadStatus[threadId].current = '完成';
                updateProgressDisplay();
                return results;
            };
            
            // 启动多线程下载
            const downloadPromises = threadTasks.map((chapters, index) => 
                downloadByThread(chapters, index)
            );
            
            // 等待所有线程完成
            const threadsResults = await Promise.all(downloadPromises);
            
            // 合并所有线程结果
            const allDownloadedChapters = Array.from(downloadedChapters.values());
            
            // 按照章节ID排序（保证章节顺序正确）
            allDownloadedChapters.sort((a, b) => a.index - b.index);
            
            // 更新进度为最终状态
            this.updateProgress(downloadedCount, this.totalChapters);
            
            // 更新元数据
            metadata.chapters = allDownloadedChapters.map(chapter => ({
                id: chapter.id,
                title: chapter.title,
                content: chapter.content
            }));
            
            // 按顺序组合内容
            content += allDownloadedChapters.map(chapter => 
                `\n\n${chapter.title}\n${chapter.textContent}`
            ).join('');
    
            // 根据格式生成最终文件
            if (downloadedCount > 0) {
                this.logger.log(`正在生成${this.downloadFormat.toUpperCase()}文件...`, 'pending');
    
                if (this.downloadFormat === 'txt') {
                    // 生成TXT文件
                    const blob = new Blob([content], { type: `text/plain;charset=${this.charset}` });
                    const filename = totalChaptersText ?
                        `${infoName}_${totalChaptersText}章.txt` :
                        `${infoName}.txt`;
                    saveAs(blob, filename);
                } else if (this.downloadFormat === 'html') {
                    // 生成HTML文件
                    const htmlContent = this.generateHtml(metadata);
                    const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
                    saveAs(blob, `${infoName}.html`);
                }
    
                this.taskHistory.updateTask(taskId, { status: 'success' });
                this.logger.log(`《${infoName}》下载完成，共${downloadedCount}/${this.totalChapters}章`, 'success');
            } else {
                throw new Error('没有成功下载任何章节');
            }
        } catch (error) {
            this.logger.log(`下载失败: ${error.message}`, 'error');
            if (this.currentTaskId) {
                this.taskHistory.updateTask(this.currentTaskId, { status: 'error' });
            }
        } finally {
            this.isDownloading = false;
            this.resetProgress();
            this.currentTaskId = null;
        }
    }
    generateHtml(metadata) {
        let chaptersHtml = '';
        
        // 生成目录
        let toc = '<div class="toc-content"><h2>目录</h2>\n<ul class="chapter-list">';
        for (let i = 0; i < metadata.chapters.length; i++) {
            toc += `\n  <li><a href="#chapter-${i+1}" data-chapter="${i+1}">${metadata.chapters[i].title}</a></li>`;
        }
        toc += '\n</ul></div>';
        
        // 生成章节内容
        for (let i = 0; i < metadata.chapters.length; i++) {
            const chapter = metadata.chapters[i];
            chaptersHtml += `
    <div class="chapter" id="chapter-${i+1}" data-index="${i+1}">
        <h2>${chapter.title}</h2>
        <div class="chapter-content">${chapter.content}</div>
    </div>`;
        }
        
        // 生成完整HTML
        return `<!DOCTYPE html>
    <html lang="zh-CN">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${metadata.title}</title>
        <style>
            :root {
                --primary-color: #ed4259;
                --text-color: #333;
                --bg-color: #f6f3e9;
                --sidebar-bg: #f7f6f2;
                --font-size: 18px;
                --line-height: 1.8;
                --font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
                --content-width: 800px;
                --sidebar-width: 300px;
                --header-height: 60px;
                --footer-height: 50px;
                --transition-speed: 0.3s;
            }
            
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            
            body {
                font-family: var(--font-family);
                font-size: var(--font-size);
                line-height: var(--line-height);
                color: var(--text-color);
                background-color: var(--bg-color);
                transition: background-color var(--transition-speed), color var(--transition-speed);
                overflow-x: hidden;
            }
            
            body.night-mode {
                --bg-color: #252525;
                --text-color: #d8d8d8;
                --sidebar-bg: #1e1e1e;
            }
            
            body.sepia-mode {
                --bg-color: #f8f0dd;
                --text-color: #5a4a39;
                --sidebar-bg: #f3ead5;
            }
            
            .container {
                display: flex;
                min-height: 100vh;
            }
            
            .content {
                flex: 1;
                padding: 20px;
                max-width: var(--content-width);
                margin: 0 auto;
                padding-top: calc(var(--header-height) + 20px);
                padding-bottom: calc(var(--footer-height) + 20px);
                transition: margin-left var(--transition-speed);
            }
            
            /* 侧边栏样式 */
            .sidebar {
                width: var(--sidebar-width);
                height: 100vh;
                position: fixed;
                top: 0;
                left: -300px;
                background-color: var(--sidebar-bg);
                z-index: 1000;
                transition: left var(--transition-speed);
                box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
                display: flex;
                flex-direction: column;
                overflow-y: hidden;
            }
            
            .sidebar.active {
                left: 0;
            }
            
            .sidebar-header {
                height: var(--header-height);
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 0 20px;
                border-bottom: 1px solid rgba(0, 0, 0, 0.1);
            }
            
            .sidebar-header h3 {
                font-size: 18px;
                color: var(--primary-color);
            }
            
            .close-sidebar {
                background: transparent;
                border: none;
                font-size: 24px;
                cursor: pointer;
                color: var(--text-color);
            }
            
            .toc-content {
                flex: 1;
                overflow-y: auto;
                padding: 20px;
            }
            
            .toc-content h2 {
                margin-bottom: 15px;
                color: var(--primary-color);
                font-size: 20px;
            }
            
            .chapter-list {
                list-style-type: none;
            }
            
            .chapter-list li {
                padding: 8px 0;
                border-bottom: 1px solid rgba(0, 0, 0, 0.05);
            }
            
            .chapter-list a {
                color: var(--text-color);
                text-decoration: none;
                display: block;
                padding: 5px 0;
                transition: color 0.2s;
            }
            
            .chapter-list a:hover,
            .chapter-list a.current {
                color: var(--primary-color);
            }
            
            /* 顶部导航 */
            .header {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                height: var(--header-height);
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 0 20px;
                background-color: var(--bg-color);
                box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
                z-index: 900;
                transition: background-color var(--transition-speed);
            }
            
            .book-title {
                font-size: 18px;
                font-weight: bold;
                flex: 1;
                text-align: center;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            
            .menu-button {
                background: transparent;
                border: none;
                font-size: 24px;
                cursor: pointer;
                color: var(--text-color);
                width: 40px;
                height: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            /* 底部工具栏 */
            .footer {
                position: fixed;
                bottom: 0;
                left: 0;
                right: 0;
                height: var(--footer-height);
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: var(--bg-color);
                box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
                z-index: 900;
                transition: background-color var(--transition-speed);
            }
            
            .footer-controls {
                display: flex;
                gap: 20px;
            }
            
            /* 书籍信息 */
            .book-info {
                background-color: rgba(0, 0, 0, 0.03);
                padding: 20px;
                border-radius: 8px;
                margin: 20px 0 30px 0;
                transition: background-color var(--transition-speed);
            }
            
            body.night-mode .book-info {
                background-color: rgba(255, 255, 255, 0.05);
            }
            
            .book-info p {
                margin: 8px 0;
            }
            
            /* 章节样式 */
            .chapter {
                margin-bottom: 40px;
                transition: margin 0.3s;
            }
            
            .chapter h2 {
                font-size: 24px;
                color: var(--primary-color);
                text-align: center;
                margin: 30px 0 20px 0;
                padding-bottom: 10px;
                border-bottom: 1px solid rgba(0, 0, 0, 0.1);
            }
            
            .chapter-content p {
                text-indent: 2em;
                margin-bottom: 1em;
            }
            
            /* 设置面板 */
            .settings-panel {
                position: fixed;
                bottom: calc(var(--footer-height) + 10px);
                left: 50%;
                transform: translateX(-50%) translateY(150%);
                background-color: var(--sidebar-bg);
                border-radius: 8px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
                padding: 15px;
                width: 280px;
                z-index: 1000;
                transition: transform var(--transition-speed);
            }
            
            .settings-panel.active {
                transform: translateX(-50%) translateY(0);
            }
            
            .settings-title {
                font-size: 16px;
                margin-bottom: 10px;
                color: var(--primary-color);
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            
            .close-settings {
                background: transparent;
                border: none;
                font-size: 18px;
                cursor: pointer;
                color: var(--text-color);
            }
            
            .settings-section {
                margin-bottom: 15px;
            }
            
            .settings-section h4 {
                margin-bottom: 8px;
                font-size: 14px;
            }
            
            .theme-options, .font-options, .size-options {
                display: flex;
                gap: 10px;
                flex-wrap: wrap;
            }
            
            .theme-option {
                width: 30px;
                height: 30px;
                border-radius: 50%;
                cursor: pointer;
                border: 2px solid transparent;
            }
            
            .theme-option.active {
                border-color: var(--primary-color);
            }
            
            .theme-light {
                background-color: #f6f3e9;
            }
            
            .theme-sepia {
                background-color: #f8f0dd;
            }
            
            .theme-dark {
                background-color: #252525;
            }
            
            .font-option {
                padding: 5px 8px;
                border-radius: 4px;
                cursor: pointer;
                background-color: rgba(0, 0, 0, 0.05);
                font-size: 12px;
            }
            
            .font-option.active {
                background-color: var(--primary-color);
                color: white;
            }
            
            .size-option {
                width: 24px;
                height: 24px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: rgba(0, 0, 0, 0.05);
                cursor: pointer;
                font-size: 12px;
                font-weight: bold;
            }
            
            .size-option.active {
                background-color: var(--primary-color);
                color: white;
            }
            
            /* 悬浮按钮 */
            .floating-controls {
                position: fixed;
                right: 20px;
                bottom: calc(var(--footer-height) + 20px);
                display: flex;
                flex-direction: column;
                gap: 10px;
                z-index: 800;
            }
            
            .floating-button {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                background-color: var(--primary-color);
                color: white;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
                font-size: 16px;
                border: none;
                transition: transform 0.2s, opacity 0.2s;
            }
            
            .floating-button:hover {
                transform: scale(1.1);
            }
            
            .floating-button.active {
                opacity: 0.7;
            }
            
            /* 媒体查询 */
            @media (max-width: 768px) {
                :root {
                    --font-size: 16px;
                    --content-width: 100%;
                }
                
                .header {
                    padding: 0 10px;
                }
                
                .content {
                    padding: 10px;
                    padding-top: calc(var(--header-height) + 10px);
                    padding-bottom: calc(var(--footer-height) + 10px);
                }
            }
            
            /* 字体预加载 */
            @font-face {
                font-family: 'Noto Serif SC';
                font-style: normal;
                font-weight: 400;
                font-display: swap;
                src: url('https://fonts.googleapis.com/css2?family=Noto+Serif+SC&display=swap');
            }
            
            @font-face {
                font-family: 'LXGW WenKai';
                font-style: normal;
                font-weight: 400;
                font-display: swap;
                src: url('https://cdn.jsdelivr.net/npm/lxgw-wenkai-webfont@1.1.0/style.css');
            }
        </style>
    </head>
    <body>
        <!-- 顶部导航 -->
        <div class="header">
            <button class="menu-button" id="toggle-sidebar">☰</button>
            <div class="book-title">${metadata.title}</div>
            <button class="menu-button" id="show-settings">⚙️</button>
        </div>
        
        <!-- 侧边栏 -->
        <div class="sidebar" id="sidebar">
            <div class="sidebar-header">
                <h3>目录</h3>
                <button class="close-sidebar" id="close-sidebar">×</button>
            </div>
            ${toc}
        </div>
        
        <div class="container">
            <div class="content">
                <h1>${metadata.title}</h1>
                
                <div class="book-info">
                    <p><strong>作者：</strong>${metadata.author}</p>
                    <p><strong>简介：</strong>${metadata.description}</p>
                </div>${chaptersHtml}
            </div>
        </div>
        
        <!-- 底部工具栏 -->
        <div class="footer">
            <div class="footer-controls">
                <button class="menu-button" id="prev-chapter" title="上一章">◀</button>
                <span id="chapter-progress">第 1 章 / 共 ${metadata.chapters.length} 章</span>
                <button class="menu-button" id="next-chapter" title="下一章">▶</button>
            </div>
        </div>
        
        <!-- 设置面板 -->
        <div class="settings-panel" id="settings-panel">
            <div class="settings-title">
                <span>阅读设置</span>
                <button class="close-settings" id="close-settings">×</button>
            </div>
            
            <div class="settings-section">
                <h4>主题</h4>
                <div class="theme-options">
                    <div class="theme-option theme-light active" data-theme="default" title="默认主题"></div>
                    <div class="theme-option theme-sepia" data-theme="sepia" title="护眼模式"></div>
                    <div class="theme-option theme-dark" data-theme="night" title="夜间模式"></div>
                </div>
            </div>
            
            <div class="settings-section">
                <h4>字体</h4>
                <div class="font-options">
                    <div class="font-option active" data-font="PingFang SC, Microsoft YaHei, sans-serif">默认</div>
                    <div class="font-option" data-font="Noto Serif SC, serif">宋体</div>
                    <div class="font-option" data-font="LXGW WenKai, serif">温凯体</div>
                    <div class="font-option" data-font="KaiTi, STKaiti, serif">楷体</div>
                </div>
            </div>
            
            <div class="settings-section">
                <h4>字号</h4>
                <div class="size-options">
                    <div class="size-option" data-size="14px">A</div>
                    <div class="size-option" data-size="16px">A</div>
                    <div class="size-option active" data-size="18px">A</div>
                    <div class="size-option" data-size="20px">A</div>
                    <div class="size-option" data-size="22px">A</div>
                </div>
            </div>
        </div>
        
        <!-- 悬浮按钮 -->
        <div class="floating-controls">
            <button class="floating-button" id="toggle-toc" title="目录">📖</button>
            <button class="floating-button" id="toggle-settings" title="设置">⚙️</button>
            <button class="floating-button" id="scroll-top" title="回到顶部">↑</button>
        </div>
        
        <script>
            // DOM 元素
            const sidebar = document.getElementById('sidebar');
            const toggleSidebar = document.getElementById('toggle-sidebar');
            const closeSidebar = document.getElementById('close-sidebar');
            const toggleToc = document.getElementById('toggle-toc');
            const settingsPanel = document.getElementById('settings-panel');
            const showSettings = document.getElementById('show-settings');
            const closeSettings = document.getElementById('close-settings');
            const toggleSettings = document.getElementById('toggle-settings');
            const scrollTop = document.getElementById('scroll-top');
            const prevChapter = document.getElementById('prev-chapter');
            const nextChapter = document.getElementById('next-chapter');
            const chapterProgress = document.getElementById('chapter-progress');
            const chapterLinks = document.querySelectorAll('.chapter-list a');
            const chapters = document.querySelectorAll('.chapter');
            
            // 主题设置
            const themeOptions = document.querySelectorAll('.theme-option');
            const fontOptions = document.querySelectorAll('.font-option');
            const sizeOptions = document.querySelectorAll('.size-option');
            
            // 当前阅读状态
            let currentChapterIndex = 1;
            let totalChapters = ${metadata.chapters.length};
            
            // 初始化
            function init() {
                // 加载保存的设置
                loadSettings();
                
                // 加载上次阅读进度
                loadReadingProgress();
                
                // 更新章节进度显示
                updateChapterProgress();
                
                // 设置事件监听器
                setupEventListeners();
            }
            
            // 设置事件监听器
            function setupEventListeners() {
                // 侧边栏控制
                toggleSidebar.addEventListener('click', () => {
                    sidebar.classList.toggle('active');
                });
                
                closeSidebar.addEventListener('click', () => {
                    sidebar.classList.remove('active');
                });
                
                toggleToc.addEventListener('click', () => {
                    sidebar.classList.toggle('active');
                    toggleToc.classList.toggle('active');
                });
                
                // 设置面板控制
                showSettings.addEventListener('click', () => {
                    settingsPanel.classList.add('active');
                });
                
                closeSettings.addEventListener('click', () => {
                    settingsPanel.classList.remove('active');
                });
                
                toggleSettings.addEventListener('click', () => {
                    settingsPanel.classList.toggle('active');
                    toggleSettings.classList.toggle('active');
                });// 滚动到顶部
                scrollTop.addEventListener('click', () => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                });
                
                // 章节导航
                prevChapter.addEventListener('click', goToPrevChapter);
                nextChapter.addEventListener('click', goToNextChapter);
                
                // 主题设置
                themeOptions.forEach(option => {
                    option.addEventListener('click', () => {
                        const theme = option.dataset.theme;
                        setTheme(theme);
                        
                        themeOptions.forEach(opt => opt.classList.remove('active'));
                        option.classList.add('active');
                        
                        saveSettings();
                    });
                });
                
                // 字体设置
                fontOptions.forEach(option => {
                    option.addEventListener('click', () => {
                        const font = option.dataset.font;
                        setFont(font);
                        
                        fontOptions.forEach(opt => opt.classList.remove('active'));
                        option.classList.add('active');
                        
                        saveSettings();
                    });
                });
                
                // 字号设置
                sizeOptions.forEach(option => {
                    option.addEventListener('click', () => {
                        const size = option.dataset.size;
                        setFontSize(size);
                        
                        sizeOptions.forEach(opt => opt.classList.remove('active'));
                        option.classList.add('active');
                        
                        saveSettings();
                    });
                });
                
                // 章节链接点击
                chapterLinks.forEach(link => {
                    link.addEventListener('click', (e) => {
                        e.preventDefault();
                        
                        const chapterIndex = parseInt(link.dataset.chapter);
                        goToChapter(chapterIndex);
                        
                        if (window.innerWidth < 768) {
                            sidebar.classList.remove('active');
                        }
                    });
                });
                
                // 监听滚动，更新当前阅读的章节
                window.addEventListener('scroll', debounce(() => {
                    updateCurrentChapterOnScroll();
                    saveReadingProgress();
                }, 200));
                
                // 键盘快捷键
                window.addEventListener('keydown', (e) => {
                    switch(e.key) {
                        case 'ArrowLeft':
                            goToPrevChapter();
                            break;
                        case 'ArrowRight':
                            goToNextChapter();
                            break;
                        case 'Escape':
                            sidebar.classList.remove('active');
                            settingsPanel.classList.remove('active');
                            break;
                    }
                });
            }
            
            // 章节导航功能
            function goToChapter(index) {
                if (index < 1 || index > totalChapters) return;
                
                currentChapterIndex = index;
                const chapter = document.getElementById(\`chapter-\${index}\`);
                
                if (chapter) {
                    window.scrollTo({
                        top: chapter.offsetTop - 70,
                        behavior: 'smooth'
                    });
                    
                    updateChapterProgress();
                    updateActiveChapterInToc();
                    saveReadingProgress();
                }
            }
            
            function goToPrevChapter() {
                goToChapter(currentChapterIndex - 1);
            }
            
            function goToNextChapter() {
                goToChapter(currentChapterIndex + 1);
            }
            
            function updateChapterProgress() {
                chapterProgress.textContent = \`第 \${currentChapterIndex} 章 / 共 \${totalChapters} 章\`;
            }
            
            function updateCurrentChapterOnScroll() {
                const scrollPosition = window.scrollY;
                
                for (let i = chapters.length - 1; i >= 0; i--) {
                    const chapter = chapters[i];
                    if (scrollPosition >= chapter.offsetTop - 100) {
                        currentChapterIndex = parseInt(chapter.dataset.index);
                        updateChapterProgress();
                        updateActiveChapterInToc();
                        break;
                    }
                }
            }
            
            function updateActiveChapterInToc() {
                chapterLinks.forEach(link => {
                    link.classList.remove('current');
                    if (parseInt(link.dataset.chapter) === currentChapterIndex) {
                        link.classList.add('current');
                    }
                });
            }
            
            // 设置主题、字体、字号
            function setTheme(theme) {
                document.body.classList.remove('night-mode', 'sepia-mode');
                
                if (theme === 'night') {
                    document.body.classList.add('night-mode');
                } else if (theme === 'sepia') {
                    document.body.classList.add('sepia-mode');
                }
            }
            
            function setFont(font) {
                document.documentElement.style.setProperty('--font-family', font);
            }
            
            function setFontSize(size) {
                document.documentElement.style.setProperty('--font-size', size);
            }
            
            // 保存/加载设置
            function saveSettings() {
                const activeTheme = document.querySelector('.theme-option.active').dataset.theme;
                const activeFont = document.querySelector('.font-option.active').dataset.font;
                const activeSize = document.querySelector('.size-option.active').dataset.size;
                
                const settings = {
                    theme: activeTheme,
                    font: activeFont,
                    fontSize: activeSize
                };
                
                localStorage.setItem(\`book_\${window.location.pathname}_settings\`, JSON.stringify(settings));
            }
            
            function loadSettings() {
                try {
                    const savedSettings = localStorage.getItem(\`book_\${window.location.pathname}_settings\`);
                    
                    if (savedSettings) {
                        const settings = JSON.parse(savedSettings);
                        
                        // 应用主题
                        setTheme(settings.theme);
                        document.querySelector(\`.theme-option[data-theme="\${settings.theme}"]\`).classList.add('active');
                        document.querySelectorAll(\`.theme-option:not([data-theme="\${settings.theme}"])\`).forEach(
                            opt => opt.classList.remove('active')
                        );
                        
                        // 应用字体
                        setFont(settings.font);
                        document.querySelector(\`.font-option[data-font="\${settings.font}"]\`).classList.add('active');
                        document.querySelectorAll(\`.font-option:not([data-font="\${settings.font}"])\`).forEach(
                            opt => opt.classList.remove('active')
                        );
                        
                        // 应用字号
                        setFontSize(settings.fontSize);
                        document.querySelector(\`.size-option[data-size="\${settings.fontSize}"]\`).classList.add('active');
                        document.querySelectorAll(\`.size-option:not([data-size="\${settings.fontSize}"])\`).forEach(
                            opt => opt.classList.remove('active')
                        );
                    }
                } catch (e) {
                    console.error('加载设置时出错:', e);
                }
            }
            
            // 保存/加载阅读进度
            function saveReadingProgress() {
                const progress = {
                    chapter: currentChapterIndex,
                    scrollTop: window.scrollY
                };
                
                localStorage.setItem(\`book_\${window.location.pathname}_progress\`, JSON.stringify(progress));
            }
            
            function loadReadingProgress() {
                try {
                    const savedProgress = localStorage.getItem(\`book_\${window.location.pathname}_progress\`);
                    
                    if (savedProgress) {
                        const progress = JSON.parse(savedProgress);
                        
                        // 设置当前章节
                        currentChapterIndex = progress.chapter;
                        
                        // 滚动到保存的位置
                        setTimeout(() => {
                            if (progress.chapter > 1) {
                                const chapter = document.getElementById(\`chapter-\${progress.chapter}\`);
                                if (chapter) {
                                    window.scrollTo(0, progress.scrollTop);
                                    updateActiveChapterInToc();
                                }
                            }
                        }, 100);
                    }
                } catch (e) {
                    console.error('加载阅读进度时出错:', e);
                }
            }
            
            // 工具函数: 防抖
            function debounce(func, wait) {
                let timeout;
                return function executedFunction(...args) {
                    const later = () => {
                        clearTimeout(timeout);
                        func(...args);
                    };
                    clearTimeout(timeout);
                    timeout = setTimeout(later, wait);
                };
            }
            
            // 初始化
            document.addEventListener('DOMContentLoaded', init);
        </script>
    </body>
    </html>`;
    }

    generateUUID() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            const r = Math.random() * 16 | 0;
            const v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
}

// 主脚本
(function() {
    'use strict';

    // 等待页面加载完成
    window.addEventListener('load', function() {
        document.getElementsByClassName('float-wrapper')[0]?.remove();
        document.getElementsByClassName('download-icon')[0]?.remove();
        document.getElementsByClassName('reader-toolbar-item-download')[0]?.remove();
        
        setTimeout(() => {
            // 创建客户端和UI
            const client = new FqClient(CONFIG);
            const ui = new FanqieUI(client);

           

            // 根据页面类型执行不同操作
            const path = window.location.href.match(/\/([^/]+)\/\d/)?.[1];

            switch(path) {
                case 'reader':
                    // 阅读页立即自动解锁
                    ui.unlockCurrentChapter();
                    break;
            }
        }, 500);  // 减少等待时间，更快响应
    });
})();
