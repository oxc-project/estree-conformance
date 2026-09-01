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
            "name": "globalCounter",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 17
          },
          "init": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 20,
            "end": 21
          },
          "definite": false,
          "start": 4,
          "end": 21
        }
      ],
      "declare": false,
      "start": 0,
      "end": 22
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 32,
        "end": 35
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "+=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "globalCounter",
                "optional": false,
                "typeAnnotation": null,
                "start": 44,
                "end": 57
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 61,
                "end": 62
              },
              "start": 44,
              "end": 62
            },
            "directive": null,
            "start": 44,
            "end": 63
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ObjectExpression",
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
                    "start": 77,
                    "end": 81
                  },
                  "value": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 83,
                    "end": 84
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 77,
                  "end": 84
                }
              ],
              "start": 75,
              "end": 86
            },
            "start": 68,
            "end": 87
          }
        ],
        "start": 38,
        "end": 89
      },
      "expression": false,
      "start": 23,
      "end": 89
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 90,
              "end": 93
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 90,
            "end": 95
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "prop",
            "optional": false,
            "typeAnnotation": null,
            "start": 96,
            "end": 100
          },
          "optional": false,
          "computed": false,
          "start": 90,
          "end": 100
        },
        "right": {
          "type": "Literal",
          "value": 2,
          "raw": "2",
          "start": 105,
          "end": 106
        },
        "start": 90,
        "end": 106
      },
      "directive": null,
      "start": 90,
      "end": 107
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
            "name": "result0",
            "optional": false,
            "typeAnnotation": null,
            "start": 112,
            "end": 119
          },
          "init": {
            "type": "AssignmentExpression",
            "operator": "**=",
            "left": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 122,
                  "end": 125
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 122,
                "end": 127
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "prop",
                "optional": false,
                "typeAnnotation": null,
                "start": 128,
                "end": 132
              },
              "optional": false,
              "computed": false,
              "start": 122,
              "end": 132
            },
            "right": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 137,
              "end": 138
            },
            "start": 122,
            "end": 138
          },
          "definite": false,
          "start": 112,
          "end": 138
        }
      ],
      "declare": false,
      "start": 108,
      "end": 139
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 140,
              "end": 143
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 140,
            "end": 145
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "prop",
            "optional": false,
            "typeAnnotation": null,
            "start": 146,
            "end": 150
          },
          "optional": false,
          "computed": false,
          "start": 140,
          "end": 150
        },
        "right": {
          "type": "AssignmentExpression",
          "operator": "**=",
          "left": {
            "type": "MemberExpression",
            "object": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 155,
                "end": 158
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 155,
              "end": 160
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 161,
              "end": 165
            },
            "optional": false,
            "computed": false,
            "start": 155,
            "end": 165
          },
          "right": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 170,
            "end": 171
          },
          "start": 155,
          "end": 171
        },
        "start": 140,
        "end": 171
      },
      "directive": null,
      "start": 140,
      "end": 172
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
            "name": "result1",
            "optional": false,
            "typeAnnotation": null,
            "start": 177,
            "end": 184
          },
          "init": {
            "type": "AssignmentExpression",
            "operator": "**=",
            "left": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 187,
                  "end": 190
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 187,
                "end": 192
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "prop",
                "optional": false,
                "typeAnnotation": null,
                "start": 193,
                "end": 197
              },
              "optional": false,
              "computed": false,
              "start": 187,
              "end": 197
            },
            "right": {
              "type": "AssignmentExpression",
              "operator": "**=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 202,
                    "end": 205
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 202,
                  "end": 207
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 208,
                  "end": 212
                },
                "optional": false,
                "computed": false,
                "start": 202,
                "end": 212
              },
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 217,
                "end": 218
              },
              "start": 202,
              "end": 218
            },
            "start": 187,
            "end": 218
          },
          "definite": false,
          "start": 177,
          "end": 218
        }
      ],
      "declare": false,
      "start": 173,
      "end": 219
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 220,
              "end": 223
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 220,
            "end": 225
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "prop",
            "optional": false,
            "typeAnnotation": null,
            "start": 226,
            "end": 230
          },
          "optional": false,
          "computed": false,
          "start": 220,
          "end": 230
        },
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "MemberExpression",
            "object": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 235,
                "end": 238
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 235,
              "end": 240
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 241,
              "end": 245
            },
            "optional": false,
            "computed": false,
            "start": 235,
            "end": 245
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 249,
            "end": 250
          },
          "start": 235,
          "end": 250
        },
        "start": 220,
        "end": 250
      },
      "directive": null,
      "start": 220,
      "end": 251
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
            "name": "result2",
            "optional": false,
            "typeAnnotation": null,
            "start": 256,
            "end": 263
          },
          "init": {
            "type": "AssignmentExpression",
            "operator": "**=",
            "left": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 266,
                  "end": 269
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 266,
                "end": 271
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "prop",
                "optional": false,
                "typeAnnotation": null,
                "start": 272,
                "end": 276
              },
              "optional": false,
              "computed": false,
              "start": 266,
              "end": 276
            },
            "right": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 281,
                    "end": 284
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 281,
                  "end": 286
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 287,
                  "end": 291
                },
                "optional": false,
                "computed": false,
                "start": 281,
                "end": 291
              },
              "operator": "**",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 295,
                "end": 296
              },
              "start": 281,
              "end": 296
            },
            "start": 266,
            "end": 296
          },
          "definite": false,
          "start": 256,
          "end": 296
        }
      ],
      "declare": false,
      "start": 252,
      "end": 297
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 297
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 0,
    "end": 3
  },
  {
    "type": "Identifier",
    "value": "globalCounter",
    "start": 4,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 18,
    "end": 19
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 21,
    "end": 22
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 23,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 32,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 38,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "globalCounter",
    "start": 44,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 58,
    "end": 60
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "value": "return",
    "start": 68,
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
    "value": "prop",
    "start": 77,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 81,
    "end": 82
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 88,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 90,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 95,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 96,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 101,
    "end": 104
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 106,
    "end": 107
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 108,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "result0",
    "start": 112,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 120,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 122,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 127,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 128,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 133,
    "end": 136
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 138,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 140,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "prop",
    "start": 146,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 151,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 155,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 160,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 161,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 166,
    "end": 169
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 171,
    "end": 172
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 173,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "result1",
    "start": 177,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 185,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 187,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 192,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 193,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 198,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 202,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 207,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 208,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 213,
    "end": 216
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 218,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 220,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 225,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 226,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 231,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 235,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 238,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 240,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 241,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 246,
    "end": 248
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 250,
    "end": 251
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 252,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "result2",
    "start": 256,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 264,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 266,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 271,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 272,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 277,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 281,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 284,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 285,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 286,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 287,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 292,
    "end": 294
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 296,
    "end": 297
  }
]
```
