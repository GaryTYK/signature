document.addEventListener('DOMContentLoaded', () => {
    // 從本地存儲中獲取資料
    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');
    const signature = localStorage.getItem('signature');

    // 顯示資料
    document.getElementById('displayName').textContent = name;
    document.getElementById('displayEmail').textContent = email;
    document.getElementById('displaySignature').src = signature;
});

function clearStorageAndGoBack() {
    // 清除 localStorage 中的資料
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    localStorage.removeItem('signature');
    // 返回
    window.location.href = 'index.html';
}