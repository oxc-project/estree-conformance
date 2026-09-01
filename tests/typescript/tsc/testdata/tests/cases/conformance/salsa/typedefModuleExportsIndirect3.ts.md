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
            "name": "o",
            "optional": false,
            "typeAnnotation": null,
            "start": 41,
            "end": 42
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 45,
            "end": 47
          },
          "definite": false,
          "start": 41,
          "end": 47
        }
      ],
      "declare": false,
      "start": 35,
      "end": 48
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
            "start": 49,
            "end": 55
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 56,
            "end": 63
          },
          "optional": false,
          "computed": false,
          "start": 49,
          "end": 63
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "o",
          "optional": false,
          "typeAnnotation": null,
          "start": 66,
          "end": 67
        },
        "start": 49,
        "end": 67
      },
      "directive": null,
      "start": 49,
      "end": 68
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 35,
  "end": 68
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
    "value": "o",
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
    "type": "Punctuator",
    "value": "{",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 47,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 49,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 55,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 56,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 64,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 67,
    "end": 68
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
