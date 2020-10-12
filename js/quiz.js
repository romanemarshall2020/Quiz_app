$(() => {
// Questions array holds all the possible questions that can randomly be be accessed for the player to answer.
    const questions = ['whats 2 + 2', 'whats 3 + 3', 'what 37 + 46', 'whats 4 + 5']
    
    // const $next = $('.next-btn').on('click', nextQuestion())

 // Made function start game so that when the start button is clicked the first question is generated at random from the questions array
    const startGame = () => {
    // created a jquery variables randomeIndex and question
        let randomIndex = Math.floor(Math.random() * questions.length)
        console.log(randomIndex)
    // variable "question" holds the random index number from the question array
        let question = questions[randomIndex]
                    console.log(question)
        $('#question-container').html(`<h1> ${question} <h1>`)
            }
        // made start button functional, so when it  is clicked startGame function runs and presents the first question
        const $start = $('.start-btn').on('click', startGame)
        startGame()

 });

           



            






                
        // $start.addClass('hide')

    // }    
    // const $quit = $('<button>')


         
    //  })


    //  nextQuestion() 
//      const $next = $('.next-btn').on('click', nextQuestion())


    

            // })
