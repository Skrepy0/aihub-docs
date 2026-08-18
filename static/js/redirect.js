(function () {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') {
    return;
  }

  if (sessionStorage.getItem('docusaurus-redirected')) {
    return;
  }

  const path = window.location.pathname;

  if (path.startsWith('/zh/') || path.startsWith('/en/')) {
    sessionStorage.setItem('docusaurus-redirected', 'true');
    return;
  }

  if (path !== '/' && path !== '/index.html') {
    return;
  }

  const languages = navigator.languages || [navigator.language];
  const preferredLang = languages.find((lang) => lang.startsWith('zh'));

  if (preferredLang) {
    sessionStorage.setItem('docusaurus-redirected', 'true');
    window.location.replace('/zh/');
  }
})();
