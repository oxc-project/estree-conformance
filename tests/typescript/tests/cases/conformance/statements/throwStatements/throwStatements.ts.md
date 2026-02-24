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
        "start": 24,
        "end": 25
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
              "start": 32,
              "end": 34
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 36,
                "end": 42
              },
              "start": 34,
              "end": 42
            },
            "accessibility": null,
            "static": false,
            "start": 32,
            "end": 43
          }
        ],
        "start": 26,
        "end": 45
      },
      "declare": false,
      "start": 14,
      "end": 45
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
        "start": 53,
        "end": 54
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
            "start": 66,
            "end": 67
          },
          "typeArguments": null,
          "start": 66,
          "end": 67
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
              "start": 74,
              "end": 76
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 78,
                "end": 84
              },
              "start": 76,
              "end": 84
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
            "start": 74,
            "end": 85
          }
        ],
        "start": 68,
        "end": 87
      },
      "abstract": false,
      "declare": false,
      "start": 47,
      "end": 87
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
        "start": 95,
        "end": 96
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
              "start": 97,
              "end": 98
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 97,
            "end": 98
          }
        ],
        "start": 96,
        "end": 99
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
              "start": 105,
              "end": 111
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
                  "start": 113,
                  "end": 114
                },
                "typeArguments": null,
                "start": 113,
                "end": 114
              },
              "start": 111,
              "end": 114
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
            "start": 105,
            "end": 115
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
              "start": 120,
              "end": 127
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
                  "start": 129,
                  "end": 130
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
                        "start": 131,
                        "end": 132
                      },
                      "typeArguments": null,
                      "start": 131,
                      "end": 132
                    }
                  ],
                  "start": 130,
                  "end": 133
                },
                "start": 129,
                "end": 133
              },
              "start": 127,
              "end": 133
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
            "start": 120,
            "end": 134
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
              "start": 139,
              "end": 146
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
                  "start": 148,
                  "end": 149
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
                        "start": 150,
                        "end": 151
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
                              "start": 152,
                              "end": 153
                            },
                            "typeArguments": null,
                            "start": 152,
                            "end": 153
                          }
                        ],
                        "start": 151,
                        "end": 154
                      },
                      "start": 150,
                      "end": 154
                    }
                  ],
                  "start": 149,
                  "end": 155
                },
                "start": 148,
                "end": 155
              },
              "start": 146,
              "end": 155
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
            "start": 139,
            "end": 155
          }
        ],
        "start": 99,
        "end": 157
      },
      "abstract": false,
      "declare": false,
      "start": 89,
      "end": 157
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null,
        "start": 168,
        "end": 169
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
              "start": 173,
              "end": 179
            },
            "start": 171,
            "end": 179
          },
          "start": 170,
          "end": 179
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 182,
          "end": 188
        },
        "start": 180,
        "end": 188
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
              "start": 198,
              "end": 200
            },
            "start": 191,
            "end": 201
          }
        ],
        "start": 189,
        "end": 203
      },
      "expression": false,
      "start": 159,
      "end": 203
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 215,
        "end": 216
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
                "start": 236,
                "end": 237
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
                      "start": 248,
                      "end": 252
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 254,
                        "end": 260
                      },
                      "start": 252,
                      "end": 260
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
                    "start": 248,
                    "end": 261
                  }
                ],
                "start": 238,
                "end": 267
              },
              "abstract": false,
              "declare": false,
              "start": 230,
              "end": 267
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 223,
            "end": 267
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
                "start": 289,
                "end": 291
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
                      "start": 295,
                      "end": 301
                    },
                    "start": 293,
                    "end": 301
                  },
                  "start": 292,
                  "end": 301
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 304,
                  "end": 310
                },
                "start": 302,
                "end": 310
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
                          "start": 320,
                          "end": 321
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "toString",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 322,
                          "end": 330
                        },
                        "optional": false,
                        "computed": false,
                        "start": 320,
                        "end": 330
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 320,
                      "end": 332
                    },
                    "start": 313,
                    "end": 333
                  }
                ],
                "start": 311,
                "end": 335
              },
              "expression": false,
              "start": 280,
              "end": 335
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 273,
            "end": 335
          }
        ],
        "start": 217,
        "end": 337
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 205,
      "end": 337
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
            "name": "aNumber",
            "optional": false,
            "typeAnnotation": null,
            "start": 343,
            "end": 350
          },
          "init": {
            "type": "Literal",
            "value": 9.9,
            "raw": "9.9",
            "start": 353,
            "end": 356
          },
          "definite": false,
          "start": 343,
          "end": 356
        }
      ],
      "declare": false,
      "start": 339,
      "end": 357
    },
    {
      "type": "ThrowStatement",
      "argument": {
        "type": "Identifier",
        "decorators": [],
        "name": "aNumber",
        "optional": false,
        "typeAnnotation": null,
        "start": 364,
        "end": 371
      },
      "start": 358,
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
            "name": "aString",
            "optional": false,
            "typeAnnotation": null,
            "start": 377,
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
          "start": 377,
          "end": 405
        }
      ],
      "declare": false,
      "start": 373,
      "end": 406
    },
    {
      "type": "ThrowStatement",
      "argument": {
        "type": "Identifier",
        "decorators": [],
        "name": "aString",
        "optional": false,
        "typeAnnotation": null,
        "start": 413,
        "end": 420
      },
      "start": 407,
      "end": 421
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
            "name": "aDate",
            "optional": false,
            "typeAnnotation": null,
            "start": 426,
            "end": 431
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Date",
              "optional": false,
              "typeAnnotation": null,
              "start": 438,
              "end": 442
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 12,
                "raw": "12",
                "start": 443,
                "end": 445
              }
            ],
            "start": 434,
            "end": 446
          },
          "definite": false,
          "start": 426,
          "end": 446
        }
      ],
      "declare": false,
      "start": 422,
      "end": 447
    },
    {
      "type": "ThrowStatement",
      "argument": {
        "type": "Identifier",
        "decorators": [],
        "name": "aDate",
        "optional": false,
        "typeAnnotation": null,
        "start": 454,
        "end": 459
      },
      "start": 448,
      "end": 460
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
            "name": "anObject",
            "optional": false,
            "typeAnnotation": null,
            "start": 465,
            "end": 473
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Object",
              "optional": false,
              "typeAnnotation": null,
              "start": 480,
              "end": 486
            },
            "typeArguments": null,
            "arguments": [],
            "start": 476,
            "end": 488
          },
          "definite": false,
          "start": 465,
          "end": 488
        }
      ],
      "declare": false,
      "start": 461,
      "end": 489
    },
    {
      "type": "ThrowStatement",
      "argument": {
        "type": "Identifier",
        "decorators": [],
        "name": "anObject",
        "optional": false,
        "typeAnnotation": null,
        "start": 496,
        "end": 504
      },
      "start": 490,
      "end": 505
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
            "typeAnnotation": null,
            "start": 511,
            "end": 516
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 519,
            "end": 523
          },
          "definite": false,
          "start": 511,
          "end": 523
        }
      ],
      "declare": false,
      "start": 507,
      "end": 524
    },
    {
      "type": "ThrowStatement",
      "argument": {
        "type": "Identifier",
        "decorators": [],
        "name": "anAny",
        "optional": false,
        "typeAnnotation": null,
        "start": 531,
        "end": 536
      },
      "start": 525,
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
            "name": "anOtherAny",
            "optional": false,
            "typeAnnotation": null,
            "start": 542,
            "end": 552
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 556,
              "end": 559
            },
            "expression": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 565,
                "end": 566
              },
              "typeArguments": null,
              "arguments": [],
              "start": 561,
              "end": 568
            },
            "start": 555,
            "end": 568
          },
          "definite": false,
          "start": 542,
          "end": 568
        }
      ],
      "declare": false,
      "start": 538,
      "end": 569
    },
    {
      "type": "ThrowStatement",
      "argument": {
        "type": "Identifier",
        "decorators": [],
        "name": "anOtherAny",
        "optional": false,
        "typeAnnotation": null,
        "start": 576,
        "end": 586
      },
      "start": 570,
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
            "name": "anUndefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 592,
            "end": 603
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 606,
            "end": 615
          },
          "definite": false,
          "start": 592,
          "end": 615
        }
      ],
      "declare": false,
      "start": 588,
      "end": 616
    },
    {
      "type": "ThrowStatement",
      "argument": {
        "type": "Identifier",
        "decorators": [],
        "name": "anUndefined",
        "optional": false,
        "typeAnnotation": null,
        "start": 623,
        "end": 634
      },
      "start": 617,
      "end": 635
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
            "name": "aClass",
            "optional": false,
            "typeAnnotation": null,
            "start": 641,
            "end": 647
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 654,
              "end": 655
            },
            "typeArguments": null,
            "arguments": [],
            "start": 650,
            "end": 657
          },
          "definite": false,
          "start": 641,
          "end": 657
        }
      ],
      "declare": false,
      "start": 637,
      "end": 658
    },
    {
      "type": "ThrowStatement",
      "argument": {
        "type": "Identifier",
        "decorators": [],
        "name": "aClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 665,
        "end": 671
      },
      "start": 659,
      "end": 672
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
            "name": "aGenericClass",
            "optional": false,
            "typeAnnotation": null,
            "start": 677,
            "end": 690
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null,
              "start": 697,
              "end": 698
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 699,
                  "end": 705
                }
              ],
              "start": 698,
              "end": 706
            },
            "arguments": [],
            "start": 693,
            "end": 708
          },
          "definite": false,
          "start": 677,
          "end": 708
        }
      ],
      "declare": false,
      "start": 673,
      "end": 709
    },
    {
      "type": "ThrowStatement",
      "argument": {
        "type": "Identifier",
        "decorators": [],
        "name": "aGenericClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 716,
        "end": 729
      },
      "start": 710,
      "end": 730
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
            "name": "anObjectLiteral",
            "optional": false,
            "typeAnnotation": null,
            "start": 735,
            "end": 750
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
                  "start": 755,
                  "end": 757
                },
                "value": {
                  "type": "Literal",
                  "value": 12,
                  "raw": "12",
                  "start": 759,
                  "end": 761
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 755,
                "end": 761
              }
            ],
            "start": 753,
            "end": 763
          },
          "definite": false,
          "start": 735,
          "end": 763
        }
      ],
      "declare": false,
      "start": 731,
      "end": 764
    },
    {
      "type": "ThrowStatement",
      "argument": {
        "type": "Identifier",
        "decorators": [],
        "name": "anObjectLiteral",
        "optional": false,
        "typeAnnotation": null,
        "start": 771,
        "end": 786
      },
      "start": 765,
      "end": 787
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
            "name": "aFunction",
            "optional": false,
            "typeAnnotation": null,
            "start": 793,
            "end": 802
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "F",
            "optional": false,
            "typeAnnotation": null,
            "start": 805,
            "end": 806
          },
          "definite": false,
          "start": 793,
          "end": 806
        }
      ],
      "declare": false,
      "start": 789,
      "end": 807
    },
    {
      "type": "ThrowStatement",
      "argument": {
        "type": "Identifier",
        "decorators": [],
        "name": "aFunction",
        "optional": false,
        "typeAnnotation": null,
        "start": 814,
        "end": 823
      },
      "start": 808,
      "end": 824
    },
    {
      "type": "ThrowStatement",
      "argument": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "aFunction",
          "optional": false,
          "typeAnnotation": null,
          "start": 831,
          "end": 840
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 841,
            "end": 843
          }
        ],
        "optional": false,
        "start": 831,
        "end": 844
      },
      "start": 825,
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
            "name": "aLambda",
            "optional": false,
            "typeAnnotation": null,
            "start": 850,
            "end": 857
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
                "start": 861,
                "end": 862
              }
            ],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 867,
              "end": 868
            },
            "id": null,
            "generator": false,
            "start": 860,
            "end": 868
          },
          "definite": false,
          "start": 850,
          "end": 868
        }
      ],
      "declare": false,
      "start": 846,
      "end": 869
    },
    {
      "type": "ThrowStatement",
      "argument": {
        "type": "Identifier",
        "decorators": [],
        "name": "aLambda",
        "optional": false,
        "typeAnnotation": null,
        "start": 876,
        "end": 883
      },
      "start": 870,
      "end": 884
    },
    {
      "type": "ThrowStatement",
      "argument": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "aLambda",
          "optional": false,
          "typeAnnotation": null,
          "start": 891,
          "end": 898
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 899,
            "end": 900
          }
        ],
        "optional": false,
        "start": 891,
        "end": 901
      },
      "start": 885,
      "end": 902
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
            "name": "aModule",
            "optional": false,
            "typeAnnotation": null,
            "start": 908,
            "end": 915
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 918,
            "end": 919
          },
          "definite": false,
          "start": 908,
          "end": 919
        }
      ],
      "declare": false,
      "start": 904,
      "end": 920
    },
    {
      "type": "ThrowStatement",
      "argument": {
        "type": "Identifier",
        "decorators": [],
        "name": "aModule",
        "optional": false,
        "typeAnnotation": null,
        "start": 927,
        "end": 934
      },
      "start": 921,
      "end": 935
    },
    {
      "type": "ThrowStatement",
      "argument": {
        "type": "UnaryExpression",
        "operator": "typeof",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "M",
          "optional": false,
          "typeAnnotation": null,
          "start": 949,
          "end": 950
        },
        "prefix": true,
        "start": 942,
        "end": 950
      },
      "start": 936,
      "end": 951
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
            "name": "aClassInModule",
            "optional": false,
            "typeAnnotation": null,
            "start": 956,
            "end": 970
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
                "start": 977,
                "end": 978
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 979,
                "end": 980
              },
              "optional": false,
              "computed": false,
              "start": 977,
              "end": 980
            },
            "typeArguments": null,
            "arguments": [],
            "start": 973,
            "end": 982
          },
          "definite": false,
          "start": 956,
          "end": 982
        }
      ],
      "declare": false,
      "start": 952,
      "end": 983
    },
    {
      "type": "ThrowStatement",
      "argument": {
        "type": "Identifier",
        "decorators": [],
        "name": "aClassInModule",
        "optional": false,
        "typeAnnotation": null,
        "start": 990,
        "end": 1004
      },
      "start": 984,
      "end": 1005
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
            "name": "aFunctionInModule",
            "optional": false,
            "typeAnnotation": null,
            "start": 1010,
            "end": 1027
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 1030,
              "end": 1031
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "F2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1032,
              "end": 1034
            },
            "optional": false,
            "computed": false,
            "start": 1030,
            "end": 1034
          },
          "definite": false,
          "start": 1010,
          "end": 1034
        }
      ],
      "declare": false,
      "start": 1006,
      "end": 1035
    },
    {
      "type": "ThrowStatement",
      "argument": {
        "type": "Identifier",
        "decorators": [],
        "name": "aFunctionInModule",
        "optional": false,
        "typeAnnotation": null,
        "start": 1042,
        "end": 1059
      },
      "start": 1036,
      "end": 1060
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 1119,
            "end": 1120
          },
          "init": null,
          "definite": false,
          "start": 1119,
          "end": 1120
        }
      ],
      "declare": false,
      "start": 1115,
      "end": 1121
    },
    {
      "type": "ThrowStatement",
      "argument": {
        "type": "Identifier",
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null,
        "start": 1128,
        "end": 1129
      },
      "start": 1122,
      "end": 1130
    },
    {
      "type": "ThrowStatement",
      "argument": {
        "type": "Literal",
        "value": 0,
        "raw": "0.0",
        "start": 1150,
        "end": 1153
      },
      "start": 1144,
      "end": 1154
    },
    {
      "type": "ThrowStatement",
      "argument": {
        "type": "Literal",
        "value": false,
        "raw": "false",
        "start": 1161,
        "end": 1166
      },
      "start": 1155,
      "end": 1167
    },
    {
      "type": "ThrowStatement",
      "argument": {
        "type": "Literal",
        "value": null,
        "raw": "null",
        "start": 1174,
        "end": 1178
      },
      "start": 1168,
      "end": 1179
    },
    {
      "type": "ThrowStatement",
      "argument": {
        "type": "Identifier",
        "decorators": [],
        "name": "undefined",
        "optional": false,
        "typeAnnotation": null,
        "start": 1186,
        "end": 1195
      },
      "start": 1180,
      "end": 1196
    },
    {
      "type": "ThrowStatement",
      "argument": {
        "type": "Literal",
        "value": "a string",
        "raw": "'a string'",
        "start": 1203,
        "end": 1213
      },
      "start": 1197,
      "end": 1214
    },
    {
      "type": "ThrowStatement",
      "argument": {
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
              "type": "ReturnStatement",
              "argument": {
                "type": "Literal",
                "value": "a string",
                "raw": "'a string'",
                "start": 1242,
                "end": 1252
              },
              "start": 1235,
              "end": 1252
            }
          ],
          "start": 1233,
          "end": 1254
        },
        "expression": false,
        "start": 1221,
        "end": 1254
      },
      "start": 1215,
      "end": 1255
    },
    {
      "type": "ThrowStatement",
      "argument": {
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
                "start": 1263,
                "end": 1264
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1263,
              "end": 1264
            }
          ],
          "start": 1262,
          "end": 1265
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
                  "start": 1268,
                  "end": 1269
                },
                "typeArguments": null,
                "start": 1268,
                "end": 1269
              },
              "start": 1267,
              "end": 1269
            },
            "start": 1266,
            "end": 1269
          }
        ],
        "returnType": null,
        "body": {
          "type": "Literal",
          "value": 42,
          "raw": "42",
          "start": 1274,
          "end": 1276
        },
        "id": null,
        "generator": false,
        "start": 1262,
        "end": 1276
      },
      "start": 1256,
      "end": 1277
    },
    {
      "type": "ThrowStatement",
      "argument": {
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
              "start": 1286,
              "end": 1287
            },
            "value": {
              "type": "Literal",
              "value": 12,
              "raw": "12",
              "start": 1289,
              "end": 1291
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 1286,
            "end": 1291
          },
          {
            "type": "Property",
            "kind": "init",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 1293,
              "end": 1294
            },
            "value": {
              "type": "Literal",
              "value": 13,
              "raw": "13",
              "start": 1296,
              "end": 1298
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 1293,
            "end": 1298
          }
        ],
        "start": 1284,
        "end": 1300
      },
      "start": 1278,
      "end": 1301
    },
    {
      "type": "ThrowStatement",
      "argument": {
        "type": "ArrayExpression",
        "elements": [],
        "start": 1308,
        "end": 1310
      },
      "start": 1302,
      "end": 1311
    },
    {
      "type": "ThrowStatement",
      "argument": {
        "type": "ArrayExpression",
        "elements": [
          {
            "type": "Literal",
            "value": "a",
            "raw": "'a'",
            "start": 1319,
            "end": 1322
          },
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "b",
                "raw": "'b'",
                "start": 1325,
                "end": 1328
              }
            ],
            "start": 1324,
            "end": 1329
          }
        ],
        "start": 1318,
        "end": 1330
      },
      "start": 1312,
      "end": 1331
    },
    {
      "type": "ThrowStatement",
      "argument": {
        "type": "Literal",
        "value": null,
        "raw": "/[a-z]/",
        "regex": {
          "pattern": "[a-z]",
          "flags": ""
        },
        "start": 1338,
        "end": 1345
      },
      "start": 1332,
      "end": 1346
    },
    {
      "type": "ThrowStatement",
      "argument": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Date",
          "optional": false,
          "typeAnnotation": null,
          "start": 1357,
          "end": 1361
        },
        "typeArguments": null,
        "arguments": [],
        "start": 1353,
        "end": 1363
      },
      "start": 1347,
      "end": 1364
    },
    {
      "type": "ThrowStatement",
      "argument": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null,
          "start": 1375,
          "end": 1376
        },
        "typeArguments": null,
        "arguments": [],
        "start": 1371,
        "end": 1378
      },
      "start": 1365,
      "end": 1379
    },
    {
      "type": "ThrowStatement",
      "argument": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Object",
          "optional": false,
          "typeAnnotation": null,
          "start": 1390,
          "end": 1396
        },
        "typeArguments": null,
        "arguments": [],
        "start": 1386,
        "end": 1398
      },
      "start": 1380,
      "end": 1399
    },
    {
      "type": "ThrowStatement",
      "argument": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "D",
          "optional": false,
          "typeAnnotation": null,
          "start": 1410,
          "end": 1411
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 1412,
              "end": 1418
            }
          ],
          "start": 1411,
          "end": 1419
        },
        "arguments": [],
        "start": 1406,
        "end": 1421
      },
      "start": 1400,
      "end": 1422
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 14,
  "end": 1422
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 14,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 24,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 26,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 32,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 34,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 36,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 44,
    "end": 45
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 47,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 53,
    "end": 54
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 55,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "I",
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
    "type": "Identifier",
    "value": "id",
    "start": 74,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 76,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 78,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 86,
    "end": 87
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 89,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 96,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 99,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "source",
    "start": 105,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 111,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 114,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "recurse",
    "start": 120,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 127,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 130,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 133,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "wrapped",
    "start": 139,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 146,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 149,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 151,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 156,
    "end": 157
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 159,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 169,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 171,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 173,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 180,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 182,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 189,
    "end": 190
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 191,
    "end": 197
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 198,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 202,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 205,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "M",
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
    "type": "Keyword",
    "value": "export",
    "start": 223,
    "end": 229
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 230,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 236,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 238,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 248,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 252,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 254,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 266,
    "end": 267
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 273,
    "end": 279
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 280,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "F2",
    "start": 289,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 291,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 293,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 295,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 301,
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
    "value": "string",
    "start": 304,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 311,
    "end": 312
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 313,
    "end": 319
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 321,
    "end": 322
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 322,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 330,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 331,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 332,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 334,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 336,
    "end": 337
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 339,
    "end": 342
  },
  {
    "type": "Identifier",
    "value": "aNumber",
    "start": 343,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 351,
    "end": 352
  },
  {
    "type": "Numeric",
    "value": "9.9",
    "start": 353,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 356,
    "end": 357
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 358,
    "end": 363
  },
  {
    "type": "Identifier",
    "value": "aNumber",
    "start": 364,
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
    "value": "aString",
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
    "type": "Keyword",
    "value": "throw",
    "start": 407,
    "end": 412
  },
  {
    "type": "Identifier",
    "value": "aString",
    "start": 413,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 420,
    "end": 421
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 422,
    "end": 425
  },
  {
    "type": "Identifier",
    "value": "aDate",
    "start": 426,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 432,
    "end": 433
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 434,
    "end": 437
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 438,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 442,
    "end": 443
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 443,
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
    "value": ";",
    "start": 446,
    "end": 447
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 448,
    "end": 453
  },
  {
    "type": "Identifier",
    "value": "aDate",
    "start": 454,
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
    "value": "var",
    "start": 461,
    "end": 464
  },
  {
    "type": "Identifier",
    "value": "anObject",
    "start": 465,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 474,
    "end": 475
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 476,
    "end": 479
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 480,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 486,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 487,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 488,
    "end": 489
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 490,
    "end": 495
  },
  {
    "type": "Identifier",
    "value": "anObject",
    "start": 496,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 504,
    "end": 505
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 507,
    "end": 510
  },
  {
    "type": "Identifier",
    "value": "anAny",
    "start": 511,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 517,
    "end": 518
  },
  {
    "type": "Null",
    "value": "null",
    "start": 519,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 523,
    "end": 524
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 525,
    "end": 530
  },
  {
    "type": "Identifier",
    "value": "anAny",
    "start": 531,
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
    "value": "anOtherAny",
    "start": 542,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 553,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 555,
    "end": 556
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 556,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 559,
    "end": 560
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 561,
    "end": 564
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 565,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 566,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 567,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 568,
    "end": 569
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 570,
    "end": 575
  },
  {
    "type": "Identifier",
    "value": "anOtherAny",
    "start": 576,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "value": "anUndefined",
    "start": 592,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 604,
    "end": 605
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 606,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 615,
    "end": 616
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 617,
    "end": 622
  },
  {
    "type": "Identifier",
    "value": "anUndefined",
    "start": 623,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 634,
    "end": 635
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 637,
    "end": 640
  },
  {
    "type": "Identifier",
    "value": "aClass",
    "start": 641,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 648,
    "end": 649
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 650,
    "end": 653
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 654,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 655,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 656,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 657,
    "end": 658
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 659,
    "end": 664
  },
  {
    "type": "Identifier",
    "value": "aClass",
    "start": 665,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 671,
    "end": 672
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 673,
    "end": 676
  },
  {
    "type": "Identifier",
    "value": "aGenericClass",
    "start": 677,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 691,
    "end": 692
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 693,
    "end": 696
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 697,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 698,
    "end": 699
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 699,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 705,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 706,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 707,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 708,
    "end": 709
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 710,
    "end": 715
  },
  {
    "type": "Identifier",
    "value": "aGenericClass",
    "start": 716,
    "end": 729
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 729,
    "end": 730
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 731,
    "end": 734
  },
  {
    "type": "Identifier",
    "value": "anObjectLiteral",
    "start": 735,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 751,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 753,
    "end": 754
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 755,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 757,
    "end": 758
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 759,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 762,
    "end": 763
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 763,
    "end": 764
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 765,
    "end": 770
  },
  {
    "type": "Identifier",
    "value": "anObjectLiteral",
    "start": 771,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 786,
    "end": 787
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 789,
    "end": 792
  },
  {
    "type": "Identifier",
    "value": "aFunction",
    "start": 793,
    "end": 802
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 803,
    "end": 804
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 805,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 806,
    "end": 807
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 808,
    "end": 813
  },
  {
    "type": "Identifier",
    "value": "aFunction",
    "start": 814,
    "end": 823
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 823,
    "end": 824
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 825,
    "end": 830
  },
  {
    "type": "Identifier",
    "value": "aFunction",
    "start": 831,
    "end": 840
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 840,
    "end": 841
  },
  {
    "type": "String",
    "value": "''",
    "start": 841,
    "end": 843
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 843,
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
    "value": "aLambda",
    "start": 850,
    "end": 857
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 858,
    "end": 859
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 860,
    "end": 861
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 861,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 862,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 864,
    "end": 866
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 867,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 868,
    "end": 869
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 870,
    "end": 875
  },
  {
    "type": "Identifier",
    "value": "aLambda",
    "start": 876,
    "end": 883
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 883,
    "end": 884
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 885,
    "end": 890
  },
  {
    "type": "Identifier",
    "value": "aLambda",
    "start": 891,
    "end": 898
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 898,
    "end": 899
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 899,
    "end": 900
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 900,
    "end": 901
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 901,
    "end": 902
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 904,
    "end": 907
  },
  {
    "type": "Identifier",
    "value": "aModule",
    "start": 908,
    "end": 915
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 916,
    "end": 917
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 918,
    "end": 919
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 919,
    "end": 920
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 921,
    "end": 926
  },
  {
    "type": "Identifier",
    "value": "aModule",
    "start": 927,
    "end": 934
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 934,
    "end": 935
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 936,
    "end": 941
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 942,
    "end": 948
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 949,
    "end": 950
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 950,
    "end": 951
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 952,
    "end": 955
  },
  {
    "type": "Identifier",
    "value": "aClassInModule",
    "start": 956,
    "end": 970
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 971,
    "end": 972
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 973,
    "end": 976
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 977,
    "end": 978
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 978,
    "end": 979
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 979,
    "end": 980
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 980,
    "end": 981
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 981,
    "end": 982
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 982,
    "end": 983
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 984,
    "end": 989
  },
  {
    "type": "Identifier",
    "value": "aClassInModule",
    "start": 990,
    "end": 1004
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1004,
    "end": 1005
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1006,
    "end": 1009
  },
  {
    "type": "Identifier",
    "value": "aFunctionInModule",
    "start": 1010,
    "end": 1027
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1028,
    "end": 1029
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 1030,
    "end": 1031
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1031,
    "end": 1032
  },
  {
    "type": "Identifier",
    "value": "F2",
    "start": 1032,
    "end": 1034
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1034,
    "end": 1035
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 1036,
    "end": 1041
  },
  {
    "type": "Identifier",
    "value": "aFunctionInModule",
    "start": 1042,
    "end": 1059
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1059,
    "end": 1060
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1115,
    "end": 1118
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1119,
    "end": 1120
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1120,
    "end": 1121
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 1122,
    "end": 1127
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1128,
    "end": 1129
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1129,
    "end": 1130
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 1144,
    "end": 1149
  },
  {
    "type": "Numeric",
    "value": "0.0",
    "start": 1150,
    "end": 1153
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1153,
    "end": 1154
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 1155,
    "end": 1160
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 1161,
    "end": 1166
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1166,
    "end": 1167
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 1168,
    "end": 1173
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1174,
    "end": 1178
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1178,
    "end": 1179
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 1180,
    "end": 1185
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1186,
    "end": 1195
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1195,
    "end": 1196
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 1197,
    "end": 1202
  },
  {
    "type": "String",
    "value": "'a string'",
    "start": 1203,
    "end": 1213
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1213,
    "end": 1214
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 1215,
    "end": 1220
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1221,
    "end": 1229
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1230,
    "end": 1231
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1231,
    "end": 1232
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1233,
    "end": 1234
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1235,
    "end": 1241
  },
  {
    "type": "String",
    "value": "'a string'",
    "start": 1242,
    "end": 1252
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1253,
    "end": 1254
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1254,
    "end": 1255
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 1256,
    "end": 1261
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1262,
    "end": 1263
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1263,
    "end": 1264
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1264,
    "end": 1265
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1265,
    "end": 1266
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1266,
    "end": 1267
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1267,
    "end": 1268
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1268,
    "end": 1269
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1269,
    "end": 1270
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1271,
    "end": 1273
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1274,
    "end": 1276
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1276,
    "end": 1277
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 1278,
    "end": 1283
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1284,
    "end": 1285
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1286,
    "end": 1287
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1287,
    "end": 1288
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 1289,
    "end": 1291
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1291,
    "end": 1292
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1293,
    "end": 1294
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1294,
    "end": 1295
  },
  {
    "type": "Numeric",
    "value": "13",
    "start": 1296,
    "end": 1298
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1299,
    "end": 1300
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1300,
    "end": 1301
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 1302,
    "end": 1307
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1308,
    "end": 1309
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1309,
    "end": 1310
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1310,
    "end": 1311
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 1312,
    "end": 1317
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1318,
    "end": 1319
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 1319,
    "end": 1322
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1322,
    "end": 1323
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1324,
    "end": 1325
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 1325,
    "end": 1328
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1328,
    "end": 1329
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1329,
    "end": 1330
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1330,
    "end": 1331
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 1332,
    "end": 1337
  },
  {
    "type": "RegularExpression",
    "value": "/[a-z]/",
    "regex": {
      "flags": "",
      "pattern": "[a-z]"
    },
    "start": 1338,
    "end": 1345
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1345,
    "end": 1346
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 1347,
    "end": 1352
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1353,
    "end": 1356
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 1357,
    "end": 1361
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1361,
    "end": 1362
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1362,
    "end": 1363
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1363,
    "end": 1364
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 1365,
    "end": 1370
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1371,
    "end": 1374
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1375,
    "end": 1376
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1376,
    "end": 1377
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1377,
    "end": 1378
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1378,
    "end": 1379
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 1380,
    "end": 1385
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1386,
    "end": 1389
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 1390,
    "end": 1396
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1396,
    "end": 1397
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1397,
    "end": 1398
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1398,
    "end": 1399
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 1400,
    "end": 1405
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1406,
    "end": 1409
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 1410,
    "end": 1411
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1411,
    "end": 1412
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1412,
    "end": 1418
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1418,
    "end": 1419
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1419,
    "end": 1420
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1420,
    "end": 1421
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1421,
    "end": 1422
  }
]
```
