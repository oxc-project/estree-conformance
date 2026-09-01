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
                "start": 279,
                "end": 280
              },
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 282,
                "end": 283
              },
              {
                "type": "Literal",
                "value": 4,
                "raw": "4",
                "start": 285,
                "end": 286
              }
            ],
            "start": 274,
            "end": 287
          },
          "definite": false,
          "start": 269,
          "end": 287
        }
      ],
      "declare": false,
      "start": 265,
      "end": 287
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
            "start": 292,
            "end": 294
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 298,
                "end": 305
              },
              {
                "type": "Literal",
                "value": "world",
                "raw": "\"world\"",
                "start": 307,
                "end": 314
              }
            ],
            "start": 297,
            "end": 315
          },
          "definite": false,
          "start": 292,
          "end": 315
        }
      ],
      "declare": false,
      "start": 288,
      "end": 315
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
            "start": 320,
            "end": 322
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
                  "start": 335,
                  "end": 337
                },
                "start": 332,
                "end": 337
              },
              {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 339,
                "end": 346
              }
            ],
            "start": 325,
            "end": 347
          },
          "definite": false,
          "start": 320,
          "end": 347
        }
      ],
      "declare": false,
      "start": 316,
      "end": 348
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
            "start": 353,
            "end": 355
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
                  "start": 366,
                  "end": 368
                },
                "start": 363,
                "end": 368
              }
            ],
            "start": 358,
            "end": 369
          },
          "definite": false,
          "start": 353,
          "end": 369
        }
      ],
      "declare": false,
      "start": 349,
      "end": 369
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
            "start": 374,
            "end": 376
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
                  "start": 386,
                  "end": 387
                },
                "id": null,
                "generator": false,
                "start": 380,
                "end": 387
              }
            ],
            "start": 379,
            "end": 390
          },
          "definite": false,
          "start": 374,
          "end": 390
        }
      ],
      "declare": false,
      "start": 370,
      "end": 391
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
            "start": 396,
            "end": 398
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
                  "start": 405,
                  "end": 407
                },
                "start": 402,
                "end": 407
              },
              null
            ],
            "start": 401,
            "end": 412
          },
          "definite": false,
          "start": 396,
          "end": 412
        }
      ],
      "declare": false,
      "start": 392,
      "end": 412
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
                    "start": 1125,
                    "end": 1128
                  },
                  {
                    "type": "TSAnyKeyword",
                    "start": 1130,
                    "end": 1133
                  },
                  {
                    "type": "TSAnyKeyword",
                    "start": 1135,
                    "end": 1138
                  }
                ],
                "start": 1124,
                "end": 1139
              },
              "start": 1122,
              "end": 1139
            },
            "start": 1120,
            "end": 1139
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
                "start": 1143,
                "end": 1152
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 1154,
                "end": 1158
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 1160,
                "end": 1169
              }
            ],
            "start": 1142,
            "end": 1170
          },
          "definite": false,
          "start": 1120,
          "end": 1170
        }
      ],
      "declare": false,
      "start": 1116,
      "end": 1171
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
                      "start": 1181,
                      "end": 1187
                    },
                    "start": 1181,
                    "end": 1189
                  },
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 1191,
                      "end": 1197
                    },
                    "start": 1191,
                    "end": 1199
                  }
                ],
                "start": 1180,
                "end": 1200
              },
              "start": 1178,
              "end": 1200
            },
            "start": 1176,
            "end": 1200
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
                    "start": 1205,
                    "end": 1206
                  },
                  {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 1208,
                    "end": 1209
                  },
                  {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 1211,
                    "end": 1212
                  }
                ],
                "start": 1204,
                "end": 1213
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "hello",
                    "raw": "\"hello\"",
                    "start": 1216,
                    "end": 1223
                  },
                  {
                    "type": "Literal",
                    "value": "string",
                    "raw": "\"string\"",
                    "start": 1225,
                    "end": 1233
                  }
                ],
                "start": 1215,
                "end": 1234
              }
            ],
            "start": 1203,
            "end": 1235
          },
          "definite": false,
          "start": 1176,
          "end": 1235
        }
      ],
      "declare": false,
      "start": 1172,
      "end": 1236
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
                "start": 1560,
                "end": 1562
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1564,
                "end": 1566
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 1559,
            "end": 1567
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1571,
                "end": 1572
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 1574,
                "end": 1575
              }
            ],
            "start": 1570,
            "end": 1576
          },
          "definite": false,
          "start": 1559,
          "end": 1576
        }
      ],
      "declare": false,
      "start": 1555,
      "end": 1577
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
                "start": 1621,
                "end": 1623
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c3",
                "optional": false,
                "typeAnnotation": null,
                "start": 1625,
                "end": 1627
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 1620,
            "end": 1628
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1632,
                "end": 1633
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 1635,
                "end": 1636
              },
              {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 1638,
                "end": 1642
              }
            ],
            "start": 1631,
            "end": 1643
          },
          "definite": false,
          "start": 1620,
          "end": 1643
        }
      ],
      "declare": false,
      "start": 1616,
      "end": 1644
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
            "start": 1987,
            "end": 1991
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "s",
                "raw": "\"s\"",
                "start": 1995,
                "end": 1998
              },
              {
                "type": "Literal",
                "value": "t",
                "raw": "\"t\"",
                "start": 2000,
                "end": 2003
              },
              {
                "type": "Literal",
                "value": "r",
                "raw": "\"r\"",
                "start": 2005,
                "end": 2008
              }
            ],
            "start": 1994,
            "end": 2009
          },
          "definite": false,
          "start": 1987,
          "end": 2009
        }
      ],
      "declare": false,
      "start": 1983,
      "end": 2010
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
            "start": 2015,
            "end": 2020
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 2024,
                "end": 2025
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 2027,
                "end": 2028
              },
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 2030,
                "end": 2031
              }
            ],
            "start": 2023,
            "end": 2032
          },
          "definite": false,
          "start": 2015,
          "end": 2032
        }
      ],
      "declare": false,
      "start": 2011,
      "end": 2033
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
                      "start": 2046,
                      "end": 2052
                    },
                    "start": 2046,
                    "end": 2054
                  },
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 2056,
                      "end": 2062
                    },
                    "start": 2056,
                    "end": 2064
                  }
                ],
                "start": 2045,
                "end": 2065
              },
              "start": 2043,
              "end": 2065
            },
            "start": 2038,
            "end": 2065
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
                    "start": 2070,
                    "end": 2071
                  },
                  {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 2073,
                    "end": 2074
                  },
                  {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 2076,
                    "end": 2077
                  }
                ],
                "start": 2069,
                "end": 2078
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "hello",
                    "raw": "\"hello\"",
                    "start": 2081,
                    "end": 2088
                  },
                  {
                    "type": "Literal",
                    "value": "string",
                    "raw": "\"string\"",
                    "start": 2090,
                    "end": 2098
                  }
                ],
                "start": 2080,
                "end": 2099
              }
            ],
            "start": 2068,
            "end": 2100
          },
          "definite": false,
          "start": 2038,
          "end": 2100
        }
      ],
      "declare": false,
      "start": 2034,
      "end": 2101
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "myArray",
        "optional": false,
        "typeAnnotation": null,
        "start": 2113,
        "end": 2120
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
            "start": 2129,
            "end": 2134
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
                  "start": 2135,
                  "end": 2141
                },
                "typeArguments": null,
                "start": 2135,
                "end": 2141
              }
            ],
            "start": 2134,
            "end": 2142
          },
          "start": 2129,
          "end": 2142
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 2143,
        "end": 2146
      },
      "declare": false,
      "start": 2103,
      "end": 2146
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "myArray2",
        "optional": false,
        "typeAnnotation": null,
        "start": 2157,
        "end": 2165
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
            "start": 2174,
            "end": 2179
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
                      "start": 2180,
                      "end": 2186
                    },
                    "typeArguments": null,
                    "start": 2180,
                    "end": 2186
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "String",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2187,
                      "end": 2193
                    },
                    "typeArguments": null,
                    "start": 2187,
                    "end": 2193
                  }
                ],
                "start": 2180,
                "end": 2193
              }
            ],
            "start": 2179,
            "end": 2194
          },
          "start": 2174,
          "end": 2194
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 2195,
        "end": 2198
      },
      "declare": false,
      "start": 2147,
      "end": 2198
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
            "start": 2203,
            "end": 2205
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 2209,
                "end": 2210
              },
              {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 2212,
                "end": 2216
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "temp",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2221,
                  "end": 2225
                },
                "start": 2218,
                "end": 2225
              }
            ],
            "start": 2208,
            "end": 2228
          },
          "definite": false,
          "start": 2203,
          "end": 2228
        }
      ],
      "declare": false,
      "start": 2199,
      "end": 2229
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
            "start": 2273,
            "end": 2275
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
                  "start": 2282,
                  "end": 2286
                },
                "start": 2279,
                "end": 2286
              }
            ],
            "start": 2278,
            "end": 2287
          },
          "definite": false,
          "start": 2273,
          "end": 2287
        }
      ],
      "declare": false,
      "start": 2269,
      "end": 2288
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
                  "start": 2329,
                  "end": 2335
                },
                "start": 2329,
                "end": 2337
              },
              "start": 2327,
              "end": 2337
            },
            "start": 2325,
            "end": 2337
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
                  "start": 2344,
                  "end": 2349
                },
                "start": 2341,
                "end": 2349
              }
            ],
            "start": 2340,
            "end": 2350
          },
          "definite": false,
          "start": 2325,
          "end": 2350
        }
      ],
      "declare": false,
      "start": 2321,
      "end": 2351
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
                  "start": 2360,
                  "end": 2367
                },
                "typeArguments": null,
                "start": 2360,
                "end": 2367
              },
              "start": 2358,
              "end": 2367
            },
            "start": 2356,
            "end": 2367
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
                  "start": 2374,
                  "end": 2379
                },
                "start": 2371,
                "end": 2379
              }
            ],
            "start": 2370,
            "end": 2380
          },
          "definite": false,
          "start": 2356,
          "end": 2380
        }
      ],
      "declare": false,
      "start": 2352,
      "end": 2381
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
                  "start": 2390,
                  "end": 2398
                },
                "typeArguments": null,
                "start": 2390,
                "end": 2398
              },
              "start": 2388,
              "end": 2398
            },
            "start": 2386,
            "end": 2398
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
                  "start": 2405,
                  "end": 2409
                },
                "start": 2402,
                "end": 2409
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "temp1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2414,
                  "end": 2419
                },
                "start": 2411,
                "end": 2419
              }
            ],
            "start": 2401,
            "end": 2420
          },
          "definite": false,
          "start": 2386,
          "end": 2420
        }
      ],
      "declare": false,
      "start": 2382,
      "end": 2421
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
            "start": 2426,
            "end": 2428
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2435,
                  "end": 2437
                },
                "start": 2432,
                "end": 2437
              }
            ],
            "start": 2431,
            "end": 2438
          },
          "definite": false,
          "start": 2426,
          "end": 2438
        }
      ],
      "declare": false,
      "start": 2422,
      "end": 2439
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
            "start": 2444,
            "end": 2446
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2453,
                  "end": 2455
                },
                "start": 2450,
                "end": 2455
              }
            ],
            "start": 2449,
            "end": 2456
          },
          "definite": false,
          "start": 2444,
          "end": 2456
        }
      ],
      "declare": false,
      "start": 2440,
      "end": 2457
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
            "start": 2462,
            "end": 2464
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2471,
                  "end": 2473
                },
                "start": 2468,
                "end": 2473
              }
            ],
            "start": 2467,
            "end": 2474
          },
          "definite": false,
          "start": 2462,
          "end": 2474
        }
      ],
      "declare": false,
      "start": 2458,
      "end": 2475
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
                    "start": 2484,
                    "end": 2490
                  },
                  "start": 2484,
                  "end": 2492
                },
                "start": 2484,
                "end": 2494
              },
              "start": 2482,
              "end": 2494
            },
            "start": 2480,
            "end": 2494
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
                      "start": 2502,
                      "end": 2507
                    },
                    "start": 2499,
                    "end": 2507
                  }
                ],
                "start": 2498,
                "end": 2508
              }
            ],
            "start": 2497,
            "end": 2509
          },
          "definite": false,
          "start": 2480,
          "end": 2509
        }
      ],
      "declare": false,
      "start": 2476,
      "end": 2509
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
            "start": 2514,
            "end": 2516
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
                      "start": 2524,
                      "end": 2529
                    },
                    "start": 2521,
                    "end": 2529
                  }
                ],
                "start": 2520,
                "end": 2530
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
                      "start": 2536,
                      "end": 2543
                    }
                  ],
                  "start": 2535,
                  "end": 2544
                },
                "start": 2532,
                "end": 2544
              }
            ],
            "start": 2519,
            "end": 2545
          },
          "definite": false,
          "start": 2514,
          "end": 2545
        }
      ],
      "declare": false,
      "start": 2510,
      "end": 2546
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 265,
  "end": 2546
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
    "start": 277,
    "end": 278
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 280,
    "end": 281
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 282,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 283,
    "end": 284
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 285,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 286,
    "end": 287
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 288,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 292,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 297,
    "end": 298
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 298,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 305,
    "end": 306
  },
  {
    "type": "String",
    "value": "\"world\"",
    "start": 307,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 314,
    "end": 315
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 316,
    "end": 319
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 320,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 323,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 325,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 330,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 332,
    "end": 335
  },
  {
    "type": "Identifier",
    "value": "a0",
    "start": 335,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 337,
    "end": 338
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 339,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 347,
    "end": 348
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 349,
    "end": 352
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 353,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 356,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": "[",
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
    "value": ",",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 363,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "a0",
    "start": 366,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 368,
    "end": 369
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 370,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 374,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 377,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 379,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 380,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 381,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 383,
    "end": 385
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 386,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 387,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 389,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 390,
    "end": 391
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 392,
    "end": 395
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 396,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 399,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 401,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 402,
    "end": 405
  },
  {
    "type": "Identifier",
    "value": "a0",
    "start": 405,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 407,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 409,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 411,
    "end": 412
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1116,
    "end": 1119
  },
  {
    "type": "Identifier",
    "value": "b0",
    "start": 1120,
    "end": 1122
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1122,
    "end": 1123
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1124,
    "end": 1125
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1125,
    "end": 1128
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1128,
    "end": 1129
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1130,
    "end": 1133
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1133,
    "end": 1134
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1135,
    "end": 1138
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1138,
    "end": 1139
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1140,
    "end": 1141
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1142,
    "end": 1143
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1143,
    "end": 1152
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1152,
    "end": 1153
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1154,
    "end": 1158
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1158,
    "end": 1159
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1160,
    "end": 1169
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1169,
    "end": 1170
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1170,
    "end": 1171
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1172,
    "end": 1175
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 1176,
    "end": 1178
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1178,
    "end": 1179
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1180,
    "end": 1181
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1181,
    "end": 1187
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1187,
    "end": 1188
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1188,
    "end": 1189
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1189,
    "end": 1190
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1191,
    "end": 1197
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1197,
    "end": 1198
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1198,
    "end": 1199
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1199,
    "end": 1200
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1201,
    "end": 1202
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1203,
    "end": 1204
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1204,
    "end": 1205
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1205,
    "end": 1206
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1206,
    "end": 1207
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1208,
    "end": 1209
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1209,
    "end": 1210
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1211,
    "end": 1212
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1212,
    "end": 1213
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1213,
    "end": 1214
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1215,
    "end": 1216
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1216,
    "end": 1223
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1223,
    "end": 1224
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1225,
    "end": 1233
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1233,
    "end": 1234
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1234,
    "end": 1235
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1235,
    "end": 1236
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1555,
    "end": 1558
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1559,
    "end": 1560
  },
  {
    "type": "Identifier",
    "value": "c0",
    "start": 1560,
    "end": 1562
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1562,
    "end": 1563
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 1564,
    "end": 1566
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1566,
    "end": 1567
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1568,
    "end": 1569
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1570,
    "end": 1571
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1571,
    "end": 1572
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1572,
    "end": 1573
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1574,
    "end": 1575
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1575,
    "end": 1576
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1576,
    "end": 1577
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1616,
    "end": 1619
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1620,
    "end": 1621
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 1621,
    "end": 1623
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1623,
    "end": 1624
  },
  {
    "type": "Identifier",
    "value": "c3",
    "start": 1625,
    "end": 1627
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1627,
    "end": 1628
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1629,
    "end": 1630
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1631,
    "end": 1632
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1632,
    "end": 1633
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1633,
    "end": 1634
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1635,
    "end": 1636
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1636,
    "end": 1637
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1638,
    "end": 1642
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1642,
    "end": 1643
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1643,
    "end": 1644
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1983,
    "end": 1986
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 1987,
    "end": 1991
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1992,
    "end": 1993
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1994,
    "end": 1995
  },
  {
    "type": "String",
    "value": "\"s\"",
    "start": 1995,
    "end": 1998
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1998,
    "end": 1999
  },
  {
    "type": "String",
    "value": "\"t\"",
    "start": 2000,
    "end": 2003
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2003,
    "end": 2004
  },
  {
    "type": "String",
    "value": "\"r\"",
    "start": 2005,
    "end": 2008
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2008,
    "end": 2009
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2009,
    "end": 2010
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2011,
    "end": 2014
  },
  {
    "type": "Identifier",
    "value": "temp1",
    "start": 2015,
    "end": 2020
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2021,
    "end": 2022
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2023,
    "end": 2024
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2024,
    "end": 2025
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2025,
    "end": 2026
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2027,
    "end": 2028
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2028,
    "end": 2029
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 2030,
    "end": 2031
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2031,
    "end": 2032
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2032,
    "end": 2033
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2034,
    "end": 2037
  },
  {
    "type": "Identifier",
    "value": "temp2",
    "start": 2038,
    "end": 2043
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2043,
    "end": 2044
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2045,
    "end": 2046
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2046,
    "end": 2052
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2052,
    "end": 2053
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2053,
    "end": 2054
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2054,
    "end": 2055
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2056,
    "end": 2062
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2062,
    "end": 2063
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2063,
    "end": 2064
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2064,
    "end": 2065
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2066,
    "end": 2067
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2068,
    "end": 2069
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2069,
    "end": 2070
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2070,
    "end": 2071
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2071,
    "end": 2072
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2073,
    "end": 2074
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2074,
    "end": 2075
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 2076,
    "end": 2077
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2077,
    "end": 2078
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2078,
    "end": 2079
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2080,
    "end": 2081
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 2081,
    "end": 2088
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2088,
    "end": 2089
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 2090,
    "end": 2098
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2098,
    "end": 2099
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2099,
    "end": 2100
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2100,
    "end": 2101
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2103,
    "end": 2112
  },
  {
    "type": "Identifier",
    "value": "myArray",
    "start": 2113,
    "end": 2120
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2121,
    "end": 2128
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 2129,
    "end": 2134
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2134,
    "end": 2135
  },
  {
    "type": "Identifier",
    "value": "Number",
    "start": 2135,
    "end": 2141
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2141,
    "end": 2142
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2143,
    "end": 2144
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2145,
    "end": 2146
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2147,
    "end": 2156
  },
  {
    "type": "Identifier",
    "value": "myArray2",
    "start": 2157,
    "end": 2165
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2166,
    "end": 2173
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 2174,
    "end": 2179
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2179,
    "end": 2180
  },
  {
    "type": "Identifier",
    "value": "Number",
    "start": 2180,
    "end": 2186
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2186,
    "end": 2187
  },
  {
    "type": "Identifier",
    "value": "String",
    "start": 2187,
    "end": 2193
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2193,
    "end": 2194
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2195,
    "end": 2196
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2197,
    "end": 2198
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2199,
    "end": 2202
  },
  {
    "type": "Identifier",
    "value": "d0",
    "start": 2203,
    "end": 2205
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2206,
    "end": 2207
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2208,
    "end": 2209
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2209,
    "end": 2210
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2210,
    "end": 2211
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2212,
    "end": 2216
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2216,
    "end": 2217
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2218,
    "end": 2221
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 2221,
    "end": 2225
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2225,
    "end": 2226
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2227,
    "end": 2228
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2228,
    "end": 2229
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2269,
    "end": 2272
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 2273,
    "end": 2275
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2276,
    "end": 2277
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2278,
    "end": 2279
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2279,
    "end": 2282
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 2282,
    "end": 2286
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2286,
    "end": 2287
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2287,
    "end": 2288
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2321,
    "end": 2324
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 2325,
    "end": 2327
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2327,
    "end": 2328
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2329,
    "end": 2335
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2335,
    "end": 2336
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2336,
    "end": 2337
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2338,
    "end": 2339
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2340,
    "end": 2341
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2341,
    "end": 2344
  },
  {
    "type": "Identifier",
    "value": "temp1",
    "start": 2344,
    "end": 2349
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2349,
    "end": 2350
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2350,
    "end": 2351
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2352,
    "end": 2355
  },
  {
    "type": "Identifier",
    "value": "d3",
    "start": 2356,
    "end": 2358
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2358,
    "end": 2359
  },
  {
    "type": "Identifier",
    "value": "myArray",
    "start": 2360,
    "end": 2367
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2368,
    "end": 2369
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2370,
    "end": 2371
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2371,
    "end": 2374
  },
  {
    "type": "Identifier",
    "value": "temp1",
    "start": 2374,
    "end": 2379
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2379,
    "end": 2380
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2380,
    "end": 2381
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2382,
    "end": 2385
  },
  {
    "type": "Identifier",
    "value": "d4",
    "start": 2386,
    "end": 2388
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2388,
    "end": 2389
  },
  {
    "type": "Identifier",
    "value": "myArray2",
    "start": 2390,
    "end": 2398
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2399,
    "end": 2400
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2401,
    "end": 2402
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2402,
    "end": 2405
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 2405,
    "end": 2409
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2409,
    "end": 2410
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2411,
    "end": 2414
  },
  {
    "type": "Identifier",
    "value": "temp1",
    "start": 2414,
    "end": 2419
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2419,
    "end": 2420
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2420,
    "end": 2421
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2422,
    "end": 2425
  },
  {
    "type": "Identifier",
    "value": "d5",
    "start": 2426,
    "end": 2428
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2429,
    "end": 2430
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2431,
    "end": 2432
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2432,
    "end": 2435
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 2435,
    "end": 2437
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2437,
    "end": 2438
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2438,
    "end": 2439
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2440,
    "end": 2443
  },
  {
    "type": "Identifier",
    "value": "d6",
    "start": 2444,
    "end": 2446
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2447,
    "end": 2448
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2449,
    "end": 2450
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2450,
    "end": 2453
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 2453,
    "end": 2455
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2455,
    "end": 2456
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2456,
    "end": 2457
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2458,
    "end": 2461
  },
  {
    "type": "Identifier",
    "value": "d7",
    "start": 2462,
    "end": 2464
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2465,
    "end": 2466
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2467,
    "end": 2468
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2468,
    "end": 2471
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 2471,
    "end": 2473
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2473,
    "end": 2474
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2474,
    "end": 2475
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2476,
    "end": 2479
  },
  {
    "type": "Identifier",
    "value": "d8",
    "start": 2480,
    "end": 2482
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2482,
    "end": 2483
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2484,
    "end": 2490
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2490,
    "end": 2491
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2491,
    "end": 2492
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2492,
    "end": 2493
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2493,
    "end": 2494
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2495,
    "end": 2496
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2497,
    "end": 2498
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2498,
    "end": 2499
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2499,
    "end": 2502
  },
  {
    "type": "Identifier",
    "value": "temp1",
    "start": 2502,
    "end": 2507
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2507,
    "end": 2508
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2508,
    "end": 2509
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2510,
    "end": 2513
  },
  {
    "type": "Identifier",
    "value": "d9",
    "start": 2514,
    "end": 2516
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2517,
    "end": 2518
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2519,
    "end": 2520
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2520,
    "end": 2521
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2521,
    "end": 2524
  },
  {
    "type": "Identifier",
    "value": "temp1",
    "start": 2524,
    "end": 2529
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2529,
    "end": 2530
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2530,
    "end": 2531
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2532,
    "end": 2535
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2535,
    "end": 2536
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 2536,
    "end": 2543
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2543,
    "end": 2544
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2544,
    "end": 2545
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2545,
    "end": 2546
  }
]
```
