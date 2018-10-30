new Vue({
  el:'#app',
  data: {
    settingPanel : false,
    facebookLink : 'https://www.facebook.com',
    youtubeLink : 'https://www.youtube.com',
    youtubePlaylistLink: 'https://www.youtube.com/watch?v=F1oHBcTdKL4&list=PLkLimRXN6NKyOOVAqgfHWns1ICNiGXgOd',
    anelyaPhoto : 'img/logo.png',
    searchValue : '',
    
    
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
      }
      
  
      
      else{
        
      }
    },
    facebookLinklUpdate : function(){
      
      var x = document.getElementById('facebooLinkSettings').value;
      this.facebookLink = x;
    },
    youtubeLinkUpdate : function(){
      
      var x = document.getElementById('youtubeLinkSettings').value;
      this.youtubeLink = x;
    },
    youtubePlaylistLinkUpdate : function(){
      var x = document.getElementById('youtubePlayListLinkSettings').value;
      this.youtubePlaylistLink = x;
     
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