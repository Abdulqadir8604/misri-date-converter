const gregorianDate = document.getElementById('gregorianDate');
const misriDate = document.getElementById('misriDate');

gregorianDate.addEventListener('change', () => {
  const gregorianDateValue = gregorianDate.value;
  const formattedDate = gregorianDateValue.split('-');
  const year = formattedDate[0];
  const month = formattedDate[1];
  const day = formattedDate[2];
  const date = `${day}-${month}-${year}`;
  convertToMisriDate(date);
});
const convertToMisriDate = (date) => {
  const url = `http://localhost:8080/gregToMisri/${date}`;
  fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  }).then(r => r.json())
  .then(data => {
    misriDate.value = data.data.misriDatev1;
  })
}

