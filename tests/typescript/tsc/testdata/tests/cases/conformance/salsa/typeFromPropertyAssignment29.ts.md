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
        "name": "ExpandoDecl",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 20
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 24,
              "end": 30
            },
            "start": 22,
            "end": 30
          },
          "start": 21,
          "end": 30
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 45,
                  "end": 46
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 47,
                  "end": 55
                },
                "optional": false,
                "computed": false,
                "start": 45,
                "end": 55
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 45,
              "end": 57
            },
            "start": 38,
            "end": 58
          }
        ],
        "start": 32,
        "end": 60
      },
      "expression": false,
      "start": 0,
      "end": 60
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
            "name": "ExpandoDecl",
            "optional": false,
            "typeAnnotation": null,
            "start": 61,
            "end": 72
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "prop",
            "optional": false,
            "typeAnnotation": null,
            "start": 73,
            "end": 77
          },
          "optional": false,
          "computed": false,
          "start": 61,
          "end": 77
        },
        "right": {
          "type": "Literal",
          "value": 2,
          "raw": "2",
          "start": 80,
          "end": 81
        },
        "start": 61,
        "end": 81
      },
      "directive": null,
      "start": 61,
      "end": 81
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
            "name": "ExpandoDecl",
            "optional": false,
            "typeAnnotation": null,
            "start": 82,
            "end": 93
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 94,
            "end": 95
          },
          "optional": false,
          "computed": false,
          "start": 82,
          "end": 95
        },
        "right": {
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
              "name": "n",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 110,
                  "end": 116
                },
                "start": 108,
                "end": 116
              },
              "start": 107,
              "end": 116
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 131,
                    "end": 132
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 135,
                    "end": 136
                  },
                  "start": 131,
                  "end": 136
                },
                "start": 124,
                "end": 137
              }
            ],
            "start": 118,
            "end": 139
          },
          "expression": false,
          "start": 98,
          "end": 139
        },
        "start": 82,
        "end": 139
      },
      "directive": null,
      "start": 82,
      "end": 139
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
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 144,
            "end": 145
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ExpandoDecl",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 148,
                  "end": 159
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 160,
                  "end": 164
                },
                "optional": false,
                "computed": false,
                "start": 148,
                "end": 164
              },
              "operator": "+",
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ExpandoDecl",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 167,
                    "end": 178
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 179,
                    "end": 180
                  },
                  "optional": false,
                  "computed": false,
                  "start": 167,
                  "end": 180
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": 12,
                    "raw": "12",
                    "start": 181,
                    "end": 183
                  }
                ],
                "optional": false,
                "start": 167,
                "end": 184
              },
              "start": 148,
              "end": 184
            },
            "operator": "+",
            "right": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ExpandoDecl",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 187,
                  "end": 198
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": 101,
                    "raw": "101",
                    "start": 199,
                    "end": 202
                  }
                ],
                "optional": false,
                "start": 187,
                "end": 203
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null,
                "start": 204,
                "end": 210
              },
              "optional": false,
              "computed": false,
              "start": 187,
              "end": 210
            },
            "start": 148,
            "end": 210
          },
          "definite": false,
          "start": 144,
          "end": 210
        }
      ],
      "declare": false,
      "start": 140,
      "end": 210
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
            "name": "ExpandoExpr",
            "optional": false,
            "typeAnnotation": null,
            "start": 218,
            "end": 229
          },
          "init": {
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
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 245,
                    "end": 251
                  },
                  "start": 243,
                  "end": 251
                },
                "start": 242,
                "end": 251
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 266,
                        "end": 267
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toString",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 268,
                        "end": 276
                      },
                      "optional": false,
                      "computed": false,
                      "start": 266,
                      "end": 276
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 266,
                    "end": 278
                  },
                  "start": 259,
                  "end": 279
                }
              ],
              "start": 253,
              "end": 281
            },
            "expression": false,
            "start": 232,
            "end": 281
          },
          "definite": false,
          "start": 218,
          "end": 281
        }
      ],
      "declare": false,
      "start": 212,
      "end": 281
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
            "name": "ExpandoExpr",
            "optional": false,
            "typeAnnotation": null,
            "start": 282,
            "end": 293
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "prop",
            "optional": false,
            "typeAnnotation": null,
            "start": 294,
            "end": 298
          },
          "optional": false,
          "computed": false,
          "start": 282,
          "end": 298
        },
        "right": {
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
                "start": 303,
                "end": 304
              },
              "value": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 306,
                "end": 307
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 303,
              "end": 307
            }
          ],
          "start": 301,
          "end": 309
        },
        "start": 282,
        "end": 309
      },
      "directive": null,
      "start": 282,
      "end": 309
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
            "name": "ExpandoExpr",
            "optional": false,
            "typeAnnotation": null,
            "start": 310,
            "end": 321
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "prop",
            "optional": false,
            "typeAnnotation": null,
            "start": 322,
            "end": 326
          },
          "optional": false,
          "computed": false,
          "start": 310,
          "end": 326
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 331,
                "end": 332
              },
              "value": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 334,
                "end": 336
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 331,
              "end": 336
            }
          ],
          "start": 329,
          "end": 338
        },
        "start": 310,
        "end": 338
      },
      "directive": null,
      "start": 310,
      "end": 338
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
            "name": "ExpandoExpr",
            "optional": false,
            "typeAnnotation": null,
            "start": 339,
            "end": 350
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 351,
            "end": 352
          },
          "optional": false,
          "computed": false,
          "start": 339,
          "end": 352
        },
        "right": {
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
              "name": "n",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 367,
                  "end": 373
                },
                "start": 365,
                "end": 373
              },
              "start": 364,
              "end": 373
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 388,
                    "end": 389
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 392,
                    "end": 393
                  },
                  "start": 388,
                  "end": 393
                },
                "start": 381,
                "end": 394
              }
            ],
            "start": 375,
            "end": 396
          },
          "expression": false,
          "start": 355,
          "end": 396
        },
        "start": 339,
        "end": 396
      },
      "directive": null,
      "start": 339,
      "end": 396
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
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 401,
            "end": 402
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "BinaryExpression",
              "left": {
                "type": "LogicalExpression",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ExpandoExpr",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 406,
                      "end": 417
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "prop",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 418,
                      "end": 422
                    },
                    "optional": false,
                    "computed": false,
                    "start": 406,
                    "end": 422
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 423,
                    "end": 424
                  },
                  "optional": false,
                  "computed": false,
                  "start": 406,
                  "end": 424
                },
                "operator": "||",
                "right": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 428,
                  "end": 429
                },
                "start": 406,
                "end": 429
              },
              "operator": "+",
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ExpandoExpr",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 433,
                    "end": 444
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 445,
                    "end": 446
                  },
                  "optional": false,
                  "computed": false,
                  "start": 433,
                  "end": 446
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": 12,
                    "raw": "12",
                    "start": 447,
                    "end": 449
                  }
                ],
                "optional": false,
                "start": 433,
                "end": 450
              },
              "start": 405,
              "end": 450
            },
            "operator": "+",
            "right": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ExpandoExpr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 453,
                  "end": 464
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": 101,
                    "raw": "101",
                    "start": 465,
                    "end": 468
                  }
                ],
                "optional": false,
                "start": 453,
                "end": 469
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null,
                "start": 470,
                "end": 476
              },
              "optional": false,
              "computed": false,
              "start": 453,
              "end": 476
            },
            "start": 405,
            "end": 476
          },
          "definite": false,
          "start": 401,
          "end": 476
        }
      ],
      "declare": false,
      "start": 397,
      "end": 476
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
            "name": "ExpandoArrow",
            "optional": false,
            "typeAnnotation": null,
            "start": 484,
            "end": 496
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 503,
                    "end": 509
                  },
                  "start": 501,
                  "end": 509
                },
                "start": 500,
                "end": 509
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
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 514,
                  "end": 515
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 516,
                  "end": 524
                },
                "optional": false,
                "computed": false,
                "start": 514,
                "end": 524
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 514,
              "end": 526
            },
            "id": null,
            "generator": false,
            "start": 499,
            "end": 526
          },
          "definite": false,
          "start": 484,
          "end": 526
        }
      ],
      "declare": false,
      "start": 478,
      "end": 527
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
            "name": "ExpandoArrow",
            "optional": false,
            "typeAnnotation": null,
            "start": 528,
            "end": 540
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "prop",
            "optional": false,
            "typeAnnotation": null,
            "start": 541,
            "end": 545
          },
          "optional": false,
          "computed": false,
          "start": 528,
          "end": 545
        },
        "right": {
          "type": "Literal",
          "value": 2,
          "raw": "2",
          "start": 548,
          "end": 549
        },
        "start": 528,
        "end": 549
      },
      "directive": null,
      "start": 528,
      "end": 549
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
            "name": "ExpandoArrow",
            "optional": false,
            "typeAnnotation": null,
            "start": 550,
            "end": 562
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 563,
            "end": 564
          },
          "optional": false,
          "computed": false,
          "start": 550,
          "end": 564
        },
        "right": {
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
              "name": "n",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 579,
                  "end": 585
                },
                "start": 577,
                "end": 585
              },
              "start": 576,
              "end": 585
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 600,
                    "end": 601
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 604,
                    "end": 605
                  },
                  "start": 600,
                  "end": 605
                },
                "start": 593,
                "end": 606
              }
            ],
            "start": 587,
            "end": 609
          },
          "expression": false,
          "start": 567,
          "end": 609
        },
        "start": 550,
        "end": 609
      },
      "directive": null,
      "start": 550,
      "end": 609
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ExpandoNested",
        "optional": false,
        "typeAnnotation": null,
        "start": 620,
        "end": 633
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 637,
              "end": 643
            },
            "start": 635,
            "end": 643
          },
          "start": 634,
          "end": 643
        }
      ],
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
                  "name": "nested",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 657,
                  "end": 663
                },
                "init": {
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
                      "name": "m",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 679,
                          "end": 685
                        },
                        "start": 677,
                        "end": 685
                      },
                      "start": 676,
                      "end": 685
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "n",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 704,
                            "end": 705
                          },
                          "operator": "+",
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "m",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 708,
                            "end": 709
                          },
                          "start": 704,
                          "end": 709
                        },
                        "start": 697,
                        "end": 710
                      }
                    ],
                    "start": 687,
                    "end": 716
                  },
                  "expression": false,
                  "start": 666,
                  "end": 716
                },
                "definite": false,
                "start": 657,
                "end": 716
              }
            ],
            "declare": false,
            "start": 651,
            "end": 717
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
                  "name": "nested",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 722,
                  "end": 728
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "total",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 729,
                  "end": 734
                },
                "optional": false,
                "computed": false,
                "start": 722,
                "end": 734
              },
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 737,
                  "end": 738
                },
                "operator": "+",
                "right": {
                  "type": "Literal",
                  "value": 1000000,
                  "raw": "1_000_000",
                  "start": 741,
                  "end": 750
                },
                "start": 737,
                "end": 750
              },
              "start": 722,
              "end": 750
            },
            "directive": null,
            "start": 722,
            "end": 751
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "nested",
              "optional": false,
              "typeAnnotation": null,
              "start": 763,
              "end": 769
            },
            "start": 756,
            "end": 770
          }
        ],
        "start": 645,
        "end": 772
      },
      "expression": false,
      "start": 611,
      "end": 772
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
            "name": "ExpandoNested",
            "optional": false,
            "typeAnnotation": null,
            "start": 773,
            "end": 786
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "also",
            "optional": false,
            "typeAnnotation": null,
            "start": 787,
            "end": 791
          },
          "optional": false,
          "computed": false,
          "start": 773,
          "end": 791
        },
        "right": {
          "type": "UnaryExpression",
          "operator": "-",
          "argument": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 795,
            "end": 796
          },
          "prefix": true,
          "start": 794,
          "end": 796
        },
        "start": 773,
        "end": 796
      },
      "directive": null,
      "start": 773,
      "end": 797
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ExpandoMerge",
        "optional": false,
        "typeAnnotation": null,
        "start": 808,
        "end": 820
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 824,
              "end": 830
            },
            "start": 822,
            "end": 830
          },
          "start": 821,
          "end": 830
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 845,
                "end": 846
              },
              "operator": "*",
              "right": {
                "type": "Literal",
                "value": 100,
                "raw": "100",
                "start": 849,
                "end": 852
              },
              "start": 845,
              "end": 852
            },
            "start": 838,
            "end": 853
          }
        ],
        "start": 832,
        "end": 855
      },
      "expression": false,
      "start": 799,
      "end": 855
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
            "name": "ExpandoMerge",
            "optional": false,
            "typeAnnotation": null,
            "start": 856,
            "end": 868
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "p1",
            "optional": false,
            "typeAnnotation": null,
            "start": 869,
            "end": 871
          },
          "optional": false,
          "computed": false,
          "start": 856,
          "end": 871
        },
        "right": {
          "type": "Literal",
          "value": 111,
          "raw": "111",
          "start": 874,
          "end": 877
        },
        "start": 856,
        "end": 877
      },
      "directive": null,
      "start": 856,
      "end": 877
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ExpandoMerge",
        "optional": false,
        "typeAnnotation": null,
        "start": 888,
        "end": 900
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
                    "name": "p2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 918,
                    "end": 920
                  },
                  "init": {
                    "type": "Literal",
                    "value": 222,
                    "raw": "222",
                    "start": 923,
                    "end": 926
                  },
                  "definite": false,
                  "start": 918,
                  "end": 926
                }
              ],
              "declare": false,
              "start": 914,
              "end": 927
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 907,
            "end": 927
          }
        ],
        "start": 901,
        "end": 929
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 878,
      "end": 929
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ExpandoMerge",
        "optional": false,
        "typeAnnotation": null,
        "start": 940,
        "end": 952
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
                    "name": "p3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 970,
                    "end": 972
                  },
                  "init": {
                    "type": "Literal",
                    "value": 333,
                    "raw": "333",
                    "start": 975,
                    "end": 978
                  },
                  "definite": false,
                  "start": 970,
                  "end": 978
                }
              ],
              "declare": false,
              "start": 966,
              "end": 979
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 959,
            "end": 979
          }
        ],
        "start": 953,
        "end": 981
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 930,
      "end": 981
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
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 986,
            "end": 987
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "BinaryExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ExpandoMerge",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 990,
                    "end": 1002
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1003,
                    "end": 1005
                  },
                  "optional": false,
                  "computed": false,
                  "start": 990,
                  "end": 1005
                },
                "operator": "+",
                "right": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ExpandoMerge",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1008,
                    "end": 1020
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1021,
                    "end": 1023
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1008,
                  "end": 1023
                },
                "start": 990,
                "end": 1023
              },
              "operator": "+",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ExpandoMerge",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1026,
                  "end": 1038
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1039,
                  "end": 1041
                },
                "optional": false,
                "computed": false,
                "start": 1026,
                "end": 1041
              },
              "start": 990,
              "end": 1041
            },
            "operator": "+",
            "right": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "ExpandoMerge",
                "optional": false,
                "typeAnnotation": null,
                "start": 1044,
                "end": 1056
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1057,
                  "end": 1058
                }
              ],
              "optional": false,
              "start": 1044,
              "end": 1059
            },
            "start": 990,
            "end": 1059
          },
          "definite": false,
          "start": 986,
          "end": 1059
        }
      ],
      "declare": false,
      "start": 982,
      "end": 1060
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Ns",
        "optional": false,
        "typeAnnotation": null,
        "start": 1072,
        "end": 1074
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ExpandoNamespace",
              "optional": false,
              "typeAnnotation": null,
              "start": 1090,
              "end": 1106
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 1110,
                "end": 1114
              },
              "start": 1108,
              "end": 1114
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 1115,
              "end": 1117
            },
            "expression": false,
            "start": 1081,
            "end": 1117
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
                  "name": "ExpandoNamespace",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1122,
                  "end": 1138
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1139,
                  "end": 1141
                },
                "optional": false,
                "computed": false,
                "start": 1122,
                "end": 1141
              },
              "right": {
                "type": "Literal",
                "value": 42,
                "raw": "42",
                "start": 1144,
                "end": 1146
              },
              "start": 1122,
              "end": 1146
            },
            "directive": null,
            "start": 1122,
            "end": 1147
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1168,
                "end": 1171
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ExpandoNamespace",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1191,
                      "end": 1207
                    },
                    "start": 1184,
                    "end": 1208
                  }
                ],
                "start": 1174,
                "end": 1214
              },
              "expression": false,
              "start": 1159,
              "end": 1214
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1152,
            "end": 1214
          }
        ],
        "start": 1075,
        "end": 1216
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1062,
      "end": 1216
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
            "name": "ExpandoExpr2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1272,
            "end": 1284
          },
          "init": {
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
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1300,
                    "end": 1306
                  },
                  "start": 1298,
                  "end": 1306
                },
                "start": 1297,
                "end": 1306
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1321,
                        "end": 1322
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toString",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1323,
                        "end": 1331
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1321,
                      "end": 1331
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 1321,
                    "end": 1333
                  },
                  "start": 1314,
                  "end": 1334
                }
              ],
              "start": 1308,
              "end": 1336
            },
            "expression": false,
            "start": 1287,
            "end": 1336
          },
          "definite": false,
          "start": 1272,
          "end": 1336
        }
      ],
      "declare": false,
      "start": 1268,
      "end": 1336
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
            "name": "ExpandoExpr2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1337,
            "end": 1349
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "prop",
            "optional": false,
            "typeAnnotation": null,
            "start": 1350,
            "end": 1354
          },
          "optional": false,
          "computed": false,
          "start": 1337,
          "end": 1354
        },
        "right": {
          "type": "Literal",
          "value": 2,
          "raw": "2",
          "start": 1357,
          "end": 1358
        },
        "start": 1337,
        "end": 1358
      },
      "directive": null,
      "start": 1337,
      "end": 1358
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
            "name": "ExpandoExpr2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1359,
            "end": 1371
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 1372,
            "end": 1373
          },
          "optional": false,
          "computed": false,
          "start": 1359,
          "end": 1373
        },
        "right": {
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
              "name": "n",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1388,
                  "end": 1394
                },
                "start": 1386,
                "end": 1394
              },
              "start": 1385,
              "end": 1394
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1409,
                    "end": 1410
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1413,
                    "end": 1414
                  },
                  "start": 1409,
                  "end": 1414
                },
                "start": 1402,
                "end": 1415
              }
            ],
            "start": 1396,
            "end": 1417
          },
          "expression": false,
          "start": 1376,
          "end": 1417
        },
        "start": 1359,
        "end": 1417
      },
      "directive": null,
      "start": 1359,
      "end": 1417
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
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 1422,
            "end": 1423
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ExpandoExpr2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1426,
                  "end": 1438
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1439,
                  "end": 1443
                },
                "optional": false,
                "computed": false,
                "start": 1426,
                "end": 1443
              },
              "operator": "+",
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ExpandoExpr2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1446,
                    "end": 1458
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1459,
                    "end": 1460
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1446,
                  "end": 1460
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": 12,
                    "raw": "12",
                    "start": 1461,
                    "end": 1463
                  }
                ],
                "optional": false,
                "start": 1446,
                "end": 1464
              },
              "start": 1426,
              "end": 1464
            },
            "operator": "+",
            "right": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ExpandoExpr2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1467,
                  "end": 1479
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": 101,
                    "raw": "101",
                    "start": 1480,
                    "end": 1483
                  }
                ],
                "optional": false,
                "start": 1467,
                "end": 1484
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null,
                "start": 1485,
                "end": 1491
              },
              "optional": false,
              "computed": false,
              "start": 1467,
              "end": 1491
            },
            "start": 1426,
            "end": 1491
          },
          "definite": false,
          "start": 1422,
          "end": 1491
        }
      ],
      "declare": false,
      "start": 1418,
      "end": 1491
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ExpandoClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 1564,
        "end": 1576
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
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 1583,
              "end": 1584
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 1001,
              "raw": "1001",
              "start": 1587,
              "end": 1591
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1583,
            "end": 1592
          }
        ],
        "start": 1577,
        "end": 1594
      },
      "abstract": false,
      "declare": false,
      "start": 1558,
      "end": 1594
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
            "name": "ExpandoClass",
            "optional": false,
            "typeAnnotation": null,
            "start": 1595,
            "end": 1607
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "prop",
            "optional": false,
            "typeAnnotation": null,
            "start": 1608,
            "end": 1612
          },
          "optional": false,
          "computed": false,
          "start": 1595,
          "end": 1612
        },
        "right": {
          "type": "Literal",
          "value": 2,
          "raw": "2",
          "start": 1615,
          "end": 1616
        },
        "start": 1595,
        "end": 1616
      },
      "directive": null,
      "start": 1595,
      "end": 1616
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
            "name": "ExpandoClass",
            "optional": false,
            "typeAnnotation": null,
            "start": 1617,
            "end": 1629
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 1630,
            "end": 1631
          },
          "optional": false,
          "computed": false,
          "start": 1617,
          "end": 1631
        },
        "right": {
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
              "name": "n",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1646,
                  "end": 1652
                },
                "start": 1644,
                "end": 1652
              },
              "start": 1643,
              "end": 1652
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1667,
                    "end": 1668
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1671,
                    "end": 1672
                  },
                  "start": 1667,
                  "end": 1672
                },
                "start": 1660,
                "end": 1673
              }
            ],
            "start": 1654,
            "end": 1675
          },
          "expression": false,
          "start": 1634,
          "end": 1675
        },
        "start": 1617,
        "end": 1675
      },
      "directive": null,
      "start": 1617,
      "end": 1675
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
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 1680,
            "end": 1681
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ExpandoClass",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1684,
                  "end": 1696
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1697,
                  "end": 1701
                },
                "optional": false,
                "computed": false,
                "start": 1684,
                "end": 1701
              },
              "operator": "+",
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ExpandoClass",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1704,
                    "end": 1716
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1717,
                    "end": 1718
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1704,
                  "end": 1718
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": 12,
                    "raw": "12",
                    "start": 1719,
                    "end": 1721
                  }
                ],
                "optional": false,
                "start": 1704,
                "end": 1722
              },
              "start": 1684,
              "end": 1722
            },
            "operator": "+",
            "right": {
              "type": "MemberExpression",
              "object": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ExpandoClass",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1729,
                  "end": 1741
                },
                "typeArguments": null,
                "arguments": [],
                "start": 1725,
                "end": 1743
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 1744,
                "end": 1745
              },
              "optional": false,
              "computed": false,
              "start": 1725,
              "end": 1745
            },
            "start": 1684,
            "end": 1745
          },
          "definite": false,
          "start": 1680,
          "end": 1745
        }
      ],
      "declare": false,
      "start": 1676,
      "end": 1745
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
            "name": "ExpandoExpr3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1808,
            "end": 1820
          },
          "init": {
            "type": "ClassExpression",
            "decorators": [],
            "id": null,
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
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1835,
                    "end": 1836
                  },
                  "typeAnnotation": null,
                  "value": {
                    "type": "Literal",
                    "value": 10001,
                    "raw": "10001",
                    "start": 1839,
                    "end": 1844
                  },
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 1835,
                  "end": 1845
                }
              ],
              "start": 1829,
              "end": 1847
            },
            "abstract": false,
            "declare": false,
            "start": 1823,
            "end": 1847
          },
          "definite": false,
          "start": 1808,
          "end": 1847
        }
      ],
      "declare": false,
      "start": 1804,
      "end": 1847
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
            "name": "ExpandoExpr3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1848,
            "end": 1860
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "prop",
            "optional": false,
            "typeAnnotation": null,
            "start": 1861,
            "end": 1865
          },
          "optional": false,
          "computed": false,
          "start": 1848,
          "end": 1865
        },
        "right": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 1868,
          "end": 1869
        },
        "start": 1848,
        "end": 1869
      },
      "directive": null,
      "start": 1848,
      "end": 1869
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
            "name": "ExpandoExpr3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1870,
            "end": 1882
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 1883,
            "end": 1884
          },
          "optional": false,
          "computed": false,
          "start": 1870,
          "end": 1884
        },
        "right": {
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
              "name": "n",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1899,
                  "end": 1905
                },
                "start": 1897,
                "end": 1905
              },
              "start": 1896,
              "end": 1905
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1920,
                    "end": 1921
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1924,
                    "end": 1925
                  },
                  "start": 1920,
                  "end": 1925
                },
                "start": 1913,
                "end": 1926
              }
            ],
            "start": 1907,
            "end": 1928
          },
          "expression": false,
          "start": 1887,
          "end": 1928
        },
        "start": 1870,
        "end": 1928
      },
      "directive": null,
      "start": 1870,
      "end": 1928
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
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 1933,
            "end": 1934
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ExpandoExpr3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1937,
                  "end": 1949
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1950,
                  "end": 1954
                },
                "optional": false,
                "computed": false,
                "start": 1937,
                "end": 1954
              },
              "operator": "+",
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ExpandoExpr3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1957,
                    "end": 1969
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1970,
                    "end": 1971
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1957,
                  "end": 1971
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": 13,
                    "raw": "13",
                    "start": 1972,
                    "end": 1974
                  }
                ],
                "optional": false,
                "start": 1957,
                "end": 1975
              },
              "start": 1937,
              "end": 1975
            },
            "operator": "+",
            "right": {
              "type": "MemberExpression",
              "object": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ExpandoExpr3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1982,
                  "end": 1994
                },
                "typeArguments": null,
                "arguments": [],
                "start": 1978,
                "end": 1996
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 1997,
                "end": 1998
              },
              "optional": false,
              "computed": false,
              "start": 1978,
              "end": 1998
            },
            "start": 1937,
            "end": 1998
          },
          "definite": false,
          "start": 1933,
          "end": 1998
        }
      ],
      "declare": false,
      "start": 1929,
      "end": 1998
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1999
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
    "value": "ExpandoDecl",
    "start": 9,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 20,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 22,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 24,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 32,
    "end": 33
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 38,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 46,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 47,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "ExpandoDecl",
    "start": 61,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 72,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 73,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 78,
    "end": 79
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 80,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "ExpandoDecl",
    "start": 82,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 96,
    "end": 97
  },
  {
    "type": "Keyword",
    "value": "function",
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
    "type": "Identifier",
    "value": "n",
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
    "value": "number",
    "start": 110,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 116,
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
    "start": 124,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 133,
    "end": 134
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 138,
    "end": 139
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 140,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 146,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "ExpandoDecl",
    "start": 148,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 159,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 160,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 165,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "ExpandoDecl",
    "start": 167,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 178,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 180,
    "end": 181
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 181,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 185,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "ExpandoDecl",
    "start": 187,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 198,
    "end": 199
  },
  {
    "type": "Numeric",
    "value": "101",
    "start": 199,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 203,
    "end": 204
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 204,
    "end": 210
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 212,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "ExpandoExpr",
    "start": 218,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 230,
    "end": 231
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 232,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 241,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 242,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 243,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 245,
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
    "value": "{",
    "start": 253,
    "end": 254
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 259,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 266,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 267,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 268,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 280,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "ExpandoExpr",
    "start": 282,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 293,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 294,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 299,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 301,
    "end": 302
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 303,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 304,
    "end": 305
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 306,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 308,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "ExpandoExpr",
    "start": 310,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 321,
    "end": 322
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 322,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 327,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 329,
    "end": 330
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 331,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 332,
    "end": 333
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 334,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 337,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "ExpandoExpr",
    "start": 339,
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
    "value": "m",
    "start": 351,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 353,
    "end": 354
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 355,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 363,
    "end": 364
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 364,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 365,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 367,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 373,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 375,
    "end": 376
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 381,
    "end": 387
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 388,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 390,
    "end": 391
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 392,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 393,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 395,
    "end": 396
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 397,
    "end": 400
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 401,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 405,
    "end": 406
  },
  {
    "type": "Identifier",
    "value": "ExpandoExpr",
    "start": 406,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 417,
    "end": 418
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 418,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 422,
    "end": 423
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 423,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 425,
    "end": 427
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 428,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 429,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 431,
    "end": 432
  },
  {
    "type": "Identifier",
    "value": "ExpandoExpr",
    "start": 433,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 444,
    "end": 445
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 446,
    "end": 447
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 447,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 449,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 451,
    "end": 452
  },
  {
    "type": "Identifier",
    "value": "ExpandoExpr",
    "start": 453,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 464,
    "end": 465
  },
  {
    "type": "Numeric",
    "value": "101",
    "start": 465,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 468,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 469,
    "end": 470
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 470,
    "end": 476
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 478,
    "end": 483
  },
  {
    "type": "Identifier",
    "value": "ExpandoArrow",
    "start": 484,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 497,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 499,
    "end": 500
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 500,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 501,
    "end": 502
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 503,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 509,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 511,
    "end": 513
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 514,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 515,
    "end": 516
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 516,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 524,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 525,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 526,
    "end": 527
  },
  {
    "type": "Identifier",
    "value": "ExpandoArrow",
    "start": 528,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 540,
    "end": 541
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 541,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 546,
    "end": 547
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 548,
    "end": 549
  },
  {
    "type": "Identifier",
    "value": "ExpandoArrow",
    "start": 550,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 562,
    "end": 563
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 563,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 565,
    "end": 566
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 567,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 575,
    "end": 576
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 576,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 577,
    "end": 578
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 579,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 585,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 587,
    "end": 588
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 593,
    "end": 599
  },
  {
    "type": "Identifier",
    "value": "n",
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
    "type": "Numeric",
    "value": "1",
    "start": 604,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 605,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 608,
    "end": 609
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 611,
    "end": 619
  },
  {
    "type": "Identifier",
    "value": "ExpandoNested",
    "start": 620,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 633,
    "end": 634
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 634,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 635,
    "end": 636
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 637,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 643,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 645,
    "end": 646
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 651,
    "end": 656
  },
  {
    "type": "Identifier",
    "value": "nested",
    "start": 657,
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
    "value": "function",
    "start": 666,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 675,
    "end": 676
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 676,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 677,
    "end": 678
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 679,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 685,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 687,
    "end": 688
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 697,
    "end": 703
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 704,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 706,
    "end": 707
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 708,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 709,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 715,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 716,
    "end": 717
  },
  {
    "type": "Identifier",
    "value": "nested",
    "start": 722,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 728,
    "end": 729
  },
  {
    "type": "Identifier",
    "value": "total",
    "start": 729,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 735,
    "end": 736
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 737,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 739,
    "end": 740
  },
  {
    "type": "Numeric",
    "value": "1_000_000",
    "start": 741,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 750,
    "end": 751
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 756,
    "end": 762
  },
  {
    "type": "Identifier",
    "value": "nested",
    "start": 763,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 769,
    "end": 770
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 771,
    "end": 772
  },
  {
    "type": "Identifier",
    "value": "ExpandoNested",
    "start": 773,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 786,
    "end": 787
  },
  {
    "type": "Identifier",
    "value": "also",
    "start": 787,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 792,
    "end": 793
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 794,
    "end": 795
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 795,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 796,
    "end": 797
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 799,
    "end": 807
  },
  {
    "type": "Identifier",
    "value": "ExpandoMerge",
    "start": 808,
    "end": 820
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 820,
    "end": 821
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 821,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 822,
    "end": 823
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 824,
    "end": 830
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 830,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 832,
    "end": 833
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 838,
    "end": 844
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 845,
    "end": 846
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 847,
    "end": 848
  },
  {
    "type": "Numeric",
    "value": "100",
    "start": 849,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 852,
    "end": 853
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 854,
    "end": 855
  },
  {
    "type": "Identifier",
    "value": "ExpandoMerge",
    "start": 856,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 868,
    "end": 869
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 869,
    "end": 871
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 872,
    "end": 873
  },
  {
    "type": "Numeric",
    "value": "111",
    "start": 874,
    "end": 877
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 878,
    "end": 887
  },
  {
    "type": "Identifier",
    "value": "ExpandoMerge",
    "start": 888,
    "end": 900
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 901,
    "end": 902
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 907,
    "end": 913
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 914,
    "end": 917
  },
  {
    "type": "Identifier",
    "value": "p2",
    "start": 918,
    "end": 920
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 921,
    "end": 922
  },
  {
    "type": "Numeric",
    "value": "222",
    "start": 923,
    "end": 926
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 926,
    "end": 927
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 928,
    "end": 929
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 930,
    "end": 939
  },
  {
    "type": "Identifier",
    "value": "ExpandoMerge",
    "start": 940,
    "end": 952
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 953,
    "end": 954
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 959,
    "end": 965
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 966,
    "end": 969
  },
  {
    "type": "Identifier",
    "value": "p3",
    "start": 970,
    "end": 972
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 973,
    "end": 974
  },
  {
    "type": "Numeric",
    "value": "333",
    "start": 975,
    "end": 978
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 978,
    "end": 979
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 980,
    "end": 981
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 982,
    "end": 985
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 986,
    "end": 987
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 988,
    "end": 989
  },
  {
    "type": "Identifier",
    "value": "ExpandoMerge",
    "start": 990,
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
    "value": "p1",
    "start": 1003,
    "end": 1005
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "Identifier",
    "value": "ExpandoMerge",
    "start": 1008,
    "end": 1020
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1020,
    "end": 1021
  },
  {
    "type": "Identifier",
    "value": "p2",
    "start": 1021,
    "end": 1023
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1024,
    "end": 1025
  },
  {
    "type": "Identifier",
    "value": "ExpandoMerge",
    "start": 1026,
    "end": 1038
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1038,
    "end": 1039
  },
  {
    "type": "Identifier",
    "value": "p3",
    "start": 1039,
    "end": 1041
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1042,
    "end": 1043
  },
  {
    "type": "Identifier",
    "value": "ExpandoMerge",
    "start": 1044,
    "end": 1056
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1056,
    "end": 1057
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1057,
    "end": 1058
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1058,
    "end": 1059
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1059,
    "end": 1060
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1062,
    "end": 1071
  },
  {
    "type": "Identifier",
    "value": "Ns",
    "start": 1072,
    "end": 1074
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1075,
    "end": 1076
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1081,
    "end": 1089
  },
  {
    "type": "Identifier",
    "value": "ExpandoNamespace",
    "start": 1090,
    "end": 1106
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1106,
    "end": 1107
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1107,
    "end": 1108
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1108,
    "end": 1109
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1110,
    "end": 1114
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1115,
    "end": 1116
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1116,
    "end": 1117
  },
  {
    "type": "Identifier",
    "value": "ExpandoNamespace",
    "start": 1122,
    "end": 1138
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1138,
    "end": 1139
  },
  {
    "type": "Identifier",
    "value": "p6",
    "start": 1139,
    "end": 1141
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1142,
    "end": 1143
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1144,
    "end": 1146
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1146,
    "end": 1147
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1152,
    "end": 1158
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1159,
    "end": 1167
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1168,
    "end": 1171
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1171,
    "end": 1172
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1172,
    "end": 1173
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1174,
    "end": 1175
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1184,
    "end": 1190
  },
  {
    "type": "Identifier",
    "value": "ExpandoNamespace",
    "start": 1191,
    "end": 1207
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1207,
    "end": 1208
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1213,
    "end": 1214
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1215,
    "end": 1216
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1268,
    "end": 1271
  },
  {
    "type": "Identifier",
    "value": "ExpandoExpr2",
    "start": 1272,
    "end": 1284
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1285,
    "end": 1286
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1287,
    "end": 1295
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1296,
    "end": 1297
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1297,
    "end": 1298
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1298,
    "end": 1299
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1300,
    "end": 1306
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1306,
    "end": 1307
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1308,
    "end": 1309
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1314,
    "end": 1320
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1321,
    "end": 1322
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1322,
    "end": 1323
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 1323,
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
    "start": 1335,
    "end": 1336
  },
  {
    "type": "Identifier",
    "value": "ExpandoExpr2",
    "start": 1337,
    "end": 1349
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1349,
    "end": 1350
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 1350,
    "end": 1354
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1355,
    "end": 1356
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1357,
    "end": 1358
  },
  {
    "type": "Identifier",
    "value": "ExpandoExpr2",
    "start": 1359,
    "end": 1371
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1371,
    "end": 1372
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 1372,
    "end": 1373
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1374,
    "end": 1375
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1376,
    "end": 1384
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1384,
    "end": 1385
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1385,
    "end": 1386
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1386,
    "end": 1387
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1388,
    "end": 1394
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1394,
    "end": 1395
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1396,
    "end": 1397
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1402,
    "end": 1408
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1409,
    "end": 1410
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1411,
    "end": 1412
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1413,
    "end": 1414
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1414,
    "end": 1415
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1416,
    "end": 1417
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1418,
    "end": 1421
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1422,
    "end": 1423
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1424,
    "end": 1425
  },
  {
    "type": "Identifier",
    "value": "ExpandoExpr2",
    "start": 1426,
    "end": 1438
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1438,
    "end": 1439
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 1439,
    "end": 1443
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1444,
    "end": 1445
  },
  {
    "type": "Identifier",
    "value": "ExpandoExpr2",
    "start": 1446,
    "end": 1458
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1458,
    "end": 1459
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 1459,
    "end": 1460
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1460,
    "end": 1461
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 1461,
    "end": 1463
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1463,
    "end": 1464
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1465,
    "end": 1466
  },
  {
    "type": "Identifier",
    "value": "ExpandoExpr2",
    "start": 1467,
    "end": 1479
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1479,
    "end": 1480
  },
  {
    "type": "Numeric",
    "value": "101",
    "start": 1480,
    "end": 1483
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1483,
    "end": 1484
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1484,
    "end": 1485
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 1485,
    "end": 1491
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1558,
    "end": 1563
  },
  {
    "type": "Identifier",
    "value": "ExpandoClass",
    "start": 1564,
    "end": 1576
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1577,
    "end": 1578
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1583,
    "end": 1584
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1585,
    "end": 1586
  },
  {
    "type": "Numeric",
    "value": "1001",
    "start": 1587,
    "end": 1591
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1591,
    "end": 1592
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1593,
    "end": 1594
  },
  {
    "type": "Identifier",
    "value": "ExpandoClass",
    "start": 1595,
    "end": 1607
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1607,
    "end": 1608
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 1608,
    "end": 1612
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1613,
    "end": 1614
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1615,
    "end": 1616
  },
  {
    "type": "Identifier",
    "value": "ExpandoClass",
    "start": 1617,
    "end": 1629
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1629,
    "end": 1630
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 1630,
    "end": 1631
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1632,
    "end": 1633
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1634,
    "end": 1642
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1642,
    "end": 1643
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1643,
    "end": 1644
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1644,
    "end": 1645
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1646,
    "end": 1652
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1652,
    "end": 1653
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1654,
    "end": 1655
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1660,
    "end": 1666
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1667,
    "end": 1668
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1669,
    "end": 1670
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1671,
    "end": 1672
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1672,
    "end": 1673
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1674,
    "end": 1675
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1676,
    "end": 1679
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1680,
    "end": 1681
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1682,
    "end": 1683
  },
  {
    "type": "Identifier",
    "value": "ExpandoClass",
    "start": 1684,
    "end": 1696
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1696,
    "end": 1697
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 1697,
    "end": 1701
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1702,
    "end": 1703
  },
  {
    "type": "Identifier",
    "value": "ExpandoClass",
    "start": 1704,
    "end": 1716
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1716,
    "end": 1717
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 1717,
    "end": 1718
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1718,
    "end": 1719
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 1719,
    "end": 1721
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1721,
    "end": 1722
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1723,
    "end": 1724
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1725,
    "end": 1728
  },
  {
    "type": "Identifier",
    "value": "ExpandoClass",
    "start": 1729,
    "end": 1741
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1741,
    "end": 1742
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1742,
    "end": 1743
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1743,
    "end": 1744
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1744,
    "end": 1745
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1804,
    "end": 1807
  },
  {
    "type": "Identifier",
    "value": "ExpandoExpr3",
    "start": 1808,
    "end": 1820
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1821,
    "end": 1822
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1823,
    "end": 1828
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1829,
    "end": 1830
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1835,
    "end": 1836
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1837,
    "end": 1838
  },
  {
    "type": "Numeric",
    "value": "10001",
    "start": 1839,
    "end": 1844
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1844,
    "end": 1845
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1846,
    "end": 1847
  },
  {
    "type": "Identifier",
    "value": "ExpandoExpr3",
    "start": 1848,
    "end": 1860
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1860,
    "end": 1861
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 1861,
    "end": 1865
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1866,
    "end": 1867
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1868,
    "end": 1869
  },
  {
    "type": "Identifier",
    "value": "ExpandoExpr3",
    "start": 1870,
    "end": 1882
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1882,
    "end": 1883
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 1883,
    "end": 1884
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1885,
    "end": 1886
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1887,
    "end": 1895
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1895,
    "end": 1896
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1896,
    "end": 1897
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1897,
    "end": 1898
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1899,
    "end": 1905
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1905,
    "end": 1906
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1907,
    "end": 1908
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1913,
    "end": 1919
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1920,
    "end": 1921
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1922,
    "end": 1923
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1924,
    "end": 1925
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1925,
    "end": 1926
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1927,
    "end": 1928
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1929,
    "end": 1932
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1933,
    "end": 1934
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1935,
    "end": 1936
  },
  {
    "type": "Identifier",
    "value": "ExpandoExpr3",
    "start": 1937,
    "end": 1949
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1949,
    "end": 1950
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 1950,
    "end": 1954
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1955,
    "end": 1956
  },
  {
    "type": "Identifier",
    "value": "ExpandoExpr3",
    "start": 1957,
    "end": 1969
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1969,
    "end": 1970
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 1970,
    "end": 1971
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1971,
    "end": 1972
  },
  {
    "type": "Numeric",
    "value": "13",
    "start": 1972,
    "end": 1974
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1974,
    "end": 1975
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1976,
    "end": 1977
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1978,
    "end": 1981
  },
  {
    "type": "Identifier",
    "value": "ExpandoExpr3",
    "start": 1982,
    "end": 1994
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1994,
    "end": 1995
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1995,
    "end": 1996
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1996,
    "end": 1997
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1997,
    "end": 1998
  }
]
```
