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
      let vm = this;
      let yourHealthDeduct = Math.floor(Math.random() * 10) + 1;
      let monsterHealthDeduct = Math.floor(Math.random() * 15) + 1;
      if (vm.yourHealth - yourHealthDeduct >= 0) {
        vm.monsterHit = yourHealthDeduct;
        vm.yourHealth -= yourHealthDeduct;
        vm.monsterActions.unshift(
          'Monster attacked you for ' + yourHealthDeduct
        );
      } else {
        vm.monsterActions.unshift('You lost and all your health is GONE!!!');
        vm.yourHealth = 0;
      }

      if (vm.monsterHealth - monsterHealthDeduct >= 0) {
        vm.yourHit = monsterHealthDeduct;
        vm.monsterHealth -= monsterHealthDeduct;
        vm.yourActions.unshift(
          'You attacked VueMonster for ' + monsterHealthDeduct
        );
      } else {
        vm.yourActions.unshift("You WON!!! All VueMonster's health is GONE!!!");
        vm.monsterHealth = 0;
      }
    },
    heal: function() {
      let vm = this;
      let yourHealAmount = Math.floor(Math.random() * 5) + 1;
      let monsterHealAmount = Math.floor(Math.random() * 8) + 1;
      if (vm.yourHealth + yourHealAmount <= 100) {
        vm.yourHealth += yourHealAmount;
        vm.yourActions.unshift(
          'You were healed by ' + yourHealAmount + ' health!'
        );
      } else {
        vm.yourActions.unshift('You are at MAX health!!!');
        vm.yourHealth = 100;
      }
      if (vm.monsterHealth + monsterHealAmount <= 100) {
        vm.monsterHealth += monsterHealAmount;
        vm.monsterActions.unshift(
          'VueMonster was healed by ' + monsterHealAmount + ' health!'
        );
      } else {
        vm.monsterActions.unshift('VueMonster is at MAX health!!!');
        vm.monsterHealth = 100;
      }
    },
    start: function() {
      let vm = this;
      vm.yourHealth = 100;
      vm.monsterHealth = 100;
      vm.yourActions = [];
      vm.monsterActions = [];
      vm.gameStart = !vm.gameStart;
      vm.specialCounter = 2;
    },
    special: function() {
      let vm = this;
      if (vm.specialCounter > 0) {
        if (vm.monsterHealth - 20 >= 0) {
          vm.monsterHealth -= 20;
          vm.yourActions.unshift('Massive 20 point hit to monster!');
          vm.specialCounter -= 1;
        } else {
          vm.monsterHealth = 0;
          vm.yourActions.unshift('Monster has been destroyed. Health is 0!!!');
        }
      }
    },
    giveUp: function() {
      let vm = this;
      vm.gameStart = !vm.gameStart;
    }
  }
});
