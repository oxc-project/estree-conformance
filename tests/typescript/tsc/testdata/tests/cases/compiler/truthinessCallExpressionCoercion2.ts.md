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
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 14,
        "end": 15
      },
      "typeParameters": null,
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
              "name": "from",
              "optional": false,
              "typeAnnotation": null,
              "start": 29,
              "end": 33
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 37,
                  "end": 43
                },
                "start": 35,
                "end": 43
              },
              "body": null,
              "expression": false,
              "start": 33,
              "end": 44
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 22,
            "end": 44
          }
        ],
        "start": 16,
        "end": 46
      },
      "abstract": false,
      "declare": true,
      "start": 0,
      "end": 46
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 62,
        "end": 63
      },
      "typeParameters": null,
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
              "name": "from",
              "optional": false,
              "typeAnnotation": null,
              "start": 77,
              "end": 81
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 85,
                  "end": 91
                },
                "start": 83,
                "end": 91
              },
              "body": null,
              "expression": false,
              "start": 81,
              "end": 92
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 70,
            "end": 92
          }
        ],
        "start": 64,
        "end": 94
      },
      "abstract": false,
      "declare": true,
      "start": 48,
      "end": 94
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null,
        "start": 105,
        "end": 109
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "required1",
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
                  "type": "TSBooleanKeyword",
                  "start": 127,
                  "end": 134
                },
                "start": 124,
                "end": 134
              },
              "start": 121,
              "end": 134
            },
            "start": 119,
            "end": 134
          },
          "start": 110,
          "end": 134
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "required2",
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
                  "type": "TSBooleanKeyword",
                  "start": 153,
                  "end": 160
                },
                "start": 150,
                "end": 160
              },
              "start": 147,
              "end": 160
            },
            "start": 145,
            "end": 160
          },
          "start": 136,
          "end": 160
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 165,
              "end": 172
            },
            "start": 163,
            "end": 172
          },
          "start": 162,
          "end": 172
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "optional",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 191,
                  "end": 198
                },
                "start": 188,
                "end": 198
              },
              "start": 185,
              "end": 198
            },
            "start": 183,
            "end": 198
          },
          "start": 174,
          "end": 198
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "LogicalExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "required1",
                "optional": false,
                "typeAnnotation": null,
                "start": 219,
                "end": 228
              },
              "operator": "&&",
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "console",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 232,
                    "end": 239
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "log",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 240,
                    "end": 243
                  },
                  "optional": false,
                  "computed": false,
                  "start": 232,
                  "end": 243
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "required",
                    "raw": "'required'",
                    "start": 244,
                    "end": 254
                  }
                ],
                "optional": false,
                "start": 232,
                "end": 255
              },
              "start": 219,
              "end": 255
            },
            "directive": null,
            "start": 219,
            "end": 256
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "LogicalExpression",
              "left": {
                "type": "LogicalExpression",
                "left": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 275,
                  "end": 276
                },
                "operator": "&&",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "required1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 280,
                  "end": 289
                },
                "start": 275,
                "end": 289
              },
              "operator": "&&",
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "console",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 293,
                    "end": 300
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "log",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 301,
                    "end": 304
                  },
                  "optional": false,
                  "computed": false,
                  "start": 293,
                  "end": 304
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "required",
                    "raw": "'required'",
                    "start": 305,
                    "end": 315
                  }
                ],
                "optional": false,
                "start": 293,
                "end": 316
              },
              "start": 275,
              "end": 316
            },
            "directive": null,
            "start": 275,
            "end": 317
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "LogicalExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "required1",
                "optional": false,
                "typeAnnotation": null,
                "start": 333,
                "end": 342
              },
              "operator": "&&",
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "required1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 346,
                  "end": 355
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 346,
                "end": 357
              },
              "start": 333,
              "end": 357
            },
            "directive": null,
            "start": 333,
            "end": 358
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "LogicalExpression",
              "left": {
                "type": "LogicalExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "required1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 374,
                  "end": 383
                },
                "operator": "&&",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 387,
                  "end": 388
                },
                "start": 374,
                "end": 388
              },
              "operator": "&&",
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "required1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 392,
                  "end": 401
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 392,
                "end": 403
              },
              "start": 374,
              "end": 403
            },
            "directive": null,
            "start": 374,
            "end": 404
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "LogicalExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "optional",
                "optional": false,
                "typeAnnotation": null,
                "start": 420,
                "end": 428
              },
              "operator": "&&",
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "console",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 432,
                    "end": 439
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "log",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 440,
                    "end": 443
                  },
                  "optional": false,
                  "computed": false,
                  "start": 432,
                  "end": 443
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "optional",
                    "raw": "'optional'",
                    "start": 444,
                    "end": 454
                  }
                ],
                "optional": false,
                "start": 432,
                "end": 455
              },
              "start": 420,
              "end": 455
            },
            "directive": null,
            "start": 420,
            "end": 456
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "LogicalExpression",
              "left": {
                "type": "LogicalExpression",
                "left": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 472,
                  "end": 473
                },
                "operator": "&&",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "optional",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 477,
                  "end": 485
                },
                "start": 472,
                "end": 485
              },
              "operator": "&&",
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "console",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 489,
                    "end": 496
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "log",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 497,
                    "end": 500
                  },
                  "optional": false,
                  "computed": false,
                  "start": 489,
                  "end": 500
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "optional",
                    "raw": "'optional'",
                    "start": 501,
                    "end": 511
                  }
                ],
                "optional": false,
                "start": 489,
                "end": 512
              },
              "start": 472,
              "end": 512
            },
            "directive": null,
            "start": 472,
            "end": 513
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "LogicalExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "!",
                "argument": {
                  "type": "UnaryExpression",
                  "operator": "!",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "required1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 531,
                    "end": 540
                  },
                  "prefix": true,
                  "start": 530,
                  "end": 540
                },
                "prefix": true,
                "start": 529,
                "end": 540
              },
              "operator": "&&",
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "console",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 544,
                    "end": 551
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "log",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 552,
                    "end": 555
                  },
                  "optional": false,
                  "computed": false,
                  "start": 544,
                  "end": 555
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "not required",
                    "raw": "'not required'",
                    "start": 556,
                    "end": 570
                  }
                ],
                "optional": false,
                "start": 544,
                "end": 571
              },
              "start": 529,
              "end": 571
            },
            "directive": null,
            "start": 529,
            "end": 572
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "LogicalExpression",
              "left": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "required1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 588,
                  "end": 597
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 588,
                "end": 599
              },
              "operator": "&&",
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "console",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 603,
                    "end": 610
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "log",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 611,
                    "end": 614
                  },
                  "optional": false,
                  "computed": false,
                  "start": 603,
                  "end": 614
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "required call",
                    "raw": "'required call'",
                    "start": 615,
                    "end": 630
                  }
                ],
                "optional": false,
                "start": 603,
                "end": 631
              },
              "start": 588,
              "end": 631
            },
            "directive": null,
            "start": 588,
            "end": 632
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "LogicalExpression",
              "left": {
                "type": "LogicalExpression",
                "left": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "required1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 648,
                    "end": 657
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "required2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 661,
                    "end": 670
                  },
                  "start": 648,
                  "end": 670
                },
                "operator": "&&",
                "right": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "required1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 674,
                    "end": 683
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 674,
                  "end": 685
                },
                "start": 648,
                "end": 685
              },
              "operator": "&&",
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "required2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 689,
                  "end": 698
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 689,
                "end": 700
              },
              "start": 648,
              "end": 700
            },
            "directive": null,
            "start": 648,
            "end": 701
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "start": 717,
                  "end": 719
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "forEach",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 720,
                  "end": 727
                },
                "optional": false,
                "computed": false,
                "start": 717,
                "end": 727
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f",
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
                              "type": "TSVoidKeyword",
                              "start": 738,
                              "end": 742
                            },
                            "start": 735,
                            "end": 742
                          },
                          "start": 732,
                          "end": 742
                        },
                        "start": 730,
                        "end": 742
                      },
                      "start": 729,
                      "end": 742
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 747,
                      "end": 748
                    },
                    "operator": "&&",
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "f",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 752,
                          "end": 753
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "apply",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 754,
                          "end": 759
                        },
                        "optional": false,
                        "computed": false,
                        "start": 752,
                        "end": 759
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "parent",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 760,
                          "end": 766
                        },
                        {
                          "type": "ArrayExpression",
                          "elements": [],
                          "start": 768,
                          "end": 770
                        }
                      ],
                      "optional": false,
                      "start": 752,
                      "end": 771
                    },
                    "start": 747,
                    "end": 771
                  },
                  "id": null,
                  "generator": false,
                  "start": 728,
                  "end": 771
                }
              ],
              "optional": false,
              "start": 717,
              "end": 772
            },
            "directive": null,
            "start": 717,
            "end": 773
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "LogicalExpression",
              "left": {
                "type": "LogicalExpression",
                "left": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "required1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 792,
                    "end": 801
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "required2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 805,
                    "end": 814
                  },
                  "start": 792,
                  "end": 814
                },
                "operator": "&&",
                "right": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "required1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 818,
                    "end": 827
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 818,
                  "end": 829
                },
                "start": 792,
                "end": 829
              },
              "operator": "&&",
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "console",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 833,
                    "end": 840
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "log",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 841,
                    "end": 844
                  },
                  "optional": false,
                  "computed": false,
                  "start": 833,
                  "end": 844
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "foo",
                    "raw": "'foo'",
                    "start": 845,
                    "end": 850
                  }
                ],
                "optional": false,
                "start": 833,
                "end": 851
              },
              "start": 792,
              "end": 851
            },
            "directive": null,
            "start": 792,
            "end": 852
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "required1",
                "optional": false,
                "typeAnnotation": null,
                "start": 875,
                "end": 884
              },
              "operator": "&&",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 888,
                "end": 889
              },
              "start": 875,
              "end": 889
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 891,
              "end": 898
            },
            "alternate": null,
            "start": 871,
            "end": 898
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "required1",
                "optional": false,
                "typeAnnotation": null,
                "start": 921,
                "end": 930
              },
              "operator": "||",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 934,
                "end": 935
              },
              "start": 921,
              "end": 935
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 937,
              "end": 944
            },
            "alternate": null,
            "start": 917,
            "end": 944
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "required1",
                "optional": false,
                "typeAnnotation": null,
                "start": 967,
                "end": 976
              },
              "operator": "||",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "required2",
                "optional": false,
                "typeAnnotation": null,
                "start": 980,
                "end": 989
              },
              "start": 967,
              "end": 989
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 991,
              "end": 998
            },
            "alternate": null,
            "start": 963,
            "end": 998
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "required1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1021,
                "end": 1030
              },
              "operator": "??",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1034,
                "end": 1035
              },
              "start": 1021,
              "end": 1035
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 1037,
              "end": 1044
            },
            "alternate": null,
            "start": 1017,
            "end": 1044
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "required1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1067,
                "end": 1076
              },
              "operator": "??",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "required2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1080,
                "end": 1089
              },
              "start": 1067,
              "end": 1089
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 1091,
              "end": 1098
            },
            "alternate": null,
            "start": 1063,
            "end": 1098
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "required1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1123,
                "end": 1132
              },
              "operator": "&&",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1136,
                "end": 1137
              },
              "start": 1123,
              "end": 1137
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 1141,
              "end": 1148
            },
            "alternate": null,
            "start": 1117,
            "end": 1148
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "required1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1168,
                "end": 1177
              },
              "operator": "&&",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1181,
                "end": 1182
              },
              "start": 1168,
              "end": 1182
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "required1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1194,
                      "end": 1203
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 1194,
                    "end": 1205
                  },
                  "directive": null,
                  "start": 1194,
                  "end": 1206
                }
              ],
              "start": 1184,
              "end": 1212
            },
            "alternate": null,
            "start": 1164,
            "end": 1212
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "required1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1232,
                "end": 1241
              },
              "operator": "||",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1245,
                "end": 1246
              },
              "start": 1232,
              "end": 1246
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "required1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1258,
                      "end": 1267
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 1258,
                    "end": 1269
                  },
                  "directive": null,
                  "start": 1258,
                  "end": 1270
                }
              ],
              "start": 1248,
              "end": 1276
            },
            "alternate": null,
            "start": 1228,
            "end": 1276
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "required1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1296,
                "end": 1305
              },
              "operator": "??",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1309,
                "end": 1310
              },
              "start": 1296,
              "end": 1310
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "required1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1322,
                      "end": 1331
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 1322,
                    "end": 1333
                  },
                  "directive": null,
                  "start": 1322,
                  "end": 1334
                }
              ],
              "start": 1312,
              "end": 1340
            },
            "alternate": null,
            "start": 1292,
            "end": 1340
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1360,
                "end": 1361
              },
              "operator": "??",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "required1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1365,
                "end": 1374
              },
              "start": 1360,
              "end": 1374
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "required1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1386,
                      "end": 1395
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 1386,
                    "end": 1397
                  },
                  "directive": null,
                  "start": 1386,
                  "end": 1398
                }
              ],
              "start": 1376,
              "end": 1404
            },
            "alternate": null,
            "start": 1356,
            "end": 1404
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "required1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1426,
                "end": 1435
              },
              "operator": "&&",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1439,
                "end": 1440
              },
              "start": 1426,
              "end": 1440
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "required1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1454,
                      "end": 1463
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 1454,
                    "end": 1465
                  },
                  "directive": null,
                  "start": 1454,
                  "end": 1466
                }
              ],
              "start": 1444,
              "end": 1472
            },
            "alternate": null,
            "start": 1420,
            "end": 1472
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "required1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1530,
              "end": 1539
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 1542,
              "end": 1549
            },
            "alternate": null,
            "start": 1525,
            "end": 1549
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1572,
                "end": 1573
              },
              "operator": "&&",
              "right": {
                "type": "LogicalExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "required1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1578,
                  "end": 1587
                },
                "operator": "||",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "required2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1591,
                  "end": 1600
                },
                "start": 1578,
                "end": 1600
              },
              "start": 1572,
              "end": 1601
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 1603,
              "end": 1610
            },
            "alternate": null,
            "start": 1568,
            "end": 1610
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "LogicalExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "required1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1634,
                  "end": 1643
                },
                "operator": "||",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "required2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1647,
                  "end": 1656
                },
                "start": 1634,
                "end": 1656
              },
              "operator": "&&",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1661,
                "end": 1662
              },
              "start": 1633,
              "end": 1662
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 1664,
              "end": 1671
            },
            "alternate": null,
            "start": 1629,
            "end": 1671
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1694,
                "end": 1695
              },
              "operator": "&&",
              "right": {
                "type": "LogicalExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "required1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1700,
                  "end": 1709
                },
                "operator": "??",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "required2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1713,
                  "end": 1722
                },
                "start": 1700,
                "end": 1722
              },
              "start": 1694,
              "end": 1723
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 1725,
              "end": 1732
            },
            "alternate": null,
            "start": 1690,
            "end": 1732
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "LogicalExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "required1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1756,
                  "end": 1765
                },
                "operator": "??",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "required2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1769,
                  "end": 1778
                },
                "start": 1756,
                "end": 1778
              },
              "operator": "&&",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1783,
                "end": 1784
              },
              "start": 1755,
              "end": 1784
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 1786,
              "end": 1793
            },
            "alternate": null,
            "start": 1751,
            "end": 1793
          }
        ],
        "start": 200,
        "end": 1795
      },
      "expression": false,
      "start": 96,
      "end": 1795
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "checksConsole",
        "optional": false,
        "typeAnnotation": null,
        "start": 1806,
        "end": 1819
      },
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
              "type": "LogicalExpression",
              "left": {
                "type": "LogicalExpression",
                "left": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "window",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1848,
                      "end": 1854
                    },
                    "prefix": true,
                    "start": 1841,
                    "end": 1854
                  },
                  "operator": "!==",
                  "right": {
                    "type": "Literal",
                    "value": "undefined",
                    "raw": "'undefined'",
                    "start": 1859,
                    "end": 1870
                  },
                  "start": 1841,
                  "end": 1870
                },
                "operator": "&&",
                "right": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "window",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1874,
                    "end": 1880
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "console",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1881,
                    "end": 1888
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1874,
                  "end": 1888
                },
                "start": 1841,
                "end": 1888
              },
              "operator": "&&",
              "right": {
                "type": "LogicalExpression",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "window",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1902,
                        "end": 1908
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1909,
                        "end": 1916
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1902,
                      "end": 1916
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1920,
                      "end": 1923
                    },
                    "start": 1902,
                    "end": 1923
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "firebug",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1925,
                    "end": 1932
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1901,
                  "end": 1932
                },
                "operator": "||",
                "right": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "window",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1937,
                        "end": 1943
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1944,
                        "end": 1951
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1937,
                      "end": 1951
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "error",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1952,
                      "end": 1957
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1937,
                    "end": 1957
                  },
                  "operator": "&&",
                  "right": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "window",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1961,
                        "end": 1967
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1968,
                        "end": 1975
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1961,
                      "end": 1975
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "table",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1976,
                      "end": 1981
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1961,
                    "end": 1981
                  },
                  "start": 1937,
                  "end": 1981
                },
                "start": 1901,
                "end": 1982
              },
              "start": 1841,
              "end": 1983
            },
            "directive": null,
            "start": 1841,
            "end": 1984
          }
        ],
        "start": 1822,
        "end": 1986
      },
      "expression": false,
      "start": 1797,
      "end": 1986
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "checksPropertyAccess",
        "optional": false,
        "typeAnnotation": null,
        "start": 1997,
        "end": 2017
      },
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
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2032,
                  "end": 2033
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
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2046,
                        "end": 2049
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "bar",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2065,
                              "end": 2068
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
                                      "value": true,
                                      "raw": "true",
                                      "start": 2080,
                                      "end": 2084
                                    },
                                    "start": 2073,
                                    "end": 2085
                                  }
                                ],
                                "start": 2071,
                                "end": 2087
                              },
                              "expression": false,
                              "start": 2068,
                              "end": 2087
                            },
                            "method": true,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 2065,
                            "end": 2087
                          }
                        ],
                        "start": 2051,
                        "end": 2097
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 2046,
                      "end": 2097
                    }
                  ],
                  "start": 2036,
                  "end": 2103
                },
                "definite": false,
                "start": 2032,
                "end": 2103
              }
            ],
            "declare": false,
            "start": 2026,
            "end": 2103
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "LogicalExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2122,
                    "end": 2123
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2124,
                    "end": 2127
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2122,
                  "end": 2127
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2128,
                  "end": 2131
                },
                "optional": false,
                "computed": false,
                "start": 2122,
                "end": 2131
              },
              "operator": "&&",
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "console",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2135,
                    "end": 2142
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "log",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2143,
                    "end": 2146
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2135,
                  "end": 2146
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "x.foo.bar",
                    "raw": "'x.foo.bar'",
                    "start": 2147,
                    "end": 2158
                  }
                ],
                "optional": false,
                "start": 2135,
                "end": 2159
              },
              "start": 2122,
              "end": 2159
            },
            "directive": null,
            "start": 2122,
            "end": 2160
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "LogicalExpression",
              "left": {
                "type": "LogicalExpression",
                "left": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 2179,
                  "end": 2180
                },
                "operator": "&&",
                "right": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2184,
                      "end": 2185
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2186,
                      "end": 2189
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2184,
                    "end": 2189
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2190,
                    "end": 2193
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2184,
                  "end": 2193
                },
                "start": 2179,
                "end": 2193
              },
              "operator": "&&",
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "console",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2197,
                    "end": 2204
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "log",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2205,
                    "end": 2208
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2197,
                  "end": 2208
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "x.foo.bar",
                    "raw": "'x.foo.bar'",
                    "start": 2209,
                    "end": 2220
                  }
                ],
                "optional": false,
                "start": 2197,
                "end": 2221
              },
              "start": 2179,
              "end": 2221
            },
            "directive": null,
            "start": 2179,
            "end": 2222
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "LogicalExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2238,
                    "end": 2239
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2240,
                    "end": 2243
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2238,
                  "end": 2243
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2244,
                  "end": 2247
                },
                "optional": false,
                "computed": false,
                "start": 2238,
                "end": 2247
              },
              "operator": "&&",
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2251,
                      "end": 2252
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2253,
                      "end": 2256
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2251,
                    "end": 2256
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2257,
                    "end": 2260
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2251,
                  "end": 2260
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 2251,
                "end": 2262
              },
              "start": 2238,
              "end": 2262
            },
            "directive": null,
            "start": 2238,
            "end": 2263
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "LogicalExpression",
              "left": {
                "type": "LogicalExpression",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2279,
                      "end": 2280
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2281,
                      "end": 2284
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2279,
                    "end": 2284
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2285,
                    "end": 2288
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2279,
                  "end": 2288
                },
                "operator": "&&",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 2292,
                  "end": 2293
                },
                "start": 2279,
                "end": 2293
              },
              "operator": "&&",
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2297,
                      "end": 2298
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2299,
                      "end": 2302
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2297,
                    "end": 2302
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2303,
                    "end": 2306
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2297,
                  "end": 2306
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 2297,
                "end": 2308
              },
              "start": 2279,
              "end": 2308
            },
            "directive": null,
            "start": 2279,
            "end": 2309
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2331,
                  "end": 2332
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2335,
                        "end": 2336
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "from",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2337,
                        "end": 2341
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2335,
                      "end": 2341
                    },
                    "operator": "&&",
                    "right": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2346,
                            "end": 2347
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "from",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2348,
                            "end": 2352
                          },
                          "optional": false,
                          "computed": false,
                          "start": 2346,
                          "end": 2352
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Function",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2356,
                            "end": 2364
                          },
                          "typeArguments": null,
                          "start": 2356,
                          "end": 2364
                        },
                        "start": 2346,
                        "end": 2364
                      },
                      "operator": "!==",
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2370,
                          "end": 2371
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "from",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2372,
                          "end": 2376
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2370,
                        "end": 2376
                      },
                      "start": 2345,
                      "end": 2376
                    },
                    "start": 2335,
                    "end": 2376
                  },
                  "consequent": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 2379,
                    "end": 2383
                  },
                  "alternate": {
                    "type": "Literal",
                    "value": false,
                    "raw": "false",
                    "start": 2386,
                    "end": 2391
                  },
                  "start": 2335,
                  "end": 2391
                },
                "definite": false,
                "start": 2331,
                "end": 2391
              }
            ],
            "declare": false,
            "start": 2325,
            "end": 2392
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 2397,
              "end": 2398
            },
            "directive": null,
            "start": 2397,
            "end": 2399
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
                  "name": "x1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2411,
                  "end": 2413
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
                        "start": 2426,
                        "end": 2427
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2431,
                              "end": 2432
                            },
                            "value": {
                              "type": "ObjectExpression",
                              "properties": [
                                {
                                  "type": "Property",
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "c",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2436,
                                    "end": 2437
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
                                      "start": 2445,
                                      "end": 2447
                                    },
                                    "id": null,
                                    "generator": false,
                                    "start": 2439,
                                    "end": 2447
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 2436,
                                  "end": 2447
                                }
                              ],
                              "start": 2434,
                              "end": 2449
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 2431,
                            "end": 2449
                          }
                        ],
                        "start": 2429,
                        "end": 2451
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 2426,
                      "end": 2451
                    }
                  ],
                  "start": 2416,
                  "end": 2457
                },
                "definite": false,
                "start": 2411,
                "end": 2457
              }
            ],
            "declare": false,
            "start": 2405,
            "end": 2457
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
                  "name": "x2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2468,
                  "end": 2470
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
                        "start": 2483,
                        "end": 2484
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2488,
                              "end": 2489
                            },
                            "value": {
                              "type": "ObjectExpression",
                              "properties": [
                                {
                                  "type": "Property",
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "c",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2493,
                                    "end": 2494
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
                                      "start": 2502,
                                      "end": 2504
                                    },
                                    "id": null,
                                    "generator": false,
                                    "start": 2496,
                                    "end": 2504
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 2493,
                                  "end": 2504
                                }
                              ],
                              "start": 2491,
                              "end": 2506
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 2488,
                            "end": 2506
                          }
                        ],
                        "start": 2486,
                        "end": 2508
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 2483,
                      "end": 2508
                    }
                  ],
                  "start": 2473,
                  "end": 2514
                },
                "definite": false,
                "start": 2468,
                "end": 2514
              }
            ],
            "declare": false,
            "start": 2462,
            "end": 2514
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "LogicalExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2533,
                      "end": 2535
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2536,
                      "end": 2537
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2533,
                    "end": 2537
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2538,
                    "end": 2539
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2533,
                  "end": 2539
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2540,
                  "end": 2541
                },
                "optional": false,
                "computed": false,
                "start": 2533,
                "end": 2541
              },
              "operator": "&&",
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2545,
                        "end": 2547
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2548,
                        "end": 2549
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2545,
                      "end": 2549
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2550,
                      "end": 2551
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2545,
                    "end": 2551
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2552,
                    "end": 2553
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2545,
                  "end": 2553
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 2545,
                "end": 2555
              },
              "start": 2533,
              "end": 2555
            },
            "directive": null,
            "start": 2533,
            "end": 2556
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2614,
                    "end": 2616
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2617,
                    "end": 2618
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2614,
                  "end": 2618
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2619,
                  "end": 2620
                },
                "optional": false,
                "computed": false,
                "start": 2614,
                "end": 2620
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 2621,
                "end": 2622
              },
              "optional": false,
              "computed": false,
              "start": 2614,
              "end": 2622
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 2625,
              "end": 2632
            },
            "alternate": null,
            "start": 2609,
            "end": 2632
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 2655,
                "end": 2656
              },
              "operator": "&&",
              "right": {
                "type": "LogicalExpression",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2661,
                        "end": 2663
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2664,
                        "end": 2665
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2661,
                      "end": 2665
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2666,
                      "end": 2667
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2661,
                    "end": 2667
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2668,
                    "end": 2669
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2661,
                  "end": 2669
                },
                "operator": "||",
                "right": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2673,
                        "end": 2675
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2676,
                        "end": 2677
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2673,
                      "end": 2677
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2678,
                      "end": 2679
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2673,
                    "end": 2679
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2680,
                    "end": 2681
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2673,
                  "end": 2681
                },
                "start": 2661,
                "end": 2681
              },
              "start": 2655,
              "end": 2682
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 2684,
              "end": 2691
            },
            "alternate": null,
            "start": 2651,
            "end": 2691
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "LogicalExpression",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2715,
                        "end": 2717
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2718,
                        "end": 2719
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2715,
                      "end": 2719
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2720,
                      "end": 2721
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2715,
                    "end": 2721
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2722,
                    "end": 2723
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2715,
                  "end": 2723
                },
                "operator": "||",
                "right": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2727,
                        "end": 2729
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2730,
                        "end": 2731
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2727,
                      "end": 2731
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2732,
                      "end": 2733
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2727,
                    "end": 2733
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2734,
                    "end": 2735
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2727,
                  "end": 2735
                },
                "start": 2715,
                "end": 2735
              },
              "operator": "&&",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 2740,
                "end": 2741
              },
              "start": 2714,
              "end": 2741
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 2743,
              "end": 2750
            },
            "alternate": null,
            "start": 2710,
            "end": 2750
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 2773,
                "end": 2774
              },
              "operator": "&&",
              "right": {
                "type": "LogicalExpression",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2779,
                        "end": 2781
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2782,
                        "end": 2783
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2779,
                      "end": 2783
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2784,
                      "end": 2785
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2779,
                    "end": 2785
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2786,
                    "end": 2787
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2779,
                  "end": 2787
                },
                "operator": "??",
                "right": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2791,
                        "end": 2793
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2794,
                        "end": 2795
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2791,
                      "end": 2795
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2796,
                      "end": 2797
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2791,
                    "end": 2797
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2798,
                    "end": 2799
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2791,
                  "end": 2799
                },
                "start": 2779,
                "end": 2799
              },
              "start": 2773,
              "end": 2800
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 2802,
              "end": 2809
            },
            "alternate": null,
            "start": 2769,
            "end": 2809
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "LogicalExpression",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2833,
                        "end": 2835
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2836,
                        "end": 2837
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2833,
                      "end": 2837
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2838,
                      "end": 2839
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2833,
                    "end": 2839
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2840,
                    "end": 2841
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2833,
                  "end": 2841
                },
                "operator": "??",
                "right": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2845,
                        "end": 2847
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2848,
                        "end": 2849
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2845,
                      "end": 2849
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2850,
                      "end": 2851
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2845,
                    "end": 2851
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2852,
                    "end": 2853
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2845,
                  "end": 2853
                },
                "start": 2833,
                "end": 2853
              },
              "operator": "&&",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 2858,
                "end": 2859
              },
              "start": 2832,
              "end": 2859
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 2861,
              "end": 2868
            },
            "alternate": null,
            "start": 2828,
            "end": 2868
          }
        ],
        "start": 2020,
        "end": 2870
      },
      "expression": false,
      "start": 1988,
      "end": 2870
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 2878,
        "end": 2881
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
              "name": "optional",
              "optional": false,
              "typeAnnotation": null,
              "start": 2888,
              "end": 2896
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 2905,
                    "end": 2912
                  },
                  "start": 2902,
                  "end": 2912
                },
                "start": 2899,
                "end": 2912
              },
              "start": 2897,
              "end": 2912
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": true,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 2888,
            "end": 2913
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "required",
              "optional": false,
              "typeAnnotation": null,
              "start": 2918,
              "end": 2926
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
                      "value": true,
                      "raw": "true",
                      "start": 2946,
                      "end": 2950
                    },
                    "start": 2939,
                    "end": 2951
                  }
                ],
                "start": 2929,
                "end": 2957
              },
              "expression": false,
              "start": 2926,
              "end": 2957
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2918,
            "end": 2957
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null,
              "start": 2962,
              "end": 2966
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
                      "type": "LogicalExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 2996,
                          "end": 3000
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "required",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3001,
                          "end": 3009
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2996,
                        "end": 3009
                      },
                      "operator": "&&",
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "console",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3013,
                            "end": 3020
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "log",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3021,
                            "end": 3024
                          },
                          "optional": false,
                          "computed": false,
                          "start": 3013,
                          "end": 3024
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": "required",
                            "raw": "'required'",
                            "start": 3025,
                            "end": 3035
                          }
                        ],
                        "optional": false,
                        "start": 3013,
                        "end": 3036
                      },
                      "start": 2996,
                      "end": 3036
                    },
                    "directive": null,
                    "start": 2996,
                    "end": 3037
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "LogicalExpression",
                      "left": {
                        "type": "LogicalExpression",
                        "left": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 3064,
                          "end": 3065
                        },
                        "operator": "&&",
                        "right": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 3069,
                            "end": 3073
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "required",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3074,
                            "end": 3082
                          },
                          "optional": false,
                          "computed": false,
                          "start": 3069,
                          "end": 3082
                        },
                        "start": 3064,
                        "end": 3082
                      },
                      "operator": "&&",
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "console",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3086,
                            "end": 3093
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "log",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3094,
                            "end": 3097
                          },
                          "optional": false,
                          "computed": false,
                          "start": 3086,
                          "end": 3097
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": "required",
                            "raw": "'required'",
                            "start": 3098,
                            "end": 3108
                          }
                        ],
                        "optional": false,
                        "start": 3086,
                        "end": 3109
                      },
                      "start": 3064,
                      "end": 3109
                    },
                    "directive": null,
                    "start": 3064,
                    "end": 3110
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "LogicalExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 3134,
                          "end": 3138
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "required",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3139,
                          "end": 3147
                        },
                        "optional": false,
                        "computed": false,
                        "start": 3134,
                        "end": 3147
                      },
                      "operator": "&&",
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 3151,
                            "end": 3155
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "required",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3156,
                            "end": 3164
                          },
                          "optional": false,
                          "computed": false,
                          "start": 3151,
                          "end": 3164
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 3151,
                        "end": 3166
                      },
                      "start": 3134,
                      "end": 3166
                    },
                    "directive": null,
                    "start": 3134,
                    "end": 3167
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "LogicalExpression",
                      "left": {
                        "type": "LogicalExpression",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 3191,
                            "end": 3195
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "required",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3196,
                            "end": 3204
                          },
                          "optional": false,
                          "computed": false,
                          "start": 3191,
                          "end": 3204
                        },
                        "operator": "&&",
                        "right": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 3208,
                          "end": 3209
                        },
                        "start": 3191,
                        "end": 3209
                      },
                      "operator": "&&",
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 3213,
                            "end": 3217
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "required",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3218,
                            "end": 3226
                          },
                          "optional": false,
                          "computed": false,
                          "start": 3213,
                          "end": 3226
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 3213,
                        "end": 3228
                      },
                      "start": 3191,
                      "end": 3228
                    },
                    "directive": null,
                    "start": 3191,
                    "end": 3229
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "LogicalExpression",
                      "left": {
                        "type": "LogicalExpression",
                        "left": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 3253,
                          "end": 3254
                        },
                        "operator": "&&",
                        "right": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 3258,
                            "end": 3262
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "optional",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3263,
                            "end": 3271
                          },
                          "optional": false,
                          "computed": false,
                          "start": 3258,
                          "end": 3271
                        },
                        "start": 3253,
                        "end": 3271
                      },
                      "operator": "&&",
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "console",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3275,
                            "end": 3282
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "log",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3283,
                            "end": 3286
                          },
                          "optional": false,
                          "computed": false,
                          "start": 3275,
                          "end": 3286
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": "optional",
                            "raw": "'optional'",
                            "start": 3287,
                            "end": 3297
                          }
                        ],
                        "optional": false,
                        "start": 3275,
                        "end": 3298
                      },
                      "start": 3253,
                      "end": 3298
                    },
                    "directive": null,
                    "start": 3253,
                    "end": 3299
                  }
                ],
                "start": 2969,
                "end": 3305
              },
              "expression": false,
              "start": 2966,
              "end": 3305
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2962,
            "end": 3305
          }
        ],
        "start": 2882,
        "end": 3307
      },
      "abstract": false,
      "declare": false,
      "start": 2872,
      "end": 3307
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 3307
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 8,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 14,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 16,
    "end": 17
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 22,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 29,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 35,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 37,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 45,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 48,
    "end": 55
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 56,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 64,
    "end": 65
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 70,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 77,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 83,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 85,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "test",
    "start": 105,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 109,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "required1",
    "start": 110,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 124,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 127,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 134,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "required2",
    "start": 136,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 150,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 153,
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
    "value": "b",
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
    "type": "Identifier",
    "value": "boolean",
    "start": 165,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 172,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "optional",
    "start": 174,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 188,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 191,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 200,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "required1",
    "start": 219,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 229,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 232,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 239,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 240,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 243,
    "end": 244
  },
  {
    "type": "String",
    "value": "'required'",
    "start": 244,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 255,
    "end": 256
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 275,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 277,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "required1",
    "start": 280,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 290,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 293,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 300,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 301,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 304,
    "end": 305
  },
  {
    "type": "String",
    "value": "'required'",
    "start": 305,
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
    "value": ";",
    "start": 316,
    "end": 317
  },
  {
    "type": "Identifier",
    "value": "required1",
    "start": 333,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 343,
    "end": 345
  },
  {
    "type": "Identifier",
    "value": "required1",
    "start": 346,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": ";",
    "start": 357,
    "end": 358
  },
  {
    "type": "Identifier",
    "value": "required1",
    "start": 374,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 384,
    "end": 386
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 387,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 389,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "required1",
    "start": 392,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 401,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 402,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 403,
    "end": 404
  },
  {
    "type": "Identifier",
    "value": "optional",
    "start": 420,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 429,
    "end": 431
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 432,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 439,
    "end": 440
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 440,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 443,
    "end": 444
  },
  {
    "type": "String",
    "value": "'optional'",
    "start": 444,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 454,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 455,
    "end": 456
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 472,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 474,
    "end": 476
  },
  {
    "type": "Identifier",
    "value": "optional",
    "start": 477,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 486,
    "end": 488
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 489,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 496,
    "end": 497
  },
  {
    "type": "Identifier",
    "value": "log",
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
    "type": "String",
    "value": "'optional'",
    "start": 501,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Punctuator",
    "value": "!",
    "start": 529,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 530,
    "end": 531
  },
  {
    "type": "Identifier",
    "value": "required1",
    "start": 531,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 541,
    "end": 543
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 544,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 551,
    "end": 552
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 552,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 555,
    "end": 556
  },
  {
    "type": "String",
    "value": "'not required'",
    "start": 556,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Identifier",
    "value": "required1",
    "start": 588,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 597,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 598,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 600,
    "end": 602
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 603,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 610,
    "end": 611
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 611,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 614,
    "end": 615
  },
  {
    "type": "String",
    "value": "'required call'",
    "start": 615,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 630,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 631,
    "end": 632
  },
  {
    "type": "Identifier",
    "value": "required1",
    "start": 648,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 658,
    "end": 660
  },
  {
    "type": "Identifier",
    "value": "required2",
    "start": 661,
    "end": 670
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 671,
    "end": 673
  },
  {
    "type": "Identifier",
    "value": "required1",
    "start": 674,
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
    "value": "&&",
    "start": 686,
    "end": 688
  },
  {
    "type": "Identifier",
    "value": "required2",
    "start": 689,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 698,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 699,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 700,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 717,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 718,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 719,
    "end": 720
  },
  {
    "type": "Identifier",
    "value": "forEach",
    "start": 720,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 727,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 728,
    "end": 729
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 729,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 730,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 732,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 733,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 735,
    "end": 737
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 738,
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
    "value": "=>",
    "start": 744,
    "end": 746
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 747,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 749,
    "end": 751
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 752,
    "end": 753
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 753,
    "end": 754
  },
  {
    "type": "Identifier",
    "value": "apply",
    "start": 754,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 759,
    "end": 760
  },
  {
    "type": "Identifier",
    "value": "parent",
    "start": 760,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 766,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 768,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 769,
    "end": 770
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 770,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 771,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 772,
    "end": 773
  },
  {
    "type": "Identifier",
    "value": "required1",
    "start": 792,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 802,
    "end": 804
  },
  {
    "type": "Identifier",
    "value": "required2",
    "start": 805,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 815,
    "end": 817
  },
  {
    "type": "Identifier",
    "value": "required1",
    "start": 818,
    "end": 827
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 827,
    "end": 828
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 828,
    "end": 829
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 830,
    "end": 832
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 833,
    "end": 840
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 840,
    "end": 841
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 841,
    "end": 844
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 844,
    "end": 845
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 845,
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
    "type": "Keyword",
    "value": "if",
    "start": 871,
    "end": 873
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 874,
    "end": 875
  },
  {
    "type": "Identifier",
    "value": "required1",
    "start": 875,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 885,
    "end": 887
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 888,
    "end": 889
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 889,
    "end": 890
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 891,
    "end": 892
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 897,
    "end": 898
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 917,
    "end": 919
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 920,
    "end": 921
  },
  {
    "type": "Identifier",
    "value": "required1",
    "start": 921,
    "end": 930
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 931,
    "end": 933
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 934,
    "end": 935
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 935,
    "end": 936
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 937,
    "end": 938
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 943,
    "end": 944
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 963,
    "end": 965
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 966,
    "end": 967
  },
  {
    "type": "Identifier",
    "value": "required1",
    "start": 967,
    "end": 976
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 977,
    "end": 979
  },
  {
    "type": "Identifier",
    "value": "required2",
    "start": 980,
    "end": 989
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 989,
    "end": 990
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 991,
    "end": 992
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 997,
    "end": 998
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1017,
    "end": 1019
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1020,
    "end": 1021
  },
  {
    "type": "Identifier",
    "value": "required1",
    "start": 1021,
    "end": 1030
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 1031,
    "end": 1033
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1034,
    "end": 1035
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1035,
    "end": 1036
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1037,
    "end": 1038
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1043,
    "end": 1044
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1063,
    "end": 1065
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1066,
    "end": 1067
  },
  {
    "type": "Identifier",
    "value": "required1",
    "start": 1067,
    "end": 1076
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 1077,
    "end": 1079
  },
  {
    "type": "Identifier",
    "value": "required2",
    "start": 1080,
    "end": 1089
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1089,
    "end": 1090
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1091,
    "end": 1092
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1097,
    "end": 1098
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1117,
    "end": 1119
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1120,
    "end": 1121
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1121,
    "end": 1122
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1122,
    "end": 1123
  },
  {
    "type": "Identifier",
    "value": "required1",
    "start": 1123,
    "end": 1132
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1133,
    "end": 1135
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1136,
    "end": 1137
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1137,
    "end": 1138
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1138,
    "end": 1139
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1139,
    "end": 1140
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1141,
    "end": 1142
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1147,
    "end": 1148
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1164,
    "end": 1166
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1167,
    "end": 1168
  },
  {
    "type": "Identifier",
    "value": "required1",
    "start": 1168,
    "end": 1177
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1178,
    "end": 1180
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1181,
    "end": 1182
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1182,
    "end": 1183
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1184,
    "end": 1185
  },
  {
    "type": "Identifier",
    "value": "required1",
    "start": 1194,
    "end": 1203
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1203,
    "end": 1204
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1204,
    "end": 1205
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1205,
    "end": 1206
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1211,
    "end": 1212
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1228,
    "end": 1230
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1231,
    "end": 1232
  },
  {
    "type": "Identifier",
    "value": "required1",
    "start": 1232,
    "end": 1241
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 1242,
    "end": 1244
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1245,
    "end": 1246
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1246,
    "end": 1247
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1248,
    "end": 1249
  },
  {
    "type": "Identifier",
    "value": "required1",
    "start": 1258,
    "end": 1267
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1267,
    "end": 1268
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1268,
    "end": 1269
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1269,
    "end": 1270
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1275,
    "end": 1276
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1292,
    "end": 1294
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1295,
    "end": 1296
  },
  {
    "type": "Identifier",
    "value": "required1",
    "start": 1296,
    "end": 1305
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 1306,
    "end": 1308
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1309,
    "end": 1310
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1310,
    "end": 1311
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1312,
    "end": 1313
  },
  {
    "type": "Identifier",
    "value": "required1",
    "start": 1322,
    "end": 1331
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1331,
    "end": 1332
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1332,
    "end": 1333
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1333,
    "end": 1334
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1339,
    "end": 1340
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1356,
    "end": 1358
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1359,
    "end": 1360
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1360,
    "end": 1361
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 1362,
    "end": 1364
  },
  {
    "type": "Identifier",
    "value": "required1",
    "start": 1365,
    "end": 1374
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1374,
    "end": 1375
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1376,
    "end": 1377
  },
  {
    "type": "Identifier",
    "value": "required1",
    "start": 1386,
    "end": 1395
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1395,
    "end": 1396
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1396,
    "end": 1397
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1397,
    "end": 1398
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1403,
    "end": 1404
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1420,
    "end": 1422
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1423,
    "end": 1424
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1424,
    "end": 1425
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1425,
    "end": 1426
  },
  {
    "type": "Identifier",
    "value": "required1",
    "start": 1426,
    "end": 1435
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1436,
    "end": 1438
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1439,
    "end": 1440
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1440,
    "end": 1441
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1441,
    "end": 1442
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1442,
    "end": 1443
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1444,
    "end": 1445
  },
  {
    "type": "Identifier",
    "value": "required1",
    "start": 1454,
    "end": 1463
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1463,
    "end": 1464
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1464,
    "end": 1465
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1465,
    "end": 1466
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1471,
    "end": 1472
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1525,
    "end": 1527
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1528,
    "end": 1529
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1529,
    "end": 1530
  },
  {
    "type": "Identifier",
    "value": "required1",
    "start": 1530,
    "end": 1539
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1539,
    "end": 1540
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1540,
    "end": 1541
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1542,
    "end": 1543
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1548,
    "end": 1549
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1568,
    "end": 1570
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1571,
    "end": 1572
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1572,
    "end": 1573
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1574,
    "end": 1576
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1577,
    "end": 1578
  },
  {
    "type": "Identifier",
    "value": "required1",
    "start": 1578,
    "end": 1587
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 1588,
    "end": 1590
  },
  {
    "type": "Identifier",
    "value": "required2",
    "start": 1591,
    "end": 1600
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1600,
    "end": 1601
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1601,
    "end": 1602
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1603,
    "end": 1604
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1609,
    "end": 1610
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1629,
    "end": 1631
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1632,
    "end": 1633
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1633,
    "end": 1634
  },
  {
    "type": "Identifier",
    "value": "required1",
    "start": 1634,
    "end": 1643
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 1644,
    "end": 1646
  },
  {
    "type": "Identifier",
    "value": "required2",
    "start": 1647,
    "end": 1656
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1656,
    "end": 1657
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1658,
    "end": 1660
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1661,
    "end": 1662
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1662,
    "end": 1663
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1664,
    "end": 1665
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1670,
    "end": 1671
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1690,
    "end": 1692
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1693,
    "end": 1694
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1694,
    "end": 1695
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1696,
    "end": 1698
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1699,
    "end": 1700
  },
  {
    "type": "Identifier",
    "value": "required1",
    "start": 1700,
    "end": 1709
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 1710,
    "end": 1712
  },
  {
    "type": "Identifier",
    "value": "required2",
    "start": 1713,
    "end": 1722
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1722,
    "end": 1723
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1723,
    "end": 1724
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1725,
    "end": 1726
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1731,
    "end": 1732
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1751,
    "end": 1753
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1754,
    "end": 1755
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1755,
    "end": 1756
  },
  {
    "type": "Identifier",
    "value": "required1",
    "start": 1756,
    "end": 1765
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 1766,
    "end": 1768
  },
  {
    "type": "Identifier",
    "value": "required2",
    "start": 1769,
    "end": 1778
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1778,
    "end": 1779
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1780,
    "end": 1782
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1783,
    "end": 1784
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1784,
    "end": 1785
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1786,
    "end": 1787
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1792,
    "end": 1793
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1794,
    "end": 1795
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1797,
    "end": 1805
  },
  {
    "type": "Identifier",
    "value": "checksConsole",
    "start": 1806,
    "end": 1819
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1819,
    "end": 1820
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1820,
    "end": 1821
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1822,
    "end": 1823
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1841,
    "end": 1847
  },
  {
    "type": "Identifier",
    "value": "window",
    "start": 1848,
    "end": 1854
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 1855,
    "end": 1858
  },
  {
    "type": "String",
    "value": "'undefined'",
    "start": 1859,
    "end": 1870
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1871,
    "end": 1873
  },
  {
    "type": "Identifier",
    "value": "window",
    "start": 1874,
    "end": 1880
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1880,
    "end": 1881
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1881,
    "end": 1888
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1889,
    "end": 1891
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1900,
    "end": 1901
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1901,
    "end": 1902
  },
  {
    "type": "Identifier",
    "value": "window",
    "start": 1902,
    "end": 1908
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1908,
    "end": 1909
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1909,
    "end": 1916
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1917,
    "end": 1919
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1920,
    "end": 1923
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1923,
    "end": 1924
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1924,
    "end": 1925
  },
  {
    "type": "Identifier",
    "value": "firebug",
    "start": 1925,
    "end": 1932
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 1933,
    "end": 1935
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1936,
    "end": 1937
  },
  {
    "type": "Identifier",
    "value": "window",
    "start": 1937,
    "end": 1943
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1943,
    "end": 1944
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1944,
    "end": 1951
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1951,
    "end": 1952
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 1952,
    "end": 1957
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1958,
    "end": 1960
  },
  {
    "type": "Identifier",
    "value": "window",
    "start": 1961,
    "end": 1967
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1967,
    "end": 1968
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1968,
    "end": 1975
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1975,
    "end": 1976
  },
  {
    "type": "Identifier",
    "value": "table",
    "start": 1976,
    "end": 1981
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1981,
    "end": 1982
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1982,
    "end": 1983
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1983,
    "end": 1984
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1985,
    "end": 1986
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1988,
    "end": 1996
  },
  {
    "type": "Identifier",
    "value": "checksPropertyAccess",
    "start": 1997,
    "end": 2017
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2017,
    "end": 2018
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2018,
    "end": 2019
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2020,
    "end": 2021
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2026,
    "end": 2031
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2032,
    "end": 2033
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2034,
    "end": 2035
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2036,
    "end": 2037
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2046,
    "end": 2049
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2049,
    "end": 2050
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2051,
    "end": 2052
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 2065,
    "end": 2068
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2068,
    "end": 2069
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2069,
    "end": 2070
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2071,
    "end": 2072
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2073,
    "end": 2079
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2080,
    "end": 2084
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2084,
    "end": 2085
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2086,
    "end": 2087
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2096,
    "end": 2097
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2102,
    "end": 2103
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2122,
    "end": 2123
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2123,
    "end": 2124
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2124,
    "end": 2127
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2127,
    "end": 2128
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 2128,
    "end": 2131
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 2132,
    "end": 2134
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2135,
    "end": 2142
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2142,
    "end": 2143
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2143,
    "end": 2146
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2146,
    "end": 2147
  },
  {
    "type": "String",
    "value": "'x.foo.bar'",
    "start": 2147,
    "end": 2158
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2158,
    "end": 2159
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2159,
    "end": 2160
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2179,
    "end": 2180
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 2181,
    "end": 2183
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2184,
    "end": 2185
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2185,
    "end": 2186
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2186,
    "end": 2189
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2189,
    "end": 2190
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 2190,
    "end": 2193
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 2194,
    "end": 2196
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2197,
    "end": 2204
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2204,
    "end": 2205
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2205,
    "end": 2208
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2208,
    "end": 2209
  },
  {
    "type": "String",
    "value": "'x.foo.bar'",
    "start": 2209,
    "end": 2220
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2220,
    "end": 2221
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2221,
    "end": 2222
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2238,
    "end": 2239
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2239,
    "end": 2240
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2240,
    "end": 2243
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2243,
    "end": 2244
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 2244,
    "end": 2247
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 2248,
    "end": 2250
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2251,
    "end": 2252
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2252,
    "end": 2253
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2253,
    "end": 2256
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2256,
    "end": 2257
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 2257,
    "end": 2260
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2260,
    "end": 2261
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2261,
    "end": 2262
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2262,
    "end": 2263
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2279,
    "end": 2280
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2280,
    "end": 2281
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2281,
    "end": 2284
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2284,
    "end": 2285
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 2285,
    "end": 2288
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 2289,
    "end": 2291
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2292,
    "end": 2293
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 2294,
    "end": 2296
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2297,
    "end": 2298
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2298,
    "end": 2299
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2299,
    "end": 2302
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2302,
    "end": 2303
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 2303,
    "end": 2306
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2306,
    "end": 2307
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2307,
    "end": 2308
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2308,
    "end": 2309
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2325,
    "end": 2330
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2331,
    "end": 2332
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2333,
    "end": 2334
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 2335,
    "end": 2336
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2336,
    "end": 2337
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 2337,
    "end": 2341
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 2342,
    "end": 2344
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2345,
    "end": 2346
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 2346,
    "end": 2347
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2347,
    "end": 2348
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 2348,
    "end": 2352
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 2353,
    "end": 2355
  },
  {
    "type": "Identifier",
    "value": "Function",
    "start": 2356,
    "end": 2364
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2364,
    "end": 2365
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 2366,
    "end": 2369
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 2370,
    "end": 2371
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2371,
    "end": 2372
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 2372,
    "end": 2376
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2377,
    "end": 2378
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2379,
    "end": 2383
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2384,
    "end": 2385
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 2386,
    "end": 2391
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2391,
    "end": 2392
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2397,
    "end": 2398
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2398,
    "end": 2399
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2405,
    "end": 2410
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 2411,
    "end": 2413
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2414,
    "end": 2415
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2416,
    "end": 2417
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2426,
    "end": 2427
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2427,
    "end": 2428
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2429,
    "end": 2430
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2431,
    "end": 2432
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2432,
    "end": 2433
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2434,
    "end": 2435
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2436,
    "end": 2437
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2437,
    "end": 2438
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2439,
    "end": 2440
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2440,
    "end": 2441
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2442,
    "end": 2444
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2445,
    "end": 2446
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2446,
    "end": 2447
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2448,
    "end": 2449
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2450,
    "end": 2451
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2456,
    "end": 2457
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2462,
    "end": 2467
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 2468,
    "end": 2470
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2471,
    "end": 2472
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2473,
    "end": 2474
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2483,
    "end": 2484
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2484,
    "end": 2485
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2486,
    "end": 2487
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2488,
    "end": 2489
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2489,
    "end": 2490
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2491,
    "end": 2492
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2493,
    "end": 2494
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2494,
    "end": 2495
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2496,
    "end": 2497
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2497,
    "end": 2498
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2499,
    "end": 2501
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2502,
    "end": 2503
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2503,
    "end": 2504
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2505,
    "end": 2506
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2507,
    "end": 2508
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2513,
    "end": 2514
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 2533,
    "end": 2535
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2535,
    "end": 2536
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2536,
    "end": 2537
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2537,
    "end": 2538
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2538,
    "end": 2539
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2539,
    "end": 2540
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2540,
    "end": 2541
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 2542,
    "end": 2544
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 2545,
    "end": 2547
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2547,
    "end": 2548
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2548,
    "end": 2549
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2549,
    "end": 2550
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2550,
    "end": 2551
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2551,
    "end": 2552
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2552,
    "end": 2553
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2553,
    "end": 2554
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2554,
    "end": 2555
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2555,
    "end": 2556
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2609,
    "end": 2611
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2612,
    "end": 2613
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2613,
    "end": 2614
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 2614,
    "end": 2616
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2616,
    "end": 2617
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2617,
    "end": 2618
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2618,
    "end": 2619
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2619,
    "end": 2620
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2620,
    "end": 2621
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2621,
    "end": 2622
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2622,
    "end": 2623
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2623,
    "end": 2624
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2625,
    "end": 2626
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2631,
    "end": 2632
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2651,
    "end": 2653
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2654,
    "end": 2655
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2655,
    "end": 2656
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 2657,
    "end": 2659
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2660,
    "end": 2661
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 2661,
    "end": 2663
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2663,
    "end": 2664
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2664,
    "end": 2665
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2665,
    "end": 2666
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2666,
    "end": 2667
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2667,
    "end": 2668
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2668,
    "end": 2669
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 2670,
    "end": 2672
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 2673,
    "end": 2675
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2675,
    "end": 2676
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2676,
    "end": 2677
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2677,
    "end": 2678
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2678,
    "end": 2679
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2679,
    "end": 2680
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2680,
    "end": 2681
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2681,
    "end": 2682
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2682,
    "end": 2683
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2684,
    "end": 2685
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2690,
    "end": 2691
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2710,
    "end": 2712
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2713,
    "end": 2714
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2714,
    "end": 2715
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 2715,
    "end": 2717
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2717,
    "end": 2718
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2718,
    "end": 2719
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2719,
    "end": 2720
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2720,
    "end": 2721
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2721,
    "end": 2722
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2722,
    "end": 2723
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 2724,
    "end": 2726
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 2727,
    "end": 2729
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2729,
    "end": 2730
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2730,
    "end": 2731
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2731,
    "end": 2732
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2732,
    "end": 2733
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2733,
    "end": 2734
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2734,
    "end": 2735
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2735,
    "end": 2736
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 2737,
    "end": 2739
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2740,
    "end": 2741
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2741,
    "end": 2742
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2743,
    "end": 2744
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2749,
    "end": 2750
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2769,
    "end": 2771
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2772,
    "end": 2773
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2773,
    "end": 2774
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 2775,
    "end": 2777
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2778,
    "end": 2779
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 2779,
    "end": 2781
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2781,
    "end": 2782
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2782,
    "end": 2783
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2783,
    "end": 2784
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2784,
    "end": 2785
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2785,
    "end": 2786
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2786,
    "end": 2787
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 2788,
    "end": 2790
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 2791,
    "end": 2793
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2793,
    "end": 2794
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2794,
    "end": 2795
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2795,
    "end": 2796
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2796,
    "end": 2797
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2797,
    "end": 2798
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2798,
    "end": 2799
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2799,
    "end": 2800
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2800,
    "end": 2801
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2802,
    "end": 2803
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2808,
    "end": 2809
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2828,
    "end": 2830
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2831,
    "end": 2832
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2832,
    "end": 2833
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 2833,
    "end": 2835
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2835,
    "end": 2836
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2836,
    "end": 2837
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2837,
    "end": 2838
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2838,
    "end": 2839
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2839,
    "end": 2840
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2840,
    "end": 2841
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 2842,
    "end": 2844
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 2845,
    "end": 2847
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2847,
    "end": 2848
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2848,
    "end": 2849
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2849,
    "end": 2850
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2850,
    "end": 2851
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2851,
    "end": 2852
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2852,
    "end": 2853
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2853,
    "end": 2854
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 2855,
    "end": 2857
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2858,
    "end": 2859
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2859,
    "end": 2860
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2861,
    "end": 2862
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2867,
    "end": 2868
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2869,
    "end": 2870
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2872,
    "end": 2877
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 2878,
    "end": 2881
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2882,
    "end": 2883
  },
  {
    "type": "Identifier",
    "value": "optional",
    "start": 2888,
    "end": 2896
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2896,
    "end": 2897
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2897,
    "end": 2898
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2899,
    "end": 2900
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2900,
    "end": 2901
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2902,
    "end": 2904
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2905,
    "end": 2912
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2912,
    "end": 2913
  },
  {
    "type": "Identifier",
    "value": "required",
    "start": 2918,
    "end": 2926
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2926,
    "end": 2927
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2927,
    "end": 2928
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2929,
    "end": 2930
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2939,
    "end": 2945
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2946,
    "end": 2950
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2950,
    "end": 2951
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2956,
    "end": 2957
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 2962,
    "end": 2966
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2966,
    "end": 2967
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2967,
    "end": 2968
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2969,
    "end": 2970
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2996,
    "end": 3000
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3000,
    "end": 3001
  },
  {
    "type": "Identifier",
    "value": "required",
    "start": 3001,
    "end": 3009
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 3010,
    "end": 3012
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 3013,
    "end": 3020
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3020,
    "end": 3021
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 3021,
    "end": 3024
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3024,
    "end": 3025
  },
  {
    "type": "String",
    "value": "'required'",
    "start": 3025,
    "end": 3035
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3035,
    "end": 3036
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3036,
    "end": 3037
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3064,
    "end": 3065
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 3066,
    "end": 3068
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 3069,
    "end": 3073
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3073,
    "end": 3074
  },
  {
    "type": "Identifier",
    "value": "required",
    "start": 3074,
    "end": 3082
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 3083,
    "end": 3085
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 3086,
    "end": 3093
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3093,
    "end": 3094
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 3094,
    "end": 3097
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3097,
    "end": 3098
  },
  {
    "type": "String",
    "value": "'required'",
    "start": 3098,
    "end": 3108
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3108,
    "end": 3109
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3109,
    "end": 3110
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 3134,
    "end": 3138
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3138,
    "end": 3139
  },
  {
    "type": "Identifier",
    "value": "required",
    "start": 3139,
    "end": 3147
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 3148,
    "end": 3150
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 3151,
    "end": 3155
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3155,
    "end": 3156
  },
  {
    "type": "Identifier",
    "value": "required",
    "start": 3156,
    "end": 3164
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3164,
    "end": 3165
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3165,
    "end": 3166
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3166,
    "end": 3167
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 3191,
    "end": 3195
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3195,
    "end": 3196
  },
  {
    "type": "Identifier",
    "value": "required",
    "start": 3196,
    "end": 3204
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 3205,
    "end": 3207
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3208,
    "end": 3209
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 3210,
    "end": 3212
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 3213,
    "end": 3217
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3217,
    "end": 3218
  },
  {
    "type": "Identifier",
    "value": "required",
    "start": 3218,
    "end": 3226
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3226,
    "end": 3227
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3227,
    "end": 3228
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3228,
    "end": 3229
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3253,
    "end": 3254
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 3255,
    "end": 3257
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 3258,
    "end": 3262
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3262,
    "end": 3263
  },
  {
    "type": "Identifier",
    "value": "optional",
    "start": 3263,
    "end": 3271
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 3272,
    "end": 3274
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 3275,
    "end": 3282
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3282,
    "end": 3283
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 3283,
    "end": 3286
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3286,
    "end": 3287
  },
  {
    "type": "String",
    "value": "'optional'",
    "start": 3287,
    "end": 3297
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3297,
    "end": 3298
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3298,
    "end": 3299
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3304,
    "end": 3305
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3306,
    "end": 3307
  }
]
```
