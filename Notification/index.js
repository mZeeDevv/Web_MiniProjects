let notification = 1;
const notification_count = document.querySelector('.notification_count')
const bell = document.querySelector('.notification_bell svg')
// const reset_button = document.querySelector(".reset_notification")
// const add_notification = document.querySelector(".add_notification")

function addNotification() {
   notification++;
   updateNotification();
   bell.style.animation = "move 0.5s linear";

   setTimeout(() => {
   bell.style.animation = "none";
   }, 500);
 showNotification();
}
function markRead() 
{
    notification = 0;
    updateNotification();
    hideNotification();
}
function updateNotification() {
   notification_count.textContent = notification;
}
function showNotification() {
   notification_count.style.transform = "scale(1)";
}   
function hideNotification() {   
    notification_count.style.transform = "scale(0)";
}