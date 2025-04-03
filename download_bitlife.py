import os
import requests
import shutil

# Create directories if they don't exist
os.makedirs('play/bitlife', exist_ok=True)
os.makedirs('play/bitlife/BitLife', exist_ok=True)

# Base URL for raw GitHub content
base_url = "https://raw.githubusercontent.com/Lizzyben1/poopygamesbeta/972ce1e925a715d5f9ab836970fe8a172e73fe62/play/bitlife"

# Files to download
files = [
    "BitLife.data.unityweb",
    "BitLife.json",
    "BitLife.wasm.code.unityweb",
    "BitLife.wasm.framework.unityweb",
    "MoreGames.png",
    "UnityLoader.js",
    "UnityProgress.js",
    "index.html",
    "script.js",
    "style.css",
    "zombies11.css"
]

# Download each file
for file in files:
    url = f"{base_url}/{file}"
    print(f"Downloading {file}...")
    
    response = requests.get(url, stream=True)
    if response.status_code == 200:
        with open(f"play/bitlife/{file}", 'wb') as f:
            response.raw.decode_content = True
            shutil.copyfileobj(response.raw, f)
        print(f"Successfully downloaded {file}")
    else:
        print(f"Failed to download {file}: {response.status_code}")

print("Download complete!") 