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
        "start": 6,
        "end": 7
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
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 12,
              "end": 16
            },
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
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 18,
                      "end": 19
                    },
                    "typeArguments": null,
                    "start": 18,
                    "end": 19
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 22,
                    "end": 26
                  }
                ],
                "start": 18,
                "end": 26
              },
              "start": 16,
              "end": 26
            },
            "value": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 29,
              "end": 33
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 12,
            "end": 34
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 38,
              "end": 49
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
                  "type": "TSParameterProperty",
                  "accessibility": null,
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "children",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSUnionType",
                          "types": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "A",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 70,
                                "end": 71
                              },
                              "typeArguments": null,
                              "start": 70,
                              "end": 71
                            },
                            {
                              "type": "TSNullKeyword",
                              "start": 74,
                              "end": 78
                            }
                          ],
                          "start": 70,
                          "end": 78
                        },
                        "start": 69,
                        "end": 81
                      },
                      "start": 67,
                      "end": 81
                    },
                    "start": 59,
                    "end": 81
                  },
                  "readonly": true,
                  "static": false,
                  "start": 50,
                  "end": 81
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 83,
                "end": 85
              },
              "expression": false,
              "start": 49,
              "end": 85
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 38,
            "end": 85
          }
        ],
        "start": 8,
        "end": 87
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 87
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getNodes",
        "optional": false,
        "typeAnnotation": null,
        "start": 98,
        "end": 106
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 110,
              "end": 111
            },
            "typeArguments": null,
            "start": 110,
            "end": 111
          },
          "start": 110,
          "end": 113
        },
        "start": 108,
        "end": 113
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
                  "name": "out",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 129,
                          "end": 130
                        },
                        "typeArguments": null,
                        "start": 129,
                        "end": 130
                      },
                      "start": 129,
                      "end": 132
                    },
                    "start": 127,
                    "end": 132
                  },
                  "start": 124,
                  "end": 132
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "start": 135,
                  "end": 137
                },
                "definite": false,
                "start": 124,
                "end": 137
              }
            ],
            "declare": false,
            "start": 118,
            "end": 138
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "current",
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
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 155,
                            "end": 156
                          },
                          "typeArguments": null,
                          "start": 155,
                          "end": 156
                        },
                        {
                          "type": "TSNullKeyword",
                          "start": 159,
                          "end": 163
                        }
                      ],
                      "start": 155,
                      "end": 163
                    },
                    "start": 153,
                    "end": 163
                  },
                  "start": 146,
                  "end": 163
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 170,
                    "end": 171
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrayExpression",
                      "elements": [],
                      "start": 172,
                      "end": 174
                    }
                  ],
                  "start": 166,
                  "end": 175
                },
                "definite": false,
                "start": 146,
                "end": 175
              }
            ],
            "declare": false,
            "start": 142,
            "end": 176
          },
          {
            "type": "WhileStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "current",
                "optional": false,
                "typeAnnotation": null,
                "start": 187,
                "end": 194
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 199,
                "end": 203
              },
              "start": 187,
              "end": 203
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "firstChild",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 215,
                        "end": 225
                      },
                      "init": {
                        "type": "Literal",
                        "value": null,
                        "raw": "null",
                        "start": 228,
                        "end": 232
                      },
                      "definite": false,
                      "start": 215,
                      "end": 232
                    }
                  ],
                  "declare": false,
                  "start": 211,
                  "end": 233
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "out",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 243,
                      "end": 246
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 247,
                      "end": 253
                    },
                    "optional": false,
                    "computed": false,
                    "start": 243,
                    "end": 253
                  },
                  "consequent": {
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
                            "name": "current",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 263,
                            "end": 270
                          },
                          "right": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "current",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 273,
                              "end": 280
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "next",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 281,
                              "end": 285
                            },
                            "optional": false,
                            "computed": false,
                            "start": 273,
                            "end": 285
                          },
                          "start": 263,
                          "end": 285
                        },
                        "directive": null,
                        "start": 263,
                        "end": 286
                      },
                      {
                        "type": "ContinueStatement",
                        "label": null,
                        "start": 293,
                        "end": 302
                      }
                    ],
                    "start": 255,
                    "end": 308
                  },
                  "alternate": null,
                  "start": 239,
                  "end": 308
                },
                {
                  "type": "ForStatement",
                  "init": {
                    "type": "VariableDeclaration",
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "i",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 323,
                          "end": 324
                        },
                        "init": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 327,
                          "end": 328
                        },
                        "definite": false,
                        "start": 323,
                        "end": 328
                      }
                    ],
                    "declare": false,
                    "start": 319,
                    "end": 328
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 330,
                      "end": 331
                    },
                    "operator": "<",
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "current",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 334,
                          "end": 341
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "children",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 342,
                          "end": 350
                        },
                        "optional": false,
                        "computed": false,
                        "start": 334,
                        "end": 350
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "length",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 351,
                        "end": 357
                      },
                      "optional": false,
                      "computed": false,
                      "start": 334,
                      "end": 357
                    },
                    "start": 330,
                    "end": 357
                  },
                  "update": {
                    "type": "UpdateExpression",
                    "operator": "++",
                    "prefix": false,
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 359,
                      "end": 360
                    },
                    "start": 359,
                    "end": 362
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
                              "name": "child",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 378,
                              "end": 383
                            },
                            "init": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "current",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 386,
                                  "end": 393
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "children",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 394,
                                  "end": 402
                                },
                                "optional": false,
                                "computed": false,
                                "start": 386,
                                "end": 402
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "i",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 403,
                                "end": 404
                              },
                              "optional": false,
                              "computed": true,
                              "start": 386,
                              "end": 405
                            },
                            "definite": false,
                            "start": 378,
                            "end": 405
                          }
                        ],
                        "declare": false,
                        "start": 372,
                        "end": 406
                      },
                      {
                        "type": "IfStatement",
                        "test": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "child",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 418,
                          "end": 423
                        },
                        "consequent": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "IfStatement",
                              "test": {
                                "type": "UnaryExpression",
                                "operator": "!",
                                "argument": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "firstChild",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 440,
                                  "end": 450
                                },
                                "prefix": true,
                                "start": 439,
                                "end": 450
                              },
                              "consequent": {
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
                                        "name": "firstChild",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 464,
                                        "end": 474
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "child",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 477,
                                        "end": 482
                                      },
                                      "start": 464,
                                      "end": 482
                                    },
                                    "directive": null,
                                    "start": 464,
                                    "end": 483
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
                                          "name": "firstChild",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 494,
                                          "end": 504
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "next",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 505,
                                          "end": 509
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 494,
                                        "end": 509
                                      },
                                      "right": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "current",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 512,
                                          "end": 519
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "next",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 520,
                                          "end": 524
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 512,
                                        "end": 524
                                      },
                                      "start": 494,
                                      "end": 524
                                    },
                                    "directive": null,
                                    "start": 494,
                                    "end": 525
                                  }
                                ],
                                "start": 452,
                                "end": 535
                              },
                              "alternate": null,
                              "start": 435,
                              "end": 535
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
                                    "name": "child",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 545,
                                    "end": 550
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "next",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 551,
                                    "end": 555
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 545,
                                  "end": 555
                                },
                                "right": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "current",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 558,
                                    "end": 565
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "next",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 566,
                                    "end": 570
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 558,
                                  "end": 570
                                },
                                "start": 545,
                                "end": 570
                              },
                              "directive": null,
                              "start": 545,
                              "end": 571
                            }
                          ],
                          "start": 425,
                          "end": 579
                        },
                        "alternate": null,
                        "start": 414,
                        "end": 579
                      }
                    ],
                    "start": 364,
                    "end": 585
                  },
                  "start": 314,
                  "end": 585
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "current",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 591,
                      "end": 598
                    },
                    "right": {
                      "type": "LogicalExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "firstChild",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 601,
                        "end": 611
                      },
                      "operator": "||",
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "current",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 615,
                          "end": 622
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "next",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 623,
                          "end": 627
                        },
                        "optional": false,
                        "computed": false,
                        "start": 615,
                        "end": 627
                      },
                      "start": 601,
                      "end": 627
                    },
                    "start": 591,
                    "end": 627
                  },
                  "directive": null,
                  "start": 591,
                  "end": 628
                }
              ],
              "start": 205,
              "end": 632
            },
            "start": 180,
            "end": 632
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "out",
              "optional": false,
              "typeAnnotation": null,
              "start": 643,
              "end": 646
            },
            "start": 636,
            "end": 647
          }
        ],
        "start": 114,
        "end": 649
      },
      "expression": false,
      "start": 89,
      "end": 649
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 649
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 6,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 12,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 16,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 18,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 20,
    "end": 21
  },
  {
    "type": "Null",
    "value": "null",
    "start": 22,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 27,
    "end": 28
  },
  {
    "type": "Null",
    "value": "null",
    "start": 29,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 33,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 38,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 49,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 50,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 59,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 72,
    "end": 73
  },
  {
    "type": "Null",
    "value": "null",
    "start": 74,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 86,
    "end": 87
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 89,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "getNodes",
    "start": 98,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 108,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 110,
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
    "value": "{",
    "start": 114,
    "end": 115
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 118,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "out",
    "start": 124,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 127,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 137,
    "end": 138
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 142,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "current",
    "start": 146,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 157,
    "end": 158
  },
  {
    "type": "Null",
    "value": "null",
    "start": 159,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 164,
    "end": 165
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 166,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 175,
    "end": 176
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 180,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 186,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "current",
    "start": 187,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 195,
    "end": 198
  },
  {
    "type": "Null",
    "value": "null",
    "start": 199,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 205,
    "end": 206
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 211,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "firstChild",
    "start": 215,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 226,
    "end": 227
  },
  {
    "type": "Null",
    "value": "null",
    "start": 228,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 232,
    "end": 233
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 239,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 242,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "out",
    "start": 243,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 246,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 247,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 253,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 255,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "current",
    "start": 263,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 271,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "current",
    "start": 273,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 280,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 281,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 285,
    "end": 286
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 293,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 301,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 307,
    "end": 308
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 314,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 318,
    "end": 319
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 319,
    "end": 322
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 323,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 325,
    "end": 326
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 327,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 328,
    "end": 329
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 330,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 332,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "current",
    "start": 334,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 341,
    "end": 342
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 342,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 350,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 351,
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
    "value": "i",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 360,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 364,
    "end": 365
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 372,
    "end": 377
  },
  {
    "type": "Identifier",
    "value": "child",
    "start": 378,
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
    "value": "current",
    "start": 386,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 393,
    "end": 394
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 394,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 402,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 404,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 405,
    "end": 406
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 414,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 417,
    "end": 418
  },
  {
    "type": "Identifier",
    "value": "child",
    "start": 418,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 423,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 425,
    "end": 426
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 435,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 438,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 439,
    "end": 440
  },
  {
    "type": "Identifier",
    "value": "firstChild",
    "start": 440,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 450,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 452,
    "end": 453
  },
  {
    "type": "Identifier",
    "value": "firstChild",
    "start": 464,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 475,
    "end": 476
  },
  {
    "type": "Identifier",
    "value": "child",
    "start": 477,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 482,
    "end": 483
  },
  {
    "type": "Identifier",
    "value": "firstChild",
    "start": 494,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 504,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 505,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 510,
    "end": 511
  },
  {
    "type": "Identifier",
    "value": "current",
    "start": 512,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 519,
    "end": 520
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 520,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 524,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 534,
    "end": 535
  },
  {
    "type": "Identifier",
    "value": "child",
    "start": 545,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 550,
    "end": 551
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 551,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 556,
    "end": 557
  },
  {
    "type": "Identifier",
    "value": "current",
    "start": 558,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 565,
    "end": 566
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 566,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 570,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 578,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 584,
    "end": 585
  },
  {
    "type": "Identifier",
    "value": "current",
    "start": 591,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 599,
    "end": 600
  },
  {
    "type": "Identifier",
    "value": "firstChild",
    "start": 601,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 612,
    "end": 614
  },
  {
    "type": "Identifier",
    "value": "current",
    "start": 615,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 622,
    "end": 623
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 623,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 627,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 631,
    "end": 632
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 636,
    "end": 642
  },
  {
    "type": "Identifier",
    "value": "out",
    "start": 643,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 646,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 648,
    "end": 649
  }
]
```
