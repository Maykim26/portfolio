/**
 * @filename    :  index.js
 * @author      :  김명희 (audgml522@naver.com)
 * @description :  클릭이벤트
 */

document.querySelectorAll(".menu-item").forEach((v, i) => {
  v.addEventListener("mouseover", (e) => {
    const current = e.currentTarget;
    const sub = current.querySelector(".sub");
    // scriollHeight는 요의 크를 벗어난 만큼의 높이를 의
    sub.style.maxHeight = sub.scrollHeight + "px";
  });
  v.addEventListener("mouseout", (e) => {
    const current = e.currentTarget;
    const sub = current.querySelector(".sub");
    sub.style.maxHeight = null;
  });
});
