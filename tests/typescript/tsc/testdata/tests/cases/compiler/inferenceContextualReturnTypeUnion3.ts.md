__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "deprecate",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 26
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 27,
              "end": 28
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Function",
                "optional": false,
                "typeAnnotation": null,
                "start": 37,
                "end": 45
              },
              "typeArguments": null,
              "start": 37,
              "end": 45
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 27,
            "end": 45
          }
        ],
        "start": 26,
        "end": 46
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "fn",
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
                "start": 54,
                "end": 55
              },
              "typeArguments": null,
              "start": 54,
              "end": 55
            },
            "start": 52,
            "end": 55
          },
          "start": 50,
          "end": 55
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "msg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 64,
              "end": 70
            },
            "start": 62,
            "end": 70
          },
          "start": 59,
          "end": 70
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "code",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 81,
              "end": 87
            },
            "start": 79,
            "end": 87
          },
          "start": 74,
          "end": 87
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 92,
            "end": 93
          },
          "typeArguments": null,
          "start": 92,
          "end": 93
        },
        "start": 90,
        "end": 93
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 94
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
            "name": "soonFrozenObjectDeprecation",
            "optional": false,
            "typeAnnotation": null,
            "start": 102,
            "end": 129
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
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
                    "start": 133,
                    "end": 134
                  },
                  "constraint": {
                    "type": "TSObjectKeyword",
                    "start": 143,
                    "end": 149
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 133,
                  "end": 149
                }
              ],
              "start": 132,
              "end": 150
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
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
                      "start": 159,
                      "end": 160
                    },
                    "typeArguments": null,
                    "start": 159,
                    "end": 160
                  },
                  "start": 157,
                  "end": 160
                },
                "start": 154,
                "end": 160
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 170,
                    "end": 176
                  },
                  "start": 168,
                  "end": 176
                },
                "start": 164,
                "end": 176
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "code",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 186,
                    "end": 192
                  },
                  "start": 184,
                  "end": 192
                },
                "start": 180,
                "end": 192
              },
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "note",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 196,
                  "end": 200
                },
                "right": {
                  "type": "Literal",
                  "value": "",
                  "raw": "\"\"",
                  "start": 203,
                  "end": 205
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 196,
                "end": 205
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 210,
                  "end": 211
                },
                "typeArguments": null,
                "start": 210,
                "end": 211
              },
              "start": 208,
              "end": 211
            },
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
                        "name": "message",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 225,
                        "end": 232
                      },
                      "init": {
                        "type": "TemplateLiteral",
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "",
                              "cooked": ""
                            },
                            "tail": false,
                            "start": 235,
                            "end": 238
                          },
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": " will be frozen in future, all modifications are deprecated.",
                              "cooked": " will be frozen in future, all modifications are deprecated."
                            },
                            "tail": false,
                            "start": 242,
                            "end": 305
                          },
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "",
                              "cooked": ""
                            },
                            "tail": true,
                            "start": 332,
                            "end": 334
                          }
                        ],
                        "expressions": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "name",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 238,
                            "end": 242
                          },
                          {
                            "type": "LogicalExpression",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "note",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 310,
                              "end": 314
                            },
                            "operator": "&&",
                            "right": {
                              "type": "TemplateLiteral",
                              "quasis": [
                                {
                                  "type": "TemplateElement",
                                  "value": {
                                    "raw": "\\n",
                                    "cooked": "\n"
                                  },
                                  "tail": false,
                                  "start": 318,
                                  "end": 323
                                },
                                {
                                  "type": "TemplateElement",
                                  "value": {
                                    "raw": "",
                                    "cooked": ""
                                  },
                                  "tail": true,
                                  "start": 327,
                                  "end": 329
                                }
                              ],
                              "expressions": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "note",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 323,
                                  "end": 327
                                }
                              ],
                              "start": 318,
                              "end": 329
                            },
                            "start": 310,
                            "end": 329
                          }
                        ],
                        "start": 235,
                        "end": 334
                      },
                      "definite": false,
                      "start": 225,
                      "end": 334
                    }
                  ],
                  "declare": false,
                  "start": 219,
                  "end": 335
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Proxy",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 349,
                      "end": 354
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 355,
                        "end": 358
                      },
                      {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "set",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 366,
                              "end": 369
                            },
                            "value": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "deprecate",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 371,
                                "end": 380
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
                                      "name": "target",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 389,
                                      "end": 395
                                    },
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "property",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 397,
                                      "end": 405
                                    },
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "value",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 407,
                                      "end": 412
                                    },
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "receiver",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 414,
                                      "end": 422
                                    }
                                  ],
                                  "returnType": null,
                                  "body": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Reflect",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 435,
                                        "end": 442
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "set",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 443,
                                        "end": 446
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 435,
                                      "end": 446
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "target",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 447,
                                        "end": 453
                                      },
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "property",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 455,
                                        "end": 463
                                      },
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "value",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 465,
                                        "end": 470
                                      },
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "receiver",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 472,
                                        "end": 480
                                      }
                                    ],
                                    "optional": false,
                                    "start": 435,
                                    "end": 481
                                  },
                                  "id": null,
                                  "generator": false,
                                  "start": 388,
                                  "end": 481
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "message",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 489,
                                  "end": 496
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "code",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 504,
                                  "end": 508
                                }
                              ],
                              "optional": false,
                              "start": 371,
                              "end": 515
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 366,
                            "end": 515
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "defineProperty",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 521,
                              "end": 535
                            },
                            "value": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "deprecate",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 537,
                                "end": 546
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
                                      "name": "target",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 555,
                                      "end": 561
                                    },
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "property",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 563,
                                      "end": 571
                                    },
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "descriptor",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 573,
                                      "end": 583
                                    }
                                  ],
                                  "returnType": null,
                                  "body": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Reflect",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 596,
                                        "end": 603
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "defineProperty",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 604,
                                        "end": 618
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 596,
                                      "end": 618
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "target",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 619,
                                        "end": 625
                                      },
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "property",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 627,
                                        "end": 635
                                      },
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "descriptor",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 637,
                                        "end": 647
                                      }
                                    ],
                                    "optional": false,
                                    "start": 596,
                                    "end": 648
                                  },
                                  "id": null,
                                  "generator": false,
                                  "start": 554,
                                  "end": 648
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "message",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 656,
                                  "end": 663
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "code",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 671,
                                  "end": 675
                                }
                              ],
                              "optional": false,
                              "start": 537,
                              "end": 682
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 521,
                            "end": 682
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "deleteProperty",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 688,
                              "end": 702
                            },
                            "value": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "deprecate",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 704,
                                "end": 713
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
                                      "name": "target",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 722,
                                      "end": 728
                                    },
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "property",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 730,
                                      "end": 738
                                    }
                                  ],
                                  "returnType": null,
                                  "body": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Reflect",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 743,
                                        "end": 750
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "deleteProperty",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 751,
                                        "end": 765
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 743,
                                      "end": 765
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "target",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 766,
                                        "end": 772
                                      },
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "property",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 774,
                                        "end": 782
                                      }
                                    ],
                                    "optional": false,
                                    "start": 743,
                                    "end": 783
                                  },
                                  "id": null,
                                  "generator": false,
                                  "start": 721,
                                  "end": 783
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "message",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 791,
                                  "end": 798
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "code",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 806,
                                  "end": 810
                                }
                              ],
                              "optional": false,
                              "start": 704,
                              "end": 817
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 688,
                            "end": 817
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "setPrototypeOf",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 823,
                              "end": 837
                            },
                            "value": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "deprecate",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 839,
                                "end": 848
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
                                      "name": "target",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 857,
                                      "end": 863
                                    },
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "proto",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 865,
                                      "end": 870
                                    }
                                  ],
                                  "returnType": null,
                                  "body": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Reflect",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 875,
                                        "end": 882
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "setPrototypeOf",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 883,
                                        "end": 897
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 875,
                                      "end": 897
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "target",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 898,
                                        "end": 904
                                      },
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "proto",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 906,
                                        "end": 911
                                      }
                                    ],
                                    "optional": false,
                                    "start": 875,
                                    "end": 912
                                  },
                                  "id": null,
                                  "generator": false,
                                  "start": 856,
                                  "end": 912
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "message",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 920,
                                  "end": 927
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "code",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 935,
                                  "end": 939
                                }
                              ],
                              "optional": false,
                              "start": 839,
                              "end": 946
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 823,
                            "end": 946
                          }
                        ],
                        "start": 360,
                        "end": 951
                      }
                    ],
                    "start": 345,
                    "end": 952
                  },
                  "start": 338,
                  "end": 953
                }
              ],
              "start": 215,
              "end": 955
            },
            "id": null,
            "generator": false,
            "start": 132,
            "end": 955
          },
          "definite": false,
          "start": 102,
          "end": 955
        }
      ],
      "declare": false,
      "start": 96,
      "end": 956
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 956
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
    "value": "function",
    "start": 8,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "deprecate",
    "start": 17,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 26,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 27,
    "end": 28
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 29,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "Function",
    "start": 37,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 46,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 50,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 52,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 55,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "msg",
    "start": 59,
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
    "value": "string",
    "start": 64,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 70,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "code",
    "start": 74,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 81,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 90,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "value": "const",
    "start": 96,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "soonFrozenObjectDeprecation",
    "start": 102,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 132,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 133,
    "end": 134
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 135,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 143,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 150,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 154,
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
    "value": "T",
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
    "value": "name",
    "start": 164,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 168,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 170,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 176,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "code",
    "start": 180,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 186,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 192,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "note",
    "start": 196,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 201,
    "end": 202
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 203,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 208,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 212,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 215,
    "end": 216
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 219,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "message",
    "start": 225,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 233,
    "end": 234
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 235,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 238,
    "end": 242
  },
  {
    "type": "Template",
    "value": "} will be frozen in future, all modifications are deprecated.${",
    "start": 242,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "note",
    "start": 310,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 315,
    "end": 317
  },
  {
    "type": "Template",
    "value": "`\\n${",
    "start": 318,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "note",
    "start": 323,
    "end": 327
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 327,
    "end": 329
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 332,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 334,
    "end": 335
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 338,
    "end": 344
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 345,
    "end": 348
  },
  {
    "type": "Identifier",
    "value": "Proxy",
    "start": 349,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 354,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 355,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": ",",
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
    "type": "Identifier",
    "value": "set",
    "start": 366,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 369,
    "end": 370
  },
  {
    "type": "Identifier",
    "value": "deprecate",
    "start": 371,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 380,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 388,
    "end": 389
  },
  {
    "type": "Identifier",
    "value": "target",
    "start": 389,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 395,
    "end": 396
  },
  {
    "type": "Identifier",
    "value": "property",
    "start": 397,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 405,
    "end": 406
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 407,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 412,
    "end": 413
  },
  {
    "type": "Identifier",
    "value": "receiver",
    "start": 414,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 422,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 424,
    "end": 426
  },
  {
    "type": "Identifier",
    "value": "Reflect",
    "start": 435,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 442,
    "end": 443
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 443,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 446,
    "end": 447
  },
  {
    "type": "Identifier",
    "value": "target",
    "start": 447,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 453,
    "end": 454
  },
  {
    "type": "Identifier",
    "value": "property",
    "start": 455,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 463,
    "end": 464
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 465,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 470,
    "end": 471
  },
  {
    "type": "Identifier",
    "value": "receiver",
    "start": 472,
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
    "value": ",",
    "start": 481,
    "end": 482
  },
  {
    "type": "Identifier",
    "value": "message",
    "start": 489,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 496,
    "end": 497
  },
  {
    "type": "Identifier",
    "value": "code",
    "start": 504,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 508,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 514,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 515,
    "end": 516
  },
  {
    "type": "Identifier",
    "value": "defineProperty",
    "start": 521,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 535,
    "end": 536
  },
  {
    "type": "Identifier",
    "value": "deprecate",
    "start": 537,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 546,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 554,
    "end": 555
  },
  {
    "type": "Identifier",
    "value": "target",
    "start": 555,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 561,
    "end": 562
  },
  {
    "type": "Identifier",
    "value": "property",
    "start": 563,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 571,
    "end": 572
  },
  {
    "type": "Identifier",
    "value": "descriptor",
    "start": 573,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 583,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 585,
    "end": 587
  },
  {
    "type": "Identifier",
    "value": "Reflect",
    "start": 596,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 603,
    "end": 604
  },
  {
    "type": "Identifier",
    "value": "defineProperty",
    "start": 604,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 618,
    "end": 619
  },
  {
    "type": "Identifier",
    "value": "target",
    "start": 619,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 625,
    "end": 626
  },
  {
    "type": "Identifier",
    "value": "property",
    "start": 627,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 635,
    "end": 636
  },
  {
    "type": "Identifier",
    "value": "descriptor",
    "start": 637,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 647,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 648,
    "end": 649
  },
  {
    "type": "Identifier",
    "value": "message",
    "start": 656,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 663,
    "end": 664
  },
  {
    "type": "Identifier",
    "value": "code",
    "start": 671,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 675,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 681,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 682,
    "end": 683
  },
  {
    "type": "Identifier",
    "value": "deleteProperty",
    "start": 688,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 702,
    "end": 703
  },
  {
    "type": "Identifier",
    "value": "deprecate",
    "start": 704,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 713,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 721,
    "end": 722
  },
  {
    "type": "Identifier",
    "value": "target",
    "start": 722,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 728,
    "end": 729
  },
  {
    "type": "Identifier",
    "value": "property",
    "start": 730,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 738,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 740,
    "end": 742
  },
  {
    "type": "Identifier",
    "value": "Reflect",
    "start": 743,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 750,
    "end": 751
  },
  {
    "type": "Identifier",
    "value": "deleteProperty",
    "start": 751,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 765,
    "end": 766
  },
  {
    "type": "Identifier",
    "value": "target",
    "start": 766,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 772,
    "end": 773
  },
  {
    "type": "Identifier",
    "value": "property",
    "start": 774,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 782,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 783,
    "end": 784
  },
  {
    "type": "Identifier",
    "value": "message",
    "start": 791,
    "end": 798
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 798,
    "end": 799
  },
  {
    "type": "Identifier",
    "value": "code",
    "start": 806,
    "end": 810
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 810,
    "end": 811
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 816,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 817,
    "end": 818
  },
  {
    "type": "Identifier",
    "value": "setPrototypeOf",
    "start": 823,
    "end": 837
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 837,
    "end": 838
  },
  {
    "type": "Identifier",
    "value": "deprecate",
    "start": 839,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 848,
    "end": 849
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 856,
    "end": 857
  },
  {
    "type": "Identifier",
    "value": "target",
    "start": 857,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 863,
    "end": 864
  },
  {
    "type": "Identifier",
    "value": "proto",
    "start": 865,
    "end": 870
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 870,
    "end": 871
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 872,
    "end": 874
  },
  {
    "type": "Identifier",
    "value": "Reflect",
    "start": 875,
    "end": 882
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 882,
    "end": 883
  },
  {
    "type": "Identifier",
    "value": "setPrototypeOf",
    "start": 883,
    "end": 897
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 897,
    "end": 898
  },
  {
    "type": "Identifier",
    "value": "target",
    "start": 898,
    "end": 904
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 904,
    "end": 905
  },
  {
    "type": "Identifier",
    "value": "proto",
    "start": 906,
    "end": 911
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 911,
    "end": 912
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 912,
    "end": 913
  },
  {
    "type": "Identifier",
    "value": "message",
    "start": 920,
    "end": 927
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 927,
    "end": 928
  },
  {
    "type": "Identifier",
    "value": "code",
    "start": 935,
    "end": 939
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 939,
    "end": 940
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 945,
    "end": 946
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 946,
    "end": 947
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 950,
    "end": 951
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 951,
    "end": 952
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 952,
    "end": 953
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 954,
    "end": 955
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 955,
    "end": 956
  }
]
```
