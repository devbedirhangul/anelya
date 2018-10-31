new Vue({
  el:'#app',
  data: {
    settingPanel : false,
    facebookLink : 'https://www.facebook.com',
    facebooLinkSettings :'',
    youtubeLink : 'https://www.youtube.com',
    youtubeLinkSettings :'',
    youtubePlaylistLink: 'https://www.youtube.com/watch?v=F1oHBcTdKL4&list=PLkLimRXN6NKyOOVAqgfHWns1ICNiGXgOd',
    youtubePlayListLinkSettings : '',
    anelyaPhoto : 'img/logo.png',
    searchValue : '',
    twitterLink : 'https://twitter.com',
    twitterLinkSettings : '',
    commandDiv : false
    
    
  },
  methods : {
    setting : function(){
      this.settingPanel = !this.settingPanel;
    },
    search : function(){
      if(this.searchValue ==='!f'){
         window.open(this.facebookLink);
      }else if(this.searchValue === '!y'){
        window.open(this.youtubeLink);
      }
      else if(this.searchValue === '!p'){
        window.open(this.youtubePlaylistLink);
      }else if(this.searchValue === '!t'){
        window.open(this.twitterLink);
      }
      else{
        
      }
    },
    facebookLinklUpdate : function(){
      this.facebookLink = this.facebooLinkSettings;
    },
    twitterLinkUpdate : function(){
      this.twitterLink = this.twitterLinkSettings;
    },  
    youtubeLinkUpdate : function(){
      this.youtubeLink = this.youtubeLinkSettings;
    },
    youtubePlaylistLinkUpdate : function(){
      this.youtubePlaylistLink = this.youtubePlayListLinkSettings;
    },
   
    
   
  },
  watch : {
      searchValue : function(){
      //this.anelyaPhoto  = 'img/musicLogo.png';
      if(this.searchValue === '!p'){
        this.anelyaPhoto = 'img/musicLogo.png';
      }else{
        this.anelyaPhoto = 'img/logo.png';
      }
    }
  }
 
})
// Çoklu playlist özelliği 