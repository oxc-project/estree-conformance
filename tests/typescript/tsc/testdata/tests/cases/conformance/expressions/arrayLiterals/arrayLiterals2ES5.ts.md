__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a0",
            "optional": false,
            "typeAnnotation": null,
            "start": 269,
            "end": 271
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              null,
              null,
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 278,
                "end": 279
              },
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 281,
                "end": 282
              },
              {
                "type": "Literal",
                "value": 4,
                "raw": "4",
                "start": 284,
                "end": 285
              }
            ],
            "start": 274,
            "end": 286
          },
          "definite": false,
          "start": 269,
          "end": 286
        }
      ],
      "declare": false,
      "start": 265,
      "end": 286
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a1",
            "optional": false,
            "typeAnnotation": null,
            "start": 291,
            "end": 293
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 297,
                "end": 304
              },
              {
                "type": "Literal",
                "value": "world",
                "raw": "\"world\"",
                "start": 306,
                "end": 313
              }
            ],
            "start": 296,
            "end": 314
          },
          "definite": false,
          "start": 291,
          "end": 314
        }
      ],
      "declare": false,
      "start": 287,
      "end": 314
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a2",
            "optional": false,
            "typeAnnotation": null,
            "start": 319,
            "end": 321
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              null,
              null,
              null,
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a0",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 334,
                  "end": 336
                },
                "start": 331,
                "end": 336
              },
              {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 338,
                "end": 345
              }
            ],
            "start": 324,
            "end": 346
          },
          "definite": false,
          "start": 319,
          "end": 346
        }
      ],
      "declare": false,
      "start": 315,
      "end": 347
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a3",
            "optional": false,
            "typeAnnotation": null,
            "start": 352,
            "end": 354
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              null,
              null,
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a0",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 364,
                  "end": 366
                },
                "start": 361,
                "end": 366
              }
            ],
            "start": 357,
            "end": 367
          },
          "definite": false,
          "start": 352,
          "end": 367
        }
      ],
      "declare": false,
      "start": 348,
      "end": 367
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a4",
            "optional": false,
            "typeAnnotation": null,
            "start": 372,
            "end": 374
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 384,
                  "end": 385
                },
                "id": null,
                "generator": false,
                "start": 378,
                "end": 385
              }
            ],
            "start": 377,
            "end": 388
          },
          "definite": false,
          "start": 372,
          "end": 388
        }
      ],
      "declare": false,
      "start": 368,
      "end": 389
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a5",
            "optional": false,
            "typeAnnotation": null,
            "start": 394,
            "end": 396
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a0",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 403,
                  "end": 405
                },
                "start": 400,
                "end": 405
              },
              null
            ],
            "start": 399,
            "end": 410
          },
          "definite": false,
          "start": 394,
          "end": 410
        }
      ],
      "declare": false,
      "start": 390,
      "end": 410
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b0",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 1123,
                    "end": 1126
                  },
                  {
                    "type": "TSAnyKeyword",
                    "start": 1128,
                    "end": 1131
                  },
                  {
                    "type": "TSAnyKeyword",
                    "start": 1133,
                    "end": 1136
                  }
                ],
                "start": 1122,
                "end": 1137
              },
              "start": 1120,
              "end": 1137
            },
            "start": 1118,
            "end": 1137
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 1141,
                "end": 1150
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 1152,
                "end": 1156
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 1158,
                "end": 1167
              }
            ],
            "start": 1140,
            "end": 1168
          },
          "definite": false,
          "start": 1118,
          "end": 1168
        }
      ],
      "declare": false,
      "start": 1114,
      "end": 1169
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 1179,
                      "end": 1185
                    },
                    "start": 1179,
                    "end": 1187
                  },
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 1189,
                      "end": 1195
                    },
                    "start": 1189,
                    "end": 1197
                  }
                ],
                "start": 1178,
                "end": 1198
              },
              "start": 1176,
              "end": 1198
            },
            "start": 1174,
            "end": 1198
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1203,
                    "end": 1204
                  },
                  {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 1206,
                    "end": 1207
                  },
                  {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 1209,
                    "end": 1210
                  }
                ],
                "start": 1202,
                "end": 1211
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "hello",
                    "raw": "\"hello\"",
                    "start": 1214,
                    "end": 1221
                  },
                  {
                    "type": "Literal",
                    "value": "string",
                    "raw": "\"string\"",
                    "start": 1223,
                    "end": 1231
                  }
                ],
                "start": 1213,
                "end": 1232
              }
            ],
            "start": 1201,
            "end": 1233
          },
          "definite": false,
          "start": 1174,
          "end": 1233
        }
      ],
      "declare": false,
      "start": 1170,
      "end": 1234
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c0",
                "optional": false,
                "typeAnnotation": null,
                "start": 1558,
                "end": 1560
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1562,
                "end": 1564
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 1557,
            "end": 1565
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1569,
                "end": 1570
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 1572,
                "end": 1573
              }
            ],
            "start": 1568,
            "end": 1574
          },
          "definite": false,
          "start": 1557,
          "end": 1574
        }
      ],
      "declare": false,
      "start": 1553,
      "end": 1575
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1619,
                "end": 1621
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c3",
                "optional": false,
                "typeAnnotation": null,
                "start": 1623,
                "end": 1625
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 1618,
            "end": 1626
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1630,
                "end": 1631
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 1633,
                "end": 1634
              },
              {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 1636,
                "end": 1640
              }
            ],
            "start": 1629,
            "end": 1641
          },
          "definite": false,
          "start": 1618,
          "end": 1641
        }
      ],
      "declare": false,
      "start": 1614,
      "end": 1642
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "temp",
            "optional": false,
            "typeAnnotation": null,
            "start": 1985,
            "end": 1989
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "s",
                "raw": "\"s\"",
                "start": 1993,
                "end": 1996
              },
              {
                "type": "Literal",
                "value": "t",
                "raw": "\"t\"",
                "start": 1998,
                "end": 2001
              },
              {
                "type": "Literal",
                "value": "r",
                "raw": "\"r\"",
                "start": 2003,
                "end": 2006
              }
            ],
            "start": 1992,
            "end": 2007
          },
          "definite": false,
          "start": 1985,
          "end": 2007
        }
      ],
      "declare": false,
      "start": 1981,
      "end": 2008
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "temp1",
            "optional": false,
            "typeAnnotation": null,
            "start": 2013,
            "end": 2018
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 2022,
                "end": 2023
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 2025,
                "end": 2026
              },
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 2028,
                "end": 2029
              }
            ],
            "start": 2021,
            "end": 2030
          },
          "definite": false,
          "start": 2013,
          "end": 2030
        }
      ],
      "declare": false,
      "start": 2009,
      "end": 2031
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "temp2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 2044,
                      "end": 2050
                    },
                    "start": 2044,
                    "end": 2052
                  },
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 2054,
                      "end": 2060
                    },
                    "start": 2054,
                    "end": 2062
                  }
                ],
                "start": 2043,
                "end": 2063
              },
              "start": 2041,
              "end": 2063
            },
            "start": 2036,
            "end": 2063
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 2068,
                    "end": 2069
                  },
                  {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 2071,
                    "end": 2072
                  },
                  {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 2074,
                    "end": 2075
                  }
                ],
                "start": 2067,
                "end": 2076
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "hello",
                    "raw": "\"hello\"",
                    "start": 2079,
                    "end": 2086
                  },
                  {
                    "type": "Literal",
                    "value": "string",
                    "raw": "\"string\"",
                    "start": 2088,
                    "end": 2096
                  }
                ],
                "start": 2078,
                "end": 2097
              }
            ],
            "start": 2066,
            "end": 2098
          },
          "definite": false,
          "start": 2036,
          "end": 2098
        }
      ],
      "declare": false,
      "start": 2032,
      "end": 2099
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "temp3",
            "optional": false,
            "typeAnnotation": null,
            "start": 2104,
            "end": 2109
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 2113,
                "end": 2122
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 2124,
                "end": 2128
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 2130,
                "end": 2139
              }
            ],
            "start": 2112,
            "end": 2140
          },
          "definite": false,
          "start": 2104,
          "end": 2140
        }
      ],
      "declare": false,
      "start": 2100,
      "end": 2141
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "temp4",
            "optional": false,
            "typeAnnotation": null,
            "start": 2146,
            "end": 2151
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 2154,
            "end": 2156
          },
          "definite": false,
          "start": 2146,
          "end": 2156
        }
      ],
      "declare": false,
      "start": 2142,
      "end": 2157
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "myArray",
        "optional": false,
        "typeAnnotation": null,
        "start": 2169,
        "end": 2176
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 2185,
            "end": 2190
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Number",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2191,
                  "end": 2197
                },
                "typeArguments": null,
                "start": 2191,
                "end": 2197
              }
            ],
            "start": 2190,
            "end": 2198
          },
          "start": 2185,
          "end": 2198
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 2199,
        "end": 2202
      },
      "declare": false,
      "start": 2159,
      "end": 2202
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "myArray2",
        "optional": false,
        "typeAnnotation": null,
        "start": 2213,
        "end": 2221
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 2230,
            "end": 2235
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Number",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2236,
                      "end": 2242
                    },
                    "typeArguments": null,
                    "start": 2236,
                    "end": 2242
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "String",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2243,
                      "end": 2249
                    },
                    "typeArguments": null,
                    "start": 2243,
                    "end": 2249
                  }
                ],
                "start": 2236,
                "end": 2249
              }
            ],
            "start": 2235,
            "end": 2250
          },
          "start": 2230,
          "end": 2250
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 2251,
        "end": 2254
      },
      "declare": false,
      "start": 2203,
      "end": 2254
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "d0",
            "optional": false,
            "typeAnnotation": null,
            "start": 2259,
            "end": 2261
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 2265,
                "end": 2266
              },
              {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 2268,
                "end": 2272
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "temp",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2277,
                  "end": 2281
                },
                "start": 2274,
                "end": 2281
              }
            ],
            "start": 2264,
            "end": 2283
          },
          "definite": false,
          "start": 2259,
          "end": 2283
        }
      ],
      "declare": false,
      "start": 2255,
      "end": 2284
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "d1",
            "optional": false,
            "typeAnnotation": null,
            "start": 2328,
            "end": 2330
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "temp",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2337,
                  "end": 2341
                },
                "start": 2334,
                "end": 2341
              }
            ],
            "start": 2333,
            "end": 2342
          },
          "definite": false,
          "start": 2328,
          "end": 2342
        }
      ],
      "declare": false,
      "start": 2324,
      "end": 2343
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "d2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 2384,
                  "end": 2390
                },
                "start": 2384,
                "end": 2392
              },
              "start": 2382,
              "end": 2392
            },
            "start": 2380,
            "end": 2392
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "temp1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2399,
                  "end": 2404
                },
                "start": 2396,
                "end": 2404
              }
            ],
            "start": 2395,
            "end": 2405
          },
          "definite": false,
          "start": 2380,
          "end": 2405
        }
      ],
      "declare": false,
      "start": 2376,
      "end": 2406
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "d3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "myArray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2415,
                  "end": 2422
                },
                "typeArguments": null,
                "start": 2415,
                "end": 2422
              },
              "start": 2413,
              "end": 2422
            },
            "start": 2411,
            "end": 2422
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "temp1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2429,
                  "end": 2434
                },
                "start": 2426,
                "end": 2434
              }
            ],
            "start": 2425,
            "end": 2435
          },
          "definite": false,
          "start": 2411,
          "end": 2435
        }
      ],
      "declare": false,
      "start": 2407,
      "end": 2436
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "d4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "myArray2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2445,
                  "end": 2453
                },
                "typeArguments": null,
                "start": 2445,
                "end": 2453
              },
              "start": 2443,
              "end": 2453
            },
            "start": 2441,
            "end": 2453
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "temp",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2460,
                  "end": 2464
                },
                "start": 2457,
                "end": 2464
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "temp1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2469,
                  "end": 2474
                },
                "start": 2466,
                "end": 2474
              }
            ],
            "start": 2456,
            "end": 2475
          },
          "definite": false,
          "start": 2441,
          "end": 2475
        }
      ],
      "declare": false,
      "start": 2437,
      "end": 2476
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "d5",
            "optional": false,
            "typeAnnotation": null,
            "start": 2481,
            "end": 2483
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "temp3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2490,
                  "end": 2495
                },
                "start": 2487,
                "end": 2495
              }
            ],
            "start": 2486,
            "end": 2496
          },
          "definite": false,
          "start": 2481,
          "end": 2496
        }
      ],
      "declare": false,
      "start": 2477,
      "end": 2497
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "d6",
            "optional": false,
            "typeAnnotation": null,
            "start": 2502,
            "end": 2504
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "temp4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2511,
                  "end": 2516
                },
                "start": 2508,
                "end": 2516
              }
            ],
            "start": 2507,
            "end": 2517
          },
          "definite": false,
          "start": 2502,
          "end": 2517
        }
      ],
      "declare": false,
      "start": 2498,
      "end": 2518
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "d7",
            "optional": false,
            "typeAnnotation": null,
            "start": 2523,
            "end": 2525
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "temp1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2536,
                        "end": 2541
                      },
                      "start": 2533,
                      "end": 2541
                    }
                  ],
                  "start": 2532,
                  "end": 2542
                },
                "start": 2529,
                "end": 2542
              }
            ],
            "start": 2528,
            "end": 2543
          },
          "definite": false,
          "start": 2523,
          "end": 2543
        }
      ],
      "declare": false,
      "start": 2519,
      "end": 2544
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "d8",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "start": 2553,
                    "end": 2559
                  },
                  "start": 2553,
                  "end": 2561
                },
                "start": 2553,
                "end": 2563
              },
              "start": 2551,
              "end": 2563
            },
            "start": 2549,
            "end": 2563
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "SpreadElement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "temp1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2571,
                      "end": 2576
                    },
                    "start": 2568,
                    "end": 2576
                  }
                ],
                "start": 2567,
                "end": 2577
              }
            ],
            "start": 2566,
            "end": 2578
          },
          "definite": false,
          "start": 2549,
          "end": 2578
        }
      ],
      "declare": false,
      "start": 2545,
      "end": 2578
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "d9",
            "optional": false,
            "typeAnnotation": null,
            "start": 2583,
            "end": 2585
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "SpreadElement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "temp1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2593,
                      "end": 2598
                    },
                    "start": 2590,
                    "end": 2598
                  }
                ],
                "start": 2589,
                "end": 2599
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": "hello",
                      "raw": "\"hello\"",
                      "start": 2605,
                      "end": 2612
                    }
                  ],
                  "start": 2604,
                  "end": 2613
                },
                "start": 2601,
                "end": 2613
              }
            ],
            "start": 2588,
            "end": 2614
          },
          "definite": false,
          "start": 2583,
          "end": 2614
        }
      ],
      "declare": false,
      "start": 2579,
      "end": 2615
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 265,
  "end": 2615
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 265,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "a0",
    "start": 269,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 274,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 275,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 276,
    "end": 277
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 279,
    "end": 280
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 282,
    "end": 283
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 284,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 285,
    "end": 286
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 287,
    "end": 290
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 291,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 296,
    "end": 297
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 297,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 304,
    "end": 305
  },
  {
    "type": "String",
    "value": "\"world\"",
    "start": 306,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 313,
    "end": 314
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 315,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 319,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 324,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 325,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 327,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 331,
    "end": 334
  },
  {
    "type": "Identifier",
    "value": "a0",
    "start": 334,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 336,
    "end": 337
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 338,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 345,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 346,
    "end": 347
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 348,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 352,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 355,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 357,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 358,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 361,
    "end": 364
  },
  {
    "type": "Identifier",
    "value": "a0",
    "start": 364,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 366,
    "end": 367
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 368,
    "end": 371
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 372,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 375,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 377,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 378,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 379,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 381,
    "end": 383
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 384,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 385,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 387,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 388,
    "end": 389
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 390,
    "end": 393
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 394,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 397,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 399,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 400,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "a0",
    "start": 403,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 405,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 407,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 409,
    "end": 410
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1114,
    "end": 1117
  },
  {
    "type": "Identifier",
    "value": "b0",
    "start": 1118,
    "end": 1120
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1120,
    "end": 1121
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1122,
    "end": 1123
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1123,
    "end": 1126
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1126,
    "end": 1127
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1128,
    "end": 1131
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1131,
    "end": 1132
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1133,
    "end": 1136
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1136,
    "end": 1137
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1138,
    "end": 1139
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1140,
    "end": 1141
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1141,
    "end": 1150
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1150,
    "end": 1151
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1152,
    "end": 1156
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1156,
    "end": 1157
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1158,
    "end": 1167
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1167,
    "end": 1168
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1168,
    "end": 1169
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1170,
    "end": 1173
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 1174,
    "end": 1176
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1176,
    "end": 1177
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1178,
    "end": 1179
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1179,
    "end": 1185
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1185,
    "end": 1186
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1186,
    "end": 1187
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1187,
    "end": 1188
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1189,
    "end": 1195
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1195,
    "end": 1196
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1196,
    "end": 1197
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1197,
    "end": 1198
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1199,
    "end": 1200
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1201,
    "end": 1202
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1202,
    "end": 1203
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1203,
    "end": 1204
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1204,
    "end": 1205
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1206,
    "end": 1207
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1207,
    "end": 1208
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1209,
    "end": 1210
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1210,
    "end": 1211
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1211,
    "end": 1212
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1213,
    "end": 1214
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1214,
    "end": 1221
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1221,
    "end": 1222
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1223,
    "end": 1231
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1231,
    "end": 1232
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1232,
    "end": 1233
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1233,
    "end": 1234
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1553,
    "end": 1556
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1557,
    "end": 1558
  },
  {
    "type": "Identifier",
    "value": "c0",
    "start": 1558,
    "end": 1560
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1560,
    "end": 1561
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 1562,
    "end": 1564
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1564,
    "end": 1565
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1566,
    "end": 1567
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1568,
    "end": 1569
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1569,
    "end": 1570
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1570,
    "end": 1571
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1572,
    "end": 1573
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1573,
    "end": 1574
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1574,
    "end": 1575
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1614,
    "end": 1617
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1618,
    "end": 1619
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 1619,
    "end": 1621
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1621,
    "end": 1622
  },
  {
    "type": "Identifier",
    "value": "c3",
    "start": 1623,
    "end": 1625
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1625,
    "end": 1626
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1627,
    "end": 1628
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1629,
    "end": 1630
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1630,
    "end": 1631
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1631,
    "end": 1632
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1633,
    "end": 1634
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1634,
    "end": 1635
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1636,
    "end": 1640
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1640,
    "end": 1641
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1641,
    "end": 1642
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1981,
    "end": 1984
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 1985,
    "end": 1989
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1990,
    "end": 1991
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1992,
    "end": 1993
  },
  {
    "type": "String",
    "value": "\"s\"",
    "start": 1993,
    "end": 1996
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1996,
    "end": 1997
  },
  {
    "type": "String",
    "value": "\"t\"",
    "start": 1998,
    "end": 2001
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2001,
    "end": 2002
  },
  {
    "type": "String",
    "value": "\"r\"",
    "start": 2003,
    "end": 2006
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2006,
    "end": 2007
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2007,
    "end": 2008
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2009,
    "end": 2012
  },
  {
    "type": "Identifier",
    "value": "temp1",
    "start": 2013,
    "end": 2018
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2019,
    "end": 2020
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2021,
    "end": 2022
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2022,
    "end": 2023
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2023,
    "end": 2024
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2025,
    "end": 2026
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2026,
    "end": 2027
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 2028,
    "end": 2029
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2029,
    "end": 2030
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2030,
    "end": 2031
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2032,
    "end": 2035
  },
  {
    "type": "Identifier",
    "value": "temp2",
    "start": 2036,
    "end": 2041
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2041,
    "end": 2042
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2043,
    "end": 2044
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2044,
    "end": 2050
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2050,
    "end": 2051
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2051,
    "end": 2052
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2052,
    "end": 2053
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2054,
    "end": 2060
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2060,
    "end": 2061
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2061,
    "end": 2062
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2062,
    "end": 2063
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2064,
    "end": 2065
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2066,
    "end": 2067
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2067,
    "end": 2068
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2068,
    "end": 2069
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2069,
    "end": 2070
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2071,
    "end": 2072
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2072,
    "end": 2073
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 2074,
    "end": 2075
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2075,
    "end": 2076
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2076,
    "end": 2077
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2078,
    "end": 2079
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 2079,
    "end": 2086
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2086,
    "end": 2087
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 2088,
    "end": 2096
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2096,
    "end": 2097
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2097,
    "end": 2098
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2098,
    "end": 2099
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2100,
    "end": 2103
  },
  {
    "type": "Identifier",
    "value": "temp3",
    "start": 2104,
    "end": 2109
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2110,
    "end": 2111
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2112,
    "end": 2113
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2113,
    "end": 2122
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2122,
    "end": 2123
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2124,
    "end": 2128
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2128,
    "end": 2129
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2130,
    "end": 2139
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2139,
    "end": 2140
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2140,
    "end": 2141
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2142,
    "end": 2145
  },
  {
    "type": "Identifier",
    "value": "temp4",
    "start": 2146,
    "end": 2151
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2152,
    "end": 2153
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2154,
    "end": 2155
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2155,
    "end": 2156
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2156,
    "end": 2157
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2159,
    "end": 2168
  },
  {
    "type": "Identifier",
    "value": "myArray",
    "start": 2169,
    "end": 2176
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2177,
    "end": 2184
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 2185,
    "end": 2190
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2190,
    "end": 2191
  },
  {
    "type": "Identifier",
    "value": "Number",
    "start": 2191,
    "end": 2197
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2197,
    "end": 2198
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2199,
    "end": 2200
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2201,
    "end": 2202
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2203,
    "end": 2212
  },
  {
    "type": "Identifier",
    "value": "myArray2",
    "start": 2213,
    "end": 2221
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2222,
    "end": 2229
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 2230,
    "end": 2235
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2235,
    "end": 2236
  },
  {
    "type": "Identifier",
    "value": "Number",
    "start": 2236,
    "end": 2242
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2242,
    "end": 2243
  },
  {
    "type": "Identifier",
    "value": "String",
    "start": 2243,
    "end": 2249
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2249,
    "end": 2250
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2251,
    "end": 2252
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2253,
    "end": 2254
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2255,
    "end": 2258
  },
  {
    "type": "Identifier",
    "value": "d0",
    "start": 2259,
    "end": 2261
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2262,
    "end": 2263
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2264,
    "end": 2265
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2265,
    "end": 2266
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2266,
    "end": 2267
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2268,
    "end": 2272
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2272,
    "end": 2273
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2274,
    "end": 2277
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 2277,
    "end": 2281
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2281,
    "end": 2282
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2282,
    "end": 2283
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2283,
    "end": 2284
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2324,
    "end": 2327
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 2328,
    "end": 2330
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2331,
    "end": 2332
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2333,
    "end": 2334
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2334,
    "end": 2337
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 2337,
    "end": 2341
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2341,
    "end": 2342
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2342,
    "end": 2343
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2376,
    "end": 2379
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 2380,
    "end": 2382
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2382,
    "end": 2383
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2384,
    "end": 2390
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2390,
    "end": 2391
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2391,
    "end": 2392
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2393,
    "end": 2394
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2395,
    "end": 2396
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2396,
    "end": 2399
  },
  {
    "type": "Identifier",
    "value": "temp1",
    "start": 2399,
    "end": 2404
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2404,
    "end": 2405
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2405,
    "end": 2406
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2407,
    "end": 2410
  },
  {
    "type": "Identifier",
    "value": "d3",
    "start": 2411,
    "end": 2413
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2413,
    "end": 2414
  },
  {
    "type": "Identifier",
    "value": "myArray",
    "start": 2415,
    "end": 2422
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2423,
    "end": 2424
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2425,
    "end": 2426
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2426,
    "end": 2429
  },
  {
    "type": "Identifier",
    "value": "temp1",
    "start": 2429,
    "end": 2434
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2434,
    "end": 2435
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2435,
    "end": 2436
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2437,
    "end": 2440
  },
  {
    "type": "Identifier",
    "value": "d4",
    "start": 2441,
    "end": 2443
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2443,
    "end": 2444
  },
  {
    "type": "Identifier",
    "value": "myArray2",
    "start": 2445,
    "end": 2453
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2454,
    "end": 2455
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2456,
    "end": 2457
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2457,
    "end": 2460
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 2460,
    "end": 2464
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2464,
    "end": 2465
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2466,
    "end": 2469
  },
  {
    "type": "Identifier",
    "value": "temp1",
    "start": 2469,
    "end": 2474
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2474,
    "end": 2475
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2475,
    "end": 2476
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2477,
    "end": 2480
  },
  {
    "type": "Identifier",
    "value": "d5",
    "start": 2481,
    "end": 2483
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2484,
    "end": 2485
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2486,
    "end": 2487
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2487,
    "end": 2490
  },
  {
    "type": "Identifier",
    "value": "temp3",
    "start": 2490,
    "end": 2495
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2495,
    "end": 2496
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2496,
    "end": 2497
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2498,
    "end": 2501
  },
  {
    "type": "Identifier",
    "value": "d6",
    "start": 2502,
    "end": 2504
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2505,
    "end": 2506
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2507,
    "end": 2508
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2508,
    "end": 2511
  },
  {
    "type": "Identifier",
    "value": "temp4",
    "start": 2511,
    "end": 2516
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2516,
    "end": 2517
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2517,
    "end": 2518
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2519,
    "end": 2522
  },
  {
    "type": "Identifier",
    "value": "d7",
    "start": 2523,
    "end": 2525
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2526,
    "end": 2527
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2528,
    "end": 2529
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2529,
    "end": 2532
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2532,
    "end": 2533
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2533,
    "end": 2536
  },
  {
    "type": "Identifier",
    "value": "temp1",
    "start": 2536,
    "end": 2541
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2541,
    "end": 2542
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2542,
    "end": 2543
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2543,
    "end": 2544
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2545,
    "end": 2548
  },
  {
    "type": "Identifier",
    "value": "d8",
    "start": 2549,
    "end": 2551
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2551,
    "end": 2552
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2553,
    "end": 2559
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2559,
    "end": 2560
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2560,
    "end": 2561
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2561,
    "end": 2562
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2562,
    "end": 2563
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2564,
    "end": 2565
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2566,
    "end": 2567
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2567,
    "end": 2568
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2568,
    "end": 2571
  },
  {
    "type": "Identifier",
    "value": "temp1",
    "start": 2571,
    "end": 2576
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2576,
    "end": 2577
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2577,
    "end": 2578
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2579,
    "end": 2582
  },
  {
    "type": "Identifier",
    "value": "d9",
    "start": 2583,
    "end": 2585
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2586,
    "end": 2587
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2588,
    "end": 2589
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2589,
    "end": 2590
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2590,
    "end": 2593
  },
  {
    "type": "Identifier",
    "value": "temp1",
    "start": 2593,
    "end": 2598
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2598,
    "end": 2599
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2599,
    "end": 2600
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2601,
    "end": 2604
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2604,
    "end": 2605
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 2605,
    "end": 2612
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2612,
    "end": 2613
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2613,
    "end": 2614
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2614,
    "end": 2615
  }
]
```
