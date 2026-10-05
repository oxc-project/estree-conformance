__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
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
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "RawJSON",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 9,
                  "end": 16
                },
                "typeArguments": null,
                "start": 9,
                "end": 16
              },
              "start": 7,
              "end": 16
            },
            "start": 6,
            "end": 16
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "JSON",
                "optional": false,
                "typeAnnotation": null,
                "start": 19,
                "end": 23
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "rawJSON",
                "optional": false,
                "typeAnnotation": null,
                "start": 24,
                "end": 31
              },
              "optional": false,
              "computed": false,
              "start": 19,
              "end": 31
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "1",
                "raw": "\"1\"",
                "start": 32,
                "end": 35
              }
            ],
            "optional": false,
            "start": 19,
            "end": 36
          },
          "definite": false,
          "start": 6,
          "end": 36
        }
      ],
      "declare": false,
      "start": 0,
      "end": 37
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
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 47,
                "end": 53
              },
              "start": 45,
              "end": 53
            },
            "start": 44,
            "end": 53
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 56,
              "end": 57
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "rawJSON",
              "optional": false,
              "typeAnnotation": null,
              "start": 58,
              "end": 65
            },
            "optional": false,
            "computed": false,
            "start": 56,
            "end": 65
          },
          "definite": false,
          "start": 44,
          "end": 65
        }
      ],
      "declare": false,
      "start": 38,
      "end": 66
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
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSObjectKeyword",
                "start": 76,
                "end": 82
              },
              "start": 74,
              "end": 82
            },
            "start": 73,
            "end": 82
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 85,
            "end": 86
          },
          "definite": false,
          "start": 73,
          "end": 86
        }
      ],
      "declare": false,
      "start": 67,
      "end": 87
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
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": true,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "rawJSON",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 108,
                      "end": 115
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 117,
                        "end": 123
                      },
                      "start": 115,
                      "end": 123
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 99,
                    "end": 123
                  }
                ],
                "start": 97,
                "end": 125
              },
              "start": 95,
              "end": 125
            },
            "start": 94,
            "end": 125
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 128,
            "end": 129
          },
          "definite": false,
          "start": 94,
          "end": 129
        }
      ],
      "declare": false,
      "start": 88,
      "end": 130
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
            "name": "e",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "RawJSON",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 140,
                  "end": 147
                },
                "typeArguments": null,
                "start": 140,
                "end": 147
              },
              "start": 138,
              "end": 147
            },
            "start": 137,
            "end": 147
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 150,
            "end": 151
          },
          "definite": false,
          "start": 137,
          "end": 151
        }
      ],
      "declare": false,
      "start": 131,
      "end": 152
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
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "RawJSON",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 163,
                  "end": 170
                },
                "typeArguments": null,
                "start": 163,
                "end": 170
              },
              "start": 161,
              "end": 170
            },
            "start": 160,
            "end": 170
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "rawJSON",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 175,
                  "end": 182
                },
                "value": {
                  "type": "Literal",
                  "value": "1",
                  "raw": "\"1\"",
                  "start": 184,
                  "end": 187
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 175,
                "end": 187
              }
            ],
            "start": 173,
            "end": 189
          },
          "definite": false,
          "start": 160,
          "end": 189
        }
      ],
      "declare": false,
      "start": 154,
      "end": 190
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
            "name": "g",
            "optional": false,
            "typeAnnotation": null,
            "start": 197,
            "end": 198
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "rawJSON",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 203,
                  "end": 210
                },
                "value": {
                  "type": "Literal",
                  "value": "1",
                  "raw": "\"1\"",
                  "start": 212,
                  "end": 215
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 203,
                "end": 215
              }
            ],
            "start": 201,
            "end": 217
          },
          "definite": false,
          "start": 197,
          "end": 217
        }
      ],
      "declare": false,
      "start": 191,
      "end": 218
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
            "name": "h",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "RawJSON",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 228,
                  "end": 235
                },
                "typeArguments": null,
                "start": 228,
                "end": 235
              },
              "start": 226,
              "end": 235
            },
            "start": 225,
            "end": 235
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": null,
            "start": 238,
            "end": 239
          },
          "definite": false,
          "start": 225,
          "end": 239
        }
      ],
      "declare": false,
      "start": 219,
      "end": 240
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
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "RawJSON",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 250,
                  "end": 257
                },
                "typeArguments": null,
                "start": 250,
                "end": 257
              },
              "start": 248,
              "end": 257
            },
            "start": 247,
            "end": 257
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 260,
                "end": 266
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "freeze",
                "optional": false,
                "typeAnnotation": null,
                "start": 267,
                "end": 273
              },
              "optional": false,
              "computed": false,
              "start": 260,
              "end": 273
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "g",
                "optional": false,
                "typeAnnotation": null,
                "start": 274,
                "end": 275
              }
            ],
            "optional": false,
            "start": 260,
            "end": 276
          },
          "definite": false,
          "start": 247,
          "end": 276
        }
      ],
      "declare": false,
      "start": 241,
      "end": 277
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
            "name": "j",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "RawJSON",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 287,
                  "end": 294
                },
                "typeArguments": null,
                "start": 287,
                "end": 294
              },
              "start": 285,
              "end": 294
            },
            "start": 284,
            "end": 294
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 302,
                  "end": 303
                },
                "start": 299,
                "end": 303
              }
            ],
            "start": 297,
            "end": 305
          },
          "definite": false,
          "start": 284,
          "end": 305
        }
      ],
      "declare": false,
      "start": 278,
      "end": 306
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
            "name": "k",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "RawJSON",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 316,
                  "end": 323
                },
                "typeArguments": null,
                "start": 316,
                "end": 323
              },
              "start": 314,
              "end": 323
            },
            "start": 313,
            "end": 323
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "rawJSON",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 328,
                  "end": 335
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 337,
                  "end": 338
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 328,
                "end": 338
              }
            ],
            "start": 326,
            "end": 340
          },
          "definite": false,
          "start": 313,
          "end": 340
        }
      ],
      "declare": false,
      "start": 307,
      "end": 341
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
        "start": 349,
        "end": 350
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
              "name": "rawJSON",
              "optional": false,
              "typeAnnotation": null,
              "start": 366,
              "end": 373
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": "1",
              "raw": "\"1\"",
              "start": 376,
              "end": 379
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": null,
            "start": 357,
            "end": 380
          }
        ],
        "start": 351,
        "end": 382
      },
      "abstract": false,
      "declare": false,
      "start": 343,
      "end": 382
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
            "name": "l",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "RawJSON",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 392,
                  "end": 399
                },
                "typeArguments": null,
                "start": 392,
                "end": 399
              },
              "start": 390,
              "end": 399
            },
            "start": 389,
            "end": 399
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 406,
              "end": 407
            },
            "typeArguments": null,
            "arguments": [],
            "start": 402,
            "end": 409
          },
          "definite": false,
          "start": 389,
          "end": 409
        }
      ],
      "declare": false,
      "start": 383,
      "end": 410
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
        "start": 417,
        "end": 418
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "RawJSON",
            "optional": false,
            "typeAnnotation": null,
            "start": 430,
            "end": 437
          },
          "typeArguments": null,
          "start": 430,
          "end": 437
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "rawJSON",
              "optional": false,
              "typeAnnotation": null,
              "start": 453,
              "end": 460
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": "1",
              "raw": "\"1\"",
              "start": 463,
              "end": 466
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": null,
            "start": 444,
            "end": 467
          }
        ],
        "start": 438,
        "end": 469
      },
      "abstract": false,
      "declare": false,
      "start": 411,
      "end": 469
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 471,
            "end": 472
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "rawJSON",
            "optional": false,
            "typeAnnotation": null,
            "start": 473,
            "end": 480
          },
          "optional": false,
          "computed": false,
          "start": 471,
          "end": 480
        },
        "right": {
          "type": "Literal",
          "value": "2",
          "raw": "\"2\"",
          "start": 483,
          "end": 486
        },
        "start": 471,
        "end": 486
      },
      "directive": null,
      "start": 471,
      "end": 487
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
            "name": "m",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RawJSON",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 511,
                    "end": 518
                  },
                  "typeArguments": null,
                  "start": 511,
                  "end": 518
                },
                "start": 505,
                "end": 518
              },
              "start": 503,
              "end": 518
            },
            "start": 502,
            "end": 518
          },
          "init": null,
          "definite": false,
          "start": 502,
          "end": 518
        }
      ],
      "declare": true,
      "start": 488,
      "end": 519
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
            "name": "n",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "rawJSON",
                  "raw": "\"rawJSON\"",
                  "start": 529,
                  "end": 538
                },
                "start": 529,
                "end": 538
              },
              "start": 527,
              "end": 538
            },
            "start": 526,
            "end": 538
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 541,
            "end": 542
          },
          "definite": false,
          "start": 526,
          "end": 542
        }
      ],
      "declare": false,
      "start": 520,
      "end": 543
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
            "name": "o",
            "optional": false,
            "typeAnnotation": null,
            "start": 551,
            "end": 552
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "RawJSON",
            "optional": false,
            "typeAnnotation": null,
            "start": 555,
            "end": 562
          },
          "definite": false,
          "start": 551,
          "end": 562
        }
      ],
      "declare": false,
      "start": 545,
      "end": 563
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "RawJSON",
          "optional": false,
          "typeAnnotation": null,
          "start": 568,
          "end": 575
        },
        "typeArguments": null,
        "arguments": [],
        "start": 564,
        "end": 577
      },
      "directive": null,
      "start": 564,
      "end": 578
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
        "start": 585,
        "end": 586
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "RawJSON",
        "optional": false,
        "typeAnnotation": null,
        "start": 595,
        "end": 602
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 603,
        "end": 605
      },
      "abstract": false,
      "declare": false,
      "start": 579,
      "end": 605
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "RawJSONInstance",
        "optional": false,
        "typeAnnotation": null,
        "start": 607,
        "end": 622
      },
      "directive": null,
      "start": 607,
      "end": 623
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T",
        "optional": false,
        "typeAnnotation": null,
        "start": 629,
        "end": 630
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "RawJSONInstance",
          "optional": false,
          "typeAnnotation": null,
          "start": 633,
          "end": 648
        },
        "typeArguments": null,
        "start": 633,
        "end": 648
      },
      "declare": false,
      "start": 624,
      "end": 649
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
            "name": "q",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 668,
                "end": 675
              },
              "start": 666,
              "end": 675
            },
            "start": 665,
            "end": 675
          },
          "init": null,
          "definite": false,
          "start": 665,
          "end": 675
        }
      ],
      "declare": true,
      "start": 651,
      "end": 676
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "JSON",
            "optional": false,
            "typeAnnotation": null,
            "start": 681,
            "end": 685
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "isRawJSON",
            "optional": false,
            "typeAnnotation": null,
            "start": 686,
            "end": 695
          },
          "optional": false,
          "computed": false,
          "start": 681,
          "end": 695
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "q",
            "optional": false,
            "typeAnnotation": null,
            "start": 696,
            "end": 697
          }
        ],
        "optional": false,
        "start": 681,
        "end": 698
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "RawJSON",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 715,
                        "end": 722
                      },
                      "typeArguments": null,
                      "start": 715,
                      "end": 722
                    },
                    "start": 713,
                    "end": 722
                  },
                  "start": 712,
                  "end": 722
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "q",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 725,
                  "end": 726
                },
                "definite": false,
                "start": 712,
                "end": 726
              }
            ],
            "declare": false,
            "start": 706,
            "end": 727
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
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 741,
                      "end": 747
                    },
                    "start": 739,
                    "end": 747
                  },
                  "start": 738,
                  "end": 747
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "q",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 750,
                    "end": 751
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "rawJSON",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 752,
                    "end": 759
                  },
                  "optional": false,
                  "computed": false,
                  "start": 750,
                  "end": 759
                },
                "definite": false,
                "start": 738,
                "end": 759
              }
            ],
            "declare": false,
            "start": 732,
            "end": 760
          }
        ],
        "start": 700,
        "end": 762
      },
      "alternate": null,
      "start": 677,
      "end": 762
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "JSON",
            "optional": false,
            "typeAnnotation": null,
            "start": 767,
            "end": 771
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "isRawJSON",
            "optional": false,
            "typeAnnotation": null,
            "start": 772,
            "end": 781
          },
          "optional": false,
          "computed": false,
          "start": 767,
          "end": 781
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": null,
            "start": 782,
            "end": 783
          }
        ],
        "optional": false,
        "start": 767,
        "end": 784
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "RawJSON",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 801,
                        "end": 808
                      },
                      "typeArguments": null,
                      "start": 801,
                      "end": 808
                    },
                    "start": 799,
                    "end": 808
                  },
                  "start": 798,
                  "end": 808
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "g",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 811,
                  "end": 812
                },
                "definite": false,
                "start": 798,
                "end": 812
              }
            ],
            "declare": false,
            "start": 792,
            "end": 813
          }
        ],
        "start": 786,
        "end": 815
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 836,
                      "end": 842
                    },
                    "start": 834,
                    "end": 842
                  },
                  "start": 833,
                  "end": 842
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "g",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 845,
                    "end": 846
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "rawJSON",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 847,
                    "end": 854
                  },
                  "optional": false,
                  "computed": false,
                  "start": 845,
                  "end": 854
                },
                "definite": false,
                "start": 833,
                "end": 854
              }
            ],
            "declare": false,
            "start": 827,
            "end": 855
          }
        ],
        "start": 821,
        "end": 857
      },
      "start": 763,
      "end": 857
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
            "name": "t",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Readonly",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 868,
                  "end": 876
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "RawJSON",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 877,
                        "end": 884
                      },
                      "typeArguments": null,
                      "start": 877,
                      "end": 884
                    }
                  ],
                  "start": 876,
                  "end": 885
                },
                "start": 868,
                "end": 885
              },
              "start": 866,
              "end": 885
            },
            "start": 865,
            "end": 885
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 888,
            "end": 889
          },
          "definite": false,
          "start": 865,
          "end": 889
        }
      ],
      "declare": false,
      "start": 859,
      "end": 890
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
            "name": "u",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "RawJSON",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 900,
                  "end": 907
                },
                "typeArguments": null,
                "start": 900,
                "end": 907
              },
              "start": 898,
              "end": 907
            },
            "start": 897,
            "end": 907
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "t",
            "optional": false,
            "typeAnnotation": null,
            "start": 910,
            "end": 911
          },
          "definite": false,
          "start": 897,
          "end": 911
        }
      ],
      "declare": false,
      "start": 891,
      "end": 912
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
            "name": "v",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "RawJSON",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 922,
                  "end": 929
                },
                "typeArguments": null,
                "start": 922,
                "end": 929
              },
              "start": 920,
              "end": 929
            },
            "start": 919,
            "end": 929
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 932,
                "end": 938
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "freeze",
                "optional": false,
                "typeAnnotation": null,
                "start": 939,
                "end": 945
              },
              "optional": false,
              "computed": false,
              "start": 932,
              "end": 945
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 946,
                "end": 947
              }
            ],
            "optional": false,
            "start": 932,
            "end": 948
          },
          "definite": false,
          "start": 919,
          "end": 948
        }
      ],
      "declare": false,
      "start": 913,
      "end": 949
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
            "name": "w",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Pick",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 959,
                  "end": 963
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "RawJSON",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 964,
                        "end": 971
                      },
                      "typeArguments": null,
                      "start": 964,
                      "end": 971
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "rawJSON",
                        "raw": "\"rawJSON\"",
                        "start": 973,
                        "end": 982
                      },
                      "start": 973,
                      "end": 982
                    }
                  ],
                  "start": 963,
                  "end": 983
                },
                "start": 959,
                "end": 983
              },
              "start": 957,
              "end": 983
            },
            "start": 956,
            "end": 983
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 986,
            "end": 987
          },
          "definite": false,
          "start": 956,
          "end": 987
        }
      ],
      "declare": false,
      "start": 950,
      "end": 988
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "RawJSON",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 998,
                  "end": 1005
                },
                "typeArguments": null,
                "start": 998,
                "end": 1005
              },
              "start": 996,
              "end": 1005
            },
            "start": 995,
            "end": 1005
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "w",
            "optional": false,
            "typeAnnotation": null,
            "start": 1008,
            "end": 1009
          },
          "definite": false,
          "start": 995,
          "end": 1009
        }
      ],
      "declare": false,
      "start": 989,
      "end": 1010
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
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "RawJSON",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1021,
                  "end": 1028
                },
                "typeArguments": null,
                "start": 1021,
                "end": 1028
              },
              "start": 1019,
              "end": 1028
            },
            "start": 1018,
            "end": 1028
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 1031,
                "end": 1037
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "assign",
                "optional": false,
                "typeAnnotation": null,
                "start": 1038,
                "end": 1044
              },
              "optional": false,
              "computed": false,
              "start": 1031,
              "end": 1044
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [],
                "start": 1045,
                "end": 1047
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1049,
                "end": 1050
              }
            ],
            "optional": false,
            "start": 1031,
            "end": 1051
          },
          "definite": false,
          "start": 1018,
          "end": 1051
        }
      ],
      "declare": false,
      "start": 1012,
      "end": 1052
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
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "RawJSON",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1062,
                  "end": 1069
                },
                "typeArguments": null,
                "start": 1062,
                "end": 1069
              },
              "start": 1060,
              "end": 1069
            },
            "start": 1059,
            "end": 1069
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Proxy",
              "optional": false,
              "typeAnnotation": null,
              "start": 1076,
              "end": 1081
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1082,
                "end": 1083
              },
              {
                "type": "ObjectExpression",
                "properties": [],
                "start": 1085,
                "end": 1087
              }
            ],
            "start": 1072,
            "end": 1088
          },
          "definite": false,
          "start": 1059,
          "end": 1088
        }
      ],
      "declare": false,
      "start": 1053,
      "end": 1089
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "RawJSON",
        "optional": false,
        "typeAnnotation": null,
        "start": 1101,
        "end": 1108
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
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "rawJSON",
              "optional": false,
              "typeAnnotation": null,
              "start": 1124,
              "end": 1131
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1133,
                "end": 1139
              },
              "start": 1131,
              "end": 1139
            },
            "accessibility": null,
            "static": false,
            "start": 1115,
            "end": 1140
          }
        ],
        "start": 1109,
        "end": 1142
      },
      "declare": false,
      "start": 1091,
      "end": 1142
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1142
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
    "type": "Identifier",
    "value": "a",
    "start": 6,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "RawJSON",
    "start": 9,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 17,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "JSON",
    "start": 19,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 23,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "rawJSON",
    "start": 24,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 31,
    "end": 32
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 32,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 36,
    "end": 37
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 38,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 44,
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
    "value": "=",
    "start": 54,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 57,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "rawJSON",
    "start": 58,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 65,
    "end": 66
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 67,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 74,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 76,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 83,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 86,
    "end": 87
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 88,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 97,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 99,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "rawJSON",
    "start": 108,
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
    "value": "string",
    "start": 117,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 129,
    "end": 130
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 131,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 138,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "RawJSON",
    "start": 140,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 148,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 151,
    "end": 152
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 154,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 161,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "RawJSON",
    "start": 163,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 173,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "rawJSON",
    "start": 175,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 182,
    "end": 183
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 184,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 189,
    "end": 190
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 191,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 201,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "rawJSON",
    "start": 203,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 210,
    "end": 211
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 212,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 217,
    "end": 218
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 219,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 226,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "RawJSON",
    "start": 228,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 236,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 238,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 239,
    "end": 240
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 241,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "i",
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
    "value": "RawJSON",
    "start": 250,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 258,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 260,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 266,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "freeze",
    "start": 267,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 273,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 274,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 275,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 276,
    "end": 277
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 278,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "j",
    "start": 284,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 285,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "RawJSON",
    "start": 287,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 297,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 299,
    "end": 302
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "type": "Punctuator",
    "value": ";",
    "start": 305,
    "end": 306
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 307,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 313,
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
    "value": "RawJSON",
    "start": 316,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 324,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 326,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "rawJSON",
    "start": 328,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 335,
    "end": 336
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 337,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 339,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 340,
    "end": 341
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 343,
    "end": 348
  },
  {
    "type": "Identifier",
    "value": "A",
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
    "type": "Identifier",
    "value": "readonly",
    "start": 357,
    "end": 365
  },
  {
    "type": "Identifier",
    "value": "rawJSON",
    "start": 366,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 374,
    "end": 375
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 376,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 379,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 381,
    "end": 382
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 383,
    "end": 388
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 389,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 390,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "RawJSON",
    "start": 392,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 400,
    "end": 401
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 402,
    "end": 405
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 406,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 407,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "class",
    "start": 411,
    "end": 416
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 417,
    "end": 418
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 419,
    "end": 429
  },
  {
    "type": "Identifier",
    "value": "RawJSON",
    "start": 430,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 438,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 444,
    "end": 452
  },
  {
    "type": "Identifier",
    "value": "rawJSON",
    "start": 453,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 461,
    "end": 462
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 463,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 466,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 468,
    "end": 469
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 471,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 472,
    "end": 473
  },
  {
    "type": "Identifier",
    "value": "rawJSON",
    "start": 473,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 481,
    "end": 482
  },
  {
    "type": "String",
    "value": "\"2\"",
    "start": 483,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 486,
    "end": 487
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 488,
    "end": 495
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 496,
    "end": 501
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 502,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 503,
    "end": 504
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 505,
    "end": 510
  },
  {
    "type": "Identifier",
    "value": "RawJSON",
    "start": 511,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 518,
    "end": 519
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 520,
    "end": 525
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 526,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 527,
    "end": 528
  },
  {
    "type": "String",
    "value": "\"rawJSON\"",
    "start": 529,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 539,
    "end": 540
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 541,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 542,
    "end": 543
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 545,
    "end": 550
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 551,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 553,
    "end": 554
  },
  {
    "type": "Identifier",
    "value": "RawJSON",
    "start": 555,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 562,
    "end": 563
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 564,
    "end": 567
  },
  {
    "type": "Identifier",
    "value": "RawJSON",
    "start": 568,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 575,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 576,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 577,
    "end": 578
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 579,
    "end": 584
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 585,
    "end": 586
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 587,
    "end": 594
  },
  {
    "type": "Identifier",
    "value": "RawJSON",
    "start": 595,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 603,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 604,
    "end": 605
  },
  {
    "type": "Identifier",
    "value": "RawJSONInstance",
    "start": 607,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 622,
    "end": 623
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 624,
    "end": 628
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 629,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 631,
    "end": 632
  },
  {
    "type": "Identifier",
    "value": "RawJSONInstance",
    "start": 633,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 648,
    "end": 649
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 651,
    "end": 658
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 659,
    "end": 664
  },
  {
    "type": "Identifier",
    "value": "q",
    "start": 665,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 666,
    "end": 667
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 668,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 675,
    "end": 676
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 677,
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
    "value": "JSON",
    "start": 681,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 685,
    "end": 686
  },
  {
    "type": "Identifier",
    "value": "isRawJSON",
    "start": 686,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 695,
    "end": 696
  },
  {
    "type": "Identifier",
    "value": "q",
    "start": 696,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 697,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 698,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 700,
    "end": 701
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 706,
    "end": 711
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 712,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 713,
    "end": 714
  },
  {
    "type": "Identifier",
    "value": "RawJSON",
    "start": 715,
    "end": 722
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 723,
    "end": 724
  },
  {
    "type": "Identifier",
    "value": "q",
    "start": 725,
    "end": 726
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 726,
    "end": 727
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 732,
    "end": 737
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 738,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 739,
    "end": 740
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 741,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 748,
    "end": 749
  },
  {
    "type": "Identifier",
    "value": "q",
    "start": 750,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 751,
    "end": 752
  },
  {
    "type": "Identifier",
    "value": "rawJSON",
    "start": 752,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 759,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 761,
    "end": 762
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 763,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 766,
    "end": 767
  },
  {
    "type": "Identifier",
    "value": "JSON",
    "start": 767,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 771,
    "end": 772
  },
  {
    "type": "Identifier",
    "value": "isRawJSON",
    "start": 772,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 781,
    "end": 782
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 782,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 783,
    "end": 784
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 784,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 786,
    "end": 787
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 792,
    "end": 797
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 798,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 799,
    "end": 800
  },
  {
    "type": "Identifier",
    "value": "RawJSON",
    "start": 801,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 809,
    "end": 810
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 811,
    "end": 812
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 812,
    "end": 813
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 814,
    "end": 815
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 816,
    "end": 820
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 821,
    "end": 822
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 827,
    "end": 832
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 833,
    "end": 834
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 834,
    "end": 835
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 836,
    "end": 842
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 843,
    "end": 844
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 845,
    "end": 846
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 846,
    "end": 847
  },
  {
    "type": "Identifier",
    "value": "rawJSON",
    "start": 847,
    "end": 854
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 854,
    "end": 855
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 856,
    "end": 857
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 859,
    "end": 864
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 865,
    "end": 866
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 866,
    "end": 867
  },
  {
    "type": "Identifier",
    "value": "Readonly",
    "start": 868,
    "end": 876
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 876,
    "end": 877
  },
  {
    "type": "Identifier",
    "value": "RawJSON",
    "start": 877,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 884,
    "end": 885
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 886,
    "end": 887
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 888,
    "end": 889
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 889,
    "end": 890
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 891,
    "end": 896
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 897,
    "end": 898
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 898,
    "end": 899
  },
  {
    "type": "Identifier",
    "value": "RawJSON",
    "start": 900,
    "end": 907
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 908,
    "end": 909
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 910,
    "end": 911
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 911,
    "end": 912
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 913,
    "end": 918
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 919,
    "end": 920
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 920,
    "end": 921
  },
  {
    "type": "Identifier",
    "value": "RawJSON",
    "start": 922,
    "end": 929
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 930,
    "end": 931
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 932,
    "end": 938
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 938,
    "end": 939
  },
  {
    "type": "Identifier",
    "value": "freeze",
    "start": 939,
    "end": 945
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 945,
    "end": 946
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 946,
    "end": 947
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 947,
    "end": 948
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 948,
    "end": 949
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 950,
    "end": 955
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 956,
    "end": 957
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 957,
    "end": 958
  },
  {
    "type": "Identifier",
    "value": "Pick",
    "start": 959,
    "end": 963
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 963,
    "end": 964
  },
  {
    "type": "Identifier",
    "value": "RawJSON",
    "start": 964,
    "end": 971
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 971,
    "end": 972
  },
  {
    "type": "String",
    "value": "\"rawJSON\"",
    "start": 973,
    "end": 982
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 982,
    "end": 983
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 984,
    "end": 985
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 986,
    "end": 987
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 987,
    "end": 988
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 989,
    "end": 994
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 995,
    "end": 996
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 996,
    "end": 997
  },
  {
    "type": "Identifier",
    "value": "RawJSON",
    "start": 998,
    "end": 1005
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 1008,
    "end": 1009
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1009,
    "end": 1010
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1012,
    "end": 1017
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1018,
    "end": 1019
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1019,
    "end": 1020
  },
  {
    "type": "Identifier",
    "value": "RawJSON",
    "start": 1021,
    "end": 1028
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1029,
    "end": 1030
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 1031,
    "end": 1037
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1037,
    "end": 1038
  },
  {
    "type": "Identifier",
    "value": "assign",
    "start": 1038,
    "end": 1044
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1044,
    "end": 1045
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1045,
    "end": 1046
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1046,
    "end": 1047
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1047,
    "end": 1048
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1049,
    "end": 1050
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1050,
    "end": 1051
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1053,
    "end": 1058
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1059,
    "end": 1060
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1060,
    "end": 1061
  },
  {
    "type": "Identifier",
    "value": "RawJSON",
    "start": 1062,
    "end": 1069
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1070,
    "end": 1071
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1072,
    "end": 1075
  },
  {
    "type": "Identifier",
    "value": "Proxy",
    "start": 1076,
    "end": 1081
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1081,
    "end": 1082
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1082,
    "end": 1083
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1083,
    "end": 1084
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1085,
    "end": 1086
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1086,
    "end": 1087
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1087,
    "end": 1088
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1088,
    "end": 1089
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1091,
    "end": 1100
  },
  {
    "type": "Identifier",
    "value": "RawJSON",
    "start": 1101,
    "end": 1108
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1109,
    "end": 1110
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 1115,
    "end": 1123
  },
  {
    "type": "Identifier",
    "value": "rawJSON",
    "start": 1124,
    "end": 1131
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1131,
    "end": 1132
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1133,
    "end": 1139
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1139,
    "end": 1140
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1141,
    "end": 1142
  }
]
```
