import os
import requests
import shutil

# Base URL for raw GitHub content
base_url = "https://raw.githubusercontent.com/Lizzyben1/poopygamesbeta/972ce1e925a715d5f9ab836970fe8a172e73fe62/play"

# Alternative source for Duck Life 1
ducklife1_base_url = "https://raw.githubusercontent.com/Bobsunblockedgames/ducklife1/main"

# Duck Life 1 files from a working source
ducklife1_files = {
    "UnityLoader.js": "https://raw.githubusercontent.com/Bobsunblockedgames/ducklife1/main/UnityLoader.js",
    "Build/WebGL1Hooda.json": "https://raw.githubusercontent.com/Bobsunblockedgames/ducklife1/main/Build/WebGL1Hooda.json",
    "Build/WebGL1Hooda.wasm": "https://raw.githubusercontent.com/Bobsunblockedgames/ducklife1/main/Build/WebGL1Hooda.wasm",
    "Build/WebGL1Hooda.data": "https://raw.githubusercontent.com/Bobsunblockedgames/ducklife1/main/Build/WebGL1Hooda.data",
    "ducklife.png": "https://raw.githubusercontent.com/Bobsunblockedgames/ducklife1/main/ducklife.png",
    "game.html": "https://raw.githubusercontent.com/Bobsunblockedgames/ducklife1/main/game.html",
    "index.html": "https://raw.githubusercontent.com/Bobsunblockedgames/ducklife1/main/index.html"
}

# Game directories and their files
games = {
    "ducklife2": [
        "c5c02c4e65c1c4423a97.wasm",
        "dl2.swf",
        "ducklife2.png",
        "index.html",
        "ruffle.js"
    ],
    "ducklife3": [
        "duck.png",
        "ducklife3evolution.swf",
        "favicon.ico",
        "index.html",
        "title.png"
    ],
    "ducklife4": [
        "index.html",
        "splash.jpg"
    ]
}

# Download Duck Life 1 files
print("\nDownloading Duck Life 1 files...")
os.makedirs('play/ducklife1', exist_ok=True)
os.makedirs('play/ducklife1/Build', exist_ok=True)

for file, url in ducklife1_files.items():
    file_path = f'play/ducklife1/{file}'
    os.makedirs(os.path.dirname(file_path), exist_ok=True)
    
    print(f"Downloading {file}...")
    
    response = requests.get(url, stream=True)
    if response.status_code == 200:
        with open(file_path, 'wb') as f:
            response.raw.decode_content = True
            shutil.copyfileobj(response.raw, f)
        print(f"Successfully downloaded {file}")
    else:
        print(f"Failed to download {file}: {response.status_code}")

# Download other games' files
for game_dir, files in games.items():
    print(f"\nDownloading {game_dir} files...")
    os.makedirs(f'play/{game_dir}', exist_ok=True)
    
    for file in files:
        # Create subdirectories if needed
        file_path = f'play/{game_dir}/{file}'
        os.makedirs(os.path.dirname(file_path), exist_ok=True)
        
        url = f"{base_url}/{game_dir}/{file}"
        print(f"Downloading {file}...")
        
        response = requests.get(url, stream=True)
        if response.status_code == 200:
            with open(file_path, 'wb') as f:
                response.raw.decode_content = True
                shutil.copyfileobj(response.raw, f)
            print(f"Successfully downloaded {file}")
        else:
            print(f"Failed to download {file}: {response.status_code}")

print("\nDownload complete!") 