__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": "use strict",
        "raw": "'use strict'",
        "start": 0,
        "end": 12
      },
      "directive": "use strict",
      "start": 0,
      "end": 12
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
            "start": 17,
            "end": 18
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 21,
              "end": 22
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 25,
              "end": 26
            },
            "start": 21,
            "end": 26
          },
          "definite": false,
          "start": 17,
          "end": 26
        }
      ],
      "declare": false,
      "start": 13,
      "end": 27
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x1",
                "optional": false,
                "typeAnnotation": null,
                "start": 33,
                "end": 35
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 32,
            "end": 36
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x1",
              "optional": false,
              "typeAnnotation": null,
              "start": 39,
              "end": 41
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 44,
              "end": 45
            },
            "start": 39,
            "end": 45
          },
          "definite": false,
          "start": 32,
          "end": 45
        }
      ],
      "declare": false,
      "start": 28,
      "end": 46
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
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 53,
            "end": 54
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 57,
              "end": 58
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 61,
              "end": 62
            },
            "start": 57,
            "end": 62
          },
          "definite": false,
          "start": 53,
          "end": 62
        }
      ],
      "declare": false,
      "start": 47,
      "end": 63
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y1",
                "optional": false,
                "typeAnnotation": null,
                "start": 71,
                "end": 73
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 70,
            "end": 74
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "y1",
              "optional": false,
              "typeAnnotation": null,
              "start": 77,
              "end": 79
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 82,
              "end": 83
            },
            "start": 77,
            "end": 83
          },
          "definite": false,
          "start": 70,
          "end": 83
        }
      ],
      "declare": false,
      "start": 64,
      "end": 84
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
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 94,
              "end": 95
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 98,
              "end": 99
            },
            "definite": false,
            "start": 94,
            "end": 99
          }
        ],
        "declare": false,
        "start": 90,
        "end": 99
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 105,
        "end": 108
      },
      "start": 85,
      "end": 108
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
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 119,
                  "end": 120
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 118,
              "end": 121
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 124,
              "end": 125
            },
            "definite": false,
            "start": 118,
            "end": 125
          }
        ],
        "declare": false,
        "start": 114,
        "end": 125
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 130,
        "end": 133
      },
      "start": 109,
      "end": 133
    },
    {
      "type": "ForInStatement",
      "left": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 143,
              "end": 144
            },
            "init": null,
            "definite": false,
            "start": 143,
            "end": 144
          }
        ],
        "declare": false,
        "start": 139,
        "end": 144
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "v",
        "optional": false,
        "typeAnnotation": null,
        "start": 148,
        "end": 149
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 151,
        "end": 154
      },
      "start": 134,
      "end": 154
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 164,
              "end": 165
            },
            "init": null,
            "definite": false,
            "start": 164,
            "end": 165
          }
        ],
        "declare": false,
        "start": 160,
        "end": 165
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "v",
        "optional": false,
        "typeAnnotation": null,
        "start": 169,
        "end": 170
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 172,
        "end": 175
      },
      "start": 155,
      "end": 175
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 186,
                  "end": 187
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 185,
              "end": 188
            },
            "init": null,
            "definite": false,
            "start": 185,
            "end": 188
          }
        ],
        "declare": false,
        "start": 181,
        "end": 188
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "v",
        "optional": false,
        "typeAnnotation": null,
        "start": 192,
        "end": 193
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 195,
        "end": 198
      },
      "start": 176,
      "end": 198
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 204,
                  "end": 206
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 209,
                  "end": 211
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 204,
                "end": 211
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 203,
            "end": 212
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 215,
            "end": 217
          },
          "definite": false,
          "start": 203,
          "end": 217
        }
      ],
      "declare": false,
      "start": 199,
      "end": 217
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
            "name": "z0",
            "optional": false,
            "typeAnnotation": null,
            "start": 222,
            "end": 224
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "z0",
              "optional": false,
              "typeAnnotation": null,
              "start": 233,
              "end": 235
            },
            "id": null,
            "generator": false,
            "start": 227,
            "end": 235
          },
          "definite": false,
          "start": 222,
          "end": 235
        }
      ],
      "declare": false,
      "start": 218,
      "end": 236
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
            "name": "z1",
            "optional": false,
            "typeAnnotation": null,
            "start": 241,
            "end": 243
          },
          "init": {
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
                    "name": "z1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 267,
                    "end": 269
                  },
                  "start": 260,
                  "end": 270
                }
              ],
              "start": 258,
              "end": 272
            },
            "expression": false,
            "start": 246,
            "end": 272
          },
          "definite": false,
          "start": 241,
          "end": 272
        }
      ],
      "declare": false,
      "start": 237,
      "end": 272
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
            "name": "z2",
            "optional": false,
            "typeAnnotation": null,
            "start": 277,
            "end": 279
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
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 284,
                  "end": 285
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
                          "name": "z2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 297,
                          "end": 299
                        },
                        "start": 290,
                        "end": 300
                      }
                    ],
                    "start": 288,
                    "end": 301
                  },
                  "expression": false,
                  "start": 285,
                  "end": 301
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 284,
                "end": 301
              }
            ],
            "start": 282,
            "end": 302
          },
          "definite": false,
          "start": 277,
          "end": 302
        }
      ],
      "declare": false,
      "start": 273,
      "end": 302
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 302
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "String",
    "value": "'use strict'",
    "start": 0,
    "end": 12
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 13,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 17,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 19,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 23,
    "end": 24
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 26,
    "end": 27
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 28,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 32,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 33,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 39,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 42,
    "end": 43
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 45,
    "end": 46
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 47,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 55,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 59,
    "end": 60
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 62,
    "end": 63
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 64,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 70,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "y1",
    "start": 71,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "y1",
    "start": 77,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 80,
    "end": 81
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "value": "for",
    "start": 85,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 89,
    "end": 90
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 90,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "v",
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
    "type": "Identifier",
    "value": "v",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 107,
    "end": 108
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 109,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 113,
    "end": 114
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 114,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 118,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 122,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 132,
    "end": 133
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 134,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 138,
    "end": 139
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 139,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 143,
    "end": 144
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 145,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 153,
    "end": 154
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 155,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 159,
    "end": 160
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 160,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 164,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 166,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 174,
    "end": 175
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 176,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 180,
    "end": 181
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 181,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 185,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 187,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 189,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 197,
    "end": 198
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 199,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 203,
    "end": 204
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 204,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 207,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 209,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 211,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 216,
    "end": 217
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 218,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "z0",
    "start": 222,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 227,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 230,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "z0",
    "start": 233,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 235,
    "end": 236
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 237,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "z1",
    "start": 241,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 244,
    "end": 245
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 246,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 258,
    "end": 259
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 260,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "z1",
    "start": 267,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 271,
    "end": 272
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 273,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "z2",
    "start": 277,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 280,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 282,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 284,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 285,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 288,
    "end": 289
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 290,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "z2",
    "start": 297,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 299,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 300,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 301,
    "end": 302
  }
]
```
