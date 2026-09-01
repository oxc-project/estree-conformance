__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T1",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 7
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSNumberKeyword",
            "start": 11,
            "end": 17
          },
          {
            "type": "TSStringKeyword",
            "start": 19,
            "end": 25
          },
          {
            "type": "TSBooleanKeyword",
            "start": 27,
            "end": 34
          }
        ],
        "start": 10,
        "end": 35
      },
      "declare": false,
      "start": 0,
      "end": 36
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T2",
        "optional": false,
        "typeAnnotation": null,
        "start": 42,
        "end": 44
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSNumberKeyword",
            "start": 48,
            "end": 54
          },
          {
            "type": "TSStringKeyword",
            "start": 56,
            "end": 62
          },
          {
            "type": "TSOptionalType",
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 64,
              "end": 71
            },
            "start": 64,
            "end": 72
          }
        ],
        "start": 47,
        "end": 73
      },
      "declare": false,
      "start": 37,
      "end": 74
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T3",
        "optional": false,
        "typeAnnotation": null,
        "start": 80,
        "end": 82
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSNumberKeyword",
            "start": 86,
            "end": 92
          },
          {
            "type": "TSOptionalType",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 94,
              "end": 100
            },
            "start": 94,
            "end": 101
          },
          {
            "type": "TSOptionalType",
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 103,
              "end": 110
            },
            "start": 103,
            "end": 111
          }
        ],
        "start": 85,
        "end": 112
      },
      "declare": false,
      "start": 75,
      "end": 113
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T4",
        "optional": false,
        "typeAnnotation": null,
        "start": 119,
        "end": 121
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSOptionalType",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 125,
              "end": 131
            },
            "start": 125,
            "end": 132
          },
          {
            "type": "TSOptionalType",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 134,
              "end": 140
            },
            "start": 134,
            "end": 141
          },
          {
            "type": "TSOptionalType",
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 143,
              "end": 150
            },
            "start": 143,
            "end": 151
          }
        ],
        "start": 124,
        "end": 152
      },
      "declare": false,
      "start": 114,
      "end": 153
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "L1",
        "optional": false,
        "typeAnnotation": null,
        "start": 160,
        "end": 162
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T1",
            "optional": false,
            "typeAnnotation": null,
            "start": 165,
            "end": 167
          },
          "typeArguments": null,
          "start": 165,
          "end": 167
        },
        "indexType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "length",
            "raw": "\"length\"",
            "start": 168,
            "end": 176
          },
          "start": 168,
          "end": 176
        },
        "start": 165,
        "end": 177
      },
      "declare": false,
      "start": 155,
      "end": 178
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "L2",
        "optional": false,
        "typeAnnotation": null,
        "start": 184,
        "end": 186
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T2",
            "optional": false,
            "typeAnnotation": null,
            "start": 189,
            "end": 191
          },
          "typeArguments": null,
          "start": 189,
          "end": 191
        },
        "indexType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "length",
            "raw": "\"length\"",
            "start": 192,
            "end": 200
          },
          "start": 192,
          "end": 200
        },
        "start": 189,
        "end": 201
      },
      "declare": false,
      "start": 179,
      "end": 202
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "L3",
        "optional": false,
        "typeAnnotation": null,
        "start": 208,
        "end": 210
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T3",
            "optional": false,
            "typeAnnotation": null,
            "start": 213,
            "end": 215
          },
          "typeArguments": null,
          "start": 213,
          "end": 215
        },
        "indexType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "length",
            "raw": "\"length\"",
            "start": 216,
            "end": 224
          },
          "start": 216,
          "end": 224
        },
        "start": 213,
        "end": 225
      },
      "declare": false,
      "start": 203,
      "end": 226
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "L4",
        "optional": false,
        "typeAnnotation": null,
        "start": 232,
        "end": 234
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T4",
            "optional": false,
            "typeAnnotation": null,
            "start": 237,
            "end": 239
          },
          "typeArguments": null,
          "start": 237,
          "end": 239
        },
        "indexType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "length",
            "raw": "\"length\"",
            "start": 240,
            "end": 248
          },
          "start": 240,
          "end": 248
        },
        "start": 237,
        "end": 249
      },
      "declare": false,
      "start": 227,
      "end": 250
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T5",
        "optional": false,
        "typeAnnotation": null,
        "start": 257,
        "end": 259
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSNumberKeyword",
            "start": 263,
            "end": 269
          },
          {
            "type": "TSOptionalType",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 271,
              "end": 277
            },
            "start": 271,
            "end": 278
          },
          {
            "type": "TSBooleanKeyword",
            "start": 280,
            "end": 287
          }
        ],
        "start": 262,
        "end": 288
      },
      "declare": false,
      "start": 252,
      "end": 289
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 310,
        "end": 312
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T1",
                "optional": false,
                "typeAnnotation": null,
                "start": 317,
                "end": 319
              },
              "typeArguments": null,
              "start": 317,
              "end": 319
            },
            "start": 315,
            "end": 319
          },
          "start": 313,
          "end": 319
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T2",
                "optional": false,
                "typeAnnotation": null,
                "start": 325,
                "end": 327
              },
              "typeArguments": null,
              "start": 325,
              "end": 327
            },
            "start": 323,
            "end": 327
          },
          "start": 321,
          "end": 327
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t3",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T3",
                "optional": false,
                "typeAnnotation": null,
                "start": 333,
                "end": 335
              },
              "typeArguments": null,
              "start": 333,
              "end": 335
            },
            "start": 331,
            "end": 335
          },
          "start": 329,
          "end": 335
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t4",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T4",
                "optional": false,
                "typeAnnotation": null,
                "start": 341,
                "end": 343
              },
              "typeArguments": null,
              "start": 341,
              "end": 343
            },
            "start": 339,
            "end": 343
          },
          "start": 337,
          "end": 343
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 351,
                "end": 353
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 356,
                "end": 358
              },
              "start": 351,
              "end": 358
            },
            "directive": null,
            "start": 351,
            "end": 359
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 364,
                "end": 366
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 369,
                "end": 371
              },
              "start": 364,
              "end": 371
            },
            "directive": null,
            "start": 364,
            "end": 372
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 387,
                "end": 389
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t3",
                "optional": false,
                "typeAnnotation": null,
                "start": 392,
                "end": 394
              },
              "start": 387,
              "end": 394
            },
            "directive": null,
            "start": 387,
            "end": 395
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 410,
                "end": 412
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t4",
                "optional": false,
                "typeAnnotation": null,
                "start": 415,
                "end": 417
              },
              "start": 410,
              "end": 417
            },
            "directive": null,
            "start": 410,
            "end": 418
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 433,
                "end": 435
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 438,
                "end": 440
              },
              "start": 433,
              "end": 440
            },
            "directive": null,
            "start": 433,
            "end": 441
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 446,
                "end": 448
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 451,
                "end": 453
              },
              "start": 446,
              "end": 453
            },
            "directive": null,
            "start": 446,
            "end": 454
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 459,
                "end": 461
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t3",
                "optional": false,
                "typeAnnotation": null,
                "start": 464,
                "end": 466
              },
              "start": 459,
              "end": 466
            },
            "directive": null,
            "start": 459,
            "end": 467
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 482,
                "end": 484
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t4",
                "optional": false,
                "typeAnnotation": null,
                "start": 487,
                "end": 489
              },
              "start": 482,
              "end": 489
            },
            "directive": null,
            "start": 482,
            "end": 490
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t3",
                "optional": false,
                "typeAnnotation": null,
                "start": 505,
                "end": 507
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 510,
                "end": 512
              },
              "start": 505,
              "end": 512
            },
            "directive": null,
            "start": 505,
            "end": 513
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t3",
                "optional": false,
                "typeAnnotation": null,
                "start": 518,
                "end": 520
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 523,
                "end": 525
              },
              "start": 518,
              "end": 525
            },
            "directive": null,
            "start": 518,
            "end": 526
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t3",
                "optional": false,
                "typeAnnotation": null,
                "start": 531,
                "end": 533
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t3",
                "optional": false,
                "typeAnnotation": null,
                "start": 536,
                "end": 538
              },
              "start": 531,
              "end": 538
            },
            "directive": null,
            "start": 531,
            "end": 539
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t3",
                "optional": false,
                "typeAnnotation": null,
                "start": 544,
                "end": 546
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t4",
                "optional": false,
                "typeAnnotation": null,
                "start": 549,
                "end": 551
              },
              "start": 544,
              "end": 551
            },
            "directive": null,
            "start": 544,
            "end": 552
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t4",
                "optional": false,
                "typeAnnotation": null,
                "start": 567,
                "end": 569
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 572,
                "end": 574
              },
              "start": 567,
              "end": 574
            },
            "directive": null,
            "start": 567,
            "end": 575
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t4",
                "optional": false,
                "typeAnnotation": null,
                "start": 580,
                "end": 582
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 585,
                "end": 587
              },
              "start": 580,
              "end": 587
            },
            "directive": null,
            "start": 580,
            "end": 588
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t4",
                "optional": false,
                "typeAnnotation": null,
                "start": 593,
                "end": 595
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t3",
                "optional": false,
                "typeAnnotation": null,
                "start": 598,
                "end": 600
              },
              "start": 593,
              "end": 600
            },
            "directive": null,
            "start": 593,
            "end": 601
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t4",
                "optional": false,
                "typeAnnotation": null,
                "start": 606,
                "end": 608
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t4",
                "optional": false,
                "typeAnnotation": null,
                "start": 611,
                "end": 613
              },
              "start": 606,
              "end": 613
            },
            "directive": null,
            "start": 606,
            "end": 614
          }
        ],
        "start": 345,
        "end": 616
      },
      "expression": false,
      "start": 301,
      "end": 616
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
            "name": "t2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 626,
                  "end": 628
                },
                "typeArguments": null,
                "start": 626,
                "end": 628
              },
              "start": 624,
              "end": 628
            },
            "start": 622,
            "end": 628
          },
          "init": null,
          "definite": false,
          "start": 622,
          "end": 628
        }
      ],
      "declare": false,
      "start": 618,
      "end": 629
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
            "name": "t3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 638,
                  "end": 640
                },
                "typeArguments": null,
                "start": 638,
                "end": 640
              },
              "start": 636,
              "end": 640
            },
            "start": 634,
            "end": 640
          },
          "init": null,
          "definite": false,
          "start": 634,
          "end": 640
        }
      ],
      "declare": false,
      "start": 630,
      "end": 641
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
            "name": "t4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 650,
                  "end": 652
                },
                "typeArguments": null,
                "start": 650,
                "end": 652
              },
              "start": 648,
              "end": 652
            },
            "start": 646,
            "end": 652
          },
          "init": null,
          "definite": false,
          "start": 646,
          "end": 652
        }
      ],
      "declare": false,
      "start": 642,
      "end": 653
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "t2",
          "optional": false,
          "typeAnnotation": null,
          "start": 655,
          "end": 657
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "value": 42,
              "raw": "42",
              "start": 661,
              "end": 663
            },
            {
              "type": "Literal",
              "value": "hello",
              "raw": "\"hello\"",
              "start": 665,
              "end": 672
            }
          ],
          "start": 660,
          "end": 673
        },
        "start": 655,
        "end": 673
      },
      "directive": null,
      "start": 655,
      "end": 674
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "t3",
          "optional": false,
          "typeAnnotation": null,
          "start": 675,
          "end": 677
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "value": 42,
              "raw": "42",
              "start": 681,
              "end": 683
            },
            {
              "type": "Literal",
              "value": "hello",
              "raw": "\"hello\"",
              "start": 685,
              "end": 692
            }
          ],
          "start": 680,
          "end": 693
        },
        "start": 675,
        "end": 693
      },
      "directive": null,
      "start": 675,
      "end": 694
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "t3",
          "optional": false,
          "typeAnnotation": null,
          "start": 695,
          "end": 697
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "value": 42,
              "raw": "42",
              "start": 701,
              "end": 703
            },
            null,
            {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 705,
              "end": 709
            }
          ],
          "start": 700,
          "end": 710
        },
        "start": 695,
        "end": 710
      },
      "directive": null,
      "start": 695,
      "end": 710
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "t3",
          "optional": false,
          "typeAnnotation": null,
          "start": 711,
          "end": 713
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "value": 42,
              "raw": "42",
              "start": 717,
              "end": 719
            }
          ],
          "start": 716,
          "end": 720
        },
        "start": 711,
        "end": 720
      },
      "directive": null,
      "start": 711,
      "end": 721
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "t4",
          "optional": false,
          "typeAnnotation": null,
          "start": 722,
          "end": 724
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "value": 42,
              "raw": "42",
              "start": 728,
              "end": 730
            },
            {
              "type": "Literal",
              "value": "hello",
              "raw": "\"hello\"",
              "start": 732,
              "end": 739
            }
          ],
          "start": 727,
          "end": 740
        },
        "start": 722,
        "end": 740
      },
      "directive": null,
      "start": 722,
      "end": 741
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "t4",
          "optional": false,
          "typeAnnotation": null,
          "start": 742,
          "end": 744
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "value": 42,
              "raw": "42",
              "start": 748,
              "end": 750
            },
            null,
            {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 752,
              "end": 756
            }
          ],
          "start": 747,
          "end": 757
        },
        "start": 742,
        "end": 757
      },
      "directive": null,
      "start": 742,
      "end": 758
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "t4",
          "optional": false,
          "typeAnnotation": null,
          "start": 759,
          "end": 761
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            null,
            {
              "type": "Literal",
              "value": "hello",
              "raw": "\"hello\"",
              "start": 766,
              "end": 773
            },
            {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 775,
              "end": 779
            }
          ],
          "start": 764,
          "end": 780
        },
        "start": 759,
        "end": 780
      },
      "directive": null,
      "start": 759,
      "end": 781
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "t4",
          "optional": false,
          "typeAnnotation": null,
          "start": 782,
          "end": 784
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            null,
            null,
            {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 790,
              "end": 794
            }
          ],
          "start": 787,
          "end": 795
        },
        "start": 782,
        "end": 795
      },
      "directive": null,
      "start": 782,
      "end": 796
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "t4",
          "optional": false,
          "typeAnnotation": null,
          "start": 797,
          "end": 799
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [],
          "start": 802,
          "end": 804
        },
        "start": 797,
        "end": 804
      },
      "directive": null,
      "start": 797,
      "end": 805
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 805
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 0,
    "end": 4
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 5,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 10,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 11,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 17,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 19,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 27,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 35,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 37,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 42,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 47,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 48,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 54,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 56,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 62,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 64,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 75,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "T3",
    "start": 80,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 86,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 92,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 94,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 101,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 103,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 112,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 114,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "T4",
    "start": 119,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 124,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 125,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 132,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 134,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 141,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 143,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 152,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 155,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "L1",
    "start": 160,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 163,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 165,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 167,
    "end": 168
  },
  {
    "type": "String",
    "value": "\"length\"",
    "start": 168,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 179,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "L2",
    "start": 184,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 187,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 189,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 191,
    "end": 192
  },
  {
    "type": "String",
    "value": "\"length\"",
    "start": 192,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 201,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 203,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "L3",
    "start": 208,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 211,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "T3",
    "start": 213,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 215,
    "end": 216
  },
  {
    "type": "String",
    "value": "\"length\"",
    "start": 216,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 225,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 227,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "L4",
    "start": 232,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 235,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "T4",
    "start": 237,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 239,
    "end": 240
  },
  {
    "type": "String",
    "value": "\"length\"",
    "start": 240,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 249,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 252,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "T5",
    "start": 257,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 262,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 263,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 269,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 271,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 278,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 280,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 288,
    "end": 289
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 301,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 310,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 312,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 313,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 315,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 317,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 319,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 321,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 323,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 325,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 327,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 329,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 331,
    "end": 332
  },
  {
    "type": "Identifier",
    "value": "T3",
    "start": 333,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 335,
    "end": 336
  },
  {
    "type": "Identifier",
    "value": "t4",
    "start": 337,
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
    "value": "T4",
    "start": 341,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 343,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 345,
    "end": 346
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 351,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 354,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 356,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 358,
    "end": 359
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 364,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 367,
    "end": 368
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 369,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 371,
    "end": 372
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 387,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 390,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 392,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 394,
    "end": 395
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 410,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 413,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "t4",
    "start": 415,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 417,
    "end": 418
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 433,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 436,
    "end": 437
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 438,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 440,
    "end": 441
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 446,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 449,
    "end": 450
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 451,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 453,
    "end": 454
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 459,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 462,
    "end": 463
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 464,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 466,
    "end": 467
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 482,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 485,
    "end": 486
  },
  {
    "type": "Identifier",
    "value": "t4",
    "start": 487,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 489,
    "end": 490
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 505,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 508,
    "end": 509
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 510,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 512,
    "end": 513
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 518,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 521,
    "end": 522
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 523,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 525,
    "end": 526
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 531,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 534,
    "end": 535
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 536,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 538,
    "end": 539
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 544,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 547,
    "end": 548
  },
  {
    "type": "Identifier",
    "value": "t4",
    "start": 549,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 551,
    "end": 552
  },
  {
    "type": "Identifier",
    "value": "t4",
    "start": 567,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 570,
    "end": 571
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 572,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 574,
    "end": 575
  },
  {
    "type": "Identifier",
    "value": "t4",
    "start": 580,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 583,
    "end": 584
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 585,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 587,
    "end": 588
  },
  {
    "type": "Identifier",
    "value": "t4",
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
    "type": "Identifier",
    "value": "t3",
    "start": 598,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 600,
    "end": 601
  },
  {
    "type": "Identifier",
    "value": "t4",
    "start": 606,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 609,
    "end": 610
  },
  {
    "type": "Identifier",
    "value": "t4",
    "start": 611,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 613,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 615,
    "end": 616
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 618,
    "end": 621
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 622,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 624,
    "end": 625
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 626,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 628,
    "end": 629
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 630,
    "end": 633
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 634,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 636,
    "end": 637
  },
  {
    "type": "Identifier",
    "value": "T3",
    "start": 638,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 640,
    "end": 641
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 642,
    "end": 645
  },
  {
    "type": "Identifier",
    "value": "t4",
    "start": 646,
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
    "value": "T4",
    "start": 650,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 652,
    "end": 653
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 655,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 658,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 660,
    "end": 661
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 661,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 663,
    "end": 664
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 665,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 672,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 673,
    "end": 674
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 675,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 678,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 680,
    "end": 681
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 681,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 683,
    "end": 684
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 685,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 692,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 693,
    "end": 694
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 695,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 698,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 700,
    "end": 701
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 701,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 703,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 704,
    "end": 705
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 705,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 709,
    "end": 710
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 711,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 714,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 716,
    "end": 717
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 717,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 719,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 720,
    "end": 721
  },
  {
    "type": "Identifier",
    "value": "t4",
    "start": 722,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 725,
    "end": 726
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 727,
    "end": 728
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 728,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 730,
    "end": 731
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 732,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 739,
    "end": 740
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 740,
    "end": 741
  },
  {
    "type": "Identifier",
    "value": "t4",
    "start": 742,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 745,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 747,
    "end": 748
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 748,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 750,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 751,
    "end": 752
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 752,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 756,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 757,
    "end": 758
  },
  {
    "type": "Identifier",
    "value": "t4",
    "start": 759,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 762,
    "end": 763
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 764,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 765,
    "end": 766
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 766,
    "end": 773
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 773,
    "end": 774
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 775,
    "end": 779
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 779,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 780,
    "end": 781
  },
  {
    "type": "Identifier",
    "value": "t4",
    "start": 782,
    "end": 784
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 785,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 787,
    "end": 788
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 788,
    "end": 789
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 789,
    "end": 790
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 790,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 794,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 795,
    "end": 796
  },
  {
    "type": "Identifier",
    "value": "t4",
    "start": 797,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 800,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 802,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 803,
    "end": 804
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 804,
    "end": 805
  }
]
```
