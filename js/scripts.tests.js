1. Create new player object for names entered
| Create Players | Taylor is entered | new Player named Taylor is created |

2 When roll is clicked it will generate a random number between 1-6.
| Generate roll number | Player clicks roll | a random number between 1-6 is generated |

3. If a 1 is rolled, player score is set to 0
| A 1 is rolled | roll = 1 | overallScore = 0 |

4. If a 1 is rolled, player turn is over
| A 1 is rolled | roll = 1 | End Player Turn |

5. If number != 1, number is added to roundScore
| a number other than 1 is rolled | roll = 3 | 3 is added to roundScore |

6. If play clicks "hold" their turn is over
| Player clicks "hold" | Player clicks "hold" | end player turn |

7. If player clicks "hold" roundScore is added to overallScore.
| Player clicks "hold" | Player clicks "hold" | roundScore is added to players overallScore. |

8. Once a players overallScore reaches scoreLimit, game is over.
| Player overallScore reaches scoreLimit | Player overallScore reaches scoreLimit | Game is Over |



// variables-------
// round
// roundScore
// overallScore
// roll
// hold
// Player1
// Player2
// scoreLimit
