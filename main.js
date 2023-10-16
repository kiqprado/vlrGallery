const toggleBtn = document.getElementById('toggle')

function toggleMode() {
  document.documentElement.classList.toggle('dark')
}

toggleBtn.onclick = toggleMode
