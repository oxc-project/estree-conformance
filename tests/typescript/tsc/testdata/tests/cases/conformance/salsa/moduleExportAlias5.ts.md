__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "webpack",
            "optional": false,
            "typeAnnotation": null,
            "start": 16,
            "end": 23
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
              "start": 37,
              "end": 40
            },
            "expression": false,
            "start": 26,
            "end": 40
          },
          "definite": false,
          "start": 16,
          "end": 40
        }
      ],
      "declare": false,
      "start": 10,
      "end": 40
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "exports",
          "optional": false,
          "typeAnnotation": null,
          "start": 41,
          "end": 48
        },
        "right": {
          "type": "AssignmentExpression",
          "operator": "=",
          "left": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "module",
              "optional": false,
              "typeAnnotation": null,
              "start": 51,
              "end": 57
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null,
              "start": 58,
              "end": 65
            },
            "optional": false,
            "computed": false,
            "start": 51,
            "end": 65
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "webpack",
            "optional": false,
            "typeAnnotation": null,
            "start": 68,
            "end": 75
          },
          "start": 51,
          "end": 75
        },
        "start": 41,
        "end": 75
      },
      "directive": null,
      "start": 41,
      "end": 76
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
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 77,
            "end": 84
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "version",
            "optional": false,
            "typeAnnotation": null,
            "start": 85,
            "end": 92
          },
          "optional": false,
          "computed": false,
          "start": 77,
          "end": 92
        },
        "right": {
          "type": "Literal",
          "value": 1001,
          "raw": "1001",
          "start": 95,
          "end": 99
        },
        "start": 77,
        "end": 99
      },
      "directive": null,
      "start": 77,
      "end": 100
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
            "name": "webpack",
            "optional": false,
            "typeAnnotation": null,
            "start": 102,
            "end": 109
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "WebpackOptionsDefaulter",
            "optional": false,
            "typeAnnotation": null,
            "start": 110,
            "end": 133
          },
          "optional": false,
          "computed": false,
          "start": 102,
          "end": 133
        },
        "right": {
          "type": "Literal",
          "value": 1111,
          "raw": "1111",
          "start": 136,
          "end": 140
        },
        "start": 102,
        "end": 140
      },
      "directive": null,
      "start": 102,
      "end": 141
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 10,
  "end": 141
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 10,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "webpack",
    "start": 16,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 24,
    "end": 25
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 26,
    "end": 34
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
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 41,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 49,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 51,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 57,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 58,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 66,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "webpack",
    "start": 68,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 77,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 84,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "version",
    "start": 85,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 93,
    "end": 94
  },
  {
    "type": "Numeric",
    "value": "1001",
    "start": 95,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 99,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "webpack",
    "start": 102,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 109,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "WebpackOptionsDefaulter",
    "start": 110,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 134,
    "end": 135
  },
  {
    "type": "Numeric",
    "value": "1111",
    "start": 136,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 140,
    "end": 141
  }
]
```
