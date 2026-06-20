# TaskFlow - Responsive SaaS Landing Page

A fully responsive, production-ready landing page for TaskFlow, built with HTML5, CSS3, and JavaScript (ES6).

## 🎯 Overview

TaskFlow is a modern SaaS landing page featuring a professional design, responsive layout, and interactive functionality. Built as part of the O2H Mock Front-End Developer Assessment.

## ✨ Features

### Section 1: Layout Implementation (40 Marks)
- **Hero Section**: Navigation bar with logo, heading, sub-heading, CTA button, and hero image
- **Features Section**: 6 feature cards with icons, titles, and descriptions
- **Pricing Section**: 3 pricing tiers (Starter, Professional, Enterprise) with highlighted recommended plan
- **Contact Section**: Form with Name, Email, and Message fields
- **Blog Section**: Dynamically loaded blog posts (Bonus Challenge)

### Section 2: Responsive Design (20 Marks)
- Mobile-first approach (<768px): Hamburger menu, single-column layout
- Tablet (768px - 1023px): Two-column layout
- Desktop (>1023px): Full multi-column layout
- Built with Flexbox and CSS Grid
- Media queries for optimal viewing on all devices

### Section 3: JavaScript Functionality (15 Marks)
- **Mobile Menu Toggle**: Hamburger icon with smooth animation
- **Form Validation**: 
  - Required field validation
  - Email format validation
  - Real-time error feedback
  - Error message display
- **Dark Mode Toggle**: 
  - Light/Dark theme switching
  - LocalStorage persistence
  - System preference detection

### Section 4: Accessibility (10 Marks)
- ✓ Semantic HTML5 markup
- ✓ ARIA labels and roles
- ✓ Alt text for all images
- ✓ Keyboard navigation support (Tab, Escape)
- ✓ WCAG AA compliant color contrast
- ✓ Focus indicators for keyboard users

### Section 5: Performance Optimization (10 Marks)
- ✓ Optimized CSS with minimal file size
- ✓ Lazy loading support for images
- ✓ Efficient DOM manipulation
- ✓ Debounced scroll events
- ✓ Minimal JavaScript footprint

### Section 6: Git Workflow (5 Marks)
- Initial layout setup
- Responsive navbar completed
- Feature section added
- Form validation implemented
- Final optimization and cleanup

### Bonus Challenge (+10 Marks)
- **API Integration**: Fetches latest 6 blog posts from JSONPlaceholder API
- **Loading State**: Shows loading message while fetching
- **Error State**: Displays error message if API call fails
- **Dynamic Rendering**: Blog cards generated dynamically from API data

## 📁 Folder Structure

```
frontend-task-o2h/
├── index.html
├── css/
│   ├── style.css          (Main stylesheet - 600+ lines)
│   └── responsive.scss    (Backup SCSS)
├── js/
│   └── app.js             (Main JavaScript - 350+ lines)
├── images/
├── README.md
├── package.json
└── .gitignore
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Node.js (optional, for SCSS compilation)

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd frontend-task-o2h
```

2. Open in browser

Simply open index.html in your browser, or use a local development server.

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js
npx http-server

# Or use VS Code Live Server extension
```

Visit `http://localhost:8000` in your browser.

## 🛠️ Technologies Used

### Mandatory
- **HTML5**: Semantic markup with proper accessibility
- **CSS3**: Flexbox, Grid, Media Queries, Custom Properties
- **JavaScript (ES6)**: Modern ES6+ syntax, async/await

### Optional/Bonus
- **REST API Integration**: JSONPlaceholder API
- **LocalStorage**: Theme persistence

## 📱 Responsive Breakpoints

- **Mobile**: < 480px (Extra small devices)
- **Mobile**: 480px - 767px (Standard mobile)
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px+

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation (Tab, Escape)
- Focus indicators for all interactive elements
- Color contrast ratios meet WCAG AA standards
- Screen reader friendly
- Reduced motion support

## 🎨 Dark Mode

- Toggle with moon/sun icon
- Automatically detects system preference
- Saves preference to localStorage
- Smooth transitions between themes

## 📝 Form Validation

- Required field validation
- Email format validation using regex
- Real-time validation on blur
- Error messages display below each field
- Form prevents submission with errors

## 📊 API Integration

- Fetches posts from: `https://jsonplaceholder.typicode.com/posts`
- Displays 6 latest blog posts
- Shows loading state during fetch
- Displays error message on failure
- HTML escaping for security

## 🔧 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📈 Performance Metrics

- Lazy loading support for images
- Minimal CSS (no unnecessary bloat)
- Optimized JavaScript (no external dependencies)
- Efficient event handling with proper cleanup
- Debounced scroll events

## 🎯 Evaluation Rubric (100 Marks)

| Criteria | Marks |
|----------|-------|
| HTML Structure & Semantics | 15 |
| CSS Layout & Responsiveness | 25 |
| JavaScript Functionality | 15 |
| Accessibility | 10 |
| Performance Optimization | 10 |
| API Integration | 10 |
| Git Usage | 5 |
| Code Quality | 10 |

## 📝 Git Commits

1. `Initial layout setup` - HTML structure with semantic markup
2. `Responsive navbar completed` - Navigation with mobile menu toggle
3. `Feature section added` - 6 feature cards with responsive grid
4. `Pricing and form validation implemented` - Pricing cards and contact form with validation
5. `Blog section and dark mode` - API integration, dark/light theme toggle
6. `Final optimization and cleanup` - Performance improvements and accessibility enhancements

## 🐛 Known Issues

None. The project is production-ready.

## 📄 License

ISC

## 👨‍💻 Author

Built as part of O2H Mock Front-End Developer Assessment

## 🤝 Contributing

This is an assessment project. No contributions at this time.

## 📞 Support

For issues or questions, please create an issue in the repository.

---

**Project Status**: ✅ Complete - All requirements met with bonus challenge implemented