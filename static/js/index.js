document.addEventListener('DOMContentLoaded', function() {
    // Hero Slider
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev-slide');
    const nextBtn = document.querySelector('.next-slide');
    let currentSlide = 0;
    const slideCount = slides.length;
    
    // If there's only one slide, create more for demo purposes
    if (slideCount === 1) {
        const heroSlider = document.querySelector('.hero-slider');
        const slide1 = slides[0].cloneNode(true);
        const slide2 = slides[0].cloneNode(true);
        
        // Change content for demo slides
        slide1.querySelector('h1').textContent = 'AVENTADOR SVJ';
        slide1.querySelector('p').textContent = 'SIÊU XE MẠNH MẼ NHẤT TRONG LỊCH SỬ';
        
        slide2.querySelector('h1').textContent = 'URUS';
        slide2.querySelector('p').textContent = 'SUV HIỆU SUẤT CAO ĐỈNH CAO';
        
        // Add background images
        slide1.style.backgroundImage = "url('/placeholder.svg?height=1080&width=1920&text=Aventador')";
        slide2.style.backgroundImage = "url('/placeholder.svg?height=1080&width=1920&text=Urus')";
        slides[0].style.backgroundImage = "url('/placeholder.svg?height=1080&width=1920&text=Huracan')";
        
        // Remove active class from clones
        slide1.classList.remove('active');
        slide2.classList.remove('active');
        
        // Append to slider
        heroSlider.appendChild(slide1);
        heroSlider.appendChild(slide2);
    }
    
    // Update slides after potential cloning
    const updatedSlides = document.querySelectorAll('.slide');
    const updatedSlideCount = updatedSlides.length;
    
    function showSlide(n) {
        // Hide all slides
        updatedSlides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        // Show the current slide
        updatedSlides[n].classList.add('active');
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % updatedSlideCount;
        showSlide(currentSlide);
    }
    
    function prevSlide() {
        currentSlide = (currentSlide - 1 + updatedSlideCount) % updatedSlideCount;
        showSlide(currentSlide);
    }
    
    // Event listeners for slider controls
    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', prevSlide);
        nextBtn.addEventListener('click', nextSlide);
    }
    
    // Auto slide
    let slideInterval = setInterval(nextSlide, 5000);
    
    // Pause auto slide on hover
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        heroSection.addEventListener('mouseenter', () => {
            clearInterval(slideInterval);
        });
        
        heroSection.addEventListener('mouseleave', () => {
            slideInterval = setInterval(nextSlide, 5000);
        });
    }
    
    // Testimonial Slider
    const testimonialSlides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.dot');
    let currentTestimonial = 0;
    
    // If there's only one testimonial, create more for demo
    if (testimonialSlides.length === 1) {
        const testimonialSlider = document.querySelector('.testimonial-slider');
        const testimonial1 = testimonialSlides[0].cloneNode(true);
        const testimonial2 = testimonialSlides[0].cloneNode(true);
        
        // Change content
        testimonial1.querySelector('.testimonial-text').textContent = 'Dịch vụ chăm sóc khách hàng tại đây thực sự xuất sắc. Tôi đã được tư vấn rất chi tiết và chuyên nghiệp trước khi quyết định mua xe.';
        testimonial1.querySelector('h4').textContent = 'Trần Thị B';
        testimonial1.querySelector('.author-info p').textContent = 'CEO';
        
        testimonial2.querySelector('.testimonial-text').textContent = 'Chất lượng xe và dịch vụ bảo dưỡng tại SuperCar Luxury luôn đạt chuẩn quốc tế. Tôi rất hài lòng khi là khách hàng của họ.';
        testimonial2.querySelector('h4').textContent = 'Lê Văn C';
        testimonial2.querySelector('.author-info p').textContent = 'Nhà sưu tầm xe';
        
        // Remove active class
        testimonial1.classList.remove('active');
        testimonial2.classList.remove('active');
        
        // Append
        testimonialSlider.appendChild(testimonial1);
        testimonialSlider.appendChild(testimonial2);
    }
    
    // Update after potential cloning
    const updatedTestimonials = document.querySelectorAll('.testimonial-slide');
    
    function showTestimonial(n) {
        // Hide all
        updatedTestimonials.forEach(slide => {
            slide.classList.remove('active');
        });
        
        // Remove active from all dots
        dots.forEach(dot => {
            dot.classList.remove('active');
        });
        
        // Show current
        updatedTestimonials[n].classList.add('active');
        if (dots[n]) {
            dots[n].classList.add('active');
        }
    }
    
    // Add click event to dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentTestimonial = index;
            showTestimonial(currentTestimonial);
        });
    });
    
    // Auto rotate testimonials
    setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % updatedTestimonials.length;
        showTestimonial(currentTestimonial);
    }, 6000);
    
    // Animation on scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.model-card, .stat-item, .philosophy-text, .philosophy-image');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial styles for animation
    const elementsToAnimate = document.querySelectorAll('.model-card, .stat-item, .philosophy-text, .philosophy-image');
    elementsToAnimate.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Run on scroll
    window.addEventListener('scroll', animateOnScroll);
    // Run once on load
    animateOnScroll();
});