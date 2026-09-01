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
            "name": "dummy",
            "optional": false,
            "typeAnnotation": null,
            "start": 41,
            "end": 46
          },
          "init": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 49,
            "end": 50
          },
          "definite": false,
          "start": 41,
          "end": 50
        }
      ],
      "declare": false,
      "start": 35,
      "end": 51
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
            "name": "module",
            "optional": false,
            "typeAnnotation": null,
            "start": 52,
            "end": 58
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 59,
            "end": 66
          },
          "optional": false,
          "computed": false,
          "start": 52,
          "end": 66
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "dummy",
          "optional": false,
          "typeAnnotation": null,
          "start": 69,
          "end": 74
        },
        "start": 52,
        "end": 74
      },
      "directive": null,
      "start": 52,
      "end": 75
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 35,
  "end": 75
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 35,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "dummy",
    "start": 41,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 47,
    "end": 48
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 50,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 52,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 59,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 67,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "dummy",
    "start": 69,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 74,
    "end": 75
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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 85,
            "end": 86
          },
          "init": null,
          "definite": false,
          "start": 85,
          "end": 86
        }
      ],
      "declare": false,
      "start": 81,
      "end": 86
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 81,
  "end": 86
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 81,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 85,
    "end": 86
  }
]
```
