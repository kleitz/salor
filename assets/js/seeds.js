var SEEDS_PRESENT = true;

var DATABASE = {"orders":[{"items":[],"discounts":[],"paid":false,"rebate":0}],"i18n":{"Finish":{"en-US":"Finish","gn":"Abschliessen"},"Complete Order":{"en-US":"Complete Order","gn":"Verkaufe abschliessen"},"Change":{"en-US":"Change","gn":"Wechselgeld"},"Search Results":{"en-US":"Search Results","gn":"Suchergebnisse"},"decimal_separator":{"en-US":".","gn":",","fr":",","pl":",","es":","},"currency_unit":{"en-US":"$","en-GB":"£","gn":"€","fr":"€","pl":"€","es":"€"},"Login":{"en-US":"Login","gn":"Login"},"Logout":{"en-US":"Logout","gn":"Ausloggen"},"OK":{"en-US":"OK","gn":"OK"}},"discounts":{"1":{"n":"Test Discount 2","a":50,"id":1,"ai":1,"tb":0,"st":"201207060000","et":"201207250000","as":"A0"},"2":{"n":"Happy Hour","a":10,"id":2,"ai":0,"tb":1,"st":1600,"et":1700}},"payment_methods":[{"id":1,"n":"Cash000"},{"id":2,"n":"Card001"},{"id":3,"n":"Other002"}],"articles":{"A0":{"id":1,"name":"Article0000","position":null,"price":16,"quantity_sold":0,"sku":"A0","ts":[3]},"A1":{"id":2,"name":"Article0001","position":null,"price":16,"quantity_sold":0,"sku":"A1","ts":[1]},"A2":{"id":3,"name":"Article0010","position":null,"price":28,"quantity_sold":0,"sku":"A2","ts":[2]},"A3":{"id":4,"name":"Article0011","position":null,"price":17,"quantity_sold":0,"sku":"A3","ts":[2]},"A4":{"id":5,"name":"Article0020","position":null,"price":26,"quantity_sold":0,"sku":"A4","ts":[1]},"A5":{"id":6,"name":"Article0021","position":null,"price":18,"quantity_sold":0,"sku":"A5","ts":[1]},"A6":{"id":7,"name":"Article0030","position":null,"price":28,"quantity_sold":0,"sku":"A6","ts":[2]},"A7":{"id":8,"name":"Article0031","position":null,"price":15,"quantity_sold":0,"sku":"A7","ts":[1]},"A8":{"id":9,"name":"Article0040","position":null,"price":26,"quantity_sold":0,"sku":"A8","ts":[3]},"A9":{"id":10,"name":"Article0041","position":null,"price":15,"quantity_sold":0,"sku":"A9","ts":[2]},"A10":{"id":11,"name":"Article0050","position":null,"price":28,"quantity_sold":0,"sku":"A10","ts":[3]},"A11":{"id":12,"name":"Article0051","position":null,"price":15,"quantity_sold":0,"sku":"A11","ts":[1]}},"users":{"1":{"id":1,"l":"Superuser 0 0 0","p":"000","r":1,"c":"#80477d","st":-1,"k":1,"a":null},"2":{"id":2,"l":"Owner 0 0 1","p":"001","r":2,"c":"#ed8b00","st":-1,"k":1,"a":null},"3":{"id":3,"l":"Host 0 0 2","p":"002","r":3,"c":"#cd0052","st":-1,"k":1,"a":null},"4":{"id":4,"l":"Chief Waiter 0 0 3","p":"003","r":4,"c":"#75b10d","st":-1,"k":1,"a":null},"5":{"id":5,"l":"Waiter 0 0 4","p":"004","r":5,"c":"#136880","st":-1,"k":1,"a":null},"6":{"id":6,"l":"Auxiliary Waiter 0 0 5","p":"005","r":6,"c":"#27343b","st":-1,"k":1,"a":null},"7":{"id":7,"l":"Restaurant 0 0 6","p":"006","r":7,"c":"#BBBBBB","st":-1,"k":1,"a":null}},"taxes":[{"c":"#e3bde1","i":1,"l":"A","n":"20 0 0","p":null},{"c":"#f3d5ab","i":2,"l":"B","n":"10 0 0","p":null},{"c":"#ffafcf","i":3,"l":"C","n":"0 0 0","p":null},{"c":null,"i":4,"l":"D","n":"Local Tax 1 1","p":null}],"categories":{"1":{"a":["A0","A1"],"c":"#80477d","i":"starter","id":1,"n":"Starters","p":null,"vpid":1},"2":{"a":["A2","A3"],"c":"#27343b","i":"maindish","id":2,"n":"Main Dish","p":null,"vpid":1},"3":{"a":["A4","A5"],"c":"#80477d","i":"dessert","id":3,"n":"Desserts","p":null,"vpid":1},"4":{"a":["A6","A7"],"c":"#75b10d","i":"rosewineglass","id":4,"n":"Rose Wine","p":null,"vpid":1},"5":{"a":["A8","A9"],"c":"#ed8b00","i":"redwineglass","id":5,"n":"Red Wine","p":null,"vpid":1},"6":{"a":["A10","A11"],"c":"#27343b","i":"digestif","id":6,"n":"Digestiv","p":null,"vpid":1}},"drawer":null};