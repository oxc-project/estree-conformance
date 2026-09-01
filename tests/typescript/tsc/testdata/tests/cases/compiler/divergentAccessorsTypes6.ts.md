__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Element",
        "optional": false,
        "typeAnnotation": null,
        "start": 22,
        "end": 29
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "style",
              "optional": false,
              "typeAnnotation": null,
              "start": 40,
              "end": 45
            },
            "computed": false,
            "optional": false,
            "kind": "get",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "CSSStyleDeclaration",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 49,
                  "end": 68
                },
                "typeArguments": null,
                "start": 49,
                "end": 68
              },
              "start": 47,
              "end": 68
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 36,
            "end": 69
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "style",
              "optional": false,
              "typeAnnotation": null,
              "start": 78,
              "end": 83
            },
            "computed": false,
            "optional": false,
            "kind": "set",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "cssText",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 93,
                    "end": 99
                  },
                  "start": 91,
                  "end": 99
                },
                "start": 84,
                "end": 99
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 74,
            "end": 101
          }
        ],
        "start": 30,
        "end": 103
      },
      "declare": false,
      "start": 12,
      "end": 103
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
            "name": "element",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Element",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 128,
                  "end": 135
                },
                "typeArguments": null,
                "start": 128,
                "end": 135
              },
              "start": 126,
              "end": 135
            },
            "start": 119,
            "end": 135
          },
          "init": null,
          "definite": false,
          "start": 119,
          "end": 135
        }
      ],
      "declare": true,
      "start": 105,
      "end": 136
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "element",
            "optional": false,
            "typeAnnotation": null,
            "start": 137,
            "end": 144
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "style",
            "optional": false,
            "typeAnnotation": null,
            "start": 145,
            "end": 150
          },
          "optional": false,
          "computed": false,
          "start": 137,
          "end": 150
        },
        "right": {
          "type": "Literal",
          "value": "color: red",
          "raw": "\"color: red\"",
          "start": 153,
          "end": 165
        },
        "start": 137,
        "end": 165
      },
      "directive": null,
      "start": 137,
      "end": 166
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "element",
            "optional": false,
            "typeAnnotation": null,
            "start": 167,
            "end": 174
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "style",
            "optional": false,
            "typeAnnotation": null,
            "start": 175,
            "end": 180
          },
          "optional": false,
          "computed": false,
          "start": 167,
          "end": 180
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "animationTimingFunction",
          "optional": false,
          "typeAnnotation": null,
          "start": 181,
          "end": 204
        },
        "optional": false,
        "computed": false,
        "start": 167,
        "end": 204
      },
      "directive": null,
      "start": 167,
      "end": 205
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "element",
            "optional": false,
            "typeAnnotation": null,
            "start": 206,
            "end": 213
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "style",
            "optional": false,
            "typeAnnotation": null,
            "start": 214,
            "end": 219
          },
          "optional": false,
          "computed": false,
          "start": 206,
          "end": 219
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "element",
            "optional": false,
            "typeAnnotation": null,
            "start": 222,
            "end": 229
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "style",
            "optional": false,
            "typeAnnotation": null,
            "start": 230,
            "end": 235
          },
          "optional": false,
          "computed": false,
          "start": 222,
          "end": 235
        },
        "start": 206,
        "end": 235
      },
      "directive": null,
      "start": 206,
      "end": 236
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Fail",
        "optional": false,
        "typeAnnotation": null,
        "start": 404,
        "end": 408
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
              "start": 409,
              "end": 410
            },
            "constraint": {
              "type": "TSNeverKeyword",
              "start": 419,
              "end": 424
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 409,
            "end": 424
          }
        ],
        "start": 408,
        "end": 425
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "T",
          "optional": false,
          "typeAnnotation": null,
          "start": 428,
          "end": 429
        },
        "typeArguments": null,
        "start": 428,
        "end": 429
      },
      "declare": false,
      "start": 399,
      "end": 430
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I1",
        "optional": false,
        "typeAnnotation": null,
        "start": 441,
        "end": 443
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 454,
              "end": 455
            },
            "computed": false,
            "optional": false,
            "kind": "get",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 459,
                "end": 465
              },
              "start": 457,
              "end": 465
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 450,
            "end": 466
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 475,
              "end": 476
            },
            "computed": false,
            "optional": false,
            "kind": "set",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Fail",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 484,
                      "end": 488
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 489,
                          "end": 495
                        }
                      ],
                      "start": 488,
                      "end": 496
                    },
                    "start": 484,
                    "end": 496
                  },
                  "start": 482,
                  "end": 496
                },
                "start": 477,
                "end": 496
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 471,
            "end": 498
          }
        ],
        "start": 444,
        "end": 500
      },
      "declare": false,
      "start": 431,
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
            "name": "o1",
            "optional": false,
            "typeAnnotation": null,
            "start": 507,
            "end": 509
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "get",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 522,
                  "end": 523
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 527,
                      "end": 533
                    },
                    "start": 525,
                    "end": 533
                  },
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 543,
                          "end": 544
                        },
                        "start": 536,
                        "end": 545
                      }
                    ],
                    "start": 534,
                    "end": 547
                  },
                  "expression": false,
                  "start": 523,
                  "end": 547
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 518,
                "end": 547
              },
              {
                "type": "Property",
                "kind": "set",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 557,
                  "end": 558
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Fail",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 566,
                            "end": 570
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSStringKeyword",
                                "start": 571,
                                "end": 577
                              }
                            ],
                            "start": 570,
                            "end": 578
                          },
                          "start": 566,
                          "end": 578
                        },
                        "start": 564,
                        "end": 578
                      },
                      "start": 559,
                      "end": 578
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 580,
                    "end": 582
                  },
                  "expression": false,
                  "start": 558,
                  "end": 582
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 553,
                "end": 582
              }
            ],
            "start": 512,
            "end": 584
          },
          "definite": false,
          "start": 507,
          "end": 584
        }
      ],
      "declare": false,
      "start": 501,
      "end": 584
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
            "name": "o2",
            "optional": false,
            "typeAnnotation": null,
            "start": 654,
            "end": 656
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "get",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 669,
                  "end": 671
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
                          "value": 0,
                          "raw": "0",
                          "start": 683,
                          "end": 684
                        },
                        "start": 676,
                        "end": 685
                      }
                    ],
                    "start": 674,
                    "end": 687
                  },
                  "expression": false,
                  "start": 671,
                  "end": 687
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 665,
                "end": 687
              },
              {
                "type": "Property",
                "kind": "set",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 771,
                  "end": 773
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 781,
                          "end": 787
                        },
                        "start": 779,
                        "end": 787
                      },
                      "start": 774,
                      "end": 787
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 789,
                    "end": 791
                  },
                  "expression": false,
                  "start": 773,
                  "end": 791
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 767,
                "end": 791
              },
              {
                "type": "Property",
                "kind": "get",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 802,
                  "end": 804
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 808,
                      "end": 814
                    },
                    "start": 806,
                    "end": 814
                  },
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 824,
                          "end": 825
                        },
                        "start": 817,
                        "end": 826
                      }
                    ],
                    "start": 815,
                    "end": 828
                  },
                  "expression": false,
                  "start": 804,
                  "end": 828
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 798,
                "end": 828
              },
              {
                "type": "Property",
                "kind": "set",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 866,
                  "end": 868
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 876,
                          "end": 882
                        },
                        "start": 874,
                        "end": 882
                      },
                      "start": 869,
                      "end": 882
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 884,
                    "end": 886
                  },
                  "expression": false,
                  "start": 868,
                  "end": 886
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 862,
                "end": 886
              }
            ],
            "start": 659,
            "end": 889
          },
          "definite": false,
          "start": 654,
          "end": 889
        }
      ],
      "declare": false,
      "start": 648,
      "end": 890
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 890
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9,
    "end": 10
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 12,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 22,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 36,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "style",
    "start": 40,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 46,
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
    "value": "CSSStyleDeclaration",
    "start": 49,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 68,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 74,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "style",
    "start": 78,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 83,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "cssText",
    "start": 84,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 93,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Punctuator",
    "value": "}",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 105,
    "end": 112
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 113,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "element",
    "start": 119,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 128,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 135,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "element",
    "start": 137,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 144,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "style",
    "start": 145,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 151,
    "end": 152
  },
  {
    "type": "String",
    "value": "\"color: red\"",
    "start": 153,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 165,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "element",
    "start": 167,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 174,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "style",
    "start": 175,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 180,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "animationTimingFunction",
    "start": 181,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 204,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "element",
    "start": 206,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 213,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "style",
    "start": 214,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 220,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "element",
    "start": 222,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 229,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "style",
    "start": 230,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 235,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 399,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "Fail",
    "start": 404,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 408,
    "end": 409
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 409,
    "end": 410
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 411,
    "end": 418
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 419,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 424,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 426,
    "end": 427
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 428,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 429,
    "end": 430
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 431,
    "end": 440
  },
  {
    "type": "Identifier",
    "value": "I1",
    "start": 441,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 444,
    "end": 445
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 450,
    "end": 453
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 454,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 455,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Identifier",
    "value": "number",
    "start": 459,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 465,
    "end": 466
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 471,
    "end": 474
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 475,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 476,
    "end": 477
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 477,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 482,
    "end": 483
  },
  {
    "type": "Identifier",
    "value": "Fail",
    "start": 484,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 488,
    "end": 489
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 489,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 495,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 496,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 497,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 499,
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
    "value": "o1",
    "start": 507,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 510,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 512,
    "end": 513
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 518,
    "end": 521
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 522,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": ":",
    "start": 525,
    "end": 526
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 527,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 534,
    "end": 535
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 536,
    "end": 542
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 543,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 544,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 546,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 547,
    "end": 548
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 553,
    "end": 556
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 557,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 558,
    "end": 559
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 559,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 564,
    "end": 565
  },
  {
    "type": "Identifier",
    "value": "Fail",
    "start": 566,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 570,
    "end": 571
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 571,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 577,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 578,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 580,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 581,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 583,
    "end": 584
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 648,
    "end": 653
  },
  {
    "type": "Identifier",
    "value": "o2",
    "start": 654,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 657,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 659,
    "end": 660
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 665,
    "end": 668
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 669,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 671,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 672,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 674,
    "end": 675
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 676,
    "end": 682
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 683,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "value": ",",
    "start": 687,
    "end": 688
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 767,
    "end": 770
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 771,
    "end": 773
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 773,
    "end": 774
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 774,
    "end": 779
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 779,
    "end": 780
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 781,
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
    "value": "{",
    "start": 789,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 790,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 791,
    "end": 792
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 798,
    "end": 801
  },
  {
    "type": "Identifier",
    "value": "p2",
    "start": 802,
    "end": 804
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 804,
    "end": 805
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 805,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 806,
    "end": 807
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 808,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 815,
    "end": 816
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 817,
    "end": 823
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 824,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 825,
    "end": 826
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 827,
    "end": 828
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 828,
    "end": 829
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 862,
    "end": 865
  },
  {
    "type": "Identifier",
    "value": "p2",
    "start": 866,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 868,
    "end": 869
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 869,
    "end": 874
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 874,
    "end": 875
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 876,
    "end": 882
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 882,
    "end": 883
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 884,
    "end": 885
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 885,
    "end": 886
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 886,
    "end": 887
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 888,
    "end": 889
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 889,
    "end": 890
  }
]
```
