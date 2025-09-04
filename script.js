document.addEventListener('DOMContentLoaded', () => {

    // Navigation functionality
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const modal = document.getElementById('modal');
    const closeModal = document.getElementById('close-modal');
    const modalBody = document.getElementById('modal-body');

    // Toggle mobile navigation
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Close mobile nav when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (hamburger) hamburger.classList.remove('active');
            if (navMenu) navMenu.classList.remove('active');
        });
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70; // Account for fixed header
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Highlight active navigation link based on scroll position
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section');
        const scrollPos = window.scrollY + 100; // Offset for fixed header
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const correspondingLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                if (correspondingLink) {
                    correspondingLink.classList.add('active');
                }
            }
        });
    });

    // CTA button functionality
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            const lifeHacksSection = document.getElementById('life-hacks');
            if (lifeHacksSection) {
                const offsetTop = lifeHacksSection.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    }

    // Blog post content
    const blogPosts = {
        hack1: {
            title: "The 2-Minute Rule for Productivity",
            content: `
                <h2>The 2-Minute Rule for Productivity</h2>
                <p><strong>If it takes less than 2 minutes, do it now.</strong> This simple rule, popularized by productivity expert David Allen, can transform your daily routine and eliminate the mental clutter that comes from an ever-growing to-do list.</p>
                
                <h3>Why It Works</h3>
                <p>The 2-minute rule works because it prevents small tasks from accumulating into overwhelming piles. When you consistently apply this rule, you'll notice:</p>
                <ul>
                    <li>Less mental overhead from remembering small tasks</li>
                    <li>A cleaner physical and digital environment</li>
                    <li>More momentum throughout your day</li>
                    <li>Reduced stress from unfinished business</li>
                </ul>
                
                <h3>How to Apply It</h3>
                <p>Start by identifying tasks that genuinely take 2 minutes or less:</p>
                <ul>
                    <li>Replying to simple emails</li>
                    <li>Putting items back where they belong</li>
                    <li>Making quick phone calls</li>
                    <li>Filing documents</li>
                    <li>Washing a single dish</li>
                </ul>
                
                <h3>The Compound Effect</h3>
                <p>While each 2-minute action seems small, the compound effect is powerful. Over a week, you might complete 50+ small tasks that would otherwise pile up into a stressful weekend cleanup session.</p>
                
                <p><strong>Remember:</strong> The goal isn't to become obsessed with 2-minute tasks, but to create a habit that prevents small problems from becoming big ones.</p>
            `
        },
        hack2: {
            title: "Morning Routine That Actually Works",
            content: `
                <h2>Morning Routine That Actually Works</h2>
                <p>Forget the 5 AM wake-up calls and hour-long meditation sessions. Here's a flexible morning routine that adapts to your schedule and actually improves your day.</p>
                
                <h3>The 15-Minute Foundation</h3>
                <p>This routine can be done in just 15 minutes, making it sustainable even on busy days:</p>
                <ol>
                    <li><strong>2 minutes:</strong> Make your bed (instant win for the day)</li>
                    <li><strong>3 minutes:</strong> Hydrate and do light stretching</li>
                    <li><strong>5 minutes:</strong> Write down three priorities for the day</li>
                    <li><strong>5 minutes:</strong> Eat something nutritious, even if small</li>
                </ol>
                
                <h3>The 30-Minute Extension</h3>
                <p>When you have more time, add these elements:</p>
                <ul>
                    <li>10 minutes of reading or learning</li>
                    <li>10 minutes of movement (walk, yoga, exercise)</li>
                    <li>10 minutes of mindfulness or gratitude practice</li>
                </ul>
                
                <h3>Why It Works</h3>
                <p>This routine works because it's:</p>
                <ul>
                    <li><strong>Flexible:</strong> Adapts to your available time</li>
                    <li><strong>Progressive:</strong> Builds good habits gradually</li>
                    <li><strong>Practical:</strong> Focuses on actions that genuinely improve your day</li>
                    <li><strong>Forgiving:</strong> Missing a day doesn't derail everything</li>
                </ul>
                
                <h3>Implementation Tips</h3>
                <p>Start with just the 15-minute version for a full week. Your goal is consistency, not perfection. Once it becomes natural, you can gradually add more elements based on what feels most valuable to you.</p>
            `
        },
        hack3: {
            title: "Digital Detox Without Going Offline",
            content: `
                <h2>Digital Detox Without Going Offline</h2>
                <p>You don't need to throw your phone in a drawer to reclaim your focus. These practical strategies help you use technology mindfully while staying connected to what matters.</p>
                
                <h3>The Mindful Phone Setup</h3>
                <p>Transform your phone from a distraction machine into a tool that serves you:</p>
                <ul>
                    <li><strong>Grayscale mode:</strong> Makes your phone less visually appealing</li>
                    <li><strong>App organization:</strong> Keep only essential apps on your home screen</li>
                    <li><strong>Notification audit:</strong> Turn off all non-essential notifications</li>
                    <li><strong>Charging station:</strong> Keep your phone in another room while sleeping</li>
                </ul>
                
                <h3>The 3-2-1 Digital Boundary</h3>
                <p>Create healthy boundaries without extreme measures:</p>
                <ul>
                    <li><strong>3 hours before bed:</strong> No more work emails</li>
                    <li><strong>2 hours before bed:</strong> No more scrolling social media</li>
                    <li><strong>1 hour before bed:</strong> No more screens (or use blue light filters)</li>
                </ul>
                
                <h3>Intentional Usage Strategies</h3>
                <p>Instead of mindless consumption, try these approaches:</p>
                <ul>
                    <li><strong>Single-tasking:</strong> Do one digital thing at a time</li>
                    <li><strong>Purpose-driven usage:</strong> Ask "Why am I picking up my phone?" before using it</li>
                    <li><strong>Time blocking:</strong> Designate specific times for checking messages and social media</li>
                    <li><strong>The 20-20-20 rule:</strong> Every 20 minutes, look at something 20 feet away for 20 seconds</li>
                </ul>
                
                <h3>Creating Digital-Free Spaces</h3>
                <p>Designate certain areas and times as phone-free zones:</p>
                <ul>
                    <li>The dining table during meals</li>
                    <li>The first hour after waking up</li>
                    <li>During conversations with friends and family</li>
                    <li>Your bedroom (charge your phone elsewhere)</li>
                </ul>
                
                <p><strong>Remember:</strong> The goal isn't to eliminate technology, but to use it intentionally rather than let it use you.</p>
            `
        },
        encourage1: {
            title: "You're Stronger Than You Think",
            content: `
                <h2>You're Stronger Than You Think</h2>
                <p>When life feels overwhelming and you're questioning your ability to handle what's in front of you, pause for a moment. Take a deep breath and remember this truth: <strong>you are stronger than you think.</strong></p>
                
                <h3>Evidence of Your Strength</h3>
                <p>Look back at your life. Really look. You've already overcome challenges that once seemed impossible:</p>
                <ul>
                    <li>That time you thought you couldn't handle the workload, but you did</li>
                    <li>The relationship that ended and left you wondering if you'd ever feel whole again, but you healed</li>
                    <li>The financial stress that kept you up at night, but you found a way through</li>
                    <li>The loss that felt like it would break you, but somehow you're still standing</li>
                </ul>
                
                <h3>Your Resilience Toolkit</h3>
                <p>Every challenge you've faced has added tools to your resilience toolkit. You've learned:</p>
                <ul>
                    <li>How to ask for help when you need it</li>
                    <li>How to break overwhelming problems into manageable steps</li>
                    <li>How to find hope in the darkest moments</li>
                    <li>How to be gentle with yourself during difficult times</li>
                </ul>
                
                <h3>The Present Challenge</h3>
                <p>Whatever you're facing right now, it's not bigger than you. It might feel enormous because you're in the middle of it, but remember:</p>
                <ul>
                    <li>You don't have to see the whole staircase to take the first step</li>
                    <li>You don't have to figure everything out today</li>
                    <li>You don't have to be perfect to move forward</li>
                    <li>You don't have to face this alone</li>
                </ul>
                
                <h3>Your Superpower</h3>
                <p>Your resilience isn't just about bouncing back—it's about bouncing forward. Each challenge doesn't just return you to where you were; it makes you wiser, more compassionate, and better equipped for whatever comes next.</p>
                
                <p><strong>You are not fragile.</strong> You are not a victim of circumstances. You are a warrior who has been tested and proven strong, time and time again. Trust in that strength. It's never failed you before, and it won't fail you now.</p>
            `
        },
        
        encourage2: {
  title: "Your Courageous Next Step",
  content: `
    <h2>Your Courageous Next Step</h2>
    <p>When fear or hesitation holds you back, it's easy to get stuck. Instead of pushing that feeling away, try leaning into it. Acknowledge the discomfort, take a deep breath, and then make a small, intentional move forward. You don't have to leap. Just a single, brave step is all that's required to start.</p>
    
    <h3>How to Move Forward</h3>
    <p>Sometimes, the biggest obstacle is not knowing where to begin. Here are a few ways to take that courageous next step:</p>
    <ul>
      <li>Break down the big task into a list of smaller, manageable actions.</li>
      <li>Talk to a trusted friend or mentor about what you’re feeling. Their perspective can lighten the load.</li>
      <li>Give yourself permission to be a beginner. It's okay not to be an expert on day one.</li>
      <li>Remember a time in the past when you faced a similar feeling and got through it. Your past strength is proof of your future capacity.</li>
    </ul>
    
    <h3>Your Inner Strength</h3>
    <p>Courage isn't the absence of fear; it's the decision that something is more important than the fear itself. Every time you've pushed through a difficult moment, you've built a reservoir of inner strength. You've already proven you have what it takes to navigate challenges and come out on the other side. This time is no different.</p>
    
    <p>The path forward might feel uncertain, but you have the resilience and determination to walk it. Trust yourself. You're ready to take that next step.</p>
  `
},

        encourage3: {
            title: "Growth Happens in the Uncomfortable",
            content: `
                <h2>Growth Happens in the Uncomfortable</h2>
                <p>That knot in your stomach, the flutter of nervous energy, the voice in your head saying "maybe this isn't for me"—these aren't signs to turn back. <strong>They're signals that you're exactly where you need to be.</strong></p>
                
                <h3>The Growth Zone</h3>
                <p>Comfort is wonderful for rest and recovery, but it's a terrible place for growth. Every meaningful change in your life happened when you stepped beyond what felt safe and familiar:</p>
                <ul>
                    <li>Your first day at a new job</li>
                    <li>Moving to a new city</li>
                    <li>Starting a difficult conversation</li>
                    <li>Learning a new skill</li>
                    <li>Taking on more responsibility</li>
                </ul>
                
                <h3>Reframe the Discomfort</h3>
                <p>Instead of seeing discomfort as a warning sign, try seeing it as:</p>
                <ul>
                    <li><strong>Evidence of expansion:</strong> You're literally becoming more than you were</li>
                    <li><strong>A sign of courage:</strong> You're choosing growth over safety</li>
                    <li><strong>Proof of progress:</strong> You're moving beyond your old limitations</li>
                    <li><strong>A badge of honor:</strong> Most people won't do what you're doing</li>
                </ul>
                
                <h3>The Magic Happens</h3>
                <p>Here's what you'll discover on the other side of discomfort:</p>
                <ul>
                    <li><strong>Confidence:</strong> You'll know you can handle more than you thought</li>
                    <li><strong>Competence:</strong> Your skills and abilities will expand</li>
                    <li><strong>Clarity:</strong> You'll have a clearer sense of what you're capable of</li>
                    <li><strong>Connection:</strong> You'll relate to others who've walked similar paths</li>
                </ul>
                
                <h3>Staying in the Growth Zone</h3>
                <p>To make the most of uncomfortable moments:</p>
                <ul>
                    <li>Breathe deeply and remind yourself why you're here</li>
                    <li>Focus on the learning, not just the outcome</li>
                    <li>Celebrate small wins along the way</li>
                    <li>Remember that everyone feels this way when growing</li>
                </ul>
                
                <p><strong>The uncomfortable feeling isn't your enemy—it's your growth partner.</strong> It's showing up to let you know that you're pushing boundaries, expanding possibilities, and becoming the person you're meant to be.</p>
                
                <p>Lean into it. Trust it. Let it guide you toward everything you're capable of becoming.</p>
            `
        },
        
        
       encourage4: {
  title: "The Signal of Discomfort",
  content: `
    <h2>The Signal of Discomfort</h2>
    <p>When you feel that familiar knot of discomfort—whether it’s stress, fear, or awkwardness—it’s easy to want to pull back. But what if that feeling isn't a red flag? What if it's a compass pointing you toward your next level of growth? Discomfort is a powerful signal that you’re on the right track, even when it doesn't feel easy.</p>
    
    <h3>What Your Discomfort Is Telling You</h3>
    <p>That feeling of unease is a sign that you're expanding your boundaries and becoming more capable. Consider what your discomfort might be saying:</p>
    <ul>
      <li>Feeling overwhelmed is a sign that you're taking on something significant.</li>
      <li>The fear of failure means you're working toward a goal that truly matters to you.</li>
      <li>The awkwardness of trying something new indicates you're learning a valuable skill.</li>
      <li>The stress of a difficult conversation shows you're committed to building a healthier relationship.</li>
    </ul>
    
    <h3>Embrace the Friction</h3>
    <p>These feelings aren't roadblocks; they're the very things that build your resilience and character. They are the friction that creates your shine. Every time you push through the discomfort, you're not just enduring; you're evolving.</p>
    
    <p>Don’t run from the feeling. Instead, lean into it and remind yourself that it’s a sign of progress. The more you befriend your discomfort, the more you will grow.</p>
  `
},

        
        encourage5: {
            title: "Small Steps, Big Dreams",
            content: `
                <h2>Small Steps, Big Dreams</h2>
                <p>Your dreams aren't too big. They're not unrealistic, impractical, or "not for someone like you." The only thing standing between you and your biggest goals is the willingness to take the smallest step forward. <strong>Every master was once a beginner.</strong></p>
                
                <h3>The Power of Consistency</h3>
                <p>Big dreams aren't achieved through big gestures—they're built through small, consistent actions:</p>
                <ul>
                    <li>Writers don't write novels in a day; they write pages</li>
                    <li>Athletes don't become champions overnight; they show up to training</li>
                    <li>Entrepreneurs don't build empires immediately; they serve one customer at a time</li>
                    <li>Artists don't create masterpieces instantly; they practice their craft daily</li>
                </ul>
                  <h3>Your Next Right Step</h3>
                <p>You don't need to see the whole path to start walking. You just need to identify the very next step:</p>
                <ul>
                    <li><strong>Want to write a book?</strong> Write one paragraph today</li>
                    <li><strong>Want to start a business?</strong> Research one aspect of your idea</li>
                    <li><strong>Want to get healthy?</strong> Take a 10-minute walk</li>
                    <li><strong>Want to learn a skill?</strong> Watch one tutorial or read one article</li>
                </ul>
                
                <h3>The Compound Effect of Small Actions</h3>
                <p>Small steps compound over time in ways that will amaze you:</p>
                <ul>
                    <li>1% better each day = 37 times better by year's end</li>
                    <li>10 minutes daily = 60+ hours of progress in a year</li>
                    <li>One small action often leads to motivation for the next</li>
                    <li>Consistency builds the identity of someone who achieves their goals</li>
                </ul>
                
                <h3>When Progress Feels Slow</h3>
                <p>Remember that growth often happens beneath the surface:</p>
                <ul>
                    <li>Seeds grow roots before they break through soil</li>
                    <li>Bamboo grows underground for years before shooting up rapidly</li>
                    <li>Your skills and knowledge are compounding, even when you can't see it</li>
                    <li>Every step forward matters, even the ones that feel insignificant</li>
                </ul>
                
                <h3>Your Dreams Deserve Your Steps</h3>
                <p>Don't let the size of your dreams discourage you from taking small steps. Big dreams require big commitment, but they start with small beginnings.</p>
                
                <p><strong>Take the step.</strong> Not because you can see the finish line, but because you believe in the journey. Not because it's easy, but because it matters. Not because you're ready, but because dreams don't wait for perfect conditions.</p>
                
                <p>Your future self is counting on the step you take today. Make it count.</p>
            `
        },
        
        
        
        
    };

    // Modal functionality for blog posts
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('read-more')) {
            const postId = e.target.getAttribute('data-post');
            const post = blogPosts[postId];
            
            if (post && modal && modalBody) {
                modalBody.innerHTML = post.content;
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden'; // Prevent background scrolling
            }
        }
    });

    // Close modal functionality
    if (closeModal && modal) {
        closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Restore scrolling
        });
    }

    // Close modal when clicking outside
if (modal) {
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}

// Keyboard navigation for modal
if (modal) {
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}

// Intersection Observer for animations
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

// Observe blog cards for animation
const blogCards = document.querySelectorAll('.blog-card');
blogCards.forEach(card => {
    observer.observe(card);
});
     
