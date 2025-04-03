import os
import requests
import time

def download_file(url, filename):
    try:
        response = requests.get(url)
        if response.status_code == 200:
            # Create directory if it doesn't exist
            if os.path.dirname(filename):
                os.makedirs(os.path.dirname(filename), exist_ok=True)
            with open(filename, 'wb') as f:
                f.write(response.content)
            print(f"Downloaded: {filename}")
            return True
        else:
            print(f"Failed to download {filename}: HTTP {response.status_code}")
            return False
    except Exception as e:
        print(f"Error downloading {filename}: {str(e)}")
        return False

def main():
    # Create play directory if it doesn't exist
    if not os.path.exists('play'):
        os.makedirs('play')

    # List of your games
    bob_games = [
        'bob-1v1',
        'bob-boxing',
        'bob-clicker',
        'bob-snake',
        'bob-stickman',
        'bob-tetris'
    ]

    # List of additional games to download
    additional_games = [
        'geometrydash',
        'minecraft',
        'krunker',
        'learntofly',
        'learntofly2',
        '2048',
        'hextris',
        'fruitninja',
        'jetpack-joyride'
    ]

    # URLs for both repositories
    bob_url = "https://raw.githubusercontent.com/Bobsunblockedgames/bobsunblockedgames/main"
    games_url = "https://raw.githubusercontent.com/brunoiscool2/unblockedgames/main/play"

    # First download the main files from your repository
    main_files = ['index.html', 'script.js', 'styles.css', 'background.js', 'favicon.ico', 'logo.png']
    for file in main_files:
        if download_file(f"{bob_url}/{file}", f"./{file}"):
            print(f"Successfully downloaded {file}")
        else:
            print(f"Failed to download {file}")
        time.sleep(0.5)

    # Download your games
    for game in bob_games:
        print(f"\nProcessing game: {game}")
        game_url = f"{bob_url}/{game}.html"
        game_file = f"./{game}.html"
        
        if download_file(game_url, game_file):
            print(f"Successfully downloaded {game}")
        else:
            print(f"Failed to download {game}")
        time.sleep(1)

    # Download additional games
    for game in additional_games:
        print(f"\nProcessing additional game: {game}")
        game_dir = f"play/{game}"
        
        # Create game directory
        if not os.path.exists(game_dir):
            os.makedirs(game_dir)
        
        # Download index.html for the game
        game_url = f"{games_url}/{game}/index.html"
        if download_file(game_url, f"{game_dir}/index.html"):
            print(f"Successfully downloaded {game}")
        else:
            print(f"Failed to download {game}")
        time.sleep(1)

if __name__ == "__main__":
    main() 