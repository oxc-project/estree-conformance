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
        "name": "g1",
        "optional": false,
        "typeAnnotation": null,
        "start": 31,
        "end": 33
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "headerNames",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 47,
              "end": 50
            },
            "start": 45,
            "end": 50
          },
          "start": 34,
          "end": 50
        }
      ],
      "returnType": null,
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
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 62,
                  "end": 63
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "hasLineBreak",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 69,
                            "end": 81
                          },
                          "value": {
                            "type": "Literal",
                            "value": false,
                            "raw": "false",
                            "start": 83,
                            "end": 88
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 69,
                          "end": 88
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "cells",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 90,
                            "end": 95
                          },
                          "value": {
                            "type": "ArrayExpression",
                            "elements": [],
                            "start": 97,
                            "end": 99
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 90,
                          "end": 99
                        }
                      ],
                      "start": 67,
                      "end": 101
                    }
                  ],
                  "start": 66,
                  "end": 102
                },
                "definite": false,
                "start": 62,
                "end": 102
              }
            ],
            "declare": false,
            "start": 58,
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
                  "name": "table",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 114,
                  "end": 119
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "cells",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 124,
                                "end": 129
                              },
                              "value": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "headerNames",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 131,
                                "end": 142
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 124,
                              "end": 142
                            }
                          ],
                          "start": 123,
                          "end": 144
                        }
                      ],
                      "start": 122,
                      "end": 145
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "concat",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 146,
                      "end": 152
                    },
                    "optional": false,
                    "computed": false,
                    "start": 122,
                    "end": 152
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 153,
                      "end": 154
                    }
                  ],
                  "optional": false,
                  "start": 122,
                  "end": 155
                },
                "definite": false,
                "start": 114,
                "end": 155
              }
            ],
            "declare": false,
            "start": 108,
            "end": 156
          }
        ],
        "start": 52,
        "end": 158
      },
      "expression": false,
      "start": 22,
      "end": 158
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g2",
        "optional": false,
        "typeAnnotation": null,
        "start": 169,
        "end": 171
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "headerNames",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 185,
              "end": 188
            },
            "start": 183,
            "end": 188
          },
          "start": 172,
          "end": 188
        }
      ],
      "returnType": null,
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
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 200,
                  "end": 201
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "hasLineBreak",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 207,
                            "end": 219
                          },
                          "value": {
                            "type": "Literal",
                            "value": false,
                            "raw": "false",
                            "start": 221,
                            "end": 226
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 207,
                          "end": 226
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "cells",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 228,
                            "end": 233
                          },
                          "value": {
                            "type": "ArrayExpression",
                            "elements": [],
                            "start": 235,
                            "end": 237
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 228,
                          "end": 237
                        }
                      ],
                      "start": 205,
                      "end": 239
                    }
                  ],
                  "start": 204,
                  "end": 240
                },
                "definite": false,
                "start": 200,
                "end": 240
              }
            ],
            "declare": false,
            "start": 196,
            "end": 241
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
                  "name": "table",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 252,
                  "end": 257
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "cells",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 262,
                                "end": 267
                              },
                              "value": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "headerNames",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 269,
                                "end": 280
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 262,
                              "end": 280
                            }
                          ],
                          "start": 261,
                          "end": 282
                        }
                      ],
                      "start": 260,
                      "end": 283
                    },
                    "property": {
                      "type": "Literal",
                      "value": "concat",
                      "raw": "\"concat\"",
                      "start": 284,
                      "end": 292
                    },
                    "optional": false,
                    "computed": true,
                    "start": 260,
                    "end": 293
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 294,
                      "end": 295
                    }
                  ],
                  "optional": false,
                  "start": 260,
                  "end": 296
                },
                "definite": false,
                "start": 252,
                "end": 296
              }
            ],
            "declare": false,
            "start": 246,
            "end": 297
          }
        ],
        "start": 190,
        "end": 299
      },
      "expression": false,
      "start": 160,
      "end": 299
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 388,
        "end": 391
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "options",
          "optional": true,
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 404,
                    "end": 405
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 407,
                      "end": 413
                    },
                    "start": 405,
                    "end": 413
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 404,
                  "end": 414
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 415,
                    "end": 416
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 418,
                      "end": 424
                    },
                    "start": 416,
                    "end": 424
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 415,
                  "end": 424
                }
              ],
              "start": 402,
              "end": 426
            },
            "start": 400,
            "end": 426
          },
          "start": 392,
          "end": 426
        }
      ],
      "returnType": null,
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
                  "name": "x1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 438,
                  "end": 440
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "options",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 444,
                      "end": 451
                    },
                    "operator": "||",
                    "right": {
                      "type": "ObjectExpression",
                      "properties": [],
                      "start": 455,
                      "end": 457
                    },
                    "start": 444,
                    "end": 457
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 459,
                    "end": 460
                  },
                  "optional": false,
                  "computed": false,
                  "start": 443,
                  "end": 460
                },
                "definite": false,
                "start": 438,
                "end": 460
              }
            ],
            "declare": false,
            "start": 434,
            "end": 461
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
                  "name": "x2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 501,
                  "end": 503
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "options",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 507,
                      "end": 514
                    },
                    "operator": "||",
                    "right": {
                      "type": "ObjectExpression",
                      "properties": [],
                      "start": 518,
                      "end": 520
                    },
                    "start": 507,
                    "end": 520
                  },
                  "property": {
                    "type": "Literal",
                    "value": "a",
                    "raw": "\"a\"",
                    "start": 522,
                    "end": 525
                  },
                  "optional": false,
                  "computed": true,
                  "start": 506,
                  "end": 526
                },
                "definite": false,
                "start": 501,
                "end": 526
              }
            ],
            "declare": false,
            "start": 497,
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
                  "type": "LogicalExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "options",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 561,
                    "end": 568
                  },
                  "operator": "||",
                  "right": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "start": 572,
                    "end": 574
                  },
                  "start": 561,
                  "end": 574
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 576,
                  "end": 577
                },
                "optional": false,
                "computed": false,
                "start": 560,
                "end": 577
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 580,
                "end": 581
              },
              "start": 560,
              "end": 581
            },
            "directive": null,
            "start": 560,
            "end": 582
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "options",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 627,
                    "end": 634
                  },
                  "operator": "||",
                  "right": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "start": 638,
                    "end": 640
                  },
                  "start": 627,
                  "end": 640
                },
                "property": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "\"a\"",
                  "start": 642,
                  "end": 645
                },
                "optional": false,
                "computed": true,
                "start": 626,
                "end": 646
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 649,
                "end": 650
              },
              "start": 626,
              "end": 650
            },
            "directive": null,
            "start": 626,
            "end": 651
          }
        ],
        "start": 428,
        "end": 689
      },
      "expression": false,
      "start": 379,
      "end": 689
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 689
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 22,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "g1",
    "start": 31,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 33,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "headerNames",
    "start": 34,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 45,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 47,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 52,
    "end": 53
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 58,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 67,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "hasLineBreak",
    "start": 69,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 81,
    "end": 82
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 83,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 88,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "cells",
    "start": 90,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 102,
    "end": 103
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 108,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "table",
    "start": 114,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "cells",
    "start": 124,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "headerNames",
    "start": 131,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 145,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "concat",
    "start": 146,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 152,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 157,
    "end": 158
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 160,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "g2",
    "start": 169,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 171,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "headerNames",
    "start": 172,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 183,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 185,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 190,
    "end": 191
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 196,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 205,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "hasLineBreak",
    "start": 207,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 219,
    "end": 220
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 221,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 226,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "cells",
    "start": 228,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 236,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 238,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 240,
    "end": 241
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 246,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "table",
    "start": 252,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 261,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "cells",
    "start": 262,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 267,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "headerNames",
    "start": 269,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 282,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 283,
    "end": 284
  },
  {
    "type": "String",
    "value": "\"concat\"",
    "start": 284,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 293,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 296,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 298,
    "end": 299
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 379,
    "end": 387
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 388,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 391,
    "end": 392
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 392,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 399,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 402,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 404,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 405,
    "end": 406
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 407,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 413,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 415,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 416,
    "end": 417
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 418,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 425,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 426,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 428,
    "end": 429
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 434,
    "end": 437
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 438,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 441,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 443,
    "end": 444
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 444,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 452,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 455,
    "end": 456
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
    "value": ".",
    "start": 458,
    "end": 459
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 459,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 460,
    "end": 461
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 497,
    "end": 500
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 501,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 504,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 506,
    "end": 507
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 507,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 515,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 518,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 519,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 520,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 521,
    "end": 522
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 522,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Punctuator",
    "value": "(",
    "start": 560,
    "end": 561
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 561,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 569,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 572,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 573,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 574,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 575,
    "end": 576
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 576,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 578,
    "end": 579
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 580,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 581,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 626,
    "end": 627
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 627,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 635,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 638,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 639,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 640,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 641,
    "end": 642
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 642,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 645,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 647,
    "end": 648
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 649,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 650,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 688,
    "end": 689
  }
]
```
