print('                                           ')
print('----------------Exercise 1-----------------')
# Exercise 1: List and Indexing
#
# Create a list named students containing at least three student names (strings).
# Assign the second student’s name to a variable named first_student.
# Assign the last student’s name to a variable named last_student.

def manage_students():
    students = ['Polina Stepanova', 'Zoe Dechanel', 'Dua Lipa']
    first_student = students[1]
    print('First student is', first_student)
    last_student = students[-1]
    print('Last student is', last_student)
    return students

# Call the function and print the result
print('Exercise 1:', manage_students())


print('                                           ')
print('----------------Exercise 2-----------------')
# Exercise 2: Loop and String Concatenation
#
# Create a tuple named foods containing the same number of foods (strings) 
# as there are names in the students list.
# Create a variable named meal and assign an empty string to it.
# Use a for loop to iterate over the strings in foods and append each string to meal.

foods = ('pumpkin pie', 'apple', 'tacos')

def combine_foods():
    meal = ''
    for food in foods:
        meal += food
        meal += ' '
    return meal

# Call the function and print the result
print('Exercise 2:', combine_foods())


print('                                           ')
print('----------------Exercise 3-----------------')
# Exercise 3: Slicing Tuples
#
# Using the slice operator, assign a new tuple containing only the 
# last two food strings in the foods to a variable named last_two_foods.

def slice_foods():
    last_two_foods = foods[slice(1, 3)]
    return last_two_foods

# Call the function and print the result
print('Exercise 3:', slice_foods())


print('                                           ')
print('----------------Exercise 4-----------------')
# Exercise 4: Dictionaries and String Formatting
#
# Create a dictionary named home_town containing the keys of city, state, and population.
# Using the home_town dictionary, assign to a variable named home_town_message a 
# string with this format: “I was born in <city>, <state> - population of <population>”

home_town = {
        'city': 'Moscow',
        'country': 'Russia',
        'population': 20000000
    }

def hometown_info():

    home_town_message = f'''I was born in {home_town['city']}, {home_town['country']} - population of {home_town['population']}'''

    return home_town_message

# Call the function and print the result
print('Exercise 4:', hometown_info())


print('                                           ')
print('----------------Exercise 5-----------------')
# Exercise 5: Iterating Over Dictionary Items
#
# Define an empty list named home_town_items.
# Use a for loop to iterate over the key: value pairs in the home_town 
# dictionary and append a string with the following format to home_town_items: 
# "<key> = <value>"

def list_home_town_items():
    home_town_items = []
    for key, value in home_town.items():
        string = f"{key} = {value}"
        home_town_items.extend([string])
    return home_town_items


# Call the function and print the result
print('Exercise 5:', list_home_town_items())

print('                                           ')