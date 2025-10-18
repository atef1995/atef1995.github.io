// Smooth scroll for navigation links
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

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
        navbar.style.boxShadow = 'none';
    } else {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
    }

    lastScroll = currentScroll;
});

// GitHub repos fetcher
async function fetchGitHubRepos() {
    const username = 'atef1995'; // Change this to your GitHub username
    const reposContainer = document.getElementById('github-repos');

    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);

        if (!response.ok) {
            throw new Error('Failed to fetch repos');
        }

        const repos = await response.json();

        // Clear loading message
        reposContainer.innerHTML = '';

        // Filter out forks if you want only original repos
        const filteredRepos = repos.filter(repo => !repo.fork);

        // Display repos
        filteredRepos.slice(0, 6).forEach(repo => {
            const repoCard = createRepoCard(repo);
            reposContainer.appendChild(repoCard);
        });

        // If no repos found
        if (filteredRepos.length === 0) {
            reposContainer.innerHTML = '<p class="loading">no repositories found</p>';
        }

    } catch (error) {
        console.error('Error fetching GitHub repos:', error);
        reposContainer.innerHTML = `
            <p class="loading">couldn't load repos right now. check them out on
            <a href="https://github.com/${username}" target="_blank" style="color: var(--accent)">github</a> instead</p>
        `;
    }
}

// Create repo card element
function createRepoCard(repo) {
    const card = document.createElement('div');
    card.className = 'repo-card';

    // Format date
    const updatedDate = new Date(repo.updated_at);
    const formattedDate = updatedDate.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });

    card.innerHTML = `
        <div class="repo-header">
            <span class="repo-icon">📁</span>
            <a href="${repo.html_url}" target="_blank" class="repo-name">${repo.name}</a>
        </div>
        <p class="repo-description">${repo.description || 'no description available'}</p>
        <div class="repo-stats">
            ${repo.language ? `<span class="repo-stat">📝 ${repo.language}</span>` : ''}
            <span class="repo-stat">⭐ ${repo.stargazers_count}</span>
            <span class="repo-stat">🔄 ${repo.forks_count}</span>
        </div>
    `;

    return card;
}

// Intersection Observer for scroll animations
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

// Observe project cards and other elements
document.addEventListener('DOMContentLoaded', () => {
    // Fetch GitHub repos
    fetchGitHubRepos();

    // Animate elements on scroll
    const animateOnScroll = document.querySelectorAll('.project-card, .repo-card, .skill-category');
    animateOnScroll.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add active state to nav links on scroll
const sections = document.querySelectorAll('section[id]');

function setActiveNav() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);

        if (navLink && scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink.style.color = 'var(--text-primary)';
        } else if (navLink) {
            navLink.style.color = 'var(--text-secondary)';
        }
    });
}

window.addEventListener('scroll', setActiveNav);

// Easter egg: console message
console.log('%c👋 hey there!', 'font-size: 20px; font-weight: bold; color: #3b82f6;');
console.log('%clooking through the code? i like your style.', 'font-size: 14px; color: #a1a1aa;');
console.log('%cfeel free to reach out if you want to chat about tech, projects, or anything interesting.', 'font-size: 14px; color: #a1a1aa;');
