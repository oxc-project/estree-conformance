__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 14
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 15,
          "end": 17
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 17
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 17
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 18
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
    "value": "class",
    "start": 7,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 13,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 16,
    "end": 17
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportAllDeclaration",
      "exported": null,
      "source": {
        "type": "Literal",
        "value": "./a",
        "raw": "'./a'",
        "start": 19,
        "end": 24
      },
      "attributes": [],
      "exportKind": "type",
      "start": 0,
      "end": 25
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 26
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
    "type": "Identifier",
    "value": "type",
    "start": 7,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 14,
    "end": 18
  },
  {
    "type": "String",
    "value": "'./a'",
    "start": 19,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 24,
    "end": 25
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 10
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 10
          },
          "importKind": "value",
          "start": 9,
          "end": 10
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./b",
        "raw": "'./b'",
        "start": 18,
        "end": 23
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 24
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 25,
        "end": 26
      },
      "directive": null,
      "start": 25,
      "end": 27
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 27
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 0,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 9,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 11,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 13,
    "end": 17
  },
  {
    "type": "String",
    "value": "'./b'",
    "start": 18,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 23,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 26,
    "end": 27
  }
]
```
