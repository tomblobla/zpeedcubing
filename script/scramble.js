var move1 = ['R', 'U', 'F', 'L', 'D', 'B'];
var move2 = ['', "'", '2'];

function scrambleCreate(cubeID){
    var scramble = "";

    switch(cubeID){
        case 0:
            {
                var scramble_length = 10;

                var lastmove = randomInt(2);
                scramble = move1[lastmove] + move2[randomInt(2)];
                
                for (i = 1; i < scramble_length; i++){
                    while (true){
                        var ranm = randomInt(2);
                        if (lastmove != ranm){break;}
                    }
                    
                    lastmove = ranm;
                    scramble = scramble + " " + move1[lastmove] + move2[randomInt(2)];
                }

                break;
            }
        case 1:
        case 2:
        case 3:
            {
                var scramble_length = 25;

                var lastmove = randomInt(5);

                scramble = move1[lastmove] + move2[randomInt(2)];

                for (i = 1; i < scramble_length; i++){
                    while (true){
                        var ranm = randomInt(5);
                        if (lastmove == ranm){
                            continue;
                        }
                        else if (ranm == lastmove + 3 || ranm + 3 == lastmove)
                        {
                            scramble = scramble + " " + move1[ranm] + move2[randomInt(2)];

                            while (i < 24){
                                var ranm2 = randomInt(5);
                                if (lastmove != ranm2 && ranm2 != ranm) {
                                    i++;
                                    lastmove = ranm2;
                                    scramble = scramble + " " + move1[lastmove] + move2[randomInt(2)];
                                    break;
                                }
                            }
                            break;
                        }
                        lastmove = ranm;
                        scramble = scramble + " " + move1[lastmove] + move2[randomInt(2)];
                        break;
                    }
                }
                break;
            }
    }

    return scramble;
}