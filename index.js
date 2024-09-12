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


// Object containing each Guardian's preferred genre
const guardians = [
    { name: "Star-Lord", genre: "Soul" },
    { name: "Gamora", genre: "R&B" },
    { name: "Drax", genre: "Hip-Hop" },
    { name: "Rocket", genre: "Rock" },
    { name: "Groot", genre: "Pop" }
  ];
  

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    // Use the map() function to create playlists for each Guardian
    function generatePlaylist(guardians, songs) {
        return guardians.map(guardian => {
          let playlist = songs.filter(song => song.genre === guardian.genre);
          return { guardianName: guardian.name, playlist: playlist };
        });
      }
      
}

// Dynamically displaying the playlists
function displayPlaylists(playlists) {
    let playlistDiv = document.getElementById('playlists');
    playlistDiv.innerHTML = ""; // Clear previous content
  
    playlists.forEach(playlist => {
      let guardianDiv = document.createElement('div');
      guardianDiv.innerHTML = `<h3>${playlist.guardianName}'s Playlist</h3>`;
  
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
  

// Call generatePlaylist and display the playlists for each Guardian
let playlists = generatePlaylist(guardians, songs); // assigned the function invocation to a variable because it will be readbale to call the function insode the other function as a variable
displayPlaylists(playlists);


