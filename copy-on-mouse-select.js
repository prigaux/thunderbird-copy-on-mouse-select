window.addEventListener('mouseup', function() {
    const selected = document.getSelection().toString()
    if (selected !== '') {
        document.execCommand('copy')
        //navigator.clipboard.writeText(selected)
    }
})
