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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 70,
            "end": 71
          },
          "init": {
            "type": "FunctionExpression",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 83,
              "end": 86
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
                "typeAnnotation": null,
                "start": 87,
                "end": 88
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 90,
                "end": 91
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 93,
              "end": 95
            },
            "expression": false,
            "start": 74,
            "end": 95
          },
          "definite": false,
          "start": 70,
          "end": 95
        }
      ],
      "declare": false,
      "start": 66,
      "end": 95
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
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 100,
            "end": 101
          },
          "init": null,
          "definite": false,
          "start": 100,
          "end": 101
        }
      ],
      "declare": false,
      "start": 96,
      "end": 102
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 134,
          "end": 135
        },
        "right": {
          "type": "FunctionExpression",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 147,
            "end": 150
          },
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 151,
              "end": 152
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [],
            "start": 154,
            "end": 156
          },
          "expression": false,
          "start": 138,
          "end": 156
        },
        "start": 134,
        "end": 156
      },
      "directive": null,
      "start": 134,
      "end": 156
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
            "name": "one",
            "optional": false,
            "typeAnnotation": null,
            "start": 191,
            "end": 194
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
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 207,
                "end": 208
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 210,
              "end": 213
            },
            "expression": false,
            "start": 197,
            "end": 213
          },
          "definite": false,
          "start": 191,
          "end": 213
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "two",
            "optional": false,
            "typeAnnotation": null,
            "start": 215,
            "end": 218
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
                "name": "untyped",
                "optional": false,
                "typeAnnotation": null,
                "start": 231,
                "end": 238
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 240,
              "end": 243
            },
            "expression": false,
            "start": 221,
            "end": 243
          },
          "definite": false,
          "start": 215,
          "end": 243
        }
      ],
      "declare": false,
      "start": 187,
      "end": 244
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 66,
  "end": 244
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 66,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Keyword",
    "value": "function",
    "start": 74,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 83,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 87,
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
    "value": "s",
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
    "value": "{",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 94,
    "end": 95
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 96,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 101,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 136,
    "end": 137
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 138,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 147,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 150,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "b",
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
    "value": "{",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 155,
    "end": 156
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 187,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "one",
    "start": 191,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 195,
    "end": 196
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 197,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 206,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "s",
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
    "value": "{",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 213,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "two",
    "start": 215,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 219,
    "end": 220
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 221,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 230,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "untyped",
    "start": 231,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 238,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 242,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 243,
    "end": 244
  }
]
```
