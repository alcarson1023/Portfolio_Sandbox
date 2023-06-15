def return_array(selections):
    return {'result': selections}

def sort_array(selections):
    sorted_data = sorted(selections)
    return {'result': sorted_data}

def method_error(method, selections):
    return {'result': f'${method} is not a recognized function.'}