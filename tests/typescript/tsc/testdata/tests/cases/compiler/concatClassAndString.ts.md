__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 64,
        "end": 65
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 66,
        "end": 69
      },
      "abstract": false,
      "declare": false,
      "start": 58,
      "end": 69
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 71,
          "end": 72
        },
        "right": {
          "type": "Literal",
          "value": "",
          "raw": "''",
          "start": 76,
          "end": 78
        },
        "start": 71,
        "end": 78
      },
      "directive": null,
      "start": 71,
      "end": 79
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 58,
  "end": 79
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 58,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 68,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 73,
    "end": 75
  },
  {
    "type": "String",
    "value": "''",
    "start": 76,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 78,
    "end": 79
  }
]
```
