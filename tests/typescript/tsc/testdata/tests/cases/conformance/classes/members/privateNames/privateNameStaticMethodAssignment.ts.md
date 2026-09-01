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
        "name": "A3",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 8
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
              "type": "PrivateIdentifier",
              "name": "method",
              "start": 22,
              "end": 29
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
                "body": [],
                "start": 32,
                "end": 35
              },
              "expression": false,
              "start": 29,
              "end": 35
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 15,
            "end": 35
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
              "start": 41,
              "end": 52
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 63,
                        "end": 65
                      },
                      "typeArguments": null,
                      "start": 56,
                      "end": 65
                    },
                    "start": 54,
                    "end": 65
                  },
                  "start": 53,
                  "end": 65
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 70,
                      "end": 73
                    },
                    "start": 68,
                    "end": 73
                  },
                  "start": 67,
                  "end": 73
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
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A3",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 85,
                          "end": 87
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "method",
                          "start": 88,
                          "end": 95
                        },
                        "optional": false,
                        "computed": false,
                        "start": 85,
                        "end": 95
                      },
                      "right": {
                        "type": "ArrowFunctionExpression",
                        "expression": false,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 104,
                          "end": 106
                        },
                        "id": null,
                        "generator": false,
                        "start": 98,
                        "end": 106
                      },
                      "start": 85,
                      "end": 106
                    },
                    "directive": null,
                    "start": 85,
                    "end": 106
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
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 139,
                          "end": 140
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "method",
                          "start": 141,
                          "end": 148
                        },
                        "optional": false,
                        "computed": false,
                        "start": 139,
                        "end": 148
                      },
                      "right": {
                        "type": "ArrowFunctionExpression",
                        "expression": false,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 157,
                          "end": 160
                        },
                        "id": null,
                        "generator": false,
                        "start": 151,
                        "end": 160
                      },
                      "start": 139,
                      "end": 160
                    },
                    "directive": null,
                    "start": 139,
                    "end": 161
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
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 194,
                          "end": 195
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "method",
                          "start": 196,
                          "end": 203
                        },
                        "optional": false,
                        "computed": false,
                        "start": 194,
                        "end": 203
                      },
                      "right": {
                        "type": "ArrowFunctionExpression",
                        "expression": false,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 213,
                          "end": 216
                        },
                        "id": null,
                        "generator": false,
                        "start": 207,
                        "end": 216
                      },
                      "start": 194,
                      "end": 216
                    },
                    "directive": null,
                    "start": 194,
                    "end": 216
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "ObjectPattern",
                        "decorators": [],
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
                              "start": 251,
                              "end": 252
                            },
                            "value": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "A3",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 254,
                                "end": 256
                              },
                              "property": {
                                "type": "PrivateIdentifier",
                                "name": "method",
                                "start": 257,
                                "end": 264
                              },
                              "optional": false,
                              "computed": false,
                              "start": 254,
                              "end": 264
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 251,
                            "end": 264
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 249,
                        "end": 266
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
                              "start": 271,
                              "end": 272
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
                                "start": 280,
                                "end": 282
                              },
                              "id": null,
                              "generator": false,
                              "start": 274,
                              "end": 282
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 271,
                            "end": 282
                          }
                        ],
                        "start": 269,
                        "end": 283
                      },
                      "start": 249,
                      "end": 283
                    },
                    "directive": null,
                    "start": 248,
                    "end": 285
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 321,
                          "end": 322
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "A3",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 325,
                            "end": 327
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "name": "method",
                            "start": 328,
                            "end": 335
                          },
                          "optional": false,
                          "computed": false,
                          "start": 325,
                          "end": 335
                        },
                        "definite": false,
                        "start": 321,
                        "end": 335
                      }
                    ],
                    "declare": false,
                    "start": 317,
                    "end": 336
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "UpdateExpression",
                      "operator": "++",
                      "prefix": false,
                      "argument": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 345,
                          "end": 346
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "method",
                          "start": 347,
                          "end": 354
                        },
                        "optional": false,
                        "computed": false,
                        "start": 345,
                        "end": 354
                      },
                      "start": 345,
                      "end": 356
                    },
                    "directive": null,
                    "start": 345,
                    "end": 356
                  }
                ],
                "start": 75,
                "end": 385
              },
              "expression": false,
              "start": 52,
              "end": 385
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 41,
            "end": 385
          }
        ],
        "start": 9,
        "end": 387
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 387
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 387
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
    "value": "A3",
    "start": 6,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9,
    "end": 10
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 15,
    "end": 21
  },
  {
    "type": "PrivateIdentifier",
    "value": "method",
    "start": 22,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 29,
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
    "type": "Punctuator",
    "value": "}",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 35,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 41,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 52,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 54,
    "end": 55
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 56,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "A3",
    "start": 63,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 65,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 67,
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
    "value": "any",
    "start": 70,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "A3",
    "start": 85,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 87,
    "end": 88
  },
  {
    "type": "PrivateIdentifier",
    "value": "method",
    "start": 88,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 98,
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
    "value": "=>",
    "start": 101,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 105,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 140,
    "end": 141
  },
  {
    "type": "PrivateIdentifier",
    "value": "method",
    "start": 141,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 151,
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
    "value": ";",
    "start": 160,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 195,
    "end": 196
  },
  {
    "type": "PrivateIdentifier",
    "value": "method",
    "start": 196,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 210,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 249,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 252,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "A3",
    "start": 254,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 256,
    "end": 257
  },
  {
    "type": "PrivateIdentifier",
    "value": "method",
    "start": 257,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 265,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 269,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 271,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 274,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 275,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 277,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 280,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 282,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 284,
    "end": 285
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 317,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 323,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "A3",
    "start": 325,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 327,
    "end": 328
  },
  {
    "type": "PrivateIdentifier",
    "value": "method",
    "start": 328,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 335,
    "end": 336
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 345,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 346,
    "end": 347
  },
  {
    "type": "PrivateIdentifier",
    "value": "method",
    "start": 347,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 354,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 384,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 386,
    "end": 387
  }
]
```
