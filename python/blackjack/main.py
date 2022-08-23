import random
import os
from art import logo


def deal_card():
    cards = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10]
    card = random.choice(cards)
    return card


def calculate_score(cards):
    if sum(cards) == 21 and len(cards) == 2:
        return 0

    if 11 in cards and sum(cards) > 21:
        cards.remove(11)
        cards.append(1)
    return sum(cards)


def compare(player_score, dealer_score):
    if player_score > 21 and dealer_score > 21:
        return "over 21, BUST!"
    if player_score == dealer_score:
        return "    ******* Draw *******    "
    elif dealer_score == 0:
        return "Lose, Dealer has Blackjack"
    elif player_score == 0:
        return "Yo~~Blackjack!!!!!"
    elif dealer_score > 21:
        return "Dealer BUST!, you won"
    elif player_score > 21:
        return "BUST!, you lose"
    elif player_score > dealer_score:
        return "You WON!"
    else:
        return "You Lose..."


def play_game():

    print(logo)

    player_cards = []
    dealer_cards = []
    is_game_over = False

    for _ in range(2):
        player_cards.append(deal_card())
        dealer_cards.append(deal_card())

    while not is_game_over:
        player_score = calculate_score(player_cards)
        dealer_score = calculate_score(dealer_cards)
        print(f"computer's first card {dealer_cards[0]}")
        print(f"Your cards {player_cards}, score: {player_score}")

        if player_score == 0 or dealer_score == 0 or player_score > 21:
            is_game_over = True
        else:
            player_should_deal = (
                input(" press Enter to take a card, type 'n' to pass: ") or "y"
            )
            if player_should_deal == "y":
                player_cards.append(deal_card())
            else:
                is_game_over = True

    while dealer_score != 0 and dealer_score < 17:
        dealer_cards.append(deal_card())
        dealer_score = calculate_score(dealer_cards)

    print(f"          Dealer final hand: {dealer_cards} , final score: {dealer_score}")
    print(f"          Player final hand: {player_cards} , final score: {player_score}")
    print(compare(player_score, dealer_score))


while input("Do you want to play a game of Blackjack? Type 'y' or 'n': ") == "y":
    os.system("cls")
    play_game()
