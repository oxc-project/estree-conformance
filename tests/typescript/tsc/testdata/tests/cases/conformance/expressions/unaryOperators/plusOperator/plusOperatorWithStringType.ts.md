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
                "start": 49,
                "end": 55
              },
              "start": 47,
              "end": 55
            },
            "start": 41,
            "end": 55
          },
          "init": null,
          "definite": false,
          "start": 41,
          "end": 55
        }
      ],
      "declare": true,
      "start": 29,
      "end": 56
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
                  "start": 70,
                  "end": 76
                },
                "start": 70,
                "end": 78
              },
              "start": 68,
              "end": 78
            },
            "start": 61,
            "end": 78
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 82,
                "end": 84
              },
              {
                "type": "Literal",
                "value": "abc",
                "raw": "\"abc\"",
                "start": 86,
                "end": 91
              }
            ],
            "start": 81,
            "end": 92
          },
          "definite": false,
          "start": 61,
          "end": 92
        }
      ],
      "declare": false,
      "start": 57,
      "end": 93
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 104,
        "end": 107
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
          "start": 111,
          "end": 117
        },
        "start": 109,
        "end": 117
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
              "start": 127,
              "end": 132
            },
            "start": 120,
            "end": 133
          }
        ],
        "start": 118,
        "end": 135
      },
      "expression": false,
      "start": 95,
      "end": 135
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
        "start": 143,
        "end": 144
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
              "start": 158,
              "end": 159
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 162,
                "end": 168
              },
              "start": 160,
              "end": 168
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
            "start": 151,
            "end": 169
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
              "start": 181,
              "end": 184
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
                      "start": 196,
                      "end": 198
                    },
                    "start": 189,
                    "end": 199
                  }
                ],
                "start": 187,
                "end": 201
              },
              "expression": false,
              "start": 184,
              "end": 201
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 174,
            "end": 201
          }
        ],
        "start": 145,
        "end": 203
      },
      "abstract": false,
      "declare": false,
      "start": 137,
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
        "start": 214,
        "end": 215
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
                        "start": 236,
                        "end": 242
                      },
                      "start": 234,
                      "end": 242
                    },
                    "start": 233,
                    "end": 242
                  },
                  "init": {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 245,
                    "end": 247
                  },
                  "definite": false,
                  "start": 233,
                  "end": 247
                }
              ],
              "declare": false,
              "start": 229,
              "end": 248
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 222,
            "end": 248
          }
        ],
        "start": 216,
        "end": 250
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 204,
      "end": 250
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
            "start": 256,
            "end": 260
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 267,
              "end": 268
            },
            "typeArguments": null,
            "arguments": [],
            "start": 263,
            "end": 270
          },
          "definite": false,
          "start": 256,
          "end": 270
        }
      ],
      "declare": false,
      "start": 252,
      "end": 271
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
            "start": 296,
            "end": 311
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "+",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "STRING",
              "optional": false,
              "typeAnnotation": null,
              "start": 315,
              "end": 321
            },
            "prefix": true,
            "start": 314,
            "end": 321
          },
          "definite": false,
          "start": 296,
          "end": 321
        }
      ],
      "declare": false,
      "start": 292,
      "end": 322
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
            "start": 327,
            "end": 342
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "+",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "STRING1",
              "optional": false,
              "typeAnnotation": null,
              "start": 346,
              "end": 353
            },
            "prefix": true,
            "start": 345,
            "end": 353
          },
          "definite": false,
          "start": 327,
          "end": 353
        }
      ],
      "declare": false,
      "start": 323,
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
            "name": "ResultIsNumber3",
            "optional": false,
            "typeAnnotation": null,
            "start": 383,
            "end": 398
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "+",
            "argument": {
              "type": "Literal",
              "value": "",
              "raw": "\"\"",
              "start": 402,
              "end": 404
            },
            "prefix": true,
            "start": 401,
            "end": 404
          },
          "definite": false,
          "start": 383,
          "end": 404
        }
      ],
      "declare": false,
      "start": 379,
      "end": 405
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
            "start": 410,
            "end": 425
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "+",
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
                    "start": 431,
                    "end": 432
                  },
                  "value": {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 434,
                    "end": 436
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 431,
                  "end": 436
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
                    "start": 438,
                    "end": 439
                  },
                  "value": {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 441,
                    "end": 443
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 438,
                  "end": 443
                }
              ],
              "start": 429,
              "end": 445
            },
            "prefix": true,
            "start": 428,
            "end": 445
          },
          "definite": false,
          "start": 410,
          "end": 445
        }
      ],
      "declare": false,
      "start": 406,
      "end": 446
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
            "start": 451,
            "end": 466
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "+",
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
                    "start": 472,
                    "end": 473
                  },
                  "value": {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 475,
                    "end": 477
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 472,
                  "end": 477
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
                    "start": 479,
                    "end": 480
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
                            "start": 486,
                            "end": 492
                          },
                          "start": 484,
                          "end": 492
                        },
                        "start": 483,
                        "end": 492
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
                            "start": 506,
                            "end": 507
                          },
                          "start": 499,
                          "end": 508
                        }
                      ],
                      "start": 497,
                      "end": 510
                    },
                    "id": null,
                    "generator": false,
                    "start": 482,
                    "end": 510
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 479,
                  "end": 510
                }
              ],
              "start": 470,
              "end": 512
            },
            "prefix": true,
            "start": 469,
            "end": 512
          },
          "definite": false,
          "start": 451,
          "end": 512
        }
      ],
      "declare": false,
      "start": 447,
      "end": 513
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
            "start": 546,
            "end": 561
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
                "start": 565,
                "end": 569
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 570,
                "end": 571
              },
              "optional": false,
              "computed": false,
              "start": 565,
              "end": 571
            },
            "prefix": true,
            "start": 564,
            "end": 571
          },
          "definite": false,
          "start": 546,
          "end": 571
        }
      ],
      "declare": false,
      "start": 542,
      "end": 572
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
            "start": 577,
            "end": 592
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
                "start": 596,
                "end": 597
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 598,
                "end": 599
              },
              "optional": false,
              "computed": false,
              "start": 596,
              "end": 599
            },
            "prefix": true,
            "start": 595,
            "end": 599
          },
          "definite": false,
          "start": 577,
          "end": 599
        }
      ],
      "declare": false,
      "start": 573,
      "end": 600
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
            "start": 605,
            "end": 620
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "+",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "STRING1",
                "optional": false,
                "typeAnnotation": null,
                "start": 624,
                "end": 631
              },
              "property": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 632,
                "end": 633
              },
              "optional": false,
              "computed": true,
              "start": 624,
              "end": 634
            },
            "prefix": true,
            "start": 623,
            "end": 634
          },
          "definite": false,
          "start": 605,
          "end": 634
        }
      ],
      "declare": false,
      "start": 601,
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
            "name": "ResultIsNumber9",
            "optional": false,
            "typeAnnotation": null,
            "start": 640,
            "end": 655
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
                "start": 659,
                "end": 662
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 659,
              "end": 664
            },
            "prefix": true,
            "start": 658,
            "end": 664
          },
          "definite": false,
          "start": 640,
          "end": 664
        }
      ],
      "declare": false,
      "start": 636,
      "end": 665
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
            "start": 670,
            "end": 686
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
                  "start": 690,
                  "end": 691
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 692,
                  "end": 695
                },
                "optional": false,
                "computed": false,
                "start": 690,
                "end": 695
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 690,
              "end": 697
            },
            "prefix": true,
            "start": 689,
            "end": 697
          },
          "definite": false,
          "start": 670,
          "end": 697
        }
      ],
      "declare": false,
      "start": 666,
      "end": 698
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
            "start": 703,
            "end": 719
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "+",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "STRING",
                "optional": false,
                "typeAnnotation": null,
                "start": 724,
                "end": 730
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "STRING",
                "optional": false,
                "typeAnnotation": null,
                "start": 733,
                "end": 739
              },
              "start": 724,
              "end": 739
            },
            "prefix": true,
            "start": 722,
            "end": 740
          },
          "definite": false,
          "start": 703,
          "end": 740
        }
      ],
      "declare": false,
      "start": 699,
      "end": 741
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
            "start": 746,
            "end": 762
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
                  "name": "STRING",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 766,
                  "end": 772
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "charAt",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 773,
                  "end": 779
                },
                "optional": false,
                "computed": false,
                "start": 766,
                "end": 779
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 780,
                  "end": 781
                }
              ],
              "optional": false,
              "start": 766,
              "end": 782
            },
            "prefix": true,
            "start": 765,
            "end": 782
          },
          "definite": false,
          "start": 746,
          "end": 782
        }
      ],
      "declare": false,
      "start": 742,
      "end": 783
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "+",
        "argument": {
          "type": "Literal",
          "value": "",
          "raw": "\"\"",
          "start": 815,
          "end": 817
        },
        "prefix": true,
        "start": 814,
        "end": 817
      },
      "directive": null,
      "start": 814,
      "end": 818
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "+",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "STRING",
          "optional": false,
          "typeAnnotation": null,
          "start": 820,
          "end": 826
        },
        "prefix": true,
        "start": 819,
        "end": 826
      },
      "directive": null,
      "start": 819,
      "end": 827
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "+",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "STRING1",
          "optional": false,
          "typeAnnotation": null,
          "start": 829,
          "end": 836
        },
        "prefix": true,
        "start": 828,
        "end": 836
      },
      "directive": null,
      "start": 828,
      "end": 837
    },
    {
      "type": "ExpressionStatement",
      "expression": {
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
            "start": 839,
            "end": 842
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 839,
          "end": 844
        },
        "prefix": true,
        "start": 838,
        "end": 844
      },
      "directive": null,
      "start": 838,
      "end": 845
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
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "objA",
                "optional": false,
                "typeAnnotation": null,
                "start": 847,
                "end": 851
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 852,
                "end": 853
              },
              "optional": false,
              "computed": false,
              "start": 847,
              "end": 853
            },
            "prefix": true,
            "start": 846,
            "end": 853
          },
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 854,
              "end": 855
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 856,
              "end": 857
            },
            "optional": false,
            "computed": false,
            "start": 854,
            "end": 857
          }
        ],
        "start": 846,
        "end": 857
      },
      "directive": null,
      "start": 846,
      "end": 858
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 29,
  "end": 858
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 29,
    "end": 36
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 37,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "STRING",
    "start": 41,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 47,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 49,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 55,
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
    "value": "STRING1",
    "start": 61,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 68,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 70,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 81,
    "end": 82
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 82,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 84,
    "end": 85
  },
  {
    "type": "String",
    "value": "\"abc\"",
    "start": 86,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 92,
    "end": 93
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 95,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 104,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 109,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 111,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 118,
    "end": 119
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 120,
    "end": 126
  },
  {
    "type": "String",
    "value": "\"abc\"",
    "start": 127,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 134,
    "end": 135
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 137,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 145,
    "end": 146
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 151,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 160,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 162,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 168,
    "end": 169
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 174,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "foo",
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
    "type": "Punctuator",
    "value": ")",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 187,
    "end": 188
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 189,
    "end": 195
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 196,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "start": 204,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 216,
    "end": 217
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 222,
    "end": 228
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 229,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 234,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 236,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 243,
    "end": 244
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 245,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 247,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 249,
    "end": 250
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 252,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "objA",
    "start": 256,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 261,
    "end": 262
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 263,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 270,
    "end": 271
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 292,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "ResultIsNumber1",
    "start": 296,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 314,
    "end": 315
  },
  {
    "type": "Identifier",
    "value": "STRING",
    "start": 315,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 321,
    "end": 322
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 323,
    "end": 326
  },
  {
    "type": "Identifier",
    "value": "ResultIsNumber2",
    "start": 327,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 343,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 345,
    "end": 346
  },
  {
    "type": "Identifier",
    "value": "STRING1",
    "start": 346,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 353,
    "end": 354
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 379,
    "end": 382
  },
  {
    "type": "Identifier",
    "value": "ResultIsNumber3",
    "start": 383,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 399,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 401,
    "end": 402
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 402,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 404,
    "end": 405
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 406,
    "end": 409
  },
  {
    "type": "Identifier",
    "value": "ResultIsNumber4",
    "start": 410,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 426,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 428,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 429,
    "end": 430
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 431,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 432,
    "end": 433
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 434,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 436,
    "end": 437
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 438,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 439,
    "end": 440
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 441,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Keyword",
    "value": "var",
    "start": 447,
    "end": 450
  },
  {
    "type": "Identifier",
    "value": "ResultIsNumber5",
    "start": 451,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 467,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 469,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 470,
    "end": 471
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 472,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 473,
    "end": 474
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 475,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 477,
    "end": 478
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 479,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 480,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 482,
    "end": 483
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 483,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 484,
    "end": 485
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 486,
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
    "value": "=>",
    "start": 494,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 497,
    "end": 498
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 499,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 506,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 507,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 509,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 511,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 512,
    "end": 513
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 542,
    "end": 545
  },
  {
    "type": "Identifier",
    "value": "ResultIsNumber6",
    "start": 546,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 562,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 564,
    "end": 565
  },
  {
    "type": "Identifier",
    "value": "objA",
    "start": 565,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 569,
    "end": 570
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 570,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 571,
    "end": 572
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 573,
    "end": 576
  },
  {
    "type": "Identifier",
    "value": "ResultIsNumber7",
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
    "type": "Punctuator",
    "value": "+",
    "start": 595,
    "end": 596
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 596,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 597,
    "end": 598
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 598,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 599,
    "end": 600
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 601,
    "end": 604
  },
  {
    "type": "Identifier",
    "value": "ResultIsNumber8",
    "start": 605,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 621,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 623,
    "end": 624
  },
  {
    "type": "Identifier",
    "value": "STRING1",
    "start": 624,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 631,
    "end": 632
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 632,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 633,
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
    "start": 636,
    "end": 639
  },
  {
    "type": "Identifier",
    "value": "ResultIsNumber9",
    "start": 640,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 656,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 658,
    "end": 659
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 659,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 662,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 663,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 664,
    "end": 665
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 666,
    "end": 669
  },
  {
    "type": "Identifier",
    "value": "ResultIsNumber10",
    "start": 670,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 687,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 689,
    "end": 690
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 690,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 691,
    "end": 692
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 692,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 695,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 696,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 697,
    "end": 698
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 699,
    "end": 702
  },
  {
    "type": "Identifier",
    "value": "ResultIsNumber11",
    "start": 703,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 720,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 722,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 723,
    "end": 724
  },
  {
    "type": "Identifier",
    "value": "STRING",
    "start": 724,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 731,
    "end": 732
  },
  {
    "type": "Identifier",
    "value": "STRING",
    "start": 733,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 739,
    "end": 740
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 740,
    "end": 741
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 742,
    "end": 745
  },
  {
    "type": "Identifier",
    "value": "ResultIsNumber12",
    "start": 746,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 763,
    "end": 764
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 765,
    "end": 766
  },
  {
    "type": "Identifier",
    "value": "STRING",
    "start": 766,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 772,
    "end": 773
  },
  {
    "type": "Identifier",
    "value": "charAt",
    "start": 773,
    "end": 779
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 779,
    "end": 780
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 780,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 781,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 782,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 814,
    "end": 815
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 815,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 817,
    "end": 818
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 819,
    "end": 820
  },
  {
    "type": "Identifier",
    "value": "STRING",
    "start": 820,
    "end": 826
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 826,
    "end": 827
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 828,
    "end": 829
  },
  {
    "type": "Identifier",
    "value": "STRING1",
    "start": 829,
    "end": 836
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 836,
    "end": 837
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 838,
    "end": 839
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 839,
    "end": 842
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 842,
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
    "type": "Punctuator",
    "value": "+",
    "start": 846,
    "end": 847
  },
  {
    "type": "Identifier",
    "value": "objA",
    "start": 847,
    "end": 851
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 851,
    "end": 852
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 852,
    "end": 853
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 853,
    "end": 854
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 854,
    "end": 855
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 855,
    "end": 856
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 856,
    "end": 857
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 857,
    "end": 858
  }
]
```
