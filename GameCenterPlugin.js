function GameCenter() {
	if(localStorage.getItem('GameCenterLoggedin')) {
		//cordova.exec("GameCenterPlugin.authenticateLocalPlayer");
	}
}

GameCenter.prototype.authenticate = function() {
    cordova.exec("GameCenterPlugin.authenticateLocalPlayer");
    console.log('authenticated');
};

GameCenter.prototype.showLeaderboard = function(category) {
    cordova.exec("GameCenterPlugin.showLeaderboard",category);	
};

GameCenter.prototype.reportScore = function(category,score) {
    cordova.exec("GameCenterPlugin.reportScore",category,score);		
};

GameCenter.prototype.showAchievements = function() {
    cordova.exec("GameCenterPlugin.showAchievements");			
};

GameCenter.prototype.getAchievement = function(category) {
	cordova.exec("GameCenterPlugin.reportAchievementIdentifier",category,100);
};

GameCenter._userDidLogin = function() {
	localStorage.setItem('GameCenterLoggedin', 'true');
    console.log('authenticated');
};

GameCenter._userDidSubmitScore = function() {
    console.log('score submitted');
};

GameCenter._userDidFailSubmitScore = function() {
    console.log('score submitted');
};

//For Cordova 2+
if(!window.plugins) window.plugins = {};
window.plugins.gamecenter = new GameCenter();