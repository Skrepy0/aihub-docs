(function () {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') {
    return;
  }

  const path = window.location.pathname;

  if (path.startsWith('/zh/') || path.startsWith('/en/')) {
    return;
  }

  if (path !== '/' && path !== '/index.html') {
    return;
  }

  const languages = navigator.languages || [navigator.language];
  const preferredLang = languages.find((lang) => lang.startsWith('zh'));

  if (preferredLang) {
    window.location.replace('/zh/');
  }
})();
