__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 10
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
              "start": 24,
              "end": 25
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 27,
                "end": 33
              },
              "start": 25,
              "end": 33
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
            "start": 17,
            "end": 34
          }
        ],
        "start": 11,
        "end": 36
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 36
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null,
        "start": 44,
        "end": 51
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 60,
        "end": 64
      },
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
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 78,
              "end": 79
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 81,
                "end": 87
              },
              "start": 79,
              "end": 87
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
            "start": 71,
            "end": 88
          }
        ],
        "start": 65,
        "end": 90
      },
      "abstract": false,
      "declare": false,
      "start": 38,
      "end": 90
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A1",
        "optional": false,
        "typeAnnotation": null,
        "start": 98,
        "end": 100
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
              "start": 114,
              "end": 115
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 117,
                  "end": 121
                },
                "typeArguments": null,
                "start": 117,
                "end": 121
              },
              "start": 115,
              "end": 121
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
            "start": 107,
            "end": 122
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 134,
              "end": 135
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 137,
                  "end": 141
                },
                "typeArguments": null,
                "start": 137,
                "end": 141
              },
              "start": 135,
              "end": 141
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
            "start": 127,
            "end": 142
          }
        ],
        "start": 101,
        "end": 144
      },
      "abstract": false,
      "declare": false,
      "start": 92,
      "end": 144
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B1",
        "optional": false,
        "typeAnnotation": null,
        "start": 152,
        "end": 154
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
              "start": 168,
              "end": 169
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 171,
                  "end": 175
                },
                "typeArguments": null,
                "start": 171,
                "end": 175
              },
              "start": 169,
              "end": 175
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
            "start": 161,
            "end": 176
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 188,
              "end": 189
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Derived",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 191,
                  "end": 198
                },
                "typeArguments": null,
                "start": 191,
                "end": 198
              },
              "start": 189,
              "end": 198
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
            "start": 181,
            "end": 199
          }
        ],
        "start": 155,
        "end": 201
      },
      "abstract": false,
      "declare": false,
      "start": 146,
      "end": 201
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A2",
        "optional": false,
        "typeAnnotation": null,
        "start": 209,
        "end": 211
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
              "start": 226,
              "end": 227
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 218,
            "end": 228
          }
        ],
        "start": 212,
        "end": 230
      },
      "abstract": false,
      "declare": false,
      "start": 203,
      "end": 230
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B2",
        "optional": false,
        "typeAnnotation": null,
        "start": 238,
        "end": 240
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A2",
        "optional": false,
        "typeAnnotation": null,
        "start": 249,
        "end": 251
      },
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
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 266,
              "end": 267
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 258,
            "end": 268
          }
        ],
        "start": 252,
        "end": 270
      },
      "abstract": false,
      "declare": false,
      "start": 232,
      "end": 270
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
            "name": "a1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 280,
                  "end": 282
                },
                "typeArguments": null,
                "start": 280,
                "end": 282
              },
              "start": 278,
              "end": 282
            },
            "start": 276,
            "end": 282
          },
          "init": null,
          "definite": false,
          "start": 276,
          "end": 282
        }
      ],
      "declare": false,
      "start": 272,
      "end": 283
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
            "name": "a2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 292,
                  "end": 294
                },
                "typeArguments": null,
                "start": 292,
                "end": 294
              },
              "start": 290,
              "end": 294
            },
            "start": 288,
            "end": 294
          },
          "init": null,
          "definite": false,
          "start": 288,
          "end": 294
        }
      ],
      "declare": false,
      "start": 284,
      "end": 295
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
            "name": "b1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 304,
                  "end": 306
                },
                "typeArguments": null,
                "start": 304,
                "end": 306
              },
              "start": 302,
              "end": 306
            },
            "start": 300,
            "end": 306
          },
          "init": null,
          "definite": false,
          "start": 300,
          "end": 306
        }
      ],
      "declare": false,
      "start": 296,
      "end": 307
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
            "name": "b2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 316,
                  "end": 318
                },
                "typeArguments": null,
                "start": 316,
                "end": 318
              },
              "start": 314,
              "end": 318
            },
            "start": 312,
            "end": 318
          },
          "init": null,
          "definite": false,
          "start": 312,
          "end": 318
        }
      ],
      "declare": false,
      "start": 308,
      "end": 319
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
            "name": "ra1",
            "optional": false,
            "typeAnnotation": null,
            "start": 339,
            "end": 342
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 345,
              "end": 347
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null,
              "start": 350,
              "end": 352
            },
            "start": 345,
            "end": 352
          },
          "definite": false,
          "start": 339,
          "end": 352
        }
      ],
      "declare": false,
      "start": 335,
      "end": 353
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
            "name": "ra2",
            "optional": false,
            "typeAnnotation": null,
            "start": 358,
            "end": 361
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 364,
              "end": 366
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 369,
              "end": 371
            },
            "start": 364,
            "end": 371
          },
          "definite": false,
          "start": 358,
          "end": 371
        }
      ],
      "declare": false,
      "start": 354,
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
            "name": "ra3",
            "optional": false,
            "typeAnnotation": null,
            "start": 377,
            "end": 380
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null,
              "start": 383,
              "end": 385
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 388,
              "end": 390
            },
            "start": 383,
            "end": 390
          },
          "definite": false,
          "start": 377,
          "end": 390
        }
      ],
      "declare": false,
      "start": 373,
      "end": 391
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
            "name": "ra4",
            "optional": false,
            "typeAnnotation": null,
            "start": 396,
            "end": 399
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 402,
              "end": 404
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 407,
              "end": 409
            },
            "start": 402,
            "end": 409
          },
          "definite": false,
          "start": 396,
          "end": 409
        }
      ],
      "declare": false,
      "start": 392,
      "end": 410
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
            "name": "rb1",
            "optional": false,
            "typeAnnotation": null,
            "start": 430,
            "end": 433
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 436,
              "end": 438
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null,
              "start": 441,
              "end": 443
            },
            "start": 436,
            "end": 443
          },
          "definite": false,
          "start": 430,
          "end": 443
        }
      ],
      "declare": false,
      "start": 426,
      "end": 444
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
            "name": "rb2",
            "optional": false,
            "typeAnnotation": null,
            "start": 449,
            "end": 452
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 455,
              "end": 457
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 460,
              "end": 462
            },
            "start": 455,
            "end": 462
          },
          "definite": false,
          "start": 449,
          "end": 462
        }
      ],
      "declare": false,
      "start": 445,
      "end": 463
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
            "name": "rb3",
            "optional": false,
            "typeAnnotation": null,
            "start": 468,
            "end": 471
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null,
              "start": 474,
              "end": 476
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 479,
              "end": 481
            },
            "start": 474,
            "end": 481
          },
          "definite": false,
          "start": 468,
          "end": 481
        }
      ],
      "declare": false,
      "start": 464,
      "end": 482
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
            "name": "rb4",
            "optional": false,
            "typeAnnotation": null,
            "start": 487,
            "end": 490
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 493,
              "end": 495
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 498,
              "end": 500
            },
            "start": 493,
            "end": 500
          },
          "definite": false,
          "start": 487,
          "end": 500
        }
      ],
      "declare": false,
      "start": 483,
      "end": 501
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
            "name": "rc1",
            "optional": false,
            "typeAnnotation": null,
            "start": 522,
            "end": 525
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 528,
              "end": 530
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null,
              "start": 534,
              "end": 536
            },
            "start": 528,
            "end": 536
          },
          "definite": false,
          "start": 522,
          "end": 536
        }
      ],
      "declare": false,
      "start": 518,
      "end": 537
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
            "name": "rc2",
            "optional": false,
            "typeAnnotation": null,
            "start": 542,
            "end": 545
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 548,
              "end": 550
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 554,
              "end": 556
            },
            "start": 548,
            "end": 556
          },
          "definite": false,
          "start": 542,
          "end": 556
        }
      ],
      "declare": false,
      "start": 538,
      "end": 557
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
            "name": "rc3",
            "optional": false,
            "typeAnnotation": null,
            "start": 562,
            "end": 565
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null,
              "start": 568,
              "end": 570
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 574,
              "end": 576
            },
            "start": 568,
            "end": 576
          },
          "definite": false,
          "start": 562,
          "end": 576
        }
      ],
      "declare": false,
      "start": 558,
      "end": 577
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
            "name": "rc4",
            "optional": false,
            "typeAnnotation": null,
            "start": 582,
            "end": 585
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 588,
              "end": 590
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 594,
              "end": 596
            },
            "start": 588,
            "end": 596
          },
          "definite": false,
          "start": 582,
          "end": 596
        }
      ],
      "declare": false,
      "start": 578,
      "end": 597
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
            "name": "rd1",
            "optional": false,
            "typeAnnotation": null,
            "start": 618,
            "end": 621
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 624,
              "end": 626
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null,
              "start": 630,
              "end": 632
            },
            "start": 624,
            "end": 632
          },
          "definite": false,
          "start": 618,
          "end": 632
        }
      ],
      "declare": false,
      "start": 614,
      "end": 633
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
            "name": "rd2",
            "optional": false,
            "typeAnnotation": null,
            "start": 638,
            "end": 641
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 644,
              "end": 646
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 650,
              "end": 652
            },
            "start": 644,
            "end": 652
          },
          "definite": false,
          "start": 638,
          "end": 652
        }
      ],
      "declare": false,
      "start": 634,
      "end": 653
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
            "name": "rd3",
            "optional": false,
            "typeAnnotation": null,
            "start": 658,
            "end": 661
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null,
              "start": 664,
              "end": 666
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 670,
              "end": 672
            },
            "start": 664,
            "end": 672
          },
          "definite": false,
          "start": 658,
          "end": 672
        }
      ],
      "declare": false,
      "start": 654,
      "end": 673
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
            "name": "rd4",
            "optional": false,
            "typeAnnotation": null,
            "start": 678,
            "end": 681
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 684,
              "end": 686
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 690,
              "end": 692
            },
            "start": 684,
            "end": 692
          },
          "definite": false,
          "start": 678,
          "end": 692
        }
      ],
      "declare": false,
      "start": 674,
      "end": 693
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
            "name": "re1",
            "optional": false,
            "typeAnnotation": null,
            "start": 714,
            "end": 717
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 720,
              "end": 722
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null,
              "start": 726,
              "end": 728
            },
            "start": 720,
            "end": 728
          },
          "definite": false,
          "start": 714,
          "end": 728
        }
      ],
      "declare": false,
      "start": 710,
      "end": 729
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
            "name": "re2",
            "optional": false,
            "typeAnnotation": null,
            "start": 734,
            "end": 737
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 740,
              "end": 742
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 746,
              "end": 748
            },
            "start": 740,
            "end": 748
          },
          "definite": false,
          "start": 734,
          "end": 748
        }
      ],
      "declare": false,
      "start": 730,
      "end": 749
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
            "name": "re3",
            "optional": false,
            "typeAnnotation": null,
            "start": 754,
            "end": 757
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null,
              "start": 760,
              "end": 762
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 766,
              "end": 768
            },
            "start": 760,
            "end": 768
          },
          "definite": false,
          "start": 754,
          "end": 768
        }
      ],
      "declare": false,
      "start": 750,
      "end": 769
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
            "name": "re4",
            "optional": false,
            "typeAnnotation": null,
            "start": 774,
            "end": 777
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 780,
              "end": 782
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 786,
              "end": 788
            },
            "start": 780,
            "end": 788
          },
          "definite": false,
          "start": 774,
          "end": 788
        }
      ],
      "declare": false,
      "start": 770,
      "end": 789
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
            "name": "rf1",
            "optional": false,
            "typeAnnotation": null,
            "start": 810,
            "end": 813
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 816,
              "end": 818
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null,
              "start": 822,
              "end": 824
            },
            "start": 816,
            "end": 824
          },
          "definite": false,
          "start": 810,
          "end": 824
        }
      ],
      "declare": false,
      "start": 806,
      "end": 825
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
            "name": "rf2",
            "optional": false,
            "typeAnnotation": null,
            "start": 830,
            "end": 833
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 836,
              "end": 838
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 842,
              "end": 844
            },
            "start": 836,
            "end": 844
          },
          "definite": false,
          "start": 830,
          "end": 844
        }
      ],
      "declare": false,
      "start": 826,
      "end": 845
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
            "name": "rf3",
            "optional": false,
            "typeAnnotation": null,
            "start": 850,
            "end": 853
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null,
              "start": 856,
              "end": 858
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 862,
              "end": 864
            },
            "start": 856,
            "end": 864
          },
          "definite": false,
          "start": 850,
          "end": 864
        }
      ],
      "declare": false,
      "start": 846,
      "end": 865
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
            "name": "rf4",
            "optional": false,
            "typeAnnotation": null,
            "start": 870,
            "end": 873
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 876,
              "end": 878
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 882,
              "end": 884
            },
            "start": 876,
            "end": 884
          },
          "definite": false,
          "start": 870,
          "end": 884
        }
      ],
      "declare": false,
      "start": 866,
      "end": 885
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
            "name": "rg1",
            "optional": false,
            "typeAnnotation": null,
            "start": 907,
            "end": 910
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 913,
              "end": 915
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null,
              "start": 920,
              "end": 922
            },
            "start": 913,
            "end": 922
          },
          "definite": false,
          "start": 907,
          "end": 922
        }
      ],
      "declare": false,
      "start": 903,
      "end": 923
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
            "name": "rg2",
            "optional": false,
            "typeAnnotation": null,
            "start": 928,
            "end": 931
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 934,
              "end": 936
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 941,
              "end": 943
            },
            "start": 934,
            "end": 943
          },
          "definite": false,
          "start": 928,
          "end": 943
        }
      ],
      "declare": false,
      "start": 924,
      "end": 944
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
            "name": "rg3",
            "optional": false,
            "typeAnnotation": null,
            "start": 949,
            "end": 952
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null,
              "start": 955,
              "end": 957
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 962,
              "end": 964
            },
            "start": 955,
            "end": 964
          },
          "definite": false,
          "start": 949,
          "end": 964
        }
      ],
      "declare": false,
      "start": 945,
      "end": 965
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
            "name": "rg4",
            "optional": false,
            "typeAnnotation": null,
            "start": 970,
            "end": 973
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 976,
              "end": 978
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 983,
              "end": 985
            },
            "start": 976,
            "end": 985
          },
          "definite": false,
          "start": 970,
          "end": 985
        }
      ],
      "declare": false,
      "start": 966,
      "end": 986
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
            "name": "rh1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1008,
            "end": 1011
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1014,
              "end": 1016
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1021,
              "end": 1023
            },
            "start": 1014,
            "end": 1023
          },
          "definite": false,
          "start": 1008,
          "end": 1023
        }
      ],
      "declare": false,
      "start": 1004,
      "end": 1024
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
            "name": "rh2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1029,
            "end": 1032
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1035,
              "end": 1037
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1042,
              "end": 1044
            },
            "start": 1035,
            "end": 1044
          },
          "definite": false,
          "start": 1029,
          "end": 1044
        }
      ],
      "declare": false,
      "start": 1025,
      "end": 1045
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
            "name": "rh3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1050,
            "end": 1053
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1056,
              "end": 1058
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1063,
              "end": 1065
            },
            "start": 1056,
            "end": 1065
          },
          "definite": false,
          "start": 1050,
          "end": 1065
        }
      ],
      "declare": false,
      "start": 1046,
      "end": 1066
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
            "name": "rh4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1071,
            "end": 1074
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1077,
              "end": 1079
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1084,
              "end": 1086
            },
            "start": 1077,
            "end": 1086
          },
          "definite": false,
          "start": 1071,
          "end": 1086
        }
      ],
      "declare": false,
      "start": 1067,
      "end": 1087
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1087
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 6,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 11,
    "end": 12
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 17,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 24,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 27,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 35,
    "end": 36
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 38,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 44,
    "end": 51
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 52,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 60,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 65,
    "end": 66
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 71,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 81,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 89,
    "end": 90
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 92,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "A1",
    "start": 98,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 101,
    "end": 102
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 107,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 115,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 117,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 121,
    "end": 122
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 127,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 135,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 137,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 143,
    "end": 144
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 146,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "B1",
    "start": 152,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 155,
    "end": 156
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 161,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 169,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 171,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 175,
    "end": 176
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 181,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 189,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 191,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 200,
    "end": 201
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 203,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "A2",
    "start": 209,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 212,
    "end": 213
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 218,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 227,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 229,
    "end": 230
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 232,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "B2",
    "start": 238,
    "end": 240
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 241,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "A2",
    "start": 249,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 252,
    "end": 253
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 258,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 266,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 269,
    "end": 270
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 272,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 276,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 278,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "A1",
    "start": 280,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 282,
    "end": 283
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 284,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 288,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 290,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "A2",
    "start": 292,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 294,
    "end": 295
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 296,
    "end": 299
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 300,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 302,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "B1",
    "start": 304,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 306,
    "end": 307
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 308,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 312,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 314,
    "end": 315
  },
  {
    "type": "Identifier",
    "value": "B2",
    "start": 316,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 318,
    "end": 319
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 335,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "ra1",
    "start": 339,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 343,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 345,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 348,
    "end": 349
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 350,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 352,
    "end": 353
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 354,
    "end": 357
  },
  {
    "type": "Identifier",
    "value": "ra2",
    "start": 358,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 362,
    "end": 363
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 364,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 367,
    "end": 368
  },
  {
    "type": "Identifier",
    "value": "b2",
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
    "type": "Keyword",
    "value": "var",
    "start": 373,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "ra3",
    "start": 377,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 381,
    "end": 382
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 383,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 386,
    "end": 387
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 388,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 390,
    "end": 391
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 392,
    "end": 395
  },
  {
    "type": "Identifier",
    "value": "ra4",
    "start": 396,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 400,
    "end": 401
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 402,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 405,
    "end": 406
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 407,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 409,
    "end": 410
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 426,
    "end": 429
  },
  {
    "type": "Identifier",
    "value": "rb1",
    "start": 430,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 434,
    "end": 435
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 436,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 439,
    "end": 440
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 441,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 443,
    "end": 444
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 445,
    "end": 448
  },
  {
    "type": "Identifier",
    "value": "rb2",
    "start": 449,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 453,
    "end": 454
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 455,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 458,
    "end": 459
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 460,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 462,
    "end": 463
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 464,
    "end": 467
  },
  {
    "type": "Identifier",
    "value": "rb3",
    "start": 468,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 472,
    "end": 473
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 474,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 477,
    "end": 478
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 479,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 481,
    "end": 482
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 483,
    "end": 486
  },
  {
    "type": "Identifier",
    "value": "rb4",
    "start": 487,
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
    "value": "b2",
    "start": 493,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 496,
    "end": 497
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 498,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 500,
    "end": 501
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 518,
    "end": 521
  },
  {
    "type": "Identifier",
    "value": "rc1",
    "start": 522,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 526,
    "end": 527
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 528,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": "<=",
    "start": 531,
    "end": 533
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 534,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 536,
    "end": 537
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 538,
    "end": 541
  },
  {
    "type": "Identifier",
    "value": "rc2",
    "start": 542,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 546,
    "end": 547
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 548,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": "<=",
    "start": 551,
    "end": 553
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 554,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 556,
    "end": 557
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 558,
    "end": 561
  },
  {
    "type": "Identifier",
    "value": "rc3",
    "start": 562,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 566,
    "end": 567
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 568,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": "<=",
    "start": 571,
    "end": 573
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 574,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 576,
    "end": 577
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 578,
    "end": 581
  },
  {
    "type": "Identifier",
    "value": "rc4",
    "start": 582,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 586,
    "end": 587
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 588,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": "<=",
    "start": 591,
    "end": 593
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 594,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 596,
    "end": 597
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 614,
    "end": 617
  },
  {
    "type": "Identifier",
    "value": "rd1",
    "start": 618,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 622,
    "end": 623
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 624,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": ">=",
    "start": 627,
    "end": 629
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 630,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 632,
    "end": 633
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 634,
    "end": 637
  },
  {
    "type": "Identifier",
    "value": "rd2",
    "start": 638,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 642,
    "end": 643
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 644,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": ">=",
    "start": 647,
    "end": 649
  },
  {
    "type": "Identifier",
    "value": "b2",
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
    "type": "Keyword",
    "value": "var",
    "start": 654,
    "end": 657
  },
  {
    "type": "Identifier",
    "value": "rd3",
    "start": 658,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 662,
    "end": 663
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 664,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": ">=",
    "start": 667,
    "end": 669
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 670,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 672,
    "end": 673
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 674,
    "end": 677
  },
  {
    "type": "Identifier",
    "value": "rd4",
    "start": 678,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 682,
    "end": 683
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 684,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": ">=",
    "start": 687,
    "end": 689
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 690,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 692,
    "end": 693
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 710,
    "end": 713
  },
  {
    "type": "Identifier",
    "value": "re1",
    "start": 714,
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
    "value": "a1",
    "start": 720,
    "end": 722
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 723,
    "end": 725
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 726,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 728,
    "end": 729
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 730,
    "end": 733
  },
  {
    "type": "Identifier",
    "value": "re2",
    "start": 734,
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
    "value": "a2",
    "start": 740,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 743,
    "end": 745
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 746,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 748,
    "end": 749
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 750,
    "end": 753
  },
  {
    "type": "Identifier",
    "value": "re3",
    "start": 754,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 758,
    "end": 759
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 760,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 763,
    "end": 765
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 766,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 768,
    "end": 769
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 770,
    "end": 773
  },
  {
    "type": "Identifier",
    "value": "re4",
    "start": 774,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 778,
    "end": 779
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 780,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 783,
    "end": 785
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 786,
    "end": 788
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 788,
    "end": 789
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 806,
    "end": 809
  },
  {
    "type": "Identifier",
    "value": "rf1",
    "start": 810,
    "end": 813
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 814,
    "end": 815
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 816,
    "end": 818
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 819,
    "end": 821
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 822,
    "end": 824
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 824,
    "end": 825
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 826,
    "end": 829
  },
  {
    "type": "Identifier",
    "value": "rf2",
    "start": 830,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 834,
    "end": 835
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 836,
    "end": 838
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 839,
    "end": 841
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 842,
    "end": 844
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 844,
    "end": 845
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 846,
    "end": 849
  },
  {
    "type": "Identifier",
    "value": "rf3",
    "start": 850,
    "end": 853
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 854,
    "end": 855
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 856,
    "end": 858
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 859,
    "end": 861
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 862,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 864,
    "end": 865
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 866,
    "end": 869
  },
  {
    "type": "Identifier",
    "value": "rf4",
    "start": 870,
    "end": 873
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 874,
    "end": 875
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 876,
    "end": 878
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 879,
    "end": 881
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 882,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 884,
    "end": 885
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 903,
    "end": 906
  },
  {
    "type": "Identifier",
    "value": "rg1",
    "start": 907,
    "end": 910
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 911,
    "end": 912
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 913,
    "end": 915
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 916,
    "end": 919
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 920,
    "end": 922
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 922,
    "end": 923
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 924,
    "end": 927
  },
  {
    "type": "Identifier",
    "value": "rg2",
    "start": 928,
    "end": 931
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 932,
    "end": 933
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 934,
    "end": 936
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 937,
    "end": 940
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 941,
    "end": 943
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 943,
    "end": 944
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 945,
    "end": 948
  },
  {
    "type": "Identifier",
    "value": "rg3",
    "start": 949,
    "end": 952
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 953,
    "end": 954
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 955,
    "end": 957
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 958,
    "end": 961
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 962,
    "end": 964
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 964,
    "end": 965
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 966,
    "end": 969
  },
  {
    "type": "Identifier",
    "value": "rg4",
    "start": 970,
    "end": 973
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 974,
    "end": 975
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 976,
    "end": 978
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 979,
    "end": 982
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 983,
    "end": 985
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 985,
    "end": 986
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1004,
    "end": 1007
  },
  {
    "type": "Identifier",
    "value": "rh1",
    "start": 1008,
    "end": 1011
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1012,
    "end": 1013
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 1014,
    "end": 1016
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 1017,
    "end": 1020
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 1021,
    "end": 1023
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1023,
    "end": 1024
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1025,
    "end": 1028
  },
  {
    "type": "Identifier",
    "value": "rh2",
    "start": 1029,
    "end": 1032
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1033,
    "end": 1034
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1035,
    "end": 1037
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 1038,
    "end": 1041
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 1042,
    "end": 1044
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1044,
    "end": 1045
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1046,
    "end": 1049
  },
  {
    "type": "Identifier",
    "value": "rh3",
    "start": 1050,
    "end": 1053
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1054,
    "end": 1055
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 1056,
    "end": 1058
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 1059,
    "end": 1062
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 1063,
    "end": 1065
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1065,
    "end": 1066
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1067,
    "end": 1070
  },
  {
    "type": "Identifier",
    "value": "rh4",
    "start": 1071,
    "end": 1074
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1075,
    "end": 1076
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 1077,
    "end": 1079
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 1080,
    "end": 1083
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1084,
    "end": 1086
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1086,
    "end": 1087
  }
]
```
