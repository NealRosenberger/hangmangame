 
     
    // variable array of answer choices

      var words = ['Clash', 'Ramones', 'Bad Brains', 'Sex Pistols', 'Black Flag'];
      

//  Game rules and criteria guess, right, wrong, left, 
      var game = {
        guessed: [],
        left: 8,
        start: function() {
          this.complete = false;
          this.word = words[Math.floor(Math.random() * words.length)];
          this.$right = document.getElementById('right');
          this.$wrong = document.getElementById('wrong');
          this.$remain = document.getElementById('remain');
          this.$right.innerHTML = '_'.repeat(this.word.length);
        },


        // Guess a letter
        guess: function(letter) {
          if (this.left > 0 && this.complete != true) {
            if (this.word.indexOf(letter) > -1 || this.guessed.indexOf(letter) > -1) {
              this.right(letter);
            } else {
              this.wrong(letter);
            }
          }
        },

        //  is the letter correct?
        right: function(letter) {
          for(var i = 0; i < this.word.length; i++) {
            if (this.word[i] == letter) {
              var word = this.$right.innerHTML.split('');
              word[i] = letter;
              this.$right.innerHTML = word.join('');
            }
          }
          if (this.$right.innerHTML.indexOf('_') < 0) {
            alert('you win!');
            this.complete = true;
          }
        },

         //  is the letter wrong?
        wrong: function(letter) {
          this.guessed.push(letter);
          this.$wrong.innerHTML += ' ' + letter;
          this.left--;
          this.$remain.innerHTML = this.left;
          if (this.left < 1) {
            alert('you lose! '+ this.word);
            this.complete = true;
          }
        }
      };

      // play the game, start game
      game.start();
      document.onkeyup = function(event) {
        var letter = String.fromCharCode(event.keyCode).toLowerCase();
        game.guess(letter);
      };

// reset the game