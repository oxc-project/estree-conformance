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
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 39,
        "end": 41
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
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 58,
                        "end": 60
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 58,
                        "end": 60
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 58,
                      "end": 60
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 62,
                        "end": 64
                      },
                      "value": {
                        "type": "AssignmentPattern",
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 62,
                          "end": 64
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 67,
                          "end": 69
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 62,
                        "end": 69
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 62,
                      "end": 69
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 56,
                  "end": 71
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
                        "name": "a1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 76,
                        "end": 78
                      },
                      "value": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 80,
                        "end": 81
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 76,
                      "end": 81
                    }
                  ],
                  "start": 74,
                  "end": 83
                },
                "definite": false,
                "start": 56,
                "end": 83
              }
            ],
            "declare": false,
            "start": 50,
            "end": 84
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 97,
                        "end": 99
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 97,
                        "end": 99
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 97,
                      "end": 99
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 101,
                        "end": 103
                      },
                      "value": {
                        "type": "AssignmentPattern",
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 101,
                          "end": 103
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 106,
                            "end": 107
                          },
                          "operator": "+",
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 110,
                            "end": 112
                          },
                          "start": 106,
                          "end": 112
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 101,
                        "end": 112
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 101,
                      "end": 112
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 95,
                  "end": 114
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
                        "name": "a2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 119,
                        "end": 121
                      },
                      "value": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 123,
                        "end": 124
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 119,
                      "end": 124
                    }
                  ],
                  "start": 117,
                  "end": 126
                },
                "definite": false,
                "start": 95,
                "end": 126
              }
            ],
            "declare": false,
            "start": 89,
            "end": 127
          }
        ],
        "start": 44,
        "end": 129
      },
      "expression": false,
      "start": 30,
      "end": 129
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 170,
        "end": 172
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
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 189,
                        "end": 191
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 189,
                        "end": 191
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 189,
                      "end": 191
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 193,
                        "end": 195
                      },
                      "value": {
                        "type": "AssignmentPattern",
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 193,
                          "end": 195
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 198,
                          "end": 200
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 193,
                        "end": 200
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 193,
                      "end": 200
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 187,
                  "end": 202
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
                        "name": "a1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 207,
                        "end": 209
                      },
                      "value": {
                        "type": "Literal",
                        "value": "hi",
                        "raw": "'hi'",
                        "start": 211,
                        "end": 215
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 207,
                      "end": 215
                    }
                  ],
                  "start": 205,
                  "end": 217
                },
                "definite": false,
                "start": 187,
                "end": 217
              }
            ],
            "declare": false,
            "start": 181,
            "end": 218
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 231,
                        "end": 233
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 231,
                        "end": 233
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 231,
                      "end": 233
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 235,
                        "end": 237
                      },
                      "value": {
                        "type": "AssignmentPattern",
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 235,
                          "end": 237
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 240,
                            "end": 242
                          },
                          "operator": "+",
                          "right": {
                            "type": "Literal",
                            "value": "!",
                            "raw": "'!'",
                            "start": 245,
                            "end": 248
                          },
                          "start": 240,
                          "end": 248
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 235,
                        "end": 248
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 235,
                      "end": 248
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 229,
                  "end": 250
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
                        "name": "a2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 255,
                        "end": 257
                      },
                      "value": {
                        "type": "Literal",
                        "value": "hi",
                        "raw": "'hi'",
                        "start": 259,
                        "end": 263
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 255,
                      "end": 263
                    }
                  ],
                  "start": 253,
                  "end": 265
                },
                "definite": false,
                "start": 229,
                "end": 265
              }
            ],
            "declare": false,
            "start": 223,
            "end": 266
          }
        ],
        "start": 175,
        "end": 268
      },
      "expression": false,
      "start": 161,
      "end": 268
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 318,
        "end": 320
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
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 337,
                        "end": 339
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 337,
                        "end": 339
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 337,
                      "end": 339
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 341,
                        "end": 343
                      },
                      "value": {
                        "type": "AssignmentPattern",
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 341,
                          "end": 343
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 346,
                          "end": 348
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 341,
                        "end": 348
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 341,
                      "end": 348
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 335,
                  "end": 350
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
                        "name": "a1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 355,
                        "end": 357
                      },
                      "value": {
                        "type": "Literal",
                        "value": "hi",
                        "raw": "'hi'",
                        "start": 359,
                        "end": 363
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 355,
                      "end": 363
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 365,
                        "end": 367
                      },
                      "value": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 369,
                        "end": 370
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 365,
                      "end": 370
                    }
                  ],
                  "start": 353,
                  "end": 372
                },
                "definite": false,
                "start": 335,
                "end": 372
              }
            ],
            "declare": false,
            "start": 329,
            "end": 373
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 386,
                        "end": 388
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 386,
                        "end": 388
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 386,
                      "end": 388
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 390,
                        "end": 392
                      },
                      "value": {
                        "type": "AssignmentPattern",
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 390,
                          "end": 392
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 395,
                            "end": 397
                          },
                          "operator": "+",
                          "right": {
                            "type": "Literal",
                            "value": "!",
                            "raw": "'!'",
                            "start": 400,
                            "end": 403
                          },
                          "start": 395,
                          "end": 403
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 390,
                        "end": 403
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 390,
                      "end": 403
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 384,
                  "end": 405
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
                        "name": "a2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 410,
                        "end": 412
                      },
                      "value": {
                        "type": "Literal",
                        "value": "hi",
                        "raw": "'hi'",
                        "start": 414,
                        "end": 418
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 410,
                      "end": 418
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 420,
                        "end": 422
                      },
                      "value": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 424,
                        "end": 425
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 420,
                      "end": 425
                    }
                  ],
                  "start": 408,
                  "end": 427
                },
                "definite": false,
                "start": 384,
                "end": 427
              }
            ],
            "declare": false,
            "start": 378,
            "end": 428
          }
        ],
        "start": 323,
        "end": 430
      },
      "expression": false,
      "start": 309,
      "end": 430
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
            "name": "yadda",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": true,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 560,
                          "end": 561
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 564,
                            "end": 570
                          },
                          "start": 562,
                          "end": 570
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 560,
                        "end": 571
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": true,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 572,
                          "end": 573
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 576,
                            "end": 582
                          },
                          "start": 574,
                          "end": 582
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 572,
                        "end": 582
                      }
                    ],
                    "start": 558,
                    "end": 584
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 587,
                    "end": 596
                  }
                ],
                "start": 558,
                "end": 596
              },
              "start": 556,
              "end": 596
            },
            "start": 551,
            "end": 596
          },
          "init": null,
          "definite": false,
          "start": 551,
          "end": 596
        }
      ],
      "declare": true,
      "start": 537,
      "end": 596
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 606,
        "end": 608
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
                  "type": "ObjectPattern",
                  "decorators": [],
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
                        "start": 625,
                        "end": 626
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 625,
                        "end": 626
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 625,
                      "end": 626
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 628,
                        "end": 629
                      },
                      "value": {
                        "type": "AssignmentPattern",
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 628,
                          "end": 629
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 632,
                          "end": 633
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 628,
                        "end": 633
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 628,
                      "end": 633
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 623,
                  "end": 635
                },
                "init": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "yadda",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 638,
                    "end": 643
                  },
                  "operator": "??",
                  "right": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "start": 647,
                    "end": 649
                  },
                  "start": 638,
                  "end": 649
                },
                "definite": false,
                "start": 623,
                "end": 649
              }
            ],
            "declare": false,
            "start": 617,
            "end": 650
          }
        ],
        "start": 611,
        "end": 652
      },
      "expression": false,
      "start": 597,
      "end": 652
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 30,
  "end": 652
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 30,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 39,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 44,
    "end": 45
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 50,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 56,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 58,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 60,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 62,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 65,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 67,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 74,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 76,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 78,
    "end": 79
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 83,
    "end": 84
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 89,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 95,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 97,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 99,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 101,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 104,
    "end": 105
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 108,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 110,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 117,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 119,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 121,
    "end": 122
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 123,
    "end": 124
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
    "type": "Punctuator",
    "value": "}",
    "start": 128,
    "end": 129
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 161,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 170,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 175,
    "end": 176
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 181,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 187,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 189,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 191,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 193,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 196,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 198,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "type": "Identifier",
    "value": "a1",
    "start": 207,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 209,
    "end": 210
  },
  {
    "type": "String",
    "value": "'hi'",
    "start": 211,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 217,
    "end": 218
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 223,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 229,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 231,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 233,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 235,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 238,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 240,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 243,
    "end": 244
  },
  {
    "type": "String",
    "value": "'!'",
    "start": 245,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "type": "Identifier",
    "value": "a2",
    "start": 255,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 257,
    "end": 258
  },
  {
    "type": "String",
    "value": "'hi'",
    "start": 259,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 264,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 265,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 267,
    "end": 268
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 309,
    "end": 317
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 318,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 323,
    "end": 324
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 329,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 335,
    "end": 336
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 337,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 339,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 341,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 344,
    "end": 345
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 346,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 349,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 351,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 353,
    "end": 354
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 355,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 357,
    "end": 358
  },
  {
    "type": "String",
    "value": "'hi'",
    "start": 359,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 363,
    "end": 364
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 365,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 367,
    "end": 368
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 369,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 371,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 372,
    "end": 373
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 378,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 384,
    "end": 385
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 386,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 388,
    "end": 389
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 390,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 393,
    "end": 394
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 395,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 398,
    "end": 399
  },
  {
    "type": "String",
    "value": "'!'",
    "start": 400,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 404,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 406,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 408,
    "end": 409
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 410,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 412,
    "end": 413
  },
  {
    "type": "String",
    "value": "'hi'",
    "start": 414,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 418,
    "end": 419
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 420,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 422,
    "end": 423
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 424,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 426,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 427,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 429,
    "end": 430
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 537,
    "end": 544
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 545,
    "end": 550
  },
  {
    "type": "Identifier",
    "value": "yadda",
    "start": 551,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 556,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 558,
    "end": 559
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 560,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 561,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 562,
    "end": 563
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 564,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 570,
    "end": 571
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 572,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 573,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 574,
    "end": 575
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 576,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 583,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 585,
    "end": 586
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 587,
    "end": 596
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 597,
    "end": 605
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 606,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 608,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 609,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 611,
    "end": 612
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 617,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 623,
    "end": 624
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 625,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 626,
    "end": 627
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 628,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 630,
    "end": 631
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 632,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 634,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 636,
    "end": 637
  },
  {
    "type": "Identifier",
    "value": "yadda",
    "start": 638,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 644,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 647,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 648,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 649,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 651,
    "end": 652
  }
]
```
