const button = document.getElementById('opencard');
const triangleTop = document.getElementById('triangle-top');
const content = document.getElementById('content');
const dudu  = document.getElementById('dudu-img');
let isOpen = false;
button.addEventListener('click', () => {
    if (!isOpen) {
        button.disabled = true; //added to prevent spamming the button to cause issues with displaying of envelope
        triangleTop.style.transform = 'rotateX(180deg)';
        content.style.zIndex = '4';
        triangleTop.style.zIndex = '1'
        setTimeout(() => {
            content.style.transform = 'translateY(-250px)';
            dudu.style.visibility = 'visible'
            button.disabled = false;
        }, 500);
    } else {
        button.disabled = true;
        content.style.transform = 'translateY(0)';
        setTimeout(() => {
            triangleTop.style.transform = 'rotateX(0deg)';
            content.style.zIndex = '1';
            triangleTop.style.zIndex = '5'
            dudu.style.visibility = 'hidden'
            button.disabled = false;
        }, 500);
    }
    isOpen = !isOpen;
});
