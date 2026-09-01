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
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 15,
        "end": 18
      },
      "expression": false,
      "start": 0,
      "end": 18
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 25,
        "end": 26
      },
      "typeParameters": null,
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 40,
              "end": 41
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 43,
                "end": 49
              },
              "start": 41,
              "end": 49
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 33,
            "end": 50
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 62,
              "end": 65
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
                "body": [],
                "start": 68,
                "end": 71
              },
              "expression": false,
              "start": 65,
              "end": 71
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 55,
            "end": 71
          }
        ],
        "start": 27,
        "end": 73
      },
      "abstract": false,
      "declare": false,
      "start": 19,
      "end": 73
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 79,
        "end": 80
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 83,
              "end": 84
            },
            "initializer": null,
            "computed": false,
            "start": 83,
            "end": 84
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 86,
              "end": 87
            },
            "initializer": null,
            "computed": false,
            "start": 86,
            "end": 87
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 89,
              "end": 90
            },
            "initializer": null,
            "computed": false,
            "start": 89,
            "end": 90
          }
        ],
        "start": 81,
        "end": 92
      },
      "const": false,
      "declare": false,
      "start": 74,
      "end": 92
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 103,
        "end": 104
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 118,
                    "end": 119
                  },
                  "init": null,
                  "definite": false,
                  "start": 118,
                  "end": 119
                }
              ],
              "declare": false,
              "start": 114,
              "end": 119
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 107,
            "end": 119
          }
        ],
        "start": 105,
        "end": 121
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 93,
      "end": 121
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 138,
                "end": 145
              },
              "start": 136,
              "end": 145
            },
            "start": 135,
            "end": 145
          },
          "init": null,
          "definite": false,
          "start": 135,
          "end": 145
        }
      ],
      "declare": true,
      "start": 123,
      "end": 146
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
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 162,
                "end": 168
              },
              "start": 160,
              "end": 168
            },
            "start": 159,
            "end": 168
          },
          "init": null,
          "definite": false,
          "start": 159,
          "end": 168
        }
      ],
      "declare": true,
      "start": 147,
      "end": 169
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
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 185,
                  "end": 191
                },
                "typeArguments": null,
                "start": 185,
                "end": 191
              },
              "start": 183,
              "end": 191
            },
            "start": 182,
            "end": 191
          },
          "init": null,
          "definite": false,
          "start": 182,
          "end": 191
        }
      ],
      "declare": true,
      "start": 170,
      "end": 192
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
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Number",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 208,
                  "end": 214
                },
                "typeArguments": null,
                "start": 208,
                "end": 214
              },
              "start": 206,
              "end": 214
            },
            "start": 205,
            "end": 214
          },
          "init": null,
          "definite": false,
          "start": 205,
          "end": 214
        }
      ],
      "declare": true,
      "start": 193,
      "end": 215
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
            "name": "r1",
            "optional": false,
            "typeAnnotation": null,
            "start": 267,
            "end": 269
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 272,
              "end": 273
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 276,
              "end": 277
            },
            "start": 272,
            "end": 277
          },
          "definite": false,
          "start": 267,
          "end": 277
        }
      ],
      "declare": false,
      "start": 263,
      "end": 278
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
            "name": "r2",
            "optional": false,
            "typeAnnotation": null,
            "start": 283,
            "end": 285
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 288,
              "end": 289
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 292,
              "end": 293
            },
            "start": 288,
            "end": 293
          },
          "definite": false,
          "start": 283,
          "end": 293
        }
      ],
      "declare": false,
      "start": 279,
      "end": 294
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
            "name": "r3",
            "optional": false,
            "typeAnnotation": null,
            "start": 299,
            "end": 301
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 304,
              "end": 305
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 308,
              "end": 309
            },
            "start": 304,
            "end": 309
          },
          "definite": false,
          "start": 299,
          "end": 309
        }
      ],
      "declare": false,
      "start": 295,
      "end": 310
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
            "name": "r4",
            "optional": false,
            "typeAnnotation": null,
            "start": 361,
            "end": 363
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 366,
              "end": 367
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 370,
              "end": 371
            },
            "start": 366,
            "end": 371
          },
          "definite": false,
          "start": 361,
          "end": 371
        }
      ],
      "declare": false,
      "start": 357,
      "end": 372
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
            "name": "r5",
            "optional": false,
            "typeAnnotation": null,
            "start": 377,
            "end": 379
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 382,
              "end": 383
            },
            "operator": "+",
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
          "definite": false,
          "start": 377,
          "end": 387
        }
      ],
      "declare": false,
      "start": 373,
      "end": 388
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
            "name": "r6",
            "optional": false,
            "typeAnnotation": null,
            "start": 421,
            "end": 423
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 426,
              "end": 427
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 430,
              "end": 431
            },
            "start": 426,
            "end": 431
          },
          "definite": false,
          "start": 421,
          "end": 431
        }
      ],
      "declare": false,
      "start": 417,
      "end": 432
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
            "name": "r7",
            "optional": false,
            "typeAnnotation": null,
            "start": 483,
            "end": 485
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 488,
              "end": 489
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 492,
              "end": 493
            },
            "start": 488,
            "end": 493
          },
          "definite": false,
          "start": 483,
          "end": 493
        }
      ],
      "declare": false,
      "start": 479,
      "end": 494
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
            "name": "r8",
            "optional": false,
            "typeAnnotation": null,
            "start": 499,
            "end": 501
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 504,
              "end": 505
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 508,
              "end": 509
            },
            "start": 504,
            "end": 509
          },
          "definite": false,
          "start": 499,
          "end": 509
        }
      ],
      "declare": false,
      "start": 495,
      "end": 510
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
            "name": "r9",
            "optional": false,
            "typeAnnotation": null,
            "start": 515,
            "end": 517
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 520,
              "end": 521
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 524,
              "end": 525
            },
            "start": 520,
            "end": 525
          },
          "definite": false,
          "start": 515,
          "end": 525
        }
      ],
      "declare": false,
      "start": 511,
      "end": 526
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
            "name": "r10",
            "optional": false,
            "typeAnnotation": null,
            "start": 547,
            "end": 550
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 553,
              "end": 554
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 557,
              "end": 561
            },
            "start": 553,
            "end": 561
          },
          "definite": false,
          "start": 547,
          "end": 561
        }
      ],
      "declare": false,
      "start": 543,
      "end": 562
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
            "name": "r11",
            "optional": false,
            "typeAnnotation": null,
            "start": 567,
            "end": 570
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 573,
              "end": 577
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "value": false,
              "raw": "false",
              "start": 580,
              "end": 585
            },
            "start": 573,
            "end": 585
          },
          "definite": false,
          "start": 567,
          "end": 585
        }
      ],
      "declare": false,
      "start": 563,
      "end": 586
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
            "name": "r12",
            "optional": false,
            "typeAnnotation": null,
            "start": 591,
            "end": 594
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 597,
              "end": 601
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "value": 123,
              "raw": "123",
              "start": 604,
              "end": 607
            },
            "start": 597,
            "end": 607
          },
          "definite": false,
          "start": 591,
          "end": 607
        }
      ],
      "declare": false,
      "start": 587,
      "end": 608
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
            "name": "r13",
            "optional": false,
            "typeAnnotation": null,
            "start": 613,
            "end": 616
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 619,
              "end": 621
            },
            "operator": "+",
            "right": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 624,
              "end": 626
            },
            "start": 619,
            "end": 626
          },
          "definite": false,
          "start": 613,
          "end": 626
        }
      ],
      "declare": false,
      "start": 609,
      "end": 627
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
            "name": "r14",
            "optional": false,
            "typeAnnotation": null,
            "start": 632,
            "end": 635
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 638,
              "end": 639
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 642,
              "end": 643
            },
            "start": 638,
            "end": 643
          },
          "definite": false,
          "start": 632,
          "end": 643
        }
      ],
      "declare": false,
      "start": 628,
      "end": 644
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
            "name": "r15",
            "optional": false,
            "typeAnnotation": null,
            "start": 649,
            "end": 652
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 655,
              "end": 656
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 659,
              "end": 662
            },
            "start": 655,
            "end": 662
          },
          "definite": false,
          "start": 649,
          "end": 662
        }
      ],
      "declare": false,
      "start": 645,
      "end": 663
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
            "name": "r16",
            "optional": false,
            "typeAnnotation": null,
            "start": 668,
            "end": 671
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 674,
              "end": 675
            },
            "operator": "+",
            "right": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 678,
                "end": 681
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 678,
              "end": 683
            },
            "start": 674,
            "end": 683
          },
          "definite": false,
          "start": 668,
          "end": 683
        }
      ],
      "declare": false,
      "start": 664,
      "end": 684
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
            "name": "r17",
            "optional": false,
            "typeAnnotation": null,
            "start": 689,
            "end": 692
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 695,
              "end": 696
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 699,
              "end": 700
            },
            "start": 695,
            "end": 700
          },
          "definite": false,
          "start": 689,
          "end": 700
        }
      ],
      "declare": false,
      "start": 685,
      "end": 701
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
            "name": "r18",
            "optional": false,
            "typeAnnotation": null,
            "start": 706,
            "end": 709
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 712,
                "end": 713
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 714,
                "end": 715
              },
              "optional": false,
              "computed": false,
              "start": 712,
              "end": 715
            },
            "operator": "+",
            "right": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 722,
                "end": 723
              },
              "typeArguments": null,
              "arguments": [],
              "start": 718,
              "end": 725
            },
            "start": 712,
            "end": 725
          },
          "definite": false,
          "start": 706,
          "end": 725
        }
      ],
      "declare": false,
      "start": 702,
      "end": 726
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
            "name": "r19",
            "optional": false,
            "typeAnnotation": null,
            "start": 731,
            "end": 734
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 737,
                "end": 738
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 739,
                "end": 740
              },
              "optional": false,
              "computed": false,
              "start": 737,
              "end": 740
            },
            "operator": "+",
            "right": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 743,
                  "end": 744
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 745,
                  "end": 748
                },
                "optional": false,
                "computed": false,
                "start": 743,
                "end": 748
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 743,
              "end": 750
            },
            "start": 737,
            "end": 750
          },
          "definite": false,
          "start": 731,
          "end": 750
        }
      ],
      "declare": false,
      "start": 727,
      "end": 751
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
            "name": "r20",
            "optional": false,
            "typeAnnotation": null,
            "start": 756,
            "end": 759
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 762,
                "end": 763
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 764,
                "end": 765
              },
              "optional": false,
              "computed": false,
              "start": 762,
              "end": 765
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 768,
              "end": 769
            },
            "start": 762,
            "end": 769
          },
          "definite": false,
          "start": 756,
          "end": 769
        }
      ],
      "declare": false,
      "start": 752,
      "end": 770
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 770
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
    "type": "Punctuator",
    "value": ")",
    "start": 13,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 17,
    "end": 18
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 19,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 27,
    "end": 28
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 33,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 41,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 43,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 49,
    "end": 50
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 55,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 62,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 72,
    "end": 73
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 74,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 81,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 84,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 93,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 105,
    "end": 106
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 107,
    "end": 113
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 114,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 120,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 123,
    "end": 130
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 131,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 138,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 145,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 147,
    "end": 154
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 155,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 160,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 162,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 168,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 170,
    "end": 177
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 178,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "c",
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
    "type": "Identifier",
    "value": "Object",
    "start": 185,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 191,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 193,
    "end": 200
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 201,
    "end": 204
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 206,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "Number",
    "start": 208,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 214,
    "end": 215
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 263,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "r1",
    "start": 267,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 270,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 274,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 276,
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
    "value": "var",
    "start": 279,
    "end": 282
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 283,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 286,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 290,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 293,
    "end": 294
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 295,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 299,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 302,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 304,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 306,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 308,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 309,
    "end": 310
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 357,
    "end": 360
  },
  {
    "type": "Identifier",
    "value": "r4",
    "start": 361,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 364,
    "end": 365
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 366,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 368,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 370,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 371,
    "end": 372
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 373,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "r5",
    "start": 377,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 380,
    "end": 381
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 382,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": "+",
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
    "type": "Keyword",
    "value": "var",
    "start": 417,
    "end": 420
  },
  {
    "type": "Identifier",
    "value": "r6",
    "start": 421,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 424,
    "end": 425
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 426,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 428,
    "end": 429
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 430,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 431,
    "end": 432
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 479,
    "end": 482
  },
  {
    "type": "Identifier",
    "value": "r7",
    "start": 483,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 486,
    "end": 487
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 488,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 490,
    "end": 491
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 492,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 493,
    "end": 494
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 495,
    "end": 498
  },
  {
    "type": "Identifier",
    "value": "r8",
    "start": 499,
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
    "value": "+",
    "start": 506,
    "end": 507
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 508,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 509,
    "end": 510
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 511,
    "end": 514
  },
  {
    "type": "Identifier",
    "value": "r9",
    "start": 515,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 518,
    "end": 519
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 520,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 522,
    "end": 523
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 524,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 525,
    "end": 526
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 543,
    "end": 546
  },
  {
    "type": "Identifier",
    "value": "r10",
    "start": 547,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 551,
    "end": 552
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 553,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 555,
    "end": 556
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 557,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 561,
    "end": 562
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 563,
    "end": 566
  },
  {
    "type": "Identifier",
    "value": "r11",
    "start": 567,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 571,
    "end": 572
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 573,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 578,
    "end": 579
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 580,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 585,
    "end": 586
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 587,
    "end": 590
  },
  {
    "type": "Identifier",
    "value": "r12",
    "start": 591,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 595,
    "end": 596
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 597,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 602,
    "end": 603
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 604,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 607,
    "end": 608
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 609,
    "end": 612
  },
  {
    "type": "Identifier",
    "value": "r13",
    "start": 613,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 617,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 619,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 620,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 622,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 624,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 625,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 626,
    "end": 627
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 628,
    "end": 631
  },
  {
    "type": "Identifier",
    "value": "r14",
    "start": 632,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 636,
    "end": 637
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 638,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 640,
    "end": 641
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 642,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 643,
    "end": 644
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 645,
    "end": 648
  },
  {
    "type": "Identifier",
    "value": "r15",
    "start": 649,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 653,
    "end": 654
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 655,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 657,
    "end": 658
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 659,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 662,
    "end": 663
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 664,
    "end": 667
  },
  {
    "type": "Identifier",
    "value": "r16",
    "start": 668,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 672,
    "end": 673
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 674,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 676,
    "end": 677
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 678,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 681,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 682,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 683,
    "end": 684
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 685,
    "end": 688
  },
  {
    "type": "Identifier",
    "value": "r17",
    "start": 689,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 693,
    "end": 694
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 695,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 697,
    "end": 698
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 699,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 700,
    "end": 701
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 702,
    "end": 705
  },
  {
    "type": "Identifier",
    "value": "r18",
    "start": 706,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 710,
    "end": 711
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 712,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 713,
    "end": 714
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 714,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 716,
    "end": 717
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 718,
    "end": 721
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 722,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 723,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 724,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 725,
    "end": 726
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 727,
    "end": 730
  },
  {
    "type": "Identifier",
    "value": "r19",
    "start": 731,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 735,
    "end": 736
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 737,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 738,
    "end": 739
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 739,
    "end": 740
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 741,
    "end": 742
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 743,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 744,
    "end": 745
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 745,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 748,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 749,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 750,
    "end": 751
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 752,
    "end": 755
  },
  {
    "type": "Identifier",
    "value": "r20",
    "start": 756,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 760,
    "end": 761
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 762,
    "end": 763
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 763,
    "end": 764
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 764,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 766,
    "end": 767
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 768,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 769,
    "end": 770
  }
]
```
