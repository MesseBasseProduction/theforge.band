import './forge.scss';


const RELEASES = 7;


class Forge {


	constructor(lang) {
		this._lang = lang || 'fr';
		this._activeTrack = 'Rock';
		this._audio = new Audio(`/assets/audio/${this._activeTrack}Extract.mp3`);
		this._handlePlayback();
		this._handleClick();
	}


	_handlePlayback() {
		const button = document.getElementById('play-pause');
		button.src = '/assets/img/play.svg';

		const progressTrack = document.getElementById('progress-bar');
		const progress = document.getElementById('current-progress');
		let playing = false;

		button.addEventListener('click', () => {
			if (playing === true) {
				playing = false;
				button.src = '/assets/img/play.svg';
				this._audio.pause();
			} else {
				playing = true;
				button.src = '/assets/img/pause.svg';
				this._audio.play();
			}
		});

		this._audio.addEventListener('timeupdate', () => {
			progress.style.width = `${(this._audio.currentTime / this._audio.duration) * 100}%`;
		});

		this._audio.addEventListener('ended', () => {
			this._audio.currentTime = 0;
			progress.style.width = '0';
			button.src = '/assets/img/play.svg';
			playing = false;
		});

		progressTrack.addEventListener('click', event => {
			if (playing === true) {
				const box = progressTrack.getBoundingClientRect();
				this._audio.currentTime = ((event.clientX - box.left) / box.width) * this._audio.duration;
				progress.style.width = `${(this._audio.currentTime / this._audio.duration) * 100}%`;
			}
		});
	}


