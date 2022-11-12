import sys

def getmaxfoods():
    c = []
    mx = sortedFoods[0][1]
    if mx < 1:
        print('No Maximum Occuring Food')
    else:
        for x in range(len(sortedFoods)):
            if sortedFoods[x][1] == mx:
                c.append(sortedFoods[x][0])
            else:
                break

        finals = []
        for f in foods:
            if f[0] in c and len(c) > 0:
                finals.append(f)
                c.remove(f[0])
            elif len(c) <= 0:
                break
        print(finals)


def countFood():
    Counts = {}
    allfoods = [k[0] for k in foods]
    uniquefoods = list(set(allfoods))
    for u in uniquefoods:
        Counts[u] = allfoods.count(u)

    return sorted(Counts.items(), key=lambda x: x[1], reverse=True)


def getFoods():
    br = []
    for x in range(no_of_plans):
        br += dietplans[x]['breakfast']
    ln = []
    for x in range(no_of_plans):
        ln += dietplans[x]['lunch']
    dn = []
    for x in range(no_of_plans):
        dn += dietplans[x]['dinner']

    return br + ln + dn

if sys.argv[1] == "0101":

    global dietplans, foods, sortedFoods

    raw_plans = sys.argv[2].split('~')
    no_of_plans = len(raw_plans)
    dietplans = {}

    for i in range(no_of_plans):
        temp = {}
        s = [i.split('^') for i in raw_plans[i].split('|')]
        temp['breakfast'] = [j.split(',') for j in s[0]]
        temp['lunch'] = [j.split(',') for j in s[1]]
        temp['dinner'] = [j.split(',') for j in s[2]]

        dietplans[i] = temp


    foods = getFoods()
    sortedFoods = countFood()
    getmaxfoods()
