/*
全品类优惠券10减4
自动预约茅台 执行时间大家自己改下
脚本兼容: QuantumultX, Surge,Loon, JSBox, Node.js
=================================Quantumultx=========================
[task_local]
#全品类优惠券10减4
0 55 9,11,13,15,17,20 * * * https://github.com/JDWXX/jd_job/blob/master/ms/jd_jdjsb_10_4.js, tag=全品类优惠券10减4, img-url=https://raw.githubusercontent.com/Orz-3/mini/master/Color/jd.png, enabled=true
=================================Loon===================================
[Script]
cron "0 55 9,11,13,15,17,20 * * *" script-path=https://github.com/JDWXX/jd_job/blob/master/ms/jd_jdjsb_10_4.js,tag=全品类优惠券10减4
===================================Surge================================
全品类优惠券10减4 = type=cron,cronexp="0 55 9,11,13,15,17,20 * * *",wake-system=1,timeout=3600,script-path=https://github.com/JDWXX/jd_job/blob/master/ms/jd_jdjsb_10_4.js
====================================小火箭=============================
全品类优惠券10减4 = type=cron,script-path=https://github.com/JDWXX/jd_job/blob/master/ms/jd_jdjsb_10_4.js, cronexpr="0 55 9,11,13,15,17,20 * * *", timeout=3600, enable=true
 */
