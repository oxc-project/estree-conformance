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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 13
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 13
        }
      ],
      "declare": true,
      "start": 0,
      "end": 14
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "/=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 15,
          "end": 16
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 20,
          "end": 21
        },
        "start": 15,
        "end": 21
      },
      "directive": null,
      "start": 15,
      "end": 22
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 41,
          "end": 42
        },
        "right": {
          "type": "Literal",
          "value": null,
          "raw": "/=/",
          "regex": {
            "pattern": "=",
            "flags": ""
          },
          "start": 45,
          "end": 48
        },
        "start": 41,
        "end": 48
      },
      "directive": null,
      "start": 41,
      "end": 49
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 68
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 13,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "/=",
    "start": 17,
    "end": 19
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 43,
    "end": 44
  },
  {
    "type": "RegularExpression",
    "value": "/=/",
    "regex": {
      "flags": "",
      "pattern": "="
    },
    "start": 45,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 48,
    "end": 49
  }
]
```
