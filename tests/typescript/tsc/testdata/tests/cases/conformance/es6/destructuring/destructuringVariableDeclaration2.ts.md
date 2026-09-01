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
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 169,
                  "end": 171
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 169,
                  "end": 171
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 169,
                "end": 171
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 173,
                  "end": 175
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 173,
                  "end": 175
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 173,
                "end": 175
              }
            ],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 180,
                      "end": 182
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 184,
                        "end": 190
                      },
                      "start": 182,
                      "end": 190
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 180,
                    "end": 191
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 192,
                      "end": 194
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 196,
                        "end": 202
                      },
                      "start": 194,
                      "end": 202
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 192,
                    "end": 202
                  }
                ],
                "start": 178,
                "end": 204
              },
              "start": 176,
              "end": 204
            },
            "start": 168,
            "end": 204
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 209,
                  "end": 211
                },
                "value": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 213,
                  "end": 217
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 209,
                "end": 217
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 219,
                  "end": 221
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 223,
                  "end": 224
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 219,
                "end": 224
              }
            ],
            "start": 207,
            "end": 226
          },
          "definite": false,
          "start": 168,
          "end": 226
        }
      ],
      "declare": false,
      "start": 164,
      "end": 226
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
                "name": "a3",
                "optional": false,
                "typeAnnotation": null,
                "start": 255,
                "end": 257
              },
              {
                "type": "ArrayPattern",
                "decorators": [],
                "elements": [
                  {
                    "type": "ArrayPattern",
                    "decorators": [],
                    "elements": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 261,
                        "end": 263
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 260,
                    "end": 264
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 259,
                "end": 265
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a5",
                "optional": false,
                "typeAnnotation": null,
                "start": 267,
                "end": 269
              }
            ],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 273,
                    "end": 279
                  },
                  {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSTupleType",
                        "elementTypes": [
                          {
                            "type": "TSStringKeyword",
                            "start": 283,
                            "end": 289
                          }
                        ],
                        "start": 282,
                        "end": 290
                      }
                    ],
                    "start": 281,
                    "end": 291
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 293,
                    "end": 300
                  }
                ],
                "start": 272,
                "end": 301
              },
              "start": 270,
              "end": 301
            },
            "start": 254,
            "end": 301
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 305,
                "end": 306
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": false,
                        "raw": "false",
                        "start": 310,
                        "end": 315
                      }
                    ],
                    "start": 309,
                    "end": 316
                  }
                ],
                "start": 308,
                "end": 317
              },
              {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 319,
                "end": 323
              }
            ],
            "start": 304,
            "end": 324
          },
          "definite": false,
          "start": 254,
          "end": 324
        }
      ],
      "declare": false,
      "start": 250,
      "end": 325
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
            "start": 554,
            "end": 558
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 563,
                  "end": 565
                },
                "value": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 567,
                  "end": 571
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 563,
                "end": 571
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 573,
                  "end": 575
                },
                "value": {
                  "type": "Literal",
                  "value": "false",
                  "raw": "\"false\"",
                  "start": 577,
                  "end": 584
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 573,
                "end": 584
              }
            ],
            "start": 561,
            "end": 586
          },
          "definite": false,
          "start": 554,
          "end": 586
        }
      ],
      "declare": false,
      "start": 550,
      "end": 587
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
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b0",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 593,
                  "end": 595
                },
                "right": {
                  "type": "Literal",
                  "value": 3,
                  "raw": "3",
                  "start": 598,
                  "end": 599
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 593,
                "end": 599
              },
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 601,
                  "end": 603
                },
                "right": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 606,
                  "end": 610
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 601,
                "end": 610
              },
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 612,
                  "end": 614
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "temp",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 617,
                  "end": 621
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 612,
                "end": 621
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 592,
            "end": 622
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 626,
                "end": 627
              },
              {
                "type": "Literal",
                "value": false,
                "raw": "false",
                "start": 629,
                "end": 634
              },
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 638,
                      "end": 640
                    },
                    "value": {
                      "type": "Literal",
                      "value": false,
                      "raw": "false",
                      "start": 642,
                      "end": 647
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 638,
                    "end": 647
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 649,
                      "end": 651
                    },
                    "value": {
                      "type": "Literal",
                      "value": 5,
                      "raw": "5",
                      "start": 653,
                      "end": 654
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 649,
                    "end": 654
                  }
                ],
                "start": 636,
                "end": 655
              }
            ],
            "start": 625,
            "end": 656
          },
          "definite": false,
          "start": 592,
          "end": 656
        }
      ],
      "declare": false,
      "start": 588,
      "end": 657
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
                "name": "c1",
                "optional": false,
                "typeAnnotation": null,
                "start": 910,
                "end": 912
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c2",
                "optional": false,
                "typeAnnotation": null,
                "start": 914,
                "end": 916
              },
              {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 920,
                      "end": 922
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c4",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 924,
                      "end": 926
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 920,
                    "end": 926
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c5",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 928,
                      "end": 930
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c5",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 928,
                      "end": 930
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 928,
                    "end": 930
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 918,
                "end": 932
              },
              null,
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 939,
                  "end": 941
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 936,
                "end": 941
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 909,
            "end": 942
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 946,
                "end": 947
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 949,
                "end": 950
              },
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 954,
                      "end": 956
                    },
                    "value": {
                      "type": "Literal",
                      "value": 4,
                      "raw": "4",
                      "start": 958,
                      "end": 959
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 954,
                    "end": 959
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c5",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 961,
                      "end": 963
                    },
                    "value": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 965,
                      "end": 966
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 961,
                    "end": 966
                  }
                ],
                "start": 952,
                "end": 968
              }
            ],
            "start": 945,
            "end": 969
          },
          "definite": false,
          "start": 909,
          "end": 969
        }
      ],
      "declare": false,
      "start": 905,
      "end": 970
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1307,
                  "end": 1308
                },
                "value": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "d1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1311,
                        "end": 1313
                      },
                      "value": {
                        "type": "AssignmentPattern",
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "d1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1311,
                          "end": 1313
                        },
                        "right": {
                          "type": "ArrayExpression",
                          "elements": [
                            {
                              "type": "Literal",
                              "value": "string",
                              "raw": "\"string\"",
                              "start": 1317,
                              "end": 1325
                            },
                            {
                              "type": "Literal",
                              "value": null,
                              "raw": "null",
                              "start": 1327,
                              "end": 1331
                            }
                          ],
                          "start": 1316,
                          "end": 1332
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1311,
                        "end": 1332
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 1311,
                      "end": 1332
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1310,
                  "end": 1333
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1307,
                "end": 1333
              }
            ],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "d",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1338,
                      "end": 1339
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "d1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1343,
                              "end": 1345
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSNumberKeyword",
                                  "start": 1347,
                                  "end": 1353
                                },
                                "start": 1347,
                                "end": 1355
                              },
                              "start": 1345,
                              "end": 1355
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 1343,
                            "end": 1355
                          }
                        ],
                        "start": 1341,
                        "end": 1357
                      },
                      "start": 1339,
                      "end": 1357
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1338,
                    "end": 1357
                  }
                ],
                "start": 1336,
                "end": 1359
              },
              "start": 1334,
              "end": 1359
            },
            "start": 1306,
            "end": 1359
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1364,
                  "end": 1365
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "d1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1369,
                        "end": 1371
                      },
                      "value": {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1374,
                            "end": 1375
                          },
                          {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 1377,
                            "end": 1378
                          }
                        ],
                        "start": 1373,
                        "end": 1379
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1369,
                      "end": 1379
                    }
                  ],
                  "start": 1367,
                  "end": 1381
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1364,
                "end": 1381
              }
            ],
            "start": 1362,
            "end": 1383
          },
          "definite": false,
          "start": 1306,
          "end": 1383
        }
      ],
      "declare": false,
      "start": 1302,
      "end": 1384
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 164,
  "end": 1394
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 164,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 168,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 169,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 171,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 173,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 178,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 180,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 182,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 184,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 190,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 192,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 194,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 196,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 207,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 209,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 211,
    "end": 212
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 213,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 217,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 219,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 221,
    "end": 222
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 225,
    "end": 226
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 250,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 254,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 255,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 260,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 261,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 263,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 264,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 265,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 267,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 272,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 273,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 282,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 283,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 291,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 293,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 300,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 302,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 304,
    "end": 305
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 305,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 306,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 308,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 309,
    "end": 310
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 310,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 315,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 316,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 317,
    "end": 318
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 319,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 323,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 324,
    "end": 325
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 550,
    "end": 553
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 554,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 559,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 561,
    "end": 562
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 563,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 565,
    "end": 566
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 567,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 571,
    "end": 572
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 573,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 575,
    "end": 576
  },
  {
    "type": "String",
    "value": "\"false\"",
    "start": 577,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 585,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 586,
    "end": 587
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 588,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 592,
    "end": 593
  },
  {
    "type": "Identifier",
    "value": "b0",
    "start": 593,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 596,
    "end": 597
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 598,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 599,
    "end": 600
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 601,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 604,
    "end": 605
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 606,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 610,
    "end": 611
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 612,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 615,
    "end": 616
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 617,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 621,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 623,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 625,
    "end": 626
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 626,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 627,
    "end": 628
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 629,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 634,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 636,
    "end": 637
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 638,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 640,
    "end": 641
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 642,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 647,
    "end": 648
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 649,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 651,
    "end": 652
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 653,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 654,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 655,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 656,
    "end": 657
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 905,
    "end": 908
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 909,
    "end": 910
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 910,
    "end": 912
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 912,
    "end": 913
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 914,
    "end": 916
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 916,
    "end": 917
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 918,
    "end": 919
  },
  {
    "type": "Identifier",
    "value": "c3",
    "start": 920,
    "end": 922
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 922,
    "end": 923
  },
  {
    "type": "Identifier",
    "value": "c4",
    "start": 924,
    "end": 926
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 926,
    "end": 927
  },
  {
    "type": "Identifier",
    "value": "c5",
    "start": 928,
    "end": 930
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 931,
    "end": 932
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 932,
    "end": 933
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 934,
    "end": 935
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 936,
    "end": 939
  },
  {
    "type": "Identifier",
    "value": "c6",
    "start": 939,
    "end": 941
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 941,
    "end": 942
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 943,
    "end": 944
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 945,
    "end": 946
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 946,
    "end": 947
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 947,
    "end": 948
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 949,
    "end": 950
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 950,
    "end": 951
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 952,
    "end": 953
  },
  {
    "type": "Identifier",
    "value": "c3",
    "start": 954,
    "end": 956
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 956,
    "end": 957
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 958,
    "end": 959
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 959,
    "end": 960
  },
  {
    "type": "Identifier",
    "value": "c5",
    "start": 961,
    "end": 963
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 963,
    "end": 964
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 965,
    "end": 966
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 967,
    "end": 968
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 968,
    "end": 969
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 969,
    "end": 970
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1302,
    "end": 1305
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1306,
    "end": 1307
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1307,
    "end": 1308
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1308,
    "end": 1309
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1310,
    "end": 1311
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 1311,
    "end": 1313
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1314,
    "end": 1315
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1316,
    "end": 1317
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1317,
    "end": 1325
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1325,
    "end": 1326
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1327,
    "end": 1331
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1331,
    "end": 1332
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1332,
    "end": 1333
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1333,
    "end": 1334
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1334,
    "end": 1335
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1336,
    "end": 1337
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1338,
    "end": 1339
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1339,
    "end": 1340
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1341,
    "end": 1342
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 1343,
    "end": 1345
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1345,
    "end": 1346
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1347,
    "end": 1353
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1353,
    "end": 1354
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1354,
    "end": 1355
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1356,
    "end": 1357
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1358,
    "end": 1359
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1360,
    "end": 1361
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1362,
    "end": 1363
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1364,
    "end": 1365
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1365,
    "end": 1366
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1367,
    "end": 1368
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 1369,
    "end": 1371
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1371,
    "end": 1372
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1373,
    "end": 1374
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1374,
    "end": 1375
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1375,
    "end": 1376
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1377,
    "end": 1378
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1378,
    "end": 1379
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1380,
    "end": 1381
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1382,
    "end": 1383
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1383,
    "end": 1384
  }
]
```
