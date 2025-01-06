function handleDOMChanges() {
    document.querySelectorAll('div.contentVideoElement__HnLdK img').forEach((img) => {
        if (img) {
            img.hidden = true;
            img.remove();
        }
    });
}

// Set up a MutationObserver to watch for changes in the DOM
const observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
        if (mutation.type === 'childList') {
            handleDOMChanges();
        }
    }
});

// Start observing the entire document for changes
observer.observe(document.body, {
    childList: true, // Watch for additions/removals of child nodes
    subtree: true // Watch the entire subtree of the document
});

handleDOMChanges();

console.log("Okko Logo Remover executed")

setTimeout(() => {
    observer.disconnect();
}, 30000); // 30 seconds