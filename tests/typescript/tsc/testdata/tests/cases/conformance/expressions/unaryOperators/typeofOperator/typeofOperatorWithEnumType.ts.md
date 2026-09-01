__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ENUM",
        "optional": false,
        "typeAnnotation": null,
        "start": 39,
        "end": 43
      },
      "body": {
        "type": "TSEnumBody",
        "members": [],
        "start": 44,
        "end": 47
      },
      "const": false,
      "declare": false,
      "start": 34,
      "end": 47
    },
    {
      "type": "EmptyStatement",
      "start": 47,
      "end": 48
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ENUM1",
        "optional": false,
        "typeAnnotation": null,
        "start": 54,
        "end": 59
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 62,
              "end": 63
            },
            "initializer": null,
            "computed": false,
            "start": 62,
            "end": 63
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 65,
              "end": 66
            },
            "initializer": null,
            "computed": false,
            "start": 65,
            "end": 66
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Literal",
              "value": "",
              "raw": "\"\"",
              "start": 68,
              "end": 70
            },
            "initializer": null,
            "computed": false,
            "start": 68,
            "end": 70
          }
        ],
        "start": 60,
        "end": 72
      },
      "const": false,
      "declare": false,
      "start": 49,
      "end": 72
    },
    {
      "type": "EmptyStatement",
      "start": 72,
      "end": 73
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
            "name": "ResultIsString1",
            "optional": false,
            "typeAnnotation": null,
            "start": 96,
            "end": 111
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ENUM",
              "optional": false,
              "typeAnnotation": null,
              "start": 121,
              "end": 125
            },
            "prefix": true,
            "start": 114,
            "end": 125
          },
          "definite": false,
          "start": 96,
          "end": 125
        }
      ],
      "declare": false,
      "start": 92,
      "end": 126
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
            "name": "ResultIsString2",
            "optional": false,
            "typeAnnotation": null,
            "start": 131,
            "end": 146
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ENUM1",
              "optional": false,
              "typeAnnotation": null,
              "start": 156,
              "end": 161
            },
            "prefix": true,
            "start": 149,
            "end": 161
          },
          "definite": false,
          "start": 131,
          "end": 161
        }
      ],
      "declare": false,
      "start": 127,
      "end": 162
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
            "name": "ResultIsString3",
            "optional": false,
            "typeAnnotation": null,
            "start": 193,
            "end": 208
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "ENUM1",
                "optional": false,
                "typeAnnotation": null,
                "start": 218,
                "end": 223
              },
              "property": {
                "type": "Literal",
                "value": "A",
                "raw": "\"A\"",
                "start": 224,
                "end": 227
              },
              "optional": false,
              "computed": true,
              "start": 218,
              "end": 228
            },
            "prefix": true,
            "start": 211,
            "end": 228
          },
          "definite": false,
          "start": 193,
          "end": 228
        }
      ],
      "declare": false,
      "start": 189,
      "end": 229
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
            "name": "ResultIsString4",
            "optional": false,
            "typeAnnotation": null,
            "start": 234,
            "end": 249
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ENUM",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 260,
                  "end": 264
                },
                "property": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 265,
                  "end": 266
                },
                "optional": false,
                "computed": true,
                "start": 260,
                "end": 267
              },
              "operator": "+",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ENUM1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 270,
                  "end": 275
                },
                "property": {
                  "type": "Literal",
                  "value": "B",
                  "raw": "\"B\"",
                  "start": 276,
                  "end": 279
                },
                "optional": false,
                "computed": true,
                "start": 270,
                "end": 280
              },
              "start": 260,
              "end": 280
            },
            "prefix": true,
            "start": 252,
            "end": 281
          },
          "definite": false,
          "start": 234,
          "end": 281
        }
      ],
      "declare": false,
      "start": 230,
      "end": 282
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
            "name": "ResultIsString5",
            "optional": false,
            "typeAnnotation": null,
            "start": 318,
            "end": 333
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "UnaryExpression",
              "operator": "typeof",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "ENUM",
                "optional": false,
                "typeAnnotation": null,
                "start": 350,
                "end": 354
              },
              "prefix": true,
              "start": 343,
              "end": 354
            },
            "prefix": true,
            "start": 336,
            "end": 354
          },
          "definite": false,
          "start": 318,
          "end": 354
        }
      ],
      "declare": false,
      "start": 314,
      "end": 355
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
            "name": "ResultIsString6",
            "optional": false,
            "typeAnnotation": null,
            "start": 360,
            "end": 375
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "UnaryExpression",
              "operator": "typeof",
              "argument": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ENUM",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 400,
                      "end": 404
                    },
                    "property": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 405,
                      "end": 406
                    },
                    "optional": false,
                    "computed": true,
                    "start": 400,
                    "end": 407
                  },
                  "operator": "+",
                  "right": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ENUM1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 410,
                      "end": 415
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 416,
                      "end": 417
                    },
                    "optional": false,
                    "computed": false,
                    "start": 410,
                    "end": 417
                  },
                  "start": 400,
                  "end": 417
                },
                "prefix": true,
                "start": 392,
                "end": 418
              },
              "prefix": true,
              "start": 385,
              "end": 418
            },
            "prefix": true,
            "start": 378,
            "end": 418
          },
          "definite": false,
          "start": 360,
          "end": 418
        }
      ],
      "declare": false,
      "start": 356,
      "end": 419
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "typeof",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "ENUM",
          "optional": false,
          "typeAnnotation": null,
          "start": 457,
          "end": 461
        },
        "prefix": true,
        "start": 450,
        "end": 461
      },
      "directive": null,
      "start": 450,
      "end": 462
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "typeof",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "ENUM1",
          "optional": false,
          "typeAnnotation": null,
          "start": 470,
          "end": 475
        },
        "prefix": true,
        "start": 463,
        "end": 475
      },
      "directive": null,
      "start": 463,
      "end": 476
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "typeof",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "ENUM1",
            "optional": false,
            "typeAnnotation": null,
            "start": 484,
            "end": 489
          },
          "property": {
            "type": "Literal",
            "value": "B",
            "raw": "\"B\"",
            "start": 490,
            "end": 493
          },
          "optional": false,
          "computed": true,
          "start": 484,
          "end": 494
        },
        "prefix": true,
        "start": 477,
        "end": 494
      },
      "directive": null,
      "start": 477,
      "end": 495
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ENUM",
              "optional": false,
              "typeAnnotation": null,
              "start": 503,
              "end": 507
            },
            "prefix": true,
            "start": 496,
            "end": 507
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "ENUM1",
            "optional": false,
            "typeAnnotation": null,
            "start": 509,
            "end": 514
          }
        ],
        "start": 496,
        "end": 514
      },
      "directive": null,
      "start": 496,
      "end": 515
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "z",
        "optional": false,
        "typeAnnotation": null,
        "start": 550,
        "end": 551
      },
      "body": {
        "type": "TSEnumBody",
        "members": [],
        "start": 552,
        "end": 555
      },
      "const": false,
      "declare": false,
      "start": 545,
      "end": 555
    },
    {
      "type": "EmptyStatement",
      "start": 555,
      "end": 556
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "z",
        "optional": false,
        "typeAnnotation": null,
        "start": 557,
        "end": 558
      },
      "body": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "ENUM",
            "optional": false,
            "typeAnnotation": null,
            "start": 567,
            "end": 571
          },
          "prefix": true,
          "start": 560,
          "end": 571
        },
        "directive": null,
        "start": 560,
        "end": 572
      },
      "start": 557,
      "end": 572
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "z",
        "optional": false,
        "typeAnnotation": null,
        "start": 573,
        "end": 574
      },
      "body": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "ENUM1",
            "optional": false,
            "typeAnnotation": null,
            "start": 583,
            "end": 588
          },
          "prefix": true,
          "start": 576,
          "end": 588
        },
        "directive": null,
        "start": 576,
        "end": 589
      },
      "start": 573,
      "end": 589
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 34,
  "end": 589
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "enum",
    "start": 34,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "ENUM",
    "start": 39,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 47,
    "end": 48
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 49,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "ENUM1",
    "start": 54,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 60,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 63,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 66,
    "end": 67
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 68,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 72,
    "end": 73
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 92,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "ResultIsString1",
    "start": 96,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 112,
    "end": 113
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 114,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "ENUM",
    "start": 121,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 125,
    "end": 126
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 127,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "ResultIsString2",
    "start": 131,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 147,
    "end": 148
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 149,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "ENUM1",
    "start": 156,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 161,
    "end": 162
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 189,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "ResultIsString3",
    "start": 193,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 209,
    "end": 210
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 211,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "ENUM1",
    "start": 218,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 223,
    "end": 224
  },
  {
    "type": "String",
    "value": "\"A\"",
    "start": 224,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 227,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 228,
    "end": 229
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 230,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "ResultIsString4",
    "start": 234,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 250,
    "end": 251
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 252,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 259,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "ENUM",
    "start": 260,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 264,
    "end": 265
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 265,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 266,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 268,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "ENUM1",
    "start": 270,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 275,
    "end": 276
  },
  {
    "type": "String",
    "value": "\"B\"",
    "start": 276,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 280,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 281,
    "end": 282
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 314,
    "end": 317
  },
  {
    "type": "Identifier",
    "value": "ResultIsString5",
    "start": 318,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 334,
    "end": 335
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 336,
    "end": 342
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 343,
    "end": 349
  },
  {
    "type": "Identifier",
    "value": "ENUM",
    "start": 350,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 354,
    "end": 355
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 356,
    "end": 359
  },
  {
    "type": "Identifier",
    "value": "ResultIsString6",
    "start": 360,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 376,
    "end": 377
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 378,
    "end": 384
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 385,
    "end": 391
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 392,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 399,
    "end": 400
  },
  {
    "type": "Identifier",
    "value": "ENUM",
    "start": 400,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 404,
    "end": 405
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 405,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 406,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 408,
    "end": 409
  },
  {
    "type": "Identifier",
    "value": "ENUM1",
    "start": 410,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 415,
    "end": 416
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 416,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 417,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 418,
    "end": 419
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 450,
    "end": 456
  },
  {
    "type": "Identifier",
    "value": "ENUM",
    "start": 457,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 461,
    "end": 462
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 463,
    "end": 469
  },
  {
    "type": "Identifier",
    "value": "ENUM1",
    "start": 470,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 475,
    "end": 476
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 477,
    "end": 483
  },
  {
    "type": "Identifier",
    "value": "ENUM1",
    "start": 484,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 489,
    "end": 490
  },
  {
    "type": "String",
    "value": "\"B\"",
    "start": 490,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 493,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 494,
    "end": 495
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 496,
    "end": 502
  },
  {
    "type": "Identifier",
    "value": "ENUM",
    "start": 503,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 507,
    "end": 508
  },
  {
    "type": "Identifier",
    "value": "ENUM1",
    "start": 509,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 514,
    "end": 515
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 545,
    "end": 549
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 550,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 552,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 554,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 555,
    "end": 556
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 557,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 558,
    "end": 559
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 560,
    "end": 566
  },
  {
    "type": "Identifier",
    "value": "ENUM",
    "start": 567,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 571,
    "end": 572
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 573,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 574,
    "end": 575
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 576,
    "end": 582
  },
  {
    "type": "Identifier",
    "value": "ENUM1",
    "start": 583,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 588,
    "end": 589
  }
]
```
