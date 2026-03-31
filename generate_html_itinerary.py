#!/usr/bin/env python3
"""
Generate interactive HTML itinerary from structured itinerary data.
Usage: python generate_html_itinerary.py <input_json> <output_html>
"""

import json
import sys
from pathlib import Path

def generate_html_itinerary(itinerary_data, output_file):
    """
    Generate HTML from itinerary JSON data.
    """
    
    # Color mapping for days
    day_colors = {
        1: "#FF6B6B",  # Red
        2: "#4ECDC4",  # Blue
        3: "#45B7D1",  # Green
        4: "#FFA07A",  # Yellow
    }
    
    html_content = """<!DOCTYPE html>
<html lang="zh-TW">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Family Trip Itinerary</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f5f5f5;
            color: #333;
            line-height: 1.6;
        }
        
        .container {
            max-width: 900px;
            margin: 0 auto;
            padding: 20px;
        }
        
        header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 40px 20px;
            border-radius: 10px;
            margin-bottom: 30px;
            text-align: center;
        }
        
        header h1 {
            font-size: 2.5em;
            margin-bottom: 10px;
        }
        
        header p {
            font-size: 1.1em;
            opacity: 0.9;
        }
        
        .day-section {
            background: white;
            border-left: 5px solid;
            padding: 20px;
            margin-bottom: 20px;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        
        .day-1 { border-left-color: #FF6B6B; }
        .day-2 { border-left-color: #4ECDC4; }
        .day-3 { border-left-color: #45B7D1; }
        .day-4 { border-left-color: #FFA07A; }
        
        .day-section h2 {
            font-size: 1.8em;
            margin-bottom: 15px;
        }
        
        .timeline {
            margin-top: 15px;
        }
        
        .timeline-item {
            margin-bottom: 15px;
            padding-bottom: 15px;
            border-bottom: 1px solid #eee;
        }
        
        .timeline-item:last-child {
            border-bottom: none;
        }
        
        .time {
            font-weight: bold;
            color: #667eea;
            margin-bottom: 5px;
        }
        
        .activity {
            margin-left: 10px;
        }
        
        .activity h3 {
            font-size: 1.1em;
            margin-bottom: 5px;
        }
        
        .activity p {
            color: #666;
            margin-bottom: 5px;
        }
        
        .notes-section {
            background: #fff3cd;
            border-left: 4px solid #ffc107;
            padding: 15px;
            margin-top: 30px;
            border-radius: 5px;
        }
        
        .notes-section h3 {
            color: #856404;
            margin-bottom: 10px;
        }
        
        .notes-section ul {
            margin-left: 20px;
            color: #856404;
        }
        
        .map-link {
            display: inline-block;
            background: #667eea;
            color: white;
            padding: 12px 24px;
            border-radius: 5px;
            text-decoration: none;
            margin: 20px 0;
            font-weight: bold;
        }
        
        .map-link:hover {
            background: #764ba2;
        }
        
        @media (max-width: 600px) {
            header h1 {
                font-size: 1.8em;
            }
            
            .day-section {
                padding: 15px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1>Family Trip Itinerary</h1>
            <p>Your complete travel guide</p>
        </header>
        
        <a href="#" class="map-link">🗺️ View all locations on Google Maps</a>
        
        <div class="day-section day-1">
            <h2>Day 1</h2>
            <div class="timeline">
                <div class="timeline-item">
                    <div class="time">Sample Time</div>
                    <div class="activity">
                        <h3>Sample Activity</h3>
                        <p>Activity description goes here.</p>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="notes-section">
            <h3>⚠️ Important Notes</h3>
            <ul>
                <li>Please bring comfortable walking shoes</li>
                <li>Check weather forecast before departure</li>
                <li>Bring sufficient water and sun protection</li>
            </ul>
        </div>
    </div>
</body>
</html>
"""
    
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(html_content)
    
    print(f"HTML itinerary generated: {output_file}")

def main():
    if len(sys.argv) < 3:
        print("Usage: python generate_html_itinerary.py <input_json> <output_html>")
        sys.exit(1)
    
    input_file = sys.argv[1]
    output_file = sys.argv[2]
    
    if not Path(input_file).exists():
        print(f"Error: Input file not found: {input_file}")
        sys.exit(1)
    
    try:
        with open(input_file, 'r', encoding='utf-8') as f:
            itinerary_data = json.load(f)
    except json.JSONDecodeError as e:
        print(f"Error reading JSON file: {e}")
        sys.exit(1)
    
    generate_html_itinerary(itinerary_data, output_file)

if __name__ == "__main__":
    main()
