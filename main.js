// MindSpark - Advanced JavaScript with Dynamic Features

// Enhanced Idea Database with Professional Content
const ideaDatabase = {
    art: [
        "Create a series of abstract paintings exploring the intersection of technology and nature",
        "Design an interactive sculpture that responds to viewer movement and biometric data",
        "Develop a mixed media installation about climate change using recycled materials",
        "Create a digital art collection inspired by quantum physics and consciousness",
        "Design an immersive VR experience that explores historical art movements",
        "Develop a generative art system that creates unique pieces based on user emotions",
        "Create a large-scale mural that incorporates augmented reality elements",
        "Design an art therapy program using AI-generated visual prompts",
        "Develop a kinetic sculpture that visualizes real-time environmental data",
        "Create a series of portraits exploring identity in the digital age",
        "Design an interactive light installation for public spaces",
        "Develop a bio-art project using living organisms as artistic medium",
        "Create a data visualization artwork representing global internet traffic",
        "Design a participatory art project that evolves with community input",
        "Develop an art education platform using machine learning for personalized feedback",
        "Create a series of sculptures that explore the concept of time and memory",
        "Design an immersive sound installation that responds to visitor movement",
        "Develop a street art project with social and political commentary",
        "Create a collection of digital fashion designs for virtual worlds",
        "Design an art installation that visualizes human connection and isolation"
    ],
    
    startup: [
        "Develop a SaaS platform for creative project management with AI-powered insights",
        "Create a marketplace connecting freelance designers with sustainable businesses",
        "Build a subscription service for personalized art supplies and creative challenges",
        "Develop a platform for virtual art galleries and digital exhibitions",
        "Create a blockchain-based system for authenticating and selling digital art",
        "Build an AI-powered tool that helps businesses develop creative marketing campaigns",
        "Develop a platform for collaborative storytelling and narrative design",
        "Create a service that transforms customer data into actionable creative insights",
        "Build a marketplace for unique creative experiences and workshops",
        "Develop a platform that uses AI to match creative talent with project opportunities",
        "Create a subscription box service for emerging artists and designers",
        "Build a platform for real-time collaborative design and feedback",
        "Develop a tool that helps brands create culturally sensitive marketing content",
        "Create a service that provides creative direction for small businesses",
        "Build a platform for crowdsourced design solutions and creative challenges",
        "Develop an AI assistant that helps with creative block and idea generation",
        "Create a marketplace for vintage and rare design artifacts",
        "Build a platform for creative professionals to showcase their process work",
        "Develop a service that offers creative consulting for tech startups",
        "Create a platform that connects artists with corporate commission opportunities"
    ],
    
    design: [
        "Design a mobile app interface for a mental health and wellness platform",
        "Create a brand identity system for a sustainable technology company",
        "Develop a user experience for an AI-powered educational platform",
        "Design a dashboard for monitoring environmental impact metrics",
        "Create a web application for collaborative creative writing",
        "Develop a mobile interface for a smart home automation system",
        "Design a brand system for a virtual reality entertainment company",
        "Create a user interface for a blockchain-based creative marketplace",
        "Develop a design system for a global non-profit organization",
        "Design an interactive experience for a museum exhibition",
        "Create a mobile app design for a personal productivity platform",
        "Develop a user interface for a cryptocurrency wallet and exchange",
        "Design a brand identity for a biotech innovation company",
        "Create a web platform for virtual event hosting and networking",
        "Develop a mobile interface for a fitness and nutrition tracking app",
        "Design a user experience for an autonomous vehicle interface",
        "Create a brand system for a space exploration technology company",
        "Develop a mobile app design for a language learning platform",
        "Design a user interface for a medical diagnosis and treatment app",
        "Create a web platform for collaborative music production and sharing"
    ]
};

