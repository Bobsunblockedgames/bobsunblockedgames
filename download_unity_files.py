import os
import requests
import shutil

# Create Build directory if it doesn't exist
build_dir = 'play/ducklife1/Build'
os.makedirs(build_dir, exist_ok=True)

# Base URL for raw GitHub content
base_url = "https://www.hoodamath.com/mobile/games/duck-life"

files_to_download = {
    'Build/WebGL1Hooda.data.unityweb': f"{base_url}/Build/WebGL1Hooda.data.unityweb",
    'Build/WebGL1Hooda.asm.code.unityweb': f"{base_url}/Build/WebGL1Hooda.asm.code.unityweb",
    'Build/WebGL1Hooda.asm.memory.unityweb': f"{base_url}/Build/WebGL1Hooda.asm.memory.unityweb",
    'Build/WebGL1Hooda.asm.framework.unityweb': f"{base_url}/Build/WebGL1Hooda.asm.framework.unityweb",
    'UnityLoader.js': f"{base_url}/UnityLoader.js"
}

# Download each file
for file_path, url in files_to_download.items():
    full_path = os.path.join('play/ducklife1', file_path)
    print(f"Downloading {file_path}...")
    
    try:
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
            'Referer': 'https://www.hoodamath.com/'
        }
        response = requests.get(url, stream=True, headers=headers)
        response.raise_for_status()
        
        # Ensure the directory exists
        os.makedirs(os.path.dirname(full_path), exist_ok=True)
        
        with open(full_path, 'wb') as f:
            shutil.copyfileobj(response.raw, f)
        print(f"Successfully downloaded {file_path}")
    except Exception as e:
        print(f"Failed to download {file_path}: {str(e)}")

print("Download process complete.") 