__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 20
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 23,
                "end": 24
              },
              "typeAnnotation": null,
              "accessibility": null,
              "static": false,
              "start": 23,
              "end": 24
            }
          ],
          "start": 21,
          "end": 26
        },
        "declare": false,
        "start": 7,
        "end": 26
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 26
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
    "value": "export",
    "start": 0,
    "end": 6
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 7,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 17,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 23,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 25,
    "end": 26
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
        "value": "file1",
        "raw": "\"file1\"",
        "start": 14,
        "end": 21
      },
      "attributes": [],
      "exportKind": "value",
      "start": 0,
      "end": 21
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 26,
            "end": 27
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 30,
            "end": 31
          },
          "definite": false,
          "start": 26,
          "end": 31
        }
      ],
      "declare": false,
      "start": 22,
      "end": 32
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 32
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
    "type": "Punctuator",
    "value": "*",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 9,
    "end": 13
  },
  {
    "type": "String",
    "value": "\"file1\"",
    "start": 14,
    "end": 21
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 22,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 28,
    "end": 29
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 31,
    "end": 32
  }
]
```
