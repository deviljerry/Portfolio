// ==========================================
// INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', function () {
    initTheme();
    initNavigation();
    initScrollProgress();
    initScrollToTop();
    // initRevealAnimations(); // DISABLED - was hiding content
    initTypingAnimation();
    initScrollAnimations();
    initAcademicTimeline();
    initBlog();
    initVideos();
    initContactForm();
    initSmoothScroll();
});

// ==========================================
// THEME TOGGLE
// ==========================================
function initTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const html = document.documentElement;

    // Check for saved theme preference or default to 'dark'
    const currentTheme = localStorage.getItem('theme') || 'dark';
    html.setAttribute('data-theme', currentTheme);

    // Theme toggle click handler
    themeToggle.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);

        // Add animation effect
        themeToggle.style.transform = 'rotate(360deg)';
        setTimeout(() => {
            themeToggle.style.transform = 'rotate(0deg)';
        }, 300);
    });
}

// ==========================================
// SCROLL PROGRESS BAR
// ==========================================
function initScrollProgress() {
    const scrollProgress = document.getElementById('scrollProgress');

    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        scrollProgress.style.width = scrolled + '%';
    });
}

// ==========================================
// SCROLL TO TOP BUTTON
// ==========================================
function initScrollToTop() {
    const scrollToTopBtn = document.getElementById('scrollToTop');

    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });

    // Scroll to top when clicked
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ==========================================
// REVEAL ANIMATIONS ON SCROLL (DISABLED)
// ==========================================
function initRevealAnimations() {
    // DISABLED - This was hiding content
    // Keeping function for future use but not applying classes
    console.log('Reveal animations disabled to show all content');
}

// ==========================================
// NAVIGATION
// ==========================================
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Active link on scroll
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section');

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
}

// ==========================================
// TYPING ANIMATION
// ==========================================
function initTypingAnimation() {
    const typingElement = document.querySelector('.typing-text');
    if (!typingElement) return;

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function type() {
        const currentText = typingTexts[textIndex];

        if (isDeleting) {
            typingElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typingElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }

        if (!isDeleting && charIndex === currentText.length) {
            // Pause at end
            typingSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % typingTexts.length;
            typingSpeed = 500;
        }

        setTimeout(type, typingSpeed);
    }

    type();
}

// ==========================================
// SCROLL ANIMATIONS
// ==========================================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll(
        '.stat-card, .skill-category, .cert-card, .project-card, .contact-card'
    );

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// ==========================================
// ACADEMIC TIMELINE
// ==========================================
function initAcademicTimeline() {
    const timelineContainer = document.getElementById('timelineContainer');
    if (!timelineContainer) return;

    academicData.semesters.forEach((semester, index) => {
        const timelineItem = createTimelineItem(semester, index);
        timelineContainer.appendChild(timelineItem);
    });

    // Add click handlers for courses
    const courseCards = document.querySelectorAll('.course-card');
    courseCards.forEach(card => {
        card.addEventListener('click', () => {
            const courseCode = card.dataset.courseCode;
            const semesterId = card.dataset.semesterId;
            openCourseDetail(courseCode, semesterId);
        });
    });
}

function createTimelineItem(semester, index) {
    const item = document.createElement('div');
    item.className = 'timeline-item';
    item.style.animationDelay = `${index * 0.1}s`;

    const marker = document.createElement('div');
    marker.className = 'timeline-marker';
    marker.textContent = index + 1;

    const card = document.createElement('div');
    card.className = 'semester-card';

    const header = document.createElement('div');
    header.className = 'semester-header';
    header.innerHTML = `
        <div>
            <h3 class="semester-title">${semester.name}</h3>
            <p class="semester-year">${semester.year}</p>
        </div>
    `;

    const coursesGrid = document.createElement('div');
    coursesGrid.className = 'courses-grid';

    semester.courses.forEach(course => {
        const courseCard = createCourseCard(course, semester.id);
        coursesGrid.appendChild(courseCard);
    });

    card.appendChild(header);
    card.appendChild(coursesGrid);

    // Add labs section if available
    if (semester.labs && semester.labs.length > 0) {
        const labsSection = document.createElement('div');
        labsSection.className = 'labs-section';
        labsSection.innerHTML = '<h4 class="labs-title"><i class="fas fa-flask"></i> Laboratory</h4>';

        const labsGrid = document.createElement('div');
        labsGrid.className = 'labs-grid';

        semester.labs.forEach(lab => {
            const labCard = createLabCard(lab, semester.id);
            labsGrid.appendChild(labCard);
        });

        labsSection.appendChild(labsGrid);
        card.appendChild(labsSection);
    }

    item.appendChild(marker);
    item.appendChild(card);

    return item;
}


