def game():

    turn = 'X'
    count = 0
    
    for i in range(10):
            printBoard(theBoard)
            print("It's your turn," + turn + ".Move to which place?")

            move = input()        

            if theBoard[move] == ' ':
                theBoard[move] = turn
                count += 1
            else:
                print("That place is already filled.\nMove to which place?")
                continue