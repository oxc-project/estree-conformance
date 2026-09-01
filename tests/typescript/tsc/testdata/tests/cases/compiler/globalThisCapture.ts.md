__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ArrowFunctionExpression",
        "expression": true,
        "async": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "MemberExpression",
          "object": {
            "type": "ThisExpression",
            "start": 66,
            "end": 70
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "window",
            "optional": false,
            "typeAnnotation": null,
            "start": 71,
            "end": 77
          },
          "optional": false,
          "computed": false,
          "start": 66,
          "end": 77
        },
        "id": null,
        "generator": false,
        "start": 62,
        "end": 77
      },
      "directive": null,
      "start": 61,
      "end": 79
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
            "name": "parts",
            "optional": false,
            "typeAnnotation": null,
            "start": 85,
            "end": 90
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 93,
            "end": 95
          },
          "definite": false,
          "start": 85,
          "end": 95
        }
      ],
      "declare": false,
      "start": 81,
      "end": 96
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "parts",
          "optional": false,
          "typeAnnotation": null,
          "start": 143,
          "end": 148
        },
        "property": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 149,
          "end": 150
        },
        "optional": false,
        "computed": true,
        "start": 143,
        "end": 151
      },
      "directive": null,
      "start": 143,
      "end": 152
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 61,
  "end": 152
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Punctuator",
    "value": "(",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 64,
    "end": 66
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 66,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 70,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "window",
    "start": 71,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 78,
    "end": 79
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 81,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "parts",
    "start": 85,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "[",
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
    "value": ";",
    "start": 95,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "parts",
    "start": 143,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 148,
    "end": 149
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 151,
    "end": 152
  }
]
```
