__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Adapter",
              "optional": false,
              "typeAnnotation": null,
              "start": 46,
              "end": 53
            },
            "init": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 56,
              "end": 58
            },
            "definite": false,
            "start": 46,
            "end": 58
          }
        ],
        "declare": false,
        "start": 40,
        "end": 59
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 33,
      "end": 59
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
            "name": "Adapter",
            "optional": false,
            "typeAnnotation": null,
            "start": 61,
            "end": 68
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "prop",
            "optional": false,
            "typeAnnotation": null,
            "start": 69,
            "end": 73
          },
          "optional": false,
          "computed": false,
          "start": 61,
          "end": 73
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [],
          "start": 76,
          "end": 78
        },
        "start": 61,
        "end": 78
      },
      "directive": null,
      "start": 61,
      "end": 79
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
            "name": "Adapter",
            "optional": false,
            "typeAnnotation": null,
            "start": 115,
            "end": 122
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "asyncMethod",
            "optional": false,
            "typeAnnotation": null,
            "start": 123,
            "end": 134
          },
          "optional": false,
          "computed": false,
          "start": 115,
          "end": 134
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
            "start": 148,
            "end": 150
          },
          "expression": false,
          "start": 137,
          "end": 150
        },
        "start": 115,
        "end": 150
      },
      "directive": null,
      "start": 115,
      "end": 150
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 33,
  "end": 150
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 33,
    "end": 39
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 40,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "Adapter",
    "start": 46,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "Adapter",
    "start": 61,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 68,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 69,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Identifier",
    "value": "Adapter",
    "start": 115,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 122,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "asyncMethod",
    "start": 123,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 135,
    "end": 136
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 137,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 149,
    "end": 150
  }
]
```
