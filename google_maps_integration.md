# Google My Maps Integration Guide

## Creating a New Map

1. Visit https://www.google.com/maps/d/
2. Click "Create a new map"
3. Name your map (e.g., "Singapore Family Trip 2024")
4. Add a description if desired

## Adding Locations

### Method 1: Search and Add

1. Click the search box at the top
2. Type the location name
3. Click the location in results
4. Click "Add to map"
5. Customize the marker (name, description, color, icon)

### Method 2: Click on Map

1. Click anywhere on the map to add a marker
2. Enter location details in the popup
3. Click "Save"

## Color Coding by Day

Use consistent colors for each day:

- **Day 1**: Red (#FF0000)
- **Day 2**: Blue (#0000FF)
- **Day 3**: Green (#00FF00)
- **Day 4**: Yellow (#FFFF00)

To change marker color:
1. Click the marker
2. Click the color circle icon
3. Select desired color

## Icon Customization

Google My Maps offers various icons:
- Marker (default)
- Star
- Heart
- Circle
- Square
- And many more

To change icon:
1. Click the marker
2. Click the icon selector
3. Choose desired icon

## Adding Descriptions

Include helpful information in each marker:

```
Location Name
Address: [Full address]
Hours: [Operating hours]
Notes: [Special information]
```

Example:
```
Marina Bay Sands
Address: 10 Bayfront Ave, Singapore 018956
Hours: 24/7 (Observation Deck: 9am-1am)
Notes: Dress code for restaurants. Book in advance.
```

## Sharing Your Map

### Get Sharing Link

1. Click "Share" button
2. Adjust sharing settings:
   - "Restricted" - Only people with link can view
   - "Anyone with the link" - Publicly viewable
3. Copy the link

### Embed in HTML

Add this to your HTML itinerary:

```html
<a href="[YOUR_MAP_LINK]" target="_blank" class="map-link">
    🗺️ View all locations on Google Maps
</a>
```

Or embed the map directly:

```html
<iframe src="https://www.google.com/maps/d/embed?mid=[MAP_ID]" 
        width="100%" height="500" style="border:0;" 
        allowfullscreen="" loading="lazy"></iframe>
```

## Best Practices

### Naming Conventions

Use consistent naming:
- Include day number: "[Day 1] Marina Bay Sands"
- Include time: "[9:00 AM] Breakfast at..."
- Include category: "[Restaurant] JUMBO Seafood"

### Organization

- Group related locations together
- Use consistent capitalization
- Avoid abbreviations that might confuse travelers

### Accessibility

- Provide full addresses (not just names)
- Include landmarks or cross streets
- Note any accessibility features (elevators, parking, etc.)

### Testing

1. Test the sharing link before distributing
2. Verify all markers appear correctly
3. Check that directions work between locations
4. Test on mobile devices

## Troubleshooting

### Location Not Found

If a location doesn't appear:
1. Try searching with full address
2. Use nearby landmark as reference
3. Manually place marker using coordinates
4. Check spelling of location name

### Sharing Issues

If recipients can't view the map:
1. Verify sharing settings are correct
2. Check that link is complete and not truncated
3. Try generating a new sharing link
4. Consider making map "Anyone with the link"

### Mobile Display

Maps may display differently on mobile:
1. Test on actual mobile device
2. Ensure markers are large enough to tap
3. Verify zoom level is appropriate
4. Check that descriptions are readable

## Advanced Features

### Add Routes

1. Click "Add route" button
2. Enter starting and ending points
3. Choose transportation method (driving, transit, walking)
4. Customize route appearance

### Add Layers

Create multiple layers for different purposes:
- Layer 1: Accommodations
- Layer 2: Restaurants
- Layer 3: Activities
- Layer 4: Transportation

Toggle layers on/off to show/hide information.

### Add Directions

Include turn-by-turn directions:
1. Create a route between locations
2. Share the route link separately
3. Or embed directions in marker descriptions

## Integration with HTML Itinerary

Link from your HTML itinerary to the map:

```html
<div class="map-section">
    <h3>📍 View All Locations</h3>
    <p>Click below to see all trip destinations on Google Maps:</p>
    <a href="[YOUR_MAP_LINK]" target="_blank" class="map-link">
        Open Google My Maps
    </a>
</div>
```

Include map link in each day's section:

```html
<div class="day-section">
    <h2>Day 1 - April 2</h2>
    <!-- Activities -->
    <p><a href="[YOUR_MAP_LINK]?zoom=15&center=[LAT],[LNG]">
        View Day 1 locations on map
    </a></p>
</div>
```
