//// [incrementOperatorWithEnumTypeInvalidOperations.ts]
// ++ operator on enum type

enum ENUM { };
enum ENUM1 { 1, 2, "" };

// enum type var
var ResultIsNumber1 = ++ENUM;
var ResultIsNumber2 = ++ENUM1;

var ResultIsNumber3 = ENUM++;
var ResultIsNumber4 = ENUM1++;

// enum type expressions
var ResultIsNumber5 = ++(ENUM[1] + ENUM[2]);
var ResultIsNumber6 = (ENUM[1] + ENUM[2])++;

// miss assignment operator
++ENUM;
++ENUM1;

ENUM++;
ENUM1++;

//// [incrementOperatorWithEnumTypeInvalidOperations.js]
var ENUM;
(function (ENUM) {
})(ENUM || (ENUM = {}));
;
var ENUM1;
(function (ENUM1) {
    ENUM1[ENUM1["1"] = 0] = "1";
    ENUM1[ENUM1["2"] = 1] = "2";
    ENUM1[ENUM1[""] = 2] = "";
})(ENUM1 || (ENUM1 = {}));
;
var ResultIsNumber1 = ++ENUM;
var ResultIsNumber2 = ++ENUM1;
var ResultIsNumber3 = ENUM++;
var ResultIsNumber4 = ENUM1++;
var ResultIsNumber5 = ++(ENUM[1] + ENUM[2]);
var ResultIsNumber6 = (ENUM[1] + ENUM[2])++;
++ENUM;
++ENUM1;
ENUM++;
ENUM1++;