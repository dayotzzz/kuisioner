const btnPlay = document.querySelector('#button .mulai')
const btnPlay2 = document.querySelector('#button .mulai2')
const btnPlay3 = document.querySelector('#button .mulai3')
const btnPlay4 = document.querySelector('#button .mulai4')
const messege = document.querySelector('.messege-box')
const messege1 = document.querySelector('.messege-box1')
const messege2 = document.querySelector('.messege-box2')
const messege3 = document.querySelector('.messege-box3')
const messege4 = document.querySelector('.messege-box4')

const messege5 = document.querySelector('.messege-bo')
const messege2P = document.querySelector('.messege-bo .pesan p')
const hilang1 = document.querySelector('.hilang1')
const hilang2 = document.querySelector('.hilang2')
const nama = document.querySelectorAll('.nama h2')[0]
const nama1 = document.querySelectorAll('.nama h2')[1]
const nama2 = document.querySelectorAll('.nama h2')[2]
const nama3 = document.querySelectorAll('.nama h2')[3]
const waktu = document.getElementById('waktu')
const jam = waktu.querySelector('h1')
const hari = waktu.querySelector('p')
const bg1 = document.querySelector('.background1')
const bg2 = document.querySelector('.background2')
const body = document.querySelector('.body')
const audio = document.querySelector('.audio')

body.classList.add('background1')

const date = new Date()
const hour = String(date.getHours()).padStart(2, '0')
const minutes = String(date.getMinutes()).padStart(2, '0')
const day = date.getDay()
const tgl = date.getDate()
const month = date.getMonth()
const year = date.getFullYear()

hari.innerHTML = `${dayID()}, ${tgl} ${monthID()} ${year}`
jam.innerHTML = `${hour}:${minutes}`

// Dirubah 
const pengirim = "dapaa";
const pesan = `by the way busway maksud gua pindah platform tu pindah ke whatsApp hehe. sorry ya sebelumnya gue lancang minta nomor lu. klo berkenan klik yg dibawah ya!!`;

if (pengirim) {
  nama.innerHTML = pengirim;
  nama1.innerHTML = pengirim;
  nama2.innerHTML = pengirim;
  nama3.innerHTML = pengirim;
} else {
  nama.innerHTML = "Nama Kamu";
  nama1.innerHTML = "Nama Kamu";
  nama2.innerHTML = "Nama Kamu";
  nama3.innerHTML = "Nama Kamu";
}

btnPlay.addEventListener('click', () => {
  audio.play()
  messege1.style.display = "block";
  messege1.style.transform = "translateX(0)"
  btnPlay.style.display = "none";
  btnPlay2.style.display = "block";
})

btnPlay2.addEventListener('click', () => {
  audio.play()
  messege2.style.display = "block";
  messege2.style.transform = "translateX(0)"
  messege1.style.display = "none";
  btnPlay2.style.display = "none";
  btnPlay3.style.display = "block";
})

btnPlay3.addEventListener('click', () => {
  audio.play()
  messege3.style.display = "block";
  messege3.style.transform = "translateX(0)"
  messege2.style.display = "none";
  btnPlay3.style.display = "none";
  btnPlay4.style.display = "block";
})

btnPlay4.addEventListener('click', () => {
  audio.play()
  messege4.style.display = "block";
  messege4.style.transform = "translateX(0)"
  messege3.style.display = "none";
  btnPlay4.style.display = "none";
  hilang1.style.display = "block";
})


hilang1.addEventListener('click', () => {
  messege4.style.display = "none";
  messege5.style.transform = "translateX(0)"
  hilang1.style.display = "none"
  hilang2.style.display = "block"
  Swal.fire({
    imageUrl: "/assets/img/stiker_mylove.gif",
    imageHeight: 120,
    title: 'Masukin nama lu yaa',
    html: `<input type="text" id="login" class="swal2-input" placeholder="Nama Kamu">`,
    confirmButtonText: 'Kirim',
    focusConfirm: false,
    preConfirm: () => {
      const login = Swal.getPopup().querySelector('#login').value
      return { login }
    }
  }).then((result) => {
    let i = 0;
    const speed = 50;
    const namaAwal = result.value.login.charAt(0)
    let txt = `Halo, ${result.value.login}!! ${pesan}`;

    const typeWriter = () => {
      if (i < txt.length) {
        messege2P.innerHTML += txt.charAt(i);
        i++;
        messege2.classList.remove('kelip')
        hilang2.style.display = "none"
        setTimeout(typeWriter, speed)
      } else {
        messege2.classList.add('kelip')
        body.classList.replace('background1', 'background2')
        body.classList.add('muncul')
        hilang2.style.display = "block"
      }
    }
    typeWriter()


  })
})

hilang2.addEventListener('click', () => {
  window.open(`https://ig.me/m/prtdap`, '_blank')
})

