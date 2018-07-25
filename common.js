window.onload = () => {
    const webview = document.getElementById('app');
    webview.addContentScripts([{
        name: 'rule',
        matches: ['*://*/*'],
        js: {files: ['inject/inject.js']},
        css: {files: ['inject/inject.css']},
        run_at: 'document_end'
    }]);
};