const copyBtn = document.getElementById("copy-btn");
const popup = document.getElementById("popup");

copyBtn.addEventListener("click", () => {
  const textToCopy = "irm https://get.activated.win | iex";
  navigator.clipboard.writeText(textToCopy).then(() => {
    console.log("Text copied to clipboard");
    popup.classList.add("show");
    setTimeout(() => {
      popup.classList.remove("show");
    }, 2000);
  });
});

document.addEventListener("DOMContentLoaded", function () {
    // 1. Создаем сцену, камеру и рендерер
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true }); // Прозрачный фон
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // 2. Создаем конус
    // const geometry = new THREE.ConeGeometry(2, 4, 32);
    const geometry = new THREE.IcosahedronGeometry(7); // Икосаэдр
    // const geometry = new THREE.TorusGeometry(2, 0.6, 16, 100); 
    const geometry_octa = new THREE.OctahedronGeometry(4); // Октаэдр
    
    // const geometry = new THREE.IcosahedronGeometry(2, 2);

    // упоротое ломание
    // const positions = geometry.attributes.position.array;
    // for (let i = 0; i < positions.length; i++) {
    //     positions[i] += (Math.random() - 0.5) * 1.5;
    // }
    // geometry.attributes.position.needsUpdate = true;

    // материалы
    const material = new THREE.MeshBasicMaterial({
      color: 0xff5733,
      wireframe: true,
    }); // Оранжевый каркас
    const material_second = new THREE.MeshBasicMaterial({
      color: 0x12c6bd,
      wireframe: true,
    }); // Оранжевый каркас
    const figure = new THREE.Mesh(geometry, material);
    const figure_small = new THREE.Mesh(geometry_octa, material_second);
    scene.add(figure);
    scene.add(figure_small);

    // 3. Позиционируем камеру
    camera.position.z = 6;

    // 4. Анимация
    function animate() {
      requestAnimationFrame(animate);
      figure.rotation.x += 0.01; // Вращение по X
      figure.rotation.y += 0.02; // Вращение по Y
      figure.rotation.z += 0.015; // Вращение по Z
      figure_small.rotation.x -= 0.01; // Вращение по X
      figure_small.rotation.y -= 0.02; // Вращение по Y
      figure_small.rotation.z -= 0.015; // Вращение по Z
      renderer.render(scene, camera);
    }

    animate();

    // 5. Обновляем размеры при изменении окна
    window.addEventListener("resize", () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    });
  });

const audioPlayer = document.getElementById('audioPlayer');
audioPlayer.volume = 0.07;
document.addEventListener("DOMContentLoaded", () => {
  // Получаем элементы
  const timeToHack = document.getElementById('timeToHack');
  const audioPlayer = document.getElementById('audioPlayer');

  // Добавляем обработчик события на клик
  timeToHack.addEventListener('click', () => {
    // Воспроизводим аудио
    audioPlayer.play();
  });
});