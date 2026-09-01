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
            "name": "ANY",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 50,
                "end": 53
              },
              "start": 48,
              "end": 53
            },
            "start": 45,
            "end": 53
          },
          "init": null,
          "definite": false,
          "start": 45,
          "end": 53
        }
      ],
      "declare": true,
      "start": 33,
      "end": 54
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
            "name": "ANY1",
            "optional": false,
            "typeAnnotation": null,
            "start": 67,
            "end": 71
          },
          "init": null,
          "definite": false,
          "start": 67,
          "end": 71
        }
      ],
      "declare": true,
      "start": 55,
      "end": 72
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
            "name": "ANY2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 83,
                  "end": 86
                },
                "start": 83,
                "end": 88
              },
              "start": 81,
              "end": 88
            },
            "start": 77,
            "end": 88
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 92,
                "end": 94
              },
              {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 96,
                "end": 98
              }
            ],
            "start": 91,
            "end": 99
          },
          "definite": false,
          "start": 77,
          "end": 99
        }
      ],
      "declare": false,
      "start": 73,
      "end": 100
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "members": [],
                    "start": 124,
                    "end": 126
                  },
                  "start": 121,
                  "end": 126
                },
                "start": 118,
                "end": 126
              },
              "start": 116,
              "end": 126
            },
            "start": 113,
            "end": 126
          },
          "init": null,
          "definite": false,
          "start": 113,
          "end": 126
        }
      ],
      "declare": true,
      "start": 101,
      "end": 127
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
            "name": "obj1",
            "optional": false,
            "typeAnnotation": null,
            "start": 132,
            "end": 136
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 141,
                  "end": 142
                },
                "value": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "\"a\"",
                  "start": 144,
                  "end": 147
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 141,
                "end": 147
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
                  "start": 149,
                  "end": 150
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 158,
                    "end": 161
                  },
                  "id": null,
                  "generator": false,
                  "start": 152,
                  "end": 161
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 149,
                "end": 161
              }
            ],
            "start": 139,
            "end": 162
          },
          "definite": false,
          "start": 132,
          "end": 162
        }
      ],
      "declare": false,
      "start": 128,
      "end": 163
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 174,
        "end": 177
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 181,
          "end": 184
        },
        "start": 179,
        "end": 184
      },
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 199,
                      "end": 202
                    },
                    "start": 197,
                    "end": 202
                  },
                  "start": 195,
                  "end": 202
                },
                "init": null,
                "definite": true,
                "start": 195,
                "end": 202
              }
            ],
            "declare": false,
            "start": 191,
            "end": 203
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 215,
              "end": 216
            },
            "start": 208,
            "end": 217
          }
        ],
        "start": 185,
        "end": 219
      },
      "expression": false,
      "start": 165,
      "end": 219
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
        "start": 226,
        "end": 227
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
              "start": 241,
              "end": 242
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 244,
                "end": 247
              },
              "start": 242,
              "end": 247
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
            "start": 234,
            "end": 248
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
              "start": 260,
              "end": 263
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
                    "type": "VariableDeclaration",
                    "kind": "var",
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
                              "type": "TSAnyKeyword",
                              "start": 284,
                              "end": 287
                            },
                            "start": 282,
                            "end": 287
                          },
                          "start": 280,
                          "end": 287
                        },
                        "init": null,
                        "definite": true,
                        "start": 280,
                        "end": 287
                      }
                    ],
                    "declare": false,
                    "start": 276,
                    "end": 288
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 304,
                      "end": 305
                    },
                    "start": 297,
                    "end": 306
                  }
                ],
                "start": 266,
                "end": 312
              },
              "expression": false,
              "start": 263,
              "end": 312
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 253,
            "end": 312
          }
        ],
        "start": 228,
        "end": 314
      },
      "abstract": false,
      "declare": false,
      "start": 220,
      "end": 314
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 325,
        "end": 326
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
                        "type": "TSAnyKeyword",
                        "start": 348,
                        "end": 351
                      },
                      "start": 346,
                      "end": 351
                    },
                    "start": 344,
                    "end": 351
                  },
                  "init": null,
                  "definite": true,
                  "start": 344,
                  "end": 351
                }
              ],
              "declare": false,
              "start": 340,
              "end": 352
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 333,
            "end": 352
          }
        ],
        "start": 327,
        "end": 354
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 315,
      "end": 354
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
            "start": 359,
            "end": 363
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 370,
              "end": 371
            },
            "typeArguments": null,
            "arguments": [],
            "start": 366,
            "end": 373
          },
          "definite": false,
          "start": 359,
          "end": 373
        }
      ],
      "declare": false,
      "start": 355,
      "end": 374
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
            "start": 396,
            "end": 411
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ANY1",
              "optional": false,
              "typeAnnotation": null,
              "start": 421,
              "end": 425
            },
            "prefix": true,
            "start": 414,
            "end": 425
          },
          "definite": false,
          "start": 396,
          "end": 425
        }
      ],
      "declare": false,
      "start": 392,
      "end": 426
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
            "start": 431,
            "end": 446
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ANY2",
              "optional": false,
              "typeAnnotation": null,
              "start": 456,
              "end": 460
            },
            "prefix": true,
            "start": 449,
            "end": 460
          },
          "definite": false,
          "start": 431,
          "end": 460
        }
      ],
      "declare": false,
      "start": 427,
      "end": 461
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
            "start": 466,
            "end": 481
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 491,
              "end": 492
            },
            "prefix": true,
            "start": 484,
            "end": 492
          },
          "definite": false,
          "start": 466,
          "end": 492
        }
      ],
      "declare": false,
      "start": 462,
      "end": 493
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
            "start": 498,
            "end": 513
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 523,
              "end": 524
            },
            "prefix": true,
            "start": 516,
            "end": 524
          },
          "definite": false,
          "start": 498,
          "end": 524
        }
      ],
      "declare": false,
      "start": 494,
      "end": 525
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
            "start": 530,
            "end": 545
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null,
              "start": 555,
              "end": 558
            },
            "prefix": true,
            "start": 548,
            "end": 558
          },
          "definite": false,
          "start": 530,
          "end": 558
        }
      ],
      "declare": false,
      "start": 526,
      "end": 559
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
            "start": 564,
            "end": 579
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj1",
              "optional": false,
              "typeAnnotation": null,
              "start": 589,
              "end": 593
            },
            "prefix": true,
            "start": 582,
            "end": 593
          },
          "definite": false,
          "start": 564,
          "end": 593
        }
      ],
      "declare": false,
      "start": 560,
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
            "start": 620,
            "end": 635
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 645,
              "end": 654
            },
            "prefix": true,
            "start": 638,
            "end": 654
          },
          "definite": false,
          "start": 620,
          "end": 654
        }
      ],
      "declare": false,
      "start": 616,
      "end": 655
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
            "start": 660,
            "end": 675
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 685,
              "end": 689
            },
            "prefix": true,
            "start": 678,
            "end": 689
          },
          "definite": false,
          "start": 660,
          "end": 689
        }
      ],
      "declare": false,
      "start": 656,
      "end": 690
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
            "start": 695,
            "end": 710
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 720,
              "end": 722
            },
            "prefix": true,
            "start": 713,
            "end": 722
          },
          "definite": false,
          "start": 695,
          "end": 722
        }
      ],
      "declare": false,
      "start": 691,
      "end": 723
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
            "start": 753,
            "end": 769
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "ANY2",
                "optional": false,
                "typeAnnotation": null,
                "start": 779,
                "end": 783
              },
              "property": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 784,
                "end": 785
              },
              "optional": false,
              "computed": true,
              "start": 779,
              "end": 786
            },
            "prefix": true,
            "start": 772,
            "end": 786
          },
          "definite": false,
          "start": 753,
          "end": 786
        }
      ],
      "declare": false,
      "start": 749,
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
            "name": "ResultIsString11",
            "optional": false,
            "typeAnnotation": null,
            "start": 792,
            "end": 808
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
                "start": 818,
                "end": 822
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 823,
                "end": 824
              },
              "optional": false,
              "computed": false,
              "start": 818,
              "end": 824
            },
            "prefix": true,
            "start": 811,
            "end": 824
          },
          "definite": false,
          "start": 792,
          "end": 824
        }
      ],
      "declare": false,
      "start": 788,
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
            "name": "ResultIsString12",
            "optional": false,
            "typeAnnotation": null,
            "start": 830,
            "end": 846
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj1",
                "optional": false,
                "typeAnnotation": null,
                "start": 856,
                "end": 860
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 861,
                "end": 862
              },
              "optional": false,
              "computed": false,
              "start": 856,
              "end": 862
            },
            "prefix": true,
            "start": 849,
            "end": 862
          },
          "definite": false,
          "start": 830,
          "end": 862
        }
      ],
      "declare": false,
      "start": 826,
      "end": 863
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
            "start": 868,
            "end": 884
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
                "start": 894,
                "end": 895
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 896,
                "end": 897
              },
              "optional": false,
              "computed": false,
              "start": 894,
              "end": 897
            },
            "prefix": true,
            "start": 887,
            "end": 897
          },
          "definite": false,
          "start": 868,
          "end": 897
        }
      ],
      "declare": false,
      "start": 864,
      "end": 898
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
            "start": 903,
            "end": 919
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
                "start": 929,
                "end": 932
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 929,
              "end": 934
            },
            "prefix": true,
            "start": 922,
            "end": 934
          },
          "definite": false,
          "start": 903,
          "end": 934
        }
      ],
      "declare": false,
      "start": 899,
      "end": 935
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
            "name": "ResultIsString15",
            "optional": false,
            "typeAnnotation": null,
            "start": 940,
            "end": 956
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
                  "start": 966,
                  "end": 967
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 968,
                  "end": 971
                },
                "optional": false,
                "computed": false,
                "start": 966,
                "end": 971
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 966,
              "end": 973
            },
            "prefix": true,
            "start": 959,
            "end": 973
          },
          "definite": false,
          "start": 940,
          "end": 973
        }
      ],
      "declare": false,
      "start": 936,
      "end": 974
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
            "name": "ResultIsString16",
            "optional": false,
            "typeAnnotation": null,
            "start": 979,
            "end": 995
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "ANY",
                "optional": false,
                "typeAnnotation": null,
                "start": 1006,
                "end": 1009
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "ANY1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1012,
                "end": 1016
              },
              "start": 1006,
              "end": 1016
            },
            "prefix": true,
            "start": 998,
            "end": 1017
          },
          "definite": false,
          "start": 979,
          "end": 1017
        }
      ],
      "declare": false,
      "start": 975,
      "end": 1018
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
            "name": "ResultIsString17",
            "optional": false,
            "typeAnnotation": null,
            "start": 1023,
            "end": 1039
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 1050,
                "end": 1054
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 1057,
                "end": 1066
              },
              "start": 1050,
              "end": 1066
            },
            "prefix": true,
            "start": 1042,
            "end": 1067
          },
          "definite": false,
          "start": 1023,
          "end": 1067
        }
      ],
      "declare": false,
      "start": 1019,
      "end": 1068
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
            "name": "ResultIsString18",
            "optional": false,
            "typeAnnotation": null,
            "start": 1073,
            "end": 1089
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 1100,
                "end": 1104
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 1107,
                "end": 1111
              },
              "start": 1100,
              "end": 1111
            },
            "prefix": true,
            "start": 1092,
            "end": 1112
          },
          "definite": false,
          "start": 1073,
          "end": 1112
        }
      ],
      "declare": false,
      "start": 1069,
      "end": 1113
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
            "name": "ResultIsString19",
            "optional": false,
            "typeAnnotation": null,
            "start": 1118,
            "end": 1134
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 1145,
                "end": 1154
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 1157,
                "end": 1166
              },
              "start": 1145,
              "end": 1166
            },
            "prefix": true,
            "start": 1137,
            "end": 1167
          },
          "definite": false,
          "start": 1118,
          "end": 1167
        }
      ],
      "declare": false,
      "start": 1114,
      "end": 1168
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
            "name": "ResultIsString20",
            "optional": false,
            "typeAnnotation": null,
            "start": 1204,
            "end": 1220
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
                "name": "ANY",
                "optional": false,
                "typeAnnotation": null,
                "start": 1237,
                "end": 1240
              },
              "prefix": true,
              "start": 1230,
              "end": 1240
            },
            "prefix": true,
            "start": 1223,
            "end": 1240
          },
          "definite": false,
          "start": 1204,
          "end": 1240
        }
      ],
      "declare": false,
      "start": 1200,
      "end": 1241
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
            "name": "ResultIsString21",
            "optional": false,
            "typeAnnotation": null,
            "start": 1246,
            "end": 1262
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
                    "name": "ANY",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1287,
                    "end": 1290
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ANY1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1293,
                    "end": 1297
                  },
                  "start": 1287,
                  "end": 1297
                },
                "prefix": true,
                "start": 1279,
                "end": 1298
              },
              "prefix": true,
              "start": 1272,
              "end": 1298
            },
            "prefix": true,
            "start": 1265,
            "end": 1298
          },
          "definite": false,
          "start": 1246,
          "end": 1298
        }
      ],
      "declare": false,
      "start": 1242,
      "end": 1299
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "typeof",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "ANY",
          "optional": false,
          "typeAnnotation": null,
          "start": 1337,
          "end": 1340
        },
        "prefix": true,
        "start": 1330,
        "end": 1340
      },
      "directive": null,
      "start": 1330,
      "end": 1341
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "typeof",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "ANY1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1349,
          "end": 1353
        },
        "prefix": true,
        "start": 1342,
        "end": 1353
      },
      "directive": null,
      "start": 1342,
      "end": 1354
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
            "name": "ANY2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1362,
            "end": 1366
          },
          "property": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 1367,
            "end": 1368
          },
          "optional": false,
          "computed": true,
          "start": 1362,
          "end": 1369
        },
        "prefix": true,
        "start": 1355,
        "end": 1369
      },
      "directive": null,
      "start": 1355,
      "end": 1370
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
              "type": "Identifier",
              "decorators": [],
              "name": "ANY",
              "optional": false,
              "typeAnnotation": null,
              "start": 1378,
              "end": 1381
            },
            "prefix": true,
            "start": 1371,
            "end": 1381
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "ANY1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1383,
            "end": 1387
          }
        ],
        "start": 1371,
        "end": 1387
      },
      "directive": null,
      "start": 1371,
      "end": 1388
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "typeof",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "obj1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1396,
          "end": 1400
        },
        "prefix": true,
        "start": 1389,
        "end": 1400
      },
      "directive": null,
      "start": 1389,
      "end": 1401
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
            "name": "obj1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1409,
            "end": 1413
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 1414,
            "end": 1415
          },
          "optional": false,
          "computed": false,
          "start": 1409,
          "end": 1415
        },
        "prefix": true,
        "start": 1402,
        "end": 1415
      },
      "directive": null,
      "start": 1402,
      "end": 1416
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
            "start": 1424,
            "end": 1428
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 1429,
            "end": 1430
          },
          "optional": false,
          "computed": false,
          "start": 1424,
          "end": 1430
        },
        "prefix": true,
        "start": 1417,
        "end": 1430
      },
      "directive": null,
      "start": 1417,
      "end": 1431
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
            "start": 1439,
            "end": 1440
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 1441,
            "end": 1442
          },
          "optional": false,
          "computed": false,
          "start": 1439,
          "end": 1442
        },
        "prefix": true,
        "start": 1432,
        "end": 1442
      },
      "directive": null,
      "start": 1432,
      "end": 1443
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
                "type": "TSAnyKeyword",
                "start": 1481,
                "end": 1484
              },
              "start": 1479,
              "end": 1484
            },
            "start": 1477,
            "end": 1484
          },
          "init": null,
          "definite": true,
          "start": 1477,
          "end": 1484
        }
      ],
      "declare": false,
      "start": 1473,
      "end": 1485
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
                  "type": "TSAnyKeyword",
                  "start": 1494,
                  "end": 1497
                },
                "start": 1494,
                "end": 1499
              },
              "start": 1492,
              "end": 1499
            },
            "start": 1490,
            "end": 1499
          },
          "init": null,
          "definite": true,
          "start": 1490,
          "end": 1499
        }
      ],
      "declare": false,
      "start": 1486,
      "end": 1500
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
                    "type": "TSAnyKeyword",
                    "start": 1515,
                    "end": 1518
                  },
                  "start": 1512,
                  "end": 1518
                },
                "start": 1509,
                "end": 1518
              },
              "start": 1507,
              "end": 1518
            },
            "start": 1505,
            "end": 1518
          },
          "init": null,
          "definite": true,
          "start": 1505,
          "end": 1518
        }
      ],
      "declare": false,
      "start": 1501,
      "end": 1519
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "z",
        "optional": false,
        "typeAnnotation": null,
        "start": 1520,
        "end": 1521
      },
      "body": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "ANY",
            "optional": false,
            "typeAnnotation": null,
            "start": 1530,
            "end": 1533
          },
          "prefix": true,
          "start": 1523,
          "end": 1533
        },
        "directive": null,
        "start": 1523,
        "end": 1534
      },
      "start": 1520,
      "end": 1534
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null,
        "start": 1535,
        "end": 1536
      },
      "body": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "ANY2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1545,
            "end": 1549
          },
          "prefix": true,
          "start": 1538,
          "end": 1549
        },
        "directive": null,
        "start": 1538,
        "end": 1550
      },
      "start": 1535,
      "end": 1550
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "r",
        "optional": false,
        "typeAnnotation": null,
        "start": 1551,
        "end": 1552
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
            "start": 1561,
            "end": 1564
          },
          "prefix": true,
          "start": 1554,
          "end": 1564
        },
        "directive": null,
        "start": 1554,
        "end": 1565
      },
      "start": 1551,
      "end": 1565
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "z",
        "optional": false,
        "typeAnnotation": null,
        "start": 1566,
        "end": 1567
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
              "start": 1576,
              "end": 1580
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1581,
              "end": 1582
            },
            "optional": false,
            "computed": false,
            "start": 1576,
            "end": 1582
          },
          "prefix": true,
          "start": 1569,
          "end": 1582
        },
        "directive": null,
        "start": 1569,
        "end": 1583
      },
      "start": 1566,
      "end": 1583
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "z",
        "optional": false,
        "typeAnnotation": null,
        "start": 1584,
        "end": 1585
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
              "start": 1594,
              "end": 1595
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1596,
              "end": 1599
            },
            "optional": false,
            "computed": false,
            "start": 1594,
            "end": 1599
          },
          "prefix": true,
          "start": 1587,
          "end": 1599
        },
        "directive": null,
        "start": 1587,
        "end": 1600
      },
      "start": 1584,
      "end": 1600
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "z",
        "optional": false,
        "typeAnnotation": null,
        "start": 1601,
        "end": 1602
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
              "start": 1611,
              "end": 1612
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 1613,
              "end": 1614
            },
            "optional": false,
            "computed": false,
            "start": 1611,
            "end": 1614
          },
          "prefix": true,
          "start": 1604,
          "end": 1614
        },
        "directive": null,
        "start": 1604,
        "end": 1615
      },
      "start": 1601,
      "end": 1615
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "z",
        "optional": false,
        "typeAnnotation": null,
        "start": 1616,
        "end": 1617
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
              "name": "obj1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1626,
              "end": 1630
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1631,
              "end": 1632
            },
            "optional": false,
            "computed": false,
            "start": 1626,
            "end": 1632
          },
          "prefix": true,
          "start": 1619,
          "end": 1632
        },
        "directive": null,
        "start": 1619,
        "end": 1633
      },
      "start": 1616,
      "end": 1633
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 33,
  "end": 1633
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 33,
    "end": 40
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 41,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "ANY",
    "start": 45,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 48,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 50,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 53,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 55,
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
    "value": "ANY1",
    "start": 67,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 71,
    "end": 72
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 73,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "ANY2",
    "start": 77,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 81,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 83,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 91,
    "end": 92
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 92,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 94,
    "end": 95
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 96,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 99,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 101,
    "end": 108
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 109,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 113,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 121,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 126,
    "end": 127
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 128,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 132,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 139,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 142,
    "end": 143
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 144,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 147,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 155,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 162,
    "end": 163
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 165,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 174,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 179,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 181,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 185,
    "end": 186
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 191,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 197,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 199,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 202,
    "end": 203
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 208,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 218,
    "end": 219
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 220,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 228,
    "end": 229
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 234,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 241,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 242,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 244,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 247,
    "end": 248
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 253,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 260,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 263,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 264,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 266,
    "end": 267
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 276,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 280,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 282,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 284,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 287,
    "end": 288
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 297,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "type": "Punctuator",
    "value": "}",
    "start": 311,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 313,
    "end": 314
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 315,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 325,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 327,
    "end": 328
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 333,
    "end": 339
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 340,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 344,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 345,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 346,
    "end": 347
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 348,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 351,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 353,
    "end": 354
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 355,
    "end": 358
  },
  {
    "type": "Identifier",
    "value": "objA",
    "start": 359,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 364,
    "end": 365
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 366,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 370,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 371,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 373,
    "end": 374
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 392,
    "end": 395
  },
  {
    "type": "Identifier",
    "value": "ResultIsString1",
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
    "type": "Identifier",
    "value": "ANY1",
    "start": 421,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 425,
    "end": 426
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 427,
    "end": 430
  },
  {
    "type": "Identifier",
    "value": "ResultIsString2",
    "start": 431,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 447,
    "end": 448
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 449,
    "end": 455
  },
  {
    "type": "Identifier",
    "value": "ANY2",
    "start": 456,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 460,
    "end": 461
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 462,
    "end": 465
  },
  {
    "type": "Identifier",
    "value": "ResultIsString3",
    "start": 466,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 482,
    "end": 483
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 484,
    "end": 490
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 491,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 492,
    "end": 493
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 494,
    "end": 497
  },
  {
    "type": "Identifier",
    "value": "ResultIsString4",
    "start": 498,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 514,
    "end": 515
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 516,
    "end": 522
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 523,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 524,
    "end": 525
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 526,
    "end": 529
  },
  {
    "type": "Identifier",
    "value": "ResultIsString5",
    "start": 530,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 546,
    "end": 547
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 548,
    "end": 554
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 555,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 558,
    "end": 559
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 560,
    "end": 563
  },
  {
    "type": "Identifier",
    "value": "ResultIsString6",
    "start": 564,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 580,
    "end": 581
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 582,
    "end": 588
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 589,
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
    "start": 616,
    "end": 619
  },
  {
    "type": "Identifier",
    "value": "ResultIsString7",
    "start": 620,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 636,
    "end": 637
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 638,
    "end": 644
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 645,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 654,
    "end": 655
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 656,
    "end": 659
  },
  {
    "type": "Identifier",
    "value": "ResultIsString8",
    "start": 660,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 676,
    "end": 677
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 678,
    "end": 684
  },
  {
    "type": "Null",
    "value": "null",
    "start": 685,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 689,
    "end": 690
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 691,
    "end": 694
  },
  {
    "type": "Identifier",
    "value": "ResultIsString9",
    "start": 695,
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
    "value": "typeof",
    "start": 713,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 720,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 721,
    "end": 722
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 722,
    "end": 723
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 749,
    "end": 752
  },
  {
    "type": "Identifier",
    "value": "ResultIsString10",
    "start": 753,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 770,
    "end": 771
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 772,
    "end": 778
  },
  {
    "type": "Identifier",
    "value": "ANY2",
    "start": 779,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 783,
    "end": 784
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 784,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 785,
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
    "start": 788,
    "end": 791
  },
  {
    "type": "Identifier",
    "value": "ResultIsString11",
    "start": 792,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 809,
    "end": 810
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 811,
    "end": 817
  },
  {
    "type": "Identifier",
    "value": "objA",
    "start": 818,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 822,
    "end": 823
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 823,
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
    "value": "ResultIsString12",
    "start": 830,
    "end": 846
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 847,
    "end": 848
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 849,
    "end": 855
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 856,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": ".",
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
    "value": ";",
    "start": 862,
    "end": 863
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 864,
    "end": 867
  },
  {
    "type": "Identifier",
    "value": "ResultIsString13",
    "start": 868,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 885,
    "end": 886
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 887,
    "end": 893
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 894,
    "end": 895
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 895,
    "end": 896
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 896,
    "end": 897
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 897,
    "end": 898
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 899,
    "end": 902
  },
  {
    "type": "Identifier",
    "value": "ResultIsString14",
    "start": 903,
    "end": 919
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 920,
    "end": 921
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 922,
    "end": 928
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 929,
    "end": 932
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 932,
    "end": 933
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 933,
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
    "value": "var",
    "start": 936,
    "end": 939
  },
  {
    "type": "Identifier",
    "value": "ResultIsString15",
    "start": 940,
    "end": 956
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 957,
    "end": 958
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 959,
    "end": 965
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 966,
    "end": 967
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 967,
    "end": 968
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 968,
    "end": 971
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 971,
    "end": 972
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 972,
    "end": 973
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 973,
    "end": 974
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 975,
    "end": 978
  },
  {
    "type": "Identifier",
    "value": "ResultIsString16",
    "start": 979,
    "end": 995
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 996,
    "end": 997
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 998,
    "end": 1004
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1005,
    "end": 1006
  },
  {
    "type": "Identifier",
    "value": "ANY",
    "start": 1006,
    "end": 1009
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1010,
    "end": 1011
  },
  {
    "type": "Identifier",
    "value": "ANY1",
    "start": 1012,
    "end": 1016
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1016,
    "end": 1017
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1017,
    "end": 1018
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1019,
    "end": 1022
  },
  {
    "type": "Identifier",
    "value": "ResultIsString17",
    "start": 1023,
    "end": 1039
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1040,
    "end": 1041
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1042,
    "end": 1048
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1049,
    "end": 1050
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1050,
    "end": 1054
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1055,
    "end": 1056
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1057,
    "end": 1066
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1066,
    "end": 1067
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1067,
    "end": 1068
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1069,
    "end": 1072
  },
  {
    "type": "Identifier",
    "value": "ResultIsString18",
    "start": 1073,
    "end": 1089
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1090,
    "end": 1091
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1092,
    "end": 1098
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1099,
    "end": 1100
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1100,
    "end": 1104
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1105,
    "end": 1106
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1107,
    "end": 1111
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1111,
    "end": 1112
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1112,
    "end": 1113
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1114,
    "end": 1117
  },
  {
    "type": "Identifier",
    "value": "ResultIsString19",
    "start": 1118,
    "end": 1134
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1135,
    "end": 1136
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1137,
    "end": 1143
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1144,
    "end": 1145
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1145,
    "end": 1154
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1155,
    "end": 1156
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1157,
    "end": 1166
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1166,
    "end": 1167
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1167,
    "end": 1168
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1200,
    "end": 1203
  },
  {
    "type": "Identifier",
    "value": "ResultIsString20",
    "start": 1204,
    "end": 1220
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1221,
    "end": 1222
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1223,
    "end": 1229
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1230,
    "end": 1236
  },
  {
    "type": "Identifier",
    "value": "ANY",
    "start": 1237,
    "end": 1240
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1240,
    "end": 1241
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1242,
    "end": 1245
  },
  {
    "type": "Identifier",
    "value": "ResultIsString21",
    "start": 1246,
    "end": 1262
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "type": "Keyword",
    "value": "typeof",
    "start": 1272,
    "end": 1278
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1279,
    "end": 1285
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1286,
    "end": 1287
  },
  {
    "type": "Identifier",
    "value": "ANY",
    "start": 1287,
    "end": 1290
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1291,
    "end": 1292
  },
  {
    "type": "Identifier",
    "value": "ANY1",
    "start": 1293,
    "end": 1297
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1297,
    "end": 1298
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1298,
    "end": 1299
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1330,
    "end": 1336
  },
  {
    "type": "Identifier",
    "value": "ANY",
    "start": 1337,
    "end": 1340
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1340,
    "end": 1341
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1342,
    "end": 1348
  },
  {
    "type": "Identifier",
    "value": "ANY1",
    "start": 1349,
    "end": 1353
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1353,
    "end": 1354
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1355,
    "end": 1361
  },
  {
    "type": "Identifier",
    "value": "ANY2",
    "start": 1362,
    "end": 1366
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1366,
    "end": 1367
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1367,
    "end": 1368
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1368,
    "end": 1369
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1369,
    "end": 1370
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1371,
    "end": 1377
  },
  {
    "type": "Identifier",
    "value": "ANY",
    "start": 1378,
    "end": 1381
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1381,
    "end": 1382
  },
  {
    "type": "Identifier",
    "value": "ANY1",
    "start": 1383,
    "end": 1387
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1387,
    "end": 1388
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1389,
    "end": 1395
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 1396,
    "end": 1400
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1400,
    "end": 1401
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1402,
    "end": 1408
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 1409,
    "end": 1413
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1413,
    "end": 1414
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1414,
    "end": 1415
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1415,
    "end": 1416
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1417,
    "end": 1423
  },
  {
    "type": "Identifier",
    "value": "objA",
    "start": 1424,
    "end": 1428
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1428,
    "end": 1429
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1429,
    "end": 1430
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1430,
    "end": 1431
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1432,
    "end": 1438
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 1439,
    "end": 1440
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1440,
    "end": 1441
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1441,
    "end": 1442
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1442,
    "end": 1443
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1473,
    "end": 1476
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1477,
    "end": 1478
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1478,
    "end": 1479
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1479,
    "end": 1480
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1481,
    "end": 1484
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1484,
    "end": 1485
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1486,
    "end": 1489
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1490,
    "end": 1491
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1491,
    "end": 1492
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1492,
    "end": 1493
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1494,
    "end": 1497
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1497,
    "end": 1498
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1498,
    "end": 1499
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1499,
    "end": 1500
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1501,
    "end": 1504
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 1505,
    "end": 1506
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1506,
    "end": 1507
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1507,
    "end": 1508
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1509,
    "end": 1510
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1510,
    "end": 1511
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1512,
    "end": 1514
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1515,
    "end": 1518
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1518,
    "end": 1519
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1520,
    "end": 1521
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1521,
    "end": 1522
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1523,
    "end": 1529
  },
  {
    "type": "Identifier",
    "value": "ANY",
    "start": 1530,
    "end": 1533
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1533,
    "end": 1534
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1535,
    "end": 1536
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1536,
    "end": 1537
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1538,
    "end": 1544
  },
  {
    "type": "Identifier",
    "value": "ANY2",
    "start": 1545,
    "end": 1549
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1549,
    "end": 1550
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 1551,
    "end": 1552
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1552,
    "end": 1553
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1554,
    "end": 1560
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1561,
    "end": 1564
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1564,
    "end": 1565
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1566,
    "end": 1567
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1567,
    "end": 1568
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1569,
    "end": 1575
  },
  {
    "type": "Identifier",
    "value": "objA",
    "start": 1576,
    "end": 1580
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1580,
    "end": 1581
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1581,
    "end": 1582
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1582,
    "end": 1583
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1584,
    "end": 1585
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1585,
    "end": 1586
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1587,
    "end": 1593
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1594,
    "end": 1595
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1595,
    "end": 1596
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1596,
    "end": 1599
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1599,
    "end": 1600
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1601,
    "end": 1602
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1602,
    "end": 1603
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1604,
    "end": 1610
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 1611,
    "end": 1612
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1612,
    "end": 1613
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1613,
    "end": 1614
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1614,
    "end": 1615
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1616,
    "end": 1617
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1617,
    "end": 1618
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1619,
    "end": 1625
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 1626,
    "end": 1630
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1630,
    "end": 1631
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1631,
    "end": 1632
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1632,
    "end": 1633
  }
]
```
