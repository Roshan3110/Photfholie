
    // Render Photo Gallery
    const grid = document.getElementById('photoGrid');
    myPhotos.forEach(url => {
      const div = document.createElement('div');
      div.className = 'gallery-photo';
      div.innerHTML = `<img src="${url}" alt="Roshan Photo">`;
      
      div.addEventListener('click', () => {
        window.open(url, '_blank');
      });
      
      grid.appendChild(div);
    });

    // Animate skill bars on load
    window.onload = () => {
      document.querySelectorAll('.fill').forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0%';
        setTimeout(() => bar.style.width = width, 400);
      });
    };