function createCourseCard(course, semesterId) {
    const card = document.createElement('div');
    card.className = 'course-card';
    card.dataset.courseCode = course.code;
    card.dataset.semesterId = semesterId;

    card.innerHTML = `
        <div class="course-code">${course.code}</div>
        <div class="course-name">${course.name}</div>
    `;

    return card;
}

function createLabCard(lab, semesterId) {
    const card = document.createElement('div');
    card.className = 'lab-card expanded';
    card.dataset.labCode = lab.code;
    card.dataset.semesterId = semesterId;

    card.innerHTML = `
        <div class="lab-header">
            <div class="lab-icon"><i class="fas fa-flask"></i></div>
            <div class="lab-title-section">
                <div class="lab-code">${lab.code}</div>
                <div class="lab-name">${lab.name}</div>
            </div>
        </div>
        <div class="lab-description">${lab.description}</div>
        <div class="lab-materials">
            <div class="materials-title">
                <i class="fab fa-github"></i>
                <span>Lab Materials on GitHub</span>
            </div>
            <div class="materials-links">
                <a href="${lab.materials.labManuals}" target="_blank" class="material-link">
                    <div class="material-icon">
                        <i class="fas fa-book-open"></i>
                    </div>
                    <div class="material-info">
                        <h5>Lab Manuals</h5>
                        <p>Laboratory manuals and instructions</p>
                    </div>
                    <i class="fas fa-external-link-alt"></i>
                </a>
                <a href="${lab.materials.labProject}" target="_blank" class="material-link">
                    <div class="material-icon">
                        <i class="fas fa-project-diagram"></i>
                    </div>
                    <div class="material-info">
                        <h5>Lab Project</h5>
                        <p>Laboratory project and implementation</p>
                    </div>
                    <i class="fas fa-external-link-alt"></i>
                </a>
            </div>
        </div>
    `;

    return card;
}


function openCourseDetail(courseCode, semesterId) {
    // Find the course
    const semester = academicData.semesters.find(s => s.id === semesterId);
    const course = semester.courses.find(c => c.code === courseCode);

    if (!course) return;

    // Create modal
    const modal = createCourseModal(course);
    document.body.appendChild(modal);

    // Show modal with animation
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);

    // Close modal handlers
    const closeBtn = modal.querySelector('.modal-close');
    const modalOverlay = modal.querySelector('.modal-overlay');

    closeBtn.addEventListener('click', () => closeModal(modal));
    modalOverlay.addEventListener('click', () => closeModal(modal));
}

function openLabDetail(labCode, semesterId) {
    // Find the lab
    const semester = academicData.semesters.find(s => s.id === semesterId);
    const lab = semester.labs.find(l => l.code === labCode);

    if (!lab) return;

    // Create modal
    const modal = createLabModal(lab);
    document.body.appendChild(modal);

    // Show modal with animation
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);

    // Close modal handlers
    const closeBtn = modal.querySelector('.modal-close');
    const modalOverlay = modal.querySelector('.modal-overlay');

    closeBtn.addEventListener('click', () => closeModal(modal));
    modalOverlay.addEventListener('click', () => closeModal(modal));
}


