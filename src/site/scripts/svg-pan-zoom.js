document.addEventListener('DOMContentLoaded', function() {
  const svgElement = document.querySelector('.svg-container svg');
  
  if (svgElement) {
    let scale = 1;
    let isDragging = false;
    let startX, startY, translateX = 0, translateY = 0;

    // Масштабирование колесом мыши
    svgElement.addEventListener('wheel', function(e) {
      e.preventDefault();
      const delta = -e.deltaY / 1000;
      scale *= (1 + delta);
      scale = Math.max(0.1, Math.min(scale, 10)); // Ограничиваем масштаб
      updateTransform();
    });

    // Перемещение при зажатой левой кнопке мыши
    svgElement.addEventListener('mousedown', function(e) {
      if (e.button === 0) { // Левая кнопка мыши
        isDragging = true;
        startX = e.clientX - translateX;
        startY = e.clientY - translateY;
        svgElement.style.cursor = 'grabbing';
      }
    });

    document.addEventListener('mousemove', function(e) {
      if (isDragging) {
        translateX = e.clientX - startX;
        translateY = e.clientY - startY;
        updateTransform();
      }
    });

    document.addEventListener('mouseup', function() {
      isDragging = false;
      svgElement.style.cursor = 'grab';
    });

    function updateTransform() {
      svgElement.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
    }

    svgElement.style.cursor = 'grab';
    svgElement.style.transformOrigin = '0 0';
  }
});
