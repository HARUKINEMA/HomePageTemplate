// ページをreloadする方法
// reloadの基本的な使い方
function doReload() {
 
    // reloadメソッドによりページをリロード
    window.location.reload();
    alert("更新したぜ!!")
}
 
window.addEventListener('load', function () {
    // ページ表示完了した5秒後にリロード
    setTimeout(doReload, 5000);
});