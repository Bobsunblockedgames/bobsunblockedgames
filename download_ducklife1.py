import os
import requests
import shutil

# Create directories
os.makedirs("play/ducklife1", exist_ok=True)
os.makedirs("play/ducklife1/Build", exist_ok=True)

# Base URL for raw GitHub content
base_url = "https://raw.githubusercontent.com/Lizzyben1/poopygamesbeta/972ce1e925a715d5f9ab836970fe8a172e73fe62/play/ducklife1"

# Files to download
files = [
    "UnityLoader.js",
    "game.html",
    "index.html"
]

# Download files
for file in files:
    url = f"{base_url}/{file}"
    local_path = f"play/ducklife1/{file}"
    
    print(f"Downloading {file}...")
    try:
        response = requests.get(url)
        
        if response.status_code == 200:
            with open(local_path, "wb") as f:
                f.write(response.content)
            print(f"Successfully downloaded {file}")
        else:
            print(f"Failed to download {file}: {response.status_code}")
    except Exception as e:
        print(f"Error downloading {file}: {str(e)}")

print("Download complete!") 