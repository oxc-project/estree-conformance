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
                "start": 44,
                "end": 47
              },
              "start": 42,
              "end": 47
            },
            "start": 39,
            "end": 47
          },
          "init": null,
          "definite": false,
          "start": 39,
          "end": 47
        }
      ],
      "declare": true,
      "start": 27,
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
            "name": "ANY1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 67,
                "end": 70
              },
              "start": 65,
              "end": 70
            },
            "start": 61,
            "end": 70
          },
          "init": null,
          "definite": false,
          "start": 61,
          "end": 70
        }
      ],
      "declare": true,
      "start": 49,
      "end": 71
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
                  "start": 82,
                  "end": 85
                },
                "start": 82,
                "end": 87
              },
              "start": 80,
              "end": 87
            },
            "start": 76,
            "end": 87
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 91,
                "end": 93
              },
              {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 95,
                "end": 97
              }
            ],
            "start": 90,
            "end": 98
          },
          "definite": false,
          "start": 76,
          "end": 98
        }
      ],
      "declare": false,
      "start": 72,
      "end": 99
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
                    "start": 123,
                    "end": 125
                  },
                  "start": 120,
                  "end": 125
                },
                "start": 117,
                "end": 125
              },
              "start": 115,
              "end": 125
            },
            "start": 112,
            "end": 125
          },
          "init": null,
          "definite": false,
          "start": 112,
          "end": 125
        }
      ],
      "declare": true,
      "start": 100,
      "end": 125
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
            "start": 130,
            "end": 134
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
                  "start": 139,
                  "end": 140
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
                          "start": 146,
                          "end": 152
                        },
                        "start": 144,
                        "end": 152
                      },
                      "start": 143,
                      "end": 152
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 157,
                    "end": 160
                  },
                  "id": null,
                  "generator": false,
                  "start": 142,
                  "end": 160
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 139,
                "end": 160
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
                  "start": 162,
                  "end": 163
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
                      "name": "s1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 166,
                      "end": 168
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 173,
                    "end": 176
                  },
                  "id": null,
                  "generator": false,
                  "start": 165,
                  "end": 176
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 162,
                "end": 176
              }
            ],
            "start": 137,
            "end": 177
          },
          "definite": false,
          "start": 130,
          "end": 177
        }
      ],
      "declare": false,
      "start": 126,
      "end": 178
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 189,
        "end": 192
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
          "start": 196,
          "end": 199
        },
        "start": 194,
        "end": 199
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
                  "typeAnnotation": null,
                  "start": 210,
                  "end": 211
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 214,
                  "end": 223
                },
                "definite": false,
                "start": 210,
                "end": 223
              }
            ],
            "declare": false,
            "start": 206,
            "end": 224
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 236,
              "end": 237
            },
            "start": 229,
            "end": 238
          }
        ],
        "start": 200,
        "end": 240
      },
      "expression": false,
      "start": 180,
      "end": 240
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
        "start": 247,
        "end": 248
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
              "start": 262,
              "end": 263
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 266,
                "end": 269
              },
              "start": 264,
              "end": 269
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": true,
            "readonly": false,
            "accessibility": "public",
            "start": 255,
            "end": 270
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
              "start": 282,
              "end": 285
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
                              "start": 305,
                              "end": 308
                            },
                            "start": 303,
                            "end": 308
                          },
                          "start": 302,
                          "end": 308
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "undefined",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 311,
                          "end": 320
                        },
                        "definite": false,
                        "start": 302,
                        "end": 320
                      }
                    ],
                    "declare": false,
                    "start": 298,
                    "end": 321
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 337,
                      "end": 338
                    },
                    "start": 330,
                    "end": 339
                  }
                ],
                "start": 288,
                "end": 345
              },
              "expression": false,
              "start": 285,
              "end": 345
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 275,
            "end": 345
          }
        ],
        "start": 249,
        "end": 347
      },
      "abstract": false,
      "declare": false,
      "start": 241,
      "end": 347
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 358,
        "end": 359
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
                        "start": 380,
                        "end": 383
                      },
                      "start": 378,
                      "end": 383
                    },
                    "start": 377,
                    "end": 383
                  },
                  "init": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 386,
                    "end": 395
                  },
                  "definite": false,
                  "start": 377,
                  "end": 395
                }
              ],
              "declare": false,
              "start": 373,
              "end": 396
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 366,
            "end": 396
          }
        ],
        "start": 360,
        "end": 398
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 348,
      "end": 398
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
            "start": 403,
            "end": 407
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 414,
              "end": 415
            },
            "typeArguments": null,
            "arguments": [],
            "start": 410,
            "end": 417
          },
          "definite": false,
          "start": 403,
          "end": 417
        }
      ],
      "declare": false,
      "start": 399,
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
            "name": "ResultIsNumber1",
            "optional": false,
            "typeAnnotation": null,
            "start": 446,
            "end": 461
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "+",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ANY1",
              "optional": false,
              "typeAnnotation": null,
              "start": 465,
              "end": 469
            },
            "prefix": true,
            "start": 464,
            "end": 469
          },
          "definite": false,
          "start": 446,
          "end": 469
        }
      ],
      "declare": false,
      "start": 442,
      "end": 470
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
            "name": "ResultIsNumber2",
            "optional": false,
            "typeAnnotation": null,
            "start": 475,
            "end": 490
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "+",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ANY2",
              "optional": false,
              "typeAnnotation": null,
              "start": 494,
              "end": 498
            },
            "prefix": true,
            "start": 493,
            "end": 498
          },
          "definite": false,
          "start": 475,
          "end": 498
        }
      ],
      "declare": false,
      "start": 471,
      "end": 499
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
            "name": "ResultIsNumber3",
            "optional": false,
            "typeAnnotation": null,
            "start": 504,
            "end": 519
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "+",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 523,
              "end": 524
            },
            "prefix": true,
            "start": 522,
            "end": 524
          },
          "definite": false,
          "start": 504,
          "end": 524
        }
      ],
      "declare": false,
      "start": 500,
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
            "name": "ResultIsNumber4",
            "optional": false,
            "typeAnnotation": null,
            "start": 530,
            "end": 545
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "+",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 549,
              "end": 550
            },
            "prefix": true,
            "start": 548,
            "end": 550
          },
          "definite": false,
          "start": 530,
          "end": 550
        }
      ],
      "declare": false,
      "start": 526,
      "end": 551
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
            "name": "ResultIsNumber5",
            "optional": false,
            "typeAnnotation": null,
            "start": 556,
            "end": 571
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "+",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null,
              "start": 575,
              "end": 578
            },
            "prefix": true,
            "start": 574,
            "end": 578
          },
          "definite": false,
          "start": 556,
          "end": 578
        }
      ],
      "declare": false,
      "start": 552,
      "end": 579
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
            "name": "ResultIsNumber6",
            "optional": false,
            "typeAnnotation": null,
            "start": 584,
            "end": 599
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "+",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj1",
              "optional": false,
              "typeAnnotation": null,
              "start": 603,
              "end": 607
            },
            "prefix": true,
            "start": 602,
            "end": 607
          },
          "definite": false,
          "start": 584,
          "end": 607
        }
      ],
      "declare": false,
      "start": 580,
      "end": 608
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
            "name": "ResultIsNumber7",
            "optional": false,
            "typeAnnotation": null,
            "start": 634,
            "end": 649
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "+",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 653,
              "end": 662
            },
            "prefix": true,
            "start": 652,
            "end": 662
          },
          "definite": false,
          "start": 634,
          "end": 662
        }
      ],
      "declare": false,
      "start": 630,
      "end": 663
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
            "name": "ResultIsNumber8",
            "optional": false,
            "typeAnnotation": null,
            "start": 668,
            "end": 683
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "+",
            "argument": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 687,
              "end": 691
            },
            "prefix": true,
            "start": 686,
            "end": 691
          },
          "definite": false,
          "start": 668,
          "end": 691
        }
      ],
      "declare": false,
      "start": 664,
      "end": 692
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
            "name": "ResultIsNumber9",
            "optional": false,
            "typeAnnotation": null,
            "start": 722,
            "end": 737
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "+",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "ANY2",
                "optional": false,
                "typeAnnotation": null,
                "start": 741,
                "end": 745
              },
              "property": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 746,
                "end": 747
              },
              "optional": false,
              "computed": true,
              "start": 741,
              "end": 748
            },
            "prefix": true,
            "start": 740,
            "end": 748
          },
          "definite": false,
          "start": 722,
          "end": 748
        }
      ],
      "declare": false,
      "start": 718,
      "end": 749
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
            "name": "ResultIsNumber10",
            "optional": false,
            "typeAnnotation": null,
            "start": 754,
            "end": 770
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "+",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj1",
                "optional": false,
                "typeAnnotation": null,
                "start": 774,
                "end": 778
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 779,
                "end": 780
              },
              "optional": false,
              "computed": false,
              "start": 774,
              "end": 780
            },
            "prefix": true,
            "start": 773,
            "end": 780
          },
          "definite": false,
          "start": 754,
          "end": 780
        }
      ],
      "declare": false,
      "start": 750,
      "end": 781
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
            "name": "ResultIsNumber11",
            "optional": false,
            "typeAnnotation": null,
            "start": 786,
            "end": 802
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "+",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj1",
                "optional": false,
                "typeAnnotation": null,
                "start": 806,
                "end": 810
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 811,
                "end": 812
              },
              "optional": false,
              "computed": false,
              "start": 806,
              "end": 812
            },
            "prefix": true,
            "start": 805,
            "end": 812
          },
          "definite": false,
          "start": 786,
          "end": 812
        }
      ],
      "declare": false,
      "start": 782,
      "end": 813
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
            "name": "ResultIsNumber12",
            "optional": false,
            "typeAnnotation": null,
            "start": 818,
            "end": 834
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "+",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "objA",
                "optional": false,
                "typeAnnotation": null,
                "start": 838,
                "end": 842
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 843,
                "end": 844
              },
              "optional": false,
              "computed": false,
              "start": 838,
              "end": 844
            },
            "prefix": true,
            "start": 837,
            "end": 844
          },
          "definite": false,
          "start": 818,
          "end": 844
        }
      ],
      "declare": false,
      "start": 814,
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
            "name": "ResultIsNumber13",
            "optional": false,
            "typeAnnotation": null,
            "start": 850,
            "end": 866
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "+",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null,
                "start": 870,
                "end": 871
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 872,
                "end": 873
              },
              "optional": false,
              "computed": false,
              "start": 870,
              "end": 873
            },
            "prefix": true,
            "start": 869,
            "end": 873
          },
          "definite": false,
          "start": 850,
          "end": 873
        }
      ],
      "declare": false,
      "start": 846,
      "end": 874
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
            "name": "ResultIsNumber14",
            "optional": false,
            "typeAnnotation": null,
            "start": 879,
            "end": 895
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "+",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 899,
                "end": 902
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 899,
              "end": 904
            },
            "prefix": true,
            "start": 898,
            "end": 904
          },
          "definite": false,
          "start": 879,
          "end": 904
        }
      ],
      "declare": false,
      "start": 875,
      "end": 905
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
            "name": "ResultIsNumber15",
            "optional": false,
            "typeAnnotation": null,
            "start": 910,
            "end": 926
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "+",
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
                  "start": 930,
                  "end": 931
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 932,
                  "end": 935
                },
                "optional": false,
                "computed": false,
                "start": 930,
                "end": 935
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 930,
              "end": 937
            },
            "prefix": true,
            "start": 929,
            "end": 937
          },
          "definite": false,
          "start": 910,
          "end": 937
        }
      ],
      "declare": false,
      "start": 906,
      "end": 938
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
            "name": "ResultIsNumber16",
            "optional": false,
            "typeAnnotation": null,
            "start": 943,
            "end": 959
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "+",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "ANY",
                "optional": false,
                "typeAnnotation": null,
                "start": 964,
                "end": 967
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "ANY1",
                "optional": false,
                "typeAnnotation": null,
                "start": 970,
                "end": 974
              },
              "start": 964,
              "end": 974
            },
            "prefix": true,
            "start": 962,
            "end": 975
          },
          "definite": false,
          "start": 943,
          "end": 975
        }
      ],
      "declare": false,
      "start": 939,
      "end": 976
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
            "name": "ResultIsNumber17",
            "optional": false,
            "typeAnnotation": null,
            "start": 981,
            "end": 997
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "+",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 1002,
                "end": 1006
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 1009,
                "end": 1018
              },
              "start": 1002,
              "end": 1018
            },
            "prefix": true,
            "start": 1000,
            "end": 1019
          },
          "definite": false,
          "start": 981,
          "end": 1019
        }
      ],
      "declare": false,
      "start": 977,
      "end": 1020
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
            "name": "ResultIsNumber18",
            "optional": false,
            "typeAnnotation": null,
            "start": 1025,
            "end": 1041
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "+",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 1046,
                "end": 1050
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 1053,
                "end": 1057
              },
              "start": 1046,
              "end": 1057
            },
            "prefix": true,
            "start": 1044,
            "end": 1058
          },
          "definite": false,
          "start": 1025,
          "end": 1058
        }
      ],
      "declare": false,
      "start": 1021,
      "end": 1059
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
            "name": "ResultIsNumber19",
            "optional": false,
            "typeAnnotation": null,
            "start": 1064,
            "end": 1080
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "+",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 1085,
                "end": 1094
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 1097,
                "end": 1106
              },
              "start": 1085,
              "end": 1106
            },
            "prefix": true,
            "start": 1083,
            "end": 1107
          },
          "definite": false,
          "start": 1064,
          "end": 1107
        }
      ],
      "declare": false,
      "start": 1060,
      "end": 1108
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "+",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "ANY",
          "optional": false,
          "typeAnnotation": null,
          "start": 1140,
          "end": 1143
        },
        "prefix": true,
        "start": 1139,
        "end": 1143
      },
      "directive": null,
      "start": 1139,
      "end": 1144
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "+",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "ANY1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1146,
          "end": 1150
        },
        "prefix": true,
        "start": 1145,
        "end": 1150
      },
      "directive": null,
      "start": 1145,
      "end": 1151
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "+",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "ANY2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1153,
            "end": 1157
          },
          "property": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 1158,
            "end": 1159
          },
          "optional": false,
          "computed": true,
          "start": 1153,
          "end": 1160
        },
        "prefix": true,
        "start": 1152,
        "end": 1160
      },
      "directive": null,
      "start": 1152,
      "end": 1161
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "UnaryExpression",
            "operator": "+",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ANY",
              "optional": false,
              "typeAnnotation": null,
              "start": 1163,
              "end": 1166
            },
            "prefix": true,
            "start": 1162,
            "end": 1166
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "ANY1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1168,
            "end": 1172
          }
        ],
        "start": 1162,
        "end": 1172
      },
      "directive": null,
      "start": 1162,
      "end": 1173
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "+",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "objA",
            "optional": false,
            "typeAnnotation": null,
            "start": 1175,
            "end": 1179
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 1180,
            "end": 1181
          },
          "optional": false,
          "computed": false,
          "start": 1175,
          "end": 1181
        },
        "prefix": true,
        "start": 1174,
        "end": 1181
      },
      "directive": null,
      "start": 1174,
      "end": 1182
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "+",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 1184,
            "end": 1185
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 1186,
            "end": 1187
          },
          "optional": false,
          "computed": false,
          "start": 1184,
          "end": 1187
        },
        "prefix": true,
        "start": 1183,
        "end": 1187
      },
      "directive": null,
      "start": 1183,
      "end": 1188
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 27,
  "end": 1188
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 27,
    "end": 34
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 35,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "ANY",
    "start": 39,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 42,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 44,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 47,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 49,
    "end": 56
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 57,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "ANY1",
    "start": 61,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 65,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 67,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 70,
    "end": 71
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 72,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "ANY2",
    "start": 76,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 80,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 82,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 90,
    "end": 91
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 91,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 93,
    "end": 94
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 95,
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
    "type": "Identifier",
    "value": "declare",
    "start": 100,
    "end": 107
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 108,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 112,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 120,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 124,
    "end": 125
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 126,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 130,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 137,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 142,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 144,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 146,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 154,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 160,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 165,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "s1",
    "start": 166,
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
    "type": "Punctuator",
    "value": "{",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 177,
    "end": 178
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 180,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 189,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 194,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 196,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 200,
    "end": 201
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 206,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 212,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 214,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 223,
    "end": 224
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 229,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 236,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 237,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 239,
    "end": 240
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 241,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 247,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 249,
    "end": 250
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 255,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 263,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 264,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 266,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 269,
    "end": 270
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 275,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 282,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 285,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 288,
    "end": 289
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 298,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 302,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 303,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 305,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 309,
    "end": 310
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 311,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 320,
    "end": 321
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 330,
    "end": 336
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 337,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 338,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 344,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 346,
    "end": 347
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 348,
    "end": 357
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 358,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 360,
    "end": 361
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 366,
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
    "value": "n",
    "start": 377,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 378,
    "end": 379
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 380,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 384,
    "end": 385
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 386,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 395,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 397,
    "end": 398
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 399,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "objA",
    "start": 403,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 408,
    "end": 409
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 410,
    "end": 413
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 414,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 415,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 416,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 417,
    "end": 418
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 442,
    "end": 445
  },
  {
    "type": "Identifier",
    "value": "ResultIsNumber1",
    "start": 446,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 462,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 464,
    "end": 465
  },
  {
    "type": "Identifier",
    "value": "ANY1",
    "start": 465,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 469,
    "end": 470
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 471,
    "end": 474
  },
  {
    "type": "Identifier",
    "value": "ResultIsNumber2",
    "start": 475,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 491,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 493,
    "end": 494
  },
  {
    "type": "Identifier",
    "value": "ANY2",
    "start": 494,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 498,
    "end": 499
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 500,
    "end": 503
  },
  {
    "type": "Identifier",
    "value": "ResultIsNumber3",
    "start": 504,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 520,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 522,
    "end": 523
  },
  {
    "type": "Identifier",
    "value": "A",
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
    "value": "ResultIsNumber4",
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
    "type": "Punctuator",
    "value": "+",
    "start": 548,
    "end": 549
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 549,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 550,
    "end": 551
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 552,
    "end": 555
  },
  {
    "type": "Identifier",
    "value": "ResultIsNumber5",
    "start": 556,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 572,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 574,
    "end": 575
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 575,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 578,
    "end": 579
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 580,
    "end": 583
  },
  {
    "type": "Identifier",
    "value": "ResultIsNumber6",
    "start": 584,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 600,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 602,
    "end": 603
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 603,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 607,
    "end": 608
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 630,
    "end": 633
  },
  {
    "type": "Identifier",
    "value": "ResultIsNumber7",
    "start": 634,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 650,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 652,
    "end": 653
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 653,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 662,
    "end": 663
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 664,
    "end": 667
  },
  {
    "type": "Identifier",
    "value": "ResultIsNumber8",
    "start": 668,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 684,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 686,
    "end": 687
  },
  {
    "type": "Null",
    "value": "null",
    "start": 687,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 691,
    "end": 692
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 718,
    "end": 721
  },
  {
    "type": "Identifier",
    "value": "ResultIsNumber9",
    "start": 722,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 738,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 740,
    "end": 741
  },
  {
    "type": "Identifier",
    "value": "ANY2",
    "start": 741,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 745,
    "end": 746
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 746,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 747,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 748,
    "end": 749
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 750,
    "end": 753
  },
  {
    "type": "Identifier",
    "value": "ResultIsNumber10",
    "start": 754,
    "end": 770
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 771,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 773,
    "end": 774
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 774,
    "end": 778
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 778,
    "end": 779
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 779,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 780,
    "end": 781
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 782,
    "end": 785
  },
  {
    "type": "Identifier",
    "value": "ResultIsNumber11",
    "start": 786,
    "end": 802
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 803,
    "end": 804
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 805,
    "end": 806
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 806,
    "end": 810
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 810,
    "end": 811
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "type": "Keyword",
    "value": "var",
    "start": 814,
    "end": 817
  },
  {
    "type": "Identifier",
    "value": "ResultIsNumber12",
    "start": 818,
    "end": 834
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 835,
    "end": 836
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 837,
    "end": 838
  },
  {
    "type": "Identifier",
    "value": "objA",
    "start": 838,
    "end": 842
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 842,
    "end": 843
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "value": "ResultIsNumber13",
    "start": 850,
    "end": 866
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 867,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 869,
    "end": 870
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 870,
    "end": 871
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 871,
    "end": 872
  },
  {
    "type": "Identifier",
    "value": "n",
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
    "type": "Keyword",
    "value": "var",
    "start": 875,
    "end": 878
  },
  {
    "type": "Identifier",
    "value": "ResultIsNumber14",
    "start": 879,
    "end": 895
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 896,
    "end": 897
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 898,
    "end": 899
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 899,
    "end": 902
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 902,
    "end": 903
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 903,
    "end": 904
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 904,
    "end": 905
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 906,
    "end": 909
  },
  {
    "type": "Identifier",
    "value": "ResultIsNumber15",
    "start": 910,
    "end": 926
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 927,
    "end": 928
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 929,
    "end": 930
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 930,
    "end": 931
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 931,
    "end": 932
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 932,
    "end": 935
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 935,
    "end": 936
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 936,
    "end": 937
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 937,
    "end": 938
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 939,
    "end": 942
  },
  {
    "type": "Identifier",
    "value": "ResultIsNumber16",
    "start": 943,
    "end": 959
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 960,
    "end": 961
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 962,
    "end": 963
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 963,
    "end": 964
  },
  {
    "type": "Identifier",
    "value": "ANY",
    "start": 964,
    "end": 967
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 968,
    "end": 969
  },
  {
    "type": "Identifier",
    "value": "ANY1",
    "start": 970,
    "end": 974
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 974,
    "end": 975
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 975,
    "end": 976
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 977,
    "end": 980
  },
  {
    "type": "Identifier",
    "value": "ResultIsNumber17",
    "start": 981,
    "end": 997
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 998,
    "end": 999
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1000,
    "end": 1001
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1001,
    "end": 1002
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1002,
    "end": 1006
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1007,
    "end": 1008
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1009,
    "end": 1018
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1018,
    "end": 1019
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1019,
    "end": 1020
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1021,
    "end": 1024
  },
  {
    "type": "Identifier",
    "value": "ResultIsNumber18",
    "start": 1025,
    "end": 1041
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1042,
    "end": 1043
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1044,
    "end": 1045
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1045,
    "end": 1046
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1046,
    "end": 1050
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1053,
    "end": 1057
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1057,
    "end": 1058
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1058,
    "end": 1059
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1060,
    "end": 1063
  },
  {
    "type": "Identifier",
    "value": "ResultIsNumber19",
    "start": 1064,
    "end": 1080
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1081,
    "end": 1082
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1083,
    "end": 1084
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1084,
    "end": 1085
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1085,
    "end": 1094
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1095,
    "end": 1096
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1097,
    "end": 1106
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1106,
    "end": 1107
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1107,
    "end": 1108
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1139,
    "end": 1140
  },
  {
    "type": "Identifier",
    "value": "ANY",
    "start": 1140,
    "end": 1143
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1143,
    "end": 1144
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1145,
    "end": 1146
  },
  {
    "type": "Identifier",
    "value": "ANY1",
    "start": 1146,
    "end": 1150
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1150,
    "end": 1151
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1152,
    "end": 1153
  },
  {
    "type": "Identifier",
    "value": "ANY2",
    "start": 1153,
    "end": 1157
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1157,
    "end": 1158
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1158,
    "end": 1159
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1159,
    "end": 1160
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1160,
    "end": 1161
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1162,
    "end": 1163
  },
  {
    "type": "Identifier",
    "value": "ANY",
    "start": 1163,
    "end": 1166
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1166,
    "end": 1167
  },
  {
    "type": "Identifier",
    "value": "ANY1",
    "start": 1168,
    "end": 1172
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1172,
    "end": 1173
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1174,
    "end": 1175
  },
  {
    "type": "Identifier",
    "value": "objA",
    "start": 1175,
    "end": 1179
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1179,
    "end": 1180
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1180,
    "end": 1181
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1181,
    "end": 1182
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1183,
    "end": 1184
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 1184,
    "end": 1185
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1185,
    "end": 1186
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1186,
    "end": 1187
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1187,
    "end": 1188
  }
]
```
