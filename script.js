function sendData() {
  const cupon_no = document.getElementById('cuponInput').value.trim();
  const params = Object.fromEntries(new URLSearchParams(window.location.search));
  const user_id = params.enrollment_no;
  if (!cupon_no) {
    responseMsg.style.color = 'red';
    responseMsg.textContent = "Please enter a coupon number.";
    console.log(user_id);
    return;
  }
  fetch('https://orientation-backend.onrender.com/input-data', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ user_id, cupon_no })
  }).then((responseMsg)=>{
     if(responseMsg.status==200){
        alert('user entered successfully');
     }
     if(responseMsg.status==201){
        alert('duplicate entry');
     }
  }).catch((err)=>{
    console.log(err);
  })
}