function createCourseModal(course) {
    const modal = document.createElement('div');
    modal.className = 'course-modal';

    modal.innerHTML = `
        <div class="modal-overlay"></div>
        <div class="modal-content">
            <button class="modal-close">
                <i class="fas fa-times"></i>
            </button>
            <div class="modal-header">
                <div class="course-badge ${course.type}">${course.type}</div>
                <h2>${course.code}</h2>
                <h3>${course.name}</h3>
            </div>
            <div class="modal-body">
                <div class="modal-tabs">
                    <button class="tab-btn active" data-tab="overview">
                        <i class="fas fa-info-circle"></i> Overview
                    </button>
                    ${course.materials ? `
                    <button class="tab-btn" data-tab="materials">
                        <i class="fab fa-github"></i> Materials
                    </button>
                    ` : ''}
                    <button class="tab-btn" data-tab="content">
                        <i class="fas fa-book"></i> Content
                    </button>
                    <button class="tab-btn" data-tab="assignments">
                        <i class="fas fa-tasks"></i> Assignments
                    </button>
                    <button class="tab-btn" data-tab="projects">
                        <i class="fas fa-code"></i> Projects
                    </button>
                </div>
                <div class="modal-tab-content">
                    <div class="tab-pane active" id="overview">
                        <div class="content-section">
                            <h4><i class="fas fa-align-left"></i> Description</h4>
                            <p>${course.description}</p>
                        </div>
                        <div class="content-section">
                            <h4><i class="fas fa-graduation-cap"></i> Learning Outcomes</h4>
                            <ul class="outcomes-list">
                                ${course.learningOutcomes.map(outcome => `<li>${outcome}</li>`).join('')}
                            </ul>
                        </div>
                        ${course.tools && course.tools.length > 0 ? `
                        <div class="content-section">
                            <h4><i class="fas fa-tools"></i> Tools & Technologies</h4>
                            <div class="tools-list">
                                ${course.tools.map(tool => `<span class="tool-tag">${tool}</span>`).join('')}
                            </div>
                        </div>
                        ` : ''}
                    </div>
                    ${course.materials ? `
                    <div class="tab-pane" id="materials">
                        <div class="materials-content">
                            <div class="materials-header">
                                <i class="fab fa-github"></i>
                                <h4>Course Materials on GitHub</h4>
                                <p>Access all course materials from the repository</p>
                            </div>
                            <div class="materials-grid">
                                <a href="${course.materials.slides}" target="_blank" class="material-link">
                                    <div class="material-icon">
                                        <i class="fas fa-file-powerpoint"></i>
                                    </div>
                                    <div class="material-info">
                                        <h5>Slides</h5>
                                        <p>Lecture presentations and slides</p>
                                    </div>
                                    <i class="fas fa-external-link-alt"></i>
                                </a>
                                <a href="${course.materials.quizzes}" target="_blank" class="material-link">
                                    <div class="material-icon">
                                        <i class="fas fa-question-circle"></i>
                                    </div>
                                    <div class="material-info">
                                        <h5>Quizzes</h5>
                                        <p>Quiz questions and solutions</p>
                                    </div>
                                    <i class="fas fa-external-link-alt"></i>
                                </a>
                                <a href="${course.materials.assignments}" target="_blank" class="material-link">
                                    <div class="material-icon">
                                        <i class="fas fa-clipboard-list"></i>
                                    </div>
                                    <div class="material-info">
                                        <h5>Assignments</h5>
                                        <p>Assignment statements and solutions</p>
                                    </div>
                                    <i class="fas fa-external-link-alt"></i>
                                </a>
                                <a href="${course.materials.pastPapers}" target="_blank" class="material-link">
                                    <div class="material-icon">
                                        <i class="fas fa-file-alt"></i>
                                    </div>
                                    <div class="material-info">
                                        <h5>Past Papers</h5>
                                        <p>Previous exam papers and solutions</p>
                                    </div>
                                    <i class="fas fa-external-link-alt"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    ` : ''}
                    <div class="tab-pane" id="content">
                        <div class="placeholder-content">
                            <i class="fas fa-folder-open"></i>
                            <h4>Course Content</h4>
                            <p>Lecture slides, notes, and reference materials will be available here.</p>
                            <div class="content-list">
                                <div class="content-item">
                                    <i class="fas fa-file-powerpoint"></i>
                                    <span>Lecture Slides</span>
                                </div>
                                <div class="content-item">
                                    <i class="fas fa-file-alt"></i>
                                    <span>Course Notes</span>
                                </div>
                                <div class="content-item">
                                    <i class="fas fa-book"></i>
                                    <span>Reference Books</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane" id="assignments">
                        <div class="placeholder-content">
                            <i class="fas fa-clipboard-list"></i>
                            <h4>Assignments</h4>
                            <p>Assignment statements and solutions will be uploaded here.</p>
                        </div>
                    </div>
                    <div class="tab-pane" id="projects">
                        <div class="placeholder-content">
                            <i class="fas fa-project-diagram"></i>
                            <h4>Projects</h4>
                            <p>Course projects and GitHub links will be available here.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Add tab switching functionality
    const tabBtns = modal.querySelectorAll('.tab-btn');
    const tabPanes = modal.querySelectorAll('.tab-pane');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabName = btn.dataset.tab;

            tabBtns.forEach(b => b.classList.remove('active'));
            tabPanes.forEach(p => p.classList.remove('active'));

            btn.classList.add('active');
            modal.querySelector(`#${tabName}`).classList.add('active');
        });
    });

    // Add modal styles
    addModalStyles();

    return modal;
}

