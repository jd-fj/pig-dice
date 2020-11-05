//Business Logic 
function Player (name, roll, roundScore, overallScore) {
  this.name = name;
  this.roll = 0;
  this.roundScore = 0;
  this.overallScore = 0;
}

Player.prototype.roll = function() {
  let dice = Math.floor((Math.random() * 7));
  this.roll = this.roll + dice;
  // if (this.roll === 1) {
  //   this.roundScore = 0;
  // } else {
  //   this.roundScore += this.roll;
  // }
}

// this one works
// function rollDice () {
//   let dice = Math.floor((Math.random() * 7));
//   return dice;}

//User Interface Logic
$(document).ready(function() {
  //function for name submission
  $("form#playerInfo").submit(function(event) {
    event.preventDefault();
    
    const player1Name = $("input#player1Name").val();
    const player2Name = $("input#player2Name").val();
    let player1 = new Player(player1Name);
    let player2 = new Player(player2Name);
    $(".player1Output").text(player1Name);
    $(".player2Output").text(player2Name);
    $("#playerInfo").hide();
    console.log(player1, player2)

  });
  $("#roll").click(function(event){
    event.preventDefault();
    console.log(player1.roll)
  })

});



// 2 When roll is clicked it will generate a random number between 1-6.
// | Generate roll number | Player clicks roll | a random number between 1-6 is generated |

// 3. If a 1 is rolled, player score is set to 0
// | A 1 is rolled | roll = 1 | overallScore = 0 |

// 4. If a 1 is rolled, player turn is over
// | A 1 is rolled | roll = 1 | End Player Turn |

// 5. If number != 1, number is added to roundScore
// | a number other than 1 is rolled | roll = 3 | 3 is added to roundScore |

// 6. If play clicks "hold" their turn is over
// | Player clicks "hold" | Player clicks "hold" | end player turn |

// 7. If player clicks "hold" roundScore is added to overallScore.
// | Player clicks "hold" | Player clicks "hold" | roundScore is added to players overallScore. |

// 8. Once a players overallScore reaches scoreLimit, game is over.
// | Player overallScore reaches scoreLimit | Player overallScore reaches scoreLimit | Game is Over |