window.onload = () => {
    document.addEventListener('click', (e) => {

        // %%%%
        const xPercent = (e.clientX / window.innerWidth) * 100;
        const yPercent = (e.clientY / window.innerHeight) * 100;

        // fill -> subim
        const xInput = document.getElementById('xCoord');
        const yInput = document.getElementById('yCoord');
        const form = document.getElementById('mapForm');

        xInput.value = xPercent;
        yInput.value = yPercent;

        form.submit();
    });
};
