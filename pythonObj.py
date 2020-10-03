customer_data = {
    'Joe': {
        'visits': 1
    },
    'Carol': {
        'visits': 2
    },
    'Howard': {
        'visits': 3
    },
    'Carrie': {
        'visits': 4
    }
}
def greet_customer(customer_data, name):
    if name not in customer_data:
        return ('Welcome! Is this your first time?')
    else:
        if customer_data[name]['visits'] == 1:
            return("Welcome back, {0}! We're glad you liked us the first time!".format(name))
        if customer_data[name]['visits'] > 1:
            return("Welcome back, {0}! It's good to see a regular customer".format(name))

print(greet_customer(customer_data, 'Torrence'))