// AI Enhancement Suggestions Database
const aiEnhancements = {
    art: [
        "Consider incorporating mixed reality elements to enhance viewer engagement",
        "Explore sustainable materials and eco-friendly production methods",
        "Research current art market trends to inform your creative direction",
        "Consider the psychological impact of color psychology in your work",
        "Explore collaboration with artists from different cultural backgrounds"
    ],
    startup: [
        "Analyze market competition and identify unique value propositions",
        "Consider scalability challenges and plan for growth infrastructure",
        "Research funding opportunities and investor requirements",
        "Develop a comprehensive go-to-market strategy",
        "Consider partnerships with established industry players"
    ],
    design: [
        "Conduct user research to validate design assumptions",
        "Consider accessibility standards and inclusive design principles",
        "Explore emerging technologies like AR/VR for enhanced user experience",
        "Research competitor designs and identify differentiation opportunities",
        "Consider internationalization and cross-cultural design requirements"
    ]
};

// Global state management
let currentCategory = 'art';
let ideaHistory = JSON.parse(localStorage.getItem('ideaHistory')) || [];
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
let stats = JSON.parse(localStorage.getItem('stats')) || {
    ideasGenerated: 0,
    favoritesCount: 0,
    streakCount: 0,
    lastVisit: null,
    aiSuggestions: 0
};

let currentIdea = '';
let isAIEnhanced = false;

// Particle system for background
let particles = [];
let particleCount = 80;

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('particle-bg');
    
    // Initialize particles with enhanced properties
    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: random(width),
            y: random(height),
            vx: random(-0.3, 0.3),
            vy: random(-0.3, 0.3),
            size: random(2, 8),
            opacity: random(0.1, 0.4),
            color: random(['#6366f1', '#f59e0b', '#10b981', '#8b5cf6'])
        });
    }
}

function draw() {
    clear();
    
    // Update and draw particles with enhanced effects
    for (let i = 0; i < particles.length; i++) {
        let p = particles[i];
        
        // Update position
        p.x += p.vx;
        p.y += p.vy;
        
        // Wrap around edges
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;
        
        // Draw particle with color
        fill(p.color + Math.floor(p.opacity * 255).toString(16).padStart(2, '0'));
        noStroke();
        ellipse(p.x, p.y, p.size);
        
        // Draw connections with enhanced effects
        for (let j = i + 1; j < particles.length; j++) {
            let p2 = particles[j];
            let distance = dist(p.x, p.y, p2.x, p2.y);
            
            if (distance < 120) {
                let alpha = (1 - distance / 120) * p.opacity * 30;
                stroke(p.color + Math.floor(alpha).toString(16).padStart(2, '0'));
                strokeWeight(1);
                line(p.x, p.y, p2.x, p2.y);
            }
        }
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

// Advanced initialization
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    initializeAdvancedFeatures();
    startPeriodicUpdates();
});

function initializeApp() {
    setupEventListeners();
    updateStatsDisplay();
    loadHistory();
    updateStreak();
    initializeProgressBars();
}

function setupEventListeners() {
    // Main generate button
    const generateBtn = document.getElementById('generate-btn');
    generateBtn.addEventListener('click', generateAdvancedIdea);
    
    // Category buttons
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            selectCategory(this.dataset.category);
        });
    });
    
    // Favorite button
    document.getElementById('favorite-btn').addEventListener('click', favoriteCurrentIdea);
    
    // Ripple effect
    generateBtn.addEventListener('click', createRipple);
    
    // Enhanced hover effects
    setupHoverEffects();
}

