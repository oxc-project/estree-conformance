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
        "name": "Banana",
        "optional": false,
        "typeAnnotation": null,
        "start": 37,
        "end": 43
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
              "start": 44,
              "end": 45
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 54,
              "end": 60
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 44,
            "end": 60
          }
        ],
        "start": 43,
        "end": 61
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
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
              "start": 64,
              "end": 75
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
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
                      "type": "TSStringKeyword",
                      "start": 79,
                      "end": 85
                    },
                    "start": 77,
                    "end": 85
                  },
                  "start": 76,
                  "end": 85
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "property",
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
                        "start": 97,
                        "end": 98
                      },
                      "typeArguments": null,
                      "start": 97,
                      "end": 98
                    },
                    "start": 95,
                    "end": 98
                  },
                  "start": 87,
                  "end": 98
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 75,
              "end": 99
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 64,
            "end": 99
          }
        ],
        "start": 62,
        "end": 101
      },
      "abstract": false,
      "declare": true,
      "start": 23,
      "end": 101
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fruitFactory1",
        "optional": false,
        "typeAnnotation": null,
        "start": 120,
        "end": 133
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TFruit",
              "optional": false,
              "typeAnnotation": null,
              "start": 134,
              "end": 140
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 134,
            "end": 140
          }
        ],
        "start": 133,
        "end": 141
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "Fruit",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSConstructorType",
              "abstract": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 157,
                    "end": 161
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 163,
                        "end": 166
                      },
                      "start": 163,
                      "end": 168
                    },
                    "start": 161,
                    "end": 168
                  },
                  "value": null,
                  "start": 154,
                  "end": 168
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TFruit",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 173,
                    "end": 179
                  },
                  "typeArguments": null,
                  "start": 173,
                  "end": 179
                },
                "start": 170,
                "end": 179
              },
              "start": 149,
              "end": 179
            },
            "start": 147,
            "end": 179
          },
          "start": 142,
          "end": 179
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "TFruit",
            "optional": false,
            "typeAnnotation": null,
            "start": 182,
            "end": 188
          },
          "typeArguments": null,
          "start": 182,
          "end": 188
        },
        "start": 180,
        "end": 188
      },
      "body": null,
      "expression": false,
      "start": 103,
      "end": 188
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
            "name": "banana1",
            "optional": false,
            "typeAnnotation": null,
            "start": 195,
            "end": 202
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fruitFactory1",
              "optional": false,
              "typeAnnotation": null,
              "start": 205,
              "end": 218
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "Banana",
                "optional": false,
                "typeAnnotation": null,
                "start": 219,
                "end": 225
              }
            ],
            "optional": false,
            "start": 205,
            "end": 226
          },
          "definite": false,
          "start": 195,
          "end": 226
        }
      ],
      "declare": false,
      "start": 189,
      "end": 226
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fruitFactory2",
        "optional": false,
        "typeAnnotation": null,
        "start": 260,
        "end": 273
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TFruit",
              "optional": false,
              "typeAnnotation": null,
              "start": 274,
              "end": 280
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 274,
            "end": 280
          }
        ],
        "start": 273,
        "end": 281
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "Fruit",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSConstructorType",
              "abstract": false,
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
                      "type": "TSStringKeyword",
                      "start": 297,
                      "end": 303
                    },
                    "start": 295,
                    "end": 303
                  },
                  "start": 294,
                  "end": 303
                },
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 308,
                    "end": 312
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 314,
                        "end": 317
                      },
                      "start": 314,
                      "end": 319
                    },
                    "start": 312,
                    "end": 319
                  },
                  "value": null,
                  "start": 305,
                  "end": 319
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TFruit",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 324,
                    "end": 330
                  },
                  "typeArguments": null,
                  "start": 324,
                  "end": 330
                },
                "start": 321,
                "end": 330
              },
              "start": 289,
              "end": 330
            },
            "start": 287,
            "end": 330
          },
          "start": 282,
          "end": 330
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "TFruit",
            "optional": false,
            "typeAnnotation": null,
            "start": 333,
            "end": 339
          },
          "typeArguments": null,
          "start": 333,
          "end": 339
        },
        "start": 331,
        "end": 339
      },
      "body": null,
      "expression": false,
      "start": 243,
      "end": 339
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
            "name": "banana2",
            "optional": false,
            "typeAnnotation": null,
            "start": 346,
            "end": 353
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fruitFactory2",
              "optional": false,
              "typeAnnotation": null,
              "start": 356,
              "end": 369
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "Banana",
                "optional": false,
                "typeAnnotation": null,
                "start": 370,
                "end": 376
              }
            ],
            "optional": false,
            "start": 356,
            "end": 377
          },
          "definite": false,
          "start": 346,
          "end": 377
        }
      ],
      "declare": false,
      "start": 340,
      "end": 377
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fruitFactory3",
        "optional": false,
        "typeAnnotation": null,
        "start": 411,
        "end": 424
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TFruit",
              "optional": false,
              "typeAnnotation": null,
              "start": 425,
              "end": 431
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 425,
            "end": 431
          }
        ],
        "start": 424,
        "end": 432
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "Fruit",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSConstructorType",
              "abstract": false,
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
                      "type": "TSStringKeyword",
                      "start": 448,
                      "end": 454
                    },
                    "start": 446,
                    "end": 454
                  },
                  "start": 445,
                  "end": 454
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "foo",
                        "raw": "\"foo\"",
                        "start": 459,
                        "end": 464
                      },
                      "start": 459,
                      "end": 464
                    },
                    "start": 457,
                    "end": 464
                  },
                  "start": 456,
                  "end": 464
                },
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 469,
                    "end": 473
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 475,
                        "end": 478
                      },
                      "start": 475,
                      "end": 480
                    },
                    "start": 473,
                    "end": 480
                  },
                  "value": null,
                  "start": 466,
                  "end": 480
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TFruit",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 485,
                    "end": 491
                  },
                  "typeArguments": null,
                  "start": 485,
                  "end": 491
                },
                "start": 482,
                "end": 491
              },
              "start": 440,
              "end": 491
            },
            "start": 438,
            "end": 491
          },
          "start": 433,
          "end": 491
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "TFruit",
            "optional": false,
            "typeAnnotation": null,
            "start": 494,
            "end": 500
          },
          "typeArguments": null,
          "start": 494,
          "end": 500
        },
        "start": 492,
        "end": 500
      },
      "body": null,
      "expression": false,
      "start": 394,
      "end": 500
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
            "name": "banana3",
            "optional": false,
            "typeAnnotation": null,
            "start": 507,
            "end": 514
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fruitFactory3",
              "optional": false,
              "typeAnnotation": null,
              "start": 517,
              "end": 530
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "Banana",
                "optional": false,
                "typeAnnotation": null,
                "start": 531,
                "end": 537
              }
            ],
            "optional": false,
            "start": 517,
            "end": 538
          },
          "definite": false,
          "start": 507,
          "end": 538
        }
      ],
      "declare": false,
      "start": 501,
      "end": 538
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fruitFactory4",
        "optional": false,
        "typeAnnotation": null,
        "start": 574,
        "end": 587
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TFruit",
              "optional": false,
              "typeAnnotation": null,
              "start": 588,
              "end": 594
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 588,
            "end": 594
          }
        ],
        "start": 587,
        "end": 595
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "Fruit",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSConstructorType",
              "abstract": false,
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
                      "type": "TSStringKeyword",
                      "start": 611,
                      "end": 617
                    },
                    "start": 609,
                    "end": 617
                  },
                  "start": 608,
                  "end": 617
                },
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 622,
                    "end": 626
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "foo",
                          "raw": "\"foo\"",
                          "start": 628,
                          "end": 633
                        },
                        "start": 628,
                        "end": 633
                      },
                      "start": 628,
                      "end": 635
                    },
                    "start": 626,
                    "end": 635
                  },
                  "value": null,
                  "start": 619,
                  "end": 635
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TFruit",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 640,
                    "end": 646
                  },
                  "typeArguments": null,
                  "start": 640,
                  "end": 646
                },
                "start": 637,
                "end": 646
              },
              "start": 603,
              "end": 646
            },
            "start": 601,
            "end": 646
          },
          "start": 596,
          "end": 646
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "TFruit",
            "optional": false,
            "typeAnnotation": null,
            "start": 649,
            "end": 655
          },
          "typeArguments": null,
          "start": 649,
          "end": 655
        },
        "start": 647,
        "end": 655
      },
      "body": null,
      "expression": false,
      "start": 557,
      "end": 655
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
            "name": "banana4",
            "optional": false,
            "typeAnnotation": null,
            "start": 662,
            "end": 669
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fruitFactory4",
              "optional": false,
              "typeAnnotation": null,
              "start": 672,
              "end": 685
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "Banana",
                "optional": false,
                "typeAnnotation": null,
                "start": 686,
                "end": 692
              }
            ],
            "optional": false,
            "start": 672,
            "end": 693
          },
          "definite": false,
          "start": 662,
          "end": 693
        }
      ],
      "declare": false,
      "start": 656,
      "end": 693
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fruitFactory5",
        "optional": false,
        "typeAnnotation": null,
        "start": 729,
        "end": 742
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TFruit",
              "optional": false,
              "typeAnnotation": null,
              "start": 743,
              "end": 749
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 743,
            "end": 749
          }
        ],
        "start": 742,
        "end": 750
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "Fruit",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSConstructorType",
              "abstract": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 766,
                    "end": 770
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "foo",
                          "raw": "\"foo\"",
                          "start": 772,
                          "end": 777
                        },
                        "start": 772,
                        "end": 777
                      },
                      "start": 772,
                      "end": 779
                    },
                    "start": 770,
                    "end": 779
                  },
                  "value": null,
                  "start": 763,
                  "end": 779
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TFruit",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 784,
                    "end": 790
                  },
                  "typeArguments": null,
                  "start": 784,
                  "end": 790
                },
                "start": 781,
                "end": 790
              },
              "start": 758,
              "end": 790
            },
            "start": 756,
            "end": 790
          },
          "start": 751,
          "end": 790
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "TFruit",
            "optional": false,
            "typeAnnotation": null,
            "start": 793,
            "end": 799
          },
          "typeArguments": null,
          "start": 793,
          "end": 799
        },
        "start": 791,
        "end": 799
      },
      "body": null,
      "expression": false,
      "start": 712,
      "end": 799
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
            "name": "banana5",
            "optional": false,
            "typeAnnotation": null,
            "start": 806,
            "end": 813
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fruitFactory5",
              "optional": false,
              "typeAnnotation": null,
              "start": 816,
              "end": 829
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "Banana",
                "optional": false,
                "typeAnnotation": null,
                "start": 830,
                "end": 836
              }
            ],
            "optional": false,
            "start": 816,
            "end": 837
          },
          "definite": false,
          "start": 806,
          "end": 837
        }
      ],
      "declare": false,
      "start": 800,
      "end": 837
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 23,
  "end": 854
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 23,
    "end": 30
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 31,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "Banana",
    "start": 37,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 44,
    "end": 45
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 46,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 54,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 62,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 64,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 77,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 79,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "property",
    "start": 87,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 95,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "value": "}",
    "start": 100,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 103,
    "end": 110
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 111,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "fruitFactory1",
    "start": 120,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 133,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "TFruit",
    "start": 134,
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
    "value": "(",
    "start": 141,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "Fruit",
    "start": 142,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 147,
    "end": 148
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 149,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 154,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 157,
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
    "value": "any",
    "start": 163,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 170,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "TFruit",
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
    "value": "TFruit",
    "start": 182,
    "end": 188
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 189,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "banana1",
    "start": 195,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 203,
    "end": 204
  },
  {
    "type": "Identifier",
    "value": "fruitFactory1",
    "start": 205,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 218,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "Banana",
    "start": 219,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 225,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 243,
    "end": 250
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 251,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "fruitFactory2",
    "start": 260,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 273,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "TFruit",
    "start": 274,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 280,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 281,
    "end": 282
  },
  {
    "type": "Identifier",
    "value": "Fruit",
    "start": 282,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 287,
    "end": 288
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 289,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 293,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 295,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 297,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 303,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 305,
    "end": 308
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 308,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 312,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 314,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 317,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 321,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "TFruit",
    "start": 324,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 330,
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
    "value": "TFruit",
    "start": 333,
    "end": 339
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 340,
    "end": 345
  },
  {
    "type": "Identifier",
    "value": "banana2",
    "start": 346,
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
    "value": "fruitFactory2",
    "start": 356,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 369,
    "end": 370
  },
  {
    "type": "Identifier",
    "value": "Banana",
    "start": 370,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 376,
    "end": 377
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 394,
    "end": 401
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 402,
    "end": 410
  },
  {
    "type": "Identifier",
    "value": "fruitFactory3",
    "start": 411,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 424,
    "end": 425
  },
  {
    "type": "Identifier",
    "value": "TFruit",
    "start": 425,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 431,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 432,
    "end": 433
  },
  {
    "type": "Identifier",
    "value": "Fruit",
    "start": 433,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 438,
    "end": 439
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 440,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 444,
    "end": 445
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 446,
    "end": 447
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 448,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 454,
    "end": 455
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 456,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 457,
    "end": 458
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 459,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 464,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 466,
    "end": 469
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 469,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 473,
    "end": 474
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 475,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 478,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 479,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 480,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 482,
    "end": 484
  },
  {
    "type": "Identifier",
    "value": "TFruit",
    "start": 485,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 491,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 492,
    "end": 493
  },
  {
    "type": "Identifier",
    "value": "TFruit",
    "start": 494,
    "end": 500
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 501,
    "end": 506
  },
  {
    "type": "Identifier",
    "value": "banana3",
    "start": 507,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 515,
    "end": 516
  },
  {
    "type": "Identifier",
    "value": "fruitFactory3",
    "start": 517,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 530,
    "end": 531
  },
  {
    "type": "Identifier",
    "value": "Banana",
    "start": 531,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 537,
    "end": 538
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 557,
    "end": 564
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 565,
    "end": 573
  },
  {
    "type": "Identifier",
    "value": "fruitFactory4",
    "start": 574,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 587,
    "end": 588
  },
  {
    "type": "Identifier",
    "value": "TFruit",
    "start": 588,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 594,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 595,
    "end": 596
  },
  {
    "type": "Identifier",
    "value": "Fruit",
    "start": 596,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 601,
    "end": 602
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 603,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 607,
    "end": 608
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 608,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 609,
    "end": 610
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 611,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 617,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 619,
    "end": 622
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 622,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 626,
    "end": 627
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 628,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 633,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 634,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 635,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 637,
    "end": 639
  },
  {
    "type": "Identifier",
    "value": "TFruit",
    "start": 640,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 646,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 647,
    "end": 648
  },
  {
    "type": "Identifier",
    "value": "TFruit",
    "start": 649,
    "end": 655
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 656,
    "end": 661
  },
  {
    "type": "Identifier",
    "value": "banana4",
    "start": 662,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 670,
    "end": 671
  },
  {
    "type": "Identifier",
    "value": "fruitFactory4",
    "start": 672,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 685,
    "end": 686
  },
  {
    "type": "Identifier",
    "value": "Banana",
    "start": 686,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 692,
    "end": 693
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 712,
    "end": 719
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 720,
    "end": 728
  },
  {
    "type": "Identifier",
    "value": "fruitFactory5",
    "start": 729,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 742,
    "end": 743
  },
  {
    "type": "Identifier",
    "value": "TFruit",
    "start": 743,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 749,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 750,
    "end": 751
  },
  {
    "type": "Identifier",
    "value": "Fruit",
    "start": 751,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 756,
    "end": 757
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 758,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 762,
    "end": 763
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 763,
    "end": 766
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 766,
    "end": 770
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 770,
    "end": 771
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 772,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 777,
    "end": 778
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 778,
    "end": 779
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 779,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 781,
    "end": 783
  },
  {
    "type": "Identifier",
    "value": "TFruit",
    "start": 784,
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
    "value": ":",
    "start": 791,
    "end": 792
  },
  {
    "type": "Identifier",
    "value": "TFruit",
    "start": 793,
    "end": 799
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 800,
    "end": 805
  },
  {
    "type": "Identifier",
    "value": "banana5",
    "start": 806,
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
    "value": "fruitFactory5",
    "start": 816,
    "end": 829
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 829,
    "end": 830
  },
  {
    "type": "Identifier",
    "value": "Banana",
    "start": 830,
    "end": 836
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 836,
    "end": 837
  }
]
```
