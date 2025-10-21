      // Load video URL from localStorage
      function loadVideo() {
        const videoUrl = localStorage.getItem('portalVideoUrl');
        const videoContainer = document.getElementById('videoContainer');
        
        if (videoUrl && (videoUrl.includes('youtube.com/embed') || videoUrl.includes('youtu.be'))) {
          videoContainer.innerHTML = `
            <iframe
              src="${videoUrl}"
              title="Website Overview"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          `;
        }
      }

      // Load video on page load
      loadVideo();

      // Listen for storage changes
      window.addEventListener('storage', loadVideo);

      // Handle form submission
      document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const data = {
          fullname: formData.get('fullname'),
          contact: formData.get('contact'),
          company: formData.get('company'),
          email: formData.get('email') || '',
          message: formData.get('message') || '',
          date: new Date().toISOString(),
          timestamp: Date.now()
        };

        // Save to localStorage
        const existingMessages = JSON.parse(localStorage.getItem('portalMessages') || '[]');
        data.id = Date.now().toString();
        existingMessages.push(data);
        localStorage.setItem('portalMessages', JSON.stringify(existingMessages));

        // Trigger custom storage event for admin dashboard to detect changes
        window.dispatchEvent(new Event('localStorageUpdate'));
        
        // Also trigger standard storage event
        window.dispatchEvent(new Event('storage'));

        // Show success message
        document.getElementById('successMessage').classList.add('show');
        
        // Reset form
        e.target.reset();

        // Hide success message after 5 seconds
        setTimeout(() => {
          document.getElementById('successMessage').classList.remove('show');
        }, 5000);
      });