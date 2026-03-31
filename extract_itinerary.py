#!/usr/bin/env python3
"""
Extract itinerary information from PDF documents and output as structured JSON.
Usage: python extract_itinerary.py <pdf_file> <output_json>
"""

import json
import sys
from pathlib import Path

def extract_itinerary_from_pdf(pdf_path):
    """
    Extract itinerary data from PDF.
    This is a template function - customize based on your PDF structure.
    """
    try:
        import PyPDF2
    except ImportError:
        print("PyPDF2 not installed. Install with: pip install PyPDF2")
        return None
    
    itinerary = {
        "trip_info": {
            "name": "Trip Name",
            "start_date": "YYYY-MM-DD",
            "end_date": "YYYY-MM-DD",
            "participants": 0,
            "accommodation": ""
        },
        "days": []
    }
    
    try:
        with open(pdf_path, 'rb') as file:
            reader = PyPDF2.PdfReader(file)
            print(f"PDF has {len(reader.pages)} pages")
            
            # Extract text from first page to analyze structure
            first_page = reader.pages[0]
            text = first_page.extract_text()
            print("First page content (first 500 chars):")
            print(text[:500])
            
    except Exception as e:
        print(f"Error reading PDF: {e}")
        return None
    
    return itinerary

def main():
    if len(sys.argv) < 3:
        print("Usage: python extract_itinerary.py <pdf_file> <output_json>")
        sys.exit(1)
    
    pdf_file = sys.argv[1]
    output_file = sys.argv[2]
    
    if not Path(pdf_file).exists():
        print(f"Error: PDF file not found: {pdf_file}")
        sys.exit(1)
    
    print(f"Extracting itinerary from: {pdf_file}")
    itinerary = extract_itinerary_from_pdf(pdf_file)
    
    if itinerary:
        with open(output_file, 'w', encoding='utf-8') as f:
            json.dump(itinerary, f, ensure_ascii=False, indent=2)
        print(f"Itinerary saved to: {output_file}")
    else:
        print("Failed to extract itinerary")
        sys.exit(1)

if __name__ == "__main__":
    main()
