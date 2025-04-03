import os
import requests
import shutil

# Create images directory if it doesn't exist
os.makedirs('play/bitlife/images', exist_ok=True)

# URL for the BitLife thumbnail image
image_url = "https://play-lh.googleusercontent.com/8ddL1kuoNUB5vUvgDVjYY3_6HwQcrg1K2fd_R8soD-e2QYj8fT9cfhfh3G0hnSruLKec"

# Download the image
print("Downloading BitLife thumbnail...")
try:
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    }
    response = requests.get(image_url, stream=True, headers=headers)
    response.raise_for_status()
    
    with open('play/bitlife/images/thumbnail.png', 'wb') as f:
        shutil.copyfileobj(response.raw, f)
    print("Successfully downloaded BitLife thumbnail")
except Exception as e:
    print(f"Failed to download image: {str(e)}")

print("Download process complete.") 