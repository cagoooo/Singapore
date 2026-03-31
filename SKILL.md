### Accessibility for Multi-Generational Groups

- Use clear, large fonts
- Provide both Chinese and English names for locations
- Include accessibility notes (stairs, long walks, etc.)
- Suggest transportation options for those with mobility concerns
- Build in rest time for children and elderly participants

## Template Structure

See `templates/itinerary_template.html` for the base structure. Key sections:

```html
<!-- Header with trip basics -->
<div class="header-info">
  <h2>Trip Name</h2>
  <p>Dates, participants, accommodation</p>
</div>

<!-- Daily sections with color coding -->
<div class="day-section day-1">
  <h3>Day 1 - Date</h3>
  <!-- Timeline of activities -->
</div>

<!-- Google Maps integration -->
<a href="[Google Maps link]">View all locations on map</a>

<!-- Notes and logistics -->
<div class="notes-section">
  <!-- Pre-trip preparation, tips, etc. -->
</div>
```

## Troubleshooting

### PDF Extraction Issues

If the PDF extraction fails:
- Ensure PDF is text-based (not scanned images)
- Check that PDF contains structured tables or clear sections
- Manually extract key information and create JSON file

### HTML Rendering Problems

- Test in multiple browsers (Chrome, Safari, Firefox)
- Check for special characters that need encoding
- Verify image paths are correct
- Use `weasyprint` for consistent PDF output

### Google Maps Integration

- Verify all location names are searchable in Google Maps
- Use full addresses for ambiguous location names
- Test sharing links before distributing to group
- Consider privacy settings for shared maps

## Resources

- See `references/html_styling_guide.md` for customizing colors and fonts
- See `references/google_maps_integration.md` for detailed map setup instructions
- See `references/accessibility_checklist.md` for multi-generational trip considerations
