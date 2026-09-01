__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ThrowStatement",
      "argument": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Error",
          "optional": false,
          "typeAnnotation": null,
          "start": 10,
          "end": 15
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "",
            "raw": "\"\"",
            "start": 16,
            "end": 18
          }
        ],
        "start": 6,
        "end": 19
      },
      "start": 0,
      "end": 19
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
            "name": "console",
            "optional": false,
            "typeAnnotation": null,
            "start": 20,
            "end": 27
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null,
            "start": 28,
            "end": 31
          },
          "optional": false,
          "computed": false,
          "start": 20,
          "end": 31
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "1",
            "raw": "\"1\"",
            "start": 32,
            "end": 35
          }
        ],
        "optional": false,
        "start": 20,
        "end": 36
      },
      "directive": null,
      "start": 20,
      "end": 36
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
            "name": "console",
            "optional": false,
            "typeAnnotation": null,
            "start": 37,
            "end": 44
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null,
            "start": 45,
            "end": 48
          },
          "optional": false,
          "computed": false,
          "start": 37,
          "end": 48
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "2",
            "raw": "\"2\"",
            "start": 49,
            "end": 52
          }
        ],
        "optional": false,
        "start": 37,
        "end": 53
      },
      "directive": null,
      "start": 37,
      "end": 53
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 53
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "throw",
    "start": 0,
    "end": 5
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 6,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 10,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 15,
    "end": 16
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 16,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 18,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 20,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 27,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 28,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 31,
    "end": 32
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 32,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 35,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 37,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 45,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 48,
    "end": 49
  },
  {
    "type": "String",
    "value": "\"2\"",
    "start": 49,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 52,
    "end": 53
  }
]
```
