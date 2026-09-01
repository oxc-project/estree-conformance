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
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 18,
            "end": 25
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 28,
            "end": 30
          },
          "definite": false,
          "start": 18,
          "end": 30
        }
      ],
      "declare": false,
      "start": 14,
      "end": 31
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "exports",
          "optional": false,
          "typeAnnotation": null,
          "start": 62,
          "end": 69
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "SomeName",
          "optional": false,
          "typeAnnotation": null,
          "start": 70,
          "end": 78
        },
        "optional": false,
        "computed": false,
        "start": 62,
        "end": 78
      },
      "directive": null,
      "start": 62,
      "end": 79
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
            "name": "myString",
            "optional": false,
            "typeAnnotation": null,
            "start": 119,
            "end": 127
          },
          "init": {
            "type": "Literal",
            "value": "str",
            "raw": "'str'",
            "start": 130,
            "end": 135
          },
          "definite": false,
          "start": 119,
          "end": 135
        }
      ],
      "declare": false,
      "start": 113,
      "end": 136
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 14,
  "end": 136
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 14,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 18,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 62,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "SomeName",
    "start": 70,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 78,
    "end": 79
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 113,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "myString",
    "start": 119,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 128,
    "end": 129
  },
  {
    "type": "String",
    "value": "'str'",
    "start": 130,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 135,
    "end": 136
  }
]
```
