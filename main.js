document.addEventListener('DOMContentLoaded', function() {

    initializeCubes();
});



const currentValue = document.getElementById('range');

currentValue.addEventListener('change', function(event) {
    initializeCubes()
})

function initializeCubes() {
    const container = document.getElementById('scene-container');
    const loader = document.querySelector('.loader');

    if (!container) {
        console.error('Контейнер scene-container не найден!');
        return;
    }

    const totalScenes = currentValue.value;
    generateCubes(container, totalScenes);

    // Показываем контейнер и скрываем loader
    container.style.opacity = '1';
    if (loader) {
        loader.style.display = 'none';
    }
}

function generateCubes(container, totalScenes) {
    container.innerHTML = '';

    for (let i = 1; i <= totalScenes; i++) {
        const sceneTime = (1.9 + Math.random() * 2.3).toFixed(2);
        const cubeTime = (1.5 + Math.random() * 2.7).toFixed(2);
        const animationType = Math.random() > 0.5 ? 'spin' : 'spin-two';
        const delay = (Math.random() * 2).toFixed(2);

        const scene = document.createElement('div');
        scene.className = 'scene';

        // Устанавливаем начальную позицию (как в начале анимации)
        scene.style.transform = 'translate(300px, -500px)';

        // Применяем анимацию с задержкой
        requestAnimationFrame(() => {
            scene.style.animation = `move-down ${sceneTime}s infinite linear`;
            scene.style.animationDelay = `${delay}s`;
        });

        const cube = document.createElement('div');
        cube.className = 'cube';

        // Применяем анимацию с задержкой
        requestAnimationFrame(() => {
            cube.style.animation = `${animationType} ${cubeTime}s infinite linear alternate`;
            cube.style.animationDelay = `${delay}s`;
        });

        const faces = [
            { class: 'front', bg: 'aqua' },
            { class: 'back', bg: 'cyan' },
            { class: 'right', bg: 'cyan' },
            { class: 'left', bg: 'cyan' },
            { class: 'top', bg: 'cyan' },
            { class: 'bottom', bg: 'aquamarine' }
        ];

        faces.forEach(face => {
            const faceDiv = document.createElement('div');
            faceDiv.className = `face ${face.class}`;
            faceDiv.style.background = face.bg;
            cube.appendChild(faceDiv);
        });

        scene.appendChild(cube);
        container.appendChild(scene);
    }
}