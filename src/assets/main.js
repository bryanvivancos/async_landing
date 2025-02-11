const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCOGWA0_i0g3i8xF3BTtneSw&part=snippet%2Cid&order=date&maxResults=10';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '6b30865061mshbf9b68421856280p1be6b8jsn4fdb7746b706',
		'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
	}
};
const content = null || document.getElementById("content")

async function fetchData(urlAPI) {
  const response = await fetch(urlAPI,options)
  const data = await response.json()
  return data
}

(async () => {
  try {
    const videos = await fetchData(API)
    let view = `
    ${videos.items.map(video => `
      <div class="group relative">
          <div
            class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
            <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
          </div>
          <div class="mt-4 flex justify-between">
            <h3 class="text-sm text-gray-700">
              <span aria-hidden="true" class="absolute inset-0"></span>
              ${video.snippet.title}
          </h3>
        </div>
      </div>
    `).slice(0, 4).join('')}
    `;
    content.innerHTML = view;
  } catch (error) {
    console.log(error);
  }
})();