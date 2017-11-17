var text = location.search.substr(1);
text = decodeURIComponent(text);
document.title = browser.i18n.getMessage('extName');
document.body.innerText = text;