function createLabModal(lab) {
    const modal = document.createElement('div');
    modal.className = 'course-modal';

    modal.innerHTML = `
        <div class="modal-overlay"></div>
        <div class="modal-content">
            <button class="modal-close">
                <i class="fas fa-times"></i>
            </button>
            <div class="modal-header">
                <div class="course-badge lab">Laboratory</div>
                <h2>${lab.code}</h2>
                <h3>${lab.name}</h3>
            </div>
            <div class="modal-body">
                <div class="materials-content">
                    <div class="materials-header">
                        <i class="fab fa-github"></i>
                        <h4>Lab Materials on GitHub</h4>
                        <p>${lab.description}</p>
                    </div>
                    <div class="materials-grid">
                        <a href="${lab.materials.labManuals}" target="_blank" class="material-link">
                            <div class="material-icon">
                                <i class="fas fa-book-open"></i>
                            </div>
                            <div class="material-info">
                                <h5>Lab Manuals</h5>
                                <p>Laboratory manuals and instructions</p>
                            </div>
                            <i class="fas fa-external-link-alt"></i>
                        </a>
                        <a href="${lab.materials.labProject}" target="_blank" class="material-link">
                            <div class="material-icon">
                                <i class="fas fa-project-diagram"></i>
                            </div>
                            <div class="material-info">
                                <h5>Lab Project</h5>
                                <p>Laboratory project and implementation</p>
                            </div>
                            <i class="fas fa-external-link-alt"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Add modal styles
    addModalStyles();

    return modal;
}

function closeModal(modal) {
    modal.classList.remove('active');
    setTimeout(() => {
        modal.remove();
    }, 300);
}

function addModalStyles() {
    // Check if styles already added
    if (document.getElementById('modal-styles')) return;

    const style = document.createElement('style');
    style.id = 'modal-styles';
    style.textContent = `
        .course-modal {
            position: fixed;
            inset: 0;
            z-index: 10000;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.3s ease, visibility 0.3s ease;
        }

        .course-modal.active {
            opacity: 1;
            visibility: visible;
        }

        .modal-overlay {
            position: absolute;
            inset: 0;
            background: rgba(0, 0, 0, 0.8);
            backdrop-filter: blur(10px);
        }

        .modal-content {
            position: relative;
            background: var(--bg-card);
            border-radius: var(--radius-xl);
            max-width: 900px;
            width: 90%;
            max-height: 85vh;
            overflow-y: auto;
            border: 1px solid rgba(255, 255, 255, 0.1);
            box-shadow: var(--shadow-xl);
            transform: scale(0.9);
            transition: transform 0.3s ease;
        }

        .course-modal.active .modal-content {
            transform: scale(1);
        }

        .modal-close {
            position: absolute;
            top: 1.5rem;
            right: 1.5rem;
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 50%;
            color: var(--text-primary);
            font-size: 1.25rem;
            cursor: pointer;
            transition: all 0.3s ease;
            z-index: 10;
        }

        .modal-close:hover {
            background: rgba(255, 0, 0, 0.2);
            transform: rotate(90deg);
        }

        .modal-header {
            padding: 2.5rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .course-badge {
            display: inline-block;
            padding: 0.5rem 1rem;
            background: var(--gradient-1);
            border-radius: var(--radius-full);
            color: white;
            font-size: 0.75rem;
            font-weight: 600;
            text-transform: uppercase;
            margin-bottom: 1rem;
        }

        .course-badge.lab {
            background: var(--gradient-2);
        }

        .course-badge.project {
            background: var(--gradient-3);
        }

        .modal-header h2 {
            font-size: 1.5rem;
            color: var(--primary-light);
            margin-bottom: 0.5rem;
        }

        .modal-header h3 {
            font-size: 1.75rem;
            font-weight: 700;
            color: var(--text-primary);
        }

        .modal-body {
            padding: 2rem;
        }

        .modal-tabs {
            display: flex;
            gap: 0.5rem;
            margin-bottom: 2rem;
            flex-wrap: wrap;
        }

        .tab-btn {
            padding: 0.75rem 1.5rem;
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: var(--radius-md);
            color: var(--text-secondary);
            font-weight: 500;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .tab-btn:hover {
            background: rgba(255, 255, 255, 0.08);
            color: var(--text-primary);
        }

        .tab-btn.active {
            background: var(--gradient-1);
            color: white;
            border-color: transparent;
        }

        .tab-pane {
            display: none;
        }

        .tab-pane.active {
            display: block;
            animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .content-section {
            margin-bottom: 2rem;
        }

        .content-section h4 {
            font-size: 1.25rem;
            font-weight: 600;
            margin-bottom: 1rem;
            color: var(--text-primary);
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .content-section h4 i {
            color: var(--primary-color);
        }

        .content-section p {
            color: var(--text-secondary);
            line-height: 1.8;
        }

        .outcomes-list {
            list-style: none;
            padding: 0;
        }

        .outcomes-list li {
            padding: 0.75rem 0;
            padding-left: 2rem;
            position: relative;
            color: var(--text-secondary);
            line-height: 1.6;
        }

        .outcomes-list li::before {
            content: '✓';
            position: absolute;
            left: 0;
            color: var(--primary-color);
            font-weight: bold;
            font-size: 1.25rem;
        }

        .tools-list {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
        }

        .tool-tag {
            padding: 0.5rem 1rem;
            background: rgba(var(--primary-hue), 85%, 60%, 0.1);
            border: 1px solid rgba(var(--primary-hue), 85%, 60%, 0.2);
            border-radius: var(--radius-full);
            color: var(--primary-light);
            font-size: 0.875rem;
        }

        .placeholder-content {
            text-align: center;
            padding: 3rem 2rem;
            background: rgba(255, 255, 255, 0.02);
            border-radius: var(--radius-lg);
            border: 2px dashed rgba(255, 255, 255, 0.1);
        }

        .placeholder-content i {
            font-size: 3rem;
            color: var(--primary-color);
            margin-bottom: 1rem;
        }

        .placeholder-content h4 {
            font-size: 1.5rem;
            margin-bottom: 0.5rem;
            color: var(--text-primary);
        }

        .placeholder-content p {
            color: var(--text-secondary);
            margin-bottom: 1.5rem;
        }

        .content-list {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            max-width: 400px;
            margin: 0 auto;
        }

        .content-item {
            display: flex;
            align-items: center;
            gap: 1rem;
            padding: 1rem;
            background: rgba(255, 255, 255, 0.05);
            border-radius: var(--radius-md);
            text-align: left;
        }

        .content-item i {
            font-size: 1.5rem;
            color: var(--primary-color);
        }

        .content-item span {
            color: var(--text-primary);
            font-weight: 500;
        }

        /* Scrollbar styling for modal */
        .modal-content::-webkit-scrollbar {
            width: 8px;
        }

        .modal-content::-webkit-scrollbar-track {
            background: rgba(255, 255, 255, 0.05);
            border-radius: 4px;
        }

        .modal-content::-webkit-scrollbar-thumb {
            background: var(--primary-color);
            border-radius: 4px;
        }

        .modal-content::-webkit-scrollbar-thumb:hover {
            background: var(--primary-dark);
        }

        /* Materials Section Styles */
        .materials-content {
            padding: 1rem 0;
        }

        .materials-header {
            text-align: center;
            margin-bottom: 2rem;
            padding-bottom: 1.5rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .materials-header i {
            font-size: 3rem;
            color: var(--primary-color);
            margin-bottom: 1rem;
        }

        .materials-header h4 {
            font-size: 1.75rem;
            font-weight: 700;
            color: var(--text-primary);
            margin-bottom: 0.5rem;
        }

        .materials-header p {
            color: var(--text-secondary);
            font-size: 1rem;
        }

        .materials-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 1.5rem;
        }

        .material-link {
            display: flex;
            align-items: center;
            gap: 1rem;
            padding: 1.5rem;
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: var(--radius-lg);
            text-decoration: none;
            color: var(--text-primary);
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }

        .material-link::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 4px;
            height: 100%;
            background: var(--gradient-1);
            transform: scaleY(0);
            transition: transform 0.3s ease;
        }

        .material-link:hover {
            background: rgba(255, 255, 255, 0.08);
            border-color: var(--primary-color);
            transform: translateX(5px);
        }

        .material-link:hover::before {
            transform: scaleY(1);
        }

        .material-icon {
            width: 50px;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: var(--gradient-1);
            border-radius: var(--radius-md);
            flex-shrink: 0;
        }

        .material-icon i {
            font-size: 1.5rem;
            color: white;
        }

        .material-info {
            flex: 1;
        }

        .material-info h5 {
            font-size: 1.125rem;
            font-weight: 600;
            color: var(--text-primary);
            margin-bottom: 0.25rem;
        }

        .material-info p {
            font-size: 0.875rem;
            color: var(--text-secondary);
            margin: 0;
        }

        .material-link > .fa-external-link-alt {
            color: var(--primary-color);
            font-size: 1rem;
            opacity: 0.6;
            transition: all 0.3s ease;
        }

        .material-link:hover > .fa-external-link-alt {
            opacity: 1;
            transform: translateX(3px);
        }

        @media (max-width: 768px) {
            .materials-grid {
                grid-template-columns: 1fr;
            }
        }

        /* Lab Section Styles */
        .labs-section {
            margin-top: 2rem;
            padding-top: 2rem;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .labs-title {
            font-size: 1.25rem;
            font-weight: 600;
            color: var(--text-primary);
            margin-bottom: 1.5rem;
            display: flex;
            align-items: center;
            gap: 0.75rem;
        }

        .labs-title i {
            color: var(--primary-color);
        }

        .labs-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 1.5rem;
        }

        .lab-card {
            padding: 1.5rem;
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: var(--radius-lg);
            cursor: pointer;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }

        .lab-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 4px;
            height: 100%;
            background: var(--gradient-2);
            transform: scaleY(0);
            transition: transform 0.3s ease;
        }

        .lab-card:hover {
            background: rgba(255, 255, 255, 0.08);
            border-color: var(--primary-color);
            transform: translateY(-5px);
        }

        .lab-card:hover::before {
            transform: scaleY(1);
        }

        .lab-icon {
            width: 50px;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: var(--gradient-2);
            border-radius: var(--radius-md);
            margin-bottom: 1rem;
        }

        .lab-icon i {
            font-size: 1.5rem;
            color: white;
        }

        .lab-name {
            font-size: 1.125rem;
            font-weight: 600;
            color: var(--text-primary);
            margin-bottom: 0.5rem;
        }

        .lab-description {
            font-size: 0.875rem;
            color: var(--text-secondary);
            line-height: 1.6;
        }

        @media (max-width: 768px) {
            .labs-grid {
                grid-template-columns: 1fr;
            }
        }
    `;

    document.head.appendChild(style);
}

// ==========================================
// VIDEO FUNCTIONALITY
// ==========================================
function initVideos() {
    // Intro Video
    const introVideo = document.getElementById('introVideo');
    const playButton = document.getElementById('playButton');
    const videoOverlay = document.getElementById('videoOverlay');

    if (introVideo && playButton && videoOverlay) {
        playButton.addEventListener('click', () => {
            if (introVideo.paused) {
                introVideo.play();
                videoOverlay.style.opacity = '0';
                videoOverlay.style.pointerEvents = 'none';
            }
        });

        introVideo.addEventListener('click', () => {
            if (!introVideo.paused) {
                introVideo.pause();
                videoOverlay.style.opacity = '1';
                videoOverlay.style.pointerEvents = 'all';
            }
        });

        introVideo.addEventListener('ended', () => {
            videoOverlay.style.opacity = '1';
            videoOverlay.style.pointerEvents = 'all';
        });
    }

    // Project Videos
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        const video = card.querySelector('.project-video');
        const playBtn = card.querySelector('.project-play-btn');
        const overlay = card.querySelector('.project-video-overlay');

        if (video && playBtn && overlay) {
            // Play on hover
            card.addEventListener('mouseenter', () => {
                if (video.paused) {
                    video.play().catch(e => console.log('Video play failed:', e));
                }
            });

            // Pause on leave
            card.addEventListener('mouseleave', () => {
                if (!video.paused) {
                    video.pause();
                    video.currentTime = 0;
                }
            });

            // Play button click
            playBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                if (video.paused) {
                    video.play();
                    overlay.style.opacity = '0';
                    overlay.style.pointerEvents = 'none';
                } else {
                    video.pause();
                    overlay.style.opacity = '1';
                    overlay.style.pointerEvents = 'all';
                }
            });

            // Video click to pause
            video.addEventListener('click', () => {
                if (!video.paused) {
                    video.pause();
                    overlay.style.opacity = '1';
                    overlay.style.pointerEvents = 'all';
                }
            });

            // Reset overlay when video ends
            video.addEventListener('ended', () => {
                overlay.style.opacity = '1';
                overlay.style.pointerEvents = 'all';
                video.currentTime = 0;
            });
        }
    });
}

// ==========================================
// BLOG SECTION
// ==========================================
function initBlog() {
    const blogGrid = document.getElementById('blogGrid');
    if (!blogGrid) return;

    blogPosts.forEach((post, index) => {
        const blogCard = createBlogCard(post, index);
        blogGrid.appendChild(blogCard);
    });
}

function createBlogCard(post, index) {
    const card = document.createElement('div');
    card.className = 'blog-card';
    card.style.animationDelay = `${index * 0.1}s`;

    card.innerHTML = `
        <div class="blog-card-header">
            <div class="blog-icon">
                <i class="fab fa-medium"></i>
            </div>
            <div class="blog-meta">
                <span class="blog-date"><i class="fas fa-calendar"></i> ${post.date}</span>
                <span class="blog-read-time"><i class="fas fa-clock"></i> ${post.readTime}</span>
            </div>
        </div>
        <div class="blog-card-body">
            <h3 class="blog-title">${post.title}</h3>
            <p class="blog-description">${post.description}</p>
            <div class="blog-tags">
                ${post.tags.map(tag => `<span class="blog-tag">${tag}</span>`).join('')}
            </div>
        </div>
        <div class="blog-card-footer">
            <a href="${post.link}" target="_blank" class="blog-link">
                Read Article <i class="fas fa-arrow-right"></i>
            </a>
        </div>
    `;

    return card;
}

// ==========================================
// CONTACT FORM
// ==========================================
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = {
            name: form.name.value,
            email: form.email.value,
            subject: form.subject.value,
            message: form.message.value
        };

        // Create mailto link
        const mailtoLink = `mailto:qasimnaveed206@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        )}`;

        // Open email client
        window.location.href = mailtoLink;

        // Show success message
        showNotification('Email client opened! Your message is ready to send.', 'success');

        // Reset form
        form.reset();
    });
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
        <span>${message}</span>
    `;

    document.body.appendChild(notification);

    // Add notification styles if not exists
    if (!document.getElementById('notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            .notification {
                position: fixed;
                top: 100px;
                right: 2rem;
                padding: 1rem 1.5rem;
                background: var(--bg-card);
                border: 1px solid rgba(255, 255, 255, 0.1);
                border-radius: var(--radius-md);
                box-shadow: var(--shadow-lg);
                display: flex;
                align-items: center;
                gap: 1rem;
                z-index: 10000;
                animation: slideInRight 0.3s ease;
            }

            .notification i {
                font-size: 1.5rem;
            }

            .notification-success {
                border-left: 4px solid #28ca42;
            }

            .notification-success i {
                color: #28ca42;
            }

            @keyframes slideInRight {
                from {
                    transform: translateX(400px);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }

            @keyframes slideOutRight {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(400px);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }

    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ==========================================
// SMOOTH SCROLL
// ==========================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

// Lightbox for certificates
function openLightbox(imageSrc) {
    const lightbox = document.getElementById('certLightbox');
    const lightboxImage = document.getElementById('lightboxImage');

    lightboxImage.src = imageSrc;
    lightbox.classList.add('active');

    // Prevent body scroll when lightbox is open
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('certLightbox');
    lightbox.classList.remove('active');

    // Restore body scroll
    document.body.style.overflow = 'auto';
}

// Close lightbox on background click
document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.getElementById('certLightbox');
    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    }

    // Close lightbox on ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeLightbox();
        }
    });
});

// Add scroll reveal animation
window.addEventListener('scroll', () => {
    const reveals = document.querySelectorAll('.timeline-item');

    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
});

// Initialize timeline items for scroll animation
document.addEventListener('DOMContentLoaded', () => {
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
});
