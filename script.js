
const cpus = {
  snapdragon8gen1: {
    cores: '1×3.0 GHz + 3×2.5 GHz + 4×1.8 GHz',
    gen: '5G',
    score: 'Geekbench 5: 1100 / 3600'
  },
  dimensity9000: {
    cores: '4×3.05 GHz + 4×1.8 GHz',
    gen: '5G',
    score: 'Geekbench 5: 1200 / 3800'
  },
  exynos2200: {
    cores: '1×2.8 GHz + 3×2.5 GHz + 4×1.8 GHz',
    gen: '5G',
    score: 'Geekbench 5: 1000 / 3400'
  }
};

function showCPU() {
  const sel = document.getElementById('cpuSelect').value;
  const info = document.getElementById('cpuInfo');
  info.innerHTML = cpus[sel]
    ? `عدد الأنوية: ${cpus[sel].cores}<br>الجيل: ${cpus[sel].gen}<br>أداء: ${cpus[sel].score}`
    : '';
}

document.getElementById('cpuSelect').addEventListener('change', showCPU);

function checkPhone() {
  const phone = document.getElementById('phoneInput').value.trim().toLowerCase();
  const info = document.getElementById('phoneInfo');
  const link = document.getElementById('ifixitLink');

  if (phone === 'galaxy s22') {
    info.innerHTML = 'المعالج: Snapdragon 8 Gen 1<br>أداء: Geekbench 5: 1100 / 3600';
    link.href = 'https://ru.ifixit.com/Device/Samsung_Galaxy_S22';
  } else {
    info.innerHTML = 'الهاتف غير موجود في البيانات';
    link.href = '#';
  }
}
