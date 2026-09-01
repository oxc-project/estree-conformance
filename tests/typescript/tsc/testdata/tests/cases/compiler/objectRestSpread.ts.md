__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
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
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 7
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 10,
            "end": 12
          },
          "definite": false,
          "start": 4,
          "end": 12
        }
      ],
      "declare": false,
      "start": 0,
      "end": 13
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ObjectExpression",
        "properties": [
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null,
              "start": 20,
              "end": 23
            },
            "start": 17,
            "end": 23
          }
        ],
        "start": 16,
        "end": 24
      },
      "directive": null,
      "start": 15,
      "end": 26
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
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
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 37,
                  "end": 41
                },
                "value": {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "prop",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 37,
                    "end": 41
                  },
                  "right": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "SpreadElement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 49,
                          "end": 52
                        },
                        "start": 46,
                        "end": 52
                      }
                    ],
                    "start": 44,
                    "end": 54
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 37,
                  "end": 54
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 37,
                "end": 54
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "more",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 60,
                  "end": 64
                },
                "value": {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "more",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 60,
                    "end": 64
                  },
                  "right": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "ObjectPattern",
                      "decorators": [],
                      "properties": [
                        {
                          "type": "RestElement",
                          "decorators": [],
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "obj",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 72,
                            "end": 75
                          },
                          "optional": false,
                          "typeAnnotation": null,
                          "value": null,
                          "start": 69,
                          "end": 75
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 67,
                      "end": 77
                    },
                    "right": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "SpreadElement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "obj",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 85,
                            "end": 88
                          },
                          "start": 82,
                          "end": 88
                        }
                      ],
                      "start": 80,
                      "end": 90
                    },
                    "start": 67,
                    "end": 90
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 60,
                  "end": 90
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 60,
                "end": 90
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": "",
                    "raw": "''",
                    "start": 97,
                    "end": 99
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "value": "other",
                    "raw": "'other'",
                    "start": 102,
                    "end": 109
                  },
                  "start": 97,
                  "end": 109
                },
                "value": {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "other",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 112,
                    "end": 117
                  },
                  "right": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "SpreadElement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 125,
                          "end": 128
                        },
                        "start": 122,
                        "end": 128
                      }
                    ],
                    "start": 120,
                    "end": 130
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 112,
                  "end": 130
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 96,
                "end": 130
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "yetAnother",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 136,
                  "end": 146
                },
                "value": {
                  "type": "AssignmentPattern",
                  "decorators": [],
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
                          "name": "nested",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 149,
                          "end": 155
                        },
                        "value": {
                          "type": "AssignmentPattern",
                          "decorators": [],
                          "left": {
                            "type": "ObjectPattern",
                            "decorators": [],
                            "properties": [
                              {
                                "type": "Property",
                                "kind": "init",
                                "key": {
                                  "type": "BinaryExpression",
                                  "left": {
                                    "type": "Literal",
                                    "value": "nested",
                                    "raw": "'nested'",
                                    "start": 160,
                                    "end": 168
                                  },
                                  "operator": "+",
                                  "right": {
                                    "type": "Literal",
                                    "value": "prop",
                                    "raw": "'prop'",
                                    "start": 171,
                                    "end": 177
                                  },
                                  "start": 160,
                                  "end": 177
                                },
                                "value": {
                                  "type": "AssignmentPattern",
                                  "decorators": [],
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "nestedProp",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 180,
                                    "end": 190
                                  },
                                  "right": {
                                    "type": "ObjectExpression",
                                    "properties": [
                                      {
                                        "type": "SpreadElement",
                                        "argument": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "obj",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 198,
                                          "end": 201
                                        },
                                        "start": 195,
                                        "end": 201
                                      }
                                    ],
                                    "start": 193,
                                    "end": 203
                                  },
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 180,
                                  "end": 203
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": true,
                                "optional": false,
                                "start": 159,
                                "end": 203
                              },
                              {
                                "type": "RestElement",
                                "decorators": [],
                                "argument": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "nestedRest",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 208,
                                  "end": 218
                                },
                                "optional": false,
                                "typeAnnotation": null,
                                "value": null,
                                "start": 205,
                                "end": 218
                              }
                            ],
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 157,
                            "end": 220
                          },
                          "right": {
                            "type": "ObjectExpression",
                            "properties": [
                              {
                                "type": "SpreadElement",
                                "argument": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "obj",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 228,
                                  "end": 231
                                },
                                "start": 225,
                                "end": 231
                              }
                            ],
                            "start": 223,
                            "end": 233
                          },
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 157,
                          "end": 233
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 149,
                        "end": 233
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 148,
                    "end": 234
                  },
                  "right": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "SpreadElement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 242,
                          "end": 245
                        },
                        "start": 239,
                        "end": 245
                      }
                    ],
                    "start": 237,
                    "end": 247
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 148,
                  "end": 247
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 136,
                "end": 247
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fn",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 253,
                  "end": 255
                },
                "value": {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "fn",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 253,
                    "end": 255
                  },
                  "right": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": true,
                    "async": true,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 276,
                      "end": 278
                    },
                    "expression": false,
                    "start": 258,
                    "end": 278
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 253,
                  "end": 278
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 253,
                "end": 278
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "props",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 287,
                  "end": 292
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 284,
                "end": 292
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 31,
            "end": 294
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 297,
              "end": 299
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 303,
              "end": 306
            },
            "start": 297,
            "end": 306
          },
          "definite": false,
          "start": 31,
          "end": 306
        }
      ],
      "declare": false,
      "start": 27,
      "end": 307
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
                "name": "prop",
                "optional": false,
                "typeAnnotation": null,
                "start": 316,
                "end": 320
              },
              "value": {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 316,
                  "end": 320
                },
                "right": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 328,
                        "end": 331
                      },
                      "start": 325,
                      "end": 331
                    }
                  ],
                  "start": 323,
                  "end": 333
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 316,
                "end": 333
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 316,
              "end": 333
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 340,
                  "end": 342
                },
                "operator": "+",
                "right": {
                  "type": "Literal",
                  "value": "other",
                  "raw": "'other'",
                  "start": 345,
                  "end": 352
                },
                "start": 340,
                "end": 352
              },
              "value": {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "other",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 355,
                  "end": 360
                },
                "right": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 368,
                        "end": 371
                      },
                      "start": 365,
                      "end": 371
                    }
                  ],
                  "start": 363,
                  "end": 373
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 355,
                "end": 373
              },
              "method": false,
              "shorthand": false,
              "computed": true,
              "optional": false,
              "start": 339,
              "end": 373
            },
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "props",
                "optional": false,
                "typeAnnotation": null,
                "start": 382,
                "end": 387
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null,
              "start": 379,
              "end": 387
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 310,
          "end": 389
        },
        "right": {
          "type": "TSAsExpression",
          "expression": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 392,
            "end": 394
          },
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 398,
            "end": 401
          },
          "start": 392,
          "end": 401
        },
        "start": 310,
        "end": 401
      },
      "directive": null,
      "start": 309,
      "end": 402
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null,
        "start": 413,
        "end": 417
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "prop",
                "optional": false,
                "typeAnnotation": null,
                "start": 424,
                "end": 428
              },
              "value": {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 424,
                  "end": 428
                },
                "right": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 436,
                        "end": 439
                      },
                      "start": 433,
                      "end": 439
                    }
                  ],
                  "start": 431,
                  "end": 441
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 424,
                "end": 441
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 424,
              "end": 441
            },
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "props",
                "optional": false,
                "typeAnnotation": null,
                "start": 450,
                "end": 455
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null,
              "start": 447,
              "end": 455
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 418,
          "end": 457
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 459,
        "end": 461
      },
      "expression": false,
      "start": 404,
      "end": 461
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 461
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "let",
    "start": 0,
    "end": 3
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 4,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 11,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 16,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 17,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 20,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 23,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 24,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 25,
    "end": 26
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 27,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 31,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 37,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "type": "Punctuator",
    "value": "...",
    "start": 46,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 49,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 54,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "more",
    "start": 60,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 69,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 72,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 82,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 85,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 96,
    "end": 97
  },
  {
    "type": "String",
    "value": "''",
    "start": 97,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 100,
    "end": 101
  },
  {
    "type": "String",
    "value": "'other'",
    "start": 102,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 110,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "other",
    "start": 112,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 122,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 125,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 130,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "yetAnother",
    "start": 136,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 148,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "nested",
    "start": 149,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 155,
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
    "value": "[",
    "start": 159,
    "end": 160
  },
  {
    "type": "String",
    "value": "'nested'",
    "start": 160,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 169,
    "end": 170
  },
  {
    "type": "String",
    "value": "'prop'",
    "start": 171,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 178,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "nestedProp",
    "start": 180,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 195,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 198,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 205,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "nestedRest",
    "start": 208,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 225,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 228,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 237,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 239,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 242,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 247,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 253,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 256,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 258,
    "end": 263
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 264,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 273,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 274,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 284,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 287,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 297,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 298,
    "end": 299
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 300,
    "end": 302
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 303,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 306,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 309,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 310,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 316,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "type": "Punctuator",
    "value": "...",
    "start": 325,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 328,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 332,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 333,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 339,
    "end": 340
  },
  {
    "type": "String",
    "value": "''",
    "start": 340,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 343,
    "end": 344
  },
  {
    "type": "String",
    "value": "'other'",
    "start": 345,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 353,
    "end": 354
  },
  {
    "type": "Identifier",
    "value": "other",
    "start": 355,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 365,
    "end": 368
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 368,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 373,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 379,
    "end": 382
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 382,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 388,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 390,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 392,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 393,
    "end": 394
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 395,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 398,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 401,
    "end": 402
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 404,
    "end": 412
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 413,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 417,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 418,
    "end": 419
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 424,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 429,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 431,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 433,
    "end": 436
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 436,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 440,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 441,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 447,
    "end": 450
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 450,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 456,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 457,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 459,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 460,
    "end": 461
  }
]
```
