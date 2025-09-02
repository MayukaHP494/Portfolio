// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Active navigation link highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.project-card, .education-card, .skill-category, .contact-item');
    animateElements.forEach(el => observer.observe(el));
});

// Form submission handling
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const subject = contactForm.querySelector('input[placeholder="Subject"]').value;
        const message = contactForm.querySelector('textarea').value;
        
        // Simple validation
        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        // Simulate form submission
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

// Typing animation for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Initialize typing animation when page loads
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 80);
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Project card hover effects
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Skill tag hover effects
document.querySelectorAll('.skill-tag').forEach(tag => {
    tag.addEventListener('mouseenter', () => {
        tag.style.transform = 'scale(1.05)';
    });
    
    tag.addEventListener('mouseleave', () => {
        tag.style.transform = 'scale(1)';
    });
});

// CV Download functionality
document.getElementById('download-cv').addEventListener('click', (e) => {
    e.preventDefault();
    
    if (cvConfig.driveLink !== "YOUR_CV_GOOGLE_DRIVE_LINK_HERE") {
        // Open Google Drive link in new tab for download
        window.open(cvConfig.driveLink, '_blank');
    } else {
        // Show setup instructions if link is not configured
        showCVSetupModal();
    }
});

// Show CV setup modal
function showCVSetupModal() {
    const modal = document.createElement('div');
    modal.className = 'document-modal';
    modal.innerHTML = `
        <div class="modal-overlay">
            <div class="modal-content">
                <div class="modal-header">
                    <h3>📄 CV Download Setup</h3>
                    <button class="modal-close">&times;</button>
                </div>
                <div class="modal-body">
                    <div class="setup-instructions">
                        <h4>📁 Setup Instructions:</h4>
                        <ol>
                            <li><strong>Upload CV to Google Drive:</strong> Upload your CV PDF file to Google Drive</li>
                            <li><strong>Set Sharing Permissions:</strong> Right-click the file → "Share" → "Anyone with the link can view"</li>
                            <li><strong>Copy Link:</strong> Copy the sharing link</li>
                            <li><strong>Update Code:</strong> Replace "YOUR_CV_GOOGLE_DRIVE_LINK_HERE" in script.js with your actual link</li>
                        </ol>
                        
                        <div class="example-documents">
                            <h4>📋 CV File Requirements:</h4>
                            <ul>
                                <li>Format: PDF (recommended)</li>
                                <li>File size: Under 10MB for faster loading</li>
                                <li>Professional formatting and layout</li>
                                <li>Include your latest information and achievements</li>
                                <li>Use clear, readable fonts</li>
                            </ul>
                        </div>
                        
                        <div class="file-location">
                            <h4>🔧 File to Edit:</h4>
                            <code>script.js</code> - Look for the <code>cvConfig</code> object
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    // Close modal functionality
    modal.querySelector('.modal-close').addEventListener('click', () => {
        modal.remove();
    });

    modal.querySelector('.modal-overlay').addEventListener('click', (e) => {
        if (e.target === modal.querySelector('.modal-overlay')) {
            modal.remove();
        }
    });
}

// Loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Add CSS for loading state
const style = document.createElement('style');
style.textContent = `
    body:not(.loaded) {
        overflow: hidden;
    }
    
    body:not(.loaded)::before {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #1e3a8a, #3b82f6);
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    body:not(.loaded)::after {
        content: 'Loading...';
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        font-size: 1.5rem;
        font-weight: 600;
        z-index: 10000;
    }
    
    .nav-link.active {
        color: var(--primary-color);
    }
    
    .nav-link.active::after {
        width: 100%;
    }
`;
document.head.appendChild(style);

// Scroll to top functionality
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollToTopBtn.className = 'scroll-to-top';
scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: var(--primary-color);
    color: white;
    border: none;
    cursor: pointer;
    display: none;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    box-shadow: var(--shadow-lg);
    transition: all 0.3s ease;
    z-index: 1000;
`;

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

scrollToTopBtn.addEventListener('mouseenter', () => {
    scrollToTopBtn.style.transform = 'scale(1.1)';
});

scrollToTopBtn.addEventListener('mouseleave', () => {
    scrollToTopBtn.style.transform = 'scale(1)';
});

document.body.appendChild(scrollToTopBtn);

// Show/hide scroll to top button
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollToTopBtn.style.display = 'flex';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

// Add some mechanical engineering themed animations
const mechanicalElements = document.querySelectorAll('.project-card, .education-card');
mechanicalElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        element.style.borderColor = 'var(--primary-color)';
    });
    
    element.addEventListener('mouseleave', () => {
        element.style.borderColor = 'transparent';
    });
});

// CV Download Configuration
const cvConfig = {
    driveLink: "https://drive.google.com/file/d/14flQtW4HxRfOHf-7e0d_MhNYJJho6c1e/view?usp=sharing", // Replace with your actual CV Google Drive link
    fileName: "Mayuka_Hiranya_CV.pdf" // Your CV file name
};

