__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 13
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "results",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "start": 23,
                    "end": 29
                  },
                  "start": 23,
                  "end": 31
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 34,
                  "end": 43
                }
              ],
              "start": 23,
              "end": 43
            },
            "start": 21,
            "end": 43
          },
          "start": 14,
          "end": 43
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "AssignmentExpression",
                  "operator": "||=",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "results",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 52,
                    "end": 59
                  },
                  "right": {
                    "type": "ArrayExpression",
                    "elements": [],
                    "start": 64,
                    "end": 66
                  },
                  "start": 52,
                  "end": 66
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 68,
                  "end": 72
                },
                "optional": false,
                "computed": false,
                "start": 51,
                "end": 72
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 100,
                  "raw": "100",
                  "start": 73,
                  "end": 76
                }
              ],
              "optional": false,
              "start": 51,
              "end": 77
            },
            "directive": null,
            "start": 51,
            "end": 78
          }
        ],
        "start": 45,
        "end": 80
      },
      "expression": false,
      "start": 0,
      "end": 80
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 91,
        "end": 95
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "results",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "start": 105,
                    "end": 111
                  },
                  "start": 105,
                  "end": 113
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 116,
                  "end": 125
                }
              ],
              "start": 105,
              "end": 125
            },
            "start": 103,
            "end": 125
          },
          "start": 96,
          "end": 125
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "AssignmentExpression",
                  "operator": "??=",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "results",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 134,
                    "end": 141
                  },
                  "right": {
                    "type": "ArrayExpression",
                    "elements": [],
                    "start": 146,
                    "end": 148
                  },
                  "start": 134,
                  "end": 148
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 150,
                  "end": 154
                },
                "optional": false,
                "computed": false,
                "start": 133,
                "end": 154
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 100,
                  "raw": "100",
                  "start": 155,
                  "end": 158
                }
              ],
              "optional": false,
              "start": 133,
              "end": 159
            },
            "directive": null,
            "start": 133,
            "end": 160
          }
        ],
        "start": 127,
        "end": 162
      },
      "expression": false,
      "start": 82,
      "end": 162
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 173,
        "end": 177
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "results",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "start": 187,
                    "end": 193
                  },
                  "start": 187,
                  "end": 195
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 198,
                  "end": 207
                }
              ],
              "start": 187,
              "end": 207
            },
            "start": 185,
            "end": 207
          },
          "start": 178,
          "end": 207
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "||=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "results",
                "optional": false,
                "typeAnnotation": null,
                "start": 215,
                "end": 222
              },
              "right": {
                "type": "ArrayExpression",
                "elements": [],
                "start": 227,
                "end": 229
              },
              "start": 215,
              "end": 229
            },
            "directive": null,
            "start": 215,
            "end": 230
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "results",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 235,
                  "end": 242
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 243,
                  "end": 247
                },
                "optional": false,
                "computed": false,
                "start": 235,
                "end": 247
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 100,
                  "raw": "100",
                  "start": 248,
                  "end": 251
                }
              ],
              "optional": false,
              "start": 235,
              "end": 252
            },
            "directive": null,
            "start": 235,
            "end": 253
          }
        ],
        "start": 209,
        "end": 255
      },
      "expression": false,
      "start": 164,
      "end": 255
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 266,
        "end": 270
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "results",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "start": 280,
                    "end": 286
                  },
                  "start": 280,
                  "end": 288
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 291,
                  "end": 300
                }
              ],
              "start": 280,
              "end": 300
            },
            "start": 278,
            "end": 300
          },
          "start": 271,
          "end": 300
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "??=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "results",
                "optional": false,
                "typeAnnotation": null,
                "start": 308,
                "end": 315
              },
              "right": {
                "type": "ArrayExpression",
                "elements": [],
                "start": 320,
                "end": 322
              },
              "start": 308,
              "end": 322
            },
            "directive": null,
            "start": 308,
            "end": 323
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "results",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 328,
                  "end": 335
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 336,
                  "end": 340
                },
                "optional": false,
                "computed": false,
                "start": 328,
                "end": 340
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 100,
                  "raw": "100",
                  "start": 341,
                  "end": 344
                }
              ],
              "optional": false,
              "start": 328,
              "end": 345
            },
            "directive": null,
            "start": 328,
            "end": 346
          }
        ],
        "start": 302,
        "end": 348
      },
      "expression": false,
      "start": 257,
      "end": 348
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ThingWithOriginal",
        "optional": false,
        "typeAnnotation": null,
        "start": 360,
        "end": 377
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 384,
              "end": 388
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 390,
                "end": 396
              },
              "start": 388,
              "end": 396
            },
            "accessibility": null,
            "static": false,
            "start": 384,
            "end": 397
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "original",
              "optional": false,
              "typeAnnotation": null,
              "start": 402,
              "end": 410
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ThingWithOriginal",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 413,
                  "end": 430
                },
                "typeArguments": null,
                "start": 413,
                "end": 430
              },
              "start": 411,
              "end": 430
            },
            "accessibility": null,
            "static": false,
            "start": 402,
            "end": 430
          }
        ],
        "start": 378,
        "end": 432
      },
      "declare": false,
      "start": 350,
      "end": 432
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
            "name": "v",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 450,
                "end": 456
              },
              "start": 448,
              "end": 456
            },
            "start": 447,
            "end": 456
          },
          "init": null,
          "definite": false,
          "start": 447,
          "end": 456
        }
      ],
      "declare": true,
      "start": 433,
      "end": 456
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "doSomethingWithAlias",
        "optional": false,
        "typeAnnotation": null,
        "start": 466,
        "end": 486
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "thing",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ThingWithOriginal",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 494,
                    "end": 511
                  },
                  "typeArguments": null,
                  "start": 494,
                  "end": 511
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 514,
                  "end": 523
                }
              ],
              "start": 494,
              "end": 523
            },
            "start": 492,
            "end": 523
          },
          "start": 487,
          "end": 523
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "defaultValue",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ThingWithOriginal",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 539,
                    "end": 556
                  },
                  "typeArguments": null,
                  "start": 539,
                  "end": 556
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 559,
                  "end": 568
                }
              ],
              "start": 539,
              "end": 568
            },
            "start": 537,
            "end": 568
          },
          "start": 525,
          "end": 568
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "v",
                "optional": false,
                "typeAnnotation": null,
                "start": 580,
                "end": 581
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 586,
                "end": 587
              },
              "start": 580,
              "end": 587
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "AssignmentExpression",
                    "operator": "&&=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "thing",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 603,
                      "end": 608
                    },
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "thing",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 613,
                        "end": 618
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "original",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 619,
                        "end": 627
                      },
                      "optional": false,
                      "computed": false,
                      "start": 613,
                      "end": 627
                    },
                    "start": 603,
                    "end": 627
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "thing",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 643,
                            "end": 648
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "name",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 649,
                            "end": 653
                          },
                          "optional": false,
                          "computed": false,
                          "start": 643,
                          "end": 653
                        },
                        "directive": null,
                        "start": 643,
                        "end": 654
                      }
                    ],
                    "start": 629,
                    "end": 664
                  },
                  "alternate": null,
                  "start": 599,
                  "end": 664
                }
              ],
              "start": 589,
              "end": 670
            },
            "alternate": {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 684,
                  "end": 685
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 690,
                  "end": 691
                },
                "start": 684,
                "end": 691
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "AssignmentExpression",
                      "operator": "&&=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "thing",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 707,
                        "end": 712
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "defaultValue",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 717,
                        "end": 729
                      },
                      "start": 707,
                      "end": 729
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "thing",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 745,
                              "end": 750
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "name",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 751,
                              "end": 755
                            },
                            "optional": false,
                            "computed": false,
                            "start": 745,
                            "end": 755
                          },
                          "directive": null,
                          "start": 745,
                          "end": 756
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "defaultValue",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 769,
                              "end": 781
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "name",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 782,
                              "end": 786
                            },
                            "optional": false,
                            "computed": false,
                            "start": 769,
                            "end": 786
                          },
                          "directive": null,
                          "start": 769,
                          "end": 786
                        }
                      ],
                      "start": 731,
                      "end": 796
                    },
                    "alternate": null,
                    "start": 703,
                    "end": 796
                  }
                ],
                "start": 693,
                "end": 802
              },
              "alternate": {
                "type": "IfStatement",
                "test": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 816,
                    "end": 817
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 822,
                    "end": 823
                  },
                  "start": 816,
                  "end": 823
                },
                "consequent": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "IfStatement",
                      "test": {
                        "type": "AssignmentExpression",
                        "operator": "||=",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "thing",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 839,
                          "end": 844
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "defaultValue",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 849,
                          "end": 861
                        },
                        "start": 839,
                        "end": 861
                      },
                      "consequent": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "thing",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 877,
                                "end": 882
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "name",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 883,
                                "end": 887
                              },
                              "optional": false,
                              "computed": false,
                              "start": 877,
                              "end": 887
                            },
                            "directive": null,
                            "start": 877,
                            "end": 888
                          },
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "defaultValue",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 901,
                                "end": 913
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "name",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 914,
                                "end": 918
                              },
                              "optional": false,
                              "computed": false,
                              "start": 901,
                              "end": 918
                            },
                            "directive": null,
                            "start": 901,
                            "end": 919
                          }
                        ],
                        "start": 863,
                        "end": 929
                      },
                      "alternate": null,
                      "start": 835,
                      "end": 929
                    }
                  ],
                  "start": 825,
                  "end": 935
                },
                "alternate": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "IfStatement",
                      "test": {
                        "type": "AssignmentExpression",
                        "operator": "??=",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "thing",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 959,
                          "end": 964
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "defaultValue",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 969,
                          "end": 981
                        },
                        "start": 959,
                        "end": 981
                      },
                      "consequent": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "thing",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 997,
                                "end": 1002
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "name",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1003,
                                "end": 1007
                              },
                              "optional": false,
                              "computed": false,
                              "start": 997,
                              "end": 1007
                            },
                            "directive": null,
                            "start": 997,
                            "end": 1008
                          },
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "defaultValue",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1021,
                                "end": 1033
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "name",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1034,
                                "end": 1038
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1021,
                              "end": 1038
                            },
                            "directive": null,
                            "start": 1021,
                            "end": 1039
                          }
                        ],
                        "start": 983,
                        "end": 1049
                      },
                      "alternate": null,
                      "start": 955,
                      "end": 1049
                    }
                  ],
                  "start": 945,
                  "end": 1055
                },
                "start": 812,
                "end": 1055
              },
              "start": 680,
              "end": 1055
            },
            "start": 576,
            "end": 1055
          }
        ],
        "start": 570,
        "end": 1057
      },
      "expression": false,
      "start": 457,
      "end": 1057
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1057
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 0,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 9,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 13,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "results",
    "start": 14,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 23,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 32,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 34,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "results",
    "start": 52,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "||=",
    "start": 60,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 67,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 68,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 72,
    "end": 73
  },
  {
    "type": "Numeric",
    "value": "100",
    "start": 73,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 79,
    "end": 80
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 82,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 91,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 95,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "results",
    "start": 96,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 103,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 105,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 114,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 116,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 133,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "results",
    "start": 134,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "??=",
    "start": 142,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": ".",
    "start": 149,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 150,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 154,
    "end": 155
  },
  {
    "type": "Numeric",
    "value": "100",
    "start": 155,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 161,
    "end": 162
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 164,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 173,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "results",
    "start": 178,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 185,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 187,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 196,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 198,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 209,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "results",
    "start": 215,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "||=",
    "start": 223,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 227,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 229,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "results",
    "start": 235,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 242,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 243,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 247,
    "end": 248
  },
  {
    "type": "Numeric",
    "value": "100",
    "start": 248,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 252,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 254,
    "end": 255
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 257,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 266,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 270,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "results",
    "start": 271,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 278,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 280,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 289,
    "end": 290
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 291,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 300,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 302,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "results",
    "start": 308,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": "??=",
    "start": 316,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 322,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "results",
    "start": 328,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 335,
    "end": 336
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 336,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 340,
    "end": 341
  },
  {
    "type": "Numeric",
    "value": "100",
    "start": 341,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 344,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 345,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 347,
    "end": 348
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 350,
    "end": 359
  },
  {
    "type": "Identifier",
    "value": "ThingWithOriginal",
    "start": 360,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 378,
    "end": 379
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 384,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 388,
    "end": 389
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 390,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 396,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "original",
    "start": 402,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 410,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 411,
    "end": 412
  },
  {
    "type": "Identifier",
    "value": "ThingWithOriginal",
    "start": 413,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 431,
    "end": 432
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 433,
    "end": 440
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 441,
    "end": 446
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 447,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 448,
    "end": 449
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 450,
    "end": 456
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 457,
    "end": 465
  },
  {
    "type": "Identifier",
    "value": "doSomethingWithAlias",
    "start": 466,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 486,
    "end": 487
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 487,
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
    "value": "ThingWithOriginal",
    "start": 494,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 512,
    "end": 513
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 514,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 523,
    "end": 524
  },
  {
    "type": "Identifier",
    "value": "defaultValue",
    "start": 525,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 537,
    "end": 538
  },
  {
    "type": "Identifier",
    "value": "ThingWithOriginal",
    "start": 539,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 557,
    "end": 558
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 559,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 568,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 570,
    "end": 571
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 576,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 579,
    "end": 580
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 580,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 582,
    "end": 585
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 586,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 587,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 589,
    "end": 590
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 599,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 602,
    "end": 603
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 603,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": "&&=",
    "start": 609,
    "end": 612
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 613,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 618,
    "end": 619
  },
  {
    "type": "Identifier",
    "value": "original",
    "start": 619,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 627,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 629,
    "end": 630
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 643,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 648,
    "end": 649
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 649,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 653,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 663,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 669,
    "end": 670
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 675,
    "end": 679
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 680,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 683,
    "end": 684
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 684,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 686,
    "end": 689
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 690,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 691,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 693,
    "end": 694
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 703,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 706,
    "end": 707
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 707,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": "&&=",
    "start": 713,
    "end": 716
  },
  {
    "type": "Identifier",
    "value": "defaultValue",
    "start": 717,
    "end": 729
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 729,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 731,
    "end": 732
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 745,
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
    "value": "name",
    "start": 751,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 755,
    "end": 756
  },
  {
    "type": "Identifier",
    "value": "defaultValue",
    "start": 769,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 781,
    "end": 782
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 782,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 795,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 801,
    "end": 802
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 807,
    "end": 811
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 812,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 815,
    "end": 816
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 816,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 818,
    "end": 821
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 822,
    "end": 823
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 823,
    "end": 824
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 825,
    "end": 826
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 835,
    "end": 837
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 838,
    "end": 839
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 839,
    "end": 844
  },
  {
    "type": "Punctuator",
    "value": "||=",
    "start": 845,
    "end": 848
  },
  {
    "type": "Identifier",
    "value": "defaultValue",
    "start": 849,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 861,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 863,
    "end": 864
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 877,
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
    "value": "name",
    "start": 883,
    "end": 887
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 887,
    "end": 888
  },
  {
    "type": "Identifier",
    "value": "defaultValue",
    "start": 901,
    "end": 913
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 913,
    "end": 914
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 914,
    "end": 918
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 918,
    "end": 919
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 928,
    "end": 929
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 934,
    "end": 935
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 940,
    "end": 944
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 945,
    "end": 946
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 955,
    "end": 957
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 958,
    "end": 959
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 959,
    "end": 964
  },
  {
    "type": "Punctuator",
    "value": "??=",
    "start": 965,
    "end": 968
  },
  {
    "type": "Identifier",
    "value": "defaultValue",
    "start": 969,
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
    "value": "{",
    "start": 983,
    "end": 984
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 997,
    "end": 1002
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1002,
    "end": 1003
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1003,
    "end": 1007
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1007,
    "end": 1008
  },
  {
    "type": "Identifier",
    "value": "defaultValue",
    "start": 1021,
    "end": 1033
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1033,
    "end": 1034
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1034,
    "end": 1038
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1038,
    "end": 1039
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1048,
    "end": 1049
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1054,
    "end": 1055
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1056,
    "end": 1057
  }
]
```
