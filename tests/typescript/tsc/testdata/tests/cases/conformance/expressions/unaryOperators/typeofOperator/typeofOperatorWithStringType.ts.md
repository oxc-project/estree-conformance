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
            "name": "STRING",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
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
            "name": "STRING1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSStringKeyword",
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
                "value": "",
                "raw": "\"\"",
                "start": 88,
                "end": 90
              },
              {
                "type": "Literal",
                "value": "abc",
                "raw": "\"abc\"",
                "start": 92,
                "end": 97
              }
            ],
            "start": 87,
            "end": 98
          },
          "definite": false,
          "start": 67,
          "end": 98
        }
      ],
      "declare": false,
      "start": 63,
      "end": 99
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 110,
        "end": 113
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 117,
          "end": 123
        },
        "start": 115,
        "end": 123
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": "abc",
              "raw": "\"abc\"",
              "start": 133,
              "end": 138
            },
            "start": 126,
            "end": 139
          }
        ],
        "start": 124,
        "end": 141
      },
      "expression": false,
      "start": 101,
      "end": 141
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
        "start": 149,
        "end": 150
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
              "start": 164,
              "end": 165
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 167,
                "end": 173
              },
              "start": 165,
              "end": 173
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
            "start": 157,
            "end": 174
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
              "start": 186,
              "end": 189
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
                      "value": "",
                      "raw": "\"\"",
                      "start": 201,
                      "end": 203
                    },
                    "start": 194,
                    "end": 204
                  }
                ],
                "start": 192,
                "end": 206
              },
              "expression": false,
              "start": 189,
              "end": 206
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 179,
            "end": 206
          }
        ],
        "start": 151,
        "end": 208
      },
      "abstract": false,
      "declare": false,
      "start": 143,
      "end": 208
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 219,
        "end": 220
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
                        "type": "TSStringKeyword",
                        "start": 242,
                        "end": 248
                      },
                      "start": 240,
                      "end": 248
                    },
                    "start": 238,
                    "end": 248
                  },
                  "init": null,
                  "definite": true,
                  "start": 238,
                  "end": 248
                }
              ],
              "declare": false,
              "start": 234,
              "end": 249
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 227,
            "end": 249
          }
        ],
        "start": 221,
        "end": 251
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 209,
      "end": 251
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
            "start": 257,
            "end": 261
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 268,
              "end": 269
            },
            "typeArguments": null,
            "arguments": [],
            "start": 264,
            "end": 271
          },
          "definite": false,
          "start": 257,
          "end": 271
        }
      ],
      "declare": false,
      "start": 253,
      "end": 272
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
            "start": 297,
            "end": 312
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "STRING",
              "optional": false,
              "typeAnnotation": null,
              "start": 322,
              "end": 328
            },
            "prefix": true,
            "start": 315,
            "end": 328
          },
          "definite": false,
          "start": 297,
          "end": 328
        }
      ],
      "declare": false,
      "start": 293,
      "end": 329
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
            "start": 334,
            "end": 349
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "STRING1",
              "optional": false,
              "typeAnnotation": null,
              "start": 359,
              "end": 366
            },
            "prefix": true,
            "start": 352,
            "end": 366
          },
          "definite": false,
          "start": 334,
          "end": 366
        }
      ],
      "declare": false,
      "start": 330,
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
            "name": "ResultIsString3",
            "optional": false,
            "typeAnnotation": null,
            "start": 396,
            "end": 411
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "Literal",
              "value": "",
              "raw": "\"\"",
              "start": 421,
              "end": 423
            },
            "prefix": true,
            "start": 414,
            "end": 423
          },
          "definite": false,
          "start": 396,
          "end": 423
        }
      ],
      "declare": false,
      "start": 392,
      "end": 424
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
            "start": 429,
            "end": 444
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
                    "start": 456,
                    "end": 457
                  },
                  "value": {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 459,
                    "end": 461
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 456,
                  "end": 461
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
                    "start": 463,
                    "end": 464
                  },
                  "value": {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 466,
                    "end": 468
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 463,
                  "end": 468
                }
              ],
              "start": 454,
              "end": 470
            },
            "prefix": true,
            "start": 447,
            "end": 470
          },
          "definite": false,
          "start": 429,
          "end": 470
        }
      ],
      "declare": false,
      "start": 425,
      "end": 471
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
            "start": 476,
            "end": 491
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
                    "start": 503,
                    "end": 504
                  },
                  "value": {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 506,
                    "end": 508
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 503,
                  "end": 508
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
                    "start": 510,
                    "end": 511
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
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 517,
                            "end": 523
                          },
                          "start": 515,
                          "end": 523
                        },
                        "start": 514,
                        "end": 523
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
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 537,
                            "end": 538
                          },
                          "start": 530,
                          "end": 539
                        }
                      ],
                      "start": 528,
                      "end": 541
                    },
                    "id": null,
                    "generator": false,
                    "start": 513,
                    "end": 541
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 510,
                  "end": 541
                }
              ],
              "start": 501,
              "end": 543
            },
            "prefix": true,
            "start": 494,
            "end": 543
          },
          "definite": false,
          "start": 476,
          "end": 543
        }
      ],
      "declare": false,
      "start": 472,
      "end": 544
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
            "start": 577,
            "end": 592
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
                "start": 602,
                "end": 606
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 607,
                "end": 608
              },
              "optional": false,
              "computed": false,
              "start": 602,
              "end": 608
            },
            "prefix": true,
            "start": 595,
            "end": 608
          },
          "definite": false,
          "start": 577,
          "end": 608
        }
      ],
      "declare": false,
      "start": 573,
      "end": 609
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
            "start": 614,
            "end": 629
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
                "start": 639,
                "end": 640
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 641,
                "end": 642
              },
              "optional": false,
              "computed": false,
              "start": 639,
              "end": 642
            },
            "prefix": true,
            "start": 632,
            "end": 642
          },
          "definite": false,
          "start": 614,
          "end": 642
        }
      ],
      "declare": false,
      "start": 610,
      "end": 643
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
            "start": 648,
            "end": 663
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "STRING1",
                "optional": false,
                "typeAnnotation": null,
                "start": 673,
                "end": 680
              },
              "property": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 681,
                "end": 682
              },
              "optional": false,
              "computed": true,
              "start": 673,
              "end": 683
            },
            "prefix": true,
            "start": 666,
            "end": 683
          },
          "definite": false,
          "start": 648,
          "end": 683
        }
      ],
      "declare": false,
      "start": 644,
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
            "name": "ResultIsString9",
            "optional": false,
            "typeAnnotation": null,
            "start": 689,
            "end": 704
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
                "start": 714,
                "end": 717
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 714,
              "end": 719
            },
            "prefix": true,
            "start": 707,
            "end": 719
          },
          "definite": false,
          "start": 689,
          "end": 719
        }
      ],
      "declare": false,
      "start": 685,
      "end": 720
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
            "start": 725,
            "end": 741
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
                  "start": 751,
                  "end": 752
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 753,
                  "end": 756
                },
                "optional": false,
                "computed": false,
                "start": 751,
                "end": 756
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 751,
              "end": 758
            },
            "prefix": true,
            "start": 744,
            "end": 758
          },
          "definite": false,
          "start": 725,
          "end": 758
        }
      ],
      "declare": false,
      "start": 721,
      "end": 759
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
            "start": 764,
            "end": 780
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "STRING",
                "optional": false,
                "typeAnnotation": null,
                "start": 791,
                "end": 797
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "STRING",
                "optional": false,
                "typeAnnotation": null,
                "start": 800,
                "end": 806
              },
              "start": 791,
              "end": 806
            },
            "prefix": true,
            "start": 783,
            "end": 807
          },
          "definite": false,
          "start": 764,
          "end": 807
        }
      ],
      "declare": false,
      "start": 760,
      "end": 808
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
            "start": 813,
            "end": 829
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
                  "name": "STRING",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 839,
                  "end": 845
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "charAt",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 846,
                  "end": 852
                },
                "optional": false,
                "computed": false,
                "start": 839,
                "end": 852
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 853,
                  "end": 854
                }
              ],
              "optional": false,
              "start": 839,
              "end": 855
            },
            "prefix": true,
            "start": 832,
            "end": 855
          },
          "definite": false,
          "start": 813,
          "end": 855
        }
      ],
      "declare": false,
      "start": 809,
      "end": 856
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
            "start": 892,
            "end": 908
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
                "name": "STRING",
                "optional": false,
                "typeAnnotation": null,
                "start": 925,
                "end": 931
              },
              "prefix": true,
              "start": 918,
              "end": 931
            },
            "prefix": true,
            "start": 911,
            "end": 931
          },
          "definite": false,
          "start": 892,
          "end": 931
        }
      ],
      "declare": false,
      "start": 888,
      "end": 932
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
            "name": "ResultIsString14",
            "optional": false,
            "typeAnnotation": null,
            "start": 937,
            "end": 953
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
                    "name": "STRING",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 978,
                    "end": 984
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "STRING",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 987,
                    "end": 993
                  },
                  "start": 978,
                  "end": 993
                },
                "prefix": true,
                "start": 970,
                "end": 994
              },
              "prefix": true,
              "start": 963,
              "end": 994
            },
            "prefix": true,
            "start": 956,
            "end": 994
          },
          "definite": false,
          "start": 937,
          "end": 994
        }
      ],
      "declare": false,
      "start": 933,
      "end": 995
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "typeof",
        "argument": {
          "type": "Literal",
          "value": "",
          "raw": "\"\"",
          "start": 1033,
          "end": 1035
        },
        "prefix": true,
        "start": 1026,
        "end": 1035
      },
      "directive": null,
      "start": 1026,
      "end": 1036
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "typeof",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "STRING",
          "optional": false,
          "typeAnnotation": null,
          "start": 1044,
          "end": 1050
        },
        "prefix": true,
        "start": 1037,
        "end": 1050
      },
      "directive": null,
      "start": 1037,
      "end": 1051
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "typeof",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "STRING1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1059,
          "end": 1066
        },
        "prefix": true,
        "start": 1052,
        "end": 1066
      },
      "directive": null,
      "start": 1052,
      "end": 1067
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
            "start": 1075,
            "end": 1078
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 1075,
          "end": 1080
        },
        "prefix": true,
        "start": 1068,
        "end": 1080
      },
      "directive": null,
      "start": 1068,
      "end": 1081
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
                "start": 1089,
                "end": 1093
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1094,
                "end": 1095
              },
              "optional": false,
              "computed": false,
              "start": 1089,
              "end": 1095
            },
            "prefix": true,
            "start": 1082,
            "end": 1095
          },
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 1097,
              "end": 1098
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 1099,
              "end": 1100
            },
            "optional": false,
            "computed": false,
            "start": 1097,
            "end": 1100
          }
        ],
        "start": 1082,
        "end": 1100
      },
      "directive": null,
      "start": 1082,
      "end": 1101
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
                "type": "TSStringKeyword",
                "start": 1146,
                "end": 1152
              },
              "start": 1144,
              "end": 1152
            },
            "start": 1143,
            "end": 1152
          },
          "init": null,
          "definite": false,
          "start": 1143,
          "end": 1152
        }
      ],
      "declare": true,
      "start": 1131,
      "end": 1153
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
                  "type": "TSStringKeyword",
                  "start": 1169,
                  "end": 1175
                },
                "start": 1169,
                "end": 1177
              },
              "start": 1167,
              "end": 1177
            },
            "start": 1166,
            "end": 1177
          },
          "init": null,
          "definite": false,
          "start": 1166,
          "end": 1177
        }
      ],
      "declare": true,
      "start": 1154,
      "end": 1178
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
                    "type": "TSStringKeyword",
                    "start": 1200,
                    "end": 1206
                  },
                  "start": 1197,
                  "end": 1206
                },
                "start": 1194,
                "end": 1206
              },
              "start": 1192,
              "end": 1206
            },
            "start": 1191,
            "end": 1206
          },
          "init": null,
          "definite": false,
          "start": 1191,
          "end": 1206
        }
      ],
      "declare": true,
      "start": 1179,
      "end": 1207
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "z",
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
            "name": "STRING",
            "optional": false,
            "typeAnnotation": null,
            "start": 1218,
            "end": 1224
          },
          "prefix": true,
          "start": 1211,
          "end": 1224
        },
        "directive": null,
        "start": 1211,
        "end": 1225
      },
      "start": 1208,
      "end": 1225
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null,
        "start": 1226,
        "end": 1227
      },
      "body": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "STRING1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1236,
            "end": 1243
          },
          "prefix": true,
          "start": 1229,
          "end": 1243
        },
        "directive": null,
        "start": 1229,
        "end": 1244
      },
      "start": 1226,
      "end": 1244
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "r",
        "optional": false,
        "typeAnnotation": null,
        "start": 1245,
        "end": 1246
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
            "start": 1255,
            "end": 1258
          },
          "prefix": true,
          "start": 1248,
          "end": 1258
        },
        "directive": null,
        "start": 1248,
        "end": 1259
      },
      "start": 1245,
      "end": 1259
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
            "start": 1264,
            "end": 1265
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
                  "start": 1270,
                  "end": 1271
                },
                "value": {
                  "type": "Literal",
                  "value": "",
                  "raw": "\"\"",
                  "start": 1273,
                  "end": 1275
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1270,
                "end": 1275
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
                  "start": 1277,
                  "end": 1278
                },
                "value": {
                  "type": "Literal",
                  "value": "",
                  "raw": "\"\"",
                  "start": 1280,
                  "end": 1282
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1277,
                "end": 1282
              }
            ],
            "start": 1268,
            "end": 1284
          },
          "definite": false,
          "start": 1264,
          "end": 1284
        }
      ],
      "declare": false,
      "start": 1260,
      "end": 1285
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "z",
        "optional": false,
        "typeAnnotation": null,
        "start": 1286,
        "end": 1287
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
              "start": 1296,
              "end": 1297
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1298,
              "end": 1299
            },
            "optional": false,
            "computed": false,
            "start": 1296,
            "end": 1299
          },
          "prefix": true,
          "start": 1289,
          "end": 1299
        },
        "directive": null,
        "start": 1289,
        "end": 1300
      },
      "start": 1286,
      "end": 1300
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "z",
        "optional": false,
        "typeAnnotation": null,
        "start": 1301,
        "end": 1302
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
              "start": 1311,
              "end": 1315
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1316,
              "end": 1317
            },
            "optional": false,
            "computed": false,
            "start": 1311,
            "end": 1317
          },
          "prefix": true,
          "start": 1304,
          "end": 1317
        },
        "directive": null,
        "start": 1304,
        "end": 1318
      },
      "start": 1301,
      "end": 1318
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "z",
        "optional": false,
        "typeAnnotation": null,
        "start": 1319,
        "end": 1320
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
              "start": 1329,
              "end": 1330
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1331,
              "end": 1334
            },
            "optional": false,
            "computed": false,
            "start": 1329,
            "end": 1334
          },
          "prefix": true,
          "start": 1322,
          "end": 1334
        },
        "directive": null,
        "start": 1322,
        "end": 1335
      },
      "start": 1319,
      "end": 1335
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "z",
        "optional": false,
        "typeAnnotation": null,
        "start": 1336,
        "end": 1337
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
              "start": 1346,
              "end": 1347
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 1348,
              "end": 1349
            },
            "optional": false,
            "computed": false,
            "start": 1346,
            "end": 1349
          },
          "prefix": true,
          "start": 1339,
          "end": 1349
        },
        "directive": null,
        "start": 1339,
        "end": 1350
      },
      "start": 1336,
      "end": 1350
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 35,
  "end": 1350
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
    "value": "STRING",
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
    "value": "string",
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
    "value": "STRING1",
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
    "value": "string",
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
    "type": "String",
    "value": "\"\"",
    "start": 88,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 90,
    "end": 91
  },
  {
    "type": "String",
    "value": "\"abc\"",
    "start": 92,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 98,
    "end": 99
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 101,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 110,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "string",
    "start": 117,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 124,
    "end": 125
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 126,
    "end": 132
  },
  {
    "type": "String",
    "value": "\"abc\"",
    "start": 133,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 140,
    "end": 141
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 143,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 151,
    "end": 152
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 157,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 165,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 167,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 173,
    "end": 174
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 179,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 186,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 192,
    "end": 193
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 194,
    "end": 200
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 201,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 207,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 209,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 221,
    "end": 222
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 227,
    "end": 233
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 234,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 238,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 240,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 242,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "type": "Keyword",
    "value": "var",
    "start": 253,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "objA",
    "start": 257,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 262,
    "end": 263
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 264,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 271,
    "end": 272
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 293,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "ResultIsString1",
    "start": 297,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 313,
    "end": 314
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 315,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "STRING",
    "start": 322,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 328,
    "end": 329
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 330,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "ResultIsString2",
    "start": 334,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 350,
    "end": 351
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 352,
    "end": 358
  },
  {
    "type": "Identifier",
    "value": "STRING1",
    "start": 359,
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
    "start": 392,
    "end": 395
  },
  {
    "type": "Identifier",
    "value": "ResultIsString3",
    "start": 396,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 412,
    "end": 413
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 414,
    "end": 420
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 421,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 423,
    "end": 424
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 425,
    "end": 428
  },
  {
    "type": "Identifier",
    "value": "ResultIsString4",
    "start": 429,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 445,
    "end": 446
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 447,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 454,
    "end": 455
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "\"\"",
    "start": 459,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 461,
    "end": 462
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 463,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 464,
    "end": 465
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 466,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 469,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 470,
    "end": 471
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 472,
    "end": 475
  },
  {
    "type": "Identifier",
    "value": "ResultIsString5",
    "start": 476,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 492,
    "end": 493
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 494,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 501,
    "end": 502
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 503,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 504,
    "end": 505
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 506,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 508,
    "end": 509
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 510,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 511,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 513,
    "end": 514
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 514,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 515,
    "end": 516
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 517,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 523,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 525,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 528,
    "end": 529
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 530,
    "end": 536
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 537,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 538,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 540,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 542,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 543,
    "end": 544
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 573,
    "end": 576
  },
  {
    "type": "Identifier",
    "value": "ResultIsString6",
    "start": 577,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 593,
    "end": 594
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 595,
    "end": 601
  },
  {
    "type": "Identifier",
    "value": "objA",
    "start": 602,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 606,
    "end": 607
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 607,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 608,
    "end": 609
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 610,
    "end": 613
  },
  {
    "type": "Identifier",
    "value": "ResultIsString7",
    "start": 614,
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
    "value": "typeof",
    "start": 632,
    "end": 638
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 639,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 640,
    "end": 641
  },
  {
    "type": "Identifier",
    "value": "n",
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
    "type": "Keyword",
    "value": "var",
    "start": 644,
    "end": 647
  },
  {
    "type": "Identifier",
    "value": "ResultIsString8",
    "start": 648,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 664,
    "end": 665
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 666,
    "end": 672
  },
  {
    "type": "Identifier",
    "value": "STRING1",
    "start": 673,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 680,
    "end": 681
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 681,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "ResultIsString9",
    "start": 689,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 705,
    "end": 706
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 707,
    "end": 713
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 714,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 717,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 718,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 719,
    "end": 720
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 721,
    "end": 724
  },
  {
    "type": "Identifier",
    "value": "ResultIsString10",
    "start": 725,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 742,
    "end": 743
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 744,
    "end": 750
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 751,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 752,
    "end": 753
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 753,
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
    "value": ")",
    "start": 757,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 758,
    "end": 759
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 760,
    "end": 763
  },
  {
    "type": "Identifier",
    "value": "ResultIsString11",
    "start": 764,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 781,
    "end": 782
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 783,
    "end": 789
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 790,
    "end": 791
  },
  {
    "type": "Identifier",
    "value": "STRING",
    "start": 791,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 798,
    "end": 799
  },
  {
    "type": "Identifier",
    "value": "STRING",
    "start": 800,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 806,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 807,
    "end": 808
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 809,
    "end": 812
  },
  {
    "type": "Identifier",
    "value": "ResultIsString12",
    "start": 813,
    "end": 829
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 830,
    "end": 831
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 832,
    "end": 838
  },
  {
    "type": "Identifier",
    "value": "STRING",
    "start": 839,
    "end": 845
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 845,
    "end": 846
  },
  {
    "type": "Identifier",
    "value": "charAt",
    "start": 846,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 852,
    "end": 853
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 853,
    "end": 854
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 854,
    "end": 855
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 855,
    "end": 856
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 888,
    "end": 891
  },
  {
    "type": "Identifier",
    "value": "ResultIsString13",
    "start": 892,
    "end": 908
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 909,
    "end": 910
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 911,
    "end": 917
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 918,
    "end": 924
  },
  {
    "type": "Identifier",
    "value": "STRING",
    "start": 925,
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
    "value": "var",
    "start": 933,
    "end": 936
  },
  {
    "type": "Identifier",
    "value": "ResultIsString14",
    "start": 937,
    "end": 953
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 954,
    "end": 955
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 956,
    "end": 962
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 963,
    "end": 969
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 970,
    "end": 976
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 977,
    "end": 978
  },
  {
    "type": "Identifier",
    "value": "STRING",
    "start": 978,
    "end": 984
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 985,
    "end": 986
  },
  {
    "type": "Identifier",
    "value": "STRING",
    "start": 987,
    "end": 993
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 993,
    "end": 994
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 994,
    "end": 995
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1026,
    "end": 1032
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 1033,
    "end": 1035
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1035,
    "end": 1036
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1037,
    "end": 1043
  },
  {
    "type": "Identifier",
    "value": "STRING",
    "start": 1044,
    "end": 1050
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1050,
    "end": 1051
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1052,
    "end": 1058
  },
  {
    "type": "Identifier",
    "value": "STRING1",
    "start": 1059,
    "end": 1066
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1066,
    "end": 1067
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1068,
    "end": 1074
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1075,
    "end": 1078
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1078,
    "end": 1079
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1079,
    "end": 1080
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1080,
    "end": 1081
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1082,
    "end": 1088
  },
  {
    "type": "Identifier",
    "value": "objA",
    "start": 1089,
    "end": 1093
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1093,
    "end": 1094
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1094,
    "end": 1095
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1095,
    "end": 1096
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 1097,
    "end": 1098
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1098,
    "end": 1099
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1099,
    "end": 1100
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1100,
    "end": 1101
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1131,
    "end": 1138
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1139,
    "end": 1142
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1143,
    "end": 1144
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1144,
    "end": 1145
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1146,
    "end": 1152
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1152,
    "end": 1153
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1154,
    "end": 1161
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1162,
    "end": 1165
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1166,
    "end": 1167
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1167,
    "end": 1168
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1169,
    "end": 1175
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1175,
    "end": 1176
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1176,
    "end": 1177
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1177,
    "end": 1178
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1179,
    "end": 1186
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1187,
    "end": 1190
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 1191,
    "end": 1192
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1192,
    "end": 1193
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1194,
    "end": 1195
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1195,
    "end": 1196
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1197,
    "end": 1199
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1200,
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
    "value": "z",
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
    "value": "STRING",
    "start": 1218,
    "end": 1224
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1224,
    "end": 1225
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1226,
    "end": 1227
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1227,
    "end": 1228
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1229,
    "end": 1235
  },
  {
    "type": "Identifier",
    "value": "STRING1",
    "start": 1236,
    "end": 1243
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1243,
    "end": 1244
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 1245,
    "end": 1246
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1246,
    "end": 1247
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1248,
    "end": 1254
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1255,
    "end": 1258
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1258,
    "end": 1259
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1260,
    "end": 1263
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1264,
    "end": 1265
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1266,
    "end": 1267
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1268,
    "end": 1269
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1270,
    "end": 1271
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1271,
    "end": 1272
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 1273,
    "end": 1275
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1275,
    "end": 1276
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1277,
    "end": 1278
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1278,
    "end": 1279
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 1280,
    "end": 1282
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1283,
    "end": 1284
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1284,
    "end": 1285
  },
  {
    "type": "Identifier",
    "value": "z",
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
    "type": "Keyword",
    "value": "typeof",
    "start": 1289,
    "end": 1295
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1296,
    "end": 1297
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1297,
    "end": 1298
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1298,
    "end": 1299
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1299,
    "end": 1300
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1301,
    "end": 1302
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1302,
    "end": 1303
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1304,
    "end": 1310
  },
  {
    "type": "Identifier",
    "value": "objA",
    "start": 1311,
    "end": 1315
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1315,
    "end": 1316
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1316,
    "end": 1317
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1317,
    "end": 1318
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1319,
    "end": 1320
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1320,
    "end": 1321
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1322,
    "end": 1328
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1329,
    "end": 1330
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1330,
    "end": 1331
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1331,
    "end": 1334
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1334,
    "end": 1335
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1336,
    "end": 1337
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1337,
    "end": 1338
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1339,
    "end": 1345
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 1346,
    "end": 1347
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1347,
    "end": 1348
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1348,
    "end": 1349
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1349,
    "end": 1350
  }
]
```
