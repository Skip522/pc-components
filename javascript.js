function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// FAQ раскрытие
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const ans = btn.nextElementSibling;
    ans.style.display = ans.style.display === 'block' ? 'none' : 'block';
  });
});

// Компоненты с описанием
const components = {
  cpu: { title: 'Центральный процессор (CPU)', img: 'img/cpu.png', desc: 'Главный вычислительный элемент ПК, обрабатывает команды и управляет остальными устройствами.' },
  motherboard: { title: 'Материнская плата', img: 'img/motherboard.png', desc: 'Соединяет все компоненты компьютера, обеспечивает их взаимодействие.' },
  ram: { title: 'Оперативная память (RAM)', img: 'img/ram.png', desc: 'Хранит временные данные, с которыми работает процессор. Влияет на скорость системы.' },
  gpu: { title: 'Видеокарта (GPU)', img: 'img/gpu.png', desc: 'Обрабатывает графику и изображения, необходима для игр и 3D-графики.' },
  ssd: { title: 'Накопитель (SSD/HDD)', img: 'img/ssd.png', desc: 'Хранит файлы и программы. SSD быстрее, чем HDD.' },
  psu: { title: 'Блок питания (PSU)', img: 'img/psu.png', desc: 'Питает все компоненты ПК стабильным электрическим током.' }
};

function openComponent(key) {
  const comp = components[key];
  if (!comp) return;
  document.getElementById('component-img').src = comp.img;
  document.getElementById('component-title').textContent = comp.title;
  document.getElementById('component-desc').textContent = comp.desc;
  document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}
