__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "var1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 47,
                    "end": 53
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 56,
                    "end": 62
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 65,
                    "end": 72
                  },
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 75,
                      "end": 78
                    },
                    "start": 75,
                    "end": 80
                  },
                  {
                    "type": "TSSymbolKeyword",
                    "start": 83,
                    "end": 89
                  },
                  {
                    "type": "TSBigIntKeyword",
                    "start": 92,
                    "end": 98
                  }
                ],
                "start": 47,
                "end": 98
              },
              "start": 45,
              "end": 98
            },
            "start": 41,
            "end": 98
          },
          "init": null,
          "definite": false,
          "start": 41,
          "end": 98
        }
      ],
      "declare": false,
      "start": 37,
      "end": 99
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "var1",
            "optional": false,
            "typeAnnotation": null,
            "start": 104,
            "end": 108
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "constructor",
            "optional": false,
            "typeAnnotation": null,
            "start": 109,
            "end": 120
          },
          "optional": false,
          "computed": false,
          "start": 104,
          "end": 120
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "String",
          "optional": false,
          "typeAnnotation": null,
          "start": 125,
          "end": 131
        },
        "start": 104,
        "end": 131
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var1",
              "optional": false,
              "typeAnnotation": null,
              "start": 139,
              "end": 143
            },
            "directive": null,
            "start": 139,
            "end": 144
          }
        ],
        "start": 133,
        "end": 156
      },
      "alternate": null,
      "start": 100,
      "end": 156
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "var1",
            "optional": false,
            "typeAnnotation": null,
            "start": 161,
            "end": 165
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "constructor",
            "optional": false,
            "typeAnnotation": null,
            "start": 166,
            "end": 177
          },
          "optional": false,
          "computed": false,
          "start": 161,
          "end": 177
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Number",
          "optional": false,
          "typeAnnotation": null,
          "start": 182,
          "end": 188
        },
        "start": 161,
        "end": 188
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var1",
              "optional": false,
              "typeAnnotation": null,
              "start": 196,
              "end": 200
            },
            "directive": null,
            "start": 196,
            "end": 201
          }
        ],
        "start": 190,
        "end": 213
      },
      "alternate": null,
      "start": 157,
      "end": 213
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "var1",
            "optional": false,
            "typeAnnotation": null,
            "start": 218,
            "end": 222
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "constructor",
            "optional": false,
            "typeAnnotation": null,
            "start": 223,
            "end": 234
          },
          "optional": false,
          "computed": false,
          "start": 218,
          "end": 234
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Boolean",
          "optional": false,
          "typeAnnotation": null,
          "start": 239,
          "end": 246
        },
        "start": 218,
        "end": 246
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var1",
              "optional": false,
              "typeAnnotation": null,
              "start": 254,
              "end": 258
            },
            "directive": null,
            "start": 254,
            "end": 259
          }
        ],
        "start": 248,
        "end": 272
      },
      "alternate": null,
      "start": 214,
      "end": 272
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "var1",
            "optional": false,
            "typeAnnotation": null,
            "start": 277,
            "end": 281
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "constructor",
            "optional": false,
            "typeAnnotation": null,
            "start": 282,
            "end": 293
          },
          "optional": false,
          "computed": false,
          "start": 277,
          "end": 293
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Array",
          "optional": false,
          "typeAnnotation": null,
          "start": 298,
          "end": 303
        },
        "start": 277,
        "end": 303
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var1",
              "optional": false,
              "typeAnnotation": null,
              "start": 311,
              "end": 315
            },
            "directive": null,
            "start": 311,
            "end": 316
          }
        ],
        "start": 305,
        "end": 327
      },
      "alternate": null,
      "start": 273,
      "end": 327
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "var1",
            "optional": false,
            "typeAnnotation": null,
            "start": 332,
            "end": 336
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "constructor",
            "optional": false,
            "typeAnnotation": null,
            "start": 337,
            "end": 348
          },
          "optional": false,
          "computed": false,
          "start": 332,
          "end": 348
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Symbol",
          "optional": false,
          "typeAnnotation": null,
          "start": 353,
          "end": 359
        },
        "start": 332,
        "end": 359
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var1",
              "optional": false,
              "typeAnnotation": null,
              "start": 367,
              "end": 371
            },
            "directive": null,
            "start": 367,
            "end": 372
          }
        ],
        "start": 361,
        "end": 384
      },
      "alternate": null,
      "start": 328,
      "end": 384
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "var1",
            "optional": false,
            "typeAnnotation": null,
            "start": 389,
            "end": 393
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "constructor",
            "optional": false,
            "typeAnnotation": null,
            "start": 394,
            "end": 405
          },
          "optional": false,
          "computed": false,
          "start": 389,
          "end": 405
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "BigInt",
          "optional": false,
          "typeAnnotation": null,
          "start": 410,
          "end": 416
        },
        "start": 389,
        "end": 416
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var1",
              "optional": false,
              "typeAnnotation": null,
              "start": 424,
              "end": 428
            },
            "directive": null,
            "start": 424,
            "end": 429
          }
        ],
        "start": 418,
        "end": 441
      },
      "alternate": null,
      "start": 385,
      "end": 441
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "var2",
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
                      "name": "String",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 497,
                      "end": 503
                    },
                    "typeArguments": null,
                    "start": 497,
                    "end": 503
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Number",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 506,
                      "end": 512
                    },
                    "typeArguments": null,
                    "start": 506,
                    "end": 512
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Boolean",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 515,
                      "end": 522
                    },
                    "typeArguments": null,
                    "start": 515,
                    "end": 522
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Symbol",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 525,
                      "end": 531
                    },
                    "typeArguments": null,
                    "start": 525,
                    "end": 531
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "BigInt",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 534,
                      "end": 540
                    },
                    "typeArguments": null,
                    "start": 534,
                    "end": 540
                  }
                ],
                "start": 497,
                "end": 540
              },
              "start": 495,
              "end": 540
            },
            "start": 491,
            "end": 540
          },
          "init": null,
          "definite": false,
          "start": 491,
          "end": 540
        }
      ],
      "declare": false,
      "start": 487,
      "end": 541
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "var2",
            "optional": false,
            "typeAnnotation": null,
            "start": 546,
            "end": 550
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "constructor",
            "optional": false,
            "typeAnnotation": null,
            "start": 551,
            "end": 562
          },
          "optional": false,
          "computed": false,
          "start": 546,
          "end": 562
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "String",
          "optional": false,
          "typeAnnotation": null,
          "start": 567,
          "end": 573
        },
        "start": 546,
        "end": 573
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var2",
              "optional": false,
              "typeAnnotation": null,
              "start": 581,
              "end": 585
            },
            "directive": null,
            "start": 581,
            "end": 586
          }
        ],
        "start": 575,
        "end": 598
      },
      "alternate": null,
      "start": 542,
      "end": 598
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "var2",
            "optional": false,
            "typeAnnotation": null,
            "start": 603,
            "end": 607
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "constructor",
            "optional": false,
            "typeAnnotation": null,
            "start": 608,
            "end": 619
          },
          "optional": false,
          "computed": false,
          "start": 603,
          "end": 619
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Number",
          "optional": false,
          "typeAnnotation": null,
          "start": 624,
          "end": 630
        },
        "start": 603,
        "end": 630
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var2",
              "optional": false,
              "typeAnnotation": null,
              "start": 638,
              "end": 642
            },
            "directive": null,
            "start": 638,
            "end": 643
          }
        ],
        "start": 632,
        "end": 655
      },
      "alternate": null,
      "start": 599,
      "end": 655
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "var2",
            "optional": false,
            "typeAnnotation": null,
            "start": 660,
            "end": 664
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "constructor",
            "optional": false,
            "typeAnnotation": null,
            "start": 665,
            "end": 676
          },
          "optional": false,
          "computed": false,
          "start": 660,
          "end": 676
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Boolean",
          "optional": false,
          "typeAnnotation": null,
          "start": 681,
          "end": 688
        },
        "start": 660,
        "end": 688
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var2",
              "optional": false,
              "typeAnnotation": null,
              "start": 696,
              "end": 700
            },
            "directive": null,
            "start": 696,
            "end": 701
          }
        ],
        "start": 690,
        "end": 714
      },
      "alternate": null,
      "start": 656,
      "end": 714
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "var2",
            "optional": false,
            "typeAnnotation": null,
            "start": 719,
            "end": 723
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "constructor",
            "optional": false,
            "typeAnnotation": null,
            "start": 724,
            "end": 735
          },
          "optional": false,
          "computed": false,
          "start": 719,
          "end": 735
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Symbol",
          "optional": false,
          "typeAnnotation": null,
          "start": 740,
          "end": 746
        },
        "start": 719,
        "end": 746
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var2",
              "optional": false,
              "typeAnnotation": null,
              "start": 754,
              "end": 758
            },
            "directive": null,
            "start": 754,
            "end": 759
          }
        ],
        "start": 748,
        "end": 771
      },
      "alternate": null,
      "start": 715,
      "end": 771
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "var2",
            "optional": false,
            "typeAnnotation": null,
            "start": 776,
            "end": 780
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "constructor",
            "optional": false,
            "typeAnnotation": null,
            "start": 781,
            "end": 792
          },
          "optional": false,
          "computed": false,
          "start": 776,
          "end": 792
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "BigInt",
          "optional": false,
          "typeAnnotation": null,
          "start": 797,
          "end": 803
        },
        "start": 776,
        "end": 803
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var2",
              "optional": false,
              "typeAnnotation": null,
              "start": 811,
              "end": 815
            },
            "directive": null,
            "start": 811,
            "end": 816
          }
        ],
        "start": 805,
        "end": 828
      },
      "alternate": null,
      "start": 772,
      "end": 828
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 37,
  "end": 828
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "let",
    "start": 37,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 41,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 45,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 47,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 54,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 56,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 63,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 65,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 75,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 81,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 83,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 90,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "bigint",
    "start": 92,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 98,
    "end": 99
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 100,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 103,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 104,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 108,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 109,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 121,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "String",
    "start": 125,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 133,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 139,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 155,
    "end": 156
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 157,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 160,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 161,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 165,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 166,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 178,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "Number",
    "start": 182,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 190,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 196,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 212,
    "end": 213
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 214,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 217,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 218,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 222,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 223,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 235,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "Boolean",
    "start": 239,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 248,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 254,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 271,
    "end": 272
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 273,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 276,
    "end": 277
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 277,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 281,
    "end": 282
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 282,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 294,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 298,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 303,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 305,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 311,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 315,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 326,
    "end": 327
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 328,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 331,
    "end": 332
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 332,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 336,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 337,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 349,
    "end": 352
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 353,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 361,
    "end": 362
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 367,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 371,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 383,
    "end": 384
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 385,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 388,
    "end": 389
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 389,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 393,
    "end": 394
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 394,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 406,
    "end": 409
  },
  {
    "type": "Identifier",
    "value": "BigInt",
    "start": 410,
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
    "value": "{",
    "start": 418,
    "end": 419
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 424,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 428,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 440,
    "end": 441
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 487,
    "end": 490
  },
  {
    "type": "Identifier",
    "value": "var2",
    "start": 491,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 495,
    "end": 496
  },
  {
    "type": "Identifier",
    "value": "String",
    "start": 497,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 504,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "Number",
    "start": 506,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 513,
    "end": 514
  },
  {
    "type": "Identifier",
    "value": "Boolean",
    "start": 515,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 523,
    "end": 524
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 525,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 532,
    "end": 533
  },
  {
    "type": "Identifier",
    "value": "BigInt",
    "start": 534,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 540,
    "end": 541
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 542,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 545,
    "end": 546
  },
  {
    "type": "Identifier",
    "value": "var2",
    "start": 546,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 550,
    "end": 551
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 551,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 563,
    "end": 566
  },
  {
    "type": "Identifier",
    "value": "String",
    "start": 567,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 573,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 575,
    "end": 576
  },
  {
    "type": "Identifier",
    "value": "var2",
    "start": 581,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 585,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 597,
    "end": 598
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 599,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 602,
    "end": 603
  },
  {
    "type": "Identifier",
    "value": "var2",
    "start": 603,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 607,
    "end": 608
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 608,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 620,
    "end": 623
  },
  {
    "type": "Identifier",
    "value": "Number",
    "start": 624,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 630,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 632,
    "end": 633
  },
  {
    "type": "Identifier",
    "value": "var2",
    "start": 638,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 642,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 654,
    "end": 655
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 656,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 659,
    "end": 660
  },
  {
    "type": "Identifier",
    "value": "var2",
    "start": 660,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 664,
    "end": 665
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 665,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 677,
    "end": 680
  },
  {
    "type": "Identifier",
    "value": "Boolean",
    "start": 681,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 688,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 690,
    "end": 691
  },
  {
    "type": "Identifier",
    "value": "var2",
    "start": 696,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 700,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 713,
    "end": 714
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 715,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 718,
    "end": 719
  },
  {
    "type": "Identifier",
    "value": "var2",
    "start": 719,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 723,
    "end": 724
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 724,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 736,
    "end": 739
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 740,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 746,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 748,
    "end": 749
  },
  {
    "type": "Identifier",
    "value": "var2",
    "start": 754,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 758,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 770,
    "end": 771
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 772,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 775,
    "end": 776
  },
  {
    "type": "Identifier",
    "value": "var2",
    "start": 776,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 780,
    "end": 781
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 781,
    "end": 792
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 793,
    "end": 796
  },
  {
    "type": "Identifier",
    "value": "BigInt",
    "start": 797,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 803,
    "end": 804
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 805,
    "end": 806
  },
  {
    "type": "Identifier",
    "value": "var2",
    "start": 811,
    "end": 815
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 815,
    "end": 816
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 827,
    "end": 828
  }
]
```
