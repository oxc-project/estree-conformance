__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSEnumDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Animals",
          "optional": false,
          "typeAnnotation": null,
          "start": 12,
          "end": 19
        },
        "body": {
          "type": "TSEnumBody",
          "members": [
            {
              "type": "TSEnumMember",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Cat",
                "optional": false,
                "typeAnnotation": null,
                "start": 23,
                "end": 26
              },
              "initializer": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 29,
                "end": 30
              },
              "computed": false,
              "start": 23,
              "end": 30
            }
          ],
          "start": 20,
          "end": 32
        },
        "const": false,
        "declare": false,
        "start": 7,
        "end": 32
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 32
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSEnumDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Animals",
          "optional": false,
          "typeAnnotation": null,
          "start": 45,
          "end": 52
        },
        "body": {
          "type": "TSEnumBody",
          "members": [
            {
              "type": "TSEnumMember",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Dog",
                "optional": false,
                "typeAnnotation": null,
                "start": 56,
                "end": 59
              },
              "initializer": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 62,
                "end": 63
              },
              "computed": false,
              "start": 56,
              "end": 63
            }
          ],
          "start": 53,
          "end": 65
        },
        "const": false,
        "declare": false,
        "start": 40,
        "end": 65
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 33,
      "end": 65
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSEnumDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Animals",
          "optional": false,
          "typeAnnotation": null,
          "start": 78,
          "end": 85
        },
        "body": {
          "type": "TSEnumBody",
          "members": [
            {
              "type": "TSEnumMember",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "CatDog",
                "optional": false,
                "typeAnnotation": null,
                "start": 89,
                "end": 95
              },
              "initializer": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Cat",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 98,
                  "end": 101
                },
                "operator": "|",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Dog",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 104,
                  "end": 107
                },
                "start": 98,
                "end": 107
              },
              "computed": false,
              "start": 89,
              "end": 107
            }
          ],
          "start": 86,
          "end": 109
        },
        "const": false,
        "declare": false,
        "start": 73,
        "end": 109
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 66,
      "end": 109
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 109
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
    "value": "enum",
    "start": 7,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "Animals",
    "start": 12,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 20,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "Cat",
    "start": 23,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 27,
    "end": 28
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 31,
    "end": 32
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 33,
    "end": 39
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 40,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "Animals",
    "start": 45,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 53,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "Dog",
    "start": 56,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 60,
    "end": 61
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 64,
    "end": 65
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 66,
    "end": 72
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 73,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "Animals",
    "start": 78,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "CatDog",
    "start": 89,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 96,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "Cat",
    "start": 98,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "Dog",
    "start": 104,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 108,
    "end": 109
  }
]
```
