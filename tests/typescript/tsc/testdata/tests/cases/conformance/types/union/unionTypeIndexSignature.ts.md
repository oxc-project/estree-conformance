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
            "name": "numOrDate",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 15,
                    "end": 21
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 24,
                      "end": 28
                    },
                    "typeArguments": null,
                    "start": 24,
                    "end": 28
                  }
                ],
                "start": 15,
                "end": 28
              },
              "start": 13,
              "end": 28
            },
            "start": 4,
            "end": 28
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 28
        }
      ],
      "declare": false,
      "start": 0,
      "end": 29
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
            "name": "anyVar",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 42,
                "end": 48
              },
              "start": 40,
              "end": 48
            },
            "start": 34,
            "end": 48
          },
          "init": null,
          "definite": false,
          "start": 34,
          "end": 48
        }
      ],
      "declare": false,
      "start": 30,
      "end": 49
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
            "name": "unionOfDifferentReturnType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSIndexSignature",
                        "parameters": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 257,
                                "end": 263
                              },
                              "start": 255,
                              "end": 263
                            },
                            "start": 254,
                            "end": 263
                          }
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 266,
                            "end": 272
                          },
                          "start": 264,
                          "end": 272
                        },
                        "readonly": false,
                        "static": false,
                        "accessibility": null,
                        "start": 253,
                        "end": 273
                      }
                    ],
                    "start": 251,
                    "end": 275
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSIndexSignature",
                        "parameters": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 284,
                                "end": 290
                              },
                              "start": 282,
                              "end": 290
                            },
                            "start": 281,
                            "end": 290
                          }
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Date",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 293,
                              "end": 297
                            },
                            "typeArguments": null,
                            "start": 293,
                            "end": 297
                          },
                          "start": 291,
                          "end": 297
                        },
                        "readonly": false,
                        "static": false,
                        "accessibility": null,
                        "start": 280,
                        "end": 298
                      }
                    ],
                    "start": 278,
                    "end": 300
                  }
                ],
                "start": 251,
                "end": 300
              },
              "start": 249,
              "end": 300
            },
            "start": 223,
            "end": 300
          },
          "init": null,
          "definite": false,
          "start": 223,
          "end": 300
        }
      ],
      "declare": false,
      "start": 219,
      "end": 301
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "numOrDate",
          "optional": false,
          "typeAnnotation": null,
          "start": 302,
          "end": 311
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionOfDifferentReturnType",
            "optional": false,
            "typeAnnotation": null,
            "start": 314,
            "end": 340
          },
          "property": {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 341,
            "end": 348
          },
          "optional": false,
          "computed": true,
          "start": 314,
          "end": 349
        },
        "start": 302,
        "end": 349
      },
      "directive": null,
      "start": 302,
      "end": 350
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "numOrDate",
          "optional": false,
          "typeAnnotation": null,
          "start": 368,
          "end": 377
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionOfDifferentReturnType",
            "optional": false,
            "typeAnnotation": null,
            "start": 380,
            "end": 406
          },
          "property": {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 407,
            "end": 409
          },
          "optional": false,
          "computed": true,
          "start": 380,
          "end": 410
        },
        "start": 368,
        "end": 410
      },
      "directive": null,
      "start": 368,
      "end": 411
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
            "name": "unionOfTypesWithAndWithoutStringSignature",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSIndexSignature",
                        "parameters": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 483,
                                "end": 489
                              },
                              "start": 481,
                              "end": 489
                            },
                            "start": 480,
                            "end": 489
                          }
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 492,
                            "end": 498
                          },
                          "start": 490,
                          "end": 498
                        },
                        "readonly": false,
                        "static": false,
                        "accessibility": null,
                        "start": 479,
                        "end": 499
                      }
                    ],
                    "start": 477,
                    "end": 501
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 504,
                    "end": 511
                  }
                ],
                "start": 477,
                "end": 511
              },
              "start": 475,
              "end": 511
            },
            "start": 434,
            "end": 511
          },
          "init": null,
          "definite": false,
          "start": 434,
          "end": 511
        }
      ],
      "declare": false,
      "start": 430,
      "end": 512
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "anyVar",
          "optional": false,
          "typeAnnotation": null,
          "start": 513,
          "end": 519
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionOfTypesWithAndWithoutStringSignature",
            "optional": false,
            "typeAnnotation": null,
            "start": 522,
            "end": 563
          },
          "property": {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 564,
            "end": 571
          },
          "optional": false,
          "computed": true,
          "start": 522,
          "end": 572
        },
        "start": 513,
        "end": 572
      },
      "directive": null,
      "start": 513,
      "end": 573
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "anyVar",
          "optional": false,
          "typeAnnotation": null,
          "start": 581,
          "end": 587
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionOfTypesWithAndWithoutStringSignature",
            "optional": false,
            "typeAnnotation": null,
            "start": 590,
            "end": 631
          },
          "property": {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 632,
            "end": 634
          },
          "optional": false,
          "computed": true,
          "start": 590,
          "end": 635
        },
        "start": 581,
        "end": 635
      },
      "directive": null,
      "start": 581,
      "end": 636
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
            "name": "unionOfDifferentReturnType1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSIndexSignature",
                        "parameters": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 854,
                                "end": 860
                              },
                              "start": 852,
                              "end": 860
                            },
                            "start": 851,
                            "end": 860
                          }
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 863,
                            "end": 869
                          },
                          "start": 861,
                          "end": 869
                        },
                        "readonly": false,
                        "static": false,
                        "accessibility": null,
                        "start": 850,
                        "end": 870
                      }
                    ],
                    "start": 848,
                    "end": 872
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSIndexSignature",
                        "parameters": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 881,
                                "end": 887
                              },
                              "start": 879,
                              "end": 887
                            },
                            "start": 878,
                            "end": 887
                          }
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Date",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 890,
                              "end": 894
                            },
                            "typeArguments": null,
                            "start": 890,
                            "end": 894
                          },
                          "start": 888,
                          "end": 894
                        },
                        "readonly": false,
                        "static": false,
                        "accessibility": null,
                        "start": 877,
                        "end": 895
                      }
                    ],
                    "start": 875,
                    "end": 897
                  }
                ],
                "start": 848,
                "end": 897
              },
              "start": 846,
              "end": 897
            },
            "start": 819,
            "end": 897
          },
          "init": null,
          "definite": false,
          "start": 819,
          "end": 897
        }
      ],
      "declare": false,
      "start": 815,
      "end": 898
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "numOrDate",
          "optional": false,
          "typeAnnotation": null,
          "start": 899,
          "end": 908
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionOfDifferentReturnType1",
            "optional": false,
            "typeAnnotation": null,
            "start": 911,
            "end": 938
          },
          "property": {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 939,
            "end": 946
          },
          "optional": false,
          "computed": true,
          "start": 911,
          "end": 947
        },
        "start": 899,
        "end": 947
      },
      "directive": null,
      "start": 899,
      "end": 948
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "numOrDate",
          "optional": false,
          "typeAnnotation": null,
          "start": 956,
          "end": 965
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionOfDifferentReturnType1",
            "optional": false,
            "typeAnnotation": null,
            "start": 968,
            "end": 995
          },
          "property": {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 996,
            "end": 998
          },
          "optional": false,
          "computed": true,
          "start": 968,
          "end": 999
        },
        "start": 956,
        "end": 999
      },
      "directive": null,
      "start": 956,
      "end": 1000
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
            "name": "unionOfTypesWithAndWithoutStringSignature1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSIndexSignature",
                        "parameters": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1073,
                                "end": 1079
                              },
                              "start": 1071,
                              "end": 1079
                            },
                            "start": 1070,
                            "end": 1079
                          }
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1082,
                            "end": 1088
                          },
                          "start": 1080,
                          "end": 1088
                        },
                        "readonly": false,
                        "static": false,
                        "accessibility": null,
                        "start": 1069,
                        "end": 1089
                      }
                    ],
                    "start": 1067,
                    "end": 1091
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 1094,
                    "end": 1101
                  }
                ],
                "start": 1067,
                "end": 1101
              },
              "start": 1065,
              "end": 1101
            },
            "start": 1023,
            "end": 1101
          },
          "init": null,
          "definite": false,
          "start": 1023,
          "end": 1101
        }
      ],
      "declare": false,
      "start": 1019,
      "end": 1102
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "anyVar",
          "optional": false,
          "typeAnnotation": null,
          "start": 1103,
          "end": 1109
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionOfTypesWithAndWithoutStringSignature1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1112,
            "end": 1154
          },
          "property": {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 1155,
            "end": 1162
          },
          "optional": false,
          "computed": true,
          "start": 1112,
          "end": 1163
        },
        "start": 1103,
        "end": 1163
      },
      "directive": null,
      "start": 1103,
      "end": 1164
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "anyVar",
          "optional": false,
          "typeAnnotation": null,
          "start": 1172,
          "end": 1178
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionOfTypesWithAndWithoutStringSignature1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1181,
            "end": 1223
          },
          "property": {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 1224,
            "end": 1226
          },
          "optional": false,
          "computed": true,
          "start": 1181,
          "end": 1227
        },
        "start": 1172,
        "end": 1227
      },
      "directive": null,
      "start": 1172,
      "end": 1228
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1235
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 0,
    "end": 3
  },
  {
    "type": "Identifier",
    "value": "numOrDate",
    "start": 4,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 13,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 15,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 22,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 24,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 28,
    "end": 29
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 30,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "anyVar",
    "start": 34,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 40,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 42,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 48,
    "end": 49
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 219,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "unionOfDifferentReturnType",
    "start": 223,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 253,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 255,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 257,
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
    "value": ":",
    "start": 264,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 266,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 274,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 280,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 282,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 284,
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
    "value": ":",
    "start": 291,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 293,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 297,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 299,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 300,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "numOrDate",
    "start": 302,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 312,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "unionOfDifferentReturnType",
    "start": 314,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 340,
    "end": 341
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 341,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 348,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 349,
    "end": 350
  },
  {
    "type": "Identifier",
    "value": "numOrDate",
    "start": 368,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 378,
    "end": 379
  },
  {
    "type": "Identifier",
    "value": "unionOfDifferentReturnType",
    "start": 380,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 406,
    "end": 407
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 407,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 409,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 410,
    "end": 411
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 430,
    "end": 433
  },
  {
    "type": "Identifier",
    "value": "unionOfTypesWithAndWithoutStringSignature",
    "start": 434,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 475,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 477,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 479,
    "end": 480
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 480,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 481,
    "end": 482
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 483,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 489,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 490,
    "end": 491
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 492,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 498,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 500,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 502,
    "end": 503
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 504,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 511,
    "end": 512
  },
  {
    "type": "Identifier",
    "value": "anyVar",
    "start": 513,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 520,
    "end": 521
  },
  {
    "type": "Identifier",
    "value": "unionOfTypesWithAndWithoutStringSignature",
    "start": 522,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 563,
    "end": 564
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 564,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 571,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 572,
    "end": 573
  },
  {
    "type": "Identifier",
    "value": "anyVar",
    "start": 581,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 588,
    "end": 589
  },
  {
    "type": "Identifier",
    "value": "unionOfTypesWithAndWithoutStringSignature",
    "start": 590,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 631,
    "end": 632
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 632,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 634,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 635,
    "end": 636
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 815,
    "end": 818
  },
  {
    "type": "Identifier",
    "value": "unionOfDifferentReturnType1",
    "start": 819,
    "end": 846
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 846,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 848,
    "end": 849
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 850,
    "end": 851
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 851,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 852,
    "end": 853
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 854,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 860,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 861,
    "end": 862
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 863,
    "end": 869
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 869,
    "end": 870
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 871,
    "end": 872
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 873,
    "end": 874
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 875,
    "end": 876
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 877,
    "end": 878
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 878,
    "end": 879
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 879,
    "end": 880
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 881,
    "end": 887
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 887,
    "end": 888
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 888,
    "end": 889
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 890,
    "end": 894
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 894,
    "end": 895
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 896,
    "end": 897
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 897,
    "end": 898
  },
  {
    "type": "Identifier",
    "value": "numOrDate",
    "start": 899,
    "end": 908
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 909,
    "end": 910
  },
  {
    "type": "Identifier",
    "value": "unionOfDifferentReturnType1",
    "start": 911,
    "end": 938
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 938,
    "end": 939
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 939,
    "end": 946
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 946,
    "end": 947
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 947,
    "end": 948
  },
  {
    "type": "Identifier",
    "value": "numOrDate",
    "start": 956,
    "end": 965
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 966,
    "end": 967
  },
  {
    "type": "Identifier",
    "value": "unionOfDifferentReturnType1",
    "start": 968,
    "end": 995
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 995,
    "end": 996
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 996,
    "end": 998
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 998,
    "end": 999
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 999,
    "end": 1000
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1019,
    "end": 1022
  },
  {
    "type": "Identifier",
    "value": "unionOfTypesWithAndWithoutStringSignature1",
    "start": 1023,
    "end": 1065
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1065,
    "end": 1066
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1067,
    "end": 1068
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1069,
    "end": 1070
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1070,
    "end": 1071
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1071,
    "end": 1072
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1073,
    "end": 1079
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1079,
    "end": 1080
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1080,
    "end": 1081
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1082,
    "end": 1088
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1088,
    "end": 1089
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1090,
    "end": 1091
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1092,
    "end": 1093
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1094,
    "end": 1101
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1101,
    "end": 1102
  },
  {
    "type": "Identifier",
    "value": "anyVar",
    "start": 1103,
    "end": 1109
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1110,
    "end": 1111
  },
  {
    "type": "Identifier",
    "value": "unionOfTypesWithAndWithoutStringSignature1",
    "start": 1112,
    "end": 1154
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1154,
    "end": 1155
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1155,
    "end": 1162
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1162,
    "end": 1163
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1163,
    "end": 1164
  },
  {
    "type": "Identifier",
    "value": "anyVar",
    "start": 1172,
    "end": 1178
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1179,
    "end": 1180
  },
  {
    "type": "Identifier",
    "value": "unionOfTypesWithAndWithoutStringSignature1",
    "start": 1181,
    "end": 1223
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1223,
    "end": 1224
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1224,
    "end": 1226
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1226,
    "end": 1227
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1227,
    "end": 1228
  }
]
```
