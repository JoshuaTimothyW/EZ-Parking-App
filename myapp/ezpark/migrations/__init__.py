from ezpark.models import Mall
import random 

if Mall.objects.count() == 0:    
    list_mall = ["Central Park","Taman Anggrek","Grand Indonesia","Emporium Pluit","Pluit Village","Pluit Junction","Bay Walk","Neo Soho"]
    list_floor = [random.randint(2,3) for x in list_mall]
    list_slot = [ random.randint(3,4)*10 for mall in list_mall]

    for i in range(len(list_mall)):
        for j in range(list_floor[i]):
            new_mall = Mall(
                name=list_mall[i],
                floor=list_floor[i],
                slot=list_slot[i],
            )

            new_mall.save()


print("this is migration init")