'use strict';
{
  const uploadAreaForm = document.querySelector('.upload-area__form');

  // ドラッグ要素がアップロードエリア上にある時のイベント
  uploadAreaForm.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadAreaForm.style.backgroundColor = 'rgb(49, 142, 203)';
  });

  // ドラッグ要素がアップロードエリア上から離れた時のイベント
  uploadAreaForm.addEventListener('dragleave', (e) => {
    e.preventDefault();
    uploadAreaForm.style.backgroundColor = 'rgba(49, 142, 203, 0.6)';
  });

  // ドラッグ要素がアップロードエリア内でドロップされた時のイベント
  uploadAreaForm.addEventListener('drop', (e) => {
    e.preventDefault();
    filePreview(e.dataTransfer.files[0]);
    uploadAreaForm.style.backgroundColor = 'rgba(49, 142, 203, 0.6)';
  });

  const filePreview = (file) => {
    const fileReader = new FileReader();
    // 読み込みが完了したらsrc属性に指定する
    fileReader.addEventListener("load", () => {
      document.getElementById("preview").src = fileReader.result;
    });
    // fileReader.resultは以下のメソッドを使用して初めて戻り値のデータ型が決まる
    fileReader.readAsDataURL(file);
  }
}