const $ = new Env('全品类优惠券10减4');
var _0xod8='jsjiami.com.v6',_0xod8_=['_0xod8'],_0x4236=[_0xod8,'\x69\x73\x4e\x6f\x64\x65','\x2e\x2f\x73\x65\x6e\x64\x4e\x6f\x74\x69\x66\x79','\x2e\x2f\x6a\x64\x43\x6f\x6f\x6b\x69\x65\x2e\x6a\x73','\x6e\x6f\x64\x65\x2d\x66\x65\x74\x63\x68','\x6b\x65\x79\x73','\x66\x6f\x72\x45\x61\x63\x68','\x70\x75\x73\x68','\x65\x6e\x76','\x4a\x44\x5f\x44\x45\x42\x55\x47','\x66\x61\x6c\x73\x65','\x6c\x6f\x67','\x67\x65\x74\x64\x61\x74\x61','\x43\x6f\x6f\x6b\x69\x65\x4a\x44','\x43\x6f\x6f\x6b\x69\x65\x4a\x44\x32','\x43\x6f\x6f\x6b\x69\x65\x73\x4a\x44','\x6d\x61\x70','\x63\x6f\x6f\x6b\x69\x65','\x66\x69\x6c\x74\x65\x72','\x70\x72\x6f\x74\x6f\x74\x79\x70\x65','\x46\x6f\x72\x6d\x61\x74','\x67\x65\x74\x4d\x6f\x6e\x74\x68','\x67\x65\x74\x44\x61\x74\x65','\x67\x65\x74\x48\x6f\x75\x72\x73','\x67\x65\x74\x4d\x69\x6e\x75\x74\x65\x73','\x67\x65\x74\x53\x65\x63\x6f\x6e\x64\x73','\x67\x65\x74\x4d\x69\x6c\x6c\x69\x73\x65\x63\x6f\x6e\x64\x73','\x74\x65\x73\x74','\x72\x65\x70\x6c\x61\x63\x65','\x67\x65\x74\x46\x75\x6c\x6c\x59\x65\x61\x72','\x73\x75\x62\x73\x74\x72','\x6c\x65\x6e\x67\x74\x68','\x3a\x30\x30\x3a\x30\x30','\x6d\x73\x67','\x6e\x61\x6d\x65','\u3010\u63d0\u793a\u3011\u8bf7\u5148\u83b7\u53d6\u4eac\u4e1c\u8d26\u53f7\u4e00\x63\x6f\x6f\x6b\x69\x65\x0a\u76f4\u63a5\u4f7f\u7528\x4e\x6f\x62\x79\x44\x61\u7684\u4eac\u4e1c\u7b7e\u5230\u83b7\u53d6','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x62\x65\x61\x6e\x2e\x6d\x2e\x6a\x64\x2e\x63\x6f\x6d\x2f\x62\x65\x61\x6e\x2f\x73\x69\x67\x6e\x49\x6e\x64\x65\x78\x2e\x61\x63\x74\x69\x6f\x6e','\x2e\x2f\x71\x6c\x32\x31\x32\x37\x39\x36\x36\x36\x38\x2e\x6a\x73','\x0a\x0a\u6211\u89c9\u5f97\u4f60\u6ca1\u62c9\u6211\u4ed3\u5e93\uff0c\u811a\u672c\u4e0d\u6267\u884c\u4e86\x0a\x0a','\x0a\u62c9\u4ed3\u5e93\u52a0\x51\x51\u7fa4\uff1a\x32\x31\x32\x37\x39\x36\x36\x36\x38\u3001\x36\x38\x31\x30\x33\x30\x30\x39\x37\x20\uff0c\u770b\u7fa4\u516c\u544a\x0a','\x0a\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\u3010\u4eac\u4e1c\u65f6\u95f4\u6821\u51c6\u3011\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70\x69\x2e\x6d\x2e\x6a\x64\x2e\x63\x6f\x6d\x2f\x63\x6c\x69\x65\x6e\x74\x2e\x61\x63\x74\x69\x6f\x6e\x3f\x66\x75\x6e\x63\x74\x69\x6f\x6e\x49\x64\x3d\x71\x75\x65\x72\x79\x4d\x61\x74\x65\x72\x69\x61\x6c\x50\x72\x6f\x64\x75\x63\x74\x73\x26\x63\x6c\x69\x65\x6e\x74\x3d\x77\x68\x35','\x74\x65\x78\x74\x2f\x68\x74\x6d\x6c\x2c\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x78\x68\x74\x6d\x6c\x2b\x78\x6d\x6c\x2c\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x78\x6d\x6c\x3b\x71\x3d\x30\x2e\x39\x2c\x69\x6d\x61\x67\x65\x2f\x61\x76\x69\x66\x2c\x69\x6d\x61\x67\x65\x2f\x77\x65\x62\x70\x2c\x69\x6d\x61\x67\x65\x2f\x61\x70\x6e\x67\x2c\x2a\x2f\x2a\x3b\x71\x3d\x30\x2e\x38\x2c\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x73\x69\x67\x6e\x65\x64\x2d\x65\x78\x63\x68\x61\x6e\x67\x65\x3b\x76\x3d\x62\x33\x3b\x71\x3d\x30\x2e\x39','\x7a\x68\x2d\x43\x4e\x2c\x7a\x68\x3b\x71\x3d\x30\x2e\x39','\x6d\x61\x78\x2d\x61\x67\x65\x3d\x30','\x22\x20\x4e\x6f\x74\x3b\x41\x20\x42\x72\x61\x6e\x64\x22\x3b\x76\x3d\x22\x39\x39\x22\x2c\x20\x22\x47\x6f\x6f\x67\x6c\x65\x20\x43\x68\x72\x6f\x6d\x65\x22\x3b\x76\x3d\x22\x39\x37\x22\x2c\x20\x22\x43\x68\x72\x6f\x6d\x69\x75\x6d\x22\x3b\x76\x3d\x22\x39\x37\x22','\x22\x57\x69\x6e\x64\x6f\x77\x73\x22','\x64\x6f\x63\x75\x6d\x65\x6e\x74','\x6e\x61\x76\x69\x67\x61\x74\x65','\x6e\x6f\x6e\x65','\x73\x74\x72\x69\x63\x74\x2d\x6f\x72\x69\x67\x69\x6e\x2d\x77\x68\x65\x6e\x2d\x63\x72\x6f\x73\x73\x2d\x6f\x72\x69\x67\x69\x6e','\x47\x45\x54','\x74\x68\x65\x6e','\x6a\x73\x6f\x6e','\x63\x75\x72\x72\x65\x6e\x74\x54\x69\x6d\x65\x32','\x67\x65\x74\x54\x69\x6d\x65','\u4eac\u4e1c\u65f6\u95f4\u6233\uff1a','\u670d\u52a1\u5668\u65f6\u95f4\u6233\uff1a','\u6821\u51c6\u6beb\u79d2\u6570\uff1a','\x0a\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d','\x0a\u5f00\u62a2\u65f6\u95f4\x3a\x20','\x0a\u7b49\u5f85\x20','\x20\u79d2\u540e\u6267\u884c\u4ee3\u7801','\u7b49\u5f85\u65f6\u95f4\u5927\u4e8e\x20\x33\x36\x30\x30\x20\u79d2\uff08\x31\u5c0f\u65f6\uff09\uff0c\u7ec8\u6b62\u8fd0\u884c\x0a','\x0a\u300b\u300b\u300b\u300b\u300b\u300b\u6267\u884c\u65f6\u95f4\x3a\x20','\u300a\u300a\u300a\u300a\u300a\u300a','\x55\x73\x65\x72\x4e\x61\x6d\x65','\x6d\x61\x74\x63\x68','\x69\x6e\x64\x65\x78','\x69\x73\x4c\x6f\x67\x69\x6e','\x6e\x69\x63\x6b\x4e\x61\x6d\x65','\x0a\x2a\x2a\x2a\x2a\x2a\x2a\u5f00\u59cb\u3010\u4eac\u4e1c\u8d26\u53f7','\x2a\x2a\x2a\x2a\x2a\x2a\x2a\x2a\x2a\x0a','\u3010\u63d0\u793a\u3011\x63\x6f\x6f\x6b\x69\x65\u5df2\u5931\u6548','\u4eac\u4e1c\u8d26\u53f7','\x0a\u8bf7\u91cd\u65b0\u767b\u5f55\u83b7\u53d6\x0a\x68\x74\x74\x70\x73\x3a\x2f\x2f\x62\x65\x61\x6e\x2e\x6d\x2e\x6a\x64\x2e\x63\x6f\x6d\x2f\x62\x65\x61\x6e\x2f\x73\x69\x67\x6e\x49\x6e\x64\x65\x78\x2e\x61\x63\x74\x69\x6f\x6e','\x73\x65\x6e\x64\x4e\x6f\x74\x69\x66\x79','\x63\x6f\x6f\x6b\x69\x65\u5df2\u5931\u6548\x20\x2d\x20','\x0a\u8bf7\u91cd\u65b0\u767b\u5f55\u83b7\u53d6\x63\x6f\x6f\x6b\x69\x65','\x39\x42\x32\x46\x45\x34\x46\x34\x39\x34\x37\x39\x44\x45\x46\x38\x37\x33\x46\x42\x34\x37\x36\x38\x37\x32\x43\x32\x36\x38\x30\x30\x5f\x62\x69\x6e\x67\x6f','\x46\x41\x32\x37\x38\x42\x32\x41\x33\x37\x42\x34\x39\x32\x33\x46\x32\x45\x39\x30\x45\x35\x31\x42\x30\x42\x43\x35\x31\x30\x36\x41\x42\x36\x34\x43\x35\x41\x44\x34\x34\x30\x42\x32\x46\x32\x46\x41\x30\x42\x41\x39\x34\x37\x30\x39\x38\x30\x38\x37\x42\x34\x31\x34\x37\x31\x44\x33\x30\x31\x42\x41\x34\x43\x37\x34\x34\x33\x41\x46\x43\x43\x31\x42\x46\x39\x43\x41\x41\x34\x45\x44\x37\x33\x43\x44\x5f\x62\x69\x6e\x67\x6f\x2c\x72\x6f\x6c\x65\x49\x64\x3d\x39\x42\x32\x46\x45\x34\x46\x34\x39\x34\x37\x39\x44\x45\x46\x38\x37\x33\x46\x42\x34\x37\x36\x38\x37\x32\x43\x32\x36\x38\x30\x30\x5f\x62\x69\x6e\x67\x6f\x2c\x73\x74\x72\x65\x6e\x67\x74\x68\x65\x6e\x4b\x65\x79\x3d\x39\x39\x44\x41\x33\x30\x38\x33\x36\x31\x34\x36\x35\x34\x43\x46\x32\x42\x34\x31\x31\x39\x30\x36\x42\x46\x45\x35\x42\x33\x43\x41\x45\x43\x44\x43\x34\x45\x39\x35\x37\x45\x32\x42\x32\x36\x38\x43\x44\x33\x42\x41\x42\x41\x39\x35\x45\x35\x41\x45\x34\x41\x30\x35\x32\x44\x31\x32\x36\x31\x37\x33\x35\x46\x45\x44\x44\x30\x30\x34\x35\x35\x33\x32\x39\x46\x46\x37\x33\x39\x41\x44\x38\x41\x38\x45\x5f\x62\x69\x6e\x67\x6f','\x68\x74\x74\x70\x3a\x2f\x2f\x61\x70\x69\x2e\x6d\x2e\x6a\x64\x2e\x63\x6f\x6d\x2f\x63\x6c\x69\x65\x6e\x74\x2e\x61\x63\x74\x69\x6f\x6e\x3f\x66\x75\x6e\x63\x74\x69\x6f\x6e\x49\x64\x3d\x6e\x65\x77\x42\x61\x62\x65\x6c\x41\x77\x61\x72\x64\x43\x6f\x6c\x6c\x65\x63\x74\x69\x6f\x6e\x26\x62\x6f\x64\x79\x3d\x7b\x22\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64\x22\x3a\x22','\x22\x2c\x22\x66\x72\x6f\x6d\x22\x3a\x22\x48\x35\x6e\x6f\x64\x65\x22\x2c\x22\x73\x63\x65\x6e\x65\x22\x3a\x22\x31\x22\x2c\x22\x61\x72\x67\x73\x22\x3a','\x22\x6b\x65\x79\x3d','\x22\x2c\x22\x6d\x69\x74\x65\x6d\x41\x64\x64\x72\x49\x64\x22\x3a\x22\x22\x2c\x22\x67\x65\x6f\x22\x3a\x7b\x22\x6c\x6e\x67\x22\x3a\x22\x22\x2c\x22\x6c\x61\x74\x22\x3a\x22\x22\x7d\x7d\x26\x63\x6c\x69\x65\x6e\x74\x3d\x77\x68\x35\x26\x63\x6c\x69\x65\x6e\x74\x56\x65\x72\x73\x69\x6f\x6e\x3d\x31\x2e\x30\x2e\x30','\x22\x20\x4e\x6f\x74\x20\x41\x3b\x42\x72\x61\x6e\x64\x22\x3b\x76\x3d\x22\x39\x39\x22\x2c\x20\x22\x43\x68\x72\x6f\x6d\x69\x75\x6d\x22\x3b\x76\x3d\x22\x39\x38\x22\x2c\x20\x22\x47\x6f\x6f\x67\x6c\x65\x20\x43\x68\x72\x6f\x6d\x65\x22\x3b\x76\x3d\x22\x39\x38\x22','\x73\x75\x62\x43\x6f\x64\x65\x4d\x73\x67','\x69\x6e\x64\x65\x78\x4f\x66','\u9886\u53d6\u6210\u529f\uff01','\u8d26\u53f7\x3a\u3010','\u5168\u54c1\u7c7b\u4f18\u60e0\u5238\x31\x30\u51cf\x34','\x63\x61\x74\x63\x68','\x2c\x20\u5931\u8d25\x21\x20\u539f\u56e0\x3a\x20','\x66\x69\x6e\x61\x6c\x6c\x79','\x64\x6f\x6e\x65','\x6c\x55\x6a\x73\x6a\x74\x69\x56\x61\x67\x6d\x65\x69\x2e\x57\x63\x46\x4a\x79\x4f\x45\x4c\x4a\x5a\x6f\x6d\x2e\x55\x76\x36\x3d\x3d'];function _0x8e42(_0x5e644f,_0x18030d){_0x5e644f=~~'0x'['concat'](_0x5e644f['slice'](0x0));var _0xbf0166=_0x4236[_0x5e644f];return _0xbf0166;};(function(_0x428fa4,_0x3d4383){var _0x298bf6=0x0;for(_0x3d4383=_0x428fa4['shift'](_0x298bf6>>0x2);_0x3d4383&&_0x3d4383!==(_0x428fa4['pop'](_0x298bf6>>0x3)+'')['replace'](/[lUtVgeWFJyOELJZU=]/g,'');_0x298bf6++){_0x298bf6=_0x298bf6^0xd2ac6;}}(_0x4236,_0x8e42));const notify=$[_0x8e42('0')]()?require(_0x8e42('1')):'';const jdCookieNode=$[_0x8e42('0')]()?require(_0x8e42('2')):'';const fetch=require(_0x8e42('3'));let cookiesArr=[],cookie='',message;if($[_0x8e42('0')]()){Object[_0x8e42('4')](jdCookieNode)[_0x8e42('5')](_0x5de165=>{cookiesArr[_0x8e42('6')](jdCookieNode[_0x5de165]);});if(process[_0x8e42('7')][_0x8e42('8')]&&process[_0x8e42('7')][_0x8e42('8')]===_0x8e42('9'))console[_0x8e42('a')]=()=>{};}else{cookiesArr=[$[_0x8e42('b')](_0x8e42('c')),$[_0x8e42('b')](_0x8e42('d')),...jsonParse($[_0x8e42('b')](_0x8e42('e'))||'\x5b\x5d')[_0x8e42('f')](_0x56c3a5=>_0x56c3a5[_0x8e42('10')])][_0x8e42('11')](_0x546d2f=>!!_0x546d2f);}Date[_0x8e42('12')][_0x8e42('13')]=function(_0x4b0bd8){var _0x419b48={'M+':this[_0x8e42('14')]()+0x1,'d+':this[_0x8e42('15')](),'h+':this[_0x8e42('16')](),'m+':this[_0x8e42('17')](),'s+':this[_0x8e42('18')](),'S':this[_0x8e42('19')]()};if(/(y+)/[_0x8e42('1a')](_0x4b0bd8))_0x4b0bd8=_0x4b0bd8[_0x8e42('1b')](RegExp['\x24\x31'],(this[_0x8e42('1c')]()+'')[_0x8e42('1d')](0x4-RegExp['\x24\x31'][_0x8e42('1e')]));for(var _0x9c8da9 in _0x419b48)if(new RegExp('\x28'+_0x9c8da9+'\x29')[_0x8e42('1a')](_0x4b0bd8))_0x4b0bd8=_0x4b0bd8[_0x8e42('1b')](RegExp['\x24\x31'],RegExp['\x24\x31'][_0x8e42('1e')]==0x1?_0x419b48[_0x9c8da9]:('\x30\x30'+_0x419b48[_0x9c8da9])[_0x8e42('1d')]((''+_0x419b48[_0x9c8da9])[_0x8e42('1e')]));return _0x4b0bd8;};var date=new Date();function getCurrentDateTimeT(){var _0x220cdc=new Date();var _0x3d4e46=_0x220cdc[_0x8e42('1c')]();var _0x1e7527=_0x220cdc[_0x8e42('14')]()+0x1;var _0x391e23=_0x220cdc[_0x8e42('15')]();var _0x644018=_0x220cdc[_0x8e42('16')]();var _0x34861e=_0x220cdc[_0x8e42('17')]();var _0x4726ff=_0x220cdc[_0x8e42('18')]();var _0x1a3a7a=_0x220cdc[_0x8e42('19')]();return _0x3d4e46+'\u5e74'+formatZero(_0x1e7527)+'\u6708'+formatZero(_0x391e23)+'\u65e5\x20'+formatZero(_0x644018)+'\x3a'+formatZero(_0x34861e)+'\x3a'+formatZero(_0x4726ff)+'\x3a'+formatZero(_0x1a3a7a);}function getCurrentDateTimeZ(_0x3a429){var _0x4ccda5=new Date();var _0x51b0a4=_0x4ccda5[_0x8e42('1c')]();var _0x3b64b9=_0x4ccda5[_0x8e42('14')]()+0x1;var _0x4b5c62=_0x4ccda5[_0x8e42('15')]();return _0x51b0a4+'\x2d'+formatZero(_0x3b64b9)+'\x2d'+formatZero(_0x4b5c62)+'\x20'+_0x3a429+_0x8e42('1f');}function formatZero(_0x4d4e78){if(_0x4d4e78>=0x0&&_0x4d4e78<=0x9){return'\x30'+_0x4d4e78;}else{return _0x4d4e78;}}function sleep(_0x6ad75f){return new Promise(_0x2725f9=>setTimeout(_0x2725f9,_0x6ad75f));}!(async()=>{if(!cookiesArr[0x0]){$[_0x8e42('20')]($[_0x8e42('21')],_0x8e42('22'),_0x8e42('23'),{'open-url':_0x8e42('23')});return;}try{$[_0x8e42('0')]()?require(_0x8e42('24')):'';}catch(_0x3d3df2){console[_0x8e42('a')](_0x8e42('25'));console[_0x8e42('a')](_0x8e42('26'));return;}let _0x374140=parseInt(formatZero(date[_0x8e42('16')]()));let _0x55398f='';_0x374140=parseInt(_0x374140);let _0x1737ac=0x0;if(_0x374140<0x9)_0x55398f=0x9;else if(_0x374140<0xb)_0x55398f=0xb;else if(_0x374140<0xe)_0x55398f=0xe;else if(_0x374140<0x10)_0x55398f=0x10;else if(_0x374140<0x12)_0x55398f=0x12;else if(_0x374140<0x15)_0x55398f=0x15;else _0x55398f=0x0;let _0x436494='';let _0x694d52='';console[_0x8e42('a')](_0x8e42('27'));await fetch(_0x8e42('28'),{'headers':{'accept':_0x8e42('29'),'accept-language':_0x8e42('2a'),'cache-control':_0x8e42('2b'),'sec-ch-ua':_0x8e42('2c'),'sec-ch-ua-mobile':'\x3f\x30','sec-ch-ua-platform':_0x8e42('2d'),'sec-fetch-dest':_0x8e42('2e'),'sec-fetch-mode':_0x8e42('2f'),'sec-fetch-site':_0x8e42('30'),'sec-fetch-user':'\x3f\x31','upgrade-insecure-requests':'\x31'},'referrerPolicy':_0x8e42('31'),'body':null,'method':_0x8e42('32')})[_0x8e42('33')](_0x5c8764=>_0x5c8764[_0x8e42('34')]())[_0x8e42('33')](_0x58ad28=>{_0x436494=_0x58ad28[_0x8e42('35')];_0x694d52=new Date()[_0x8e42('36')]();console[_0x8e42('a')](_0x8e42('37')+_0x58ad28[_0x8e42('35')]);console[_0x8e42('a')](_0x8e42('38')+_0x694d52);});let _0x1389dc=_0x694d52-_0x436494;console[_0x8e42('a')](_0x8e42('39')+_0x1389dc);_0x1737ac=new Date(getCurrentDateTimeZ(_0x55398f))[_0x8e42('36')]()-new Date()[_0x8e42('36')]();console[_0x8e42('a')](_0x8e42('3a'));console[_0x8e42('a')](_0x8e42('3b')+getCurrentDateTimeZ(_0x55398f));_0x1737ac=(_0x1737ac-_0x1389dc)/0x3e8;console[_0x8e42('a')](_0x8e42('3c')+_0x1737ac+_0x8e42('3d'));if(_0x1737ac>0xe10){console[_0x8e42('a')](_0x8e42('3e'));return;}_0x1737ac=_0x1737ac*0x3e8;await sleep(_0x1737ac);let _0x84de87='';for(let _0xcb6cea=0x0;_0xcb6cea<0x1;_0xcb6cea++){console[_0x8e42('a')](_0x8e42('3a'));console[_0x8e42('a')](_0x8e42('3f')+getCurrentDateTimeT()+_0x8e42('40'));for(let _0x37ad3b=0x0;_0x37ad3b<cookiesArr[_0x8e42('1e')];_0x37ad3b++){if(cookiesArr[_0x37ad3b]){cookie=cookiesArr[_0x37ad3b];$[_0x8e42('41')]=decodeURIComponent(cookie[_0x8e42('42')](/pt_pin=([^; ]+)(?=;?)/)&&cookie[_0x8e42('42')](/pt_pin=([^; ]+)(?=;?)/)[0x1]);$[_0x8e42('43')]=_0x37ad3b+0x1;$[_0x8e42('44')]=!![];$[_0x8e42('45')]='';message='';console[_0x8e42('a')](_0x8e42('46')+$[_0x8e42('43')]+'\u3011'+($[_0x8e42('45')]||$[_0x8e42('41')])+_0x8e42('47'));if(!$[_0x8e42('44')]){$[_0x8e42('20')]($[_0x8e42('21')],_0x8e42('48'),_0x8e42('49')+$[_0x8e42('43')]+'\x20'+($[_0x8e42('45')]||$[_0x8e42('41')])+_0x8e42('4a'),{'open-url':_0x8e42('23')});if($[_0x8e42('0')]()){await notify[_0x8e42('4b')]($[_0x8e42('21')]+_0x8e42('4c')+$[_0x8e42('41')],_0x8e42('49')+$[_0x8e42('43')]+'\x20'+$[_0x8e42('41')]+_0x8e42('4d'));}continue;}try{let _0x4bde5c=_0x8e42('4e');let _0x40b791=_0x8e42('4f');fetch(_0x8e42('50')+_0x4bde5c+_0x8e42('51')+_0x8e42('52')+_0x40b791+_0x8e42('53'),{'headers':{'accept':_0x8e42('29'),'accept-language':_0x8e42('2a'),'sec-ch-ua':_0x8e42('54'),'sec-ch-ua-mobile':'\x3f\x30','sec-ch-ua-platform':_0x8e42('2d'),'sec-fetch-dest':_0x8e42('2e'),'sec-fetch-mode':_0x8e42('2f'),'sec-fetch-site':_0x8e42('30'),'sec-fetch-user':'\x3f\x31','upgrade-insecure-requests':'\x31','cookie':cookie},'referrerPolicy':_0x8e42('31'),'body':null,'method':_0x8e42('32')})[_0x8e42('33')](_0x4204e3=>_0x4204e3[_0x8e42('34')]())[_0x8e42('33')](_0x142243=>{console[_0x8e42('a')](_0x142243);if(_0x142243[_0x8e42('55')][_0x8e42('56')](_0x8e42('57'))!=-0x1)_0x84de87+=_0x8e42('58')+$[_0x8e42('41')]+'\u3011'+_0x142243[_0x8e42('55')]+'\x0a';});}catch(_0x151f5d){}}}}if(_0x84de87!=''){notify[_0x8e42('4b')](_0x8e42('59'),_0x84de87);}})()[_0x8e42('5a')](_0x197769=>{$[_0x8e42('a')]('','\u274c\x20'+$[_0x8e42('21')]+_0x8e42('5b')+_0x197769+'\x21','');})[_0x8e42('5c')](()=>{$[_0x8e42('5d')]();});;_0xod8='jsjiami.com.v6';
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
