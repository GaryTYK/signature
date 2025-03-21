document.addEventListener('DOMContentLoaded', () => {
    // get localStorage
    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');
    const signature = localStorage.getItem('signature');

    // display data
    document.getElementById('displayName').textContent = name;
    document.getElementById('displayEmail').textContent = email;
    document.getElementById('displaySignature').src = signature;
});

function clearStorageAndGoBack() {
    // remove localStorage data
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    localStorage.removeItem('signature');
    
    window.location.href = 'index.html';
}