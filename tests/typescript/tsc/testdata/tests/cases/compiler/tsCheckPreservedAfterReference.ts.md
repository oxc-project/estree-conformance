__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 45,
            "end": 46
          },
          "init": {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 49,
            "end": 51
          },
          "definite": false,
          "start": 45,
          "end": 51
        }
      ],
      "declare": false,
      "start": 41,
      "end": 52
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
          "start": 53,
          "end": 54
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 57,
          "end": 58
        },
        "start": 53,
        "end": 58
      },
      "directive": null,
      "start": 53,
      "end": 59
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 41,
  "end": 60
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "let",
    "start": 41,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 47,
    "end": 48
  },
  {
    "type": "String",
    "value": "''",
    "start": 49,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 55,
    "end": 56
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 58,
    "end": 59
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 45,
            "end": 46
          },
          "init": {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 49,
            "end": 51
          },
          "definite": false,
          "start": 45,
          "end": 51
        }
      ],
      "declare": false,
      "start": 41,
      "end": 52
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 53,
          "end": 54
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 57,
          "end": 58
        },
        "start": 53,
        "end": 58
      },
      "directive": null,
      "start": 53,
      "end": 59
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 41,
  "end": 59
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "let",
    "start": 41,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 47,
    "end": 48
  },
  {
    "type": "String",
    "value": "''",
    "start": 49,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 55,
    "end": 56
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 58,
    "end": 59
  }
]
```
