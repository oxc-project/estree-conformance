__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 12
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 14
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 16,
          "end": 17
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 33,
              "end": 34
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 51,
                  "end": 52
                },
                "consequent": [],
                "start": 46,
                "end": 53
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 67,
                  "end": 68
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 89,
                      "end": 90
                    },
                    "start": 82,
                    "end": 91
                  }
                ],
                "start": 62,
                "end": 91
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 3,
                  "raw": "3",
                  "start": 105,
                  "end": 106
                },
                "consequent": [
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 124,
                      "end": 125
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 152,
                            "end": 153
                          },
                          "start": 145,
                          "end": 154
                        }
                      ],
                      "start": 127,
                      "end": 168
                    },
                    "alternate": null,
                    "start": 120,
                    "end": 168
                  }
                ],
                "start": 100,
                "end": 168
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 4,
                  "raw": "4",
                  "start": 182,
                  "end": 183
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 204,
                      "end": 205
                    },
                    "start": 197,
                    "end": 206
                  }
                ],
                "start": 177,
                "end": 206
              }
            ],
            "start": 25,
            "end": 212
          }
        ],
        "start": 19,
        "end": 214
      },
      "expression": false,
      "start": 0,
      "end": 214
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "noop",
        "optional": false,
        "typeAnnotation": null,
        "start": 233,
        "end": 237
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 241,
          "end": 245
        },
        "start": 239,
        "end": 245
      },
      "body": null,
      "expression": false,
      "start": 216,
      "end": 246
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fail",
        "optional": false,
        "typeAnnotation": null,
        "start": 264,
        "end": 268
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNeverKeyword",
          "start": 272,
          "end": 277
        },
        "start": 270,
        "end": 277
      },
      "body": null,
      "expression": false,
      "start": 247,
      "end": 278
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 289,
        "end": 291
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 295,
                    "end": 296
                  },
                  "start": 295,
                  "end": 296
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 299,
                    "end": 300
                  },
                  "start": 299,
                  "end": 300
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 303,
                    "end": 304
                  },
                  "start": 303,
                  "end": 304
                }
              ],
              "start": 295,
              "end": 304
            },
            "start": 293,
            "end": 304
          },
          "start": 292,
          "end": 304
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 320,
              "end": 321
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 338,
                  "end": 339
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "fail",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 353,
                        "end": 357
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 353,
                      "end": 359
                    },
                    "directive": null,
                    "start": 353,
                    "end": 360
                  }
                ],
                "start": 333,
                "end": 360
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 374,
                  "end": 375
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "noop",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 389,
                        "end": 393
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 389,
                      "end": 395
                    },
                    "directive": null,
                    "start": 389,
                    "end": 396
                  }
                ],
                "start": 369,
                "end": 396
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 410,
                  "end": 411
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 425,
                    "end": 432
                  }
                ],
                "start": 405,
                "end": 432
              }
            ],
            "start": 312,
            "end": 438
          }
        ],
        "start": 306,
        "end": 440
      },
      "expression": false,
      "start": 280,
      "end": 440
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Behavior",
        "optional": false,
        "typeAnnotation": null,
        "start": 469,
        "end": 477
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "SLIDE",
              "raw": "'SLIDE'",
              "start": 480,
              "end": 487
            },
            "start": 480,
            "end": 487
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "SLIDE_OUT",
              "raw": "'SLIDE_OUT'",
              "start": 490,
              "end": 501
            },
            "start": 490,
            "end": 501
          }
        ],
        "start": 480,
        "end": 501
      },
      "declare": false,
      "start": 464,
      "end": 501
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Direction",
        "optional": false,
        "typeAnnotation": null,
        "start": 507,
        "end": 516
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "LEFT",
              "raw": "'LEFT'",
              "start": 519,
              "end": 525
            },
            "start": 519,
            "end": 525
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "RIGHT",
              "raw": "'RIGHT'",
              "start": 528,
              "end": 535
            },
            "start": 528,
            "end": 535
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "TOP",
              "raw": "'TOP'",
              "start": 538,
              "end": 543
            },
            "start": 538,
            "end": 543
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "BOTTOM",
              "raw": "'BOTTOM'",
              "start": 546,
              "end": 554
            },
            "start": 546,
            "end": 554
          }
        ],
        "start": 519,
        "end": 554
      },
      "declare": false,
      "start": 502,
      "end": 554
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Transition",
        "optional": false,
        "typeAnnotation": null,
        "start": 566,
        "end": 576
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "behavior",
              "optional": false,
              "typeAnnotation": null,
              "start": 581,
              "end": 589
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Behavior",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 591,
                  "end": 599
                },
                "typeArguments": null,
                "start": 591,
                "end": 599
              },
              "start": 589,
              "end": 599
            },
            "accessibility": null,
            "static": false,
            "start": 581,
            "end": 599
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "direction",
              "optional": false,
              "typeAnnotation": null,
              "start": 602,
              "end": 611
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Direction",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 613,
                  "end": 622
                },
                "typeArguments": null,
                "start": 613,
                "end": 622
              },
              "start": 611,
              "end": 622
            },
            "accessibility": null,
            "static": false,
            "start": 602,
            "end": 622
          }
        ],
        "start": 577,
        "end": 624
      },
      "declare": false,
      "start": 556,
      "end": 624
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 635,
        "end": 637
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "transition",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Transition",
                "optional": false,
                "typeAnnotation": null,
                "start": 650,
                "end": 660
              },
              "typeArguments": null,
              "start": 650,
              "end": 660
            },
            "start": 648,
            "end": 660
          },
          "start": 638,
          "end": 660
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 663,
          "end": 666
        },
        "start": 661,
        "end": 666
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "transition",
                "optional": false,
                "typeAnnotation": null,
                "start": 681,
                "end": 691
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "behavior",
                "optional": false,
                "typeAnnotation": null,
                "start": 692,
                "end": 700
              },
              "optional": false,
              "computed": false,
              "start": 681,
              "end": 700
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "SLIDE",
                  "raw": "'SLIDE'",
                  "start": 717,
                  "end": 724
                },
                "consequent": [
                  {
                    "type": "SwitchStatement",
                    "discriminant": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "transition",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 746,
                        "end": 756
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "direction",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 757,
                        "end": 766
                      },
                      "optional": false,
                      "computed": false,
                      "start": 746,
                      "end": 766
                    },
                    "cases": [
                      {
                        "type": "SwitchCase",
                        "test": {
                          "type": "Literal",
                          "value": "LEFT",
                          "raw": "'LEFT'",
                          "start": 791,
                          "end": 797
                        },
                        "consequent": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "ArrayExpression",
                              "elements": [],
                              "start": 826,
                              "end": 828
                            },
                            "start": 819,
                            "end": 828
                          }
                        ],
                        "start": 786,
                        "end": 828
                      },
                      {
                        "type": "SwitchCase",
                        "test": {
                          "type": "Literal",
                          "value": "RIGHT",
                          "raw": "'RIGHT'",
                          "start": 850,
                          "end": 857
                        },
                        "consequent": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "ArrayExpression",
                              "elements": [],
                              "start": 886,
                              "end": 888
                            },
                            "start": 879,
                            "end": 888
                          }
                        ],
                        "start": 845,
                        "end": 888
                      },
                      {
                        "type": "SwitchCase",
                        "test": {
                          "type": "Literal",
                          "value": "TOP",
                          "raw": "'TOP'",
                          "start": 910,
                          "end": 915
                        },
                        "consequent": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "ArrayExpression",
                              "elements": [],
                              "start": 944,
                              "end": 946
                            },
                            "start": 937,
                            "end": 946
                          }
                        ],
                        "start": 905,
                        "end": 946
                      },
                      {
                        "type": "SwitchCase",
                        "test": {
                          "type": "Literal",
                          "value": "BOTTOM",
                          "raw": "'BOTTOM'",
                          "start": 968,
                          "end": 976
                        },
                        "consequent": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "ArrayExpression",
                              "elements": [],
                              "start": 1005,
                              "end": 1007
                            },
                            "start": 998,
                            "end": 1007
                          }
                        ],
                        "start": 963,
                        "end": 1007
                      }
                    ],
                    "start": 738,
                    "end": 1021
                  }
                ],
                "start": 712,
                "end": 1021
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "SLIDE_OUT",
                  "raw": "'SLIDE_OUT'",
                  "start": 1035,
                  "end": 1046
                },
                "consequent": [
                  {
                    "type": "SwitchStatement",
                    "discriminant": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "transition",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1068,
                        "end": 1078
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "direction",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1079,
                        "end": 1088
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1068,
                      "end": 1088
                    },
                    "cases": [
                      {
                        "type": "SwitchCase",
                        "test": {
                          "type": "Literal",
                          "value": "LEFT",
                          "raw": "'LEFT'",
                          "start": 1113,
                          "end": 1119
                        },
                        "consequent": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "ArrayExpression",
                              "elements": [],
                              "start": 1148,
                              "end": 1150
                            },
                            "start": 1141,
                            "end": 1150
                          }
                        ],
                        "start": 1108,
                        "end": 1150
                      },
                      {
                        "type": "SwitchCase",
                        "test": {
                          "type": "Literal",
                          "value": "RIGHT",
                          "raw": "'RIGHT'",
                          "start": 1172,
                          "end": 1179
                        },
                        "consequent": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "ArrayExpression",
                              "elements": [],
                              "start": 1208,
                              "end": 1210
                            },
                            "start": 1201,
                            "end": 1210
                          }
                        ],
                        "start": 1167,
                        "end": 1210
                      },
                      {
                        "type": "SwitchCase",
                        "test": {
                          "type": "Literal",
                          "value": "TOP",
                          "raw": "'TOP'",
                          "start": 1232,
                          "end": 1237
                        },
                        "consequent": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "ArrayExpression",
                              "elements": [],
                              "start": 1266,
                              "end": 1268
                            },
                            "start": 1259,
                            "end": 1268
                          }
                        ],
                        "start": 1227,
                        "end": 1268
                      },
                      {
                        "type": "SwitchCase",
                        "test": {
                          "type": "Literal",
                          "value": "BOTTOM",
                          "raw": "'BOTTOM'",
                          "start": 1290,
                          "end": 1298
                        },
                        "consequent": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "ArrayExpression",
                              "elements": [],
                              "start": 1327,
                              "end": 1329
                            },
                            "start": 1320,
                            "end": 1329
                          }
                        ],
                        "start": 1285,
                        "end": 1329
                      }
                    ],
                    "start": 1060,
                    "end": 1343
                  }
                ],
                "start": 1030,
                "end": 1343
              }
            ],
            "start": 673,
            "end": 1349
          }
        ],
        "start": 667,
        "end": 1351
      },
      "expression": false,
      "start": 626,
      "end": 1351
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1351
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 0,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 9,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 13,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 14,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 16,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 17,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 19,
    "end": 20
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 25,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 32,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 36,
    "end": 37
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 46,
    "end": 50
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 52,
    "end": 53
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 62,
    "end": 66
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 68,
    "end": 69
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 82,
    "end": 88
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 90,
    "end": 91
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 100,
    "end": 104
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 106,
    "end": 107
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 120,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 127,
    "end": 128
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 145,
    "end": 151
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 167,
    "end": 168
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 177,
    "end": 181
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 183,
    "end": 184
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 197,
    "end": 203
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 211,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 213,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 216,
    "end": 223
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 224,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "noop",
    "start": 233,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 237,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 238,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 239,
    "end": 240
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 241,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 245,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 247,
    "end": 254
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 255,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "fail",
    "start": 264,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Identifier",
    "value": "never",
    "start": 272,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 277,
    "end": 278
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 280,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 289,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 291,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 293,
    "end": 294
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 297,
    "end": 298
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 299,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 301,
    "end": 302
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 303,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 304,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 306,
    "end": 307
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 312,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 319,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 323,
    "end": 324
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 333,
    "end": 337
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 338,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 339,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "fail",
    "start": 353,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 357,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 358,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 359,
    "end": 360
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 369,
    "end": 373
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 374,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 375,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "noop",
    "start": 389,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 393,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 394,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 395,
    "end": 396
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 405,
    "end": 409
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 410,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 411,
    "end": 412
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 425,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 431,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 437,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 439,
    "end": 440
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 464,
    "end": 468
  },
  {
    "type": "Identifier",
    "value": "Behavior",
    "start": 469,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 478,
    "end": 479
  },
  {
    "type": "String",
    "value": "'SLIDE'",
    "start": 480,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 488,
    "end": 489
  },
  {
    "type": "String",
    "value": "'SLIDE_OUT'",
    "start": 490,
    "end": 501
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 502,
    "end": 506
  },
  {
    "type": "Identifier",
    "value": "Direction",
    "start": 507,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 517,
    "end": 518
  },
  {
    "type": "String",
    "value": "'LEFT'",
    "start": 519,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 526,
    "end": 527
  },
  {
    "type": "String",
    "value": "'RIGHT'",
    "start": 528,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 536,
    "end": 537
  },
  {
    "type": "String",
    "value": "'TOP'",
    "start": 538,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 544,
    "end": 545
  },
  {
    "type": "String",
    "value": "'BOTTOM'",
    "start": 546,
    "end": 554
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 556,
    "end": 565
  },
  {
    "type": "Identifier",
    "value": "Transition",
    "start": 566,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 577,
    "end": 578
  },
  {
    "type": "Identifier",
    "value": "behavior",
    "start": 581,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 589,
    "end": 590
  },
  {
    "type": "Identifier",
    "value": "Behavior",
    "start": 591,
    "end": 599
  },
  {
    "type": "Identifier",
    "value": "direction",
    "start": 602,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 611,
    "end": 612
  },
  {
    "type": "Identifier",
    "value": "Direction",
    "start": 613,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 623,
    "end": 624
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 626,
    "end": 634
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 635,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 637,
    "end": 638
  },
  {
    "type": "Identifier",
    "value": "transition",
    "start": 638,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 648,
    "end": 649
  },
  {
    "type": "Identifier",
    "value": "Transition",
    "start": 650,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 660,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 661,
    "end": 662
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 663,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 667,
    "end": 668
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 673,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 680,
    "end": 681
  },
  {
    "type": "Identifier",
    "value": "transition",
    "start": 681,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 691,
    "end": 692
  },
  {
    "type": "Identifier",
    "value": "behavior",
    "start": 692,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 700,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 702,
    "end": 703
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 712,
    "end": 716
  },
  {
    "type": "String",
    "value": "'SLIDE'",
    "start": 717,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 724,
    "end": 725
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 738,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 745,
    "end": 746
  },
  {
    "type": "Identifier",
    "value": "transition",
    "start": 746,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 756,
    "end": 757
  },
  {
    "type": "Identifier",
    "value": "direction",
    "start": 757,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 766,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 768,
    "end": 769
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 786,
    "end": 790
  },
  {
    "type": "String",
    "value": "'LEFT'",
    "start": 791,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 797,
    "end": 798
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 819,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 826,
    "end": 827
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 827,
    "end": 828
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 845,
    "end": 849
  },
  {
    "type": "String",
    "value": "'RIGHT'",
    "start": 850,
    "end": 857
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 857,
    "end": 858
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 879,
    "end": 885
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 886,
    "end": 887
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 887,
    "end": 888
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 905,
    "end": 909
  },
  {
    "type": "String",
    "value": "'TOP'",
    "start": 910,
    "end": 915
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 915,
    "end": 916
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 937,
    "end": 943
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 944,
    "end": 945
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 945,
    "end": 946
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 963,
    "end": 967
  },
  {
    "type": "String",
    "value": "'BOTTOM'",
    "start": 968,
    "end": 976
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 976,
    "end": 977
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 998,
    "end": 1004
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1005,
    "end": 1006
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1020,
    "end": 1021
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 1030,
    "end": 1034
  },
  {
    "type": "String",
    "value": "'SLIDE_OUT'",
    "start": 1035,
    "end": 1046
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1046,
    "end": 1047
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 1060,
    "end": 1066
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1067,
    "end": 1068
  },
  {
    "type": "Identifier",
    "value": "transition",
    "start": 1068,
    "end": 1078
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1078,
    "end": 1079
  },
  {
    "type": "Identifier",
    "value": "direction",
    "start": 1079,
    "end": 1088
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1088,
    "end": 1089
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1090,
    "end": 1091
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 1108,
    "end": 1112
  },
  {
    "type": "String",
    "value": "'LEFT'",
    "start": 1113,
    "end": 1119
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1119,
    "end": 1120
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1141,
    "end": 1147
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1148,
    "end": 1149
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1149,
    "end": 1150
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 1167,
    "end": 1171
  },
  {
    "type": "String",
    "value": "'RIGHT'",
    "start": 1172,
    "end": 1179
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1179,
    "end": 1180
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1201,
    "end": 1207
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1208,
    "end": 1209
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1209,
    "end": 1210
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 1227,
    "end": 1231
  },
  {
    "type": "String",
    "value": "'TOP'",
    "start": 1232,
    "end": 1237
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1237,
    "end": 1238
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1259,
    "end": 1265
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1266,
    "end": 1267
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1267,
    "end": 1268
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 1285,
    "end": 1289
  },
  {
    "type": "String",
    "value": "'BOTTOM'",
    "start": 1290,
    "end": 1298
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1298,
    "end": 1299
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1320,
    "end": 1326
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1327,
    "end": 1328
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1328,
    "end": 1329
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1342,
    "end": 1343
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1348,
    "end": 1349
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1350,
    "end": 1351
  }
]
```
