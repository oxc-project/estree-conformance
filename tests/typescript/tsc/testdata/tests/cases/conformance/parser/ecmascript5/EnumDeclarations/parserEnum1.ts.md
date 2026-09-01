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
          "name": "SignatureFlags",
          "optional": false,
          "typeAnnotation": null,
          "start": 16,
          "end": 30
        },
        "body": {
          "type": "TSEnumBody",
          "members": [
            {
              "type": "TSEnumMember",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "None",
                "optional": false,
                "typeAnnotation": null,
                "start": 41,
                "end": 45
              },
              "initializer": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 48,
                "end": 49
              },
              "computed": false,
              "start": 41,
              "end": 49
            },
            {
              "type": "TSEnumMember",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "IsIndexer",
                "optional": false,
                "typeAnnotation": null,
                "start": 59,
                "end": 68
              },
              "initializer": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 71,
                "end": 72
              },
              "computed": false,
              "start": 59,
              "end": 72
            },
            {
              "type": "TSEnumMember",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "IsStringIndexer",
                "optional": false,
                "typeAnnotation": null,
                "start": 82,
                "end": 97
              },
              "initializer": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 100,
                  "end": 101
                },
                "operator": "<<",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 105,
                  "end": 106
                },
                "start": 100,
                "end": 106
              },
              "computed": false,
              "start": 82,
              "end": 106
            },
            {
              "type": "TSEnumMember",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "IsNumberIndexer",
                "optional": false,
                "typeAnnotation": null,
                "start": 116,
                "end": 131
              },
              "initializer": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 134,
                  "end": 135
                },
                "operator": "<<",
                "right": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 139,
                  "end": 140
                },
                "start": 134,
                "end": 140
              },
              "computed": false,
              "start": 116,
              "end": 140
            }
          ],
          "start": 31,
          "end": 147
        },
        "const": false,
        "declare": false,
        "start": 11,
        "end": 147
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 4,
      "end": 147
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 4,
  "end": 147
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 4,
    "end": 10
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 11,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "SignatureFlags",
    "start": 16,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 31,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "None",
    "start": 41,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 46,
    "end": 47
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 49,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "IsIndexer",
    "start": 59,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 69,
    "end": 70
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 72,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "IsStringIndexer",
    "start": 82,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 98,
    "end": 99
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 102,
    "end": 104
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 106,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "IsNumberIndexer",
    "start": 116,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 132,
    "end": 133
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 136,
    "end": 138
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 146,
    "end": 147
  }
]
```
