__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
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
            "name": "NUMBER",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 55,
                "end": 61
              },
              "start": 53,
              "end": 61
            },
            "start": 47,
            "end": 61
          },
          "init": null,
          "definite": false,
          "start": 47,
          "end": 61
        }
      ],
      "declare": true,
      "start": 35,
      "end": 62
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
            "name": "NUMBER1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 76,
                  "end": 82
                },
                "start": 76,
                "end": 84
              },
              "start": 74,
              "end": 84
            },
            "start": 67,
            "end": 84
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 88,
                "end": 89
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 91,
                "end": 92
              }
            ],
            "start": 87,
            "end": 93
          },
          "definite": false,
          "start": 67,
          "end": 93
        }
      ],
      "declare": false,
      "start": 63,
      "end": 94
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 105,
        "end": 108
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 112,
          "end": 118
        },
        "start": 110,
        "end": 118
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 128,
              "end": 129
            },
            "start": 121,
            "end": 130
          }
        ],
        "start": 119,
        "end": 132
      },
      "expression": false,
      "start": 96,
      "end": 132
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
        "start": 140,
        "end": 141
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
              "start": 155,
              "end": 156
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 158,
                "end": 164
              },
              "start": 156,
              "end": 164
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
            "start": 148,
            "end": 165
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
              "start": 177,
              "end": 180
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 192,
                      "end": 193
                    },
                    "start": 185,
                    "end": 194
                  }
                ],
                "start": 183,
                "end": 196
              },
              "expression": false,
              "start": 180,
              "end": 196
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 170,
            "end": 196
          }
        ],
        "start": 142,
        "end": 198
      },
      "abstract": false,
      "declare": false,
      "start": 134,
      "end": 198
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 209,
        "end": 210
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
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 232,
                        "end": 238
                      },
                      "start": 230,
                      "end": 238
                    },
                    "start": 228,
                    "end": 238
                  },
                  "init": null,
                  "definite": true,
                  "start": 228,
                  "end": 238
                }
              ],
              "declare": false,
              "start": 224,
              "end": 239
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 217,
            "end": 239
          }
        ],
        "start": 211,
        "end": 241
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 199,
      "end": 241
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
            "name": "objA",
            "optional": false,
            "typeAnnotation": null,
            "start": 247,
            "end": 251
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 258,
              "end": 259
            },
            "typeArguments": null,
            "arguments": [],
            "start": 254,
            "end": 261
          },
          "definite": false,
          "start": 247,
          "end": 261
        }
      ],
      "declare": false,
      "start": 243,
      "end": 262
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
            "name": "ResultIsString1",
            "optional": false,
            "typeAnnotation": null,
            "start": 287,
            "end": 302
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "NUMBER",
              "optional": false,
              "typeAnnotation": null,
              "start": 312,
              "end": 318
            },
            "prefix": true,
            "start": 305,
            "end": 318
          },
          "definite": false,
          "start": 287,
          "end": 318
        }
      ],
      "declare": false,
      "start": 283,
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
            "name": "ResultIsString2",
            "optional": false,
            "typeAnnotation": null,
            "start": 324,
            "end": 339
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "NUMBER1",
              "optional": false,
              "typeAnnotation": null,
              "start": 349,
              "end": 356
            },
            "prefix": true,
            "start": 342,
            "end": 356
          },
          "definite": false,
          "start": 324,
          "end": 356
        }
      ],
      "declare": false,
      "start": 320,
      "end": 357
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
            "name": "ResultIsString3",
            "optional": false,
            "typeAnnotation": null,
            "start": 386,
            "end": 401
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 411,
              "end": 412
            },
            "prefix": true,
            "start": 404,
            "end": 412
          },
          "definite": false,
          "start": 386,
          "end": 412
        }
      ],
      "declare": false,
      "start": 382,
      "end": 413
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
            "name": "ResultIsString4",
            "optional": false,
            "typeAnnotation": null,
            "start": 418,
            "end": 433
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
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
                    "start": 445,
                    "end": 446
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 448,
                    "end": 449
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 445,
                  "end": 449
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
                    "start": 451,
                    "end": 452
                  },
                  "value": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 454,
                    "end": 455
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 451,
                  "end": 455
                }
              ],
              "start": 443,
              "end": 456
            },
            "prefix": true,
            "start": 436,
            "end": 456
          },
          "definite": false,
          "start": 418,
          "end": 456
        }
      ],
      "declare": false,
      "start": 414,
      "end": 457
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
            "name": "ResultIsString5",
            "optional": false,
            "typeAnnotation": null,
            "start": 462,
            "end": 477
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
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
                    "start": 489,
                    "end": 490
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 492,
                    "end": 493
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 489,
                  "end": 493
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
                    "start": 495,
                    "end": 496
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 502,
                            "end": 508
                          },
                          "start": 500,
                          "end": 508
                        },
                        "start": 499,
                        "end": 508
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "n",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 522,
                            "end": 523
                          },
                          "start": 515,
                          "end": 524
                        }
                      ],
                      "start": 513,
                      "end": 526
                    },
                    "id": null,
                    "generator": false,
                    "start": 498,
                    "end": 526
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 495,
                  "end": 526
                }
              ],
              "start": 487,
              "end": 528
            },
            "prefix": true,
            "start": 480,
            "end": 528
          },
          "definite": false,
          "start": 462,
          "end": 528
        }
      ],
      "declare": false,
      "start": 458,
      "end": 529
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
            "name": "ResultIsString6",
            "optional": false,
            "typeAnnotation": null,
            "start": 562,
            "end": 577
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "objA",
                "optional": false,
                "typeAnnotation": null,
                "start": 587,
                "end": 591
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 592,
                "end": 593
              },
              "optional": false,
              "computed": false,
              "start": 587,
              "end": 593
            },
            "prefix": true,
            "start": 580,
            "end": 593
          },
          "definite": false,
          "start": 562,
          "end": 593
        }
      ],
      "declare": false,
      "start": 558,
      "end": 594
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
            "name": "ResultIsString7",
            "optional": false,
            "typeAnnotation": null,
            "start": 599,
            "end": 614
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null,
                "start": 624,
                "end": 625
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 626,
                "end": 627
              },
              "optional": false,
              "computed": false,
              "start": 624,
              "end": 627
            },
            "prefix": true,
            "start": 617,
            "end": 627
          },
          "definite": false,
          "start": 599,
          "end": 627
        }
      ],
      "declare": false,
      "start": 595,
      "end": 628
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
            "name": "ResultIsString8",
            "optional": false,
            "typeAnnotation": null,
            "start": 633,
            "end": 648
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "NUMBER1",
                "optional": false,
                "typeAnnotation": null,
                "start": 658,
                "end": 665
              },
              "property": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 666,
                "end": 667
              },
              "optional": false,
              "computed": true,
              "start": 658,
              "end": 668
            },
            "prefix": true,
            "start": 651,
            "end": 668
          },
          "definite": false,
          "start": 633,
          "end": 668
        }
      ],
      "declare": false,
      "start": 629,
      "end": 669
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
            "name": "ResultIsString9",
            "optional": false,
            "typeAnnotation": null,
            "start": 674,
            "end": 689
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 699,
                "end": 702
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 699,
              "end": 704
            },
            "prefix": true,
            "start": 692,
            "end": 704
          },
          "definite": false,
          "start": 674,
          "end": 704
        }
      ],
      "declare": false,
      "start": 670,
      "end": 705
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
            "name": "ResultIsString10",
            "optional": false,
            "typeAnnotation": null,
            "start": 710,
            "end": 726
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 736,
                  "end": 737
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 738,
                  "end": 741
                },
                "optional": false,
                "computed": false,
                "start": 736,
                "end": 741
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 736,
              "end": 743
            },
            "prefix": true,
            "start": 729,
            "end": 743
          },
          "definite": false,
          "start": 710,
          "end": 743
        }
      ],
      "declare": false,
      "start": 706,
      "end": 744
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
            "name": "ResultIsString11",
            "optional": false,
            "typeAnnotation": null,
            "start": 749,
            "end": 765
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "NUMBER",
                "optional": false,
                "typeAnnotation": null,
                "start": 776,
                "end": 782
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "NUMBER",
                "optional": false,
                "typeAnnotation": null,
                "start": 785,
                "end": 791
              },
              "start": 776,
              "end": 791
            },
            "prefix": true,
            "start": 768,
            "end": 792
          },
          "definite": false,
          "start": 749,
          "end": 792
        }
      ],
      "declare": false,
      "start": 745,
      "end": 793
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
            "name": "ResultIsString12",
            "optional": false,
            "typeAnnotation": null,
            "start": 829,
            "end": 845
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "UnaryExpression",
              "operator": "typeof",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "NUMBER",
                "optional": false,
                "typeAnnotation": null,
                "start": 862,
                "end": 868
              },
              "prefix": true,
              "start": 855,
              "end": 868
            },
            "prefix": true,
            "start": 848,
            "end": 868
          },
          "definite": false,
          "start": 829,
          "end": 868
        }
      ],
      "declare": false,
      "start": 825,
      "end": 869
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
            "name": "ResultIsString13",
            "optional": false,
            "typeAnnotation": null,
            "start": 874,
            "end": 890
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "UnaryExpression",
              "operator": "typeof",
              "argument": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "NUMBER",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 915,
                    "end": 921
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "NUMBER",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 924,
                    "end": 930
                  },
                  "start": 915,
                  "end": 930
                },
                "prefix": true,
                "start": 907,
                "end": 931
              },
              "prefix": true,
              "start": 900,
              "end": 931
            },
            "prefix": true,
            "start": 893,
            "end": 931
          },
          "definite": false,
          "start": 874,
          "end": 931
        }
      ],
      "declare": false,
      "start": 870,
      "end": 932
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "typeof",
        "argument": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 970,
          "end": 971
        },
        "prefix": true,
        "start": 963,
        "end": 971
      },
      "directive": null,
      "start": 963,
      "end": 972
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "typeof",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "NUMBER",
          "optional": false,
          "typeAnnotation": null,
          "start": 980,
          "end": 986
        },
        "prefix": true,
        "start": 973,
        "end": 986
      },
      "directive": null,
      "start": 973,
      "end": 987
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "typeof",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "NUMBER1",
          "optional": false,
          "typeAnnotation": null,
          "start": 995,
          "end": 1002
        },
        "prefix": true,
        "start": 988,
        "end": 1002
      },
      "directive": null,
      "start": 988,
      "end": 1003
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "typeof",
        "argument": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 1011,
            "end": 1014
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 1011,
          "end": 1016
        },
        "prefix": true,
        "start": 1004,
        "end": 1016
      },
      "directive": null,
      "start": 1004,
      "end": 1017
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "typeof",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "objA",
            "optional": false,
            "typeAnnotation": null,
            "start": 1025,
            "end": 1029
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 1030,
            "end": 1031
          },
          "optional": false,
          "computed": false,
          "start": 1025,
          "end": 1031
        },
        "prefix": true,
        "start": 1018,
        "end": 1031
      },
      "directive": null,
      "start": 1018,
      "end": 1032
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "typeof",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 1040,
            "end": 1041
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 1042,
            "end": 1043
          },
          "optional": false,
          "computed": false,
          "start": 1040,
          "end": 1043
        },
        "prefix": true,
        "start": 1033,
        "end": 1043
      },
      "directive": null,
      "start": 1033,
      "end": 1044
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "objA",
                "optional": false,
                "typeAnnotation": null,
                "start": 1052,
                "end": 1056
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1057,
                "end": 1058
              },
              "optional": false,
              "computed": false,
              "start": 1052,
              "end": 1058
            },
            "prefix": true,
            "start": 1045,
            "end": 1058
          },
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 1060,
              "end": 1061
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 1062,
              "end": 1063
            },
            "optional": false,
            "computed": false,
            "start": 1060,
            "end": 1063
          }
        ],
        "start": 1045,
        "end": 1063
      },
      "directive": null,
      "start": 1045,
      "end": 1064
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
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1109,
                "end": 1115
              },
              "start": 1107,
              "end": 1115
            },
            "start": 1106,
            "end": 1115
          },
          "init": null,
          "definite": false,
          "start": 1106,
          "end": 1115
        }
      ],
      "declare": true,
      "start": 1094,
      "end": 1116
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 1132,
                  "end": 1138
                },
                "start": 1132,
                "end": 1140
              },
              "start": 1130,
              "end": 1140
            },
            "start": 1129,
            "end": 1140
          },
          "init": null,
          "definite": false,
          "start": 1129,
          "end": 1140
        }
      ],
      "declare": true,
      "start": 1117,
      "end": 1141
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1163,
                    "end": 1169
                  },
                  "start": 1160,
                  "end": 1169
                },
                "start": 1157,
                "end": 1169
              },
              "start": 1155,
              "end": 1169
            },
            "start": 1154,
            "end": 1169
          },
          "init": null,
          "definite": false,
          "start": 1154,
          "end": 1169
        }
      ],
      "declare": true,
      "start": 1142,
      "end": 1170
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "z",
        "optional": false,
        "typeAnnotation": null,
        "start": 1171,
        "end": 1172
      },
      "body": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "NUMBER",
            "optional": false,
            "typeAnnotation": null,
            "start": 1181,
            "end": 1187
          },
          "prefix": true,
          "start": 1174,
          "end": 1187
        },
        "directive": null,
        "start": 1174,
        "end": 1188
      },
      "start": 1171,
      "end": 1188
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null,
        "start": 1189,
        "end": 1190
      },
      "body": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "NUMBER1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1199,
            "end": 1206
          },
          "prefix": true,
          "start": 1192,
          "end": 1206
        },
        "directive": null,
        "start": 1192,
        "end": 1207
      },
      "start": 1189,
      "end": 1207
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "r",
        "optional": false,
        "typeAnnotation": null,
        "start": 1208,
        "end": 1209
      },
      "body": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 1218,
            "end": 1221
          },
          "prefix": true,
          "start": 1211,
          "end": 1221
        },
        "directive": null,
        "start": 1211,
        "end": 1222
      },
      "start": 1208,
      "end": 1222
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
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 1227,
            "end": 1228
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1233,
                  "end": 1234
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1236,
                  "end": 1237
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1233,
                "end": 1237
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1239,
                  "end": 1240
                },
                "value": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 1242,
                  "end": 1243
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1239,
                "end": 1243
              }
            ],
            "start": 1231,
            "end": 1245
          },
          "definite": false,
          "start": 1227,
          "end": 1245
        }
      ],
      "declare": false,
      "start": 1223,
      "end": 1246
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "z",
        "optional": false,
        "typeAnnotation": null,
        "start": 1247,
        "end": 1248
      },
      "body": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 1257,
              "end": 1258
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1259,
              "end": 1260
            },
            "optional": false,
            "computed": false,
            "start": 1257,
            "end": 1260
          },
          "prefix": true,
          "start": 1250,
          "end": 1260
        },
        "directive": null,
        "start": 1250,
        "end": 1261
      },
      "start": 1247,
      "end": 1261
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "z",
        "optional": false,
        "typeAnnotation": null,
        "start": 1262,
        "end": 1263
      },
      "body": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "objA",
              "optional": false,
              "typeAnnotation": null,
              "start": 1272,
              "end": 1276
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1277,
              "end": 1278
            },
            "optional": false,
            "computed": false,
            "start": 1272,
            "end": 1278
          },
          "prefix": true,
          "start": 1265,
          "end": 1278
        },
        "directive": null,
        "start": 1265,
        "end": 1279
      },
      "start": 1262,
      "end": 1279
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "z",
        "optional": false,
        "typeAnnotation": null,
        "start": 1280,
        "end": 1281
      },
      "body": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 1290,
              "end": 1291
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1292,
              "end": 1295
            },
            "optional": false,
            "computed": false,
            "start": 1290,
            "end": 1295
          },
          "prefix": true,
          "start": 1283,
          "end": 1295
        },
        "directive": null,
        "start": 1283,
        "end": 1296
      },
      "start": 1280,
      "end": 1296
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "z",
        "optional": false,
        "typeAnnotation": null,
        "start": 1297,
        "end": 1298
      },
      "body": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 1307,
              "end": 1308
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 1309,
              "end": 1310
            },
            "optional": false,
            "computed": false,
            "start": 1307,
            "end": 1310
          },
          "prefix": true,
          "start": 1300,
          "end": 1310
        },
        "directive": null,
        "start": 1300,
        "end": 1311
      },
      "start": 1297,
      "end": 1311
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 35,
  "end": 1311
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 35,
    "end": 42
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 43,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "NUMBER",
    "start": 47,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 53,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 55,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 61,
    "end": 62
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 63,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "NUMBER1",
    "start": 67,
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
    "value": "number",
    "start": 76,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 87,
    "end": 88
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 89,
    "end": 90
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 93,
    "end": 94
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 96,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 105,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 110,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 112,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 119,
    "end": 120
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 121,
    "end": 127
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "type": "Punctuator",
    "value": "}",
    "start": 131,
    "end": 132
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 134,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 142,
    "end": 143
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 148,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 156,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 158,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 164,
    "end": 165
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 170,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 177,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 183,
    "end": 184
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 185,
    "end": 191
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 197,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 199,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "M",
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
    "type": "Keyword",
    "value": "export",
    "start": 217,
    "end": 223
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 224,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 229,
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
    "value": "number",
    "start": 232,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 238,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 240,
    "end": 241
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 243,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "objA",
    "start": 247,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 252,
    "end": 253
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 254,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 261,
    "end": 262
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 283,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "ResultIsString1",
    "start": 287,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 303,
    "end": 304
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 305,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "NUMBER",
    "start": 312,
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
    "start": 320,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "ResultIsString2",
    "start": 324,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 340,
    "end": 341
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 342,
    "end": 348
  },
  {
    "type": "Identifier",
    "value": "NUMBER1",
    "start": 349,
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
    "value": "var",
    "start": 382,
    "end": 385
  },
  {
    "type": "Identifier",
    "value": "ResultIsString3",
    "start": 386,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 402,
    "end": 403
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 404,
    "end": 410
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 411,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 412,
    "end": 413
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 414,
    "end": 417
  },
  {
    "type": "Identifier",
    "value": "ResultIsString4",
    "start": 418,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 434,
    "end": 435
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 436,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 443,
    "end": 444
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Numeric",
    "value": "1",
    "start": 448,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 449,
    "end": 450
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 451,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 452,
    "end": 453
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 454,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 455,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 456,
    "end": 457
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 458,
    "end": 461
  },
  {
    "type": "Identifier",
    "value": "ResultIsString5",
    "start": 462,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 478,
    "end": 479
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 480,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 487,
    "end": 488
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 489,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 490,
    "end": 491
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 492,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 493,
    "end": 494
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 495,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 496,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 498,
    "end": 499
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 499,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 500,
    "end": 501
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 502,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 508,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 510,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 513,
    "end": 514
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 515,
    "end": 521
  },
  {
    "type": "Identifier",
    "value": "n",
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
    "value": "}",
    "start": 525,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 527,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 528,
    "end": 529
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 558,
    "end": 561
  },
  {
    "type": "Identifier",
    "value": "ResultIsString6",
    "start": 562,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 578,
    "end": 579
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 580,
    "end": 586
  },
  {
    "type": "Identifier",
    "value": "objA",
    "start": 587,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 591,
    "end": 592
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 592,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 593,
    "end": 594
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 595,
    "end": 598
  },
  {
    "type": "Identifier",
    "value": "ResultIsString7",
    "start": 599,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 615,
    "end": 616
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 617,
    "end": 623
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 624,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 625,
    "end": 626
  },
  {
    "type": "Identifier",
    "value": "n",
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
    "type": "Keyword",
    "value": "var",
    "start": 629,
    "end": 632
  },
  {
    "type": "Identifier",
    "value": "ResultIsString8",
    "start": 633,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 649,
    "end": 650
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 651,
    "end": 657
  },
  {
    "type": "Identifier",
    "value": "NUMBER1",
    "start": 658,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 665,
    "end": 666
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 666,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 667,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 668,
    "end": 669
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 670,
    "end": 673
  },
  {
    "type": "Identifier",
    "value": "ResultIsString9",
    "start": 674,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 690,
    "end": 691
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 692,
    "end": 698
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 699,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 702,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 703,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 704,
    "end": 705
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 706,
    "end": 709
  },
  {
    "type": "Identifier",
    "value": "ResultIsString10",
    "start": 710,
    "end": 726
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 727,
    "end": 728
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 729,
    "end": 735
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 736,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 737,
    "end": 738
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 738,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 741,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 742,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 743,
    "end": 744
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 745,
    "end": 748
  },
  {
    "type": "Identifier",
    "value": "ResultIsString11",
    "start": 749,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 766,
    "end": 767
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 768,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 775,
    "end": 776
  },
  {
    "type": "Identifier",
    "value": "NUMBER",
    "start": 776,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 783,
    "end": 784
  },
  {
    "type": "Identifier",
    "value": "NUMBER",
    "start": 785,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 791,
    "end": 792
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 792,
    "end": 793
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 825,
    "end": 828
  },
  {
    "type": "Identifier",
    "value": "ResultIsString12",
    "start": 829,
    "end": 845
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 846,
    "end": 847
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 848,
    "end": 854
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 855,
    "end": 861
  },
  {
    "type": "Identifier",
    "value": "NUMBER",
    "start": 862,
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
    "value": "var",
    "start": 870,
    "end": 873
  },
  {
    "type": "Identifier",
    "value": "ResultIsString13",
    "start": 874,
    "end": 890
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 891,
    "end": 892
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 893,
    "end": 899
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 900,
    "end": 906
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 907,
    "end": 913
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 914,
    "end": 915
  },
  {
    "type": "Identifier",
    "value": "NUMBER",
    "start": 915,
    "end": 921
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 922,
    "end": 923
  },
  {
    "type": "Identifier",
    "value": "NUMBER",
    "start": 924,
    "end": 930
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 930,
    "end": 931
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 931,
    "end": 932
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 963,
    "end": 969
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 970,
    "end": 971
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 971,
    "end": 972
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 973,
    "end": 979
  },
  {
    "type": "Identifier",
    "value": "NUMBER",
    "start": 980,
    "end": 986
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 986,
    "end": 987
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 988,
    "end": 994
  },
  {
    "type": "Identifier",
    "value": "NUMBER1",
    "start": 995,
    "end": 1002
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1002,
    "end": 1003
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1004,
    "end": 1010
  },
  {
    "type": "Identifier",
    "value": "foo",
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
    "type": "Punctuator",
    "value": ")",
    "start": 1015,
    "end": 1016
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1016,
    "end": 1017
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1018,
    "end": 1024
  },
  {
    "type": "Identifier",
    "value": "objA",
    "start": 1025,
    "end": 1029
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1029,
    "end": 1030
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1030,
    "end": 1031
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1031,
    "end": 1032
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1033,
    "end": 1039
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 1040,
    "end": 1041
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1041,
    "end": 1042
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1042,
    "end": 1043
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1043,
    "end": 1044
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1045,
    "end": 1051
  },
  {
    "type": "Identifier",
    "value": "objA",
    "start": 1052,
    "end": 1056
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1056,
    "end": 1057
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1057,
    "end": 1058
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1058,
    "end": 1059
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 1060,
    "end": 1061
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1061,
    "end": 1062
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1062,
    "end": 1063
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1063,
    "end": 1064
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1094,
    "end": 1101
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1102,
    "end": 1105
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1106,
    "end": 1107
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1107,
    "end": 1108
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1109,
    "end": 1115
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1115,
    "end": 1116
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1117,
    "end": 1124
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1125,
    "end": 1128
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1129,
    "end": 1130
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1130,
    "end": 1131
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1132,
    "end": 1138
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1138,
    "end": 1139
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1139,
    "end": 1140
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1140,
    "end": 1141
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1142,
    "end": 1149
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1150,
    "end": 1153
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 1154,
    "end": 1155
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1155,
    "end": 1156
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1157,
    "end": 1158
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1158,
    "end": 1159
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1160,
    "end": 1162
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1163,
    "end": 1169
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1169,
    "end": 1170
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1171,
    "end": 1172
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1172,
    "end": 1173
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1174,
    "end": 1180
  },
  {
    "type": "Identifier",
    "value": "NUMBER",
    "start": 1181,
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
    "value": "x",
    "start": 1189,
    "end": 1190
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1190,
    "end": 1191
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1192,
    "end": 1198
  },
  {
    "type": "Identifier",
    "value": "NUMBER1",
    "start": 1199,
    "end": 1206
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1206,
    "end": 1207
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 1208,
    "end": 1209
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1209,
    "end": 1210
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1211,
    "end": 1217
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1218,
    "end": 1221
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1221,
    "end": 1222
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1223,
    "end": 1226
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1227,
    "end": 1228
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1229,
    "end": 1230
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1231,
    "end": 1232
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1233,
    "end": 1234
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1234,
    "end": 1235
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1236,
    "end": 1237
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1237,
    "end": 1238
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1239,
    "end": 1240
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1240,
    "end": 1241
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1242,
    "end": 1243
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1244,
    "end": 1245
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1245,
    "end": 1246
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1247,
    "end": 1248
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1248,
    "end": 1249
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1250,
    "end": 1256
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1257,
    "end": 1258
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1258,
    "end": 1259
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1259,
    "end": 1260
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1260,
    "end": 1261
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1262,
    "end": 1263
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1263,
    "end": 1264
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1265,
    "end": 1271
  },
  {
    "type": "Identifier",
    "value": "objA",
    "start": 1272,
    "end": 1276
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1276,
    "end": 1277
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1277,
    "end": 1278
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1278,
    "end": 1279
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1280,
    "end": 1281
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1281,
    "end": 1282
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1283,
    "end": 1289
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1290,
    "end": 1291
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1291,
    "end": 1292
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1292,
    "end": 1295
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1295,
    "end": 1296
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1297,
    "end": 1298
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1298,
    "end": 1299
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1300,
    "end": 1306
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 1307,
    "end": 1308
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1308,
    "end": 1309
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1309,
    "end": 1310
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1310,
    "end": 1311
  }
]
```
