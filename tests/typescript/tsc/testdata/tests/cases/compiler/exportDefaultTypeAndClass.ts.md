__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 21,
          "end": 24
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 25,
          "end": 27
        },
        "abstract": false,
        "declare": false,
        "start": 15,
        "end": 27
      },
      "exportKind": "value",
      "start": 0,
      "end": 27
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 33,
        "end": 36
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [],
        "start": 39,
        "end": 41
      },
      "declare": false,
      "start": 28,
      "end": 41
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 57,
        "end": 60
      },
      "exportKind": "value",
      "start": 42,
      "end": 60
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 60
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
    "type": "Keyword",
    "value": "class",
    "start": 15,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 21,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 26,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 28,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 33,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 40,
    "end": 41
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 42,
    "end": 48
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 49,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 57,
    "end": 60
  }
]
```
