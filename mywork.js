 // Add keyboard accessibility for smooth hover effect
        document.querySelectorAll('.work-card').forEach(card => {
            card.addEventListener('keydown', e => {
                if (e.key === 'Enter' || e.key === ' ') {
                    card.classList.toggle('active');
                }
            });
        });

        // Modal functionality
        const modal = document.getElementById('imageModal');
        const modalImg = document.getElementById('modalImg');
        const closeModal = document.getElementById('closeModal');

        document.querySelectorAll('.work-image img').forEach(img => {
            img.addEventListener('click', () => {
                modalImg.src = img.src.replace('400x225', '800x450'); // Use larger placeholder if available
                modalImg.alt = img.alt;
                modal.classList.add('active');
                modal.focus();
            });
        });

        closeModal.addEventListener('click', () => {
            modal.classList.remove('active');
            modalImg.src = '';
        });

        // Close modal on outside click or Escape key
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
                modalImg.src = '';
            }
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                modal.classList.remove('active');
                modalImg.src = '';
            }
        });