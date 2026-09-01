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
            "name": "Inner",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 9
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
              "body": [],
              "start": 23,
              "end": 25
            },
            "expression": false,
            "start": 12,
            "end": 25
          },
          "definite": false,
          "start": 4,
          "end": 25
        }
      ],
      "declare": false,
      "start": 0,
      "end": 25
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
            "name": "Inner",
            "optional": false,
            "typeAnnotation": null,
            "start": 26,
            "end": 31
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "prototype",
            "optional": false,
            "typeAnnotation": null,
            "start": 32,
            "end": 41
          },
          "optional": false,
          "computed": false,
          "start": 26,
          "end": 41
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
                "start": 50,
                "end": 51
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
                  "start": 54,
                  "end": 57
                },
                "expression": false,
                "start": 51,
                "end": 57
              },
              "method": true,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 50,
              "end": 57
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
                "start": 63,
                "end": 64
              },
              "value": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 66,
                "end": 67
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 63,
              "end": 67
            }
          ],
          "start": 44,
          "end": 69
        },
        "start": 26,
        "end": 69
      },
      "directive": null,
      "start": 26,
      "end": 69
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
              "name": "Inner",
              "optional": false,
              "typeAnnotation": null,
              "start": 108,
              "end": 113
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null,
              "start": 114,
              "end": 123
            },
            "optional": false,
            "computed": false,
            "start": 108,
            "end": 123
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "j",
            "optional": false,
            "typeAnnotation": null,
            "start": 124,
            "end": 125
          },
          "optional": false,
          "computed": false,
          "start": 108,
          "end": 125
        },
        "right": {
          "type": "Literal",
          "value": 2,
          "raw": "2",
          "start": 128,
          "end": 129
        },
        "start": 108,
        "end": 129
      },
      "directive": null,
      "start": 108,
      "end": 129
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Inner",
            "optional": false,
            "typeAnnotation": null,
            "start": 152,
            "end": 157
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "prototype",
            "optional": false,
            "typeAnnotation": null,
            "start": 158,
            "end": 167
          },
          "optional": false,
          "computed": false,
          "start": 152,
          "end": 167
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": null,
          "start": 168,
          "end": 169
        },
        "optional": false,
        "computed": false,
        "start": 152,
        "end": 169
      },
      "directive": null,
      "start": 152,
      "end": 170
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
            "start": 175,
            "end": 180
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Inner",
              "optional": false,
              "typeAnnotation": null,
              "start": 187,
              "end": 192
            },
            "typeArguments": null,
            "arguments": [],
            "start": 183,
            "end": 194
          },
          "definite": false,
          "start": 175,
          "end": 194
        }
      ],
      "declare": false,
      "start": 171,
      "end": 194
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
            "start": 195,
            "end": 200
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 201,
            "end": 202
          },
          "optional": false,
          "computed": false,
          "start": 195,
          "end": 202
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 195,
        "end": 204
      },
      "directive": null,
      "start": 195,
      "end": 204
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
          "start": 205,
          "end": 210
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 211,
          "end": 212
        },
        "optional": false,
        "computed": false,
        "start": 205,
        "end": 212
      },
      "directive": null,
      "start": 205,
      "end": 212
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
          "start": 213,
          "end": 218
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "j",
          "optional": false,
          "typeAnnotation": null,
          "start": 219,
          "end": 220
        },
        "optional": false,
        "computed": false,
        "start": 213,
        "end": 220
      },
      "directive": null,
      "start": 213,
      "end": 220
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
          "start": 221,
          "end": 226
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": null,
          "start": 227,
          "end": 228
        },
        "optional": false,
        "computed": false,
        "start": 221,
        "end": 228
      },
      "directive": null,
      "start": 221,
      "end": 228
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 228
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
    "value": "Inner",
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
    "type": "Keyword",
    "value": "function",
    "start": 12,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 23,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 24,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "Inner",
    "start": 26,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 31,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 32,
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
    "type": "Identifier",
    "value": "m",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 57,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 64,
    "end": 65
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 68,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "Inner",
    "start": 108,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 113,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 114,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "j",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 126,
    "end": 127
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 128,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "Inner",
    "start": 152,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 157,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 158,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 167,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 169,
    "end": 170
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 171,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "inner",
    "start": 175,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 181,
    "end": 182
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 183,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "Inner",
    "start": 187,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "type": "Identifier",
    "value": "inner",
    "start": 195,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 200,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 203,
    "end": 204
  },
  {
    "type": "Identifier",
    "value": "inner",
    "start": 205,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 210,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 211,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "inner",
    "start": 213,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 218,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "j",
    "start": 219,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "inner",
    "start": 221,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 226,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 227,
    "end": 228
  }
]
```
