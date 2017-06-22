'use strict'

angular.module('inspinia')
.factory('Data',function(){
  return{message:'this is service data'}
})

//
.factory('Users',function(){
  console.log("b1 ",users);
  var users={};
  users.cast=
  [
    {
      "users": [
        {
          "user_Id": "594a289f9a23499a3b608c49  ",
          "name": "Marie Schultz",
          "modules": [
            {
              "mod_id": "594a289fed24abfbd4ce43d5",
              "mod_type": "debt",
              "initialAmt": 23458,
              "term": 14,
              "targetAmt": 9.69237315879994e+21
            }
          ],
          "preferences": [
            {
              "pref_Id": "594a289f67ca5346e1fe6bd3",
              "risk_Lvl": "low",
              "prod_pref": "prod2"
            }
          ]
        }
      ]
}];

  console.log("b2 ",users);
  return users;

});
