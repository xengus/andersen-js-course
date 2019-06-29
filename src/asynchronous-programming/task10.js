class Musician {
  constructor(albumsUrl) {
    this.url = albumsUrl;
  }

  async getAlbums() {
    const response = await fetch(this.url)
    const albums = await response.json;
    console.log(albums)
   }
}


  const musician = new Musician ('https://jsonplaceholder.typicode.com/albums');
  musician.getAlbums()
    .then(albums => console.log(albums))