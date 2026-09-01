__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "TSAsExpression",
        "expression": {
          "type": "ClassExpression",
          "decorators": [],
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 22,
            "end": 25
          },
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [],
            "start": 26,
            "end": 28
          },
          "abstract": false,
          "declare": false,
          "start": 16,
          "end": 28
        },
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 32,
          "end": 35
        },
        "start": 16,
        "end": 35
      },
      "exportKind": "value",
      "start": 0,
      "end": 37
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 37
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 7,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 15,
    "end": 16
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 16,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 22,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 27,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 29,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 32,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 36,
    "end": 37
  }
]
```
