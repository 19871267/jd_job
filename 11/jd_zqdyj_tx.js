/*
赚钱大赢家提现和打扫店铺
提现金额
1848d61655f979f8eac0dd36235586ba 0.3元
dac84c6bf0ed0ea9da2eca4694948440 1元
53515f286c491d66de3e01f64e3810b2 3元
da3fc8218d2d1386d3b25242e563acb8 8元
7ea791839f7fe3168150396e51e30917 20元
不会用加群：212796668、681030097
脚本兼容: QuantumultX, Surge,Loon, JSBox, Node.js
=================================Quantumultx=========================
[task_local]
#赚钱大赢家提现和打扫店铺
0 0,12 * * * https://github.com/JDWXX/jd_job.git, tag=赚钱大赢家提现和打扫店铺, img-url=https://raw.githubusercontent.com/Orz-3/mini/master/Color/jd.png, enabled=true
=================================Loon===================================
[Script]
cron "0 0,12 * * *" script-path=https://github.com/JDWXX/jd_job.git,tag=赚钱大赢家提现和打扫店铺
===================================Surge================================
赚钱大赢家提现和打扫店铺 = type=cron,cronexp="0 0,12 * * *",wake-system=1,timeout=3600,script-path=https://github.com/JDWXX/jd_job.git
====================================小火箭=============================
赚钱大赢家提现和打扫店铺 = type=cron,script-path=https://github.com/JDWXX/jd_job.git, cronexpr="0 0,12 * * *", timeout=3600, enable=true
 */
