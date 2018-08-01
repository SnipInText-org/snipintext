// chrome.runtime.onInstalled.addListener(function () {
//     chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
//         chrome.declarativeContent.onPageChanged.addRules([{
//             conditions: [new chrome.declarativeContent.PageStateMatcher({
//                 pageUrl: {hostEquals: "localhost"},
//             })
//             ],
//             actions: [new chrome.declarativeContent.ShowPageAction()]
//         }]);
//     });
// });
//
// chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
//     chrome.pageAction.show(tabs[0].id);
// });
