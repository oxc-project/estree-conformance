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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 92,
            "end": 93
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 96,
              "end": 102
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 96,
            "end": 104
          },
          "definite": false,
          "start": 92,
          "end": 104
        }
      ],
      "declare": false,
      "start": 86,
      "end": 104
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 140,
            "end": 141
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 144,
              "end": 150
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 144,
            "end": 152
          },
          "definite": false,
          "start": 140,
          "end": 152
        }
      ],
      "declare": false,
      "start": 134,
      "end": 152
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 182,
            "end": 183
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 186,
            "end": 187
          },
          "definite": false,
          "start": 182,
          "end": 187
        }
      ],
      "declare": false,
      "start": 178,
      "end": 187
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": null,
          "start": 189,
          "end": 190
        },
        "operator": "==",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 194,
          "end": 195
        },
        "start": 189,
        "end": 195
      },
      "directive": null,
      "start": 189,
      "end": 195
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 86,
  "end": 204
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 86,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 94,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 96,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 103,
    "end": 104
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 134,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 142,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 144,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 151,
    "end": 152
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 178,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 186,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 191,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 194,
    "end": 195
  }
]
```
