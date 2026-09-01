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
            "name": "declare",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 13,
                "end": 19
              },
              "start": 11,
              "end": 19
            },
            "start": 4,
            "end": 19
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 19
        }
      ],
      "declare": false,
      "start": 0,
      "end": 20
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
            "name": "module",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 33,
                "end": 39
              },
              "start": 31,
              "end": 39
            },
            "start": 25,
            "end": 39
          },
          "init": null,
          "definite": false,
          "start": 25,
          "end": 39
        }
      ],
      "declare": false,
      "start": 21,
      "end": 40
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "declare",
        "optional": false,
        "typeAnnotation": null,
        "start": 42,
        "end": 49
      },
      "directive": null,
      "start": 42,
      "end": 49
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "module",
        "optional": false,
        "typeAnnotation": null,
        "start": 101,
        "end": 107
      },
      "directive": null,
      "start": 101,
      "end": 107
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": "my external module",
        "raw": "\"my external module\"",
        "start": 159,
        "end": 179
      },
      "directive": null,
      "start": 159,
      "end": 179
    },
    {
      "type": "BlockStatement",
      "body": [],
      "start": 207,
      "end": 210
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 253
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
    "value": "declare",
    "start": 4,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 11,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 13,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 19,
    "end": 20
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 21,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 25,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 31,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 33,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 42,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 101,
    "end": 107
  },
  {
    "type": "String",
    "value": "\"my external module\"",
    "start": 159,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 209,
    "end": 210
  }
]
```
