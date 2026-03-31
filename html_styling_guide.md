# HTML Styling Guide

## Color Customization

### Day-Based Color Scheme

The default color scheme uses:
- **Day 1**: #FF6B6B (Red)
- **Day 2**: #4ECDC4 (Blue/Teal)
- **Day 3**: #45B7D1 (Light Blue)
- **Day 4**: #FFA07A (Orange)

To customize, modify the CSS in the `<style>` section:

```css
.day-1 { border-left-color: #FF6B6B; }
.day-2 { border-left-color: #4ECDC4; }
.day-3 { border-left-color: #45B7D1; }
.day-4 { border-left-color: #FFA07A; }
```

### Alternative Color Schemes

**Pastel Theme:**
```css
.day-1 { border-left-color: #FFB3BA; }
.day-2 { border-left-color: #BAFFC9; }
.day-3 { border-left-color: #BAE1FF; }
.day-4 { border-left-color: #FFFFBA; }
```

**Vibrant Theme:**
```css
.day-1 { border-left-color: #FF0000; }
.day-2 { border-left-color: #0000FF; }
.day-3 { border-left-color: #00FF00; }
.day-4 { border-left-color: #FFFF00; }
```

## Font Customization

### Change Primary Font

Replace the font-family in the body style:

```css
body {
    font-family: 'Arial', sans-serif;  /* Change this */
}
```

### Recommended Fonts

- **Modern**: 'Segoe UI', 'Helvetica Neue', sans-serif
- **Elegant**: 'Georgia', 'Times New Roman', serif
- **Friendly**: 'Comic Sans MS', 'Trebuchet MS', sans-serif
- **Clean**: 'Verdana', 'Geneva', sans-serif

## Responsive Design

The template includes mobile-friendly breakpoints:

```css
@media (max-width: 600px) {
    /* Mobile styles */
}
```

Test on actual mobile devices before sharing.

## Accessibility

### Font Sizes

- Header: 2.5em (desktop), 1.8em (mobile)
- Day titles: 1.8em
- Activity titles: 1.1em
- Body text: 1em (default)

### Color Contrast

Ensure sufficient contrast between text and background:
- Text on white background: Use dark colors (#333 or darker)
- Text on colored background: Use white or very light colors

### Line Height

Default line-height is 1.6, which aids readability. Increase to 1.8 for better accessibility.

## Print Optimization

Add this to the `<style>` section for better print output:

```css
@media print {
    body {
        background: white;
    }
    
    .day-section {
        page-break-inside: avoid;
        box-shadow: none;
        border: 1px solid #ddd;
    }
    
    .map-link {
        display: none;  /* Hide interactive elements in print */
    }
}
```

## Common Customizations

### Add Company Logo

```html
<header>
    <img src="logo.png" alt="Company Logo" style="max-width: 100px; margin-bottom: 20px;">
    <h1>Family Trip Itinerary</h1>
</header>
```

### Add Background Image

```css
header {
    background-image: url('background.jpg');
    background-size: cover;
    background-position: center;
}
```

### Add Custom Footer

```html
<footer style="text-align: center; margin-top: 40px; color: #999; font-size: 0.9em;">
    <p>&copy; 2024 Your Company. All rights reserved.</p>
</footer>
```

## Testing

Always test your customizations:
1. Desktop browsers (Chrome, Firefox, Safari)
2. Mobile browsers (iOS Safari, Chrome Mobile)
3. Print preview (Ctrl+P or Cmd+P)
4. PDF export (using weasyprint)