function generateAdvancedIdea() {
    const ideaText = document.getElementById('idea-text');
    const btnText = document.getElementById('btn-text');
    
    // Get random idea from current category
    const ideas = ideaDatabase[currentCategory];
    const randomIdea = ideas[Math.floor(Math.random() * ideas.length)];
    
    currentIdea = randomIdea;
    isAIEnhanced = false;
    
    // Add to history with enhanced metadata
    const ideaObject = {
        id: Date.now(),
        text: randomIdea,
        category: currentCategory,
        timestamp: new Date().toISOString(),
        aiEnhanced: false,
        shared: false,
        rating: 0
    };
    
    ideaHistory.unshift(ideaObject);
    if (ideaHistory.length > 20) {
        ideaHistory = ideaHistory.slice(0, 20);
    }
    
    // Update stats with animation
    stats.ideasGenerated++;
    updateStatsDisplay();
    updateProgressBars();
    saveData();
    
    // Enhanced animation sequence
    anime({
        targets: '#idea-text',
        opacity: [1, 0],
        scale: [1, 0.95],
        duration: 200,
        complete: function() {
            // Typewriter effect with cursor
            ideaText.innerHTML = '';
            const typed = new Typed('#idea-text', {
                strings: [randomIdea],
                typeSpeed: 30,
                showCursor: true,
                cursorChar: '|',
                onComplete: function() {
                    // Enable favorite and share buttons
                    document.getElementById('favorite-btn').disabled = false;
                    document.getElementById('share-btn').disabled = false;
                    
                    // Add to history display
                    addToHistoryDisplay(ideaObject);
                    
                    // Auto-suggest AI enhancement for certain ideas
                    if (Math.random() > 0.7) {
                        setTimeout(() => {
                            showNotification('💡 AI enhancement available for this idea!');
                        }, 2000);
                    }
                }
            });
        }
    });
    
    // Button animation
    anime({
        targets: '#generate-btn',
        scale: [1, 0.95, 1],
        duration: 200,
        easing: 'easeInOutQuad'
    });
    
    // Update button text temporarily
    const originalText = btnText.textContent;
    btnText.textContent = '✨ Sparking...';
    setTimeout(() => {
        btnText.textContent = originalText;
    }, 1000);
}

function selectCategory(category) {
    currentCategory = category;
    
    // Update button states with animation
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
        anime({
            targets: btn,
            scale: 1,
            duration: 200,
            easing: 'easeOutQuad'
        });
    });
    
    const activeBtn = document.querySelector(`[data-category="${category}"]`);
    activeBtn.classList.add('active');
    
    // Animate category change
    anime({
        targets: '.idea-display',
        scale: [1, 0.98, 1],
        duration: 400,
        easing: 'easeInOutQuad'
    });
    
    // Update idea display with category transition
    const ideaText = document.getElementById('idea-text');
    if (ideaText.textContent !== 'Click the spark button to generate your first creative idea!') {
        anime({
            targets: '#idea-text',
            opacity: [1, 0.7, 1],
            duration: 300,
            complete: function() {
                // Add category context
                const categoryContext = getCategoryContext(category);
                showNotification(`Switched to ${categoryContext}`);
            }
        });
    }
}

function getCategoryContext(category) {
    const contexts = {
        art: 'Art & Creative Projects',
        startup: 'Business & Technology Ventures',
        design: 'Design & User Experience'
    };
    return contexts[category] || 'Creative Ideas';
}

function favoriteCurrentIdea() {
    if (!currentIdea) return;
    
    const isAlreadyFavorited = favorites.some(f => f.text === currentIdea);
    
    if (isAlreadyFavorited) {
        showNotification('Idea already in favorites!');
        return;
    }
    
    const favorite = {
        id: Date.now(),
        text: currentIdea,
        category: currentCategory,
        timestamp: new Date().toISOString(),
        aiEnhanced: isAIEnhanced
    };
    
    favorites.push(favorite);
    stats.favoritesCount++;
    
    updateStatsDisplay();
    updateProgressBars();
    saveData();
    
    // Animate favorite button
    const btn = document.getElementById('favorite-btn');
    anime({
        targets: btn,
        scale: [1, 1.2, 1],
        backgroundColor: ['rgba(255, 255, 255, 0.1)', 'rgba(239, 68, 68, 0.2)', 'rgba(255, 255, 255, 0.1)'],
        duration: 500,
        easing: 'easeInOutQuad'
    });
    
    showNotification('Added to favorites! ❤️');
}

function shareCurrentIdea() {
    if (!currentIdea) {
        showNotification('Generate an idea first!');
        return;
    }
    
    const shareData = {
        title: 'Creative Idea from MindSpark',
        text: currentIdea,
        url: window.location.origin
    };
    
    if (navigator.share) {
        navigator.share(shareData).then(() => {
            showNotification('Shared successfully!');
            trackShare();
        }).catch(() => {
            fallbackShare();
        });
    } else {
        fallbackShare();
    }
}

