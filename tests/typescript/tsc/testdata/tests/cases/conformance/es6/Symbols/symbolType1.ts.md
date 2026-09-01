__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "Symbol",
            "optional": false,
            "typeAnnotation": null,
            "start": 0,
            "end": 6
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 0,
          "end": 8
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Symbol",
          "optional": false,
          "typeAnnotation": null,
          "start": 20,
          "end": 26
        },
        "start": 0,
        "end": 26
      },
      "directive": null,
      "start": 0,
      "end": 27
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "Symbol",
          "optional": false,
          "typeAnnotation": null,
          "start": 28,
          "end": 34
        },
        "operator": "instanceof",
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "Symbol",
            "optional": false,
            "typeAnnotation": null,
            "start": 46,
            "end": 52
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 46,
          "end": 54
        },
        "start": 28,
        "end": 54
      },
      "directive": null,
      "start": 28,
      "end": 55
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "LogicalExpression",
          "left": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 57,
              "end": 63
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 57,
            "end": 65
          },
          "operator": "||",
          "right": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 69,
            "end": 71
          },
          "start": 57,
          "end": 71
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Object",
          "optional": false,
          "typeAnnotation": null,
          "start": 84,
          "end": 90
        },
        "start": 56,
        "end": 90
      },
      "directive": null,
      "start": 56,
      "end": 91
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "Symbol",
          "optional": false,
          "typeAnnotation": null,
          "start": 161,
          "end": 167
        },
        "operator": "instanceof",
        "right": {
          "type": "LogicalExpression",
          "left": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 180,
              "end": 186
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 180,
            "end": 188
          },
          "operator": "||",
          "right": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 192,
            "end": 194
          },
          "start": 180,
          "end": 194
        },
        "start": 161,
        "end": 195
      },
      "directive": null,
      "start": 161,
      "end": 196
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 196
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 0,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7,
    "end": 8
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 9,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 20,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 26,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 28,
    "end": 34
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 35,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 46,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 56,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 57,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 66,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 71,
    "end": 72
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 73,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 84,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 90,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 161,
    "end": 167
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 168,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 179,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 180,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 189,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 195,
    "end": 196
  }
]
```
