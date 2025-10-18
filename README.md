# Portfolio Website

a modern, clean portfolio to showcase your projects and github work.

## customization guide

### 1. personal info (index.html)

**line 16** - change the logo:
```html
<a href="#" class="logo">yourname.dev</a>
```

**line 29** - update the tagline:
```html
<div class="hero-tag">your roles / interests</div>
```

**lines 54-57** - update the code block with your info:
```html
name: <span class="string">"Your Name"</span>,<br>
focus: <span class="string">"your focus area"</span>,<br>
passion: <span class="string">"what you love doing"</span>,<br>
currentStatus: <span class="string">"what you're up to"</span><br>
```

### 2. projects section (index.html)

replace the placeholder project cards (lines 74-135) with your actual projects.

for each project, update:
- project name (h3)
- description (p)
- technologies (tags)
- links (live demo and source code)

you can add project screenshots by replacing the placeholder:
```html
<div class="project-image">
    <img src="path-to-your-screenshot.jpg" alt="project name">
</div>
```

### 3. github integration (script.js)

**line 24** - change to your github username:
```javascript
const username = 'yourusername';
```

the site will automatically fetch your latest 6 repos. it filters out forks by default.

### 4. skills section (index.html)

**lines 176-202** - update with your actual skills:
```html
<li>Your Skill Here</li>
```

feel free to add/remove skill categories as needed.

### 5. contact info (index.html)

**lines 215-231** - update all your contact links:
```html
<a href="https://github.com/yourusername" target="_blank" class="contact-item">
<a href="mailto:your.actual.email@example.com" class="contact-item">
<a href="https://linkedin.com/in/yourprofile" target="_blank" class="contact-item">
<a href="https://twitter.com/yourhandle" target="_blank" class="contact-item">
```

### 6. about section (index.html)

**lines 160-173** - rewrite the about text in your own voice. keep it conversational and real.

## color scheme

want different colors? edit the css variables in style.css (lines 8-20):

```css
--bg-primary: #0a0a0a;        /* main background */
--bg-secondary: #111111;       /* section backgrounds */
--text-primary: #e4e4e7;       /* main text */
--text-secondary: #a1a1aa;     /* secondary text */
--accent: #3b82f6;             /* links, highlights */
```

## tips for making it yours

- write in your own voice - no corporate speak
- be specific about what you've built
- mention challenges you've solved
- keep descriptions concise but meaningful
- add actual project screenshots (better than placeholders)
- update the footer text if you want

## deployment

since this is a github pages repo (atef1995.github.io), just:

1. commit your changes
2. push to main branch
3. your site will be live at https://atef1995.github.io

## local testing

just open index.html in a browser. the github api will work from file:// protocol.

---

built with html, css, and vanilla js. no frameworks needed.
