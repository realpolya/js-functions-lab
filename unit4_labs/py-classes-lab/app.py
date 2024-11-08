"""
As a user (AAU), I want to see a welcome message at the start of a game.

AAU, before being prompted for a move, I want to see the board printed 
in the console to know what moves have been made.

AAU, at the beginning of each turn, told whose turn it is: It’s player X’s turn!

AAU, I should be prompted to enter a move and be provided an example of valid 
input ('Enter a valid move (example: A1)').

AAU, I want to be able to enter my move’s column letter in upper or lower 
case (a/A, b/B, or c/C) to make it easier to enter my move.

AAU, if I enter a move in an invalid format or try to occupy a cell already 
taken, I want to see a message chastising me and be re-prompted.

AAU, after entering a move, I should once again be presented with the updated 
game board, notified of the current turn, and asked to enter a move for the 
other player. This process should continue until there is a winner or a tie

AAU, I should see a message at the end of the game indicating the winner or 
stating that the game ended in a tie.
"""

bs = "\033[34m"
bf = "\033[0m"

gs = "\033[32m"
gf = "\033[0m"

class Game():
    turns = ['X', 'O']

    def __init__(self):
        self.board = self.build_board()
        self.turn = self.__class__.turns[0]
        self.tie = False
        self.winner = False
    
    def build_board(self):
        letters = ['a', 'b', 'c']
        board = {}
        for n in range(3):
            for m in range(3):
                key = letters[n] + str(m+1)
                board[key] = ' '
        b = list(board.items()) # list of tuples
        return board
    
    def __str__(self):
        return f"The board is {self.board}"
    
    def change_turn(self):
        if self.turn == self.__class__.turns[0]:
            self.turn = self.__class__.turns[1]
            return print(f"Now it's the turn of {self.turn}")
        self.turn = self.__class__.turns[0]
        return print(f"Now it's the turn of {self.turn}")
    
    def make_move(self):
        move = None
        available = False
        while move not in self.board.keys() or not available:
            move = input(f"{gs}Enter a valid move (example: A1): {gf}").lower()
            if move in self.board.keys():
                available = self.check_move(move)
                if not available:
                    print("The cell is already taken, choose another option")
        print(f"Move for {self.turn} is {move}")
        self.board[move] = self.turn
        return move

    def play(self):
        
        print(' ')
        print(f'{bs}--------------Welcome to Tic Tac Toe---------------{bf}')
        self.print_board()

        print(f"Now it's the turn of {self.turn}")

        while not (self.winner or self.tie): 
            move = self.make_move()
            self.print_board()
            winner = self.check_winner()
            if winner:
                self.set_winner(winner)
                self.print_winner()
            else:
                tie = self.check_tie()
                if tie:
                    self.set_tie()
                else:
                    self.change_turn()

    def print_winner(self):
        print(f"Player {self.winner} won!")
            
    def check_move(self, move):
        current = self.board[move]
        if current != " ":
            return False
        return True

    def check_winner(self):

        b = self.board
        winner = None

        # check for each turn
        for turn in self.__class__.turns:

            count = []
            for n in range(6):
                count.append(0)
                
            #TODO: add diagonal cases
            for key, val in b.items():
                if "a" in key and val == turn:
                    count[0] += 1
                if "b" in key and val == turn:
                    count[1] += 1
                if "c" in key and val == turn:
                    count[2] += 1
                
                if "1" in key and val == turn:
                    count[3] += 1
                if "2" in key and val == turn:
                    count[4] += 1
                if "3" in key and val == turn:
                    count[5] += 1
                
                if 3 in count or all(x == 1 for x in count):
                    print("Found winner")
                    winner = turn
                    break
            
            if winner:
                break

        return winner

    def set_winner(self, winner):
        self.winner = winner
    
    def set_tie(self):
        self.tie = True
    
    def check_tie(self):
        # if no empty cells and no winner
        b = self.board
        full = True

        for key, val in b.items():
            if val == ' ':
                full = False
                break
        
        if full and not self.winner:
            print("Game over. It is a tie!")
            return True
        else:
            return False

    def print_board(self):

        b = self.board

        print(f'''
           |  {gs}A{gf}  |  {gs}B{gf}  |  {gs}C{gf}  |
        -----------------------
        {bs}1{bf}  |  {b["a1"]}  |  {b["b1"]}  |  {b["c1"]}  |
        -----------------------
        {bs}2{bf}  |  {b["a2"]}  |  {b["b2"]}  |  {b["c2"]}  |
        -----------------------
        {bs}3{bf}  |  {b["a3"]}  |  {b["b3"]}  |  {b["c3"]}  |
        -----------------------
        ''')

first_game = Game()
# print(first_game)
first_game.play()
