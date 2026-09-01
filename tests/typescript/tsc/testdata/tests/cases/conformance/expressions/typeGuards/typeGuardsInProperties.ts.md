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
            "name": "num",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 147,
                "end": 153
              },
              "start": 145,
              "end": 153
            },
            "start": 142,
            "end": 153
          },
          "init": null,
          "definite": false,
          "start": 142,
          "end": 153
        }
      ],
      "declare": false,
      "start": 138,
      "end": 154
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
            "name": "strOrNum",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 169,
                    "end": 175
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 178,
                    "end": 184
                  }
                ],
                "start": 169,
                "end": 184
              },
              "start": 167,
              "end": 184
            },
            "start": 159,
            "end": 184
          },
          "init": null,
          "definite": false,
          "start": 159,
          "end": 184
        }
      ],
      "declare": false,
      "start": 155,
      "end": 185
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null,
        "start": 192,
        "end": 194
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
              "name": "pp1",
              "optional": false,
              "typeAnnotation": null,
              "start": 209,
              "end": 212
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 214,
                    "end": 220
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 223,
                    "end": 229
                  }
                ],
                "start": 214,
                "end": 229
              },
              "start": 212,
              "end": 229
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 201,
            "end": 230
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "pp2",
              "optional": false,
              "typeAnnotation": null,
              "start": 235,
              "end": 238
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 240,
                    "end": 246
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 249,
                    "end": 255
                  }
                ],
                "start": 240,
                "end": 255
              },
              "start": 238,
              "end": 255
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 235,
            "end": 256
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "pp3",
              "optional": false,
              "typeAnnotation": null,
              "start": 302,
              "end": 305
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
                      "type": "Identifier",
                      "decorators": [],
                      "name": "strOrNum",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 325,
                      "end": 333
                    },
                    "start": 318,
                    "end": 334
                  }
                ],
                "start": 308,
                "end": 340
              },
              "expression": false,
              "start": 305,
              "end": 340
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 298,
            "end": 340
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null,
              "start": 345,
              "end": 351
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
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "strOrNum",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 364,
                        "end": 372
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "left": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "UnaryExpression",
                            "operator": "typeof",
                            "argument": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 382,
                                "end": 386
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "pp1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 387,
                                "end": 390
                              },
                              "optional": false,
                              "computed": false,
                              "start": 382,
                              "end": 390
                            },
                            "prefix": true,
                            "start": 375,
                            "end": 390
                          },
                          "operator": "===",
                          "right": {
                            "type": "Literal",
                            "value": "string",
                            "raw": "\"string\"",
                            "start": 395,
                            "end": 403
                          },
                          "start": 375,
                          "end": 403
                        },
                        "operator": "&&",
                        "right": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 407,
                            "end": 411
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "pp1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 412,
                            "end": 415
                          },
                          "optional": false,
                          "computed": false,
                          "start": 407,
                          "end": 415
                        },
                        "start": 375,
                        "end": 415
                      },
                      "start": 364,
                      "end": 415
                    },
                    "directive": null,
                    "start": 364,
                    "end": 416
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "strOrNum",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 444,
                        "end": 452
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "left": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "UnaryExpression",
                            "operator": "typeof",
                            "argument": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 462,
                                "end": 466
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "pp2",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 467,
                                "end": 470
                              },
                              "optional": false,
                              "computed": false,
                              "start": 462,
                              "end": 470
                            },
                            "prefix": true,
                            "start": 455,
                            "end": 470
                          },
                          "operator": "===",
                          "right": {
                            "type": "Literal",
                            "value": "string",
                            "raw": "\"string\"",
                            "start": 475,
                            "end": 483
                          },
                          "start": 455,
                          "end": 483
                        },
                        "operator": "&&",
                        "right": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 487,
                            "end": 491
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "pp2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 492,
                            "end": 495
                          },
                          "optional": false,
                          "computed": false,
                          "start": 487,
                          "end": 495
                        },
                        "start": 455,
                        "end": 495
                      },
                      "start": 444,
                      "end": 495
                    },
                    "directive": null,
                    "start": 444,
                    "end": 496
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "strOrNum",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 524,
                        "end": 532
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "left": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "UnaryExpression",
                            "operator": "typeof",
                            "argument": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 542,
                                "end": 546
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "pp3",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 547,
                                "end": 550
                              },
                              "optional": false,
                              "computed": false,
                              "start": 542,
                              "end": 550
                            },
                            "prefix": true,
                            "start": 535,
                            "end": 550
                          },
                          "operator": "===",
                          "right": {
                            "type": "Literal",
                            "value": "string",
                            "raw": "\"string\"",
                            "start": 555,
                            "end": 563
                          },
                          "start": 535,
                          "end": 563
                        },
                        "operator": "&&",
                        "right": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 567,
                            "end": 571
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "pp3",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 572,
                            "end": 575
                          },
                          "optional": false,
                          "computed": false,
                          "start": 567,
                          "end": 575
                        },
                        "start": 535,
                        "end": 575
                      },
                      "start": 524,
                      "end": 575
                    },
                    "directive": null,
                    "start": 524,
                    "end": 576
                  }
                ],
                "start": 354,
                "end": 601
              },
              "expression": false,
              "start": 351,
              "end": 601
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 345,
            "end": 601
          }
        ],
        "start": 195,
        "end": 603
      },
      "abstract": false,
      "declare": false,
      "start": 186,
      "end": 603
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
            "name": "c1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 612,
                  "end": 614
                },
                "typeArguments": null,
                "start": 612,
                "end": 614
              },
              "start": 610,
              "end": 614
            },
            "start": 608,
            "end": 614
          },
          "init": null,
          "definite": false,
          "start": 608,
          "end": 614
        }
      ],
      "declare": false,
      "start": 604,
      "end": 615
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null,
          "start": 616,
          "end": 624
        },
        "right": {
          "type": "LogicalExpression",
          "left": {
            "type": "BinaryExpression",
            "left": {
              "type": "UnaryExpression",
              "operator": "typeof",
              "argument": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 634,
                  "end": 636
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "pp2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 637,
                  "end": 640
                },
                "optional": false,
                "computed": false,
                "start": 634,
                "end": 640
              },
              "prefix": true,
              "start": 627,
              "end": 640
            },
            "operator": "===",
            "right": {
              "type": "Literal",
              "value": "string",
              "raw": "\"string\"",
              "start": 645,
              "end": 653
            },
            "start": 627,
            "end": 653
          },
          "operator": "&&",
          "right": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "c1",
              "optional": false,
              "typeAnnotation": null,
              "start": 657,
              "end": 659
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "pp2",
              "optional": false,
              "typeAnnotation": null,
              "start": 660,
              "end": 663
            },
            "optional": false,
            "computed": false,
            "start": 657,
            "end": 663
          },
          "start": 627,
          "end": 663
        },
        "start": 616,
        "end": 663
      },
      "directive": null,
      "start": 616,
      "end": 664
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null,
          "start": 684,
          "end": 692
        },
        "right": {
          "type": "LogicalExpression",
          "left": {
            "type": "BinaryExpression",
            "left": {
              "type": "UnaryExpression",
              "operator": "typeof",
              "argument": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 702,
                  "end": 704
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "pp3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 705,
                  "end": 708
                },
                "optional": false,
                "computed": false,
                "start": 702,
                "end": 708
              },
              "prefix": true,
              "start": 695,
              "end": 708
            },
            "operator": "===",
            "right": {
              "type": "Literal",
              "value": "string",
              "raw": "\"string\"",
              "start": 713,
              "end": 721
            },
            "start": 695,
            "end": 721
          },
          "operator": "&&",
          "right": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "c1",
              "optional": false,
              "typeAnnotation": null,
              "start": 725,
              "end": 727
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "pp3",
              "optional": false,
              "typeAnnotation": null,
              "start": 728,
              "end": 731
            },
            "optional": false,
            "computed": false,
            "start": 725,
            "end": 731
          },
          "start": 695,
          "end": 731
        },
        "start": 684,
        "end": 731
      },
      "directive": null,
      "start": 684,
      "end": 732
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 768,
                      "end": 769
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSStringKeyword",
                            "start": 771,
                            "end": 777
                          },
                          {
                            "type": "TSNumberKeyword",
                            "start": 780,
                            "end": 786
                          }
                        ],
                        "start": 771,
                        "end": 786
                      },
                      "start": 769,
                      "end": 786
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 768,
                    "end": 787
                  }
                ],
                "start": 762,
                "end": 789
              },
              "start": 760,
              "end": 789
            },
            "start": 756,
            "end": 789
          },
          "init": null,
          "definite": false,
          "start": 756,
          "end": 789
        }
      ],
      "declare": false,
      "start": 752,
      "end": 790
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null,
          "start": 791,
          "end": 799
        },
        "right": {
          "type": "LogicalExpression",
          "left": {
            "type": "BinaryExpression",
            "left": {
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
                  "start": 809,
                  "end": 813
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 814,
                  "end": 815
                },
                "optional": false,
                "computed": false,
                "start": 809,
                "end": 815
              },
              "prefix": true,
              "start": 802,
              "end": 815
            },
            "operator": "===",
            "right": {
              "type": "Literal",
              "value": "string",
              "raw": "\"string\"",
              "start": 820,
              "end": 828
            },
            "start": 802,
            "end": 828
          },
          "operator": "&&",
          "right": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj1",
              "optional": false,
              "typeAnnotation": null,
              "start": 832,
              "end": 836
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 837,
              "end": 838
            },
            "optional": false,
            "computed": false,
            "start": 832,
            "end": 838
          },
          "start": 802,
          "end": 838
        },
        "start": 791,
        "end": 838
      },
      "directive": null,
      "start": 791,
      "end": 839
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 138,
  "end": 859
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 138,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 142,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 145,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 147,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 153,
    "end": 154
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 155,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 159,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 167,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 169,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 176,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 178,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 184,
    "end": 185
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 186,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 192,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 195,
    "end": 196
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 201,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "pp1",
    "start": 209,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 212,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 214,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 221,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 223,
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
    "value": "pp2",
    "start": 235,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 238,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 240,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 247,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 249,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 255,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 298,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "pp3",
    "start": 302,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 305,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 306,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 308,
    "end": 309
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 318,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 325,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 333,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 339,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 345,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 351,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 354,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 364,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 373,
    "end": 374
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 375,
    "end": 381
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 382,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 386,
    "end": 387
  },
  {
    "type": "Identifier",
    "value": "pp1",
    "start": 387,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 391,
    "end": 394
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 395,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 404,
    "end": 406
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 407,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 411,
    "end": 412
  },
  {
    "type": "Identifier",
    "value": "pp1",
    "start": 412,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 415,
    "end": 416
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 444,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 453,
    "end": 454
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 455,
    "end": 461
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 462,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 466,
    "end": 467
  },
  {
    "type": "Identifier",
    "value": "pp2",
    "start": 467,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 471,
    "end": 474
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 475,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 484,
    "end": 486
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 487,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 491,
    "end": 492
  },
  {
    "type": "Identifier",
    "value": "pp2",
    "start": 492,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 495,
    "end": 496
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 524,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 533,
    "end": 534
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 535,
    "end": 541
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 542,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 546,
    "end": 547
  },
  {
    "type": "Identifier",
    "value": "pp3",
    "start": 547,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 551,
    "end": 554
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 555,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 564,
    "end": 566
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 567,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 571,
    "end": 572
  },
  {
    "type": "Identifier",
    "value": "pp3",
    "start": 572,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 575,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 600,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 602,
    "end": 603
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 604,
    "end": 607
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 608,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 610,
    "end": 611
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 612,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 614,
    "end": 615
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 616,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 625,
    "end": 626
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 627,
    "end": 633
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 634,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 636,
    "end": 637
  },
  {
    "type": "Identifier",
    "value": "pp2",
    "start": 637,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 641,
    "end": 644
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 645,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 654,
    "end": 656
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 657,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 659,
    "end": 660
  },
  {
    "type": "Identifier",
    "value": "pp2",
    "start": 660,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 663,
    "end": 664
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 684,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 693,
    "end": 694
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 695,
    "end": 701
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 702,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 704,
    "end": 705
  },
  {
    "type": "Identifier",
    "value": "pp3",
    "start": 705,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 709,
    "end": 712
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 713,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 722,
    "end": 724
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 725,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 727,
    "end": 728
  },
  {
    "type": "Identifier",
    "value": "pp3",
    "start": 728,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 731,
    "end": 732
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 752,
    "end": 755
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 756,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 760,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 762,
    "end": 763
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 768,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 769,
    "end": 770
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 771,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 778,
    "end": 779
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 780,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 786,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 788,
    "end": 789
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 789,
    "end": 790
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 791,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 800,
    "end": 801
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 802,
    "end": 808
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 809,
    "end": 813
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 813,
    "end": 814
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 814,
    "end": 815
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 816,
    "end": 819
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 820,
    "end": 828
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 829,
    "end": 831
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 832,
    "end": 836
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 836,
    "end": 837
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 837,
    "end": 838
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 838,
    "end": 839
  }
]
```
