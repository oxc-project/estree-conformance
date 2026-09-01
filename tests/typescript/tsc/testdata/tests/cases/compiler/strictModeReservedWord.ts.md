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
            "name": "let",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 7
          },
          "init": {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 10,
            "end": 12
          },
          "definite": false,
          "start": 4,
          "end": 12
        }
      ],
      "declare": false,
      "start": 0,
      "end": 13
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 24,
        "end": 27
      },
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "Literal",
              "value": "use strict",
              "raw": "\"use strict\"",
              "start": 36,
              "end": 48
            },
            "directive": "use strict",
            "start": 36,
            "end": 48
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
                  "name": "public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 57,
                  "end": 63
                },
                "init": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 66,
                  "end": 68
                },
                "definite": false,
                "start": 57,
                "end": 68
              }
            ],
            "declare": false,
            "start": 53,
            "end": 69
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
                  "name": "static",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 78,
                  "end": 84
                },
                "init": {
                  "type": "Literal",
                  "value": "hi",
                  "raw": "\"hi\"",
                  "start": 87,
                  "end": 91
                },
                "definite": false,
                "start": 78,
                "end": 91
              }
            ],
            "declare": false,
            "start": 74,
            "end": 92
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
                  "name": "let",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 101,
                  "end": 104
                },
                "init": {
                  "type": "Literal",
                  "value": "blah",
                  "raw": "\"blah\"",
                  "start": 107,
                  "end": 113
                },
                "definite": false,
                "start": 101,
                "end": 113
              }
            ],
            "declare": false,
            "start": 97,
            "end": 114
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
                  "name": "package",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 123,
                  "end": 130
                },
                "init": {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "\"hello\"",
                  "start": 133,
                  "end": 140
                },
                "definite": false,
                "start": 123,
                "end": 140
              }
            ],
            "declare": false,
            "start": 119,
            "end": 140
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "package",
              "optional": false,
              "typeAnnotation": null,
              "start": 154,
              "end": 161
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
              "start": 164,
              "end": 167
            },
            "expression": false,
            "start": 145,
            "end": 167
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 181,
              "end": 184
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "private",
                "optional": false,
                "typeAnnotation": null,
                "start": 185,
                "end": 192
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "implements",
                "optional": false,
                "typeAnnotation": null,
                "start": 194,
                "end": 204
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "let",
                "optional": false,
                "typeAnnotation": null,
                "start": 206,
                "end": 209
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 211,
              "end": 214
            },
            "expression": false,
            "start": 172,
            "end": 214
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null,
              "start": 228,
              "end": 231
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "implements",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 232,
                    "end": 242
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 232,
                  "end": 242
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "protected",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 244,
                    "end": 253
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 244,
                  "end": 253
                }
              ],
              "start": 231,
              "end": 254
            },
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 257,
              "end": 260
            },
            "expression": false,
            "start": 219,
            "end": 260
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "barn",
              "optional": false,
              "typeAnnotation": null,
              "start": 274,
              "end": 278
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "cb",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 284,
                        "end": 291
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 293,
                        "end": 299
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "package",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 301,
                        "end": 308
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 313,
                        "end": 317
                      },
                      "start": 310,
                      "end": 317
                    },
                    "start": 283,
                    "end": 317
                  },
                  "start": 281,
                  "end": 317
                },
                "start": 279,
                "end": 317
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 319,
              "end": 322
            },
            "expression": false,
            "start": 265,
            "end": 322
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "barn",
                "optional": false,
                "typeAnnotation": null,
                "start": 327,
                "end": 331
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 333,
                      "end": 340
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 342,
                      "end": 348
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "package",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 350,
                      "end": 357
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 362,
                    "end": 365
                  },
                  "id": null,
                  "generator": false,
                  "start": 332,
                  "end": 365
                }
              ],
              "optional": false,
              "start": 327,
              "end": 366
            },
            "directive": null,
            "start": 327,
            "end": 367
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
                  "name": "myClass",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 377,
                  "end": 384
                },
                "init": {
                  "type": "ClassExpression",
                  "decorators": [],
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "package",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 393,
                    "end": 400
                  },
                  "typeParameters": null,
                  "superClass": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 409,
                    "end": 415
                  },
                  "superTypeArguments": null,
                  "implements": [],
                  "body": {
                    "type": "ClassBody",
                    "body": [],
                    "start": 416,
                    "end": 418
                  },
                  "abstract": false,
                  "declare": false,
                  "start": 387,
                  "end": 418
                },
                "definite": false,
                "start": 377,
                "end": 418
              }
            ],
            "declare": false,
            "start": 373,
            "end": 418
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
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "public",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 431,
                          "end": 437
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 438,
                          "end": 441
                        },
                        "start": 431,
                        "end": 441
                      },
                      "typeArguments": null,
                      "start": 431,
                      "end": 441
                    },
                    "start": 429,
                    "end": 441
                  },
                  "start": 428,
                  "end": 441
                },
                "init": null,
                "definite": false,
                "start": 428,
                "end": 441
              }
            ],
            "declare": false,
            "start": 424,
            "end": 442
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 457,
              "end": 460
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
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 464,
                        "end": 471
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 472,
                        "end": 473
                      },
                      "start": 464,
                      "end": 473
                    },
                    "typeArguments": null,
                    "start": 464,
                    "end": 473
                  },
                  "start": 462,
                  "end": 473
                },
                "start": 461,
                "end": 473
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 475,
              "end": 478
            },
            "expression": false,
            "start": 448,
            "end": 478
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo1",
              "optional": false,
              "typeAnnotation": null,
              "start": 492,
              "end": 496
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
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "private",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 500,
                          "end": 507
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "package",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 508,
                          "end": 515
                        },
                        "start": 500,
                        "end": 515
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 516,
                        "end": 517
                      },
                      "start": 500,
                      "end": 517
                    },
                    "typeArguments": null,
                    "start": 500,
                    "end": 517
                  },
                  "start": 498,
                  "end": 517
                },
                "start": 497,
                "end": 517
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 519,
              "end": 522
            },
            "expression": false,
            "start": 483,
            "end": 522
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 536,
              "end": 540
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
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "private",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 544,
                          "end": 551
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "package",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 552,
                          "end": 559
                        },
                        "start": 544,
                        "end": 559
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "protected",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 560,
                        "end": 569
                      },
                      "start": 544,
                      "end": 569
                    },
                    "typeArguments": null,
                    "start": 544,
                    "end": 569
                  },
                  "start": 542,
                  "end": 569
                },
                "start": 541,
                "end": 569
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 571,
              "end": 574
            },
            "expression": false,
            "start": 527,
            "end": 574
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "interface",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 586,
                              "end": 595
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "package",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 596,
                              "end": 603
                            },
                            "start": 586,
                            "end": 603
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "implements",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 604,
                            "end": 614
                          },
                          "start": 586,
                          "end": 614
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 615,
                          "end": 616
                        },
                        "start": 586,
                        "end": 616
                      },
                      "typeArguments": null,
                      "start": 586,
                      "end": 616
                    },
                    "start": 584,
                    "end": 616
                  },
                  "start": 583,
                  "end": 616
                },
                "init": null,
                "definite": false,
                "start": 583,
                "end": 616
              }
            ],
            "declare": false,
            "start": 579,
            "end": 617
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "ublic",
                "optional": false,
                "typeAnnotation": null,
                "start": 622,
                "end": 627
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 622,
              "end": 629
            },
            "directive": null,
            "start": 622,
            "end": 630
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "static",
                "optional": false,
                "typeAnnotation": null,
                "start": 635,
                "end": 641
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 635,
              "end": 643
            },
            "directive": null,
            "start": 635,
            "end": 644
          }
        ],
        "start": 30,
        "end": 646
      },
      "expression": false,
      "start": 15,
      "end": 646
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 647
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "let",
    "start": 0,
    "end": 3
  },
  {
    "type": "Identifier",
    "value": "let",
    "start": 4,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8,
    "end": 9
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 10,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 12,
    "end": 13
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 15,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 24,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 30,
    "end": 31
  },
  {
    "type": "String",
    "value": "\"use strict\"",
    "start": 36,
    "end": 48
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 53,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "public",
    "start": 57,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 64,
    "end": 65
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 66,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 68,
    "end": 69
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 74,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "static",
    "start": 78,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 85,
    "end": 86
  },
  {
    "type": "String",
    "value": "\"hi\"",
    "start": 87,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 91,
    "end": 92
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 97,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "let",
    "start": 101,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 105,
    "end": 106
  },
  {
    "type": "String",
    "value": "\"blah\"",
    "start": 107,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 113,
    "end": 114
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 119,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "package",
    "start": 123,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 131,
    "end": 132
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 133,
    "end": 140
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 145,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "package",
    "start": 154,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "type": "Punctuator",
    "value": "}",
    "start": 166,
    "end": 167
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 172,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 181,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "private",
    "start": 185,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 192,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "implements",
    "start": 194,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 204,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "let",
    "start": 206,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 211,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 213,
    "end": 214
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 219,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 228,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 231,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "implements",
    "start": 232,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 242,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "protected",
    "start": 244,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 253,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 259,
    "end": 260
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 265,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "barn",
    "start": 274,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 278,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 279,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 283,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "private",
    "start": 284,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 291,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "public",
    "start": 293,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 299,
    "end": 300
  },
  {
    "type": "Identifier",
    "value": "package",
    "start": 301,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 308,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 310,
    "end": 312
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 313,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 317,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 321,
    "end": 322
  },
  {
    "type": "Identifier",
    "value": "barn",
    "start": 327,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 331,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 332,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "private",
    "start": 333,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 340,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "public",
    "start": 342,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 348,
    "end": 349
  },
  {
    "type": "Identifier",
    "value": "package",
    "start": 350,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 357,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 359,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 364,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 365,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 366,
    "end": 367
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 373,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "myClass",
    "start": 377,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 385,
    "end": 386
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 387,
    "end": 392
  },
  {
    "type": "Identifier",
    "value": "package",
    "start": 393,
    "end": 400
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 401,
    "end": 408
  },
  {
    "type": "Identifier",
    "value": "public",
    "start": 409,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 416,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 417,
    "end": 418
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 424,
    "end": 427
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 428,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 429,
    "end": 430
  },
  {
    "type": "Identifier",
    "value": "public",
    "start": 431,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 437,
    "end": 438
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 438,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 441,
    "end": 442
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 448,
    "end": 456
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 457,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 460,
    "end": 461
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "private",
    "start": 464,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 471,
    "end": 472
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 472,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 473,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 475,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 477,
    "end": 478
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 483,
    "end": 491
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 492,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 496,
    "end": 497
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 497,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 498,
    "end": 499
  },
  {
    "type": "Identifier",
    "value": "private",
    "start": 500,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 507,
    "end": 508
  },
  {
    "type": "Identifier",
    "value": "package",
    "start": 508,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 515,
    "end": 516
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 516,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 517,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 519,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 521,
    "end": 522
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 527,
    "end": 535
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 536,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 540,
    "end": 541
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "private",
    "start": 544,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 551,
    "end": 552
  },
  {
    "type": "Identifier",
    "value": "package",
    "start": 552,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 559,
    "end": 560
  },
  {
    "type": "Identifier",
    "value": "protected",
    "start": 560,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 569,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": "{",
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
    "type": "Keyword",
    "value": "let",
    "start": 579,
    "end": 582
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 583,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 584,
    "end": 585
  },
  {
    "type": "Identifier",
    "value": "interface",
    "start": 586,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 595,
    "end": 596
  },
  {
    "type": "Identifier",
    "value": "package",
    "start": 596,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 603,
    "end": 604
  },
  {
    "type": "Identifier",
    "value": "implements",
    "start": 604,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 614,
    "end": 615
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 615,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 616,
    "end": 617
  },
  {
    "type": "Identifier",
    "value": "ublic",
    "start": 622,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 627,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 628,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 629,
    "end": 630
  },
  {
    "type": "Identifier",
    "value": "static",
    "start": 635,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 641,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Punctuator",
    "value": "}",
    "start": 645,
    "end": 646
  }
]
```
