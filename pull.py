import requests
import re
m3u = []
m3u.append('#EXTM3U x-tvg-url="https://zsobix.xyz/epg_ripper_HU1.xml"')
urls=["mtv1live","mtv2live","mtv4live","mtv4plus","mtv5live","dunalive","os1"]
for url in urls:
	if url == "os1":
		d = requests.get("https://onlinestream.live/hir-tv/videoplayer/4740-1").text.split('"')
		m3u.append('#EXTINF:-1 tvg-shift="+1" tvg-id="HIR.TV.hu" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/4/44/H%C3%ADr_TV.png",HirTV')
		for line in d:
			if "play.m3u8" in line:
				m3u.append(requests.get(f"https://onlinestream.live{line}").text.replace("#EXTM3U", "").replace("\n", ""))
	elif url == "mtv4live":
		headers1 = {
			'Host': 'player.mediaklikk.hu',
			'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:136.0) Gecko/20100101 Firefox/136.0',
			'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
			'Accept-Language': 'en-US,en;q=0.5',
			'Accept-Encoding': 'gzip, deflate, br, zstd',
			'DNT': '1',
			'Connection': 'keep-alive',
			'Referer': 'https://m4sport.hu/',
			'Cookie': 'SERVERID=playercookieA',
			'Upgrade-Insecure-Requests': '1',
			'Sec-Fetch-Dest': 'iframe',
			'Sec-Fetch-Mode': 'navigate',
			'Sec-Fetch-Site': 'cross-site',
			'Priority': 'u=4',
			'Pragma': 'no-cache',
			'Cache-Control': 'no-cache'
		}
		r = requests.get(f'https://player.mediaklikk.hu/playernew/player.php?noflash=yes&video={url}', timeout=15, headers=headers1, cookies={"SERVERID":"playercookieA"}).text
		ab = r.split('"')
		for line in ab:
			if "index.m3u8" in line:
				m3u.append('#EXTINF:-1 tvg-id="m4.hu" tvg-logo="https://upload.wikimedia.org/wikipedia/hu/f/fd/M4_logo.png",M4 Sport')
				line = re.sub(r'\\', "", line)
				m3u.append(re.sub(r'\?v=5iip:((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)\.?\b){4}$', "", line))
	else:
		r = requests.get(f'https://player.mediaklikk.hu/playernew/player.php?noflash=yes&video={url}', timeout=15).text
		ab = r.split('"')
		for line in ab:
			if "index.m3u8" in line:
				if url == "mtv1live":
					m3u.append('#EXTINF:-1 tvg-id="m1.HD.hu" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/f/f1/M1_2020.png",M1')
				if url == "mtv2live":
					m3u.append('#EXTINF:-1 tvg-id="m2.HD.hu" tvg-logo="https://upload.wikimedia.org/wikipedia/hu/b/b5/M2_gyerekcsatorna_log%C3%B3ja.png",M2')
				if url == "mtv4plus":
					m3u.append('#EXTINF:-1 tvg-id="m4sport+.hu" tvg-logo="https://upload.wikimedia.org/wikipedia/hu/b/bd/Duna_world_log%C3%B3.png",Duna World/M4 Sport+')
				if url == "mtv5live":
					m3u.append('#EXTINF:-1 tvg-id="m5.hu" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/b/b4/M5logo.png",M5')
				if url == "dunalive":
					m3u.append('#EXTINF:-1 tvg-id="Duna.TV.hu" tvg-logo="https://upload.wikimedia.org/wikipedia/hu/d/d3/Dunatv_logo.png",Duna')
				line = re.sub(r'\\', "", line)
				m3u.append(re.sub(r'\?v=5iip:((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)\.?\b){4}$', "", line))
m3u.append('#EXTINF:-1 tvg-id="Euronews.hu" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Euronews_2022.svg/1280px-Euronews_2022.svg.png",Euronews')
m3u.append("https://raw.githubusercontent.com/Zsobix/YouTube_to_m3u/refs/heads/main/youtube.m3u8")
with open("hungary.m3u", "a") as hun:
	for i in m3u:
			hun.write(f"{i}\n")
