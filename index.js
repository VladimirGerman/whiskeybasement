const songs = [...document.querySelectorAll(".songs__song")];

function stopSongs() {
	for (const song of songs) {
		const audio = song.querySelector("audio");
		const playIcon = song.querySelector(".songs__icon_play");
		const pauseIcon = song.querySelector(".songs__icon_pause");

		if (!audio.paused) {
			audio.pause();
			playIcon.classList.toggle("hidden");
			pauseIcon.classList.toggle("hidden");
		}
	}
}

for (const song of songs) {
	const btn = song.querySelector(".songs__play");
	const audio = song.querySelector("audio");

	btn.addEventListener("click", () => {
		const playIcon = btn.querySelector(".songs__icon_play");
		const pauseIcon = btn.querySelector(".songs__icon_pause");

		if (audio.paused) {
			stopSongs();
			audio.play();
			playIcon.classList.toggle("hidden");
			pauseIcon.classList.toggle("hidden");
			return false;
		} else {
			stopSongs();
			return false;
		}
	});
}