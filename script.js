document.addEventListener('DOMContentLoaded', () => {
    const images = [
        'image1.jpg','image2.jpg','image3.jpg','image4.jpg','image5.jpg','image6.jpg','image7.jpg','image8.jpg','image9.jpg'
    ];
    
    let currentIndex = 0;
    const displayedImage = document.getElementById('displayed-image');
    const progressBar = document.getElementById('progress-bar');
    const imageIndex = document.getElementById('image-index');
    
    const showImage = (index) => {
        displayedImage.src = images[index];
        progressBar.value = index;
        imageIndex.textContent = `Frame #${index + 1}`;
    };
    
        // DOMContentLoaded 이벤트 발생 시 초기 이미지를 설정
    showImage(currentIndex);
    
    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowRight') {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        } else if (event.key === 'ArrowLeft') {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            showImage(currentIndex);
        }
    });

    progressBar.addEventListener('input', (event) => {
        currentIndex = parseInt(event.target.value, 10);
        showImage(currentIndex);
    });
});
    