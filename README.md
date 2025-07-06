# Marketechnic - Static Website for GitHub Pages

This is a static version of the Marketechnic consulting website, optimized for GitHub Pages deployment.

## Setup Instructions

### 1. Formspree Configuration
To enable the contact form, you need to set up Formspree:

1. Go to [formspree.io](https://formspree.io)
2. Create a free account
3. Create a new form
4. Copy your form endpoint (looks like `https://formspree.io/f/YOUR_FORM_ID`)
5. Open `script.js` and replace `YOUR_FORMSPREE_ENDPOINT_HERE` with your actual endpoint

### 2. GitHub Pages Deployment

1. Create a new repository on GitHub
2. Upload all files from the `static` folder to your repository
3. Go to your repository settings
4. Scroll down to "Pages" section
5. Select "Deploy from a branch"
6. Choose "main" branch and "/ (root)" folder
7. Click "Save"
8. Your website will be available at `https://yourusername.github.io/your-repository-name`

### 3. Custom Domain (Optional)

If you want to use a custom domain:
1. Add a `CNAME` file to your repository root with your domain name
2. Configure your domain's DNS to point to GitHub Pages
3. Enable "Enforce HTTPS" in repository settings

## Files Structure

- `index.html` - Main website file
- `styles.css` - Custom CSS styles and animations
- `script.js` - JavaScript functionality
- `README.md` - This file

## Features

- ✅ Responsive design with mobile navigation
- ✅ Smooth scrolling navigation
- ✅ Animated counters and statistics
- ✅ Contact form with Formspree integration
- ✅ Newsletter subscription (requires backend integration)
- ✅ Modern black and green theme
- ✅ Professional animations and transitions
- ✅ SEO optimized with meta tags

## Technologies Used

- HTML5
- CSS3 with Tailwind CSS (CDN)
- Vanilla JavaScript
- Lucide Icons
- Formspree for form handling

## Customization

### Colors
The green theme color can be customized in `styles.css`:
```css
:root {
  --brand-green: #4ade80;
  --brand-green-light: #86efac;
  --brand-green-dark: #22c55e;
}
```

### Content
All content can be edited directly in `index.html`. Update:
- Company information
- Service descriptions
- Testimonials
- Contact details
- Social media links

### Newsletter Integration
For newsletter functionality, you can integrate with services like:
- Mailchimp
- ConvertKit
- Netlify Forms
- Or modify the JavaScript to work with your preferred service

## Support

For issues with the website functionality, check:
1. That all files are uploaded correctly
2. Your Formspree endpoint is configured
3. GitHub Pages is enabled in repository settings

The website is fully static and will work on any web server or hosting platform.