import pymongo
from bson import ObjectId
from datetime import date
import random
import sys


def connectDB():
    myclient = pymongo.MongoClient(
        "mongodb+srv://gimhan:sep%40123@cluster0.99pidpm.mongodb.net/?retryWrites=true&w=majority")
    mydb = myclient["test"]
    return mydb


def getDetails(dietPlan_Id):
    dbDietPlans = db["dietplans"]
    query1 = {"_id": ObjectId("6335d3887e7aaea82d5e3654")}
    doc1 = dbDietPlans.find({"_id": ObjectId(dietPlan_Id)})
    for x in doc1:
        print(x)
        return x


def calculateBMR(W, H, A, G):
    if G == 'male':
        return 13.397 * W + 4.799 * H - 5.677 * A + 88.362
    if G == 'female':
        return 9.247 * W + 3.098 * H - 4.330 * A + 447.593


def calculateAge(dob):
    today = date.today()
    age = today.year - dob.year - ((today.month, today.day) < (dob.month, dob.day))
    return age


def calculateForActivity(activity, cal):
    if activity == "verylight":
        cal = cal * 1.3
    elif activity == "light":
        cal = cal * 1.55
    elif activity == "moderate":
        cal = cal * 1.65
    elif activity == "heavy":
        cal = cal * 1.80
    elif activity == "veryheavy":
        cal = cal * 2.00

    return cal


def calorieIntake(intention, cal):
    if intention == "loose":
        cal = cal - 500
    elif intention == "maintain":
        cal = cal
    elif intention == "gain":
        cal = cal + 500

    return cal


def calculateCalory():
    dob = data["dob"]
    gender = data["gender"]
    activity = data["activity"]
    intention = data["intention"]
    height = data["height"]
    weight = data["weight"]
    age = calculateAge(dob)
    cal1 = calculateBMR(weight, height, age, gender)
    cal2 = calculateForActivity(activity, cal1)
    cal3 = calorieIntake(intention, cal2)
    calFinal = round(cal3, 2)
    return calFinal


def getFoods():
    dbFood = db["foods"]

    Fruits_Vegetables = []
    Starchy_food = []
    Proteins = []
    Dairy_Fats = []
    Sugar = []

    for x in dbFood.find():
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

    random.shuffle(Fruits_Vegetables)
    random.shuffle(Starchy_food)
    random.shuffle(Proteins)
    random.shuffle(Dairy_Fats)
    random.shuffle(Sugar)

    return {'Fruits and Vegetables': Fruits_Vegetables, 'Starchy food': Starchy_food, 'Proteins': Proteins,
            'Dairy and Fats': Dairy_Fats, 'Sugar': Sugar}


def shuffleFoods():
    for key in foods.keys():
        temp = []
        for x in foods[key]:
            if type(x) == list:
                temp += x
        if temp:
            foods[key] = temp
        random.shuffle(foods[key])


def divide_chunks(f):
    n = (len(f) + 1) // 3

    return [f[:n], f[n:2 * n], f[2 * n:]]


def divideFoods():
    for x in foods:
        if len(foods[x]) > 2:
            foods[x] = divide_chunks(foods[x])


def selectFoodPyramid():
    if data['bloodpressure'] or (data['bloodpressure'] and data['diabetics']):
        fp = foodpyramid_1
        Id = 1
    elif data['diabetics']:
        fp = foodpyramid_2
        Id = 2
    elif data['cholesterol']:
        fp = foodpyramid_3
        Id = 3
    elif (data['bloodpressure'] and data['cholesterol']) or (data['diabetics'] and data['cholesterol']) or (
            data['bloodpressure'] and data['diabetics'] and data['cholesterol']):
        fp = foodpyramid_4
        Id = 4
    else:
        fp = foodpyramid_0
        Id = 0

    return fp, Id


def getBreakfastPlan():
    br = []
    b = calories * meals["breakfast"]
    for x in foodpyramid.keys():
        if len(foods[x]) == 3:
            f = random.choice(foods[x][0])
        else:
            f = random.choice(foods[x])
        v = b * foodpyramid[x]
        c = round(v / f['cal_per_gram'], -1)
        br.append([f['_id'], c, round(v)])

    dietPlan['breakfast'] = br + getFoodforMedicalConditions(b)


def getLunchPlan():
    ln = []
    b = calories * meals["lunch"]
    for x in foodpyramid.keys():
        if len(foods[x]) == 3:
            f = random.choice(foods[x][0])
        else:
            f = random.choice(foods[x])
        v = b * foodpyramid[x]
        c = round(v / f['cal_per_gram'], -1)
        ln.append([f['_id'], c, round(v)])

    dietPlan['lunch'] = ln + getFoodforMedicalConditions(b)


