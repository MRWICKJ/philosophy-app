import json
import requests
import time

API_KEY = ""
API_URL = "https://api.pexels.com/v1/search?query={query}&per_page=1"
HEADERS = {"Authorization": API_KEY}

def fetch_image_url(query):
    """Fetch a new image URL from Pexels API based on the topic name."""
    response = requests.get(API_URL.format(query=query), headers=HEADERS)
    if response.status_code == 200:
        data = response.json()
        return data["photos"][0]["src"]["original"] if data["photos"] else None
    return None

def update_image_urls(data):
    """Update each item's imageUrl with a topic-related image from Pexels."""
    for category in data:
        for item in category.get("items", []):
            topic = item["title"]
            print(f"Fetching image for: {topic}...")
            
            new_image_url = fetch_image_url(topic)
            if new_image_url:
                item["imageUrl"] = new_image_url
                print(f"Updated: {new_image_url}")
            else:
                print(f"Failed to fetch image for {topic}")
            
            time.sleep(1)

    return data


with open("c:/Users/halde/OneDrive/Desktop/Recent/philosophy-app/src/lib/data.json", "r") as file:
    json_data = json.load(file)

updated_data = update_image_urls(json_data)


with open("c:/Users/halde/OneDrive/Desktop/Recent/philosophy-app/src/lib/data.json", "w") as file:
    json.dump(updated_data, file, indent=2)

print("Updated image URLs successfully!")
