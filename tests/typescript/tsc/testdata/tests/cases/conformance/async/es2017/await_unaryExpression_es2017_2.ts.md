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
        "name": "bar1",
        "optional": false,
        "typeAnnotation": null,
        "start": 15,
        "end": 19
      },
      "generator": false,
      "async": true,
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
              "type": "UnaryExpression",
              "operator": "delete",
              "argument": {
                "type": "AwaitExpression",
                "argument": {
                  "type": "Literal",
                  "value": 42,
                  "raw": "42",
                  "start": 41,
                  "end": 43
                },
                "start": 35,
                "end": 43
              },
              "prefix": true,
              "start": 28,
              "end": 43
            },
            "directive": null,
            "start": 28,
            "end": 44
          }
        ],
        "start": 22,
        "end": 46
      },
      "expression": false,
      "start": 0,
      "end": 46
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar2",
        "optional": false,
        "typeAnnotation": null,
        "start": 63,
        "end": 67
      },
      "generator": false,
      "async": true,
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
              "type": "UnaryExpression",
              "operator": "delete",
              "argument": {
                "type": "AwaitExpression",
                "argument": {
                  "type": "Literal",
                  "value": 42,
                  "raw": "42",
                  "start": 89,
                  "end": 91
                },
                "start": 83,
                "end": 91
              },
              "prefix": true,
              "start": 76,
              "end": 91
            },
            "directive": null,
            "start": 76,
            "end": 92
          }
        ],
        "start": 70,
        "end": 94
      },
      "expression": false,
      "start": 48,
      "end": 94
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar3",
        "optional": false,
        "typeAnnotation": null,
        "start": 111,
        "end": 115
      },
      "generator": false,
      "async": true,
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
              "type": "UnaryExpression",
              "operator": "void",
              "argument": {
                "type": "AwaitExpression",
                "argument": {
                  "type": "Literal",
                  "value": 42,
                  "raw": "42",
                  "start": 135,
                  "end": 137
                },
                "start": 129,
                "end": 137
              },
              "prefix": true,
              "start": 124,
              "end": 137
            },
            "directive": null,
            "start": 124,
            "end": 138
          }
        ],
        "start": 118,
        "end": 140
      },
      "expression": false,
      "start": 96,
      "end": 140
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 140
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "async",
    "start": 0,
    "end": 5
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 6,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "bar1",
    "start": 15,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 22,
    "end": 23
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 28,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 35,
    "end": 40
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 41,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 45,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 48,
    "end": 53
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 54,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "bar2",
    "start": 63,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 70,
    "end": 71
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 76,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 83,
    "end": 88
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 89,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 96,
    "end": 101
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 102,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "bar3",
    "start": 111,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 118,
    "end": 119
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 124,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 129,
    "end": 134
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 135,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 139,
    "end": 140
  }
]
```
