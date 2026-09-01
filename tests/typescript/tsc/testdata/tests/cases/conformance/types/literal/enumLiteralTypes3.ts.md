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
        "name": "Choice",
        "optional": false,
        "typeAnnotation": null,
        "start": 11,
        "end": 17
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Unknown",
              "optional": false,
              "typeAnnotation": null,
              "start": 20,
              "end": 27
            },
            "initializer": null,
            "computed": false,
            "start": 20,
            "end": 27
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Yes",
              "optional": false,
              "typeAnnotation": null,
              "start": 29,
              "end": 32
            },
            "initializer": null,
            "computed": false,
            "start": 29,
            "end": 32
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "No",
              "optional": false,
              "typeAnnotation": null,
              "start": 34,
              "end": 36
            },
            "initializer": null,
            "computed": false,
            "start": 34,
            "end": 36
          }
        ],
        "start": 18,
        "end": 38
      },
      "const": true,
      "declare": false,
      "start": 0,
      "end": 38
    },
    {
      "type": "EmptyStatement",
      "start": 38,
      "end": 39
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Yes",
        "optional": false,
        "typeAnnotation": null,
        "start": 46,
        "end": 49
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "Choice",
            "optional": false,
            "typeAnnotation": null,
            "start": 52,
            "end": 58
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "Yes",
            "optional": false,
            "typeAnnotation": null,
            "start": 59,
            "end": 62
          },
          "start": 52,
          "end": 62
        },
        "typeArguments": null,
        "start": 52,
        "end": 62
      },
      "declare": false,
      "start": 41,
      "end": 63
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "YesNo",
        "optional": false,
        "typeAnnotation": null,
        "start": 69,
        "end": 74
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "Choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 77,
                "end": 83
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Yes",
                "optional": false,
                "typeAnnotation": null,
                "start": 84,
                "end": 87
              },
              "start": 77,
              "end": 87
            },
            "typeArguments": null,
            "start": 77,
            "end": 87
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "Choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 90,
                "end": 96
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "No",
                "optional": false,
                "typeAnnotation": null,
                "start": 97,
                "end": 99
              },
              "start": 90,
              "end": 99
            },
            "typeArguments": null,
            "start": 90,
            "end": 99
          }
        ],
        "start": 77,
        "end": 99
      },
      "declare": false,
      "start": 64,
      "end": 100
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NoYes",
        "optional": false,
        "typeAnnotation": null,
        "start": 106,
        "end": 111
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "Choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 114,
                "end": 120
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "No",
                "optional": false,
                "typeAnnotation": null,
                "start": 121,
                "end": 123
              },
              "start": 114,
              "end": 123
            },
            "typeArguments": null,
            "start": 114,
            "end": 123
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "Choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 126,
                "end": 132
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Yes",
                "optional": false,
                "typeAnnotation": null,
                "start": 133,
                "end": 136
              },
              "start": 126,
              "end": 136
            },
            "typeArguments": null,
            "start": 126,
            "end": 136
          }
        ],
        "start": 114,
        "end": 136
      },
      "declare": false,
      "start": 101,
      "end": 137
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "UnknownYesNo",
        "optional": false,
        "typeAnnotation": null,
        "start": 143,
        "end": 155
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "Choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 158,
                "end": 164
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Unknown",
                "optional": false,
                "typeAnnotation": null,
                "start": 165,
                "end": 172
              },
              "start": 158,
              "end": 172
            },
            "typeArguments": null,
            "start": 158,
            "end": 172
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "Choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 175,
                "end": 181
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Yes",
                "optional": false,
                "typeAnnotation": null,
                "start": 182,
                "end": 185
              },
              "start": 175,
              "end": 185
            },
            "typeArguments": null,
            "start": 175,
            "end": 185
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "Choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 188,
                "end": 194
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "No",
                "optional": false,
                "typeAnnotation": null,
                "start": 195,
                "end": 197
              },
              "start": 188,
              "end": 197
            },
            "typeArguments": null,
            "start": 188,
            "end": 197
          }
        ],
        "start": 158,
        "end": 197
      },
      "declare": false,
      "start": 138,
      "end": 198
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 209,
        "end": 211
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Yes",
                "optional": false,
                "typeAnnotation": null,
                "start": 215,
                "end": 218
              },
              "typeArguments": null,
              "start": 215,
              "end": 218
            },
            "start": 213,
            "end": 218
          },
          "start": 212,
          "end": 218
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "YesNo",
                "optional": false,
                "typeAnnotation": null,
                "start": 223,
                "end": 228
              },
              "typeArguments": null,
              "start": 223,
              "end": 228
            },
            "start": 221,
            "end": 228
          },
          "start": 220,
          "end": 228
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "UnknownYesNo",
                "optional": false,
                "typeAnnotation": null,
                "start": 233,
                "end": 245
              },
              "typeArguments": null,
              "start": 233,
              "end": 245
            },
            "start": 231,
            "end": 245
          },
          "start": 230,
          "end": 245
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 250,
                "end": 256
              },
              "typeArguments": null,
              "start": 250,
              "end": 256
            },
            "start": 248,
            "end": 256
          },
          "start": 247,
          "end": 256
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
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 264,
                "end": 265
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 268,
                "end": 269
              },
              "start": 264,
              "end": 269
            },
            "directive": null,
            "start": 264,
            "end": 270
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 275,
                "end": 276
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 279,
                "end": 280
              },
              "start": 275,
              "end": 280
            },
            "directive": null,
            "start": 275,
            "end": 281
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 286,
                "end": 287
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 290,
                "end": 291
              },
              "start": 286,
              "end": 291
            },
            "directive": null,
            "start": 286,
            "end": 292
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 297,
                "end": 298
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 301,
                "end": 302
              },
              "start": 297,
              "end": 302
            },
            "directive": null,
            "start": 297,
            "end": 303
          }
        ],
        "start": 258,
        "end": 305
      },
      "expression": false,
      "start": 200,
      "end": 305
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 316,
        "end": 318
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Yes",
                "optional": false,
                "typeAnnotation": null,
                "start": 322,
                "end": 325
              },
              "typeArguments": null,
              "start": 322,
              "end": 325
            },
            "start": 320,
            "end": 325
          },
          "start": 319,
          "end": 325
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "YesNo",
                "optional": false,
                "typeAnnotation": null,
                "start": 330,
                "end": 335
              },
              "typeArguments": null,
              "start": 330,
              "end": 335
            },
            "start": 328,
            "end": 335
          },
          "start": 327,
          "end": 335
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "UnknownYesNo",
                "optional": false,
                "typeAnnotation": null,
                "start": 340,
                "end": 352
              },
              "typeArguments": null,
              "start": 340,
              "end": 352
            },
            "start": 338,
            "end": 352
          },
          "start": 337,
          "end": 352
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 357,
                "end": 363
              },
              "typeArguments": null,
              "start": 357,
              "end": 363
            },
            "start": 355,
            "end": 363
          },
          "start": 354,
          "end": 363
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
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 371,
                "end": 372
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 375,
                "end": 376
              },
              "start": 371,
              "end": 376
            },
            "directive": null,
            "start": 371,
            "end": 377
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 382,
                "end": 383
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 386,
                "end": 387
              },
              "start": 382,
              "end": 387
            },
            "directive": null,
            "start": 382,
            "end": 388
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 393,
                "end": 394
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 397,
                "end": 398
              },
              "start": 393,
              "end": 398
            },
            "directive": null,
            "start": 393,
            "end": 399
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 404,
                "end": 405
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 408,
                "end": 409
              },
              "start": 404,
              "end": 409
            },
            "directive": null,
            "start": 404,
            "end": 410
          }
        ],
        "start": 365,
        "end": 412
      },
      "expression": false,
      "start": 307,
      "end": 412
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 423,
        "end": 425
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Yes",
                "optional": false,
                "typeAnnotation": null,
                "start": 429,
                "end": 432
              },
              "typeArguments": null,
              "start": 429,
              "end": 432
            },
            "start": 427,
            "end": 432
          },
          "start": 426,
          "end": 432
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "YesNo",
                "optional": false,
                "typeAnnotation": null,
                "start": 437,
                "end": 442
              },
              "typeArguments": null,
              "start": 437,
              "end": 442
            },
            "start": 435,
            "end": 442
          },
          "start": 434,
          "end": 442
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "UnknownYesNo",
                "optional": false,
                "typeAnnotation": null,
                "start": 447,
                "end": 459
              },
              "typeArguments": null,
              "start": 447,
              "end": 459
            },
            "start": 445,
            "end": 459
          },
          "start": 444,
          "end": 459
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 464,
                "end": 470
              },
              "typeArguments": null,
              "start": 464,
              "end": 470
            },
            "start": 462,
            "end": 470
          },
          "start": 461,
          "end": 470
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
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 478,
                "end": 479
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 482,
                "end": 483
              },
              "start": 478,
              "end": 483
            },
            "directive": null,
            "start": 478,
            "end": 484
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 489,
                "end": 490
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 493,
                "end": 494
              },
              "start": 489,
              "end": 494
            },
            "directive": null,
            "start": 489,
            "end": 495
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 500,
                "end": 501
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 504,
                "end": 505
              },
              "start": 500,
              "end": 505
            },
            "directive": null,
            "start": 500,
            "end": 506
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 511,
                "end": 512
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 515,
                "end": 516
              },
              "start": 511,
              "end": 516
            },
            "directive": null,
            "start": 511,
            "end": 517
          }
        ],
        "start": 472,
        "end": 519
      },
      "expression": false,
      "start": 414,
      "end": 519
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 530,
        "end": 532
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Yes",
                "optional": false,
                "typeAnnotation": null,
                "start": 536,
                "end": 539
              },
              "typeArguments": null,
              "start": 536,
              "end": 539
            },
            "start": 534,
            "end": 539
          },
          "start": 533,
          "end": 539
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "YesNo",
                "optional": false,
                "typeAnnotation": null,
                "start": 544,
                "end": 549
              },
              "typeArguments": null,
              "start": 544,
              "end": 549
            },
            "start": 542,
            "end": 549
          },
          "start": 541,
          "end": 549
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "UnknownYesNo",
                "optional": false,
                "typeAnnotation": null,
                "start": 554,
                "end": 566
              },
              "typeArguments": null,
              "start": 554,
              "end": 566
            },
            "start": 552,
            "end": 566
          },
          "start": 551,
          "end": 566
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 571,
                "end": 577
              },
              "typeArguments": null,
              "start": 571,
              "end": 577
            },
            "start": 569,
            "end": 577
          },
          "start": 568,
          "end": 577
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
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 585,
                "end": 586
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 589,
                "end": 590
              },
              "start": 585,
              "end": 590
            },
            "directive": null,
            "start": 585,
            "end": 591
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 596,
                "end": 597
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 600,
                "end": 601
              },
              "start": 596,
              "end": 601
            },
            "directive": null,
            "start": 596,
            "end": 602
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 607,
                "end": 608
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 611,
                "end": 612
              },
              "start": 607,
              "end": 612
            },
            "directive": null,
            "start": 607,
            "end": 613
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 618,
                "end": 619
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 622,
                "end": 623
              },
              "start": 618,
              "end": 623
            },
            "directive": null,
            "start": 618,
            "end": 624
          }
        ],
        "start": 579,
        "end": 626
      },
      "expression": false,
      "start": 521,
      "end": 626
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null,
        "start": 637,
        "end": 639
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Yes",
                "optional": false,
                "typeAnnotation": null,
                "start": 643,
                "end": 646
              },
              "typeArguments": null,
              "start": 643,
              "end": 646
            },
            "start": 641,
            "end": 646
          },
          "start": 640,
          "end": 646
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "YesNo",
                "optional": false,
                "typeAnnotation": null,
                "start": 651,
                "end": 656
              },
              "typeArguments": null,
              "start": 651,
              "end": 656
            },
            "start": 649,
            "end": 656
          },
          "start": 648,
          "end": 656
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "UnknownYesNo",
                "optional": false,
                "typeAnnotation": null,
                "start": 661,
                "end": 673
              },
              "typeArguments": null,
              "start": 661,
              "end": 673
            },
            "start": 659,
            "end": 673
          },
          "start": 658,
          "end": 673
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 678,
                "end": 684
              },
              "typeArguments": null,
              "start": 678,
              "end": 684
            },
            "start": 676,
            "end": 684
          },
          "start": 675,
          "end": 684
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
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 692,
                "end": 693
              },
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Choice",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 696,
                  "end": 702
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Unknown",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 703,
                  "end": 710
                },
                "optional": false,
                "computed": false,
                "start": 696,
                "end": 710
              },
              "start": 692,
              "end": 710
            },
            "directive": null,
            "start": 692,
            "end": 711
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 716,
                "end": 717
              },
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Choice",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 720,
                  "end": 726
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Yes",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 727,
                  "end": 730
                },
                "optional": false,
                "computed": false,
                "start": 720,
                "end": 730
              },
              "start": 716,
              "end": 730
            },
            "directive": null,
            "start": 716,
            "end": 731
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 736,
                "end": 737
              },
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Choice",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 740,
                  "end": 746
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "No",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 747,
                  "end": 749
                },
                "optional": false,
                "computed": false,
                "start": 740,
                "end": 749
              },
              "start": 736,
              "end": 749
            },
            "directive": null,
            "start": 736,
            "end": 750
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 755,
                "end": 756
              },
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Choice",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 759,
                  "end": 765
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Unknown",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 766,
                  "end": 773
                },
                "optional": false,
                "computed": false,
                "start": 759,
                "end": 773
              },
              "start": 755,
              "end": 773
            },
            "directive": null,
            "start": 755,
            "end": 774
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 779,
                "end": 780
              },
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Choice",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 783,
                  "end": 789
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Yes",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 790,
                  "end": 793
                },
                "optional": false,
                "computed": false,
                "start": 783,
                "end": 793
              },
              "start": 779,
              "end": 793
            },
            "directive": null,
            "start": 779,
            "end": 794
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 799,
                "end": 800
              },
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Choice",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 803,
                  "end": 809
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "No",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 810,
                  "end": 812
                },
                "optional": false,
                "computed": false,
                "start": 803,
                "end": 812
              },
              "start": 799,
              "end": 812
            },
            "directive": null,
            "start": 799,
            "end": 813
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 818,
                "end": 819
              },
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Choice",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 822,
                  "end": 828
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Unknown",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 829,
                  "end": 836
                },
                "optional": false,
                "computed": false,
                "start": 822,
                "end": 836
              },
              "start": 818,
              "end": 836
            },
            "directive": null,
            "start": 818,
            "end": 837
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 842,
                "end": 843
              },
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Choice",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 846,
                  "end": 852
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Yes",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 853,
                  "end": 856
                },
                "optional": false,
                "computed": false,
                "start": 846,
                "end": 856
              },
              "start": 842,
              "end": 856
            },
            "directive": null,
            "start": 842,
            "end": 857
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 862,
                "end": 863
              },
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Choice",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 866,
                  "end": 872
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "No",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 873,
                  "end": 875
                },
                "optional": false,
                "computed": false,
                "start": 866,
                "end": 875
              },
              "start": 862,
              "end": 875
            },
            "directive": null,
            "start": 862,
            "end": 876
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 881,
                "end": 882
              },
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Choice",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 885,
                  "end": 891
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Unknown",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 892,
                  "end": 899
                },
                "optional": false,
                "computed": false,
                "start": 885,
                "end": 899
              },
              "start": 881,
              "end": 899
            },
            "directive": null,
            "start": 881,
            "end": 900
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 905,
                "end": 906
              },
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Choice",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 909,
                  "end": 915
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Yes",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 916,
                  "end": 919
                },
                "optional": false,
                "computed": false,
                "start": 909,
                "end": 919
              },
              "start": 905,
              "end": 919
            },
            "directive": null,
            "start": 905,
            "end": 920
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 925,
                "end": 926
              },
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Choice",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 929,
                  "end": 935
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "No",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 936,
                  "end": 938
                },
                "optional": false,
                "computed": false,
                "start": 929,
                "end": 938
              },
              "start": 925,
              "end": 938
            },
            "directive": null,
            "start": 925,
            "end": 939
          }
        ],
        "start": 686,
        "end": 941
      },
      "expression": false,
      "start": 628,
      "end": 941
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null,
        "start": 952,
        "end": 954
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Yes",
                "optional": false,
                "typeAnnotation": null,
                "start": 958,
                "end": 961
              },
              "typeArguments": null,
              "start": 958,
              "end": 961
            },
            "start": 956,
            "end": 961
          },
          "start": 955,
          "end": 961
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "YesNo",
                "optional": false,
                "typeAnnotation": null,
                "start": 966,
                "end": 971
              },
              "typeArguments": null,
              "start": 966,
              "end": 971
            },
            "start": 964,
            "end": 971
          },
          "start": 963,
          "end": 971
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "UnknownYesNo",
                "optional": false,
                "typeAnnotation": null,
                "start": 976,
                "end": 988
              },
              "typeArguments": null,
              "start": 976,
              "end": 988
            },
            "start": 974,
            "end": 988
          },
          "start": 973,
          "end": 988
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 993,
                "end": 999
              },
              "typeArguments": null,
              "start": 993,
              "end": 999
            },
            "start": 991,
            "end": 999
          },
          "start": 990,
          "end": 999
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1007,
                "end": 1008
              },
              "operator": "===",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Choice",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1013,
                  "end": 1019
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Unknown",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1020,
                  "end": 1027
                },
                "optional": false,
                "computed": false,
                "start": 1013,
                "end": 1027
              },
              "start": 1007,
              "end": 1027
            },
            "directive": null,
            "start": 1007,
            "end": 1028
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1033,
                "end": 1034
              },
              "operator": "===",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Choice",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1039,
                  "end": 1045
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Yes",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1046,
                  "end": 1049
                },
                "optional": false,
                "computed": false,
                "start": 1039,
                "end": 1049
              },
              "start": 1033,
              "end": 1049
            },
            "directive": null,
            "start": 1033,
            "end": 1050
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1055,
                "end": 1056
              },
              "operator": "===",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Choice",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1061,
                  "end": 1067
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "No",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1068,
                  "end": 1070
                },
                "optional": false,
                "computed": false,
                "start": 1061,
                "end": 1070
              },
              "start": 1055,
              "end": 1070
            },
            "directive": null,
            "start": 1055,
            "end": 1071
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1076,
                "end": 1077
              },
              "operator": "===",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Choice",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1082,
                  "end": 1088
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Unknown",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1089,
                  "end": 1096
                },
                "optional": false,
                "computed": false,
                "start": 1082,
                "end": 1096
              },
              "start": 1076,
              "end": 1096
            },
            "directive": null,
            "start": 1076,
            "end": 1097
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1102,
                "end": 1103
              },
              "operator": "===",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Choice",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1108,
                  "end": 1114
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Yes",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1115,
                  "end": 1118
                },
                "optional": false,
                "computed": false,
                "start": 1108,
                "end": 1118
              },
              "start": 1102,
              "end": 1118
            },
            "directive": null,
            "start": 1102,
            "end": 1119
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1124,
                "end": 1125
              },
              "operator": "===",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Choice",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1130,
                  "end": 1136
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "No",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1137,
                  "end": 1139
                },
                "optional": false,
                "computed": false,
                "start": 1130,
                "end": 1139
              },
              "start": 1124,
              "end": 1139
            },
            "directive": null,
            "start": 1124,
            "end": 1140
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1145,
                "end": 1146
              },
              "operator": "===",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Choice",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1151,
                  "end": 1157
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Unknown",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1158,
                  "end": 1165
                },
                "optional": false,
                "computed": false,
                "start": 1151,
                "end": 1165
              },
              "start": 1145,
              "end": 1165
            },
            "directive": null,
            "start": 1145,
            "end": 1166
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1171,
                "end": 1172
              },
              "operator": "===",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Choice",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1177,
                  "end": 1183
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Yes",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1184,
                  "end": 1187
                },
                "optional": false,
                "computed": false,
                "start": 1177,
                "end": 1187
              },
              "start": 1171,
              "end": 1187
            },
            "directive": null,
            "start": 1171,
            "end": 1188
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1193,
                "end": 1194
              },
              "operator": "===",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Choice",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1199,
                  "end": 1205
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "No",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1206,
                  "end": 1208
                },
                "optional": false,
                "computed": false,
                "start": 1199,
                "end": 1208
              },
              "start": 1193,
              "end": 1208
            },
            "directive": null,
            "start": 1193,
            "end": 1209
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 1214,
                "end": 1215
              },
              "operator": "===",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Choice",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1220,
                  "end": 1226
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Unknown",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1227,
                  "end": 1234
                },
                "optional": false,
                "computed": false,
                "start": 1220,
                "end": 1234
              },
              "start": 1214,
              "end": 1234
            },
            "directive": null,
            "start": 1214,
            "end": 1235
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 1240,
                "end": 1241
              },
              "operator": "===",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Choice",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1246,
                  "end": 1252
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Yes",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1253,
                  "end": 1256
                },
                "optional": false,
                "computed": false,
                "start": 1246,
                "end": 1256
              },
              "start": 1240,
              "end": 1256
            },
            "directive": null,
            "start": 1240,
            "end": 1257
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 1262,
                "end": 1263
              },
              "operator": "===",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Choice",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1268,
                  "end": 1274
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "No",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1275,
                  "end": 1277
                },
                "optional": false,
                "computed": false,
                "start": 1268,
                "end": 1277
              },
              "start": 1262,
              "end": 1277
            },
            "directive": null,
            "start": 1262,
            "end": 1278
          }
        ],
        "start": 1001,
        "end": 1280
      },
      "expression": false,
      "start": 943,
      "end": 1280
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f7",
        "optional": false,
        "typeAnnotation": null,
        "start": 1291,
        "end": 1293
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Yes",
                "optional": false,
                "typeAnnotation": null,
                "start": 1297,
                "end": 1300
              },
              "typeArguments": null,
              "start": 1297,
              "end": 1300
            },
            "start": 1295,
            "end": 1300
          },
          "start": 1294,
          "end": 1300
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "YesNo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1305,
                "end": 1310
              },
              "typeArguments": null,
              "start": 1305,
              "end": 1310
            },
            "start": 1303,
            "end": 1310
          },
          "start": 1302,
          "end": 1310
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "UnknownYesNo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1315,
                "end": 1327
              },
              "typeArguments": null,
              "start": 1315,
              "end": 1327
            },
            "start": 1313,
            "end": 1327
          },
          "start": 1312,
          "end": 1327
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 1332,
                "end": 1338
              },
              "typeArguments": null,
              "start": 1332,
              "end": 1338
            },
            "start": 1330,
            "end": 1338
          },
          "start": 1329,
          "end": 1338
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1346,
                "end": 1347
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1352,
                "end": 1353
              },
              "start": 1346,
              "end": 1353
            },
            "directive": null,
            "start": 1346,
            "end": 1354
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1359,
                "end": 1360
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1365,
                "end": 1366
              },
              "start": 1359,
              "end": 1366
            },
            "directive": null,
            "start": 1359,
            "end": 1367
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1372,
                "end": 1373
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1378,
                "end": 1379
              },
              "start": 1372,
              "end": 1379
            },
            "directive": null,
            "start": 1372,
            "end": 1380
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1385,
                "end": 1386
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 1391,
                "end": 1392
              },
              "start": 1385,
              "end": 1392
            },
            "directive": null,
            "start": 1385,
            "end": 1393
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1398,
                "end": 1399
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1404,
                "end": 1405
              },
              "start": 1398,
              "end": 1405
            },
            "directive": null,
            "start": 1398,
            "end": 1406
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1411,
                "end": 1412
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1417,
                "end": 1418
              },
              "start": 1411,
              "end": 1418
            },
            "directive": null,
            "start": 1411,
            "end": 1419
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1424,
                "end": 1425
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1430,
                "end": 1431
              },
              "start": 1424,
              "end": 1431
            },
            "directive": null,
            "start": 1424,
            "end": 1432
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1437,
                "end": 1438
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 1443,
                "end": 1444
              },
              "start": 1437,
              "end": 1444
            },
            "directive": null,
            "start": 1437,
            "end": 1445
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1450,
                "end": 1451
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1456,
                "end": 1457
              },
              "start": 1450,
              "end": 1457
            },
            "directive": null,
            "start": 1450,
            "end": 1458
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1463,
                "end": 1464
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1469,
                "end": 1470
              },
              "start": 1463,
              "end": 1470
            },
            "directive": null,
            "start": 1463,
            "end": 1471
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1476,
                "end": 1477
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1482,
                "end": 1483
              },
              "start": 1476,
              "end": 1483
            },
            "directive": null,
            "start": 1476,
            "end": 1484
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1489,
                "end": 1490
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 1495,
                "end": 1496
              },
              "start": 1489,
              "end": 1496
            },
            "directive": null,
            "start": 1489,
            "end": 1497
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 1502,
                "end": 1503
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1508,
                "end": 1509
              },
              "start": 1502,
              "end": 1509
            },
            "directive": null,
            "start": 1502,
            "end": 1510
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 1515,
                "end": 1516
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1521,
                "end": 1522
              },
              "start": 1515,
              "end": 1522
            },
            "directive": null,
            "start": 1515,
            "end": 1523
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 1528,
                "end": 1529
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1534,
                "end": 1535
              },
              "start": 1528,
              "end": 1535
            },
            "directive": null,
            "start": 1528,
            "end": 1536
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 1541,
                "end": 1542
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 1547,
                "end": 1548
              },
              "start": 1541,
              "end": 1548
            },
            "directive": null,
            "start": 1541,
            "end": 1549
          }
        ],
        "start": 1340,
        "end": 1551
      },
      "expression": false,
      "start": 1282,
      "end": 1551
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1562,
        "end": 1565
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Yes",
                "optional": false,
                "typeAnnotation": null,
                "start": 1569,
                "end": 1572
              },
              "typeArguments": null,
              "start": 1569,
              "end": 1572
            },
            "start": 1567,
            "end": 1572
          },
          "start": 1566,
          "end": 1572
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Yes",
            "optional": false,
            "typeAnnotation": null,
            "start": 1575,
            "end": 1578
          },
          "typeArguments": null,
          "start": 1575,
          "end": 1578
        },
        "start": 1573,
        "end": 1578
      },
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
              "start": 1593,
              "end": 1594
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Choice",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1611,
                    "end": 1617
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Unknown",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1618,
                    "end": 1625
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1611,
                  "end": 1625
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1634,
                      "end": 1635
                    },
                    "start": 1627,
                    "end": 1636
                  }
                ],
                "start": 1606,
                "end": 1636
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Choice",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1650,
                    "end": 1656
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Yes",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1657,
                    "end": 1660
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1650,
                  "end": 1660
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1669,
                      "end": 1670
                    },
                    "start": 1662,
                    "end": 1671
                  }
                ],
                "start": 1645,
                "end": 1671
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Choice",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1685,
                    "end": 1691
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "No",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1692,
                    "end": 1694
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1685,
                  "end": 1694
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1703,
                      "end": 1704
                    },
                    "start": 1696,
                    "end": 1705
                  }
                ],
                "start": 1680,
                "end": 1705
              }
            ],
            "start": 1585,
            "end": 1711
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1723,
              "end": 1724
            },
            "start": 1716,
            "end": 1725
          }
        ],
        "start": 1579,
        "end": 1727
      },
      "expression": false,
      "start": 1553,
      "end": 1727
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1738,
        "end": 1741
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "YesNo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1745,
                "end": 1750
              },
              "typeArguments": null,
              "start": 1745,
              "end": 1750
            },
            "start": 1743,
            "end": 1750
          },
          "start": 1742,
          "end": 1750
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "YesNo",
            "optional": false,
            "typeAnnotation": null,
            "start": 1753,
            "end": 1758
          },
          "typeArguments": null,
          "start": 1753,
          "end": 1758
        },
        "start": 1751,
        "end": 1758
      },
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
              "start": 1773,
              "end": 1774
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Choice",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1791,
                    "end": 1797
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Unknown",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1798,
                    "end": 1805
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1791,
                  "end": 1805
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1814,
                      "end": 1815
                    },
                    "start": 1807,
                    "end": 1816
                  }
                ],
                "start": 1786,
                "end": 1816
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Choice",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1830,
                    "end": 1836
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Yes",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1837,
                    "end": 1840
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1830,
                  "end": 1840
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1849,
                      "end": 1850
                    },
                    "start": 1842,
                    "end": 1851
                  }
                ],
                "start": 1825,
                "end": 1851
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Choice",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1865,
                    "end": 1871
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "No",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1872,
                    "end": 1874
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1865,
                  "end": 1874
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1883,
                      "end": 1884
                    },
                    "start": 1876,
                    "end": 1885
                  }
                ],
                "start": 1860,
                "end": 1885
              }
            ],
            "start": 1765,
            "end": 1891
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1903,
              "end": 1904
            },
            "start": 1896,
            "end": 1905
          }
        ],
        "start": 1759,
        "end": 1907
      },
      "expression": false,
      "start": 1729,
      "end": 1907
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1918,
        "end": 1921
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "UnknownYesNo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1925,
                "end": 1937
              },
              "typeArguments": null,
              "start": 1925,
              "end": 1937
            },
            "start": 1923,
            "end": 1937
          },
          "start": 1922,
          "end": 1937
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "UnknownYesNo",
            "optional": false,
            "typeAnnotation": null,
            "start": 1940,
            "end": 1952
          },
          "typeArguments": null,
          "start": 1940,
          "end": 1952
        },
        "start": 1938,
        "end": 1952
      },
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
              "start": 1967,
              "end": 1968
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Choice",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1985,
                    "end": 1991
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Unknown",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1992,
                    "end": 1999
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1985,
                  "end": 1999
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2008,
                      "end": 2009
                    },
                    "start": 2001,
                    "end": 2010
                  }
                ],
                "start": 1980,
                "end": 2010
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Choice",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2024,
                    "end": 2030
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Yes",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2031,
                    "end": 2034
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2024,
                  "end": 2034
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2043,
                      "end": 2044
                    },
                    "start": 2036,
                    "end": 2045
                  }
                ],
                "start": 2019,
                "end": 2045
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Choice",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2059,
                    "end": 2065
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "No",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2066,
                    "end": 2068
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2059,
                  "end": 2068
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2077,
                      "end": 2078
                    },
                    "start": 2070,
                    "end": 2079
                  }
                ],
                "start": 2054,
                "end": 2079
              }
            ],
            "start": 1959,
            "end": 2085
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 2097,
              "end": 2098
            },
            "start": 2090,
            "end": 2099
          }
        ],
        "start": 1953,
        "end": 2101
      },
      "expression": false,
      "start": 1909,
      "end": 2101
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f13",
        "optional": false,
        "typeAnnotation": null,
        "start": 2112,
        "end": 2115
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 2119,
                "end": 2125
              },
              "typeArguments": null,
              "start": 2119,
              "end": 2125
            },
            "start": 2117,
            "end": 2125
          },
          "start": 2116,
          "end": 2125
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Choice",
            "optional": false,
            "typeAnnotation": null,
            "start": 2128,
            "end": 2134
          },
          "typeArguments": null,
          "start": 2128,
          "end": 2134
        },
        "start": 2126,
        "end": 2134
      },
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
              "start": 2149,
              "end": 2150
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Choice",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2167,
                    "end": 2173
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Unknown",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2174,
                    "end": 2181
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2167,
                  "end": 2181
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2190,
                      "end": 2191
                    },
                    "start": 2183,
                    "end": 2192
                  }
                ],
                "start": 2162,
                "end": 2192
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Choice",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2206,
                    "end": 2212
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Yes",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2213,
                    "end": 2216
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2206,
                  "end": 2216
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2225,
                      "end": 2226
                    },
                    "start": 2218,
                    "end": 2227
                  }
                ],
                "start": 2201,
                "end": 2227
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Choice",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2241,
                    "end": 2247
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "No",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2248,
                    "end": 2250
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2241,
                  "end": 2250
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2259,
                      "end": 2260
                    },
                    "start": 2252,
                    "end": 2261
                  }
                ],
                "start": 2236,
                "end": 2261
              }
            ],
            "start": 2141,
            "end": 2267
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 2279,
              "end": 2280
            },
            "start": 2272,
            "end": 2281
          }
        ],
        "start": 2135,
        "end": 2283
      },
      "expression": false,
      "start": 2103,
      "end": 2283
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2283
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 0,
    "end": 5
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 6,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 11,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 18,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "Unknown",
    "start": 20,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 27,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "Yes",
    "start": 29,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 32,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "No",
    "start": 34,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 38,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 41,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "Yes",
    "start": 46,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 50,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 52,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "Yes",
    "start": 59,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 62,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 64,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "YesNo",
    "start": 69,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 77,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 83,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "Yes",
    "start": 84,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 88,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 90,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 96,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "No",
    "start": 97,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 99,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 101,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "NoYes",
    "start": 106,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 112,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 114,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 120,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "No",
    "start": 121,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 124,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 126,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 132,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "Yes",
    "start": 133,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 138,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "UnknownYesNo",
    "start": 143,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 156,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 158,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 164,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "Unknown",
    "start": 165,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 173,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 175,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 181,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "Yes",
    "start": 182,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 186,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 188,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 194,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "No",
    "start": 195,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 197,
    "end": 198
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 200,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 209,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 211,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 213,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "Yes",
    "start": 215,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 218,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 221,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "YesNo",
    "start": 223,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 228,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 231,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "UnknownYesNo",
    "start": 233,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 245,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 247,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 248,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 250,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 258,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 264,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 266,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 269,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 275,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 277,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 280,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 288,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 291,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 297,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 299,
    "end": 300
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 301,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 302,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 304,
    "end": 305
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 307,
    "end": 315
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 316,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 318,
    "end": 319
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 320,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "Yes",
    "start": 322,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 325,
    "end": 326
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 327,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 328,
    "end": 329
  },
  {
    "type": "Identifier",
    "value": "YesNo",
    "start": 330,
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
    "value": "c",
    "start": 337,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 338,
    "end": 339
  },
  {
    "type": "Identifier",
    "value": "UnknownYesNo",
    "start": 340,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 352,
    "end": 353
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 355,
    "end": 356
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 357,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 365,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 371,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 373,
    "end": 374
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 375,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 376,
    "end": 377
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 382,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 384,
    "end": 385
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 386,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 387,
    "end": 388
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 393,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 395,
    "end": 396
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 397,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 398,
    "end": 399
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 404,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "value": ";",
    "start": 409,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 411,
    "end": 412
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 414,
    "end": 422
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 423,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 425,
    "end": 426
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 426,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 427,
    "end": 428
  },
  {
    "type": "Identifier",
    "value": "Yes",
    "start": 429,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 432,
    "end": 433
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 434,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 435,
    "end": 436
  },
  {
    "type": "Identifier",
    "value": "YesNo",
    "start": 437,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 442,
    "end": 443
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 444,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 445,
    "end": 446
  },
  {
    "type": "Identifier",
    "value": "UnknownYesNo",
    "start": 447,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 459,
    "end": 460
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 461,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 462,
    "end": 463
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 464,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 470,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 472,
    "end": 473
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 478,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 480,
    "end": 481
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 482,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 483,
    "end": 484
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 489,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 491,
    "end": 492
  },
  {
    "type": "Identifier",
    "value": "b",
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
    "type": "Identifier",
    "value": "c",
    "start": 500,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 502,
    "end": 503
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 504,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 505,
    "end": 506
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 511,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 513,
    "end": 514
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 515,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 516,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 518,
    "end": 519
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 521,
    "end": 529
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 530,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 532,
    "end": 533
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 533,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 534,
    "end": 535
  },
  {
    "type": "Identifier",
    "value": "Yes",
    "start": 536,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 539,
    "end": 540
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 541,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 542,
    "end": 543
  },
  {
    "type": "Identifier",
    "value": "YesNo",
    "start": 544,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 549,
    "end": 550
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 551,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 552,
    "end": 553
  },
  {
    "type": "Identifier",
    "value": "UnknownYesNo",
    "start": 554,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 566,
    "end": 567
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 568,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 569,
    "end": 570
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 571,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 577,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 579,
    "end": 580
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 585,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 587,
    "end": 588
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 589,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 590,
    "end": 591
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 596,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 598,
    "end": 599
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 600,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 601,
    "end": 602
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 607,
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
    "value": "c",
    "start": 611,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 612,
    "end": 613
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 618,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 620,
    "end": 621
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 622,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 623,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 625,
    "end": 626
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 628,
    "end": 636
  },
  {
    "type": "Identifier",
    "value": "f5",
    "start": 637,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 639,
    "end": 640
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 640,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 641,
    "end": 642
  },
  {
    "type": "Identifier",
    "value": "Yes",
    "start": 643,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 646,
    "end": 647
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 648,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 649,
    "end": 650
  },
  {
    "type": "Identifier",
    "value": "YesNo",
    "start": 651,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 656,
    "end": 657
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 658,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 659,
    "end": 660
  },
  {
    "type": "Identifier",
    "value": "UnknownYesNo",
    "start": 661,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 673,
    "end": 674
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 675,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 676,
    "end": 677
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 678,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 684,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 686,
    "end": 687
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 692,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 694,
    "end": 695
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 696,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 702,
    "end": 703
  },
  {
    "type": "Identifier",
    "value": "Unknown",
    "start": 703,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 710,
    "end": 711
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 716,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 718,
    "end": 719
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 720,
    "end": 726
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 726,
    "end": 727
  },
  {
    "type": "Identifier",
    "value": "Yes",
    "start": 727,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 730,
    "end": 731
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 736,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 738,
    "end": 739
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 740,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 746,
    "end": 747
  },
  {
    "type": "Identifier",
    "value": "No",
    "start": 747,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 749,
    "end": 750
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 755,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 757,
    "end": 758
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 759,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 765,
    "end": 766
  },
  {
    "type": "Identifier",
    "value": "Unknown",
    "start": 766,
    "end": 773
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 773,
    "end": 774
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 779,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 781,
    "end": 782
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 783,
    "end": 789
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 789,
    "end": 790
  },
  {
    "type": "Identifier",
    "value": "Yes",
    "start": 790,
    "end": 793
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 793,
    "end": 794
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 799,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 801,
    "end": 802
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 803,
    "end": 809
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 809,
    "end": 810
  },
  {
    "type": "Identifier",
    "value": "No",
    "start": 810,
    "end": 812
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 812,
    "end": 813
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 818,
    "end": 819
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 820,
    "end": 821
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 822,
    "end": 828
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 828,
    "end": 829
  },
  {
    "type": "Identifier",
    "value": "Unknown",
    "start": 829,
    "end": 836
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 836,
    "end": 837
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 842,
    "end": 843
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 844,
    "end": 845
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 846,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 852,
    "end": 853
  },
  {
    "type": "Identifier",
    "value": "Yes",
    "start": 853,
    "end": 856
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 856,
    "end": 857
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 862,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 864,
    "end": 865
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 866,
    "end": 872
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 872,
    "end": 873
  },
  {
    "type": "Identifier",
    "value": "No",
    "start": 873,
    "end": 875
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 875,
    "end": 876
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 881,
    "end": 882
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 883,
    "end": 884
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 885,
    "end": 891
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 891,
    "end": 892
  },
  {
    "type": "Identifier",
    "value": "Unknown",
    "start": 892,
    "end": 899
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 899,
    "end": 900
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 905,
    "end": 906
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 907,
    "end": 908
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 909,
    "end": 915
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 915,
    "end": 916
  },
  {
    "type": "Identifier",
    "value": "Yes",
    "start": 916,
    "end": 919
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 919,
    "end": 920
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 925,
    "end": 926
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 927,
    "end": 928
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 929,
    "end": 935
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 935,
    "end": 936
  },
  {
    "type": "Identifier",
    "value": "No",
    "start": 936,
    "end": 938
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 938,
    "end": 939
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 940,
    "end": 941
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 943,
    "end": 951
  },
  {
    "type": "Identifier",
    "value": "f6",
    "start": 952,
    "end": 954
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 954,
    "end": 955
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 955,
    "end": 956
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 956,
    "end": 957
  },
  {
    "type": "Identifier",
    "value": "Yes",
    "start": 958,
    "end": 961
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 961,
    "end": 962
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 963,
    "end": 964
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 964,
    "end": 965
  },
  {
    "type": "Identifier",
    "value": "YesNo",
    "start": 966,
    "end": 971
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 971,
    "end": 972
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 973,
    "end": 974
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 974,
    "end": 975
  },
  {
    "type": "Identifier",
    "value": "UnknownYesNo",
    "start": 976,
    "end": 988
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 988,
    "end": 989
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 990,
    "end": 991
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 991,
    "end": 992
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 993,
    "end": 999
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 999,
    "end": 1000
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1001,
    "end": 1002
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1007,
    "end": 1008
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1009,
    "end": 1012
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 1013,
    "end": 1019
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1019,
    "end": 1020
  },
  {
    "type": "Identifier",
    "value": "Unknown",
    "start": 1020,
    "end": 1027
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1027,
    "end": 1028
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1033,
    "end": 1034
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1035,
    "end": 1038
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 1039,
    "end": 1045
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1045,
    "end": 1046
  },
  {
    "type": "Identifier",
    "value": "Yes",
    "start": 1046,
    "end": 1049
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1049,
    "end": 1050
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1055,
    "end": 1056
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1057,
    "end": 1060
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 1061,
    "end": 1067
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1067,
    "end": 1068
  },
  {
    "type": "Identifier",
    "value": "No",
    "start": 1068,
    "end": 1070
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1070,
    "end": 1071
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1076,
    "end": 1077
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1078,
    "end": 1081
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 1082,
    "end": 1088
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1088,
    "end": 1089
  },
  {
    "type": "Identifier",
    "value": "Unknown",
    "start": 1089,
    "end": 1096
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1096,
    "end": 1097
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1102,
    "end": 1103
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1104,
    "end": 1107
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 1108,
    "end": 1114
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1114,
    "end": 1115
  },
  {
    "type": "Identifier",
    "value": "Yes",
    "start": 1115,
    "end": 1118
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1118,
    "end": 1119
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1124,
    "end": 1125
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1126,
    "end": 1129
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 1130,
    "end": 1136
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1136,
    "end": 1137
  },
  {
    "type": "Identifier",
    "value": "No",
    "start": 1137,
    "end": 1139
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1139,
    "end": 1140
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1145,
    "end": 1146
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1147,
    "end": 1150
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 1151,
    "end": 1157
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1157,
    "end": 1158
  },
  {
    "type": "Identifier",
    "value": "Unknown",
    "start": 1158,
    "end": 1165
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1165,
    "end": 1166
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1171,
    "end": 1172
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1173,
    "end": 1176
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 1177,
    "end": 1183
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1183,
    "end": 1184
  },
  {
    "type": "Identifier",
    "value": "Yes",
    "start": 1184,
    "end": 1187
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1187,
    "end": 1188
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1193,
    "end": 1194
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1195,
    "end": 1198
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 1199,
    "end": 1205
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1205,
    "end": 1206
  },
  {
    "type": "Identifier",
    "value": "No",
    "start": 1206,
    "end": 1208
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1208,
    "end": 1209
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1214,
    "end": 1215
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1216,
    "end": 1219
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 1220,
    "end": 1226
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1226,
    "end": 1227
  },
  {
    "type": "Identifier",
    "value": "Unknown",
    "start": 1227,
    "end": 1234
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1234,
    "end": 1235
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1240,
    "end": 1241
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1242,
    "end": 1245
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 1246,
    "end": 1252
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1252,
    "end": 1253
  },
  {
    "type": "Identifier",
    "value": "Yes",
    "start": 1253,
    "end": 1256
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1256,
    "end": 1257
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1262,
    "end": 1263
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1264,
    "end": 1267
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 1268,
    "end": 1274
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1274,
    "end": 1275
  },
  {
    "type": "Identifier",
    "value": "No",
    "start": 1275,
    "end": 1277
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1277,
    "end": 1278
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1279,
    "end": 1280
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1282,
    "end": 1290
  },
  {
    "type": "Identifier",
    "value": "f7",
    "start": 1291,
    "end": 1293
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1293,
    "end": 1294
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1294,
    "end": 1295
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1295,
    "end": 1296
  },
  {
    "type": "Identifier",
    "value": "Yes",
    "start": 1297,
    "end": 1300
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1300,
    "end": 1301
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1302,
    "end": 1303
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1303,
    "end": 1304
  },
  {
    "type": "Identifier",
    "value": "YesNo",
    "start": 1305,
    "end": 1310
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1310,
    "end": 1311
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1312,
    "end": 1313
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1313,
    "end": 1314
  },
  {
    "type": "Identifier",
    "value": "UnknownYesNo",
    "start": 1315,
    "end": 1327
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1327,
    "end": 1328
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1329,
    "end": 1330
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1330,
    "end": 1331
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 1332,
    "end": 1338
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1338,
    "end": 1339
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1340,
    "end": 1341
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1346,
    "end": 1347
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1348,
    "end": 1351
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1352,
    "end": 1353
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1353,
    "end": 1354
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1359,
    "end": 1360
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1361,
    "end": 1364
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1365,
    "end": 1366
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1366,
    "end": 1367
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1372,
    "end": 1373
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1374,
    "end": 1377
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1378,
    "end": 1379
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1379,
    "end": 1380
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1385,
    "end": 1386
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1387,
    "end": 1390
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1391,
    "end": 1392
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1392,
    "end": 1393
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1398,
    "end": 1399
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1400,
    "end": 1403
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1404,
    "end": 1405
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1405,
    "end": 1406
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1411,
    "end": 1412
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1413,
    "end": 1416
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1417,
    "end": 1418
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1418,
    "end": 1419
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1424,
    "end": 1425
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1426,
    "end": 1429
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1430,
    "end": 1431
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1431,
    "end": 1432
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1437,
    "end": 1438
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1439,
    "end": 1442
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1443,
    "end": 1444
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1444,
    "end": 1445
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1450,
    "end": 1451
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1452,
    "end": 1455
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1456,
    "end": 1457
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1457,
    "end": 1458
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1463,
    "end": 1464
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1465,
    "end": 1468
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1469,
    "end": 1470
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1470,
    "end": 1471
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1476,
    "end": 1477
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1478,
    "end": 1481
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1482,
    "end": 1483
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1483,
    "end": 1484
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1489,
    "end": 1490
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1491,
    "end": 1494
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1495,
    "end": 1496
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1496,
    "end": 1497
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1502,
    "end": 1503
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1504,
    "end": 1507
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1508,
    "end": 1509
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1509,
    "end": 1510
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1515,
    "end": 1516
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1517,
    "end": 1520
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1521,
    "end": 1522
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1522,
    "end": 1523
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1528,
    "end": 1529
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1530,
    "end": 1533
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1534,
    "end": 1535
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1535,
    "end": 1536
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1541,
    "end": 1542
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1543,
    "end": 1546
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1547,
    "end": 1548
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1548,
    "end": 1549
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1550,
    "end": 1551
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1553,
    "end": 1561
  },
  {
    "type": "Identifier",
    "value": "f10",
    "start": 1562,
    "end": 1565
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1565,
    "end": 1566
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1566,
    "end": 1567
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1567,
    "end": 1568
  },
  {
    "type": "Identifier",
    "value": "Yes",
    "start": 1569,
    "end": 1572
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1572,
    "end": 1573
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1573,
    "end": 1574
  },
  {
    "type": "Identifier",
    "value": "Yes",
    "start": 1575,
    "end": 1578
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1579,
    "end": 1580
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 1585,
    "end": 1591
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1592,
    "end": 1593
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1593,
    "end": 1594
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1594,
    "end": 1595
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1596,
    "end": 1597
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 1606,
    "end": 1610
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 1611,
    "end": 1617
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1617,
    "end": 1618
  },
  {
    "type": "Identifier",
    "value": "Unknown",
    "start": 1618,
    "end": 1625
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1625,
    "end": 1626
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1627,
    "end": 1633
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1634,
    "end": 1635
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1635,
    "end": 1636
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 1645,
    "end": 1649
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 1650,
    "end": 1656
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1656,
    "end": 1657
  },
  {
    "type": "Identifier",
    "value": "Yes",
    "start": 1657,
    "end": 1660
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1660,
    "end": 1661
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1662,
    "end": 1668
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1669,
    "end": 1670
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1670,
    "end": 1671
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 1680,
    "end": 1684
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 1685,
    "end": 1691
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1691,
    "end": 1692
  },
  {
    "type": "Identifier",
    "value": "No",
    "start": 1692,
    "end": 1694
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1694,
    "end": 1695
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1696,
    "end": 1702
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1703,
    "end": 1704
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1704,
    "end": 1705
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1710,
    "end": 1711
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1716,
    "end": 1722
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1723,
    "end": 1724
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1724,
    "end": 1725
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1726,
    "end": 1727
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1729,
    "end": 1737
  },
  {
    "type": "Identifier",
    "value": "f11",
    "start": 1738,
    "end": 1741
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1741,
    "end": 1742
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1742,
    "end": 1743
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1743,
    "end": 1744
  },
  {
    "type": "Identifier",
    "value": "YesNo",
    "start": 1745,
    "end": 1750
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1750,
    "end": 1751
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1751,
    "end": 1752
  },
  {
    "type": "Identifier",
    "value": "YesNo",
    "start": 1753,
    "end": 1758
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1759,
    "end": 1760
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 1765,
    "end": 1771
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1772,
    "end": 1773
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1773,
    "end": 1774
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1774,
    "end": 1775
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1776,
    "end": 1777
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 1786,
    "end": 1790
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 1791,
    "end": 1797
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1797,
    "end": 1798
  },
  {
    "type": "Identifier",
    "value": "Unknown",
    "start": 1798,
    "end": 1805
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1805,
    "end": 1806
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1807,
    "end": 1813
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1814,
    "end": 1815
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1815,
    "end": 1816
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 1825,
    "end": 1829
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 1830,
    "end": 1836
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1836,
    "end": 1837
  },
  {
    "type": "Identifier",
    "value": "Yes",
    "start": 1837,
    "end": 1840
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1840,
    "end": 1841
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1842,
    "end": 1848
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1849,
    "end": 1850
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1850,
    "end": 1851
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 1860,
    "end": 1864
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 1865,
    "end": 1871
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1871,
    "end": 1872
  },
  {
    "type": "Identifier",
    "value": "No",
    "start": 1872,
    "end": 1874
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1874,
    "end": 1875
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1876,
    "end": 1882
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1883,
    "end": 1884
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1884,
    "end": 1885
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1890,
    "end": 1891
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1896,
    "end": 1902
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1903,
    "end": 1904
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1904,
    "end": 1905
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1906,
    "end": 1907
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1909,
    "end": 1917
  },
  {
    "type": "Identifier",
    "value": "f12",
    "start": 1918,
    "end": 1921
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1921,
    "end": 1922
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1922,
    "end": 1923
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1923,
    "end": 1924
  },
  {
    "type": "Identifier",
    "value": "UnknownYesNo",
    "start": 1925,
    "end": 1937
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1937,
    "end": 1938
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1938,
    "end": 1939
  },
  {
    "type": "Identifier",
    "value": "UnknownYesNo",
    "start": 1940,
    "end": 1952
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1953,
    "end": 1954
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 1959,
    "end": 1965
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1966,
    "end": 1967
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1967,
    "end": 1968
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1968,
    "end": 1969
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1970,
    "end": 1971
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 1980,
    "end": 1984
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 1985,
    "end": 1991
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1991,
    "end": 1992
  },
  {
    "type": "Identifier",
    "value": "Unknown",
    "start": 1992,
    "end": 1999
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1999,
    "end": 2000
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2001,
    "end": 2007
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "case",
    "start": 2019,
    "end": 2023
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 2024,
    "end": 2030
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2030,
    "end": 2031
  },
  {
    "type": "Identifier",
    "value": "Yes",
    "start": 2031,
    "end": 2034
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2034,
    "end": 2035
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2036,
    "end": 2042
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2043,
    "end": 2044
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2044,
    "end": 2045
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 2054,
    "end": 2058
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 2059,
    "end": 2065
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2065,
    "end": 2066
  },
  {
    "type": "Identifier",
    "value": "No",
    "start": 2066,
    "end": 2068
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2068,
    "end": 2069
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2070,
    "end": 2076
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2077,
    "end": 2078
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2078,
    "end": 2079
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2084,
    "end": 2085
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2090,
    "end": 2096
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Punctuator",
    "value": "}",
    "start": 2100,
    "end": 2101
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2103,
    "end": 2111
  },
  {
    "type": "Identifier",
    "value": "f13",
    "start": 2112,
    "end": 2115
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2115,
    "end": 2116
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2116,
    "end": 2117
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2117,
    "end": 2118
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 2119,
    "end": 2125
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2125,
    "end": 2126
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2126,
    "end": 2127
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 2128,
    "end": 2134
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2135,
    "end": 2136
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 2141,
    "end": 2147
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2148,
    "end": 2149
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2149,
    "end": 2150
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2150,
    "end": 2151
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2152,
    "end": 2153
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 2162,
    "end": 2166
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 2167,
    "end": 2173
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2173,
    "end": 2174
  },
  {
    "type": "Identifier",
    "value": "Unknown",
    "start": 2174,
    "end": 2181
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2181,
    "end": 2182
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2183,
    "end": 2189
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2190,
    "end": 2191
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2191,
    "end": 2192
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 2201,
    "end": 2205
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 2206,
    "end": 2212
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2212,
    "end": 2213
  },
  {
    "type": "Identifier",
    "value": "Yes",
    "start": 2213,
    "end": 2216
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2216,
    "end": 2217
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2218,
    "end": 2224
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2225,
    "end": 2226
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2226,
    "end": 2227
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 2236,
    "end": 2240
  },
  {
    "type": "Identifier",
    "value": "Choice",
    "start": 2241,
    "end": 2247
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2247,
    "end": 2248
  },
  {
    "type": "Identifier",
    "value": "No",
    "start": 2248,
    "end": 2250
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2250,
    "end": 2251
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2252,
    "end": 2258
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2259,
    "end": 2260
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2260,
    "end": 2261
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2266,
    "end": 2267
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2272,
    "end": 2278
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2279,
    "end": 2280
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2280,
    "end": 2281
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2282,
    "end": 2283
  }
]
```
