const toastDuration = 5000;
const toastMessageBtnClassName = "toast-message-btn";
const toastMsgClassName = "toast-message";
const toastMsgContainerClassName = "toast-message-container";

const toastMessageBtn = document.querySelector(`.${toastMessageBtnClassName}`);
const toastContainer = document.querySelector(`.${toastMsgContainerClassName}`);

const createToast = (msg) => {
  const toastMsg = document.createElement(`div`);
  toastMsg.classList.add(toastMsgClassName);
  toastMsg.innerText = msg;
  toastContainer.appendChild(toastMsg);

  console.log(toastMsg, toastContainer);
  setTimeout(() => toastMsg.remove(), toastDuration);
};

//  HTML API
const notifyMeHTMLAPI = () => {
  // Let's check if the browser supports notifications
  if (!("Notification" in window)) {
    alert("This browser does not support desktop notification");
  }

  // Let's check whether notification permissions have already been granted
  else if (Notification.permission === "granted") {
    // If it's okay let's create a notification
    var notification = new Notification("Hi there!");
  }

  // Otherwise, we need to ask the user for permission
  else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(function (permission) {
      // If the user accepts, let's create a notification
      if (permission === "granted") {
        var notification = new Notification("Hi there!");
      }
    });
  }

  // At last, if the user has denied notifications, and you
  // want to be respectful there is no need to bother them any more.
  // If the user has deny multiple times the permission, the browser will not ask again
};
