import Swal from "sweetalert2";
import { SHOW_TOAST } from "./const";

export const showTimerMessage = (title, type) => {
  let timerInterval;
  Swal.fire({
    title: title,
    html: "<b></b>",
    icon: type,
    timer: SHOW_TOAST,
    didOpen: () => {
      Swal.showLoading();
      timerInterval = setInterval(() => {
        const content = Swal.getHtmlContainer();
        if (content) {
          const b = content.querySelector("b");
          if (b) b.textContent = (Swal.getTimerLeft() / 1000) | 0;
        }
      }, 100);
    },
    willClose: () => {
      clearInterval(timerInterval);
    },
  }).then((result) => {
    if (result.dismiss === Swal.DismissReason.timer)
      console.log("I was closed by the timer");
  });
};

export const showAlert = (title, html, type) => {
  Swal.fire({ title: title, html: html, icon: type });
  let color = type === "error" ? "#dc3545" : "#28a745";
  document.getElementsByClassName(
    "swal2-confirm swal2-styled"
  )[0].style.backgroundColor = color;
};