function fallbackShare() {
    const shareText = `${currentIdea}\n\nGenerated by MindSpark - ${window.location.origin}`;
    
    navigator.clipboard.writeText(shareText).then(() => {
        showNotification('Copied to clipboard!');
        trackShare();
    }).catch(() => {
        showNotification('Sharing failed. Please copy manually.');
    });
}

function trackShare() {
    // Track share event for analytics
    const shareEvent = {
        type: 'share',
        category: currentCategory,
        timestamp: new Date().toISOString(),
        platform: navigator.share ? 'native' : 'clipboard'
    };
    
    // In a real implementation, this would send to analytics API
    console.log('Share event tracked:', shareEvent);
}

function createRipple(e) {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px;
    
    button.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

function setupHoverEffects() {
    // Enhanced hover effects for cards
    document.querySelectorAll('.glass-card, .stats-card, .feature-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            anime({
                targets: this,
                scale: 1.02,
                duration: 200,
                easing: 'easeOutQuad'
            });
        });
        
        card.addEventListener('mouseleave', function() {
            anime({
                targets: this,
                scale: 1,
                duration: 200,
                easing: 'easeOutQuad'
            });
        });
    });
    
    // Magnetic cursor effect for buttons
    document.querySelectorAll('.category-btn, .generate-btn').forEach(btn => {
        btn.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            anime({
                targets: this,
                translateX: x * 0.1,
                translateY: y * 0.1,
                duration: 300,
                easing: 'easeOutQuad'
            });
        });
        
        btn.addEventListener('mouseleave', function() {
            anime({
                targets: this,
                translateX: 0,
                translateY: 0,
                duration: 300,
                easing: 'easeOutQuad'
            });
        });
    });
}

function updateStatsDisplay() {
    // Animate number changes
    animateNumber('ideas-generated', stats.ideasGenerated);
    animateNumber('favorites-count', favorites.length);
    animateNumber('streak-count', stats.streakCount);
    animateNumber('ai-suggestions', stats.aiSuggestions);
}

function animateNumber(elementId, targetValue) {
    const element = document.getElementById(elementId);
    const currentValue = parseInt(element.textContent) || 0;
    
    if (currentValue !== targetValue) {
        anime({
            targets: { value: currentValue },
            value: targetValue,
            duration: 1000,
            easing: 'easeOutQuad',
            update: function(anim) {
                element.textContent = Math.floor(anim.animatables[0].target.value);
            }
        });
    }
}

function initializeProgressBars() {
    updateProgressBars();
}

function updateProgressBars() {
    const maxIdeas = 100;
    const maxFavorites = 50;
    const maxStreak = 30;
    const maxAI = 200;
    
    const ideasProgress = Math.min((stats.ideasGenerated / maxIdeas) * 100, 100);
    const favoritesProgress = Math.min((favorites.length / maxFavorites) * 100, 100);
    const streakProgress = Math.min((stats.streakCount / maxStreak) * 100, 100);
    const aiProgress = Math.min((stats.aiSuggestions / maxAI) * 100, 100);
    
    document.getElementById('ideas-progress').style.width = ideasProgress + '%';
    document.getElementById('favorites-progress').style.width = favoritesProgress + '%';
    document.getElementById('streak-progress').style.width = streakProgress + '%';
    document.getElementById('ai-progress').style.width = aiProgress + '%';
}

function updateStreak() {
    const today = new Date().toDateString();
    const lastVisit = stats.lastVisit;
    
    if (lastVisit) {
        const lastDate = new Date(lastVisit).toDateString();
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayString = yesterday.toDateString();
        
        if (lastDate === yesterdayString) {
            stats.streakCount++;
        } else if (lastDate !== today) {
            stats.streakCount = 1;
        }
    } else {
        stats.streakCount = 1;
    }
    
    stats.lastVisit = new Date().toISOString();
    updateStatsDisplay();
    updateProgressBars();
    saveData();
}

