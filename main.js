"use strict";
{
  // *************************
  // 画像のドラッグ&ドロップ
  // *************************
  const img = document.getElementById("draggableImg");
  const dropArea = document.querySelector(".drop-container");

  // ドラッグスタート時のイベント
  const dragstartHandler = (e) => {
    e.dataTransfer.dropEffect = "move";
    e.dataTransfer.setData("text", e.target.id);
  };
  img.addEventListener("dragstart", dragstartHandler);

  // ドラッグ要素がドロップターゲット上にある時のイベント
  function dragoverHandler(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  }
  dropArea.addEventListener("dragover", dragoverHandler);

  // ドラッグ要素がドロップされる時のイベント
  function dropHandler(e) {
    e.preventDefault();
    const data = e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(data));
  }
  dropArea.addEventListener("drop", dropHandler);

  // *************************
  // pタグのドラッグ&ドロップ
  // *************************
  const p = document.getElementById("draggableElement");
  // // pタグのドラッグイベント
  function dragStartHandler2(e) {
    e.dataTransfer.dropEffect = "move";
    e.dataTransfer.setData("text", e.target.id);
  }
  p.addEventListener("dragstart", dragStartHandler2);

  function dragoverHandler2(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  }
  dropArea.addEventListener('dragover', dragoverHandler2);

  function dropHandler2(e) {
    e.preventDefault();
    const id = e.dataTransfer.getData("text");
    dropArea.appendChild(document.getElementById(id));
  }
  dropArea.addEventListener("drop", dropHandler2);
}
