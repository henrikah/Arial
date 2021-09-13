window.addEventListener('DOMContentLoaded', () => {
    let arialConverter = document.getElementById('arialConverter');
    let arialConverted = document.getElementById('arialConverted');
    let copyButton = document.getElementById('copyButton');
    let copySpan = document.getElementById('copy');
    let clearSpan = document.getElementById('clear');
    const startConverterText = arialConverter.innerHTML;
    arialConverter.addEventListener('input', () => {
        arialConverted.innerHTML = arialConverter.innerHTML.replace(/(<\/?(?:a|p|ul|li|br)[^>]*>)|<[^>]+>/ig, '$1');
        arialConverted.innerHTML = arialConverted.innerHTML.replace(/(<\/?pre.*?>)/ig, '');
        toggleButtonToPrimary(copyButton);
    })
    clearSpan.addEventListener('click', () => {
        arialConverter.innerHTML = startConverterText;
        let event = new Event('input');
        arialConverter.dispatchEvent(event);
    });
    copySpan.addEventListener('click', function () {
        if (window.getSelection) {
            let range = document.createRange();
            let selection = window.getSelection();
            if (selection.rangeCount > 0)
                selection.removeAllRanges();
            range.selectNode(arialConverted);
            selection.addRange(range);
            document.execCommand('copy') ? toggleButtonToSuccess(copyButton) : toggleButtonToError(copyButton);
            selection.removeAllRanges();
        }
    });
    let toggleButtonToPrimary = (button) => {
        button.classList.remove('btn-success');
        button.classList.remove('border-success');
        button.classList.remove('btn-danger');
        button.classList.remove('border-danger');
        button.classList.add('btn-primary');
        button.classList.add('border-primary');
    };
    let toggleButtonToSuccess = (button) => {
        button.classList.remove('btn-primary');
        button.classList.remove('border-primary');
        button.classList.remove('btn-danger');
        button.classList.remove('border-danger');
        button.classList.add('btn-success');
        button.classList.add('border-success');
    };
    let toggleButtonToError = (button) => {
        button.classList.remove('btn-success');
        button.classList.remove('border-success');
        button.classList.remove('btn-primary');
        button.classList.remove('border-primary');
        button.classList.add('btn-danger');
        button.classList.add('border-danger');
    };
});