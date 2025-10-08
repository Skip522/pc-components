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
  cpu: { title: 'Центральный процессор (CPU)', img: 'img/cpu.png', desc: 'Отвечает за обработку всех вычислений и управление работой компьютера. Именно процессор выполняет команды программ и распределяет задачи между компонентами системы.' },
  motherboard: { title: 'Материнская плата', img: 'img/motherboard.png', desc: 'Главная плата, на которой размещаются все основные компоненты. Обеспечивает их соединение и взаимодействие, а также распределяет питание и сигналы между устройствами.' },
  ram: { title: 'Оперативная память (RAM)', img: 'img/ram.png', desc: 'Временное хранилище данных, которые активно используются процессором. Чем больше оперативной памяти, тем больше программ можно запускать одновременно без потери производительности.' },
  gpu: { title: 'Видеокарта (GPU)', img: 'img/gpu.png', desc: 'Обрабатывает графику и выводит изображение на экран. Незаменима для игр, работы с 3D-графикой и монтажом видео; в простых задачах роль может выполнять встроенная графика.' },
  ssd: { title: 'Накопитель (SSD/HDD)', img: 'img/ssd.png', desc: 'Используется для долгосрочного хранения файлов, операционной системы и программ. SSD работает быстрее HDD и обеспечивает быстрый запуск системы и программ, а HDD чаще используется для хранения больших объёмов данных.' },
  psu: { title: 'Блок питания (PSU)', img: 'img/psu.png', desc: 'Преобразует электроэнергию из сети в низковольтное питание для всех компонентов системного блока. Надёжный блок питания — основа стабильной работы компьютера.' }
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
