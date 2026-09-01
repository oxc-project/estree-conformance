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
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 77,
                    "end": 78
                  },
                  "value": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 80,
                    "end": 81
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 77,
                  "end": 81
                }
              ],
              "start": 75,
              "end": 83
            },
            "start": 68,
            "end": 84
          }
        ],
        "start": 38,
        "end": 86
      },
      "expression": false,
      "start": 23,
      "end": 86
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
              "start": 87,
              "end": 90
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 87,
            "end": 92
          },
          "property": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 93,
            "end": 94
          },
          "optional": false,
          "computed": true,
          "start": 87,
          "end": 95
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 100,
              "end": 103
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 100,
            "end": 105
          },
          "property": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 106,
            "end": 107
          },
          "optional": false,
          "computed": true,
          "start": 100,
          "end": 108
        },
        "start": 87,
        "end": 108
      },
      "directive": null,
      "start": 87,
      "end": 109
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
            "name": "result_foo1",
            "optional": false,
            "typeAnnotation": null,
            "start": 114,
            "end": 125
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
                  "start": 128,
                  "end": 131
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 128,
                "end": 133
              },
              "property": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 134,
                "end": 135
              },
              "optional": false,
              "computed": true,
              "start": 128,
              "end": 136
            },
            "right": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 141,
                  "end": 144
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 141,
                "end": 146
              },
              "property": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 147,
                "end": 148
              },
              "optional": false,
              "computed": true,
              "start": 141,
              "end": 149
            },
            "start": 128,
            "end": 149
          },
          "definite": false,
          "start": 114,
          "end": 149
        }
      ],
      "declare": false,
      "start": 110,
      "end": 150
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
              "start": 151,
              "end": 154
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 151,
            "end": 156
          },
          "property": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 157,
            "end": 158
          },
          "optional": false,
          "computed": true,
          "start": 151,
          "end": 159
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
                "start": 164,
                "end": 167
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 164,
              "end": 169
            },
            "property": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 170,
              "end": 171
            },
            "optional": false,
            "computed": true,
            "start": 164,
            "end": 172
          },
          "right": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 177,
            "end": 178
          },
          "start": 164,
          "end": 178
        },
        "start": 151,
        "end": 178
      },
      "directive": null,
      "start": 151,
      "end": 179
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
            "name": "result_foo2",
            "optional": false,
            "typeAnnotation": null,
            "start": 184,
            "end": 195
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
                  "start": 198,
                  "end": 201
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 198,
                "end": 203
              },
              "property": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 204,
                "end": 205
              },
              "optional": false,
              "computed": true,
              "start": 198,
              "end": 206
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
                    "start": 211,
                    "end": 214
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 211,
                  "end": 216
                },
                "property": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 217,
                  "end": 218
                },
                "optional": false,
                "computed": true,
                "start": 211,
                "end": 219
              },
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 224,
                "end": 225
              },
              "start": 211,
              "end": 225
            },
            "start": 198,
            "end": 225
          },
          "definite": false,
          "start": 184,
          "end": 225
        }
      ],
      "declare": false,
      "start": 180,
      "end": 226
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
              "start": 227,
              "end": 230
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 227,
            "end": 232
          },
          "property": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 233,
            "end": 234
          },
          "optional": false,
          "computed": true,
          "start": 227,
          "end": 235
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
                "start": 240,
                "end": 243
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 240,
              "end": 245
            },
            "property": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 246,
              "end": 247
            },
            "optional": false,
            "computed": true,
            "start": 240,
            "end": 248
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 252,
            "end": 253
          },
          "start": 240,
          "end": 253
        },
        "start": 227,
        "end": 253
      },
      "directive": null,
      "start": 227,
      "end": 254
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
            "name": "result_foo3",
            "optional": false,
            "typeAnnotation": null,
            "start": 259,
            "end": 270
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
                  "start": 273,
                  "end": 276
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 273,
                "end": 278
              },
              "property": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 279,
                "end": 280
              },
              "optional": false,
              "computed": true,
              "start": 273,
              "end": 281
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
                    "start": 286,
                    "end": 289
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 286,
                  "end": 291
                },
                "property": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 292,
                  "end": 293
                },
                "optional": false,
                "computed": true,
                "start": 286,
                "end": 294
              },
              "operator": "**",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 298,
                "end": 299
              },
              "start": 286,
              "end": 299
            },
            "start": 273,
            "end": 299
          },
          "definite": false,
          "start": 259,
          "end": 299
        }
      ],
      "declare": false,
      "start": 255,
      "end": 300
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 300
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
    "type": "Numeric",
    "value": "0",
    "start": 77,
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
    "value": "2",
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
    "type": "Punctuator",
    "value": "}",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 87,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 92,
    "end": 93
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 96,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 100,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 105,
    "end": 106
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 108,
    "end": 109
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 110,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "result_foo1",
    "start": 114,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 128,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 133,
    "end": 134
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 137,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 141,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 146,
    "end": 147
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 149,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 151,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 156,
    "end": 157
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 160,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 164,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 169,
    "end": 170
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 173,
    "end": 176
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 178,
    "end": 179
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 180,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "result_foo2",
    "start": 184,
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
    "value": "foo",
    "start": 198,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 201,
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
    "value": "[",
    "start": 203,
    "end": 204
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 207,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 211,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 216,
    "end": 217
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 220,
    "end": 223
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 225,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 227,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 232,
    "end": 233
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 236,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 240,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 245,
    "end": 246
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 247,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 249,
    "end": 251
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 252,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 253,
    "end": 254
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 255,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "result_foo3",
    "start": 259,
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
    "value": "foo",
    "start": 273,
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
    "value": "[",
    "start": 278,
    "end": 279
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 280,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 282,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 286,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 291,
    "end": 292
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 295,
    "end": 297
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 298,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 299,
    "end": 300
  }
]
```
