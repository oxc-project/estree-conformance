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
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
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
              "start": 18,
              "end": 20
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 22,
                "end": 28
              },
              "start": 20,
              "end": 28
            },
            "accessibility": null,
            "static": false,
            "start": 18,
            "end": 29
          }
        ],
        "start": 12,
        "end": 31
      },
      "declare": false,
      "start": 0,
      "end": 31
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
        "start": 39,
        "end": 40
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
            "name": "I",
            "optional": false,
            "typeAnnotation": null,
            "start": 52,
            "end": 53
          },
          "typeArguments": null,
          "start": 52,
          "end": 53
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
              "name": "id",
              "optional": false,
              "typeAnnotation": null,
              "start": 60,
              "end": 62
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 64,
                "end": 70
              },
              "start": 62,
              "end": 70
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
            "start": 60,
            "end": 71
          }
        ],
        "start": 54,
        "end": 73
      },
      "abstract": false,
      "declare": false,
      "start": 33,
      "end": 73
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
        "start": 81,
        "end": 82
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
              "start": 83,
              "end": 84
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 83,
            "end": 84
          }
        ],
        "start": 82,
        "end": 85
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
              "name": "source",
              "optional": false,
              "typeAnnotation": null,
              "start": 91,
              "end": 97
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
                  "start": 99,
                  "end": 100
                },
                "typeArguments": null,
                "start": 99,
                "end": 100
              },
              "start": 97,
              "end": 100
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
            "start": 91,
            "end": 101
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "recurse",
              "optional": false,
              "typeAnnotation": null,
              "start": 106,
              "end": 113
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
                  "start": 115,
                  "end": 116
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
                        "start": 117,
                        "end": 118
                      },
                      "typeArguments": null,
                      "start": 117,
                      "end": 118
                    }
                  ],
                  "start": 116,
                  "end": 119
                },
                "start": 115,
                "end": 119
              },
              "start": 113,
              "end": 119
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
            "start": 106,
            "end": 120
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "wrapped",
              "optional": false,
              "typeAnnotation": null,
              "start": 125,
              "end": 132
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
                  "start": 134,
                  "end": 135
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "D",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 136,
                        "end": 137
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
                              "start": 138,
                              "end": 139
                            },
                            "typeArguments": null,
                            "start": 138,
                            "end": 139
                          }
                        ],
                        "start": 137,
                        "end": 140
                      },
                      "start": 136,
                      "end": 140
                    }
                  ],
                  "start": 135,
                  "end": 141
                },
                "start": 134,
                "end": 141
              },
              "start": 132,
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
            "accessibility": null,
            "start": 125,
            "end": 141
          }
        ],
        "start": 85,
        "end": 143
      },
      "abstract": false,
      "declare": false,
      "start": 75,
      "end": 143
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null,
        "start": 154,
        "end": 155
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
              "type": "TSStringKeyword",
              "start": 159,
              "end": 165
            },
            "start": 157,
            "end": 165
          },
          "start": 156,
          "end": 165
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 168,
          "end": 174
        },
        "start": 166,
        "end": 174
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": 42,
              "raw": "42",
              "start": 184,
              "end": 186
            },
            "start": 177,
            "end": 187
          }
        ],
        "start": 175,
        "end": 189
      },
      "expression": false,
      "start": 145,
      "end": 189
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 201,
        "end": 202
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
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 222,
                "end": 223
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
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 234,
                      "end": 238
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 240,
                        "end": 246
                      },
                      "start": 238,
                      "end": 246
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
                    "start": 234,
                    "end": 247
                  }
                ],
                "start": 224,
                "end": 253
              },
              "abstract": false,
              "declare": false,
              "start": 216,
              "end": 253
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 209,
            "end": 253
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "F2",
                "optional": false,
                "typeAnnotation": null,
                "start": 275,
                "end": 277
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
                      "type": "TSNumberKeyword",
                      "start": 281,
                      "end": 287
                    },
                    "start": 279,
                    "end": 287
                  },
                  "start": 278,
                  "end": 287
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 290,
                  "end": 296
                },
                "start": 288,
                "end": 296
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 306,
                          "end": 307
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "toString",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 308,
                          "end": 316
                        },
                        "optional": false,
                        "computed": false,
                        "start": 306,
                        "end": 316
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 306,
                      "end": 318
                    },
                    "start": 299,
                    "end": 319
                  }
                ],
                "start": 297,
                "end": 321
              },
              "expression": false,
              "start": 266,
              "end": 321
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 259,
            "end": 321
          }
        ],
        "start": 203,
        "end": 323
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 191,
      "end": 323
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "aNumber",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 342,
                  "end": 348
                },
                "start": 340,
                "end": 348
              },
              "start": 333,
              "end": 348
            },
            "init": {
              "type": "Literal",
              "value": 9.9,
              "raw": "9.9",
              "start": 351,
              "end": 354
            },
            "definite": false,
            "start": 333,
            "end": 354
          }
        ],
        "declare": false,
        "start": 329,
        "end": 354
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 357,
        "end": 359
      },
      "start": 325,
      "end": 359
    },
    {
      "type": "ForStatement",
      "init": {
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
                  "start": 378,
                  "end": 384
                },
                "start": 376,
                "end": 384
              },
              "start": 369,
              "end": 384
            },
            "init": {
              "type": "Literal",
              "value": "this is a string",
              "raw": "'this is a string'",
              "start": 387,
              "end": 405
            },
            "definite": false,
            "start": 369,
            "end": 405
          }
        ],
        "declare": false,
        "start": 365,
        "end": 405
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 408,
        "end": 410
      },
      "start": 361,
      "end": 410
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "aDate",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Date",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 426,
                    "end": 430
                  },
                  "typeArguments": null,
                  "start": 426,
                  "end": 430
                },
                "start": 424,
                "end": 430
              },
              "start": 419,
              "end": 430
            },
            "init": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null,
                "start": 437,
                "end": 441
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 12,
                  "raw": "12",
                  "start": 442,
                  "end": 444
                }
              ],
              "start": 433,
              "end": 445
            },
            "definite": false,
            "start": 419,
            "end": 445
          }
        ],
        "declare": false,
        "start": 415,
        "end": 445
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 448,
        "end": 450
      },
      "start": 411,
      "end": 450
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "anObject",
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
                    "start": 469,
                    "end": 475
                  },
                  "typeArguments": null,
                  "start": 469,
                  "end": 475
                },
                "start": 467,
                "end": 475
              },
              "start": 459,
              "end": 475
            },
            "init": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 482,
                "end": 488
              },
              "typeArguments": null,
              "arguments": [],
              "start": 478,
              "end": 490
            },
            "definite": false,
            "start": 459,
            "end": 490
          }
        ],
        "declare": false,
        "start": 455,
        "end": 490
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 493,
        "end": 495
      },
      "start": 451,
      "end": 495
    },
    {
      "type": "ForStatement",
      "init": {
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
                  "start": 512,
                  "end": 515
                },
                "start": 510,
                "end": 515
              },
              "start": 505,
              "end": 515
            },
            "init": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 518,
              "end": 522
            },
            "definite": false,
            "start": 505,
            "end": 522
          }
        ],
        "declare": false,
        "start": 501,
        "end": 522
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 525,
        "end": 527
      },
      "start": 497,
      "end": 527
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "aSecondAny",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 548,
                  "end": 551
                },
                "start": 546,
                "end": 551
              },
              "start": 536,
              "end": 551
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 554,
              "end": 563
            },
            "definite": false,
            "start": 536,
            "end": 563
          }
        ],
        "declare": false,
        "start": 532,
        "end": 563
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 566,
        "end": 568
      },
      "start": 528,
      "end": 568
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "aVoid",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 584,
                  "end": 588
                },
                "start": 582,
                "end": 588
              },
              "start": 577,
              "end": 588
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 591,
              "end": 600
            },
            "definite": false,
            "start": 577,
            "end": 600
          }
        ],
        "declare": false,
        "start": 573,
        "end": 600
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 603,
        "end": 605
      },
      "start": 569,
      "end": 605
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "anInterface",
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
                    "start": 628,
                    "end": 629
                  },
                  "typeArguments": null,
                  "start": 628,
                  "end": 629
                },
                "start": 626,
                "end": 629
              },
              "start": 615,
              "end": 629
            },
            "init": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 636,
                "end": 637
              },
              "typeArguments": null,
              "arguments": [],
              "start": 632,
              "end": 639
            },
            "definite": false,
            "start": 615,
            "end": 639
          }
        ],
        "declare": false,
        "start": 611,
        "end": 639
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 642,
        "end": 644
      },
      "start": 607,
      "end": 644
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "aClass",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 661,
                    "end": 662
                  },
                  "typeArguments": null,
                  "start": 661,
                  "end": 662
                },
                "start": 659,
                "end": 662
              },
              "start": 653,
              "end": 662
            },
            "init": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 669,
                "end": 670
              },
              "typeArguments": null,
              "arguments": [],
              "start": 665,
              "end": 672
            },
            "definite": false,
            "start": 653,
            "end": 672
          }
        ],
        "declare": false,
        "start": 649,
        "end": 672
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 675,
        "end": 677
      },
      "start": 645,
      "end": 677
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "aGenericClass",
              "optional": false,
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
                    "start": 701,
                    "end": 702
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 703,
                        "end": 709
                      }
                    ],
                    "start": 702,
                    "end": 710
                  },
                  "start": 701,
                  "end": 710
                },
                "start": 699,
                "end": 710
              },
              "start": 686,
              "end": 710
            },
            "init": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null,
                "start": 717,
                "end": 718
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 719,
                    "end": 725
                  }
                ],
                "start": 718,
                "end": 726
              },
              "arguments": [],
              "start": 713,
              "end": 728
            },
            "definite": false,
            "start": 686,
            "end": 728
          }
        ],
        "declare": false,
        "start": 682,
        "end": 728
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 731,
        "end": 733
      },
      "start": 678,
      "end": 733
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "anObjectLiteral",
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
                    "start": 759,
                    "end": 760
                  },
                  "typeArguments": null,
                  "start": 759,
                  "end": 760
                },
                "start": 757,
                "end": 760
              },
              "start": 742,
              "end": 760
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
                    "name": "id",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 765,
                    "end": 767
                  },
                  "value": {
                    "type": "Literal",
                    "value": 12,
                    "raw": "12",
                    "start": 769,
                    "end": 771
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 765,
                  "end": 771
                }
              ],
              "start": 763,
              "end": 773
            },
            "definite": false,
            "start": 742,
            "end": 773
          }
        ],
        "declare": false,
        "start": 738,
        "end": 773
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 776,
        "end": 778
      },
      "start": 734,
      "end": 778
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "anOtherObjectLiteral",
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
                        "name": "id",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 811,
                        "end": 813
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 815,
                          "end": 821
                        },
                        "start": 813,
                        "end": 821
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 811,
                      "end": 821
                    }
                  ],
                  "start": 809,
                  "end": 823
                },
                "start": 807,
                "end": 823
              },
              "start": 787,
              "end": 823
            },
            "init": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 830,
                "end": 831
              },
              "typeArguments": null,
              "arguments": [],
              "start": 826,
              "end": 833
            },
            "definite": false,
            "start": 787,
            "end": 833
          }
        ],
        "declare": false,
        "start": 783,
        "end": 833
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 836,
        "end": 838
      },
      "start": 779,
      "end": 838
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "aFunction",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "F",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 866,
                    "end": 867
                  },
                  "typeArguments": null,
                  "start": 859,
                  "end": 867
                },
                "start": 857,
                "end": 867
              },
              "start": 848,
              "end": 867
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "F",
              "optional": false,
              "typeAnnotation": null,
              "start": 870,
              "end": 871
            },
            "definite": false,
            "start": 848,
            "end": 871
          }
        ],
        "declare": false,
        "start": 844,
        "end": 871
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 874,
        "end": 876
      },
      "start": 840,
      "end": 876
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "anOtherFunction",
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 906,
                          "end": 912
                        },
                        "start": 904,
                        "end": 912
                      },
                      "start": 903,
                      "end": 912
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 917,
                      "end": 923
                    },
                    "start": 914,
                    "end": 923
                  },
                  "start": 902,
                  "end": 923
                },
                "start": 900,
                "end": 923
              },
              "start": 885,
              "end": 923
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "F",
              "optional": false,
              "typeAnnotation": null,
              "start": 926,
              "end": 927
            },
            "definite": false,
            "start": 885,
            "end": 927
          }
        ],
        "declare": false,
        "start": 881,
        "end": 927
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 930,
        "end": 932
      },
      "start": 877,
      "end": 932
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "aLambda",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "F",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 957,
                    "end": 958
                  },
                  "typeArguments": null,
                  "start": 950,
                  "end": 958
                },
                "start": 948,
                "end": 958
              },
              "start": 941,
              "end": 958
            },
            "init": {
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
                  "start": 962,
                  "end": 963
                }
              ],
              "returnType": null,
              "body": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 968,
                "end": 969
              },
              "id": null,
              "generator": false,
              "start": 961,
              "end": 969
            },
            "definite": false,
            "start": 941,
            "end": 969
          }
        ],
        "declare": false,
        "start": 937,
        "end": 969
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 972,
        "end": 974
      },
      "start": 933,
      "end": 974
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "aModule",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "M",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1000,
                    "end": 1001
                  },
                  "typeArguments": null,
                  "start": 993,
                  "end": 1001
                },
                "start": 991,
                "end": 1001
              },
              "start": 984,
              "end": 1001
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 1004,
              "end": 1005
            },
            "definite": false,
            "start": 984,
            "end": 1005
          }
        ],
        "declare": false,
        "start": 980,
        "end": 1005
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1008,
        "end": 1010
      },
      "start": 976,
      "end": 1010
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "aClassInModule",
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
                      "name": "M",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1035,
                      "end": 1036
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1037,
                      "end": 1038
                    },
                    "start": 1035,
                    "end": 1038
                  },
                  "typeArguments": null,
                  "start": 1035,
                  "end": 1038
                },
                "start": 1033,
                "end": 1038
              },
              "start": 1019,
              "end": 1038
            },
            "init": {
              "type": "NewExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "M",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1045,
                  "end": 1046
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1047,
                  "end": 1048
                },
                "optional": false,
                "computed": false,
                "start": 1045,
                "end": 1048
              },
              "typeArguments": null,
              "arguments": [],
              "start": 1041,
              "end": 1050
            },
            "definite": false,
            "start": 1019,
            "end": 1050
          }
        ],
        "declare": false,
        "start": 1015,
        "end": 1050
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1053,
        "end": 1055
      },
      "start": 1011,
      "end": 1055
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "aFunctionInModule",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "M",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1090,
                      "end": 1091
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "F2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1092,
                      "end": 1094
                    },
                    "start": 1090,
                    "end": 1094
                  },
                  "typeArguments": null,
                  "start": 1083,
                  "end": 1094
                },
                "start": 1081,
                "end": 1094
              },
              "start": 1064,
              "end": 1094
            },
            "init": {
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
                  "start": 1098,
                  "end": 1099
                }
              ],
              "returnType": null,
              "body": {
                "type": "Literal",
                "value": "this is a string",
                "raw": "'this is a string'",
                "start": 1104,
                "end": 1122
              },
              "id": null,
              "generator": false,
              "start": 1097,
              "end": 1122
            },
            "definite": false,
            "start": 1064,
            "end": 1122
          }
        ],
        "declare": false,
        "start": 1060,
        "end": 1122
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1125,
        "end": 1127
      },
      "start": 1056,
      "end": 1127
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1127
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 18,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 20,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 22,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 30,
    "end": 31
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 33,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 39,
    "end": 40
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 41,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 54,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 60,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 62,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 64,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "value": "class",
    "start": 75,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 82,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "source",
    "start": 91,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 97,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 100,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "recurse",
    "start": 106,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 113,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 116,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 119,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "wrapped",
    "start": 125,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 132,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 135,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 137,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 142,
    "end": 143
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 145,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 155,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 157,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 159,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 166,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 168,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 175,
    "end": 176
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 177,
    "end": 183
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 184,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 188,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 191,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 203,
    "end": 204
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 209,
    "end": 215
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 216,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 224,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 234,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 238,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 240,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 252,
    "end": 253
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 259,
    "end": 265
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 266,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "F2",
    "start": 275,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 277,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 279,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 281,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 288,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 290,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 297,
    "end": 298
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 299,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 306,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 307,
    "end": 308
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 308,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 316,
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
    "value": ";",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 322,
    "end": 323
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 325,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 328,
    "end": 329
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 329,
    "end": 332
  },
  {
    "type": "Identifier",
    "value": "aNumber",
    "start": 333,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 340,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 342,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 349,
    "end": 350
  },
  {
    "type": "Numeric",
    "value": "9.9",
    "start": 351,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 355,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 356,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 357,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 358,
    "end": 359
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 361,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 364,
    "end": 365
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 365,
    "end": 368
  },
  {
    "type": "Identifier",
    "value": "aString",
    "start": 369,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 376,
    "end": 377
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 378,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 385,
    "end": 386
  },
  {
    "type": "String",
    "value": "'this is a string'",
    "start": 387,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 405,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 406,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 407,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 408,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 409,
    "end": 410
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 411,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 414,
    "end": 415
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 415,
    "end": 418
  },
  {
    "type": "Identifier",
    "value": "aDate",
    "start": 419,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 424,
    "end": 425
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 426,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 431,
    "end": 432
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 433,
    "end": 436
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 437,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 441,
    "end": 442
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 442,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 444,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 446,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 447,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 448,
    "end": 449
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
    "start": 454,
    "end": 455
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 455,
    "end": 458
  },
  {
    "type": "Identifier",
    "value": "anObject",
    "start": 459,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 467,
    "end": 468
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 469,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 476,
    "end": 477
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 478,
    "end": 481
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 482,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 488,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 489,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 490,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 491,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 492,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 493,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 494,
    "end": 495
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 497,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 500,
    "end": 501
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 501,
    "end": 504
  },
  {
    "type": "Identifier",
    "value": "anAny",
    "start": 505,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 510,
    "end": 511
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 512,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 516,
    "end": 517
  },
  {
    "type": "Null",
    "value": "null",
    "start": 518,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 522,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 523,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 524,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 525,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 526,
    "end": 527
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 528,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 531,
    "end": 532
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 532,
    "end": 535
  },
  {
    "type": "Identifier",
    "value": "aSecondAny",
    "start": 536,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 546,
    "end": 547
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 548,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 552,
    "end": 553
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 554,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 563,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 564,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 565,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": "{",
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
    "type": "Keyword",
    "value": "for",
    "start": 569,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 572,
    "end": 573
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 573,
    "end": 576
  },
  {
    "type": "Identifier",
    "value": "aVoid",
    "start": 577,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 582,
    "end": 583
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 584,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 589,
    "end": 590
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 591,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "type": "Punctuator",
    "value": ")",
    "start": 602,
    "end": 603
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
    "type": "Keyword",
    "value": "for",
    "start": 607,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 610,
    "end": 611
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 611,
    "end": 614
  },
  {
    "type": "Identifier",
    "value": "anInterface",
    "start": 615,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 626,
    "end": 627
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 628,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 630,
    "end": 631
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 632,
    "end": 635
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 636,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 637,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 638,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 639,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "value": "{",
    "start": 642,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 643,
    "end": 644
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 645,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 648,
    "end": 649
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 649,
    "end": 652
  },
  {
    "type": "Identifier",
    "value": "aClass",
    "start": 653,
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
    "value": "C",
    "start": 661,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 663,
    "end": 664
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 665,
    "end": 668
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 669,
    "end": 670
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 670,
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
    "value": ";",
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
    "type": "Punctuator",
    "value": ")",
    "start": 674,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 675,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 676,
    "end": 677
  },
  {
    "type": "Keyword",
    "value": "for",
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
    "type": "Keyword",
    "value": "var",
    "start": 682,
    "end": 685
  },
  {
    "type": "Identifier",
    "value": "aGenericClass",
    "start": 686,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 699,
    "end": 700
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 701,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 702,
    "end": 703
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 703,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 709,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 711,
    "end": 712
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 713,
    "end": 716
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 717,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 718,
    "end": 719
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 719,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 725,
    "end": 726
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 726,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 727,
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
    "value": ";",
    "start": 729,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 730,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 731,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 732,
    "end": 733
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 734,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 737,
    "end": 738
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 738,
    "end": 741
  },
  {
    "type": "Identifier",
    "value": "anObjectLiteral",
    "start": 742,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 757,
    "end": 758
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 759,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 761,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 763,
    "end": 764
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 765,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 767,
    "end": 768
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 769,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 772,
    "end": 773
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 773,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 774,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 775,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 776,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 777,
    "end": 778
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 779,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 782,
    "end": 783
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 783,
    "end": 786
  },
  {
    "type": "Identifier",
    "value": "anOtherObjectLiteral",
    "start": 787,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 807,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 809,
    "end": 810
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 811,
    "end": 813
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 813,
    "end": 814
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 815,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 822,
    "end": 823
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 824,
    "end": 825
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 826,
    "end": 829
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 830,
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
    "value": ")",
    "start": 832,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 833,
    "end": 834
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 834,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 835,
    "end": 836
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 836,
    "end": 837
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 837,
    "end": 838
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 840,
    "end": 843
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 843,
    "end": 844
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 844,
    "end": 847
  },
  {
    "type": "Identifier",
    "value": "aFunction",
    "start": 848,
    "end": 857
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 857,
    "end": 858
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 859,
    "end": 865
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 866,
    "end": 867
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 868,
    "end": 869
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 870,
    "end": 871
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 871,
    "end": 872
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 872,
    "end": 873
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 873,
    "end": 874
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 874,
    "end": 875
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 875,
    "end": 876
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 877,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 880,
    "end": 881
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 881,
    "end": 884
  },
  {
    "type": "Identifier",
    "value": "anOtherFunction",
    "start": 885,
    "end": 900
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 900,
    "end": 901
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 902,
    "end": 903
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 903,
    "end": 904
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 904,
    "end": 905
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 906,
    "end": 912
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 912,
    "end": 913
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 914,
    "end": 916
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 917,
    "end": 923
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 924,
    "end": 925
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 926,
    "end": 927
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 927,
    "end": 928
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 928,
    "end": 929
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 929,
    "end": 930
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 930,
    "end": 931
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 931,
    "end": 932
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
    "start": 936,
    "end": 937
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 937,
    "end": 940
  },
  {
    "type": "Identifier",
    "value": "aLambda",
    "start": 941,
    "end": 948
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 948,
    "end": 949
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 950,
    "end": 956
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 957,
    "end": 958
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 959,
    "end": 960
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 961,
    "end": 962
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 962,
    "end": 963
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 963,
    "end": 964
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 965,
    "end": 967
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 968,
    "end": 969
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 969,
    "end": 970
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 970,
    "end": 971
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 971,
    "end": 972
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 972,
    "end": 973
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 973,
    "end": 974
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 976,
    "end": 979
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 979,
    "end": 980
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 980,
    "end": 983
  },
  {
    "type": "Identifier",
    "value": "aModule",
    "start": 984,
    "end": 991
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 991,
    "end": 992
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 993,
    "end": 999
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 1000,
    "end": 1001
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1002,
    "end": 1003
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 1004,
    "end": 1005
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1005,
    "end": 1006
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1007,
    "end": 1008
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1008,
    "end": 1009
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1009,
    "end": 1010
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1011,
    "end": 1014
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1014,
    "end": 1015
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1015,
    "end": 1018
  },
  {
    "type": "Identifier",
    "value": "aClassInModule",
    "start": 1019,
    "end": 1033
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1033,
    "end": 1034
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 1035,
    "end": 1036
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1036,
    "end": 1037
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1037,
    "end": 1038
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1039,
    "end": 1040
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1041,
    "end": 1044
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 1045,
    "end": 1046
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1046,
    "end": 1047
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1047,
    "end": 1048
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1048,
    "end": 1049
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1049,
    "end": 1050
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "type": "Punctuator",
    "value": ")",
    "start": 1052,
    "end": 1053
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1053,
    "end": 1054
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1054,
    "end": 1055
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1056,
    "end": 1059
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1059,
    "end": 1060
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1060,
    "end": 1063
  },
  {
    "type": "Identifier",
    "value": "aFunctionInModule",
    "start": 1064,
    "end": 1081
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1081,
    "end": 1082
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1083,
    "end": 1089
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 1090,
    "end": 1091
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1091,
    "end": 1092
  },
  {
    "type": "Identifier",
    "value": "F2",
    "start": 1092,
    "end": 1094
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1095,
    "end": 1096
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1097,
    "end": 1098
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1098,
    "end": 1099
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1099,
    "end": 1100
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1101,
    "end": 1103
  },
  {
    "type": "String",
    "value": "'this is a string'",
    "start": 1104,
    "end": 1122
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1122,
    "end": 1123
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1123,
    "end": 1124
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1124,
    "end": 1125
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1125,
    "end": 1126
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1126,
    "end": 1127
  }
]
```
