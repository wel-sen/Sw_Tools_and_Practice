board_keys = []

for key in theBoard:
    board_keys.append(key)
    
restart = input("Do want to play Again?(y/n)")

    if restart == "y" or restart == "Y":  
        for key in board_keys:
            theBoard[key] = " "

        game()    