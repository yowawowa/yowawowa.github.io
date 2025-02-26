document.addEventListener("DOMContentLoaded", function () {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.prepend(renderer.domElement);

    // 1. Создаем ствол (цилиндр)
    const trunkGeometry = new THREE.CylinderGeometry(0.5, 0.5, 3, 16);
    const trunkMaterial = new THREE.MeshBasicMaterial({ color: 0x8B5A2B, wireframe: true });
    const trunk = new THREE.Mesh(trunkGeometry, trunkMaterial);
    trunk.position.y = -1; // Поднимаем чуть вверх

    // 2. Создаем крону (сфера)
    const crownGeometry = new THREE.SphereGeometry(1.5, 16, 16);
    const crownMaterial = new THREE.MeshBasicMaterial({ color: 0x00AA00, wireframe: true });
    const crown = new THREE.Mesh(crownGeometry, crownMaterial);
    crown.position.y = 1.5; // Размещаем над стволом

    // 3. Объединяем в группу
    const tree = new THREE.Group();
    tree.add(trunk);
    tree.add(crown);
    scene.add(tree);

    camera.position.z = 6;

    function animate() {
        requestAnimationFrame(animate);
        tree.rotation.y += 0.01; // Вращение
        renderer.render(scene, camera);
    }

    animate();

    window.addEventListener("resize", () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    });
});
