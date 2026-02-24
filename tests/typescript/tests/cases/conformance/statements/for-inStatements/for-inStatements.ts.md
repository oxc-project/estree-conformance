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
            "name": "aString",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 13,
                "end": 19
              },
              "start": 11,
              "end": 19
            },
            "start": 4,
            "end": 19
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 19
        }
      ],
      "declare": false,
      "start": 0,
      "end": 20
    },
    {
      "type": "ForInStatement",
      "left": {
        "type": "Identifier",
        "decorators": [],
        "name": "aString",
        "optional": false,
        "typeAnnotation": null,
        "start": 26,
        "end": 33
      },
      "right": {
        "type": "ObjectExpression",
        "properties": [],
        "start": 37,
        "end": 39
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 41,
        "end": 44
      },
      "start": 21,
      "end": 44
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
            "name": "anAny",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 57,
                "end": 60
              },
              "start": 55,
              "end": 60
            },
            "start": 50,
            "end": 60
          },
          "init": null,
          "definite": false,
          "start": 50,
          "end": 60
        }
      ],
      "declare": false,
      "start": 46,
      "end": 61
    },
    {
      "type": "ForInStatement",
      "left": {
        "type": "Identifier",
        "decorators": [],
        "name": "anAny",
        "optional": false,
        "typeAnnotation": null,
        "start": 67,
        "end": 72
      },
      "right": {
        "type": "ObjectExpression",
        "properties": [],
        "start": 76,
        "end": 78
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 80,
        "end": 83
      },
      "start": 62,
      "end": 83
    },
    {
      "type": "ForInStatement",
      "left": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 94,
              "end": 95
            },
            "init": null,
            "definite": false,
            "start": 94,
            "end": 95
          }
        ],
        "declare": false,
        "start": 90,
        "end": 95
      },
      "right": {
        "type": "ObjectExpression",
        "properties": [],
        "start": 99,
        "end": 101
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 103,
        "end": 106
      },
      "start": 85,
      "end": 106
    },
    {
      "type": "ForInStatement",
      "left": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 116,
              "end": 117
            },
            "init": null,
            "definite": false,
            "start": 116,
            "end": 117
          }
        ],
        "declare": false,
        "start": 112,
        "end": 117
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [],
        "start": 121,
        "end": 123
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 125,
        "end": 128
      },
      "start": 107,
      "end": 128
    },
    {
      "type": "ForInStatement",
      "left": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 138,
              "end": 139
            },
            "init": null,
            "definite": false,
            "start": 138,
            "end": 139
          }
        ],
        "declare": false,
        "start": 134,
        "end": 139
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 144,
            "end": 145
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 147,
            "end": 148
          },
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 150,
            "end": 151
          },
          {
            "type": "Literal",
            "value": 4,
            "raw": "4",
            "start": 153,
            "end": 154
          },
          {
            "type": "Literal",
            "value": 5,
            "raw": "5",
            "start": 156,
            "end": 157
          }
        ],
        "start": 143,
        "end": 158
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 160,
        "end": 163
      },
      "start": 129,
      "end": 163
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn",
        "optional": false,
        "typeAnnotation": null,
        "start": 174,
        "end": 176
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 180,
          "end": 183
        },
        "start": 178,
        "end": 183
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 184,
        "end": 187
      },
      "expression": false,
      "start": 165,
      "end": 187
    },
    {
      "type": "ForInStatement",
      "left": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 197,
              "end": 198
            },
            "init": null,
            "definite": false,
            "start": 197,
            "end": 198
          }
        ],
        "declare": false,
        "start": 193,
        "end": 198
      },
      "right": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": null,
          "start": 202,
          "end": 204
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 202,
        "end": 206
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 208,
        "end": 211
      },
      "start": 188,
      "end": 211
    },
    {
      "type": "ForInStatement",
      "left": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 222,
              "end": 223
            },
            "init": null,
            "definite": false,
            "start": 222,
            "end": 223
          }
        ],
        "declare": false,
        "start": 218,
        "end": 223
      },
      "right": {
        "type": "Literal",
        "value": null,
        "raw": "/[a-z]/",
        "regex": {
          "pattern": "[a-z]",
          "flags": ""
        },
        "start": 227,
        "end": 234
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 236,
        "end": 239
      },
      "start": 213,
      "end": 239
    },
    {
      "type": "ForInStatement",
      "left": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 249,
              "end": 250
            },
            "init": null,
            "definite": false,
            "start": 249,
            "end": 250
          }
        ],
        "declare": false,
        "start": 245,
        "end": 250
      },
      "right": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Date",
          "optional": false,
          "typeAnnotation": null,
          "start": 258,
          "end": 262
        },
        "typeArguments": null,
        "arguments": [],
        "start": 254,
        "end": 264
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 266,
        "end": 269
      },
      "start": 240,
      "end": 269
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
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 278,
                "end": 281
              },
              "start": 276,
              "end": 281
            },
            "start": 275,
            "end": 281
          },
          "init": null,
          "definite": false,
          "start": 275,
          "end": 281
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 286,
                "end": 289
              },
              "start": 284,
              "end": 289
            },
            "start": 283,
            "end": 289
          },
          "init": null,
          "definite": false,
          "start": 283,
          "end": 289
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 294,
                "end": 297
              },
              "start": 292,
              "end": 297
            },
            "start": 291,
            "end": 297
          },
          "init": null,
          "definite": false,
          "start": 291,
          "end": 297
        }
      ],
      "declare": false,
      "start": 271,
      "end": 298
    },
    {
      "type": "ForInStatement",
      "left": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 309,
              "end": 310
            },
            "init": null,
            "definite": false,
            "start": 309,
            "end": 310
          }
        ],
        "declare": false,
        "start": 305,
        "end": 310
      },
      "right": {
        "type": "LogicalExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 314,
          "end": 315
        },
        "operator": "||",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null,
          "start": 319,
          "end": 320
        },
        "start": 314,
        "end": 320
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 322,
        "end": 325
      },
      "start": 300,
      "end": 325
    },
    {
      "type": "ForInStatement",
      "left": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 335,
              "end": 336
            },
            "init": null,
            "definite": false,
            "start": 335,
            "end": 336
          }
        ],
        "declare": false,
        "start": 331,
        "end": 336
      },
      "right": {
        "type": "ConditionalExpression",
        "test": {
          "type": "Identifier",
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null,
          "start": 340,
          "end": 341
        },
        "consequent": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 344,
          "end": 345
        },
        "alternate": {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null,
          "start": 348,
          "end": 349
        },
        "start": 340,
        "end": 349
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 351,
        "end": 354
      },
      "start": 326,
      "end": 354
    },
    {
      "type": "ForInStatement",
      "left": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 364,
              "end": 365
            },
            "init": null,
            "definite": false,
            "start": 364,
            "end": 365
          }
        ],
        "declare": false,
        "start": 360,
        "end": 365
      },
      "right": {
        "type": "ConditionalExpression",
        "test": {
          "type": "Literal",
          "value": 42,
          "raw": "42",
          "start": 369,
          "end": 371
        },
        "consequent": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 374,
          "end": 375
        },
        "alternate": {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null,
          "start": 378,
          "end": 379
        },
        "start": 369,
        "end": 379
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 381,
        "end": 384
      },
      "start": 355,
      "end": 384
    },
    {
      "type": "ForInStatement",
      "left": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 394,
              "end": 395
            },
            "init": null,
            "definite": false,
            "start": 394,
            "end": 395
          }
        ],
        "declare": false,
        "start": 390,
        "end": 395
      },
      "right": {
        "type": "ConditionalExpression",
        "test": {
          "type": "Literal",
          "value": "",
          "raw": "''",
          "start": 399,
          "end": 401
        },
        "consequent": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 404,
          "end": 405
        },
        "alternate": {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null,
          "start": 408,
          "end": 409
        },
        "start": 399,
        "end": 409
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 411,
        "end": 414
      },
      "start": 385,
      "end": 414
    },
    {
      "type": "ForInStatement",
      "left": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 424,
              "end": 425
            },
            "init": null,
            "definite": false,
            "start": 424,
            "end": 425
          }
        ],
        "declare": false,
        "start": 420,
        "end": 425
      },
      "right": {
        "type": "ConditionalExpression",
        "test": {
          "type": "Literal",
          "value": 42,
          "raw": "42",
          "start": 429,
          "end": 431
        },
        "consequent": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 434,
            "end": 435
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 436,
            "end": 437
          },
          "optional": false,
          "computed": true,
          "start": 434,
          "end": 438
        },
        "alternate": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 441,
            "end": 442
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 443,
            "end": 444
          },
          "optional": false,
          "computed": true,
          "start": 441,
          "end": 445
        },
        "start": 429,
        "end": 445
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 447,
        "end": 450
      },
      "start": 415,
      "end": 450
    },
    {
      "type": "ForInStatement",
      "left": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 460,
              "end": 461
            },
            "init": null,
            "definite": false,
            "start": 460,
            "end": 461
          }
        ],
        "declare": false,
        "start": 456,
        "end": 461
      },
      "right": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 465,
          "end": 466
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null,
          "start": 467,
          "end": 468
        },
        "optional": false,
        "computed": true,
        "start": 465,
        "end": 469
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 471,
        "end": 474
      },
      "start": 451,
      "end": 474
    },
    {
      "type": "ForInStatement",
      "left": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 485,
              "end": 486
            },
            "init": null,
            "definite": false,
            "start": 485,
            "end": 486
          }
        ],
        "declare": false,
        "start": 481,
        "end": 486
      },
      "right": {
        "type": "ArrowFunctionExpression",
        "expression": true,
        "async": false,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 492,
                "end": 493
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 492,
              "end": 493
            }
          ],
          "start": 491,
          "end": 494
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 498,
                  "end": 499
                },
                "typeArguments": null,
                "start": 498,
                "end": 499
              },
              "start": 496,
              "end": 499
            },
            "start": 495,
            "end": 499
          }
        ],
        "returnType": null,
        "body": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 504,
          "end": 505
        },
        "id": null,
        "generator": false,
        "start": 491,
        "end": 505
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 508,
        "end": 511
      },
      "start": 476,
      "end": 511
    },
    {
      "type": "ForInStatement",
      "left": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 521,
              "end": 522
            },
            "init": null,
            "definite": false,
            "start": 521,
            "end": 522
          }
        ],
        "declare": false,
        "start": 517,
        "end": 522
      },
      "right": {
        "type": "FunctionExpression",
        "id": null,
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
                "type": "TSStringKeyword",
                "start": 539,
                "end": 545
              },
              "start": 537,
              "end": 545
            },
            "start": 536,
            "end": 545
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 550,
                "end": 556
              },
              "start": 548,
              "end": 556
            },
            "start": 547,
            "end": 556
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 567,
                  "end": 568
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 571,
                  "end": 572
                },
                "start": 567,
                "end": 572
              },
              "start": 560,
              "end": 572
            }
          ],
          "start": 558,
          "end": 574
        },
        "expression": false,
        "start": 526,
        "end": 574
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 576,
        "end": 579
      },
      "start": 512,
      "end": 579
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 587,
        "end": 588
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "biz",
              "optional": false,
              "typeAnnotation": null,
              "start": 595,
              "end": 598
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ForInStatement",
                    "left": {
                      "type": "VariableDeclaration",
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 620,
                            "end": 621
                          },
                          "init": null,
                          "definite": false,
                          "start": 620,
                          "end": 621
                        }
                      ],
                      "declare": false,
                      "start": 616,
                      "end": 621
                    },
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 625,
                          "end": 629
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "biz",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 630,
                          "end": 633
                        },
                        "optional": false,
                        "computed": false,
                        "start": 625,
                        "end": 633
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 625,
                      "end": 635
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 637,
                      "end": 640
                    },
                    "start": 611,
                    "end": 640
                  },
                  {
                    "type": "ForInStatement",
                    "left": {
                      "type": "VariableDeclaration",
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 658,
                            "end": 659
                          },
                          "init": null,
                          "definite": false,
                          "start": 658,
                          "end": 659
                        }
                      ],
                      "declare": false,
                      "start": 654,
                      "end": 659
                    },
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 663,
                        "end": 667
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "biz",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 668,
                        "end": 671
                      },
                      "optional": false,
                      "computed": false,
                      "start": 663,
                      "end": 671
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 673,
                      "end": 676
                    },
                    "start": 649,
                    "end": 676
                  },
                  {
                    "type": "ForInStatement",
                    "left": {
                      "type": "VariableDeclaration",
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 694,
                            "end": 695
                          },
                          "init": null,
                          "definite": false,
                          "start": 694,
                          "end": 695
                        }
                      ],
                      "declare": false,
                      "start": 690,
                      "end": 695
                    },
                    "right": {
                      "type": "ThisExpression",
                      "start": 699,
                      "end": 703
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 705,
                      "end": 708
                    },
                    "start": 685,
                    "end": 708
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 724,
                      "end": 728
                    },
                    "start": 717,
                    "end": 729
                  }
                ],
                "start": 601,
                "end": 735
              },
              "expression": false,
              "start": 598,
              "end": 735
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 595,
            "end": 735
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null,
              "start": 748,
              "end": 751
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ForInStatement",
                    "left": {
                      "type": "VariableDeclaration",
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 773,
                            "end": 774
                          },
                          "init": null,
                          "definite": false,
                          "start": 773,
                          "end": 774
                        }
                      ],
                      "declare": false,
                      "start": 769,
                      "end": 774
                    },
                    "right": {
                      "type": "ThisExpression",
                      "start": 778,
                      "end": 782
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 784,
                      "end": 787
                    },
                    "start": 764,
                    "end": 787
                  },
                  {
                    "type": "ForInStatement",
                    "left": {
                      "type": "VariableDeclaration",
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 805,
                            "end": 806
                          },
                          "init": null,
                          "definite": false,
                          "start": 805,
                          "end": 806
                        }
                      ],
                      "declare": false,
                      "start": 801,
                      "end": 806
                    },
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 810,
                        "end": 814
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "baz",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 815,
                        "end": 818
                      },
                      "optional": false,
                      "computed": false,
                      "start": 810,
                      "end": 818
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 820,
                      "end": 823
                    },
                    "start": 796,
                    "end": 823
                  },
                  {
                    "type": "ForInStatement",
                    "left": {
                      "type": "VariableDeclaration",
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 841,
                            "end": 842
                          },
                          "init": null,
                          "definite": false,
                          "start": 841,
                          "end": 842
                        }
                      ],
                      "declare": false,
                      "start": 837,
                      "end": 842
                    },
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 846,
                          "end": 850
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "baz",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 851,
                          "end": 854
                        },
                        "optional": false,
                        "computed": false,
                        "start": 846,
                        "end": 854
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 846,
                      "end": 856
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 858,
                      "end": 861
                    },
                    "start": 832,
                    "end": 861
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 878,
                      "end": 882
                    },
                    "start": 871,
                    "end": 883
                  }
                ],
                "start": 754,
                "end": 889
              },
              "expression": false,
              "start": 751,
              "end": 889
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 741,
            "end": 889
          }
        ],
        "start": 589,
        "end": 891
      },
      "abstract": false,
      "declare": false,
      "start": 581,
      "end": 891
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 899,
        "end": 900
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 909,
        "end": 910
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "boz",
              "optional": false,
              "typeAnnotation": null,
              "start": 917,
              "end": 920
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ForInStatement",
                    "left": {
                      "type": "VariableDeclaration",
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 942,
                            "end": 943
                          },
                          "init": null,
                          "definite": false,
                          "start": 942,
                          "end": 943
                        }
                      ],
                      "declare": false,
                      "start": 938,
                      "end": 943
                    },
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 947,
                          "end": 951
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "biz",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 952,
                          "end": 955
                        },
                        "optional": false,
                        "computed": false,
                        "start": 947,
                        "end": 955
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 947,
                      "end": 957
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 959,
                      "end": 962
                    },
                    "start": 933,
                    "end": 962
                  },
                  {
                    "type": "ForInStatement",
                    "left": {
                      "type": "VariableDeclaration",
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 980,
                            "end": 981
                          },
                          "init": null,
                          "definite": false,
                          "start": 980,
                          "end": 981
                        }
                      ],
                      "declare": false,
                      "start": 976,
                      "end": 981
                    },
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 985,
                        "end": 989
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "biz",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 990,
                        "end": 993
                      },
                      "optional": false,
                      "computed": false,
                      "start": 985,
                      "end": 993
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 995,
                      "end": 998
                    },
                    "start": 971,
                    "end": 998
                  },
                  {
                    "type": "ForInStatement",
                    "left": {
                      "type": "VariableDeclaration",
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1016,
                            "end": 1017
                          },
                          "init": null,
                          "definite": false,
                          "start": 1016,
                          "end": 1017
                        }
                      ],
                      "declare": false,
                      "start": 1012,
                      "end": 1017
                    },
                    "right": {
                      "type": "ThisExpression",
                      "start": 1021,
                      "end": 1025
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 1027,
                      "end": 1030
                    },
                    "start": 1007,
                    "end": 1030
                  },
                  {
                    "type": "ForInStatement",
                    "left": {
                      "type": "VariableDeclaration",
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1049,
                            "end": 1050
                          },
                          "init": null,
                          "definite": false,
                          "start": 1049,
                          "end": 1050
                        }
                      ],
                      "declare": false,
                      "start": 1045,
                      "end": 1050
                    },
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Super",
                        "start": 1054,
                        "end": 1059
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "biz",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1060,
                        "end": 1063
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1054,
                      "end": 1063
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 1065,
                      "end": 1068
                    },
                    "start": 1040,
                    "end": 1068
                  },
                  {
                    "type": "ForInStatement",
                    "left": {
                      "type": "VariableDeclaration",
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1086,
                            "end": 1087
                          },
                          "init": null,
                          "definite": false,
                          "start": 1086,
                          "end": 1087
                        }
                      ],
                      "declare": false,
                      "start": 1082,
                      "end": 1087
                    },
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 1091,
                          "end": 1096
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "biz",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1097,
                          "end": 1100
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1091,
                        "end": 1100
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1091,
                      "end": 1102
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 1104,
                      "end": 1107
                    },
                    "start": 1077,
                    "end": 1107
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 1123,
                      "end": 1127
                    },
                    "start": 1116,
                    "end": 1128
                  }
                ],
                "start": 923,
                "end": 1134
              },
              "expression": false,
              "start": 920,
              "end": 1134
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 917,
            "end": 1134
          }
        ],
        "start": 911,
        "end": 1136
      },
      "abstract": false,
      "declare": false,
      "start": 893,
      "end": 1136
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 1148,
        "end": 1149
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
              "name": "id",
              "optional": false,
              "typeAnnotation": null,
              "start": 1156,
              "end": 1158
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1160,
                "end": 1166
              },
              "start": 1158,
              "end": 1166
            },
            "accessibility": null,
            "static": false,
            "start": 1156,
            "end": 1167
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "idx",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1178,
                    "end": 1184
                  },
                  "start": 1176,
                  "end": 1184
                },
                "start": 1173,
                "end": 1184
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1187,
                  "end": 1188
                },
                "typeArguments": null,
                "start": 1187,
                "end": 1188
              },
              "start": 1185,
              "end": 1188
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 1172,
            "end": 1189
          }
        ],
        "start": 1150,
        "end": 1191
      },
      "declare": false,
      "start": 1138,
      "end": 1191
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
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1199,
                  "end": 1200
                },
                "typeArguments": null,
                "start": 1199,
                "end": 1200
              },
              "start": 1197,
              "end": 1200
            },
            "start": 1196,
            "end": 1200
          },
          "init": null,
          "definite": false,
          "start": 1196,
          "end": 1200
        }
      ],
      "declare": false,
      "start": 1192,
      "end": 1201
    },
    {
      "type": "ForInStatement",
      "left": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1212,
              "end": 1213
            },
            "init": null,
            "definite": false,
            "start": 1212,
            "end": 1213
          }
        ],
        "declare": false,
        "start": 1208,
        "end": 1213
      },
      "right": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1217,
          "end": 1218
        },
        "property": {
          "type": "Literal",
          "value": 42,
          "raw": "42",
          "start": 1219,
          "end": 1221
        },
        "optional": false,
        "computed": true,
        "start": 1217,
        "end": 1222
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1224,
        "end": 1227
      },
      "start": 1203,
      "end": 1227
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 1241,
        "end": 1242
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "X",
                "optional": false,
                "typeAnnotation": null,
                "start": 1262,
                "end": 1263
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1264,
                      "end": 1265
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1264,
                    "end": 1265
                  }
                ],
                "start": 1263,
                "end": 1266
              },
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1277,
                      "end": 1281
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1282,
                        "end": 1288
                      },
                      "start": 1281,
                      "end": 1288
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 1277,
                    "end": 1288
                  }
                ],
                "start": 1267,
                "end": 1294
              },
              "abstract": false,
              "declare": false,
              "start": 1256,
              "end": 1294
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1249,
            "end": 1294
          }
        ],
        "start": 1243,
        "end": 1296
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1231,
      "end": 1296
    },
    {
      "type": "ForInStatement",
      "left": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1307,
              "end": 1308
            },
            "init": null,
            "definite": false,
            "start": 1307,
            "end": 1308
          }
        ],
        "declare": false,
        "start": 1303,
        "end": 1308
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 1312,
        "end": 1313
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1315,
        "end": 1318
      },
      "start": 1298,
      "end": 1318
    },
    {
      "type": "ForInStatement",
      "left": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1328,
              "end": 1329
            },
            "init": null,
            "definite": false,
            "start": 1328,
            "end": 1329
          }
        ],
        "declare": false,
        "start": 1324,
        "end": 1329
      },
      "right": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "M",
          "optional": false,
          "typeAnnotation": null,
          "start": 1333,
          "end": 1334
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "X",
          "optional": false,
          "typeAnnotation": null,
          "start": 1335,
          "end": 1336
        },
        "optional": false,
        "computed": false,
        "start": 1333,
        "end": 1336
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1338,
        "end": 1341
      },
      "start": 1319,
      "end": 1341
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Color",
        "optional": false,
        "typeAnnotation": null,
        "start": 1348,
        "end": 1353
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Red",
              "optional": false,
              "typeAnnotation": null,
              "start": 1356,
              "end": 1359
            },
            "initializer": null,
            "computed": false,
            "start": 1356,
            "end": 1359
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Blue",
              "optional": false,
              "typeAnnotation": null,
              "start": 1361,
              "end": 1365
            },
            "initializer": null,
            "computed": false,
            "start": 1361,
            "end": 1365
          }
        ],
        "start": 1354,
        "end": 1367
      },
      "const": false,
      "declare": false,
      "start": 1343,
      "end": 1367
    },
    {
      "type": "ForInStatement",
      "left": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1378,
              "end": 1379
            },
            "init": null,
            "definite": false,
            "start": 1378,
            "end": 1379
          }
        ],
        "declare": false,
        "start": 1374,
        "end": 1379
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "Color",
        "optional": false,
        "typeAnnotation": null,
        "start": 1383,
        "end": 1388
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1390,
        "end": 1393
      },
      "start": 1369,
      "end": 1393
    },
    {
      "type": "ForInStatement",
      "left": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1403,
              "end": 1404
            },
            "init": null,
            "definite": false,
            "start": 1403,
            "end": 1404
          }
        ],
        "declare": false,
        "start": 1399,
        "end": 1404
      },
      "right": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "Color",
          "optional": false,
          "typeAnnotation": null,
          "start": 1408,
          "end": 1413
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "Blue",
          "optional": false,
          "typeAnnotation": null,
          "start": 1414,
          "end": 1418
        },
        "optional": false,
        "computed": false,
        "start": 1408,
        "end": 1418
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1420,
        "end": 1423
      },
      "start": 1394,
      "end": 1423
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1423
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
    "value": "aString",
    "start": 4,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 11,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 13,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 19,
    "end": 20
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 21,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "aString",
    "start": 26,
    "end": 33
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 34,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 43,
    "end": 44
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 46,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "anAny",
    "start": 50,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 55,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 57,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 60,
    "end": 61
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 62,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 66,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "anAny",
    "start": 67,
    "end": 72
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 73,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 82,
    "end": 83
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 85,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 89,
    "end": 90
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 90,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 94,
    "end": 95
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 96,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 105,
    "end": 106
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 107,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 111,
    "end": 112
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 112,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 116,
    "end": 117
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 118,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 127,
    "end": 128
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 129,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 133,
    "end": 134
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 134,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 138,
    "end": 139
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 140,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 143,
    "end": 144
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 145,
    "end": 146
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 148,
    "end": 149
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 151,
    "end": 152
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 154,
    "end": 155
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 162,
    "end": 163
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 165,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 174,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 178,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 180,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 186,
    "end": 187
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 188,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 192,
    "end": 193
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 193,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 197,
    "end": 198
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 199,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 202,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 210,
    "end": 211
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 213,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 217,
    "end": 218
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 218,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 222,
    "end": 223
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 224,
    "end": 226
  },
  {
    "type": "RegularExpression",
    "value": "/[a-z]/",
    "regex": {
      "flags": "",
      "pattern": "[a-z]"
    },
    "start": 227,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 236,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 238,
    "end": 239
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 240,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 244,
    "end": 245
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 245,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 249,
    "end": 250
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 251,
    "end": 253
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 254,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 258,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 263,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 264,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 266,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 268,
    "end": 269
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 271,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 275,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 276,
    "end": 277
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 278,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 281,
    "end": 282
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 284,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 286,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 289,
    "end": 290
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 292,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 294,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 297,
    "end": 298
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 300,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 304,
    "end": 305
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 305,
    "end": 308
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 309,
    "end": 310
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 311,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 314,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 316,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 324,
    "end": 325
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 326,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 330,
    "end": 331
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 331,
    "end": 334
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 335,
    "end": 336
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 337,
    "end": 339
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 340,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 342,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 344,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 346,
    "end": 347
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 348,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 349,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 351,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 353,
    "end": 354
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 355,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 359,
    "end": 360
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 360,
    "end": 363
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 364,
    "end": 365
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 366,
    "end": 368
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 369,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 372,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 374,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 376,
    "end": 377
  },
  {
    "type": "Identifier",
    "value": "d",
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
    "value": "{",
    "start": 381,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 383,
    "end": 384
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 385,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 389,
    "end": 390
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 390,
    "end": 393
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 394,
    "end": 395
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 396,
    "end": 398
  },
  {
    "type": "String",
    "value": "''",
    "start": 399,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 402,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 404,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 406,
    "end": 407
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 408,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 409,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 411,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 413,
    "end": 414
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 415,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 419,
    "end": 420
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 420,
    "end": 423
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 424,
    "end": 425
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 426,
    "end": 428
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 429,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 432,
    "end": 433
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 434,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 435,
    "end": 436
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 436,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 437,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 439,
    "end": 440
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 441,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 442,
    "end": 443
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 443,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 444,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 447,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 449,
    "end": 450
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 451,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 455,
    "end": 456
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 456,
    "end": 459
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 460,
    "end": 461
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 462,
    "end": 464
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 465,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 466,
    "end": 467
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 467,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 468,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 469,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 471,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 473,
    "end": 474
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 476,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 480,
    "end": 481
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 481,
    "end": 484
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 485,
    "end": 486
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 487,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 490,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 491,
    "end": 492
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 492,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 493,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 494,
    "end": 495
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 495,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 496,
    "end": 497
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 498,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 499,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 501,
    "end": 503
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 504,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 505,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 506,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 508,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 510,
    "end": 511
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 512,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 516,
    "end": 517
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 517,
    "end": 520
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 521,
    "end": 522
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 523,
    "end": 525
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 526,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 535,
    "end": 536
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 536,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 537,
    "end": 538
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 539,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 545,
    "end": 546
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 547,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 548,
    "end": 549
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 550,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 556,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 558,
    "end": 559
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 560,
    "end": 566
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 567,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 569,
    "end": 570
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 571,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 573,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 574,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 576,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 578,
    "end": 579
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 581,
    "end": 586
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 587,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 589,
    "end": 590
  },
  {
    "type": "Identifier",
    "value": "biz",
    "start": 595,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 598,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 599,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 601,
    "end": 602
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 611,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 615,
    "end": 616
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 616,
    "end": 619
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 620,
    "end": 621
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 622,
    "end": 624
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 625,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 629,
    "end": 630
  },
  {
    "type": "Identifier",
    "value": "biz",
    "start": 630,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 633,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 634,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 635,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 637,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 639,
    "end": 640
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 649,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 653,
    "end": 654
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 654,
    "end": 657
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 658,
    "end": 659
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 660,
    "end": 662
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 663,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 667,
    "end": 668
  },
  {
    "type": "Identifier",
    "value": "biz",
    "start": 668,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 671,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 673,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 675,
    "end": 676
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 685,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 689,
    "end": 690
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 690,
    "end": 693
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 694,
    "end": 695
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 696,
    "end": 698
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 699,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 703,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 705,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 707,
    "end": 708
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 717,
    "end": 723
  },
  {
    "type": "Null",
    "value": "null",
    "start": 724,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 728,
    "end": 729
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 734,
    "end": 735
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 741,
    "end": 747
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 748,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 751,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 752,
    "end": 753
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 754,
    "end": 755
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 764,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 768,
    "end": 769
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 769,
    "end": 772
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 773,
    "end": 774
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 775,
    "end": 777
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 778,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 782,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 784,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 786,
    "end": 787
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 796,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 800,
    "end": 801
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 801,
    "end": 804
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 805,
    "end": 806
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 807,
    "end": 809
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 810,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 814,
    "end": 815
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 815,
    "end": 818
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 818,
    "end": 819
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 820,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 822,
    "end": 823
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 832,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 836,
    "end": 837
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 837,
    "end": 840
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 841,
    "end": 842
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 843,
    "end": 845
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 846,
    "end": 850
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 850,
    "end": 851
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 851,
    "end": 854
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 854,
    "end": 855
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 855,
    "end": 856
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 856,
    "end": 857
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 858,
    "end": 859
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 860,
    "end": 861
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 871,
    "end": 877
  },
  {
    "type": "Null",
    "value": "null",
    "start": 878,
    "end": 882
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 882,
    "end": 883
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 888,
    "end": 889
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 890,
    "end": 891
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 893,
    "end": 898
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 899,
    "end": 900
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 901,
    "end": 908
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 909,
    "end": 910
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 911,
    "end": 912
  },
  {
    "type": "Identifier",
    "value": "boz",
    "start": 917,
    "end": 920
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 920,
    "end": 921
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 921,
    "end": 922
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 923,
    "end": 924
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 933,
    "end": 936
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 937,
    "end": 938
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 938,
    "end": 941
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 942,
    "end": 943
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 944,
    "end": 946
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 947,
    "end": 951
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 951,
    "end": 952
  },
  {
    "type": "Identifier",
    "value": "biz",
    "start": 952,
    "end": 955
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 955,
    "end": 956
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 956,
    "end": 957
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 957,
    "end": 958
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 959,
    "end": 960
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 961,
    "end": 962
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 971,
    "end": 974
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 975,
    "end": 976
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 976,
    "end": 979
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 980,
    "end": 981
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 982,
    "end": 984
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 985,
    "end": 989
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 989,
    "end": 990
  },
  {
    "type": "Identifier",
    "value": "biz",
    "start": 990,
    "end": 993
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 993,
    "end": 994
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 995,
    "end": 996
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 997,
    "end": 998
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1007,
    "end": 1010
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1011,
    "end": 1012
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1012,
    "end": 1015
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1016,
    "end": 1017
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1018,
    "end": 1020
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1021,
    "end": 1025
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1025,
    "end": 1026
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1027,
    "end": 1028
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1029,
    "end": 1030
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1040,
    "end": 1043
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1044,
    "end": 1045
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1045,
    "end": 1048
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1049,
    "end": 1050
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1051,
    "end": 1053
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 1054,
    "end": 1059
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1059,
    "end": 1060
  },
  {
    "type": "Identifier",
    "value": "biz",
    "start": 1060,
    "end": 1063
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1063,
    "end": 1064
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1065,
    "end": 1066
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1067,
    "end": 1068
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1077,
    "end": 1080
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1081,
    "end": 1082
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1082,
    "end": 1085
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1086,
    "end": 1087
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1088,
    "end": 1090
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 1091,
    "end": 1096
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1096,
    "end": 1097
  },
  {
    "type": "Identifier",
    "value": "biz",
    "start": 1097,
    "end": 1100
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1100,
    "end": 1101
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1101,
    "end": 1102
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1102,
    "end": 1103
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1104,
    "end": 1105
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1106,
    "end": 1107
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1116,
    "end": 1122
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1123,
    "end": 1127
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1127,
    "end": 1128
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1133,
    "end": 1134
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1135,
    "end": 1136
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1138,
    "end": 1147
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1148,
    "end": 1149
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1150,
    "end": 1151
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 1156,
    "end": 1158
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1158,
    "end": 1159
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1160,
    "end": 1166
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1166,
    "end": 1167
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1172,
    "end": 1173
  },
  {
    "type": "Identifier",
    "value": "idx",
    "start": 1173,
    "end": 1176
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1176,
    "end": 1177
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1178,
    "end": 1184
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1184,
    "end": 1185
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1185,
    "end": 1186
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1187,
    "end": 1188
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1188,
    "end": 1189
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1190,
    "end": 1191
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1192,
    "end": 1195
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1196,
    "end": 1197
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1197,
    "end": 1198
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1199,
    "end": 1200
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1200,
    "end": 1201
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1203,
    "end": 1206
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1207,
    "end": 1208
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1208,
    "end": 1211
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1212,
    "end": 1213
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1214,
    "end": 1216
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1217,
    "end": 1218
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1218,
    "end": 1219
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1219,
    "end": 1221
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1221,
    "end": 1222
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1222,
    "end": 1223
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1224,
    "end": 1225
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1226,
    "end": 1227
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1231,
    "end": 1240
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 1241,
    "end": 1242
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1243,
    "end": 1244
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1249,
    "end": 1255
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1256,
    "end": 1261
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 1262,
    "end": 1263
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1263,
    "end": 1264
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1264,
    "end": 1265
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1265,
    "end": 1266
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1267,
    "end": 1268
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1277,
    "end": 1281
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1281,
    "end": 1282
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1282,
    "end": 1288
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1293,
    "end": 1294
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1295,
    "end": 1296
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1298,
    "end": 1301
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1302,
    "end": 1303
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1303,
    "end": 1306
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1307,
    "end": 1308
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1309,
    "end": 1311
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 1312,
    "end": 1313
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1313,
    "end": 1314
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1315,
    "end": 1316
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1317,
    "end": 1318
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1319,
    "end": 1322
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1323,
    "end": 1324
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1324,
    "end": 1327
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1328,
    "end": 1329
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1330,
    "end": 1332
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 1333,
    "end": 1334
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1334,
    "end": 1335
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 1335,
    "end": 1336
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1336,
    "end": 1337
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1338,
    "end": 1339
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1340,
    "end": 1341
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 1343,
    "end": 1347
  },
  {
    "type": "Identifier",
    "value": "Color",
    "start": 1348,
    "end": 1353
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1354,
    "end": 1355
  },
  {
    "type": "Identifier",
    "value": "Red",
    "start": 1356,
    "end": 1359
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1359,
    "end": 1360
  },
  {
    "type": "Identifier",
    "value": "Blue",
    "start": 1361,
    "end": 1365
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1366,
    "end": 1367
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1369,
    "end": 1372
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1373,
    "end": 1374
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1374,
    "end": 1377
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1378,
    "end": 1379
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1380,
    "end": 1382
  },
  {
    "type": "Identifier",
    "value": "Color",
    "start": 1383,
    "end": 1388
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1388,
    "end": 1389
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1390,
    "end": 1391
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1392,
    "end": 1393
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1394,
    "end": 1397
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1398,
    "end": 1399
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1399,
    "end": 1402
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1403,
    "end": 1404
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1405,
    "end": 1407
  },
  {
    "type": "Identifier",
    "value": "Color",
    "start": 1408,
    "end": 1413
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1413,
    "end": 1414
  },
  {
    "type": "Identifier",
    "value": "Blue",
    "start": 1414,
    "end": 1418
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1418,
    "end": 1419
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1420,
    "end": 1421
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1422,
    "end": 1423
  }
]
```
