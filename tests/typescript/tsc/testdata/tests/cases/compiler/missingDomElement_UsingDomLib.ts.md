__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "HTMLMissingElement",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 28
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 29,
        "end": 31
      },
      "declare": false,
      "start": 0,
      "end": 31
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "TSAsExpression",
          "expression": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 35,
              "end": 37
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 42,
              "end": 45
            },
            "start": 34,
            "end": 45
          },
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "HTMLMissingElement",
              "optional": false,
              "typeAnnotation": null,
              "start": 49,
              "end": 67
            },
            "typeArguments": null,
            "start": 49,
            "end": 67
          },
          "start": 34,
          "end": 67
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "textContent",
          "optional": false,
          "typeAnnotation": null,
          "start": 69,
          "end": 80
        },
        "optional": false,
        "computed": false,
        "start": 33,
        "end": 80
      },
      "directive": null,
      "start": 33,
      "end": 81
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 81
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "HTMLMissingElement",
    "start": 10,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 39,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 42,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 46,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "HTMLMissingElement",
    "start": 49,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 68,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "textContent",
    "start": 69,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 80,
    "end": 81
  }
]
```
