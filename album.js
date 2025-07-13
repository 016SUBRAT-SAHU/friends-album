new Vue({
  el: "#app",
  data() {
    return {
      isOpenedTop: false,
      items: [

        {
          title: "✨",
          desc: "We’re a group of 8 souls brought together by fate and bonded by countless memories — Subrat, Rahul, Soubhagya, Abinash, Satish, Smaraneeka, Priyanka, and Vahini. From the first semester to the final year, we've done everything together — from random hangouts, late-night talks, celebrating small moments, to supporting each other through tough times. 😄🎉☕📸",
          isOpen: false,
        },
        
        {

          title: "✨ ",
          desc: "Now, as college life is slowly coming to an end, things are starting to change. Some of us have started our journey into the next phase, and the rest are not far behind. 💼🚀 While we're happy for what’s coming, there's also a little sadness — because soon, these everyday moments will become memories. 🥹💔",
          isOpen: false,
        },
        {
          
          title: "✨",
          desc: "But no matter where life takes us, these bonds, these laughs, and this friendship will stay forever — just like the pages of this album. 📖❤️",
          isOpen: false,
        },
        {
          img1: "img/round.jpg",
          title: " Happy Family❤️",
          desc: "",
          isOpen: false,
        },
        {
          img1: "img/smaru 1.jpg",
          title: "Smaru",
          desc: "Laughs at everything, spreads joy effortlessly 😄.",
          isOpen: false,
        },
        {
          img1: "img/pryanka.jpg",
          title: "Pri",
          desc: "The heart of the squad — kind, clever, and grounded😀.",
          isOpen: false,
        },
        {
          img1: "img/vahini.jpg",
          title: "Vahi",
          desc: "Smart, sweet, and always has your back 😇.",
          isOpen: false,
        },
        {
          img1: "img/subrat.jpg",
          title: "Subu",
          desc: "Loud laugh, louder heart — pure energy 😎",
          isOpen: false,
        },
        {
          img1: "img/rahul.jpg",
          title: "Rahul",
          desc: "Cool-headed and real — always speaks with purpose🥸.",
          isOpen: false,
        },
        {
          img1: "img/abinash.jpg",
          title: "Abinash",
          desc: "Chill, cheerful, and the go-to for group plans😃.",
          isOpen: false,
        },
        {
          img1: "img/Satish.jpg",
          title: "Satish",
          desc: "Silent killer with sharp comebacks and strong coffee game🫡.",
          isOpen: false,
        },
        {
          img1: "img/soubhagya.jpg",
          title: "Gya",
          desc: "Always smiling, the calmest vibe in the group🤠.",
          isOpen: false,
        },
        {
          img1: "img/1--.jpg",
          title: "😍 କିଛି ପୁରୁଣା ସ୍ମୃତି 😍",
          desc: "",
          isOpen: false,
        },
        {
          img1: "img/2--.jpg",
          title: "",
          desc: "",
          isOpen: false,
        },
        {
          img1: "img/3--.jpg",
          title: "",
          desc: "",
          isOpen: false,
        },
        {
          img1: "img/4--.jpg",
          title: "",
          desc: "",
          isOpen: false,
        },
        {
          img1: "img/5 -.jpg",
          title: "",
          desc: "",
          isOpen: false,
        },
        {
          img1: "img/6 -.jpg",
          title: "",
          desc: "",
          isOpen: false,
        },
        {
          img1: "img/7 -.jpg",
          title: "",
          desc: "",
          isOpen: false,
        },
        {
          img1: "img/8--.jpg",
          title: "",
          desc: "",
          isOpen: false,
        },
        {
          img1: "img/9--.jpg",
          title: "",
          desc: "",
          isOpen: false,
        },
        {
          img1: "img/10--.jpg",
          title: "",
          desc: "",
          isOpen: false,
        },
        {
          img1: "img/11--july.jpg",
          title: "",
          desc: "",
          isOpen: false,
        },
        {
          img1: "img/12--july.jpg",
          title: "",
          desc: "",
          isOpen: false,
        },
        {
          img1: "img/13--july.jpg",
          title: "",
          desc: "",
          isOpen: false,
        },
        {
          img1: "img/14 - july.jpg",
          title: "",
          desc: "",
          isOpen: false,
        },
        {
          img1: "img/15 - august.jpg",
          title: "",
          desc: "",
          isOpen: false,
        },
        {
          img1: "img/16 - august.jpg",
          title: "",
          desc: "",
          isOpen: false,
        },
        {
          img1: "img/17--aug.jpg",
          title: "",
          desc: "",
          isOpen: false,
        },
        {
          img1: "img/18--.jpg",
          title: "",
          desc: "",
          isOpen: false,
        },
        {
          img1: "img/19--.jpg",
          title: "",
          desc: "",
          isOpen: false,
        },
        {
          img1: "img/20--oct.jpg",
          title: "",
          desc: "",
          isOpen: false,
        },
        {
          img1: "img/21--.jpg",
          title: "",
          desc: "",
          isOpen: false,
        },
        {
          img1: "img/22--nov.jpg",
          title: "",
          desc: "",
          isOpen: false,
        },
        {
          img1: "img/23--nov.jpg",
          title: "",
          desc: "",
          isOpen: false,
        },
        {
          img1: "img/24--.jpg",
          title: "",
          desc: "",
          isOpen: false,
        },
        {
          img1: "img/25--.jpg",
          title: "",
          desc: "",
          isOpen: false,
        },
        {
          img1: "img/26--.jpg",
          title: "",
          desc: "",
          isOpen: false,
        },
        {
          img1: "img/29--.jpg",
          title: "",
          desc: "",
          isOpen: false,
        },
        {
          img1: "img/30--.jpg",
          title: "",
          desc: "",
          isOpen: false,
        },
        {
          img1: "img/31--.jpg",
          title: "",
          desc: "",
          isOpen: false,
        },
        {
          img1: "img/32--.jpg",
          title: "",
          desc: "",
          isOpen: false,
        },
        {
          img1: "img/33--.jpg",
          title: "",
          desc: "",
          isOpen: false,
        },
        {
          img1: "img/34--.jpg",
          title: "",
          desc: "",
          isOpen: false,
        },
        {
          img1: "img/36--.jpg",
          title: "",
          desc: "",
          isOpen: false,
        },
        {
          img1: "img/37--.jpg",
          title: "",
          desc: "",
          isOpen: false,
        },
        {
          img1: "img/38--.jpg",
          title: "",
          desc: "",
          isOpen: false,
        },
        {
          img1: "img/39--.jpg",
          title: "",
          desc: "",
          isOpen: false,
        },
        {
          img1: "img/40--.jpg",
          title: "",
          desc: "",
          isOpen: false,
        },
        {
          img1: "img/41.jpg",
          title: "",
          desc: "",
          isOpen: false,
        },
        {
          img1: "img/42.jpg",
          title: "",
          desc: "",
          isOpen: false,
        },
        {
          img1: "img/43--.jpg",
          title: "",
          desc: "",
          isOpen: false,
        },
        {
          img1: "img/44--.jpg",
          title: "",
          desc: "",
          isOpen: false,
        },
        {
          img1: "img/45--.jpg",
          title: "",
          desc: "",
          isOpen: false,
        },
        {
          img1: "img/46--.jpg",
          title: "",
          desc: "",
          isOpen: false,
        },
        {
          img1: "img/47--.jpg",
          title: "",
          desc: "",
          isOpen: false,
        },
        {
          img1: "img/48--.jpg",
          title: "",
          desc: "",
          isOpen: false,
        },
        {
          img1: "img/49--.jpg",
          title: "",
          desc: "",
          isOpen: false,
        },
        {
          img1: "img/50.jpg",
          title: "",
          desc: "",
          isOpen: false,
        },
        {
          img1: "img/51.jpg",
          title: "",
          desc: "",
          isOpen: false,
        },
        {
          img1: "img/52.jpg",
          title: "",
          desc: "",
          isOpen: false,
        },
        {
          img1: "img/53.jpg",
          title: "",
          desc: "",
          isOpen: false,
        },
        {
          img1: "",
          title: "",
          desc: "Thank you all. I feel truly proud that you are a part of my life.❤️",
          isOpen: false,
        },

      ],
    };
  },
  
  methods: {
    topOpen() {
      if (this.isOpenedTop) {
        this.items.forEach(item => item.isOpen = false);
      }
      this.isOpenedTop = !this.isOpenedTop;
    },
    handleClick(idx, event) {
      if (!this.isOpenedTop) return;
      if (this.items[idx].isOpen) return; // Safeguard for flipped pages
      const rect = event.currentTarget.getBoundingClientRect();
      const clickX = event.clientX - rect.left;
      const width = rect.width;
      if (clickX > width / 2) { // Right side
        if (idx < this.items.length - 1) {
          this.items[idx].isOpen = true;
        } else {
          this.reset();
        }
      } else { // Left side
        if (idx > 0) {
          this.items[idx - 1].isOpen = false;
        } else {
          this.isOpenedTop = false;
          this.items.forEach(item => item.isOpen = false);
        }
      }
    },
    
    reset() {
      this.items.forEach((item) => (item.isOpen = false));
      this.isOpenedTop = false;
    },
  },
});