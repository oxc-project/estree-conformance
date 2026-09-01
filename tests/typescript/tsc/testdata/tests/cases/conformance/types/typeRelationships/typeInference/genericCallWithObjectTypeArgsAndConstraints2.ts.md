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
        "start": 116,
        "end": 120
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 127,
              "end": 128
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 130,
                "end": 136
              },
              "start": 128,
              "end": 136
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
            "start": 127,
            "end": 137
          }
        ],
        "start": 121,
        "end": 139
      },
      "abstract": false,
      "declare": false,
      "start": 110,
      "end": 139
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
        "start": 146,
        "end": 153
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 162,
        "end": 166
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
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 173,
              "end": 174
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 176,
                "end": 182
              },
              "start": 174,
              "end": 182
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
            "start": 173,
            "end": 183
          }
        ],
        "start": 167,
        "end": 185
      },
      "abstract": false,
      "declare": false,
      "start": 140,
      "end": 185
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 196,
        "end": 197
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 198,
              "end": 199
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Base",
                "optional": false,
                "typeAnnotation": null,
                "start": 208,
                "end": 212
              },
              "typeArguments": null,
              "start": 208,
              "end": 212
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 198,
            "end": 212
          }
        ],
        "start": 197,
        "end": 213
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
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 219,
                    "end": 222
                  },
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
                        "start": 224,
                        "end": 225
                      },
                      "typeArguments": null,
                      "start": 224,
                      "end": 225
                    },
                    "start": 222,
                    "end": 225
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 219,
                  "end": 226
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 227,
                    "end": 230
                  },
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
                        "start": 232,
                        "end": 233
                      },
                      "typeArguments": null,
                      "start": 232,
                      "end": 233
                    },
                    "start": 230,
                    "end": 233
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 227,
                  "end": 233
                }
              ],
              "start": 217,
              "end": 235
            },
            "start": 215,
            "end": 235
          },
          "start": 214,
          "end": 235
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
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
                  "name": "r",
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
                        "start": 250,
                        "end": 251
                      },
                      "typeArguments": null,
                      "start": 250,
                      "end": 251
                    },
                    "start": 248,
                    "end": 251
                  },
                  "start": 247,
                  "end": 251
                },
                "init": null,
                "definite": false,
                "start": 247,
                "end": 251
              }
            ],
            "declare": false,
            "start": 243,
            "end": 252
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "r",
              "optional": false,
              "typeAnnotation": null,
              "start": 264,
              "end": 265
            },
            "start": 257,
            "end": 266
          }
        ],
        "start": 237,
        "end": 268
      },
      "expression": false,
      "start": 187,
      "end": 268
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
            "name": "r",
            "optional": false,
            "typeAnnotation": null,
            "start": 273,
            "end": 274
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 277,
              "end": 278
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 281,
                      "end": 284
                    },
                    "value": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 290,
                        "end": 294
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 286,
                      "end": 296
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 281,
                    "end": 296
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 298,
                      "end": 301
                    },
                    "value": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 307,
                        "end": 314
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 303,
                      "end": 316
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 298,
                    "end": 316
                  }
                ],
                "start": 279,
                "end": 318
              }
            ],
            "optional": false,
            "start": 277,
            "end": 319
          },
          "definite": false,
          "start": 273,
          "end": 319
        }
      ],
      "declare": false,
      "start": 269,
      "end": 320
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
            "start": 325,
            "end": 327
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 330,
              "end": 331
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 334,
                      "end": 337
                    },
                    "value": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 343,
                        "end": 350
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 339,
                      "end": 352
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 334,
                    "end": 352
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 354,
                      "end": 357
                    },
                    "value": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 363,
                        "end": 370
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 359,
                      "end": 372
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 354,
                    "end": 372
                  }
                ],
                "start": 332,
                "end": 374
              }
            ],
            "optional": false,
            "start": 330,
            "end": 375
          },
          "definite": false,
          "start": 325,
          "end": 375
        }
      ],
      "declare": false,
      "start": 321,
      "end": 376
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 389,
        "end": 390
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
              "start": 391,
              "end": 392
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 391,
            "end": 392
          }
        ],
        "start": 390,
        "end": 393
      },
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 400,
              "end": 401
            },
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
                  "start": 403,
                  "end": 404
                },
                "typeArguments": null,
                "start": 403,
                "end": 404
              },
              "start": 401,
              "end": 404
            },
            "accessibility": null,
            "static": false,
            "start": 400,
            "end": 405
          }
        ],
        "start": 394,
        "end": 407
      },
      "declare": false,
      "start": 379,
      "end": 407
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 417,
        "end": 419
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 420,
              "end": 421
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Base",
                "optional": false,
                "typeAnnotation": null,
                "start": 430,
                "end": 434
              },
              "typeArguments": null,
              "start": 430,
              "end": 434
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 420,
            "end": 434
          }
        ],
        "start": 419,
        "end": 435
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
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 439,
                "end": 440
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 441,
                      "end": 442
                    },
                    "typeArguments": null,
                    "start": 441,
                    "end": 442
                  }
                ],
                "start": 440,
                "end": 443
              },
              "start": 439,
              "end": 443
            },
            "start": 437,
            "end": 443
          },
          "start": 436,
          "end": 443
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
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
                  "name": "r",
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
                        "start": 458,
                        "end": 459
                      },
                      "typeArguments": null,
                      "start": 458,
                      "end": 459
                    },
                    "start": 456,
                    "end": 459
                  },
                  "start": 455,
                  "end": 459
                },
                "init": null,
                "definite": false,
                "start": 455,
                "end": 459
              }
            ],
            "declare": false,
            "start": 451,
            "end": 460
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "r",
              "optional": false,
              "typeAnnotation": null,
              "start": 472,
              "end": 473
            },
            "start": 465,
            "end": 474
          }
        ],
        "start": 445,
        "end": 476
      },
      "expression": false,
      "start": 408,
      "end": 476
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
                  "start": 484,
                  "end": 485
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 486,
                        "end": 493
                      },
                      "typeArguments": null,
                      "start": 486,
                      "end": 493
                    }
                  ],
                  "start": 485,
                  "end": 494
                },
                "start": 484,
                "end": 494
              },
              "start": 482,
              "end": 494
            },
            "start": 481,
            "end": 494
          },
          "init": null,
          "definite": false,
          "start": 481,
          "end": 494
        }
      ],
      "declare": false,
      "start": 477,
      "end": 495
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
            "start": 500,
            "end": 502
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f2",
              "optional": false,
              "typeAnnotation": null,
              "start": 505,
              "end": 507
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 508,
                "end": 509
              }
            ],
            "optional": false,
            "start": 505,
            "end": 510
          },
          "definite": false,
          "start": 500,
          "end": 510
        }
      ],
      "declare": false,
      "start": 496,
      "end": 511
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 523,
        "end": 525
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 526,
              "end": 527
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Base",
                "optional": false,
                "typeAnnotation": null,
                "start": 536,
                "end": 540
              },
              "typeArguments": null,
              "start": 536,
              "end": 540
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 526,
            "end": 540
          }
        ],
        "start": 525,
        "end": 541
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
                "start": 545,
                "end": 546
              },
              "typeArguments": null,
              "start": 545,
              "end": 546
            },
            "start": 543,
            "end": 546
          },
          "start": 542,
          "end": 546
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
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
                  "name": "a",
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
                        "start": 555,
                        "end": 556
                      },
                      "typeArguments": null,
                      "start": 555,
                      "end": 556
                    },
                    "start": 553,
                    "end": 556
                  },
                  "start": 552,
                  "end": 556
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 561,
                    "end": 562
                  },
                  "typeArguments": null,
                  "start": 561,
                  "end": 562
                },
                "start": 558,
                "end": 562
              },
              "start": 551,
              "end": 562
            },
            "start": 549,
            "end": 562
          },
          "start": 548,
          "end": 562
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 577,
                "end": 578
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 579,
                  "end": 583
                }
              ],
              "optional": false,
              "start": 577,
              "end": 584
            },
            "start": 570,
            "end": 585
          }
        ],
        "start": 564,
        "end": 587
      },
      "expression": false,
      "start": 514,
      "end": 587
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
            "start": 592,
            "end": 594
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f3",
              "optional": false,
              "typeAnnotation": null,
              "start": 597,
              "end": 599
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 604,
                  "end": 608
                },
                "typeArguments": null,
                "arguments": [],
                "start": 600,
                "end": 610
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 612,
                    "end": 613
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 617,
                  "end": 618
                },
                "id": null,
                "generator": false,
                "start": 612,
                "end": 618
              }
            ],
            "optional": false,
            "start": 597,
            "end": 619
          },
          "definite": false,
          "start": 592,
          "end": 619
        }
      ],
      "declare": false,
      "start": 588,
      "end": 620
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
            "start": 625,
            "end": 627
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f3",
              "optional": false,
              "typeAnnotation": null,
              "start": 630,
              "end": 632
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Derived",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 637,
                  "end": 644
                },
                "typeArguments": null,
                "arguments": [],
                "start": 633,
                "end": 646
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 648,
                    "end": 649
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 653,
                  "end": 654
                },
                "id": null,
                "generator": false,
                "start": 648,
                "end": 654
              }
            ],
            "optional": false,
            "start": 630,
            "end": 655
          },
          "definite": false,
          "start": 625,
          "end": 655
        }
      ],
      "declare": false,
      "start": 621,
      "end": 656
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
            "start": 662,
            "end": 664
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f3",
              "optional": false,
              "typeAnnotation": null,
              "start": 667,
              "end": 669
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 670,
                "end": 674
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 676,
                "end": 680
              }
            ],
            "optional": false,
            "start": 667,
            "end": 681
          },
          "definite": false,
          "start": 662,
          "end": 681
        }
      ],
      "declare": false,
      "start": 658,
      "end": 682
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
            "start": 694,
            "end": 696
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f3",
              "optional": false,
              "typeAnnotation": null,
              "start": 699,
              "end": 701
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 702,
                "end": 706
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 708,
                    "end": 709
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 713,
                  "end": 714
                },
                "id": null,
                "generator": false,
                "start": 708,
                "end": 714
              }
            ],
            "optional": false,
            "start": 699,
            "end": 715
          },
          "definite": false,
          "start": 694,
          "end": 715
        }
      ],
      "declare": false,
      "start": 690,
      "end": 716
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 110,
  "end": 723
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 110,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 116,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 121,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 128,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 130,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 138,
    "end": 139
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 140,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 146,
    "end": 153
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 154,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 162,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 167,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 174,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 176,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 184,
    "end": 185
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 187,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 197,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 198,
    "end": 199
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 200,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 208,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 213,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 217,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 219,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 222,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "value": "bar",
    "start": 227,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 230,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 237,
    "end": 238
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 243,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "r",
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
    "value": "T",
    "start": 250,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 251,
    "end": 252
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 257,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 264,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 265,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 267,
    "end": 268
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 269,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 273,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 275,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 279,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 281,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 284,
    "end": 285
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 286,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 290,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 294,
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
    "value": ",",
    "start": 296,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 298,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 301,
    "end": 302
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 303,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 307,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 314,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 315,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 317,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 319,
    "end": 320
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 321,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 325,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 328,
    "end": 329
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 330,
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
    "value": "{",
    "start": 332,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 334,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 337,
    "end": 338
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 339,
    "end": 342
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 343,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 350,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 351,
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
    "value": "bar",
    "start": 354,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 357,
    "end": 358
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 359,
    "end": 362
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 363,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 370,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 371,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 373,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 374,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 375,
    "end": 376
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 379,
    "end": 388
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 389,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 390,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 391,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 392,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 394,
    "end": 395
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 401,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 404,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 406,
    "end": 407
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 408,
    "end": 416
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 417,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 419,
    "end": 420
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 420,
    "end": 421
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 422,
    "end": 429
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 430,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 434,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": ":",
    "start": 437,
    "end": 438
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 439,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 440,
    "end": 441
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 441,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 442,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 443,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 445,
    "end": 446
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 451,
    "end": 454
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 455,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 456,
    "end": 457
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 458,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 459,
    "end": 460
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 465,
    "end": 471
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 472,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 473,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 475,
    "end": 476
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 477,
    "end": 480
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 481,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 482,
    "end": 483
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 484,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 485,
    "end": 486
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 486,
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
    "value": ";",
    "start": 494,
    "end": 495
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 496,
    "end": 499
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 500,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 503,
    "end": 504
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 505,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 507,
    "end": 508
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 508,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 509,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 510,
    "end": 511
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 514,
    "end": 522
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 523,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 525,
    "end": 526
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 526,
    "end": 527
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 528,
    "end": 535
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 536,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 540,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 541,
    "end": 542
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 542,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 543,
    "end": 544
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 545,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 546,
    "end": 547
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 548,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 549,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 551,
    "end": 552
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 552,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 553,
    "end": 554
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 555,
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
    "value": "=>",
    "start": 558,
    "end": 560
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 561,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 562,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 564,
    "end": 565
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 570,
    "end": 576
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 577,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 578,
    "end": 579
  },
  {
    "type": "Null",
    "value": "null",
    "start": 579,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 583,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 584,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 586,
    "end": 587
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 588,
    "end": 591
  },
  {
    "type": "Identifier",
    "value": "r4",
    "start": 592,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 595,
    "end": 596
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 597,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 599,
    "end": 600
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 600,
    "end": 603
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 604,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 608,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 609,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 610,
    "end": 611
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 612,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 614,
    "end": 616
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 617,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 618,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 619,
    "end": 620
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 621,
    "end": 624
  },
  {
    "type": "Identifier",
    "value": "r5",
    "start": 625,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 628,
    "end": 629
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 630,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 632,
    "end": 633
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 633,
    "end": 636
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 637,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 644,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 645,
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
    "value": "x",
    "start": 648,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 650,
    "end": 652
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 653,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 654,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 655,
    "end": 656
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 658,
    "end": 661
  },
  {
    "type": "Identifier",
    "value": "r6",
    "start": 662,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 665,
    "end": 666
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 667,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 669,
    "end": 670
  },
  {
    "type": "Null",
    "value": "null",
    "start": 670,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 674,
    "end": 675
  },
  {
    "type": "Null",
    "value": "null",
    "start": 676,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 680,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 681,
    "end": 682
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 690,
    "end": 693
  },
  {
    "type": "Identifier",
    "value": "r7",
    "start": 694,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 697,
    "end": 698
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 699,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 701,
    "end": 702
  },
  {
    "type": "Null",
    "value": "null",
    "start": 702,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 706,
    "end": 707
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 708,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 710,
    "end": 712
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 713,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 714,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 715,
    "end": 716
  }
]
```
