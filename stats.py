import sys


def getFoods(infoods):
    # dbFood = db["foods"]

    Fruits_Vegetables = []
    Starchy_food = []
    Proteins = []
    Dairy_Fats = []
    Sugar = []

    for x in infoods:
        if x["category"] == 'Fruits and Vegetables':
            Fruits_Vegetables.append(x)
        elif x["category"] == 'Starchy food':
            Starchy_food.append(x)
        elif x["category"] == 'Proteins':
            Proteins.append(x)
        elif x["category"] == 'Dairy and Fats':
            Dairy_Fats.append(x)
        elif x["category"] == 'Sugar':
            Sugar.append(x)


    return {'Fruits and Vegetables': Fruits_Vegetables, 'Starchy food': Starchy_food, 'Proteins': Proteins,
            'Dairy and Fats': Dairy_Fats, 'Sugar': Sugar}


raw_plans = sys.argv[1].split('~')
raw_foods = sys.argv[2].split('~')

foods = getFoods([{'_id': i[0], 'cal_per_gram':float(i[1]), 'diabetics':True if i[2] == 'true' else False, 'bloodpressure':True if i[3] == 'true' else False,
          'cholesterol':True if i[4] == 'true' else False, 'category':i[5], 'image':i[6], 'name':i[7]} for i in [j.split(',') for j in raw_foods]])