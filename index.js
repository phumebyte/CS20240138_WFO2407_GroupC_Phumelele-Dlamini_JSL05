// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
  { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
  { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
  { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
  { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
  { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
  { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
  { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
  { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
  { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
  { title: "Hit Em Up", artist: "Tupac", genre: "Hip-Hop" },
  { title: "Orange Moon", artist: "Erykah Badu", genre: "Soul" },
  { title: "Kiss Me More", artist: "Doja Cat", genre: "Pop" },
  { title: "Only Girl In The World", artist: "Rihanna", genre: "Pop" },
  { title: "DNA", artist: "Kendrick Lamar", genre: "Hip-Hop" },
  { title: "Let's Stay Together", artist: "Al Green", genre: "Soul" },
  { title: "My Future", artist: "Billie Eillish", genre: "Pop" },
  { title: "When I'm in Your Arms", artist: "Cleo Sol", genre: "Soul" },
  { title: "Needed Me", artist: "Rihanna", genre: "R&B" },
  { title: "Snooze", artist: "SZA", genre: "R&B" },
  { title: "See You Again", artist: "Tyler, the Creator", genre: "Hip-Hop" },
  // Feel free to add even more songs
];

// Array of Guardians with their preferred genres
const guardians = [
  { name: "Star-Lord", genre: "Soul", playlistURL: "https://open.spotify.com/playlist/1PXBOIu10tay7JKSSepDEl?si=debae2b9f4c84cd5"  },
  { name: "Gamora", genre: "R&B", playlistURL: "https://open.spotify.com/playlist/281NSTDGIznIW4NH5E3ZYn?si=82b3be954e1849ea"},
  { name: "Drax", genre: "Hip-Hop", playlistURL: "https://open.spotify.com/playlist/0NgolBODQaktKsv8q013PI?si=b1e55105e9fd47ea"},
  { name: "Rocket", genre: "Rock", playlistURL: "https://open.spotify.com/playlist/59OdUUFsPivbX1W1xHi0Oa?si=2deeb187cdd54bd3"},
  { name: "Groot", genre: "Pop", playlistURL: "https://open.spotify.com/playlist/37MTSlE7h4I5HIe48AVdZa?si=fd2e8844bfd64242"}
];

// Function to generate playlist based on each Guardian's preferred genre
function generatePlaylist(guardians, songs) {
  return guardians.map(guardian => {
      let playlist = songs.filter(song => song.genre === guardian.genre);
      return { guardianName: guardian.name, playlist: playlist, playlistURL: guardian.playlistURL  };
  });
}

// Dynamically displaying the playlists
function displayPlaylists(playlists) {
  let playlistDiv = document.getElementById('playlists');
  playlistDiv.innerHTML = ""; 

  playlists.forEach(playlist => {
      let guardianDiv = document.createElement('div');

      guardianDiv.innerHTML = `<h3><a href="${playlist.playlistURL}" target="_blank">${playlist.guardianName}'s Playlist</a></h3>`

      let songList = document.createElement('ul');
      playlist.playlist.forEach(song => {
          let songItem = document.createElement('li');
          songItem.textContent = `${song.title} by ${song.artist}`;
          songList.appendChild(songItem);
      });

      guardianDiv.appendChild(songList);
      playlistDiv.appendChild(guardianDiv);
  });
}

// Generate playlists and display them on the page
let playlists = generatePlaylist(guardians, songs);
displayPlaylists(playlists);