	_handleClick() {
		const progress = document.getElementById('current-progress');

		const composer = { fr: 'Compositeur', en: 'Composer' };
		const author = { fr: 'Auteur', en: 'Author' };
		const allBy = { fr: 'Toutes les pistes par', en: 'All tracks by' };
		const except = { fr: 'Sauf {{track}} par', en: 'Except {{track}} by' };
		const tracks = ['Rock', 'Etica', 'Forge', 'Live', 'Pox', 'Dur', 'Macadam'];
		const band = ['The Forge', 'The Forge', 'The Forge', 'Small Pox', 'Small Pox', 'Le Forge', 'Macadam Forge'];
		const times = ['4:07', '32:44', '39:00', '1:17:33', '29:35', '19:00', '8:11'];
		const tracklist = [
			`<h3>1. Rock'n'Roll – 4:07</h3><p><i>${composer[this._lang]}</i> : Luc Boulogne</p>`,
			`<h3>1. R U S H – 5:38</h3><p><i>${composer[this._lang]}</i> : Luc Boulogne, Paul Boulogne<br>Tom Souty, Vincent Boulogne</p><h3>2. Metalfloyd – 6:41</h3><p><i>${composer[this._lang]}</i> : Luc Boulogne, Paul Boulogne<br>Tom Souty, Vincent Boulogne</p><h3>3. Acoustica – 6:59</h3><p><i>${composer[this._lang]}</i> : Luc Boulogne, Paul Boulogne<br>Tom Souty, Vincent Boulogne</p><h3>4. Etica Nikomak – 13:26</h3><p><i>${composer[this._lang]}</i> : Luc Boulogne, Paul Boulogne<br>Tom Souty, Vincent Boulogne</p>`,
			`<h3>1. Can You Heal My Pain? – 5:16</h3><p><i>${composer[this._lang]}</i> : Luc Boulogne<br><i>${author[this._lang]}</i> : Stéphane Philippe</p><h3>2. Doliprane – 6:13</h3><p><i>${composer[this._lang]}</i> : Luc Boulogne<br><i>${author[this._lang]}</i> : Stéphane Philippe</p><h3>3. Far From City – 4:46</h3><p><i>${composer[this._lang]}</i> : Luc Boulogne<br><i>${author[this._lang]}</i> : Stéphane Philippe</p><h3>4. Fight Is Always Run – 7:57</h3><p><i>${composer[this._lang]}</i> : Luc Boulogne<br><i>${author[this._lang]}</i> : Stéphane Philippe</p><h3>5. Mirage – 6:35</h3><p><i>${composer[this._lang]}</i> : Luc Boulogne<br><i>${author[this._lang]}</i> : Stéphane Philippe</p><h3>6. Heart Of Stone – 8:10</h3><p><i>${composer[this._lang]}</i> : Luc Boulogne<br><i>${author[this._lang]}</i> : Stéphane Philippe</p>`,
			`<h3>${allBy[this._lang]}</h3><p><i>${composer[this._lang]}</i> : Luc Boulogne<br><i>${author[this._lang]}</i> : Stéphane Philippe</p><h3>${except[this._lang].replace('{{track}}', "I Don't Need No Doctor")}</h3><p><i>${composer[this._lang]}</i> : Ashford & Simpson, Jo Armstead<br><i>${author[this._lang]}</i> : John Mayer</p><h3>1. Raoul – 4:15</h3><h3>2. Sweet Little Way – 6:10</h3><h3>3. We Want To Know – 4:56</h3><h3>4. Close My Eyes – 8:58</h3><h3>5. Can You Heal My Pain? – 5:00</h3><h3>6. Doliprane – 6:12</h3><h3>7. Fight Is Always Run – 7:15</h3><h3>8. Heart Of Stone – 7:40</h3><h3>9. I Don't Need No Doctor – 6:22</h3><h3>10. Rock'n'Roll – 3:57</h3><h3>11. Just The Reality – 6:17</h3><h3>12. Instru – 4:25</h3><h3>13. Mirage – 6:00</h3>`,
			`<h3>1. Just The Reality – 7:14</h3><p><i>${composer[this._lang]}</i> : Luc Boulogne<br><i>${author[this._lang]}</i> : Stéphane Philippe</p><h3>2. Doliprane – 6:42</h3><p><i>${composer[this._lang]}</i> : Luc Boulogne<br><i>${author[this._lang]}</i> : Stéphane Philippe</p><h3>3. Mirage – 5:59</h3><p><i>${composer[this._lang]}</i> : Luc Boulogne<br><i>${author[this._lang]}</i> : Stéphane Philippe</p><h3>4. Close My Eyes – 9:37</h3><p><i>${composer[this._lang]}</i> : Luc Boulogne<br><i>${author[this._lang]}</i> : Stéphane Philippe</p>`,
			`<h3>1. Président Samouraï – 5:14</h3><p><i>${composer[this._lang]}</i> : Luc Boulogne, Michel Mathieu, Vincent Boulogne<br><i>${author[this._lang]}</i> : Michel Mathieu</p><h3>2. In / Out – 5:44</h3><p><i>${composer[this._lang]}</i> : Luc Boulogne, Michel Mathieu, Vincent Boulogne<br><i>${author[this._lang]}</i> : Michel Mathieu</p><h3>3. Aime Moi – 4:47</h3><p><i>${composer[this._lang]}</i> : Luc Boulogne, Michel Mathieu, Vincent Boulogne<br><i>${author[this._lang]}</i> : Michel Mathieu</p><h3>4. Macadam – 3:13</h3><p><i>${composer[this._lang]}</i> : Luc Boulogne, Michel Mathieu, Vincent Boulogne<br><i>${author[this._lang]}</i> : Michel Mathieu</p>`,
			`<h3>1. Loulou – 4:03</h3><p><i>${composer[this._lang]}</i> : Christophe Boulogne, Luc Boulogne<br><i>${author[this._lang]}</i> : Michel Mathieu</p><h3>2. Montpar' Blues – 4:08</h3><p><i>${composer[this._lang]}</i> : Christophe Boulogne, Luc Boulogne<br><i>${author[this._lang]}</i> : Michel Mathieu</p>`
		];
		const titles = ['Rock\'n\'Roll', 'Etica Nikomak', 'The Forge', 'Live...!', 'Small Pox', 'Dur d\'Être Apache...', 'Loulou/Montpar\' Blues'];
		const spotify = ['', '08D3o3S0y7Y3I2z2YD95Wb', '6JOsCQ7bUWptYKCtA04Jt7', '', '6v6HlX4bDfFDWrrTRXeQj7', '22mM01wqd6mZNqt41Bqyq4', ''];
		const apple = ['', 'etica-nikomak/1590605239', 'the-forge/1590930991', '', 'small-pox-ep/1591523883', 'président-samouraï/1591523511?i=1591523512', ''];
		const amazon = ['', 'B09JLK7CQJ', 'B09JS8XW45', '', 'B09K3S3Y66', 'B09K34PWZX', ''];
		//const pandora = ['', '', ''];
		const tidal = ['', '201425661', '201669802', '', '202078894', '202078865', ''];
		const deezer = ['', '266135292', '266746652', '', '267582302', '267582372', ''];
		const youtube = ['v=wap0ZVifTfA', 'v=v8yQdRsJah4&list=PLGrV25VkQxOeALepofxUafUZR2_4Hhy8K', 'v=4JecXQAe7nQ&list=PLGrV25VkQxOdBaIl_kHM0Z9mjq_1D3LrK', 'https://www.youtube.com/watch?v=xGPS2QmyScc&list=PLGrV25VkQxOdVkj-qUemG65XSXwM5luLu', 'v=VRg5BQkyIiE&list=PLGrV25VkQxOde4ci3lta5oX6WJbPb7iXU', 'v=ZuLNodgTtzI&list=PLGrV25VkQxOdkK4Hjc80bQ5pdcBfB9N_M', 'v=NjlcpdkZnb8&list=PLGrV25VkQxOfFnRPT0QqYXeIk-hNdPvQO'];
		const discogs = ['21011362-The-Forge-RocknRoll', '20503012-The-Forge-Etica-Nikomak', '20560249-The-Forge-The-Forge', '21077248-Small-Pox-Live', '20548198-Small-Pox-Small-Pox', '20515321-Le-Forge-Dur-dÊtre-Apache', '21012571-Macadam-Forge-Loulou-Montpar-Blues'];
		//const musicbrainz = ['0c82ec60-852a-4c23-bc7b-2a4377f82702', '3921323e-d906-47fe-bc17-e5d359cc4ea3', '39049941-c348-4aeb-b86b-a5af7093d3ea'];
		//const genius = ['Tramp-single', 'Crad-bar-boogie-single', 'Dystopie'];
		const bandcamp = ['rocknroll-single', 'etica-nikomak', 'the-forge', 'live', 'small-pox', 'dur-d-tre-apache', 'loulou-montpar-blues-single'];
		const dates = {
			fr: ['15 Novembre 2021', '7 Octobre 2021', '6 Octobre 2021', '25 Novembre 2021', '5 Octobre 2021', '4 Octobre 2021', '17 Novembre 2021'],
			en: ['November 15, 2021', 'October 7, 2021', 'October 6, 2021', 'November 25, 2021', 'October 5, 2021', 'October 4, 2021', 'November 17, 2021']
		};

		const updateUI = arrayIndex => {
			document.getElementById('release-background').classList.remove(this._activeTrack.toLowerCase());
			document.getElementById('release-background-bottom').classList.remove(this._activeTrack.toLowerCase());
			document.getElementById('spotify').classList.remove('disabled');
			document.getElementById('apple').classList.remove('disabled');
			document.getElementById('amazon').classList.remove('disabled');
			document.getElementById('deezer').classList.remove('disabled');
			this._audio.pause();
			this._audio.currentTime = 0;
			progress.style.width = '0';
			this._activeTrack = tracks[arrayIndex];
			document.getElementById('release-background').classList.add(this._activeTrack.toLowerCase());
			document.getElementById('release-background-bottom').classList.add(this._activeTrack.toLowerCase());
			document.getElementById('release-cover').src = `/assets/img/${this._activeTrack}.webp`;
			document.getElementById('release-duration').innerHTML = times[arrayIndex];
			document.getElementById('release-title').innerHTML = titles[arrayIndex];
			document.getElementById('band-name').innerHTML = band[arrayIndex];
			document.getElementById('release-date').innerHTML = dates[this._lang][arrayIndex];
			document.getElementById('release-tracklist').innerHTML = tracklist[arrayIndex];
			document.getElementById('spotify').href = `https://open.spotify.com/album/${spotify[arrayIndex]}`;
			if (spotify[arrayIndex] === '') { document.getElementById('spotify').classList.add('disabled'); } 
			document.getElementById('apple').href = `https://music.apple.com/us/album/${apple[arrayIndex]}`;
			if (apple[arrayIndex] === '') { document.getElementById('apple').classList.add('disabled'); } 
			document.getElementById('amazon').href = `https://music.amazon.fr/albums/${amazon[arrayIndex]}`;
			if (amazon[arrayIndex] === '') { document.getElementById('amazon').classList.add('disabled'); } 
			document.getElementById('deezer').href = `https://www.deezer.com/fr/album/${deezer[arrayIndex]}`;
			if (deezer[arrayIndex] === '') { document.getElementById('deezer').classList.add('disabled'); }
			document.getElementById('youtube').href = `https://www.youtube.com/watch?${youtube[arrayIndex]}`;
			document.getElementById('bandcamp').href = `https://theforgeband.bandcamp.com/album/${bandcamp[arrayIndex]}`;
			this._audio = new Audio(`/assets/audio/${this._activeTrack}Extract.mp3`);
			this._handlePlayback();
		};

		let index = 0;
		document.getElementById('release-previous').addEventListener('click', e => {
			e.target.blur();
			index = (RELEASES + index - 1) % RELEASES;
			updateUI(index);
		});

		document.getElementById('release-next').addEventListener('click', e => {
			e.target.blur();
			index = (index + 1) % RELEASES;
			updateUI(index);
		});
		// Modal handling
		const overlay = document.getElementById('modal-overlay');
		document.getElementById('modal-overlay').addEventListener('click', () => {
			overlay.style.opacity = 0;
			setTimeout(() => {
				overlay.innerHTML = '';
				overlay.style.display = 'none';
			}, 400);
		});

		document.getElementById('see-more-links').addEventListener('click', () => {
			fetch('/assets/html/seemoremodal.html').then(data => {
				overlay.style.display = 'flex';
				data.text().then(htmlString => {
					overlay.appendChild(document.createRange().createContextualFragment(htmlString));
					document.getElementById('tidal').href = `https://listen.tidal.com/album/${tidal[index]}`;
					if (tidal[index] === '') { document.getElementById('tidal').classList.add('disabled'); }
					//document.getElementById('pandora').href = `https://nacband.bandcamp.com/album/${pandora[index]}`;
					document.getElementById('discogs').href = `https://www.discogs.com/release/${discogs[index]}`;					
					//document.getElementById('musicbrainz').href = `https://musicbrainz.org/release/${musicbrainz[index]}`;			
					//document.getElementById('genius').href = `https://genius.com/albums/Nac-fra/${genius[index]}`;			
					requestAnimationFrame(() => overlay.style.opacity = 1);
				});
			}).catch(e => console.error(e) );
		});
	}


}


export default Forge;
