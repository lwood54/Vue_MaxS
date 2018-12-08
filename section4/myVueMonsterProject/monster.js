let app = new Vue({
  el: '#app',
  data: {
    pageHeading: 'You vs VueMonster',
    yourHealth: 100,
    monsterHealth: 100,
    yourHit: 0,
    monsterHit: 0,
    yourHeal: 0,
    monsterHeal: 0,
    yourActions: [],
    monsterActions: [],
    gameStart: false,
    specialCounter: 2
  },
  methods: {
    attack: function() {
      let yourHealthDeduct = Math.floor(Math.random() * 10) + 1;
      let monsterHealthDeduct = Math.floor(Math.random() * 15) + 1;
      this.checkHealth(-yourHealthDeduct, -monsterHealthDeduct);
    },
    heal: function() {
      let yourHealAmount = Math.floor(Math.random() * 5) + 1;
      let monsterHealAmount = Math.floor(Math.random() * 8) + 1;
      this.checkHealth(yourHealAmount, monsterHealAmount);
    },
    start: function() {
      this.reset();
    },
    special: function() {
      this.checkHealth(0, -20);
    },
    giveUp: function() {
      this.reset();
    },
    reset: function() {
      this.gameStart = !this.gameStart;
      this.yourHealth = 100;
      this.monsterHealth = 100;
      this.yourActions = [];
      this.monsterActions = [];
      this.specialCounter = 2;
    },
    checkHealth: function(yourHealthChange, monsterHealthChange) {
      if (yourHealthChange > 0) {
        if (this.yourHealth + yourHealthChange < 100) {
          this.yourHealth += yourHealthChange;
          this.yourActions.unshift(
            'Your health increased by ' + yourHealthChange
          );
        } else {
          this.yourHealth = 100;
          alert('Your health is at max...');
        }
      } else if (yourHealthChange < 0) {
        if (this.yourHealth + yourHealthChange > 0) {
          this.yourHealth += yourHealthChange;
          this.yourActions.unshift(
            'VueMonster took away ' + yourHealthChange + 'health.'
          );
        } else {
          this.yourHealth = 0;
          this.reset();
          alert('Sorry, you lost...');
        }
      }

      if (monsterHealthChange > 0) {
        if (this.monsterHealth + monsterHealthChange < 100) {
          this.monsterHealth += monsterHealthChange;
          this.monsterActions.unshift(
            'VueMonster health increased by ' + monsterHealthChange
          );
        } else {
          this.monsterHealth = 100;
          alert('VueMonster health is at max...');
        }
      } else if (monsterHealthChange < 0) {
        if (this.monsterHealth + monsterHealthChange > 0) {
          this.monsterHealth += monsterHealthChange;
          this.monsterActions.unshift(
            'VueMonster took away ' + monsterHealthChange + 'health.'
          );
        } else {
          this.monsterHealth = 0;
          this.reset();
          alert('You WON!!!');
        }
      }
    }
  }
});
