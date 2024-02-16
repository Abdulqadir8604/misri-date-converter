const QgregorianDate = document.getElementById('gregorianDate@');
const misriDate = document.getElementById('misriDate');
const misriDatev1 = document.getElementById('misriDatev1');

const QmisriDate = document.getElementById('misriDate@');
const gregorianDate = document.getElementById('gregorianDate');

  QgregorianDate.addEventListener('change', () => {
  const gregorianDateValue = QgregorianDate.value;
  const formattedDate = gregorianDateValue.split('-');
  const year = formattedDate[0];
  const month = formattedDate[1];
  const day = formattedDate[2];
  const date = `${day}-${month}-${year}`;
  convertToMisriDate(date);
});

QmisriDate.addEventListener('change', () => {
  const misriDateValue = QmisriDate.value;
  convertToGregorianDate(misriDateValue);
})
const convertToMisriDate = (date) => {
  const url = `https://misri-date-api.onrender.com/gregToMisri/${date}`;
  fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  }).then(r => r.json())
  .then(data => {
    misriDate.value = data.data.misriDatev2;
    misriDatev1.innerText = data.data.misriDatev1;
  })
}

const convertToGregorianDate = (date) => {
  const url = `https://misri-date-api.onrender.com/misriToGreg/${date}`;
  fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  }).then(r => r.json())
  .then(data => {
    gregorianDate.value = data.data.gregorianDatev1;
  })
}

