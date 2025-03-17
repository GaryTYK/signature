document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('signature');
    const ctx = canvas.getContext('2d');
    let drawing = false;

    // 開始繪圖
    canvas.addEventListener('mousedown', () => {
        drawing = true;
        ctx.beginPath();
    });

    // 繪製簽名
    canvas.addEventListener('mousemove', (event) => {
        if (drawing) {
            ctx.lineWidth = 2;
            ctx.lineCap = 'round';
            ctx.strokeStyle = 'black';
            ctx.lineTo(event.offsetX, event.offsetY);
            ctx.stroke();
        }
    });

    // 停止繪圖
    canvas.addEventListener('mouseup', () => {
        drawing = false;
        ctx.closePath();
    });

    // 清除簽名按鈕
    document.getElementById('clearSignature').addEventListener('click', () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    });

    // 表單提交
    document.getElementById('signatureForm').addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const signatureData = canvas.toDataURL(); // 獲取簽名的 Base64 圖片

        // 清除之前的資料
        localStorage.removeItem('name');
        localStorage.removeItem('id');
        localStorage.removeItem('email');

        // 將資料存入本地存儲
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        localStorage.setItem('signature', signatureData);

        // 跳轉到顯示頁面
        window.location.href = 'display.html';
    });
});