// Project document links configuration
const projectDocuments = {
    project1: {
        title: "Reverse Engineering of Electric Kettle",
        driveLink: "https://drive.google.com/drive/folders/1rEEArSb1_L8MmDZZQVj2BZ-M9Jvms21q?usp=sharing", // Replace with your actual Google Drive link
        description: "Complete project documentation, CAD files, analysis reports, and presentation materials."
    },
    project2: {
        title: "Portable Mini Tool Holder",
        driveLink: "https://drive.google.com/drive/folders/1x3ExWQRnkxos4zjHPBHP6EZB7aPLUsHa?usp=sharing", // Replace with your actual Google Drive link
        description: "Design drawings, manufacturing process documentation, and final project report."
    },
    project3: {
        title: "Automated Drain Cleaning Robot",
        driveLink: "https://drive.google.com/drive/folders/1VogDzS4ky_MCPgTyE3J7z0ZJANwbaUJp?usp=sharing", // Replace with your actual Google Drive link
        description: "Technical specifications, circuit diagrams, programming code, and testing documentation."
    },
    project4: {
        title: "CFD Analysis Projects",
        driveLink: "https://drive.google.com/drive/folders/11kXytzbPQxLj_cK-s3_YBBJCAvoT20z5?usp=sharing", // Replace with your actual Google Drive link
        description: "Brief description of what documents are included in this project folder."
    },
    project5: {
        title: "3D-Modeling Projects",
        driveLink: "https://drive.google.com/drive/folders/1o3SYSZci5ugZWzVySRDQlKRhABg7WEnn?usp=sharing", // Replace with your actual Google Drive link
        description: "Brief description of what documents are included in this project folder."
    
    }
};

// Handle project document button clicks
document.querySelectorAll('.btn-document').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const projectId = button.getAttribute('data-project');
        const project = projectDocuments[projectId];
        
        if (project && project.driveLink !== "YOUR_GOOGLE_DRIVE_LINK_HERE") {
            // Open Google Drive link in new tab
            window.open(project.driveLink, '_blank');
        } else {
            // Show modal with instructions
            showDocumentModal(projectId, project);
        }
    });
});

// Create and show document modal
function showDocumentModal(projectId, project) {
    // Remove existing modal if any
    const existingModal = document.querySelector('.document-modal');
    if (existingModal) {
        existingModal.remove();
    }

    const modal = document.createElement('div');
    modal.className = 'document-modal';
    modal.innerHTML = `
        <div class="modal-overlay">
            <div class="modal-content">
                <div class="modal-header">
                    <h3>${project ? project.title : 'Project Documents'}</h3>
                    <button class="modal-close">&times;</button>
                </div>
                <div class="modal-body">
                    <div class="setup-instructions">
                        <h4>📁 Setup Instructions:</h4>
                        <ol>
                            <li><strong>Create Google Drive Folder:</strong> Create a folder for this project in your Google Drive</li>
                            <li><strong>Upload Documents:</strong> Upload all project documents (PDFs, CAD files, reports, etc.)</li>
                            <li><strong>Set Permissions:</strong> Right-click the folder → "Share" → "Anyone with the link can view"</li>
                            <li><strong>Copy Link:</strong> Copy the sharing link</li>
                            <li><strong>Update Code:</strong> Replace "YOUR_GOOGLE_DRIVE_LINK_HERE" in script.js with your actual link</li>
                        </ol>
                        
                        <div class="example-documents">
                            <h4>📋 Suggested Documents to Include:</h4>
                            <ul>
                                <li>Project proposal/requirements</li>
                                <li>Technical drawings and CAD files</li>
                                <li>Analysis reports and calculations</li>
                                <li>Photos and videos of the project</li>
                                <li>Final presentation slides</li>
                                <li>Code files (if applicable)</li>
                                <li>Testing documentation</li>
                            </ul>
                        </div>
                        
                        <div class="file-location">
                            <h4>🔧 File to Edit:</h4>
                            <code>script.js</code> - Look for the <code>projectDocuments</code> object
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    // Close modal functionality
    modal.querySelector('.modal-close').addEventListener('click', () => {
        modal.remove();
    });

    modal.querySelector('.modal-overlay').addEventListener('click', (e) => {
        if (e.target === modal.querySelector('.modal-overlay')) {
            modal.remove();
        }
    });
}

// Console welcome message
console.log(`
%cWelcome to Mayuka Hiranya's Portfolio!
%c
%c🔧 Mechanical Engineering Portfolio
%c📧 Contact: mayukahiranya@gmail.com
%c🔗 LinkedIn: https://www.linkedin.com/in/mayuka-hiranya-premathilaka-160768279/
%c
%cBuilt with ❤️ for showcasing mechanical engineering projects and skills.
`,
'color: #1e3a8a; font-size: 20px; font-weight: bold;',
'color: #6b7280; font-size: 14px;',
'color: #3b82f6; font-size: 16px; font-weight: bold;',
'color: #6b7280; font-size: 14px;',
'color: #6b7280; font-size: 14px;',
'color: #6b7280; font-size: 14px;',
'color: #f59e0b; font-size: 14px; font-style: italic;'
);