function loadHistory() {
    const container = document.getElementById('activity-feed');
    if (!container) return;
    
    container.innerHTML = '';
    
    if (ideaHistory.length === 0) {
        container.innerHTML = `
            <div class="text-center text-white/60 py-4">
                <p>No ideas generated yet. Click the spark button to get started!</p>
            </div>
        `;
        return;
    }
    
    // Show recent ideas in activity feed
    ideaHistory.slice(0, 5).forEach(idea => {
        addToHistoryDisplay(idea);
    });
}

function addToHistoryDisplay(idea) {
    const container = document.getElementById('activity-feed');
    if (!container) return;
    
    const historyCard = document.createElement('div');
    historyCard.className = 'flex items-center space-x-3 text-white/80 text-sm p-3 bg-white/5 rounded-lg';
    historyCard.innerHTML = `
        <div class="w-2 h-2 bg-${getCategoryColor(idea.category)}-400 rounded-full"></div>
        <div class="flex-1">
            <span class="text-xs text-white/40 mono-font uppercase">${idea.category}</span>
            <p class="text-white/90 text-sm mt-1">${idea.text}</p>
        </div>
        <div class="text-xs text-white/40">
            ${formatTimeAgo(idea.timestamp)}
        </div>
    `;
    
    container.insertBefore(historyCard, container.firstChild);
    
    // Animate in
    anime({
        targets: historyCard,
        opacity: [0, 1],
        translateX: [-20, 0],
        duration: 300,
        easing: 'easeOutQuad'
    });
    
    // Remove old items
    if (container.children.length > 10) {
        container.removeChild(container.lastChild);
    }
}

function getCategoryColor(category) {
    const colors = {
        art: 'pink',
        startup: 'green',
        design: 'yellow'
    };
    return colors[category] || 'gray';
}

function formatTimeAgo(timestamp) {
    const now = new Date();
    const time = new Date(timestamp);
    const diffInMinutes = Math.floor((now - time) / (1000 * 60));
    
    if (diffInMinutes < 1) return 'Just now';
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
    return new Date(timestamp).toLocaleDateString();
}

function startPeriodicUpdates() {
    // Update stats every 30 seconds
    setInterval(() => {
        updateStatsDisplay();
        updateProgressBars();
    }, 30000);
    
    // Simulate API activity
    setInterval(() => {
        if (Math.random() > 0.8) {
            stats.aiSuggestions += Math.floor(Math.random() * 3) + 1;
            updateStatsDisplay();
            updateProgressBars();
            saveData();
        }
    }, 45000);
}

function saveData() {
    localStorage.setItem('ideaHistory', JSON.stringify(ideaHistory));
    localStorage.setItem('favorites', JSON.stringify(favorites));
    localStorage.setItem('stats', JSON.stringify(stats));
}

// Enhanced notification system
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    const bgColor = type === 'success' ? 'from-green-500 to-emerald-500' : 
                   type === 'error' ? 'from-red-500 to-pink-500' : 
                   'from-blue-500 to-indigo-500';
    
    notification.className = `fixed top-20 right-4 bg-gradient-to-r ${bgColor} text-white px-6 py-3 rounded-lg shadow-lg z-50`;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    anime({
        targets: notification,
        opacity: [0, 1],
        translateX: [100, 0],
        duration: 300,
        easing: 'easeOutQuad'
    });
    
    setTimeout(() => {
        anime({
            targets: notification,
            opacity: [1, 0],
            translateX: [0, 100],
            duration: 300,
            easing: 'easeInQuad',
            complete: () => notification.remove()
        });
    }, 4000);
}

// API simulation functions
function simulateAPICall(endpoint, data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                success: true,
                data: data,
                timestamp: new Date().toISOString()
            });
        }, Math.random() * 2000 + 500);
    });
}

function getAIEnhancements(category) {
    return aiEnhancements[category] || [];
}

// Export functions for global access
window.MindSpark = {
    ideaDatabase,
    generateAdvancedIdea,
    selectCategory,
    favoriteCurrentIdea,
    shareCurrentIdea,
    showNotification,
    simulateAPICall,
    getAIEnhancements,
    saveData
};