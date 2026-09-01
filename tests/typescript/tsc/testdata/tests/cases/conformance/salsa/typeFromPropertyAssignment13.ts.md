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
            "name": "Outer",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 9
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 12,
            "end": 14
          },
          "definite": false,
          "start": 4,
          "end": 14
        }
      ],
      "declare": false,
      "start": 0,
      "end": 14
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
            "name": "Outer",
            "optional": false,
            "typeAnnotation": null,
            "start": 15,
            "end": 20
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "Inner",
            "optional": false,
            "typeAnnotation": null,
            "start": 21,
            "end": 26
          },
          "optional": false,
          "computed": false,
          "start": 15,
          "end": 26
        },
        "right": {
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
            "start": 40,
            "end": 42
          },
          "expression": false,
          "start": 29,
          "end": 42
        },
        "start": 15,
        "end": 42
      },
      "directive": null,
      "start": 15,
      "end": 42
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Outer",
              "optional": false,
              "typeAnnotation": null,
              "start": 43,
              "end": 48
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Inner",
              "optional": false,
              "typeAnnotation": null,
              "start": 49,
              "end": 54
            },
            "optional": false,
            "computed": false,
            "start": 43,
            "end": 54
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "prototype",
            "optional": false,
            "typeAnnotation": null,
            "start": 55,
            "end": 64
          },
          "optional": false,
          "computed": false,
          "start": 43,
          "end": 64
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
                "name": "m",
                "optional": false,
                "typeAnnotation": null,
                "start": 73,
                "end": 74
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
                  "start": 77,
                  "end": 80
                },
                "expression": false,
                "start": 74,
                "end": 80
              },
              "method": true,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 73,
              "end": 80
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 86,
                "end": 87
              },
              "value": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 89,
                "end": 90
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 86,
              "end": 90
            }
          ],
          "start": 67,
          "end": 92
        },
        "start": 43,
        "end": 92
      },
      "directive": null,
      "start": 43,
      "end": 92
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Outer",
                "optional": false,
                "typeAnnotation": null,
                "start": 131,
                "end": 136
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Inner",
                "optional": false,
                "typeAnnotation": null,
                "start": 137,
                "end": 142
              },
              "optional": false,
              "computed": false,
              "start": 131,
              "end": 142
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null,
              "start": 143,
              "end": 152
            },
            "optional": false,
            "computed": false,
            "start": 131,
            "end": 152
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "j",
            "optional": false,
            "typeAnnotation": null,
            "start": 153,
            "end": 154
          },
          "optional": false,
          "computed": false,
          "start": 131,
          "end": 154
        },
        "right": {
          "type": "Literal",
          "value": 2,
          "raw": "2",
          "start": 157,
          "end": 158
        },
        "start": 131,
        "end": 158
      },
      "directive": null,
      "start": 131,
      "end": 158
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Outer",
              "optional": false,
              "typeAnnotation": null,
              "start": 181,
              "end": 186
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Inner",
              "optional": false,
              "typeAnnotation": null,
              "start": 187,
              "end": 192
            },
            "optional": false,
            "computed": false,
            "start": 181,
            "end": 192
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "prototype",
            "optional": false,
            "typeAnnotation": null,
            "start": 193,
            "end": 202
          },
          "optional": false,
          "computed": false,
          "start": 181,
          "end": 202
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": null,
          "start": 203,
          "end": 204
        },
        "optional": false,
        "computed": false,
        "start": 181,
        "end": 204
      },
      "directive": null,
      "start": 181,
      "end": 205
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
            "name": "inner",
            "optional": false,
            "typeAnnotation": null,
            "start": 210,
            "end": 215
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Outer",
                "optional": false,
                "typeAnnotation": null,
                "start": 222,
                "end": 227
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Inner",
                "optional": false,
                "typeAnnotation": null,
                "start": 228,
                "end": 233
              },
              "optional": false,
              "computed": false,
              "start": 222,
              "end": 233
            },
            "typeArguments": null,
            "arguments": [],
            "start": 218,
            "end": 235
          },
          "definite": false,
          "start": 210,
          "end": 235
        }
      ],
      "declare": false,
      "start": 206,
      "end": 235
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "inner",
            "optional": false,
            "typeAnnotation": null,
            "start": 236,
            "end": 241
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 242,
            "end": 243
          },
          "optional": false,
          "computed": false,
          "start": 236,
          "end": 243
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 236,
        "end": 245
      },
      "directive": null,
      "start": 236,
      "end": 245
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "inner",
          "optional": false,
          "typeAnnotation": null,
          "start": 246,
          "end": 251
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 252,
          "end": 253
        },
        "optional": false,
        "computed": false,
        "start": 246,
        "end": 253
      },
      "directive": null,
      "start": 246,
      "end": 253
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "inner",
          "optional": false,
          "typeAnnotation": null,
          "start": 254,
          "end": 259
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "j",
          "optional": false,
          "typeAnnotation": null,
          "start": 260,
          "end": 261
        },
        "optional": false,
        "computed": false,
        "start": 254,
        "end": 261
      },
      "directive": null,
      "start": 254,
      "end": 261
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "inner",
          "optional": false,
          "typeAnnotation": null,
          "start": 262,
          "end": 267
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": null,
          "start": 268,
          "end": 269
        },
        "optional": false,
        "computed": false,
        "start": 262,
        "end": 269
      },
      "directive": null,
      "start": 262,
      "end": 269
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 269
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
    "value": "Outer",
    "start": 4,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 13,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "Outer",
    "start": 15,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 20,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "Inner",
    "start": 21,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 27,
    "end": 28
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 29,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 41,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "Outer",
    "start": 43,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 48,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "Inner",
    "start": 49,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 54,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 55,
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
    "type": "Identifier",
    "value": "m",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 80,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 87,
    "end": 88
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "Outer",
    "start": 131,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "Inner",
    "start": 137,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 142,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 143,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 152,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "j",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 155,
    "end": 156
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 157,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "Outer",
    "start": 181,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 186,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "Inner",
    "start": 187,
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
    "value": "prototype",
    "start": 193,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 202,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 204,
    "end": 205
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 206,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "inner",
    "start": 210,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 216,
    "end": 217
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 218,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "Outer",
    "start": 222,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 227,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "Inner",
    "start": 228,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 234,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "inner",
    "start": 236,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 241,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 242,
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
    "type": "Identifier",
    "value": "inner",
    "start": 246,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 251,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 252,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "inner",
    "start": 254,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 259,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "j",
    "start": 260,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "inner",
    "start": 262,
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
    "value": "k",
    "start": 268,
    "end": 269
  }
]
```
