__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null,
        "start": 49,
        "end": 50
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 51,
        "end": 54
      },
      "declare": false,
      "start": 39,
      "end": 54
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Class",
        "optional": false,
        "typeAnnotation": null,
        "start": 61,
        "end": 66
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
            "name": "F",
            "optional": false,
            "typeAnnotation": null,
            "start": 78,
            "end": 79
          },
          "typeArguments": null,
          "start": 78,
          "end": 79
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 86,
              "end": 97
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
                "start": 100,
                "end": 103
              },
              "expression": false,
              "start": 97,
              "end": 103
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 86,
            "end": 103
          }
        ],
        "start": 80,
        "end": 105
      },
      "abstract": false,
      "declare": false,
      "start": 55,
      "end": 105
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SubClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 113,
        "end": 121
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Class",
        "optional": false,
        "typeAnnotation": null,
        "start": 130,
        "end": 135
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 142,
              "end": 145
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 147,
                "end": 154
              },
              "start": 145,
              "end": 154
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
            "start": 142,
            "end": 155
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 160,
              "end": 171
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 176,
                        "end": 181
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 176,
                      "end": 183
                    },
                    "directive": null,
                    "start": 176,
                    "end": 184
                  }
                ],
                "start": 174,
                "end": 186
              },
              "expression": false,
              "start": 171,
              "end": 186
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 160,
            "end": 186
          }
        ],
        "start": 136,
        "end": 188
      },
      "abstract": false,
      "declare": false,
      "start": 107,
      "end": 188
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 196,
        "end": 197
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
            "name": "F",
            "optional": false,
            "typeAnnotation": null,
            "start": 209,
            "end": 210
          },
          "typeArguments": null,
          "start": 209,
          "end": 210
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 217,
              "end": 220
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 222,
                "end": 229
              },
              "start": 220,
              "end": 229
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
            "start": 217,
            "end": 229
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 234,
              "end": 245
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
                "start": 248,
                "end": 251
              },
              "expression": false,
              "start": 245,
              "end": 251
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 234,
            "end": 251
          }
        ],
        "start": 211,
        "end": 253
      },
      "abstract": false,
      "declare": false,
      "start": 190,
      "end": 253
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SubD",
        "optional": false,
        "typeAnnotation": null,
        "start": 261,
        "end": 265
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 274,
        "end": 275
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
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 282,
              "end": 285
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 287,
                "end": 293
              },
              "start": 285,
              "end": 293
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
            "start": 282,
            "end": 293
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 298,
              "end": 309
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 322,
                        "end": 327
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 322,
                      "end": 329
                    },
                    "directive": null,
                    "start": 322,
                    "end": 330
                  }
                ],
                "start": 312,
                "end": 336
              },
              "expression": false,
              "start": 309,
              "end": 336
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 298,
            "end": 336
          }
        ],
        "start": 276,
        "end": 338
      },
      "abstract": false,
      "declare": false,
      "start": 255,
      "end": 338
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "d0",
        "optional": false,
        "typeAnnotation": null,
        "start": 350,
        "end": 352
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
              "start": 353,
              "end": 354
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Class",
                "optional": false,
                "typeAnnotation": null,
                "start": 363,
                "end": 368
              },
              "typeArguments": null,
              "start": 363,
              "end": 368
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 353,
            "end": 368
          }
        ],
        "start": 352,
        "end": 369
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 371,
                  "end": 372
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 371,
                  "end": 372
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 371,
                "end": 372
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 370,
            "end": 373
          },
          "right": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 378,
                  "end": 379
                },
                "value": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Class",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 385,
                    "end": 390
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 381,
                  "end": 392
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 378,
                "end": 392
              }
            ],
            "start": 376,
            "end": 394
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 370,
          "end": 394
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 396,
        "end": 399
      },
      "expression": false,
      "start": 341,
      "end": 399
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "d1",
        "optional": false,
        "typeAnnotation": null,
        "start": 409,
        "end": 411
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
              "start": 412,
              "end": 413
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "F",
                "optional": false,
                "typeAnnotation": null,
                "start": 422,
                "end": 423
              },
              "typeArguments": null,
              "start": 422,
              "end": 423
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 412,
            "end": 423
          }
        ],
        "start": 411,
        "end": 424
      },
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 426,
                "end": 427
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 426,
                "end": 427
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 426,
              "end": 427
            }
          ],
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 432,
                    "end": 433
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "F",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 435,
                        "end": 436
                      },
                      "typeArguments": null,
                      "start": 435,
                      "end": 436
                    },
                    "start": 433,
                    "end": 436
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 432,
                  "end": 436
                }
              ],
              "start": 430,
              "end": 438
            },
            "start": 428,
            "end": 438
          },
          "start": 425,
          "end": 438
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 440,
        "end": 443
      },
      "expression": false,
      "start": 400,
      "end": 443
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "d2",
        "optional": false,
        "typeAnnotation": null,
        "start": 453,
        "end": 455
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
              "start": 456,
              "end": 457
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Class",
                "optional": false,
                "typeAnnotation": null,
                "start": 466,
                "end": 471
              },
              "typeArguments": null,
              "start": 466,
              "end": 471
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 456,
            "end": 471
          }
        ],
        "start": 455,
        "end": 472
      },
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 474,
                "end": 475
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 474,
                "end": 475
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 474,
              "end": 475
            }
          ],
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 480,
                    "end": 481
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Class",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 483,
                        "end": 488
                      },
                      "typeArguments": null,
                      "start": 483,
                      "end": 488
                    },
                    "start": 481,
                    "end": 488
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 480,
                  "end": 488
                }
              ],
              "start": 478,
              "end": 490
            },
            "start": 476,
            "end": 490
          },
          "start": 473,
          "end": 490
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 492,
        "end": 495
      },
      "expression": false,
      "start": 444,
      "end": 495
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "d3",
        "optional": false,
        "typeAnnotation": null,
        "start": 505,
        "end": 507
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
              "start": 508,
              "end": 509
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null,
                "start": 518,
                "end": 519
              },
              "typeArguments": null,
              "start": 518,
              "end": 519
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 508,
            "end": 519
          }
        ],
        "start": 507,
        "end": 520
      },
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 522,
                "end": 523
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 522,
                "end": 523
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 522,
              "end": 523
            }
          ],
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
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 528,
                    "end": 529
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "D",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 531,
                        "end": 532
                      },
                      "typeArguments": null,
                      "start": 531,
                      "end": 532
                    },
                    "start": 529,
                    "end": 532
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 528,
                  "end": 532
                }
              ],
              "start": 526,
              "end": 534
            },
            "start": 524,
            "end": 534
          },
          "start": 521,
          "end": 534
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 536,
        "end": 539
      },
      "expression": false,
      "start": 496,
      "end": 539
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "d4",
        "optional": false,
        "typeAnnotation": null,
        "start": 549,
        "end": 551
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
              "start": 552,
              "end": 553
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null,
                "start": 562,
                "end": 563
              },
              "typeArguments": null,
              "start": 562,
              "end": 563
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 552,
            "end": 563
          }
        ],
        "start": 551,
        "end": 564
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 566,
                  "end": 567
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 566,
                  "end": 567
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 566,
                "end": 567
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 565,
            "end": 568
          },
          "right": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 573,
                  "end": 574
                },
                "value": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "D",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 580,
                    "end": 581
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 576,
                  "end": 583
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 573,
                "end": 583
              }
            ],
            "start": 571,
            "end": 585
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 565,
          "end": 585
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 587,
        "end": 590
      },
      "expression": false,
      "start": 540,
      "end": 590
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
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 596,
            "end": 599
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Class",
              "optional": false,
              "typeAnnotation": null,
              "start": 606,
              "end": 611
            },
            "typeArguments": null,
            "arguments": [],
            "start": 602,
            "end": 613
          },
          "definite": false,
          "start": 596,
          "end": 613
        }
      ],
      "declare": false,
      "start": 592,
      "end": 614
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "d0",
          "optional": false,
          "typeAnnotation": null,
          "start": 615,
          "end": 617
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 620,
                  "end": 621
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 623,
                  "end": 624
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 620,
                "end": 624
              }
            ],
            "start": 618,
            "end": 626
          }
        ],
        "optional": false,
        "start": 615,
        "end": 627
      },
      "directive": null,
      "start": 615,
      "end": 628
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "d0",
          "optional": false,
          "typeAnnotation": null,
          "start": 629,
          "end": 631
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 634,
                  "end": 635
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "start": 637,
                  "end": 639
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 634,
                "end": 639
              }
            ],
            "start": 632,
            "end": 641
          }
        ],
        "optional": false,
        "start": 629,
        "end": 642
      },
      "directive": null,
      "start": 629,
      "end": 643
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "d0",
          "optional": false,
          "typeAnnotation": null,
          "start": 644,
          "end": 646
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 649,
                  "end": 650
                },
                "value": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "\"string\"",
                  "start": 652,
                  "end": 660
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 649,
                "end": 660
              }
            ],
            "start": 647,
            "end": 662
          }
        ],
        "optional": false,
        "start": 644,
        "end": 663
      },
      "directive": null,
      "start": 644,
      "end": 664
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "d1",
          "optional": false,
          "typeAnnotation": null,
          "start": 666,
          "end": 668
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 671,
                  "end": 672
                },
                "value": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Class",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 678,
                    "end": 683
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 674,
                  "end": 685
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 671,
                "end": 685
              }
            ],
            "start": 669,
            "end": 687
          }
        ],
        "optional": false,
        "start": 666,
        "end": 688
      },
      "directive": null,
      "start": 666,
      "end": 689
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "d1",
          "optional": false,
          "typeAnnotation": null,
          "start": 690,
          "end": 692
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 695,
                  "end": 696
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "start": 698,
                  "end": 700
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 695,
                "end": 700
              }
            ],
            "start": 693,
            "end": 702
          }
        ],
        "optional": false,
        "start": 690,
        "end": 703
      },
      "directive": null,
      "start": 690,
      "end": 704
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "d1",
          "optional": false,
          "typeAnnotation": null,
          "start": 705,
          "end": 707
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 710,
                  "end": 711
                },
                "value": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "\"string\"",
                  "start": 713,
                  "end": 721
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 710,
                "end": 721
              }
            ],
            "start": 708,
            "end": 723
          }
        ],
        "optional": false,
        "start": 705,
        "end": 724
      },
      "directive": null,
      "start": 705,
      "end": 725
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "d2",
          "optional": false,
          "typeAnnotation": null,
          "start": 727,
          "end": 729
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 732,
                  "end": 733
                },
                "value": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SubClass",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 739,
                    "end": 747
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 735,
                  "end": 749
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 732,
                "end": 749
              }
            ],
            "start": 730,
            "end": 751
          }
        ],
        "optional": false,
        "start": 727,
        "end": 752
      },
      "directive": null,
      "start": 727,
      "end": 753
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "d2",
          "optional": false,
          "typeAnnotation": null,
          "start": 754,
          "end": 756
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 759,
                  "end": 760
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "start": 762,
                  "end": 764
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 759,
                "end": 764
              }
            ],
            "start": 757,
            "end": 766
          }
        ],
        "optional": false,
        "start": 754,
        "end": 767
      },
      "directive": null,
      "start": 754,
      "end": 768
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "d3",
          "optional": false,
          "typeAnnotation": null,
          "start": 770,
          "end": 772
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 775,
                  "end": 776
                },
                "value": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SubD",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 782,
                    "end": 786
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 778,
                  "end": 788
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 775,
                "end": 788
              }
            ],
            "start": 773,
            "end": 790
          }
        ],
        "optional": false,
        "start": 770,
        "end": 791
      },
      "directive": null,
      "start": 770,
      "end": 792
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "d3",
          "optional": false,
          "typeAnnotation": null,
          "start": 793,
          "end": 795
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 798,
                  "end": 799
                },
                "value": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SubClass",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 805,
                    "end": 813
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 801,
                  "end": 815
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 798,
                "end": 815
              }
            ],
            "start": 796,
            "end": 817
          }
        ],
        "optional": false,
        "start": 793,
        "end": 818
      },
      "directive": null,
      "start": 793,
      "end": 819
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "d3",
          "optional": false,
          "typeAnnotation": null,
          "start": 829,
          "end": 831
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 834,
                  "end": 835
                },
                "value": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Class",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 841,
                    "end": 846
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 837,
                  "end": 848
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 834,
                "end": 848
              }
            ],
            "start": 832,
            "end": 850
          }
        ],
        "optional": false,
        "start": 829,
        "end": 851
      },
      "directive": null,
      "start": 829,
      "end": 852
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "d3",
          "optional": false,
          "typeAnnotation": null,
          "start": 853,
          "end": 855
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [],
            "start": 856,
            "end": 858
          }
        ],
        "optional": false,
        "start": 853,
        "end": 859
      },
      "directive": null,
      "start": 853,
      "end": 860
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "d3",
          "optional": false,
          "typeAnnotation": null,
          "start": 861,
          "end": 863
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 866,
                  "end": 867
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 869,
                  "end": 870
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 866,
                "end": 870
              }
            ],
            "start": 864,
            "end": 872
          }
        ],
        "optional": false,
        "start": 861,
        "end": 873
      },
      "directive": null,
      "start": 861,
      "end": 874
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "d3",
          "optional": false,
          "typeAnnotation": null,
          "start": 875,
          "end": 877
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 880,
                  "end": 881
                },
                "value": {
                  "type": "Literal",
                  "value": "world",
                  "raw": "\"world\"",
                  "start": 883,
                  "end": 890
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 880,
                "end": 890
              }
            ],
            "start": 878,
            "end": 892
          }
        ],
        "optional": false,
        "start": 875,
        "end": 893
      },
      "directive": null,
      "start": 875,
      "end": 894
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 39,
  "end": 894
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 39,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 53,
    "end": 54
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 55,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "Class",
    "start": 61,
    "end": 66
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 67,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "F",
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
    "type": "Identifier",
    "value": "constructor",
    "start": 86,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 104,
    "end": 105
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 107,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "SubClass",
    "start": 113,
    "end": 121
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 122,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "Class",
    "start": 130,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 142,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 145,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 147,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 154,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 160,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 174,
    "end": 175
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 176,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 187,
    "end": 188
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 190,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 196,
    "end": 197
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 198,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "F",
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
    "type": "Identifier",
    "value": "foo",
    "start": 217,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 220,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 222,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 234,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 245,
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
    "type": "Punctuator",
    "value": "}",
    "start": 250,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 252,
    "end": 253
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 255,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "SubD",
    "start": 261,
    "end": 265
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 266,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 274,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 276,
    "end": 277
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 282,
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
    "value": "number",
    "start": 287,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 298,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 309,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 312,
    "end": 313
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 322,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 327,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 335,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 337,
    "end": 338
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 341,
    "end": 349
  },
  {
    "type": "Identifier",
    "value": "d0",
    "start": 350,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 352,
    "end": 353
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 353,
    "end": 354
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 355,
    "end": 362
  },
  {
    "type": "Identifier",
    "value": "Class",
    "start": 363,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 368,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 369,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 370,
    "end": 371
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 371,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 374,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 376,
    "end": 377
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 378,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 379,
    "end": 380
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 381,
    "end": 384
  },
  {
    "type": "Identifier",
    "value": "Class",
    "start": 385,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 390,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 391,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 393,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 394,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 396,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 398,
    "end": 399
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 400,
    "end": 408
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 409,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 411,
    "end": 412
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 412,
    "end": 413
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 414,
    "end": 421
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 422,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 423,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 424,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 425,
    "end": 426
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 426,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 427,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 428,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 430,
    "end": 431
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 432,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 433,
    "end": 434
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 435,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 437,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 438,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 440,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 442,
    "end": 443
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 444,
    "end": 452
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 453,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 455,
    "end": 456
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 456,
    "end": 457
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 458,
    "end": 465
  },
  {
    "type": "Identifier",
    "value": "Class",
    "start": 466,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 471,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 472,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 473,
    "end": 474
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 474,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 475,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 476,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 478,
    "end": 479
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 480,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 481,
    "end": 482
  },
  {
    "type": "Identifier",
    "value": "Class",
    "start": 483,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 489,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 490,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 492,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 494,
    "end": 495
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 496,
    "end": 504
  },
  {
    "type": "Identifier",
    "value": "d3",
    "start": 505,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 507,
    "end": 508
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 508,
    "end": 509
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 510,
    "end": 517
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 518,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 519,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 520,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 521,
    "end": 522
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 522,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 523,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 524,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 526,
    "end": 527
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 528,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 529,
    "end": 530
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 531,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 533,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 534,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 536,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 538,
    "end": 539
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 540,
    "end": 548
  },
  {
    "type": "Identifier",
    "value": "d4",
    "start": 549,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 551,
    "end": 552
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 552,
    "end": 553
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 554,
    "end": 561
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 562,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 563,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 564,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 565,
    "end": 566
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 566,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 567,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "type": "Identifier",
    "value": "y",
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
    "value": "new",
    "start": 576,
    "end": 579
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 580,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 581,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 582,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 584,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 585,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 587,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 589,
    "end": 590
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 592,
    "end": 595
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 596,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 600,
    "end": 601
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 602,
    "end": 605
  },
  {
    "type": "Identifier",
    "value": "Class",
    "start": 606,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 611,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 612,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 613,
    "end": 614
  },
  {
    "type": "Identifier",
    "value": "d0",
    "start": 615,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 617,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 618,
    "end": 619
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 620,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 621,
    "end": 622
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "type": "Punctuator",
    "value": ")",
    "start": 626,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 627,
    "end": 628
  },
  {
    "type": "Identifier",
    "value": "d0",
    "start": 629,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 631,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 632,
    "end": 633
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 634,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": ":",
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
    "start": 638,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 640,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 641,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 642,
    "end": 643
  },
  {
    "type": "Identifier",
    "value": "d0",
    "start": 644,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 646,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 647,
    "end": 648
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 649,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 650,
    "end": 651
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 652,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 661,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 662,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 663,
    "end": 664
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 666,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 668,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 669,
    "end": 670
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 671,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 672,
    "end": 673
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 674,
    "end": 677
  },
  {
    "type": "Identifier",
    "value": "Class",
    "start": 678,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 683,
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
    "value": "}",
    "start": 686,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 687,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 688,
    "end": 689
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 690,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 692,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 693,
    "end": 694
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 695,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 696,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 698,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 699,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 701,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 702,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 703,
    "end": 704
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 705,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 707,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 708,
    "end": 709
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 710,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 711,
    "end": 712
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 713,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 722,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 723,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 724,
    "end": 725
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 727,
    "end": 729
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 729,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 730,
    "end": 731
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 732,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 733,
    "end": 734
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 735,
    "end": 738
  },
  {
    "type": "Identifier",
    "value": "SubClass",
    "start": 739,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 747,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 748,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 750,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 751,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 752,
    "end": 753
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 754,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 756,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 757,
    "end": 758
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 759,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 760,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 762,
    "end": 763
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 763,
    "end": 764
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 765,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 766,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 767,
    "end": 768
  },
  {
    "type": "Identifier",
    "value": "d3",
    "start": 770,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 772,
    "end": 773
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 773,
    "end": 774
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 775,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 776,
    "end": 777
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 778,
    "end": 781
  },
  {
    "type": "Identifier",
    "value": "SubD",
    "start": 782,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 786,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 787,
    "end": 788
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 789,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 790,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 791,
    "end": 792
  },
  {
    "type": "Identifier",
    "value": "d3",
    "start": 793,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 795,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 796,
    "end": 797
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "type": "Keyword",
    "value": "new",
    "start": 801,
    "end": 804
  },
  {
    "type": "Identifier",
    "value": "SubClass",
    "start": 805,
    "end": 813
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 813,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 814,
    "end": 815
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 816,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 817,
    "end": 818
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 818,
    "end": 819
  },
  {
    "type": "Identifier",
    "value": "d3",
    "start": 829,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 831,
    "end": 832
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 832,
    "end": 833
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 834,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 835,
    "end": 836
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 837,
    "end": 840
  },
  {
    "type": "Identifier",
    "value": "Class",
    "start": 841,
    "end": 846
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 846,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 847,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 849,
    "end": 850
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 850,
    "end": 851
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 851,
    "end": 852
  },
  {
    "type": "Identifier",
    "value": "d3",
    "start": 853,
    "end": 855
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 855,
    "end": 856
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 856,
    "end": 857
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 857,
    "end": 858
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 858,
    "end": 859
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 859,
    "end": 860
  },
  {
    "type": "Identifier",
    "value": "d3",
    "start": 861,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 863,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 864,
    "end": 865
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 866,
    "end": 867
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 867,
    "end": 868
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 869,
    "end": 870
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 871,
    "end": 872
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 872,
    "end": 873
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 873,
    "end": 874
  },
  {
    "type": "Identifier",
    "value": "d3",
    "start": 875,
    "end": 877
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 877,
    "end": 878
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 878,
    "end": 879
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 880,
    "end": 881
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 881,
    "end": 882
  },
  {
    "type": "String",
    "value": "\"world\"",
    "start": 883,
    "end": 890
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 891,
    "end": 892
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 892,
    "end": 893
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 893,
    "end": 894
  }
]
```
