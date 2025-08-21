document.addEventListener("DOMContentLoaded", function() {
    init()
})

const currentValue = document.getElementById('range');

currentValue.addEventListener('change', function(event) {
    init()
})


function init() {
    const container = document.getElementById('snow-container')
    const loader = document.querySelector('.loader')

    if(!container) {
        console.error('No snow container found.')
        return
    }
    const totalCount = currentValue.value;
    generateSnow(container, totalCount)

    container.style.opacity = '1'
    if(loader) {
        loader.style.opacity = 'none'
    }


}
function generateSnow(container, totalCount) {
    container.innerHTML = '';
    for(let i = 0; i < totalCount; i++) {
        const snowTime = (1.9 + Math.random() * 2.3).toFixed(2);
        const itemTime = (1.9 + Math.random() * 4.3).toFixed(2);
        const delay = (Math.random() * 2.4).toFixed(2);

        const snow = document.createElement('div')
        snow.classList.add('snow')

        snow.style.transform = 'translate(300px, -500px)'

        requestAnimationFrame(() => {
            snow.style.animation = `move-down ${snowTime}s infinite linear`
            snow.style.animationDelay = `${delay}s`
        })

        const snowItem = document.createElement('div')
        snowItem.className = 'snow-item'

        requestAnimationFrame(() => {
            snowItem.style.animation = `snow-spin ${itemTime}s infinite linear`
            snowItem.style.animationDelay = `${delay}s`
        });

        for (let i = 0; i < 4; i++) {
            const span = document.createElement('span')
            snowItem.appendChild(span)
        }

        snow.appendChild(snowItem)
        container.appendChild(snow)
    }
}