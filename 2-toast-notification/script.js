const toastDuration = 5000;
const toastNotifBtnClassName = "toast-notification-btn";
const toastMsgClassName = "toast-message";
const toastMsgContainerClassName = "toast-message-container";

const toastNotifBtn = document.querySelector(`.${toastNotifBtnClassName}`);
const toastContainer = document.querySelector(`.${toastMsgContainerClassName}`);

toastNotifBtn.addEventListener("click", () => createNotification());

const createNotification = () => {
  const notif = document.createElement(`div`);
  notif.classList.add(toastMsgClassName);
  notif.innerText = "Hello user from a Toast Notification!";
  toastContainer.appendChild(notif);

  console.log(notif, toastContainer);
  setTimeout(() => notif.remove(), toastDuration);
};
