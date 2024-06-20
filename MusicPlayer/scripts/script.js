new Vue({
  el: "#app",
  data() {
    return {
      audio: null,
      circleLeft: null,
      barWidth: null,
      thumbPos: null,
      duration: null,
      currentTime: null,
      isTimerPlaying: false,
      tracks: [
        {
          name: "Savaari",
          artist: "Ale Aleyo",
          cover: "https://github.com/KESHAVA2305/Music-Player/blob/main/MusicPlayer/img/savari.jpg?raw=true",
          source: "https://github.com/KESHAVA2305/Music-Player/raw/main/MusicPlayer/mp3/%5BiSongs.info%5D%2001%20-%20Ale%20Ale.mp3",
          url: "https://youtu.be/iZSeO8rI_Ig?si=r8zrZl4nxIWGDJwx",
          favorited: false
        },
        {
          name: "Super Star",
          artist: "Bakraa",
          cover: "https://github.com/KESHAVA2305/Music-Player/blob/main/MusicPlayer/img/super%20star.jpg?raw=true",
          source: "https://github.com/KESHAVA2305/Music-Player/raw/main/MusicPlayer/mp3/%5BiSongs.info%5D%2001%20-%20Bhakra%20Bhakra.mp3",
          url: "https://www.youtube.com/watch?v=H89G0yLekfw",
          favorited: false
        },
        {
          name: "Paramathma",
          artist: "College Getalli",
          cover: "https://github.com/KESHAVA2305/Music-Player/blob/main/MusicPlayer/img/paramathma.jpg?raw=true",
          source: "https://github.com/KESHAVA2305/Music-Player/raw/main/MusicPlayer/mp3/%5BiSongs.info%5D%2001%20-%20College%20Gatalli.mp3",
          url: "https://www.youtube.com/watch?v=18DJID0si-4",
          favorited: false
        },
        {
          name: "Tagaru",
          artist: "Tagaru Banthu Tagaru",
          cover: "https://github.com/KESHAVA2305/Music-Player/blob/main/MusicPlayer/img/tagaru.jpg?raw=true",
          source: "https://github.com/KESHAVA2305/Music-Player/raw/main/MusicPlayer/mp3/%5BiSongs.info%5D%2001%20-%20Tagaru%20Banthu%20Tagaru.mp3",
          url: "https://www.youtube.com/watch?v=V3-Fd8wPuRA",
          favorited: false
        },
        {
          name: "Galipata",
          artist: "Akasha Este Yakedeyu",
          cover: "https://github.com/KESHAVA2305/Music-Player/blob/main/MusicPlayer/img/galipata.jpg?raw=true",
          source: "https://github.com/KESHAVA2305/Music-Player/raw/main/MusicPlayer/mp3/%5BiSongs.info%5D%2002%20-%20Akasha%20Este%20Yakedyu.mp3",
          url: "https://www.youtube.com/watch?v=HfNtBJSkprk",
          favorited: false
        },
        {
          name: "Pallakki",
          artist: "Avva Kano Kannada",
          cover: "https://github.com/KESHAVA2305/Music-Player/blob/main/MusicPlayer/img/pallakki.jpg?raw=true",
          source: "https://github.com/KESHAVA2305/Music-Player/raw/main/MusicPlayer/mp3/%5BiSongs.info%5D%2002%20-%20Avva%20Kano%20Kannada.mp3",
          url: "https://www.youtube.com/watch?v=e6vCP1UEQ7Q",
          favorited: false
        },
        {
          name: "The Villan",
          artist: "Tick Tick Tick",
          cover: "https://github.com/KESHAVA2305/Music-Player/blob/main/MusicPlayer/img/the%20villan.jpg?raw=true",
          source: "https://github.com/KESHAVA2305/Music-Player/raw/main/MusicPlayer/mp3/%5BiSongs.info%5D%2002%20-%20Tick%20Tick%20Tick.mp3",
          url: "https://www.youtube.com/watch?v=Vx8coSNsZ9Y",
          favorited: false
        },
        {
          name: "Geleya",
          artist: "Hudugi Male Billu",
          cover: "https://github.com/KESHAVA2305/Music-Player/blob/main/MusicPlayer/img/geleya.jpg?raw=true",
          source: "https://github.com/KESHAVA2305/Music-Player/raw/main/MusicPlayer/mp3/%5BiSongs.info%5D%2003%20-%20Hudugi%20Male%20Billu.mp3",
          url: "https://www.youtube.com/watch?v=Xz3DxCdG_7E",
          favorited: false
        },
        {
          name: "Hudugaata",
          artist: "Mandakiniye",
          cover: "https://github.com/KESHAVA2305/Music-Player/blob/main/MusicPlayer/img/hudugaata.jpg?raw=true",
          source: "https://github.com/KESHAVA2305/Music-Player/raw/main/MusicPlayer/mp3/%5BiSongs.info%5D%2003%20-%20Mandakiniye.mp3",
          url: "https://www.youtube.com/watch?v=1nRmY2k-0Xc",
          favorited: false
        },
          {
          name: "Raaj",
          artist: "Muthuraja",
          cover: "https://github.com/KESHAVA2305/Music-Player/blob/main/MusicPlayer/img/raaj.jpg?raw=true",
          source: "https://github.com/KESHAVA2305/Music-Player/raw/main/MusicPlayer/mp3/%5BiSongs.info%5D%2003%20-%20Muthuraja.mp3",
          url: "https://www.youtube.com/watch?v=HY6yxaEFVDQ",
          favorited: false
        },
          {
          name: "Ghost",
          artist: "OGM",
          cover: "https://github.com/KESHAVA2305/Music-Player/blob/main/MusicPlayer/img/ghost.jpg?raw=true",
          source: "https://github.com/KESHAVA2305/Music-Player/raw/main/MusicPlayer/mp3/%5BiSongs.info%5D%2003%20-%20OGM.mp3",
          url: "https://www.youtube.com/watch?v=r7TE4U42DDU",
          favorited: false
        },
          {
          name: "Pallakki",
          artist: "Bidu Bidu",
          cover: "https://github.com/KESHAVA2305/Music-Player/blob/main/MusicPlayer/img/pallakki.jpg?raw=true",
          source: "https://github.com/KESHAVA2305/Music-Player/raw/main/MusicPlayer/mp3/%5BiSongs.info%5D%2004%20-%20Bidu%20Bidu%20Kaddu%20Kaddu.mp3",
          url: "https://www.youtube.com/watch?v=DjIf3GOuw18",
          favorited: false
        },
          {
          name: "Bombaat",
          artist: "Matinalli Helalarenu",
          cover: "https://github.com/KESHAVA2305/Music-Player/blob/main/MusicPlayer/img/bombaat.jpg?raw=true",
          source: "https://github.com/KESHAVA2305/Music-Player/raw/main/MusicPlayer/mp3/%5BiSongs.info%5D%2004%20-%20Mathinalli%20Helalarenu%20(Male).mp3",
          url: "https://www.youtube.com/results?search_query=geleya+kannada+movie+songs",
          favorited: false
        },
          {
          name: "Geleya",
          artist: "Nanna Styleu Berene",
          cover: "https://github.com/KESHAVA2305/Music-Player/blob/main/MusicPlayer/img/geleya%20style.jpg?raw=true",
          source: "https://github.com/KESHAVA2305/Music-Player/raw/main/MusicPlayer/mp3/%5BiSongs.info%5D%2005%20-%20Nanna%20Stylu%20Berebe.mp3",
          url: "https://www.youtube.com/watch?v=kPFkPNDqyWg",
          favorited: false
        },
          {
          name: "Kirik Party",
          artist: "last Bench",
          cover: "https://github.com/KESHAVA2305/Music-Player/blob/main/MusicPlayer/img/kirik%20party.jpg?raw=true",
          source: "https://github.com/KESHAVA2305/Music-Player/raw/main/MusicPlayer/mp3/%5BiSongs.info%5D%2006%20-%20Last%20Benchu%20Party.mp3",
          url: "https://www.youtube.com/watch?v=qH2CAvdMxS4",
          favorited: false
        },
          {
          name: "The Villan",
          artist: "Rana Rana Raavana",
          cover: "https://github.com/KESHAVA2305/Music-Player/blob/main/MusicPlayer/img/the%20villan.jpg?raw=true",
          source: "https://github.com/KESHAVA2305/Music-Player/raw/main/MusicPlayer/mp3/%5BiSongs.info%5D%2006%20-%20Rana%20Rana%20Raavana.mp3",
          url: "https://www.youtube.com/watch?v=zmNQjXoKHp0",
          favorited: false
        },
          {
          name: "Kirik Party",
          artist: "Katheyondu",
          cover: "https://github.com/KESHAVA2305/Music-Player/blob/main/MusicPlayer/img/kirik%20party.jpg?raw=true",
          source: "https://github.com/KESHAVA2305/Music-Player/raw/main/MusicPlayer/mp3/%5BiSongs.info%5D%2009%20-%20Katheyondu%20Helide%20(Farewell).mp3",
          url: "https://www.youtube.com/watch?v=QpKQjISfB4s",
          favorited: false
        }
         ],
      currentTrack: null,
      currentTrackIndex: 0,
      transitionName: null
    };
  },
  methods: {
    play() {
      if (this.audio.paused) {
        this.audio.play();
        this.isTimerPlaying = true;
      } else {
        this.audio.pause();
        this.isTimerPlaying = false;
      }
    },
    generateTime() {
      let width = (100 / this.audio.duration) * this.audio.currentTime;
      this.barWidth = width + "%";
      this.thumbPos = (width == 0 ? width : (width == 100 ? width : width - 1)) + "%";
      this.circleLeft = width + "%";
      let durmin = Math.floor(this.audio.duration / 60) || 0;
      let dursec = Math.floor(this.audio.duration - durmin * 60) || 0;
      let curmin = Math.floor(this.audio.currentTime / 60);
      let cursec = Math.floor(this.audio.currentTime - curmin * 60);
      if (durmin < 10) {
        durmin = "0" + durmin;
      }
      if (dursec < 10) {
        dursec = "0" + dursec;
      }
      if (curmin < 10) {
        curmin = "0" + curmin;
      }
      if (cursec < 10) {
        cursec = "0" + cursec;
      }
      this.duration = durmin + ":" + dursec;
      this.currentTime = curmin + ":" + cursec;
    },
    updateBar(x) {
      let progress = this.$refs.progress;
      let maxduration = this.audio.duration;
      let position = x - progress.offsetLeft;
      let percentage = (100 * position) / progress.offsetWidth;
      if (percentage > 100) {
        percentage = 100;
      }
      if (percentage < 0) {
        percentage = 0;
      }
      this.barWidth = percentage + "%";
      this.thumbPos = (percentage == 0 ? percentage : (percentage == 100 ? percentage : percentage - 1)) + "%";
      this.circleLeft = percentage + "%";
      this.audio.currentTime = (maxduration * percentage) / 100;
      if (this.isTimerPlaying)
        this.audio.play();
    },
    clickProgress(e) {
      if (this.isTimerPlaying)
        this.audio.pause();
      this.updateBar(e.pageX);
    },
    prevTrack() {
      this.transitionName = "scale-in";
      this.isShowCover = false;
      if (this.currentTrackIndex > 0) {
        this.currentTrackIndex--;
      } else {
        this.currentTrackIndex = this.tracks.length - 1;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    nextTrack() {
      this.transitionName = "scale-out";
      this.isShowCover = false;
      if (this.currentTrackIndex < this.tracks.length - 1) {
        this.currentTrackIndex++;
      } else {
        this.currentTrackIndex = 0;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    resetPlayer() {
      this.barWidth = 0;
      this.thumbPos = 0;
      this.circleLeft = 0;
      this.audio.currentTime = 0;
      this.audio.src = this.currentTrack.source;
      setTimeout(() => {
        if (this.isTimerPlaying) {
          this.audio.play();
        } else {
          this.audio.pause();
        }
      }, 300);
    },
    favorite() {
      this.tracks[this.currentTrackIndex].favorited = !this.tracks[
        this.currentTrackIndex
      ].favorited;
    }
  },
  created() {
    let vm = this;
    this.currentTrack = this.tracks[0];
    this.audio = new Audio();
    this.audio.src = this.currentTrack.source;
    this.audio.ontimeupdate = function () {
      vm.generateTime();
    };
    this.audio.onloadedmetadata = function () {
      vm.generateTime();
    };
    this.audio.onended = function () {
      vm.nextTrack();
      this.isTimerPlaying = true;
    };

    // this is optional (for preload covers)
    for (let index = 0; index < this.tracks.length; index++) {
      const element = this.tracks[index];
      let link = document.createElement('link');
      link.rel = "prefetch";
      link.href = element.cover;
      link.as = "image"
      document.head.appendChild(link)
    }
  }
});
