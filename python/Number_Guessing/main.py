from random import randint
from art import logo


EASY_LEVEL_TURNS = 10
HARD_LEVEL_TURNS = 5


def game():
    print(logo)

    def check_answer(guess, answer, turns):
        if guess > answer:
            print("too high")
            return turns - 1
        elif guess < answer:
            print("too low")
            return turns - 1
        else:
            print(f"Yes! you got the answer {answer}")

    def set_difficulty():
        level = input("Choose a difficulty. Type 'easy' or 'hard': ")
        if level == "easy":
            return EASY_LEVEL_TURNS
        if level == "hard":
            return HARD_LEVEL_TURNS
        print(f"You have {turns} attempts remaining to guess the number.")

    print("Welcome to the Number Guessing Game!")
    print("I'm thinking of a number between 1 and 100.")
    answer = randint(1, 100)
    print(f"The correct answer is {answer}")

    turns = set_difficulty()

    guess = 0
    while guess != answer:
        print(f"You have {turns} attempts remaining to guess the number.")

        guess = int(input("Make a guess: "))

        turns = check_answer(guess, answer, turns)
        if turns == 0:
            print("You lose the game")
            return
        elif guess != answer:
            print("guess again")


game()