def getDinnerPlan():
    dn = []
    b = calories * meals["dinner"]
    for x in foodpyramid.keys():
        if len(foods[x]) == 3:
            f = random.choice(foods[x][0])
        else:
            f = random.choice(foods[x])
        v = b * foodpyramid[x]
        c = round(v / f['cal_per_gram'], -1)
        dn.append([f['_id'], c, round(v)])

    dietPlan['dinner'] = dn + getFoodforMedicalConditions(b)


def getFoodforMedicalConditions(b):
    if Id == 1:
        medfoods = list(filter(
            lambda x: x['bloodpressure'] == data['bloodpressure'] and x['diabetics'] == data['diabetics'] and x[
                'cholesterol'] == data['cholesterol'], foods['Dairy and Fats'] + foods['Sugar']))
        if len(medfoods) > 0:
            f = random.choice(medfoods)
            v = b * (foodpyramid['Dairy and Fats'] + foodpyramid['Sugar'])
            c = round(v / f['cal_per_gram'], -1)
            return [[f['_id'], c, round(v)]]

    if Id == 2:
        medfoods = list(filter(
            lambda x: x['bloodpressure'] == data['bloodpressure'] and x['diabetics'] == data['diabetics'] and x[
                'cholesterol'] == data['cholesterol'], foods['Sugar']))
        if len(medfoods) > 0:
            f = random.choice(medfoods)
            v = b * foodpyramid['Sugar']
            c = round(v / f['cal_per_gram'], -1)
            return [[f['_id'], c, round(v)]]

    if Id == 3:
        medfoods = list(filter(
            lambda x: x['bloodpressure'] == data['bloodpressure'] and x['diabetics'] == data['diabetics'] and x[
                'cholesterol'] == data['cholesterol'], foods['Dairy and Fats'] + foods['Proteins']))
        if len(medfoods) > 1:
            f1 = medfoods.pop(medfoods.index(random.choice(medfoods)))
            f2 = medfoods.pop(medfoods.index(random.choice(medfoods)))
            v1 = b * foodpyramid['Dairy and Fats']
            c1 = round(v1 / f1['cal_per_gram'], -1)
            v2 = b * foodpyramid['Proteins']
            c2 = round(v2 / f2['cal_per_gram'], -1)
            return [[f1['_id'], c1, round(v1)], [f2['_id'], c2, round(v2)]]
    if Id == 4:
        medfoods = list(filter(
            lambda x: x['bloodpressure'] == data['bloodpressure'] and x['diabetics'] == data['diabetics'] and x[
                'cholesterol'] == data['cholesterol'], foods['Proteins'] + foods['Dairy and Fats'] + foods['Sugar']))
        if len(medfoods) > 1:
            f1 = medfoods.pop(medfoods.index(random.choice(medfoods)))
            f2 = medfoods.pop(medfoods.index(random.choice(medfoods)))
            v1 = b * (foodpyramid['Dairy and Fats'] + foodpyramid['Sugar'])
            c1 = round(v1 / f1['cal_per_gram'], -1)
            v2 = b * foodpyramid['Proteins']
            c2 = round(v2 / f2['cal_per_gram'], -1)
            return [[f1['_id'], c1, round(v1)], [f2['_id'], c2, round(v2)]]
    return []


global db, data, foods, foodpyramid, meals, dietPlan, Id

foodpyramid_0 = {
    "Fruits and Vegetables": 0.35,
    "Starchy food": 0.30,
    "Proteins": 0.20,
    "Dairy and Fats": 0.10,
    "Sugar": 0.05,
}

foodpyramid_1 = {
    "Fruits and Vegetables": 0.35,
    "Starchy food": 0.30,
    "Proteins": 0.20,
}

foodpyramid_2 = {
    "Fruits and Vegetables": 0.35,
    "Starchy food": 0.30,
    "Proteins": 0.20,
    "Dairy and Fats": 0.10,
}

foodpyramid_3 = {
    "Fruits and Vegetables": 0.35,
    "Starchy food": 0.30,
    "Sugar": 0.05,
}

foodpyramid_4 = {
    "Fruits and Vegetables": 0.35,
    "Starchy food": 0.30,
}

meals = {
    "breakfast": 0.30,
    "lunch": 0.40,
    "dinner": 0.30,
}

db = connectDB()
data = getDetails()
calories = calculateCalory()
foods = getFoods()
foodpyramid, Id = selectFoodPyramid()

dietPlan = {'dietPlan_Id': data['_id'], 'breakfast': [], 'lunch': [], 'dinner': []}

diet = db["diet"]
for i in range(5):
    shuffleFoods()
    divideFoods()
    getBreakfastPlan()
    getLunchPlan()
    getDinnerPlan()

    print(dietPlan)

    x = diet.insert_one(dietPlan.copy())
    print(x)