const $ = new Env('赚钱大赢家提现和打扫店铺');
const notify = $.isNode() ? require('./sendNotify') : '';
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';
let ruleId = 'da3fc8218d2d1386d3b25242e563acb8'//默认提现8元 失败后 提现0.3
var _0xodb='jsjiami.com.v6',_0xodb_=['_0xodb'],_0xc5e6=[_0xodb,'\x6e\x6f\x64\x65\x2d\x66\x65\x74\x63\x68','\x69\x73\x4e\x6f\x64\x65','\x6b\x65\x79\x73','\x66\x6f\x72\x45\x61\x63\x68','\x70\x75\x73\x68','\x65\x6e\x76','\x4a\x44\x5f\x44\x45\x42\x55\x47','\x66\x61\x6c\x73\x65','\x6c\x6f\x67','\x67\x65\x74\x64\x61\x74\x61','\x43\x6f\x6f\x6b\x69\x65\x4a\x44','\x43\x6f\x6f\x6b\x69\x65\x4a\x44\x32','\x43\x6f\x6f\x6b\x69\x65\x73\x4a\x44','\x6d\x61\x70','\x63\x6f\x6f\x6b\x69\x65','\x66\x69\x6c\x74\x65\x72','\x70\x72\x6f\x74\x6f\x74\x79\x70\x65','\x46\x6f\x72\x6d\x61\x74','\x67\x65\x74\x4d\x6f\x6e\x74\x68','\x67\x65\x74\x44\x61\x74\x65','\x67\x65\x74\x48\x6f\x75\x72\x73','\x67\x65\x74\x4d\x69\x6e\x75\x74\x65\x73','\x67\x65\x74\x53\x65\x63\x6f\x6e\x64\x73','\x67\x65\x74\x4d\x69\x6c\x6c\x69\x73\x65\x63\x6f\x6e\x64\x73','\x74\x65\x73\x74','\x72\x65\x70\x6c\x61\x63\x65','\x67\x65\x74\x46\x75\x6c\x6c\x59\x65\x61\x72','\x73\x75\x62\x73\x74\x72','\x6c\x65\x6e\x67\x74\x68','\x6d\x73\x67','\x6e\x61\x6d\x65','\u3010\u63d0\u793a\u3011\u8bf7\u5148\u83b7\u53d6\u4eac\u4e1c\u8d26\u53f7\u4e00\x63\x6f\x6f\x6b\x69\x65\x0a\u76f4\u63a5\u4f7f\u7528\x4e\x6f\x62\x79\x44\x61\u7684\u4eac\u4e1c\u7b7e\u5230\u83b7\u53d6','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x62\x65\x61\x6e\x2e\x6d\x2e\x6a\x64\x2e\x63\x6f\x6d\x2f\x62\x65\x61\x6e\x2f\x73\x69\x67\x6e\x49\x6e\x64\x65\x78\x2e\x61\x63\x74\x69\x6f\x6e','\x55\x73\x65\x72\x4e\x61\x6d\x65','\x6d\x61\x74\x63\x68','\x69\x6e\x64\x65\x78','\x69\x73\x4c\x6f\x67\x69\x6e','\x6e\x69\x63\x6b\x4e\x61\x6d\x65','\x0a\x2a\x2a\x2a\x2a\x2a\x2a\u5f00\u59cb\u3010\u4eac\u4e1c\u8d26\u53f7','\x2a\x2a\x2a\x2a\x2a\x2a\x2a\x2a\x2a\x0a','\u3010\u63d0\u793a\u3011\x63\x6f\x6f\x6b\x69\x65\u5df2\u5931\u6548','\u4eac\u4e1c\u8d26\u53f7','\x0a\u8bf7\u91cd\u65b0\u767b\u5f55\u83b7\u53d6\x0a\x68\x74\x74\x70\x73\x3a\x2f\x2f\x62\x65\x61\x6e\x2e\x6d\x2e\x6a\x64\x2e\x63\x6f\x6d\x2f\x62\x65\x61\x6e\x2f\x73\x69\x67\x6e\x49\x6e\x64\x65\x78\x2e\x61\x63\x74\x69\x6f\x6e','\x73\x65\x6e\x64\x4e\x6f\x74\x69\x66\x79','\x63\x6f\x6f\x6b\x69\x65\u5df2\u5931\u6548\x20\x2d\x20','\x0a\u8bf7\u91cd\u65b0\u767b\u5f55\u83b7\u53d6\x63\x6f\x6f\x6b\x69\x65','\x6d\x73\x63\x35\x38\x38\x64\x36\x64\x35','\x33\x35\x33\x32','\x36\x33\x35\x32\x36\x64\x38\x66\x35\x66\x65\x36\x31\x33\x61\x36\x61\x64\x62\x34\x38\x66\x30\x33','\x72\x65\x74','\u6210\u529f\u6253\u626b\u5e97\u94fa','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x77\x71\x2e\x6a\x64\x2e\x63\x6f\x6d\x2f\x70\x72\x6d\x74\x5f\x65\x78\x63\x68\x61\x6e\x67\x65\x2f\x63\x6c\x69\x65\x6e\x74\x2f\x65\x78\x63\x68\x61\x6e\x67\x65\x3f\x67\x5f\x74\x79\x3d\x68\x35\x26\x67\x5f\x74\x6b\x3d\x26\x61\x70\x70\x43\x6f\x64\x65\x3d','\x26\x62\x69\x7a\x43\x6f\x64\x65\x3d\x6d\x61\x6b\x65\x6d\x6f\x6e\x65\x79\x73\x68\x6f\x70\x26\x72\x75\x6c\x65\x49\x64\x3d','\x26\x73\x63\x65\x6e\x65\x76\x61\x6c\x3d\x32\x26\x63\x61\x6c\x6c\x62\x61\x63\x6b\x3d\x5f\x5f\x6a\x73\x6f\x6e\x70\x31\x36\x36\x37\x34\x35\x34\x32\x30\x37\x30\x32\x35','\x77\x71\x2e\x6a\x64\x2e\x63\x6f\x6d','\x6b\x65\x65\x70\x2d\x61\x6c\x69\x76\x65','\x6a\x64\x6c\x74\x61\x70\x70\x3b\x61\x6e\x64\x72\x6f\x69\x64\x3b\x33\x2e\x39\x2e\x30\x3b\x3b\x3b\x61\x70\x70\x42\x75\x69\x6c\x64\x2f\x32\x33\x33\x33\x3b\x65\x66\x2f\x31\x3b\x65\x70\x2f\x25\x37\x42\x25\x32\x32\x68\x64\x69\x64\x25\x32\x32\x25\x33\x41\x25\x32\x32\x4a\x4d\x39\x46\x31\x79\x77\x55\x50\x77\x66\x6c\x76\x4d\x49\x70\x59\x50\x6f\x6b\x30\x74\x74\x35\x6b\x39\x6b\x57\x34\x41\x72\x4a\x45\x55\x33\x6c\x66\x4c\x68\x78\x42\x71\x77\x25\x33\x44\x25\x32\x32\x25\x32\x43\x25\x32\x32\x74\x73\x25\x32\x32\x25\x33\x41\x31\x36\x36\x37\x34\x34\x32\x32\x30\x38\x33\x35\x34\x25\x32\x43\x25\x32\x32\x72\x69\x64\x78\x25\x32\x32\x25\x33\x41\x2d\x31\x25\x32\x43\x25\x32\x32\x63\x69\x70\x68\x65\x72\x25\x32\x32\x25\x33\x41\x25\x37\x42\x25\x32\x32\x73\x76\x25\x32\x32\x25\x33\x41\x25\x32\x32\x43\x4a\x53\x25\x33\x44\x25\x32\x32\x25\x32\x43\x25\x32\x32\x61\x64\x25\x32\x32\x25\x33\x41\x25\x32\x32\x43\x77\x4f\x32\x5a\x77\x59\x32\x44\x4a\x71\x31\x45\x51\x5a\x72\x43\x4e\x72\x72\x43\x6d\x25\x33\x44\x25\x33\x44\x25\x32\x32\x25\x32\x43\x25\x32\x32\x6f\x64\x25\x32\x32\x25\x33\x41\x25\x32\x32\x43\x4e\x5a\x72\x5a\x4e\x50\x76\x59\x74\x63\x34\x44\x57\x53\x31\x44\x51\x4f\x7a\x44\x6d\x25\x33\x44\x25\x33\x44\x25\x32\x32\x25\x32\x43\x25\x32\x32\x6f\x76\x25\x32\x32\x25\x33\x41\x25\x32\x32\x43\x7a\x4f\x25\x33\x44\x25\x32\x32\x25\x32\x43\x25\x32\x32\x75\x64\x25\x32\x32\x25\x33\x41\x25\x32\x32\x43\x77\x4f\x32\x5a\x77\x59\x32\x44\x4a\x71\x31\x45\x51\x5a\x72\x43\x4e\x72\x72\x43\x6d\x25\x33\x44\x25\x33\x44\x25\x32\x32\x25\x37\x44\x25\x32\x43\x25\x32\x32\x63\x69\x70\x68\x65\x72\x74\x79\x70\x65\x25\x32\x32\x25\x33\x41\x35\x25\x32\x43\x25\x32\x32\x76\x65\x72\x73\x69\x6f\x6e\x25\x32\x32\x25\x33\x41\x25\x32\x32\x31\x2e\x32\x2e\x30\x25\x32\x32\x25\x32\x43\x25\x32\x32\x61\x70\x70\x6e\x61\x6d\x65\x25\x32\x32\x25\x33\x41\x25\x32\x32\x63\x6f\x6d\x2e\x6a\x64\x2e\x6a\x64\x6c\x69\x74\x65\x25\x32\x32\x25\x37\x44\x3b\x4d\x6f\x7a\x69\x6c\x6c\x61\x2f\x35\x2e\x30\x20\x28\x4c\x69\x6e\x75\x78\x3b\x20\x41\x6e\x64\x72\x6f\x69\x64\x20\x31\x32\x3b\x20\x4d\x32\x31\x30\x32\x4b\x31\x41\x43\x20\x42\x75\x69\x6c\x64\x2f\x53\x4b\x51\x31\x2e\x32\x31\x31\x30\x30\x36\x2e\x30\x30\x31\x3b\x20\x77\x76\x29\x20\x41\x70\x70\x6c\x65\x57\x65\x62\x4b\x69\x74\x2f\x35\x33\x37\x2e\x33\x36\x20\x28\x4b\x48\x54\x4d\x4c\x2c\x20\x6c\x69\x6b\x65\x20\x47\x65\x63\x6b\x6f\x29\x20\x56\x65\x72\x73\x69\x6f\x6e\x2f\x34\x2e\x30\x20\x43\x68\x72\x6f\x6d\x65\x2f\x38\x39\x2e\x30\x2e\x34\x33\x38\x39\x2e\x37\x32\x20\x4d\x51\x51\x42\x72\x6f\x77\x73\x65\x72\x2f\x36\x2e\x32\x20\x54\x42\x53\x2f\x30\x34\x36\x30\x31\x31\x20\x4d\x6f\x62\x69\x6c\x65\x20\x53\x61\x66\x61\x72\x69\x2f\x35\x33\x37\x2e\x33\x36\x22\x2c','\x2a\x2f\x2a','\x63\x6f\x6d\x2e\x6a\x64\x2e\x6a\x64\x6c\x69\x74\x65','\x73\x61\x6d\x65\x2d\x73\x69\x74\x65','\x6e\x6f\x2d\x63\x6f\x72\x73','\x73\x63\x72\x69\x70\x74','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x77\x71\x73\x2e\x6a\x64\x2e\x63\x6f\x6d\x2f','\x67\x7a\x69\x70\x2c\x20\x64\x65\x66\x6c\x61\x74\x65\x2c\x20\x62\x72','\x7a\x68\x2d\x43\x4e\x2c\x7a\x68\x3b\x71\x3d\x30\x2e\x39\x2c\x65\x6e\x2d\x55\x53\x3b\x71\x3d\x30\x2e\x38\x2c\x65\x6e\x3b\x71\x3d\x30\x2e\x37','\x47\x45\x54','\x74\x68\x65\x6e','\u5fae\u4fe1\u63d0\u73b0\u6210\u529f','\x31\x38\x34\x38\x64\x36\x31\x36\x35\x35\x66\x39\x37\x39\x66\x38\x65\x61\x63\x30\x64\x64\x33\x36\x32\x33\x35\x35\x38\x36\x62\x61','\u5fae\u4fe1\u63d0\u73b0\x30\x2e\x33\u5143\u4f4e\u4fdd','\x73\x65\x74','\x62\x75\x66\x66\x65\x72','\x67\x65\x74\x55\x69\x6e\x74\x33\x32','\x73\x6c\x69\x63\x65','\x70\x6f\x70','\x75\x6e\x73\x68\x69\x66\x74','\x63\x61\x6c\x6c','\x74\x6f\x53\x74\x72\x69\x6e\x67','\x6a\x6f\x69\x6e','\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74','\x63\x61\x74\x63\x68','\x2c\x20\u5931\u8d25\x21\x20\u539f\u56e0\x3a\x20','\x66\x69\x6e\x61\x6c\x6c\x79','\x64\x6f\x6e\x65','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x77\x71\x2e\x6a\x64\x2e\x63\x6f\x6d\x2f\x6e\x65\x77\x74\x61\x73\x6b\x73\x79\x73\x2f\x6e\x65\x77\x74\x61\x73\x6b\x73\x79\x73\x5f\x66\x72\x6f\x6e\x74\x2f\x41\x77\x61\x72\x64\x3f\x67\x5f\x74\x79\x3d\x68\x35\x26\x67\x5f\x74\x6b\x3d\x26\x61\x70\x70\x43\x6f\x64\x65\x3d','\x26\x5f\x5f\x74\x3d','\x67\x65\x74\x54\x69\x6d\x65','\x26\x73\x6f\x75\x72\x63\x65\x3d\x6d\x61\x6b\x65\x6d\x6f\x6e\x65\x79\x73\x68\x6f\x70\x26\x74\x61\x73\x6b\x49\x64\x3d','\x26\x62\x69\x7a\x43\x6f\x64\x65\x3d\x6d\x61\x6b\x65\x6d\x6f\x6e\x65\x79\x73\x68\x6f\x70\x26\x73\x63\x65\x6e\x65\x76\x61\x6c\x3d\x32','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x77\x71\x73\x2e\x6a\x64\x2e\x63\x6f\x6d\x2f\x73\x6e\x73\x2f\x32\x30\x32\x32\x31\x30\x2f\x32\x30\x2f\x6d\x61\x6b\x65\x2d\x6d\x6f\x6e\x65\x79\x2d\x73\x68\x6f\x70\x2f\x69\x6e\x64\x65\x78\x2e\x68\x74\x6d\x6c\x3f\x61\x63\x74\x69\x76\x65\x49\x64\x3d','\x26\x6c\x6e\x67\x3d\x31\x31\x38\x2e\x33\x38\x39\x39\x37\x31\x26\x6c\x61\x74\x3d\x32\x34\x2e\x39\x37\x34\x37\x35\x31\x26\x73\x69\x64\x3d','\x26\x75\x6e\x5f\x61\x72\x65\x61\x3d\x31\x36\x5f\x31\x33\x34\x31\x5f\x31\x33\x34\x33\x5f\x34\x34\x38\x35\x35','\x6a\x64\x6c\x74\x61\x70\x70\x3b\x61\x6e\x64\x72\x6f\x69\x64\x3b\x33\x2e\x39\x2e\x30\x3b\x3b\x3b\x61\x70\x70\x42\x75\x69\x6c\x64\x2f\x32\x33\x33\x33\x3b\x65\x66\x2f\x31\x3b\x65\x70\x2f\x25\x37\x42\x25\x32\x32\x68\x64\x69\x64\x25\x32\x32\x25\x33\x41\x25\x32\x32\x4a\x4d\x39\x46\x31\x79\x77\x55\x50\x77\x66\x6c\x76\x4d\x49\x70\x59\x50\x6f\x6b\x30\x74\x74\x35\x6b\x39\x6b\x57\x34\x41\x72\x4a\x45\x55\x33\x6c\x66\x4c\x68\x78\x42\x71\x77\x25\x33\x44\x25\x32\x32\x25\x32\x43\x25\x32\x32\x74\x73\x25\x32\x32\x25\x33\x41\x31\x36\x36\x37\x34\x34\x32\x32\x30\x38\x33\x35\x34\x25\x32\x43\x25\x32\x32\x72\x69\x64\x78\x25\x32\x32\x25\x33\x41\x2d\x31\x25\x32\x43\x25\x32\x32\x63\x69\x70\x68\x65\x72\x25\x32\x32\x25\x33\x41\x25\x37\x42\x25\x32\x32\x73\x76\x25\x32\x32\x25\x33\x41\x25\x32\x32\x43\x4a\x53\x25\x33\x44\x25\x32\x32\x25\x32\x43\x25\x32\x32\x61\x64\x25\x32\x32\x25\x33\x41\x25\x32\x32\x43\x77\x4f\x32\x5a\x77\x59\x32\x44\x4a\x71\x31\x45\x51\x5a\x72\x43\x4e\x72\x72\x43\x6d\x25\x33\x44\x25\x33\x44\x25\x32\x32\x25\x32\x43\x25\x32\x32\x6f\x64\x25\x32\x32\x25\x33\x41\x25\x32\x32\x43\x4e\x5a\x72\x5a\x4e\x50\x76\x59\x74\x63\x34\x44\x57\x53\x31\x44\x51\x4f\x7a\x44\x6d\x25\x33\x44\x25\x33\x44\x25\x32\x32\x25\x32\x43\x25\x32\x32\x6f\x76\x25\x32\x32\x25\x33\x41\x25\x32\x32\x43\x7a\x4f\x25\x33\x44\x25\x32\x32\x25\x32\x43\x25\x32\x32\x75\x64\x25\x32\x32\x25\x33\x41\x25\x32\x32\x43\x77\x4f\x32\x5a\x77\x59\x32\x44\x4a\x71\x31\x45\x51\x5a\x72\x43\x4e\x72\x72\x43\x6d\x25\x33\x44\x25\x33\x44\x25\x32\x32\x25\x37\x44\x25\x32\x43\x25\x32\x32\x63\x69\x70\x68\x65\x72\x74\x79\x70\x65\x25\x32\x32\x25\x33\x41\x35\x25\x32\x43\x25\x32\x32\x76\x65\x72\x73\x69\x6f\x6e\x25\x32\x32\x25\x33\x41\x25\x32\x32\x31\x2e\x32\x2e\x30\x25\x32\x32\x25\x32\x43\x25\x32\x32\x61\x70\x70\x6e\x61\x6d\x65\x25\x32\x32\x25\x33\x41\x25\x32\x32\x63\x6f\x6d\x2e\x6a\x64\x2e\x6a\x64\x6c\x69\x74\x65\x25\x32\x32\x25\x37\x44\x3b\x4d\x6f\x7a\x69\x6c\x6c\x61\x2f\x35\x2e\x30\x20\x28\x4c\x69\x6e\x75\x78\x3b\x20\x41\x6e\x64\x72\x6f\x69\x64\x20\x31\x32\x3b\x20\x4d\x32\x31\x30\x32\x4b\x31\x41\x43\x20\x42\x75\x69\x6c\x64\x2f\x53\x4b\x51\x31\x2e\x32\x31\x31\x30\x30\x36\x2e\x30\x30\x31\x3b\x20\x77\x76\x29\x20\x41\x70\x70\x6c\x65\x57\x65\x62\x4b\x69\x74\x2f\x35\x33\x37\x2e\x33\x36\x20\x28\x4b\x48\x54\x4d\x4c\x2c\x20\x6c\x69\x6b\x65\x20\x47\x65\x63\x6b\x6f\x29\x20\x56\x65\x72\x73\x69\x6f\x6e\x2f\x34\x2e\x30\x20\x43\x68\x72\x6f\x6d\x65\x2f\x38\x39\x2e\x30\x2e\x34\x33\x38\x39\x2e\x37\x32\x20\x4d\x51\x51\x42\x72\x6f\x77\x73\x65\x72\x2f\x36\x2e\x32\x20\x54\x42\x53\x2f\x30\x34\x36\x30\x31\x31\x20\x4d\x6f\x62\x69\x6c\x65\x20\x53\x61\x66\x61\x72\x69\x2f\x35\x33\x37\x2e\x33\x36','\x6a\x73\x6f\x6e','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x77\x71\x2e\x6a\x64\x2e\x63\x6f\x6d\x2f\x6d\x61\x6b\x65\x6d\x6f\x6e\x65\x79\x73\x68\x6f\x70\x2f\x65\x78\x63\x68\x61\x6e\x67\x65\x71\x75\x65\x72\x79\x3f\x67\x5f\x74\x79\x3d\x68\x35\x26\x67\x5f\x74\x6b\x3d\x26\x61\x70\x70\x43\x6f\x64\x65\x3d','\x26\x61\x63\x74\x69\x76\x65\x49\x64\x3d','\x26\x73\x63\x65\x6e\x65\x76\x61\x6c\x3d\x32','\x5a\x6e\x47\x6a\x77\x78\x5a\x73\x70\x44\x6a\x69\x61\x6d\x6c\x69\x2e\x63\x62\x46\x6f\x4e\x6e\x55\x6d\x2e\x76\x36\x3d\x3d'];function _0x568d(_0x2d8f05,_0x4b81bb){_0x2d8f05=~~'0x'['concat'](_0x2d8f05['slice'](0x0));var _0x34a12b=_0xc5e6[_0x2d8f05];return _0x34a12b;};(function(_0x36c6a6,_0x33748d){var _0x3e4c21=0x0;for(_0x33748d=_0x36c6a6['shift'](_0x3e4c21>>0x2);_0x33748d&&_0x33748d!==(_0x36c6a6['pop'](_0x3e4c21>>0x3)+'')['replace'](/[ZnGwxZpDlbFNnU=]/g,'');_0x3e4c21++){_0x3e4c21=_0x3e4c21^0x10fca4;}}(_0xc5e6,_0x568d));let cookiesArr=[],cookie='',message;const fetch=require(_0x568d('0'));if($[_0x568d('1')]()){Object[_0x568d('2')](jdCookieNode)[_0x568d('3')](_0x5dba8a=>{cookiesArr[_0x568d('4')](jdCookieNode[_0x5dba8a]);});if(process[_0x568d('5')][_0x568d('6')]&&process[_0x568d('5')][_0x568d('6')]===_0x568d('7'))console[_0x568d('8')]=()=>{};}else{cookiesArr=[$[_0x568d('9')](_0x568d('a')),$[_0x568d('9')](_0x568d('b')),...jsonParse($[_0x568d('9')](_0x568d('c'))||'\x5b\x5d')[_0x568d('d')](_0x213cd6=>_0x213cd6[_0x568d('e')])][_0x568d('f')](_0xb6c94d=>!!_0xb6c94d);}Date[_0x568d('10')][_0x568d('11')]=function(_0x5255d9){var _0x1dbca1={'M+':this[_0x568d('12')]()+0x1,'d+':this[_0x568d('13')](),'h+':this[_0x568d('14')](),'m+':this[_0x568d('15')](),'s+':this[_0x568d('16')](),'S':this[_0x568d('17')]()};if(/(y+)/[_0x568d('18')](_0x5255d9))_0x5255d9=_0x5255d9[_0x568d('19')](RegExp['\x24\x31'],(this[_0x568d('1a')]()+'')[_0x568d('1b')](0x4-RegExp['\x24\x31'][_0x568d('1c')]));for(var _0x2dd663 in _0x1dbca1)if(new RegExp('\x28'+_0x2dd663+'\x29')[_0x568d('18')](_0x5255d9))_0x5255d9=_0x5255d9[_0x568d('19')](RegExp['\x24\x31'],RegExp['\x24\x31'][_0x568d('1c')]==0x1?_0x1dbca1[_0x2dd663]:('\x30\x30'+_0x1dbca1[_0x2dd663])[_0x568d('1b')]((''+_0x1dbca1[_0x2dd663])[_0x568d('1c')]));return _0x5255d9;};function sleep(_0xe67c75){return new Promise(_0xc85f9=>setTimeout(_0xc85f9,_0xe67c75));}!(async()=>{if(!cookiesArr[0x0]){$[_0x568d('1d')]($[_0x568d('1e')],_0x568d('1f'),_0x568d('20'),{'open-url':_0x568d('20')});return;}for(let _0x23ac6d=0x0;_0x23ac6d<cookiesArr[_0x568d('1c')];_0x23ac6d++){if(cookiesArr[_0x23ac6d]){cookie=cookiesArr[_0x23ac6d];$[_0x568d('21')]=decodeURIComponent(cookie[_0x568d('22')](/pt_pin=([^; ]+)(?=;?)/)&&cookie[_0x568d('22')](/pt_pin=([^; ]+)(?=;?)/)[0x1]);$[_0x568d('23')]=_0x23ac6d+0x1;$[_0x568d('24')]=!![];$[_0x568d('25')]='';message='';console[_0x568d('8')](_0x568d('26')+$[_0x568d('23')]+'\u3011'+($[_0x568d('25')]||$[_0x568d('21')])+_0x568d('27'));if(!$[_0x568d('24')]){$[_0x568d('1d')]($[_0x568d('1e')],_0x568d('28'),_0x568d('29')+$[_0x568d('23')]+'\x20'+($[_0x568d('25')]||$[_0x568d('21')])+_0x568d('2a'),{'open-url':_0x568d('20')});if($[_0x568d('1')]()){await notify[_0x568d('2b')]($[_0x568d('1e')]+_0x568d('2c')+$[_0x568d('21')],_0x568d('29')+$[_0x568d('23')]+'\x20'+$[_0x568d('21')]+_0x568d('2d'));}continue;}try{let _0x5a8129=_0x568d('2e');let _0x55cd55=_0x568d('2f');let _0x30e6d1=_0x568d('30');let _0x199f0f=cookie[_0x568d('22')](/pt_pin=([^; ]+)(?=;?)/)[0x1];let _0x515974=_0x4dd490(_0x199f0f);await sleep(0x7d0);let _0x2bae98=await reward(_0x5a8129,_0x55cd55,_0x30e6d1,_0x515974,cookie);if(_0x2bae98&&_0x2bae98[_0x568d('31')]&&_0x2bae98[_0x568d('31')]=='\x30')console[_0x568d('8')](_0x568d('32'));await fetch(_0x568d('33')+_0x5a8129+_0x568d('34')+ruleId+_0x568d('35'),{'headers':{'Host':_0x568d('36'),'Connection':_0x568d('37'),'User-Agent':_0x568d('38'),'Accept':_0x568d('39'),'X-Requested-With':_0x568d('3a'),'Sec-Fetch-Site':_0x568d('3b'),'Sec-Fetch-Mode':_0x568d('3c'),'Sec-Fetch-Dest':_0x568d('3d'),'Referer':_0x568d('3e'),'Accept-Encoding':_0x568d('3f'),'Accept-Language':_0x568d('40'),'Cookie':cookie},'method':_0x568d('41')})[_0x568d('42')](_0x575383=>_0x575383)[_0x568d('42')](_0x2bae98=>{if(_0x2bae98&&_0x2bae98[_0x568d('31')]&&_0x2bae98[_0x568d('31')]=='\x30')console[_0x568d('8')](_0x568d('43'));});await sleep(0x7d0);let _0xdbe2a8=_0x568d('44');await fetch(_0x568d('33')+_0x5a8129+_0x568d('34')+_0xdbe2a8+_0x568d('35'),{'headers':{'Host':_0x568d('36'),'Connection':_0x568d('37'),'User-Agent':_0x568d('38'),'Accept':_0x568d('39'),'X-Requested-With':_0x568d('3a'),'Sec-Fetch-Site':_0x568d('3b'),'Sec-Fetch-Mode':_0x568d('3c'),'Sec-Fetch-Dest':_0x568d('3d'),'Referer':_0x568d('3e'),'Accept-Encoding':_0x568d('3f'),'Accept-Language':_0x568d('40'),'Cookie':cookie},'method':_0x568d('41')})[_0x568d('42')](_0x126c5f=>_0x126c5f)[_0x568d('42')](_0x2bae98=>{if(_0x2bae98&&_0x2bae98[_0x568d('31')]&&_0x2bae98[_0x568d('31')]=='\x30')console[_0x568d('8')](_0x568d('45'));});}catch(_0x5ba39a){}await sleep(0x44c);}}function _0x4dd490(_0x4ca56b){var _0x23a86d=new Uint8Array(_0x418cf1(_0x4ca56b));var _0x17370a,_0x3df77f,_0x3747cf;var _0x12c17a=(_0x23a86d[_0x568d('1c')]+0x8>>>0x6<<0x4)+0x10,_0x4ca56b=new Uint8Array(_0x12c17a<<0x2);_0x4ca56b[_0x568d('46')](new Uint8Array(_0x23a86d[_0x568d('47')])),_0x4ca56b=new Uint32Array(_0x4ca56b[_0x568d('47')]);for(_0x3747cf=new DataView(_0x4ca56b[_0x568d('47')]),_0x17370a=0x0;_0x17370a<_0x12c17a;_0x17370a++)_0x4ca56b[_0x17370a]=_0x3747cf[_0x568d('48')](_0x17370a<<0x2);_0x4ca56b[_0x23a86d[_0x568d('1c')]>>0x2]|=0x80<<0x18-(_0x23a86d[_0x568d('1c')]&0x3)*0x8;_0x4ca56b[_0x12c17a-0x1]=_0x23a86d[_0x568d('1c')]<<0x3;var _0x3d7e8a=[],_0x535b6a=[function(){return _0x48d598[0x1]&_0x48d598[0x2]|~_0x48d598[0x1]&_0x48d598[0x3];},function(){return _0x48d598[0x1]^_0x48d598[0x2]^_0x48d598[0x3];},function(){return _0x48d598[0x1]&_0x48d598[0x2]|_0x48d598[0x1]&_0x48d598[0x3]|_0x48d598[0x2]&_0x48d598[0x3];},function(){return _0x48d598[0x1]^_0x48d598[0x2]^_0x48d598[0x3];}],_0x188fe0=function(_0x5c8228,_0x3488ba){return _0x5c8228<<_0x3488ba|_0x5c8228>>>0x20-_0x3488ba;},_0x47ba04=[0x5a827999,0x6ed9eba1,-0x70e44324,-0x359d3e2a],_0x48d598=[0x67452301,-0x10325477,null,null,-0x3c2d1e10];_0x48d598[0x2]=~_0x48d598[0x0],_0x48d598[0x3]=~_0x48d598[0x1];for(_0x17370a=0x0;_0x17370a<_0x4ca56b[_0x568d('1c')];_0x17370a+=0x10){var _0x35d857=_0x48d598[_0x568d('49')](0x0);for(_0x3df77f=0x0;_0x3df77f<0x50;_0x3df77f++)_0x3d7e8a[_0x3df77f]=_0x3df77f<0x10?_0x4ca56b[_0x17370a+_0x3df77f]:_0x188fe0(_0x3d7e8a[_0x3df77f-0x3]^_0x3d7e8a[_0x3df77f-0x8]^_0x3d7e8a[_0x3df77f-0xe]^_0x3d7e8a[_0x3df77f-0x10],0x1),_0x3747cf=_0x188fe0(_0x48d598[0x0],0x5)+_0x535b6a[_0x3df77f/0x14|0x0]()+_0x48d598[0x4]+_0x3d7e8a[_0x3df77f]+_0x47ba04[_0x3df77f/0x14|0x0]|0x0,_0x48d598[0x1]=_0x188fe0(_0x48d598[0x1],0x1e),_0x48d598[_0x568d('4a')](),_0x48d598[_0x568d('4b')](_0x3747cf);for(_0x3df77f=0x0;_0x3df77f<0x5;_0x3df77f++)_0x48d598[_0x3df77f]=_0x48d598[_0x3df77f]+_0x35d857[_0x3df77f]|0x0;};_0x3747cf=new DataView(new Uint32Array(_0x48d598)[_0x568d('47')]);for(var _0x17370a=0x0;_0x17370a<0x5;_0x17370a++)_0x48d598[_0x17370a]=_0x3747cf[_0x568d('48')](_0x17370a<<0x2);var _0x521534=Array[_0x568d('10')][_0x568d('d')][_0x568d('4c')](new Uint8Array(new Uint32Array(_0x48d598)[_0x568d('47')]),function(_0x139cbb){return(_0x139cbb<0x10?'\x30':'')+_0x139cbb[_0x568d('4d')](0x10);})[_0x568d('4e')]('');return _0x521534;}function _0x418cf1(_0x2c47c9){var _0x1d4444,_0xbd4052=[],_0x34249c,_0x18fc82;for(_0x1d4444=0x0;_0x1d4444<_0x2c47c9[_0x568d('1c')];_0x1d4444++)if((_0x34249c=_0x2c47c9[_0x568d('4f')](_0x1d4444))<0x80)_0xbd4052[_0x568d('4')](_0x34249c);else if(_0x34249c<0x800)_0xbd4052[_0x568d('4')](0xc0+(_0x34249c>>0x6&0x1f),0x80+(_0x34249c&0x3f));else{if((_0x18fc82=_0x34249c^0xd800)>>0xa==0x0)_0x34249c=(_0x18fc82<<0xa)+(_0x2c47c9[_0x568d('4f')](++_0x1d4444)^0xdc00)+0x10000,_0xbd4052[_0x568d('4')](0xf0+(_0x34249c>>0x12&0x7),0x80+(_0x34249c>>0xc&0x3f));else _0xbd4052[_0x568d('4')](0xe0+(_0x34249c>>0xc&0xf));_0xbd4052[_0x568d('4')](0x80+(_0x34249c>>0x6&0x3f),0x80+(_0x34249c&0x3f));};return _0xbd4052;}})()[_0x568d('50')](_0x39f571=>{$[_0x568d('8')]('','\u274c\x20'+$[_0x568d('1e')]+_0x568d('51')+_0x39f571+'\x21','');})[_0x568d('52')](()=>{$[_0x568d('53')]();});function reward(_0x4f969d,_0x3e17f6,_0x3cbc05,_0x4ecbe4,_0x1b582c){return new Promise((_0x201231,_0x319bd1)=>{setTimeout(()=>{fetch(_0x568d('54')+_0x4f969d+_0x568d('55')+new Date()[_0x568d('56')]()+_0x568d('57')+_0x3e17f6+_0x568d('58'),{'headers':{'Referer':_0x568d('59')+_0x3cbc05+_0x568d('5a')+_0x4ecbe4+_0x568d('5b'),'Host':_0x568d('36'),'Connection':_0x568d('37'),'User-Agent':_0x568d('5c'),'Accept':_0x568d('39'),'X-Requested-With':_0x568d('3a'),'Sec-Fetch-Site':_0x568d('3b'),'Sec-Fetch-Mode':_0x568d('3c'),'Sec-Fetch-Dest':_0x568d('3d'),'Accept-Encoding':_0x568d('3f'),'Accept-Language':_0x568d('40'),'Cookie':_0x1b582c},'method':_0x568d('41')})[_0x568d('42')](_0x27d4d6=>_0x27d4d6[_0x568d('5d')]())[_0x568d('42')](_0xe64cb3=>{_0x201231(_0xe64cb3);});_0x201231();},0x5dc);});}function tx(_0x5786b9,_0x52264b,_0xbf5c81,_0x4d820c,_0x580d8e){return new Promise((_0x561e97,_0x3bfd32)=>{setTimeout(()=>{fetch(_0x568d('5e')+_0x5786b9+_0x568d('5f')+_0xbf5c81+_0x568d('60'),{'headers':{'Host':_0x568d('36'),'Connection':_0x568d('37'),'User-Agent':_0x568d('5c'),'Accept':_0x568d('39'),'X-Requested-With':_0x568d('3a'),'Sec-Fetch-Site':_0x568d('3b'),'Sec-Fetch-Mode':_0x568d('3c'),'Sec-Fetch-Dest':_0x568d('3d'),'Accept-Encoding':_0x568d('3f'),'Accept-Language':_0x568d('40'),'Cookie':_0x580d8e},'method':_0x568d('41')})[_0x568d('42')](_0x1fa4d7=>_0x1fa4d7[_0x568d('5d')]())[_0x568d('42')](_0x1d4571=>{_0x561e97(_0x1d4571);});_0x561e97();},0x5dc);});};_0xodb='jsjiami.com.v6';
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}