__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isObject1",
        "optional": false,
        "typeAnnotation": null,
        "start": 57,
        "end": 66
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 74,
              "end": 81
            },
            "start": 72,
            "end": 81
          },
          "start": 67,
          "end": 81
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 84,
            "end": 89
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 93,
                "end": 99
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 100,
                    "end": 106
                  },
                  {
                    "type": "TSUnknownKeyword",
                    "start": 108,
                    "end": 115
                  }
                ],
                "start": 99,
                "end": 116
              },
              "start": 93,
              "end": 116
            },
            "start": 93,
            "end": 116
          },
          "start": 84,
          "end": 116
        },
        "start": 82,
        "end": 116
      },
      "body": null,
      "expression": false,
      "start": 40,
      "end": 117
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 139,
                "end": 141
              },
              "start": 137,
              "end": 141
            },
            "start": 133,
            "end": 141
          },
          "init": null,
          "definite": false,
          "start": 133,
          "end": 141
        }
      ],
      "declare": true,
      "start": 119,
      "end": 142
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "isObject1",
          "optional": false,
          "typeAnnotation": null,
          "start": 147,
          "end": 156
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "obj1",
            "optional": false,
            "typeAnnotation": null,
            "start": 157,
            "end": 161
          }
        ],
        "optional": false,
        "start": 147,
        "end": 162
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj1",
              "optional": false,
              "typeAnnotation": null,
              "start": 170,
              "end": 174
            },
            "directive": null,
            "start": 170,
            "end": 175
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj1",
                "optional": false,
                "typeAnnotation": null,
                "start": 180,
                "end": 184
              },
              "property": {
                "type": "Literal",
                "value": "attr",
                "raw": "'attr'",
                "start": 185,
                "end": 191
              },
              "optional": false,
              "computed": true,
              "start": 180,
              "end": 192
            },
            "directive": null,
            "start": 180,
            "end": 193
          }
        ],
        "start": 164,
        "end": 195
      },
      "alternate": null,
      "start": 143,
      "end": 195
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "obj1",
        "optional": false,
        "typeAnnotation": null,
        "start": 234,
        "end": 238
      },
      "directive": null,
      "start": 234,
      "end": 239
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [],
                    "start": 261,
                    "end": 263
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 266,
                    "end": 275
                  }
                ],
                "start": 261,
                "end": 275
              },
              "start": 259,
              "end": 275
            },
            "start": 255,
            "end": 275
          },
          "init": null,
          "definite": false,
          "start": 255,
          "end": 275
        }
      ],
      "declare": true,
      "start": 241,
      "end": 276
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "isObject1",
          "optional": false,
          "typeAnnotation": null,
          "start": 281,
          "end": 290
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "obj2",
            "optional": false,
            "typeAnnotation": null,
            "start": 291,
            "end": 295
          }
        ],
        "optional": false,
        "start": 281,
        "end": 296
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj2",
              "optional": false,
              "typeAnnotation": null,
              "start": 304,
              "end": 308
            },
            "directive": null,
            "start": 304,
            "end": 309
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj2",
                "optional": false,
                "typeAnnotation": null,
                "start": 314,
                "end": 318
              },
              "property": {
                "type": "Literal",
                "value": "attr",
                "raw": "'attr'",
                "start": 319,
                "end": 325
              },
              "optional": false,
              "computed": true,
              "start": 314,
              "end": 326
            },
            "directive": null,
            "start": 314,
            "end": 327
          }
        ],
        "start": 298,
        "end": 329
      },
      "alternate": null,
      "start": 277,
      "end": 329
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "obj2",
        "optional": false,
        "typeAnnotation": null,
        "start": 368,
        "end": 372
      },
      "directive": null,
      "start": 368,
      "end": 373
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isObject2",
        "optional": false,
        "typeAnnotation": null,
        "start": 392,
        "end": 401
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 409,
              "end": 416
            },
            "start": 407,
            "end": 416
          },
          "start": 402,
          "end": 416
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 419,
            "end": 424
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 428,
              "end": 430
            },
            "start": 428,
            "end": 430
          },
          "start": 419,
          "end": 430
        },
        "start": 417,
        "end": 430
      },
      "body": null,
      "expression": false,
      "start": 375,
      "end": 431
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Record",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 453,
                  "end": 459
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 460,
                      "end": 466
                    },
                    {
                      "type": "TSUnknownKeyword",
                      "start": 468,
                      "end": 475
                    }
                  ],
                  "start": 459,
                  "end": 476
                },
                "start": 453,
                "end": 476
              },
              "start": 451,
              "end": 476
            },
            "start": 447,
            "end": 476
          },
          "init": null,
          "definite": false,
          "start": 447,
          "end": 476
        }
      ],
      "declare": true,
      "start": 433,
      "end": 477
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "isObject2",
          "optional": false,
          "typeAnnotation": null,
          "start": 482,
          "end": 491
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "obj3",
            "optional": false,
            "typeAnnotation": null,
            "start": 492,
            "end": 496
          }
        ],
        "optional": false,
        "start": 482,
        "end": 497
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj3",
              "optional": false,
              "typeAnnotation": null,
              "start": 505,
              "end": 509
            },
            "directive": null,
            "start": 505,
            "end": 510
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj3",
                "optional": false,
                "typeAnnotation": null,
                "start": 515,
                "end": 519
              },
              "property": {
                "type": "Literal",
                "value": "attr",
                "raw": "'attr'",
                "start": 520,
                "end": 526
              },
              "optional": false,
              "computed": true,
              "start": 515,
              "end": 527
            },
            "directive": null,
            "start": 515,
            "end": 528
          }
        ],
        "start": 499,
        "end": 530
      },
      "alternate": null,
      "start": 478,
      "end": 530
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "obj3",
        "optional": false,
        "typeAnnotation": null,
        "start": 569,
        "end": 573
      },
      "directive": null,
      "start": 569,
      "end": 574
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Record",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 596,
                      "end": 602
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 603,
                          "end": 609
                        },
                        {
                          "type": "TSUnknownKeyword",
                          "start": 611,
                          "end": 618
                        }
                      ],
                      "start": 602,
                      "end": 619
                    },
                    "start": 596,
                    "end": 619
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 622,
                    "end": 631
                  }
                ],
                "start": 596,
                "end": 631
              },
              "start": 594,
              "end": 631
            },
            "start": 590,
            "end": 631
          },
          "init": null,
          "definite": false,
          "start": 590,
          "end": 631
        }
      ],
      "declare": true,
      "start": 576,
      "end": 632
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "isObject2",
          "optional": false,
          "typeAnnotation": null,
          "start": 637,
          "end": 646
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "obj4",
            "optional": false,
            "typeAnnotation": null,
            "start": 647,
            "end": 651
          }
        ],
        "optional": false,
        "start": 637,
        "end": 652
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj4",
              "optional": false,
              "typeAnnotation": null,
              "start": 660,
              "end": 664
            },
            "directive": null,
            "start": 660,
            "end": 665
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj4",
                "optional": false,
                "typeAnnotation": null,
                "start": 670,
                "end": 674
              },
              "property": {
                "type": "Literal",
                "value": "attr",
                "raw": "'attr'",
                "start": 675,
                "end": 681
              },
              "optional": false,
              "computed": true,
              "start": 670,
              "end": 682
            },
            "directive": null,
            "start": 670,
            "end": 683
          }
        ],
        "start": 654,
        "end": 685
      },
      "alternate": null,
      "start": 633,
      "end": 685
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "obj4",
        "optional": false,
        "typeAnnotation": null,
        "start": 724,
        "end": 728
      },
      "directive": null,
      "start": 724,
      "end": 729
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 40,
  "end": 729
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 40,
    "end": 47
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 48,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "isObject1",
    "start": 57,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 66,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 67,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 72,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 74,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 82,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 84,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 90,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 93,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 99,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 100,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 106,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 108,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 116,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 119,
    "end": 126
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 127,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 133,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 141,
    "end": 142
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 143,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 146,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "isObject1",
    "start": 147,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 156,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 157,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 164,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 170,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 174,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 180,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 184,
    "end": 185
  },
  {
    "type": "String",
    "value": "'attr'",
    "start": 185,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 194,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 234,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 238,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 241,
    "end": 248
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 249,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "obj2",
    "start": 255,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 261,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 264,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 266,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 275,
    "end": 276
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 277,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 280,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "isObject1",
    "start": 281,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 290,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "obj2",
    "start": 291,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 296,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 298,
    "end": 299
  },
  {
    "type": "Identifier",
    "value": "obj2",
    "start": 304,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 308,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "obj2",
    "start": 314,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 318,
    "end": 319
  },
  {
    "type": "String",
    "value": "'attr'",
    "start": 319,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 325,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 328,
    "end": 329
  },
  {
    "type": "Identifier",
    "value": "obj2",
    "start": 368,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 372,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 375,
    "end": 382
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 383,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "isObject2",
    "start": 392,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 401,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 402,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 407,
    "end": 408
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 409,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 416,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 417,
    "end": 418
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 419,
    "end": 424
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 425,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 428,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 429,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 430,
    "end": 431
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 433,
    "end": 440
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 441,
    "end": 446
  },
  {
    "type": "Identifier",
    "value": "obj3",
    "start": 447,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 451,
    "end": 452
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 453,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 459,
    "end": 460
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 460,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 466,
    "end": 467
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 468,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 475,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 476,
    "end": 477
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 478,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 481,
    "end": 482
  },
  {
    "type": "Identifier",
    "value": "isObject2",
    "start": 482,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 491,
    "end": 492
  },
  {
    "type": "Identifier",
    "value": "obj3",
    "start": 492,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 496,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 497,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 499,
    "end": 500
  },
  {
    "type": "Identifier",
    "value": "obj3",
    "start": 505,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 509,
    "end": 510
  },
  {
    "type": "Identifier",
    "value": "obj3",
    "start": 515,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 519,
    "end": 520
  },
  {
    "type": "String",
    "value": "'attr'",
    "start": 520,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 526,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 527,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 529,
    "end": 530
  },
  {
    "type": "Identifier",
    "value": "obj3",
    "start": 569,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 573,
    "end": 574
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 576,
    "end": 583
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 584,
    "end": 589
  },
  {
    "type": "Identifier",
    "value": "obj4",
    "start": 590,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 594,
    "end": 595
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 596,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 602,
    "end": 603
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 603,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 609,
    "end": 610
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 611,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 618,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 620,
    "end": 621
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 622,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 631,
    "end": 632
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 633,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 636,
    "end": 637
  },
  {
    "type": "Identifier",
    "value": "isObject2",
    "start": 637,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 646,
    "end": 647
  },
  {
    "type": "Identifier",
    "value": "obj4",
    "start": 647,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 651,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 652,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 654,
    "end": 655
  },
  {
    "type": "Identifier",
    "value": "obj4",
    "start": 660,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 664,
    "end": 665
  },
  {
    "type": "Identifier",
    "value": "obj4",
    "start": 670,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 674,
    "end": 675
  },
  {
    "type": "String",
    "value": "'attr'",
    "start": 675,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 681,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 682,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 684,
    "end": 685
  },
  {
    "type": "Identifier",
    "value": "obj4",
    "start": 724,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 728,
    "end": 729
  }
]
```
