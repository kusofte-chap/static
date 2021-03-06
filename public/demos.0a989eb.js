(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports = {
    INVALID_NUMBER_OF_PARAMS: new Error('Invalid number of input parameters'),
    
    INVALID_PROVIDER: new Error('Provider not set or invalid'),
    INVALID_RESPONSE: (result) => {
        var message = !!result && !!result.error && !!result.error.message ? result.error.message : 'Invalid JSON RPC response: ' + JSON.stringify(result);
        return new Error(message);
    },
    CONNECTION_TIMEOUT: (ms) => {
    	return new Error('CONNECTION TIMEOUT: timeout of ' + ms + ' ms achived')
    }
}
},{}],2:[function(require,module,exports){

module.exports = {
	inputAddressFormatter(address){
		return address;
	},
	transferFormatter(data){
		return data.transactionHash || data;
	}
}
},{}],3:[function(require,module,exports){
(function (global){
const Method = require("./method");
const RpcEngine = require("./rpcengine");
const formatters = require("./formatters");
var methods = () => [
    new Method({
        name: 'getIdentity',
        call: 'identity',
        params: 0,
        desc: {
            help: "get current wallet address",
            params: "()",
            returns: {
                address: "wallet address"
            }
        }
    }),
    new Method({
        name: 'transfer',
        call: 'transfer',
        params: 2,
        inputFormatter: [formatters.inputAddressFormatter/*to*/, null/*amount*/],
        desc: {
            help: "current wallet transfer",
            params: "(string:to, double:amount)",
            returns: "txid"
        }
    }),
    new Method({
        name: 'btctransfer',
        call: 'btctransfer',
        params: 2,
        inputFormatter: [formatters.inputAddressFormatter/*to*/, null/*amount*/],
        outputFormatter: formatters.transferFormatter,
        desc: {
            help: "current btc wallet transfer",
            params: "(string:to, double:amount)",
            returns: "txid"
        }
    }),
    new Method({
        name: "contract",
        call: "contract",
        params: 3,
        inputFormatter: [null/*method*/, null/*contractAddress*/, null/*parameters*/],
        desc: {
            help: "current btc wallet transfer",
            params: "(string:to, double:amount)",
            returns: "txid"
        }
    }),
    new Method({
        name: "contractRaw",
        call: "contractRaw",
        params: 3,
        inputFormatter: [null/*method*/, null/*contractAddress*/, null/*parameters*/],
        desc: {
            help: "current btc wallet transfer",
            params: "(string:to, double:amount)",
            returns: "txid"
        }
    }),
    new Method({
        name: "share",
        call: "share",
        params: 1,
        inputFormatter: [null/*{ "id": 8, name: "2" }*/],
        desc: {
            help: "share dapp",
            params: "(object:{id: dappid})",
            returns: null
        }
    }),
    new Method({
        name: "shareImage",
        call: "shareImage",
        params: 1,
        inputFormatter: [null/*base64*/],
        desc: {
            help: "share image",
            params: "(string:\"base64\")",
            returns: null
        }
    }),
    new Method({
        name: "hideKeyboard",
        call: "hideKeyboard",
        params: 0,
        desc: {
            help: "hide keyboard",
            params: "()",
            returns: true
        }
    }),
    new Method({
        name: "showKeyboard",
        call: "showKeyboard",
        params: -1,
        desc: {
            help: "show keyboard",
            params: "([object:{value: \"input default value\",maxLength: 10/*输入框最大长度,不填则不限制*/,placeholder: \"placeholder\",multiple: false,//是否多行输入confirmText: \"完成\"/*不填写默认中文:完成, 英文done*/}])",
            returns: "input result"
        }
    }),
    new Method({
        name: "getClipboard",
        call: "getClipboard",
        params: 0,
        desc: {
            help: "get clipboard",
            params: "()",
            returns: "clipboard content"
        }
    }),
    new Method({
        name: "scanQRCode",
        call: "scanQRCode",
        params: 0,
        desc: {
            help: "scan qr code",
            params: "()",
            returns: "qrcode content"
        }
    }),
    new Method({
        name: "openFundManager",
        call: "openFundManager",
        params: 0,
        desc: {
            help: "open fund manager",
            params: "()",
            returns: null
        }
    }),
    new Method({
        name: "getVersion",
        call: "getVersion",
        params: 0,
        desc: {
            help: "getVersion",
            params: "()",
            returns: null
        }
    }),
    new Method({
        name: "canIUse",
        call: "canIUse",
        params: 1,
        desc: {
            help: "canIUse",
            params: "(method)",
            returns: 'true | false'
        }
    }),
    new Method({
        name: "request",
        call: "request",
        params: 1,
        desc: {
            help: "ajax request",
            params: "(options)",
            returns: '{url: "", method: "POST"|"GET", data: {"post 参数"}}'
        }
    }),
    new Method({
        name: "summary",
        call: "summary",
        params: 1,
        desc: {
            help: "dos wallet summary",
            params: "(utxos)",
            returns: '[{utxo content}]'
        }
    }),
];

class Demos{
    constructor(opts){
        // super();
        this._requestManager = opts.requestManager;

        methods().forEach(k => {
        	k.attachToObject(this);
        	k.setRequestManager(this._requestManager);
        });
    }
}


global.demos = new Demos({
    requestManager: new RpcEngine()
});
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./formatters":2,"./method":5,"./rpcengine":6}],4:[function(require,module,exports){
const JSONRpc = {
    messageId: 0,
    toPayload (method, params) {
        if (!method)
            console.error('jsonrpc method should be specified!');

        JSONRpc.messageId++;

        return {
            jsonrpc: '2.0',
            id: JSONRpc.messageId,
            method: method,
            params: params || []
        };
    },
    isValidResponse(response){
        return Array.isArray(response) ? response.every(validateSingleMessage) : validateSingleMessage(response);
    },
    toBatchPayload(messages){
        return messages.map(function (message) {
            return JSONRpc.toPayload(message.method, message.params);
        });
    }
}

function validateSingleMessage(message){
  return !!message &&
    !message.error &&
    message.jsonrpc === '2.0' &&
    typeof message.id === 'number' &&
    message.result !== undefined; // only undefined is not valid json object
}

module.exports = JSONRpc;
},{}],5:[function(require,module,exports){
const errors = require("./errors");
const JSONRpc = require("./jsonrpc");
class Method {
    constructor(options){
        this.name = options.name;
        this.call = options.call;
        this.params = options.params || 0;
        this.inputFormatter = options.inputFormatter;
        this.outputFormatter = options.outputFormatter;
        this.requestManager = null;
        this.desc = options.desc;
    }
    setRequestManager(rm){ 
        this.requestManager = rm;
    }
    getCall(args) {

        return (typeof this.call === 'function') ? this.call(args) : this.call;
    }
    
    validateArgs(args){
        if (this.params >= 0 && args.length !== this.params) {
            throw errors.INVALID_NUMBER_OF_PARAMS;
        }
    }
    formatInput(args){
        if (!this.inputFormatter) {
            return args;
        }

        return this.inputFormatter.map(function (formatter, index) {
            return formatter ? formatter(args[index]) : args[index];
        });
    }
    formatOutput(result){
        return this.outputFormatter && result ? this.outputFormatter(result) : result;
    }

    toPayload(args) {
        var params = this.formatInput(args);
        this.validateArgs(params);
        return JSONRpc.toPayload(this.getCall(args), params);
    }
    buildCall() {
        let self = this;
        return async (...args) => {

            var payload = self.toPayload(args);
            let result = await self.requestManager.sendAsync(payload);
            return self.formatOutput(result);
        };
    }

    attachToObject(obj) {
        let func = this.buildCall();
        func.desc = this.desc;
        let name = this.name.split('.');
        if (name.length > 1) {
            obj[name[0]] = obj[name[0]] || {};
            obj[name[0]][name[1]] = func;
        } else {
            obj[name[0]] = func; 
        }
    }
}

module.exports = Method;
},{"./errors":1,"./jsonrpc":4}],6:[function(require,module,exports){
(function (global){
class RpcEngine{
    constructor(opts){
        this._events = {};
        this._initEvent();
    }
    _initEvent(){
        global.addEventListener("message", (e) => {
            let data;
            try{
                data = JSON.parse(e.data);
            }catch(_){
                data = e.data;
            }
            this._onMessage(data);
        });
    }


    _onMessage(data){
        let { method, id } = data;
        if(!method || !id){
            return;
        }

        this.emit(`${method}:${id}`, data.error && new Error(data.error), data.data);
    }

    once(type, listener) {
        if (typeof listener !== 'function')
            throw new TypeError('"listener" argument must be a function');
          
        this._events[type] || (this._events[type] = []);
        this._events[type].push({
            once: true,
            fn: listener
        });
    };

    emit(type, ...args){
        let listeners = this._events[type];
        if(!listeners) return;
        for (let i = listeners.length - 1; i >= 0; i--) {
            let listener = listeners[i];
            listener.fn(...args);
            if(listener.once)
                listeners.splice(i, i);
        }
    }

    _sendMessage(data){
        window.DemosJS && window.DemosJS.postMessage(JSON.stringify(data));
    }

    sendAsync(data){
        let { method, id } = data;
        return new Promise((resolve, reject) => {
            this.once(`${method}:${id}`, (err, txid) => {
                if(err) return reject(err);
                resolve(txid);
            });
            this._sendMessage(data);
        });
    }
}


module.exports = RpcEngine;
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[3]);
