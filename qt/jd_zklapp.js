/*
入口 真快乐APP -> 我 -> 0元领鸡蛋

 [task_local]
#养鸡真快乐
0 0 0,10,17 * * ? https://github.com/JDWXX/jd_job/blob/master/qt/jd_zklapp.js, tag=养鸡真快乐, img-url=https://raw.githubusercontent.com/Orz-3/mini/master/Color/jd.png, enabled=true
*/
const $ = new Env('真快乐APP养鸡');
//Node.js用户请在jdCookie.js处填写京东ck;
const jdCookieNode = $.isNode() ? require('./jdCookieZkl.js') : '';
var _0xod5='jsjiami.com.v6',_0xod5_=['‮_0xod5'],_0x345a=[_0xod5,'XMKaw4LDviA=','csOjwo/DoMOX','w5/DvcKnw4kU','RMOcwo7DtsOm','wpgxPcOcTA==','EMKWZsOaFA==','NDxyw6BV','BX3DjcKbw7Q=','IsKlAMOFwp4=','w4HCjwXClMOK','w6nCsAY=','dcKaw4o=','KcOmwqIrw5Q=','Z8KOwpRpwrk=','bDpyEWhC','w5DCii3CvMOX','VXvDtMKqLQ==','IHs0w49C','InMGE8KM','SRnDicOQNQ==','G8K6ImHCjQ==','YF5oVDov','w6IXd0kwPQ==','BcKzZhJC','FMKFbAJv','w7DCvhDCtMO4','w5PDp8K8w6sm','w4HDjsKRwp3DgQ==','bz12E39e','MlHClg==','6KyQ6ZWK5pan5o6Z5LqY56uk776u6K+/5qK45p6y6Ie26LmR6K6a5ae157y/57iG5oOC5YSN','6K6t5Ymp6ZmB5oWN5Z6IwrfCsUjDmMKY6L+x5YS25qKW5LyZ5pa85YWE5a62fuW5nOisvumDiei8tuiFk+aeu+WNheiMhOWNtsKUw5F0w78Ew7k=','VmvDssK4JA==','wqU9LsO7bA==','EMK3Yw==','MF/CnMK6','FCBzw65v','w6zCgARk','BT1Hw6hZdsKX','wpo1IMOW','w4nCp8Ox','GMKqcg==','M8KAdcOcC1PDpE8=','w7vDq8KDw5UW','EcKrYw==','w6kdZGgjO8Kv','wp/DvUxEDsKRwoc=','wrvDt1dLBsKAwqw2IA==','wqzDp8K9L0Ydag==','QzBzHXVPNCDCig==','wrAyKg==','wp7Ctg0=','VnBKch4Xw6cebg==','6K2j5Yeu6YCK6L22576A6aG455iW6ZmjwqrnnoTlvpTkuY7Cp8Kgw7HojIPlj7Ms6K+Q5rCO5Y+05pSt5LuT55isw4njgLvDosObMcOrwpbDnuOAv8OW5peo5LuQ5aat5Yuy5YSj5p60772N5Z+A6Z2p6b6C6Z2t5p675LqP5reK5YufQMKKwq3CoVBfeTw=','6Iyw5Yyz5Z2N5Z2XWSkgOwLDoAkaRMK4w40BVXPCrsKcFMK9V8ORw6LCsRtqDTxVw4hTNGXDiFVEw4zDnMOkw4c/B1kHwqHDmmNwwoglbsOVwrg0D8Knw6nCiXAGJWZjb2HCnMKNw7/Dqm3CocKqCDhvw4xHFV9hwovDhDFEG8OUw7XCmwLDjEHCgnLDuhbCn8Oyw4Bxw7nDu8Kzw58/V2ZlwpHChkN8R1gBZEpVQsOGw5kcPAolw5xfMcOnX03CqcOCwqDDosK8WMK9wrY0w5Y/w7UOTsOSIAw9w7XDtMOFwrZMw7/ClMKQw55mwoN2wpsBwql6w6AxwrpdbRg7JsOkX3s7w7Rbwq9odB3Dq2FARsKeLcO8w5bClE3ClXDCpUwCQBDDn8OMwp9CLsO/BcOcCRp2TcK9C8KTDBt/aHwEwqxGQgMlwo3DtCtGw6Zzw5Ahwq9ocCvChxEPHcKWw4Zgwp7CszbCssOEfTPDgcK+wrVIfwvDiMOeQMKA','6I685Y6F5YqKwrPmobnpqZvljpnmlqg=','w5EPKiFu','5qCN6amT6YOK6L+U','5qKO6aio5aem6LeS','6LeM5Y6344GDwo/jgL/nm4rlibXlioznoZR3','NQVew6xY','QOWWu+m5lHA=','D+WKqOWIueWWv+m7hBs=','cjHDscOlLw==','w4PDi8Kw','woHClwwMPQ==','BXnDiQ==','wrjCvwU=','w73DsMKJw4Qy','wo4sw4Y=','DcK8HsObLg==','w7jDiXc=','DXzDp8Kow4Y=','w64dKSRv','AHjDisKYw5/DmcOK','TzVeD1o=','J8KsawZ2','PcO0woogw5E=','wrs9McOt','6K+G5YqU6Zuu5oau5ZyrIjzChwVl6L+D5YeW5qOl5L+q5peZ5YeP5a+yw5zlu6rorp7pg73ovZfohqfmn4bljrbojrnljLpZwpnDtsOowqoq','TsK+fQ==','ICNM','FcKyJMO9IA==','e8OOwrHDgcOv','N8KVSg5v','wqgrOsO3Xg==','dcKUwp1XwpY=','wrE2FcOdaA==','VVDDq1/CqQ==','5pyC5Ym65ouS5aCo772r6K6p56in5ZCN6YaQ6K23','EsKhfsOqLQ==','JMK3TzFb','EcKrYzJewp8=','wpXDuUxDBw==','wrnCk8K9DzQ=','w6vCpA4jw68=','w7oVKRJD','wrkzOw==','wqDDrlVpNQ==','w77CpyEGw5w=','Bgpkw6tf','ccKEw4XDjyQ=','b8KVSsObGw==','w73DjMKtwrTDhA==','D8O5wqULw60=','DFwbN8KVDw==','MMK8bC5p','w5/DhcK+','XwoMw4Q=','w45j5aaQ6LWGH8Ot5Y2w5Zizw6I4','AMKdL8Olwr4fw4I=','wp/CtxXChA==','wp3CtBTCjmE=','SgBuGQzCsQ==','w4xgDzrCqg==','bhF6BAg=','JB9Iw6V5','OMO5wqo7wp3CjsO8V8OzwoYHEMK/wpvDqcKkbADDr8O0w7HDi2vCpsOKwobCkMOHwo85wrhPw7PDogpTAcKdQMKKw6HClsOEw7gjIRnCtiJkesOVY08yRgg=','X8OoJhBNwoBzwojChB/CucKUO0YNwppywoHDrAkuw7rCq8KwXcOZGsOBw5JOwpfDl8OPw6HCmMKRwo9yKn93eQTDlw==','w6LCpQjCrcKDXsKNUMOyw4dHIMKhw5LDnW9d','wpgrwowgcMOhwpXCu8OjacOTwpXDjWo=','wp7ClcOl','wrXCoBIVIcKLLcKLNVPCi8Oyw5XDhCEwAg7CiWoDOUZEVmZrOsOcwr9awoVB','woI0J8OOXXTDszgyNsK+XcOCwqvDpcK3WsK1wrXCrcOaw7koSsOgbVM=','w6TDg8K3w6Q/wocP','RjzDgMO6NMK7OsO3E0JsesOvAMOKbVhBwqoaw7wlXcKJI0hbw4XCjzJZwodkQsK0HFfDj8KpG8OYw7DCmsKgGHrCqMOEwpBNERwQwpF/w5/CpsO1GiZKw7fClxdNeFo7w7HDvj4rw4PDlXXDkyQGVGl+XCAzCg0OUSsBYk/CggZ4a8K/RcOow78Dw4PCrhMUfiVdUMODwq1JLgw=','w4oLREYq','w7rDhsKCw44D','w63CjALCv8Od','JgRHw6ta','wqHCqAc0P0RMwo7CuAvCnlpXw70SCcO5aDkmwqbCsQc1w5IoSBche8OHwqTCtsOGYxnDpcOnAMO4A10oZsOPKsKjOcKRJMOnbMKmRipkw6s=','wp7CiSADBA==','ZXvDkk7Crg==','UsKJdcOgOQ==','fcK/bXYy','XVrDs8KjLQ==','SxRzDio=','wrAxLMO8cA==','G8KxMX8=','wr06CsOTVw==','w5jDiEDDvMKo','UcOIwrDDusO/','C8K4HcOrHg==','VGzDl8KkIw==','Q27DhQ==','P8KrGsOaCA9CwoLCsg==','IsK+BcOW','YsKoUA==','wp7CizInFg==','KcOjwq0hw4XChsKt','w6Y8DDlP','KCNFw6I=','S3PDnA==','Sm/DnA==','NsO5wqkHw5LChw==','TlhcWzo=','dzR/OHg=','fcO7wo7DrcO3','fcKHw6/DqgI=','wpshw7YoXA==','w5pALyzCsA==','wprDt1xZUsKew4QVc2ZlwpE/L8KFwr3Cg8Kgwpc0wp3CvCfCq8K+TRc0w4rCo8Oyf8KYW8Oew5DDgsOMwrwvwpnCq8K5w7PDkcObwq7Cqw0jYcO/SsKaVcORw40=','wqweeSzCmMOKJsKxPMOwEsK8w4NDwq7CiEQJwoXCgjVzZMOwwoJmVgzDgA12IG7DilVMccKxw4XCjnYVAcO2','wq80ccOLR8OROMOYwr3CssOLw4p/wqk=','DsKANcO0wqFJwpTCmMK5eHV5C8OPYsK9wqVYw6rDnRJXPWlTQw==','w4fDkMKjwofDkcKkwo0nHzZxwp8Kwp9Awr1ow5XCmizCtMOCOU05Yy4=','Pn/DgMKZw4jDocOf','wr8kwqZVcg==','HsKrdgQ=','MMKrfh5AwoF3w67DhVTDpMKWKTMMwpVmwp7Dojlmw53CnMO7TsOFFsKWwogDwqXDt8OFw7XClsKIwp4+KXtubmfDmsKQNEPCrsK+ajPCgMOnw7Fyw6nCpkXCucKxw653w4fCo8K8RTduUMOYwrDCo8KFaMKrw5luwrzCujrDkBLDpBkUw6zDkMKOUcKaA8OTwosII8K2wovCiMOCwqJKA8KPwpnDg8O9w5E7UE7DusKkw5ggOXALwqjDkMOqdDsqdVnCrS3Dpw5jOg==','KcKhw7/CmcKh','HcKCSMOKNA==','wpvCiTUDAw==','wprCqAcWGA==','H1bCl8K2wpg=','wqfCmBQrGw==','wrIewrpobg==','w6LCs8Oyw74N','NMKKBsOdEQ==','KVc9A8KY','YyfDjsOjK8OtdMO3QQ0xP8OpOsOMYVVCwrhHwrsEZMOMPBsawpjCmnFgw4F9FcOwCBDDlsOySsOewrjCusKgGG/CvcO/wpRBPwFLw4klwp7Dug==','wpYdwoVkYw==','TsKBW08J','wqzDuMKgOwtJbzEJPcOFwoAdTWUnw6s=','E8OgKA==','woDDnUlhCg==','LcKcWHIAMk8jHsOKw7vCtcK6T8O1Tl3CiMOOw4bDkSPDgHBwJ8OEw7bCn3Y4worCgsOhwoPDjFEUw6bDpMKew4XCtMK0d8Ohw6lewofCvcKsHy4UwqnCgsOnIcOGw5N8UMO8woE=','QG5pRQU=','wrrCujUoDQ==','I8KxNsOtwrA=','wrvDrcK6Pw==','O8O3wqg4w6k=','woLCpzsePA==','DMKeSMOwBw==','G1YOw7Zf','Dz1S','wpTDt18=','SX3DlsKo','XcKFVD7or5vmsq/lpKfot6Tvv7zoro3moJTmnZPnvZDotovphqjorK4=','wrJ/J3wywoo=','wprCucKtJBg=','YUhh','CsKxScO7K2LDgg==','B8KBw5vCucKX','HsKXXcOWKQ==','w6rClho=','Z3dSSj8=','wobCt8K4Eg8D','Wic1w5hy','X8OBwo3DscO+','YDbDg8Og','KsOjwr0q','HcKwNQ==','w4EoIRJjwrnDilE=','w5rDrCtAPQ==','wrJ/Jw==','W15yZww=','K8OUwqYUw5k=','6Ky+5Yij6Zu85oWL5Z2kPAzDmcKVGei9oOWFmuagv+S9vuaVhOWHruWsqQ7luqborqbpg5vovJnohbDmnbzljYfoj7zlj7EZYHfDgsOiwqQ=','GsKxJ3XDh8OmERtQdMKPw55FwqIFWyQEw7bCrEckAFfDq8K/w4TCk2PCsmdXwqzCgMKaw794LMKQw44TwroISsKRw7LDr8O5D2Jkwo1QK8Ofw5fDhw==','InM+EX1HIiPCusONNcOGQMOVKTjDon5eYRPDsMKdwpXDscKjfcKXCC5zCcKNw5jCvmpjw5hRMisRdsOp','w6fDosOCw6U9wqvCvEvCp8KzwpoTGzA=','MW4u','TnHDklHCjFjDh8K0w6DDoC/CqmjCpsKQw6jCrsKQw7g0wrLCusKnwofDjcKHwq3DryhSIhTDiQ==','wr0oKMO4esOHbcKfw6HCosKbwp9/w73Cs8KpBMKuQQQ9AkHCowzDjsKc','wqfCmA7CssOIEsKMFcOXw4NUO8KpwpvDnzZZwrNUbzHDvRvCtExhw7hUwpTDmVhERcOYw64uf8OrBMKKX0FFRcKOwqZ8wpvDrMONw5gEDjDDv8KaKMK9w7ozw7B2wrzDgw==','w6sVYHg7','EDNYw4gVZsKWw6hu','wpXDs0J0DQ==','a8K6dMODLA==','w5rDj3bDiMKb','wo8Fw4A5cg==','wrgaPcOSRQ==','FcKrTQ==','CMKVLMOh','w4oBA8O36K+Z5rCM5aet6LSy772Z6K6g5qCT5p+d57696LSp6YSG6KyF','w7XDvsKbw5YAwr3DqQzDu8Kjw4pGG2TCtQI7eF/DoMONw5HChU3ClFYbJSZNBsKkDsKTHXhvck9dRS5Mwo0MwrfDk3vDrnrDn0Vawq0NPsOH','NsKONsO9wqE=','LcKQHsOiBA==','Y8OVwpLDsMOA','UwPDtsOGIA==','w63CqxXCrcOcRMOGGsOzw4pLMcOqwpPDk2pAw6MTeGfCsFrCug1M','aRkiw7dR','Jlwjw41c','w6fDlWPDocKV','LcK9w5bCnsKcOcOMDHvCuMKCwr4NfwzDlsKUwrPClsKrS8KODcOQwrkqATlhwrM5QMKEw5QRWApIw4HDpCLCpQNaPcKrdMO5wrNGwrDCggXDucOBAHnDscOsDsKTw6jCiBpGdT3DlV0QwrPDkcKyBxTDt8KPwpdXH8KfKQlJw70JXCvCkSI0NRQrK8Osw6HDk1PDmcKrw5nDpMOGesOBERx6woNtfFLCs8K0CsOAw7nDgzzDuWJac3IVwoPCmizDgMOx','wovCtwjClQ==','MMOsdcKlJQ==','bMK4fMO3Bw==','wqbCqigqPg==','wpHDm2toIA==','EsKmOkTCrQ==','wpIiw5MQWw==','esOAwqI=','ZiDDnQ==','wpE2w4IAW8K+wpw=','KMKRKljCqw==','NsO5wqk=','w4DCugXCicO9','esOAwqLDp8O1bg==','w67CoRRAGA==','woUkDMOuRA==','w54DJhlI','B8KYHsOYPg==','w7jDk8Kyw44V','wrjDsMKsG2A=','YGjDt3DCnw==','w6TDhMKfw7Q1','VcKGw5fDhSbDskovZg9vwqjCpQLCql5DwoZ6w5R2UMKDwp1QDsKaQzLDsDfCkS/DgcK3L8OEaMKGccOHdMOcSQTCocK0w6hGw4fDjMKFH8OpaFbDoMOObCHDscOLPMKjR8KvI8KaCMK1IcKCUXV4w6A/wrbCqiVSMh9nw43ChsKPwp7CvcK3J2x5Yg9pFAPCt2lhw6wHNcKaI2pldzUiwrJuw4YNalFaw7DDmgvCjGVZwq/CgsKjwqRxw4/Crlllw5tKwqd5w7/DqmfClnPDml93wr3DhMOCD8Oxw4E6FMKWSWw=','w6lew4w=','wpPCrA/CkSk6w4MWwprDsMOgw6JtCsK7M0jCqnY0wpLCjcKZM8OLVsK8woDDhcO7wpjDmcKcwp9jwrdJw4DCshMqw5puwox2wq7CucK/f8Opw4TDtyx8RTR3A1PDjhvCjwBqZg==','FnvChMKawq4=','ZXLDmsKFFg==','w7HDpcKIw6MBw7U=','w6PCijNiOg==','IWU5w5Ns','wpTDt19lHcKX','wrrCiirCs3A=','w6vClQrCicO3','w6jChxdyGjU=','G33Dt8Krw4M=','JsONRcKlIw==','wpnCvxgQJMKELcOQaRLDlcO9woXCgAYvGk3Cij5RFztkBGNePMOQwr5bw4Bqwp/CgcO2c8KNZcOZZsKDwqjCsiJ6wq5tw7HCgzsSwqXCisKMVcKqX8OBS2xWw4ADw7fDn8OJwrLCucKQQmRYVcOcT07DhnJ6ecO3w7DDn8OIQx7DoRvDocKkw7ZJHsKuMsKOJVNrw7jDgsKSw4HCr00hJsKaw7U6HiHDhlkPBcOpwp/Dj8K/wqovAMOXwoDDj8KkbMKZF3nDlMKhTXdRFWdTw4jCvQ/Dj8OYe8KUw4YDwq09w57CtcKUwo7DtQ==','D8OUwpkFw5o=','DsK8w4DCscKp','dsKIY8OsBQ==','jHsJMPjwFtiQaxWmi.com.VhvK6Snn=='];if(function(_0x59c38c,_0x4c6295,_0x3ad43f){function _0x4733a8(_0x9173df,_0x18e576,_0x30c666,_0x359417,_0x29e10a,_0x13e2e1){_0x18e576=_0x18e576>>0x8,_0x29e10a='po';var _0x498a93='shift',_0xed3f2e='push',_0x13e2e1='‮';if(_0x18e576<_0x9173df){while(--_0x9173df){_0x359417=_0x59c38c[_0x498a93]();if(_0x18e576===_0x9173df&&_0x13e2e1==='‮'&&_0x13e2e1['length']===0x1){_0x18e576=_0x359417,_0x30c666=_0x59c38c[_0x29e10a+'p']();}else if(_0x18e576&&_0x30c666['replace'](/[HJMPwFtQxWVhKSnn=]/g,'')===_0x18e576){_0x59c38c[_0xed3f2e](_0x359417);}}_0x59c38c[_0xed3f2e](_0x59c38c[_0x498a93]());}return 0xb8bbb;};return _0x4733a8(++_0x4c6295,_0x3ad43f)>>_0x4c6295^_0x3ad43f;}(_0x345a,0x143,0x14300),_0x345a){_0xod5_=_0x345a['length']^0x143;};function _0x4afe(_0x70685f,_0xa7ef5b){_0x70685f=~~'0x'['concat'](_0x70685f['slice'](0x1));var _0x1962e6=_0x345a[_0x70685f];if(_0x4afe['TmfFcO']===undefined){(function(){var _0x5d2f6b=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0xfb3fd1='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x5d2f6b['atob']||(_0x5d2f6b['atob']=function(_0x1b7ea6){var _0x3827dc=String(_0x1b7ea6)['replace'](/=+$/,'');for(var _0x1feaac=0x0,_0x2d4a72,_0x2c55e3,_0x3ee0ad=0x0,_0x11a7ff='';_0x2c55e3=_0x3827dc['charAt'](_0x3ee0ad++);~_0x2c55e3&&(_0x2d4a72=_0x1feaac%0x4?_0x2d4a72*0x40+_0x2c55e3:_0x2c55e3,_0x1feaac++%0x4)?_0x11a7ff+=String['fromCharCode'](0xff&_0x2d4a72>>(-0x2*_0x1feaac&0x6)):0x0){_0x2c55e3=_0xfb3fd1['indexOf'](_0x2c55e3);}return _0x11a7ff;});}());function _0x4b9cc9(_0x297537,_0xa7ef5b){var _0x3afca0=[],_0x1a3e79=0x0,_0x4f1b7a,_0x1fc085='',_0x136f47='';_0x297537=atob(_0x297537);for(var _0x27c3af=0x0,_0x1e4ce8=_0x297537['length'];_0x27c3af<_0x1e4ce8;_0x27c3af++){_0x136f47+='%'+('00'+_0x297537['charCodeAt'](_0x27c3af)['toString'](0x10))['slice'](-0x2);}_0x297537=decodeURIComponent(_0x136f47);for(var _0x3d3e3e=0x0;_0x3d3e3e<0x100;_0x3d3e3e++){_0x3afca0[_0x3d3e3e]=_0x3d3e3e;}for(_0x3d3e3e=0x0;_0x3d3e3e<0x100;_0x3d3e3e++){_0x1a3e79=(_0x1a3e79+_0x3afca0[_0x3d3e3e]+_0xa7ef5b['charCodeAt'](_0x3d3e3e%_0xa7ef5b['length']))%0x100;_0x4f1b7a=_0x3afca0[_0x3d3e3e];_0x3afca0[_0x3d3e3e]=_0x3afca0[_0x1a3e79];_0x3afca0[_0x1a3e79]=_0x4f1b7a;}_0x3d3e3e=0x0;_0x1a3e79=0x0;for(var _0x4523bd=0x0;_0x4523bd<_0x297537['length'];_0x4523bd++){_0x3d3e3e=(_0x3d3e3e+0x1)%0x100;_0x1a3e79=(_0x1a3e79+_0x3afca0[_0x3d3e3e])%0x100;_0x4f1b7a=_0x3afca0[_0x3d3e3e];_0x3afca0[_0x3d3e3e]=_0x3afca0[_0x1a3e79];_0x3afca0[_0x1a3e79]=_0x4f1b7a;_0x1fc085+=String['fromCharCode'](_0x297537['charCodeAt'](_0x4523bd)^_0x3afca0[(_0x3afca0[_0x3d3e3e]+_0x3afca0[_0x1a3e79])%0x100]);}return _0x1fc085;}_0x4afe['uatEIR']=_0x4b9cc9;_0x4afe['qLgNJi']={};_0x4afe['TmfFcO']=!![];}var _0x435b5c=_0x4afe['qLgNJi'][_0x70685f];if(_0x435b5c===undefined){if(_0x4afe['YbHpWA']===undefined){_0x4afe['YbHpWA']=!![];}_0x1962e6=_0x4afe['uatEIR'](_0x1962e6,_0xa7ef5b);_0x4afe['qLgNJi'][_0x70685f]=_0x1962e6;}else{_0x1962e6=_0x435b5c;}return _0x1962e6;};let cookiesArr=[],cookie='',message;let shareUserId=[];let jycs=[];let ZKLAPP_JY='';if($['isNode']()){Object[_0x4afe('‫0','rIZ%')](jdCookieNode)[_0x4afe('‮1','@U1r')](_0x4b192b=>{cookiesArr[_0x4afe('‫2','#6HU')](jdCookieNode[_0x4b192b]);});if(process[_0x4afe('‮3','GdgV')]['JD_DEBUG']&&process[_0x4afe('‫4','ZAPn')][_0x4afe('‮5','QlcN')]===_0x4afe('‮6','TjYc'))console[_0x4afe('‫7','ZAPn')]=()=>{};}else{cookiesArr=[$[_0x4afe('‮8','f!hz')]('CookieJD'),$[_0x4afe('‮9','1]Ul')](_0x4afe('‮a','1]Ul')),...jsonParse($[_0x4afe('‮b','J[)u')](_0x4afe('‫c','p##b'))||'[]')['map'](_0x11c6db=>_0x11c6db['cookie'])]['filter'](_0x4d09d6=>!!_0x4d09d6);}if(process[_0x4afe('‫d','@!pa')]['ZKLAPP_JY']){ZKLAPP_JY=process[_0x4afe('‮e','pyrV')][_0x4afe('‮f','BhWy')];}!(async()=>{var _0x10314a={'UGnuu':_0x4afe('‫10','x!7Y'),'PWdKK':_0x4afe('‮11','rIZ%'),'NZPDb':'入口\x20真快乐APP\x20->\x20我\x20->\x200元领鸡蛋\x20','AcvhH':_0x4afe('‮12','V&f7'),'djIUa':function(_0x311b98){return _0x311b98();},'eqWrI':function(_0x4a57ce,_0x5b4f2b){return _0x4a57ce==_0x5b4f2b;},'OjByF':function(_0x4b8e4b,_0xfcaae8){return _0x4b8e4b===_0xfcaae8;},'ZhoqZ':'UkBPR','gbDbq':_0x4afe('‫13','h)9O'),'KQIqL':_0x4afe('‮14','8D4X'),'YmLNF':_0x4afe('‫15','ySXo'),'JQNyC':function(_0x46dd65,_0x5b5173){return _0x46dd65+_0x5b5173;},'BkiIp':_0x4afe('‫16','#6HU'),'YKMDY':'，以后账号都会助力此账号','zQIbL':function(_0x9a194e,_0x457d36){return _0x9a194e<_0x457d36;},'keTrc':function(_0x2a1d7e,_0x31bd28){return _0x2a1d7e<_0x31bd28;},'Wqoda':function(_0x2872c9,_0x566c79){return _0x2872c9!==_0x566c79;},'YsKFw':_0x4afe('‫17','yuqq'),'SKbXI':function(_0x104898,_0x37b966){return _0x104898+_0x37b966;},'qyWDe':function(_0x2ae1f1,_0x401c70){return _0x2ae1f1+_0x401c70;},'XvmIZ':_0x4afe('‫18','MmbH'),'dzxaV':_0x4afe('‮19','ohZ5'),'eXQFg':function(_0x19f6a4,_0x34e0ed){return _0x19f6a4>_0x34e0ed;},'imhcn':function(_0x25df47,_0x3f86cc){return _0x25df47!==_0x3f86cc;},'VDxwP':_0x4afe('‮1a','V&f7'),'RhzCf':function(_0x12bcb1,_0x310d06){return _0x12bcb1(_0x310d06);},'MxhYE':function(_0x1f4138,_0x1e0761){return _0x1f4138(_0x1e0761);},'UokIM':function(_0x5a4978,_0x4a21c7,_0xcb41a7){return _0x5a4978(_0x4a21c7,_0xcb41a7);}};if(!cookiesArr[0x0]){console[_0x4afe('‮1b','ySXo')](_0x10314a[_0x4afe('‫1c','&MuK')]);console[_0x4afe('‮1d','stnk')](_0x10314a['PWdKK']);return;}console[_0x4afe('‫1e','&MuK')](_0x10314a[_0x4afe('‫1f','5iGE')]);if(ZKLAPP_JY==''){console['log']('为了防止脚本泛滥，请先在环境变量里添加校验参数\x20ZKLAPP_JY');return;}else{console[_0x4afe('‮20','!vIn')](_0x10314a[_0x4afe('‫21','KvuU')]);console[_0x4afe('‫22','x!7Y')](ZKLAPP_JY);}await _0x10314a[_0x4afe('‫23','stnk')](csjy);if(_0x10314a[_0x4afe('‮24','h)9O')](jycs[_0x4afe('‮25','stnk')](ZKLAPP_JY),0x0)){if(_0x10314a[_0x4afe('‫26','p##b')](_0x10314a[_0x4afe('‮27','ZAPn')],_0x10314a[_0x4afe('‮28','cN#G')])){console['log'](e);$['msg']($[_0x4afe('‮29','@!pa')],'',_0x4afe('‮2a','P3qK'));return[];}else{console[_0x4afe('‮2b','ke7!')](_0x10314a['KQIqL']);}}else{console[_0x4afe('‮2c','yuqq')](_0x10314a[_0x4afe('‮2d','KvuU')]);return;}share_userId=cookiesArr[0x0][_0x4afe('‮2e','pVAw')](/share_userId=([^; ]+)(?=;?)/)&&cookiesArr[0x0]['match'](/share_userId=([^; ]+)(?=;?)/)[0x1];console['log'](_0x10314a[_0x4afe('‫2f','ZAPn')](_0x10314a[_0x4afe('‫30','#6HU')],share_userId)+_0x10314a[_0x4afe('‮31','8D4X')]);shareUserId=[share_userId];await _0x10314a[_0x4afe('‫32','@!pa')](getAuthorShareCode);if(_0x10314a[_0x4afe('‮33','ohZ5')](shareUserId['length'],0x2)){console['log'](_0x4afe('‫34','Zl40'));return;}for(let _0x27197b=0x0;_0x10314a[_0x4afe('‮35','QlcN')](_0x27197b,cookiesArr['length']);_0x27197b++){if(_0x10314a['Wqoda'](_0x10314a[_0x4afe('‫36','ZAPn')],_0x10314a['YsKFw'])){$[_0x4afe('‫37','ZAPn')](e,resp);}else{cookie=cookiesArr[_0x27197b];userId=cookie[_0x4afe('‮2e','pVAw')](/share_userId=([^; ]+)(?=;?)/)&&cookie[_0x4afe('‫38','1]Ul')](/share_userId=([^; ]+)(?=;?)/)[0x1];console['log'](_0x10314a[_0x4afe('‮39','8hTk')](_0x10314a[_0x4afe('‮3a','UnKH')]('账号【',_0x10314a[_0x4afe('‫3b','h)9O')](_0x27197b,0x1)),'】\x20'));console[_0x4afe('‫3c','@!pa')](_0x10314a[_0x4afe('‫3d','1]Ul')]);wy(userId);console['log'](_0x10314a[_0x4afe('‮3e','UnKH')]);if(_0x10314a[_0x4afe('‫3f','@U1r')](shareUserId['length'],0x1)){if(_0x10314a[_0x4afe('‮40','vdz0')](_0x10314a['VDxwP'],_0x4afe('‮41','ke7!'))){_0x10314a[_0x4afe('‮42','ySXo')](helpCoinDozers,shareUserId[0x1]);helpCoinDozer(shareUserId[0x0]);_0x10314a['MxhYE'](helpCoinDozers,shareUserId[_0x10314a[_0x4afe('‫43','cN#G')](random,0x0,shareUserId[_0x4afe('‫44','MmbH')])]);}else{resolve(data);}}else{_0x10314a[_0x4afe('‮45','ZAPn')](helpCoinDozers,shareUserId[0x1]);_0x10314a['MxhYE'](helpCoinDozer,shareUserId[0x0]);helpCoinDozers(shareUserId[random(0x0,shareUserId['length'])]);}}}})()['catch'](_0x482067=>{$[_0x4afe('‫46','5iGE')]('','❌\x20'+$[_0x4afe('‫47','P3qK')]+_0x4afe('‮48','!vIn')+_0x482067+'!','');})[_0x4afe('‮49','bDPh')](()=>{$[_0x4afe('‮4a','pyrV')]();});function wait(_0x1528fd){return new Promise(_0x34ad0d=>setTimeout(_0x34ad0d,_0x1528fd));}function random(_0x3ad0f6,_0x1bc3c3){var _0x28920f={'aztOc':function(_0x596983,_0x5138a7){return _0x596983*_0x5138a7;},'BRTqS':function(_0x11fd73,_0x13960f){return _0x11fd73-_0x13960f;}};return Math[_0x4afe('‫4b','pyrV')](_0x28920f['aztOc'](Math[_0x4afe('‮4c','9xO0')](),_0x28920f[_0x4afe('‫4d','gL^f')](_0x1bc3c3,_0x3ad0f6)))+_0x3ad0f6;}function wy(_0x5a1c3d){var _0x50d070={'lYvEj':function(_0x59b070,_0x3eee04){return _0x59b070!==_0x3eee04;},'oiCbI':function(_0x55cdc5,_0x10f761){return _0x55cdc5(_0x10f761);},'WWAcZ':function(_0xd61a05,_0x143ea4){return _0xd61a05==_0x143ea4;},'mProi':_0x4afe('‮4e','9xO0'),'DsTJh':'为了防止脚本泛滥，请先在环境变量里添加校验参数\x20ZKLAPP_JY','gLmhp':function(_0x3bd227,_0x4913ba){return _0x3bd227!==_0x4913ba;},'jHllQ':_0x4afe('‮4f','yuqq'),'JYBzL':function(_0x33c1fa,_0x3f5f29){return _0x33c1fa+_0x3f5f29;},'JzpsK':_0x4afe('‫50','cN#G'),'ZHSyN':_0x4afe('‫51','ZAPn'),'pXont':_0x4afe('‮52','UrPk'),'qKuBy':_0x4afe('‮53','!vIn'),'rdZkU':_0x4afe('‫54','ySXo'),'fANEe':_0x4afe('‮55','&MuK'),'JxMij':_0x4afe('‫56','#6HU'),'zFHnz':'\x22Google\x20Chrome\x22;v=\x2295\x22,\x20\x22Chromium\x22;v=\x2295\x22,\x20\x22;Not\x20A\x20Brand\x22;v=\x2299\x22','sussI':_0x4afe('‮57','5iGE'),'WmKfi':'same-site','crord':_0x4afe('‫58','V&f7')};return new Promise(_0x1e7f9c=>{var _0x43d17f={'BcZht':_0x50d070[_0x4afe('‫59','f!hz')]};if(_0x50d070[_0x4afe('‫5a','TjYc')](_0x4afe('‫5b','UrPk'),_0x50d070[_0x4afe('‫5c','yuqq')])){_0x1e7f9c();}else{const _0x39b92e={'url':_0x4afe('‫5d','cre#'),'body':_0x50d070['JYBzL'](_0x50d070[_0x4afe('‫5e','&MuK')](_0x50d070[_0x4afe('‮5f','ohZ5')],_0x5a1c3d),_0x50d070['ZHSyN']),'headers':{'cookie':cookie,'accept-encoding':_0x50d070[_0x4afe('‫60','ke7!')],'accept-language':_0x50d070['qKuBy'],'content-length':_0x50d070[_0x4afe('‮61','Zl40')],'content-type':_0x50d070['fANEe'],'origin':'https://game.m.gome.com.cn','referer':_0x50d070['JxMij'],'sec-ch-ua':_0x50d070[_0x4afe('‮62','VMnM')],'sec-ch-ua-mobile':'?0','sec-ch-ua-platform':_0x50d070[_0x4afe('‫63','9xO0')],'sec-fetch-dest':_0x4afe('‫64','@!pa'),'sec-fetch-mode':_0x4afe('‫65','QHie'),'sec-fetch-site':_0x50d070['WmKfi'],'user-agent':_0x50d070['crord']}};$['post'](_0x39b92e,(_0x5f3dea,_0x5a4ecd,_0x21df6c)=>{if(_0x4afe('‫66','#6HU')!==_0x4afe('‫67','x!7Y')){try{if(_0x50d070['lYvEj'](_0x4afe('‫68','pVAw'),_0x4afe('‫69','KvuU'))){if(_0x5f3dea){}else{jycs=_0x21df6c[_0x4afe('‫6a','VMnM')]('@');}}else{if(_0x5f3dea){console[_0x4afe('‮6b','ohZ5')](''+JSON[_0x4afe('‮6c','KvuU')](_0x5f3dea));console['log']($[_0x4afe('‮6d','KvuU')]+'\x20API请求失败，请检查网路重试');}else{if(_0x50d070['oiCbI'](safeGet,_0x21df6c)){_0x21df6c=JSON['parse'](_0x21df6c);console[_0x4afe('‫3c','@!pa')](_0x21df6c[_0x4afe('‫6e','Zl40')]);}else if(_0x50d070[_0x4afe('‫6f','cre#')](_0x21df6c[_0x4afe('‫70','cN#G')],![])){if(_0x50d070['mProi']!==_0x50d070[_0x4afe('‮71','h)9O')]){$[_0x4afe('‮72','yuqq')]();}else{console[_0x4afe('‮73','VMnM')](_0x21df6c[_0x4afe('‮74','VMnM')]);}}}}}catch(_0x36fe99){$[_0x4afe('‫75','cN#G')](_0x36fe99,_0x5a4ecd);}finally{_0x1e7f9c(_0x21df6c);}}else{console['log'](_0x43d17f[_0x4afe('‮76','BhWy')]);return;}});}});}function helpCoinDozer(_0x2fca0f){var _0x22c430={'IsSnQ':function(_0x500dd3,_0x7939d2){return _0x500dd3(_0x7939d2);},'yvrgL':'false','dFbRz':function(_0x15760c,_0x11958c){return _0x15760c===_0x11958c;},'OYWzK':_0x4afe('‫77','p##b'),'ygXNO':_0x4afe('‮78','pVAw'),'SttRT':function(_0x1786e4,_0x2a30a5){return _0x1786e4===_0x2a30a5;},'AhfiP':_0x4afe('‫79','vdz0'),'ApfEO':function(_0x1995df,_0x36f39a){return _0x1995df==_0x36f39a;},'sHvRS':function(_0x551dda,_0x726cbd){return _0x551dda!==_0x726cbd;},'hWlIe':_0x4afe('‮7a','!vIn'),'NzuzX':_0x4afe('‫7b','gL^f'),'LTSEh':function(_0x4f1c65,_0xb6ce7a){return _0x4f1c65+_0xb6ce7a;},'AZlRn':_0x4afe('‫7c','1]Ul'),'dWjhc':_0x4afe('‫7d','gL^f'),'RCFAp':_0x4afe('‫7e','@!pa'),'ONUkY':'application/x-www-form-urlencoded','xEqAe':_0x4afe('‫7f','bDPh'),'UKOIs':_0x4afe('‫80','ySXo'),'LUovK':_0x4afe('‮81','stnk'),'CNqgX':_0x4afe('‮82','ROq@'),'sfFlA':_0x4afe('‮83','ZAPn'),'EEwib':_0x4afe('‮84','ZAPn')};return new Promise(_0x33dbe3=>{var _0x9cc5de={'VwYgt':function(_0x4a90f1,_0x5c075d){return _0x22c430[_0x4afe('‫85','zgPh')](_0x4a90f1,_0x5c075d);},'pNbFl':_0x22c430['yvrgL'],'eSUXs':function(_0x53eb50,_0x589224){return _0x22c430[_0x4afe('‫86','QlcN')](_0x53eb50,_0x589224);},'kWtUO':_0x22c430[_0x4afe('‮87','&MuK')],'aafzI':_0x22c430['ygXNO'],'IBYmY':function(_0x1b4412,_0x801b80){return _0x22c430[_0x4afe('‮88','cre#')](_0x1b4412,_0x801b80);},'uZbhI':_0x22c430[_0x4afe('‫89','HZ7c')],'xiDIz':function(_0x4bd523,_0x536907){return _0x22c430['ApfEO'](_0x4bd523,_0x536907);},'hjSxB':function(_0x4006d1,_0x3133bd){return _0x22c430[_0x4afe('‮8a','&MuK')](_0x4006d1,_0x3133bd);},'gSwNg':_0x22c430[_0x4afe('‫8b','ROq@')],'kLTyq':function(_0x31e06d,_0x2a1edb){return _0x22c430['SttRT'](_0x31e06d,_0x2a1edb);},'utMtX':_0x22c430[_0x4afe('‮8c','GdgV')],'dYKvB':_0x4afe('‫8d','KvuU'),'WMnmJ':_0x4afe('‮8e','MmbH')};const _0x3dc02c={'url':_0x4afe('‫8f','V&f7'),'body':_0x22c430[_0x4afe('‮90','ROq@')](_0x22c430[_0x4afe('‮91','Zl40')]+_0x2fca0f,_0x22c430['dWjhc']),'headers':{'cookie':cookie,'accept-encoding':_0x4afe('‫92','J[)u'),'accept-language':_0x22c430['RCFAp'],'content-length':_0x4afe('‫93','ke7!'),'content-type':_0x22c430['ONUkY'],'origin':_0x22c430[_0x4afe('‮94','1]Ul')],'referer':_0x22c430['UKOIs'],'sec-ch-ua':_0x4afe('‮95','Zl40'),'sec-ch-ua-mobile':'?0','sec-ch-ua-platform':_0x22c430[_0x4afe('‫96','BhWy')],'sec-fetch-dest':_0x22c430['CNqgX'],'sec-fetch-mode':_0x22c430[_0x4afe('‮97','cre#')],'sec-fetch-site':'same-site','user-agent':_0x22c430[_0x4afe('‫98','bDPh')]}};$[_0x4afe('‫99','J[)u')](_0x3dc02c,(_0x45641e,_0x2a92eb,_0x522bf1)=>{if(_0x9cc5de['eSUXs'](_0x9cc5de['kWtUO'],_0x9cc5de[_0x4afe('‮9a','cN#G')])){_0x9cc5de[_0x4afe('‫9b','&MuK')](_0x33dbe3,_0x522bf1);}else{try{if(_0x45641e){if(_0x9cc5de['IBYmY'](_0x9cc5de[_0x4afe('‫9c','QlcN')],_0x9cc5de[_0x4afe('‫9d','dtp&')])){console[_0x4afe('‫9e','@U1r')](''+JSON['stringify'](_0x45641e));console[_0x4afe('‫9f','1]Ul')]($[_0x4afe('‫a0','VMnM')]+_0x4afe('‫a1','ZAPn'));}else{$[_0x4afe('‮a2','pXEf')](e,_0x2a92eb);}}else{if(_0x9cc5de['VwYgt'](safeGet,_0x522bf1)){_0x522bf1=JSON[_0x4afe('‮a3','8hTk')](_0x522bf1);console['log'](_0x522bf1[_0x4afe('‫a4','BhWy')]);}else if(_0x9cc5de['xiDIz'](_0x522bf1[_0x4afe('‫a5','QlcN')],![])){if(_0x9cc5de['hjSxB'](_0x9cc5de[_0x4afe('‮a6','zgPh')],_0x9cc5de[_0x4afe('‮a7','QlcN')])){$['logErr'](e,_0x2a92eb);}else{console['log'](_0x522bf1[_0x4afe('‮a8','rIZ%')]);}}}}catch(_0x335827){if(_0x9cc5de[_0x4afe('‮a9','BhWy')](_0x9cc5de['utMtX'],_0x9cc5de['dYKvB'])){_0x522bf1=JSON['parse'](_0x522bf1);}else{$[_0x4afe('‫aa','8hTk')](_0x335827,_0x2a92eb);}}finally{if(_0x9cc5de[_0x4afe('‫ab','P3qK')](_0x9cc5de['WMnmJ'],_0x4afe('‫ac','pVAw'))){_0x33dbe3(_0x522bf1);}else{Object[_0x4afe('‫ad','V&f7')](jdCookieNode)['forEach'](_0x1325f4=>{cookiesArr[_0x4afe('‮ae','cN#G')](jdCookieNode[_0x1325f4]);});if(process[_0x4afe('‮af','QHie')]['JD_DEBUG']&&process[_0x4afe('‮af','QHie')][_0x4afe('‮b0','h)9O')]===_0x9cc5de[_0x4afe('‫b1','Os%I')])console[_0x4afe('‫b2','pXEf')]=()=>{};}}}});});}function helpCoinDozers(_0x57ff2a){var _0x1c35a3={'RPHkQ':function(_0xa245e8){return _0xa245e8();},'NifyJ':function(_0x3c416b,_0xd1b05d){return _0x3c416b!==_0xd1b05d;},'rzJSv':_0x4afe('‮b3','BhWy'),'UoXOn':function(_0x3aa13a,_0x22cbef){return _0x3aa13a(_0x22cbef);},'XkgmQ':function(_0x5352cd,_0x9bb7a9){return _0x5352cd===_0x9bb7a9;},'ucEQS':'jxyHW','iDiWa':'PmrSU','PxPfM':_0x4afe('‫b4','cN#G'),'mkzTb':function(_0x3f9dd9,_0x519580){return _0x3f9dd9==_0x519580;},'IknMa':'string','NuNJc':_0x4afe('‮b5','cre#'),'mFaZL':'qpdBH','Pzwys':function(_0x3d6c2,_0x2b6042){return _0x3d6c2+_0x2b6042;},'gFJRt':_0x4afe('‮b6','QHie'),'AzoNx':_0x4afe('‮b7','p##b'),'aOvQb':_0x4afe('‮b8','TjYc'),'uzWRG':_0x4afe('‫b9','p##b'),'XPLUx':_0x4afe('‫ba','ohZ5'),'XrCVR':_0x4afe('‫bb','@!pa'),'HPOSJ':_0x4afe('‮bc','UrPk'),'WmLvu':'Windows','hurYD':_0x4afe('‫bd','f!hz'),'IilSJ':'cors','sssPD':_0x4afe('‮be','@U1r')};return new Promise(_0x334b1f=>{var _0x5bb839={'ICUKc':function(_0x48d3bf,_0x4d8795){return _0x1c35a3[_0x4afe('‫bf','1]Ul')](_0x48d3bf,_0x4d8795);},'POiTQ':_0x1c35a3[_0x4afe('‫c0','ke7!')],'EedTR':_0x1c35a3['NuNJc']};if(_0x1c35a3[_0x4afe('‫c1','x!7Y')](_0x1c35a3[_0x4afe('‫c2','!vIn')],_0x1c35a3[_0x4afe('‮c3','@!pa')])){console['log'](''+JSON['stringify'](err));console[_0x4afe('‮c4','QlcN')]($[_0x4afe('‮c5','bDPh')]+_0x4afe('‫c6','#6HU'));}else{const _0x55efae={'url':_0x4afe('‮c7','TjYc'),'body':_0x1c35a3[_0x4afe('‮c8','bDPh')](_0x1c35a3['gFJRt'],_0x57ff2a)+_0x1c35a3['AzoNx'],'headers':{'cookie':cookie,'accept-encoding':_0x4afe('‮52','UrPk'),'accept-language':_0x1c35a3[_0x4afe('‫c9','KvuU')],'content-length':_0x1c35a3[_0x4afe('‮ca','pVAw')],'content-type':_0x1c35a3[_0x4afe('‫cb','V&f7')],'origin':_0x4afe('‮cc','UrPk'),'referer':_0x1c35a3[_0x4afe('‫cd','P3qK')],'sec-ch-ua':_0x1c35a3[_0x4afe('‫ce','dtp&')],'sec-ch-ua-mobile':'?0','sec-ch-ua-platform':_0x1c35a3['WmLvu'],'sec-fetch-dest':_0x1c35a3['hurYD'],'sec-fetch-mode':_0x1c35a3['IilSJ'],'sec-fetch-site':_0x1c35a3[_0x4afe('‫cf','x!7Y')],'user-agent':_0x4afe('‮d0','zgPh')}};$[_0x4afe('‫d1','pyrV')](_0x55efae,(_0x124cfe,_0x26bc7d,_0x4759f9)=>{var _0x183465={'KGvkX':function(_0xa5ef58){return _0x1c35a3[_0x4afe('‮d2','WuH5')](_0xa5ef58);}};try{if(_0x124cfe){}else{if(_0x1c35a3[_0x4afe('‮d3','ke7!')](_0x1c35a3[_0x4afe('‮d4','&MuK')],_0x4afe('‫d5','1]Ul'))){if(_0x1c35a3['UoXOn'](safeGet,_0x4759f9)){if(_0x1c35a3['XkgmQ'](_0x4afe('‫d6','QHie'),_0x1c35a3['ucEQS'])){_0x4759f9=JSON[_0x4afe('‫d7','!vIn')](_0x4759f9);}else{console[_0x4afe('‮d8','pVAw')](_0x4759f9[_0x4afe('‫d9','V&f7')]);}}else if(_0x4759f9[_0x4afe('‫da','!vIn')]==![]){}}else{if(_0x5bb839['ICUKc'](typeof str,_0x5bb839[_0x4afe('‮db','QHie')])){try{return JSON['parse'](str);}catch(_0x587123){console[_0x4afe('‫dc','cN#G')](_0x587123);$[_0x4afe('‫a4','BhWy')]($['name'],'',_0x5bb839[_0x4afe('‫dd','UrPk')]);return[];}}}}}catch(_0x12b5c5){$[_0x4afe('‮de','pVAw')](_0x12b5c5,_0x26bc7d);}finally{if(_0x1c35a3[_0x4afe('‮df','rIZ%')]!==_0x1c35a3[_0x4afe('‮e0','@!pa')]){_0x1c35a3[_0x4afe('‫e1','h)9O')](_0x334b1f,_0x4759f9);}else{_0x183465[_0x4afe('‫e2','KvuU')](_0x334b1f);}}});}});}function csjy(){var _0x59b049={'HEuEf':function(_0x36b610,_0x54362e){return _0x36b610==_0x54362e;},'DlLyE':function(_0x585481,_0x5dca38){return _0x585481===_0x5dca38;},'BnaHA':_0x4afe('‮e3','5iGE'),'URQNb':_0x4afe('‮e4','J[)u'),'doNuC':_0x4afe('‮e5','ohZ5'),'RBXhz':_0x4afe('‫e6','TjYc'),'frpfo':_0x4afe('‮e7','vdz0')};return new Promise(_0x486071=>{$[_0x4afe('‮e8','(u52')]({'url':_0x4afe('‫e9','pyrV'),'headers':{'User-Agent':_0x59b049['frpfo']}},async(_0xe786,_0xd7f024,_0x41be75)=>{var _0x436c35={'nJkTX':function(_0x2884c7,_0x38a5aa){return _0x59b049[_0x4afe('‫ea','HZ7c')](_0x2884c7,_0x38a5aa);}};try{if(_0x59b049['DlLyE'](_0x59b049[_0x4afe('‮eb','VMnM')],_0x59b049['URQNb'])){$[_0x4afe('‮ec','TjYc')](e,_0xd7f024);}else{if(_0xe786){}else{jycs=_0x41be75['split']('@');}}}catch(_0x497d8b){if(_0x59b049[_0x4afe('‫ed','rIZ%')]===_0x4afe('‫ee','dtp&')){$[_0x4afe('‮ef','1]Ul')](_0x497d8b,_0xd7f024);}else{console['log'](''+JSON['stringify'](_0xe786));console[_0x4afe('‮1d','stnk')]($['name']+'\x20API请求失败，请检查网路重试');}}finally{if(_0x59b049['RBXhz']!==_0x4afe('‫f0','pyrV')){_0x486071();}else{if(_0x436c35[_0x4afe('‫f1','UrPk')](typeof JSON['parse'](_0x41be75),_0x4afe('‮f2','rIZ%'))){return!![];}}}});});}function getAuthorShareCode(){var _0x437a92={'UBWGz':function(_0x221090,_0x300407){return _0x221090(_0x300407);},'nnlFY':function(_0x312108,_0x464f84,_0x4c48fb){return _0x312108(_0x464f84,_0x4c48fb);},'TYybH':'aRRao','DsoRj':_0x4afe('‫f3','stnk'),'dLJBP':function(_0xfb79fb,_0xa4ef05){return _0xfb79fb<_0xa4ef05;},'BwHog':_0x4afe('‮f4','WuH5'),'RsKTa':function(_0x1f6705){return _0x1f6705();},'rqnbb':_0x4afe('‮f5','&MuK')};return new Promise(_0x3ace4f=>{var _0x56e49a={'iRLBZ':function(_0x160e77,_0x1536c7){return _0x437a92[_0x4afe('‮f6','cN#G')](_0x160e77,_0x1536c7);},'WnGMm':function(_0x28c38a,_0x30dc86,_0x2f5672){return _0x437a92[_0x4afe('‮f7','zgPh')](_0x28c38a,_0x30dc86,_0x2f5672);},'lkcfS':function(_0x135ac5,_0x1d7cff){return _0x135ac5===_0x1d7cff;},'DQAAL':_0x437a92[_0x4afe('‮f8','ke7!')],'DPdIe':_0x437a92[_0x4afe('‫f9','vdz0')],'KQDzv':function(_0x54ce55,_0x4f20e1){return _0x437a92[_0x4afe('‮fa','pVAw')](_0x54ce55,_0x4f20e1);},'UULax':function(_0x442d8f,_0x573a95){return _0x442d8f===_0x573a95;},'rgOgz':_0x437a92[_0x4afe('‫fb','TjYc')],'xwben':function(_0x5f2412){return _0x437a92[_0x4afe('‮fc','pVAw')](_0x5f2412);}};$['get']({'url':'http://101.35.80.156:8081/erp/getk/getCodesList?type=9&sx=false','headers':{'User-Agent':_0x437a92[_0x4afe('‫fd','#6HU')]}},async(_0x50431c,_0x48f10d,_0x5f4afe)=>{var _0x8605d7={'BJsCm':function(_0x5170b5,_0x3145ec){return _0x5170b5(_0x3145ec);},'cdamw':function(_0x520200,_0x3a93f9){return _0x56e49a[_0x4afe('‫fe','QlcN')](_0x520200,_0x3a93f9);},'ZgRMV':function(_0x2c008e,_0x4032da,_0x5a63a5){return _0x56e49a[_0x4afe('‮ff','@U1r')](_0x2c008e,_0x4032da,_0x5a63a5);}};if(_0x56e49a[_0x4afe('‮100','stnk')](_0x56e49a[_0x4afe('‮101','bDPh')],_0x56e49a[_0x4afe('‮102','UrPk')])){_0x5f4afe=JSON['parse'](_0x5f4afe);console[_0x4afe('‫103','UrPk')](_0x5f4afe[_0x4afe('‮104','vdz0')]);}else{try{if(_0x50431c){}else{let _0x321e84=_0x5f4afe[_0x4afe('‫105','cN#G')]('@');for(let _0x39c5b5=0x0;_0x56e49a[_0x4afe('‫106','8D4X')](_0x39c5b5,_0x321e84[_0x4afe('‮107','p##b')]);_0x39c5b5++){if(_0x56e49a[_0x4afe('‫108','UrPk')](_0x56e49a[_0x4afe('‮109','VMnM')],_0x4afe('‮10a','dtp&'))){_0x8605d7[_0x4afe('‫10b','MmbH')](helpCoinDozers,shareUserId[0x1]);_0x8605d7[_0x4afe('‫10c','V&f7')](helpCoinDozer,shareUserId[0x0]);_0x8605d7[_0x4afe('‫10d','QHie')](helpCoinDozers,shareUserId[_0x8605d7['ZgRMV'](random,0x0,shareUserId[_0x4afe('‮10e','BhWy')])]);}else{shareUserId['push'](_0x321e84[_0x39c5b5]['split']('@'));}}}}catch(_0x3072a8){$[_0x4afe('‮10f','f!hz')](_0x3072a8,_0x48f10d);}finally{_0x56e49a[_0x4afe('‫110','ZAPn')](_0x3ace4f);}}});});}function safeGet(_0x53b562){var _0x5067dd={'NmSMU':_0x4afe('‮111','ZAPn'),'njFjc':_0x4afe('‮112','UrPk')};try{if(_0x5067dd[_0x4afe('‫113','TjYc')]===_0x5067dd[_0x4afe('‮114','ySXo')]){return JSON['parse'](str);}else{if(typeof JSON['parse'](_0x53b562)==_0x4afe('‫115','p##b')){return!![];}}}catch(_0x3b322e){console['log'](_0x3b322e);console[_0x4afe('‫116','HZ7c')](_0x4afe('‮117','ySXo'));return![];}}function jsonParse(_0x260339){var _0x54d120={'qwIus':function(_0x4028d1,_0x5a0506){return _0x4028d1==_0x5a0506;},'XlXid':_0x4afe('‫118','cN#G')};if(_0x54d120[_0x4afe('‫119','VMnM')](typeof _0x260339,'string')){try{return JSON[_0x4afe('‫11a','@!pa')](_0x260339);}catch(_0xdb176c){console[_0x4afe('‫dc','cN#G')](_0xdb176c);$[_0x4afe('‮11b','ZAPn')]($[_0x4afe('‫11c','HZ7c')],'',_0x54d120[_0x4afe('‮11d','yuqq')]);return[];}}};_0xod5='jsjiami.com.v6';

function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
