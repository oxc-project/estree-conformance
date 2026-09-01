__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 175,
              "end": 176
            },
            "init": null,
            "definite": false,
            "start": 175,
            "end": 176
          }
        ],
        "declare": false,
        "start": 169,
        "end": 176
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null,
        "start": 180,
        "end": 181
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 189,
                "end": 190
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 189,
              "end": 192
            },
            "directive": null,
            "start": 189,
            "end": 193
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 198,
              "end": 199
            },
            "directive": null,
            "start": 198,
            "end": 200
          }
        ],
        "start": 183,
        "end": 202
      },
      "start": 164,
      "end": 202
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 164,
  "end": 202
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "for",
    "start": 164,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 168,
    "end": 169
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 169,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 175,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 177,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 183,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 192,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 201,
    "end": 202
  }
]
```
