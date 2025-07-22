<script src="https://unpkg.com/svg-pan-zoom@3.6.1/dist/svg-pan-zoom.min.js"></script>
<script>
  document.addEventListener('DOMContentLoaded', function() {
    const svgElement = document.querySelector('.svg-container svg');
    if (svgElement) svgPanZoom(svgElement, { controlIconsEnabled: true });
  });
</script>
