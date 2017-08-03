// First Words

  new Vue({
      el: '#app',
      data: {
        greeting: ' Hello World ! ',
        img: 'img/index2.png'
      }
    })

 // JeanKevin a.k.a Ecris du texte c'magic
          var vm = new Vue({
            el: '#JeanKevin',
            data: {
              message: ''
            },
            computed: {
              reversedMessage: function () {
                return this.message.split('').reverse().join('')
              }
            }
          })

 // Bouton transition
      new Vue({
        el: '#momgetthecamera',
        data: {
          show: false,
        }
      })

// La licorne magique !

var watchExampleVM = new Vue({
  el: '#MAGIC8BALL',
  data: {
    question: '',
    answer: 'J\'ai des pouvoirs magique,mais je peux pas deviner ta question !',
    isAnswered: false,
    answerImg: {
    backgroundImage: ''
  },
  },
  watch: {
    // whenever question changes, this function will run
    question: function (newQuestion) {
      this.answer = 'J\'attends...'
      this.isAnswered = false;
      this.answerImg.backgroundImage = '';
      this.getAnswer()
    }
  },
  methods: {
    getAnswer: _.debounce(
      function () {
        if (this.question == ''){
          this.answer = 'Pose moi une question ! \\(^-^)/';
          return;
        }
          else if (this.question.indexOf('?') === -1) {
          this.answer = 'Une question a un point d\'interrogation... :('
          return
        }
        this.answer = 'Je reflechis...'

        var vm = this
        axios.get('https://yesno.wtf/api')
          .then(function (response) {
            vm.answer = _.capitalize(response.data.answer);
            vm.answerImg.backgroundImage = 'url(' + response.data.image + ')';
          })
          .catch(function (error) {
            vm.answer = 'Mes pouvoirs ont disparus.. :( ' + error
          })
      },
      // This is the number of milliseconds we wait for the
      // user to stop typing.
      750
    )
  }
})
